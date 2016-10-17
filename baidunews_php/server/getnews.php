<?php
      header("Content-type:application/json;charset=utf-8");

      // [{newstype:newstitle}];
      require_once('db.php');
      // $link = mysqli_connect('localhost','root','','baidunews',3306);
      if ($link) {
        # 执行成功过程
        // echo "in";
        // echo json_encode(array('连接信息' => '连接失败'));
          $newstype = $_GET['newstype'];
          if ($newstype) {
            $sql = "SELECT * FROM `news` WHERE `newstype` = '{$newstype}'";

            // 显示中文
            $result = mysqli_query($link, "SET NAMES utf8");
            // result就是查询结果
            $result = mysqli_query($link,$sql);

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

          // echo "a";
          echo json_encode($senddata);
        } else {
          $sql = "SELECT * FROM `news`";

          // 显示中文
          $result = mysqli_query($link, "SET NAMES utf8");
          // result就是查询结果
          $result = mysqli_query($link,$sql);

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

      } else {
        # 输出失败信息
        echo json_encode(array('连接信息' => '连接失败'));
      }
      mysqli_close($link);

      // $arr = array(
      //   'newsType' => '百家',
      //   'newsimg' => 'img/2.jpg',
      //   'newstime' => '2016-10-14',
      //   'newssrc' => '热点',
      //   'newstitle' => '测试动态数据1'
      // );

      // echo json_encode($arr);
?>
