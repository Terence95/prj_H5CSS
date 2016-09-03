
// growingio埋点 2016.6.22
var _vds = _vds || [];
window._vds = _vds;
(function() {
    _vds.push(['setAccountId', 'aacd01fff9535e79']);

    var jkuid = new RegExp("(^| )uid=([^;]*)(;|$)");
    if (document.cookie.match(jkuid) && document.cookie.match(jkuid)[2]) {
        var uidVal = document.cookie.match(jkuid)[2];
        _vds.push(['setCS1', 'uid', uidVal]);
    }

    (function() {
        var vds = document.createElement('script');
        vds.type = 'text/javascript';
        vds.async = true;
        vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(vds, s);
    })();
})();

