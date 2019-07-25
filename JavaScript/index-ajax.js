/** 方法1：
 * 原生 js
 * 1. 如例：点击按钮 发送请求
 * 2. 创建ajax
 *    基本内容如下：
 *       创建连接 XMLHttpRequest 的一个实例
 *       设置请求的路径 url
 *       设置请求的数据  类型最好是json
 * 3.连接服务器
 *       open()方法  3个参数  请求方法 请求的路由  同/异步
 *       post方法 得设置请求报文头  便于解析
 * 4.发送数据
 *       send(data) 发送数据  参数类型是字符串
 * 5.接收响应
 *       判断请求是否成功  通过 状态值 和 状态码
 *       成功  则进行成功需要的操作
 *
 * 6.后台响应的数据 是 req.responseText
 *
 * 7.数据类型的统一：
 *   前端发送的数据是字符串  后台响应的也是字符串
 *   要掌握JSON.parse() 和 JSON.stringify()方法  进行相互转化
 * */

let btn = document.getElementById('test-button1');
let userName1 = document.getElementById('username1');
let passWord1 = document.getElementById('password1');

btn.onclick = function () {
    if (!checkForm1()) return false;

    let req = new XMLHttpRequest();
    let data = {
        "username":userName1.value,
        "password":passWord1.value,
    };
    let url = "http://localhost:8080";
    req.open('post',url,true);
    // req.setRequestHeader("content_Type","application/x-www-form-urlencoded");
    // 记住这个错
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    if (req) {
        req.send(JSON.stringify(data));
        req.onreadystatechange = function () {
            if (req.readyState === 4 && req.status === 200){
                success(req.responseText);
            }
        }
    }
};
// 请求成功后的操作
function success(data) {
    data = JSON.parse(data);
    alert(data.message);
}


// // 登录
// let userName = document.getElementById('username');
// let passWord = document.getElementById('password');
//
// document.getElementById('test-button').addEventListener('click',function () {
//    if (!checkForm()) return false;
//
//    let req1 = new XMLHttpRequest();
//    let data1 = {
//        "username":userName.value,
//        "password":passWord.value,
//    };
//    let url1 = "http://localhost:8080/signin";
//    req1.open('post',url1,true);
//    req1.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//    if (req1){
//        req1.send(JSON.stringify(data1));
//        req1.onreadystatechange = function () {
//            if (req1.readyState === 4 && req1.status === 200){
//                success1(req1.responseText);
//            }
//        }
//    }
// });
//
// function success1(data) {
//     data = JSON.parse(data);
//     alert(data.message);
// }