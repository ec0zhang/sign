function checkForm() {
    let userName = document.getElementById('username');
    let userName_re = /^\w{3,10}$/;

    if (!(userName_re.test(userName.value))) {
        alert('用户名必须是3-10位的英文字母或数字');
        return false;
    }
    else return true;


}
function checkForm1() {
    let userName1 = document.getElementById('username1');
    let passWord1 = document.getElementById('password1');
    let passWord2 = document.getElementById('password2');

    let userName_re = /^\w{3,10}$/;
    if (!(userName_re.test(userName1.value))) {
        alert('用户名必须是3-10位的英文字母或数字');
        return false;
    }
    else if ((passWord1.length < 6 || passWord1.length >20)){
        alert('密码必须在6-20位之间');
        return false;
    }
    else if (passWord1.value !== passWord2.value){
        alert('两次输入的密码必须一样');
        return false;
    }
    else return true;
}