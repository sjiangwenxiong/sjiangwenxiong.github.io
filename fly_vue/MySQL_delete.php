<?php
header("content-type:text/html;charset=utf-8");
    //1.通过php链接上MySQL数据库
    $conn=mysql_connect('localhost','root','924');

    //2.选择数据库
    mysql_select_db('my');

    //设置字符集
    mysql_query('set names utf8');

    //假设从表单收到
        $id = $_POST['id'];

    //通过php进行insert操作
    $sql="delete from class where id={$id}";

    //执行sql语句
    var_dump(mysql_query($sql));

    //释放连接资源
    mysql_close($conn);

    echo $id;
?>