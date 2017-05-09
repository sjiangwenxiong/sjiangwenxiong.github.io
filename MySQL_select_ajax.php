<?php
header("content-type:text/html;charset=utf-8");
    //1.通过php链接上MySQL数据库
    $conn=mysql_connect('localhost','root','924');

    //2.选择数据库
    mysql_select_db('my');

    //设置字符集
    mysql_query('set names utf8');

    //假设从表单收到
    $username1='user1';
    $password1='123';
    $arr=array();
    $i=0;

    //通过php进行select操作
    $sql="select * from class order by id";

    //执行sql语句
    $result=mysql_query($sql);

    //从结果集中取出结果
    while($row=mysql_fetch_assoc($result)){
        $arr[$i]=$row;
        $i++;
    };
    echo json_encode($arr);
    //释放连接资源
    mysql_close($conn);
?>