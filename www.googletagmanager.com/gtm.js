// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "2",

      macros: [
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-5JWBLMBCB8",
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 4,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "m",
          [46, "v", "w"],
          [
            66,
            "x",
            [2, [15, "b"], "keys", [7, [15, "w"]]],
            [46, [43, [15, "v"], [15, "x"], [16, [15, "w"], [15, "x"]]]],
          ],
        ],
        [
          50,
          "n",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "e"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "e"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "o",
          [46, "v"],
          [52, "w", ["n"]],
          [
            65,
            "x",
            [15, "w"],
            [
              46,
              [
                53,
                [52, "y", [16, [15, "v"], [15, "x"]]],
                [22, [15, "y"], [46, [36, [15, "y"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [
          52,
          "d",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "e", [15, "__module_gtag"]],
        [52, "f", ["require", "internal.gtagConfig"]],
        [52, "g", ["require", "getType"]],
        [52, "h", ["require", "internal.loadGoogleTag"]],
        [52, "i", ["require", "logToConsole"]],
        [52, "j", ["require", "makeNumber"]],
        [52, "k", ["require", "makeString"]],
        [52, "l", ["require", "makeTableMap"]],
        [52, "p", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["g", [15, "p"]], "string"],
            [24, [2, [15, "p"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "i",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "p"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "q", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "r",
          [
            30,
            [
              "l",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["m", [15, "q"], [15, "r"]],
        [52, "s", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "t",
          [
            30,
            [
              "l",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["m", [15, "s"], [15, "t"]],
        [52, "u", [15, "q"]],
        ["m", [15, "u"], [15, "s"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "u"],
              "hasOwnProperty",
              [7, [17, [17, [15, "e"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "v",
                [
                  30,
                  [
                    16,
                    [15, "u"],
                    [17, [17, [15, "e"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "m",
                [15, "v"],
                [
                  30,
                  [
                    "l",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "u"],
                [17, [17, [15, "e"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "v"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "e"],
          "convertParameters",
          [
            7,
            [15, "u"],
            [17, [15, "e"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "v"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["k", [15, "v"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "v"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "e"],
          "convertParameters",
          [
            7,
            [15, "u"],
            [17, [15, "e"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "v"], [36, ["j", [15, "v"]]]],
          ],
        ],
        [
          22,
          [16, [15, "d"], "enableDirectTagLoadingInGoogleTag"],
          [
            46,
            [
              22,
              [16, [15, "d"], "enableLoadGoogleTagOptionsObject"],
              [46, ["h", [15, "p"], [8, "firstPartyUrl", ["o", [15, "u"]]]]],
              [46, ["h", [15, "p"], ["o", [15, "u"]]]],
            ],
          ],
        ],
        ["f", [15, "p"], [15, "u"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_google_signals",
                        "cookie_update",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __googtag: { 1: 10 },
    },
    permissions: {
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
    },

    security_groups: {
      google: ["__googtag"],
    },
  };

  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    da = function (a) {
      return (a.raw = a);
    },
    ea = function (a, b) {
      a.raw = b;
      return a;
    },
    ha = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ia = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ka = function (a) {
      return a instanceof Array ? a : ia(ha(a));
    },
    la =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    na;
  if ("function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;
  else {
    var oa;
    a: {
      var pa = { a: !0 },
        qa = {};
      try {
        qa.__proto__ = pa;
        oa = qa.a;
        break a;
      } catch (a) {}
      oa = !1;
    }
    na = oa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ra = na,
    sa = function (a, b) {
      a.prototype = la(b.prototype);
      a.prototype.constructor = a;
      if (ra) ra(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Sn = b.prototype;
    },
    ta = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ua = this || self,
    va = function (a) {
      return a;
    };
  var xa = function (a, b) {
    this.h = a;
    this.C = b;
  };
  var ya = function () {
    this.C = {};
    this.H = {};
  };
  aa = ya.prototype;
  aa.get = function (a) {
    return this.C["dust." + a];
  };
  aa.set = function (a, b) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || (this.C[a] = b);
  };
  aa.Nh = function (a, b) {
    this.set(a, b);
    this.H["dust." + a] = !0;
  };
  aa.has = function (a) {
    return this.C.hasOwnProperty("dust." + a);
  };
  aa.remove = function (a) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || delete this.C[a];
  };
  var za = function () {
    this.quota = {};
  };
  za.prototype.reset = function () {
    this.quota = {};
  };
  var Aa = function (a, b) {
    this.T = a;
    this.N = function (c, d, e) {
      return c.apply(d, e);
    };
    this.D = b;
    this.C = new ya();
    this.h = this.H = void 0;
  };
  Aa.prototype.add = function (a, b) {
    Ba(this, a, b, !1);
  };
  var Ba = function (a, b, c, d) {
    d ? a.C.Nh(b, c) : a.C.set(b, c);
  };
  Aa.prototype.set = function (a, b) {
    !this.C.has(a) && this.D && this.D.has(a)
      ? this.D.set(a, b)
      : this.C.set(a, b);
  };
  Aa.prototype.get = function (a) {
    return this.C.has(a) ? this.C.get(a) : this.D ? this.D.get(a) : void 0;
  };
  Aa.prototype.has = function (a) {
    return !!this.C.has(a) || !(!this.D || !this.D.has(a));
  };
  var Ca = function (a) {
    var b = new Aa(a.T, a);
    a.H && (b.H = a.H);
    b.N = a.N;
    b.h = a.h;
    return b;
  };
  var Da = function () {},
    Ea = function (a) {
      return "function" === typeof a;
    },
    k = function (a) {
      return "string" === typeof a;
    },
    Ga = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ha = Array.isArray,
    Ja = function (a, b) {
      if (a && Ha(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ka = function (a, b) {
      if (!Ga(a) || !Ga(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ma = function (a, b) {
      for (var c = new La(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    l = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Na = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Oa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Pa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ra = function (a) {
      var b = [];
      if (Ha(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Sa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ta = function () {
      return new Date(Date.now());
    },
    Ua = function () {
      return Ta().getTime();
    },
    La = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  La.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  La.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Va = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Wa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Xa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ya = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Za = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    $a = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    ab = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    bb = /^\w{1,9}$/,
    cb = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      l(a, function (d, e) {
        bb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    db = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function eb(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = fb(a, b[d])), c instanceof xa);
      d++
    );
    return c;
  }
  function fb(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || "function" !== typeof c.invoke)
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.H;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var gb = function () {
    this.D = new za();
    this.h = new Aa(this.D);
  };
  gb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.C(c);
  };
  gb.prototype.C = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = fb(this.h, arguments[c]);
    return b;
  };
  gb.prototype.H = function (a, b) {
    var c = Ca(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = fb(c, arguments[e]);
    return d;
  };
  var hb = function () {
    ya.call(this);
    this.D = !1;
  };
  sa(hb, ya);
  var ib = function (a, b) {
    var c = [],
      d;
    for (d in a.C)
      if (a.C.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  aa = hb.prototype;
  aa.set = function (a, b) {
    this.D || ya.prototype.set.call(this, a, b);
  };
  aa.Nh = function (a, b) {
    this.D || ya.prototype.Nh.call(this, a, b);
  };
  aa.remove = function (a) {
    this.D || ya.prototype.remove.call(this, a);
  };
  aa.Cb = function () {
    this.D = !0;
  };
  aa.Aj = function () {
    return this.D;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var kb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    lb = function (a) {
      if (null == a) return String(a);
      var b = kb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    mb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    nb = function (a) {
      if (!a || "object" != lb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !mb(a, "constructor") &&
          !mb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || mb(a, b);
    },
    C = function (a, b) {
      var c = b || ("array" == lb(a) ? [] : {}),
        d;
      for (d in a)
        if (mb(a, d)) {
          var e = a[d];
          "array" == lb(e)
            ? ("array" != lb(c[d]) && (c[d] = []), (c[d] = C(e, c[d])))
            : nb(e)
            ? (nb(c[d]) || (c[d] = {}), (c[d] = C(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var ob = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    pb = function (a) {
      if (void 0 == a || Ha(a) || nb(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    },
    qb = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    };
  var rb = function (a) {
    this.C = new hb();
    this.h = [];
    this.D = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (qb(b) ? (this.h[Number(b)] = a[Number(b)]) : this.C.set(b, a[b]));
  };
  aa = rb.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof rb
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  aa.set = function (a, b) {
    if (!this.D)
      if ("length" === a) {
        if (!qb(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.h.length = Number(b);
      } else qb(a) ? (this.h[Number(a)] = b) : this.C.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a
      ? this.length()
      : qb(a)
      ? this.h[Number(a)]
      : this.C.get(a);
  };
  aa.length = function () {
    return this.h.length;
  };
  aa.Ub = function () {
    for (var a = ib(this.C, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new rb(a);
  };
  aa.remove = function (a) {
    qb(a) ? delete this.h[Number(a)] : this.C.remove(a);
  };
  aa.pop = function () {
    return this.h.pop();
  };
  aa.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.h.shift();
  };
  aa.splice = function (a, b, c) {
    return new rb(this.h.splice.apply(this.h, arguments));
  };
  aa.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return (qb(a) && this.h.hasOwnProperty(a)) || this.C.has(a);
  };
  aa.Cb = function () {
    this.D = !0;
    Object.freeze(this.h);
    this.C.Cb();
  };
  aa.Aj = function () {
    return this.D;
  };
  var sb = function () {
    hb.call(this);
  };
  sa(sb, hb);
  sb.prototype.Ub = function () {
    return new rb(ib(this, 1));
  };
  function tb() {
    for (var a = ub, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function vb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var ub, wb;
  function xb(a) {
    ub = ub || vb();
    wb = wb || tb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (h >> 6),
        q = h & 63;
      e || ((q = 64), d || (p = 64));
      b.push(ub[m], ub[n], ub[p], ub[q]);
    }
    return b.join("");
  }
  function yb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = wb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    ub = ub || vb();
    wb = wb || tb();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var zb = {},
    Ab = function (a, b) {
      zb[a] = zb[a] || [];
      zb[a][b] = !0;
    },
    Bb = function () {
      delete zb.GA4_EVENT;
    },
    Cb = function (a) {
      var b = zb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return xb(c.join("")).replace(/\.+$/, "");
    };
  var Db = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var Eb,
    Fb = function () {
      if (void 0 === Eb) {
        var a = null,
          b = ua.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: va,
              createScript: va,
              createScriptURL: va,
            });
          } catch (c) {
            ua.console && ua.console.error(c.message);
          }
          Eb = a;
        } else Eb = a;
      }
      return Eb;
    };
  var Hb = function (a) {
    this.h = a;
  };
  Hb.prototype.toString = function () {
    return this.h + "";
  };
  var Ib = function (a) {
      return a instanceof Hb && a.constructor === Hb
        ? a.h
        : "type_error:TrustedResourceUrl";
    },
    Jb = {},
    Kb = function (a) {
      var b = a,
        c = Fb(),
        d = c ? c.createScriptURL(b) : b;
      return new Hb(d, Jb);
    };
  var Lb = function (a) {
    this.h = a;
  };
  Lb.prototype.toString = function () {
    return this.h.toString();
  };
  var Mb = function (a) {
      return a instanceof Lb && a.constructor === Lb
        ? a.h
        : "type_error:SafeUrl";
    },
    Nb = {},
    Ob = new Lb("about:invalid#zClosurez", Nb);
  var Pb, Qb;
  a: {
    for (var Rb = ["CLOSURE_FLAGS"], Sb = ua, Tb = 0; Tb < Rb.length; Tb++)
      if (((Sb = Sb[Rb[Tb]]), null == Sb)) {
        Qb = null;
        break a;
      }
    Qb = Sb;
  }
  var Ub = Qb && Qb[610401301];
  Pb = null != Ub ? Ub : !1;
  function Vb() {
    var a = ua.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Wb,
    Xb = ua.navigator;
  Wb = Xb ? Xb.userAgentData || null : null;
  function Yb(a) {
    return Pb
      ? Wb
        ? Wb.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function Zb(a) {
    return -1 != Vb().indexOf(a);
  }
  function $b() {
    return Pb ? !!Wb && 0 < Wb.brands.length : !1;
  }
  function ac() {
    return $b() ? !1 : Zb("Opera");
  }
  function bc() {
    return Zb("Firefox") || Zb("FxiOS");
  }
  function cc() {
    return $b()
      ? Yb("Chromium")
      : ((Zb("Chrome") || Zb("CriOS")) && !($b() ? 0 : Zb("Edge"))) ||
          Zb("Silk");
  }
  var dc = {},
    ec = function (a) {
      this.h = a;
    };
  ec.prototype.toString = function () {
    return this.h.toString();
  };
  var fc = function (a) {
    return a instanceof ec && a.constructor === ec
      ? a.h
      : "type_error:SafeHtml";
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var gc = "function" === typeof URL;
  function hc(a) {
    var b;
    a: if (gc) {
      var c;
      try {
        c = new URL(a);
      } catch (g) {
        b = "https:";
        break a;
      }
      b = c.protocol;
    } else {
      var d;
      b: {
        var e = document.createElement("a");
        try {
          e.href = a;
        } catch (g) {
          d = void 0;
          break b;
        }
        var f = e.protocol;
        d = ":" === f || "" === f ? "https:" : f;
      }
      b = d;
    }
    if ("javascript:" !== b) return a;
  }
  var ic = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
  var jc = {};
  var kc = function () {},
    lc = function (a) {
      this.h = a;
    };
  sa(lc, kc);
  lc.prototype.toString = function () {
    return this.h;
  };
  function mc(a, b) {
    var c = [new lc(nc[0].toLowerCase(), jc)];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof lc) g = f.h;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function pc(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  function qc(a, b) {
    var c = b instanceof Lb ? Mb(b) : hc(b);
    void 0 !== c && (a.action = c);
  }
  var rc = da([""]),
    sc = ea(["\x00"], ["\\0"]),
    tc = ea(["\n"], ["\\n"]),
    uc = ea(["\x00"], ["\\u0000"]);
  function vc(a) {
    return -1 === a.toString().indexOf("`");
  }
  vc(function (a) {
    return a(rc);
  }) ||
    vc(function (a) {
      return a(sc);
    }) ||
    vc(function (a) {
      return a(tc);
    }) ||
    vc(function (a) {
      return a(uc);
    });
  var wc = function (a) {
    this.gm = a;
  };
  function xc(a) {
    return new wc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var yc = [
    xc("data"),
    xc("http"),
    xc("https"),
    xc("mailto"),
    xc("ftp"),
    new wc(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function zc(a, b) {
    b = void 0 === b ? yc : b;
    if (a instanceof Lb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof wc && d.gm(a)) return new Lb(a, Nb);
    }
  }
  function Ac(a) {
    var b;
    b = void 0 === b ? yc : b;
    return zc(a, b) || Ob;
  }
  function Bc(a) {
    var b = (a = Cc(a)),
      c = Fb(),
      d = c ? c.createHTML(b) : b;
    return new ec(d, dc);
  }
  function Cc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var z = window,
    E = document,
    Dc = navigator,
    Ec = E.currentScript && E.currentScript.src,
    Fc = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Gc = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Hc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Ic = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Jc(a, b, c) {
    b &&
      l(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Kc = function (a, b, c, d, e) {
      var f = E.createElement("script");
      Jc(f, d, Hc);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var g;
      g = Kb(Cc(a));
      f.src = Ib(g);
      var h,
        m,
        n,
        p =
          null ==
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(m, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      Gc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = E.getElementsByTagName("script")[0] || E.body || E.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Lc = function () {
      if (Ec) {
        var a = Ec.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Mc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = E.createElement("iframe")), (h = !0));
      Jc(g, c, Ic);
      d &&
        l(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (h) {
        var m = (E.body && E.body.lastChild) || E.body || E.head;
        m.parentNode.insertBefore(g, m);
      }
      Gc(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Nc = function (a, b, c, d) {
      var e = new Image(1, 1);
      Jc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Oc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Pc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      z.setTimeout(a, 0);
    },
    Qc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Rc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Sc = function (a) {
      var b = E.createElement("div"),
        c = b,
        d = Bc("A<div>" + a + "</div>");
      1 === c.nodeType && pc(c);
      c.innerHTML = fc(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Tc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Uc = function (a) {
      var b;
      try {
        b = Dc.sendBeacon && Dc.sendBeacon(a);
      } catch (c) {
        Ab("TAGGING", 15);
      }
      b || Nc(a);
    },
    Vc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Wc = function (a) {
      var b = {
        headers: { "Attribution-Reporting-Eligible": "trigger" },
        keepalive: !0,
        attributionReporting: { eventSourceEligible: !0, triggerEligible: !0 },
      };
      try {
        z.fetch(a, b);
      } catch (c) {}
    },
    Xc = function () {
      var a = z.performance;
      if (a && Ea(a.now)) return a.now();
    },
    Yc = function () {
      return z.performance || void 0;
    };
  var Zc = function (a, b) {
      return K(this, a) && K(this, b);
    },
    $c = function (a, b) {
      return K(this, a) === K(this, b);
    },
    ad = function (a, b) {
      return K(this, a) || K(this, b);
    },
    bd = function (a, b) {
      a = K(this, a);
      b = K(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    cd = function (a, b) {
      a = String(K(this, a));
      b = String(K(this, b));
      return a.substring(0, b.length) === b;
    },
    dd = function (a, b) {
      a = K(this, a);
      b = K(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof sb &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var ed = function (a, b) {
    hb.call(this);
    this.N = a;
    this.T = b;
  };
  sa(ed, hb);
  ed.prototype.toString = function () {
    return this.N;
  };
  ed.prototype.Ub = function () {
    return new rb(ib(this, 1));
  };
  ed.prototype.invoke = function (a, b) {
    return this.T.apply(
      new fd(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  ed.prototype.h = function (a, b) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var fd = function (a, b) {
      this.C = a;
      this.h = b;
    },
    K = function (a, b) {
      return Ha(b) ? fb(a.h, b) : b;
    },
    L = function (a) {
      return a.C.N;
    };
  var gd = function () {
    this.map = new Map();
  };
  gd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  gd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var hd = function () {
    this.keys = [];
    this.values = [];
  };
  hd.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  hd.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function id() {
    try {
      return Map ? new gd() : new hd();
    } catch (a) {
      return new hd();
    }
  }
  var jd = function (a) {
    if (a instanceof jd) return a;
    if (pb(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.h = a;
  };
  jd.prototype.toString = function () {
    return String(this.h);
  };
  var ld = function (a) {
    hb.call(this);
    this.h = a;
    this.set("then", kd(this));
    this.set("catch", kd(this, !0));
    this.set("finally", kd(this, !1, !0));
  };
  sa(ld, sb);
  var kd = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new ed("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof ed || (d = void 0);
      e instanceof ed || (e = void 0);
      var f = Ca(this.h),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.h) : m.invoke(f, n);
          };
        },
        h = a.h.then(d && g(d), e && g(e));
      return new ld(h);
    });
  };
  var nd = function (a, b, c) {
      var d = id(),
        e = function (g, h) {
          for (var m = ib(g, 1), n = 0; n < m.length; n++)
            h[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (g instanceof rb) {
            var m = [];
            d.set(g, m);
            for (var n = g.Ub(), p = 0; p < n.length(); p++)
              m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof ld) return g.h;
          if (g instanceof sb) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof ed) {
            var r = function () {
              for (
                var u = Array.prototype.slice.call(arguments, 0), v = 0;
                v < u.length;
                v++
              )
                u[v] = md(u[v], b, c);
              var w = new Aa(b ? b.T : new za());
              b && (w.h = b.h);
              return f(g.invoke.apply(g, [w].concat(u)));
            };
            d.set(g, r);
            e(g, r);
            return r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (g instanceof jd && t) return g.h;
          switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return g;
            case "object":
              if (null === g) return null;
          }
        };
      return f(a);
    },
    md = function (a, b, c) {
      var d = id(),
        e = function (g, h) {
          for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (Ha(g) || Na(g)) {
            var m = new rb([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (nb(g)) {
            var p = new sb();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new ed("", function (x) {
              for (
                var y = Array.prototype.slice.call(arguments, 0), A = 0;
                A < y.length;
                A++
              )
                y[A] = nd(K(this, y[A]), b, c);
              return f((0, this.h.N)(g, g, y));
            });
            d.set(g, q);
            e(g, q);
            return q;
          }
          var v = typeof g;
          if (null === g || "string" === v || "number" === v || "boolean" === v)
            return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
              break;
            default:
          }
          if (void 0 !== g && w) return new jd(g);
        };
      return f(a);
    };
  var od = function () {
    var a = !1;
    return a;
  };
  var pd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof rb)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new rb(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new rb(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new rb(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = ob(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new rb(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = ob(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var qd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  sa(qd, Error);
  var rd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    sd = new xa("break"),
    td = new xa("continue"),
    ud = function (a, b) {
      return K(this, a) + K(this, b);
    },
    vd = function (a, b) {
      return K(this, a) && K(this, b);
    },
    wd = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      if (!(c instanceof rb))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't read property " + b + " of " + a + ".";
        if (od()) throw new qd(d);
        throw Error(d);
      }
      var e = "number" === typeof a;
      if ("boolean" === typeof a || e) {
        if ("toString" === b) {
          if (e && c.length()) {
            var f = nd(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = "TypeError: " + a + "." + b + " is not a function.";
        if (od()) throw new qd(g);
        throw Error(g);
      }
      if ("string" === typeof a) {
        if (rd.hasOwnProperty(b)) {
          var h = 2;
          h = 1;
          var m = nd(c, void 0, h);
          return md(a[b].apply(a, m), this.h);
        }
        var n = "TypeError: " + b + " is not a function";
        if (od()) throw new qd(n);
        throw Error(n);
      }
      if (a instanceof rb) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof ed) {
            var q = ob(c);
            q.unshift(this.h);
            return p.invoke.apply(p, q);
          }
          var r = "TypeError: " + b + " is not a function";
          if (od()) throw new qd(r);
          throw Error(r);
        }
        if (0 <= pd.supportedMethods.indexOf(b)) {
          var t = ob(c);
          t.unshift(this.h);
          return pd[b].apply(a, t);
        }
      }
      if (a instanceof ed || a instanceof sb) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof ed) {
            var v = ob(c);
            v.unshift(this.h);
            return u.invoke.apply(u, v);
          }
          var w = "TypeError: " + b + " is not a function";
          if (od()) throw new qd(w);
          throw Error(w);
        }
        if ("toString" === b) return a instanceof ed ? a.N : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, ob(c));
      }
      if (a instanceof jd && "toString" === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if (od()) throw new qd(x);
      throw Error(x);
    },
    xd = function (a, b) {
      a = K(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = K(this, b);
      c.set(a, d);
      return d;
    },
    yd = function (a) {
      var b = Ca(this.h),
        c = eb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof xa) return c;
    },
    zd = function () {
      return sd;
    },
    Ad = function (a) {
      for (var b = K(this, a), c = 0; c < b.length; c++) {
        var d = K(this, b[c]);
        if (d instanceof xa) return d;
      }
    },
    Bd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = K(this, arguments[c + 1]);
          Ba(b, d, e, !0);
        }
      }
    },
    Cd = function () {
      return td;
    },
    Dd = function (a, b) {
      return new xa(a, K(this, b));
    },
    Ed = function (a, b, c) {
      var d = new rb();
      b = K(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.h.add(a, K(this, f));
    },
    Fd = function (a, b) {
      return K(this, a) / K(this, b);
    },
    Gd = function (a, b) {
      a = K(this, a);
      b = K(this, b);
      var c = a instanceof jd,
        d = b instanceof jd;
      return c || d ? (c && d ? a.h == b.h : !1) : a == b;
    },
    Hd = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = K(this, arguments[c]);
      return b;
    };
  function Id(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = eb(f, d);
      if (g instanceof xa) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Jd(a, b, c) {
    if ("string" === typeof b)
      return Id(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof sb || b instanceof rb || b instanceof ed) {
      var d = b.Ub(),
        e = d.length();
      return Id(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var Kd = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      var d = this.h;
      return Jd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Ld = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      var d = this.h;
      return Jd(
        function (e) {
          var f = Ca(d);
          Ba(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Md = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      var d = this.h;
      return Jd(
        function (e) {
          var f = Ca(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    Od = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      var d = this.h;
      return Nd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Pd = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      var d = this.h;
      return Nd(
        function (e) {
          var f = Ca(d);
          Ba(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Qd = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      var d = this.h;
      return Nd(
        function (e) {
          var f = Ca(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function Nd(a, b, c) {
    if ("string" === typeof b)
      return Id(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof rb)
      return Id(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (od()) throw new qd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  var Rd = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = K(this, a);
      if (!(f instanceof rb))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.h;
      d = K(this, d);
      var h = Ca(g);
      for (e(g, h); fb(h, b); ) {
        var m = eb(h, d);
        if (m instanceof xa) {
          if ("break" === m.h) break;
          if ("return" === m.h) return m;
        }
        var n = Ca(g);
        e(h, n);
        fb(n, c);
        h = n;
      }
    },
    Sd = function (a, b, c) {
      var d = this.h,
        e = K(this, b);
      if (!(e instanceof rb))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new ed(
        a,
        (function () {
          return function (g) {
            var h = Ca(d);
            void 0 === h.h && (h.h = this.h.h);
            for (
              var m = Array.prototype.slice.call(arguments, 0), n = 0;
              n < m.length;
              n++
            )
              if (((m[n] = K(this, m[n])), m[n] instanceof xa)) return m[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new rb(m));
            var r = eb(h, f);
            if (r instanceof xa) return "return" === r.h ? r.C : r;
          };
        })()
      );
    },
    Td = function (a) {
      a = K(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Ud = function (a, b) {
      var c;
      a = K(this, a);
      b = K(this, b);
      if (void 0 === a || null === a) {
        var d =
          "TypeError: Cannot read properties of " +
          a +
          " (reading '" +
          b +
          "')";
        if (od()) throw new qd(d);
        throw Error(d);
      }
      if (a instanceof sb || a instanceof rb || a instanceof ed) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : qb(b) && (c = a[b]);
      else if (a instanceof jd) return;
      return c;
    },
    Vd = function (a, b) {
      return K(this, a) > K(this, b);
    },
    Wd = function (a, b) {
      return K(this, a) >= K(this, b);
    },
    Yd = function (a, b) {
      a = K(this, a);
      b = K(this, b);
      a instanceof jd && (a = a.h);
      b instanceof jd && (b = b.h);
      return a === b;
    },
    Zd = function (a, b) {
      return !Yd.call(this, a, b);
    },
    $d = function (a, b, c) {
      var d = [];
      K(this, a) ? (d = K(this, b)) : c && (d = K(this, c));
      var e = eb(this.h, d);
      if (e instanceof xa) return e;
    },
    ae = function (a, b) {
      return K(this, a) < K(this, b);
    },
    be = function (a, b) {
      return K(this, a) <= K(this, b);
    },
    ce = function (a) {
      for (var b = new rb(), c = 0; c < arguments.length; c++) {
        var d = K(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    de = function (a) {
      for (var b = new sb(), c = 0; c < arguments.length - 1; c += 2) {
        var d = K(this, arguments[c]) + "",
          e = K(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    ee = function (a, b) {
      return K(this, a) % K(this, b);
    },
    fe = function (a, b) {
      return K(this, a) * K(this, b);
    },
    ge = function (a) {
      return -K(this, a);
    },
    he = function (a) {
      return !K(this, a);
    },
    ie = function (a, b) {
      return !Gd.call(this, a, b);
    },
    je = function () {
      return null;
    },
    ke = function (a, b) {
      return K(this, a) || K(this, b);
    },
    le = function (a, b) {
      var c = K(this, a);
      K(this, b);
      return c;
    },
    me = function (a) {
      return K(this, a);
    },
    ne = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    oe = function (a) {
      return new xa("return", K(this, a));
    },
    pe = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't set property " + b + " of " + a + ".";
        if (od()) throw new qd(d);
        throw Error(d);
      }
      (a instanceof ed || a instanceof rb || a instanceof sb) && a.set(b, c);
      return c;
    },
    qe = function (a, b) {
      return K(this, a) - K(this, b);
    },
    re = function (a, b, c) {
      a = K(this, a);
      var d = K(this, b),
        e = K(this, c);
      if (!Ha(d) || !Ha(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === K(this, d[h]))
          if (((f = K(this, e[h])), f instanceof xa)) {
            var m = f.h;
            if ("break" === m) return;
            if ("return" === m || "continue" === m) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = K(this, e[e.length - 1])),
        f instanceof xa && ("return" === f.h || "continue" === f.h))
      )
        return f;
    },
    se = function (a, b, c) {
      return K(this, a) ? K(this, b) : K(this, c);
    },
    te = function (a) {
      a = K(this, a);
      return a instanceof ed ? "function" : typeof a;
    },
    ue = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    ve = function (a, b, c, d) {
      var e = K(this, d);
      if (K(this, c)) {
        var f = eb(this.h, e);
        if (f instanceof xa) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; K(this, a); ) {
        var g = eb(this.h, e);
        if (g instanceof xa) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        K(this, b);
      }
    },
    we = function (a) {
      return ~Number(K(this, a));
    },
    xe = function (a, b) {
      return Number(K(this, a)) << Number(K(this, b));
    },
    ye = function (a, b) {
      return Number(K(this, a)) >> Number(K(this, b));
    },
    ze = function (a, b) {
      return Number(K(this, a)) >>> Number(K(this, b));
    },
    Ae = function (a, b) {
      return Number(K(this, a)) & Number(K(this, b));
    },
    Be = function (a, b) {
      return Number(K(this, a)) ^ Number(K(this, b));
    },
    Ce = function (a, b) {
      return Number(K(this, a)) | Number(K(this, b));
    },
    De = function () {},
    Ee = function (a, b, c, d, e) {
      var f = !0;
      try {
        var g = K(this, c);
        if (g instanceof xa) return g;
      } catch (r) {
        if (!(r instanceof qd && a)) throw ((f = r instanceof qd), r);
        var h = Ca(this.h),
          m = new jd(r);
        h.add(b, m);
        var n = K(this, d),
          p = eb(h, n);
        if (p instanceof xa) return p;
      } finally {
        if (f && void 0 !== e) {
          var q = K(this, e);
          if (q instanceof xa) return q;
        }
      }
    };
  var Ge = function () {
    this.h = new gb();
    Fe(this);
  };
  Ge.prototype.execute = function (a) {
    return this.h.C(a);
  };
  var Fe = function (a) {
    var b = function (c, d) {
      var e = new ed(String(c), d);
      e.Cb();
      a.h.h.set(String(c), e);
    };
    b("map", de);
    b("and", Zc);
    b("contains", bd);
    b("equals", $c);
    b("or", ad);
    b("startsWith", cd);
    b("variable", dd);
  };
  var Ie = function () {
    this.h = new gb();
    He(this);
  };
  Ie.prototype.execute = function (a) {
    return Je(this.h.C(a));
  };
  var Ke = function (a, b, c) {
      return Je(a.h.H(b, c));
    },
    He = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new ed(e, d);
        f.Cb();
        a.h.h.set(e, f);
      };
      b(0, ud);
      b(1, vd);
      b(2, wd);
      b(3, xd);
      b(56, Ae);
      b(57, xe);
      b(58, we);
      b(59, Ce);
      b(60, ye);
      b(61, ze);
      b(62, Be);
      b(53, yd);
      b(4, zd);
      b(5, Ad);
      b(52, Bd);
      b(6, Cd);
      b(49, Dd);
      b(7, ce);
      b(8, de);
      b(9, Ad);
      b(50, Ed);
      b(10, Fd);
      b(12, Gd);
      b(13, Hd);
      b(51, Sd);
      b(47, Kd);
      b(54, Ld);
      b(55, Md);
      b(63, Rd);
      b(64, Od);
      b(65, Pd);
      b(66, Qd);
      b(15, Td);
      b(16, Ud);
      b(17, Ud);
      b(18, Vd);
      b(19, Wd);
      b(20, Yd);
      b(21, Zd);
      b(22, $d);
      b(23, ae);
      b(24, be);
      b(25, ee);
      b(26, fe);
      b(27, ge);
      b(28, he);
      b(29, ie);
      b(45, je);
      b(30, ke);
      b(32, le);
      b(33, le);
      b(34, me);
      b(35, me);
      b(46, ne);
      b(36, oe);
      b(43, pe);
      b(37, qe);
      b(38, re);
      b(39, se);
      b(67, Ee);
      b(40, te);
      b(44, De);
      b(41, ue);
      b(42, ve);
    };
  function Je(a) {
    if (
      a instanceof xa ||
      a instanceof ed ||
      a instanceof rb ||
      a instanceof sb ||
      a instanceof jd ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  function Le(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  function Me(a) {
    switch (a) {
      case 1:
        return "G";
      case 3:
        return "g";
      case 2:
        return "D";
      case 4:
        return "d";
      case 0:
        return "g";
      default:
        return "g";
    }
  }
  function Ne(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + Le(c) + Le(d);
      case 1:
        return "G2" + Me(c) + Me(d);
      default:
        return "g1--";
    }
  }
  var Oe = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      dk: a("consent"),
      Xh: a("convert_case_to"),
      Yh: a("convert_false_to"),
      Zh: a("convert_null_to"),
      ai: a("convert_true_to"),
      bi: a("convert_undefined_to"),
      nn: a("debug_mode_metadata"),
      za: a("function"),
      Wg: a("instance_name"),
      Lk: a("live_only"),
      Mk: a("malware_disabled"),
      Nk: a("metadata"),
      Qk: a("original_activity_id"),
      Bn: a("original_vendor_template_id"),
      An: a("once_on_load"),
      Pk: a("once_per_event"),
      Xi: a("once_per_load"),
      Gn: a("priority_override"),
      Hn: a("respected_consent_types"),
      cj: a("setup_tags"),
      qe: a("tag_id"),
      ij: a("teardown_tags"),
    };
  })();
  var kf;
  var lf = [],
    mf = [],
    nf = [],
    of = [],
    pf = [],
    qf = {},
    rf,
    sf,
    tf = function (a) {
      sf = sf || a;
    },
    uf = function (a) {},
    vf,
    wf = [],
    xf = function (a, b) {
      var c = {};
      c[Oe.za] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    yf = function (a, b) {
      var c = a[Oe.za],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = qf[c],
        f =
          b &&
          2 === b.type &&
          d.reportMacroDiscrepancy &&
          e &&
          -1 !== wf.indexOf(c),
        g = {},
        h = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e &&
            d &&
            d.checkPixieIncompatibility &&
            d.checkPixieIncompatibility(a[m]),
          e && (g[m] = a[m]),
          !e || f) &&
          (h[m.substr(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";
            else {
              var q;
              switch (b.type) {
                case 2:
                  q = lf[p];
                  break;
                case 1:
                  q = of[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[Oe.Wg];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var t, u;
      e && (t = e(g));
      if (!e || f) u = kf(c, h, b);
      f &&
        d &&
        (pb(t)
          ? typeof t !== typeof u && d.reportMacroDiscrepancy(d.id, c)
          : t !== u && d.reportMacroDiscrepancy(d.id, c));
      return e ? t : u;
    },
    Af = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = zf(a[e], b, c));
      return d;
    },
    zf = function (a, b, c) {
      if (Ha(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(zf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = lf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var h = String(g[Oe.Wg]);
            try {
              var m = Af(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = yf(m, { event: b, index: f, type: 2, name: h });
              vf && (d = vf.ol(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[zf(a[n], b, c)] = zf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = zf(a[q], b, c);
              sf && (p = p || sf.bm(r));
              d.push(r);
            }
            return sf && p ? sf.rl(d) : d.join("");
          case "escape":
            d = zf(a[1], b, c);
            if (sf && Ha(a[1]) && "macro" === a[1][0] && sf.dm(a))
              return sf.Im(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Pe[a[t]] && (d = Pe[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!of[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { tj: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[Oe.za] = a[1];
            var w = Bf(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Bf = function (a, b, c) {
      try {
        return rf(Af(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    Cf = function (a) {
      var b = a[Oe.za];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!qf[b];
    };
  var Df = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.h = a;
  };
  sa(Df, Error);
  function Ef(a, b) {
    if (Ha(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Ef(a[c], b[c]);
    }
  }
  var Ff = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Cm = a;
    this.C = b;
    this.h = [];
  };
  sa(Ff, Error);
  var Hf = function () {
    return function (a, b) {
      a instanceof Ff || (a = new Ff(a, Gf));
      b && a.h.push(b);
      throw a;
    };
  };
  function Gf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Ga(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Kf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = If(a), f = 0; f < mf.length; f++) {
        var g = mf[f],
          h = Jf(g, e);
        if (h) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < of.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Jf = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    If = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Bf(nf[c], a));
        return b[c];
      };
    };
  var Lf = {
    ol: function (a, b) {
      b[Oe.Xh] &&
        "string" === typeof a &&
        (a = 1 == b[Oe.Xh] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Oe.Zh) && null === a && (a = b[Oe.Zh]);
      b.hasOwnProperty(Oe.bi) && void 0 === a && (a = b[Oe.bi]);
      b.hasOwnProperty(Oe.ai) && !0 === a && (a = b[Oe.ai]);
      b.hasOwnProperty(Oe.Yh) && !1 === a && (a = b[Oe.Yh]);
      return a;
    },
  };
  var Mf = function () {
      this.h = {};
    },
    Of = function (a, b) {
      var c = Nf.C,
        d;
      null != (d = c.h)[a] || (d[a] = []);
      c.h[a].push(function () {
        return b.apply(null, ka(ta.apply(0, arguments)));
      });
    };
  function Pf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new Df(c, d, g);
      }
  }
  function Qf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Pf(e, b, d, g);
          Pf(f, b, d, g);
        }
      }
    };
  }
  var Rf = [],
    Sf = function (a) {
      return void 0 == Rf[a] ? !1 : Rf[a];
    };
  var Wf = function () {
      var a = data.permissions || {},
        b = Tf.ctid,
        c = this;
      this.C = new Mf();
      this.h = {};
      var d = Sf(15),
        e = {},
        f = {},
        g = Qf(this.C, b, function () {
          var h = arguments[0];
          return h && e[h]
            ? e[h].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      l(a, function (h, m) {
        var n = {};
        l(m, function (q, r) {
          var t = Uf(q, r);
          n[q] = t.assert;
          e[q] || (e[q] = t.M);
          d && t.lj && !f[q] && (f[q] = t.lj);
        });
        var p;
        d &&
          (p = function (q) {
            var r = ta.apply(1, arguments);
            if (!n[q])
              throw Vf(
                q,
                {},
                "The requested additional permission " +
                  q +
                  " is not configured."
              );
            g.apply(null, [q].concat(ka(r)));
          });
        c.h[h] = function (q, r) {
          var t = n[q];
          if (!t)
            throw Vf(
              q,
              {},
              "The requested permission " + q + " is not configured."
            );
          var u = Array.prototype.slice.call(arguments, 0);
          t.apply(void 0, u);
          g.apply(void 0, u);
          if (d) {
            var v = f[q];
            v && v.apply(null, [p].concat(ka(u.slice(1))));
          }
        };
      });
    },
    Xf = function (a) {
      return Nf.h[a] || function () {};
    };
  function Uf(a, b) {
    var c = xf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Vf;
    try {
      return yf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Df(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          if (Sf(15)) throw new Df(a, {}, "Permission " + a + " is unknown.");
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function Vf(a, b, c) {
    return new Df(a, b, c);
  }
  var Yf = !1;
  var Zf = {};
  Zf.jn = Pa("");
  Zf.vl = Pa("");
  var $f = Yf,
    ag = Zf.vl,
    bg = Zf.jn;
  var pg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function qg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var rg = new La();
  function sg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = rg.get(e);
      f || ((f = new RegExp(b, d)), rg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function tg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function ug(a, b) {
    return String(a) === String(b);
  }
  function vg(a, b) {
    return Number(a) >= Number(b);
  }
  function wg(a, b) {
    return Number(a) <= Number(b);
  }
  function xg(a, b) {
    return Number(a) > Number(b);
  }
  function yg(a, b) {
    return Number(a) < Number(b);
  }
  function zg(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  var Gg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Hg(a, b) {
    for (var c = "", d = !0; 7 < a; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] +
        c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        a | b
      ] + c);
  }
  var Ig =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Jg = { Fn: "function", PixieMap: "Object", List: "Array" },
    M = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Ig.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          m = c[d];
        if (null == m) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof m;
          m instanceof ed
            ? (n = "Fn")
            : m instanceof rb
            ? (n = "List")
            : m instanceof sb
            ? (n = "PixieMap")
            : m instanceof jd && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (Jg[n] || n) +
                ", which does not match required type " +
                (Jg[h] || h) +
                "."
            );
        }
      }
    };
  function Kg(a) {
    return "" + a;
  }
  function Lg(a, b) {
    var c = [];
    return c;
  }
  var Mg = function (a, b) {
      var c = new ed(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = K(this, d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          if (od()) throw new qd(g.message);
          throw g;
        }
      });
      c.Cb();
      return c;
    },
    Ng = function (a, b) {
      var c = new sb(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Ea(e)
            ? c.set(d, Mg(a + "_" + d, e))
            : nb(e)
            ? c.set(d, Ng(a + "_" + d, e))
            : (Ga(e) || k(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Cb();
      return c;
    };
  var Og = function (a, b) {
    M(L(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new sb();
    return (d = Ng("AssertApiSubject", c));
  };
  var Pg = function (a, b) {
    M(L(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof ld)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new sb();
    return (d = Ng("AssertThatSubject", c));
  };
  function Qg(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
        b.push(nd(arguments[d], c));
      return md(a.apply(null, b));
    };
  }
  var Sg = function () {
    for (var a = Math, b = Rg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Qg(a[e].bind(a)));
    }
    return c;
  };
  var Tg = function (a) {
    var b;
    return b;
  };
  var Yg = function (a) {
    var b;
    return b;
  };
  var Zg = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var $g = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function ah(a, b) {
    var c = !1;
    return c;
  }
  ah.F = "internal.evaluateBooleanExpression";
  var fh = function (a) {
    M(L(this), ["message:?string"], arguments);
  };
  var gh = function (a, b) {
    M(L(this), ["min:!number", "max:!number"], arguments);
    return Ka(a, b);
  };
  var hh = function () {
    return new Date().getTime();
  };
  var ih = function (a) {
    if (null === a) return "null";
    if (a instanceof rb) return "array";
    if (a instanceof ed) return "function";
    if (a instanceof jd) {
      a = a.h;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var jh = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          ($f || bg) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return md(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(nd(c));
      }),
    };
  };
  var kh = function (a) {
    return Oa(nd(a, this.h));
  };
  var lh = function (a) {
    return Number(nd(a, this.h));
  };
  var mh = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var nh = function (a, b, c) {
    var d = null,
      e = !1;
    M(
      L(this),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new sb();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof sb &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  };
  var Rg = "floor ceil round max min abs pow sqrt".split(" ");
  var oh = function () {
      var a = {};
      return {
        Hl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Xm: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    ph = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return ed.prototype.invoke.apply(a, c);
      };
    },
    qh = function (a, b) {
      M(L(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var rh = {};
  var sh = function (a) {
    var b = new sb();
    if (a instanceof rb)
      for (var c = a.Ub(), d = 0; d < c.length(); d++) {
        var e = c.get(d);
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof ed)
      for (var f = ib(a, 1), g = 0; g < f.length; g++) {
        var h = f[g];
        b.set(h, a.get(h));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  rh.keys = function (a) {
    M(L(this), ["input:!*"], arguments);
    if (a instanceof rb || a instanceof ed || "string" === typeof a) a = sh(a);
    if (a instanceof sb) return a.Ub();
    return new rb();
  };
  rh.values = function (a) {
    M(L(this), ["input:!*"], arguments);
    if (a instanceof rb || a instanceof ed || "string" === typeof a) a = sh(a);
    if (a instanceof sb) return new rb(ib(a, 2));
    return new rb();
  };
  rh.entries = function (a) {
    M(L(this), ["input:!*"], arguments);
    if (a instanceof rb || a instanceof ed || "string" === typeof a) a = sh(a);
    if (a instanceof sb) {
      for (var b = ib(a, 3), c = new rb(), d = 0; d < b.length; d++) {
        var e = new rb(b[d]);
        c.push(e);
      }
      return c;
    }
    return new rb();
  };
  rh.freeze = function (a) {
    (a instanceof sb || a instanceof rb || a instanceof ed) && a.Cb();
    return a;
  };
  rh.delete = function (a, b) {
    if (a instanceof sb && !a.Aj()) return a.remove(b), !0;
    return !1;
  };
  var N = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    if (d.Pm) {
      try {
        d.oj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw (Ab("TAGGING", 21), e);
      }
      return;
    }
    d.oj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var th = function () {
    this.h = {};
    this.C = {};
  };
  th.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  th.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.C.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.h[a] = c ? void 0 : Ea(b) ? Mg(a, b) : Ng(a, b);
  };
  function uh(a, b) {
    var c = void 0;
    return c;
  }
  function vh() {
    var a = {};
    return a;
  }
  var xh = function (a) {
      return wh ? E.querySelectorAll(a) : null;
    },
    yh = function (a, b) {
      if (!wh) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!E.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    zh = !1;
  if (E.querySelectorAll)
    try {
      var Ah = E.querySelectorAll(":root");
      Ah && 1 == Ah.length && Ah[0] == E.documentElement && (zh = !0);
    } catch (a) {}
  var wh = zh;
  var O = function (a) {
    Ab("GTM", a);
  };
  var Q = {
      g: {
        Ea: "ad_personalization",
        K: "ad_storage",
        O: "ad_user_data",
        U: "analytics_storage",
        Va: "region",
        vd: "consent_updated",
        wd: "wait_for_update",
        hk: "ads",
        fg: "all",
        ik: "maps",
        jk: "playstore",
        kk: "search",
        lk: "shopping",
        mk: "youtube",
        di: "app_remove",
        ei: "app_store_refund",
        fi: "app_store_subscription_cancel",
        gi: "app_store_subscription_convert",
        hi: "app_store_subscription_renew",
        hg: "add_payment_info",
        ig: "add_shipping_info",
        ic: "add_to_cart",
        jc: "remove_from_cart",
        jg: "view_cart",
        Gb: "begin_checkout",
        kc: "select_item",
        cb: "view_item_list",
        qb: "select_promotion",
        eb: "view_promotion",
        ra: "purchase",
        mc: "refund",
        Fa: "view_item",
        kg: "add_to_wishlist",
        pk: "exception",
        ii: "first_open",
        ji: "first_visit",
        sa: "gtag.config",
        Oa: "gtag.get",
        ki: "in_app_purchase",
        nc: "page_view",
        qk: "screen_view",
        li: "session_start",
        rk: "timing_complete",
        sk: "track_social",
        zd: "user_engagement",
        rb: "gclid",
        wa: "ads_data_redaction",
        ba: "allow_ad_personalization_signals",
        Ye: "allow_custom_scripts",
        Ze: "allow_display_features",
        Ad: "allow_enhanced_conversions",
        fb: "allow_google_signals",
        Ga: "allow_interest_groups",
        tk: "app_id",
        uk: "app_installer_id",
        vk: "app_name",
        wk: "app_version",
        Hb: "auid",
        mi: "auto_detection_enabled",
        Ib: "aw_remarketing",
        af: "aw_remarketing_only",
        Bd: "discount",
        Cd: "aw_feed_country",
        Dd: "aw_feed_language",
        da: "items",
        Ed: "aw_merchant_id",
        lg: "aw_basket_type",
        Hc: "campaign_content",
        Ic: "campaign_id",
        Jc: "campaign_medium",
        Kc: "campaign_name",
        Lc: "campaign",
        Mc: "campaign_source",
        Nc: "campaign_term",
        sb: "client_id",
        ni: "content_group",
        oi: "content_type",
        Pa: "conversion_cookie_prefix",
        oc: "conversion_id",
        Ha: "conversion_linker",
        Jb: "conversion_api",
        Wa: "cookie_domain",
        Ja: "cookie_expires",
        Xa: "cookie_flags",
        qc: "cookie_name",
        Oc: "cookie_path",
        Qa: "cookie_prefix",
        tb: "cookie_update",
        sc: "country",
        xa: "currency",
        Fd: "customer_lifetime_value",
        Pc: "custom_map",
        ri: "gcldc",
        si: "debug_mode",
        fa: "developer_id",
        ui: "disable_merchant_reported_purchases",
        Qc: "dc_custom_params",
        vi: "dc_natural_search",
        mg: "dynamic_event_settings",
        ng: "affiliation",
        Gd: "checkout_option",
        bf: "checkout_step",
        og: "coupon",
        Rc: "item_list_name",
        cf: "list_name",
        wi: "promotions",
        Sc: "shipping",
        df: "tax",
        Hd: "engagement_time_msec",
        Id: "enhanced_client_id",
        Jd: "enhanced_conversions",
        pg: "enhanced_conversions_automatic_settings",
        Kd: "estimated_delivery_date",
        ef: "euid_logged_in_state",
        Tc: "event_callback",
        xk: "event_category",
        ub: "event_developer_id_string",
        yk: "event_label",
        qg: "event",
        Ld: "event_settings",
        Md: "event_timeout",
        zk: "description",
        Ak: "fatal",
        xi: "experiments",
        ff: "firebase_id",
        Nd: "first_party_collection",
        Od: "_x_20",
        Kb: "_x_19",
        rg: "fledge",
        sg: "flight_error_code",
        ug: "flight_error_message",
        yi: "fl_activity_category",
        zi: "fl_activity_group",
        vg: "fl_advertiser_id",
        Ai: "fl_ar_dedupe",
        Bi: "fl_random_number",
        Ci: "tran",
        Di: "u",
        Pd: "gac_gclid",
        uc: "gac_wbraid",
        wg: "gac_wbraid_multiple_conversions",
        xg: "ga_restrict_domain",
        yg: "ga_temp_client_id",
        Qd: "gdpr_applies",
        zg: "geo_granularity",
        vb: "value_callback",
        ib: "value_key",
        Bk: "google_ono",
        Lb: "google_signals",
        Ag: "google_tld",
        Rd: "groups",
        Bg: "gsa_experiment_id",
        Cg: "iframe_state",
        Uc: "ignore_referrer",
        hf: "internal_traffic_results",
        Mb: "is_legacy_converted",
        xb: "is_legacy_loaded",
        Sd: "is_passthrough",
        jf: "_lps",
        Ka: "language",
        kf: "legacy_developer_id_string",
        La: "linker",
        Vc: "accept_incoming",
        Nb: "decorate_forms",
        X: "domains",
        vc: "url_position",
        Dg: "method",
        Ck: "name",
        Wc: "new_customer",
        Eg: "non_interaction",
        Ei: "optimize_id",
        Fi: "page_hostname",
        Xc: "page_path",
        Ma: "page_referrer",
        yb: "page_title",
        Fg: "passengers",
        Gg: "phone_conversion_callback",
        Gi: "phone_conversion_country_code",
        Hg: "phone_conversion_css_class",
        Hi: "phone_conversion_ids",
        Ig: "phone_conversion_number",
        Jg: "phone_conversion_options",
        Kg: "_protected_audience_enabled",
        Yc: "quantity",
        Td: "redact_device_info",
        lf: "referral_exclusion_definition",
        Ob: "restricted_data_processing",
        Ii: "retoken",
        Dk: "sample_rate",
        nf: "screen_name",
        zb: "screen_resolution",
        Ji: "search_term",
        Ra: "send_page_view",
        Pb: "send_to",
        Ud: "server_container_url",
        Zc: "session_duration",
        Vd: "session_engaged",
        pf: "session_engaged_time",
        Ab: "session_id",
        Wd: "session_number",
        ad: "delivery_postal_code",
        Ek: "temporary_client_id",
        qf: "topmost_url",
        Ki: "tracking_id",
        rf: "traffic_type",
        ya: "transaction_id",
        Qb: "transport_url",
        Lg: "trip_type",
        Rb: "update",
        Bb: "url_passthrough",
        Yd: "_user_agent_architecture",
        Zd: "_user_agent_bitness",
        ae: "_user_agent_full_version_list",
        be: "_user_agent_mobile",
        ce: "_user_agent_model",
        de: "_user_agent_platform",
        ee: "_user_agent_platform_version",
        fe: "_user_agent_wow64",
        Ca: "user_data",
        Mg: "user_data_auto_latency",
        Ng: "user_data_auto_meta",
        Og: "user_data_auto_multi",
        Pg: "user_data_auto_selectors",
        Qg: "user_data_auto_status",
        he: "user_data_mode",
        ie: "user_data_settings",
        Sa: "user_id",
        Ya: "user_properties",
        Li: "_user_region",
        Rg: "us_privacy_string",
        ka: "value",
        wc: "wbraid",
        Sg: "wbraid_multiple_conversions",
        Ri: "_host_name",
        Si: "_in_page_command",
        Ti: "_is_passthrough_cid",
        dd: "non_personalized_ads",
        pe: "_sst_parameters",
        hb: "conversion_label",
        Ba: "page_location",
        wb: "global_developer_id_string",
        Xd: "tc_privacy_string",
      },
    },
    Yh = {},
    Zh = Object.freeze(
      ((Yh[Q.g.ba] = 1),
      (Yh[Q.g.Ze] = 1),
      (Yh[Q.g.Ad] = 1),
      (Yh[Q.g.fb] = 1),
      (Yh[Q.g.da] = 1),
      (Yh[Q.g.Wa] = 1),
      (Yh[Q.g.Ja] = 1),
      (Yh[Q.g.Xa] = 1),
      (Yh[Q.g.qc] = 1),
      (Yh[Q.g.Oc] = 1),
      (Yh[Q.g.Qa] = 1),
      (Yh[Q.g.tb] = 1),
      (Yh[Q.g.Pc] = 1),
      (Yh[Q.g.fa] = 1),
      (Yh[Q.g.mg] = 1),
      (Yh[Q.g.Tc] = 1),
      (Yh[Q.g.Ld] = 1),
      (Yh[Q.g.Md] = 1),
      (Yh[Q.g.Nd] = 1),
      (Yh[Q.g.xg] = 1),
      (Yh[Q.g.Lb] = 1),
      (Yh[Q.g.Ag] = 1),
      (Yh[Q.g.Rd] = 1),
      (Yh[Q.g.hf] = 1),
      (Yh[Q.g.Mb] = 1),
      (Yh[Q.g.xb] = 1),
      (Yh[Q.g.La] = 1),
      (Yh[Q.g.lf] = 1),
      (Yh[Q.g.Ob] = 1),
      (Yh[Q.g.Ra] = 1),
      (Yh[Q.g.Pb] = 1),
      (Yh[Q.g.Ud] = 1),
      (Yh[Q.g.Zc] = 1),
      (Yh[Q.g.pf] = 1),
      (Yh[Q.g.ad] = 1),
      (Yh[Q.g.Qb] = 1),
      (Yh[Q.g.Rb] = 1),
      (Yh[Q.g.ie] = 1),
      (Yh[Q.g.Ya] = 1),
      (Yh[Q.g.pe] = 1),
      Yh)
    );
  Object.freeze([
    Q.g.Ba,
    Q.g.Ma,
    Q.g.yb,
    Q.g.Ka,
    Q.g.nf,
    Q.g.Sa,
    Q.g.ff,
    Q.g.ni,
  ]);
  var $h = {},
    ai = Object.freeze(
      (($h[Q.g.di] = 1),
      ($h[Q.g.ei] = 1),
      ($h[Q.g.fi] = 1),
      ($h[Q.g.gi] = 1),
      ($h[Q.g.hi] = 1),
      ($h[Q.g.ii] = 1),
      ($h[Q.g.ji] = 1),
      ($h[Q.g.ki] = 1),
      ($h[Q.g.li] = 1),
      ($h[Q.g.zd] = 1),
      $h)
    ),
    bi = {},
    ci = Object.freeze(
      ((bi[Q.g.hg] = 1),
      (bi[Q.g.ig] = 1),
      (bi[Q.g.ic] = 1),
      (bi[Q.g.jc] = 1),
      (bi[Q.g.jg] = 1),
      (bi[Q.g.Gb] = 1),
      (bi[Q.g.kc] = 1),
      (bi[Q.g.cb] = 1),
      (bi[Q.g.qb] = 1),
      (bi[Q.g.eb] = 1),
      (bi[Q.g.ra] = 1),
      (bi[Q.g.mc] = 1),
      (bi[Q.g.Fa] = 1),
      (bi[Q.g.kg] = 1),
      bi)
    ),
    di = Object.freeze([Q.g.ba, Q.g.fb, Q.g.tb, Q.g.Uc, Q.g.Rb]),
    ei = Object.freeze([].concat(di)),
    fi = Object.freeze([Q.g.Ja, Q.g.Md, Q.g.Zc, Q.g.pf, Q.g.Hd]),
    gi = Object.freeze([].concat(fi)),
    hi = {},
    ii =
      ((hi[Q.g.K] = "1"),
      (hi[Q.g.U] = "2"),
      (hi[Q.g.O] = "3"),
      (hi[Q.g.Ea] = "4"),
      hi),
    ji = {},
    ki = Object.freeze(
      ((ji[Q.g.ba] = 1),
      (ji[Q.g.Ad] = 1),
      (ji[Q.g.Ga] = 1),
      (ji[Q.g.Ib] = 1),
      (ji[Q.g.af] = 1),
      (ji[Q.g.Bd] = 1),
      (ji[Q.g.Cd] = 1),
      (ji[Q.g.Dd] = 1),
      (ji[Q.g.da] = 1),
      (ji[Q.g.Ed] = 1),
      (ji[Q.g.Pa] = 1),
      (ji[Q.g.Ha] = 1),
      (ji[Q.g.Wa] = 1),
      (ji[Q.g.Ja] = 1),
      (ji[Q.g.Xa] = 1),
      (ji[Q.g.Qa] = 1),
      (ji[Q.g.xa] = 1),
      (ji[Q.g.Fd] = 1),
      (ji[Q.g.fa] = 1),
      (ji[Q.g.ui] = 1),
      (ji[Q.g.Jd] = 1),
      (ji[Q.g.Kd] = 1),
      (ji[Q.g.ff] = 1),
      (ji[Q.g.Nd] = 1),
      (ji[Q.g.Mb] = 1),
      (ji[Q.g.xb] = 1),
      (ji[Q.g.Ka] = 1),
      (ji[Q.g.Wc] = 1),
      (ji[Q.g.Ba] = 1),
      (ji[Q.g.Ma] = 1),
      (ji[Q.g.Gg] = 1),
      (ji[Q.g.Hg] = 1),
      (ji[Q.g.Ig] = 1),
      (ji[Q.g.Jg] = 1),
      (ji[Q.g.Ob] = 1),
      (ji[Q.g.Ra] = 1),
      (ji[Q.g.Pb] = 1),
      (ji[Q.g.Ud] = 1),
      (ji[Q.g.ad] = 1),
      (ji[Q.g.ya] = 1),
      (ji[Q.g.Qb] = 1),
      (ji[Q.g.Rb] = 1),
      (ji[Q.g.Bb] = 1),
      (ji[Q.g.Ca] = 1),
      (ji[Q.g.Sa] = 1),
      (ji[Q.g.ka] = 1),
      ji)
    ),
    li = {},
    mi = Object.freeze(
      ((li[Q.g.kk] = "s"),
      (li[Q.g.mk] = "y"),
      (li[Q.g.jk] = "p"),
      (li[Q.g.lk] = "h"),
      (li[Q.g.hk] = "a"),
      (li[Q.g.ik] = "m"),
      li)
    );
  Object.freeze(Q.g);
  var ni = {},
    oi = (z.google_tag_manager = z.google_tag_manager || {}),
    pi = Math.random();
  ni.Xg = "3b60";
  ni.oe = Number("0") || 0;
  ni.ja = "dataLayer";
  ni.fk =
    "ChAIgICtqgYQ373OyrTWoqdZEiQAcGoWFQjhAgeAcw0Sw1ITjRqHCBZvvm4dKYHQPVOL5TC9D+saAt0g";
  var qi = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    ri = { __paused: 1, __tg: 1 },
    si;
  for (si in qi) qi.hasOwnProperty(si) && (ri[si] = 1);
  var ti = Pa(""),
    ui,
    vi = !1;
  ui = vi;
  var wi,
    xi = !1;
  wi = xi;
  var yi,
    zi = !1;
  yi = zi;
  var Ai,
    Bi = !1;
  Ai = Bi;
  ni.yd = "www.googletagmanager.com";
  var Ci = "" + ni.yd + (ui ? "/gtag/js" : "/gtm.js"),
    Di = null,
    Ei = null,
    Fi = {},
    Gi = {},
    Hi = {},
    Ii = function () {
      var a = oi.sequence || 1;
      oi.sequence = a + 1;
      return a;
    };
  ni.ek = "";
  var Ji = "";
  ni.zf = Ji;
  var Ki = new La(),
    Li = {},
    Mi = {},
    Pi = {
      name: ni.ja,
      set: function (a, b) {
        C(ab(a, b), Li);
        Ni();
      },
      get: function (a) {
        return Oi(a, 2);
      },
      reset: function () {
        Ki = new La();
        Li = {};
        Ni();
      },
    },
    Oi = function (a, b) {
      return 2 != b ? Ki.get(a) : Qi(a);
    },
    Qi = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Li, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Ri = function (a, b) {
      Mi.hasOwnProperty(a) || (Ki.set(a, b), C(ab(a, b), Li), Ni());
    },
    Si = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = Oi(c, 1);
        if (Ha(d) || nb(d)) d = C(d);
        Mi[c] = d;
      }
    },
    Ni = function (a) {
      l(Mi, function (b, c) {
        Ki.set(b, c);
        C(ab(b), Li);
        C(ab(b, c), Li);
        a && delete Mi[b];
      });
    },
    Ti = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Qi(a) : Ki.get(a);
      "array" === lb(d) || "object" === lb(d) ? (c = C(d)) : (c = d);
      return c;
    };
  var $i = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var aj = [];
  function gj(a) {
    switch (a) {
      case 35:
        return 3;
      case 61:
        return 14;
      case 62:
        return 8;
      case 74:
        return 11;
      case 75:
        return 12;
      case 78:
        return 10;
      case 80:
        return 13;
      case 76:
        return 15;
    }
  }
  function R(a) {
    aj[a] = !0;
    var b = gj(a);
    b && (Rf[b] = !0);
  }
  R(5);
  R(6);
  R(11);
  R(7);
  R(8);
  R(19);
  R(9);
  R(10);
  R(13);
  R(14);
  R(15);
  R(22);
  R(17);
  R(23);
  R(26);
  R(27);
  R(28);
  R(29);
  R(30);
  R(31);
  R(33);
  R(34);
  R(37);
  R(39);
  R(43);
  R(44);
  R(45);
  R(47);
  R(48);
  R(52);
  R(55);
  R(57);
  R(58);
  R(59);
  R(60);
  R(63);
  R(64);
  R(65);
  R(67);
  R(68);
  R(69);
  R(70);
  R(71);
  R(76);
  R(78);
  R(79);
  R(82);
  R(84);
  R(89);
  R(95);
  function T(a) {
    return !!aj[a];
  }
  var hj = !1;
  function ij(a) {}
  var jj = Number("1");
  var kj = function (a) {
    Ab("HEALTH", a);
  };
  var lj;
  try {
    lj = JSON.parse(
      yb(
        "eyIwIjoiTVkiLCIxIjoiTVktMTAiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20ubXkiLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"
      )
    );
  } catch (a) {
    O(123), kj(2), (lj = {});
  }
  var mj = function () {
      return lj["0"] || "";
    },
    nj = function () {
      return lj["1"] || "";
    },
    oj = function () {
      var a = !1;
      return a;
    },
    pj = function () {
      var a = "";
      return a;
    },
    qj = function () {
      var a = !1;
      return a;
    },
    rj = function () {
      var a = "";
      return a;
    };
  var sj = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var tj = function (a) {
    tj[" "](a);
    return a;
  };
  tj[" "] = function () {};
  var vj = function () {
    var a = uj,
      b = "rh";
    if (a.rh && a.hasOwnProperty(b)) return a.rh;
    var c = new a();
    return (a.rh = c);
  };
  var uj = function () {
    var a = {};
    this.h = function () {
      var b = sj.h,
        c = sj.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.C = function () {
      a[sj.h] = !0;
    };
  };
  var wj = !1,
    xj = !1,
    yj = {},
    zj = {},
    Aj = !1,
    Bj = { ad_storage: !1, ad_user_data: !1, ad_personalization: !1 };
  function Cj() {
    var a = Fc("google_tag_data", {});
    return (a.ics = a.ics || new Dj());
  }
  var Dj = function () {
    this.entries = {};
    this.cps = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedSetCps =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.h = [];
  };
  Dj.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Ab("TAGGING", 19);
    void 0 == b ? Ab("TAGGING", 18) : Ej(this, a, "granted" === b, c, d, e, f);
  };
  Dj.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++)
      Ej(this, a[c], void 0, void 0, "", "", b);
  };
  var Ej = function (a, b, c, d, e, f, g) {
    var h = a.entries,
      m = h[b] || {},
      n = m.region,
      p = d && k(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Fj(p, n, e, f)) {
      var q = !!(g && 0 < g && void 0 === m.update),
        r = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q,
        };
      if ("" !== e || !1 !== m.default) h[b] = r;
      q &&
        z.setTimeout(function () {
          h[b] === r &&
            r.quiet &&
            (Ab("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0),
            a.notifyListeners());
        }, g);
    }
  };
  aa = Dj.prototype;
  aa.clearTimeout = function (a, b) {
    var c = [a],
      d;
    for (d in yj) yj.hasOwnProperty(d) && yj[d] === a && c.push(d);
    var e = this.entries[a] || {},
      f = this.getConsentState(a);
    if (e.quiet) {
      e.quiet = !1;
      for (var g = ha(c), h = g.next(); !h.done; h = g.next())
        Gj(this, h.value);
    } else if (void 0 !== b && f !== b) {
      var m = ha(c);
      for (h = m.next(); !h.done; h = m.next()) Gj(this, h.value);
    }
  };
  aa.update = function (a, b) {
    this.usedDefault ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries;
      (d[a] = d[a] || {}).update = "granted" === b;
      this.clearTimeout(a, c);
    }
  };
  aa.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      h = g.declare_region,
      m = c && k(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Fj(m, h, d, e)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if ("" !== d || !1 !== g.declare) f[a] = n;
    }
  };
  aa.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  aa.getConsentState = function (a) {
    var b = this.entries,
      c = b[a] || {},
      d = c.update;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.default;
    if (void 0 !== d) return d ? 1 : 2;
    if (yj.hasOwnProperty(a)) {
      var e = b[yj[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    if (Sf(3)) {
      d = c.implicit;
      if (void 0 !== d) return d ? 3 : 4;
      if (Bj.hasOwnProperty(a)) return Bj[a] ? 3 : 4;
    }
    return 0;
  };
  aa.setCps = function (a, b, c, d, e) {
    Hj(this.cps, a, b, c, d, e) && (this.usedSetCps = !0);
  };
  aa.addListener = function (a, b) {
    this.h.push({ consentTypes: a, Al: b });
  };
  var Gj = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      Ha(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Gj = !0);
    }
  };
  Dj.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.Gj) {
        d.Gj = !1;
        try {
          d.Al({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  function Fj(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Hj(a, b, c, d, e, f) {
    var g = a[b] || {},
      h = g.region,
      m = d && k(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Fj(m, h, e, f)) {
      var n = { enabled: "granted" === c, region: m };
      if ("" !== e || !1 !== g.enabled) return (a[b] = n), !0;
    }
    return !1;
  }
  var Ij = function (a) {
      var b = Cj();
      b.accessedAny = !0;
      return (k(a) ? [a] : a).every(function (c) {
        switch (b.getConsentState(c)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    Jj = function (a) {
      var b = Cj();
      b.accessedAny = !0;
      return b.getConsentState(a);
    },
    Kj = function (a) {
      var b = Cj();
      b.accessedDefault = !0;
      switch ((b.entries[a] || {}).default) {
        case !0:
          return 3;
        case !1:
          return 2;
        default:
          return 1;
      }
    },
    Lj = function (a) {
      var b = Cj();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Mj = function () {
      if (!vj().h()) return !1;
      var a = Cj();
      a.accessedAny = !0;
      return a.active;
    },
    Nj = function () {
      var a = Cj();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Oj = function (a, b) {
      Cj().addListener(a, b);
    },
    Pj = function (a, b) {
      Cj().notifyListeners(a, b);
    },
    Qj = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Lj(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Oj(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Rj = function (a, b) {
      function c() {
        for (var h = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Ij(n) && !f[n] && h.push(n);
        }
        return h;
      }
      function d(h) {
        for (var m = 0; m < h.length; m++) f[h[m]] = !0;
      }
      var e = k(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length &&
        (d(g),
        Oj(e, function (h) {
          function m(q) {
            0 !== q.length && (d(q), (h.consentTypes = q), a(h));
          }
          var n = c();
          if (0 !== n.length) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : z.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  function Sj() {}
  function Tj() {}
  var Uj = [Q.g.K, Q.g.U, Q.g.O, Q.g.Ea],
    Vj = function (a) {
      for (
        var b = a[Q.g.Va], c = Array.isArray(b) ? b : [b], d = { Ge: 0 };
        d.Ge < c.length;
        d = { Ge: d.Ge }, ++d.Ge
      )
        l(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== Q.g.Va) {
                var h = c[e.Ge],
                  m = mj(),
                  n = nj();
                xj = !0;
                wj && Ab("TAGGING", 20);
                Cj().declare(f, g, h, m, n);
              }
            };
          })(d)
        );
    },
    Wj = function (a) {
      var b = a[Q.g.Va];
      b && O(40);
      var c = a[Q.g.wd];
      c && O(41);
      for (
        var d = Ha(b) ? b : [b], e = { He: 0 };
        e.He < d.length;
        e = { He: e.He }, ++e.He
      )
        l(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== Q.g.Va && g !== Q.g.wd) {
                var m = d[f.He],
                  n = Number(c),
                  p = mj(),
                  q = nj();
                wj = !0;
                xj && Ab("TAGGING", 20);
                Cj().default(g, h, m, p, q, n);
              }
            };
          })(e)
        );
    },
    Xj = function (a, b) {
      l(a, function (c, d) {
        wj = !0;
        xj && Ab("TAGGING", 20);
        Cj().update(c, d);
      });
      Pj(b.eventId, b.priorityId);
    },
    Yj = function (a) {
      for (
        var b = a[Q.g.Va], c = Array.isArray(b) ? b : [b], d = { Ie: 0 };
        d.Ie < c.length;
        d = { Ie: d.Ie }, ++d.Ie
      )
        l(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== Q.g.Va) {
                var h = c[e.Ie],
                  m = mj(),
                  n = nj();
                Cj().setCps(f, g, h, m, n);
              }
            };
          })(d)
        );
    },
    Zj = function (a) {
      for (
        var b = a[Q.g.Va], c = Array.isArray(b) ? b : [b], d = { jd: 0 };
        d.jd < c.length;
        d = { jd: d.jd }, ++d.jd
      )
        a.hasOwnProperty(Q.g.fg) &&
          l(
            mi,
            (function (e) {
              return function (f) {
                Hj(zj, f, a[Q.g.fg], c[e.jd], mj(), nj()) && (Aj = !0);
              };
            })(d)
          ),
          l(
            a,
            (function (e) {
              return function (f, g) {
                f !== Q.g.Va &&
                  f !== Q.g.fg &&
                  Hj(zj, f, g, c[e.jd], mj(), nj()) &&
                  (Aj = !0);
              };
            })(d)
          );
    },
    ak = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Ij(b);
      });
    },
    bk = function (a, b) {
      Oj(a, b);
    },
    ck = function (a, b) {
      Rj(a, b);
    },
    dk = function (a, b) {
      Qj(a, b);
    },
    ek = function () {
      var a = [Q.g.K, Q.g.Ea, Q.g.O];
      Cj().waitForUpdate(a, 500);
    },
    fk = function (a) {
      for (var b = ha(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        Cj().clearTimeout(d, void 0);
      }
      Pj();
    };
  var gk = function (a) {
      var b = String(a[Oe.za] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    hk =
      0 <= z.location.search.indexOf("?gtm_latency=") ||
      0 <= z.location.search.indexOf("&gtm_latency=");
  var jk = function (a, b) {
      var c = ik();
      c.pending || (c.pending = []);
      Ja(c.pending, function (d) {
        return (
          d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        );
      }) || c.pending.push({ target: a, onLoad: b });
    },
    kk = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    ik = function () {
      var a = Fc("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new kk()), (a.tidr = b));
      return b;
    };
  var lk = {},
    mk = !1,
    Tf = {
      ctid: "GTM-KMNXNW2",
      Ef: "99841693",
      Ej: "GTM-KMNXNW2",
      Fj: "GTM-KMNXNW2",
    };
  lk.ke = Pa("");
  var pk = function () {
      var a = nk();
      return mk ? a.map(ok) : a;
    },
    rk = function () {
      var a = qk();
      return mk ? a.map(ok) : a;
    },
    tk = function () {
      return sk(Tf.ctid);
    },
    uk = function () {
      return sk(Tf.Ef || "_" + Tf.ctid);
    },
    nk = function () {
      return Tf.Ej ? Tf.Ej.split("|") : [Tf.ctid];
    },
    qk = function () {
      return Tf.Fj ? Tf.Fj.split("|") : [];
    },
    vk = function (a) {
      var b = ik();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    sk = function (a) {
      return mk ? ok(a) : a;
    },
    ok = function (a) {
      return "siloed_" + a;
    },
    wk = function (a) {
      a = String(a);
      return mk && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    xk = function () {
      var a = !1;
      if (a) {
        var b = ik();
        if (b.siloed) {
          for (
            var c = [], d = nk(), e = qk(), f = {}, g = 0;
            g < b.siloed.length;
            f = { we: f.we }, g++
          )
            (f.we = b.siloed[g]),
              !mk &&
              Ja(
                f.we.isDestination ? e : d,
                (function (h) {
                  return function (m) {
                    return m === h.we.ctid;
                  };
                })(f)
              )
                ? (mk = !0)
                : c.push(f.we);
          b.siloed = c;
        }
      }
    };
  function yk() {
    var a = ik();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = pk(), f = rk(), g = {}, h = 0;
        h < a.pending.length;
        g = { od: g.od }, h++
      )
        (g.od = a.pending[h]),
          Ja(
            g.od.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.od.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.od.onLoad), (d = !0))
            : c.push(g.od);
      a.pending = c;
      if (b)
        try {
          b(uk());
        } catch (m) {}
    }
  }
  var zk = function () {
      for (var a = ik(), b = pk(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d
          ? ((d.state = 2), (d.containers = pk()), (d.destinations = rk()))
          : (a.container[b[c]] = {
              state: 2,
              containers: pk(),
              destinations: rk(),
            });
      }
      for (var e = rk(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && O(93);
        g
          ? ((g.state = 2), (g.containers = pk()), (g.destinations = rk()))
          : (a.destination[e[f]] = {
              state: 2,
              containers: pk(),
              destinations: rk(),
            });
      }
      a.canonical[uk()] = {};
      yk();
    },
    Ak = function (a) {
      return !!ik().container[a];
    },
    Bk = function (a) {
      var b = ik().destination[a];
      return !!b && !!b.state;
    },
    Ck = function () {
      return { ctid: tk(), isDestination: lk.ke };
    };
  function Dk(a) {
    var b = ik();
    (b.siloed = b.siloed || []).push(a);
  }
  var Ek = function () {
      var a = ik().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Fk = function () {
      var a = {};
      l(ik().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    Gk = function (a) {
      return !!(
        a &&
        a.parent &&
        a.context &&
        1 === a.context.source &&
        0 !== a.parent.ctid.indexOf("GTM-")
      );
    };
  var Hk = { sampleRate: "0.005000", Yj: "", Xj: Number("5"), Tn: Number("") },
    Ik = [];
  function Jk(a) {
    Ik.push(a);
  }
  var Kk = !1,
    Lk;
  if (!(Lk = hk)) {
    var Mk = Math.random(),
      Nk = Hk.sampleRate;
    Lk = Mk < Number(Nk);
  }
  var Ok = Lk,
    Pk = "https://www.googletagmanager.com/a?id=" + Tf.ctid,
    Qk = void 0,
    Rk = {},
    Sk = void 0,
    Tk = new (function () {
      var a = 5;
      0 < Hk.Xj && (a = Hk.Xj);
      this.h = 0;
      this.D = [];
      this.C = a;
    })(),
    Uk = 1e3;
  function Vk(a, b) {
    var c = Qk;
    if (void 0 === c)
      if (b) c = Ii();
      else return "";
    for (var d = [Pk], e = 0; e < Ik.length; e++) {
      var f = Ik[e]({
        eventId: c,
        hc: !!a,
        Oj: function () {
          Kk = !0;
        },
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Wk() {
    Sk && (z.clearTimeout(Sk), (Sk = void 0));
    if (void 0 !== Qk && Xk) {
      var a;
      (a = Rk[Qk]) || (a = Tk.h < Tk.C ? !1 : 1e3 > Ua() - Tk.D[Tk.h % Tk.C]);
      if (a || 0 >= Uk--) O(1), (Rk[Qk] = !0);
      else {
        var b = Tk.h++ % Tk.C;
        Tk.D[b] = Ua();
        var c = Vk(!0);
        Nc(c);
        if (Kk) {
          var d = c.replace("/a?", "/td?");
          Nc(d);
        }
        Xk = Kk = !1;
      }
    }
  }
  var Xk = !1;
  function Yk(a) {
    Rk[a] ||
      (a !== Qk && (Wk(), (Qk = a)),
      (Xk = !0),
      Sk || (Sk = z.setTimeout(Wk, 500)),
      2022 <= Vk().length && Wk());
  }
  var Zk = Ka();
  function $k() {
    Zk = Ka();
  }
  function al() {
    return ["&v=3&t=t", "&pid=" + Zk].join("");
  }
  var bl = function (a, b, c, d, e, f, g, h, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.N = d;
      this.D = e;
      this.H = f;
      this.T = g;
      this.C = h;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    V = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.N[b]) return a.N[b];
      if (void 0 !== a.D[b]) return a.D[b];
      Ok && cl(a, a.H[b], a.T[b]) && (O(71), O(79));
      return void 0 !== a.H[b] ? a.H[b] : void 0 !== a.C[b] ? a.C[b] : c;
    },
    dl = function (a) {
      function b(g) {
        for (var h = Object.keys(g), m = 0; m < h.length; ++m) c[h[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.N);
      b(a.D);
      b(a.H);
      if (Ok)
        for (var d = Object.keys(a.T), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            O(71);
            O(80);
            break;
          }
        }
      return Object.keys(c);
    },
    el = function (a, b, c) {
      function d(m) {
        nb(m) &&
          l(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.C[b]), d(a.H[b]), d(a.D[b]), d(a.N[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (Ok) {
        var g = f,
          h = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.C[b]), d(a.T[b]), d(a.D[b]), d(a.N[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || cl(a, e, h)) O(71), O(81);
        f = g;
        e = h;
      }
      return f ? e : void 0;
    },
    fl = function (a) {
      var b = [Q.g.Lc, Q.g.Hc, Q.g.Ic, Q.g.Jc, Q.g.Kc, Q.g.Mc, Q.g.Nc],
        c = {},
        d = !1,
        e = function (h) {
          for (var m = 0; m < b.length; m++)
            void 0 !== h[b[m]] && ((c[b[m]] = h[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.N) || e(a.D)) return c;
      e(a.H);
      if (Ok) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.T);
        cl(a, c, f) && (O(71), O(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.C);
      return c;
    },
    cl = function (a, b, c) {
      if (!Ok) return !1;
      try {
        if (b === c) return !1;
        var d = lb(b);
        if (d !== lb(c) || !((nb(b) && nb(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (cl(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || cl(a, b[g], c[g])) return !0;
        }
      } catch (h) {
        O(72);
      }
      return !1;
    },
    gl = function (a, b) {
      this.uf = a;
      this.vf = b;
      this.H = {};
      this.xc = {};
      this.h = {};
      this.N = {};
      this.C = {};
      this.Tb = {};
      this.D = {};
      this.Sb = function () {};
      this.Na = function () {};
      this.T = !1;
    },
    hl = function (a, b) {
      a.H = b;
      return a;
    },
    il = function (a, b) {
      a.xc = b;
      return a;
    },
    jl = function (a, b) {
      a.h = b;
      return a;
    },
    kl = function (a, b) {
      a.N = b;
      return a;
    },
    ll = function (a, b) {
      a.C = b;
      return a;
    },
    ml = function (a, b) {
      a.Tb = b;
      return a;
    },
    nl = function (a, b) {
      a.D = b || {};
      return a;
    },
    ol = function (a, b) {
      a.Sb = b;
      return a;
    },
    pl = function (a, b) {
      a.Na = b;
      return a;
    },
    ql = function (a, b) {
      a.T = b;
      return a;
    },
    rl = function (a) {
      return new bl(
        a.uf,
        a.vf,
        a.H,
        a.xc,
        a.h,
        a.N,
        a.C,
        a.Tb,
        a.D,
        a.Sb,
        a.Na,
        a.T
      );
    };
  function sl(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var tl = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    ul = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var vl = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function wl() {
    return Pb ? !!Wb && !!Wb.platform : !1;
  }
  function xl() {
    return Zb("iPhone") && !Zb("iPod") && !Zb("iPad");
  }
  function yl() {
    xl() || Zb("iPad") || Zb("iPod");
  }
  ac();
  $b() || Zb("Trident") || Zb("MSIE");
  Zb("Edge");
  !Zb("Gecko") ||
    (-1 != Vb().toLowerCase().indexOf("webkit") && !Zb("Edge")) ||
    Zb("Trident") ||
    Zb("MSIE") ||
    Zb("Edge");
  -1 != Vb().toLowerCase().indexOf("webkit") && !Zb("Edge") && Zb("Mobile");
  wl() || Zb("Macintosh");
  wl() || Zb("Windows");
  (wl() ? "Linux" === Wb.platform : Zb("Linux")) || wl() || Zb("CrOS");
  wl() || Zb("Android");
  xl();
  Zb("iPad");
  Zb("iPod");
  yl();
  Vb().toLowerCase().indexOf("kaios");
  var zl = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Al = /#|$/,
    Bl = function (a, b) {
      var c = a.search(Al),
        d = zl(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    Cl = /[?&]($|#)/,
    Dl = function (a, b, c) {
      for (
        var d, e = a.search(Al), f = 0, g, h = [];
        0 <= (g = zl(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(Cl, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var El = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              tj(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Fl = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Gl(a) {
    if (!a || !E.head) return null;
    var b = Hl("META");
    E.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Il = function (a) {
      if (z.top == z) return 0;
      if (void 0 === a ? 0 : a) {
        var b = z.location.ancestorOrigins;
        if (b) return b[b.length - 1] == z.location.origin ? 1 : 2;
      }
      return El(z.top) ? 1 : 2;
    },
    Hl = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Jl(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Hl("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = Db(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      vl(e, "load", f);
      vl(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Ll = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Fl(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Kl(c, b);
    },
    Kl = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Jl(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Ml = function () {};
  var Nl = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Ol = function (a, b) {
      b = void 0 === b ? {} : b;
      this.C = a;
      this.h = null;
      this.N = {};
      this.Na = 0;
      var c;
      this.T = null != (c = b.dn) ? c : 500;
      var d;
      this.H = null != (d = b.Nn) ? d : !1;
      this.D = null;
    };
  sa(Ol, Ml);
  var Ql = function (a) {
    return "function" === typeof a.C.__tcfapi || null != Pl(a);
  };
  Ol.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.H },
      d = ul(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.T &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.T));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Nl(c)),
          (c.internalBlockOnErrors = b.H),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Rl(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Ol.prototype.removeEventListener = function (a) {
    a && a.listenerId && Rl(this, "removeEventListener", null, a.listenerId);
  };
  var Tl = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var m;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Sl(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Sl(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === h
            ? a.purpose && a.vendor
              ? Sl(a.purpose.legitimateInterests, b) &&
                Sl(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Sl = function (a, b) {
      return !(!a || !a[b]);
    },
    Rl = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.C.__tcfapi) {
        var e = a.C.__tcfapi;
        e(b, 2, c, d);
      } else if (Pl(a)) {
        Ul(a);
        var f = ++a.Na;
        a.N[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Pl = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.C, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Ul = function (a) {
      a.D ||
        ((a.D = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.N[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        vl(a.C, "message", a.D));
    },
    Vl = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Nl(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Ll({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var Wl = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Xl = sl("", 500);
  function Yl() {
    var a = oi.tcf || {};
    return (oi.tcf = a);
  }
  var Zl = function () {
      return new Ol(z, { dn: -1 });
    },
    fm = function () {
      var a = Yl(),
        b = Zl();
      Ql(b) && $l() && O(124);
      if ((am() || T(62)) && !a.active && Ql(b)) {
        am() &&
          ((a.active = !0),
          (a.bc = {}),
          (a.cmpId = 0),
          (a.tcfPolicyVersion = 0),
          T(62) ? (Cj().active = !0) : bm(),
          (a.tcString = "tcunavailable"));
        T(62) && ek();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState)
              cm(a),
                T(62)
                  ? (fk([Q.g.K, Q.g.Ea, Q.g.O]), (Cj().active = !0))
                  : dm(a);
            else {
              a.gdprApplies = c.gdprApplies;
              if (T(62)) {
                a.cmpId = c.cmpId;
                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                !0 === Yl().enableAdvertiserConsentMode && (a.active = !0);
                if (em(c) && $l()) {
                  fk([Q.g.K, Q.g.Ea, Q.g.O]);
                  return;
                }
                a.tcfPolicyVersion = c.tcfPolicyVersion;
              }
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in Wl) Wl.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (em(c)) {
                var g = {},
                  h;
                for (h in Wl)
                  if (Wl.hasOwnProperty(h))
                    if ("1" === h) {
                      var m,
                        n = c,
                        p = !0;
                      p = void 0 === p ? !1 : p;
                      m = Vl(n)
                        ? !1 === n.gdprApplies ||
                          "tcunavailable" === n.tcString ||
                          (void 0 === n.gdprApplies && !p) ||
                          "string" !== typeof n.tcString ||
                          !n.tcString.length
                          ? !0
                          : Tl(n, "1", 0)
                        : !1;
                      g["1"] = m;
                    } else g[h] = Tl(c, h, Wl[h]);
                d = g;
              }
              d && ((a.tcString = c.tcString || "tcempty"), (a.bc = d), dm(a));
            }
          });
        } catch (c) {
          cm(a),
            T(62) ? (fk([Q.g.K, Q.g.Ea, Q.g.O]), (Cj().active = !0)) : dm(a);
        }
      }
    };
  function cm(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function em(a) {
    return (
      "tcloaded" === a.eventStatus ||
      "useractioncomplete" === a.eventStatus ||
      "cmpuishown" === a.eventStatus
    );
  }
  function bm() {
    var a = {},
      b = ((a[Q.g.K] = "denied"), (a[Q.g.wd] = Xl), a);
    Wj(b);
  }
  var am = function () {
      return !0 === z.gtag_enable_tcf_support;
    },
    $l = function () {
      var a = am();
      return T(62) ? !a && !0 !== Yl().enableAdvertiserConsentMode : !a;
    };
  function dm(a) {
    var b = {},
      c = ((b[Q.g.K] = a.bc["1"] ? "granted" : "denied"), b);
    if (T(62)) {
      if (!0 !== a.gdprApplies) {
        fk([Q.g.K, Q.g.Ea, Q.g.O]);
        Cj().active = !0;
        return;
      }
      c[Q.g.Ea] = a.bc["3"] && a.bc["4"] ? "granted" : "denied";
      "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion
        ? (c[Q.g.O] = a.bc["1"] && a.bc["7"] ? "granted" : "denied")
        : fk([Q.g.O]);
    }
    Xj(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: gm() || "" }
    );
  }
  var gm = function () {
      var a = Yl();
      if (a.active) return a.tcString;
    },
    hm = function () {
      var a = Yl();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? "1" : "0";
    },
    im = function (a) {
      if (!Wl.hasOwnProperty(String(a))) return !0;
      var b = Yl();
      return b.active && b.bc ? !!b.bc[String(a)] : !0;
    };
  var jm = [Q.g.K, Q.g.U],
    km = [Q.g.K, Q.g.U, Q.g.O, Q.g.Ea],
    lm = {},
    mm = ((lm[Q.g.K] = 1), (lm[Q.g.U] = 2), lm);
  function nm(a) {
    if (void 0 === a) return 0;
    switch (V(a, Q.g.ba)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var om = function (a) {
      var b = nm(a);
      if (3 === b) return !1;
      if (T(54))
        switch (Jj(Q.g.Ea)) {
          case 1:
          case 3:
            break;
          case 2:
            return !1;
          case 4:
            return 2 === b;
          case 0:
            break;
          default:
            return !1;
        }
      return !0;
    },
    pm = function () {
      return Mj() || !Ij(Q.g.K) || !Ij(Q.g.U);
    },
    qm = function () {
      var a = {},
        b;
      for (b in mm) mm.hasOwnProperty(b) && (a[mm[b]] = Jj(b));
      var c = T(40) && jm.every(Ij),
        d = T(36);
      return c || d ? Ne(a, 1) : Ne(a, 0);
    },
    rm = {},
    sm =
      ((rm[Q.g.K] = 0), (rm[Q.g.U] = 1), (rm[Q.g.O] = 2), (rm[Q.g.Ea] = 3), rm);
  function tm(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var um = function (a) {
      if (T(37)) {
        for (var b = "1", c = 0; c < km.length; c++) {
          var d = b,
            e,
            f = km[c],
            g = yj[f];
          e = void 0 === g ? 0 : sm.hasOwnProperty(g) ? 12 | sm[g] : 8;
          var h = Cj();
          h.accessedAny = !0;
          var m = h.entries[f] || {};
          e = (e << 2) | tm(m.implicit);
          b =
            d +
            ("" +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                e
              ] +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                (tm(m.declare) << 4) | (tm(m.default) << 2) | tm(m.update)
              ]);
        }
        var n = b,
          p;
        p = "" + ((Mj() << 2) | nm(a));
        return n + p;
      }
      for (var q = "G1", r = 0; r < jm.length; r++)
        switch (Kj(jm[r])) {
          case 3:
            q += "1";
            break;
          case 2:
            q += "0";
            break;
          case 1:
            q += "-";
        }
      return q;
    },
    vm = function () {
      if (!Ij(Q.g.O)) return "-";
      var a = Cj(),
        b = Aj,
        c = a.cps,
        d = a.usedSetCps,
        e = {};
      if (b && d)
        for (var f in zj)
          zj.hasOwnProperty(f) &&
          zj[f].enabled &&
          c.hasOwnProperty(f) &&
          c[f].enabled
            ? (e[f] = { enabled: !0, region: zj[f].region })
            : (e[f] = { enabled: !1, region: zj[f].region });
      else {
        var g = b ? zj : c,
          h;
        for (h in g)
          g.hasOwnProperty(h) &&
            (e[h] = { enabled: g[h].enabled, region: g[h].region });
      }
      for (
        var m = {}, n = ha(Object.keys(e)), p = n.next();
        !p.done;
        p = n.next()
      ) {
        var q = p.value;
        m[q] = e[q].enabled;
      }
      for (
        var r = "", t = ha(Object.keys(mi)), u = t.next();
        !u.done;
        u = t.next()
      ) {
        var v = u.value;
        !1 !== m[v] && (r += mi[v]);
      }
      return "" === r ? "-" : r;
    };
  function wm() {
    var a = !!lj["6"],
      b = !1;
    T(62) && (b = !$l() && "1" === hm());
    return a || b;
  }
  var xm = function () {
      return wm() ? "1" : "0";
    },
    ym = function () {
      return wm() || Cj().usedSetCps || !Ij(Q.g.O);
    },
    zm = function () {
      var a = "0",
        b = "0",
        c;
      var d = Yl();
      c = d.active && T(62) ? d.cmpId : void 0;
      "number" === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var g = Yl();
      f = g.active && T(62) ? g.tcfPolicyVersion : void 0;
      "number" === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var h = 0;
      lj["6"] && (h |= 1);
      "1" === hm() && (h |= 2);
      am() && (h |= 4);
      var m;
      var n = Yl();
      m =
        void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      "1" === m && (h |= 8);
      Cj().waitPeriodTimedOut && (h |= 16);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]
      );
    };
  var Am = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  function Bm(a) {
    return "null" !== a.origin;
  }
  var Em = function (a, b, c, d) {
      return Cm(d) ? Am(a, String(b || Dm()), c) : [];
    },
    Hm = function (a, b, c, d, e) {
      if (Cm(e)) {
        var f = Fm(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Gm(
            f,
            function (g) {
              return g.Gf;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Gm(
            f,
            function (g) {
              return g.Qe;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Im(a, b, c, d) {
    var e = Dm(),
      f = window;
    Bm(f) && (f.document.cookie = a);
    var g = Dm();
    return e != g || (void 0 != c && 0 <= Em(b, g, !1, d).indexOf(c));
  }
  var Mm = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete h[x], w;
        h[x] = y;
        return w + "; " + x + "=" + y;
      }
      function f(w, x) {
        if (null == x) return delete h[x], w;
        h[x] = !0;
        return w + "; " + x;
      }
      if (!Cm(c.Fb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Jm(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date
        ? (m = c.expires.toUTCString())
        : null != c.expires && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.xm);
      g = e(g, "samesite", c.Rm);
      c.Tm && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Km(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!Lm(u, c.path) && Im(v, a, b, c.Fb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return Lm(n, c.path) ? 1 : Im(g, a, b, c.Fb) ? 0 : 1;
    },
    Nm = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Mm(a, b, c);
    };
  function Gm(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        m = b(h);
      m === c
        ? d.push(h)
        : void 0 === f || m < f
        ? ((e = [h]), (f = m))
        : m === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function Fm(a, b, c) {
    for (var d = [], e = Em(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), Gf: 1 * m[0] || 1, Qe: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Jm = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Om = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Pm = /(^|\.)doubleclick\.net$/i,
    Lm = function (a, b) {
      return (
        Pm.test(window.document.location.hostname) || ("/" === b && Om.test(a))
      );
    },
    Dm = function () {
      return Bm(window) ? window.document.cookie : "";
    },
    Km = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Pm.test(e) || Om.test(e) || a.push("none");
      return a;
    },
    Cm = function (a) {
      return a && vj().h()
        ? (k(a) ? [a] : a).every(function (b) {
            return Lj(b) && Ij(b);
          })
        : !0;
    };
  var Qm = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ ($i(a) & 2147483647)) : String(b);
    },
    Rm = function (a) {
      return [Qm(a), Math.round(Ua() / 1e3)].join(".");
    },
    Um = function (a, b, c, d, e) {
      var f = Sm(b);
      return Hm(a, f, Tm(c), d, e);
    },
    Vm = function (a, b, c, d) {
      var e = "" + Sm(c),
        f = Tm(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Sm = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Tm = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Wm = function () {
    oi.dedupe_gclid || (oi.dedupe_gclid = "" + Rm());
    return oi.dedupe_gclid;
  };
  var Xm = function () {
    var a = !1;
    return a;
  };
  var Ym = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    hn = function (a, b) {
      var c = Tf.ctid.split("-")[0].toUpperCase(),
        d = {};
      d.ctid = Tf.ctid;
      d.Om = ni.oe;
      d.Qm = ni.Xg;
      d.qm = lk.ke ? 2 : 1;
      d.ue = Tf.Ef;
      d.ue !== a && (d.Xf = a);
      T(91) ? (d.Qj = 1) : T(90) && (d.Qj = 2);
      ui ? ((d.Vf = Ym[c]), d.Vf || (d.Vf = 0)) : (d.Vf = Ai ? 13 : 10);
      yi ? (d.Ah = 1) : Xm() ? (d.Ah = 2) : (d.Ah = 3);
      var e;
      var f = d.Vf,
        g = d.Ah;
      void 0 === f
        ? (e = "")
        : (g || (g = 0),
          (e =
            "" +
            Hg(1, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (f << 2) | g
            ]));
      var h = d.Mn,
        m =
          4 +
          e +
          (h
            ? "" +
              Hg(2, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                h
              ]
            : ""),
        n,
        p = d.Qm;
      n = p && Gg.test(p) ? "" + Hg(3, 2) + p : "";
      var q,
        r = d.Om;
      q = r
        ? "" +
          Hg(4, 1) +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[r]
        : "";
      var t;
      var u = d.ctid;
      if (u && b) {
        var v = u.split("-"),
          w = v[0].toUpperCase();
        if ("GTM" !== w && "OPT" !== w) t = "";
        else {
          var x = v[1];
          t =
            "" +
            Hg(5, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              1 + x.length
            ] +
            (d.qm || 0) +
            x;
        }
      } else t = "";
      var y = d.Qj,
        A = d.ue,
        B = d.Xf,
        D = d.Rn;
      return (
        m +
        n +
        q +
        t +
        (y
          ? "" +
            Hg(6, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              y
            ]
          : "") +
        (A
          ? "" +
            Hg(7, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              A.length
            ] +
            A
          : "") +
        (B
          ? "" +
            Hg(8, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              B.length
            ] +
            B
          : "") +
        (D
          ? "" +
            Hg(9, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              D.length
            ] +
            D
          : "")
      );
    };
  var jn = void 0;
  function kn(a) {
    var b = "";
    return b;
  }
  var ln = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  bc();
  xl() || Zb("iPod");
  Zb("iPad");
  !Zb("Android") || cc() || bc() || ac() || Zb("Silk");
  cc();
  !Zb("Safari") ||
    cc() ||
    ($b() ? 0 : Zb("Coast")) ||
    ac() ||
    ($b() ? 0 : Zb("Edge")) ||
    ($b() ? Yb("Microsoft Edge") : Zb("Edg/")) ||
    ($b() ? Yb("Opera") : Zb("OPR")) ||
    bc() ||
    Zb("Silk") ||
    Zb("Android") ||
    yl();
  var mn = {},
    nn = null,
    on = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!nn) {
        nn = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(h[m].split(""));
          mn[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === nn[q] && (nn[q] = p);
          }
        }
      }
      for (
        var r = mn[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          F = r[((y & 15) << 2) | (A >> 6)],
          H = r[A & 63];
        t[w++] = "" + B + D + F + H;
      }
      var G = 0,
        J = u;
      switch (b.length - v) {
        case 2:
          (G = b[v + 1]), (J = r[(G & 15) << 2] || u);
        case 1:
          var P = b[v];
          t[w] = "" + r[P >> 2] + r[((P & 3) << 4) | (G >> 4)] + J + u;
      }
      return t.join("");
    };
  Object.freeze({});
  var pn =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function qn(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function rn() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function sn() {
    var a, b;
    return null !=
      (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function tn(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function un() {
    var a = z;
    if (!tn(a)) return null;
    var b = qn(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(pn)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var An = /:[0-9]+$/,
    Bn = /^\d+\.fls\.doubleclick\.net$/,
    Cn = function (a, b, c, d) {
      function e(r) {
        return Sf(10)
          ? decodeURIComponent(r.replace(/\+/g, " "))
          : decodeURIComponent(r).replace(/\+/g, " ");
      }
      for (
        var f = [], g = ha(a.split("&")), h = g.next();
        !h.done;
        h = g.next()
      ) {
        var m = ha(h.value.split("=")),
          n = m.next().value,
          p = ia(m);
        if (e(n) === b) {
          var q = p.join("=");
          if (!c) return d ? q : e(q);
          f.push(d ? q : e(q));
        }
      }
      return c ? f : void 0;
    },
    Fn = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Dn(a.protocol) || Dn(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(An, "")
            .toLowerCase());
      return En(a, b, c, d, e);
    },
    En = function (a, b, c, d, e) {
      var f,
        g = Dn(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Gn(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(An, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Ab("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Cn(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Dn = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Gn = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Hn = function (a) {
      var b = E.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Ab("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(An, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    In = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Hn(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var m = "" + f + g + h;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Jn = function (a) {
      var b = Hn(z.location.href),
        c = Fn(b, "host", !1);
      if (c && c.match(Bn)) {
        var d = Fn(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function Kn(a, b, c, d) {
    var e,
      f = Number(null != a.Yb ? a.Yb : void 0);
    0 !== f && (e = new Date((b || Ua()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Fb: d,
    };
  }
  var Ln;
  var Pn = function () {
      var a = Mn,
        b = Nn,
        c = On(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Oc(E, "mousedown", d);
        Oc(E, "keyup", d);
        Oc(E, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Qn = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      On().decorators.push(f);
    },
    Rn = function (a, b, c) {
      for (var d = On().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== E.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Xa(e, g.callback());
        }
      }
      return e;
    };
  function On() {
    var a = Fc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Sn = /(.*?)\*(.*?)\*(.*)/,
    Tn = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Un = /^(?:www\.|m\.|amp\.)+/,
    Vn = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Wn(a, b) {
    var c = [
        Dc.userAgent,
        new Date().getTimezoneOffset(),
        Dc.userLanguage || Dc.language,
        Math.floor(Ua() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Ln)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Ln = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Ln[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Xn() {
    return function (a) {
      var b = Hn(z.location.href),
        c = b.search.replace("?", ""),
        d = Cn(c, "_gl", !1, !0) || "";
      a.query = Yn(d) || {};
      var e = Fn(b, "fragment"),
        f;
      var g = -1;
      if (Za(e, "_gl=")) g = 4;
      else {
        var h = e.indexOf("&_gl=");
        0 < h && (g = h + 3 + 2);
      }
      if (0 > g) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = 0 > m ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = Yn(f || "") || {};
    };
  }
  var Zn = function (a) {
      var b = Xn(),
        c = On();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Xa(d, e.query), a && Xa(d, e.fragment));
      return d;
    },
    Yn = function (a) {
      try {
        var b = $n(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = yb(d[e + 1]);
            c[f] = g;
          }
          Ab("TAGGING", 6);
          return c;
        }
      } catch (h) {
        Ab("TAGGING", 8);
      }
    };
  function $n(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Sn.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Wn(h, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return h;
        Ab("TAGGING", 7);
      }
    }
  }
  function ao(a, b, c, d, e) {
    function f(q) {
      var r = q,
        t = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(r),
        u = r;
      if (t) {
        var v = t[2],
          w = t[4];
        u = t[1];
        w && (u = u + v + w);
      }
      q = u;
      var x = q.charAt(q.length - 1);
      q && "&" !== x && (q += "&");
      return q + p;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var g = Vn.exec(c);
    if (!g) return "";
    var h = g[1],
      m = g[2] || "",
      n = g[3] || "",
      p = a + "=" + b;
    d
      ? (0 !== n.substring(1).length && e) || (n = "#" + f(n.substring(1)))
      : (m = "?" + f(m.substring(1)));
    return "" + h + m + n;
  }
  function bo(a, b) {
    function c(n, p, q) {
      if (Object.keys(n).length) {
        var r,
          t = [],
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var v = n[u];
            void 0 !== v &&
              v === v &&
              null !== v &&
              "[object Object]" !== v.toString() &&
              (t.push(u), t.push(xb(String(v))));
          }
        var w = t.join("*");
        r = ["1", Wn(w), w].join("*");
        d
          ? (Sf(13) || Sf(11) || !p) && co("_gl", r, a, p, q)
          : eo("_gl", r, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = Rn(b, 1, d),
      f = Rn(b, 2, d),
      g = Rn(b, 4, d),
      h = Rn(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Sf(11) && c(g, !0, !0);
    for (var m in h) h.hasOwnProperty(m) && fo(m, h[m], a);
  }
  function fo(a, b, c) {
    if (c.tagName) {
      if ("a" === c.tagName.toLowerCase()) {
        eo(a, b, c);
        return;
      }
      if ("form" === c.tagName.toLowerCase()) {
        co(a, b, c);
        return;
      }
    }
    "string" == typeof c && ao(a, b, c);
  }
  function eo(a, b, c, d, e) {
    if (c.href) {
      var f = ao(a, b, c.href, void 0 === d ? !1 : d, void 0 === e ? !1 : e);
      ic.test(f) && (c.href = f);
    }
  }
  function co(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var g = ao(a, b, c.action, d, e);
          ic.test(g) && (c.action = g);
        }
      } else {
        for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
          var p = h[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = E.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Mn(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || bo(e, e.hostname);
      }
    } catch (g) {}
  }
  function Nn(a) {
    try {
      if (a.action) {
        var b = Fn(Hn(a.action), "host");
        bo(a, b);
      }
    } catch (c) {}
  }
  var go = function (a, b, c, d) {
      Pn();
      Qn(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    ho = function (a, b) {
      Pn();
      Qn(a, [En(z.location, "host", !0)], b, !0, !0);
    },
    io = function () {
      var a = E.location.hostname,
        b = Tn.exec(E.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(Un, ""),
        m = e.replace(Un, ""),
        n;
      if (!(n = h === m)) {
        var p = "." + m;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    jo = function (a, b) {
      return !1 === a ? !1 : a || b || io();
    };
  var ko = ["1"],
    lo = {},
    mo = {},
    ro = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = no(a.prefix);
      if (!lo[c])
        if (oo(c, a.path, a.domain)) {
          var d = mo[no(a.prefix)];
          po(a, d ? d.id : void 0, d ? d.zh : void 0);
        } else {
          var e = Jn("auiddc");
          if (e) Ab("TAGGING", 17), (lo[c] = e);
          else if (b) {
            var f = no(a.prefix),
              g = Rm();
            if (0 === qo(f, g, a)) {
              var h = Fc("google_tag_data", {});
              h._gcl_au || (h._gcl_au = g);
            }
            oo(c, a.path, a.domain);
          }
        }
    };
  function po(a, b, c) {
    var d = no(a.prefix),
      e = lo[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + "." + b + "." + (c ? c : Math.floor(Ua() / 1e3)));
          qo(d, h, a, 1e3 * g);
        }
      }
    }
  }
  function qo(a, b, c, d) {
    var e = Vm(b, "1", c.domain, c.path),
      f = Kn(c, d);
    f.Fb = so();
    return Nm(a, e, f);
  }
  function oo(a, b, c) {
    var d = Um(a, b, c, ko, so());
    if (!d) return !1;
    to(a, d);
    return !0;
  }
  function to(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((lo[a] = c.slice(0, 2).join(".")),
        (mo[a] = { id: c.slice(2, 4).join("."), zh: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (mo[a] = { id: c.slice(0, 2).join("."), zh: Number(c[2]) || 0 })
      : (lo[a] = b);
  }
  function no(a) {
    return (a || "_gcl") + "_au";
  }
  function uo(a) {
    function b() {
      Ij(c) && a();
    }
    var c = so();
    Qj(function () {
      b();
      Ij(c) || Rj(b, c);
    }, c);
  }
  function vo(a) {
    var b = Zn(!0),
      c = no(a.prefix);
    uo(function () {
      var d = b[c];
      if (d) {
        to(c, d);
        var e = 1e3 * Number(lo[c].split(".")[1]);
        if (e) {
          Ab("TAGGING", 16);
          var f = Kn(a, e);
          f.Fb = so();
          var g = Vm(d, "1", a.domain, a.path);
          Nm(c, g, f);
        }
      }
    });
  }
  function wo(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        h = Um(a, e.path, e.domain, ko, so());
      h && (g[a] = h);
      return g;
    };
    uo(function () {
      go(f, b, c, d);
    });
  }
  function so() {
    return Sf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var xo = function (a) {
    for (
      var b = [],
        c = E.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Ph: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function yo(a, b) {
    var c = xo(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Ph] || (d[c[e].Ph] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), aa: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Ph].push(g);
      }
    }
    return d;
  }
  var zo = /^\w+$/,
    Ao = /^[\w-]+$/,
    Bo = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" };
  function Co() {
    return Sf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var Do = function () {
      return vj().h() ? Ij(Co()) : !0;
    },
    Eo = function (a) {
      function b() {
        var c = Do();
        c && a();
        return c;
      }
      Qj(function () {
        b() || Rj(b, Co());
      }, Co());
    },
    Go = function (a) {
      return Fo(a).map(function (b) {
        return b.aa;
      });
    },
    Fo = function (a) {
      var b = [];
      if (!Bm(z) || !E.cookie) return b;
      var c = Em(a, E.cookie, void 0, Co());
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { aa: d.aa }, e++) {
        var f = Ho(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.aa = g.aa;
          var m = g.timestamp,
            n = g.labels,
            p = Ja(
              b,
              (function (q) {
                return function (r) {
                  return r.aa === q.aa;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = Io(p.labels, n || [])))
            : b.push({ version: h, aa: d.aa, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Jo(b);
    };
  function Io(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Ko(a) {
    return a && "string" == typeof a && a.match(zo) ? a : "_gcl";
  }
  var Mo = function () {
      var a = Hn(z.location.href),
        b = Fn(a, "query", !1, void 0, "gclid"),
        c = Fn(a, "query", !1, void 0, "gclsrc"),
        d = Fn(a, "query", !1, void 0, "wbraid"),
        e = Fn(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Cn(f, "gclid", !1);
        c = c || Cn(f, "gclsrc", !1);
        d = d || Cn(f, "wbraid", !1);
      }
      return Lo(b, c, e, d);
    },
    Lo = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Ao.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(Ao))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Oo = function (a) {
      var b = Mo();
      Eo(function () {
        No(b, !1, a);
      });
    };
  function No(a, b, c, d, e) {
    function f(w, x) {
      var y = Po(w, g);
      y && (Nm(y, x, h), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = Ko(c.prefix);
    d = d || Ua();
    var h = Kn(c, d, !0);
    h.Fb = Co();
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        r = Po("gb", g),
        t = !1;
      if (!b)
        for (var u = Fo(r), v = 0; v < u.length; v++)
          u[v].aa === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Ro = function (a, b) {
      var c = Zn(!0);
      Eo(function () {
        for (var d = Ko(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Bo[f]) {
            var g = Po(f, d),
              h = c[g];
            if (h) {
              var m = Math.min(Qo(h), Ua()),
                n;
              b: {
                var p = m;
                if (Bm(z))
                  for (
                    var q = Em(g, E.cookie, void 0, Co()), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (Qo(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = Kn(b, m, !0);
                t.Fb = Co();
                Nm(g, h, t);
              }
            }
          }
        }
        No(Lo(c.gclid, c.gclsrc), !1, b);
      });
    },
    Po = function (a, b) {
      var c = Bo[a];
      if (void 0 !== c) return b + c;
    },
    Qo = function (a) {
      return 0 !== So(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Ho(a) {
    var b = So(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          aa: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function So(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Ao.test(a[2])
      ? []
      : a;
  }
  var To = function (a, b, c, d, e) {
      if (Ha(b) && Bm(z)) {
        var f = Ko(e),
          g = function () {
            for (var h = {}, m = 0; m < a.length; ++m) {
              var n = Po(a[m], f);
              if (n) {
                var p = Em(n, E.cookie, void 0, Co());
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        Eo(function () {
          go(g, b, c, d);
        });
      }
    },
    Jo = function (a) {
      return a.filter(function (b) {
        return Ao.test(b.aa);
      });
    },
    Uo = function (a, b) {
      if (Bm(z)) {
        for (var c = Ko(b.prefix), d = {}, e = 0; e < a.length; e++)
          Bo[a[e]] && (d[a[e]] = Bo[a[e]]);
        Eo(function () {
          l(d, function (f, g) {
            var h = Em(c + g, E.cookie, void 0, Co());
            h.sort(function (t, u) {
              return Qo(u) - Qo(t);
            });
            if (h.length) {
              var m = h[0],
                n = Qo(m),
                p = 0 !== So(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== So(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              No(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Vo(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Wo = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Mj()) {
        var c = Mo();
        if (Vo(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          ho(function () {
            return d;
          }, 3);
          ho(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Xo = function (a) {
      if (!Sf(11)) return null;
      var b = Zn(!0).gad_source;
      if (null != b) return (z.location.hash = ""), b;
      if (Sf(12)) {
        var c = Hn(z.location.href);
        b = Fn(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Mo();
        if (Vo(d, a)) return "0";
      }
      return null;
    },
    Yo = function (a) {
      var b = Xo(a);
      null != b &&
        ho(function () {
          var c = {};
          return (c.gad_source = b), c;
        }, 4);
    },
    Zo = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Do()) return e;
      var f = Fo(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var h = f[0],
          m = f[0].timestamp,
          n = [h.version, Math.round(m / 1e3), h.aa]
            .concat(h.labels || [], [b])
            .join("."),
          p = Kn(c, m, !0);
        p.Fb = Co();
        Nm(a, n, p);
      }
      return e;
    };
  function $o(a, b) {
    var c = Ko(b),
      d = Po(a, c);
    if (!d) return 0;
    for (var e = Fo(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function ap(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var bp = function (a) {
    var b = Math.max($o("aw", a), ap(Do() ? yo() : {}));
    return Math.max($o("gb", a), ap(Do() ? yo("_gac_gb", !0) : {})) > b;
  };
  var hp = /[A-Z]+/,
    ip = /\s/,
    jp = function (a, b) {
      if (k(a)) {
        a = Sa(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (hp.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var g = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = g(e);
              if ("DC" === d && 2 === f.length) {
                var h = g(f[1]);
                2 === h.length && ((f[1] = h[0]), f.push(h[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || (ip.test(f[m]) && ("AW" !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, ia: d + "-" + f[0], R: f };
          }
        }
      }
    },
    lp = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = jp(a[d], b);
        e && (c[e.id] = e);
      }
      kp(c);
      var f = [];
      l(c, function (g, h) {
        f.push(h);
      });
      return f;
    };
  function kp(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.R[1] && b.push(d.ia);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var mp = function (a, b, c, d) {
    var e = Lc(),
      f;
    if (1 === e)
      a: {
        var g = Ci;
        g = g.toLowerCase();
        for (
          var h = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = E.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(h) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var yp,
    zp = !1;
  function Ap() {
    zp = !0;
    yp = yp || {};
  }
  var Bp = function (a) {
    zp || Ap();
    return yp[a];
  };
  var Cp = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = C(c.eventMetadata || {});
    this.isAborted = !1;
  };
  Cp.prototype.copyToHitData = function (a, b, c) {
    var d = V(this.s, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && k(d) && T(68))
      try {
        d = c(d);
      } catch (e) {}
    void 0 !== d && (this.h[a] = d);
  };
  var Dp = function (a) {
      return a.metadata.source_canonical_id;
    },
    Ep = function (a, b, c) {
      var d = Bp(a.target.ia);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Fp(a) {
    return {
      getDestinationId: function () {
        return a.target.ia;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return V(a.s, b);
      },
      wj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      },
    };
  }
  function Mp(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Hn("" + c + b).href;
    }
  }
  function Np() {
    return !!ni.zf && "SGTM_TOKEN" !== ni.zf.split("@@").join("");
  }
  function Op(a) {
    for (var b = ha([Q.g.Ud, Q.g.Qb]), c = b.next(); !c.done; c = b.next()) {
      var d = V(a, c.value);
      if (d) return d;
    }
  }
  var Pp = "",
    Qp = [];
  function Rp(a) {
    var b = "";
    Pp && (b = "&dl=" + encodeURIComponent(Pp));
    0 < Qp.length && (b += "&tdp=" + Qp.join("."));
    a.hc && ((Pp = ""), (Qp.length = 0), b && a.Oj());
    return b;
  }
  var Sp = [];
  function Tp(a) {
    if (!Sp.length) return "";
    var b = "&tdc=" + Sp.join("!");
    a.hc && (a.Oj(), (Sp.length = 0));
    return b;
  }
  var Up = { initialized: 11, complete: 12, interactive: 13 },
    Vp = {},
    Wp = Object.freeze(((Vp[Q.g.Ra] = !0), Vp)),
    Xp =
      0 <= E.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= E.location.search.indexOf("&gtm_diagnostics="),
    Zp = function (a, b, c) {
      if (Ok && "config" === a && !(1 < jp(b).R.length)) {
        var d,
          e = Fc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = C(c.H);
        C(c.h, f);
        var g = [],
          h;
        for (h in d) {
          var m = Yp(d[h], f);
          m.length && (Xp && console.log(m), g.push(h));
        }
        g.length &&
          (g.length && Ok && Sp.push(b + "*" + g.join(".")),
          Ab("TAGGING", Up[E.readyState] || 14));
        d[b] = f;
      }
    };
  function $p(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Yp(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Wp[q] : t;
      },
      f;
    for (f in $p(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        m = e(f, b),
        n = "object" === lb(h) || "array" === lb(h),
        p = "object" === lb(m) || "array" === lb(m);
      if (n && p) Yp(h, m, c, g);
      else if (n || p || h !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var aq = {};
  function bq(a, b, c) {
    Ok && void 0 !== a && ((aq[a] = aq[a] || []), aq[a].push(c + b), Yk(a));
  }
  function cq(a) {
    var b = a.eventId,
      c = a.hc,
      d = "",
      e = aq[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete aq[b];
    return d;
  }
  var eq = function (a, b) {
      var c = jp(sk(a), !0);
      c && dq.register(c, b);
    },
    fq = function (a, b, c, d) {
      var e = jp(c, d.isGtmEvent);
      e && dq.push("event", [b, a], e, d);
    },
    gq = function (a, b, c, d) {
      var e = jp(c, d.isGtmEvent);
      e && dq.push("get", [a, b], e, d);
    },
    iq = function (a) {
      var b = jp(sk(a), !0),
        c;
      b ? (c = hq(dq, b).h) : (c = {});
      return c;
    },
    jq = function (a, b) {
      var c = jp(sk(a), !0);
      if (c) {
        var d = dq,
          e = C(b);
        C(hq(d, c).h, e);
        hq(d, c).h = e;
      }
    },
    kq = function () {
      this.status = 1;
      this.N = {};
      this.h = {};
      this.C = {};
      this.T = null;
      this.H = {};
      this.D = !1;
    },
    lq = function (a, b, c, d) {
      var e = Ua();
      this.type = a;
      this.D = e;
      this.h = b;
      this.C = c;
      this.messageContext = d;
    },
    mq = function () {
      this.C = {};
      this.D = {};
      this.h = [];
    },
    hq = function (a, b) {
      var c = b.ia;
      return (a.C[c] = a.C[c] || new kq());
    },
    nq = function (a, b, c, d) {
      if (d.h) {
        var e = hq(a, d.h),
          f = e.T;
        if (f) {
          var g = C(c),
            h = C(e.N[d.h.id]),
            m = C(e.H),
            n = C(e.h),
            p = C(a.D),
            q = {};
          if (Ok)
            try {
              q = C(Li);
            } catch (v) {
              O(72);
            }
          var r = d.h.prefix,
            t = function (v) {
              bq(d.messageContext.eventId, r, v);
            },
            u = rl(
              ql(
                pl(
                  ol(
                    nl(
                      ll(
                        kl(
                          ml(
                            jl(
                              il(
                                hl(
                                  new gl(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                h
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            bq(d.messageContext.eventId, r, "1"),
              Zp(d.type, d.h.id, u),
              f(d.h.id, b, d.D, u);
          } catch (v) {
            bq(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  mq.prototype.register = function (a, b, c) {
    var d = hq(this, a);
    3 !== d.status &&
      ((d.T = b), (d.status = 3), c && (C(d.h, c), (d.h = c)), this.flush());
  };
  mq.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === hq(this, c).status &&
        ((hq(this, c).status = 2), this.push("require", [{}], c, {})),
      hq(this, c).D && (d.deferrable = !1));
    this.h.push(new lq(a, c, b, d));
    d.deferrable || this.flush();
  };
  mq.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      e = { Xb: e.Xb, Hf: e.Hf };
      var f = this.h[0],
        g = f.h;
      if (f.messageContext.deferrable)
        !g || hq(this, g).D
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== hq(this, g).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            l(f.C[0], function (r, t) {
              C(ab(r, t), b.D);
            });
            break;
          case "config":
            var h = hq(this, g);
            e.Xb = {};
            l(
              f.C[0],
              (function (r) {
                return function (t, u) {
                  C(ab(t, u), r.Xb);
                };
              })(e)
            );
            var m = !!e.Xb[Q.g.Rb];
            delete e.Xb[Q.g.Rb];
            var n = g.ia === g.id;
            m || (n ? (h.H = {}) : (h.N[g.id] = {}));
            (h.D && m) || nq(this, Q.g.sa, e.Xb, f);
            h.D = !0;
            n ? C(e.Xb, h.H) : (C(e.Xb, h.N[g.id]), O(70));
            d = !0;
            break;
          case "event":
            e.Hf = {};
            l(
              f.C[0],
              (function (r) {
                return function (t, u) {
                  C(ab(t, u), r.Hf);
                };
              })(e)
            );
            nq(this, f.C[1], e.Hf, f);
            break;
          case "get":
            var p = {},
              q = ((p[Q.g.ib] = f.C[0]), (p[Q.g.vb] = f.C[1]), p);
            nq(this, Q.g.Oa, q, f);
        }
        this.h.shift();
        oq(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var oq = function (a, b) {
      if ("require" !== b.type)
        if (b.h)
          for (var c = hq(a, b.h).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.C)
            if (a.C.hasOwnProperty(e)) {
              var f = a.C[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    dq = new mq();
  function Hq(a) {
    var b = V(a.s, Q.g.xb),
      c = V(a.s, Q.g.Mb);
    b && !c
      ? (a.eventName !== Q.g.sa && a.eventName !== Q.g.zd && O(131),
        (a.isAborted = !0))
      : !b && c && (O(132), (a.isAborted = !0));
  }
  var Jq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Kq = /^www.googleadservices.com$/,
    Mq = function (a) {
      a || (a = Lq());
      return a.kn
        ? !1
        : a.Tl || a.Ul || a.Vl || a.ph || a.Jf || a.El || a.Ll
        ? !0
        : !1;
    },
    Lq = function () {
      var a = {},
        b = Zn(!0);
      a.kn = !!b._up;
      var c = Mo();
      a.Tl = void 0 !== c.aw;
      a.Ul = void 0 !== c.dc;
      a.Vl = void 0 !== c.gbraid;
      var d = Hn(z.location.href),
        e = Fn(d, "query", !1, void 0, "gad");
      a.ph = void 0 !== e;
      if (!a.ph) {
        var f = d.hash.replace("#", ""),
          g = Cn(f, "gad", !1);
        a.ph = void 0 !== g;
      }
      a.Jf = void 0;
      if (T(76)) {
        var h = Fn(d, "query", !1, void 0, "gad_source");
        a.Jf = h;
        if (void 0 === a.Jf) {
          var m = d.hash.replace("#", ""),
            n = Cn(m, "gad_source", !1);
          a.Jf = n;
        }
      }
      var p = E.referrer ? Fn(Hn(E.referrer), "host") : "";
      a.Ll = Jq.test(p);
      a.El = Kq.test(p);
      return a;
    };
  var Nq = function () {
      var a = z.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Oq = function (a) {
      if (E.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
        return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf("opacity(");
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(")", h))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  var Ir = {
    Xk: Number("") || 500,
    Hk: Number("") || 5e3,
    Ui: Number("") || 10,
    nk: Number("") || 5e3,
  };
  function Jr(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var Kr = function (a, b) {
    var c;
    return c;
  };
  var Lr = "https://" + ni.yd,
    Mr = Lr + "/gtm/static/",
    Nr = Number("") || 5,
    Or = Lr,
    Pr = Mr,
    Qr = !1,
    Rr = 0,
    Sr = Ka();
  function as() {
    var a = !1;
    return a;
  }
  function bs(a) {}
  function ds(a, b, c) {}
  function Xr(a, b, c) {}
  function cs(a, b, c, d) {}
  function es(a) {}
  function fs(a, b, c, d) {}
  function gs() {
    return "attribution-reporting";
  }
  function hs(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var is = !1;
  function js() {
    if (hs("join-ad-interest-group") && Ea(Dc.joinAdInterestGroup)) return !0;
    is ||
      (Gl(
        "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (is = !0));
    return hs("join-ad-interest-group") && Ea(Dc.joinAdInterestGroup);
  }
  function ks(a, b) {
    var c = void 0;
    try {
      c = E.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ua() - d) {
        Ab("TAGGING", 9);
        return;
      }
      try {
        c.parentNode.removeChild(c);
      } catch (e) {}
      c = void 0;
    } else
      try {
        if (
          50 <=
          E.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          Ab("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Mc(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ua() },
      c
    );
  }
  function ls() {
    return "https://td.doubleclick.net";
  }
  var ms = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    ns = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    os = /^\d+\.fls\.doubleclick\.net$/,
    ps = /;gac=([^;?]+)/,
    qs = /;gacgb=([^;?]+)/,
    rs = /;gclaw=([^;?]+)/,
    ss = /;gclgb=([^;?]+)/;
  function ts(a, b) {
    if (os.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && 2 == c.length && c[1].match(ms)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].aa);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var us = function (a, b, c) {
    var d = Do() ? yo("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = Zo("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + h.join(","));
    }
    return { Dl: f ? e.join(";") : "", Cl: ts(d, qs) };
  };
  function vs(a, b, c) {
    if (os.test(E.location.host)) {
      var d = E.location.href.match(c);
      if (d && 2 == d.length && d[1].match(ns)) return [{ aa: d[1] }];
    } else return Fo((a || "_gcl") + b);
    return [];
  }
  var ws = function (a) {
      return vs(a, "_aw", rs)
        .map(function (b) {
          return b.aa;
        })
        .join(".");
    },
    xs = function (a) {
      return vs(a, "_gb", ss)
        .map(function (b) {
          return b.aa;
        })
        .join(".");
    },
    ys = function (a, b) {
      var c = Zo(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var zs = function () {
    if (Ea(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var nt = {
    J: {
      Sh: "ads_conversion_hit",
      xd: "container_execute_start",
      Vh: "container_setup_end",
      dg: "container_setup_start",
      Th: "container_blocking_end",
      Uh: "container_execute_end",
      Wh: "container_yield_end",
      eg: "container_yield_start",
      Ni: "event_execute_end",
      Mi: "event_evaluation_end",
      Tg: "event_evaluation_start",
      Oi: "event_setup_end",
      je: "event_setup_start",
      Pi: "ga4_conversion_hit",
      me: "page_load",
      Cn: "pageview",
      Vb: "snippet_load",
      dj: "tag_callback_error",
      ej: "tag_callback_failure",
      fj: "tag_callback_success",
      gj: "tag_execute_end",
      ed: "tag_execute_start",
    },
  };
  function ot() {
    function a(c, d) {
      var e = Cb(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  var pt = !1;
  var Yt = function (a, b) {},
    Zt = function (a, b) {},
    $t = function (a, b) {},
    au = function (a, b) {},
    bu = function () {
      var a = {};
      return a;
    },
    Qt = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    cu = function () {},
    du = function (a, b) {},
    eu = function (a, b, c) {},
    fu = function () {};
  var gu = function (a, b) {
    var c = z,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var hu = function (a, b, c) {
    var d = Bl(a, "fmt");
    if (b) {
      var e = Bl(a, "random"),
        f = Bl(a, "label") || "";
      if (!e) return !1;
      var g = on(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!gu(g, b)) return !1;
    }
    d && 4 != d && (a = Dl(a, "rfmt", d));
    var h = Dl(a, "fmt", 4);
    Kc(
      h,
      function () {
        z.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((z.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      E.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var yu = function () {
      this.h = {};
    },
    zu = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Au = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    Cu = function (a, b, c, d) {};
  function Eu(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var Gu = function (a, b) {
      Fu(a).entity.push(b);
    },
    Hu = function (a, b) {
      Fu(a).event && Fu(a).event.push(b);
    },
    Iu = function () {
      var a = Fu(uk());
      return a.event ? a.event : [];
    };
  function Fu(a) {
    var b,
      c = oi.r;
    c || ((c = { container: {} }), (oi.r = c));
    b = c;
    var d = b.container[a];
    d || ((d = { entity: [], event: [] }), (b.container[a] = d));
    return d;
  }
  var Ju = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Ku = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Lu = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Mu =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    Pu = function (a) {
      var b = Oi("gtm.allowlist") || Oi("gtm.whitelist");
      b && O(9);
      ui && (b = ["google", "gtagfl", "lcl", "zone"]);
      Nu() &&
        (ui
          ? O(116)
          : (O(117),
            Ou &&
              ((b = []),
              window.console &&
                window.console.log &&
                window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Ya(Ra(b), Ku),
        d = Oi("gtm.blocklist") || Oi("gtm.blacklist");
      d || ((d = Oi("tagTypeBlacklist")) && O(3));
      d ? O(8) : (d = []);
      Nu() &&
        ((d = Ra(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ra(d).indexOf("google") && O(2);
      var e = d && Ya(Ra(d), Lu),
        f = {};
      return function (g) {
        var h = g && g[Oe.za];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var m = Gi[h] || [],
          n = a(h, m),
          p;
        p = Fu(uk()).entity;
        for (var q = 0; q < p.length; q++)
          try {
            n = n && p[q](h, m);
          } catch (y) {
            n = !1;
          }
        if (b) {
          var r;
          if ((r = n))
            a: {
              if (0 > c.indexOf(h))
                if (m && 0 < m.length)
                  for (var t = 0; t < m.length; t++) {
                    if (0 > c.indexOf(m[t])) {
                      O(11);
                      r = !1;
                      break a;
                    }
                  }
                else {
                  r = !1;
                  break a;
                }
              r = !0;
            }
          n = r;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(h);
          if (v) u = v;
          else {
            var w = Ma(e, m || []);
            w && O(10);
            u = w;
          }
        }
        var x = !n || u;
        x ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (x = Ma(e, Mu));
        return (f[h] = x);
      };
    },
    Ou = !1;
  Ou = !0;
  var Nu = function () {
      return Ju.test(z.location && z.location.hostname);
    },
    Qu = function () {
      mk &&
        Gu(uk(), function (a) {
          var b = xf(a),
            c;
          if (Cf(b)) {
            var d = b[Oe.za];
            if (!d) throw "Error: No function name given for function call.";
            var e = qf[d];
            c = !!e && !!e.runInSiloedMode;
          } else c = !!Eu(b[Oe.za], 4);
          return c;
        });
    };
  var Su = function (a, b, c, d, e) {
      if (!Ru() && !Ak(a)) {
        var f = "?id=" + encodeURIComponent(a) + "&l=" + ni.ja,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        T(53) && (f += "&gtm=" + hn());
        var h = Np();
        h && (f += "&sign=" + ni.zf);
        var m = c ? "/gtag/js" : "/gtm.js",
          n = wi || yi ? Mp(b, m + f) : void 0;
        if (!n) {
          var p = ni.yd + m;
          h &&
            Ec &&
            g &&
            (p = Ec.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          n = mp("https://", "http://", p + f);
        }
        var q = a;
        d.siloed && (Dk({ ctid: q, isDestination: !1 }), (q = ok(q)));
        var r = q,
          t = Ck();
        ik().container[r] = { state: 1, context: d, parent: t };
        jk({ ctid: r, isDestination: !1 }, e);
        Kc(n);
      }
    },
    Tu = function (a, b, c, d) {
      if (!Ru() && !Bk(a))
        if (Ek())
          (ik().destination[a] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: Ck(),
          }),
            jk({ ctid: a, isDestination: !0 }, d),
            O(91);
        else {
          var e =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            ni.ja +
            "&cx=c";
          T(53) && (e += "&gtm=" + hn());
          Np() && (e += "&sign=" + ni.zf);
          var f = wi || yi ? Mp(b, e) : void 0;
          f || (f = mp("https://", "http://", ni.yd + e));
          var g = a;
          c.siloed && (Dk({ ctid: g, isDestination: !0 }), (g = ok(g)));
          ik().destination[g] = { state: 1, context: c, parent: Ck() };
          jk({ ctid: g, isDestination: !0 }, d);
          Kc(f);
        }
    };
  function Ru() {
    if (Xm()) {
      return !0;
    }
    return !1;
  }
  var Uu = !1,
    Vu = 0,
    Wu = [];
  function Xu(a) {
    if (!Uu) {
      var b = E.createEventObject,
        c = "complete" == E.readyState,
        d = "interactive" == E.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Uu = !0;
        for (var e = 0; e < Wu.length; e++) I(Wu[e]);
      }
      Wu.push = function () {
        for (var f = 0; f < arguments.length; f++) I(arguments[f]);
        return 0;
      };
    }
  }
  function Yu() {
    if (!Uu && 140 > Vu) {
      Vu++;
      try {
        E.documentElement.doScroll("left"), Xu();
      } catch (a) {
        z.setTimeout(Yu, 50);
      }
    }
  }
  var Zu = function (a) {
    Uu ? a() : Wu.push(a);
  };
  var av = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: tk(),
    };
  };
  var cv = function (a, b) {
      this.h = !1;
      this.H = [];
      this.N = { tags: [] };
      this.T = !1;
      this.C = this.D = 0;
      bv(this, a, b);
    },
    dv = function (a, b, c, d) {
      if (ri.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      nb(d) && (e = C(d, e));
      e.id = c;
      e.status = "timeout";
      return a.N.tags.push(e) - 1;
    },
    ev = function (a, b, c, d) {
      var e = a.N.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    fv = function (a) {
      if (!a.h) {
        for (var b = a.H, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.H.length = 0;
      }
    },
    bv = function (a, b, c) {
      void 0 !== b && a.Bf(b);
      c &&
        z.setTimeout(function () {
          return fv(a);
        }, Number(c));
    };
  cv.prototype.Bf = function (a) {
    var b = this,
      c = Wa(function () {
        return I(function () {
          a(tk(), b.N);
        });
      });
    this.h ? c() : this.H.push(c);
  };
  var gv = function (a) {
      a.D++;
      return Wa(function () {
        a.C++;
        a.T && a.C >= a.D && fv(a);
      });
    },
    hv = function (a) {
      a.T = !0;
      a.C >= a.D && fv(a);
    };
  var iv = {},
    kv = function () {
      return z[jv()];
    },
    lv = !1;
  function jv() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var ov = function (a) {},
    pv = function (a, b) {
      return function () {
        var c = kv(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var uv = {},
    vv = {};
  function wv(a, b) {
    if (Ok) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      uv[a] = "&e=" + c + "&eid=" + a;
      Yk(a);
    }
  }
  function xv(a) {
    var b = a.eventId,
      c = a.hc;
    if (!uv[b]) return "";
    var d = vv[b] ? "" : "&es=1";
    d += uv[b];
    c && (vv[b] = !0);
    return d;
  }
  var yv = {};
  function zv(a, b) {
    Ok && ((yv[a] = yv[a] || {}), (yv[a][b] = (yv[a][b] || 0) + 1));
  }
  function Av(a) {
    var b = a.eventId,
      c = a.hc,
      d = yv[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete yv[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  var Bv = {},
    Cv = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8",
    };
  function Dv(a, b, c) {
    if (Ok) {
      Bv[a] = Bv[a] || [];
      var d = Cv[b] || "0",
        e;
      e =
        c instanceof z.Element
          ? "1"
          : c instanceof z.Event
          ? "2"
          : c instanceof z.RegExp
          ? "3"
          : c === z
          ? "4"
          : c === E
          ? "5"
          : c instanceof z.Promise
          ? "6"
          : c instanceof z.Storage
          ? "7"
          : c instanceof z.Date
          ? "8"
          : c instanceof z.History
          ? "9"
          : c instanceof z.Performance
          ? "a"
          : c === z.crypto
          ? "b"
          : c instanceof z.Location
          ? "c"
          : c instanceof z.Navigator
          ? "d"
          : "object" !== typeof c || nb(c)
          ? "0"
          : "e";
      Bv[a].push("" + d + e);
    }
  }
  function Ev(a) {
    var b = a.eventId,
      c = Bv[b] || [];
    if (!c.length) return "";
    a.hc && delete Bv[b];
    return "&pcr=" + c.join(".");
  }
  var Fv = {},
    Gv = {};
  function Hv(a, b, c) {
    if (Ok && b) {
      var d = gk(b);
      Fv[a] = Fv[a] || [];
      Fv[a].push(c + d);
      var e = (Cf(b) ? "1" : "2") + d;
      Gv[a] = Gv[a] || [];
      Gv[a].push(e);
      Yk(a);
    }
  }
  function Iv(a) {
    var b = a.eventId,
      c = a.hc,
      d = "",
      e = Fv[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = Gv[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete Fv[b], delete Gv[b]);
    return d;
  }
  function Jv(a, b, c, d) {
    var e = of[a],
      f = Kv(a, b, c, d);
    if (!f) return null;
    var g = zf(e[Oe.cj], c, []);
    if (g && g.length) {
      var h = g[0];
      f = Jv(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.tj ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function Kv(a, b, c, d) {
    function e() {
      if (f[Oe.Mk]) h();
      else {
        var w = Af(f, c, []),
          x = w[Oe.dk];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!ak(x[y])) {
              h();
              return;
            }
        var A = dv(c.Wb, String(f[Oe.za]), Number(f[Oe.qe]), w[Oe.Nk]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var H = Ua() - F;
            Hv(c.id, of[a], "5");
            ev(c.Wb, A, "success", H);
            T(24) && eu(c, f, nt.J.fj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var H = Ua() - F;
            Hv(c.id, of[a], "6");
            ev(c.Wb, A, "failure", H);
            T(24) && eu(c, f, nt.J.ej);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Hv(c.id, f, "1");
        var D = function () {
          kj(3);
          var H = Ua() - F;
          Hv(c.id, f, "7");
          ev(c.Wb, A, "exception", H);
          T(24) && eu(c, f, nt.J.dj);
          B || ((B = !0), h());
        };
        T(24) && du(c, f);
        var F = Ua();
        try {
          yf(w, { event: c, index: a, type: 1 });
        } catch (H) {
          D(H);
        }
        T(24) && eu(c, f, nt.J.gj);
      }
    }
    var f = of[a],
      g = b.onSuccess,
      h = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = zf(f[Oe.ij], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Jv(p.index, { onSuccess: g, onFailure: h, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.tj ? m : q;
    }
    if (f[Oe.Xi] || f[Oe.Pk]) {
      var r = f[Oe.Xi] ? pf : c.Ym,
        t = g,
        u = h;
      if (!r[a]) {
        e = Wa(e);
        var v = Lv(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Lv(a, b, c) {
    var d = [],
      e = [];
    b[a] = Mv(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Nv;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Ov;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Mv(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Nv(a) {
    a();
  }
  function Ov(a, b) {
    b();
  }
  var Qv = function (a, b) {
      return 1 === arguments.length ? Pv("set", a) : Pv("set", a, b);
    },
    Rv = function (a, b) {
      return 1 === arguments.length ? Pv("config", a) : Pv("config", a, b);
    },
    Sv = function (a, b, c) {
      c = c || {};
      c[Q.g.Pb] = a;
      return Pv("event", b, c);
    };
  function Pv(a) {
    return arguments;
  }
  var mw = function () {
    this.h = [];
    this.C = [];
  };
  mw.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.C.length; f++)
      try {
        this.C[f](e);
      } catch (g) {}
  };
  mw.prototype.listen = function (a) {
    this.C.push(a);
  };
  mw.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  mw.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var tw = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = Tf.Ef;
      sw().enqueue(a, b, c);
    },
    vw = function () {
      var a = uw;
      sw().listen(a);
    };
  function sw() {
    var a = oi.mb;
    a || ((a = new mw()), (oi.mb = a));
    return a;
  }
  var Dw = function (a) {
      var b = oi.zones;
      return b
        ? b.getIsAllowedFn(pk(), a)
        : function () {
            return !0;
          };
    },
    Ew = function () {
      Hu(uk(), function (a, b) {
        var c = oi.zones;
        return c ? c.isActive(pk(), b) : !0;
      });
    };
  var Hw = function (a, b) {
    for (var c = [], d = 0; d < of.length; d++)
      if (a[d]) {
        var e = of[d];
        var f = gv(b.Wb);
        try {
          var g = Jv(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = e[Oe.za];
            if (!h) throw "Error: No function name given for function call.";
            var m = qf[h];
            c.push({
              Rj: d,
              Hj: (m ? m.priorityOverride || 0 : 0) || Eu(e[Oe.za], 1) || 0,
              execute: g,
            });
          } else Fw(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(Gw);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Gw(a, b) {
    var c,
      d = b.Hj,
      e = a.Hj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Rj,
        h = b.Rj;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function Fw(a, b) {
    if (Ok) {
      var c = function (d) {
        var e = b.isBlocked(of[d]) ? "3" : "4",
          f = zf(of[d][Oe.cj], b, []);
        f && f.length && c(f[0].index);
        Hv(b.id, of[d], e);
        var g = zf(of[d][Oe.ij], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Kw = !1,
    Iw;
  var Qw = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (T(24)) {
    }
    if ("gtm.js" === d) {
      if (Kw) return !1;
      Kw = !0;
    }
    var e,
      f = !1;
    if (
      Iu().every(function (r) {
        return r(d, b);
      })
    )
      e = Dw(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      f = !0;
      e = Dw(Number.MAX_SAFE_INTEGER);
    }
    wv(b, d);
    var g = a.eventCallback,
      h = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Pu(e),
        Ym: [],
        logMacroError: function () {
          O(6);
          kj(0);
        },
        cachedModelValues: Mw(),
        checkPixieIncompatibility: Nw(b),
        Wb: new cv(function () {
          if (T(24)) {
          }
          g && g.apply(g, [].slice.call(arguments, 0));
        }, h),
        originalEventData: C(a),
      };
    T(44) && (m.reportMacroDiscrepancy = zv);
    T(24) && $t(m.id, m.name);
    var n = Kf(m);
    T(24) && au(m.id, m.name);
    f && (n = Ow(n));
    if (T(24)) {
    }
    var p = Hw(n, m),
      q = !1;
    hv(m.Wb);
    ("gtm.js" !== d && "gtm.sync" !== d) || ov(tk());
    return Pw(n, p) || q;
  };
  function Nw(a) {
    return function (b) {
      pb(b) || Dv(a, "input", b);
    };
  }
  function Mw() {
    var a = {};
    a.event = Ti("event", 1);
    a.ecommerce = Ti("ecommerce", 1);
    a.gtm = Ti("gtm");
    a.eventModel = Ti("eventModel");
    return a;
  }
  function Ow(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(of[c][Oe.za]);
        if (qi[d] || void 0 !== of[c][Oe.Qk] || Hi[d] || Eu(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Pw(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && of[c] && !ri[String(of[c][Oe.za])]) return !0;
    return !1;
  }
  var Nf;
  var Rw = {},
    Sw = {},
    Tw = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { Rf: e.Rf, Lf: e.Lf }, f++
      ) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (((e.Rf = jp(g, b)), e.Rf)) {
            var h = rk();
            Ja(
              h,
              (function (r) {
                return function (t) {
                  return r.Rf.ia === t;
                };
              })(e)
            )
              ? c.push(g)
              : d.push(g);
          }
        } else {
          var m = Rw[g] || [];
          e.Lf = {};
          m.forEach(
            (function (r) {
              return function (t) {
                return (r.Lf[t] = !0);
              };
            })(e)
          );
          for (var n = pk(), p = 0; p < n.length; p++)
            if (e.Lf[n[p]]) {
              c = c.concat(rk());
              break;
            }
          var q = Sw[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { vm: c, ym: d };
    },
    Uw = function (a) {
      l(Rw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Vw = function (a) {
      l(Sw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Ww = "HA GF G UA AW DC MC".split(" "),
    Xw = !1,
    Yw = !1;
  function Zw(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Ii() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var $w = void 0,
    ax = void 0;
  function bx(a, b, c) {
    var d = C(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && O(136);
    var e = C(b);
    C(c, e);
    tw(Rv(pk()[0], e), a.eventId, d);
  }
  function cx(a) {
    for (var b = ha([Q.g.Ud, Q.g.Qb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || dq.D[d];
      if (e) return e;
    }
  }
  var dx = {
      config: function (a, b) {
        var c = T(45),
          d = Zw(a, b);
        if (!(2 > a.length) && k(a[1])) {
          var e = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !nb(a[2])) || 3 < a.length) return;
            e = a[2];
          }
          var f = jp(a[1], b.isGtmEvent);
          if (f) {
            var g, h, m;
            a: {
              if (!lk.ke) {
                var n = vk(Ck());
                if (Gk(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = { Dm: vk(p), sm: q };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && ((g = r.Dm), (h = r.sm));
            wv(d.eventId, "gtag.config");
            var t = f.ia,
              u = f.id !== t;
            if (u ? -1 === rk().indexOf(t) : -1 === pk().indexOf(t)) {
              if (!((c && b.inheritParentConfig) || e[Q.g.xb])) {
                var v = cx(e);
                if (u)
                  Tu(t, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                  var w = e;
                  $w ? bx(b, w, $w) : ax || (ax = C(w));
                } else
                  Su(t, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (g && (O(128), h && O(130), c && b.inheritParentConfig)) {
                var x;
                var y = e;
                ax
                  ? (bx(b, ax, y), (x = !1))
                  : ((!y[Q.g.Rb] && ti && $w) || ($w = C(y)), (x = !0));
                x && g.containers && g.containers.join(",");
                return;
              }
              if (ti && !u && !e[Q.g.Rb]) {
                var A = Yw;
                Yw = !0;
                if (A) return;
              }
              Xw || O(43);
              if (!b.noTargetGroup)
                if (u) {
                  Vw(f.id);
                  var B = f.id,
                    D = e[Q.g.Rd] || "default";
                  D = String(D).split(",");
                  for (var F = 0; F < D.length; F++) {
                    var H = Sw[D[F]] || [];
                    Sw[D[F]] = H;
                    0 > H.indexOf(B) && H.push(B);
                  }
                } else {
                  Uw(f.id);
                  var G = f.id,
                    J = e[Q.g.Rd] || "default";
                  J = J.toString().split(",");
                  for (var P = 0; P < J.length; P++) {
                    var U = Rw[J[P]] || [];
                    Rw[J[P]] = U;
                    0 > U.indexOf(G) && U.push(G);
                  }
                }
              delete e[Q.g.Rd];
              var ja = b.eventMetadata || {};
              ja.hasOwnProperty("is_external_event") ||
                (ja.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = ja;
              delete e[Q.g.Tc];
              for (var X = u ? [f.id] : rk(), S = 0; S < X.length; S++) {
                var ma = e,
                  fa = C(b),
                  ca = jp(X[S], fa.isGtmEvent);
                ca && dq.push("config", [ma], ca, fa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          O(39);
          var c = Zw(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[Q.g.O] && O(139), e[Q.g.Ea] && O(140));
          "default" === d
            ? Wj(e)
            : "update" === d
            ? Xj(e, c)
            : "declare" === d
            ? b.fromContainerExecution && Vj(e)
            : T(81) && "core_platform_services" === d && Yj(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && k(c)) {
          var d;
          if (2 < a.length) {
            if ((!nb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = C(e)),
            e[Q.g.Tc] && (g.eventCallback = e[Q.g.Tc]),
            e[Q.g.Md] && (g.eventTimeout = e[Q.g.Md]));
          var h = Zw(a, b),
            m = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[Q.g.Pb];
          void 0 === r &&
            ((r = Oi(Q.g.Pb, 2)), void 0 === r && (r = "default"));
          if (k(r) || Ha(r)) {
            var t;
            b.isGtmEvent
              ? (t = k(r) ? [r] : r)
              : (t = r.toString().replace(/\s+/g, "").split(","));
            var u = Tw(t, b.isGtmEvent),
              v = u.vm,
              w = u.ym;
            if (w.length)
              for (var x = cx(q), y = 0; y < w.length; y++) {
                var A = jp(w[y], b.isGtmEvent);
                A &&
                  Tu(A.ia, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = lp(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            wv(m, c);
            for (var D = [], F = 0; F < B.length; F++) {
              var H = B[F],
                G = C(b);
              if (-1 !== Ww.indexOf(wk(H.prefix))) {
                var J = C(d),
                  P = G.eventMetadata || {};
                P.hasOwnProperty("is_external_event") ||
                  (P.is_external_event = !G.fromContainerExecution);
                G.eventMetadata = P;
                delete J[Q.g.Tc];
                fq(c, J, H.id, G);
              }
              D.push(H.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[Q.g.Pb] = D.join())
              : delete g.eventModel[Q.g.Pb];
            Xw || O(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[Q.g.Mb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        O(53);
        if (4 === a.length && k(a[1]) && k(a[2]) && Ea(a[3])) {
          var c = jp(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Xw || O(43);
            var f = cx();
            if (
              !Ja(rk(), function (h) {
                return c.ia === h;
              })
            )
              Tu(c.ia, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Ww.indexOf(wk(c.prefix))) {
              Zw(a, b);
              var g = {};
              Sj(C(((g[Q.g.ib] = d), (g[Q.g.vb] = e), g)));
              gq(
                d,
                function (h) {
                  I(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Xw = !0;
          var c = Zw(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && k(a[1]) && Ea(a[2])) {
          Of(a[1], a[2]);
          if ((O(74), "all" === a[1])) {
            O(75);
            var b = !1;
            try {
              b = a[2](tk(), "unknown", {});
            } catch (c) {}
            b || O(76);
          }
        } else {
          O(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && nb(a[1])
          ? (c = C(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((c = {}),
            nb(a[2]) || Ha(a[2]) ? (c[a[1]] = C(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Zw(a, b),
            e = d.eventId,
            f = d.priorityId;
          C(c);
          var g = C(c);
          dq.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          T(13) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    ex = { policy: !0 };
  var fx = function (a) {
      var b = z[ni.ja].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    gx = function (a) {
      var b = z[ni.ja],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var hx = !1,
    ix = [];
  function jx() {
    if (!hx) {
      hx = !0;
      for (var a = 0; a < ix.length; a++) I(ix[a]);
    }
  }
  var kx = function (a) {
    hx ? I(a) : ix.push(a);
  };
  var Bx = function (a) {
    if (Ax(a)) return a;
    this.h = a;
  };
  Bx.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Ax = function (a) {
    return !a || "object" !== lb(a) || nb(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Bx.prototype.getUntrustedMessageValue = Bx.prototype.getUntrustedMessageValue;
  var Cx = 0,
    Dx = {},
    Ex = [],
    Fx = [],
    Gx = !1,
    Hx = !1;
  function Ix(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Jx = function (a) {
      return z[ni.ja].push(a);
    },
    Kx = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Jx(a);
    },
    Lx = function (a, b) {
      if (!Ga(b) || 0 > b) b = 0;
      var c = oi[ni.ja],
        d = 0,
        e = !1,
        f = void 0;
      f = z.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (z.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function Mx(a, b) {
    var c = a._clear || b.overwriteModelFields;
    l(a, function (e, f) {
      "_clear" !== e && (c && Ri(e), Ri(e, f));
    });
    Di || (Di = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Ii()), (a["gtm.uniqueEventId"] = d), Ri("gtm.uniqueEventId", d));
    return Qw(a);
  }
  function Nx(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Na(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Ox() {
    var a;
    if (Fx.length) a = Fx.shift();
    else if (Ex.length) a = Ex.shift();
    else return;
    var b;
    var c = a;
    if (Gx || !Nx(c.message)) b = c;
    else {
      Gx = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ii());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      Ex.unshift(h, c);
      if (Ok) {
        var m = Tf.ctid;
        if (m) {
          var n,
            p = vk(Ck());
          n = p && p.context;
          var q,
            r = Hn(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = Tf.Ef,
            w = lk.ke;
          Ok &&
            (Pp || (Pp = q),
            Qp.push(
              m +
                ";" +
                v +
                ";" +
                (t ? 1 : 0) +
                ";" +
                (u || 0) +
                ";" +
                (w ? 1 : 0)
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function Px() {
    for (var a = !1, b; !Hx && (b = Ox()); ) {
      Hx = !0;
      delete Li.eventModel;
      Ni();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Hx = !1;
      else {
        e.fromContainerExecution && Si();
        try {
          if (Ea(d))
            try {
              d.call(Pi);
            } catch (x) {}
          else if (Ha(d)) {
            var f = d;
            if (k(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                m = f.slice(1),
                n = Oi(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, m);
                } catch (x) {}
            }
          } else {
            var p = void 0,
              q = !1;
            if (Na(d)) {
              a: {
                if (d.length && k(d[0])) {
                  var r = dx[d[0]];
                  if (r && (!e.fromContainerExecution || !ex[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && "set" === d[0] && !!p.event) && O(101);
            } else p = d;
            if (p) {
              var t = Mx(p, e);
              a = t || a;
              q && t && O(113);
            }
          }
        } finally {
          e.fromContainerExecution && Ni(!0);
          var u = d["gtm.uniqueEventId"];
          if ("number" === typeof u) {
            for (var v = Dx[String(u)] || [], w = 0; w < v.length; w++)
              Fx.push(Qx(v[w]));
            v.length && Fx.sort(Ix);
            delete Dx[String(u)];
            u > Cx && (Cx = u);
          }
          Hx = !1;
        }
      }
    }
    return !a;
  }
  function Rx() {
    if (T(24)) {
      var a = Sx();
    }
    var b = Px();
    if (T(24)) {
    }
    try {
      fx(tk());
    } catch (c) {}
    return b;
  }
  function uw(a) {
    if (Cx < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Dx[b] = Dx[b] || [];
      Dx[b].push(a);
    } else
      Fx.push(Qx(a)),
        Fx.sort(Ix),
        I(function () {
          Hx || Px();
        });
  }
  function Qx(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Tx = function () {
      function a(f) {
        var g = {};
        if (Ax(f)) {
          var h = f;
          f = Ax(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Fc(ni.ja, []),
        c = (oi[ni.ja] = oi[ni.ja] || {});
      !0 === c.pruned && O(83);
      Dx = sw().get();
      vw();
      Zu(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      kx(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < oi.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new Bx(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        Ex.push.apply(Ex, h);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (O(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return Px() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Ex.push.apply(Ex, e);
      if (Sx()) {
        if (T(24)) {
        }
        I(Rx);
      }
    },
    Sx = function () {
      var a = !0;
      return a;
    };
  function Ux(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ua();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Vx(a) {
    return a && 0 === a.indexOf("pending:") ? Ux(a.substr(8)) : !1;
  }
  var py = function () {};
  var qy = function () {};
  qy.prototype.toString = function () {
    return "undefined";
  };
  var ry = new qy();
  var Zy = z.clearTimeout,
    $y = z.setTimeout,
    az = function (a, b, c, d) {
      if (Xm()) {
        b && I(b);
      } else return Kc(a, b, c, d);
    },
    bz = function () {
      return new Date();
    },
    cz = function () {
      return z.location.href;
    },
    dz = function (a) {
      return Fn(Hn(a), "fragment");
    },
    ez = function (a) {
      return Gn(Hn(a));
    },
    fz = function (a, b) {
      return Oi(a, b || 2);
    },
    gz = function (a, b, c) {
      return b ? Kx(a, b, c) : Jx(a);
    },
    hz = function (a, b) {
      z[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    iz = function (a, b, c) {
      return Em(a, b, void 0 === c ? !0 : !!c);
    },
    jz = function (a, b, c) {
      return 0 === Nm(a, b, c);
    },
    kz = function (a, b) {
      if (Xm()) {
        b && I(b);
      } else Mc(a, b);
    },
    lz = function (a) {
      return !!Cy(a, "init", !1);
    },
    mz = function (a) {
      Ay(a, "init", !0);
    },
    nz = function (a, b, c) {
      pb(a) || Dv(c, b, a);
    };

  function Kz(a, b) {
    function c(g) {
      var h = Hn(g),
        m = Fn(h, "protocol"),
        n = Fn(h, "host", !0),
        p = Fn(h, "port"),
        q = Fn(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Lz(a) {
    return Mz(a) ? 1 : 0;
  }
  function Mz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = C(a, {});
        C({ arg1: c[d], any_of: void 0 }, e);
        if (Lz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return tg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < pg.length; g++) {
                var h = pg[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return qg(b, c);
      case "_eq":
        return ug(b, c);
      case "_ge":
        return vg(b, c);
      case "_gt":
        return xg(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return wg(b, c);
      case "_lt":
        return yg(b, c);
      case "_re":
        return sg(b, c, a.ignore_case);
      case "_sw":
        return zg(b, c);
      case "_um":
        return Kz(b, c);
    }
    return !1;
  }
  function Nz() {
    var a = [
      "&cv=2",
      "&rv=" + ni.Xg,
      "&tc=" +
        of.filter(function (b) {
          return b;
        }).length,
    ];
    ni.oe && a.push("&x=" + ni.oe);
    return a.join("");
  }
  var Oz = function () {
      return !1;
    },
    Pz = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function Qz() {
    var a = Rz;
    return function (b, c, d) {
      var e = d && d.event;
      Sz(c);
      var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
        g = new sb();
      l(c, function (r, t) {
        var u = md(t, void 0, f);
        void 0 === u && void 0 !== t && O(44);
        g.set(r, u);
      });
      a.h.h.H = Hf();
      var h = {
        oj: Xf(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        Bf:
          void 0 !== e
            ? function (r) {
                return e.Wb.Bf(r);
              }
            : void 0,
        hd: function () {
          return b;
        },
        log: function () {},
        zl: { index: d && d.index, type: d && d.type, name: d && d.name },
        Pm: !!Eu(b, 3),
        originalEventData: null == e ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (h.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (Oz()) {
        var m = Pz(),
          n = void 0,
          p = void 0;
        h.ab = {
          Oh: [],
          se: {},
          lb: function (r, t, u) {
            1 === t && (n = r);
            7 === t && (p = u);
            m(r, t, u);
          },
          Bh: oh(),
        };
        h.log = function (r, t) {
          if (n) {
            var u = Array.prototype.slice.call(arguments, 1);
            m(n, 4, { level: r, source: p, message: u });
          }
        };
      }
      var q = Ke(a, h, [b, g]);
      a.h.h.H = void 0;
      q instanceof xa && "return" === q.h && (q = q.C);
      return nd(q, void 0, f);
    };
  }
  function Sz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ea(b) &&
      (a.gtmOnSuccess = function () {
        I(b);
      });
    Ea(c) &&
      (a.gtmOnFailure = function () {
        I(c);
      });
  }
  function Tz(a, b) {
    var c = this;
  }
  Tz.P = "addConsentListener";
  var Uz;
  var Vz = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (Uz)
        try {
          a[b]();
        } catch (c) {
          O(77);
        }
      else a[b]();
  };
  function Wz(a, b, c) {
    var d = this,
      e;
    return e;
  }
  Wz.F = "internal.addDataLayerEventListener";
  function Xz(a, b, c) {}
  Xz.P = "addDocumentEventListener";
  function Yz(a, b, c, d) {}
  Yz.P = "addElementEventListener";
  function Zz(a) {}
  Zz.P = "addEventCallback";
  function cA(a) {}
  cA.F = "internal.addFormAbandonmentListener";
  function dA(a, b, c, d) {}
  dA.F = "internal.addFormData";
  var eA = {},
    fA = [],
    gA = {},
    hA = 0,
    iA = 0;
  function pA(a, b) {}
  pA.F = "internal.addFormInteractionListener";
  function wA(a, b) {}
  wA.F = "internal.addFormSubmitListener";
  function BA(a) {}
  BA.F = "internal.addGaSendListener";
  var CA = function (a, b) {
    this.tagId = a;
    this.ue = b;
  };
  function DA(a, b, c) {
    var d = this;
    var e = T(83);
    e
      ? M(L(this), ["tagId:!string", "options:?PixieMap"], arguments)
      : M(
          L(this),
          ["tagId:!string", "firstPartyUrl:?string", "onLoad:?Fn"],
          arguments
        );
    var f = nd(b, this.h, 1) || {},
      g = e ? f.firstPartyUrl : b,
      h = e ? f.onLoad : nd(c, this.h, 1),
      m = e && !0 === f.loadByDestination,
      n = e && !0 === f.isGtmEvent,
      p = e && !0 === f.siloed;
    Vz([
      function () {
        return N(d, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (Bk(a)) return;
    } else if (Ak(a)) return;
    var q = { source: n ? 7 : 6, fromContainerExecution: !0, siloed: p };
    if (m)
      Tu(a, g, q, function (t) {
        h && h(new CA(a, t));
      });
    else {
      var r = 0 === a.indexOf("GTM-");
      Su(a, g, !r, q, function (t) {
        h && h(new CA(a, t));
      });
    }
    if (e) return p ? ok(a) : a;
  }
  DA.F = "internal.loadGoogleTag";
  function EA(a, b, c) {}
  EA.F = "internal.addGoogleTagRestriction";
  var FA = {},
    GA = [];
  var NA = function (a, b) {};
  NA.F = "internal.addHistoryChangeListener";
  function OA(a, b, c) {}
  OA.P = "addWindowEventListener";
  function PA(a, b) {
    return !0;
  }
  PA.P = "aliasInWindow";
  function QA(a, b, c) {}
  QA.F = "internal.appendRemoteConfigParameter";
  function RA() {
    var a = 2;
    return a;
  }
  function SA(a, b) {
    var c;
    return c;
  }
  SA.P = "callInWindow";
  function TA(a) {}
  TA.P = "callLater";
  function UA(a) {}
  UA.F = "callOnDomReady";
  function VA(a) {}
  VA.F = "callOnWindowLoad";
  function WA(a, b) {
    var c;
    return c;
  }
  WA.F = "internal.computeGtmParameter";
  function XA(a, b) {
    var c;
    var d = md(c, this.h, RA());
    void 0 === d && void 0 !== c && O(45);
    return d;
  }
  XA.P = "copyFromDataLayer";
  function YA(a) {
    var b = void 0;
    return b;
  }
  YA.F = "internal.copyFromDataLayerCache";
  function ZA(a) {
    var b;
    return b;
  }
  ZA.P = "copyFromWindow";
  function $A(a) {
    var b = void 0;
    return md(b, this.h, RA());
  }
  $A.F = "internal.copyKeyFromWindow";
  function aB(a, b) {
    var c;
    return c;
  }
  aB.F = "internal.copyPreHit";
  function bB(a, b) {
    var c = null,
      d = RA();
    M(L(this), ["functionPath:!string", "arrayPath:!string"], arguments);
    N(this, "access_globals", "readwrite", a);
    N(this, "access_globals", "readwrite", b);
    var e = [z, E],
      f = a.split("."),
      g = $a(f, e),
      h = f[f.length - 1];
    if (void 0 === g) throw Error("Path " + a + " does not exist.");
    var m = g[h];
    if (m && !Ea(m)) return null;
    if (m) return md(m, this.h, d);
    var n;
    m = function () {
      if (!Ea(n.push))
        throw Error("Object at " + b + " in window is not an array.");
      n.push.call(n, arguments);
    };
    g[h] = m;
    var p = b.split("."),
      q = $a(p, e),
      r = p[p.length - 1];
    if (void 0 === q) throw Error("Path " + p + " does not exist.");
    n = q[r];
    void 0 === n && ((n = []), (q[r] = n));
    c = function () {
      m.apply(m, Array.prototype.slice.call(arguments, 0));
    };
    return md(c, this.h, d);
  }
  bB.P = "createArgumentsQueue";
  function cB(a) {
    var b;
    return md(b, this.h, 1);
  }
  cB.F = "internal.createGaCommandQueue";
  function dB(a) {
    var b;
    return md(b, this.h, RA());
  }
  dB.P = "createQueue";
  function eB(a, b) {
    var c = null;
    return c;
  }
  eB.F = "internal.createRegex";
  function fB(a) {
    if (!a) return {};
    var b = a.zl;
    return av(b.type, b.index, b.name);
  }
  function gB(a) {
    return a ? { originatingEntity: fB(a) } : {};
  }
  function hB(a) {}
  hB.F = "internal.declareConsentState";
  function iB(a) {
    var b = "";
    return b;
  }
  iB.F = "internal.decodeUrlHtmlEntities";
  function jB(a, b, c) {
    var d;
    return d;
  }
  jB.F = "internal.decorateUrlWithGaCookies";
  function kB(a) {
    var b;
    return b;
  }
  kB.F = "internal.detectUserProvidedData";
  function oB(a, b) {
    return b;
  }
  oB.F = "internal.enableAutoEventOnClick";
  function tB(a, b) {
    return b;
  }
  tB.F = "internal.enableAutoEventOnElementVisibility";
  function uB() {}
  uB.F = "internal.enableAutoEventOnError";
  var vB = {},
    wB = [],
    xB = {},
    yB = 0,
    zB = 0;
  function FB(a, b) {
    var c = this;
    return b;
  }
  FB.F = "internal.enableAutoEventOnFormInteraction";
  function KB(a, b) {
    var c = this;
    return b;
  }
  KB.F = "internal.enableAutoEventOnFormSubmit";
  function PB() {
    var a = this;
  }
  PB.F = "internal.enableAutoEventOnGaSend";
  var QB = {},
    RB = [];
  function YB(a, b) {
    var c = this;
    return b;
  }
  YB.F = "internal.enableAutoEventOnHistoryChange";
  function bC(a, b) {
    var c = this;
    return b;
  }
  bC.F = "internal.enableAutoEventOnLinkClick";
  var cC, dC;
  function mC(a, b) {
    var c = this;
    return b;
  }
  mC.F = "internal.enableAutoEventOnScroll";
  function nC(a) {
    return function () {
      if (a.Bc && a.Dc >= a.Bc) a.zc && z.clearInterval(a.zc);
      else {
        a.Dc++;
        var b = Ua();
        Jx({
          event: a.eventName,
          "gtm.timerId": a.zc,
          "gtm.timerEventNumber": a.Dc,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.Bc,
          "gtm.timerStartTime": a.Ue,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Ue,
          "gtm.triggers": a.Qh,
        });
      }
    };
  }
  function oC(a, b) {
    return b;
  }
  oC.F = "internal.enableAutoEventOnTimer";
  var nc = da(["data-gtm-yt-inspected-"]),
    pC = ["www.youtube.com", "www.youtube-nocookie.com"],
    qC,
    rC = !1;
  function BC(a, b) {
    var c = this;
    return b;
  }
  BC.F = "internal.enableAutoEventOnYouTubeActivity";
  var CC;
  function DC(a) {
    var b = !1;
    return b;
  }
  DC.F = "internal.evaluateMatchingRules";
  var hD = function () {
      var a = !0;
      (im(7) && im(9) && im(10)) || (a = !1);
      return a;
    },
    iD = function () {
      var a = !0;
      (im(3) && im(4)) || (a = !1);
      return a;
    };
  function dE(a, b, c, d) {}
  dE.F = "internal.executeEventProcessor";
  function eE(a) {
    var b = void 0;
    return md(b, this.h, 1);
  }
  eE.F = "internal.executeJavascriptString";
  var fE = function (a) {
    var b;
    return b;
  };
  function gE() {
    var a = new sb();
    return a;
  }
  gE.P = "getContainerVersion";
  function hE(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  hE.P = "getCookieValues";
  function iE() {
    return mj();
  }
  iE.F = "internal.getCountryCode";
  function jE() {
    var a = [];
    return md(a);
  }
  jE.F = "internal.getDestinationIds";
  function kE(a, b) {
    var c = "";
    return c;
  }
  kE.F = "internal.getElementAttribute";
  function lE(a) {
    var b = null;
    return b;
  }
  lE.F = "internal.getElementById";
  function mE(a) {
    var b = "";
    return b;
  }
  mE.F = "internal.getElementInnerText";
  function nE(a, b) {
    var c = null;
    return c;
  }
  nE.F = "internal.getElementProperty";
  function oE(a) {
    var b;
    return b;
  }
  oE.F = "internal.getElementValue";
  function pE(a) {
    var b = 0;
    return b;
  }
  pE.F = "internal.getElementVisibilityRatio";
  function qE(a) {
    var b = null;
    return b;
  }
  qE.F = "internal.getElementsByCssSelector";
  function rE(a) {
    var b = void 0;
    return b;
  }
  rE.F = "internal.getEventData";
  var sE = {};
  sE.enableAWFledge = T(6);
  sE.enableAdsConversionValidation = T(30);
  sE.enableAdsHistoryChangeEvents = T(14);
  sE.enableAutoPiiOnPhoneAndAddress = T(42);
  sE.enableCcdPreAutoPiiDetection = T(17);
  sE.enableCloudRecommentationsErrorLogging = T(88);
  sE.enableCloudRecommentationsSchemaIngestion = T(87);
  sE.enableCloudRetailInjectPurchaseMetadata = T(86);
  sE.enableCloudRetailLogging = T(85);
  sE.enableCloudRetailPageCategories = T(25);
  sE.enableConsentDisclosureActivity = T(47);
  sE.enableDecodeUri = T(68);
  sE.enableDeferAllEnhancedMeasurement = T(49);
  sE.enableDirectTagLoadingInGoogleTag = T(79);
  sE.enableDmaConsentActivities = T(95);
  sE.enableEuidAutoMode = T(15);
  sE.enableFormSkipValidation = T(43);
  sE.enableLoadGoogleTagOptionsObject = T(83);
  sE.enableUrlDecodeEventUsage = T(60);
  sE.enableV1HistoryEventInApi = T(94);
  sE.loadContainerForGtmEventTags = T(46);
  sE.useEnableAutoEventOnFormApis = T(32);
  sE.autoPiiEligible = qj();
  function tE() {
    return md(sE);
  }
  tE.F = "internal.getFlags";
  function uE() {
    return new jd(ry);
  }
  uE.F = "internal.getHtmlId";
  function vE(a, b) {
    var c;
    return c;
  }
  vE.F = "internal.getProductSettingsParameter";
  function wE(a, b) {
    var c;
    return c;
  }
  wE.P = "getQueryParameters";
  function xE(a, b) {
    var c;
    return c;
  }
  xE.P = "getReferrerQueryParameters";
  function yE(a) {
    var b = "";
    return b;
  }
  yE.P = "getReferrerUrl";
  function zE() {
    return nj();
  }
  zE.F = "internal.getRegionCode";
  function AE(a, b) {
    var c;
    return c;
  }
  AE.F = "internal.getRemoteConfigParameter";
  function BE(a) {
    var b = "";
    return b;
  }
  BE.P = "getUrl";
  function CE() {
    N(this, "get_user_agent");
    return Dc.userAgent;
  }
  CE.P = "getUserAgent";
  function NE() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var OE = function () {
      var a = NE();
      a.hid = a.hid || Ka();
      return a.hid;
    },
    PE = function (a, b) {
      var c = NE();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var wF = function (a) {
      this.C = a;
      this.D = "";
      this.h = this.C;
    },
    xF = function (a, b) {
      a.h = b;
      return a;
    };
  function yF(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  function zF(a, b) {
    var c = a || [];
    if (Array.isArray(c)) for (var d = 0; d < c.length; d++) b(c[d]);
  }
  var OF = window,
    PF = document,
    QF = function (a) {
      var b = OF._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        PF.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === OF["ga-disable-" + a])
      )
        return !0;
      try {
        var c = OF.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Am("AMP_TOKEN", String(PF.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return PF.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function ZF(a) {
    l(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[Q.g.Ya] || {};
    l(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var gG = function (a, b) {};
  function fG(a, b) {
    var c = function () {};
    return c;
  }
  function hG(a, b, c) {}
  var iG = fG;
  function kG(a, b, c) {
    var d = this;
    M(
      L(this),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? nd(b) : {};
    Vz([
      function () {
        return N(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? nd(c) : {},
      g = this.h.h;
    f.originatingEntity = fB(g);
    tw(Rv(a, e), g.eventId, f);
  }
  kG.F = "internal.gtagConfig";
  function lG() {
    var a = {};
    return a;
  }
  function nG(a, b) {}
  nG.P = "gtagSet";
  function oG(a, b) {}
  oG.P = "injectHiddenIframe";
  function pG(a, b, c, d, e) {}
  pG.F = "internal.injectHtml";
  var tG = {};
  function vG(a, b, c, d) {}
  var wG = Object.freeze({ dl: 1, id: 1 }),
    xG = {};
  function yG(a, b, c, d) {}
  vG.P = "injectScript";
  yG.F = "internal.injectScript";
  function zG(a) {
    var b = !0;
    return b;
  }
  zG.P = "isConsentGranted";
  var AG = function () {
    var a = jh(function (b) {
      this.h.h.log("error", b);
    });
    a.P = "JSON";
    return a;
  };
  function BG(a) {
    var b = void 0;
    return md(b);
  }
  BG.F = "internal.legacyParseUrl";
  var CG = function () {
      return !1;
    },
    DG = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  function EG() {
    try {
      N(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = nd(a[b], this.h);
    console.log.apply(console, a);
  }
  EG.P = "logToConsole";
  function FG(a, b) {}
  FG.F = "internal.mergeRemoteConfig";
  function GG(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return d;
  }
  GG.F = "internal.parseCookieValuesFromString";
  function HG(a) {
    var b = void 0;
    return b;
  }
  HG.P = "parseUrl";
  function IG(a) {}
  IG.F = "internal.processAsNewEvent";
  function JG(a, b, c) {
    var d;
    return d;
  }
  JG.F = "internal.pushToDataLayer";
  function KG(a, b) {
    var c = !1;
    return c;
  }
  KG.P = "queryPermission";
  function LG() {
    var a = "";
    return a;
  }
  LG.P = "readCharacterSet";
  function MG() {
    return ni.ja;
  }
  MG.F = "internal.readDataLayerName";
  function NG() {
    var a = "";
    return a;
  }
  NG.P = "readTitle";
  function OG(a, b) {
    var c = this;
  }
  OG.F = "internal.registerCcdCallback";
  function PG(a) {
    return !0;
  }
  PG.F = "internal.registerDestination";
  var QG = Object.freeze(["config", "event", "get", "set"]);
  function RG(a, b, c) {}
  RG.F = "internal.registerGtagCommandListener";
  function SG(a, b) {
    var c = !1;
    return c;
  }
  SG.F = "internal.removeDataLayerEventListener";
  function TG(a, b) {}
  TG.F = "internal.removeFormData";
  function UG() {}
  UG.P = "resetDataLayer";
  function VG(a, b, c, d) {}
  VG.F = "internal.sendGtagEvent";
  function WG(a, b, c) {}
  WG.P = "sendPixel";
  function XG(a, b) {}
  XG.F = "internal.setAnchorHref";
  function YG(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  YG.P = "setCookie";
  function ZG(a, b) {}
  ZG.F = "internal.setCorePlatformServices";
  function $G(a) {}
  $G.P = "setDefaultConsentState";
  function aH(a, b) {}
  aH.F = "internal.setDelegatedConsentType";
  function bH(a, b) {}
  bH.F = "internal.setFormAction";
  function cH(a, b, c) {
    return !1;
  }
  cH.P = "setInWindow";
  function dH(a, b, c) {}
  dH.F = "internal.setProductSettingsParameter";
  function eH(a, b, c) {}
  eH.F = "internal.setRemoteConfigParameter";
  function fH(a, b, c, d) {
    var e = this;
  }
  fH.P = "sha256";
  function gH(a, b, c) {}
  gH.F = "internal.sortRemoteConfigParameters";
  var hH = {},
    iH = {};
  hH.P = "templateStorage";
  hH.getItem = function (a) {
    var b = null;
    return b;
  };
  hH.setItem = function (a, b) {};
  hH.removeItem = function (a) {};
  hH.clear = function () {};
  function jH(a, b) {
    var c = !1;
    return c;
  }
  jH.F = "internal.testRegex";
  var kH = function (a) {
    var b;
    return b;
  };
  function lH(a) {}
  lH.P = "updateConsentState";
  var mH;
  function nH(a, b, c) {
    mH = mH || new th();
    mH.add(a, b, c);
  }
  function oH(a, b) {
    var c = (mH = mH || new th());
    if (c.C.hasOwnProperty(a))
      throw (
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.h.hasOwnProperty(a))
      throw (
        "Attempting to add a private function with an existing API name: " +
        a +
        "."
      );
    c.C[a] = Ea(b) ? Mg(a, b) : Ng(a, b);
  }
  function pH() {
    return function (a) {
      var b;
      var c = mH;
      if (c.h.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.C.hasOwnProperty(a))) {
          var e = !1,
            f = this.h.h;
          if (f) {
            var g = f.hd();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var h = c.C.hasOwnProperty(a) ? c.C[a] : void 0;
          b = h;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  var qH = function () {
    var a = function (c) {
        return oH(c.F, c);
      },
      b = function (c) {
        return nH(c.P, c);
      };
    b(Tz);
    b(Zz);
    b(PA);
    b(SA);
    b(TA);
    b(XA);
    b(ZA);
    b(bB);
    b(AG());
    b(dB);
    b(gE);
    b(hE);
    b(wE);
    b(xE);
    b(yE);
    b(BE);
    b(nG);
    b(oG);
    b(vG);
    b(zG);
    b(EG);
    b(HG);
    b(KG);
    b(LG);
    b(NG);
    b(WG);
    b(YG);
    b($G);
    b(cH);
    b(fH);
    b(hH);
    b(lH);
    nH("Math", Sg());
    nH("Object", rh);
    nH("TestHelper", vh());
    nH("assertApi", Og);
    nH("assertThat", Pg);
    nH("decodeUri", Tg);
    nH("decodeUriComponent", Yg);
    nH("encodeUri", Zg);
    nH("encodeUriComponent", $g);
    nH("fail", fh);
    nH("generateRandom", gh);
    nH("getTimestamp", hh);
    nH("getTimestampMillis", hh);
    nH("getType", ih);
    nH("makeInteger", kh);
    nH("makeNumber", lh);
    nH("makeString", mh);
    nH("makeTableMap", nh);
    nH("mock", qh);
    nH("fromBase64", fE, !("atob" in z));
    nH("localStorage", DG, !CG());
    nH("toBase64", kH, !("btoa" in z));
    a(Wz);
    a(dA);
    a(pA);
    a(wA);
    a(BA);
    a(EA);
    a(NA);
    a(QA);
    a(UA);
    a(VA);
    a(YA);
    a($A);
    a(aB);
    a(cB);
    a(eB);
    a(hB);
    a(iB);
    a(kB);
    a(oB);
    a(tB);
    a(uB);
    a(FB);
    a(KB);
    a(PB);
    a(YB);
    a(bC);
    a(mC);
    a(oC);
    a(BC);
    a(ah);
    a(DC);
    a(dE);
    a(eE);
    a(iE);
    a(jE);
    a(kE);
    a(lE);
    a(mE);
    a(nE);
    a(oE);
    a(pE);
    a(qE);
    a(rE);
    a(tE);
    a(uE);
    a(vE);
    a(zE);
    a(AE);
    a(kG);
    a(yG);
    a(BG);
    a(DA);
    a(FG);
    a(GG);
    a(IG);
    a(JG);
    a(MG);
    a(OG);
    a(PG);
    a(RG);
    a(SG);
    a(TG);
    a(VG);
    a(XG);
    a(ZG);
    a(aH);
    a(bH);
    a(dH);
    a(eH);
    a(gH);
    a(jH);
    oH("internal.GtagSchema", lG());
    T(71) && a(pG);
    T(101) && a(jB);
    return pH();
  };
  var Rz;
  function rH() {
    Rz.h.h.N = function (a, b, c) {
      oi.SANDBOXED_JS_SEMAPHORE = oi.SANDBOXED_JS_SEMAPHORE || 0;
      oi.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        oi.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function sH(a) {
    void 0 !== a &&
      l(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Gi[e] = Gi[e] || [];
          Gi[e].push(b);
        }
      });
  }
  var tH = encodeURI,
    Y = encodeURIComponent,
    uH = function (a, b, c) {
      Nc(a, b, c);
    },
    vH = function (a, b) {
      if (!a) return !1;
      var c = Fn(Hn(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    wH = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Z = { m: {} };

  (Z.m.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.o = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
        Z.__e.isInfrastructure = !1;
        Z.__e.runInSiloedMode = !0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Z.m.f = ["google"]),
    (function () {
      (function (a) {
        Z.__f = a;
        Z.__f.o = "f";
        Z.__f.isVendorTemplate = !0;
        Z.__f.priorityOverride = 0;
        Z.__f.isInfrastructure = !1;
        Z.__f.runInSiloedMode = !1;
      })(function (a) {
        var b = fz("gtm.referrer", 1) || E.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? Fn(
                Hn(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : ez(String(b))
          : String(b);
      });
    })();
  (Z.m.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.o = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            h = 0;
          h < c.length;
          h++
        ) {
          var m = c[h],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!k(r)) throw d(p, {}, "Key must be a string.");
            if ("read" === q) {
              if (-1 < e.indexOf(r)) return;
            } else if ("write" === q) {
              if (-1 < f.indexOf(r)) return;
            } else if ("readwrite" === q) {
              if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return;
            } else if ("execute" === q) {
              if (-1 < g.indexOf(r)) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          M: a,
        };
      });
    })();
  (Z.m.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.o = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !1;
        Z.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : fz("gtm.url", 1)) || cz();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return ez(String(c));
        var e = Hn(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              h = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            g
              ? Ha(h)
                ? (n = h)
                : (n = String(h).replace(/\s+/g, "").split(","))
              : (n = [String(h)]);
            for (var p = 0; p < n.length; p++) {
              var q = Fn(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Fn(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();

  (Z.m.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Z.__load_google_tags = b;
        Z.__load_google_tags.o = "load_google_tags";
        Z.__load_google_tags.isVendorTemplate = !0;
        Z.__load_google_tags.priorityOverride = 0;
        Z.__load_google_tags.isInfrastructure = !1;
        Z.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          h = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!k(q)) throw h(m, {}, "Tag ID must be a string.");
              if ("any" !== c && ("specific" !== c || -1 === g.indexOf(q)))
                throw h(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (void 0 !== q) {
                if (!k(q)) throw h(m, {}, "First party URL must be a string.");
                if (d) {
                  if ("any" === e) return;
                  if ("specific" === e)
                    try {
                      if (Fg(Hn(q), f)) return;
                    } catch (r) {
                      throw h(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw h(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          M: a,
        };
      });
    })();

  (Z.m.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__logging = b;
        Z.__logging.o = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
        Z.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = "all" !== c && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          M: a,
        };
      });
    })();

  (Z.m.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Z.__configure_google_tags = b;
        Z.__configure_google_tags.o = "configure_google_tags";
        Z.__configure_google_tags.isVendorTemplate = !0;
        Z.__configure_google_tags.priorityOverride = 0;
        Z.__configure_google_tags.isInfrastructure = !1;
        Z.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!k(g)) throw e(f, {}, "Tag ID must be a string.");
            if ("any" !== c && ("specific" !== c || -1 === d.indexOf(g)))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          M: a,
        };
      });
    })();

  var SI = {};
  SI.dataLayer = Pi;
  SI.callback = function (a) {
    Fi.hasOwnProperty(a) && Ea(Fi[a]) && Fi[a]();
    delete Fi[a];
  };
  SI.bootstrap = 0;
  SI._spx = !1;
  function TI() {
    oi[tk()] = oi[tk()] || SI;
    zk();
    Ek() ||
      l(Fk(), function (a, b) {
        Tu(a, b.transportUrl, b.context);
        O(92);
      });
    Xa(Gi, Z.m);
    T(67) && vk(Ck());
    vf = Lf;
  }
  (function (a) {
    function b() {
      m = E.documentElement.getAttribute("data-tag-assistant-present");
      Ux(m) && (h = g.Fk);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (E.referrer) {
        var d = Hn(E.referrer);
        c = "cct.google" === En(d, "host");
      }
      if (!c) {
        var e = Em("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((z["__TAGGY_INSTALLED"] = !0),
        Kc("https://cct.google/taggy/agent.js"));
    }
    if (Ai) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          ui ? ((v = "OGT"), (w = "GTAG")) : Ai && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (z["google.tagmanager.debugui2.queue"] = x),
            Kc(
              "https://" +
                ni.yd +
                "/debug/bootstrap?id=" +
                Tf.ctid +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                hn()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Ec,
              containerProduct: v,
              debug: !1,
              id: Tf.ctid,
              targetRef: { ctid: Tf.ctid, isDestination: lk.ke },
              aliases: nk(),
              destinations: qk(),
            },
          };
          y.data.resume = function () {
            a();
          };
          ni.ek && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = { un: 1, Gk: 2, Sk: 3, gk: 4, Fk: 5 },
        h = void 0,
        m = void 0,
        n = Fn(z.location, "query", !1, void 0, "gtm_debug");
      Ux(n) && (h = g.Gk);
      if (!h && E.referrer) {
        var p = Hn(E.referrer);
        "tagassistant.google.com" === En(p, "host") && (h = g.Sk);
      }
      if (!h) {
        var q = Em("__TAG_ASSISTANT");
        q.length && q[0].length && (h = g.gk);
      }
      h || b();
      if (!h && Vx(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            h && Ec ? f(h) : a();
          },
          t = !1;
        Oc(
          E,
          "TADebugSignal",
          function () {
            r();
          },
          !1
        );
        z.setTimeout(function () {
          r();
        }, 200);
      } else h && Ec ? f(h) : a();
    }
  })(function () {
    try {
      xk();
      if (T(24)) {
      }
      vj().C();
      fm();
      var a = uk();
      if (ik().canonical[a]) {
        var b = oi.zones;
        b && b.unregisterChild(pk());
      } else {
        Qu();
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          lf.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) of.push(f[g]);
        for (var h = c.predicates || [], m = 0; m < h.length; m++)
          nf.push(h[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            ("if" !== u && "unless" !== u) || uf(r[u]);
          }
          mf.push(r);
        }
        qf = Z;
        rf = Lz;
        Nf = new Wf();
        var v = data.sandboxed_scripts,
          w = data.security_groups,
          x = data.infra;
        a: {
          var y = data.runtime || [],
            A = data.runtime_lines;
          Rz = new Ie();
          rH();
          kf = Qz();
          var B = Rz,
            D = qH(),
            F = new ed("require", D);
          F.Cb();
          B.h.h.set("require", F);
          for (var H = [], G = 0; G < y.length; G++) {
            var J = y[G];
            if (!Ha(J) || 3 > J.length) {
              if (0 === J.length) continue;
              break a;
            }
            A && A[G] && A[G].length && Ef(J, A[G]);
            try {
              Rz.execute(J), T(44) && Ok && 50 === J[0] && H.push(J[1]);
            } catch (Ug) {}
          }
          T(44) && (wf = H);
        }
        if (void 0 !== v)
          for (var P = ["sandboxedScripts"], U = 0; U < v.length; U++) {
            var ja = v[U].replace(/^_*/, "");
            Gi[ja] = P;
          }
        sH(w);
        if (void 0 !== x) for (var X = 0; X < x.length; X++) Hi[x[X]] = !0;
        TI();
        if (T(35) && !Ai) {
          for (
            var S = lj["7"], ma = S ? S.split("|") : [], fa = {}, ca = 0;
            ca < ma.length;
            ca++
          )
            fa[ma[ca]] = !0;
          for (var Ia = 0; Ia < Uj.length; Ia++) {
            var wa = Uj[Ia],
              Fa = fa[wa] ? "granted" : "denied";
            Cj().implicit(wa, Fa);
          }
        }
        Tx();
        Uu = !1;
        Vu = 0;
        if (
          ("interactive" == E.readyState && !E.createEventObject) ||
          "complete" == E.readyState
        )
          Xu();
        else {
          Oc(E, "DOMContentLoaded", Xu);
          Oc(E, "readystatechange", Xu);
          if (E.createEventObject && E.documentElement.doScroll) {
            var Qa = !0;
            try {
              Qa = !z.frameElement;
            } catch (Ug) {}
            Qa && Yu();
          }
          Oc(z, "load", Xu);
        }
        hx = !1;
        "complete" === E.readyState ? jx() : Oc(z, "load", jx);
        Ok && (Jk(al), z.setInterval($k, 864e5));
        Jk(Nz);
        Jk(xv);
        Jk(ot);
        Jk(cq);
        Jk(Iv);
        Jk(Tp);
        Jk(kn);
        Jk(Rp);
        Jk(Ev);
        T(44) && Jk(Av);
        py();
        kj(1);
        Ew();
        Ei = Ua();
        SI.bootstrap = Ei;
        if (T(24)) {
        }
      }
    } catch (Ug) {
      if ((kj(4), Ok)) {
        var Xd = Vk(!0, !0);
        Nc(Xd);
      }
    }
  });
})();
