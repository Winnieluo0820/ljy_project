<?php
/**
 * @Author: Marte
 * @Date:   2018-04-10 09:17:09
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-04-10 11:13:42
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
    $username=isset($_GET['username']) ? $_GET['username'] : null;
    $password=isset($_GET['password']) ? $_GET['password'] : null;
    $type=isset($_GET['type']) ? $_GET['type'] : null;
    $sql="select username from kdl_users where username='$username'";
    $res=$conn->query($sql);
    if($res->num_rows>0){
        echo 'fail';
    }
    else{
        if($type==='reg'){
            $password = md5($password);
            $sql="insert into kdl_users(username,password) values('$username','$password')";
            $res=$conn->query($sql);
            if($res){
                echo 'reg_success';
            }
            else{
                echo 'reg_fail';
            }
        }else{
            echo 'success';
        }
    }
?>