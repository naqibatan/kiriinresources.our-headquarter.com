(function (g) {
  var window = this;
  ("use strict");
  var a8 = function (a) {
      g.to(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(Math.floor(2147483648 * Math.random()) ^ g.kb()).toString(36)
      );
      return a;
    },
    b8 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.Hga(a.B, b, c);
    },
    Pvb = function (a) {
      if (a instanceof g.Ts) return a;
      if ("function" == typeof a.Lk) return a.Lk(!1);
      if (g.$a(a)) {
        var b = 0,
          c = new g.Ts();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.E2;
            if (b in a) return g.Us(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    Qvb = function (a, b, c) {
      if (g.$a(a)) g.dc(a, b, c);
      else
        for (a = Pvb(a); ; ) {
          var d = a.next();
          if (d.done) break;
          b.call(c, d.value, void 0, a);
        }
    },
    Rvb = function (a, b) {
      var c = [];
      Qvb(
        b,
        function (d) {
          try {
            var e = g.iv.prototype.B.call(this, d, !0);
          } catch (f) {
            if ("Storage: Invalid value was encountered" == f) return;
            throw f;
          }
          void 0 === e ? c.push(d) : g.vla(e) && c.push(d);
        },
        a
      );
      return c;
    },
    Svb = function (a, b) {
      Rvb(a, b).forEach(function (c) {
        g.iv.prototype.remove.call(this, c);
      }, a);
    },
    Tvb = function (a) {
      if (a.ma) {
        if (a.ma.locationOverrideToken)
          return { locationOverrideToken: a.ma.locationOverrideToken };
        if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7)
          return { latitudeE7: a.ma.latitudeE7, longitudeE7: a.ma.longitudeE7 };
      }
      return null;
    },
    Uvb = function (a, b) {
      g.Gb(a, b) || a.push(b);
    },
    Vvb = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    Wvb = function (a, b) {
      return g.id(a, b);
    },
    Xvb = function (a) {
      try {
        return g.Ua.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    c8 = function (a) {
      if (g.Ua.JSON)
        try {
          return g.Ua.JSON.parse(a);
        } catch (b) {}
      return Xvb(a);
    },
    Yvb = function (a, b, c, d) {
      var e = new g.lo(null);
      a && g.mo(e, a);
      b && g.no(e, b);
      c && g.oo(e, c);
      d && (e.C = d);
      return e;
    },
    Zvb = function () {
      this.j = d8();
      this.j.Mk("/client_streamz/youtube/living_room/mdx/channel/opened", {
        Ye: 3,
        Xe: "channel_type",
      });
    },
    $vb = function (a, b) {
      a.j.Yl("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    awb = function () {
      this.j = d8();
      this.j.Mk("/client_streamz/youtube/living_room/mdx/channel/closed", {
        Ye: 3,
        Xe: "channel_type",
      });
    },
    bwb = function (a, b) {
      a.j.Yl("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    cwb = function () {
      this.j = d8();
      this.j.Mk(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        { Ye: 3, Xe: "channel_type" }
      );
    },
    dwb = function (a, b) {
      a.j.Yl(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        b
      );
    },
    ewb = function () {
      this.j = d8();
      this.j.Mk("/client_streamz/youtube/living_room/mdx/channel/error", {
        Ye: 3,
        Xe: "channel_type",
      });
    },
    fwb = function (a, b) {
      a.j.Yl("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    gwb = function () {
      this.j = d8();
      this.j.Mk(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps"
      );
    },
    hwb = function () {
      this.j = d8();
      this.j.Mk(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps"
      );
    },
    e8 = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g.Ru();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        iwb(this, a.capabilities || ""),
        jwb(this, a.compatibleSenderThemes || ""),
        kwb(this, a.experiments || ""),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"),
        (a = a.deviceInfo)) &&
        ((a = JSON.parse(a)),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"));
    },
    iwb = function (a, b) {
      a.capabilities.clear();
      g.Ys(b.split(","), g.jb(Wvb, lwb)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    jwb = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.Ys(b.split(","), g.jb(Wvb, mwb)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    kwb = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    f8 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    g8 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    nwb = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    owb = function (a) {
      return new f8(a);
    },
    pwb = function (a) {
      return Array.isArray(a) ? g.kr(a, owb) : [];
    },
    h8 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    qwb = function (a) {
      return Array.isArray(a) ? "[" + g.kr(a, h8).join(",") + "]" : "null";
    },
    rwb = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    swb = function (a) {
      return g.kr(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    twb = function (a, b) {
      return g.Eb(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    i8 = function (a, b) {
      return g.Eb(a, function (c) {
        return g8(c, b);
      });
    },
    uwb = function () {
      var a = (0, g.WC)();
      a && Svb(a, a.j.Lk(!0));
    },
    j8 = function () {
      var a = g.YC("yt-remote-connected-devices") || [];
      g.Yb(a);
      return a;
    },
    vwb = function (a) {
      if (0 == a.length) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.kr(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    wwb = function (a) {
      g.XC("yt-remote-connected-devices", a, 86400);
    },
    k8 = function () {
      if (xwb) return xwb;
      var a = g.YC("yt-remote-device-id");
      a || ((a = rwb()), g.XC("yt-remote-device-id", a, 31536e3));
      for (var b = j8(), c = 1, d = a; g.Gb(b, d); ) c++, (d = a + "#" + c);
      return (xwb = d);
    },
    ywb = function () {
      var a = j8(),
        b = k8();
      g.$C() && g.$b(a, b);
      a = vwb(a);
      if (0 == a.length)
        try {
          g.koa("remote_sid");
        } catch (c) {}
      else
        try {
          g.oC("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    zwb = function () {
      return g.YC("yt-remote-session-browser-channel");
    },
    Awb = function () {
      return g.YC("yt-remote-local-screens") || [];
    },
    Bwb = function () {
      g.XC("yt-remote-lounge-token-expiration", !0, 86400);
    },
    Cwb = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.kr(Awb(), function (d) {
          return d.loungeToken;
        }),
        c = g.kr(a, function (d) {
          return d.loungeToken;
        });
      g.lr(c, function (d) {
        return !g.Gb(b, d);
      }) && Bwb();
      g.XC("yt-remote-local-screens", a, 31536e3);
    },
    l8 = function (a) {
      a ||
        (g.ZC("yt-remote-session-screen-id"),
        g.ZC("yt-remote-session-video-id"));
      ywb();
      a = j8();
      g.Ib(a, k8());
      wwb(a);
    },
    Dwb = function () {
      if (!m8) {
        var a = g.rv();
        a && (m8 = new g.fv(a));
      }
    },
    Ewb = function () {
      Dwb();
      return m8 ? !!m8.get("yt-remote-use-staging-server") : !1;
    },
    n8 = function (a, b) {
      g.KE[a] = !0;
      var c = g.IE();
      c && c.publish.apply(c, arguments);
      g.KE[a] = !1;
    },
    Fwb = function () {},
    d8 = function () {
      if (!o8) {
        o8 = new g.qg(new Fwb());
        var a = g.LB("client_streamz_web_flush_count", -1);
        -1 !== a && (o8.D = a);
      }
      return o8;
    },
    Gwb = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    Hwb = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    Iwb = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    p8 = function (a) {
      a.length
        ? Jwb(a.shift(), function () {
            p8(a);
          })
        : Kwb();
    },
    Lwb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    Jwb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.Mn(d, g.ew(a));
      (document.head || document.documentElement).appendChild(d);
    },
    Mwb = function () {
      var a = Gwb(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    Kwb = function () {
      var a = Iwb();
      a && a(!1, "No cast extension found");
    },
    Owb = function () {
      if (Nwb) {
        var a = 2,
          b = Iwb(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        Jwb(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          Kwb,
          c
        );
      }
    },
    Pwb = function () {
      Owb();
      var a = Mwb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      p8(a);
    },
    Rwb = function () {
      Owb();
      var a = Mwb();
      a.push.apply(a, g.qa(Qwb.map(Lwb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      p8(a);
    },
    q8 = function (a, b, c) {
      g.J.call(this);
      this.K = null != c ? (0, g.ib)(a, c) : a;
      this.Vi = b;
      this.G = (0, g.ib)(this.l2, this);
      this.j = !1;
      this.B = 0;
      this.C = this.kd = null;
      this.D = [];
    },
    r8 = function (a, b, c) {
      g.J.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.Vi = b;
      this.C = null;
      this.j = !1;
      this.B = 0;
      this.kd = null;
    },
    Swb = function (a) {
      a.kd = g.og(function () {
        a.kd = null;
        a.j && !a.B && ((a.j = !1), Swb(a));
      }, a.Vi);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    s8 = function () {},
    Twb = function () {
      g.Ab.call(this, "p");
    },
    Uwb = function () {
      g.Ab.call(this, "o");
    },
    Wwb = function () {
      return (Vwb = Vwb || new g.Fd());
    },
    Xwb = function (a) {
      g.Ab.call(this, "serverreachability", a);
    },
    t8 = function (a) {
      var b = Wwb();
      b.dispatchEvent(new Xwb(b, a));
    },
    Ywb = function (a) {
      g.Ab.call(this, "statevent", a);
    },
    u8 = function (a) {
      var b = Wwb();
      b.dispatchEvent(new Ywb(b, a));
    },
    Zwb = function (a, b, c, d) {
      g.Ab.call(this, "timingevent", a);
      this.size = b;
      this.gB = d;
    },
    v8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Ua.setTimeout(function () {
        a();
      }, b);
    },
    $wb = function () {},
    w8 = function (a, b, c, d) {
      this.G = a;
      this.D = b;
      this.Kc = c;
      this.lc = d || 1;
      this.ib = new g.Zo(this);
      this.xb = 45e3;
      a = g.wS ? 125 : void 0;
      this.qb = new g.dg(a);
      this.Na = null;
      this.C = !1;
      this.Y = this.eb = this.Z = this.Sa = this.Aa = this.Lb = this.ma = null;
      this.ra = [];
      this.j = null;
      this.K = 0;
      this.N = this.Fa = null;
      this.Gb = -1;
      this.Ka = !1;
      this.tb = 0;
      this.Za = null;
      this.uc = this.Va = this.Qb = this.Da = !1;
      this.B = new axb();
    },
    axb = function () {
      this.C = null;
      this.j = "";
      this.B = !1;
    },
    cxb = function (a, b, c) {
      a.Sa = 1;
      a.Z = a8(b.clone());
      a.Y = c;
      a.Da = !0;
      bxb(a, null);
    },
    bxb = function (a, b) {
      a.Aa = Date.now();
      x8(a);
      a.eb = a.Z.clone();
      b8(a.eb, "t", a.lc);
      a.K = 0;
      var c = a.G.Sa;
      a.B = new axb();
      a.j = dxb(a.G, c ? b : null, !a.Y);
      0 < a.tb && (a.Za = new r8((0, g.ib)(a.dT, a, a.j), a.tb));
      a.ib.Ta(a.j, "readystatechange", a.o2);
      b = a.Na ? g.rd(a.Na) : {};
      a.Y
        ? (a.Fa || (a.Fa = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.j.send(a.eb, a.Fa, a.Y, b))
        : ((a.Fa = "GET"), a.j.send(a.eb, a.Fa, null, b));
      t8(1);
    },
    exb = function (a) {
      return a.j ? "GET" == a.Fa && 2 != a.Sa && a.G.Ue : !1;
    },
    jxb = function (a, b, c) {
      for (var d = !0, e; !a.Ka && a.K < c.length; )
        if (((e = fxb(a, c)), e == gxb)) {
          4 == b && ((a.N = 4), u8(14), (d = !1));
          break;
        } else if (e == hxb) {
          a.N = 4;
          u8(15);
          d = !1;
          break;
        } else ixb(a, e);
      exb(a) && 0 != a.K && ((a.B.j = a.B.j.slice(a.K)), (a.K = 0));
      4 != b || 0 != c.length || a.B.B || ((a.N = 1), u8(16), (d = !1));
      a.C = a.C && d;
      d ? 0 < c.length && !a.uc && ((a.uc = !0), a.G.eQ(a)) : (y8(a), z8(a));
    },
    fxb = function (a, b) {
      var c = a.K,
        d = b.indexOf("\n", c);
      if (-1 == d) return gxb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return hxb;
      d += 1;
      if (d + c > b.length) return gxb;
      b = b.slice(d, d + c);
      a.K = d + c;
      return b;
    },
    x8 = function (a) {
      a.Lb = Date.now() + a.xb;
      kxb(a, a.xb);
    },
    kxb = function (a, b) {
      if (null != a.ma) throw Error("WatchDog timer not null");
      a.ma = v8((0, g.ib)(a.m2, a), b);
    },
    A8 = function (a) {
      a.ma && (g.Ua.clearTimeout(a.ma), (a.ma = null));
    },
    z8 = function (a) {
      a.G.kh() || a.Ka || lxb(a.G, a);
    },
    y8 = function (a) {
      A8(a);
      g.ub(a.Za);
      a.Za = null;
      a.qb.stop();
      a.ib.Pf();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    ixb = function (a, b) {
      try {
        var c = a.G;
        if (0 != c.Ih && (c.j == a || mxb(c.B, a)))
          if (!a.Va && mxb(c.B, a) && 3 == c.Ih) {
            try {
              var d = c.Gf.j.parse(b);
            } catch (x) {
              d = null;
            }
            if (Array.isArray(d) && 3 == d.length) {
              var e = d;
              if (0 == e[0])
                a: {
                  if (!c.Z) {
                    if (c.j)
                      if (c.j.Aa + 3e3 < a.Aa) B8(c), C8(c);
                      else break a;
                    nxb(c);
                    u8(18);
                  }
                }
              else
                (c.Zd = e[1]),
                  0 < c.Zd - c.Za &&
                    37500 > e[2] &&
                    c.Va &&
                    0 == c.ra &&
                    !c.ma &&
                    (c.ma = v8((0, g.ib)(c.q2, c), 6e3));
              if (1 >= oxb(c.B) && c.md) {
                try {
                  c.md();
                } catch (x) {}
                c.md = void 0;
              }
            } else D8(c, 11);
          } else if (((a.Va || c.j == a) && B8(c), !g.hc(b)))
            for (e = c.Gf.j.parse(b), b = 0; b < e.length; b++) {
              var f = e[b];
              c.Za = f[0];
              f = f[1];
              if (2 == c.Ih)
                if ("c" == f[0]) {
                  c.D = f[1];
                  c.uc = f[2];
                  var h = f[3];
                  null != h && (c.eT = h);
                  var l = f[5];
                  null != l &&
                    "number" === typeof l &&
                    0 < l &&
                    (c.ib = 1.5 * l);
                  d = c;
                  var m = a.sO();
                  if (m) {
                    var n = g.Wm(m, "X-Client-Wire-Protocol");
                    if (n) {
                      var p = d.B;
                      !p.j &&
                        (g.jc(n, "spdy") || g.jc(n, "quic") || g.jc(n, "h2")) &&
                        ((p.D = p.G),
                        (p.j = new Set()),
                        p.B && (pxb(p, p.B), (p.B = null)));
                    }
                    if (d.Da) {
                      var q = g.Wm(m, "X-HTTP-Session-Id");
                      q && ((d.Ke = q), g.to(d.Na, d.Da, q));
                    }
                  }
                  c.Ih = 3;
                  c.G && c.G.kT();
                  c.rd && (c.od = Date.now() - a.Aa);
                  d = c;
                  var r = a;
                  d.Cd = qxb(d, d.Sa ? d.uc : null, d.lc);
                  if (r.Va) {
                    rxb(d.B, r);
                    var t = r,
                      u = d.ib;
                    u && t.setTimeout(u);
                    t.ma && (A8(t), x8(t));
                    d.j = r;
                  } else sxb(d);
                  0 < c.C.length && E8(c);
                } else ("stop" != f[0] && "close" != f[0]) || D8(c, 7);
              else
                3 == c.Ih &&
                  ("stop" == f[0] || "close" == f[0]
                    ? "stop" == f[0]
                      ? D8(c, 7)
                      : c.disconnect()
                    : "noop" != f[0] && c.G && c.G.jT(f),
                  (c.ra = 0));
            }
        t8(4);
      } catch (x) {}
    },
    txb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    uxb = function (a) {
      this.G = a || 10;
      g.Ua.PerformanceNavigationTiming
        ? ((a = g.Ua.performance.getEntriesByType("navigation")),
          (a =
            0 < a.length &&
            ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)))
        : (a = !!(
            g.Ua.chrome &&
            g.Ua.chrome.loadTimes &&
            g.Ua.chrome.loadTimes() &&
            g.Ua.chrome.loadTimes().wasFetchedViaSpdy
          ));
      this.D = a ? this.G : 1;
      this.j = null;
      1 < this.D && (this.j = new Set());
      this.B = null;
      this.C = [];
    },
    vxb = function (a) {
      return a.B ? !0 : a.j ? a.j.size >= a.D : !1;
    },
    oxb = function (a) {
      return a.B ? 1 : a.j ? a.j.size : 0;
    },
    mxb = function (a, b) {
      return a.B ? a.B == b : a.j ? a.j.has(b) : !1;
    },
    pxb = function (a, b) {
      a.j ? a.j.add(b) : (a.B = b);
    },
    rxb = function (a, b) {
      a.B && a.B == b ? (a.B = null) : a.j && a.j.has(b) && a.j.delete(b);
    },
    wxb = function (a) {
      if (null != a.B) return a.C.concat(a.B.ra);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.C;
        a = g.v(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
        return b;
      }
      return g.Mb(a.C);
    },
    xxb = function (a, b) {
      var c = new $wb();
      if (g.Ua.Image) {
        var d = new Image();
        d.onload = g.jb(F8, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = g.jb(F8, c, d, "TestLoadImage: error", !1, b);
        d.onabort = g.jb(F8, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = g.jb(F8, c, d, "TestLoadImage: timeout", !1, b);
        g.Ua.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1e4);
        d.src = a;
      } else b(!1);
    },
    F8 = function (a, b, c, d, e) {
      try {
        (b.onload = null),
          (b.onerror = null),
          (b.onabort = null),
          (b.ontimeout = null),
          e(d);
      } catch (f) {}
    },
    yxb = function () {
      this.j = new s8();
    },
    zxb = function (a, b, c) {
      var d = c || "";
      try {
        g.ko(a, function (e, f) {
          var h = e;
          g.bb(e) && (h = g.Lm(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw (b.push(d + "type=" + encodeURIComponent("_badmap")), e);
      }
    },
    G8 = function (a, b, c) {
      return c && c.l7 ? c.l7[a] || b : b;
    },
    Axb = function (a) {
      this.C = [];
      this.uc =
        this.Cd =
        this.Na =
        this.lc =
        this.j =
        this.Ke =
        this.Da =
        this.Ka =
        this.N =
        this.Lb =
        this.Y =
          null;
      this.Vf = this.eb = 0;
      this.Tf = G8("failFast", !1, a);
      this.Va = this.ma = this.Z = this.K = this.G = null;
      this.Kc = !0;
      this.Zd = this.Za = -1;
      this.Qb = this.ra = this.Aa = 0;
      this.Sf = G8("baseRetryDelayMs", 5e3, a);
      this.Wf = G8("retryDelaySeedMs", 1e4, a);
      this.Uf = G8("forwardChannelMaxRetries", 2, a);
      this.Id = G8("forwardChannelRequestTimeoutMs", 2e4, a);
      this.oe = (a && a.Jjb) || void 0;
      this.Ue = (a && a.Gjb) || !1;
      this.ib = void 0;
      this.Sa = (a && a.Hba) || !1;
      this.D = "";
      this.B = new uxb(a && a.Tgb);
      this.Gf = new yxb();
      this.xb = (a && a.khb) || !1;
      this.tb = (a && a.Zgb) || !1;
      this.xb && this.tb && (this.tb = !1);
      this.Xf = (a && a.Kgb) || !1;
      a && a.mhb && (this.Kc = !1);
      this.rd = (!this.xb && this.Kc && a && a.Xgb) || !1;
      this.Ud = void 0;
      a && a.gY && 0 < a.gY && (this.Ud = a.gY);
      this.md = void 0;
      this.od = 0;
      this.qb = !1;
      this.Gb = this.Fa = null;
    },
    C8 = function (a) {
      a.j && (Bxb(a), a.j.cancel(), (a.j = null));
    },
    Cxb = function (a) {
      C8(a);
      a.Z && (g.Ua.clearTimeout(a.Z), (a.Z = null));
      B8(a);
      a.B.cancel();
      a.K && ("number" === typeof a.K && g.Ua.clearTimeout(a.K), (a.K = null));
    },
    E8 = function (a) {
      vxb(a.B) || a.K || ((a.K = !0), g.Vf(a.gT, a), (a.Aa = 0));
    },
    Exb = function (a, b) {
      if (oxb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
      if (a.K) return (a.C = b.ra.concat(a.C)), !0;
      if (1 == a.Ih || 2 == a.Ih || a.Aa >= (a.Tf ? 0 : a.Uf)) return !1;
      a.K = v8((0, g.ib)(a.gT, a, b), Dxb(a, a.Aa));
      a.Aa++;
      return !0;
    },
    Gxb = function (a, b) {
      var c;
      b ? (c = b.Kc) : (c = a.eb++);
      var d = a.Na.clone();
      g.to(d, "SID", a.D);
      g.to(d, "RID", c);
      g.to(d, "AID", a.Za);
      H8(a, d);
      a.N && a.Y && g.Yo(d, a.N, a.Y);
      c = new w8(a, a.D, c, a.Aa + 1);
      null === a.N && (c.Na = a.Y);
      b && (a.C = b.ra.concat(a.C));
      b = Fxb(a, c, 1e3);
      c.setTimeout(
        Math.round(0.5 * a.Id) + Math.round(0.5 * a.Id * Math.random())
      );
      pxb(a.B, c);
      cxb(c, d, b);
    },
    H8 = function (a, b) {
      a.Ka &&
        g.Xc(a.Ka, function (c, d) {
          g.to(b, d, c);
        });
      a.G &&
        g.ko({}, function (c, d) {
          g.to(b, d, c);
        });
    },
    Fxb = function (a, b, c) {
      c = Math.min(a.C.length, c);
      var d = a.G ? (0, g.ib)(a.G.s2, a.G, a) : null;
      a: for (var e = a.C, f = -1; ; ) {
        var h = ["count=" + c];
        -1 == f
          ? 0 < c
            ? ((f = e[0].j), h.push("ofs=" + f))
            : (f = 0)
          : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) (f = Math.max(0, e[m].j - 100)), (l = !1);
          else
            try {
              zxb(p, h, "req" + n + "_");
            } catch (q) {
              d && d(p);
            }
        }
        if (l) {
          d = h.join("&");
          break a;
        }
      }
      a = a.C.splice(0, c);
      b.ra = a;
      return d;
    },
    sxb = function (a) {
      a.j || a.Z || ((a.Qb = 1), g.Vf(a.fT, a), (a.ra = 0));
    },
    nxb = function (a) {
      if (a.j || a.Z || 3 <= a.ra) return !1;
      a.Qb++;
      a.Z = v8((0, g.ib)(a.fT, a), Dxb(a, a.ra));
      a.ra++;
      return !0;
    },
    Bxb = function (a) {
      null != a.Fa && (g.Ua.clearTimeout(a.Fa), (a.Fa = null));
    },
    Hxb = function (a) {
      a.j = new w8(a, a.D, "rpc", a.Qb);
      null === a.N && (a.j.Na = a.Y);
      a.j.tb = 0;
      var b = a.Cd.clone();
      g.to(b, "RID", "rpc");
      g.to(b, "SID", a.D);
      g.to(b, "AID", a.Za);
      g.to(b, "CI", a.Va ? "0" : "1");
      !a.Va && a.Ud && g.to(b, "TO", a.Ud);
      g.to(b, "TYPE", "xmlhttp");
      H8(a, b);
      a.N && a.Y && g.Yo(b, a.N, a.Y);
      a.ib && a.j.setTimeout(a.ib);
      var c = a.j;
      a = a.uc;
      c.Sa = 1;
      c.Z = a8(b.clone());
      c.Y = null;
      c.Da = !0;
      bxb(c, a);
    },
    B8 = function (a) {
      null != a.ma && (g.Ua.clearTimeout(a.ma), (a.ma = null));
    },
    lxb = function (a, b) {
      var c = null;
      if (a.j == b) {
        B8(a);
        Bxb(a);
        a.j = null;
        var d = 2;
      } else if (mxb(a.B, b)) (c = b.ra), rxb(a.B, b), (d = 1);
      else return;
      if (0 != a.Ih)
        if (b.C)
          if (1 == d) {
            c = b.Y ? b.Y.length : 0;
            b = Date.now() - b.Aa;
            var e = a.Aa;
            d = Wwb();
            d.dispatchEvent(new Zwb(d, c, b, e));
            E8(a);
          } else sxb(a);
        else {
          var f = b.Gb;
          e = b.getLastError();
          if (
            3 == e ||
            (0 == e && 0 < f) ||
            !((1 == d && Exb(a, b)) || (2 == d && nxb(a)))
          )
            switch (
              (c && 0 < c.length && ((b = a.B), (b.C = b.C.concat(c))), e)
            ) {
              case 1:
                D8(a, 5);
                break;
              case 4:
                D8(a, 10);
                break;
              case 3:
                D8(a, 6);
                break;
              default:
                D8(a, 2);
            }
        }
    },
    Dxb = function (a, b) {
      var c = a.Sf + Math.floor(Math.random() * a.Wf);
      a.isActive() || (c *= 2);
      return c * b;
    },
    D8 = function (a, b) {
      if (2 == b) {
        var c = null;
        a.G && (c = null);
        var d = (0, g.ib)(a.Nba, a);
        c ||
          ((c = new g.lo("//www.google.com/images/cleardot.gif")),
          (g.Ua.location && "http" == g.Ua.location.protocol) ||
            g.mo(c, "https"),
          a8(c));
        xxb(c.toString(), d);
      } else u8(2);
      a.Ih = 0;
      a.G && a.G.iT(b);
      Ixb(a);
      Cxb(a);
    },
    Ixb = function (a) {
      a.Ih = 0;
      a.Gb = [];
      if (a.G) {
        var b = wxb(a.B);
        if (0 != b.length || 0 != a.C.length)
          g.Rb(a.Gb, b),
            g.Rb(a.Gb, a.C),
            (a.B.C.length = 0),
            g.Mb(a.C),
            (a.C.length = 0);
        a.G.hT();
      }
    },
    Jxb = function (a) {
      if (0 == a.Ih) return a.Gb;
      var b = [];
      g.Rb(b, wxb(a.B));
      g.Rb(b, a.C);
      return b;
    },
    qxb = function (a, b, c) {
      var d = g.uo(c);
      "" != d.j
        ? (b && g.no(d, b + "." + d.j), g.oo(d, d.D))
        : ((d = g.Ua.location),
          (d = Yvb(
            d.protocol,
            b ? b + "." + d.hostname : d.hostname,
            +d.port,
            c
          )));
      b = a.Da;
      c = a.Ke;
      b && c && g.to(d, b, c);
      g.to(d, "VER", a.eT);
      H8(a, d);
      return d;
    },
    dxb = function (a, b, c) {
      if (b && !a.Sa)
        throw Error("Can't create secondary domain capable XhrIo object.");
      b = a.Ue && !a.oe ? new g.Pm(new g.go({ F_: c })) : new g.Pm(a.oe);
      b.K = a.Sa;
      return b;
    },
    Kxb = function () {},
    Lxb = function () {
      if (g.bf && !g.Sc(10))
        throw Error("Environmental error: no available transport.");
    },
    J8 = function (a, b) {
      g.Fd.call(this);
      this.j = new Axb(b);
      this.G = a;
      this.B = (b && b.a8) || null;
      a = (b && b.Z7) || null;
      b &&
        b.Rgb &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" }));
      this.j.Y = a;
      a = (b && b.iib) || null;
      b &&
        b.oY &&
        (a
          ? (a["X-WebChannel-Content-Type"] = b.oY)
          : (a = { "X-WebChannel-Content-Type": b.oY }));
      b &&
        b.CV &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = b.CV)
          : (a = { "X-WebChannel-Client-Profile": b.CV }));
      this.j.Lb = a;
      (a = b && b.hib) && !g.hc(a) && (this.j.N = a);
      this.K = (b && b.Hba) || !1;
      this.D = (b && b.fjb) || !1;
      (b = b && b.h7) &&
        !g.hc(b) &&
        ((this.j.Da = b), g.hd(this.B, b) && g.ld(this.B, b));
      this.C = new I8(this);
    },
    Mxb = function (a) {
      Twb.call(this);
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__);
      var b = a.__sm__;
      b
        ? (this.data = (this.j = g.bd(b)) ? g.md(b, this.j) : b)
        : (this.data = a);
    },
    Nxb = function (a) {
      Uwb.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    I8 = function (a) {
      this.j = a;
    },
    Oxb = function (a, b) {
      this.B = a;
      this.j = b;
    },
    Pxb = function (a) {
      return Jxb(a.j).map(function (b) {
        b = b.map;
        "__data__" in b && ((b = b.__data__), (b = a.B.D ? Xvb(b) : b));
        return b;
      });
    },
    K8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Ua.setTimeout(function () {
        a();
      }, b);
    },
    M8 = function (a) {
      L8.dispatchEvent(new Qxb(L8, a));
    },
    Qxb = function (a) {
      g.Ab.call(this, "statevent", a);
    },
    N8 = function (a, b, c, d) {
      this.j = a;
      this.D = b;
      this.N = c;
      this.K = d || 1;
      this.B = 45e3;
      this.C = new g.Zo(this);
      this.G = new g.dg();
      this.G.setInterval(250);
    },
    Sxb = function (a, b, c) {
      a.Sx = 1;
      a.xs = a8(b.clone());
      a.Pu = c;
      a.Da = !0;
      Rxb(a, null);
    },
    Txb = function (a, b, c, d, e) {
      a.Sx = 1;
      a.xs = a8(b.clone());
      a.Pu = null;
      a.Da = c;
      e && (a.j_ = !1);
      Rxb(a, d);
    },
    Rxb = function (a, b) {
      a.Rx = Date.now();
      O8(a);
      a.zs = a.xs.clone();
      b8(a.zs, "t", a.K);
      a.uG = 0;
      a.jj = a.j.FL(a.j.ZB() ? b : null);
      0 < a.DL && (a.sG = new r8((0, g.ib)(a.lT, a, a.jj), a.DL));
      a.C.Ta(a.jj, "readystatechange", a.v2);
      b = a.Ou ? g.rd(a.Ou) : {};
      a.Pu
        ? ((a.tG = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.jj.send(a.zs, a.tG, a.Pu, b))
        : ((a.tG = "GET"),
          a.j_ && !g.Tc && (b.Connection = "close"),
          a.jj.send(a.zs, a.tG, null, b));
      a.j.Vn(1);
    },
    Wxb = function (a, b) {
      var c = a.uG,
        d = b.indexOf("\n", c);
      if (-1 == d) return Uxb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return Vxb;
      d += 1;
      if (d + c > b.length) return Uxb;
      b = b.slice(d, d + c);
      a.uG = d + c;
      return b;
    },
    Yxb = function (a, b) {
      a.Rx = Date.now();
      O8(a);
      var c = b ? window.location.hostname : "";
      a.zs = a.xs.clone();
      g.to(a.zs, "DOMAIN", c);
      g.to(a.zs, "t", a.K);
      try {
        a.Co = new ActiveXObject("htmlfile");
      } catch (m) {
        P8(a);
        a.ys = 7;
        M8(22);
        Q8(a);
        return;
      }
      var d = "<html><body>";
      if (b) {
        var e = "";
        for (b = 0; b < c.length; b++) {
          var f = c.charAt(b);
          if ("<" == f) f = e + "\\x3c";
          else if (">" == f) f = e + "\\x3e";
          else {
            if (f in R8) f = R8[f];
            else if (f in Xxb) f = R8[f] = Xxb[f];
            else {
              var h = f.charCodeAt(0);
              if (31 < h && 127 > h) var l = f;
              else {
                if (256 > h) {
                  if (((l = "\\x"), 16 > h || 256 < h)) l += "0";
                } else (l = "\\u"), 4096 > h && (l += "0");
                l += h.toString(16).toUpperCase();
              }
              f = R8[f] = l;
            }
            f = e + f;
          }
          e = f;
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      d += "</body></html>";
      g.Sd("b/12014412");
      c = g.ke(d);
      a.Co.open();
      a.Co.write(g.je(c));
      a.Co.close();
      a.Co.parentWindow.m = (0, g.ib)(a.Q$, a);
      a.Co.parentWindow.d = (0, g.ib)(a.nZ, a, !0);
      a.Co.parentWindow.rpcClose = (0, g.ib)(a.nZ, a, !1);
      c = a.Co.createElement("DIV");
      a.Co.parentWindow.document.body.appendChild(c);
      d = g.be(a.zs.toString()) || g.ee;
      d = g.ze(g.$d(d));
      g.Sd("b/12014412");
      d = g.ke('<iframe src="' + d + '"></iframe>');
      g.Qba(c, d);
      a.j.Vn(1);
    },
    O8 = function (a) {
      a.EL = Date.now() + a.B;
      Zxb(a, a.B);
    },
    Zxb = function (a, b) {
      if (null != a.Tx) throw Error("WatchDog timer not null");
      a.Tx = K8((0, g.ib)(a.t2, a), b);
    },
    $xb = function (a) {
      a.Tx && (g.Ua.clearTimeout(a.Tx), (a.Tx = null));
    },
    Q8 = function (a) {
      a.j.kh() || a.Nu || a.j.vG(a);
    },
    P8 = function (a) {
      $xb(a);
      g.ub(a.sG);
      a.sG = null;
      a.G.stop();
      a.C.Pf();
      if (a.jj) {
        var b = a.jj;
        a.jj = null;
        b.abort();
        b.dispose();
      }
      a.Co && (a.Co = null);
    },
    ayb = function (a, b) {
      try {
        a.j.mT(a, b), a.j.Vn(4);
      } catch (c) {}
    },
    cyb = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        byb(a, b, function (h) {
          h
            ? c(!0)
            : g.Ua.setTimeout(function () {
                cyb(a, b, c, d, f);
              }, f);
        });
      }
    },
    byb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          S8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      g.Ua.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    S8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    dyb = function (a) {
      this.j = a;
      this.B = new s8();
    },
    eyb = function (a) {
      var b = T8(a.j, a.DC, "/mail/images/cleardot.gif");
      a8(b);
      cyb(b.toString(), 5e3, (0, g.ib)(a.Q4, a), 3, 2e3);
      a.Vn(1);
    },
    fyb = function (a) {
      var b = a.j.K;
      if (null != b)
        M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));
      else if (
        ((a.Pj = new N8(a)),
        (a.Pj.Ou = a.GL),
        (b = a.j),
        (b = T8(b, b.ZB() ? a.YB : null, a.HL)),
        M8(5),
        !g.bf || g.Sc(10))
      )
        b8(b, "TYPE", "xmlhttp"), Txb(a.Pj, b, !1, a.YB, !1);
      else {
        b8(b, "TYPE", "html");
        var c = a.Pj;
        a = !!a.YB;
        c.Sx = 3;
        c.xs = a8(b.clone());
        Yxb(c, a);
      }
    },
    gyb = function (a, b, c) {
      this.j = 1;
      this.B = [];
      this.C = [];
      this.G = new s8();
      this.Y = a || null;
      this.K = null != b ? b : null;
      this.Z = c || !1;
    },
    hyb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    iyb = function (a, b, c, d) {
      g.Ab.call(this, "timingevent", a);
      this.size = b;
      this.gB = d;
    },
    jyb = function (a) {
      g.Ab.call(this, "serverreachability", a);
    },
    lyb = function (a) {
      a.w2(1, 0);
      a.wG = T8(a, null, a.IL);
      kyb(a);
    },
    myb = function (a) {
      a.Qs && (a.Qs.abort(), (a.Qs = null));
      a.Rg && (a.Rg.cancel(), (a.Rg = null));
      a.Aq && (g.Ua.clearTimeout(a.Aq), (a.Aq = null));
      V8(a);
      a.bk && (a.bk.cancel(), (a.bk = null));
      a.As && (g.Ua.clearTimeout(a.As), (a.As = null));
    },
    nyb = function (a, b) {
      if (0 == a.j)
        throw Error("Invalid operation: sending map when state is closed");
      a.B.push(new hyb(a.z2++, b));
      (2 != a.j && 3 != a.j) || kyb(a);
    },
    oyb = function (a) {
      var b = 0;
      a.Rg && b++;
      a.bk && b++;
      return b;
    },
    kyb = function (a) {
      a.bk || a.As || ((a.As = K8((0, g.ib)(a.qT, a), 0)), (a.Vx = 0));
    },
    ryb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.bC = Math.floor(1e5 * Math.random());
          b = a.bC++;
          var c = new N8(a, "", b);
          c.Ou = a.Lo;
          var d = pyb(a),
            e = a.wG.clone();
          g.to(e, "RID", b);
          g.to(e, "CVER", "1");
          W8(a, e);
          Sxb(c, e, d);
          a.bk = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? qyb(a, b) : 0 == a.B.length || a.bk || qyb(a));
    },
    qyb = function (a, b) {
      if (b)
        if (6 < a.Qu) {
          a.B = a.C.concat(a.B);
          a.C.length = 0;
          var c = a.bC - 1;
          b = pyb(a);
        } else (c = b.N), (b = b.Pu);
      else (c = a.bC++), (b = pyb(a));
      var d = a.wG.clone();
      g.to(d, "SID", a.D);
      g.to(d, "RID", c);
      g.to(d, "AID", a.Wx);
      W8(a, d);
      c = new N8(a, a.D, c, a.Vx + 1);
      c.Ou = a.Lo;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.bk = c;
      Sxb(c, d, b);
    },
    W8 = function (a, b) {
      a.Ji &&
        (a = a.Ji.uT()) &&
        g.Xc(a, function (c, d) {
          g.to(b, d, c);
        });
    },
    pyb = function (a) {
      var b = Math.min(a.B.length, 1e3),
        c = ["count=" + b];
      if (6 < a.Qu && 0 < b) {
        var d = a.B[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { mA: e.mA }, f++) {
        e.mA = a.B[f].j;
        var h = a.B[f].map;
        e.mA = 6 >= a.Qu ? f : e.mA - d;
        try {
          g.Xc(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.mA + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.mA + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.B.splice(0, b));
      return c.join("&");
    },
    syb = function (a) {
      a.Rg ||
        a.Aq ||
        ((a.N = 1), (a.Aq = K8((0, g.ib)(a.pT, a), 0)), (a.Ux = 0));
    },
    uyb = function (a) {
      if (a.Rg || a.Aq || 3 <= a.Ux) return !1;
      a.N++;
      a.Aq = K8((0, g.ib)(a.pT, a), tyb(a, a.Ux));
      a.Ux++;
      return !0;
    },
    U8 = function (a, b, c) {
      a.eL = null == a.K ? c : !a.K;
      a.Mo = b.zq;
      a.Z || lyb(a);
    },
    V8 = function (a) {
      null != a.Ru && (g.Ua.clearTimeout(a.Ru), (a.Ru = null));
    },
    tyb = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    X8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Ji && (c = null);
        var d = (0, g.ib)(a.Mba, a);
        c || ((c = new g.lo("//www.google.com/images/cleardot.gif")), a8(c));
        byb(c.toString(), 1e4, d);
      } else M8(2);
      vyb(a, b);
    },
    vyb = function (a, b) {
      a.j = 0;
      a.Ji && a.Ji.rT(b);
      wyb(a);
      myb(a);
    },
    wyb = function (a) {
      a.j = 0;
      a.Mo = -1;
      if (a.Ji)
        if (0 == a.C.length && 0 == a.B.length) a.Ji.JL();
        else {
          var b = g.Mb(a.C),
            c = g.Mb(a.B);
          a.C.length = 0;
          a.B.length = 0;
          a.Ji.JL(b, c);
        }
    },
    T8 = function (a, b, c) {
      var d = g.uo(c);
      if ("" != d.j) b && g.no(d, b + "." + d.j), g.oo(d, d.D);
      else {
        var e = window.location;
        d = Yvb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.aC &&
        g.Xc(a.aC, function (f, h) {
          g.to(d, h, f);
        });
      g.to(d, "VER", a.Qu);
      W8(a, d);
      return d;
    },
    xyb = function () {},
    yyb = function () {
      this.j = [];
      this.B = [];
    },
    zyb = function (a) {
      g.Ab.call(this, "channelMessage");
      this.message = a;
    },
    Ayb = function (a) {
      g.Ab.call(this, "channelError");
      this.error = a;
    },
    Byb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    Y8 = function (a, b) {
      g.J.call(this);
      this.j = new g.Au(this.I$, 0, this);
      g.L(this, this.j);
      this.Vi = 5e3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.ib)(a, b));
      else if (a && "function" === typeof a.handleEvent)
        a = (0, g.ib)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.C = a;
    },
    Cyb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d =
        void 0 === d
          ? function () {
              return "";
            }
          : d;
      e = void 0 === e ? !1 : e;
      this.Aa = a;
      this.N = b;
      this.C = new g.ev();
      this.B = new Y8(this.aba, this);
      this.j = null;
      this.ma = !1;
      this.K = null;
      this.Y = "";
      this.Z = this.G = 0;
      this.D = [];
      this.Sa = c;
      this.ra = d;
      this.Va = e;
      this.Na = new Zvb();
      this.Fa = new awb();
      this.Ka = new cwb();
      this.Da = new ewb();
      this.Za = new gwb();
      this.eb = new hwb();
    },
    Dyb = function (a) {
      if (a.j) {
        var b = a.ra(),
          c = a.j.Lo || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.j.Lo = c;
      }
    },
    Z8 = function (a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.Fl(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.Gl(a) || "";
      a = g.pc();
      0 <= a.search("MSIE") &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.oc(a, "10.0") && (this.B = !1));
    },
    $8 = function (a, b) {
      var c = a.j;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
      return g.Ml(c + b, {});
    },
    Eyb = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5e3,
        withCredentials: !1,
        onSuccess: g.jb(a.D, d, !0),
        onError: g.jb(a.C, e),
        onTimeout: g.jb(a.G, e),
      };
      c &&
        ((a.postParams = c),
        (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
      return g.fC(b, a);
    },
    Fyb = function (a, b) {
      g.Fd.call(this);
      var c = this;
      this.Gd = a();
      this.Gd.subscribe("handlerOpened", this.D2, this);
      this.Gd.subscribe("handlerClosed", this.B2, this);
      this.Gd.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.Gd.subscribe("handlerMessage", this.C2, this);
      this.j = b;
    },
    Gyb = function (a, b, c) {
      var d = this;
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      var e = void 0 === e ? new Lxb() : e;
      var f = void 0 === f ? new g.ev() : f;
      this.pathPrefix = a;
      this.j = b;
      this.Aa = c;
      this.G = f;
      this.Z = null;
      this.Y = this.N = 0;
      this.channel = null;
      this.K = 0;
      this.C = new Y8(function () {
        d.C.isActive();
        var h;
        0 === (null == (h = d.channel) ? void 0 : oxb(new Oxb(h, h.j).j.B)) &&
          d.connect(d.Z, d.N);
      });
      this.D = {};
      this.B = {};
      this.ma = !1;
      this.logger = null;
      this.ra = [];
      this.Lg = void 0;
      this.Na = new Zvb();
      this.Fa = new awb();
      this.Ka = new cwb();
      this.Da = new ewb();
    },
    Hyb = function (a) {
      g.yd(a.channel, "m", function () {
        a.K = 3;
        a.C.reset();
        a.Z = null;
        a.N = 0;
        for (var b = g.v(a.ra), c = b.next(); !c.done; c = b.next())
          (c = c.value), a.channel && a.channel.send(c);
        a.ra = [];
        a.qa("webChannelOpened");
        $vb(a.Na, "WEB_CHANNEL");
      });
      g.yd(a.channel, "n", function () {
        a.K = 0;
        a.C.isActive() || a.qa("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : Pxb(new Oxb(b, b.j));
        c && (a.ra = [].concat(g.qa(c)));
        bwb(a.Fa, "WEB_CHANNEL");
      });
      g.yd(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0]
          ? (a.C.start(), a.channel && a.channel.close())
          : a.qa("webChannelMessage", new Byb(c[0], c[1]));
        a.Lg = b.statusCode;
        dwb(a.Ka, "WEB_CHANNEL");
      });
      g.yd(a.channel, "o", function () {
        401 === a.Lg || a.C.start();
        a.qa("webChannelError");
        fwb(a.Da, "WEB_CHANNEL");
      });
    },
    Iyb = function (a) {
      var b = a.Aa();
      b
        ? (a.D["x-youtube-lounge-xsrf-token"] = b)
        : delete a.D["x-youtube-lounge-xsrf-token"];
    },
    Jyb = function (a) {
      g.Fd.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.G2, this);
      this.j.subscribe("webChannelClosed", this.E2, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.F2, this);
    },
    Kyb = function (a, b, c, d, e) {
      function f() {
        return new Cyb($8(a, "/bc"), b, !1, c, d);
      }
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      return g.KB("enable_mdx_web_channel_desktop")
        ? new Jyb(function () {
            return new Gyb($8(a, "/wc"), b, c);
          })
        : new Fyb(f, e);
    },
    Oyb = function () {
      var a = Lyb;
      Myb();
      a9.push(a);
      Nyb();
    },
    b9 = function (a, b) {
      Myb();
      var c = Pyb(a, String(b));
      0 == a9.length
        ? Qyb(c)
        : (Nyb(),
          g.dc(a9, function (d) {
            d(c);
          }));
    },
    c9 = function (a) {
      b9("CP", a);
    },
    Myb = function () {
      a9 ||
        ((a9 = g.Wa("yt.mdx.remote.debug.handlers_") || []),
        g.Va("yt.mdx.remote.debug.handlers_", a9));
    },
    Qyb = function (a) {
      var b = (d9 + 1) % 50;
      d9 = b;
      e9[b] = a;
      f9 || (f9 = 49 == b);
    },
    Nyb = function () {
      var a = a9;
      if (e9[0]) {
        var b = f9 ? d9 : -1;
        do {
          b = (b + 1) % 50;
          var c = e9[b];
          g.dc(a, function (d) {
            d(c);
          });
        } while (b != d9);
        e9 = Array(50);
        d9 = -1;
        f9 = !1;
      }
    },
    Pyb = function (a, b) {
      var c = (Date.now() - Ryb) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    g9 = function (a) {
      g.cG.call(this);
      this.K = a;
      this.screens = [];
    },
    Syb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c)
        return (
          (a = c.name),
          (c.id = b.id || c.id),
          (c.name = b.name),
          (c.token = b.token),
          (c.uuid = b.uuid || c.uuid),
          c.name != a
        );
      a.screens.push(b);
      return !0;
    },
    Tyb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.Ys(a.screens, function (f) {
        return !!twb(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = Syb(a, b[d]) || c;
      return c;
    },
    Uyb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.Ys(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    Vyb = function (a, b, c, d, e) {
      g.cG.call(this);
      this.C = a;
      this.N = b;
      this.D = c;
      this.K = d;
      this.G = e;
      this.B = 0;
      this.j = null;
      this.kd = NaN;
    },
    i9 = function (a) {
      g9.call(this, "LocalScreenService");
      this.B = a;
      this.j = NaN;
      h9(this);
      this.info("Initializing with " + qwb(this.screens));
    },
    Wyb = function (a) {
      if (a.screens.length) {
        var b = g.kr(a.screens, function (d) {
            return d.id;
          }),
          c = $8(a.B, "/pairing/get_lounge_token_batch");
        Eyb(
          a.B,
          c,
          { screen_ids: b.join(",") },
          (0, g.ib)(a.F6, a),
          (0, g.ib)(a.E6, a)
        );
      }
    },
    h9 = function (a) {
      if (g.KB("deprecate_pair_servlet_enabled")) return Tyb(a, []);
      var b = pwb(Awb());
      b = g.Ys(b, function (c) {
        return !c.uuid;
      });
      return Tyb(a, b);
    },
    j9 = function (a, b) {
      Cwb(g.kr(a.screens, nwb));
      b && Bwb();
    },
    Yyb = function (a, b) {
      g.cG.call(this);
      this.K = b;
      b = (b = g.YC("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.Gb(b, h);
      }
      this.j = c;
      this.G = a;
      this.C = this.D = NaN;
      this.B = null;
      Xyb("Initialized with " + g.Lm(this.j));
    },
    Zyb = function (a, b, c) {
      var d = $8(a.G, "/pairing/get_screen_availability");
      Eyb(
        a.G,
        d,
        { lounge_token: b.token },
        (0, g.ib)(function (e) {
          e = e.screens || [];
          for (var f = e.length, h = 0; h < f; ++h)
            if (e[h].loungeToken == b.token) {
              c("online" == e[h].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.ib)(function () {
          c(!1);
        }, a)
      );
    },
    azb = function (a, b) {
      a: if (Vvb(b) != Vvb(a.j)) var c = !1;
      else {
        c = g.dd(b);
        for (var d = c.length, e = 0; e < d; ++e)
          if (!a.j[c[e]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        (Xyb("Updated online screens: " + g.Lm(a.j)),
        (a.j = b),
        a.qa("screenChange"));
      $yb(a);
    },
    k9 = function (a) {
      isNaN(a.C) || g.cC(a.C);
      a.C = g.aC((0, g.ib)(a.sR, a), 0 < a.D && a.D < g.kb() ? 2e4 : 1e4);
    },
    Xyb = function (a) {
      b9("OnlineScreenService", a);
    },
    bzb = function (a) {
      var b = {};
      g.dc(a.K(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.jg("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    $yb = function (a) {
      a = g.dd(
        g.Yc(a.j, function (b) {
          return b;
        })
      );
      g.Yb(a);
      a.length
        ? g.XC("yt-remote-online-screen-ids", a.join(","), 60)
        : g.ZC("yt-remote-online-screen-ids");
    },
    l9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      g9.call(this, "ScreenService");
      this.D = a;
      this.N = b;
      this.j = this.B = null;
      this.C = [];
      this.G = {};
      czb(this);
    },
    ezb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.G[b]);
      var h = a.Uk(),
        l = c ? i8(h, c) : null;
      (c && (a.N || l)) || (l = i8(h, b));
      if (l) {
        l.uuid = b;
        var m = m9(a, l);
        Zyb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else
        c
          ? dzb(
              a,
              c,
              (0, g.ib)(function (n) {
                var p = m9(
                  this,
                  new f8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || "",
                  })
                );
                Zyb(this.j, p, function (q) {
                  e(q ? p : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    fzb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d)
        if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    gzb = function (a, b, c) {
      Zyb(a.j, b, c);
    },
    dzb = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = (h && h.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.fC($8(a.D, "/pairing/get_lounge_token_batch"), e);
    },
    hzb = function (a) {
      a.screens = a.B.Uk();
      var b = a.G,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + qwb(a.screens));
    },
    czb = function (a) {
      izb(a);
      a.B = new i9(a.D);
      a.B.subscribe("screenChange", (0, g.ib)(a.P6, a));
      hzb(a);
      a.N || (a.C = pwb(g.YC("yt-remote-automatic-screen-cache") || []));
      izb(a);
      a.info("Initializing automatic screens: " + qwb(a.C));
      a.j = new Yyb(a.D, (0, g.ib)(a.Uk, a, !0));
      a.j.subscribe(
        "screenChange",
        (0, g.ib)(function () {
          this.qa("onlineScreenChange");
        }, a)
      );
    },
    m9 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = i8(a.C, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.C.push(b),
          a.N || jzb(a));
      izb(a);
      a.G[b.uuid] = b.id;
      g.XC("yt-remote-device-id-map", a.G, 31536e3);
      return b;
    },
    jzb = function (a) {
      a = g.Ys(a.C, function (b) {
        return "shortLived" != b.idType;
      });
      g.XC("yt-remote-automatic-screen-cache", g.kr(a, nwb));
    },
    izb = function (a) {
      a.G = g.YC("yt-remote-device-id-map") || {};
    },
    n9 = function (a, b, c) {
      g.cG.call(this);
      this.Da = c;
      this.D = a;
      this.B = b;
      this.j = null;
    },
    o9 = function (a, b) {
      a.j = b;
      a.qa("sessionScreen", a.j);
    },
    kzb = function (a, b) {
      a.j && ((a.j.token = b), m9(a.D, a.j));
      a.qa("sessionScreen", a.j);
    },
    p9 = function (a, b) {
      b9(a.Da, b);
    },
    q9 = function (a, b, c) {
      n9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.C = null;
      this.ra = (0, g.ib)(this.L2, this);
      this.Fa = (0, g.ib)(this.Y$, this);
      this.ma = g.aC(function () {
        lzb(d, null);
      }, 12e4);
      this.N = this.G = this.K = this.Z = 0;
      this.Aa = !1;
      this.Y = "unknown";
    },
    nzb = function (a, b) {
      g.cC(a.N);
      a.N = 0;
      0 == b
        ? mzb(a)
        : (a.N = g.aC(function () {
            mzb(a);
          }, b));
    },
    mzb = function (a) {
      ozb(a, "getLoungeToken");
      g.cC(a.G);
      a.G = g.aC(function () {
        pzb(a, null);
      }, 3e4);
    },
    ozb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.Lm());
      var c = {};
      c.type = b;
      a.C
        ? a.C.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            function () {},
            (0, g.ib)(function () {
              p9(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : p9(a, "Sending yt message without session: " + g.Lm(c));
    },
    qzb = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.j && a.j.id == b) ||
            a.JW(
              b,
              function (c) {
                o9(a, c);
              },
              function () {
                return a.Ej();
              },
              5
            ))
        : a.Ej(Error("Waiting for session status timed out."));
    },
    szb = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new f8(b);
      rzb(
        a,
        d,
        function (e) {
          e
            ? ((a.Aa = !0), m9(a.D, d), o9(a, d), (a.Y = "unknown"), nzb(a, c))
            : (g.NB(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.Ej());
        },
        5
      );
    },
    lzb = function (a, b) {
      g.cC(a.ma);
      a.ma = 0;
      b
        ? a.config_.enableCastLoungeToken && b.loungeToken
          ? b.deviceId
            ? (a.j && a.j.uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? szb(
                    a,
                    {
                      name: a.B.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.NB(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  qzb(a, b.screenId)))
            : (g.NB(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              qzb(a, b.screenId))
          : qzb(a, b.screenId)
        : a.Ej(Error("Waiting for session status timed out."));
    },
    pzb = function (a, b) {
      g.cC(a.G);
      a.G = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.Y = c),
          nzb(a, 3e4))
        : (kzb(a, b.loungeToken),
          (a.Aa = !1),
          (a.Y = "unknown"),
          nzb(a, b.loungeTokenRefreshIntervalMs));
    },
    rzb = function (a, b, c, d) {
      g.cC(a.K);
      a.K = 0;
      gzb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.aC(function () {
              rzb(a, b, c, d - 1);
            }, 300));
      });
    },
    tzb = function (a) {
      g.cC(a.Z);
      a.Z = 0;
      g.cC(a.K);
      a.K = 0;
      g.cC(a.ma);
      a.ma = 0;
      g.cC(a.G);
      a.G = 0;
      g.cC(a.N);
      a.N = 0;
    },
    r9 = function (a, b, c, d) {
      n9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.C = this.Z = null;
      this.Fa = "";
      this.Sa = c;
      this.Na = null;
      this.ma = function () {};
      this.Y = NaN;
      this.Ka = (0, g.ib)(this.M2, this);
      this.G = function () {};
      this.N = this.K = 0;
      this.ra = !1;
      this.Aa = "unknown";
    },
    s9 = function (a) {
      var b;
      return !!(
        a.config_.enableDialLoungeToken &&
        (null == (b = a.C) ? 0 : b.getDialAppInfo)
      );
    },
    uzb = function (a) {
      a.G = a.D.wT(
        a.Fa,
        a.B.label,
        a.B.friendlyName,
        s9(a),
        function (b, c) {
          a.G = function () {};
          a.ra = !0;
          o9(a, b);
          "shortLived" == b.idType && 0 < c && t9(a, c);
        },
        function (b) {
          a.G = function () {};
          a.Ej(b);
        }
      );
    },
    vzb = function (a) {
      var b = {};
      b.pairingCode = a.Fa;
      b.theme = a.Sa;
      Ewb() && (b.env_useStageMdx = 1);
      return g.Ll(b);
    },
    wzb = function (a) {
      return new Promise(function (b) {
        a.Fa = rwb();
        if (a.Na) {
          var c = new chrome.cast.DialLaunchResponse(!0, vzb(a));
          b(c);
          uzb(a);
        } else
          (a.ma = function () {
            g.cC(a.Y);
            a.ma = function () {};
            a.Y = NaN;
            var d = new chrome.cast.DialLaunchResponse(!0, vzb(a));
            b(d);
            uzb(a);
          }),
            (a.Y = g.aC(function () {
              a.ma();
            }, 100));
      });
    },
    yzb = function (a, b, c) {
      a.info(
        "initOnConnectedScreenDataPromise_: Received screenData: " +
          JSON.stringify(b)
      );
      var d = new f8(b);
      return new Promise(function (e) {
        xzb(
          a,
          d,
          function (f) {
            f
              ? ((a.ra = !0), m9(a.D, d), o9(a, d), t9(a, c))
              : g.NB(
                  Error(
                    "DialSession, RemoteScreen from screenData: " +
                      JSON.stringify(b) +
                      " is not online."
                  )
                );
            e(f);
          },
          5
        );
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : wzb(a);
      });
    },
    zzb = function (a, b) {
      var c = a.Z.receiver.label,
        d = a.B.friendlyName;
      return new Promise(function (e) {
        ezb(
          a.D,
          c,
          b,
          d,
          function (f) {
            f && f.token && o9(a, f);
            e(f);
          },
          function (f) {
            p9(a, "Failed to get DIAL screen: " + f);
            e(null);
          }
        );
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : wzb(a);
      });
    },
    xzb = function (a, b, c, d) {
      g.cC(a.K);
      a.K = 0;
      gzb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.aC(function () {
              xzb(a, b, c, d - 1);
            }, 300));
      });
    },
    t9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      s9(a) &&
        (g.cC(a.N),
        (a.N = 0),
        0 == b
          ? Azb(a)
          : (a.N = g.aC(function () {
              Azb(a);
            }, b)));
    },
    Azb = function (a) {
      s9(a) &&
        a.C.getDialAppInfo(
          function (b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
              var d;
              (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
                (c = "staleLoungeToken");
            } else c = "missingLoungeToken";
            c
              ? ((a.Aa = c), t9(a, 3e4))
              : ((a.ra = !1),
                (a.Aa = "unknown"),
                kzb(a, b.loungeToken),
                t9(a, b.loungeTokenRefreshIntervalMs));
          },
          function (b) {
            a.info("getDialAppInfo error: " + b);
            a.Aa = "noLoungeTokenResponse";
            t9(a, 3e4);
          }
        );
    },
    Bzb = function (a) {
      g.cC(a.K);
      a.K = 0;
      g.cC(a.N);
      a.N = 0;
      a.G();
      a.G = function () {};
      g.cC(a.Y);
    },
    u9 = function (a, b) {
      n9.call(this, a, b, "ManualSession");
      this.C = g.aC((0, g.ib)(this.cA, this, null), 150);
    },
    v9 = function (a, b) {
      g.cG.call(this);
      this.config_ = b;
      this.B = a;
      this.Z = b.appId || "233637DE";
      this.D = b.theme || "cl";
      this.Y = b.disableCastApi || !1;
      this.K = b.forceMirroring || !1;
      this.j = null;
      this.N = !1;
      this.C = [];
      this.G = (0, g.ib)(this.U9, this);
    },
    Czb = function (a, b) {
      return b
        ? g.Eb(
            a.C,
            function (c) {
              return g8(b, c.label);
            },
            a
          )
        : null;
    },
    w9 = function (a) {
      b9("Controller", a);
    },
    Lyb = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    x9 = function (a) {
      return a.N || !!a.C.length || !!a.j;
    },
    y9 = function (a, b, c) {
      b != a.j &&
        (g.ub(a.j),
        (a.j = b)
          ? (c
              ? a.qa("yt-remote-cast2-receiver-resumed", b.B)
              : a.qa("yt-remote-cast2-receiver-selected", b.B),
            b.subscribe("sessionScreen", (0, g.ib)(a.lZ, a, b)),
            b.subscribe("sessionFailed", function () {
              return Dzb(a, b);
            }),
            b.j
              ? a.qa("yt-remote-cast2-session-change", b.j)
              : c && a.j.cA(null))
          : a.qa("yt-remote-cast2-session-change", null));
    },
    Dzb = function (a, b) {
      a.j == b && a.qa("yt-remote-cast2-session-failed");
    },
    Ezb = function (a) {
      var b = a.B.vT(),
        c = a.j && a.j.B;
      a = g.kr(
        b,
        function (d) {
          c && g8(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = Czb(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    Lzb = function (a, b, c, d) {
      d.disableCastApi
        ? z9("Cannot initialize because disabled by Mdx config.")
        : Fzb()
        ? Gzb(b, d) &&
          (Hzb(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? Izb(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? Izb(a, c)
                  : (A9("Failed to load cast API: " + f),
                    Jzb(!1),
                    Hzb(!1),
                    g.ZC("yt-remote-cast-available"),
                    g.ZC("yt-remote-cast-receiver"),
                    Kzb(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.fsa(
                    "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"
                  )
                : 0 <= window.navigator.userAgent.indexOf("Android") &&
                  0 <= window.navigator.userAgent.indexOf("Chrome/") &&
                  window.navigator.presentation
                ? 60 <= Gwb() && Pwb()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  0 <= window.navigator.userAgent.indexOf("Edge")
                ? Kwb()
                : 89 <= Gwb()
                ? Rwb()
                : (Owb(), p8(Qwb.map(Lwb)))))
        : z9("Cannot initialize because not running Chrome");
    },
    Kzb = function () {
      z9("dispose");
      var a = B9();
      a && a.dispose();
      g.Va("yt.mdx.remote.cloudview.instance_", null);
      Mzb(!1);
      g.NE(Nzb);
      Nzb.length = 0;
    },
    C9 = function () {
      return !!g.YC("yt-remote-cast-installed");
    },
    Ozb = function () {
      var a = g.YC("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    Pzb = function () {
      z9("clearCurrentReceiver");
      g.ZC("yt-remote-cast-receiver");
    },
    Qzb = function () {
      return C9()
        ? B9()
          ? B9().getCastSession()
          : (A9("getCastSelector: Cast is not initialized."), null)
        : (A9("getCastSelector: Cast API is not installed!"), null);
    },
    Rzb = function () {
      C9()
        ? B9()
          ? D9()
            ? (z9("Requesting cast selector."), B9().requestSession())
            : (z9("Wait for cast API to be ready to request the session."),
              Nzb.push(g.ME("yt-remote-cast2-api-ready", Rzb)))
          : A9("requestCastSelector: Cast is not initialized.")
        : A9("requestCastSelector: Cast API is not installed!");
    },
    E9 = function (a, b) {
      D9()
        ? B9().setConnectedScreenStatus(a, b)
        : A9("setConnectedScreenStatus called before ready.");
    },
    Fzb = function () {
      var a = 0 <= g.pc().search(/ (CrMo|Chrome|CriOS)\//);
      return g.iL || a;
    },
    Szb = function (a, b) {
      B9().init(a, b);
    },
    Gzb = function (a, b) {
      var c = !1;
      B9() ||
        ((a = new v9(a, b)),
        a.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.XC("yt-remote-cast-available", d);
          n8("yt-remote-cast2-availability-change", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          z9("onReceiverSelected: " + d.friendlyName);
          g.XC("yt-remote-cast-receiver", d);
          n8("yt-remote-cast2-receiver-selected", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          z9("onReceiverResumed: " + d.friendlyName);
          g.XC("yt-remote-cast-receiver", d);
          n8("yt-remote-cast2-receiver-resumed", d);
        }),
        a.subscribe("yt-remote-cast2-session-change", function (d) {
          z9("onSessionChange: " + h8(d));
          d || g.ZC("yt-remote-cast-receiver");
          n8("yt-remote-cast2-session-change", d);
        }),
        g.Va("yt.mdx.remote.cloudview.instance_", a),
        (c = !0));
      z9("cloudview.createSingleton_: " + c);
      return c;
    },
    B9 = function () {
      return g.Wa("yt.mdx.remote.cloudview.instance_");
    },
    Izb = function (a, b) {
      Jzb(!0);
      Hzb(!1);
      Szb(a, function (c) {
        c
          ? (Mzb(!0), g.OE("yt-remote-cast2-api-ready"))
          : (A9("Failed to initialize cast API."),
            Jzb(!1),
            g.ZC("yt-remote-cast-available"),
            g.ZC("yt-remote-cast-receiver"),
            Kzb());
        b(c);
      });
    },
    z9 = function (a) {
      b9("cloudview", a);
    },
    A9 = function (a) {
      b9("cloudview", a);
    },
    Jzb = function (a) {
      z9("setCastInstalled_ " + a);
      g.XC("yt-remote-cast-installed", a);
    },
    D9 = function () {
      return !!g.Wa("yt.mdx.remote.cloudview.apiReady_");
    },
    Mzb = function (a) {
      z9("setApiReady_ " + a);
      g.Va("yt.mdx.remote.cloudview.apiReady_", a);
    },
    Hzb = function (a) {
      g.Va("yt.mdx.remote.cloudview.initializing_", a);
    },
    F9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.N = 0;
      this.trackData = null;
      this.Zk = this.Gp = !1;
      this.Z = this.G = this.j = this.D = 0;
      this.C = NaN;
      this.B = !1;
      this.reset(a);
    },
    Tzb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.Gp = !1;
      a.Zk = !1;
      a.N = 0;
      a.K = g.kb();
      a.D = 0;
      a.j = 0;
      a.G = 0;
      a.Z = 0;
      a.C = NaN;
      a.B = !1;
    },
    G9 = function (a) {
      return a.isPlaying() ? (g.kb() - a.K) / 1e3 : 0;
    },
    H9 = function (a, b) {
      a.N = b;
      a.K = g.kb();
    },
    I9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.kb() - a.K) / 1e3 + a.N;
        case -1e3:
          return 0;
      }
      return a.N;
    },
    J9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && Tzb(a);
    },
    Uzb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.sd(a.trackData);
      b.hasPrevious = a.Gp;
      b.hasNext = a.Zk;
      b.playerTime = a.N;
      b.playerTimeAt = a.K;
      b.seekableStart = a.D;
      b.seekableEnd = a.j;
      b.duration = a.G;
      b.loadedTime = a.Z;
      b.liveIngestionTime = a.C;
      return b;
    },
    L9 = function (a, b) {
      g.cG.call(this);
      this.C = 0;
      this.D = a;
      this.K = [];
      this.G = new yyb();
      this.B = this.j = null;
      this.Y = (0, g.ib)(this.J8, this);
      this.N = (0, g.ib)(this.BE, this);
      this.Z = (0, g.ib)(this.I8, this);
      this.ma = (0, g.ib)(this.M8, this);
      var c = 0;
      a
        ? ((c = a.getProxyState()),
          3 != c && (a.subscribe("proxyStateChange", this.LR, this), Vzb(this)))
        : (c = 3);
      0 != c &&
        (b
          ? this.LR(c)
          : g.aC(
              (0, g.ib)(function () {
                this.LR(c);
              }, this),
              0
            ));
      (a = Qzb()) && K9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.ma);
    },
    M9 = function (a) {
      return new F9(a.D.getPlayerContextData());
    },
    Vzb = function (a) {
      g.dc(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(
          " "
        ),
        function (b) {
          this.K.push(this.D.subscribe(b, g.jb(this.S9, b), this));
        },
        a
      );
    },
    Wzb = function (a) {
      g.dc(
        a.K,
        function (b) {
          this.D.unsubscribeByKey(b);
        },
        a
      );
      a.K.length = 0;
    },
    N9 = function (a) {
      return 1 == a.getState();
    },
    O9 = function (a, b) {
      var c = a.G;
      50 > c.j.length + c.B.length && a.G.B.push(b);
    },
    Xzb = function (a, b, c) {
      var d = M9(a);
      H9(d, c);
      -1e3 != d.playerState && (d.playerState = b);
      P9(a, d);
    },
    Q9 = function (a, b, c) {
      a.D.sendMessage(b, c);
    },
    P9 = function (a, b) {
      Wzb(a);
      a.D.setPlayerContextData(Uzb(b));
      Vzb(a);
    },
    K9 = function (a, b) {
      a.B &&
        (a.B.removeUpdateListener(a.Y),
        a.B.removeMediaListener(a.N),
        a.BE(null));
      a.B = b;
      a.B &&
        (c9("Setting cast session: " + a.B.sessionId),
        a.B.addUpdateListener(a.Y),
        a.B.addMediaListener(a.N),
        a.B.media.length && a.BE(a.B.media[0]));
    },
    Yzb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = M9(a);
        b.contentId != d.videoId &&
          c9("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        H9(d, a.j.getEstimatedTime());
        P9(a, d);
      } else c9("No cast media video. Ignoring state update.");
    },
    R9 = function (a, b, c) {
      return (0, g.ib)(function (d) {
        this.jg(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.jg("Retrying " + b + " using MDx browser channel."),
          Q9(this, b, c));
      }, a);
    },
    U9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.cG.call(this);
      var e = this;
      this.K = NaN;
      this.Fa = !1;
      this.Y = this.Z = this.ra = this.Aa = NaN;
      this.ma = [];
      this.G = this.N = this.D = this.j = this.B = null;
      this.Na = a;
      this.Ka = d;
      this.ma.push(
        g.OC(window, "beforeunload", function () {
          e.oz(2);
        })
      );
      this.C = [];
      this.j = new F9();
      this.Sa = b.id;
      this.Da = b.idType;
      this.B = Kyb(this.Na, c, this.AT, "shortLived" == this.Da, this.Sa);
      this.B.Ta("channelOpened", function () {
        Zzb(e);
      });
      this.B.Ta("channelClosed", function () {
        S9("Channel closed");
        isNaN(e.K) ? l8(!0) : l8();
        e.dispose();
      });
      this.B.Ta("channelError", function (f) {
        l8();
        isNaN(e.zD())
          ? (1 == f &&
              "shortLived" == e.Da &&
              e.qa("browserChannelAuthError", f),
            S9("Channel error: " + f + " without reconnection"),
            e.dispose())
          : ((e.Fa = !0),
            S9(
              "Channel error: " + f + " with reconnection in " + e.zD() + " ms"
            ),
            T9(e, 2));
      });
      this.B.Ta("channelMessage", function (f) {
        $zb(e, f);
      });
      this.B.Rr(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.$C() && g.XC("yt-remote-session-video-id", f);
      });
    },
    aAb = function (a) {
      return g.Eb(a.C, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    S9 = function (a) {
      b9("conn", a);
    },
    T9 = function (a, b) {
      a.qa("proxyStateChange", b);
    },
    bAb = function (a) {
      a.K = g.aC(function () {
        S9("Connecting timeout");
        a.oz(1);
      }, 2e4);
    },
    cAb = function (a) {
      g.cC(a.K);
      a.K = NaN;
    },
    dAb = function (a) {
      g.cC(a.Aa);
      a.Aa = NaN;
    },
    fAb = function (a) {
      eAb(a);
      a.ra = g.aC(function () {
        V9(a, "getNowPlaying");
      }, 2e4);
    },
    eAb = function (a) {
      g.cC(a.ra);
      a.ra = NaN;
    },
    Zzb = function (a) {
      S9("Channel opened");
      a.Fa &&
        ((a.Fa = !1),
        dAb(a),
        (a.Aa = g.aC(function () {
          S9("Timing out waiting for a screen.");
          a.oz(1);
        }, 15e3)));
    },
    hAb = function (a, b) {
      var c = null;
      if (b) {
        var d = aAb(a);
        d &&
          (c = {
            clientName: d.clientName,
            deviceMake: d.brand,
            deviceModel: d.model,
            osVersion: d.osVersion,
          });
      }
      g.Va("yt.mdx.remote.remoteClient_", c);
      b && (cAb(a), dAb(a));
      c = a.B.Rz() && isNaN(a.K);
      b == c
        ? b && (T9(a, 1), V9(a, "getSubtitlesTrack"))
        : b
        ? (a.EW() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), gAb(a))
        : a.oz(1);
    },
    iAb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId &&
        (g.kd(b.params) ? (a.j.trackData = null) : (a.j.trackData = b.params),
        a.qa("remotePlayerChange"));
    },
    jAb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      J9(a.j, d, e);
      a.qa("remoteQueueChange", c);
    },
    lAb = function (a, b) {
      b.params = b.params || {};
      jAb(a, b, "NOW_PLAYING_MAY_CHANGE");
      kAb(a, b);
      a.qa("autoplayDismissed");
    },
    kAb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      H9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1e3 == a.j.playerState && (c = -1e3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.Z = isNaN(c) ? 0 : c;
      a.j.Fl(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.B = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.D = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? fAb(a) : eAb(a);
      a.qa("remotePlayerChange");
    },
    mAb = function (a, b) {
      if (-1e3 != a.j.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.j.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        H9(a.j, isNaN(b) ? 0 : b);
        a.qa("remotePlayerChange");
      }
    },
    nAb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.qa("remotePlayerChange");
    },
    oAb = function (a, b) {
      a.N = b.params.videoId;
      a.qa("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    pAb = function (a, b) {
      a.N = b.params.videoId || null;
      a.qa("autoplayUpNext", a.N);
    },
    qAb = function (a, b) {
      a.G = b.params.autoplayMode;
      a.qa("autoplayModeChange", a.G);
      "DISABLED" == a.G && a.qa("autoplayDismissed");
    },
    rAb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.Gp = "true" == b.params.hasPrevious;
      a.j.Zk = c;
      a.qa("previousNextChange");
    },
    $zb = function (a, b) {
      b = b.message;
      b.params
        ? S9("Received: action=" + b.action + ", params=" + g.Lm(b.params))
        : S9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = c8(b.params.devices);
          a.C = g.kr(b, function (d) {
            return new e8(d);
          });
          b = !!g.Eb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          hAb(a, b);
          b = a.EX("mlm");
          a.qa("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.Jb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          hAb(a, !1);
          break;
        case "remoteConnected":
          var c = new e8(c8(b.params.device));
          g.Eb(a.C, function (d) {
            return d.equals(c);
          }) || Uvb(a.C, c);
          break;
        case "remoteDisconnected":
          c = new e8(c8(b.params.device));
          g.Jb(a.C, function (d) {
            return d.equals(c);
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          jAb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          lAb(a, b);
          break;
        case "onStateChange":
          kAb(a, b);
          break;
        case "onAdStateChange":
          mAb(a, b);
          break;
        case "onVolumeChanged":
          nAb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          iAb(a, b);
          break;
        case "nowAutoplaying":
          oAb(a, b);
          break;
        case "autoplayDismissed":
          a.qa("autoplayDismissed");
          break;
        case "autoplayUpNext":
          pAb(a, b);
          break;
        case "onAutoplayModeChanged":
          qAb(a, b);
          break;
        case "onHasPreviousNextChanged":
          rAb(a, b);
          break;
        case "requestAssistedSignIn":
          a.qa("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.qa("loopModeChange", b.params.loopMode);
          break;
        default:
          S9("Unrecognized action: " + b.action);
      }
    },
    gAb = function (a) {
      g.cC(a.Y);
      a.Y = g.aC(function () {
        a.oz(1);
      }, 864e5);
    },
    V9 = function (a, b, c) {
      c
        ? S9("Sending: action=" + b + ", params=" + g.Lm(c))
        : S9("Sending: action=" + b);
      a.B.sendMessage(b, c);
    },
    sAb = function (a) {
      g9.call(this, "ScreenServiceProxy");
      this.jh = a;
      this.j = [];
      this.j.push(this.jh.$_s("screenChange", (0, g.ib)(this.Q2, this)));
      this.j.push(this.jh.$_s("onlineScreenChange", (0, g.ib)(this.A9, this)));
    },
    xAb = function (a, b) {
      Dwb();
      if (!m8 || !m8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.IB("MDX_CONFIG") || b;
        uwb();
        ywb();
        W9 ||
          ((W9 = new Z8(b ? b.loungeApiHost : void 0)),
          Ewb() && (W9.j = "/api/loungedev"));
        X9 ||
          ((X9 = g.Wa("yt.mdx.remote.deferredProxies_") || []),
          g.Va("yt.mdx.remote.deferredProxies_", X9));
        tAb();
        var c = Y9();
        if (!c) {
          var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Va("yt.mdx.remote.screenService_", d);
          c = Y9();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
              forceMirroring: b.forceMirroring,
            });
          g.Va(
            "yt.mdx.remote.enableConnectWithInitialState_",
            b ? b.enableConnectWithInitialState || !1 : !1
          );
          Lzb(
            a,
            d,
            function (f) {
              f
                ? Z9() && E9(Z9(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    n8("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        b &&
          !g.Wa("yt.mdx.remote.initialized_") &&
          (g.Va("yt.mdx.remote.initialized_", !0),
          $9("Initializing: " + g.Lm(b)),
          a$.push(
            g.ME("yt-remote-cast2-api-ready", function () {
              n8("yt-remote-api-ready");
            })
          ),
          a$.push(
            g.ME("yt-remote-cast2-availability-change", function () {
              n8("yt-remote-receiver-availability-change");
            })
          ),
          a$.push(
            g.ME("yt-remote-cast2-receiver-selected", function () {
              b$(null);
              n8("yt-remote-auto-connect", "cast-selector-receiver");
            })
          ),
          a$.push(
            g.ME("yt-remote-cast2-receiver-resumed", function () {
              n8("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          ),
          a$.push(g.ME("yt-remote-cast2-session-change", uAb)),
          a$.push(
            g.ME("yt-remote-connection-change", function (f) {
              f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), Pzb());
            })
          ),
          a$.push(
            g.ME("yt-remote-cast2-session-failed", function () {
              n8("yt-remote-connection-failed");
            })
          ),
          (a = vAb()),
          b.isAuto && (a.id += "#dial"),
          (e = b.capabilities || []),
          g.KB("desktop_enable_autoplay") && e.push("atp"),
          0 < e.length && (a.capabilities = e),
          (a.name = b.device),
          (a.app = b.app),
          (b = b.theme) && (a.theme = b),
          $9(" -- with channel params: " + g.Lm(a)),
          a
            ? (g.XC("yt-remote-session-app", a.app),
              g.XC("yt-remote-session-name", a.name))
            : (g.ZC("yt-remote-session-app"), g.ZC("yt-remote-session-name")),
          g.Va("yt.mdx.remote.channelParams_", a),
          c.start(),
          Z9() || wAb());
      }
    },
    yAb = function () {
      var a = Y9().jh.$_gos();
      var b = d$();
      b && e$() && (twb(a, b) || a.push(b));
      return swb(a);
    },
    AAb = function () {
      var a = zAb();
      !a &&
        C9() &&
        Ozb() &&
        (a = { key: "cast-selector-receiver", name: Ozb() });
      return a;
    },
    zAb = function () {
      var a = yAb(),
        b = d$();
      b || (b = c$());
      return g.Eb(a, function (c) {
        return b && g8(b, c.key) ? !0 : !1;
      });
    },
    d$ = function () {
      var a = Z9();
      if (!a) return null;
      var b = Y9().Uk();
      return i8(b, a);
    },
    uAb = function (a) {
      $9("remote.onCastSessionChange_: " + h8(a));
      if (a) {
        var b = d$();
        if (b && b.id == a.id) {
          if (
            (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token))
          )
            f$ && (f$.token = a), (b = e$()) && b.Rr(a);
        } else b && g$(), h$(a, 1);
      } else e$() && g$();
    },
    g$ = function () {
      D9() ? B9().stopSession() : A9("stopSession called before API ready.");
      var a = e$();
      a && (a.disconnect(1), BAb(null));
    },
    CAb = function () {
      var a = e$();
      return !!a && 3 != a.getProxyState();
    },
    $9 = function (a) {
      b9("remote", a);
    },
    Y9 = function () {
      if (!DAb) {
        var a = g.Wa("yt.mdx.remote.screenService_");
        DAb = a ? new sAb(a) : null;
      }
      return DAb;
    },
    Z9 = function () {
      return g.Wa("yt.mdx.remote.currentScreenId_");
    },
    EAb = function (a) {
      g.Va("yt.mdx.remote.currentScreenId_", a);
    },
    FAb = function () {
      return g.Wa("yt.mdx.remote.connectData_");
    },
    b$ = function (a) {
      g.Va("yt.mdx.remote.connectData_", a);
    },
    e$ = function () {
      return g.Wa("yt.mdx.remote.connection_");
    },
    BAb = function (a) {
      var b = e$();
      b$(null);
      a || EAb("");
      g.Va("yt.mdx.remote.connection_", a);
      X9 &&
        (g.dc(X9, function (c) {
          c(a);
        }),
        (X9.length = 0));
      b && !a
        ? n8("yt-remote-connection-change", !1)
        : !b && a && n8("yt-remote-connection-change", !0);
    },
    c$ = function () {
      var a = g.$C();
      if (!a) return null;
      var b = Y9();
      if (!b) return null;
      b = b.Uk();
      return i8(b, a);
    },
    h$ = function (a, b) {
      Z9();
      d$() && d$();
      if (i$) f$ = a;
      else {
        EAb(a.id);
        var c = g.Wa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new U9(W9, a, vAb(), c);
        a.connect(b, FAb());
        a.subscribe("beforeDisconnect", function (d) {
          n8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          e$() && (e$(), BAb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = d$();
          d &&
            "shortLived" == d.idType &&
            (D9()
              ? B9().handleBrowserChannelAuthError()
              : A9("refreshLoungeToken called before API ready."));
        });
        BAb(a);
      }
    },
    wAb = function () {
      var a = c$();
      a
        ? ($9("Resume connection to: " + h8(a)), h$(a, 0))
        : (l8(),
          Pzb(),
          $9("Skipping connecting because no session screen found."));
    },
    tAb = function () {
      var a = vAb();
      if (g.kd(a)) {
        a = k8();
        var b = g.YC("yt-remote-session-name") || "",
          c = g.YC("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        a.authuser = String(g.IB("SESSION_INDEX", "0"));
        (b = g.IB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Va("yt.mdx.remote.channelParams_", a);
      }
    },
    vAb = function () {
      return g.Wa("yt.mdx.remote.channelParams_") || {};
    },
    IAb = function (a, b, c) {
      g.J.call(this);
      var d = this;
      this.module = a;
      this.J = b;
      this.Ic = c;
      this.events = new g.PK(this);
      this.Y = this.events.T(this.J, "onVolumeChange", function (e) {
        GAb(d, e);
      });
      this.D = !1;
      this.G = new g.GL(64);
      this.j = new g.Au(this.B_, 500, this);
      this.B = new g.Au(this.C_, 1e3, this);
      this.N = new q8(this.jca, 0, this);
      this.C = {};
      this.Z = new g.Au(this.w0, 1e3, this);
      this.K = new r8(this.seekTo, 1e3, this);
      g.L(this, this.events);
      this.events.T(b, "onCaptionsTrackListChanged", this.l9);
      this.events.T(b, "captionschanged", this.G8);
      this.events.T(b, "captionssettingschanged", this.L_);
      this.events.T(b, "videoplayerreset", this.IJ);
      this.events.T(b, "mdxautoplaycancel", function () {
        d.Ic.SV();
      });
      b.L("enable_mdx_video_play_directly") &&
        this.events.T(b, "videodatachange", function () {
          HAb(d.module) || j$(d) || k$(d, 0);
        });
      a = this.Ic;
      a.isDisposed();
      a.subscribe("proxyStateChange", this.iZ, this);
      a.subscribe("remotePlayerChange", this.HE, this);
      a.subscribe("remoteQueueChange", this.IJ, this);
      a.subscribe("previousNextChange", this.fZ, this);
      a.subscribe("nowAutoplaying", this.aZ, this);
      a.subscribe("autoplayDismissed", this.FY, this);
      g.L(this, this.j);
      g.L(this, this.B);
      g.L(this, this.N);
      g.L(this, this.Z);
      g.L(this, this.K);
      this.L_();
      this.IJ();
      this.HE();
    },
    GAb = function (a, b) {
      if (j$(a)) {
        a.Ic.unsubscribe("remotePlayerChange", a.HE, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = M9(a.Ic);
        if (c !== d.volume || b !== d.muted) a.Ic.setVolume(c, b), a.Z.start();
        a.Ic.subscribe("remotePlayerChange", a.HE, a);
      }
    },
    JAb = function (a) {
      a.Jc(0);
      a.j.stop();
      a.zc(new g.GL(64));
    },
    KAb = function (a, b) {
      if (j$(a) && !a.D) {
        var c = null;
        b && ((c = { style: a.J.getSubtitlesUserSettings() }), g.td(c, b));
        a.Ic.zT(a.J.getVideoData(1).videoId, c);
        a.C = M9(a.Ic).trackData;
      }
    },
    k$ = function (a, b) {
      var c = a.J.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.J.getVideoData(1);
      a.Ic.playVideo(c.videoId, b, d, e, c.playerParams, c.Aa, Tvb(c));
      a.zc(new g.GL(1));
    },
    LAb = function (a, b) {
      if (b) {
        var c = a.J.getOption("captions", "tracklist", { sX: 1 });
        c && c.length
          ? (a.J.setOption("captions", "track", b), (a.D = !1))
          : (a.J.loadModule("captions"), (a.D = !0));
      } else a.J.setOption("captions", "track", {});
    },
    j$ = function (a) {
      return M9(a.Ic).videoId === a.J.getVideoData(1).videoId;
    },
    l$ = function () {
      g.U.call(this, {
        I: "div",
        S: "ytp-mdx-popup-dialog",
        W: { role: "dialog" },
        V: [
          {
            I: "div",
            S: "ytp-mdx-popup-dialog-inner-content",
            V: [
              { I: "div", S: "ytp-mdx-popup-title", xa: "You're signed out" },
              {
                I: "div",
                S: "ytp-mdx-popup-description",
                xa: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.",
              },
              {
                I: "div",
                S: "ytp-mdx-privacy-popup-buttons",
                V: [
                  {
                    I: "button",
                    Ma: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    xa: "Cancel",
                  },
                  {
                    I: "button",
                    Ma: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    xa: "Confirm",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.j = new g.MG(this, 250);
      this.cancelButton = this.Ga("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Ga("ytp-mdx-privacy-popup-confirm");
      g.L(this, this.j);
      this.T(this.cancelButton, "click", this.B);
      this.T(this.confirmButton, "click", this.C);
    },
    m$ = function (a) {
      g.U.call(this, {
        I: "div",
        S: "ytp-remote",
        V: [
          {
            I: "div",
            S: "ytp-remote-display-status",
            V: [
              { I: "div", S: "ytp-remote-display-status-icon", V: [g.gva()] },
              {
                I: "div",
                S: "ytp-remote-display-status-text",
                xa: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.j = new g.MG(this, 250);
      g.L(this, this.j);
      this.T(a, "presentingplayerstatechange", this.onStateChange);
      this.Gc(a.Sb());
    },
    n$ = function (a, b) {
      g.CX.call(this, "Play on", 1, a, b);
      this.J = a;
      this.ju = {};
      this.T(a, "onMdxReceiversChange", this.D);
      this.T(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    MAb = function (a) {
      g.zV.call(this, a);
      this.Tp = { key: rwb(), name: "This computer" };
      this.fm = null;
      this.subscriptions = [];
      this.RQ = this.Ic = null;
      this.ju = [this.Tp];
      this.Ss = this.Tp;
      this.kf = new g.GL(64);
      this.OX = 0;
      this.Th = -1;
      this.bF = !1;
      this.ZE = this.WA = null;
      if (!g.iS(this.player.U()) && !g.hH(this.player.U())) {
        a = this.player;
        var b = g.gU(a);
        b && (b = b.Cn()) && ((b = new n$(a, b)), g.L(this, b));
        b = new m$(a);
        g.L(this, b);
        g.uU(a, b.element, 4);
        this.WA = new l$();
        g.L(this, this.WA);
        g.uU(a, this.WA.element, 4);
        this.bF = !!c$();
      }
    },
    o$ = function (a) {
      a.ZE &&
        (a.player.removeEventListener("presentingplayerstatechange", a.ZE),
        (a.ZE = null));
    },
    NAb = function (a, b, c) {
      a.kf = c;
      a.player.qa("presentingplayerstatechange", new g.RG(c, b));
    },
    p$ = function (a, b) {
      if (b.key !== a.Ss.key)
        if (b.key === a.Tp.key) g$();
        else if (
          (HAb(a) && OAb(a),
          (a.Ss = b),
          !a.player
            .U()
            .L("disable_mdx_connection_in_mdx_module_for_music_web") ||
            !g.hH(a.player.U()))
        ) {
          var c = a.player.getPlaylistId();
          var d = a.player.getVideoData(1);
          var e = d.videoId;
          if (
            (!c && !e) ||
            ((2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
              a.player
                .U()
                .L("should_clear_video_data_on_player_cued_unstarted"))
          )
            d = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.getLength(); l++) h[l] = g.wV(f, l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            a = {
              videoIds: h,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.Aa,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f,
            };
            (d = Tvb(d)) && (a.locationInfo = d);
            d = a;
          }
          $9("Connecting to: " + g.Lm(b));
          "cast-selector-receiver" == b.key
            ? (b$(d || null),
              (b = d || null),
              D9()
                ? B9().setLaunchParams(b)
                : A9("setLaunchParams called before ready."))
            : !d && CAb() && Z9() == b.key
            ? n8("yt-remote-connection-change", !0)
            : (g$(),
              b$(d || null),
              (d = Y9().Uk()),
              (b = i8(d, b.key)) && h$(b, 1));
        }
    },
    HAb = function (a) {
      var b = a.player.U();
      return !b.L("mdx_enable_privacy_disclosure_ui") ||
        a.isLoggedIn() ||
        a.bF ||
        !a.WA
        ? !1
        : g.tS(b) || g.vS(b);
    },
    OAb = function (a) {
      a.player.Sb().isPlaying()
        ? a.player.pauseVideo()
        : ((a.ZE = function (b) {
            !a.bF && g.UG(b, 8) && (a.player.pauseVideo(), o$(a));
          }),
          a.player.addEventListener("presentingplayerstatechange", a.ZE));
      a.WA && a.WA.wd();
      e$() || (i$ = !0);
    };
  g.Ox.prototype.nt = g.ca(0, function () {
    return g.Uj(this, 6);
  });
  var Xxb = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C",
    },
    R8 = { "'": "\\'" },
    lwb = {
      ina: "atp",
      Y1a: "ska",
      ZZa: "que",
      FRa: "mus",
      X1a: "sus",
      fDa: "dsp",
      f0a: "seq",
      hQa: "mic",
      oua: "dpa",
      uoa: "cds",
      vRa: "mlm",
      Yta: "dsdtr",
      fSa: "ntb",
      hdb: "vsp",
      cva: "scn",
      n_a: "rpe",
      Wta: "dcn",
      Xta: "dcp",
      GWa: "pas",
    },
    mwb = {
      l4: "u",
      CLASSIC: "cl",
      R3: "k",
      G1: "i",
      m1: "cr",
      X3: "m",
      D1: "g",
      IU: "up",
    };
  e8.prototype.equals = function (a) {
    return a ? this.id == a.id : !1;
  };
  var m8,
    xwb = "";
  Fwb.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.KB("enable_client_streamz_web")) {
      a = g.v(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = g.Pea(c.value)),
          (c = { serializedIncrementBatch: g.tg(c.j()) }),
          g.qD("streamzIncremented", c, { sendIsolatedPayload: b });
    }
  };
  var o8,
    Nwb = Hwb("loadCastFramework") || Hwb("loadCastApplicationFramework"),
    Qwb = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
  g.lb(q8, g.J);
  g.k = q8.prototype;
  g.k.j2 = function (a) {
    this.D = arguments;
    this.j = !1;
    this.kd ? (this.C = g.kb() + this.Vi) : (this.kd = g.og(this.G, this.Vi));
  };
  g.k.stop = function () {
    this.kd && (g.Ua.clearTimeout(this.kd), (this.kd = null));
    this.C = null;
    this.j = !1;
    this.D = [];
  };
  g.k.pause = function () {
    ++this.B;
  };
  g.k.resume = function () {
    this.B &&
      (--this.B,
      !this.B && this.j && ((this.j = !1), this.K.apply(null, this.D)));
  };
  g.k.ya = function () {
    this.stop();
    q8.Rf.ya.call(this);
  };
  g.k.l2 = function () {
    this.kd && (g.Ua.clearTimeout(this.kd), (this.kd = null));
    this.C
      ? ((this.kd = g.og(this.G, this.C - g.kb())), (this.C = null))
      : this.B
      ? (this.j = !0)
      : ((this.j = !1), this.K.apply(null, this.D));
  };
  g.w(r8, g.J);
  g.k = r8.prototype;
  g.k.CL = function (a) {
    this.C = arguments;
    this.kd || this.B ? (this.j = !0) : Swb(this);
  };
  g.k.stop = function () {
    this.kd &&
      (g.Ua.clearTimeout(this.kd),
      (this.kd = null),
      (this.j = !1),
      (this.C = null));
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.j || this.kd || ((this.j = !1), Swb(this));
  };
  g.k.ya = function () {
    g.J.prototype.ya.call(this);
    this.stop();
  };
  s8.prototype.stringify = function (a) {
    return g.Ua.JSON.stringify(a, void 0);
  };
  s8.prototype.parse = function (a) {
    return g.Ua.JSON.parse(a, void 0);
  };
  g.lb(Twb, g.Ab);
  g.lb(Uwb, g.Ab);
  var Vwb = null;
  g.lb(Xwb, g.Ab);
  g.lb(Ywb, g.Ab);
  g.lb(Zwb, g.Ab);
  $wb.prototype.info = function () {};
  $wb.prototype.warning = function () {};
  var hxb = {},
    gxb = {};
  g.k = w8.prototype;
  g.k.setTimeout = function (a) {
    this.xb = a;
  };
  g.k.o2 = function (a) {
    a = a.target;
    var b = this.Za;
    b && 3 == g.Sm(a) ? b.CL() : this.dT(a);
  };
  g.k.dT = function (a) {
    try {
      if (a == this.j)
        a: {
          var b = g.Sm(this.j),
            c = this.j.B,
            d = this.j.getStatus();
          if (
            !(3 > b) &&
            (3 != b ||
              g.wS ||
              (this.j && (this.B.B || g.Um(this.j) || g.Vm(this.j))))
          ) {
            this.Ka || 4 != b || 7 == c || (8 == c || 0 >= d ? t8(3) : t8(2));
            A8(this);
            var e = this.j.getStatus();
            this.Gb = e;
            b: if (exb(this)) {
              var f = g.Vm(this.j);
              a = "";
              var h = f.length,
                l = 4 == g.Sm(this.j);
              if (!this.B.C) {
                if ("undefined" === typeof TextDecoder) {
                  y8(this);
                  z8(this);
                  var m = "";
                  break b;
                }
                this.B.C = new g.Ua.TextDecoder();
              }
              for (c = 0; c < h; c++)
                (this.B.B = !0),
                  (a += this.B.C.decode(f[c], { stream: l && c == h - 1 }));
              f.length = 0;
              this.B.j += a;
              this.K = 0;
              m = this.B.j;
            } else m = g.Um(this.j);
            if ((this.C = 200 == e)) {
              if (this.Qb && !this.Va) {
                b: {
                  if (this.j) {
                    var n = g.Wm(this.j, "X-HTTP-Initial-Response");
                    if (n && !g.hc(n)) {
                      var p = n;
                      break b;
                    }
                  }
                  p = null;
                }
                if ((e = p)) (this.Va = !0), ixb(this, e);
                else {
                  this.C = !1;
                  this.N = 3;
                  u8(12);
                  y8(this);
                  z8(this);
                  break a;
                }
              }
              this.Da
                ? (jxb(this, b, m),
                  g.wS &&
                    this.C &&
                    3 == b &&
                    (this.ib.Ta(this.qb, "tick", this.n2), this.qb.start()))
                : ixb(this, m);
              4 == b && y8(this);
              this.C &&
                !this.Ka &&
                (4 == b ? lxb(this.G, this) : ((this.C = !1), x8(this)));
            } else
              g.Ffa(this.j),
                400 == e && 0 < m.indexOf("Unknown SID")
                  ? ((this.N = 3), u8(12))
                  : ((this.N = 0), u8(13)),
                y8(this),
                z8(this);
          }
        }
    } catch (q) {
    } finally {
    }
  };
  g.k.n2 = function () {
    if (this.j) {
      var a = g.Sm(this.j),
        b = g.Um(this.j);
      this.K < b.length &&
        (A8(this), jxb(this, a, b), this.C && 4 != a && x8(this));
    }
  };
  g.k.cancel = function () {
    this.Ka = !0;
    y8(this);
  };
  g.k.m2 = function () {
    this.ma = null;
    var a = Date.now();
    0 <= a - this.Lb
      ? (2 != this.Sa && (t8(3), u8(17)), y8(this), (this.N = 2), z8(this))
      : kxb(this, this.Lb - a);
  };
  g.k.getLastError = function () {
    return this.N;
  };
  g.k.sO = function () {
    return this.j;
  };
  uxb.prototype.cancel = function () {
    this.C = wxb(this);
    if (this.B) this.B.cancel(), (this.B = null);
    else if (this.j && 0 !== this.j.size) {
      for (var a = g.v(this.j.values()), b = a.next(); !b.done; b = a.next())
        b.value.cancel();
      this.j.clear();
    }
  };
  g.k = Axb.prototype;
  g.k.eT = 8;
  g.k.Ih = 1;
  g.k.connect = function (a, b, c, d) {
    u8(0);
    this.lc = a;
    this.Ka = b || {};
    c && void 0 !== d && ((this.Ka.OSID = c), (this.Ka.OAID = d));
    this.Va = this.Kc;
    this.Na = qxb(this, null, this.lc);
    E8(this);
  };
  g.k.disconnect = function () {
    Cxb(this);
    if (3 == this.Ih) {
      var a = this.eb++,
        b = this.Na.clone();
      g.to(b, "SID", this.D);
      g.to(b, "RID", a);
      g.to(b, "TYPE", "terminate");
      H8(this, b);
      a = new w8(this, this.D, a);
      a.Sa = 2;
      a.Z = a8(b.clone());
      b = !1;
      if (g.Ua.navigator && g.Ua.navigator.sendBeacon)
        try {
          b = g.Ua.navigator.sendBeacon(a.Z.toString(), "");
        } catch (c) {}
      !b && g.Ua.Image && ((new Image().src = a.Z), (b = !0));
      b || ((a.j = dxb(a.G, null)), a.j.send(a.Z));
      a.Aa = Date.now();
      x8(a);
    }
    Ixb(this);
  };
  g.k.kh = function () {
    return 0 == this.Ih;
  };
  g.k.getState = function () {
    return this.Ih;
  };
  g.k.gT = function (a) {
    if (this.K)
      if (((this.K = null), 1 == this.Ih)) {
        if (!a) {
          this.eb = Math.floor(1e5 * Math.random());
          a = this.eb++;
          var b = new w8(this, "", a),
            c = this.Y;
          this.Lb && (c ? ((c = g.rd(c)), g.td(c, this.Lb)) : (c = this.Lb));
          null !== this.N || this.tb || ((b.Na = c), (c = null));
          var d;
          if (this.xb)
            a: {
              for (var e = (d = 0); e < this.C.length; e++) {
                b: {
                  var f = this.C[e];
                  if (
                    "__data__" in f.map &&
                    ((f = f.map.__data__), "string" === typeof f)
                  ) {
                    f = f.length;
                    break b;
                  }
                  f = void 0;
                }
                if (void 0 === f) break;
                d += f;
                if (4096 < d) {
                  d = e;
                  break a;
                }
                if (4096 === d || e === this.C.length - 1) {
                  d = e + 1;
                  break a;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          d = Fxb(this, b, d);
          e = this.Na.clone();
          g.to(e, "RID", a);
          g.to(e, "CVER", 22);
          this.Da && g.to(e, "X-HTTP-Session-Id", this.Da);
          H8(this, e);
          c &&
            (this.tb
              ? (d = "headers=" + g.xe(g.Iga(c)) + "&" + d)
              : this.N && g.Yo(e, this.N, c));
          pxb(this.B, b);
          this.Xf && g.to(e, "TYPE", "init");
          this.xb
            ? (g.to(e, "$req", d),
              g.to(e, "SID", "null"),
              (b.Qb = !0),
              cxb(b, e, null))
            : cxb(b, e, d);
          this.Ih = 2;
        }
      } else
        3 == this.Ih &&
          (a ? Gxb(this, a) : 0 == this.C.length || vxb(this.B) || Gxb(this));
  };
  g.k.fT = function () {
    this.Z = null;
    Hxb(this);
    if (this.rd && !(this.qb || null == this.j || 0 >= this.od)) {
      var a = 2 * this.od;
      this.Fa = v8((0, g.ib)(this.F8, this), a);
    }
  };
  g.k.F8 = function () {
    this.Fa &&
      ((this.Fa = null),
      (this.Va = !1),
      (this.qb = !0),
      u8(10),
      C8(this),
      Hxb(this));
  };
  g.k.eQ = function (a) {
    this.j == a && this.rd && !this.qb && (Bxb(this), (this.qb = !0), u8(11));
  };
  g.k.q2 = function () {
    null != this.ma && ((this.ma = null), C8(this), nxb(this), u8(19));
  };
  g.k.Nba = function (a) {
    a ? u8(2) : u8(1);
  };
  g.k.isActive = function () {
    return !!this.G && this.G.isActive(this);
  };
  g.k = Kxb.prototype;
  g.k.kT = function () {};
  g.k.jT = function () {};
  g.k.iT = function () {};
  g.k.hT = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.s2 = function () {};
  g.lb(J8, g.Fd);
  J8.prototype.open = function () {
    this.j.G = this.C;
    this.K && (this.j.Sa = !0);
    this.j.connect(this.G, this.B || void 0);
  };
  J8.prototype.close = function () {
    this.j.disconnect();
  };
  J8.prototype.send = function (a) {
    var b = this.j;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && ((c = {}), (c.__data__ = g.Lm(a)), (a = c));
    b.C.push(new txb(b.Vf++, a));
    3 == b.Ih && E8(b);
  };
  J8.prototype.ya = function () {
    this.j.G = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    J8.Rf.ya.call(this);
  };
  g.lb(Mxb, Twb);
  g.lb(Nxb, Uwb);
  g.lb(I8, Kxb);
  I8.prototype.kT = function () {
    this.j.dispatchEvent("m");
  };
  I8.prototype.jT = function (a) {
    this.j.dispatchEvent(new Mxb(a));
  };
  I8.prototype.iT = function (a) {
    this.j.dispatchEvent(new Nxb(a));
  };
  I8.prototype.hT = function () {
    this.j.dispatchEvent("n");
  };
  var L8 = new g.Fd();
  g.w(Qxb, g.Ab);
  g.k = N8.prototype;
  g.k.Ou = null;
  g.k.yq = !1;
  g.k.Tx = null;
  g.k.EL = null;
  g.k.Rx = null;
  g.k.Sx = null;
  g.k.xs = null;
  g.k.zs = null;
  g.k.Pu = null;
  g.k.jj = null;
  g.k.uG = 0;
  g.k.Co = null;
  g.k.tG = null;
  g.k.ys = null;
  g.k.XB = -1;
  g.k.j_ = !0;
  g.k.Nu = !1;
  g.k.DL = 0;
  g.k.sG = null;
  var Vxb = {},
    Uxb = {};
  g.k = N8.prototype;
  g.k.setTimeout = function (a) {
    this.B = a;
  };
  g.k.v2 = function (a) {
    a = a.target;
    var b = this.sG;
    b && 3 == g.Sm(a) ? b.CL() : this.lT(a);
  };
  g.k.lT = function (a) {
    try {
      if (a == this.jj)
        a: {
          var b = g.Sm(this.jj),
            c = this.jj.B,
            d = this.jj.getStatus();
          if ((g.bf && !g.Sc(10)) || (g.Tc && !g.Qc("420+"))) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.Um(this.jj))) break a;
          this.Nu ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.j.Vn(3) : this.j.Vn(2));
          $xb(this);
          var e = this.jj.getStatus();
          this.XB = e;
          var f = g.Um(this.jj);
          if ((this.yq = 200 == e)) {
            4 == b && P8(this);
            if (this.Da) {
              for (a = !0; !this.Nu && this.uG < f.length; ) {
                var h = Wxb(this, f);
                if (h == Uxb) {
                  4 == b && ((this.ys = 4), M8(15), (a = !1));
                  break;
                } else if (h == Vxb) {
                  this.ys = 4;
                  M8(16);
                  a = !1;
                  break;
                } else ayb(this, h);
              }
              4 == b && 0 == f.length && ((this.ys = 1), M8(17), (a = !1));
              this.yq = this.yq && a;
              a || (P8(this), Q8(this));
            } else ayb(this, f);
            this.yq &&
              !this.Nu &&
              (4 == b ? this.j.vG(this) : ((this.yq = !1), O8(this)));
          } else
            400 == e && 0 < f.indexOf("Unknown SID")
              ? ((this.ys = 3), M8(13))
              : ((this.ys = 0), M8(14)),
              P8(this),
              Q8(this);
        }
    } catch (l) {
    } finally {
    }
  };
  g.k.Q$ = function (a) {
    K8((0, g.ib)(this.P$, this, a), 0);
  };
  g.k.P$ = function (a) {
    this.Nu || ($xb(this), ayb(this, a), O8(this));
  };
  g.k.nZ = function (a) {
    K8((0, g.ib)(this.O$, this, a), 0);
  };
  g.k.O$ = function (a) {
    this.Nu || (P8(this), (this.yq = a), this.j.vG(this), this.j.Vn(4));
  };
  g.k.cancel = function () {
    this.Nu = !0;
    P8(this);
  };
  g.k.t2 = function () {
    this.Tx = null;
    var a = Date.now();
    0 <= a - this.EL
      ? (2 != this.Sx && this.j.Vn(3),
        P8(this),
        (this.ys = 2),
        M8(18),
        Q8(this))
      : Zxb(this, this.EL - a);
  };
  g.k.getLastError = function () {
    return this.ys;
  };
  g.k = dyb.prototype;
  g.k.GL = null;
  g.k.Pj = null;
  g.k.fK = !1;
  g.k.D_ = null;
  g.k.JH = null;
  g.k.pP = null;
  g.k.HL = null;
  g.k.Wl = null;
  g.k.zq = -1;
  g.k.YB = null;
  g.k.DC = null;
  g.k.connect = function (a) {
    this.HL = a;
    a = T8(this.j, null, this.HL);
    M8(3);
    this.D_ = Date.now();
    var b = this.j.Y;
    null != b
      ? ((this.YB = b[0]),
        (this.DC = b[1])
          ? ((this.Wl = 1), eyb(this))
          : ((this.Wl = 2), fyb(this)))
      : (b8(a, "MODE", "init"),
        (this.Pj = new N8(this)),
        (this.Pj.Ou = this.GL),
        Txb(this.Pj, a, !1, null, !0),
        (this.Wl = 0));
  };
  g.k.Q4 = function (a) {
    if (a) (this.Wl = 2), fyb(this);
    else {
      M8(4);
      var b = this.j;
      b.Mo = b.Qs.zq;
      X8(b, 9);
    }
    a && this.Vn(2);
  };
  g.k.FL = function (a) {
    return this.j.FL(a);
  };
  g.k.abort = function () {
    this.Pj && (this.Pj.cancel(), (this.Pj = null));
    this.zq = -1;
  };
  g.k.kh = function () {
    return !1;
  };
  g.k.mT = function (a, b) {
    this.zq = a.XB;
    if (0 == this.Wl)
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          a = this.j;
          a.Mo = this.zq;
          X8(a, 2);
          return;
        }
        this.YB = c[0];
        this.DC = c[1];
      } else (a = this.j), (a.Mo = this.zq), X8(a, 2);
    else if (2 == this.Wl)
      if (this.fK) M8(7), (this.pP = Date.now());
      else if ("11111" == b) {
        if (
          (M8(6),
          (this.fK = !0),
          (this.JH = Date.now()),
          (a = this.JH - this.D_),
          !g.bf || g.Sc(10) || 500 > a)
        )
          (this.zq = 200), this.Pj.cancel(), M8(12), U8(this.j, this, !0);
      } else M8(8), (this.JH = this.pP = Date.now()), (this.fK = !1);
  };
  g.k.vG = function () {
    this.zq = this.Pj.XB;
    if (this.Pj.yq)
      0 == this.Wl
        ? this.DC
          ? ((this.Wl = 1), eyb(this))
          : ((this.Wl = 2), fyb(this))
        : 2 == this.Wl &&
          ((!g.bf || g.Sc(10) ? !this.fK : 200 > this.pP - this.JH)
            ? (M8(11), U8(this.j, this, !1))
            : (M8(12), U8(this.j, this, !0)));
    else {
      0 == this.Wl ? M8(9) : 2 == this.Wl && M8(10);
      var a = this.j;
      this.Pj.getLastError();
      a.Mo = this.zq;
      X8(a, 2);
    }
  };
  g.k.ZB = function () {
    return this.j.ZB();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.Vn = function (a) {
    this.j.Vn(a);
  };
  g.k = gyb.prototype;
  g.k.Lo = null;
  g.k.aC = null;
  g.k.bk = null;
  g.k.Rg = null;
  g.k.IL = null;
  g.k.wG = null;
  g.k.nT = null;
  g.k.xG = null;
  g.k.bC = 0;
  g.k.z2 = 0;
  g.k.Ji = null;
  g.k.As = null;
  g.k.Aq = null;
  g.k.Ru = null;
  g.k.Qs = null;
  g.k.eL = null;
  g.k.Wx = -1;
  g.k.oT = -1;
  g.k.Mo = -1;
  g.k.Vx = 0;
  g.k.Ux = 0;
  g.k.Qu = 8;
  g.lb(iyb, g.Ab);
  g.lb(jyb, g.Ab);
  g.k = gyb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    M8(0);
    this.IL = b;
    this.aC = c || {};
    d && void 0 !== e && ((this.aC.OSID = d), (this.aC.OAID = e));
    this.Z ? (K8((0, g.ib)(this.EV, this, a), 100), lyb(this)) : this.EV(a);
  };
  g.k.disconnect = function () {
    myb(this);
    if (3 == this.j) {
      var a = this.bC++,
        b = this.wG.clone();
      g.to(b, "SID", this.D);
      g.to(b, "RID", a);
      g.to(b, "TYPE", "terminate");
      W8(this, b);
      a = new N8(this, this.D, a);
      a.Sx = 2;
      a.xs = a8(b.clone());
      new Image().src = a.xs.toString();
      a.Rx = Date.now();
      O8(a);
    }
    wyb(this);
  };
  g.k.EV = function (a) {
    this.Qs = new dyb(this);
    this.Qs.GL = this.Lo;
    this.Qs.B = this.G;
    this.Qs.connect(a);
  };
  g.k.kh = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.qT = function (a) {
    this.As = null;
    ryb(this, a);
  };
  g.k.pT = function () {
    this.Aq = null;
    this.Rg = new N8(this, this.D, "rpc", this.N);
    this.Rg.Ou = this.Lo;
    this.Rg.DL = 0;
    var a = this.nT.clone();
    g.to(a, "RID", "rpc");
    g.to(a, "SID", this.D);
    g.to(a, "CI", this.eL ? "0" : "1");
    g.to(a, "AID", this.Wx);
    W8(this, a);
    if (!g.bf || g.Sc(10))
      g.to(a, "TYPE", "xmlhttp"), Txb(this.Rg, a, !0, this.xG, !1);
    else {
      g.to(a, "TYPE", "html");
      var b = this.Rg,
        c = !!this.xG;
      b.Sx = 3;
      b.xs = a8(a.clone());
      Yxb(b, c);
    }
  };
  g.k.mT = function (a, b) {
    if (0 != this.j && (this.Rg == a || this.bk == a))
      if (((this.Mo = a.XB), this.bk == a && 3 == this.j))
        if (7 < this.Qu) {
          try {
            var c = this.G.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && 3 == c.length)
            if (((a = c), 0 == a[0]))
              a: {
                if (!this.Aq) {
                  if (this.Rg)
                    if (this.Rg.Rx + 3e3 < this.bk.Rx)
                      V8(this), this.Rg.cancel(), (this.Rg = null);
                    else break a;
                  uyb(this);
                  M8(19);
                }
              }
            else
              (this.oT = a[1]),
                0 < this.oT - this.Wx &&
                  37500 > a[2] &&
                  this.eL &&
                  0 == this.Ux &&
                  !this.Ru &&
                  (this.Ru = K8((0, g.ib)(this.A2, this), 6e3));
          else X8(this, 11);
        } else null != b && X8(this, 11);
      else if ((this.Rg == a && V8(this), !g.hc(b)))
        for (a = this.G.parse(b), b = 0; b < a.length; b++)
          (c = a[b]),
            (this.Wx = c[0]),
            (c = c[1]),
            2 == this.j
              ? "c" == c[0]
                ? ((this.D = c[1]),
                  (this.xG = c[2]),
                  (c = c[3]),
                  null != c ? (this.Qu = c) : (this.Qu = 6),
                  (this.j = 3),
                  this.Ji && this.Ji.tT(),
                  (this.nT = T8(this, this.ZB() ? this.xG : null, this.IL)),
                  syb(this))
                : "stop" == c[0] && X8(this, 7)
              : 3 == this.j &&
                ("stop" == c[0]
                  ? X8(this, 7)
                  : "noop" != c[0] && this.Ji && this.Ji.sT(c),
                (this.Ux = 0));
  };
  g.k.A2 = function () {
    null != this.Ru &&
      ((this.Ru = null), this.Rg.cancel(), (this.Rg = null), uyb(this), M8(20));
  };
  g.k.vG = function (a) {
    if (this.Rg == a) {
      V8(this);
      this.Rg = null;
      var b = 2;
    } else if (this.bk == a) (this.bk = null), (b = 1);
    else return;
    this.Mo = a.XB;
    if (0 != this.j)
      if (a.yq)
        if (1 == b) {
          b = Date.now() - a.Rx;
          var c = L8;
          c.dispatchEvent(new iyb(c, a.Pu ? a.Pu.length : 0, b, this.Vx));
          kyb(this);
          this.C.length = 0;
        } else syb(this);
      else {
        c = a.getLastError();
        var d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.Mo))) {
          if ((d = 1 == b))
            this.bk || this.As || 1 == this.j || 2 <= this.Vx
              ? (d = !1)
              : ((this.As = K8(
                  (0, g.ib)(this.qT, this, a),
                  tyb(this, this.Vx)
                )),
                this.Vx++,
                (d = !0));
          d = !(d || (2 == b && uyb(this)));
        }
        if (d)
          switch (c) {
            case 1:
              X8(this, 5);
              break;
            case 4:
              X8(this, 10);
              break;
            case 3:
              X8(this, 6);
              break;
            case 7:
              X8(this, 12);
              break;
            default:
              X8(this, 2);
          }
      }
  };
  g.k.w2 = function (a) {
    if (!g.Gb(arguments, this.j))
      throw Error("Unexpected channel state: " + this.j);
  };
  g.k.Mba = function (a) {
    a ? M8(2) : (M8(1), vyb(this, 8));
  };
  g.k.FL = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.Pm();
    a.K = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Ji && this.Ji.isActive(this);
  };
  g.k.Vn = function (a) {
    var b = L8;
    b.dispatchEvent(new jyb(b, a));
  };
  g.k.ZB = function () {
    return !(!g.bf || g.Sc(10));
  };
  g.k = xyb.prototype;
  g.k.tT = function () {};
  g.k.sT = function () {};
  g.k.rT = function () {};
  g.k.JL = function () {};
  g.k.uT = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = yyb.prototype;
  g.k.isEmpty = function () {
    return 0 === this.j.length && 0 === this.B.length;
  };
  g.k.clear = function () {
    this.j = [];
    this.B = [];
  };
  g.k.contains = function (a) {
    return g.Gb(this.j, a) || g.Gb(this.B, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.Zcb)(b, a);
    0 <= c ? (g.Hb(b, c), (b = !0)) : (b = !1);
    return b || g.Ib(this.B, a);
  };
  g.k.tm = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  g.w(zyb, g.Ab);
  g.w(Ayb, g.Ab);
  g.lb(Y8, g.J);
  g.k = Y8.prototype;
  g.k.I$ = function () {
    this.Vi = Math.min(3e5, 2 * this.Vi);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.Vi + 15e3 * Math.random();
    g.Bu(this.j, a);
    this.B = Date.now() + a;
  };
  g.k.stop = function () {
    this.j.stop();
    this.B = 0;
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.reset = function () {
    this.j.stop();
    this.Vi = 5e3;
  };
  g.lb(Cyb, xyb);
  g.k = Cyb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Hh = function (a) {
    return this.C.Hh(a);
  };
  g.k.qa = function (a, b) {
    return this.C.qa.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.ma ||
      ((this.ma = !0),
      g.ub(this.C),
      this.disconnect(),
      g.ub(this.B),
      (this.B = null),
      (this.ra = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.ma;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.Y = "";
      this.B.stop();
      this.K = a || null;
      this.G = b || 0;
      a = this.Aa + "/test";
      b = this.Aa + "/bind";
      var d = new gyb(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.Sa
        ),
        e = this.j;
      e && (e.Ji = null);
      d.Ji = this;
      this.j = d;
      Dyb(this);
      if (this.j) {
        d = g.IB("ID_TOKEN");
        var f = this.j.Lo || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.j.Lo = f;
      }
      e
        ? ((3 != e.getState() && 0 == oyb(e)) || e.getState(),
          this.j.connect(a, b, this.N, e.D, e.Wx))
        : c
        ? this.j.connect(a, b, this.N, c.sessionId, c.arrayId)
        : this.j.connect(a, b, this.N);
    }
  };
  g.k.disconnect = function (a) {
    this.Z = a || 0;
    this.B.stop();
    Dyb(this);
    this.j && (3 == this.j.getState() && ryb(this.j), this.j.disconnect());
    this.Z = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = { _sc: a };
    b && g.td(a, b);
    this.B.isActive() || 2 == (this.j ? this.j.getState() : 0)
      ? this.D.push(a)
      : this.Rz() && (Dyb(this), nyb(this.j, a));
  };
  g.k.tT = function () {
    this.B.reset();
    this.K = null;
    this.G = 0;
    if (this.D.length) {
      var a = this.D;
      this.D = [];
      for (var b = 0, c = a.length; b < c; ++b) nyb(this.j, a[b]);
    }
    this.qa("handlerOpened");
    $vb(this.Na, "BROWSER_CHANNEL");
  };
  g.k.rT = function (a) {
    var b = 2 == a && 401 == this.j.Mo;
    4 == a || b || this.B.start();
    this.qa("handlerError", a, b);
    fwb(this.Da, "BROWSER_CHANNEL");
  };
  g.k.JL = function (a, b) {
    if (!this.B.isActive()) this.qa("handlerClosed");
    else if (b)
      for (var c = 0, d = b.length; c < d; ++c) {
        var e = b[c].map;
        e && this.D.push(e);
      }
    bwb(this.Fa, "BROWSER_CHANNEL");
    a &&
      this.Za.j.KL(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",
        a.length
      );
    b &&
      this.eb.j.KL(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",
        b.length
      );
  };
  g.k.uT = function () {
    var a = { v: 2 };
    this.Y && (a.gsessionid = this.Y);
    0 != this.G && (a.ui = "" + this.G);
    0 != this.Z && (a.ui = "" + this.Z);
    this.K && g.td(a, this.K);
    return a;
  };
  g.k.sT = function (a) {
    "S" == a[0]
      ? (this.Y = a[1])
      : "gracefulReconnect" == a[0]
      ? (this.B.start(), this.j.disconnect())
      : this.qa("handlerMessage", new Byb(a[0], a[1]));
    dwb(this.Ka, "BROWSER_CHANNEL");
  };
  g.k.Rz = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.Rr = function (a) {
    (this.N.loungeIdToken = a) || this.B.stop();
    if (this.Va && this.j) {
      var b = this.j.Lo || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.j.Lo = b;
    }
  };
  g.k.nt = function () {
    return this.N.id;
  };
  g.k.xt = function () {
    return this.B.isActive() ? this.B.B - Date.now() : NaN;
  };
  g.k.Yw = function () {
    var a = this.B;
    g.Cu(a.j);
    a.start();
  };
  g.k.aba = function () {
    this.B.isActive();
    0 == oyb(this.j) && this.connect(this.K, this.G);
  };
  Z8.prototype.D = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  Z8.prototype.C = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  Z8.prototype.G = function (a) {
    a(Error("request timed out"));
  };
  g.w(Fyb, g.Fd);
  g.k = Fyb.prototype;
  g.k.connect = function (a, b, c) {
    this.Gd.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.Gd.disconnect(a);
  };
  g.k.Yw = function () {
    this.Gd.Yw();
  };
  g.k.nt = function () {
    return this.Gd.nt();
  };
  g.k.xt = function () {
    return this.Gd.xt();
  };
  g.k.Rz = function () {
    return this.Gd.Rz();
  };
  g.k.D2 = function () {
    this.dispatchEvent("channelOpened");
    var a = this.Gd,
      b = this.j;
    g.XC("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.eL,
      sessionId: a.j.D,
      arrayId: a.j.Wx,
    });
    g.XC("yt-remote-session-screen-id", b);
    a = j8();
    b = k8();
    g.Gb(a, b) || a.push(b);
    wwb(a);
    ywb();
  };
  g.k.B2 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.C2 = function (a) {
    this.dispatchEvent(new zyb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new Ayb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.Gd.sendMessage(a, b);
  };
  g.k.Rr = function (a) {
    this.Gd.Rr(a);
  };
  g.k.dispose = function () {
    this.Gd.dispose();
  };
  g.k = Gyb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.K &&
      (this.C.stop(),
      (this.Z = a),
      (this.N = b),
      Iyb(this),
      (a = g.IB("ID_TOKEN"))
        ? (this.D["x-youtube-identity-token"] = a)
        : delete this.D["x-youtube-identity-token"],
      this.j &&
        ((this.B.device = this.j.device),
        (this.B.name = this.j.name),
        (this.B.app = this.j.app),
        (this.B.id = this.j.id),
        this.j.V7 && (this.B.mdxVersion = "" + this.j.V7),
        this.j.theme && (this.B.theme = this.j.theme),
        this.j.capabilities && (this.B.capabilities = this.j.capabilities),
        this.j.i5 && (this.B.cst = this.j.i5),
        this.j.authuser && (this.B.authuser = this.j.authuser),
        this.j.pageId && (this.B.pageId = this.j.pageId)),
      0 !== this.N ? (this.B.ui = "" + this.N) : delete this.B.ui,
      Object.assign(this.B, this.Z),
      (this.channel = new J8(this.pathPrefix, {
        h7: "gsessionid",
        Z7: this.D,
        a8: this.B,
      })),
      this.channel.open(),
      (this.K = 2),
      Hyb(this));
  };
  g.k.disconnect = function (a) {
    this.Y = void 0 === a ? 0 : a;
    this.C.stop();
    Iyb(this);
    this.channel &&
      (0 !== this.Y ? (this.B.ui = "" + this.Y) : delete this.B.ui,
      this.channel.close());
    this.Y = 0;
  };
  g.k.xt = function () {
    return this.C.isActive() ? this.C.B - Date.now() : NaN;
  };
  g.k.Yw = function () {
    var a = this.C;
    g.Cu(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel &&
      (Iyb(this), (a = Object.assign({}, { _sc: a }, b)), this.channel.send(a));
  };
  g.k.Rr = function (a) {
    a || this.C.stop();
    a
      ? (this.D["X-YouTube-LoungeId-Token"] = a)
      : delete this.D["X-YouTube-LoungeId-Token"];
  };
  g.k.nt = function () {
    return this.j ? this.j.id : "";
  };
  g.k.qa = function (a) {
    return this.G.qa.apply(this.G, [a].concat(g.qa(g.Ka.apply(1, arguments))));
  };
  g.k.subscribe = function (a, b, c) {
    return this.G.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.G.unsubscribe(a, b, c);
  };
  g.k.Hh = function (a) {
    return this.G.Hh(a);
  };
  g.k.dispose = function () {
    this.ma ||
      ((this.ma = !0),
      g.ub(this.G),
      this.disconnect(),
      g.ub(this.C),
      (this.Aa = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.ma;
  };
  g.w(Jyb, g.Fd);
  g.k = Jyb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.Yw = function () {
    this.j.Yw();
  };
  g.k.nt = function () {
    return this.j.nt();
  };
  g.k.xt = function () {
    return this.j.xt();
  };
  g.k.Rz = function () {
    return 3 === this.j.K;
  };
  g.k.G2 = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.E2 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.F2 = function (a) {
    this.dispatchEvent(new zyb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new Ayb(401 === this.j.Lg ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Rr = function (a) {
    this.j.Rr(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var Ryb = Date.now(),
    a9 = null,
    e9 = Array(50),
    d9 = -1,
    f9 = !1;
  g.lb(g9, g.cG);
  g9.prototype.Uk = function () {
    return this.screens;
  };
  g9.prototype.contains = function (a) {
    return !!twb(this.screens, a);
  };
  g9.prototype.get = function (a) {
    return a ? i8(this.screens, a) : null;
  };
  g9.prototype.info = function (a) {
    b9(this.K, a);
  };
  g.w(Vyb, g.cG);
  g.k = Vyb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.kd) && this.FZ();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), (this.j = null));
    isNaN(this.kd) || (g.cC(this.kd), (this.kd = NaN));
  };
  g.k.ya = function () {
    this.stop();
    g.cG.prototype.ya.call(this);
  };
  g.k.FZ = function () {
    this.kd = NaN;
    this.j = g.fC($8(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.N },
      timeout: 5e3,
      onSuccess: (0, g.ib)(this.I2, this),
      onError: (0, g.ib)(this.H2, this),
      onTimeout: (0, g.ib)(this.J2, this),
    });
  };
  g.k.I2 = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.D;
    a.name = this.K;
    b = -1;
    this.G &&
      a.shortLivedLoungeToken &&
      a.shortLivedLoungeToken.value &&
      a.shortLivedLoungeToken.refreshIntervalMs &&
      ((a.screenIdType = "shortLived"),
      (a.loungeToken = a.shortLivedLoungeToken.value),
      (b = a.shortLivedLoungeToken.refreshIntervalMs));
    this.qa("pairingComplete", new f8(a), b);
  };
  g.k.H2 = function (a) {
    this.j = null;
    a.status && 404 == a.status
      ? this.B >= PAb.length
        ? this.qa("pairingFailed", Error("DIAL polling timed out"))
        : ((a = PAb[this.B]),
          (this.kd = g.aC((0, g.ib)(this.FZ, this), a)),
          this.B++)
      : this.qa("pairingFailed", Error("Server error " + a.status));
  };
  g.k.J2 = function () {
    this.j = null;
    this.qa("pairingFailed", Error("Server not responding"));
  };
  var PAb = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.lb(i9, g9);
  g.k = i9.prototype;
  g.k.start = function () {
    h9(this) && this.qa("screenChange");
    !g.YC("yt-remote-lounge-token-expiration") && Wyb(this);
    g.cC(this.j);
    this.j = g.aC((0, g.ib)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    h9(this);
    Syb(this, a);
    j9(this, !1);
    this.qa("screenChange");
    b(a);
    a.token || Wyb(this);
  };
  g.k.remove = function (a, b) {
    var c = h9(this);
    Uyb(this, a) && (j9(this, !1), (c = !0));
    b(a);
    c && this.qa("screenChange");
  };
  g.k.dL = function (a, b, c, d) {
    var e = h9(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), j9(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.qa("screenChange");
  };
  g.k.ya = function () {
    g.cC(this.j);
    i9.Rf.ya.call(this);
  };
  g.k.F6 = function (a) {
    h9(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    j9(this, !b);
    b && b9(this.K, "Missed " + b + " lounge tokens.");
  };
  g.k.E6 = function (a) {
    b9(this.K, "Requesting lounge tokens failed: " + a);
  };
  g.w(Yyb, g.cG);
  g.k = Yyb.prototype;
  g.k.start = function () {
    var a = parseInt(g.YC("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.kb() - 144e5 < a ? 0 : a)
      ? k9(this)
      : ((this.D = g.kb() + 3e5),
        g.XC("yt-remote-fast-check-period", this.D),
        this.sR());
  };
  g.k.isEmpty = function () {
    return g.kd(this.j);
  };
  g.k.update = function () {
    Xyb("Updating availability on schedule.");
    var a = this.K(),
      b = g.Yc(
        this.j,
        function (c, d) {
          return c && !!i8(a, d);
        },
        this
      );
    azb(this, b);
  };
  g.k.ya = function () {
    g.cC(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), (this.B = null));
    g.cG.prototype.ya.call(this);
  };
  g.k.sR = function () {
    g.cC(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = bzb(this);
    if (Vvb(a)) {
      var b = $8(this.G, "/pairing/get_screen_availability");
      this.B = Eyb(
        this.G,
        b,
        { lounge_token: g.dd(a).join(",") },
        (0, g.ib)(this.o$, this, a),
        (0, g.ib)(this.n$, this)
      );
    } else azb(this, {}), k9(this);
  };
  g.k.o$ = function (a, b) {
    this.B = null;
    var c = g.dd(bzb(this));
    if (g.Zb(c, g.dd(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e)
        c[a[b[e].loungeToken]] = "online" == b[e].status;
      azb(this, c);
      k9(this);
    } else this.jg("Changing Screen set during request."), this.sR();
  };
  g.k.n$ = function (a) {
    this.jg("Screen availability failed: " + a);
    this.B = null;
    k9(this);
  };
  g.k.jg = function (a) {
    b9("OnlineScreenService", a);
  };
  g.lb(l9, g9);
  g.k = l9.prototype;
  g.k.start = function () {
    this.B.start();
    this.j.start();
    this.screens.length &&
      (this.qa("screenChange"),
      this.j.isEmpty() || this.qa("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.j.update();
  };
  g.k.dL = function (a, b, c, d) {
    this.B.contains(a)
      ? this.B.dL(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        b9(this.K, a),
        d(Error(a)));
  };
  g.k.Uk = function (a) {
    return a
      ? this.screens
      : g.Lb(
          this.screens,
          g.Ys(
            this.C,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.vT = function () {
    return g.Ys(
      this.Uk(!0),
      function (a) {
        return !!this.j.j[a.id];
      },
      this
    );
  };
  g.k.wT = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new Vyb(this.D, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.ub(l);
      e(m9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.ub(l);
      f(m);
    });
    l.start();
    return (0, g.ib)(l.stop, l);
  };
  g.k.K2 = function (a, b, c, d) {
    g.fC($8(this.D, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.ib)(function (e, f) {
        e = new f8(f.screen || {});
        if (!e.name || fzb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); fzb(this, l); ) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(m9(this, e));
      }, this),
      onError: (0, g.ib)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.ib)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.ya = function () {
    g.ub(this.B);
    g.ub(this.j);
    l9.Rf.ya.call(this);
  };
  g.k.P6 = function () {
    hzb(this);
    this.qa("screenChange");
    this.j.update();
  };
  l9.prototype.dispose = l9.prototype.dispose;
  g.lb(n9, g.cG);
  g.k = n9.prototype;
  g.k.Ej = function (a) {
    this.isDisposed() ||
      (a && (p9(this, "" + a), this.qa("sessionFailed")),
      (this.j = null),
      this.qa("sessionScreen", null));
  };
  g.k.info = function (a) {
    b9(this.Da, a);
  };
  g.k.xT = function () {
    return null;
  };
  g.k.IR = function (a) {
    var b = this.B;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.ib)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.ib)(function () {
        p9(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.ya = function () {
    this.IR("");
    n9.Rf.ya.call(this);
  };
  g.w(q9, n9);
  g.k = q9.prototype;
  g.k.HR = function (a) {
    if (this.C) {
      if (this.C == a) return;
      p9(this, "Overriding cast session with new session object");
      tzb(this);
      this.Aa = !1;
      this.Y = "unknown";
      this.C.removeUpdateListener(this.ra);
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Fa
      );
    }
    this.C = a;
    this.C.addUpdateListener(this.ra);
    this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa);
    ozb(this, "getMdxSessionStatus");
  };
  g.k.cA = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.Lm(a));
  };
  g.k.stop = function () {
    this.C
      ? this.C.stop(
          (0, g.ib)(function () {
            this.Ej();
          }, this),
          (0, g.ib)(function () {
            this.Ej(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.Ej(Error("Stopping cast device without session."));
  };
  g.k.IR = function () {};
  g.k.ya = function () {
    this.info("disposeInternal");
    tzb(this);
    this.C &&
      (this.C.removeUpdateListener(this.ra),
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Fa
      ));
    this.C = null;
    n9.prototype.ya.call(this);
  };
  g.k.Y$ = function (a, b) {
    if (!this.isDisposed())
      if (b)
        if (((b = c8(b)), g.bb(b)))
          switch (
            ((a = "" + b.type),
            (b = b.data || {}),
            this.info("onYoutubeMessage_: " + a + " " + g.Lm(b)),
            a)
          ) {
            case "mdxSessionStatus":
              lzb(this, b);
              break;
            case "loungeToken":
              pzb(this, b);
              break;
            default:
              p9(this, "Unknown youtube message: " + a);
          }
        else p9(this, "Unable to parse message.");
      else p9(this, "No data in message.");
  };
  g.k.JW = function (a, b, c, d) {
    g.cC(this.Z);
    this.Z = 0;
    ezb(
      this.D,
      this.B.label,
      a,
      this.B.friendlyName,
      (0, g.ib)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (p9(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.Z = g.aC((0, g.ib)(this.JW, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.xT = function () {
    return this.C;
  };
  g.k.L2 = function (a) {
    this.isDisposed() || a || (p9(this, "Cast session died."), this.Ej());
  };
  g.w(r9, n9);
  g.k = r9.prototype;
  g.k.HR = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.Ka);
  };
  g.k.cA = function (a) {
    this.Na = a;
    this.ma();
  };
  g.k.stop = function () {
    Bzb(this);
    this.C
      ? this.C.stop(
          (0, g.ib)(this.Ej, this, null),
          (0, g.ib)(this.Ej, this, "Failed to stop DIAL device.")
        )
      : this.Ej();
  };
  g.k.ya = function () {
    Bzb(this);
    this.C && this.C.removeUpdateListener(this.Ka);
    this.C = null;
    n9.prototype.ya.call(this);
  };
  g.k.M2 = function (a) {
    this.isDisposed() ||
      a ||
      (p9(this, "DIAL session died."),
      this.G(),
      (this.G = function () {}),
      this.Ej());
  };
  g.w(u9, n9);
  u9.prototype.stop = function () {
    this.Ej();
  };
  u9.prototype.HR = function () {};
  u9.prototype.cA = function () {
    g.cC(this.C);
    this.C = NaN;
    var a = i8(this.D.Uk(), this.B.label);
    a ? o9(this, a) : this.Ej(Error("No such screen"));
  };
  u9.prototype.ya = function () {
    g.cC(this.C);
    this.C = NaN;
    n9.prototype.ya.call(this);
  };
  g.w(v9, g.cG);
  g.k = v9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.Z, [
      chrome.cast.Capability.AUDIO_OUT,
    ]);
    this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a =
      a || this.K
        ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.ib)(this.X9, this);
    c = new chrome.cast.ApiConfig(c, (0, g.ib)(this.jZ, this), e, d, a);
    c.customDialLaunchCallback = (0, g.ib)(this.U8, this);
    chrome.cast.initialize(
      c,
      (0, g.ib)(function () {
        this.isDisposed() ||
          (chrome.cast.addReceiverActionListener(this.G),
          Oyb(),
          this.B.subscribe("onlineScreenChange", (0, g.ib)(this.yT, this)),
          (this.C = Ezb(this)),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.ib)(function (f) {
              this.jg("Failed to set initial custom receivers: " + g.Lm(f));
            }, this)
          ),
          this.qa("yt-remote-cast2-availability-change", x9(this)),
          b(!0));
      }, this),
      (0, g.ib)(function (f) {
        this.jg("Failed to initialize API: " + g.Lm(f));
        b(!1);
      }, this)
    );
  };
  g.k.kba = function (a, b) {
    w9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || (c && c.id != a))
        w9("Unsetting old screen status: " + this.j.B.friendlyName),
          y9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        c = i8(this.B.Uk(), a);
        if (!c) {
          w9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == c.idType) {
          w9(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        a = Czb(this, c);
        a ||
          (w9("setConnectedScreenStatus: Connected receiver not custom..."),
          (a = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name)),
          (a.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.C.push(a),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.ib)(function (d) {
              this.jg("Failed to set initial custom receivers: " + g.Lm(d));
            }, this)
          ));
        w9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
        y9(this, new u9(this.B, a), !0);
      }
      this.j.IR(b);
    } else w9("setConnectedScreenStatus: no screen.");
  };
  g.k.nba = function (a) {
    this.isDisposed()
      ? this.jg("Setting connection data on disposed cast v2")
      : this.j
      ? this.j.cA(a)
      : this.jg("Setting connection data without a session");
  };
  g.k.O2 = function () {
    this.isDisposed()
      ? this.jg("Stopping session on disposed cast v2")
      : this.j
      ? (this.j.stop(), y9(this, null))
      : w9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.ib)(this.jZ, this),
      (0, g.ib)(this.r$, this)
    );
  };
  g.k.ya = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.ib)(this.yT, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.G);
    var a = Lyb,
      b = g.Wa("yt.mdx.remote.debug.handlers_");
    g.Ib(b || [], a);
    g.ub(this.j);
    g.cG.prototype.ya.call(this);
  };
  g.k.jg = function (a) {
    b9("Controller", a);
  };
  g.k.lZ = function (a, b) {
    this.j == a &&
      (b || y9(this, null), this.qa("yt-remote-cast2-session-change", b));
  };
  g.k.U9 = function (a, b) {
    if (!this.isDisposed())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          w9(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.j)
              if (this.j.B.label != a.label)
                w9(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.j.B.friendlyName
                ),
                  this.j.stop();
              else {
                w9("onReceiverAction_: Casting to active receiver.");
                this.j.j && this.qa("yt-remote-cast2-session-change", this.j.j);
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                y9(this, new u9(this.B, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                y9(this, new r9(this.B, a, this.D, this.config_));
                break;
              case chrome.cast.ReceiverType.CAST:
                y9(this, new q9(this.B, a, this.config_));
                break;
              default:
                this.jg("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.j && this.j.B.label == a.label
              ? this.j.stop()
              : this.jg("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.jg("onReceiverAction_ called without receiver.");
  };
  g.k.U8 = function (a) {
    if (this.isDisposed()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.jg("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.j ? this.j.B : null;
    if (!c || c.label != b.label)
      return (
        this.jg(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.j.j)
        return (
          w9("Reselecting dial screen."),
          this.qa("yt-remote-cast2-session-change", this.j.j),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.jg(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      y9(this, new r9(this.B, b, this.D, this.config_));
    }
    b = this.j;
    b.Z = a;
    b.Z.appState == chrome.cast.DialAppState.RUNNING
      ? ((a = b.Z.extraData || {}),
        (c = a.screenId || null),
        s9(b) && a.loungeToken
          ? a.loungeTokenRefreshIntervalMs
            ? (a = yzb(
                b,
                {
                  name: b.B.friendlyName,
                  screenId: a.screenId,
                  loungeToken: a.loungeToken,
                  dialId: b.Z.receiver.label,
                  screenIdType: "shortLived",
                },
                a.loungeTokenRefreshIntervalMs
              ))
            : (g.NB(
                Error(
                  "No loungeTokenRefreshIntervalMs presents in additionalData: " +
                    JSON.stringify(a) +
                    "."
                )
              ),
              (a = zzb(b, c)))
          : (a = zzb(b, c)))
      : (a = wzb(b));
    return a;
  };
  g.k.jZ = function (a) {
    var b = this;
    if (!this.isDisposed() && !this.K) {
      w9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j)
          if (c.receiverType == chrome.cast.ReceiverType.CAST)
            w9("Got resumed cast session before resumed mdx connection."),
              (c.friendlyName = chrome.cast.unescape(c.friendlyName)),
              y9(this, new q9(this.B, c, this.config_), !0);
          else {
            this.jg(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var d = this.j.B,
          e = i8(this.B.Uk(), d.label);
        e &&
          g8(e, c.label) &&
          d.receiverType != chrome.cast.ReceiverType.CAST &&
          c.receiverType == chrome.cast.ReceiverType.CAST &&
          (w9(
            "onSessionEstablished_: manual to cast session change " +
              c.friendlyName
          ),
          g.ub(this.j),
          (this.j = new q9(this.B, c, this.config_)),
          this.j.subscribe("sessionScreen", (0, g.ib)(this.lZ, this, this.j)),
          this.j.subscribe("sessionFailed", function () {
            return Dzb(b, b.j);
          }),
          this.j.cA(null));
        this.j.HR(a);
      }
    }
  };
  g.k.N2 = function () {
    return this.j ? this.j.xT() : null;
  };
  g.k.r$ = function (a) {
    this.isDisposed() ||
      (this.jg("Failed to estabilish a session: " + g.Lm(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null),
      this.qa("yt-remote-cast2-session-failed"));
  };
  g.k.X9 = function (a) {
    w9("Receiver availability updated: " + a);
    if (!this.isDisposed()) {
      var b = x9(this);
      this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      x9(this) != b && this.qa("yt-remote-cast2-availability-change", x9(this));
    }
  };
  g.k.yT = function () {
    this.isDisposed() ||
      ((this.C = Ezb(this)),
      w9("Updating custom receivers: " + g.Lm(this.C)),
      chrome.cast.setCustomReceivers(
        this.C,
        function () {},
        (0, g.ib)(function () {
          this.jg("Failed to set custom receivers.");
        }, this)
      ),
      this.qa("yt-remote-cast2-availability-change", x9(this)));
  };
  v9.prototype.setLaunchParams = v9.prototype.nba;
  v9.prototype.setConnectedScreenStatus = v9.prototype.kba;
  v9.prototype.stopSession = v9.prototype.O2;
  v9.prototype.getCastSession = v9.prototype.N2;
  v9.prototype.requestSession = v9.prototype.requestSession;
  v9.prototype.init = v9.prototype.init;
  v9.prototype.dispose = v9.prototype.dispose;
  var Nzb = [];
  g.k = F9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    Tzb(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.trackData = a.trackData),
      (this.Gp = a.hasPrevious),
      (this.Zk = a.hasNext),
      (this.N = a.playerTime),
      (this.K = a.playerTimeAt),
      (this.D = a.seekableStart),
      (this.j = a.seekableEnd),
      (this.G = a.duration),
      (this.Z = a.loadedTime),
      (this.C = a.liveIngestionTime),
      (this.B = !isNaN(this.C)));
  };
  g.k.isPlaying = function () {
    return 1 == this.playerState;
  };
  g.k.Fl = function (a) {
    this.G = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.B ? this.G + G9(this) : this.G;
  };
  g.k.clone = function () {
    return new F9(Uzb(this));
  };
  g.w(L9, g.cG);
  g.k = L9.prototype;
  g.k.getState = function () {
    return this.C;
  };
  g.k.xt = function () {
    return this.D.getReconnectTimeout();
  };
  g.k.Yw = function () {
    this.D.reconnect();
  };
  g.k.play = function () {
    N9(this)
      ? (this.j ? this.j.play(null, g.Kd, R9(this, "play")) : Q9(this, "play"),
        Xzb(this, 1, I9(M9(this))),
        this.qa("remotePlayerChange"))
      : O9(this, this.play);
  };
  g.k.pause = function () {
    N9(this)
      ? (this.j
          ? this.j.pause(null, g.Kd, R9(this, "pause"))
          : Q9(this, "pause"),
        Xzb(this, 2, I9(M9(this))),
        this.qa("remotePlayerChange"))
      : O9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (N9(this)) {
      if (this.j) {
        var b = M9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.isPlaying() || 3 == b.playerState
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.j.seek(c, g.Kd, R9(this, "seekTo", { newTime: a }));
      } else Q9(this, "seekTo", { newTime: a });
      Xzb(this, 3, a);
      this.qa("remotePlayerChange");
    } else O9(this, g.jb(this.seekTo, a));
  };
  g.k.stop = function () {
    if (N9(this)) {
      this.j
        ? this.j.stop(null, g.Kd, R9(this, "stopVideo"))
        : Q9(this, "stopVideo");
      var a = M9(this);
      a.index = -1;
      a.videoId = "";
      Tzb(a);
      P9(this, a);
      this.qa("remotePlayerChange");
    } else O9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(
            d,
            (0, g.ib)(function () {
              c9("set receiver volume: " + d);
            }, this),
            (0, g.ib)(function () {
              this.jg("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.B.setReceiverMuted(
            b,
            (0, g.ib)(function () {
              c9("set receiver muted: " + b);
            }, this),
            (0, g.ib)(function () {
              this.jg("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        Q9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      P9(this, c);
    } else O9(this, g.jb(this.setVolume, a, b));
  };
  g.k.zT = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      a = { videoId: a };
      b &&
        ((c.trackData = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (a.style = g.Lm(b.style)),
        g.td(a, c.trackData));
      Q9(this, "setSubtitlesTrack", a);
      P9(this, c);
    } else O9(this, g.jb(this.zT, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    N9(this)
      ? ((b = b.getLanguageInfo().getId()),
        Q9(this, "setAudioTrack", { videoId: a, audioTrackId: b }),
        (a = M9(this)),
        (a.audioTrackId = b),
        P9(this, a))
      : O9(this, g.jb(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? null : f;
    h = void 0 === h ? null : h;
    var l = M9(this),
      m = { videoId: a };
    void 0 !== c && (m.currentIndex = c);
    J9(l, a, c || 0);
    void 0 !== b && (H9(l, b), (m.currentTime = b));
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.Lm(h));
    Q9(this, "setPlaylist", m);
    d || P9(this, l);
  };
  g.k.YJ = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "previous");
    } else O9(this, g.jb(this.YJ, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "next");
    } else O9(this, g.jb(this.nextVideo, a, b));
  };
  g.k.dH = function () {
    if (N9(this)) {
      Q9(this, "clearPlaylist");
      var a = M9(this);
      a.reset();
      P9(this, a);
      this.qa("remotePlayerChange");
    } else O9(this, this.dH);
  };
  g.k.SV = function () {
    N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.SV);
  };
  g.k.dispose = function () {
    if (3 != this.C) {
      var a = this.C;
      this.C = 3;
      this.qa("proxyStateChange", a, this.C);
    }
    g.cG.prototype.dispose.call(this);
  };
  g.k.ya = function () {
    Wzb(this);
    this.D = null;
    this.G.clear();
    K9(this, null);
    g.cG.prototype.ya.call(this);
  };
  g.k.LR = function (a) {
    if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
      var b = this.C;
      this.C = a;
      this.qa("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.G.isEmpty(); )
          (b = a = this.G),
            0 === b.j.length && ((b.j = b.B), b.j.reverse(), (b.B = [])),
            a.j.pop().apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.k.S9 = function (a, b) {
    this.qa(a, b);
  };
  g.k.J8 = function (a) {
    if (!a) this.BE(null), K9(this, null);
    else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = M9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          P9(this, b);
    }
  };
  g.k.BE = function (a) {
    c9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.Z);
    if ((this.j = a))
      this.j.addUpdateListener(this.Z),
        Yzb(this),
        this.qa("remotePlayerChange");
  };
  g.k.I8 = function (a) {
    a ? (Yzb(this), this.qa("remotePlayerChange")) : this.BE(null);
  };
  g.k.iS = function () {
    Q9(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.M8 = function () {
    var a = Qzb();
    a && K9(this, a);
  };
  g.k.jg = function (a) {
    b9("CP", a);
  };
  g.w(U9, g.cG);
  g.k = U9.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.videoIds,
        f = b.playerParams,
        h = b.clickTrackingParams,
        l = b.index,
        m = { videoId: d },
        n = b.currentTime,
        p = b.locationInfo;
      b = b.loopMode;
      void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
      f && (m.playerParams = f);
      p && (m.locationInfo = p);
      h && (m.clickTrackingParams = h);
      c && (m.listId = c);
      e && 0 < e.length && (m.videoIds = e.join(","));
      void 0 !== l && (m.currentIndex = l);
      this.Ka && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      H9(this.j, n);
      this.G = "UNSUPPORTED";
      c = this.Ka ? "setInitialState" : "setPlaylist";
      S9("Connecting with " + c + " and params: " + g.Lm(m));
      this.B.connect({ method: c, params: g.Lm(m) }, a, zwb());
    } else S9("Connecting without params"), this.B.connect({}, a, zwb());
    bAb(this);
  };
  g.k.Rr = function (a) {
    this.B.Rr(a);
  };
  g.k.dispose = function () {
    this.isDisposed() ||
      (g.Va("yt.mdx.remote.remoteClient_", null),
      this.qa("beforeDispose"),
      T9(this, 3));
    g.cG.prototype.dispose.call(this);
  };
  g.k.ya = function () {
    cAb(this);
    eAb(this);
    dAb(this);
    g.cC(this.Z);
    this.Z = NaN;
    g.cC(this.Y);
    this.Y = NaN;
    this.D = null;
    g.PC(this.ma);
    this.ma.length = 0;
    this.B.dispose();
    g.cG.prototype.ya.call(this);
    this.G = this.N = this.C = this.j = this.B = null;
  };
  g.k.EX = function (a) {
    if (!this.C || 0 === this.C.length) return !1;
    for (var b = g.v(this.C), c = b.next(); !c.done; c = b.next())
      if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.o6 = function () {
    var a = 3;
    this.isDisposed() ||
      ((a = 0),
      isNaN(this.zD()) ? this.B.Rz() && isNaN(this.K) && (a = 1) : (a = 2));
    return a;
  };
  g.k.oz = function (a) {
    S9("Disconnecting with " + a);
    g.Va("yt.mdx.remote.remoteClient_", null);
    cAb(this);
    this.qa("beforeDisconnect", a);
    1 == a && l8();
    this.B.disconnect(a);
    this.dispose();
  };
  g.k.k6 = function () {
    var a = this.j;
    this.D && ((a = this.j.clone()), J9(a, this.D, a.index));
    return Uzb(a);
  };
  g.k.oba = function (a) {
    var b = this,
      c = new F9(a);
    c.videoId &&
      c.videoId != this.j.videoId &&
      ((this.D = c.videoId),
      g.cC(this.Z),
      (this.Z = g.aC(function () {
        if (b.D) {
          var e = b.D;
          b.D = null;
          b.j.videoId != e && V9(b, "getNowPlaying");
        }
      }, 5e3)));
    var d = [];
    (this.j.listId == c.listId &&
      this.j.videoId == c.videoId &&
      this.j.index == c.index) ||
      d.push("remoteQueueChange");
    (this.j.playerState == c.playerState &&
      this.j.volume == c.volume &&
      this.j.muted == c.muted &&
      I9(this.j) == I9(c) &&
      g.Lm(this.j.trackData) == g.Lm(c.trackData)) ||
      d.push("remotePlayerChange");
    this.j.reset(a);
    g.dc(
      d,
      function (e) {
        this.qa(e);
      },
      this
    );
  };
  g.k.EW = function () {
    var a = this.B.nt(),
      b = g.Eb(this.C, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.zD = function () {
    return this.B.xt();
  };
  g.k.W5 = function () {
    return this.G || "UNSUPPORTED";
  };
  g.k.X5 = function () {
    return this.N || "";
  };
  g.k.P2 = function () {
    !isNaN(this.zD()) && this.B.Yw();
  };
  g.k.jba = function (a, b) {
    V9(this, a, b);
    gAb(this);
  };
  g.k.AT = function () {
    var a = g.pC("SID", "") || "",
      b = g.pC("SAPISID", "") || "",
      c = g.pC("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.tg(g.sg(a), 2);
    b = g.tg(g.sg(b), 2);
    c = g.tg(g.sg(c), 2);
    return g.tg(g.sg(a + "," + b + "," + c), 2);
  };
  U9.prototype.subscribe = U9.prototype.subscribe;
  U9.prototype.unsubscribeByKey = U9.prototype.Hh;
  U9.prototype.getProxyState = U9.prototype.o6;
  U9.prototype.disconnect = U9.prototype.oz;
  U9.prototype.getPlayerContextData = U9.prototype.k6;
  U9.prototype.setPlayerContextData = U9.prototype.oba;
  U9.prototype.getOtherConnectedRemoteId = U9.prototype.EW;
  U9.prototype.getReconnectTimeout = U9.prototype.zD;
  U9.prototype.getAutoplayMode = U9.prototype.W5;
  U9.prototype.getAutoplayVideoId = U9.prototype.X5;
  U9.prototype.reconnect = U9.prototype.P2;
  U9.prototype.sendMessage = U9.prototype.jba;
  U9.prototype.getXsrfToken = U9.prototype.AT;
  U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.EX;
  g.w(sAb, g9);
  g.k = sAb.prototype;
  g.k.Uk = function (a) {
    return this.jh.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.jh.$_c(a);
  };
  g.k.get = function (a) {
    return this.jh.$_g(a);
  };
  g.k.start = function () {
    this.jh.$_st();
  };
  g.k.add = function (a, b, c) {
    this.jh.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.jh.$_r(a, b, c);
  };
  g.k.dL = function (a, b, c, d) {
    this.jh.$_un(a, b, c, d);
  };
  g.k.ya = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.jh.$_ubk(this.j[a]);
    this.j.length = 0;
    this.jh = null;
    g9.prototype.ya.call(this);
  };
  g.k.Q2 = function () {
    this.qa("screenChange");
  };
  g.k.A9 = function () {
    this.qa("onlineScreenChange");
  };
  l9.prototype.$_st = l9.prototype.start;
  l9.prototype.$_gspc = l9.prototype.K2;
  l9.prototype.$_gsppc = l9.prototype.wT;
  l9.prototype.$_c = l9.prototype.contains;
  l9.prototype.$_g = l9.prototype.get;
  l9.prototype.$_a = l9.prototype.add;
  l9.prototype.$_un = l9.prototype.dL;
  l9.prototype.$_r = l9.prototype.remove;
  l9.prototype.$_gs = l9.prototype.Uk;
  l9.prototype.$_gos = l9.prototype.vT;
  l9.prototype.$_s = l9.prototype.subscribe;
  l9.prototype.$_ubk = l9.prototype.Hh;
  var f$ = null,
    i$ = !1,
    W9 = null,
    X9 = null,
    DAb = null,
    a$ = [];
  g.w(IAb, g.J);
  g.k = IAb.prototype;
  g.k.ya = function () {
    g.J.prototype.ya.call(this);
    this.j.stop();
    this.B.stop();
    this.N.stop();
    var a = this.Ic;
    a.unsubscribe("proxyStateChange", this.iZ, this);
    a.unsubscribe("remotePlayerChange", this.HE, this);
    a.unsubscribe("remoteQueueChange", this.IJ, this);
    a.unsubscribe("previousNextChange", this.fZ, this);
    a.unsubscribe("nowAutoplaying", this.aZ, this);
    a.unsubscribe("autoplayDismissed", this.FY, this);
    this.Ic = this.module = null;
  };
  g.k.Yk = function (a) {
    var b = g.Ka.apply(1, arguments);
    if (2 != this.Ic.C)
      if (j$(this)) {
        if (1081 != M9(this.Ic).playerState || "control_seek" !== a)
          switch (a) {
            case "control_toggle_play_pause":
              M9(this.Ic).isPlaying() ? this.Ic.pause() : this.Ic.play();
              break;
            case "control_play":
              this.Ic.play();
              break;
            case "control_pause":
              this.Ic.pause();
              break;
            case "control_seek":
              this.K.CL(b[0], b[1]);
              break;
            case "control_subtitles_set_track":
              KAb(this, b[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(b[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            b = this.J.getCurrentTime();
            k$(this, 0 === b ? void 0 : b);
            break;
          case "control_seek":
            k$(this, b[0]);
            break;
          case "control_subtitles_set_track":
            KAb(this, b[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(b[0]);
        }
  };
  g.k.G8 = function (a) {
    this.N.j2(a);
  };
  g.k.jca = function (a) {
    this.Yk("control_subtitles_set_track", g.kd(a) ? null : a);
  };
  g.k.L_ = function () {
    var a = this.J.getOption("captions", "track");
    g.kd(a) || KAb(this, a);
  };
  g.k.Jc = function (a) {
    this.module.Jc(a, this.J.getVideoData().lengthSeconds);
  };
  g.k.l9 = function () {
    g.kd(this.C) || LAb(this, this.C);
    this.D = !1;
  };
  g.k.iZ = function (a, b) {
    this.B.stop();
    2 === b && this.C_();
  };
  g.k.HE = function () {
    if (j$(this)) {
      this.j.stop();
      var a = M9(this.Ic);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Th = 1;
          break;
        case 1082:
        case 1083:
          this.module.Th = 0;
          break;
        default:
          this.module.Th = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.zc(new g.GL(8));
          this.B_();
          break;
        case 1085:
        case 3:
          this.zc(new g.GL(9));
          break;
        case 1083:
        case 0:
          this.zc(new g.GL(2));
          this.K.stop();
          this.Jc(this.J.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.zc(new g.GL(4));
          break;
        case 2:
          this.zc(new g.GL(4));
          this.Jc(I9(a));
          break;
        case -1:
          this.zc(new g.GL(64));
          break;
        case -1e3:
          this.zc(
            new g.GL(128, {
              errorCode: "mdx.remoteerror",
              errorMessage: "This video is not available for remote playback.",
              FH: 2,
            })
          );
      }
      a = M9(this.Ic).trackData;
      var b = this.C;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.C = a), LAb(this, a));
      a = M9(this.Ic);
      -1 === a.volume ||
        (Math.round(this.J.getVolume()) === a.volume &&
          this.J.isMuted() === a.muted) ||
        this.Z.isActive() ||
        this.w0();
    } else JAb(this);
  };
  g.k.fZ = function () {
    this.J.qa("mdxpreviousnextchange");
  };
  g.k.IJ = function () {
    j$(this) || JAb(this);
  };
  g.k.aZ = function (a) {
    isNaN(a) || this.J.qa("mdxnowautoplaying", a);
  };
  g.k.FY = function () {
    this.J.qa("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    j$(this) && this.Ic.setAudioTrack(this.J.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === M9(this.Ic).playerState ? k$(this, a) : b && this.Ic.seekTo(a);
  };
  g.k.w0 = function () {
    var a = this;
    if (j$(this)) {
      var b = M9(this.Ic);
      this.events.Pc(this.Y);
      b.muted ? this.J.mute() : this.J.unMute();
      this.J.setVolume(b.volume);
      this.Y = this.events.T(this.J, "onVolumeChange", function (c) {
        GAb(a, c);
      });
    }
  };
  g.k.B_ = function () {
    this.j.stop();
    if (!this.Ic.isDisposed()) {
      var a = M9(this.Ic);
      a.isPlaying() && this.zc(new g.GL(8));
      this.Jc(I9(a));
      this.j.start();
    }
  };
  g.k.C_ = function () {
    this.B.stop();
    this.j.stop();
    var a = this.Ic.xt();
    2 == this.Ic.C && !isNaN(a) && this.B.start();
  };
  g.k.zc = function (a) {
    this.B.stop();
    var b = this.G;
    if (!g.DBa(b, a)) {
      var c = g.SG(a, 2);
      c !== g.SG(this.G, 2) && this.J.pB(c);
      this.G = a;
      NAb(this.module, b, a);
    }
  };
  g.w(l$, g.U);
  l$.prototype.wd = function () {
    this.j.show();
  };
  l$.prototype.Pb = function () {
    this.j.hide();
  };
  l$.prototype.B = function () {
    n8("mdx-privacy-popup-cancel");
    this.Pb();
  };
  l$.prototype.C = function () {
    n8("mdx-privacy-popup-confirm");
    this.Pb();
  };
  g.w(m$, g.U);
  m$.prototype.onStateChange = function (a) {
    this.Gc(a.state);
  };
  m$.prototype.Gc = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name,
      };
      a = g.SG(a, 128)
        ? g.lK("Error on $RECEIVER_NAME", b)
        : a.isPlaying() || a.isPaused()
        ? g.lK("Playing on $RECEIVER_NAME", b)
        : g.lK("Connected to $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.w(n$, g.CX);
  n$.prototype.D = function () {
    var a = this.J.getOption("remote", "receivers");
    a && 1 < a.length && !this.J.getOption("remote", "quickCast")
      ? ((this.ju = g.ec(a, this.j, this)),
        g.DX(this, g.kr(a, this.j)),
        (a = this.J.getOption("remote", "currentReceiver")),
        (a = this.j(a)),
        this.options[a] && this.Qj(a),
        this.enable(!0))
      : this.enable(!1);
  };
  n$.prototype.j = function (a) {
    return a.key;
  };
  n$.prototype.Kk = function (a) {
    return "cast-selector-receiver" === a ? "Cast..." : this.ju[a].name;
  };
  n$.prototype.rh = function (a) {
    g.CX.prototype.rh.call(this, a);
    this.J.setOption("remote", "currentReceiver", this.ju[a]);
    this.Mb.Pb();
  };
  g.w(MAb, g.zV);
  g.k = MAb.prototype;
  g.k.create = function () {
    var a = this.player.U(),
      b = g.hS(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token"),
    };
    xAb(b, a);
    this.subscriptions.push(g.ME("yt-remote-before-disconnect", this.E8, this));
    this.subscriptions.push(g.ME("yt-remote-connection-change", this.Y9, this));
    this.subscriptions.push(
      g.ME("yt-remote-receiver-availability-change", this.hZ, this)
    );
    this.subscriptions.push(g.ME("yt-remote-auto-connect", this.W9, this));
    this.subscriptions.push(g.ME("yt-remote-receiver-resumed", this.V9, this));
    this.subscriptions.push(g.ME("mdx-privacy-popup-confirm", this.waa, this));
    this.subscriptions.push(g.ME("mdx-privacy-popup-cancel", this.vaa, this));
    this.hZ();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.zV.prototype.load.call(this);
    this.fm = new IAb(this, this.player, this.Ic);
    var a = (a = FAb()) ? a.currentTime : 0;
    var b = CAb() ? new L9(e$(), void 0) : null;
    0 == a && b && (a = I9(M9(b)));
    0 !== a && this.Jc(a);
    NAb(this, this.kf, this.kf);
    this.player.hq(6);
  };
  g.k.unload = function () {
    this.player.qa("mdxautoplaycanceled");
    this.Ss = this.Tp;
    g.vb(this.fm, this.Ic);
    this.Ic = this.fm = null;
    g.zV.prototype.unload.call(this);
    this.player.hq(5);
    o$(this);
  };
  g.k.ya = function () {
    g.NE(this.subscriptions);
    g.zV.prototype.ya.call(this);
  };
  g.k.DE = function (a) {
    var b = g.Ka.apply(1, arguments);
    this.loaded && this.fm.Yk.apply(this.fm, [a].concat(g.qa(b)));
  };
  g.k.getAdState = function () {
    return this.Th;
  };
  g.k.Gp = function () {
    return this.Ic ? M9(this.Ic).Gp : !1;
  };
  g.k.Zk = function () {
    return this.Ic ? M9(this.Ic).Zk : !1;
  };
  g.k.Jc = function (a, b) {
    this.OX = a || 0;
    this.player.qa("progresssync", a, b);
    this.player.Qa("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.OX;
  };
  g.k.getProgressState = function () {
    var a = M9(this.Ic),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: 1081 != a.playerState && this.player.Sh(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.B ? a.C + G9(a) : a.C,
      isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
      loaded: a.Z,
      seekableEnd: a.B ? a.j + G9(a) : a.j,
      seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
      offset: 0,
      viewerLivestreamJoinMediaTime: 0,
    };
  };
  g.k.nextVideo = function () {
    this.Ic && this.Ic.nextVideo();
  };
  g.k.YJ = function () {
    this.Ic && this.Ic.YJ();
  };
  g.k.E8 = function (a) {
    1 === a && (this.RQ = this.Ic ? M9(this.Ic) : null);
  };
  g.k.Y9 = function () {
    var a = CAb() ? new L9(e$(), void 0) : null;
    if (a) {
      var b = this.Ss;
      this.loaded && this.unload();
      this.Ic = a;
      this.RQ = null;
      b.key !== this.Tp.key && ((this.Ss = b), this.load());
    } else
      g.ub(this.Ic),
        (this.Ic = null),
        this.loaded &&
          (this.unload(),
          (a = this.RQ) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, I9(a)));
    this.player.qa("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.hZ = function () {
    var a = [this.Tp],
      b = a.concat,
      c = yAb();
    C9() &&
      g.YC("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.ju = b.call(a, c);
    a = AAb() || this.Tp;
    p$(this, a);
    this.player.Qa("onMdxReceiversChange");
  };
  g.k.W9 = function () {
    var a = AAb();
    p$(this, a);
  };
  g.k.V9 = function () {
    this.Ss = AAb();
  };
  g.k.waa = function () {
    this.bF = !0;
    o$(this);
    i$ = !1;
    f$ && h$(f$, 1);
    f$ = null;
  };
  g.k.vaa = function () {
    this.bF = !1;
    o$(this);
    p$(this, this.Tp);
    this.Ss = this.Tp;
    i$ = !1;
    f$ = null;
    this.player.playVideo();
  };
  g.k.Jh = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.ju;
      case "currentReceiver":
        return (
          b && ("cast-selector-receiver" === b.key ? Rzb() : p$(this, b)),
          this.loaded ? this.Ss : this.Tp
        );
      case "quickCast":
        return 2 === this.ju.length &&
          "cast-selector-receiver" === this.ju[1].key
          ? (b && Rzb(), !0)
          : !1;
    }
  };
  g.k.iS = function () {
    this.Ic.iS();
  };
  g.k.Gl = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.k.isLoggedIn = function () {
    var a, b;
    return void 0 !==
      (null == (a = g.IB("PLAYER_CONFIG"))
        ? void 0
        : null == (b = a.args)
        ? void 0
        : b.authuser)
      ? !0
      : !(!g.IB("SESSION_INDEX") && !g.IB("LOGGED_IN"));
  };
  g.yV("remote", MAb);
})(_yt_player);
