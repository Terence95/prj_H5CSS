var dbusername = 'root';
var dbpassword = '';
var dbname = 'baidunews_v2';
var path = "mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname;

exports.dbconfig = function() {
    // console.log(path);
    return path;
};
