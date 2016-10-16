<?php
    header("Content-type:application/json;charset=utf-8");
    // require_once('db.php');
    $link = mysqli_connect('localhost','root','','baidunews',3306);

    if ($link) {
       $newsid = $_POST['newsid'];

       mysqli_query($link,"SET NAMES utf8");
       // mysql 删除语句  
       $sql = "DELETE FROM `news` WHERE `news`.`id` = '{$newsid}'";

       mysqli_query($link, $sql);
       echo json_encode(array('删除状态'=>'成功'));
    }
    mysqli_close($link);
?>
