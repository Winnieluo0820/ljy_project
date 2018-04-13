<?php
/**
 * @Author: Marte
 * @Date:   2018-04-10 16:21:21
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-04-11 11:09:58
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
    $qty=isset($_GET['qty']) ? $_GET['qty'] : 28;
    $page=isset($_GET['page']) ? $_GET['page'] : 1;
    $rank_type=isset($_GET['rank_type']) ? $_GET['rank_type'] : 'sale_qty';
    $rank=isset($_GET['rank']) ? $_GET['rank'] : 'desc';
    $start_id=$qty*($page-1)+1;
    $sql1="select * from goods_information";
    $res1=$conn->query($sql1);
    $total_qty=$res1->num_rows;
    $sql2="select * from goods_information ORDER BY $rank_type $rank limit $start_id,$qty";
    $res2=$conn->query($sql2);
    $res2 = $res2->fetch_all(MYSQLI_ASSOC);
    $res=array(
        "total_qty"=>$total_qty,
        "data"=>$res2,
        "page"=>$page,
        "qty"=>$qty
    );
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>