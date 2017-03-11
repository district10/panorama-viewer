var Util = function() {
    var _this = this;

    // 哈希函数
    // util.hashCode("string")
    this.hashCode = function(str) {
        var hash = 0, i, chr;
        if (str.length === 0) return hash;
        for (i = 0; i < str.length; ++i) {
            chr   = str.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };

    // var geometry = util.create( THREE['SphereGeometry'], [ 100, 3, 3 ] );
    // 来自：https://github.com/mrdoob/three.js/blob/6c7f000734f8579da37fb39e5c2e9e5e2dfb14f8/examples/webgl_modifier_subdivision.html
    this.create = function( klass, args ) {
        var F = function( klass, args ) {
            return klass.apply( this, args );
        };
        F.prototype = klass.prototype;
        return new F( klass, args );
    };

    // 使用：var button = util.fileInputReadAsDatUrl(); button.click(function(url){...});
    this.fileInputReadAsDataUrl = function() {
        var cb;
        var $ele = $('<input type="file" />'))
        var click = function(callback) { cb = callback; $ele.click(); };
        $ele.on("change", function(e) {
            var f = e.target.files[0];
            if (f) {
                var r;
                (r = new FileReader()).onload = function (event) {
                    cb(event.target.result);
                };
                r.readAsDataURL(f);
            }
        };
        return {
            click: click;
        };
    };

    // 使用：var button = util.fileInputReadAsText(); button.click(function(text){...});
    this.fileInputReadAsText = function() {
        var cb;
        var $ele = $('<input type="file" />'))
        var click = function(callback) { cb = callback; $ele.click(); };
        $ele.on("change", function(e) {
            var f = e.target.files[0];
            if (f) {
                var r;
                (r = new FileReader()).onload = function (event) {
                    cb(event.target.result);
                };
                r.readAsText(f);
            }
        };
        return {
            click: click;
        };
    };

    // utils
    return _this;
};
// var util = new Util();
