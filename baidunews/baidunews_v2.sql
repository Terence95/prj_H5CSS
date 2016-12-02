-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-11-22 09:49:04
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `baidunews_v2`
--

-- --------------------------------------------------------

--
-- 表的结构 `news_list`
--

CREATE TABLE IF NOT EXISTS `news_list` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL,
  `news_type` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_list`
--

INSERT INTO `news_list` (`id`, `title`, `img_url`, `content`, `from`, `time`, `news_type`) VALUES
(21, '阿里越做越重“自营化”，京东却越做越轻“平台化”', 'http://d.hiphotos.baidu.com/news/crop%3D0%2C35%2C705%2C423%3Bw%3D638/sign=a0994daff103918fc39e678a6c0d0aa4/024f78f0f736afc3ba8f252ab519ebc4b64512f9.jpg', '马云说坚定不看好自营B2C模式，术业有专攻，而不是什么都自己大包干。刘强东认为用户只关注商品价格和服...', '李成东', '2015-09-21 11:06:00', 'news_recommend'),
(22, '你必须知道的SEO细分领域项目汇总1', 'http://c.hiphotos.baidu.com/news/crop%3D82%2C1%2C447%2C268%3Bw%3D638/sign=bf64663526a446236a85ff22a51a4022/42a98226cffc1e1758c4907e4c90f603738de902.jpg', '因为自己也在从事网络营销业务，所以会经常分析一些的营销手法，今天卢松松整理了一下在百度体系下SEO的...', '卢松松', '2015-09-21 02:34:00', 'news_baijia'),
(32, 'local', 'http://t10.baidu.com/it/u=1237803879,2789922536&fm=170&s=ECCA722BC0C26CF9CC1D2DD601&w=218&h=146&img.JPEG', '4区今起试用“北京通”养老卡 135万老人下月都能拿到卡', '百度新闻', '2016-10-29 17:33:28', 'news_local'),
(33, '互联网测试', 'http://t10.baidu.com/it/u=2018859843,2127043567&fm=170&s=29D2E34A26A6111707A4A5BA03&w=218&h=146&img.JPEG', '张小龙谈管理：大公司应警惕KPI和流程', '社交', '2016-10-29 17:36:14', 'news_internet'),
(34, '科技添加，修改', 'http://t11.baidu.com/it/u=4196521804,4213609118&fm=170&s=80F27B27EA223A0702A8D10B01&w=218&h=146&img.JPG', '你忽略了的精彩：微软的VR其实超厉害的！', '微软', '2016-10-29 09:39:55', 'news_science'),
(35, '测试添加2', 'http://t12.baidu.com/it/u=525996533,2168778499&fm=170&s=62899B452F5460574219C1FA03&w=218&h=146&img.JPEG', '婆媳的各种谬论，多少媳妇躺着中枪！22', '珍爱网', '2016-10-29 09:43:18', 'news_woman'),
(37, '测试图片添加11', 'http://t12.baidu.com/it/u=1183465622,3740308858&fm=170&s=30F27184521E39D454F0591303008080&w=218&h=146&img.JPEG', '好多年前在上海 和分手多年的女友偶遇 俩-冷笑话精选 分享身边的爆笑事儿', '图片', '2016-10-29 09:54:24', 'news_picture'),
(38, '添加2', 'http://t10.baidu.com/it/u=1047933753,3575755520&fm=170&s=71B2C87D1AD67A575E3CA12F03004003&w=218&h=146&img.JPEG', '前几天坐车回乡下，路上，见有两个人骑着摩-冷笑话精选 分享身边的爆笑事儿', '图片', '2016-10-29 17:55:05', 'news_picture'),
(39, '测试添加军事1', 'http://t12.baidu.com/it/u=3115251602,607729166&fm=170&s=5E3686450826220306897D0503&w=218&h=146&img.JPEG', '战略观察：中国对这款导弹可谓到了求贤若渴地步，研发却频频失败', '军事', '2016-10-29 17:56:34', 'news_military'),
(40, '测试添加2，修改1次', 'http://t10.baidu.com/it/u=3532890351,3942035204&fm=170&s=7F3B2AC366F41E27749DD50E01&w=218&h=146&img.JPEG', '歼-10是以色列狮式的翻版？外形神似技术却领先太多', '军事', '2016-10-29 09:57:09', 'news_military'),
(41, '社会新闻1，修改1次', 'http://t12.baidu.com/it/u=1602274643,381010576&fm=170&s=3522D7155C14C7CE&w=218&h=146&img.JPEG', '山东一景观河道变“捕鱼场”上百市民下水捕鱼', '山东', '2016-10-29 09:59:37', 'news_society'),
(42, '社会新闻2', 'http://t11.baidu.com/it/u=1100060653,4147969986&fm=170&s=BB3045878A321C9E92956DA303&w=218&h=146&img.JPEG', '雨天路滑货车栽入山坡下 赤壁消防成功处置(图)', '社会', '2016-10-29 18:00:39', 'news_society'),
(43, '娱乐新闻1，修改1', 'http://t11.baidu.com/it/u=2590284028,2483055563&fm=170&s=28B04D975AA33492122001B203&w=218&h=146&img.JPG', '鲍勃-迪伦打破沉默 将接受诺贝尔文学奖', '诺贝尔文学奖', '2016-10-29 10:01:15', 'news_entertainment'),
(44, '娱乐新闻2', 'http://t11.baidu.com/it/u=3181658836,71144317&fm=170&s=FDB427D0587285F942ADA40A03&w=218&h=146&img.JPEG', '从泳裤没干到沙子游泳，看看大白杨又说了啥神语录', '真正男子汉', '2016-10-29 18:02:06', 'news_entertainment'),
(46, '孟达染红发', 'http://t11.baidu.com/it/u=2996276305,2481481060&fm=170&s=3841994E311606761861C19903&w=218&h=146&img.PNG', '孟达染红发套路教练：鸿运当头这是战术 ', '体育网', '2016-10-29 18:20:47', 'news_recommend'),
(48, '里皮办公室', 'http://t10.baidu.com/it/u=3127035396,2844390549&fm=170&s=758E98565672258C5EB307B203&w=218&h=146&img.JPEG', '足协同意广州设里皮办公室 合同一点未解释清楚', '搜狐热闻', '2016-10-29 18:22:59', 'news_recommend'),
(52, '林书豪21+9+9+1', 'http://t11.baidu.com/it/u=1346601709,1026922874&amp;fm=170&amp;s=25707B86E763BCF42E4D891803&amp;w=218&amp;h=146&amp;img.JPEG', '林书豪21+9+9乔治准两双 篮网灭步行者主场首胜', 'NBA', '2016-10-29 10:26:22', 'news_recommend'),
(54, '最新版秋裤地图&lt;script&gt;alert(1)&lt;/script&gt;', 'http://t10.baidu.com/it/u=2966824632,2541961513&amp;fm=170&amp;s=6FA4824454D04060562335D803&amp;w=218&amp;h=146&amp;img.JPEG', '最新版秋裤地图来了！全国多地气温跌破冰点', '搜狐要闻', '2016-10-29 10:42:42', 'news_recommend'),
(60, '数据3', 'http://d.hiphotos.baidu.com/news/crop%3D0%2C35%2C705%2C423%3Bw%3D638/sign=a0994daff103918fc39e678a6c0d0aa4/024f78f0f736afc3ba8f252ab519ebc4b64512f9.jpg', '测试加载更多&lt;img src=0 onerror=alert(1)&gt;', '更多', '2016-11-03 05:03:58', 'news_recommend'),
(61, '&lt;img src=0 onerror=alert(1)&gt;', '&lt;img src=0 onerror=alert(1)&gt;', '&lt;img src=0 onerror=alert(1)&gt;', '&lt;img src=0 onerror=alert(1)&gt;', '2016-11-22 13:47:12', 'news_baijia'),
(62, '&lt;script&gt;alert(1)&lt;/script&gt;', '&lt;script&gt;alert(1)&lt;/script&gt;', '&lt;script&gt;alert(1)&lt;/script&gt;1', '&lt;script&gt;alert(1)&lt;/script&gt;', '2016-11-22 07:33:54', 'news_recommend'),
(63, 'eval(&quot;x=10;y=20;document.write(x*y)&quot;)', 'eval(&quot;x=10;y=20;document.write(x*y)&quot;)', 'eval(&quot;x=10;y=20;document.write(x*y)&quot;)', 'eval(&quot;x=10;y=20;document.write(x*y)&quot;)', '2016-11-22 16:00:17', 'news_local'),
(64, 'eval(&quot;x=10;y=20;document.write(x*y)&quot;)', 'eval(&quot;x=10;y=20;document.write(x*y)&quot;)', 'eval(&quot;x=10;y=20;document.write(x*y)&quot;)', 'eval(&quot;x=10;y=20;document.write(x*y)&quot;)', '2016-11-22 16:23:39', 'news_science');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `userid` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`userid`, `username`, `password`) VALUES
(12, 'admin', '21232f297a57a5a743894a0e4a801fc3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news_list`
--
ALTER TABLE `news_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news_list`
--
ALTER TABLE `news_list`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=65;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=24;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
