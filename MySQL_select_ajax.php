<?php
header("content-type:text/html;charset=utf-8");
    //1.ͨ��php������MySQL���ݿ�
    $conn=mysql_connect('localhost','root','924');

    //2.ѡ�����ݿ�
    mysql_select_db('my');

    //�����ַ���
    mysql_query('set names utf8');

    //����ӱ��յ�
    $username1='user1';
    $password1='123';
    $arr=array();
    $i=0;

    //ͨ��php����select����
    $sql="select * from class order by id";

    //ִ��sql���
    $result=mysql_query($sql);

    //�ӽ������ȡ�����
    while($row=mysql_fetch_assoc($result)){
        $arr[$i]=$row;
        $i++;
    };
    echo json_encode($arr);
    //�ͷ�������Դ
    mysql_close($conn);
?>