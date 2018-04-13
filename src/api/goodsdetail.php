<?php
/**
 * @Author: Marte
 * @Date:   2018-04-11 16:46:45
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-04-11 16:50:22
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
    $id=isset($_GET['id']) ? $_GET['id'] : 2;
    $sql2="select * from goods_information where id=$id";
    $res2=$conn->query($sql2);
    $res2 = $res2->fetch_all(MYSQLI_ASSOC);
    echo json_encode($res2,JSON_UNESCAPED_UNICODE);
?>