var _Util = function() {
    var _this = this;

    this.range = function(start, stop, step) {
        if (stop == null) {
            stop = start || 0;
            start = 0;
        }
        step = step || 1;

        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);

        for (var idx = 0; idx < length; idx++, start += step) {
            range[idx] = start;
        }

        return range;
    };

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
    this.fileInputReadAsDataUrl = function(callback) {
        var cb = callback || function(){};
        var $ele = $('<input type="file" />');
        $ele.on("change", function(e) {
            var f = e.target.files[0];
            if (f) {
                var r;
                (r = new FileReader()).onload = function (event) {
                    cb(event.target.result);
                };
                r.readAsDataURL(f);
            }
        });
        return function() {
            $ele.click();
        }
    };

    // 使用：var button = util.fileInputReadAsText(); button.click(function(text){...});
    this.fileInputReadAsText = function(callback) {
        var cb = callback || function(){};
        var $ele = $('<input type="file" />');
        $ele.on("change", function(e) {
            var f = e.target.files[0];
            if (f) {
                var r;
                (r = new FileReader()).onload = function (event) {
                    cb(event.target.result);
                };
                r.readAsText(f);
            }
        });
        return function(){
            $ele.click();
        };
    };

    this.toogleVisibility = function() {
        var toogle = function (obj, value) {
            if (obj !== undefined && typeof(obj.visible) === 'boolean') {
                obj.visible = value || !obj.visible;
            }
        }
        return function(obj, value) {
            if (obj === undefined) {
                return;
            } else if (Array.isArray(obj)) {
                obj.forEach(function(o){
                    toogle(o, value);
                });
            } else {
                toogle(obj, value);
            }
        }
    }();

    this.uv2lonlat = function(u, v) {
        return {
            "lon": u*360,
            "lat": (v-0.5) * 180
        };
    };

    this.lonlat2uv = function(lon, lat) {
        return {
            "u": lon/360,
            "v": lat/180+0.5
        };
    };

    this.lonlat2xyz = function(lon, lat, radius) {
        var phi = THREE.Math.degToRad(90 - lat);
        var theta = THREE.Math.degToRad(lon);
        var radius = radius || 1;
        return {
            "x": radius * Math.sin(phi) * Math.cos(theta),
            "y": radius * Math.cos(phi),
            "z": radius * Math.sin(phi) * Math.sin(theta)
        };
    };

    this.xyz2rtp = function(x, y, z) {
        var r = Math.sqrt( x*x + y*y + z*z );
        return {
            radius: r,
            theta: THREE.Math.radToDeg( Math.atan(z/x) ),
            phi: THREE.Math.radToDeg( Math.acos(y/r) )
        };
    }

    this.rtp2xyz = function(radius, theta, phi) {
        var theta = THREE.Math.degToRad(theta);
        var phi   = THREE.Math.degToRad(phi);
        return {
            "x": radius * Math.sin( phi ) * Math.cos( theta ),
            "y": radius * Math.cos( phi ),
            "z": radius * Math.sin( phi ) * Math.sin( theta )
        };
    }

    this.xyz2lonlat = function(x, y, z) {
        var r = Math.sqrt( x*x + y*y + z*z );
        var theta = Math.atan( z / x );
        var phi = Math.acos( y / r );
        return {
            "lon": THREE.Math.radToDeg(theta),
            "lat": 90 - THREE.Math.radToDeg(phi)
        };
    }

    this.useIntrusiveUtils = function() {
        // new Number(23).toRad()
        Number.prototype.toRad = function() { return this * Math.PI / 180; };
        Number.prototype.toDeg = function() { return this * 180 / Math.PI; };
        Array.prototype.remove = function(from, to) {
            var rest = this.slice((to || from) + 1 || this.length);
            this.length = from < 0 ? this.length + from : from;
            return this.push.apply(this, rest);
        };
    };

    return _this;
};

var Util = new _Util();
