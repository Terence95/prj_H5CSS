<?php
    header("Content-type:application/json;charset=utf-8");
    require_once('db.php');
    // $link = mysqli_connect('localhost','root','','baidunews',3306);

    if ($link) {
        // 插入新闻
        //从前端传过来post结构的newstitle
        $newstitle = htmlspecialchars($_POST['newstitle']);
        $newstype = htmlspecialchars($_POST['newstype']);
        $newsimg = htmlspecialchars($_POST['newsimg']);
        $newstime = htmlspecialchars($_POST['newstime']);
        $newssrc = htmlspecialchars($_POST['newssrc']);

        $sql = "INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`, `newstime`, `newssrc`) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";

        mysqli_query($link,"SET NAMES utf8");
        $result = mysqli_query($link,$sql);
        // result返回查询语句
        echo json_encode(array('success'=>'ok'));
    }
?>
