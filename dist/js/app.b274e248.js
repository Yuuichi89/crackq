(function (t) {
  function e(e) {
    for (
      var a, i, n = e[0], d = e[1], l = e[2], m = 0, u = [];
      m < n.length;
      m++
    )
      (i = n[m]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && u.push(r[i][0]),
        (r[i] = 0);
    for (a in d) Object.prototype.hasOwnProperty.call(d, a) && (t[a] = d[a]);
    c && c(e);
    while (u.length) u.shift()();
    return o.push.apply(o, l || []), s();
  }
  function s() {
    for (var t, e = 0; e < o.length; e++) {
      for (var s = o[e], a = !0, n = 1; n < s.length; n++) {
        var d = s[n];
        0 !== r[d] && (a = !1);
      }
      a && (o.splice(e--, 1), (t = i((i.s = s[0]))));
    }
    return t;
  }
  var a = {},
    r = { app: 0 },
    o = [];
  function i(e) {
    if (a[e]) return a[e].exports;
    var s = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
  }
  (i.m = t),
    (i.c = a),
    (i.d = function (t, e, s) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (i.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (i.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          i.d(
            s,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return s;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = "/");
  var n = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var l = 0; l < n.length; l++) e(n[l]);
  var c = d;
  o.push([0, "chunk-vendors"]), s();
})({
  0: function (t, e, s) {
    t.exports = s("56d7");
  },
  "034f": function (t, e, s) {
    "use strict";
    var a = s("85ec"),
      r = s.n(a);
    r.a;
  },
  "039a": function (t, e, s) {
    "use strict";
    var a = s("7174"),
      r = s.n(a);
    r.a;
  },
  1136: function (t, e, s) {},
  "18b2": function (t, e, s) {},
  "1be2": function (t, e, s) {
    "use strict";
    var a = s("faf5"),
      r = s.n(a);
    r.a;
  },
  "2b21": function (t, e, s) {
    "use strict";
    var a = s("1136"),
      r = s.n(a);
    r.a;
  },
  4678: function (t, e, s) {
    var a = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc10",
      "./be.js": "1fc10",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function r(t) {
      var e = o(t);
      return s(e);
    }
    function o(t) {
      if (!s.o(a, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return a[t];
    }
    (r.keys = function () {
      return Object.keys(a);
    }),
      (r.resolve = o),
      (t.exports = r),
      (r.id = "4678");
  },
  "4cb2": function (t, e, s) {
    "use strict";
    var a = s("d828"),
      r = s.n(a);
    r.a;
  },
  "56d7": function (t, e, s) {
    "use strict";
    s.r(e);
    s("e623"), s("e379"), s("5dc8"), s("37e1"), s("845f");
    var a,
      r,
      o,
      i,
      n,
      d,
      l = s("5f5b"),
      c = s("8e5f"),
      m = s.n(c),
      u = s("2b0e"),
      b = s("5886"),
      h = s("1dce"),
      f = s.n(h),
      p = s("bc3a"),
      v = s.n(p),
      g = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { attrs: { id: "app" } }, [s("router-view")], 1);
      },
      _ = [],
      w = (s("034f"), s("2877")),
      k = {},
      C = Object(w["a"])(k, g, _, !1, null, null, null),
      y = C.exports,
      j = s("8c4f"),
      x = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { attrs: { margin: "0" } }, [
          a(
            "div",
            {
              staticClass: "container",
              staticStyle: { "font-size": "0.9rem" },
            },
            [
              a("div", { staticClass: "row" }, [
                a(
                  "div",
                  { staticClass: "col-sm-16" },
                  [
                    a(
                      "b-navbar",
                      { attrs: { toggleable: "lg", type: "dark" } },
                      [
                        a("b-navbar-brand", [
                          a("img", { attrs: { src: s("e3cf") } }),
                        ]),
                        a("showProfile"),
                        a("showAdmin"),
                        a("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" },
                        }),
                        a(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            a(
                              "b-navbar-nav",
                              [
                                a("b-nav-item", { attrs: { href: "/" } }, [
                                  t._v("Home"),
                                ]),
                                a(
                                  "b-nav-item",
                                  { attrs: { href: "/queues" } },
                                  [t._v("Queues")]
                                ),
                                a(
                                  "b-nav-item",
                                  { attrs: { href: "/complete" } },
                                  [t._v("Complete")]
                                ),
                                a(
                                  "b-nav-item",
                                  { attrs: { href: "/failed" } },
                                  [t._v("Failed")]
                                ),
                                a(
                                  "b-nav-item",
                                  { attrs: { href: "/reports" } },
                                  [t._v("Reports")]
                                ),
                                a(
                                  "b-nav-item",
                                  { attrs: { href: "/benchmarks" } },
                                  [t._v("Benchmarks")]
                                ),
                                a(
                                  "b-nav-item-dropdown",
                                  { attrs: { text: "User", right: "" } },
                                  [
                                    a(
                                      "b-dropdown-item",
                                      { on: { click: t.showProf } },
                                      [t._v("Profile")]
                                    ),
                                    a(
                                      "b-dropdown-item",
                                      { on: { click: t.showAdmin } },
                                      [t._v("Admin")]
                                    ),
                                    a(
                                      "b-dropdown-item",
                                      { attrs: { href: "/login" } },
                                      [t._v("Login")]
                                    ),
                                    a(
                                      "b-dropdown-item",
                                      { attrs: { href: "/logout" } },
                                      [t._v("Logout")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    a("br"),
                    a(
                      "div",
                      { attrs: { align: "center" } },
                      [
                        a(
                          "b-card-group",
                          {
                            staticStyle: {
                              "max-height": "10rem",
                              align: "center",
                            },
                            attrs: { deck: "" },
                          },
                          [
                            a(
                              "b-card",
                              {
                                staticStyle: {
                                  "min-width": "10rem",
                                  "max-height": "8rem",
                                  "max-width": "12rem",
                                },
                                attrs: {
                                  align: "center",
                                  "bg-variant": "secondary",
                                },
                              },
                              [
                                a(
                                  "div",
                                  {
                                    staticClass: "border border-success",
                                    staticStyle: { "border-radius": "0.3rem" },
                                  },
                                  [
                                    a(
                                      "b-button-group",
                                      {
                                        staticClass: "btn-block",
                                        staticStyle: {
                                          "border-radius": "0.3rem",
                                        },
                                        attrs: { vertical: "" },
                                      },
                                      [
                                        a(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-modal",
                                                rawName: "v-b-modal.job-modal",
                                                modifiers: { "job-modal": !0 },
                                              },
                                            ],
                                            staticClass:
                                              "btn btn-primary btn-sm",
                                            attrs: { active: "" },
                                          },
                                          [t._v(" Add Job ")]
                                        ),
                                        a(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary btn-sm",
                                            on: {
                                              click: function (e) {
                                                return t.customAlert(
                                                  "Feature not implemented",
                                                  "error"
                                                );
                                              },
                                            },
                                          },
                                          [t._v(" Add Task ")]
                                        ),
                                        a(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary btn-sm",
                                            on: {
                                              click: function (e) {
                                                return t.customAlert(
                                                  "Feature not implemented",
                                                  "error"
                                                );
                                              },
                                            },
                                          },
                                          [t._v(" Auto-crack ")]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            a(
                              "b-card",
                              {
                                staticStyle: {
                                  "min-width": "4rem",
                                  "max-height": "8rem",
                                  "max-width": "10rem",
                                  "margin-left": "0",
                                },
                                attrs: {
                                  "border-variant": "secondary",
                                  "bg-variant": "secondary",
                                },
                              },
                              [
                                a(
                                  "div",
                                  {
                                    staticStyle: { "font-size": "0.8rem" },
                                    attrs: { slot: "header" },
                                    slot: "header",
                                  },
                                  [
                                    a("small", { staticClass: "text-muted" }, [
                                      t._v("CrackQ Status"),
                                    ]),
                                  ]
                                ),
                                t.queue
                                  ? a("div", { staticClass: "text-muted" }, [
                                      "object" ==
                                        typeof t.queue["Current Job"] &&
                                      Object.keys(t.queue["Current Job"])
                                        .length >= 1
                                        ? a(
                                            "td",
                                            { staticClass: "text-danger" },
                                            [t._v(" Busy")]
                                          )
                                        : a(
                                            "td",
                                            { staticClass: "text-success" },
                                            [t._v(" Idle")]
                                          ),
                                      a("td", [
                                        t._v(
                                          t._s(t.queue["Current Job"].length)
                                        ),
                                      ]),
                                    ])
                                  : t._e(),
                              ]
                            ),
                            a(
                              "b-card",
                              {
                                staticStyle: {
                                  "min-width": "5rem",
                                  "max-height": "8rem",
                                  "max-width": "10rem",
                                  "margin-left": "0",
                                },
                                attrs: {
                                  "border-variant": "secondary",
                                  "bg-variant": "secondary",
                                },
                              },
                              [
                                a(
                                  "div",
                                  {
                                    staticStyle: { "font-size": "0.8rem" },
                                    attrs: { slot: "header" },
                                    slot: "header",
                                  },
                                  [
                                    a(
                                      "small",
                                      {
                                        staticClass: "text-muted",
                                        attrs: { type: "dark" },
                                      },
                                      [t._v("Queue Size")]
                                    ),
                                  ]
                                ),
                                a(
                                  "div",
                                  { staticClass: "text-muted shadow-lg" },
                                  [
                                    t.queue["Queue Size"] >= 0
                                      ? a("td", [
                                          t._v(
                                            " " +
                                              t._s(t.queue["Queue Size"]) +
                                              " "
                                          ),
                                        ])
                                      : a("td", [t._v("0")]),
                                  ]
                                ),
                              ]
                            ),
                            a(
                              "b-card",
                              {
                                staticStyle: {
                                  "min-width": "5rem",
                                  "max-height": "8rem",
                                  "max-width": "10rem",
                                  "margin-left": "0",
                                },
                                attrs: {
                                  "border-variant": "secondary",
                                  "bg-variant": "secondary",
                                },
                              },
                              [
                                a(
                                  "div",
                                  {
                                    staticStyle: { "font-size": "0.8rem" },
                                    attrs: { slot: "header" },
                                    slot: "header",
                                  },
                                  [
                                    a("small", { staticClass: "text-muted" }, [
                                      t._v("Connection"),
                                    ]),
                                  ]
                                ),
                                a("div", { staticClass: "text-success" }, [
                                  t.connected
                                    ? a("td", [t._v(" OK")])
                                    : a("td", { staticClass: "text-danger" }, [
                                        t._v(" Not Connected!"),
                                      ]),
                                ]),
                              ]
                            ),
                            a(
                              "b-card",
                              {
                                staticStyle: {
                                  "min-width": "11rem",
                                  "max-height": "8rem",
                                  "max-width": "10rem",
                                  "margin-left": "0",
                                },
                                attrs: {
                                  "border-variant": "secondary",
                                  "bg-variant": "secondary",
                                },
                              },
                              [
                                a(
                                  "div",
                                  {
                                    staticStyle: { "font-size": "0.8rem" },
                                    attrs: { slot: "header" },
                                    slot: "header",
                                  },
                                  [
                                    a("small", { staticClass: "text-muted" }, [
                                      t._v("Brain Activity"),
                                    ]),
                                  ]
                                ),
                                t.queue
                                  ? a("div", { staticClass: "text-muted" }, [
                                      "object" ==
                                        typeof t.queue["Current Job"] &&
                                      Object.keys(t.queue["Current Job"])
                                        .length >= 1
                                        ? a(
                                            "td",
                                            t._l(
                                              t.queue["Current Job"],
                                              function (e, s) {
                                                return a("tr", { key: s }, [
                                                  e.State["HC State"]
                                                    ? a(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-success",
                                                        },
                                                        [
                                                          t._v(" RX: "),
                                                          a("br"),
                                                          t._v(
                                                            t._s(
                                                              e.State[
                                                                "HC State"
                                                              ][
                                                                "Brain Traffic (RX)"
                                                              ]
                                                            ) + " "
                                                          ),
                                                        ]
                                                      )
                                                    : a(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-success",
                                                        },
                                                        [t._v(" RX: 0 ")]
                                                      ),
                                                  a("td", [t._v(" | ")]),
                                                  e.State["HC State"]
                                                    ? a(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          t._v(" TX: "),
                                                          a("br"),
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                e.State[
                                                                  "HC State"
                                                                ][
                                                                  "Brain Traffic (TX)"
                                                                ]
                                                              ) +
                                                              " "
                                                          ),
                                                        ]
                                                      )
                                                    : a(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [t._v(" TX: 0 ")]
                                                      ),
                                                ]);
                                              }
                                            ),
                                            0
                                          )
                                        : a("td", [t._v("0")]),
                                    ])
                                  : t._e(),
                              ]
                            ),
                            a(
                              "b-card",
                              {
                                staticStyle: {
                                  "min-width": "9rem",
                                  "max-height": "8rem",
                                  "max-width": "16rem",
                                  "margin-left": "0",
                                },
                                attrs: {
                                  "border-variant": "secondary",
                                  "bg-variant": "secondary",
                                },
                              },
                              [
                                a(
                                  "div",
                                  {
                                    staticStyle: { "font-size": "0.8rem" },
                                    attrs: { slot: "header" },
                                    slot: "header",
                                  },
                                  [
                                    a("small", { staticClass: "text-muted" }, [
                                      t._v("Last Completed"),
                                    ]),
                                  ]
                                ),
                                a(
                                  "div",
                                  {
                                    staticStyle: {
                                      overflow: "hidden",
                                      margin: "0",
                                    },
                                    attrs: { align: "center" },
                                  },
                                  [
                                    a(
                                      "b-table",
                                      {
                                        staticStyle: {
                                          align: "center",
                                          margin: "0",
                                        },
                                        attrs: {
                                          align: "center",
                                          "thead-class": "d-none",
                                          "tbody-class": "text-muted",
                                          borderless: "",
                                          fields: t.jobFilter,
                                          items: t.lastCompItems,
                                          small: "",
                                        },
                                        on: { "row-clicked": t.showModal },
                                      },
                                      [
                                        a("showDetails", {
                                          attrs: { jobID: t.jobid },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    a("br"),
                    a("div", { attrs: { align: "center" } }, [
                      a(
                        "tr",
                        [
                          a(
                            "b-card-group",
                            {
                              staticStyle: {
                                "min-width": "60rem max-height: 40rem",
                              },
                              attrs: { deck: "" },
                            },
                            [
                              a(
                                "b-card",
                                {
                                  attrs: {
                                    "border-variant": "secondary",
                                    "bg-variant": "secondary",
                                  },
                                },
                                [
                                  a(
                                    "div",
                                    {
                                      attrs: { slot: "header" },
                                      slot: "header",
                                    },
                                    [
                                      a(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [t._v(" Current Job Speed (h/s) ")]
                                      ),
                                    ]
                                  ),
                                  a("lineGraph", {
                                    attrs: {
                                      chartData: t.speed_data,
                                      options: t.lg_options,
                                    },
                                  }),
                                  a(
                                    "div",
                                    {
                                      attrs: { slot: "footer" },
                                      slot: "footer",
                                    },
                                    [
                                      a(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [
                                          t._v(
                                            "Last updated at: " +
                                              t._s(this.time)
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              a(
                                "b-card",
                                {
                                  attrs: {
                                    "border-variant": "secondary",
                                    "bg-variant": "secondary",
                                  },
                                },
                                [
                                  a(
                                    "div",
                                    {
                                      attrs: { slot: "header" },
                                      slot: "header",
                                    },
                                    [
                                      a(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [
                                          t._v(
                                            " Current Job Progress & Cracked % "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  a("donGraph", {
                                    attrs: {
                                      chartData: t.multi_data,
                                      options: t.dg_options,
                                    },
                                  }),
                                  a(
                                    "div",
                                    {
                                      attrs: { slot: "footer" },
                                      slot: "footer",
                                    },
                                    [
                                      a(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [
                                          t._v(
                                            "Last updated at: " +
                                              t._s(this.time)
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              a(
                                "b-card",
                                {
                                  attrs: {
                                    "border-variant": "secondary",
                                    "bg-variant": "secondary",
                                  },
                                },
                                [
                                  a(
                                    "div",
                                    {
                                      attrs: { slot: "header" },
                                      slot: "header",
                                    },
                                    [
                                      a(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [t._v(" GPU Device Temperature C ")]
                                      ),
                                    ]
                                  ),
                                  a("barGraph", {
                                    attrs: {
                                      chartData: t.temp_data,
                                      options: t.bg_options,
                                    },
                                  }),
                                  a(
                                    "div",
                                    {
                                      attrs: { slot: "footer" },
                                      slot: "footer",
                                    },
                                    [
                                      a(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [
                                          t._v(
                                            "Last updated at: " +
                                              t._s(this.time)
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                    a("br"),
                    a(
                      "div",
                      [
                        a(
                          "b-card",
                          {
                            staticClass: "text-center",
                            attrs: {
                              "border-variant": "secondary",
                              "bg-variant": "secondary",
                            },
                          },
                          [
                            a(
                              "div",
                              { attrs: { slot: "header" }, slot: "header" },
                              [
                                a("small", { staticClass: "text-muted" }, [
                                  t._v("Current Job"),
                                ]),
                              ]
                            ),
                            a("div", { staticClass: "text-muted" }, [
                              a(
                                "table",
                                {
                                  staticClass:
                                    "table-sm table-striped text-muted",
                                },
                                [
                                  a("thead", [
                                    a("tr", [
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Job ID"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Job Name"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Status"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Total Hashes"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Cracked Hashes"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Speed"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Progress"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("ETA"),
                                      ]),
                                      a("th"),
                                    ]),
                                  ]),
                                  t.queue["Current Job"]
                                    ? a(
                                        "tbody",
                                        [
                                          a("showDetails", {
                                            attrs: { jobID: t.jobid },
                                          }),
                                          t._l(
                                            t.queue["Current Job"],
                                            function (e, s) {
                                              return a(
                                                "tr",
                                                {
                                                  key: s,
                                                  on: {
                                                    click: function (e) {
                                                      return t.showMoodal(s);
                                                    },
                                                  },
                                                },
                                                [
                                                  a("td", [t._v(t._s(s))]),
                                                  e["Job Details"]
                                                    ? a("td", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              e["Job Details"]
                                                                .name
                                                            )
                                                        ),
                                                      ])
                                                    : a("td", [
                                                        t._v("Initializing..."),
                                                      ]),
                                                  e["Job Details"]
                                                    ? a("td", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              e.State[
                                                                "HC State"
                                                              ]["HC Status"]
                                                            )
                                                        ),
                                                      ])
                                                    : a("td", [
                                                        t._v("Initializing..."),
                                                      ]),
                                                  e["Job Details"]
                                                    ? a("td", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              e.State[
                                                                "HC State"
                                                              ]["Total Hashes"]
                                                            )
                                                        ),
                                                      ])
                                                    : a("td", [t._v("None")]),
                                                  e["Job Details"]
                                                    ? a("td", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              e.State[
                                                                "HC State"
                                                              ][
                                                                "Cracked Hashes"
                                                              ]
                                                            )
                                                        ),
                                                      ])
                                                    : a("td", [t._v("None")]),
                                                  e.State["HC State"]
                                                    ? a("td", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              e.State[
                                                                "HC State"
                                                              ]["Speed All"]
                                                            )
                                                        ),
                                                      ])
                                                    : a("td", [t._v("None")]),
                                                  e.State["HC State"]
                                                    ? a("td", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              e.State[
                                                                "HC State"
                                                              ]["Progress"]
                                                            ) +
                                                            " %"
                                                        ),
                                                      ])
                                                    : a("td", [t._v("None")]),
                                                  e.State["HC State"]
                                                    ? a("td", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              e.State[
                                                                "HC State"
                                                              ][
                                                                "ETA (Relative)"
                                                              ]
                                                            )
                                                        ),
                                                      ])
                                                    : a("td", [t._v("None")]),
                                                ]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      )
                                    : t._e(),
                                ]
                              ),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                    a("br"),
                  ],
                  1
                ),
              ]),
              a(
                "b-modal",
                {
                  ref: "addJobModal",
                  attrs: {
                    id: "job-modal",
                    dark: "",
                    title: "Add a new job",
                    "header-class": "header",
                    "body-class": "crackq",
                    "hide-header": "",
                    "hide-footer": "",
                  },
                },
                [
                  a(
                    "b-form",
                    {
                      staticClass: "w-100",
                      on: {
                        reset: t.onReset,
                        submit: function (e) {
                          return e.preventDefault(), t.onSubmit(e);
                        },
                      },
                    },
                    [
                      a(
                        "b-form-group",
                        {
                          attrs: {
                            id: "form-name-group",
                            label: "Job Name:",
                            "label-for": "form-name-input",
                          },
                        },
                        [
                          a("b-form-input", {
                            attrs: {
                              id: "form-name-input",
                              name: "form-name-input",
                              state: t.$v.addJobForm.name.$dirty
                                ? !t.$v.addJobForm.name.$error
                                : null,
                              "aria-describedby": "name-live-feedback",
                            },
                            on: { input: t.$v.addJobForm.$touch },
                            model: {
                              value: t.addJobForm.name,
                              callback: function (e) {
                                t.$set(t.addJobForm, "name", e);
                              },
                              expression: "addJobForm.name",
                            },
                          }),
                          a(
                            "b-form-invalid-feedback",
                            { attrs: { id: "name-live-feedback" } },
                            [
                              t._v(
                                " Invalid Input: [A-Za-z0-9_] only. Min length of 3 and max 40 "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      a(
                        "b-form-group",
                        {
                          attrs: {
                            id: "form-attack-group",
                            label: "Attack Mode:",
                            "label-for": "form-attack-input",
                          },
                        },
                        [
                          a("b-form-select", {
                            attrs: {
                              id: "form-attack-input",
                              options: t.options["Attack Modes"],
                              required: "",
                              placeholder: "Enter Attack Mode",
                            },
                            model: {
                              value: t.addJobForm.attack_mode,
                              callback: function (e) {
                                t.$set(t.addJobForm, "attack_mode", e);
                              },
                              expression: "addJobForm.attack_mode",
                            },
                          }),
                          a("div", { staticClass: "mt-3" }, [
                            t._v("Selected: "),
                            a("strong", [t._v(t._s(t.addJobForm.attack_mode))]),
                          ]),
                        ],
                        1
                      ),
                      a(
                        "div",
                        [
                          a("label", { staticClass: "secondary" }, [
                            t._v("Hash Mode:"),
                          ]),
                          a("multiselect", {
                            staticClass: "primary-text",
                            attrs: {
                              placeholder: "Type to search",
                              "track-by": "name",
                              label: "name",
                              required: "",
                              options: t.hashModes,
                            },
                            model: {
                              value: t.addJobForm.hash_mode,
                              callback: function (e) {
                                t.$set(t.addJobForm, "hash_mode", e);
                              },
                              expression: "addJobForm.hash_mode",
                            },
                          }),
                        ],
                        1
                      ),
                      a("div", { staticClass: "mt-3" }, [
                        t._v("Selected: "),
                        a("strong", [t._v(t._s(t.addJobForm.hash_mode.id))]),
                      ]),
                      a("br"),
                      a(
                        "b-form-group",
                        {
                          attrs: {
                            id: "form-hashfile-group",
                            label: "Hash File:",
                            "label-for": "form-hashfile-input",
                          },
                        },
                        [
                          a("input", {
                            ref: "file",
                            attrs: {
                              id: "form-hashfile-input",
                              type: "file",
                              required: "",
                              placeholder: "Enter Hash File Path",
                            },
                            on: { change: t.selectedFile },
                          }),
                        ]
                      ),
                      a(
                        "b-form-group",
                        {
                          attrs: {
                            id: "form-wordlist-group",
                            label: "Wordlist:",
                            "label-for": "form-wordlist-input",
                          },
                        },
                        [
                          a("b-form-select", {
                            attrs: {
                              id: "form-wordlist-input",
                              options: t.options.Wordlists,
                              placeholder: "Wordlist",
                            },
                            model: {
                              value: t.selected_word,
                              callback: function (e) {
                                t.selected_word = e;
                              },
                              expression: "selected_word",
                            },
                          }),
                          a("div", { staticClass: "mt-3" }, [
                            t._v("Selected: "),
                            a("strong", [t._v(t._s(t.selected_word))]),
                          ]),
                        ],
                        1
                      ),
                      a(
                        "b-form-group",
                        {
                          attrs: {
                            id: "form-rules-group",
                            label: "Rules:",
                            "label-for": "form-rules-input",
                          },
                        },
                        [
                          a("b-form-select", {
                            attrs: {
                              id: "form-rules-input",
                              options: t.options.Rules,
                              multiple: "",
                              "select-size": 3,
                              placeholder: "Rules",
                            },
                            model: {
                              value: t.selected_rules,
                              callback: function (e) {
                                t.selected_rules = e;
                              },
                              expression: "selected_rules",
                            },
                          }),
                          a("div", { staticClass: "mt-3" }, [
                            t._v("Selected: "),
                            a("strong", [t._v(t._s(t.selected_rules))]),
                          ]),
                        ],
                        1
                      ),
                      a(
                        "b-form-group",
                        {
                          attrs: {
                            id: "form-maskfile-group",
                            label: "Mask File:",
                            "label-for": "form-maskfile-input",
                          },
                        },
                        [
                          a("b-form-select", {
                            attrs: {
                              id: "form-maskfile-input",
                              options: t.options["Mask Files"],
                              multiple: "",
                              "select-size": 1,
                              placeholder: "Select Mask File for Brute Mode",
                            },
                            model: {
                              value: t.selected_maskfile,
                              callback: function (e) {
                                t.selected_maskfile = e;
                              },
                              expression: "selected_maskfile",
                            },
                          }),
                          a("div", { staticClass: "mt-3" }, [
                            t._v("Selected: "),
                            a("strong", [t._v(t._s(t.selected_maskfile))]),
                          ]),
                        ],
                        1
                      ),
                      a(
                        "b-form-group",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover",
                              value:
                                "Custom character sets: ?1 = ?l?d, ?2 = ?l?d?u, ?3 = ?l?d?s",
                              expression:
                                "'Custom character sets: ?1 = ?l?d, ?2 = ?l?d?u, ?3 = ?l?d?s'",
                              modifiers: { hover: !0 },
                            },
                          ],
                          attrs: {
                            id: "form-mask-group",
                            label: "Custom Mask:",
                            "label-for": "form-mask-input",
                          },
                        },
                        [
                          a("b-form-input", {
                            attrs: {
                              id: "form-name-input",
                              type: "text",
                              placeholder: "Enter Mask For Brute Mode",
                            },
                            model: {
                              value: t.addJobForm.mask,
                              callback: function (e) {
                                t.$set(t.addJobForm, "mask", e);
                              },
                              expression: "addJobForm.mask",
                            },
                          }),
                        ],
                        1
                      ),
                      a(
                        "b-form-group",
                        { attrs: { id: "form-options-group" } },
                        [
                          a(
                            "b-form-checkbox",
                            {
                              attrs: { switch: "" },
                              model: {
                                value: t.addJobForm.username,
                                callback: function (e) {
                                  t.$set(t.addJobForm, "username", e);
                                },
                                expression: "addJobForm.username",
                              },
                            },
                            [t._v(" Show usernames ")]
                          ),
                          a(
                            "b-form-checkbox",
                            {
                              attrs: { switch: "" },
                              model: {
                                value: t.addJobForm.notify,
                                callback: function (e) {
                                  t.$set(t.addJobForm, "notify", e);
                                },
                                expression: "addJobForm.notify",
                              },
                            },
                            [t._v(" Send notification email ")]
                          ),
                          a(
                            "b-form-checkbox",
                            {
                              attrs: { switch: "" },
                              model: {
                                value: t.addJobForm.increment,
                                callback: function (e) {
                                  t.$set(t.addJobForm, "increment", e);
                                },
                                expression: "addJobForm.increment",
                              },
                            },
                            [t._v(" Increment ")]
                          ),
                          a(
                            "b-form-checkbox",
                            {
                              attrs: { switch: "" },
                              model: {
                                value: t.addJobForm.brain,
                                callback: function (e) {
                                  t.$set(t.addJobForm, "brain", e);
                                },
                                expression: "addJobForm.brain",
                              },
                            },
                            [t._v(" Disable brain ")]
                          ),
                          t.addJobForm.increment
                            ? a(
                                "div",
                                { staticClass: "container" },
                                [
                                  a("label", { attrs: { for: "incmin" } }, [
                                    t._v("Increment Min"),
                                  ]),
                                  a("b-form-spinbutton", {
                                    staticStyle: { width: "7rem" },
                                    attrs: {
                                      id: "incmin",
                                      name: "min",
                                      min: "1",
                                      max: "20",
                                      size: "sm",
                                      small: "",
                                    },
                                    model: {
                                      value: t.addJobForm.incmin,
                                      callback: function (e) {
                                        t.$set(t.addJobForm, "incmin", e);
                                      },
                                      expression: "addJobForm.incmin",
                                    },
                                  }),
                                  a("label", { attrs: { for: "incmax" } }, [
                                    t._v("Increment Max"),
                                  ]),
                                  a("b-form-spinbutton", {
                                    staticStyle: { width: "7rem" },
                                    attrs: {
                                      id: "incmax",
                                      name: "max",
                                      min: "1",
                                      max: "20",
                                      size: "sm",
                                      small: "",
                                    },
                                    model: {
                                      value: t.addJobForm.incmax,
                                      callback: function (e) {
                                        t.$set(t.addJobForm, "incmax", e);
                                      },
                                      expression: "addJobForm.incmax",
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ],
                        1
                      ),
                      a(
                        "div",
                        { attrs: { align: "center" } },
                        [
                          a("b-button-group", [
                            a(
                              "button",
                              {
                                staticClass: "text-dark btn-primary btn-sm",
                                attrs: { type: "submit" },
                              },
                              [t._v(" Submit ")]
                            ),
                            a(
                              "button",
                              {
                                staticClass: "btn-secondary btn-sm",
                                attrs: { type: "reset" },
                              },
                              [t._v(" Reset ")]
                            ),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]);
      },
      A = [],
      S =
        (s("99af"),
        s("d81d"),
        s("a434"),
        s("b0c0"),
        s("b64b"),
        s("ac1f"),
        s("1276"),
        s("53ca")),
      F = s("b5ae"),
      J = s("1fca"),
      D = {
        extends: J["c"],
        mixins: [J["d"].reactiveProp],
        props: ["chartData", "options"],
        mounted: function () {
          this.renderChart(this.chartData, this.options);
        },
      },
      q = D,
      E = Object(w["a"])(q, a, r, !1, null, null, null),
      P = E.exports,
      O = {
        extends: J["b"],
        mixins: [J["d"].reactiveProp],
        props: ["chartData", "options"],
        mounted: function () {
          this.renderChart(this.chartData, this.options);
        },
      },
      B = O,
      M = Object(w["a"])(B, o, i, !1, null, null, null),
      H = M.exports,
      R = {
        extends: J["a"],
        mixins: [J["d"].reactiveProp],
        props: ["chartData", "options"],
        mounted: function () {
          this.renderChart(this.chartData, this.options);
        },
      },
      L = R,
      U = Object(w["a"])(L, n, d, !1, null, null, null),
      N = U.exports,
      $ = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          [
            s(
              "b-modal",
              {
                ref: "detailsModal",
                attrs: {
                  id: "details-modal",
                  title: "Job Details",
                  "header-class": "header",
                  "body-class": "crackq",
                  "hide-header": "",
                  "hide-footer": "",
                },
                on: {
                  shown: function (e) {
                    return t.getJob(t.jobID);
                  },
                  hide: t.clearCache,
                },
              },
              [
                s(
                  "b-tabs",
                  { attrs: { "content-class": "mt-1", fill: "" } },
                  [
                    s("b-tab", { attrs: { title: "Cracked" } }, [
                      t.job_details.Cracked
                        ? s(
                            "td",
                            { attrs: { width: "500px" } },
                            [
                              t.cracked
                                ? s("b-textarea", {
                                    attrs: { readonly: "", rows: "20" },
                                    model: {
                                      value: t.cracked,
                                      callback: function (e) {
                                        t.cracked = e;
                                      },
                                      expression: "cracked",
                                    },
                                  })
                                : t._e(),
                            ],
                            1
                          )
                        : 401 == t.job_details
                        ? s("td", [t._v("Unauthorized ")])
                        : 500 == t.job_details
                        ? s("td", [t._v("Error ")])
                        : t.loading
                        ? s(
                            "td",
                            [s("b-spinner", { attrs: { align: "center" } })],
                            1
                          )
                        : t._e(),
                    ]),
                    s("b-tab", { attrs: { title: "Job Details" } }, [
                      s("table", [
                        401 == t.job_details
                          ? s("td", [t._v("Unauthorized ")])
                          : t.job_details.State || t.job_details["HC State"]
                          ? s(
                              "td",
                              { attrs: { width: "500px" } },
                              t._l(t.job_details, function (e, a) {
                                return s("tr", { key: a }, [
                                  "HC State" == a && "Initializing" == e
                                    ? s("td", [
                                        t._v(
                                          " " + t._s(a) + ": " + t._s(e) + " "
                                        ),
                                      ])
                                    : "HC State" == a && "Initializing" != e
                                    ? s(
                                        "td",
                                        t._l(e, function (e, a) {
                                          return s("tr", { key: a }, [
                                            "HC State" != a &&
                                            "Speed Array" != a
                                              ? s("td", [
                                                  t._v(
                                                    " " +
                                                      t._s(a) +
                                                      ": " +
                                                      t._s(e) +
                                                      " "
                                                  ),
                                                ])
                                              : t._e(),
                                          ]);
                                        }),
                                        0
                                      )
                                    : "State" != a &&
                                      "HC State" != a &&
                                      "Job Details" != a &&
                                      "Cracked" != a
                                    ? s("td", [
                                        t._v(
                                          " " + t._s(a) + ": " + t._s(e) + " "
                                        ),
                                      ])
                                    : "Cracked" != a
                                    ? s(
                                        "td",
                                        t._l(e, function (e, a) {
                                          return s("tr", { key: a }, [
                                            "HC State" != a
                                              ? s("td", [
                                                  t._v(
                                                    " " +
                                                      t._s(a) +
                                                      ": " +
                                                      t._s(e) +
                                                      " "
                                                  ),
                                                ])
                                              : t._e(),
                                          ]);
                                        }),
                                        0
                                      )
                                    : t._e(),
                                ]);
                              }),
                              0
                            )
                          : 500 == t.job_details
                          ? s("td", [t._v("Error ")])
                          : t.loading
                          ? s(
                              "td",
                              [s("b-spinner", { attrs: { align: "center" } })],
                              1
                            )
                          : t._e(),
                      ]),
                    ]),
                  ],
                  1
                ),
                s("br"),
                s(
                  "div",
                  { attrs: { align: "center" } },
                  [
                    s("b-button-group", [
                      t.job_details["HC State"]
                        ? s(
                            "button",
                            {
                              staticClass: "btn-primary btn-sm",
                              attrs: { type: "button" },
                              on: {
                                click: function (e) {
                                  return t.fileSaver(
                                    t.jobID + ".txt",
                                    t.job_details["HC State"]
                                  );
                                },
                              },
                            },
                            [t._v(" Export ")]
                          )
                        : t._e(),
                      s(
                        "button",
                        {
                          staticClass: "btn btn-secondary btn-sm",
                          attrs: { type: "submit" },
                          on: {
                            click: function (e) {
                              return t.customAlert(
                                "Feature not implemented",
                                "error"
                              );
                            },
                          },
                        },
                        [t._v(" Copy Job ")]
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      z = [],
      I = (s("a15b"), s("21a6")),
      Q = {
        name: "showDetails",
        props: { jobID: String },
        data: function () {
          return { job_details: {}, loading: !1, cracked: [] };
        },
        methods: {
          showAlert: function (t) {
            this.$swal({
              text: this.message,
              icon: t,
              showCloseButton: !0,
              background: "#000000",
              confirmButtonColor: "success",
              showConfirmButton: !1,
            });
          },
          customAlert: function (t, e) {
            (this.message = t), this.showAlert(e);
          },
          clearCache: function () {
            (this.job_details = {}), (this.cracked = []);
          },
          fileSaver: function (t, e) {
            var s = new Blob([this.cracked], {
              type: "text/plain;charset=utf-8",
            });
            Object(I["saveAs"])(s, t);
          },
          getJob: function (t) {
            var e = this,
              s = "/api/queuing/";
            (this.loading = !0),
              v.a
                .get("" + s + t)
                .then(function (t) {
                  200 === t.status &&
                    ((e.job_details = t.data),
                    t.data.Cracked
                      ? (e.cracked = t.data.Cracked.join("\r\n"))
                      : (e.cracked = []),
                    (e.loading = !1));
                })
                .catch(function (t) {
                  (e.show_msg = !0),
                    (e.loading = !1),
                    t.response &&
                      (401 === t.response.status
                        ? (e.message = "Unauthorized")
                        : 200 !== t.response.status &&
                          ((e.message = "Error getting job details"),
                          (e.variant = "danger"),
                          (e.show_msg = !0))),
                    console.log(t);
                });
          },
        },
      },
      T = Q,
      Z = (s("4cb2"), Object(w["a"])(T, $, z, !1, null, null, null)),
      K = Z.exports,
      W = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          [
            s(
              "b-modal",
              {
                ref: "adminModal",
                attrs: {
                  id: "admin-modal",
                  title: "Admin",
                  "header-class": "header",
                  "body-class": "crackq",
                  "hide-header": "",
                  "hide-footer": "",
                },
                on: {
                  shown: function (e) {
                    return t.getUsers();
                  },
                  hide: t.clearCache,
                },
              },
              [
                s("b-table", {
                  staticStyle: { align: "center", margin: "0" },
                  attrs: {
                    title: "Click to edit",
                    align: "center",
                    "thead-class": "text-success",
                    "tbody-class": "text-success",
                    borderless: "",
                    items: t.admin_details,
                    small: "",
                  },
                  on: { "row-clicked": t.showEdit },
                }),
                s("br"),
                s(
                  "div",
                  { attrs: { align: "center" } },
                  [
                    s("b-button-group", { staticStyle: { align: "center" } }, [
                      s(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          attrs: { type: "button" },
                          on: { click: t.showAdd },
                        },
                        [t._v(" Add User ")]
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            s(
              "b-modal",
              {
                ref: "editModal",
                attrs: {
                  id: "edit-modal",
                  title: "Edit User",
                  "header-class": "header",
                  "body-class": "crackq",
                  "hide-header": "",
                  "hide-footer": "",
                },
                on: {
                  submit: t.edSubmit,
                  hide: function (e) {
                    t.clearCache && t.getUsers;
                  },
                },
              },
              [
                s(
                  "b-form-group",
                  { attrs: { id: "edit-details-form", label: "Email:" } },
                  [
                    s("b-form-input", {
                      attrs: {
                        id: "email-input",
                        type: "email",
                        state: t.validateState("email"),
                        "aria-describedby": "email-live-feedback",
                      },
                      model: {
                        value: t.editDetailsForm.email,
                        callback: function (e) {
                          t.$set(t.editDetailsForm, "email", e);
                        },
                        expression: "editDetailsForm.email",
                      },
                    }),
                    s(
                      "b-form-invalid-feedback",
                      { attrs: { id: "email-live-feedback" } },
                      [t._v(" A valid email address is required ")]
                    ),
                  ],
                  1
                ),
                s(
                  "b-form-group",
                  {
                    attrs: {
                      id: "edit-details-form",
                      label: "Change Password:",
                    },
                  },
                  [
                    s("b-form-input", {
                      attrs: {
                        id: "new-password-input",
                        type: "password",
                        state: t.validateState("new_password"),
                        "aria-describedby": "newpass-live-feedback",
                      },
                      model: {
                        value: t.editDetailsForm.new_password,
                        callback: function (e) {
                          t.$set(t.editDetailsForm, "new_password", e);
                        },
                        expression: "editDetailsForm.new_password",
                      },
                    }),
                  ],
                  1
                ),
                s(
                  "b-form-group",
                  {
                    attrs: {
                      id: "edit-details-form",
                      label: "Confirm Password:",
                    },
                  },
                  [
                    s("b-form-input", {
                      attrs: {
                        id: "confirm-password-input",
                        state: t.validateState("confirm_password"),
                        "aria-describedby": "confirm-live-feedback",
                        type: "password",
                      },
                      model: {
                        value: t.editDetailsForm.confirm_password,
                        callback: function (e) {
                          t.$set(t.editDetailsForm, "confirm_password", e);
                        },
                        expression: "editDetailsForm.confirm_password",
                      },
                    }),
                    s(
                      "b-form-invalid-feedback",
                      { attrs: { id: "confirm-live-feedback" } },
                      [t._v(" Passwords do not match ")]
                    ),
                  ],
                  1
                ),
                s("br"),
                s(
                  "div",
                  { attrs: { align: "center" } },
                  [
                    s("b-button-group", [
                      s(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          attrs: { type: "button" },
                          on: { click: t.edSubmit },
                        },
                        [t._v(" Save ")]
                      ),
                      s(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm",
                          attrs: { type: "button" },
                          on: { click: t.delUser },
                        },
                        [t._v(" Delete ")]
                      ),
                      s(
                        "button",
                        {
                          staticClass: "btn btn-secondary btn-sm",
                          attrs: { type: "button" },
                          on: { click: t.makeAdmin },
                        },
                        [t._v(" Admin ")]
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            s(
              "b-modal",
              {
                ref: "addModal",
                attrs: {
                  id: "add-modal",
                  title: "Add User",
                  "header-class": "header",
                  "body-class": "crackq",
                  "hide-header": "",
                  "hide-footer": "",
                },
                on: {
                  submit: t.addSubmit,
                  hide: function (e) {
                    t.clearCache && t.getUsers;
                  },
                },
              },
              [
                s(
                  "b-form-group",
                  { attrs: { id: "add-user-form", label: "Username:" } },
                  [
                    s("b-form-input", {
                      attrs: {
                        id: "user-input",
                        type: "text",
                        state: t.validateStateAdd("user"),
                        "aria-describedby": "user-live-feedback",
                      },
                      model: {
                        value: t.addUserForm.user,
                        callback: function (e) {
                          t.$set(t.addUserForm, "user", e);
                        },
                        expression: "addUserForm.user",
                      },
                    }),
                    s(
                      "b-form-invalid-feedback",
                      { attrs: { id: "user-live-feedback" } },
                      [
                        t._v(
                          " Invalid Input: [A-Za-z0-9_] only. Min length of 3 and max 40 "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                s(
                  "b-form-group",
                  { attrs: { id: "add-user-form", label: "Email:" } },
                  [
                    s("b-form-input", {
                      attrs: {
                        id: "email-input",
                        type: "email",
                        state: t.validateStateAdd("email"),
                        "aria-describedby": "email-live-feedback",
                      },
                      model: {
                        value: t.addUserForm.email,
                        callback: function (e) {
                          t.$set(t.addUserForm, "email", e);
                        },
                        expression: "addUserForm.email",
                      },
                    }),
                    s(
                      "b-form-invalid-feedback",
                      { attrs: { id: "email-live-feedback" } },
                      [t._v(" A valid email address is required ")]
                    ),
                  ],
                  1
                ),
                s(
                  "b-form-group",
                  { attrs: { id: "add-user-form", label: "Password:" } },
                  [
                    s("b-form-input", {
                      attrs: {
                        id: "password-input",
                        type: "password",
                        state: t.validateStateAdd("password"),
                        "aria-describedby": "newpass-live-feedback",
                      },
                      model: {
                        value: t.addUserForm.password,
                        callback: function (e) {
                          t.$set(t.addUserForm, "password", e);
                        },
                        expression: "addUserForm.password",
                      },
                    }),
                    s(
                      "b-form-invalid-feedback",
                      { attrs: { id: "newpass-live-feedback" } },
                      [t._v(" Password should be at least 10 characters ")]
                    ),
                  ],
                  1
                ),
                s(
                  "b-form-group",
                  {
                    attrs: { id: "add-user-form", label: "Confirm Password:" },
                  },
                  [
                    s("b-form-input", {
                      attrs: {
                        required: "",
                        id: "confirm-password-input",
                        type: "password",
                        state: t.validateStateAdd("confirm_password"),
                        "aria-describedby": "confirmpass-live-feedback",
                      },
                      model: {
                        value: t.addUserForm.confirm_password,
                        callback: function (e) {
                          t.$set(t.addUserForm, "confirm_password", e);
                        },
                        expression: "addUserForm.confirm_password",
                      },
                    }),
                    s(
                      "b-form-invalid-feedback",
                      { attrs: { id: "confirmpass-live-feedback" } },
                      [t._v(" Passwords do not match ")]
                    ),
                    s("br"),
                    s(
                      "b-form-checkbox",
                      {
                        attrs: { switch: "" },
                        model: {
                          value: t.addUserForm.admin,
                          callback: function (e) {
                            t.$set(t.addUserForm, "admin", e);
                          },
                          expression: "addUserForm.admin",
                        },
                      },
                      [t._v(" Admin ")]
                    ),
                  ],
                  1
                ),
                s("br"),
                s(
                  "b-button-group",
                  [
                    s(
                      "b-button",
                      {
                        staticClass: "btn btn-primary btn-sm",
                        attrs: { type: "button" },
                        on: { click: t.addSubmit },
                      },
                      [t._v(" Create ")]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Y = [],
      G = {
        name: "adminDetails",
        data: function () {
          return {
            loading: !1,
            admin_details: [],
            user_details: [],
            editDetailsForm: {
              email: "",
              password: "",
              new_password: "",
              confirm_password: "",
            },
            addUserForm: {
              user: "",
              email: "",
              password: "",
              confirm_password: "",
              admin: "false",
            },
          };
        },
        validations: {
          editDetailsForm: {
            email: { email: F["email"] },
            confirm_password: {
              minLength: Object(F["minLength"])(10),
              sameAsPass: Object(F["sameAs"])("new_password"),
            },
            new_password: { minLength: Object(F["minLength"])(10) },
          },
          addUserForm: {
            user: {
              required: F["required"],
              minLength: Object(F["minLength"])(3),
              maxLength: Object(F["maxLength"])(40),
              strictString: function (t) {
                return !/\W/.test(t);
              },
            },
            email: { email: F["email"] },
            confirm_password: {
              required: F["required"],
              minLength: Object(F["minLength"])(10),
              samAsPass: Object(F["sameAs"])("password"),
            },
            password: {
              required: F["required"],
              minLength: Object(F["minLength"])(10),
            },
          },
        },
        methods: {
          validateState: function (t) {
            var e = this.$v.editDetailsForm[t],
              s = e.$dirty,
              a = e.$error;
            return s ? !a : null;
          },
          validateStateAdd: function (t) {
            var e = this.$v.addUserForm[t],
              s = e.$dirty,
              a = e.$error;
            return s ? !a : null;
          },
          showAlert: function (t) {
            this.$swal({
              text: this.message,
              icon: t,
              showCloseButton: !0,
              background: "#000000",
              confirmButtonColor: "success",
              showConfirmButton: !1,
            });
          },
          customAlert: function (t, e) {
            (this.message = t), this.showAlert(e);
          },
          clearCache: function () {
            (this.admin_details = []), (this.user_details = []);
          },
          initForm: function () {
            (this.editDetailsForm.email = this.user_details.email),
              (this.editDetailsForm.password = ""),
              (this.editDetailsForm.new_password = ""),
              (this.editDetailsForm.confirm_password = ""),
              (this.addUserForm.password = ""),
              (this.addUserForm.confirm_password = ""),
              (this.addUserForm.email = ""),
              (this.addUserForm.admin = !1);
          },
          showEdit: function (t) {
            this.getUsers(t.user_id),
              this.initForm(),
              this.$bvModal.show("edit-modal");
          },
          showAdd: function () {
            this.initForm(), this.$bvModal.show("add-modal");
          },
          getUsers: function (t) {
            var e = this;
            this.loading = !0;
            var s = "/api/admin/";
            "number" === typeof t && (s = "/api/admin/".concat(t)),
              v.a
                .get("" + s)
                .then(function (s) {
                  200 === s.status &&
                    ("number" === typeof t
                      ? (e.user_details = Object.keys(s.data).map(function (t) {
                          return s.data[t];
                        }))
                      : (e.admin_details = Object.keys(s.data).map(function (
                          t
                        ) {
                          return s.data[t];
                        })),
                    (e.loading = !1));
                })
                .catch(function (t) {
                  (e.loading = !1),
                    t.response &&
                      (401 === t.response.status
                        ? (e.message = "Unauthorized")
                        : 200 !== t.response.status &&
                          (e.message = "Error fetching user details"),
                      e.showAlert("error"));
                });
          },
          addUser: function (t) {
            var e = this,
              s = "/api/admin/";
            v.a
              .post("" + s, t)
              .then(function (t) {
                200 === t.status &&
                  ((e.message = "User added"), e.showAlert("success"));
              })
              .catch(function (t) {
                if (200 !== t.response.status) {
                  if (
                    ((e.message = "Error adding user:\n"),
                    Array.isArray(t.response.data))
                  ) {
                    var s = [];
                    (s = t.response.data.map(function (t) {
                      return t.msg;
                    })),
                      (e.message += s.join(", "));
                  } else e.message += "".concat(t.response.data.msg);
                  e.showAlert("error");
                }
              }),
              this.getUsers();
          },
          editUser: function (t, e) {
            var s = this,
              a = "/api/admin/".concat(t);
            v.a
              .patch("" + a, e)
              .then(function (t) {
                if (((s.message = "User modified:\n"), Array.isArray(t.data))) {
                  var e = [];
                  (e = t.data.map(function (t) {
                    return t.msg;
                  })),
                    (s.message += e.join(", "));
                } else s.message += "".concat(t.data.msg);
                s.showAlert("success");
              })
              .catch(function (t) {
                if (200 !== t.response.status) {
                  s.message = "Error modifying user:\n";
                  var e = t.response.data;
                  if ("object" === Object(S["a"])(e)) {
                    var a = Object.keys(e);
                    if (a.length > 1)
                      for (var r = 0; r < a.length; r += 1)
                        s.message += ""
                          .concat([a[r]], " - ")
                          .concat(e[a[r]], "\n");
                    else s.message += "".concat(e.msg);
                  }
                  s.showAlert("error");
                }
                s.getUsers();
              });
          },
          addSubmit: function () {
            if (
              (this.$v.addUserForm.$touch(), !this.$v.addUserForm.$anyError)
            ) {
              var t = {
                user: this.addUserForm.user,
                email: this.addUserForm.email,
                password: this.addUserForm.password,
                confirm_password: this.addUserForm.confirm_password,
              };
              this.addUser(t),
                this.clearCache(),
                this.$bvModal.hide("add-modal"),
                this.$bvModal.hide("admin-modal"),
                this.$bvModal.hide("edit-modal");
            }
          },
          edSubmit: function () {
            var t = this.user_details[0];
            if (
              (this.$v.editDetailsForm.$touch(),
              !this.$v.editDetailsForm.$anyError)
            ) {
              var e = { email: this.editDetailsForm.email };
              this.editDetailsForm.new_password &&
                (e.new_password = this.editDetailsForm.new_password),
                this.editDetailsForm.confirm_password &&
                  (e.confirm_password = this.editDetailsForm.confirm_password),
                this.editUser(t, e),
                this.clearCache(),
                this.$bvModal.hide("add-modal"),
                this.$bvModal.hide("admin-modal"),
                this.$bvModal.hide("edit-modal"),
                this.initForm();
            }
          },
          onReset: function (t) {
            t.preventDefault(),
              this.$bvModal.hide("add-modal"),
              this.$bvModal.hide("edit-modal"),
              this.getUsers(),
              this.initForm();
          },
          makeAdmin: function () {
            var t = this,
              e = this.user_details[0],
              s = "";
            if ("number" !== typeof e)
              return (
                (this.message = "Error invalid user selected"),
                void this.showAlert("error")
              );
            (s = "/api/admin/".concat(e)),
              (this.message = "Toggle admin rights for this user?"),
              this.$swal({
                text: this.message,
                icon: "question",
                iconColor: "#00ff00",
                showCloseButton: !0,
                background: "#000000",
                buttonsStyling: !1,
                confirmButtonClass: "btn btn-primary btn-sm w-25",
                cancelButtonClass: "btn btn-danger btn-sm w-25",
                showConfirmButton: !0,
                showCancelButton: !0,
              }).then(function (e) {
                !0 === e.value
                  ? v.a
                      .put("" + s)
                      .then(function (e) {
                        200 === e.status &&
                          ((t.message = "Admin status updated"),
                          t.showAlert("success"));
                      })
                      .catch(function (e) {
                        (t.loading = !1),
                          e.response &&
                            (401 === e.response.status
                              ? (t.message = "Unauthorized")
                              : 200 !== e.response.status &&
                                (t.message = "Error updating user"),
                            t.showAlert("error"));
                      })
                  : e.dismiss &&
                    ((t.message = "Cancelled"), t.showAlert("error")),
                  t.clearCache(),
                  t.$bvModal.hide("add-modal"),
                  t.$bvModal.hide("admin-modal"),
                  t.$bvModal.hide("edit-modal");
              });
          },
          delUser: function () {
            var t = this,
              e = this.user_details[0],
              s = "";
            if ("number" !== typeof e)
              return (
                (this.message = "Error invalid user selected"),
                void this.showAlert("error")
              );
            (s = "/api/admin/".concat(e)),
              (this.message = "Are you sure you want to delete this user?"),
              this.$swal({
                text: this.message,
                icon: "question",
                iconColor: "#00ff00",
                showCloseButton: !0,
                background: "#000000",
                buttonsStyling: !1,
                confirmButtonClass: "btn btn-primary btn-sm w-25",
                cancelButtonClass: "btn btn-danger btn-sm w-25",
                showConfirmButton: !0,
                showCancelButton: !0,
              }).then(function (e) {
                !0 === e.value
                  ? v.a
                      .delete("" + s)
                      .then(function (e) {
                        200 === e.status &&
                          ((t.message = "User deleted"),
                          t.showAlert("success"));
                      })
                      .catch(function (e) {
                        (t.loading = !1),
                          e.response &&
                            (401 === e.response.status
                              ? (t.message = "Unauthorized")
                              : 200 !== e.response.status &&
                                (t.message = "Error deleting user"),
                            t.showAlert("error"));
                      })
                  : e.dismiss &&
                    ((t.message = "Cancelled"), t.showAlert("error"));
              }),
              this.clearCache(),
              this.$bvModal.hide("add-modal"),
              this.$bvModal.hide("admin-modal"),
              this.$bvModal.hide("edit-modal");
          },
        },
        created: function () {
          (v.a.defaults.xsrfCookieName = "csrftoken"),
            (v.a.defaults.xsrfHeaderName = "X-CSRFTOKEN");
        },
      },
      X = G,
      V = (s("2b21"), Object(w["a"])(X, W, Y, !1, null, null, null)),
      tt = V.exports,
      et = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          [
            s(
              "b-modal",
              {
                ref: "profileModal",
                attrs: {
                  id: "profile-modal",
                  title: "Profile",
                  "header-class": "header",
                  "body-class": "crackq",
                  "hide-header": "",
                  "hide-footer": "",
                },
                on: {
                  shown: t.getProfile,
                  "row-clicked": t.showEdit,
                  hide: t.clearCache,
                },
              },
              [
                s("b-table", {
                  staticStyle: { align: "center", margin: "0" },
                  attrs: {
                    title: "Click to edit",
                    align: "center",
                    "thead-class": "text-success",
                    "tbody-class": "text-success",
                    borderless: "",
                    items: t.profile_details,
                    small: "",
                  },
                  on: { "row-clicked": t.showEdit },
                }),
                s("br"),
                s(
                  "div",
                  { attrs: { align: "center" } },
                  [
                    s("b-button-group", { staticStyle: { align: "center" } }, [
                      s(
                        "button",
                        {
                          staticClass: "btn-primary btn-sm",
                          attrs: { type: "button" },
                          on: { click: t.showEdit },
                        },
                        [t._v(" Edit ")]
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            s(
              "b-modal",
              {
                ref: "editProfModal",
                attrs: {
                  id: "edit-prof-modal",
                  title: "Edit User",
                  "header-class": "header",
                  "body-class": "crackq",
                  "hide-header": "",
                  "hide-footer": "",
                },
                on: {
                  submit: t.edSubmit,
                  hide: function (e) {
                    t.clearCache && t.getProfile;
                  },
                },
              },
              [
                s(
                  "b-form-group",
                  { attrs: { id: "edit-details-form", label: "Email:" } },
                  [
                    s("b-form-input", {
                      attrs: {
                        id: "email-input",
                        state: t.validateState("email"),
                        "aria-describedby": "email-live-feedback",
                      },
                      model: {
                        value: t.editDetailsForm.email,
                        callback: function (e) {
                          t.$set(t.editDetailsForm, "email", e);
                        },
                        expression: "editDetailsForm.email",
                      },
                    }),
                    s(
                      "b-form-invalid-feedback",
                      { attrs: { id: "email-live-feedback" } },
                      [t._v(" A valid email address is required ")]
                    ),
                  ],
                  1
                ),
                s(
                  "b-form-group",
                  { attrs: { id: "edit-details-form", label: "Password:" } },
                  [
                    s("b-form-input", {
                      attrs: {
                        id: "password-input",
                        type: "password",
                        state: t.validateState("password"),
                        "aria-describedby": "pass-live-feedback",
                      },
                      model: {
                        value: t.editDetailsForm.password,
                        callback: function (e) {
                          t.$set(t.editDetailsForm, "password", e);
                        },
                        expression: "editDetailsForm.password",
                      },
                    }),
                    s(
                      "b-form-invalid-feedback",
                      { attrs: { id: "pass-live-feedback" } },
                      [t._v(" Current password is required ")]
                    ),
                  ],
                  1
                ),
                s(
                  "b-form-group",
                  {
                    attrs: { id: "edit-details-form", label: "New Password:" },
                  },
                  [
                    s("b-form-input", {
                      attrs: {
                        id: "new-password-input",
                        type: "password",
                        state: t.validateState("new_password"),
                        "aria-describedby": "newpass-live-feedback",
                      },
                      model: {
                        value: t.editDetailsForm.new_password,
                        callback: function (e) {
                          t.$set(t.editDetailsForm, "new_password", e);
                        },
                        expression: "editDetailsForm.new_password",
                      },
                    }),
                    s(
                      "b-form-invalid-feedback",
                      { attrs: { id: "newpass-live-feedback" } },
                      [t._v(" Password should be at least 10 characters ")]
                    ),
                  ],
                  1
                ),
                s(
                  "b-form-group",
                  {
                    attrs: {
                      id: "edit-details-form",
                      label: "Confirm Password:",
                    },
                  },
                  [
                    s("b-form-input", {
                      attrs: {
                        required: "",
                        id: "confirm-password-input",
                        state: t.validateState("confirm_password"),
                        "aria-describedby": "confirm-live-feedback",
                        type: "password",
                      },
                      model: {
                        value: t.editDetailsForm.confirm_password,
                        callback: function (e) {
                          t.$set(t.editDetailsForm, "confirm_password", e);
                        },
                        expression: "editDetailsForm.confirm_password",
                      },
                    }),
                    s(
                      "b-form-invalid-feedback",
                      { attrs: { id: "confirm-live-feedback" } },
                      [t._v(" Passwords must match ")]
                    ),
                  ],
                  1
                ),
                s("br"),
                s(
                  "div",
                  { attrs: { align: "center" } },
                  [
                    s("b-button-group", [
                      s(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          attrs: { type: "button" },
                          on: { click: t.edSubmit },
                        },
                        [t._v(" Save ")]
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      st = [],
      at = {
        name: "profileDetails",
        mixins: [h["validationMixin"]],
        data: function () {
          return {
            loading: !1,
            profile_details: [],
            fields: [],
            editDetailsForm: {
              email: "",
              password: "",
              new_password: "",
              confirm_password: "",
            },
          };
        },
        validations: {
          editDetailsForm: {
            email: { email: F["email"] },
            password: { required: F["required"] },
            confirm_password: {
              minLength: Object(F["minLength"])(10),
              samAsPass: Object(F["sameAs"])("new_password"),
            },
            new_password: { minLength: Object(F["minLength"])(10) },
          },
        },
        methods: {
          validateState: function (t) {
            var e = this.$v.editDetailsForm[t],
              s = e.$dirty,
              a = e.$error;
            return s ? !a : null;
          },
          showAlert: function (t) {
            this.$swal({
              text: this.message,
              icon: t,
              showCloseButton: !0,
              background: "#000000",
              confirmButtonColor: "success",
              showConfirmButton: !1,
            });
          },
          customAlert: function (t, e) {
            (this.message = t), this.showAlert(e);
          },
          clearCache: function () {
            this.profile_details = [];
          },
          getProfile: function () {
            var t = this,
              e = "/api/profile/";
            (this.loading = !0),
              v.a
                .get("" + e)
                .then(function (e) {
                  200 === e.status &&
                    ((t.fields = Object.keys(e.data).map(function (t) {
                      return t;
                    })),
                    (t.profile_details = [e.data]),
                    (t.loading = !1));
                })
                .catch(function (e) {
                  (t.loading = !1),
                    e.response &&
                      (401 === e.response.status
                        ? (t.message = "Unauthorized")
                        : 200 !== e.response.status &&
                          (t.message = "Error Profile details"),
                      t.showAlert("error"));
                });
          },
          editProfile: function (t) {
            var e = this,
              s = "/api/profile/";
            v.a
              .post("" + s, t)
              .then(function (t) {
                if (
                  ((e.message = "Profile modified:\n"), Array.isArray(t.data))
                ) {
                  var s = [];
                  (s = t.data.map(function (t) {
                    return t.msg;
                  })),
                    (e.message += s.join(", "));
                } else e.message += "".concat(t.data.msg);
                e.showAlert("success");
              })
              .catch(function (t) {
                if (202 !== t.response.status) {
                  e.message = "Error modifying profile:\n";
                  var s = t.response.data;
                  if ("object" === Object(S["a"])(s)) {
                    var a = Object.keys(s);
                    if (a.length > 1)
                      for (var r = 0; r < a.length; r += 1)
                        e.message += ""
                          .concat([a[r]], " - ")
                          .concat(s[a[r]], "\n");
                    else e.message += "".concat(s.msg);
                  }
                  e.showAlert("error");
                }
                e.getProfile();
              });
          },
          showEdit: function () {
            this.initForm(), this.$bvModal.show("edit-prof-modal");
          },
          initForm: function () {
            (this.editDetailsForm.email = this.profile_details.email),
              (this.editDetailsForm.password = ""),
              (this.editDetailsForm.new_password = ""),
              (this.editDetailsForm.confirm_password = "");
          },
          edSubmit: function () {
            if (
              (this.$v.editDetailsForm.$touch(),
              !this.$v.editDetailsForm.$anyError)
            ) {
              var t = {
                email: this.editDetailsForm.email,
                password: this.editDetailsForm.password,
              };
              this.editDetailsForm.new_password &&
                (t.new_password = this.editDetailsForm.new_password),
                this.editDetailsForm.confirm_password &&
                  (t.confirm_password = this.editDetailsForm.confirm_password),
                this.editProfile(t),
                this.$bvModal.hide("edit-prof-modal"),
                this.$bvModal.hide("profile-modal"),
                this.clearCache();
            }
          },
        },
        created: function () {
          (v.a.defaults.xsrfCookieName = "csrftoken"),
            (v.a.defaults.xsrfHeaderName = "X-CSRFTOKEN");
        },
      },
      rt = at,
      ot = (s("1be2"), Object(w["a"])(rt, et, st, !1, null, null, null)),
      it = ot.exports,
      nt = {
        mixins: [h["validationMixin"]],
        data: function () {
          return {
            csrf_token: "",
            file: "",
            selected_word: null,
            selected_rules: [],
            selected_maskfile: [],
            options: [],
            hashModes: [],
            queue: "",
            hash_list: "",
            addJobForm: {
              name: "",
              hash_file: "",
              hash_mode: "",
              attack_mode: 0,
              wordlist: "",
              mask: null,
              maskfile: null,
              rules: null,
              notify: !1,
            },
            message: "",
            variant: "",
            show_msg: !1,
            job_details: [],
            job_id: "",
            gradient: null,
            jobid: "",
            lastCompItems: [],
            jobFilter: ["job_name"],
            connected: !0,
            time: Date(),
            lg_options: {
              animation: !1,
              scales: {
                yAxes: [{ ticks: { display: !1 }, gridLines: { display: !1 } }],
                xAxes: [
                  {
                    ticks: { source: "data", autoSkip: !0, display: !1 },
                    gridLines: { display: !1 },
                  },
                ],
              },
            },
            bg_options: {
              scales: {
                xAxes: [
                  { gridLines: { display: !1 }, ticks: { beginAtZero: !0 } },
                ],
                yAxes: [
                  { gridLines: { display: !1 }, ticks: { beginAtZero: !0 } },
                ],
              },
            },
            dg_options: {
              tooltips: {
                callbacks: {
                  label: function (t, e) {
                    var s = e.datasets[t.datasetIndex].labels[t.index],
                      a = e.datasets[t.datasetIndex].data[t.index];
                    return "".concat(s, ": ").concat(a);
                  },
                },
              },
              scales: {
                xAxes: [{ gridLines: { display: !1 }, ticks: { display: !1 } }],
                yAxes: [
                  {
                    gridLines: { display: !1 },
                    ticks: { display: !1, beginAtZero: !0 },
                  },
                ],
              },
            },
            prog_data: {},
            cracked_data: {},
            speed_data: {},
            multi_data: {},
            temp_data: {},
          };
        },
        validations: {
          addJobForm: {
            name: {
              strictString: function (t) {
                return !/\W/.test(t);
              },
              minLength: Object(F["minLength"])(3),
              maxLength: Object(F["maxLength"])(40),
              required: F["required"],
            },
          },
        },
        components: {
          lineGraph: P,
          donGraph: H,
          barGraph: N,
          showDetails: K,
          Multiselect: m.a,
          showProfile: it,
          showAdmin: tt,
        },
        methods: {
          showAlert: function (t) {
            this.$swal({
              text: this.message,
              icon: t,
              showCloseButton: !0,
              background: "#000000",
              confirmButtonColor: "success",
              showConfirmButton: !1,
            });
          },
          customAlert: function (t, e) {
            (this.message = t), this.showAlert(e);
          },
          timedAlert: function () {
            var t = this;
            this.$swal({
              text: "Adding Job...",
              background: "#000000",
              timer: 2e3,
              confirmButtonColor: "#00ff00",
              didOpen: function () {
                t.$swal.showLoading();
              },
              willClose: function () {
                t.getQueue();
              },
            });
          },
          showModal: function (t) {
            (this.jobid = t.job_id), this.$bvModal.show("details-modal");
          },
          showMoodal: function (t) {
            (this.jobid = t), this.$bvModal.show("details-modal");
          },
          showProf: function () {
            this.$bvModal.show("profile-modal");
          },
          showAdmin: function () {
            this.$bvModal.show("admin-modal");
          },
          getQueue: function () {
            var t = this,
              e = "/api/queuing/all";
            v.a
              .get("" + e)
              .then(function (e) {
                (t.time = Date()), (t.queue = e.data), (t.connected = !0);
                var s = [],
                  a = [],
                  r = [],
                  o = [],
                  i = [],
                  n = [],
                  d = "";
                if (
                  ((t.lastCompItems = t.queue["Last Complete"]),
                  Object.keys(e.data["Current Job"]).length >= 1)
                ) {
                  var l = Object.keys(e.data["Current Job"])[0];
                  if (e.data["Current Job"][l].State["HC State"]) {
                    var c = e.data["Current Job"][l].State["HC State"].Progress;
                    s.push(100 - c), s.push(c);
                    var m,
                      u =
                        e.data["Current Job"][l].State["HC State"][
                          "Total Hashes"
                        ],
                      b =
                        e.data["Current Job"][l].State["HC State"][
                          "Cracked Hashes"
                        ];
                    for (
                      a.push(u - b),
                        a.push(b),
                        r = e.data["Current Job"][l].State["Speed Array"],
                        r.push(e.data["Current Job"][l].State["Speed Array"]),
                        d =
                          e.data["Current Job"][l].State["HC State"][
                            "Speed All"
                          ],
                        m = 1;
                      m <= r.length;
                      m++
                    )
                      n.push(m);
                    var h =
                      e.data["Current Job"][l].State["HC State"][
                        "Device Temperatures"
                      ];
                    for (var f in h) i.push(f), o.push(h[f]);
                  }
                } else (s = [0, 0]), (a = [0, 0]), (r = [0]), (o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), (d = 0);
                (t.speed_data = {
                  labels: n,
                  datasets: [
                    {
                      fill: !0,
                      fillColor: ["rgba(208, 76, 76, 0.1)"],
                      backgroundColor: ["rgba(0,255,0,1)"],
                      data: r,
                      label: d,
                      pointRadius: 0,
                    },
                  ],
                }),
                  (t.prog_data = {
                    labels: ["Progress % Remaining", "Progress % Complete"],
                    datasets: [
                      {
                        fillColor: [],
                        backgroundColor: [
                          "rgba(148,159,177,0.2)",
                          "rgba(0,255,0,1)",
                        ],
                        borderColor: [],
                        data: s,
                        label: "test_label",
                        borderWidth: 0,
                      },
                    ],
                  }),
                  (t.multi_data = {
                    datasets: [
                      {
                        fillColor: [],
                        backgroundColor: [
                          "rgba(148,159,177,0.2)",
                          "rgba(0,255,0,1)",
                        ],
                        borderColor: [],
                        data: s,
                        labels: ["% Remaining", "% Complete"],
                        borderWidth: 0,
                      },
                      {
                        fillColor: [],
                        backgroundColor: [
                          "rgba(148,159,177,0.2)",
                          "rgba(255,0,0,1)",
                        ],
                        borderColor: [],
                        data: a,
                        labels: ["Uncracked", "Cracked"],
                        borderWidth: 0,
                      },
                    ],
                  }),
                  (t.temp_data = {
                    labels: i,
                    datasets: [
                      {
                        fill: !0,
                        backgroundColor: [
                          "rgba(255,0,0,1)",
                          "rgba(255,0,0,1)",
                          "rgba(255,0,0,1)",
                          "rgba(255,0,0,1)",
                          "rgba(255,0,0,1)",
                          "rgba(255,0,0,1)",
                          "rgba(255,0,0,1)",
                          "rgba(255,0,0,1)",
                          "rgba(255,0,0,1)",
                          "rgba(255,0,0,1)",
                          "rgba(255,0,0,1)",
                          "rgba(255,0,0,1)",
                        ],
                        data: o,
                        label: "Device Temperate (C)",
                        pointRadius: 0,
                      },
                    ],
                  }),
                  (t.cracked_data = {
                    labels: ["Remaining", "Cracked"],
                    datasets: [
                      {
                        fillColor: [
                          "rgba(208, 76, 76, 1)",
                          "rgba(148,159,177,0.2)",
                        ],
                        backgroundColor: [
                          "rgba(148,159,177,0.2)",
                          "rgba(0,255,0,1)",
                        ],
                        borderColor: ["rgba(255, 255, 255, 0.4)"],
                        data: a,
                        label: "test_label",
                        borderWidth: 0,
                      },
                    ],
                  });
              })
              .catch(function (e) {
                (t.connected = !1),
                  e.response &&
                    401 === e.response.status &&
                    (window.location.href = "login");
              });
          },
          getOptions: function () {
            var t = this,
              e = "/api/options";
            v.a
              .get("" + e)
              .then(function (e) {
                (t.options = e.data),
                  t.options.Wordlists.splice(0, 0, ""),
                  (t.hashModes = Object.keys(e.data["Hash Modes"]).map(
                    function (t) {
                      return {
                        id: t,
                        name: e.data["Hash Modes"][t][0],
                        category: e.data["Hash Modes"][t][1],
                        benchmark: e.data["Hash Modes"][t][2],
                      };
                    }
                  ));
              })
              .catch(function (t) {
                401 === t.response.status && (window.location.href = "login");
              });
          },
          logout: function () {
            var t = this,
              e = "/api/logout";
            v.a
              .get("" + e)
              .then(function (e) {
                (t.options = e.data),
                  200 === e.status &&
                    ((t.message = "Logged Out"),
                    t.showAlert("success"),
                    (window.location.href = "login"));
              })
              .catch(function (e) {
                (t.show_msg = !0),
                  200 !== e.response.status &&
                    ((t.message = "Error Logging Out"), t.showAlert("error"));
              });
          },
          addJob: function (t) {
            var e = this,
              s = "/api/add";
            this.timedAlert(),
              v.a
                .post("" + s, t)
                .then(function (t) {
                  (e.job_id = t.data),
                    (e.message = "Job Submitted Successfully:\n ".concat(
                      e.job_id
                    )),
                    e.showAlert("success"),
                    e.getQueue();
                })
                .catch(function (t) {
                  if (202 !== t.response.status) {
                    e.message = "Error Submitting Job:\n";
                    var s = t.response.data;
                    if ("object" === Object(S["a"])(s)) {
                      var a = Object.keys(s);
                      if (a.length > 1)
                        for (var r = 0; r < a.length; r += 1)
                          e.message += ""
                            .concat([a[r]], " - ")
                            .concat(s[a[r]], "\n");
                      else e.message += "".concat(s.msg);
                    }
                    e.showAlert("error");
                  }
                  e.getQueue();
                });
          },
          selectedFile: function () {
            var t = this,
              e = this.$refs.file.files[0],
              s = new FileReader();
            s.readAsText(e, "UTF-8"),
              (s.onload = function (e) {
                var s = e.target.result;
                (t.hash_list = s.split(/\r?\n/)),
                  "" === t.hash_list[t.hash_list.length - 1] &&
                    t.hash_list.pop();
              }),
              (s.onerror = function (e) {
                (t.message = "Error reading file"), t.showAlert("error");
              });
          },
          initForm: function () {
            (this.addJobForm.name = ""),
              (this.addJobForm.hash_mode = ""),
              (this.addJobForm.hash_file = ""),
              (this.addJobForm.attack_mode = ""),
              (this.addJobForm.wordlist = ""),
              (this.addJobForm.username = "false"),
              (this.addJobForm.notify = "false"),
              (this.addJobForm.increment = "false"),
              (this.addJobForm.brain = "false");
          },
          onSubmit: function () {
            if ((this.$v.addJobForm.$touch(), !this.$v.addJobForm.$anyError)) {
              this.$refs.addJobModal.hide();
              var t = {
                name: this.addJobForm.name,
                hash_mode: this.addJobForm.hash_mode.id,
                hash_list: this.hash_list,
                wordlist: this.selected_word,
                rules: this.selected_rules,
                attack_mode: this.addJobForm.attack_mode,
                mask: this.addJobForm.mask,
                mask_file: this.selected_maskfile,
                username: this.addJobForm.username,
                notify: this.addJobForm.notify,
                increment: this.addJobForm.increment,
                increment_min: this.addJobForm.incmin,
                increment_max: this.addJobForm.incmax,
                disable_brain: this.addJobForm.brain,
              };
              this.addJob(t), this.initForm();
            }
          },
          onReset: function (t) {
            t.preventDefault(), this.$refs.addJobModal.hide(), this.initForm();
          },
        },
        created: function () {
          (v.a.defaults.xsrfCookieName = "csrftoken"),
            (v.a.defaults.xsrfHeaderName = "X-CSRFTOKEN"),
            this.getQueue(),
            this.getOptions(),
            (this.timer = setInterval(this.getQueue, 3e4));
        },
      },
      dt = nt,
      lt = (s("db7b"), Object(w["a"])(dt, x, A, !1, null, null, null)),
      ct = lt.exports,
      mt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "login", attrs: { align: "center" } }, [
          a("img", { attrs: { src: s("bd39") } }),
          a(
            "div",
            {
              staticClass: "container-sm text-muted col-sm-3 login",
              attrs: { align: "left" },
            },
            [
              a(
                "b-form",
                {
                  on: {
                    submit: function (e) {
                      return (
                        e.stopPropagation(), e.preventDefault(), t.onSubmit(e)
                      );
                    },
                  },
                },
                [
                  a(
                    "b-form-group",
                    {
                      attrs: {
                        id: "login-form-group",
                        "label-for": "login-form-input",
                      },
                    },
                    [
                      a("label", { attrs: { for: "user-form-input" } }, [
                        t._v("Username:"),
                      ]),
                      a("b-form-input", {
                        attrs: {
                          id: "user-form-input",
                          name: "user-form-input",
                          state: t.validateState("username"),
                          "aria-describedby": "name-live-feedback",
                        },
                        model: {
                          value: t.loginForm.username,
                          callback: function (e) {
                            t.$set(t.loginForm, "username", e);
                          },
                          expression: "loginForm.username",
                        },
                      }),
                      a("br"),
                      a("label", { attrs: { for: "pass-form-input" } }, [
                        t._v("Password:"),
                      ]),
                      a("b-form-input", {
                        attrs: {
                          id: "pass-form-input",
                          name: "pass-form-input",
                          title: "Password:",
                          type: "password",
                          state: t.validateState("password"),
                          "aria-describedby": "name-live-feedback",
                        },
                        model: {
                          value: t.loginForm.password,
                          callback: function (e) {
                            t.$set(t.loginForm, "password", e);
                          },
                          expression: "loginForm.password",
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "b-form-invalid-feedback",
                    { attrs: { id: "name-live-feedback" } },
                    [t._v(" This field is required ")]
                  ),
                  a("div", { staticClass: "form-group login" }, [
                    a(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-sm login",
                        attrs: { type: "submit" },
                      },
                      [t._v(" Login ")]
                    ),
                  ]),
                  a("div", [
                    a(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-sm",
                        attrs: { href: "/api/sso", type: "submit" },
                      },
                      [t._v(" Single Sign-On ")]
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ]);
      },
      ut = [],
      bt = {
        mixins: [h["validationMixin"]],
        data: function () {
          return {
            auth_result: null,
            username: "",
            password: "",
            submitted: !1,
            loginForm: { username: "", password: "" },
          };
        },
        validations: {
          loginForm: {
            username: { required: F["required"] },
            password: { required: F["required"] },
          },
        },
        methods: {
          validateState: function (t) {
            var e = this.$v.loginForm[t],
              s = e.$dirty,
              a = e.$error;
            return s ? !a : null;
          },
          showAlert: function (t) {
            this.$swal({
              text: this.message,
              icon: t,
              showCloseButton: !0,
              background: "#000000",
              confirmButtonColor: "success",
              showConfirmButton: !1,
            });
          },
          initForm: function () {
            (this.loginForm.username = ""), (this.loginForm.password = "");
          },
          onSubmit: function () {
            var t = this;
            if ((this.$v.loginForm.$touch(), !this.$v.loginForm.$anyError)) {
              var e = "/api/login";
              v.a
                .post("" + e, {
                  user: this.loginForm.username,
                  password: this.loginForm.password,
                })
                .then(function (e) {
                  200 === e.status &&
                    ((t.message = "Login Success"),
                    t.showAlert("success"),
                    (window.location.href = "/"));
                })
                .catch(function (e) {
                  401 === e.response.status
                    ? ((t.message = "Login Failed"), t.showAlert("error"))
                    : ((t.message = "Login Error"), t.showAlert("error"));
                });
            }
          },
        },
        created: function () {
          this.initForm();
        },
      },
      ht = bt,
      ft = (s("039a"), Object(w["a"])(ht, mt, ut, !1, null, null, null)),
      pt = ft.exports,
      vt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div");
      },
      gt = [],
      _t = {
        data: function () {
          return {};
        },
        methods: {
          logout: function () {
            var t = this,
              e = "/api/logout";
            v.a
              .get("" + e)
              .then(function (e) {
                (t.options = e.data),
                  200 === e.status && (window.location.href = "login");
              })
              .catch(function (e) {
                (t.show_msg = !0),
                  200 !== e.response.status
                    ? (t.message = "Error logging out")
                    : console.error(e);
              });
          },
        },
        created: function () {
          this.logout();
        },
      },
      wt = _t,
      kt = Object(w["a"])(wt, vt, gt, !1, null, null, null),
      Ct = kt.exports,
      yt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          {
            staticClass: "container fluid",
            staticStyle: { "font-size": "0.9rem" },
          },
          [
            a("div", { staticClass: "row" }, [
              a(
                "div",
                { staticClass: "col-sm-16" },
                [
                  a(
                    "b-navbar",
                    { attrs: { toggleable: "lg", type: "dark" } },
                    [
                      a("b-navbar-brand", [
                        a("img", { attrs: { src: s("e3cf") } }),
                      ]),
                      a("showProfile"),
                      a("showAdmin"),
                      a("b-navbar-toggle", {
                        attrs: { target: "nav-collapse" },
                      }),
                      a(
                        "b-collapse",
                        { attrs: { id: "nav-collapse", "is-nav": "" } },
                        [
                          a(
                            "b-navbar-nav",
                            [
                              a("b-nav-item", { attrs: { href: "/" } }, [
                                t._v("Home"),
                              ]),
                              a("b-nav-item", { attrs: { href: "/queues" } }, [
                                t._v("Queues"),
                              ]),
                              a(
                                "b-nav-item",
                                { attrs: { href: "/complete" } },
                                [t._v("Complete")]
                              ),
                              a("b-nav-item", { attrs: { href: "/failed" } }, [
                                t._v("Failed"),
                              ]),
                              a("b-nav-item", { attrs: { href: "/reports" } }, [
                                t._v("Reports"),
                              ]),
                              a(
                                "b-nav-item",
                                { attrs: { href: "/benchmarks" } },
                                [t._v("Benchmarks")]
                              ),
                              a(
                                "b-nav-item-dropdown",
                                { attrs: { text: "User", right: "" } },
                                [
                                  a(
                                    "b-dropdown-item",
                                    { on: { click: t.showProf } },
                                    [t._v("Profile")]
                                  ),
                                  a(
                                    "b-dropdown-item",
                                    { on: { click: t.showAdmin } },
                                    [t._v("Admin")]
                                  ),
                                  a(
                                    "b-dropdown-item",
                                    { attrs: { href: "/login" } },
                                    [t._v("Login")]
                                  ),
                                  a(
                                    "b-dropdown-item",
                                    { attrs: { href: "/logout" } },
                                    [t._v("Logout")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a("hr"),
                  a("br"),
                  a("br"),
                  a(
                    "b-card",
                    {
                      staticClass: "text-center",
                      attrs: { "bg-variant": "secondary" },
                    },
                    [
                      a("div", { attrs: { slot: "header" }, slot: "header" }, [
                        a("small", { staticClass: "text-muted" }, [
                          t._v("Current Job"),
                        ]),
                      ]),
                      a("div", { staticClass: "text-muted" }, [
                        a(
                          "table",
                          {
                            staticClass:
                              "table-sm table-striped table-hover text-muted",
                          },
                          [
                            a("thead", [
                              a("tr", [
                                a("th", { attrs: { scope: "col" } }, [
                                  t._v("Job ID"),
                                ]),
                                a("th", { attrs: { scope: "col" } }, [
                                  t._v("Job Name"),
                                ]),
                                a("th", { attrs: { scope: "col" } }, [
                                  t._v("Status"),
                                ]),
                                a("th", { attrs: { scope: "col" } }, [
                                  t._v("Total Hashes"),
                                ]),
                                a("th", { attrs: { scope: "col" } }, [
                                  t._v("Cracked Hashes"),
                                ]),
                                a("th", { attrs: { scope: "col" } }, [
                                  t._v("Speed"),
                                ]),
                                a("th", { attrs: { scope: "col" } }, [
                                  t._v("Progress"),
                                ]),
                                a("th", { attrs: { scope: "col" } }, [
                                  t._v("ETA"),
                                ]),
                                a("th"),
                              ]),
                            ]),
                            t.queue["Current Job"]
                              ? a(
                                  "tbody",
                                  [
                                    a("showDetails", {
                                      attrs: { jobID: t.jobid },
                                    }),
                                    t._l(t.queue["Current Job"], function (
                                      e,
                                      s
                                    ) {
                                      return a(
                                        "tr",
                                        {
                                          key: s,
                                          on: {
                                            click: function (e) {
                                              t.jobid = s;
                                            },
                                          },
                                        },
                                        [
                                          a("td", [t._v(t._s(s))]),
                                          e["Job Details"]
                                            ? a("td", [
                                                t._v(
                                                  " " +
                                                    t._s(e["Job Details"].name)
                                                ),
                                              ])
                                            : a("td", [
                                                t._v("Initializing..."),
                                              ]),
                                          e["Job Details"]
                                            ? a("td", [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      e.State["HC State"][
                                                        "HC Status"
                                                      ]
                                                    )
                                                ),
                                              ])
                                            : a("td", [
                                                t._v("Initializing..."),
                                              ]),
                                          e.State["HC State"]
                                            ? a("td", [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      e.State["HC State"][
                                                        "Total Hashes"
                                                      ]
                                                    )
                                                ),
                                              ])
                                            : a("td", [t._v("None")]),
                                          e.State["HC State"]
                                            ? a("td", [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      e.State["HC State"][
                                                        "Cracked Hashes"
                                                      ]
                                                    )
                                                ),
                                              ])
                                            : a("td", [t._v("None")]),
                                          e.State["HC State"]
                                            ? a("td", [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      e.State["HC State"][
                                                        "Speed All"
                                                      ]
                                                    )
                                                ),
                                              ])
                                            : a("td", [t._v("None")]),
                                          e.State["HC State"]
                                            ? a("td", [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      e.State["HC State"][
                                                        "Progress"
                                                      ]
                                                    ) +
                                                    " %"
                                                ),
                                              ])
                                            : a("td", [t._v("None")]),
                                          e.State["HC State"]
                                            ? a("td", [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      e.State["HC State"][
                                                        "ETA (Relative)"
                                                      ]
                                                    )
                                                ),
                                              ])
                                            : a("td", [t._v("None")]),
                                          a("td", [
                                            a(
                                              "div",
                                              {
                                                staticClass: "btn-group",
                                                attrs: { role: "group" },
                                              },
                                              [
                                                a(
                                                  "button",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-modal",
                                                        rawName: "v-b-modal",
                                                        value: "details-modal",
                                                        expression:
                                                          "'details-modal'",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "btn btn-primary btn-sm",
                                                    attrs: { type: "button" },
                                                  },
                                                  [t._v(" Details ")]
                                                ),
                                                a(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-warning btn-sm",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.stopJob(s);
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Stop/Pause ")]
                                                ),
                                                a(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-danger btn-sm",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.delJob(s);
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Delete ")]
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      );
                                    }),
                                  ],
                                  2
                                )
                              : t._e(),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  a("br"),
                  a(
                    "b-card",
                    {
                      staticClass: "text-center",
                      staticStyle: { "max-width": "85rem" },
                      attrs: { responsive: "", "bg-variant": "secondary" },
                    },
                    [
                      a("div", { attrs: { slot: "header" }, slot: "header" }, [
                        a("small", { staticClass: "text-muted" }, [
                          t._v("Queued Jobs"),
                        ]),
                      ]),
                      a(
                        "div",
                        {
                          staticClass: "text-muted",
                          staticStyle: {
                            overflow: "hidden",
                            "text-overflow": "ellipsis",
                            "white-space": "wrap",
                            width: "120rem",
                            "font-size": "0.9rem",
                          },
                        },
                        [
                          a(
                            "table",
                            {
                              staticClass:
                                "responsive table-sm table-striped table-hover text-muted",
                              staticStyle: { "max-width": "80rem" },
                            },
                            [
                              a("thead", [
                                a("tr", [
                                  a("th", [t._v("Job ID")]),
                                  a("th", { attrs: { scope: "col" } }, [
                                    t._v("Job Name"),
                                  ]),
                                  a("th", { attrs: { scope: "col" } }, [
                                    t._v("Status"),
                                  ]),
                                  a("th", { attrs: { scope: "col" } }, [
                                    t._v("Hash Mode"),
                                  ]),
                                  a("th", { attrs: { scope: "col" } }, [
                                    t._v("Attack Mode"),
                                  ]),
                                  a("th", { attrs: { scope: "col" } }, [
                                    t._v("Rules/Mask"),
                                  ]),
                                  a("th", { attrs: { scope: "col" } }, [
                                    t._v("Wordlists"),
                                  ]),
                                  a("th", { attrs: { scope: "col" } }, [
                                    t._v("ETA"),
                                  ]),
                                  a("th", { attrs: { scope: "col" } }, [
                                    t._v("Progress"),
                                  ]),
                                  a("th", { attrs: { scope: "col" } }, [
                                    t._v("Cracked Hashes"),
                                  ]),
                                  a("th"),
                                ]),
                              ]),
                              a(
                                "draggable",
                                {
                                  attrs: {
                                    "v-model": t.queueList,
                                    tag: "tbody",
                                  },
                                  on: { end: t.qreorder },
                                },
                                t._l(t.queue["Queued Jobs"], function (e, s) {
                                  return a(
                                    "tr",
                                    {
                                      key: s,
                                      on: {
                                        click: function (e) {
                                          t.jobid = s;
                                        },
                                      },
                                    },
                                    [
                                      a("td", [t._v(t._s(s))]),
                                      e["Job Details"].name
                                        ? a("td", [
                                            t._v(
                                              " " + t._s(e["Job Details"].name)
                                            ),
                                          ])
                                        : a("td", [t._v("None")]),
                                      e.Status
                                        ? a("td", [t._v(" " + t._s(e.Status))])
                                        : a("td", [t._v("None")]),
                                      e["Job Details"].hash_mode
                                        ? a("td", [
                                            t._v(
                                              " " +
                                                t._s(e["Job Details"].hash_mode)
                                            ),
                                          ])
                                        : a("td", [t._v("None")]),
                                      e["Job Details"].attack_mode
                                        ? a("td", [
                                            t._v(
                                              " " +
                                                t._s(
                                                  e["Job Details"].attack_mode
                                                )
                                            ),
                                          ])
                                        : a("td", [t._v("None")]),
                                      "" != e["Job Details"].rules
                                        ? a("td", [
                                            t._v(
                                              " " + t._s(e["Job Details"].rules)
                                            ),
                                          ])
                                        : e["Job Details"].mask
                                        ? a("td", [
                                            t._v(
                                              " " + t._s(e["Job Details"].mask)
                                            ),
                                          ])
                                        : a("td", [t._v("None")]),
                                      e["Job Details"].wordlist
                                        ? a("td", [
                                            t._v(
                                              " " +
                                                t._s(e["Job Details"].wordlist)
                                            ),
                                          ])
                                        : a("td", [t._v("None")]),
                                      e.State["HC State"]
                                        ? a("td", [
                                            t._v(
                                              " " +
                                                t._s(
                                                  e["State"]["HC State"][
                                                    "ETA (Relative)"
                                                  ]
                                                )
                                            ),
                                          ])
                                        : a("td", [t._v("None")]),
                                      e.State["HC State"]
                                        ? a("td", [
                                            t._v(
                                              " " +
                                                t._s(
                                                  e["State"]["HC State"][
                                                    "Progress"
                                                  ]
                                                )
                                            ),
                                          ])
                                        : a("td", [t._v("None")]),
                                      e.State["HC State"]
                                        ? a("td", [
                                            t._v(
                                              " " +
                                                t._s(
                                                  e["State"]["HC State"][
                                                    "Cracked Hashes"
                                                  ]
                                                )
                                            ),
                                          ])
                                        : a("td", [t._v("None")]),
                                      a("td", [
                                        a(
                                          "div",
                                          {
                                            staticClass: "btn-group",
                                            attrs: { role: "group" },
                                          },
                                          [
                                            a(
                                              "button",
                                              {
                                                directives: [
                                                  {
                                                    name: "b-modal",
                                                    rawName: "v-b-modal",
                                                    value: "details-modal",
                                                    expression:
                                                      "'details-modal'",
                                                  },
                                                ],
                                                staticClass:
                                                  "btn btn-primary btn-sm",
                                                attrs: { type: "button" },
                                              },
                                              [t._v(" Details ")]
                                            ),
                                            a(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-warning btn-sm",
                                                attrs: { type: "button" },
                                                on: {
                                                  click: function (e) {
                                                    return t.stopJob(s);
                                                  },
                                                },
                                              },
                                              [t._v(" Stop/Pause ")]
                                            ),
                                            a(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-danger btn-sm",
                                                attrs: { type: "button" },
                                                on: {
                                                  click: function (e) {
                                                    return t.delJob(s);
                                                  },
                                                },
                                              },
                                              [t._v(" Delete ")]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  );
                                }),
                                0
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]),
          ]
        );
      },
      jt = [],
      xt = (s("caad6"), s("2532"), s("310e")),
      At = s.n(xt),
      St = {
        data: function () {
          return {
            file: "",
            selected_word: "None",
            selected_rules: ["None"],
            options: [],
            queue: [],
            queueList: [],
            queueUpdate: [],
            hash_list: "",
            addJobForm: {
              name: "",
              hash_file: "",
              hash_mode: "",
              attack_mode: "",
              wordlist: "",
              mask: null,
              rules: null,
            },
            message: "",
            show_msg: !1,
            job_details: [],
            jobid: "",
            loading: !1,
          };
        },
        components: {
          showDetails: K,
          draggable: At.a,
          showProfile: it,
          showAdmin: tt,
        },
        computed: {},
        methods: {
          loadSpin: function () {
            this.loading = !0;
          },
          qreorder: function (t) {
            var e = this,
              s = this.queueList[t.oldIndex];
            this.queueList.splice(t.oldIndex, 1),
              this.queueList.splice(t.newIndex, 0, s);
            var a = [];
            for (var r in this.queueList) {
              var o = {};
              (o.job_id = this.queueList[r]), (o.place = r), a.push(o);
            }
            var i = { batch_job: a },
              n = "/api/queuing/reorder";
            v.a
              .put("" + n, i)
              .then(function (t) {
                200 === t.status &&
                  ((e.message = "Successfully reordered queue"),
                  e.showAlert("success"),
                  e.getQueue());
              })
              .catch(function (t) {
                if (((e.show_msg = !0), 200 !== t.response.status)) {
                  var s = t.response.data;
                  (e.message = "Error reordering queue: ".concat(s.msg)),
                    e.showAlert("error");
                }
                e.getQueue();
              });
          },
          showAlert: function (t) {
            this.$swal({
              text: this.message,
              icon: t,
              showCloseButton: !0,
              background: "#000000",
              confirmButtonColor: "success",
              showConfirmButton: !1,
            });
          },
          timedAlert: function (t) {
            var e = this;
            this.$swal({
              text: this.message,
              background: "#000000",
              timer: 12e3,
              timerProgressBar: !0,
              confirmButtonClass: "success",
              confirmButtonColor: "#00ff00",
              didOpen: function () {
                e.$swal.showLoading();
              },
              willClose: function () {
                e.getQueue();
                var s = Object.keys(e.queue["Current Job"]);
                s.includes(t)
                  ? ((e.message =
                      "Job may not be deleted yet.\nWaiting for Hashcat"),
                    e.showAlert("warning"))
                  : e.showAlert("success");
              },
            });
          },
          getQueue: function () {
            var t = this,
              e = "/api/queuing/all";
            v.a
              .get("" + e)
              .then(function (e) {
                (t.queue = e.data), (t.queueList = []);
                for (
                  var s = Object.keys(e.data["Queued Jobs"]), a = 0;
                  a < s.length;
                  a += 1
                )
                  t.queueList.push(s[a]);
              })
              .catch(function (t) {
                401 === t.response.status && (window.location.href = "login");
              });
          },
          getOptions: function () {
            var t = this,
              e = "/api/options";
            v.a
              .get("" + e)
              .then(function (e) {
                t.options = e.data;
              })
              .catch(function (t) {
                401 === t.response.status && (window.location.href = "login");
              });
          },
          delJob: function (t) {
            var e = this,
              s = "/api/queuing/";
            v.a
              .delete("" + s + t)
              .then(function (s) {
                200 === s.status
                  ? ((e.message = "Deleted"),
                    e.showAlert("success"),
                    e.getQueue())
                  : 204 === s.status &&
                    ((e.message = "Deleting Job"), e.timedAlert(t));
              })
              .catch(function (t) {
                var s = t.response.data;
                (e.message = "Error deleting job: ".concat(s.msg)),
                  e.showAlert("error"),
                  e.getQueue();
              });
          },
          stopJob: function (t) {
            var e = this,
              s = "/api/queuing/";
            v.a
              .patch("" + s + t)
              .then(function (s) {
                204 === s.status
                  ? ((e.message = "Stopping Job: ".concat(t)),
                    (e.message += "\nSent signal to hashcat"),
                    e.showAlert("success"),
                    e.getQueue())
                  : 200 === s.status &&
                    ((e.message = "Stopped Job: ".concat(t)),
                    e.showAlert("success"),
                    e.getQueue());
              })
              .catch(function (t) {
                if (((e.show_msg = !0), 204 !== t.response.status)) {
                  var s = t.response.data;
                  (e.message = "Error stopping job: ".concat(s.msg)),
                    e.showAlert("error");
                }
                e.getQueue();
              });
          },
          getJob: function (t) {
            var e = this,
              s = "/api/queuing/";
            v.a
              .get("" + s + t)
              .then(function (t) {
                200 === t.status && ((e.job_details = t.data), e.getQueue());
              })
              .catch(function (t) {
                (e.show_msg = !0),
                  401 === t.response.status
                    ? (e.message = "Unauthorized")
                    : 201 !== t.response.status &&
                      (e.message = "Error getting job details"),
                  e.getQueue();
              });
          },
          showProf: function () {
            this.$bvModal.show("profile-modal");
          },
          showAdmin: function () {
            this.$bvModal.show("admin-modal");
          },
        },
        created: function () {
          this.getQueue(),
            this.getOptions(),
            (this.timer = setInterval(this.getQueue, 3e4));
        },
      },
      Ft = St,
      Jt = Object(w["a"])(Ft, yt, jt, !1, null, null, null),
      Dt = Jt.exports,
      qt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          {
            staticClass: "container fluid",
            staticStyle: { "font-size": "0.9rem" },
          },
          [
            a("div", { staticClass: "row" }, [
              a(
                "div",
                { staticClass: "col-sm-16" },
                [
                  a(
                    "b-navbar",
                    { attrs: { toggleable: "lg", type: "dark" } },
                    [
                      a("b-navbar-brand", [
                        a("img", { attrs: { src: s("e3cf") } }),
                      ]),
                      a("showProfile"),
                      a("showAdmin"),
                      a("b-navbar-toggle", {
                        attrs: { target: "nav-collapse" },
                      }),
                      a(
                        "b-collapse",
                        { attrs: { id: "nav-collapse", "is-nav": "" } },
                        [
                          a(
                            "b-navbar-nav",
                            [
                              a("b-nav-item", { attrs: { href: "/" } }, [
                                t._v("Home"),
                              ]),
                              a("b-nav-item", { attrs: { href: "/queues" } }, [
                                t._v("Queues"),
                              ]),
                              a(
                                "b-nav-item",
                                { attrs: { href: "/complete" } },
                                [t._v("Complete")]
                              ),
                              a("b-nav-item", { attrs: { href: "/failed" } }, [
                                t._v("Failed"),
                              ]),
                              a("b-nav-item", { attrs: { href: "/reports" } }, [
                                t._v("Reports"),
                              ]),
                              a(
                                "b-nav-item",
                                { attrs: { href: "/benchmarks" } },
                                [t._v("Benchmarks")]
                              ),
                              a(
                                "b-nav-item-dropdown",
                                { attrs: { text: "User", right: "" } },
                                [
                                  a(
                                    "b-dropdown-item",
                                    { on: { click: t.showProf } },
                                    [t._v("Profile")]
                                  ),
                                  a(
                                    "b-dropdown-item",
                                    { on: { click: t.showAdmin } },
                                    [t._v("Admin")]
                                  ),
                                  a(
                                    "b-dropdown-item",
                                    { attrs: { href: "/login" } },
                                    [t._v("Login")]
                                  ),
                                  a(
                                    "b-dropdown-item",
                                    { attrs: { href: "/logout" } },
                                    [t._v("Logout")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a("br"),
                  a(
                    "b-card",
                    {
                      staticClass: "text-center",
                      attrs: { "no-body": "", "bg-variant": "secondary" },
                    },
                    [
                      a("div", { attrs: { slot: "header" }, slot: "header" }, [
                        a("small", { staticClass: "text-muted" }, [
                          t._v("Complete Jobs"),
                        ]),
                      ]),
                      a(
                        "b-tabs",
                        {
                          attrs: { card: "", "title-item-class": "tab-item" },
                          model: {
                            value: t.tabIndex,
                            callback: function (e) {
                              t.tabIndex = e;
                            },
                            expression: "tabIndex",
                          },
                        },
                        [
                          a("showDetails", { attrs: { jobID: t.jobid } }),
                          a(
                            "b-tab",
                            {
                              attrs: { title: "My Jobs" },
                              on: { click: t.update },
                            },
                            [
                              a(
                                "table",
                                {
                                  staticClass:
                                    "table-sm table-striped table-hover text-muted",
                                },
                                [
                                  a("thead", [
                                    a("tr", [
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Job ID"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Job Name"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Cracked"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Running Time"),
                                      ]),
                                      a("th"),
                                    ]),
                                  ]),
                                  a(
                                    "tbody",
                                    t._l(t.comp_q, function (e, s) {
                                      return a(
                                        "tr",
                                        {
                                          key: s,
                                          on: {
                                            click: function (e) {
                                              t.jobid = s;
                                            },
                                          },
                                        },
                                        [
                                          a(
                                            "td",
                                            s
                                              ? [t._v(" " + t._s(s))]
                                              : [t._v("None")]
                                          ),
                                          e.Name
                                            ? a("td", [
                                                t._v(" " + t._s(e.Name)),
                                              ])
                                            : a("td", [t._v("None")]),
                                          e.Cracked
                                            ? a("td", [
                                                t._v(" " + t._s(e.Cracked)),
                                              ])
                                            : a("td", [t._v("None")]),
                                          e["Running Time"]
                                            ? a("td", [
                                                t._v(
                                                  " " + t._s(e["Running Time"])
                                                ),
                                              ])
                                            : a("td", [t._v("None")]),
                                          a("td", [
                                            a(
                                              "div",
                                              {
                                                staticClass: "btn-group",
                                                attrs: { role: "group" },
                                              },
                                              [
                                                a(
                                                  "button",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-modal",
                                                        rawName: "v-b-modal",
                                                        value: "details-modal",
                                                        expression:
                                                          "'details-modal'",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "btn btn-primary btn-sm",
                                                    attrs: { type: "button" },
                                                  },
                                                  [t._v(" Details ")]
                                                ),
                                                a(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-warning btn-sm",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.resJob(s);
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Restore ")]
                                                ),
                                                a(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn text-dark btn-danger btn-sm",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.delJob(s);
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Delete ")]
                                                ),
                                                a(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn text-dark btn-secondary btn-sm",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.genReport(s);
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Report ")]
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                ]
                              ),
                            ]
                          ),
                          a(
                            "b-tab",
                            {
                              attrs: { title: "All Jobs" },
                              on: { click: t.update },
                            },
                            [
                              a(
                                "table",
                                {
                                  staticClass:
                                    "table-sm table-striped table-hover text-muted",
                                },
                                [
                                  a("thead", [
                                    a("tr", [
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Job ID"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Job Name"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Cracked"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Running Time"),
                                      ]),
                                      a("th"),
                                    ]),
                                  ]),
                                  a(
                                    "tbody",
                                    t._l(t.comp_q, function (e, s) {
                                      return a(
                                        "tr",
                                        {
                                          key: s,
                                          on: {
                                            click: function (e) {
                                              t.jobid = s;
                                            },
                                          },
                                        },
                                        [
                                          a(
                                            "td",
                                            s
                                              ? [t._v(" " + t._s(s))]
                                              : [t._v("None")]
                                          ),
                                          e.Name
                                            ? a("td", [
                                                t._v(" " + t._s(e.Name)),
                                              ])
                                            : a("td", [t._v("None")]),
                                          e.Cracked
                                            ? a("td", [
                                                t._v(" " + t._s(e.Cracked)),
                                              ])
                                            : a("td", [t._v("None")]),
                                          e["Running Time"]
                                            ? a("td", [
                                                t._v(
                                                  " " + t._s(e["Running Time"])
                                                ),
                                              ])
                                            : a("td", [t._v("None")]),
                                          a("td", [
                                            a(
                                              "div",
                                              {
                                                staticClass: "btn-group",
                                                attrs: { role: "group" },
                                              },
                                              [
                                                a(
                                                  "b-button",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-modal",
                                                        rawName: "v-b-modal",
                                                        value: "details-modal",
                                                        expression:
                                                          "'details-modal'",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "btn btn-primary btn-sm",
                                                    attrs: { type: "button" },
                                                  },
                                                  [t._v(" Details ")]
                                                ),
                                                a(
                                                  "b-button",
                                                  {
                                                    staticClass:
                                                      "btn btn-warning btn-sm",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.resJob(s);
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Restore ")]
                                                ),
                                                a(
                                                  "b-button",
                                                  {
                                                    staticClass:
                                                      "text-dark btn-danger btn-sm",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.delJob(s);
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Delete ")]
                                                ),
                                                a(
                                                  "b-button",
                                                  {
                                                    staticClass:
                                                      "text-dark btn-secondary btn-sm",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.genReport(s);
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Report ")]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
          ]
        );
      },
      Et = [],
      Pt = {
        data: function () {
          return {
            comp_q: [],
            message: "",
            show_msg: !1,
            jobid: "",
            tabIndex: 0,
          };
        },
        components: { showDetails: K, showProfile: it, showAdmin: tt },
        methods: {
          showAlert: function (t) {
            this.$swal({
              text: this.message,
              icon: t,
              showCloseButton: !0,
              background: "#000000",
              confirmButtonColor: "success",
              showConfirmButton: !1,
            });
          },
          timedAlert: function () {
            this.$swal({
              text: this.message,
              background: "#000000",
              color: "#00ff00",
              timer: 9e3,
              timerProgressBar: !0,
              showConfirmButton: !1,
              confirmButtonClass: "btn-sm btn-primary w-25",
            });
          },
          update: function () {
            (this.tabIndex = 1 - this.tabIndex), this.getComp();
          },
          getComp: function () {
            var t = this,
              e = "/api/queuing/complete";
            (e =
              1 === this.tabIndex
                ? "/api/queuing/complete"
                : "/api/queuing/completeless"),
              v.a
                .get("" + e)
                .then(function (e) {
                  t.comp_q = e.data;
                })
                .catch(function (t) {
                  401 === t.response.status
                    ? (window.location.href = "login")
                    : console.error(t);
                });
          },
          delJob: function (t) {
            var e = this,
              s = "/api/queuing/";
            v.a
              .delete("" + s + t)
              .then(function (t) {
                200 === t.status
                  ? ((e.message = "Deleted"),
                    e.showAlert("success"),
                    e.getComp())
                  : 204 === t.status &&
                    ((e.message = "Deleting job"), e.timedAlert());
              })
              .catch(function (t) {
                var s = t.response.data;
                (e.message = "Error deleting job: ".concat(s.msg)),
                  e.showAlert("error"),
                  e.getComp();
              });
          },
          resJob: function (t) {
            var e = this,
              s = "/api/add",
              a = { job_id: t };
            v.a
              .post("" + s, a)
              .then(function (s) {
                202 === s.status &&
                  ((e.message = "Successfully restored job: ".concat(t)),
                  e.showAlert("success"),
                  e.getComp());
              })
              .catch(function (t) {
                if (202 !== t.response.status) {
                  var s = t.response.data;
                  (e.message = "Error resuming job: ".concat(s.msg)),
                    e.showAlert("error");
                }
                e.getComp();
              });
          },
          genReport: function (t) {
            var e = this,
              s = "/api/reports",
              a = { job_id: t };
            v.a
              .post("" + s, a)
              .then(function (t) {
                202 === t.status
                  ? ((e.message = "Successfully queued report generation"),
                    e.showAlert("success"),
                    e.getComp())
                  : 401 === t.status
                  ? ((e.message = "Error: Not authorized"),
                    e.showAlert("error"))
                  : ((e.message = "Error: Internal Error"),
                    e.showAlert("error"));
              })
              .catch(function (t) {
                if (401 === t.response.status)
                  (e.message = "Error: Not authorized"), e.showAlert("error");
                else if (202 !== t.response.status) {
                  var s = t.response.data;
                  (e.message = "Error generating report: ".concat(s.msg)),
                    e.showAlert("error");
                }
                e.getComp();
              });
          },
          showProf: function () {
            this.$bvModal.show("profile-modal");
          },
          showAdmin: function () {
            this.$bvModal.show("admin-modal");
          },
        },
        created: function () {
          this.getComp();
        },
      },
      Ot = Pt,
      Bt = (s("f807"), Object(w["a"])(Ot, qt, Et, !1, null, null, null)),
      Mt = Bt.exports,
      Ht = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          {
            staticClass: "container fluid",
            staticStyle: { "font-size": "0.9rem" },
          },
          [
            a("div", { staticClass: "row" }, [
              a(
                "div",
                { staticClass: "col-sm-16" },
                [
                  a(
                    "b-navbar",
                    { attrs: { toggleable: "lg", type: "dark" } },
                    [
                      a("b-navbar-brand", [
                        a("img", { attrs: { src: s("e3cf") } }),
                      ]),
                      a("showProfile"),
                      a("showAdmin"),
                      a("b-navbar-toggle", {
                        attrs: { target: "nav-collapse" },
                      }),
                      a(
                        "b-collapse",
                        { attrs: { id: "nav-collapse", "is-nav": "" } },
                        [
                          a(
                            "b-navbar-nav",
                            [
                              a("b-nav-item", { attrs: { href: "/" } }, [
                                t._v("Home"),
                              ]),
                              a("b-nav-item", { attrs: { href: "/queues" } }, [
                                t._v("Queues"),
                              ]),
                              a(
                                "b-nav-item",
                                { attrs: { href: "/complete" } },
                                [t._v("Complete")]
                              ),
                              a("b-nav-item", { attrs: { href: "/failed" } }, [
                                t._v("Failed"),
                              ]),
                              a("b-nav-item", { attrs: { href: "/reports" } }, [
                                t._v("Reports"),
                              ]),
                              a(
                                "b-nav-item",
                                { attrs: { href: "/benchmarks" } },
                                [t._v("Benchmarks")]
                              ),
                              a(
                                "b-nav-item-dropdown",
                                { attrs: { text: "User", right: "" } },
                                [
                                  a(
                                    "b-dropdown-item",
                                    { on: { click: t.showProf } },
                                    [t._v("Profile")]
                                  ),
                                  a(
                                    "b-dropdown-item",
                                    { on: { click: t.showAdmin } },
                                    [t._v("Admin")]
                                  ),
                                  a(
                                    "b-dropdown-item",
                                    { attrs: { href: "/login" } },
                                    [t._v("Login")]
                                  ),
                                  a(
                                    "b-dropdown-item",
                                    { attrs: { href: "/logout" } },
                                    [t._v("Logout")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a("br"),
                  a(
                    "b-card",
                    {
                      staticClass: "text-center",
                      attrs: { "bg-variant": "secondary" },
                    },
                    [
                      a("div", { attrs: { slot: "header" }, slot: "header" }, [
                        a("small", { staticClass: "text-muted" }, [
                          t._v("Failed Jobs"),
                        ]),
                      ]),
                      a(
                        "b-tabs",
                        {
                          attrs: { card: "", "title-item-class": "tab-item" },
                          model: {
                            value: t.tabIndex,
                            callback: function (e) {
                              t.tabIndex = e;
                            },
                            expression: "tabIndex",
                          },
                        },
                        [
                          a("showDetails", { attrs: { jobID: t.jobid } }),
                          a(
                            "b-tab",
                            {
                              attrs: { title: "My Jobs" },
                              on: { click: t.update },
                            },
                            [
                              a(
                                "table",
                                {
                                  staticClass:
                                    "table-sm table-striped table-hover text-muted",
                                },
                                [
                                  a("thead", [
                                    a("tr", [
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Job ID"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Job Name"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Error Message"),
                                      ]),
                                    ]),
                                  ]),
                                  a(
                                    "tbody",
                                    t._l(t.fail_q, function (e, s) {
                                      return a(
                                        "tr",
                                        {
                                          key: s,
                                          on: {
                                            click: function (e) {
                                              t.jobid = s;
                                            },
                                          },
                                        },
                                        [
                                          a(
                                            "td",
                                            s
                                              ? [t._v(" " + t._s(s))]
                                              : [t._v("None")]
                                          ),
                                          e.Name
                                            ? a("td", [
                                                t._v(" " + t._s(e.Name)),
                                              ])
                                            : a("td", [t._v("None")]),
                                          e.Error
                                            ? a("td", [
                                                t._v(" " + t._s(e.Error)),
                                              ])
                                            : a("td", [t._v("None")]),
                                          a("td", [
                                            a(
                                              "div",
                                              {
                                                staticClass: "btn-group",
                                                attrs: { role: "group" },
                                              },
                                              [
                                                a(
                                                  "button",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-modal",
                                                        rawName: "v-b-modal",
                                                        value: "details-modal",
                                                        expression:
                                                          "'details-modal'",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "btn btn-primary btn-sm",
                                                    attrs: { type: "button" },
                                                  },
                                                  [t._v(" Details ")]
                                                ),
                                                a(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-warning btn-sm",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.resJob(s);
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Restore ")]
                                                ),
                                                a(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-danger btn-sm",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.delJob(s);
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Delete ")]
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                ]
                              ),
                            ]
                          ),
                          a(
                            "b-tab",
                            {
                              attrs: { title: "All Jobs" },
                              on: { click: t.update },
                            },
                            [
                              a(
                                "table",
                                {
                                  staticClass:
                                    "table-sm table-striped table-hover text-muted",
                                },
                                [
                                  a("thead", [
                                    a("tr", [
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Job ID"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Job Name"),
                                      ]),
                                      a("th", { attrs: { scope: "col" } }, [
                                        t._v("Error Message"),
                                      ]),
                                    ]),
                                  ]),
                                  a(
                                    "tbody",
                                    t._l(t.fail_q, function (e, s) {
                                      return a(
                                        "tr",
                                        {
                                          key: s,
                                          on: {
                                            click: function (e) {
                                              t.jobid = s;
                                            },
                                          },
                                        },
                                        [
                                          a(
                                            "td",
                                            s
                                              ? [t._v(" " + t._s(s))]
                                              : [t._v("None")]
                                          ),
                                          a(
                                            "td",
                                            e
                                              ? [t._v(" " + t._s(e.Name))]
                                              : [t._v("None")]
                                          ),
                                          a(
                                            "td",
                                            e
                                              ? [t._v(" " + t._s(e.Error))]
                                              : [t._v("None")]
                                          ),
                                          a("td", [
                                            a(
                                              "div",
                                              {
                                                staticClass: "btn-group",
                                                attrs: { role: "group" },
                                              },
                                              [
                                                a(
                                                  "button",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-modal",
                                                        rawName: "v-b-modal",
                                                        value: "details-modal",
                                                        expression:
                                                          "'details-modal'",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "btn btn-primary btn-sm",
                                                    attrs: { type: "button" },
                                                  },
                                                  [t._v(" Details ")]
                                                ),
                                                a(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-warning btn-sm",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.resJob(s);
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Restore ")]
                                                ),
                                                a(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-danger btn-sm",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.delJob(s);
                                                      },
                                                    },
                                                  },
                                                  [t._v(" Delete ")]
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
          ]
        );
      },
      Rt = [],
      Lt = {
        data: function () {
          return {
            fail_q: [],
            message: "",
            show_msg: !1,
            job_details: [],
            jobid: "",
            tabIndex: 0,
          };
        },
        components: { showDetails: K, showProfile: it, showAdmin: tt },
        methods: {
          showAlert: function (t) {
            this.$swal({
              text: this.message,
              icon: t,
              showCloseButton: !0,
              background: "#000000",
              confirmButtonColor: "success",
              showConfirmButton: !1,
            });
          },
          update: function () {
            (this.tabIndex = 1 - this.tabIndex), this.getFail();
          },
          getFail: function () {
            var t = this,
              e = "/api/queuing/failed";
            (e =
              1 === this.tabIndex
                ? "/api/queuing/failed"
                : "/api/queuing/failedless"),
              v.a
                .get("" + e)
                .then(function (e) {
                  t.fail_q = e.data;
                })
                .catch(function (t) {
                  401 === t.response.status && (window.location.href = "login");
                });
          },
          delJob: function (t) {
            var e = this,
              s = "/api/queuing/";
            v.a
              .delete("" + s + t)
              .then(function (s) {
                200 === s.status
                  ? ((e.message = "Deleted"),
                    e.showAlert("success"),
                    e.getFail())
                  : 204 === s.status &&
                    ((e.message = "Deleting Job"),
                    e.timedAlert(t),
                    e.getFail());
              })
              .catch(function (t) {
                var s = t.response.data;
                (e.message = "Error deleting job: ".concat(s.msg)),
                  e.showAlert("error"),
                  e.getFail();
              });
          },
          resJob: function (t) {
            var e = this,
              s = "/api/add",
              a = { job_id: t };
            v.a
              .post("" + s, a)
              .then(function (s) {
                202 === s.status &&
                  ((e.message = "Job Resumed: ".concat(t)),
                  e.showAlert("success"),
                  e.getFail());
              })
              .catch(function (t) {
                if (202 !== t.response.status) {
                  var s = t.response.data;
                  (e.message = "Error resuming job: ".concat(s.msg)),
                    e.showAlert("error");
                }
                e.getFail();
              });
          },
          getJob: function (t) {
            var e = this,
              s = "/api/queuing/";
            v.a
              .get("" + s + t)
              .then(function (t) {
                200 === t.status && ((e.job_details = t.data), e.getFail());
              })
              .catch(function (t) {
                (e.show_msg = !0),
                  401 === t.response.status
                    ? ((e.message = "Unauthorized"),
                      (e.variant = "danger"),
                      (e.show_msg = !0))
                    : 200 !== t.response.status &&
                      ((e.message = "Error getting job details"),
                      (e.variant = "danger"),
                      (e.show_msg = !0)),
                  e.getFail();
              });
          },
          showProf: function () {
            this.$bvModal.show("profile-modal");
          },
          showAdmin: function () {
            this.$bvModal.show("admin-modal");
          },
        },
        created: function () {
          this.getFail();
        },
      },
      Ut = Lt,
      Nt = Object(w["a"])(Ut, Ht, Rt, !1, null, null, null),
      $t = Nt.exports,
      zt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          {
            staticClass: "container fluid",
            staticStyle: { "font-size": "0.9rem" },
          },
          [
            a("div", { staticClass: "row" }, [
              a(
                "div",
                { staticClass: "col-sm-16" },
                [
                  a(
                    "b-navbar",
                    { attrs: { toggleable: "lg", type: "dark" } },
                    [
                      a("b-navbar-brand", [
                        a("img", { attrs: { src: s("e3cf") } }),
                      ]),
                      a("showProfile"),
                      a("showAdmin"),
                      a("b-navbar-toggle", {
                        attrs: { target: "nav-collapse" },
                      }),
                      a(
                        "b-collapse",
                        { attrs: { id: "nav-collapse", "is-nav": "" } },
                        [
                          a(
                            "b-navbar-nav",
                            [
                              a("b-nav-item", { attrs: { href: "/" } }, [
                                t._v("Home"),
                              ]),
                              a("b-nav-item", { attrs: { href: "/queues" } }, [
                                t._v("Queues"),
                              ]),
                              a(
                                "b-nav-item",
                                { attrs: { href: "/complete" } },
                                [t._v("Complete")]
                              ),
                              a("b-nav-item", { attrs: { href: "/failed" } }, [
                                t._v("Failed"),
                              ]),
                              a("b-nav-item", { attrs: { href: "/reports" } }, [
                                t._v("Reports"),
                              ]),
                              a(
                                "b-nav-item",
                                { attrs: { href: "/benchmarks" } },
                                [t._v("Benchmarks")]
                              ),
                              a(
                                "b-nav-item-dropdown",
                                { attrs: { text: "User", right: "" } },
                                [
                                  a(
                                    "b-dropdown-item",
                                    { on: { click: t.showProf } },
                                    [t._v("Profile")]
                                  ),
                                  a(
                                    "b-dropdown-item",
                                    { on: { click: t.showAdmin } },
                                    [t._v("Admin")]
                                  ),
                                  a(
                                    "b-dropdown-item",
                                    { attrs: { href: "/login" } },
                                    [t._v("Login")]
                                  ),
                                  a(
                                    "b-dropdown-item",
                                    { attrs: { href: "/logout" } },
                                    [t._v("Logout")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a("hr"),
                  a("br"),
                  a("br"),
                  a(
                    "b-card",
                    {
                      staticClass: "text-center",
                      attrs: { "bg-variant": "secondary" },
                    },
                    [
                      a("div", { attrs: { slot: "header" }, slot: "header" }, [
                        a("small", { staticClass: "text-muted" }, [
                          t._v("Report List"),
                        ]),
                      ]),
                      a("div", { staticClass: "text-muted" }, [
                        a(
                          "table",
                          {
                            staticClass:
                              "table-sm table-striped table-hover text-muted",
                          },
                          [
                            a("thead", [
                              a("tr", [
                                a("th", { attrs: { scope: "col" } }, [
                                  t._v("Job ID"),
                                ]),
                                a("th", { attrs: { scope: "col" } }, [
                                  t._v("Status"),
                                ]),
                                a("th"),
                              ]),
                            ]),
                            a(
                              "tbody",
                              t._l(t.reportQueue, function (e, s) {
                                return a("tr", { key: s }, [
                                  a("td", [t._v(t._s(s))]),
                                  a(
                                    "td",
                                    e
                                      ? [t._v(" " + t._s(e))]
                                      : [t._v("Loading")]
                                  ),
                                  a("td", [
                                    a(
                                      "div",
                                      {
                                        staticClass: "btn-group",
                                        attrs: { role: "group" },
                                      },
                                      [
                                        a(
                                          "b-button",
                                          {
                                            staticClass:
                                              "btn btn-primary btn-sm",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function (e) {
                                                return t.showReport(s);
                                              },
                                            },
                                          },
                                          [t._v(" View Report ")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]);
                              }),
                              0
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  a("br"),
                ],
                1
              ),
            ]),
          ]
        );
      },
      It = [],
      Qt = {
        data: function () {
          return { reportQueue: [], report: {}, message: "", show_msg: !1 };
        },
        components: { showDetails: K, showProfile: it, showAdmin: tt },
        methods: {
          showAlert: function (t) {
            this.$swal({
              text: this.message,
              icon: t,
              showCloseButton: !0,
              background: "#000000",
              confirmButtonColor: "success",
              showConfirmButton: !1,
            });
          },
          getReports: function () {
            var t = this,
              e = "/api/reports";
            v.a
              .get("" + e)
              .then(function (e) {
                t.reportQueue = e.data;
              })
              .catch(function (t) {
                401 === t.response.status
                  ? (window.location.href = "login")
                  : console.error(t);
              });
          },
          showReport: function (t) {
            window.open("/report/".concat(t), "_blank");
          },
          getReport: function (t) {
            var e = this,
              s = "/api/reports",
              a = t.substring(0, t.length - 7),
              r = { params: { job_id: a } };
            v.a
              .get("" + s, r)
              .then(function (t) {
                200 === t.status && (e.report = t.data);
              })
              .catch(function (t) {
                if (401 === t.response.status) window.location.href = "login";
                else {
                  var s = t.response.data;
                  (e.message = "Error getting report: ".concat(s.msg)),
                    e.showAlert("error");
                }
              });
          },
          showProf: function () {
            this.$bvModal.show("profile-modal");
          },
          showAdmin: function () {
            this.$bvModal.show("admin-modal");
          },
        },
        created: function () {
          this.getReports();
        },
      },
      Tt = Qt,
      Zt = Object(w["a"])(Tt, zt, It, !1, null, null, null),
      Kt = Zt.exports,
      Wt = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Yt = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "report" }, [
            s("html", [
              s("head", [
                s("title", [t._v(" CrackQ Password Analysis Report ")]),
              ]),
              s("body", [
                s("div", { staticClass: "report" }, [
                  s("h1", [t._v("CrackQ Password Analysis Report")]),
                ]),
                s("br"),
                s("br"),
                s("div", { staticClass: "report", attrs: { id: "vis1" } }),
                s("br"),
                s("br"),
                s("div", { staticClass: "report", attrs: { id: "vis2" } }),
                s("br"),
                s("br"),
                s("div", {
                  staticClass: "report",
                  attrs: { id: "vis3", align: "center" },
                }),
                s("br"),
                s("br"),
                s("div", {
                  staticClass: "report",
                  attrs: { id: "vis4", align: "center" },
                }),
                s("br"),
                s("br"),
                s("div", {
                  staticClass: "report",
                  attrs: { id: "vis5", align: "center" },
                }),
                s("br"),
                s("br"),
                s("div", {
                  staticClass: "report",
                  attrs: { id: "vis6", align: "center" },
                }),
              ]),
            ]),
          ]);
        },
      ],
      Gt = s("7ad3"),
      Xt = {
        name: "showReport",
        props: { jobID: String },
        data: function () {
          return { reportQueue: [], report: {}, message: "", show_msg: !1 };
        },
        components: { showDetails: K },
        methods: {
          getReports: function () {
            var t = this,
              e = "/api/reports";
            v.a
              .get("" + e)
              .then(function (e) {
                t.reportQueue = e.data;
              })
              .catch(function (t) {
                401 === t.response.status
                  ? (window.location.href = "login")
                  : console.error(t);
              });
          },
          getReport: function (t) {
            var e = this,
              s = "/api/reports",
              a = t.substring(0, t.length - 7),
              r = { params: { job_id: a } };
            v.a
              .get("" + s, r)
              .then(function (t) {
                (e.report = t.data),
                  Object(Gt["default"])("#vis1", e.report.topx_chart),
                  Object(Gt["default"])("#vis2", e.report.len_chart),
                  Object(Gt["default"])("#vis3", e.report.base_chart),
                  Object(Gt["default"])("#vis4", e.report.country_chart),
                  Object(Gt["default"])("#vis5", e.report.city_chart),
                  Object(Gt["default"])("#vis6", e.report.city_gps_chart);
              })
              .catch(function (t) {
                401 === t.response.status
                  ? (window.location.href = "login")
                  : console.error(t);
              });
          },
          renderReport: function () {
            var t = "c2a9f1a8b61a416b9a08d0c548ec1a28";
            this.getReport(t),
              Object(Gt["default"])("#vis1", this.report.topx_chart),
              Object(Gt["default"])("#vis2", this.report.len_chart),
              Object(Gt["default"])("#vis3", this.report.base_chart);
          },
        },
        created: function () {
          var t = this.$router.currentRoute.params.job_id;
          console.log(this.$router.currentRoute.params), this.getReport(t);
        },
      },
      Vt = Xt,
      te =
        (s("f0f9"),
        s("b876"),
        Object(w["a"])(Vt, Wt, Yt, !1, null, "587f2b87", null)),
      ee = te.exports,
      se = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { attrs: { margin: "0" } }, [
          a(
            "div",
            {
              staticClass: "container",
              staticStyle: { "font-size": "0.9rem" },
            },
            [
              a("div", { staticClass: "row" }, [
                a(
                  "div",
                  { staticClass: "col-sm-16" },
                  [
                    a(
                      "b-navbar",
                      { attrs: { toggleable: "lg", type: "dark" } },
                      [
                        a("b-navbar-brand", [
                          a("img", { attrs: { src: s("e3cf") } }),
                        ]),
                        a("showProfile"),
                        a("showAdmin"),
                        a("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" },
                        }),
                        a(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            a(
                              "b-navbar-nav",
                              [
                                a("b-nav-item", { attrs: { href: "/" } }, [
                                  t._v("Home"),
                                ]),
                                a(
                                  "b-nav-item",
                                  { attrs: { href: "/queues" } },
                                  [t._v("Queues")]
                                ),
                                a(
                                  "b-nav-item",
                                  { attrs: { href: "/complete" } },
                                  [t._v("Complete")]
                                ),
                                a(
                                  "b-nav-item",
                                  { attrs: { href: "/failed" } },
                                  [t._v("Failed")]
                                ),
                                a(
                                  "b-nav-item",
                                  { attrs: { href: "/reports" } },
                                  [t._v("Reports")]
                                ),
                                a(
                                  "b-nav-item",
                                  { attrs: { href: "/benchmarks" } },
                                  [t._v("Benchmarks")]
                                ),
                                a(
                                  "b-nav-item-dropdown",
                                  { attrs: { text: "User", right: "" } },
                                  [
                                    a(
                                      "b-dropdown-item",
                                      { on: { click: t.showProf } },
                                      [t._v("Profile")]
                                    ),
                                    a(
                                      "b-dropdown-item",
                                      { on: { click: t.showAdmin } },
                                      [t._v("Admin")]
                                    ),
                                    a(
                                      "b-dropdown-item",
                                      { attrs: { href: "/login" } },
                                      [t._v("Login")]
                                    ),
                                    a(
                                      "b-dropdown-item",
                                      { attrs: { href: "/logout" } },
                                      [t._v("Logout")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    a("br"),
                    a(
                      "div",
                      { attrs: { align: "center" } },
                      [
                        a(
                          "b-card-group",
                          {
                            staticStyle: {
                              "max-height": "19rem",
                              align: "center",
                              "margin-left": "0",
                              "margin-top": "0",
                            },
                            attrs: { deck: "" },
                          },
                          [
                            a(
                              "b-card",
                              {
                                staticStyle: {
                                  "min-width": "11rem",
                                  "max-height": "19rem",
                                  "max-width": "11rem",
                                  "margin-left": "0",
                                  "margin-top": "0",
                                },
                                attrs: {
                                  align: "center",
                                  "bg-variant": "secondary",
                                },
                              },
                              [
                                a(
                                  "div",
                                  {
                                    staticClass: "border border-success",
                                    staticStyle: { "border-radius": "0.3rem" },
                                  },
                                  [
                                    a(
                                      "b-button-group",
                                      {
                                        staticClass: "btn-block",
                                        staticStyle: { margin: "0" },
                                        attrs: { vertical: "" },
                                      },
                                      [
                                        a(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary btn-sm text-primary",
                                            on: {
                                              click: function (e) {
                                                return t.runBench((t.all = !1));
                                              },
                                            },
                                          },
                                          [t._v(" Benchmark ")]
                                        ),
                                        a(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary btn-sm text-primary",
                                            on: {
                                              click: function (e) {
                                                return t.runBench((t.all = !0));
                                              },
                                            },
                                          },
                                          [t._v(" Full Benchmark ")]
                                        ),
                                        a(
                                          "b-form-checkbox",
                                          {
                                            staticClass: "text-success",
                                            attrs: { switch: "" },
                                            model: {
                                              value: t.refresh,
                                              callback: function (e) {
                                                t.refresh = e;
                                              },
                                              expression: "refresh",
                                            },
                                          },
                                          [t._v(" Auto refresh ")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    a("br"),
                    a(
                      "div",
                      {
                        staticStyle: { "max-height": "200rem" },
                        attrs: { align: "center" },
                      },
                      [
                        a(
                          "tr",
                          [
                            a(
                              "b-card",
                              {
                                staticStyle: {
                                  "min-width": "90rem",
                                  "max-width": "300rem",
                                  "min-height": "40rem",
                                  "margin-left": "0",
                                },
                                attrs: {
                                  "border-variant": "secondary",
                                  "bg-variant": "secondary",
                                },
                              },
                              [
                                a(
                                  "div",
                                  { attrs: { slot: "header" }, slot: "header" },
                                  [
                                    a("small", { staticClass: "text-muted" }, [
                                      t._v(" CrackQ System Benchmarks "),
                                    ]),
                                  ]
                                ),
                                a("barGraph", {
                                  attrs: {
                                    chartData: t.bench_data,
                                    options: t.bg_options,
                                  },
                                }),
                                a(
                                  "div",
                                  { attrs: { slot: "footer" }, slot: "footer" },
                                  [
                                    a("small", { staticClass: "text-muted" }, [
                                      t._v(
                                        "Last updated at: " + t._s(this.time)
                                      ),
                                    ]),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                    a("br"),
                  ],
                  1
                ),
                a("br"),
              ]),
            ]
          ),
        ]);
      },
      ae = [],
      re = {
        mixins: [h["validationMixin"]],
        data: function () {
          var t = this;
          return {
            csrf_token: "",
            options: [],
            hashModes: [],
            benchmarks: [],
            message: "",
            variant: "",
            show_msg: !1,
            gradient: null,
            refresh: !1,
            time: Date(),
            bg_options: {
              maintainAspectRatio: !1,
              scales: {
                xAxes: [
                  {
                    scaleLabel: { labelString: "Hash Mode", display: !0 },
                    gridLines: { display: !0 },
                    ticks: {
                      fontSize: 8,
                      autoSkip: !1,
                      maxRotation: 90,
                      beginAtZero: !0,
                    },
                  },
                ],
                yAxes: [
                  {
                    scaleLabel: { labelString: "Speed (H/S)", display: !0 },
                    gridLines: { display: !0 },
                    ticks: {
                      beginAtZero: !0,
                      callback: function (t) {
                        return t.toLocaleString();
                      },
                    },
                  },
                ],
              },
              tooltips: {
                callbacks: {
                  title: function () {
                    return "Hash Details";
                  },
                  label: function (e, s) {
                    var a = s.labels[e.index],
                      r = t.options["Hash Modes"][a];
                    return "Hash mode: "
                      .concat(r[0], ", Description: ")
                      .concat(r[1]);
                  },
                  afterLabel: function (e, s) {
                    var a = parseInt(s.labels[e.index], 10),
                      r = t.benchmarks[a];
                    return "Speed: ".concat(r[1]);
                  },
                },
              },
            },
            bench_data: {},
          };
        },
        components: { barGraph: N, showProfile: it, showAdmin: tt },
        methods: {
          showAlert: function (t) {
            this.$swal({
              text: this.message,
              icon: t,
              showCloseButton: !0,
              background: "#000000",
              confirmButtonColor: "success",
              showConfirmButton: !1,
              buttonsStyling: !1,
              confirmButtonClass: "btn-sm btn-primary w-25",
              cancelButtonClass: "btn-sm btn-danger w-25",
            });
          },
          customAlert: function (t, e) {
            (this.message = t), this.showAlert(e);
          },
          showProf: function () {
            this.$bvModal.show("profile-modal");
          },
          showAdmin: function () {
            this.$bvModal.show("admin-modal");
          },
          getRefresh: function () {
            this.refresh && this.getBenchmarks();
          },
          getBenchmarks: function () {
            var t = this,
              e = "/api/benchmark/";
            v.a
              .get("" + e)
              .then(function (e) {
                t.time = Date();
                var s = [],
                  a = [];
                for (var r in ((t.benchmarks = e.data.Benchmarks),
                e.data.Benchmarks))
                  "2000" !== r && (s.push(r), a.push(e.data.Benchmarks[r][0]));
                t.bench_data = {
                  labels: s,
                  datasets: [
                    {
                      fill: !0,
                      backgroundColor: "rgba(255,0,0,1)",
                      data: a,
                      label: "Benchmark Results",
                      pointRadius: 0,
                    },
                  ],
                  responsive: !0,
                };
              })
              .catch(function (e) {
                (t.connected = !1),
                  e.response &&
                    401 === e.response.status &&
                    (window.location.href = "login");
              });
          },
          getOptions: function () {
            var t = this,
              e = "/api/options";
            v.a
              .get("" + e)
              .then(function (e) {
                (t.options = e.data),
                  t.options.Wordlists.splice(0, 0, ""),
                  (t.hashModes = Object.keys(e.data["Hash Modes"]).map(
                    function (t) {
                      return {
                        id: t,
                        name: e.data["Hash Modes"][t][0],
                        category: e.data["Hash Modes"][t][1],
                      };
                    }
                  ));
              })
              .catch(function (t) {
                401 === t.response.status && (window.location.href = "login");
              });
          },
          logout: function () {
            var t = this,
              e = "/api/logout";
            v.a
              .get("" + e)
              .then(function (e) {
                (t.options = e.data),
                  200 === e.status &&
                    ((t.message = "Logged Out"),
                    t.showAlert("success"),
                    (window.location.href = "login"));
              })
              .catch(function (e) {
                (t.show_msg = !0),
                  200 !== e.response.status &&
                    ((t.message = "Error Logging Out"), t.showAlert("error"));
              });
          },
          runBench: function (t) {
            var e = this;
            (this.message = "Queue benchmark job?"),
              this.$swal({
                text: this.message,
                icon: "question",
                iconColor: "#00ff00",
                showCloseButton: !0,
                background: "#000000",
                buttonsStyling: !1,
                confirmButtonClass: "btn-sm btn-primary w-25",
                cancelButtonClass: "btn-sm btn-danger w-25",
                showConfirmButton: !0,
                showCancelButton: !0,
              }).then(function (s) {
                if (!0 === s.value) {
                  e.refresh = !0;
                  var a = { benchmark_all: t },
                    r = "/api/benchmark/";
                  v.a
                    .post("" + r, a)
                    .then(function (t) {
                      (e.job_id = t.data),
                        (e.message = "Job Submitted Successfully:\n ".concat(
                          e.job_id
                        )),
                        e.showAlert("success");
                    })
                    .catch(function (t) {
                      if (202 !== t.response.status) {
                        e.message = "Error Submitting Job:\n";
                        var s = t.response.data;
                        if ("object" === Object(S["a"])(s)) {
                          var a = Object.keys(s);
                          if (a.length > 1)
                            for (var r = 0; r < a.length; r += 1)
                              e.message += ""
                                .concat([a[r]], " - ")
                                .concat(s[a[r]], "\n");
                          else e.message += "".concat(s.msg);
                        }
                        e.showAlert("error");
                      }
                    });
                } else
                  s.dismiss &&
                    ((e.message = "Cancelled"), e.showAlert("error"));
              });
          },
        },
        created: function () {
          (v.a.defaults.xsrfCookieName = "csrftoken"),
            (v.a.defaults.xsrfHeaderName = "X-CSRFTOKEN"),
            this.getOptions(),
            this.getBenchmarks(),
            (this.timer = setInterval(this.getRefresh, 5e3));
        },
      },
      oe = re,
      ie = (s("fd77"), Object(w["a"])(oe, se, ae, !1, null, null, null)),
      ne = ie.exports;
    u["default"].use(j["a"]);
    var de = new j["a"]({
      mode: "history",
      base: "/",
      routes: [
        { path: "/", name: "CrackQ", component: ct },
        { path: "/queues", name: "Queues", component: Dt },
        { path: "/complete", name: "Complete", component: Mt },
        { path: "/failed", name: "Failed", component: $t },
        { path: "/login", name: "Login", component: pt },
        { path: "/logout", name: "Logout", component: Ct },
        { path: "/reports", name: "Reports", component: Kt },
        { path: "/report/:job_id", name: "Report", component: ee },
        { path: "/admin", name: "Admin", component: tt },
        { path: "/profile", name: "Profile", component: it },
        { path: "/benchmarks", name: "Benchmarks", component: ne },
      ],
    });
    s("3dd1"), s("4413");
    u["default"].use(f.a),
      u["default"].use(l["a"]),
      u["default"].use(b["default"]),
      (u["default"].config.productionTip = !1),
      u["default"].component("multiselect", m.a),
      (v.a.defaults.xsrfCookieName = "csrftoken"),
      (v.a.defaults.xsrfHeaderName = "X-CSRFTOKEN"),
      new u["default"]({
        router: de,
        render: function (t) {
          return t(y);
        },
      }).$mount("#app");
  },
  "571d": function (t, e, s) {},
  "69ce": function (t, e, s) {},
  7174: function (t, e, s) {},
  7225: function (t, e, s) {},
  "845f": function (t, e, s) {},
  "85ec": function (t, e, s) {},
  a083: function (t, e, s) {},
  b876: function (t, e, s) {
    "use strict";
    var a = s("571d"),
      r = s.n(a);
    r.a;
  },
  bd39: function (t, e, s) {
    t.exports = s.p + "img/crackq_medium.a967061e.png";
  },
  d828: function (t, e, s) {},
  db7b: function (t, e, s) {
    "use strict";
    var a = s("7225"),
      r = s.n(a);
    r.a;
  },
  e3cf: function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAkCAYAAAB/up84AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpaIVhxaR4pChOlkQFXHUKhShQqgVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi4uqk6CIl/i8ptIj14Lgf7+497t4BQr3MNKtrHNB020wl4mImuyoGXtGHEAYRQUBmljEnSUl0HF/38PH1LsazOp/7c/SrOYsBPpF4lhmmTbxBPL1pG5z3icOsKKvE58RjJl2Q+JHrisdvnAsuCzwzbKZT88RhYrHQxkobs6KpEU8RR1VNp3wh47HKeYuzVq6y5j35C4M5fWWZ6zSHkcAiliBBhIIqSijDRoxWnRQLKdqPd/BHXL9ELoVcJTByLKACDbLrB/+D391a+ckJLykYB7pfHOdjBAjsAo2a43wfO07jBPA/A1d6y1+pAzOfpNdaWvQIGNgGLq5bmrIHXO4AQ0+GbMqu5Kcp5PPA+xl9UxYI3QK9a15vzX2cPgBp6ip5AxwcAqMFyl7v8O6e9t7+PdPs7wc8b3KRYY61ngAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+MLExYxKxsyK9wAAApwSURBVGje7ZpLjBzHfcZ/Vd3T89x57JO72mVIcW3Hph5MHErRwSYIGzECWAiQHHJJDORgn204ieGccvHFB98F26cEPiSBEwdBohixLStSxFiWFCmCrBX14nI1+5yd2enp7qqu7iofesXlmuQSpMyF48x3WWx3oetf/6/qq399NQJwjPErAzlOwZiQMcaEjAkZY0zImJAx7gH8cQqOgLjJoeD3BaWPTVEql1AqwT49gJ/e2y5/efCA/C4iOSqq699JwH7AUZcAc5OYr//256D16GnqzTqlWgm/6iOkxOWOLMmwKmdzsEX65Dr8ywfL7F0TIhag8oU5qqcauFkJFpyz5NZh+in6uT3cEyHeZytUHp/Gny+DACEEQkhEDraXkbw2Qj+xBcNf6OB+QfB4i+ojHVxdolZGpF/bgqE7FLm46FO9MEWwXMe1JTgHCJy16B1N+h8D+F6M/5VJrIP8e3vwUnYoAd6ft2C+TP7jEPfPyUFWLkpmP7fM5PIMQbWC9CRIgRDioH/AWYfNLEopNp67yt631mAlPz7JEk3BxGPTTDVPIGIJ74LDgXPFoJVh21doQqqVBpO6jdf192dckTAhBDgwU1W2P2tR39k51EewUGeyM0tlWEOMIDEeG789gKd00cCBvE/SWZ6n0eog9iRiyD4hgBNopejZhHRG00naZOTs+oND/TigaVp4acBepklJriV6+uGT1PIa+XspyjPvR35oCgtRsCoQWGvp1NuocyN0twfhMRHiLfpUPtVB13J2v7GK8CxOHETprCWNEkRbIKc98inB1rNd+KGC2v5AUig/VKP2mUkalfaNhDxYw5326f33JqVcEnyiSfXRSZKn1g+Cf7SB/0iNJFTs/c0WIrGF5OwTYskwVxLEsoeY94oJURU3TrBZDzHvQ9O79qz5F/fR/t1ZgnYFJx3CFt/MbU6aaqzO8aoBQamEJyRI8B0ErTJznSW6Q0P2b8PjIcQJixKKfJCgXunfeiVNgrYaTITaDuH15ND7dEphwxJWikPqKR6WZCccYRgSX9rBm4DqR8FNS1iQ0C3E3QWWWCSYQYq+NLh1HFYQ5TFZ7iC9UbPjPEFkOXm+v5k8AtXfahKcrhNUApx1pKlmuDUgemFA8mKI7RuC+Qql83U6D81SaVfxZQmHo9ypUflkk9FbI3jDHgMhiUOvxdjEHbkNOQu2bzBrGgbpDe/zzRR1JUbIXwhjQpCaDPF6CC8a7AKo10KYC2D5gJB8kJKsjrDvmdvEa0nXFTZ30M9ukCy9ESNdhh0U3yktNPH2BGZbkdcMTluS3ZjeD9ZJntyGK8V4U0L4z23kn4H96CSlZoCQgkwZyiIgDnws6b0nRNYkjZMtTJxh6N26YQCV+QadszMkfgVOZwhZSIZzDm/WR5wt0397cLA62oKJ87P499fZ/dF7RdsuyFhQP9Uks2XCp4vnfqdCdXECnSnUUYI9IZk42aRUL5PLJuLC/iYBiADkuSphFDGyxSprPjJJ44EOtXYDT3pkLiPsD1Grw2tkXMMqDC/v0P7ELLXpCaQUZDbHNRzhT/qkrx4DISKXBEkJp27Tzgo8JQlMQGVpCjtti83fA6TACUe4EaL+cfMgoI9UqUzVYc+DlYPB5Fc1wbZHuTVBeF7C8xY/96mYMmSWo0KRuSSIS9SnG/BAHWcczjmEJxAlQaRi1Esj+EG2XwkHuFGGYgRC4BKLeiPCdW+eXPOzEeaKQuEjfAHWIUOB7PgwCezeY0KsLUo8o7KjG2aOTBtG/ZDByz14ReOEIzhTpXahQ7qh2fvq2qHDipjyMC2LWovgJwfP8x8r4gdDgo80EPdVcM/HZFmG1inG3EayUkuapuiNPtELA3g3BQfemRLN87OoMCF742ADNsZg+hlu5Pb/z9AbGrZvvh+IlyDpJ/i1EtLzAEeuM5xzB0XGPZWstiR4uI4Ib5OIOninA4IHa6iVVXgmKrTXRQQX69QfazP4kx342/3vnIHWp2aYvfAbyFyi/uh+MpchAF+WqPgVMpdBIOj902VKJ8tUPz6BbPjER8Ux4wjOVjFY9I8G8Mz+RHoWqhfa1M61MMOU6NkuAPWzLdofm8YXRXq00wzX94gqt/g+UH+wSXtxBk8WDGir6XV76KeB7Xu9QvYs6rUReZwffbZUkK4mRC8PYfVgNblncsL5bbKLjsp8jWRf/72pgExnbD/fZfizPi7JcM5eO7f4zRK1k03E0MKHIbuakr4aYVb10QEPIHk9wjgLO4dn+eDJLs3wBM4DHpbwsiW5OiK6r0apXUYAaqAwfc1RuqjWIqLJKv5ECXJHvBVh1jWMjqPsVZZ4c4TV7uiDfgZmVxF2h7BzuJ15JcJOC2zNg5MSVi2u6oiUwl0aYb65C43rZwFoCeYPFZyqwlJA1tNEmxHZ9m02ztgV8VpucATs3yeMZvawLQl1D7DojQS1FYNxICRmqMnSrLBZboYOmL2UdFfjtMXlDr2ekK9p6B8HIRYatTqzFxZJPjyCrfyQb5xnOTvdTfS3+7TOTNP5+Dxvbo3gqYPEuRVL+ZNlWo/Nk8y16f/lO8x95hS132zz1uZK0egmsysQZSYfOIGZbLP+nRUW5qapnW+SPBRB34JwOBwWR5LG9F/cRIQZCw8tkpLRfbMPrx6Wm1LJZ+53lginhuy8eJlKu0pztkV5sgJSMNFp4F30WHtbk17pH4jC/t/O55eYP7dEcKKMCCQYEL6gF/hk+s7tv7++Y0aGDrMeMTIh8VmLmXOo6Yx0NkdNZ4wmFGk3wb2gyU5bRnVF9nwMbx0uAvI0RVVT0moGDYdeyBnuhORf37vlysuMRjVTIhTuVU38TJ9wKkGdsZhZi5rJiKdToqZCaYV9N0W8k5GczhntRtifatg8LFv2fxPiZUMiNHaQEqchwVwdHKSjlDRKkQa0TdHdIVxvKnwIJh9fxGuUMNqQhpo0TNlZ2SL64Q6s3Zmn9cHc3g6wJAtf6voVlDnoOdhwRdnXEbABRO7G25hZUdgpe0Bz32G94o6+wTkhIADWHWhgEZjyCl/J7Q8odxC7YkONHCzue1Ab7rC7+z6WRKEX7zhYhukvLtM81cHzvcJQtJCmKe9d7mL+YR2eA34Pmn98mqm5KXzfLzwtK8hMRve/rqL+bhPedsdIyK8xJr+8xPynT1GZqSIqAuHJQgqNJdcWZx3SE8iyLM4egDMOoaC33mPtictk/3rnXtaYkCMSU/38DO1zMwQnK5Tq5aKkFTc2dKKw4NORIrk6Yve7G5jv741vDH+ZcED8zW3KX6rg131MTUC9jF8uITxxHRkO6cClDptYBs/27pqMu9/U/x9BXRqStxxlVYYJoO0jfYnv+ZRlQCDLlLyAoFSm1AywM44oiWHF/Ape4f66oCYQdYmYAFH2wAnkokfrDxZoTE3ge6X9CzdHbnJG8Yjev3fJvxvecXbHhHxAnPirD1FdbuA1/ELK9uUrGxnW/2cN/f0evOnGhBwnmn96gupcHenLa66CTS2jPCZ+o4+7pIqyfkzIMSEAPIGQBxXB+1f7GAfZWLL+z2L8y8UxIWOMCRkTMsbd4ueP7zza6YQNDwAAAABJRU5ErkJggg==";
  },
  f0f9: function (t, e, s) {
    "use strict";
    var a = s("69ce"),
      r = s.n(a);
    r.a;
  },
  f807: function (t, e, s) {
    "use strict";
    var a = s("a083"),
      r = s.n(a);
    r.a;
  },
  faf5: function (t, e, s) {},
  fd77: function (t, e, s) {
    "use strict";
    var a = s("18b2"),
      r = s.n(a);
    r.a;
  },
});
