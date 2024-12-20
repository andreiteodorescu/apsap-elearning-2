"use strict";

$(".js-cancel-overflow").on("click", function () {
  $(this).parent().parent().addClass("cancel-overflow-limit");
});
$(".js-cancel-overflow-modules").on("click", function () {
  $(".course-modules").addClass("cancel-overflow-limit");
});
"use strict";

var $ctd = function $ctd(elem) {
  return document.querySelector(elem);
};
var countdown = function countdown(_config) {
  var tarDate = $ctd(_config.target).getAttribute('data-date').split('-');
  var day = parseInt(tarDate[0]);
  var month = parseInt(tarDate[1]);
  var year = parseInt(tarDate[2]);
  var tarTime = $ctd(_config.target).getAttribute('data-time');
  var tarhour, tarmin;
  if (tarTime != null) {
    tarTime = tarTime.split(':');
    tarhour = parseInt(tarTime[0]);
    tarmin = parseInt(tarTime[1]);
  }
  var months = [31, new Date().getFullYear() % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var dateNow = new Date();
  var dayNow = dateNow.getDate();
  var monthNow = dateNow.getMonth() + 1;
  var yearNow = dateNow.getFullYear();
  var hourNow = dateNow.getHours();
  var minNow = dateNow.getMinutes();
  var count_day = 0,
    count_hour = 0,
    count_min = 0;
  var count_day_isSet = false;
  var isOver = false;

  // Set the date we're counting down to
  var countDownDate = new Date(year, month - 1, day, tarhour, tarmin, 0, 0).getTime();
  if (document.querySelector('.day') !== null) {
    $ctd(_config.target + ' .day .word').innerHTML = _config.dayWord;
  }
  $ctd(_config.target + ' .hour .word').innerHTML = _config.hourWord;
  $ctd(_config.target + ' .min .word').innerHTML = _config.minWord;
  if (document.querySelector('.sec') !== null) {
    $ctd(_config.target + ' .sec .word').innerHTML = _config.secWord;
  }
  var _updateTime = function updateTime() {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    requestAnimationFrame(_updateTime);
    if (document.querySelector('.day') !== null) {
      $ctd(_config.target + ' .day .num').innerHTML = addZero(days);
    }
    $ctd(_config.target + ' .hour .num').innerHTML = addZero(hours);
    $ctd(_config.target + ' .min .num').innerHTML = addZero(minutes);
    if (document.querySelector('.sec') !== null) {
      $ctd(_config.target + ' .sec .num').innerHTML = addZero(seconds);
    }

    // If the count down is over, write some text
    if (distance < 0) {
      $ctd(".countdown").innerHTML = "EXPIRED";
    }
  };
  _updateTime();
};
var addZero = function addZero(x) {
  return x < 10 && x >= 0 ? "0" + x : x;
};
"use strict";

$(document).ready(function () {
  $(".js-toggle-course-list-panel").click(function () {
    // Toggle the collapsed class on the sidebar
    $(".course-sidebar").toggleClass("collapsed");

    // Hide or show everything inside course-sidebar except js-toggle-course-list-panel
    $(".course-sidebar").children().toggle();

    // Hide everything in course-page-video-toolbar except js-toggle-course-list-panel
    $(".course-page-video-toolbar").children().not(".js-toggle-course-list-panel").toggle();
    $(".course-page-video-toolbar").toggleClass("collapsed");
    $(".course-detail-wrap").toggleClass("collapsed");
  });
});
"use strict";

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
"use strict";

// If "grey-header-cut" exists add a class on "main" to adjust the diamonds background image
if (document.querySelector('.grey-header-cut') !== null) {
  document.querySelector('.main').classList.add("main-bg-short");
}
window.addEventListener("load", function (event) {
  // If "component-skew-inner"s height is grater than 2350px add a class to adjust the diamonds background image
  document.querySelectorAll('.component-skew-inner').forEach(function (item) {
    if (item.clientHeight > 2350) {
      item.classList.add("component-skew-inner-tall");
    }
  });
});
"use strict";

var _this = void 0;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var createObserver = function createObserver(threshold) {
  return new IntersectionObserver(function (entries) {
    var _iterator = _createForOfIteratorHelper(entries),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var entry = _step.value;
        var intersecting = entry.isIntersecting;
        if (intersecting) {
          entry.target.classList.add("in-view");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }, {
    threshold: threshold
  });
};

// Default threshold
var threshold = 0.7;

// Function to handle screen size changes
var handleResize = function handleResize() {
  if (window.innerWidth < 1200) {
    threshold = 0.5; // Smaller threshold for small screens
  } else {
    threshold = 0.6; // Default threshold for larger screens
  }
  // Create a new observer with the updated threshold
  observer.disconnect(); // Disconnect the old observer
  observer = createObserver(threshold);

  // Reobserve all targets
  observerTargets.forEach(function (observerTarget) {
    observer.observe(observerTarget);
  });
};

// Debounce function to limit the rate of handleResize execution
var debounce = function debounce(func, wait) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(_this, args);
    }, wait);
  };
};

// Initial observer creation
var observer = createObserver(threshold);

// Select all elements to be observed
var observerTargets = document.querySelectorAll(".observe");
observerTargets.forEach(function (observerTarget) {
  observer.observe(observerTarget);
});

// Add debounced event listener for resize
window.addEventListener("resize", debounce(handleResize, 200));

// Initial call to set the correct threshold based on the current screen size
handleResize();
"use strict";

$(".menu-btn").on("click", function () {
  $(".menu-btn").removeClass("menu-btn-active");
  $(this).addClass("menu-btn-active");
  if (!$(this).hasClass("show")) {
    $("body").removeClass("nav-active");
  } else {
    $("body").addClass("nav-active");
  }
});

// Sticky menu when scrolling
var mainHeader = $(".header");
var headerScrollThreshold = 110;
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll >= headerScrollThreshold) {
    mainHeader.addClass("header-sticky");
    $("body").addClass("header-sticky-body");
  } else {
    mainHeader.removeClass("header-sticky");
    $("body").removeClass("header-sticky-body");
  }
});
$(document).on("hide.bs.dropdown", ".header", function () {
  $("body").removeClass("nav-active");
});
"use strict";

$(".course-modules-list-item").click(function () {
  // Check if the clicked item has the 'active' class
  if ($(this).hasClass("active")) {
    // Animate the scroll to the target element
    $("html, body").animate({
      scrollTop: $("#courseVideo").offset().top - 110
    }, 1000);
  }
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// https://github.com/faisalman/ua-parser-js
!function (i, e) {
  "use strict";

  var o = "model",
    r = "name",
    a = "type",
    n = "vendor",
    t = "version",
    s = "mobile",
    b = "tablet",
    w = "smarttv",
    d = function d(i) {
      var e = {};
      for (var o in i) e[i[o].toUpperCase()] = i[o];
      return e;
    },
    l = function l(i, e) {
      return "string" == typeof i && -1 !== c(e).indexOf(c(i));
    },
    c = function c(i) {
      return i.toLowerCase();
    },
    u = function u(i, e) {
      if ("string" == typeof i) return i = i.replace(/^\s+|\s+$/g, ""), void 0 === e ? i : i.substring(0, 255);
    },
    m = function m(i, e) {
      for (var o, r, a, n, t, s, b = 0; b < e.length && !t;) {
        var w = e[b],
          d = e[b + 1];
        for (o = r = 0; o < w.length && !t;) if (t = w[o++].exec(i)) for (a = 0; a < d.length; a++) s = t[++r], "object" == _typeof(n = d[a]) && n.length > 0 ? 2 == n.length ? "function" == typeof n[1] ? this[n[0]] = n[1].call(this, s) : this[n[0]] = n[1] : 3 == n.length ? "function" != typeof n[1] || n[1].exec && n[1].test ? this[n[0]] = s ? s.replace(n[1], n[2]) : void 0 : this[n[0]] = s ? n[1].call(this, s, n[2]) : void 0 : 4 == n.length && (this[n[0]] = s ? n[3].call(this, s.replace(n[1], n[2])) : void 0) : this[n] = s || void 0;
        b += 2;
      }
    },
    p = function p(i, e) {
      for (var o in e) if ("object" == _typeof(e[o]) && e[o].length > 0) {
        for (var r = 0; r < e[o].length; r++) if (l(e[o][r], i)) return "?" === o ? void 0 : o;
      } else if (l(e[o], i)) return "?" === o ? void 0 : o;
      return i;
    },
    h = {
      ME: "4.90",
      "NT 3.11": "NT3.51",
      "NT 4.0": "NT4.0",
      2000: "NT 5.0",
      XP: ["NT 5.1", "NT 5.2"],
      Vista: "NT 6.0",
      7: "NT 6.1",
      8: "NT 6.2",
      8.1: "NT 6.3",
      10: ["NT 6.4", "NT 10.0"],
      RT: "ARM"
    },
    f = {
      browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [t, [r, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [t, [r, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [r, t], [/opios[\/ ]+([\w\.]+)/i], [t, [r, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [t, [r, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [r, t], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [t, [r, "UCBrowser"]], [/\bqbcore\/([\w\.]+)/i], [t, [r, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [t, [r, "WeChat"]], [/konqueror\/([\w\.]+)/i], [t, [r, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [t, [r, "IE"]], [/yabrowser\/([\w\.]+)/i], [t, [r, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[r, /(.+)/, "$1 Secure Browser"], t], [/\bfocus\/([\w\.]+)/i], [t, [r, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [t, [r, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [t, [r, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [t, [r, "Dolphin"]], [/coast\/([\w\.]+)/i], [t, [r, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [t, [r, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [t, [r, "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[r, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[r, /(.+)/, "$1 Browser"], t], [/(comodo_dragon)\/([\w\.]+)/i], [[r, /_/g, " "], t], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [r, t], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [r], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[r, "Facebook"], t], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [r, t], [/\bgsa\/([\w\.]+) .*safari\//i], [t, [r, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [t, [r, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[r, "Chrome WebView"], t], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [t, [r, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [r, t], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [t, [r, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [t, r], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [r, [t, p, {
        "1.0": "/8",
        1.2: "/1",
        1.3: "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }]], [/(webkit|khtml)\/([\w\.]+)/i], [r, t], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[r, "Netscape"], t], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [t, [r, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [r, t]],
      cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", c]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [["architecture", "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows (ce|mobile); ppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [["architecture", /ower/, "", c]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", c]]],
      device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [o, [n, "Samsung"], [a, b]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [o, [n, "Samsung"], [a, s]], [/\((ip(?:hone|od)[\w ]*);/i], [o, [n, "Apple"], [a, s]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [o, [n, "Apple"], [a, b]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [o, [n, "Huawei"], [a, b]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [o, [n, "Huawei"], [a, s]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[o, /_/g, " "], [n, "Xiaomi"], [a, s]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[o, /_/g, " "], [n, "Xiaomi"], [a, b]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i], [o, [n, "OPPO"], [a, s]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [o, [n, "Vivo"], [a, s]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [o, [n, "Realme"], [a, s]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [o, [n, "Motorola"], [a, s]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [o, [n, "Motorola"], [a, b]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [o, [n, "LG"], [a, b]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [o, [n, "LG"], [a, s]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [o, [n, "Lenovo"], [a, b]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[o, /_/g, " "], [n, "Nokia"], [a, s]], [/(pixel c)\b/i], [o, [n, "Google"], [a, b]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [o, [n, "Google"], [a, s]], [/droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [o, [n, "Sony"], [a, s]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[o, "Xperia Tablet"], [n, "Sony"], [a, b]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [o, [n, "OnePlus"], [a, s]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [o, [n, "Amazon"], [a, b]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[o, /(.+)/g, "Fire Phone $1"], [n, "Amazon"], [a, s]], [/(playbook);[-\w\),; ]+(rim)/i], [o, n, [a, b]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [o, [n, "BlackBerry"], [a, s]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [o, [n, "ASUS"], [a, b]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [o, [n, "ASUS"], [a, s]], [/(nexus 9)/i], [o, [n, "HTC"], [a, b]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [n, [o, /_/g, " "], [a, s]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [o, [n, "Acer"], [a, b]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [o, [n, "Meizu"], [a, s]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [o, [n, "Sharp"], [a, s]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [n, o, [a, s]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [n, o, [a, b]], [/(surface duo)/i], [o, [n, "Microsoft"], [a, b]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [o, [n, "Fairphone"], [a, s]], [/(u304aa)/i], [o, [n, "AT&T"], [a, s]], [/\bsie-(\w*)/i], [o, [n, "Siemens"], [a, s]], [/\b(rct\w+) b/i], [o, [n, "RCA"], [a, b]], [/\b(venue[\d ]{2,7}) b/i], [o, [n, "Dell"], [a, b]], [/\b(q(?:mv|ta)\w+) b/i], [o, [n, "Verizon"], [a, b]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [o, [n, "Barnes & Noble"], [a, b]], [/\b(tm\d{3}\w+) b/i], [o, [n, "NuVision"], [a, b]], [/\b(k88) b/i], [o, [n, "ZTE"], [a, b]], [/\b(nx\d{3}j) b/i], [o, [n, "ZTE"], [a, s]], [/\b(gen\d{3}) b.+49h/i], [o, [n, "Swiss"], [a, s]], [/\b(zur\d{3}) b/i], [o, [n, "Swiss"], [a, b]], [/\b((zeki)?tb.*\b) b/i], [o, [n, "Zeki"], [a, b]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[n, "Dragon Touch"], o, [a, b]], [/\b(ns-?\w{0,9}) b/i], [o, [n, "Insignia"], [a, b]], [/\b((nxa|next)-?\w{0,9}) b/i], [o, [n, "NextBook"], [a, b]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[n, "Voice"], o, [a, s]], [/\b(lvtel\-)?(v1[12]) b/i], [[n, "LvTel"], o, [a, s]], [/\b(ph-1) /i], [o, [n, "Essential"], [a, s]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [o, [n, "Envizen"], [a, b]], [/\b(trio[-\w\. ]+) b/i], [o, [n, "MachSpeed"], [a, b]], [/\btu_(1491) b/i], [o, [n, "Rotor"], [a, b]], [/(shield[\w ]+) b/i], [o, [n, "Nvidia"], [a, b]], [/(sprint) (\w+)/i], [n, o, [a, s]], [/(kin\.[onetw]{3})/i], [[o, /\./g, " "], [n, "Microsoft"], [a, s]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [o, [n, "Zebra"], [a, b]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [o, [n, "Zebra"], [a, s]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [n, o, [a, "console"]], [/droid.+; (shield) bui/i], [o, [n, "Nvidia"], [a, "console"]], [/(playstation [345portablevi]+)/i], [o, [n, "Sony"], [a, "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [o, [n, "Microsoft"], [a, "console"]], [/smart-tv.+(samsung)/i], [n, [a, w]], [/hbbtv.+maple;(\d+)/i], [[o, /^/, "SmartTV"], [n, "Samsung"], [a, w]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[n, "LG"], [a, w]], [/(apple) ?tv/i], [n, [o, "Apple TV"], [a, w]], [/crkey/i], [[o, "Chromecast"], [n, "Google"], [a, w]], [/droid.+aft(\w)( bui|\))/i], [o, [n, "Amazon"], [a, w]], [/\(dtv[\);].+(aquos)/i], [o, [n, "Sharp"], [a, w]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[n, u], [o, u], [a, w]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[a, w]], [/((pebble))app/i], [n, o, [a, "wearable"]], [/droid.+; (glass) \d/i], [o, [n, "Google"], [a, "wearable"]], [/droid.+; (wt63?0{2,3})\)/i], [o, [n, "Zebra"], [a, "wearable"]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [n, [a, "embedded"]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [o, [a, s]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [o, [a, b]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[a, b]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[a, s]], [/(android[-\w\. ]{0,9});.+buil/i], [o, [n, "Generic"]]],
      engine: [[/windows.+ edge\/([\w\.]+)/i], [t, [r, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [t, [r, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [r, t], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [t, r]],
      os: [[/microsoft (windows) (vista|xp)/i], [r, t], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [r, [t, p, h]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[r, "Windows"], [t, p, h]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[t, /_/g, "."], [r, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[r, "Mac OS"], [t, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [t, r], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [r, t], [/\(bb(10);/i], [t, [r, "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [t, [r, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [t, [r, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [t, [r, "webOS"]], [/crkey\/([\d\.]+)/i], [t, [r, "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[r, "Chromium OS"], t], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [r, t], [/(sunos) ?([\w\.\d]*)/i], [[r, "Solaris"], t], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*!/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [r, t]]
    },
    _v = function v(e, o) {
      if ("object" == _typeof(e) && (o = e, e = void 0), !(this instanceof _v)) return new _v(e, o).getResult();
      var r = e || (void 0 !== i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
        a = o ? function (i, e) {
          var o = {};
          for (var r in i) e[r] && e[r].length % 2 == 0 ? o[r] = e[r].concat(i[r]) : o[r] = i[r];
          return o;
        }(f, o) : f;
      return this.getBrowser = function () {
        var i,
          e = {};
        return e.name = void 0, e.version = void 0, m.call(e, r, a.browser), e.major = "string" == typeof (i = e.version) ? i.replace(/[^\d\.]/g, "").split(".")[0] : void 0, e;
      }, this.getCPU = function () {
        var i = {
          architecture: void 0
        };
        return m.call(i, r, a.cpu), i;
      }, this.getDevice = function () {
        var i = {
          vendor: void 0,
          model: void 0,
          type: void 0
        };
        return m.call(i, r, a.device), i;
      }, this.getEngine = function () {
        var i = {
          name: void 0,
          version: void 0
        };
        return m.call(i, r, a.engine), i;
      }, this.getOS = function () {
        var i = {
          name: void 0,
          version: void 0
        };
        return m.call(i, r, a.os), i;
      }, this.getResult = function () {
        return {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU()
        };
      }, this.getUA = function () {
        return r;
      }, this.setUA = function (i) {
        return r = "string" == typeof i && i.length > 255 ? u(i, 255) : i, this;
      }, this.setUA(r), this;
    };
  _v.VERSION = "0.7.28", _v.BROWSER = d([r, t, "major"]), _v.CPU = d(["architecture"]), _v.DEVICE = d([o, n, a, "console", s, w, b, "wearable", "embedded"]), _v.ENGINE = _v.OS = d([r, t]), "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = _v), exports.UAParser = _v) : "function" == typeof define && define.amd ? define(function () {
    return _v;
  }) : void 0 !== i && (i.UAParser = _v);
  var g = void 0 !== i && (i.jQuery || i.Zepto);
  if (g && !g.ua) {
    var x = new _v();
    g.ua = x.getResult(), g.ua.get = function () {
      return x.getUA();
    }, g.ua.set = function (i) {
      x.setUA(i);
      var e = x.getResult();
      for (var o in e) g.ua[o] = e[o];
    };
  }
}("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : void 0);
var newPlatformParser = new UAParser();
var newBrowserName = newPlatformParser.getBrowser().name !== undefined ? newPlatformParser.getBrowser().name.toLowerCase() : ''; // Browser name in lowercase
var newBrowserVersion = newBrowserName + newPlatformParser.getBrowser().major; // Browser version
var newOsOriginalName = newPlatformParser.getOS().name !== undefined ? newPlatformParser.getOS().name.toLowerCase().replace(/\s+/g, '') : 'unknown'; // OS name in lowercase and without spaces
var newDeviceName = newPlatformParser.getDevice().model !== undefined ? newPlatformParser.getDevice().model.toLowerCase() : ''; // Device name in lowercase.
var newOSName = 'os-' + newOsOriginalName; // Create OS general body class

if (newOsOriginalName === 'macos') {
  // Mac OS custom body class and menu category active
  newOSName = 'os-mac';
} else if (newOsOriginalName === 'windows') {
  // Windows OS custom body class and menu category active
  newOSName = 'os-win';
  if (newPlatformParser.getOS().version === "7") {
    newOSName = 'os-win os-win-7';
  }
} else if (newOsOriginalName === 'Windows Phone') {
  // Custom body class for Windows Phone OS
  newOSName = 'os-win-phone';
} else if (newOsOriginalName === 'chromiumos') {
  // Custom body class for Chromium OS
  newOSName = 'os-chrome';
}

// Custom body class for iPhone
if (newDeviceName === 'iphone') {
  $('body').addClass('os-iphone');
}

// Custom body class for iPad
if (newDeviceName === 'ipad') {
  $('body').addClass('os-ipad');
}

// Add the OS, browser and browser version classes to the body
$('body').addClass(newOSName + ' ' + newBrowserName + ' ' + newBrowserVersion);

//console.log('ua-parser-js', newBrowserName);
//console.log('ua-parser-js', newBrowserVersion);
//console.log('ua-parser-js', newOsOriginalName);
//console.log('ua-parser-js OS', newPlatformParser.getOS());
"use strict";

$(".js-see-more").on("click", function () {
  $(this).closest(".course-details-columns").find(".d-none").removeClass("d-none");
  return false;
});