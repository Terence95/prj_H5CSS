-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-10-29 08:29:21
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `baidunews2`
--

-- --------------------------------------------------------

--
-- 表的结构 `news_baijia`
--

CREATE TABLE IF NOT EXISTS `news_baijia` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_baijia`
--

INSERT INTO `news_baijia` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(20, '中国科研机构、企业联手推激光显示', 'http://g.hiphotos.baidu.com/news/crop%3D0%2C77%2C1015%2C609%3Bw%3D638/sign=4a0d6fa08bb1cb132a266653e0647a79/a9d3fd1f4134970a4eeb146093cad1c8a6865de0.jpg', '全国平板显示器件标准化技术委员会激光显示标准工作组成立大会在青岛举行。', '9527', '2015-09-21 11:13:00'),
(21, '阿里越做越重“自营化”，京东却越做越轻“平台化”', 'http://d.hiphotos.baidu.com/news/crop%3D0%2C35%2C705%2C423%3Bw%3D638/sign=a0994daff103918fc39e678a6c0d0aa4/024f78f0f736afc3ba8f252ab519ebc4b64512f9.jpg', '马云说坚定不看好自营B2C模式，术业有专攻，而不是什么都自己大包干。刘强东认为用户只关注商品价格和服...', '李成东', '2015-09-21 11:06:00'),
(22, '你必须知道的SEO细分领域项目汇总', 'http://c.hiphotos.baidu.com/news/crop%3D82%2C1%2C447%2C268%3Bw%3D638/sign=bf64663526a446236a85ff22a51a4022/42a98226cffc1e1758c4907e4c90f603738de902.jpg', '因为自己也在从事网络营销业务，所以会经常分析一些的营销手法，今天卢松松整理了一下在百度体系下SEO的...', '卢松松', '2015-09-21 10:34:00'),
(24, '1112', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3016635725,3530505304&fm=58', 'sadfadsfa', 'saa', '2016-10-28 14:19:03');

-- --------------------------------------------------------

--
-- 表的结构 `news_entertainment`
--

CREATE TABLE IF NOT EXISTS `news_entertainment` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_entertainment`
--

INSERT INTO `news_entertainment` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(9, '测试添加到娱乐12', 'http://t12.baidu.com/it/u=3636587207,685483827&fm=170&s=57239D474C9205DC0ED1700603&w=218&h=146&img.JPEG', '大仓忠义吉高由里子度假被拍', '吉高由里子', '2016-10-28 10:18:48');

-- --------------------------------------------------------

--
-- 表的结构 `news_internet`
--

CREATE TABLE IF NOT EXISTS `news_internet` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_internet`
--

INSERT INTO `news_internet` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(3, '互联网测试添加12', 'http://t10.baidu.com/it/u=2513520303,3022131435&fm=170&s=54&w=218&h=146&img.PNG', '比达发布2016年Q3应用商店报告 BAT3占据9成市场份额', '新华社', '2016-10-28 06:44:10');

-- --------------------------------------------------------

--
-- 表的结构 `news_local`
--

CREATE TABLE IF NOT EXISTS `news_local` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_local`
--

INSERT INTO `news_local` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(9, '测试添加本地2', 'http://t12.baidu.com/it/u=1912067615,1551392616&fm=170&s=A7A3F20556FEEDCE1E8181AD03&w=218&h=146&img.JPEG', '北京最虐马拉松来了！冰雪中长跑挑战人体极限', 'Marathon', '2016-10-29 14:00:16');

-- --------------------------------------------------------

--
-- 表的结构 `news_military`
--

CREATE TABLE IF NOT EXISTS `news_military` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_military`
--

INSERT INTO `news_military` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(9, '测试添加到军事12', 'http://t10.baidu.com/it/u=791738004,2014202180&fm=170&s=5F322BC11C992E453031B88403&w=218&h=146&img.JPEG', '对俄罗斯祭出可摧毁法国的“撒旦-2”洲际导弹 美国人怎么看？', '八一', '2016-10-28 10:17:24');

-- --------------------------------------------------------

--
-- 表的结构 `news_picture`
--

CREATE TABLE IF NOT EXISTS `news_picture` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_picture`
--

INSERT INTO `news_picture` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(9, '测试添加到图片12', 'http://t12.baidu.com/it/u=766292366,848355411&fm=170&s=A6D072D86502594D029081520300F0F3&w=218&h=146&img.JPEG', '幼儿园教师一名,咯咯咯咯咯咯哒 最近-冷笑话精选 分享身边的爆笑事儿', '幼儿园', '2016-10-28 10:16:41');

-- --------------------------------------------------------

--
-- 表的结构 `news_recommend`
--

CREATE TABLE IF NOT EXISTS `news_recommend` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_recommend`
--

INSERT INTO `news_recommend` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(1, '习近平会见美国工商领袖和前高官代表11', 'http://t10.baidu.com/it/u=801221748,4160447269&fm=76', '习近平指出，中美关系的本质是互利共赢。中美两国在双边、地区、全球层面开展互利合作，不仅为两国和两国人民带来实实在在的利益，也为地区乃至世界和平、发展、繁荣作出重要贡献。放眼未来，中美双方应该合作和能够合作的领域将更加广阔。中美两国拥有许多重要共同利益，也存在一些分歧。只要双方从大处着眼，尊重和照顾彼此核心利益，避免战略误解误判，坚持以建设性方式妥善处理，分歧就可以得到管控，共同利益就可以得到维护。我们致力于同美方共同努力构建中美新型大国关系。能够实现这一目标，将是中美两国人民之幸，也是世界和平与发展之幸。', '网易', '2016-10-20 19:00:00'),
(2, '习近平六次访美：去过哪里，收获了什么？', 'http://y1.ifengimg.com/a/2015/0915/486dffa077da308size62_w548_h240.jpg', '国务委员杨洁篪8日接受了中央电视台英语频道的采访，着重介绍了习近平主席即将对美国进行国事访问和出席联合国成立70周年系列峰会的重要意义、主要目的和预期成果。杨洁篪表示，习近平主席此次访美将进一步加深中美两国人民的友谊，拓展双边各领域务实合作，推动中美关系取得更大发展。习近平主席出席联合国系列峰会，将全面阐述中国对国际秩序和国际关系的政策主张，充分展示中国为促进世界和平和全球发展事业作出的重要贡献。', '凤凰网', '2015-09-21 00:00:00'),
(3, '山东协警涉嫌绑架地产商之子致死 公安局里被抓', 'http://img1.cache.netease.com/catchpic/F/F1/F1A8EDF9E8FDD6490F5B8651C14ED740.jpg', '山东省潍坊市人大代表、诸城市（隶属潍坊的县级市）房地产商郑兆怀的独子郑雄（化名）死了。\n9月16日，多名诸城市公安局内部人士向澎湃新闻透露，涉嫌绑架、勒索并致郑雄死亡的嫌犯牛某和胡某某，系诸城市公安局治安大队三中队协警，已工作至少5年，两人在公安局上班时被抓获。\n据澎湃新闻调查，8月11日，这两名协警涉嫌从郑雄居住的小区将其绑走，后将郑雄扔进一口枯井，并向其父亲勒索100万元的赎金。3天之后，两人被抓。\n诸城市公安局宣传科杨姓负责人表示，案件还在侦查阶段，具体案情不便透露。', '网易', '2015-09-15 00:00:00'),
(4, '金正恩视察洪水灾区 朝鲜罕见公开受灾片段', 'http://img1.cache.netease.com/catchpic/D/D7/D786FDC80FA967E4F8A1142B8E50C137.jpg', '据报道，金正恩在当地进行指导时表示，军民团结一致，修建了几千户住宅，电力和铁路等基本上的复原建设已经结束，这是巨大的成果。', '网易', '2015-09-07 00:00:00'),
(5, '学了33天，8岁失明小鼓手开了场演唱会唱哭全场!', 'http://img1.cache.netease.com/catchpic/9/9D/9D9EFFC57998D52F568776D165F6C8BB.png', '梦想是什么？亲情是什么？爱，又是什么？\n\n他们都是人生中不可或缺的一部分，有了他们，你才有可能去做梦，有勇气去追逐，有机会去尝试那些未知的辛酸苦辣，更才有资格去爱！', '网易', '2015-09-17 00:00:00'),
(6, '董明珠：没制造业马云也完蛋！！！', 'http://img3.cache.netease.com/digi/2015/9/17/20150917173807198ad_550.jpg', '1.格力董事长董明珠日前在接受媒体采访时表示，“没制造业马云才真完蛋了”。董明珠表示：“如果实体经济不行，那一定是因为你自己无能。互联网对我们来说只有提高效率的作用，而不是一种伤害。比如说马云，他在他的轨道上，你在你的轨道上，不可能因为马云，制造业就完蛋了，反过来，没有制造业，马云他才真正完蛋了。” 董明珠还称，格力将会引入军事化管理，要留下的是认同格力文化的人，有梦想的人。', '网易', '2015-09-08 00:00:00'),
(8, '习近平访美详细日程披露', 'http://y1.ifengimg.com/a/2015/0915/486dffa077da308size62_w548_h240.jpg', '习近平1985年访问艾奥瓦州时，曾受到一户人家的招待。2012年故地重游时，时任中国国家副主席...', '热点', '2015-09-20 16:00:00'),
(17, '人民日报:遇到困难李嘉诚不能共度难关 不必挽留', 'http://img5.cache.netease.com/cnews/2015/9/21/20150921000410afca3_550.jpg', '这几天，亚洲首富李嘉诚深陷舆论漩涡，关于他从大陆撤资的争论，仍然在唇枪舌剑地进行着。是正常的运作，还是道义的失守？是合法的进退，还是无奈的撤离？义愤填膺的道德审视、唱衰中国的负面猜测、恐慌情绪的传染效应……所有这些元素，使得李嘉诚的撤离变得十分敏感。\n\n那么，如何看待李嘉诚“投资路线图”的转向？一些人选择从感性的角度来审视。改革开放以来，大陆的优惠政策、开放环境、巨大市场，是他走到今天的重要基石；而这几年来，由于转方式、调结构，大陆经济增速主动回调，李嘉诚的选择就显得尤为扎眼。从普通人的朴素情感出发，好的时候同享福，遇到困难却不能共度难关，这在观感上确实让一些人觉得有点说不过去。', '人民日报(北京)', '2015-09-21 00:04:37'),
(18, '美媒:&quot;中国版&quot;奥巴马特型演员走红 模仿惟妙惟肖', 'http://img1.cache.netease.com/catchpic/5/51/51C0FA3E5B33BC66D6AC8543846E3FB5.jpg', '今年29岁的肖基国在走红演艺术圈之前，打过工，做过保安。他在2012年参加了一个当时很火的电视选秀大赛，从此开始在网络短剧和小电影中出头露面。他还曾为整型医院做过广告，不过他坚称自己的长相是天生的。', '参考消息网(北京)', '2015-09-21 07:51:19'),
(19, '兰州工地挖出巨大化石：头骨眼窝可放下成人拳头', 'http://img2.cache.netease.com/cnews/2015/9/21/20150921101608f1930.jpg', '每日甘肃网-西部商报讯 “嘣”的一声，余师傅手中的铁铲被弹了回来，底下有东西，还是个硬家伙！旁边的白师傅急忙走了过去，用手拨拉，这一拨可了不得了，足足让随后赶到的各方专家及民警忙活了5个多小时。\n\n昨日下午，兰州九州工地上发现“古生物化石”的消息传出后，九州派出所民警及城关区文化馆的工作人员迅速赶到。在事发现场发现了大量疑似“古生物化石”，不过，到底是何种生物遗迹，尚不能准确鉴定。今日，兰州市文物局专家将赶赴现场为其辨明真身。', '每日甘肃网', '2016-10-29 17:13:51');

-- --------------------------------------------------------

--
-- 表的结构 `news_science`
--

CREATE TABLE IF NOT EXISTS `news_science` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_science`
--

INSERT INTO `news_science` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(9, '测试科技12', 'http://t12.baidu.com/it/u=2558303456,3116433355&fm=170&s=A83310983E713A88518446CD03&w=218&h=146&img.JPEG', '国美在线李俊涛：双11应回归零售品质 欲打造3个“十环双11”', '国美', '2016-10-28 06:49:19');

-- --------------------------------------------------------

--
-- 表的结构 `news_society`
--

CREATE TABLE IF NOT EXISTS `news_society` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_society`
--

INSERT INTO `news_society` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(9, '测试添加到社会12', 'http://t11.baidu.com/it/u=2284213186,2088170383&fm=170&s=1EF46D844C138CDE5EACA40203&w=218&h=146&img.JPEG', '宁波海关破获1.5万张水貂皮走私案', '海关', '2016-10-28 10:18:03');

-- --------------------------------------------------------

--
-- 表的结构 `news_woman`
--

CREATE TABLE IF NOT EXISTS `news_woman` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_woman`
--

INSERT INTO `news_woman` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(9, '测试添加到女人12', 'http://t11.baidu.com/it/u=165989221,175371486&fm=170&s=E4A827F0943319905814DD0A03&w=218&h=146&img.PNG', '最骄傲的事情，是遇见你', '人人网', '2016-10-28 10:16:00');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(20) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_password` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_password`) VALUES
(1, 'admin', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news_baijia`
--
ALTER TABLE `news_baijia`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_entertainment`
--
ALTER TABLE `news_entertainment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_internet`
--
ALTER TABLE `news_internet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_local`
--
ALTER TABLE `news_local`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_military`
--
ALTER TABLE `news_military`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_picture`
--
ALTER TABLE `news_picture`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_recommend`
--
ALTER TABLE `news_recommend`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_science`
--
ALTER TABLE `news_science`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_society`
--
ALTER TABLE `news_society`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_woman`
--
ALTER TABLE `news_woman`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news_baijia`
--
ALTER TABLE `news_baijia`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `news_entertainment`
--
ALTER TABLE `news_entertainment`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `news_internet`
--
ALTER TABLE `news_internet`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `news_local`
--
ALTER TABLE `news_local`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `news_military`
--
ALTER TABLE `news_military`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `news_picture`
--
ALTER TABLE `news_picture`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `news_recommend`
--
ALTER TABLE `news_recommend`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT for table `news_science`
--
ALTER TABLE `news_science`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `news_society`
--
ALTER TABLE `news_society`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `news_woman`
--
ALTER TABLE `news_woman`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
