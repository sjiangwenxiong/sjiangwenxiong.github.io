<?php
header("content-type:text/html;charset=utf-8");
    //1.ͨ��php������MySQL���ݿ�
    $conn=mysql_connect('localhost','root','924');

    //2.ѡ�����ݿ�
    mysql_select_db('my');

    //�����ַ���
    mysql_query('set names utf8');

    //����ӱ��յ�
        $id = $_POST['id'];

    //ͨ��php����insert����
    $sql="delete from class where id={$id}";

    //ִ��sql���
    var_dump(mysql_query($sql));

    //�ͷ�������Դ
    mysql_close($conn);

    echo $id;
?>