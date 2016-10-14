<?php
      header("Content-type:application/json;charset=utf-8");

      // [{newstype:newstitle}];
      $link = mysqli_connect('localhost','root','','baidunews',3306);
      if (!$link) {
        # code...
        echo json_encode(array('连接信息' => '连接失败'));
      } else {
        # code...
        echo json_encode(array('连接信息' => '连接成功'));
      }

      // $arr = array(
      //   'newsType' => '百家',
      //   'newsimg' => 'img/2.jpg',
      //   'newstime' => '2016-10-14',
      //   'newssrc' => '热点',
      //   'newstitle' => '测试动态数据1'
      // );

      // echo json_encode($arr);
?>
