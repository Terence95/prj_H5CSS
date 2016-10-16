-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-10-16 15:32:59
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(8, '娱乐', '1112', 'img/1.jpg', '2016-10-15 00:00:00', '百度'),
(9, '社会', '习近平的"金砖时间"可以给我们哪些期待?', 'img/3.jpg', '2016-10-16 00:00:00', '新华社'),
(11, '精选', '新闻1', 'img/1.jpg', '2016-10-14 00:00:00', '来源1'),
(12, '精选', '新闻2', 'img/1.jpg', '2016-10-14 00:00:00', '来源2'),
(13, '精选', '新闻3', 'img/4.jpg', '2016-10-14 00:00:00', '来源3'),
(14, '百家', '百家新闻测试1', 'img/5.jpg', '2016-10-22 00:00:00', '热点1'),
(15, '百家', '百家新闻测试2', 'img/5.jpg', '2016-10-22 00:00:00', '热点2'),
(16, '百家', '百家新闻测试3', 'img/5.jpg', '2016-10-22 00:00:00', '热点2'),
(17, '百家', '百家新闻测试4', 'img/2.jpg', '2016-10-22 00:00:00', '热点2'),
(18, '本地', '本地新闻测试1', 'img/3.jpg', '2016-10-22 00:00:00', '热点2'),
(19, '社会', '社会测试数据1', 'img/7.jpg', '2016-10-22 00:00:00', '热点2'),
(20, '社会', '社会测试数据2', 'img/8.jpg', '2016-10-22 00:00:00', '热点2'),
(21, '军事', '军事测试数据1', 'img/j1.jpg', '2016-10-22 00:00:00', '军事1'),
(22, '军事', '军事测试数据2', 'img/j2.jpg', '2016-10-22 00:00:00', '军事2'),
(23, '军事', '军事测试数据3', 'img/j3.jpg', '2016-10-17 00:00:00', '军事3'),
(24, '军事', '军事测试数据4', 'img/j4.jpg', '2016-10-17 00:00:00', '军事4'),
(25, '军事', '军事测试数据5', 'img/j5.jpg', '2016-10-17 00:00:00', '军事5');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
