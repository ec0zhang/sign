const http = require('http');
const url = require('url');

// 模块
const mysql = require('mysql');
// 创建连接的数据库
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'signin'
});
connection.connect();

// 注册
http.createServer(function (request, response) {
    if (request.method === 'POST') {
        let array = [];
        //每次提交都会收到数据，每次用post收到数据都会执行一次array
        request.on('data', function (chunk) {
            array.push(chunk);
            array = Buffer.concat(array);
            array = array.toString('utf8');
            array = JSON.parse(array);
            // console.log(array);

            // 设置要存储的信息
            let sql1 = 'insert into user (Username,Password) values(' + array.username + ',' + array.password + ')';
            connection.query(sql1, function (err, result) {
                if (err) {
                    console.log(err.message);
                    // return;
                }
                // console.log(result);
            });

            // connection.end();

        });


        request.on('end', function () {
            // 设置后台相应数据

            let res_data = {
                "message": "注册成功！"
            };
            response.writeHead(200, {'Access-Control-Allow-Origin': 'http://localhost:63342'}); //跨域
            response.end(JSON.stringify(res_data));
        })
    }

    //
    // if (request.method === 'POST' && request.url === 'http://localhost:8080/signin') {
    //     let array1 = [];
    //     //每次提交都会收到数据，每次用post收到数据都会执行一次array
    //     request.on('data1', function (chunk) {
    //         array1.push(chunk);
    //         array1 = Buffer.concat(array1);
    //         array1 = array1.toString('utf8');
    //         array1 = JSON.parse(array1);
    //         console.log(array1);
    //
    //         // 设置要查询的信息
    //         let sql2 = 'select * from user where Username=' + array1.username + 'and Password=' + array1.password;
    //         connection.query(sql2, function (err, result) {
    //             if (err) {
    //                 console.log(err.message);
    //                 return;
    //             }
    //             console.log(result);
    //         });
    //
    //     });
    //
    //
    //     request.on('end', function () {
    //         // 设置后台相应数据
    //
    //         let res_data = {
    //             "message": "登录成功！"
    //         };
    //         response.writeHead(200, {'Access-Control-Allow-Origin': 'http://localhost:63342'}); //跨域
    //         response.end(JSON.stringify(res_data));
    //     })
    // }

}).listen(8080, function () {
    console.log('http://localhost:8080');
});