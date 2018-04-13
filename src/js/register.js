/* 
* @Author: Marte
* @Date:   2018-04-10 09:05:13
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-10 11:29:09
*/
require(['config'],function(){
    require(['jquery','ljyBanner','common'],function($){
        let username=document.querySelector('.username');
        let password1=document.querySelector('.pwd1');
        let password2=document.querySelector('.pwd2');
        let btn_reg=document.querySelector('.btn_reg');
        //注册验证用户是否存在
        username.onblur=function(){
            let _username=username.value;   
            if(_username.trim()===""){
                username.parentNode.nextElementSibling.innerHTML='用户名不能为空';
                return false;
            }
            else{
               ajax({
                    url:'../api/register.php',
                    data:{username:_username},
                    success:function(data){
                        if(data==='fail'){
                            username.parentNode.nextElementSibling.innerHTML='该用户名已存在';
                            return false;
                        }
                        if(data==='success'){
                            username.parentNode.nextElementSibling.innerHTML='该用户名可用';
                            username.parentNode.nextElementSibling.style.color='#58bc58';
                        }
                    }
                }); 
            } 
        };
        username.onfocus=function(){
            username.parentNode.nextElementSibling.innerHTML='';
        };
        //密码是否合法
        password1.onblur=function(){
            let _pwd1=password1.value;
            if(!/(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{6,20}/i.test(_pwd1)){
                if(isDigit(_pwd1)){
                    password1.parentNode.nextElementSibling.innerHTML='密码不能全部为数字';
                }
                else{
                    password1.parentNode.nextElementSibling.innerHTML='密码不合法';
                }
                return false;
            }
            else{
                password1.parentNode.nextElementSibling.innerHTML='密码可用';
                password1.parentNode.nextElementSibling.style.color='#58bc58';
            }
        };
        function isDigit(s){
            var patrn=/^[0-9]{6,20}$/;
            if (!patrn.exec(s)){
                return false;
            }
            else{
                return true;
            } 
        }
        password1.onfocus=function(){
            password1.parentNode.nextElementSibling.innerHTML='';
        };
        password2.onblur=function(){
            let _pwd1=password1.value;
            let _pwd2=password2.value;
            if(_pwd2!=_pwd1){
                password2.parentNode.nextElementSibling.innerHTML='两次输入密码不一致';
                return false;
            }else{
                password2.parentNode.nextElementSibling.innerHTML='密码相同';
                password2.parentNode.nextElementSibling.style.color='#58bc58';
            }
        };
        password2.onfocus=function(){
            password2.parentNode.nextElementSibling.innerHTML='';
        };
        //注册
        btn_reg.onclick = function(){
            let _username=username.value;
            let _pwd1=password1.value;
            let _pwd2=password2.value;
            let _check=document.querySelector('.check');
            if(_username.trim()!=""&&_pwd1!=""&&_pwd2!=""){
                ajax({
                    url:'../api/register.php',
                    data:{
                        username:_username,
                        password:_pwd1,
                        type:'reg'
                    },
                    success:function(data){
                        if(data ==='reg_success'){
                            location.href="../html/login.html";
                        }else if(data==='reg_fail'){

                        }
                    }
                })
            }  
        }
    });
});
