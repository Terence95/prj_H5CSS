define(function() {
    function findTableName(leftListName) {
        if (leftListName == "推荐") {
            return "news_recommend";
        }
        if (leftListName == "百家") {
            return "news_baijia";
        }
        if (leftListName == "本地") {
            return "news_local";
        }
        if (leftListName == "互联网") {
            return "news_internet";
        }
        if (leftListName == "科技") {
            return "news_science";
        }
        if (leftListName == "女人") {
            return "news_woman";
        }
        if (leftListName == "图片") {
            return "news_picture";
        }
        if (leftListName == "军事") {
            return "news_military";
        }
        if (leftListName == "社会") {
            return "news_society";
        }
        if (leftListName == "娱乐") {
            return "news_entertainment";
        }
    }

    return findTableName;
});
