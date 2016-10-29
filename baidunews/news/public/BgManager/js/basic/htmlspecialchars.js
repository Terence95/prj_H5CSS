define(function() {
    //这个版本多转换了一些内容
    function htmlspecialchars(str) {
        var s = "";
        if (str.length === 0) {
            return "";
        }
        for (var i = 0; i < str.length; i++) {
            switch (str.substr(i, 1)) {
                case "<":
                    s += "&lt;";
                    break;
                case ">":
                    s += "&gt;";
                    break;
                case "&":
                    s += "&amp;";
                    break;
                case " ":
                    if (str.substr(i + 1, 1) == " ") {
                        s += " &nbsp;";
                        i++;
                    } else s += " ";
                    break;
                case "\"":
                    s += "&quot;";
                    break;
                case "\n":
                    s += "<br>";
                    break;
                default:
                    s += str.substr(i, 1);
                    break;
            }
        }
        return s;
    }
    return htmlspecialchars;
});
