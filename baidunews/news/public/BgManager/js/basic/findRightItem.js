define(function () {
    // 根据table的名字找到右侧class name
    function findRightItem(table) {
          if (table == "news_recommend") {
              return "tab-item-1";
          }
          if (table == "news_baijia") {
              return "tab-item-2";
          }
          // TODO: 后面还有其他，这个先测试
    }
    return findRightItem;
});
