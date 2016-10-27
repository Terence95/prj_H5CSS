define(function () {
    function findTableName(leftListName) {
        if (leftListName == "推荐") {
            return "news_recommend";
        }
        if (leftListName == "百家") {
            return "news_baijia";
        }
    }

    return findTableName;
});
