/* 
* @Author: Marte
* @Date:   2018-04-10 11:32:32
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-10 14:48:47
*/
require(['config'],function(){
    require(['jquery','ljyBanner','common'],function($){
        let txt=document.querySelector('#username');
        let pwd=document.querySelector('#pwd');
        let btn_login=document.querySelector('.btn_login');
        let show=document.querySelector('.show');
        let status=[200,304];
        btn_login.onclick=function(){
            let _name=txt.value;
            let _pwd=pwd.value;
            let xhr=new XMLHttpRequest();
            xhr.onload=function(){
                if(status.includes(xhr.status)){
                    let res=xhr.responseText;
                    console.log(res);
                    if(res==='user_fail'){
                        show.innerHTML='不存在当前用户，请注册！';
                    }
                    else if(res==='pwd_fail'){
                        show.innerHTML='密码错误，请重试！';
                    }
                    else{
                        location.href='../index.html';
                    }
                }
            }
            xhr.open('get','../api/login.php?u_name='+_name+'&u_pwd='+_pwd,true);
            xhr.send();
        }
    });
});