<?php
/**
 * @Author: Marte
 * @Date:   2018-04-10 11:34:55
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-04-10 14:45:02
 */
    $servername="localhost";
    $username="root";
    $password="";
    $dbname="kdl";
    $conn=new mysqli($servername,$username,$password,$dbname);
    if($conn->connect_error){
        die("连接失败：".$conn->connect_error);
    }
    $conn->set_charset('utf8');
    $name=$_GET['u_name'];
    $pwd=$_GET['u_pwd'];
    $sql="select * from kdl_users where username='$name'";
    $res=$conn->query($sql);
    if($res->num_rows>0){
         //释放查询结果集
        $res->close();
        $sql2="select password from kdl_users where username='$name'";
        $res_pwd=$conn->query($sql2);//获取查询结果集
        $res_cont=$res_pwd->fetch_assoc();//得到第一个结果
        if($res_cont['password']===md5($pwd)){
            echo "success_login";
        }
        else{
            echo "pwd_fail";
        }
        $res_pwd->close();
    }
    else{
        echo "user_fail";
    }
    $conn->close();
?>