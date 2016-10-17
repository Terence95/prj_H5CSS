<?php
    header("Content-type:application/json;charset=utf-8");
    require_once('db.php');
    // $link = mysqli_connect('localhost','root','','baidunews',3306);

    if ($link) {
        $newsid = $_GET['newsid'];

        mysqli_query($link,"SET NAMES utf8");
        $sql = "SELECT * FROM `news` WHERE `id` = '{$newsid}'";

        $result = mysqli_query($link, $sql);
        $senddata = array();

        while ($row = mysqli_fetch_assoc($result)) {
          # code...
          array_push($senddata,array(
              'id'=>$row['id'],
              'newstype'=>$row['newstype'],
              'newstitle'=>$row['newstitle'],
              'newsimg'=>$row['newsimg'],
              'newstime'=>$row['newstime'],
              'newssrc'=>$row['newssrc']
          ));
        }
        echo json_encode($senddata);

    }
    mysqli_close($link);
?>
