(window.webpackJsonp = window.webpackJsonp || []).push([
  [81],
  {
    699: function (e, t, n) {
      "use strict";
      var o = n(2),
        r = n(96).findIndex,
        l = n(146),
        c = "findIndex",
        d = !0;
      c in [] &&
        Array(1)[c](function () {
          d = !1;
        }),
        o(
          {
            target: "Array",
            proto: !0,
            forced: d,
          },
          {
            findIndex: function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        l(c);
    },
    700: function (e, t, n) {
      var content = n(781);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(33).default)("c9873810", content, !0, {
        sourceMap: !1,
      });
    },
    701: function (e, t, n) {
      var content = n(783);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(33).default)("8f1349fa", content, !0, {
        sourceMap: !1,
      });
    },
    755: function (e, t, n) {
      "use strict";
      n.r(t);
      n(53), n(183), n(496), n(57), n(20), n(71);
      var o = n(646),
        r = n.n(o),
        l = n(141),
        c = {
          name: "WorkGridItem",
          props: {
            data: {
              type: Object,
              required: !0,
            },
            selectedCategory: {
              type: Object,
              required: !0,
            },
          },
          computed: {
            active: function () {
              return (
                "All" === this.selectedCategory.name ||
                (this.data.content.services &&
                  this.data.content.services.includes(
                    this.selectedCategory.name
                  ))
              );
            },
            cursorCopy: function () {
              return this.$store.getters.cursorCopy;
            },
          },
          methods: {
            getAspect: l.b,
            formatDate: function (e) {
              return r()(new Date(e), "YYYY-MM-DD").format("MM/DD/YY");
            },
            handleMouseMove: function (e) {
              "View Post" !== this.cursorCopy &&
                this.$store.dispatch("setCursorCopy", "View Post");
            },
            handleMouseLeave: function () {
              "" !== this.cursorCopy &&
                this.$store.dispatch("setCursorCopy", "");
            },
          },
        },
        d = n(9),
        component = Object(d.a)(
          c,
          function () {
            var e,
              t,
              n,
              o,
              r = this,
              l = r._self._c;
            return l(
              "li",
              {
                class: [
                  r.data.sizing,
                  {
                    active: r.active,
                  },
                ],
              },
              [
                r.data.content.link && "" !== r.data.content.link
                  ? l(
                      "a",
                      {
                        attrs: {
                          href: r.data.content.link,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        l(
                          "div",
                          {
                            class: ["asset", r.data.content.sizing],
                            on: {
                              mousemove: r.handleMouseMove,
                              mouseleave: r.handleMouseLeave,
                            },
                          },
                          [
                            l(
                              "div",
                              {
                                staticClass: "asset__container",
                              },
                              [
                                l("SanityImage", {
                                  ref: "image",
                                  staticClass: "abs full cover",
                                  attrs: {
                                    image: r.data.content.asset.image,
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                        r._v(" "),
                        l("p", [r._v(r._s(r.data.content.title))]),
                        r._v(" "),
                        l("p", [
                          r._v(
                            "\n            " +
                              r._s(
                                r.data.content.date
                                  ? ""
                                      .concat(r.formatDate(r.data.content.date))
                                      .concat(
                                        r.data.content.services &&
                                          r.data.content.services.length > 0
                                          ? " • "
                                          : ""
                                      )
                                  : ""
                              ) +
                              "\n            " +
                              r._s(
                                (null === (e = r.data) ||
                                void 0 === e ||
                                null === (e = e.content) ||
                                void 0 === e
                                  ? void 0
                                  : e.services) &&
                                  (null === (t = r.data.content) ||
                                  void 0 === t ||
                                  null === (t = t.services) ||
                                  void 0 === t
                                    ? void 0
                                    : t.join(", "))
                              ) +
                              "\n        "
                          ),
                        ]),
                        r._v(" "),
                        r.data.content.copy
                          ? l("block-content", {
                              attrs: {
                                blocks: r.data.content.copy,
                              },
                            })
                          : r._e(),
                      ],
                      1
                    )
                  : [
                      l(
                        "div",
                        {
                          class: ["asset", r.data.content.sizing],
                        },
                        [
                          l(
                            "div",
                            {
                              staticClass: "asset__container",
                            },
                            [
                              l("SanityImage", {
                                ref: "image",
                                staticClass: "abs full cover",
                                attrs: {
                                  image: r.data.content.asset.image,
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                      r._v(" "),
                      l("p", [r._v(r._s(r.data.content.title))]),
                      r._v(" "),
                      l("p", [
                        r._v(
                          "\n            " +
                            r._s(
                              r.data.content.date
                                ? "".concat(
                                    r.formatDate(r.data.content.date),
                                    " • "
                                  )
                                : ""
                            ) +
                            "\n            " +
                            r._s(
                              (null === (n = r.data) ||
                              void 0 === n ||
                              null === (n = n.content) ||
                              void 0 === n
                                ? void 0
                                : n.services) &&
                                (null === (o = r.data.content) ||
                                void 0 === o ||
                                null === (o = o.services) ||
                                void 0 === o
                                  ? void 0
                                  : o.join(", "))
                            ) +
                            "\n        "
                        ),
                      ]),
                      r._v(" "),
                      r.data.content.copy
                        ? l("block-content", {
                            attrs: {
                              blocks: r.data.content.copy,
                            },
                          })
                        : r._e(),
                    ],
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
      installComponents(component, {
        SanityImage: n(471).default,
      });
    },
    780: function (e, t, n) {
      "use strict";
      n(700);
    },
    781: function (e, t, n) {
      var o = n(32)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        '.filter[data-v-4b39834a]{position:fixed;z-index:10;mix-blend-mode:difference;color:#fff;pointer-events:none;width:100%}.filter__bg[data-v-4b39834a]{position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:0;pointer-events:auto;opacity:0;visibility:hidden}.filter ul[data-v-4b39834a]{position:absolute;z-index:1}.filter span[data-v-4b39834a]{color:#fff}.filter__item[data-v-4b39834a]{position:relative;display:inline-block;pointer-events:none}.filter__item button[data-v-4b39834a]{pointer-events:auto}.filter__item__name[data-v-4b39834a]{display:flex}.filter__item__name span[data-v-4b39834a]{position:relative}.filter__item__name span[data-v-4b39834a]:last-child{font-family:"ChaletBook"}@media only screen and (min-width: 480px){.filter ul[data-v-4b39834a]{top:88rem;left:var(--gutter);width:100%;padding-right:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.0833333333 + var(--gutter)*1)}.filter .underline[data-v-4b39834a]:after{bottom:4rem}.filter__item[data-v-4b39834a]{margin-right:8rem}.filter__item:not(:last-child) .filter__item__name span[data-v-4b39834a]:first-child:not(.selected):before{opacity:1}.filter__item:not(:last-child) .filter__item__name span[data-v-4b39834a]:first-child:before{content:",";position:absolute;bottom:0;right:-12rem;font-weight:400;font-family:"PSTimes";font-size:var(--h2);line-height:var(--h2-line_height);letter-spacing:var(--h2-letter_spacing);opacity:0;transition:all 500ms ease}.filter__item__name span[data-v-4b39834a]:last-child{align-self:flex-start;font-size:18rem;letter-spacing:.015em;margin-top:5rem}}@media only screen and (max-width: 479px){.filter ul[data-v-4b39834a]{top:88px;left:var(--gutter);width:calc(100vw - var(--margin)*2)}.filter .underline[data-v-4b39834a]:after{bottom:0}.filter__item[data-v-4b39834a]{margin-right:6px;transform:translate3d(0, 0, 0)}.filter__item button[data-v-4b39834a]{will-change:opacity;transform:translate3d(0, 0, 0)}.filter__item:not(:last-child) .filter__item__name span[data-v-4b39834a]:first-child:not(.selected):before{opacity:1}.filter__item:not(:last-child) .filter__item__name span[data-v-4b39834a]:first-child:before{content:",";position:absolute;bottom:0;right:-6px;font-weight:400;font-family:"PSTimes";font-size:var(--h2);line-height:var(--h2-line_height);letter-spacing:var(--h2-letter_spacing);opacity:0;transition:all 500ms ease}.filter__item__name[data-v-4b39834a]{font-size:25px}.filter__item__name span[data-v-4b39834a]:last-child{align-self:flex-start;font-size:12px;letter-spacing:.015em;margin-top:1px;margin-left:2px}}',
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    782: function (e, t, n) {
      "use strict";
      n(701);
    },
    783: function (e, t, n) {
      var o = n(32)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        ".news-grid{position:relative;width:100vw;padding:0 var(--margin)}.news-grid ul{display:flex;flex-wrap:wrap;width:100%}.news-grid ul li{position:relative;transition:opacity 500ms ease}.news-grid ul li:not(.active){opacity:.5}@media(hover: hover){.news-grid ul li:hover{opacity:1}}.news-grid ul li .asset{transform:translate(0, 0, 0)}.news-grid ul li .asset__container{width:100%;padding-top:var(--ratio);position:relative;background:#b7e3b6}.news-grid ul li .asset.square .asset__container{padding-top:100%}.news-grid ul li .asset.tall .asset__container{padding-top:140%}.news-grid ul li p{font-size:var(--b3);line-height:var(--b3-line_height);letter-spacing:var(--b3-letter_spacing)}@media only screen and (min-width: 480px){.news-grid{padding-top:150rem;padding-bottom:250rem}.news-grid ul li{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2);margin-bottom:56rem}.news-grid ul li:not(:nth-child(4n)){margin-right:var(--gutter)}.news-grid ul li p:first-of-type{margin-top:10rem;color:#fff}.news-grid ul li p:not(:first-of-type){color:#7d7d7d}.news-grid ul li p:not(:first-of-type) span{position:relative}.news-grid ul li p:last-child{margin-top:12rem}}@media only screen and (max-width: 479px){.news-grid{padding-top:130px;padding-bottom:90px}.news-grid ul li{flex:0 0 100%}.news-grid ul li:not(:last-child):not(:nth-last-child(2)){margin-bottom:28px}.news-grid ul li p:first-of-type{margin-top:12px;color:#fff}.news-grid ul li p:not(:first-of-type){color:#7d7d7d}.news-grid ul li p:not(:first-of-type) span{position:relative}.news-grid ul li p:last-child{margin-top:12px}}",
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    816: function (e, t, n) {
      "use strict";
      n.r(t);
      n(20);
      var o = n(1),
        r = n(94),
        l = (n(22), n(70), n(269), n(142), n(13)),
        c = n(477),
        d = n(4),
        f = {
          name: "NewsFilter",
          mixins: [c.a],
          props: {
            selectionIndex: {
              type: Number,
              required: !0,
            },
            categories: {
              type: Array,
              required: !0,
            },
          },
          computed: {
            cursorCopy: function () {
              return this.$store.getters.cursorCopy;
            },
          },
          data: function () {
            return {
              tl: null,
              open: !1,
              bounds: null,
              openTl: !1,
              closeTl: !1,
              cache: [],
              bottomTl: null,
              selected: !0,
            };
          },
          beforeDestroy: function () {
            d.a.off("resize", this.resize),
              this.bottomTl && this.bottomTl.kill();
          },
          mounted: function () {
            this.resize();
            var e = Object(r.a)(this.$refs.item);
            e.splice(this.selectionIndex, 1),
              l.a.set(e, {
                autoAlpha: 0,
              });
            var t = this.cache[this.selectionIndex];
            l.a.set(this.$refs.container, {
              x: this.bounds.left - t.left,
              y: this.bounds.top - t.top,
            }),
              d.a.on("resize", this.resize);
          },
          methods: {
            handleMouseMove: function (e) {
              "Close" !== this.cursorCopy &&
                this.$store.dispatch("setCursorCopy", "Close");
            },
            handleMouseLeave: function () {
              "" !== this.cursorCopy &&
                this.$store.dispatch("setCursorCopy", "");
            },
            close: function () {
              this.open && this.handleClick(this.selectionIndex);
            },
            onReady: function () {
              (this.bottomTl = l.a.timeline({
                scrollTrigger: {
                  trigger: ".news-grid",
                  start: "bottom-=10% center",
                  end: "+=25%",
                  scrub: 0.2,
                },
              })),
                this.bottomTl.fromTo(
                  this.$refs.container,
                  {
                    autoAlpha: 1,
                  },
                  {
                    autoAlpha: 0,
                  }
                );
            },
            handleHoverIndex: function (e) {
              this.open && this.$emit("updateHoverIndex", e);
            },
            resize: function () {
              (this.bounds = this.$refs.container.getBoundingClientRect()),
                (this.cache = this.$refs.item.map(function (e) {
                  return e.getBoundingClientRect();
                }));
              var e = this.cache[this.selectionIndex];
              l.a.set(this.$refs.container, {
                x: this.bounds.left - e.left,
                y: this.bounds.top - e.top,
              });
            },
            handleClick: function (e) {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function n() {
                  var o, c, f, h, v, m, _, w;
                  return regeneratorRuntime.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          t.open
                            ? ((o = Object(r.a)(t.$refs.item)).splice(e, 1),
                              (c = t.cache[e]),
                              t.openTl && t.openTl.pause() && t.openTl.kill(),
                              t.closeTl &&
                                t.closeTl.pause() &&
                                t.closeTl.kill(),
                              (t.closeTl = null),
                              (t.open = !1),
                              (t.selected = !0),
                              t.setSelectionIndex(e),
                              (f =
                                (c.right - t.bounds.left) /
                                ((d.b.bounds.ww / 1200) * 1e3)),
                              (h =
                                (c.bottom - t.bounds.top) /
                                ((d.b.bounds.wh / 1200) * 1e3)),
                              0.1 == h ? f : 0.1 == f ? h : Math.max(f, h),
                              (t.closeTl = l.a
                                .timeline({
                                  paused: !0,
                                })
                                .to(
                                  t.$refs.bg,
                                  {
                                    autoAlpha: 0,
                                    duration: 0.3,
                                  },
                                  0
                                )
                                .to(o, {
                                  autoAlpha: 0,
                                  stagger: 0.02,
                                  duration: 0.6,
                                  ease: "power2.inOut",
                                })
                                .to(t.$refs.container, {
                                  x: t.bounds.left - c.left,
                                  y: t.bounds.top - c.top,
                                  duration: 0.8,
                                  ease: "power2.inOut",
                                })),
                              t.closeTl.play().then(function () {}))
                            : ((v = Object(r.a)(t.$refs.item)).splice(e, 1),
                              (m = t.cache[e]),
                              t.closeTl &&
                                t.closeTl.pause() &&
                                t.closeTl.kill(),
                              t.openTl && t.openTl.pause() && t.openTl.kill(),
                              (t.openTl = null),
                              (t.open = !0),
                              (t.selected = !1),
                              (_ =
                                (m.right - t.bounds.left) /
                                ((d.b.bounds.ww / 1200) * 800)),
                              (w =
                                (m.bottom - t.bounds.top) /
                                ((d.b.bounds.wh / 1200) * 800)),
                              0.1 == w ? _ : 0.1 == _ ? w : Math.max(_, w),
                              (t.openTl = l.a
                                .timeline({
                                  paused: !0,
                                })
                                .to(
                                  t.$refs.bg,
                                  {
                                    autoAlpha: 1,
                                    duration: 0.3,
                                  },
                                  0
                                )
                                .to(t.$refs.container, {
                                  x: 0,
                                  y: 0,
                                  duration: 0 == e ? 0 : 0.8,
                                  ease: "power2.inOut",
                                })
                                .to(v, {
                                  autoAlpha: 1,
                                  stagger: 0.02,
                                  duration: 0.6,
                                  ease: "power2.inOut",
                                })),
                              t.openTl.play().then(function () {
                                t.open = !0;
                              }));
                        case 1:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            setSelectionIndex: function (e) {
              this.$emit("update", e);
            },
          },
        },
        h = (n(780), n(9)),
        component = Object(h.a)(
          f,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "filter",
              },
              [
                t(
                  "ul",
                  {
                    ref: "container",
                  },
                  e._l(e.categories, function (n, o) {
                    return t(
                      "li",
                      {
                        key: o,
                        class: ["filter__item"],
                        on: {
                          "&mouseenter": function (t) {
                            return e.handleHoverIndex(o);
                          },
                          "&mouseleave": function (t) {
                            return e.handleHoverIndex(null);
                          },
                        },
                      },
                      [
                        t(
                          "button",
                          {
                            ref: "item",
                            refInFor: !0,
                            on: {
                              click: function (t) {
                                return e.handleClick(o);
                              },
                            },
                          },
                          [
                            t(
                              "span",
                              {
                                staticClass: "filter__item__name h2",
                              },
                              [
                                t(
                                  "span",
                                  {
                                    class: [
                                      "underline white",
                                      {
                                        selected:
                                          e.selectionIndex == o && e.selected,
                                      },
                                    ],
                                  },
                                  [e._v(e._s(n.name))]
                                ),
                                e._v(" "),
                                t("span", [e._v("(" + e._s(n.count) + ")")]),
                              ]
                            ),
                          ]
                        ),
                      ]
                    );
                  }),
                  0
                ),
                e._v(" "),
                t("div", {
                  ref: "bg",
                  staticClass: "filter__bg",
                  on: {
                    click: e.close,
                    mousemove: e.handleMouseMove,
                    mouseleave: e.handleMouseLeave,
                  },
                }),
              ]
            );
          },
          [],
          !1,
          null,
          "4b39834a",
          null
        );
      t.default = component.exports;
    },
    817: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(755),
        r = {
          name: "WorkGrid",
          props: {
            projects: {
              type: Array,
              required: !0,
            },
            selectedCategory: {
              type: Object,
              required: !0,
            },
          },
          components: {
            GridItem: o.default,
          },
        },
        l = (n(782), n(9)),
        component = Object(l.a)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "news-grid",
              },
              [
                t(
                  "ul",
                  e._l(e.projects, function (data, n) {
                    return t("GridItem", {
                      key: n,
                      attrs: {
                        selectedCategory: e.selectedCategory,
                        data: data,
                      },
                    });
                  }),
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    824: function (e, t, n) {
      var content = n(861);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(33).default)("8ba4bcb6", content, !0, {
        sourceMap: !1,
      });
    },
    860: function (e, t, n) {
      "use strict";
      n(824);
    },
    861: function (e, t, n) {
      var o = n(32)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        ".news-page__content[data-v-f866ac52]{position:relative;z-index:5;background:#000}",
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    891: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(1),
        head = (n(54), n(699), n(20), n(55), n(11), n(27), n(22), n(652)),
        r = n(660),
        l = n(112),
        c = n(475),
        d = n(816),
        f = n(817),
        h = n(114),
        v = n(113),
        m = {
          name: "News",
          components: {
            NewsGrid: f.default,
            NewsFilter: d.default,
          },
          asyncData: function (e) {
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                var n, data;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = e.error),
                            (t.prev = 1),
                            (t.next = 4),
                            h.a.fetch(v.e)
                          );
                        case 4:
                          return (
                            (data = t.sent),
                            t.abrupt("return", {
                              page: data,
                            })
                          );
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t.catch(1)),
                            n({
                              statusCode: 404,
                              message:
                                "The page you are looking for does not exist. ",
                              err: t.t0,
                            });
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                );
              })
            )();
          },
          mixins: [head.a, l.a, Object(r.a)()],
          computed: {
            selectedCategory: function () {
              return null !== this.hoverSelectionIndex
                ? this.categories[this.hoverSelectionIndex]
                : this.categories[this.selectionIndex];
            },
            categories: function () {
              if (this.page.news && this.page.news.newsDetails) {
                var e = [];
                this.page.news.newsDetails.forEach(function (data) {
                  data.content.services &&
                    data.content.services.forEach(function (t) {
                      return e.push(t);
                    });
                });
                var t = {};
                e.forEach(function (e) {
                  t[e] ? ++t[e] : (t[e] = 1);
                });
                var n = [
                  {
                    name: "All",
                    count: this.page.news.newsDetails.length,
                  },
                ];
                return (
                  Object.keys(t).forEach(function (e) {
                    n.push({
                      name: e,
                      count: t[e],
                    });
                  }),
                  n
                );
              }
              return [
                {
                  name: "All",
                  count: 0,
                },
              ];
            },
          },
          data: function () {
            return {
              selectionIndex: 0,
              hoverSelectionIndex: null,
            };
          },
          created: function () {
            var e = this,
              t = this.categories.findIndex(function (t) {
                var n = t.name;
                return Object(c.c)(n) === e.$route.query.filter;
              });
            t > -1 && (this.selectionIndex = t);
          },
          mounted: function () {},
          methods: {
            updateSelectionIndex: function (e) {
              this.selectionIndex = e;
            },
            updateHoverSelectionIndex: function (e) {
              this.hoverSelectionIndex = e;
            },
          },
        },
        _ = (n(860), n(9)),
        component = Object(_.a)(
          m,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                ref: "main",
                class: ["page news-page"],
              },
              [
                t(
                  "div",
                  {
                    staticClass: "news-page__content drsw",
                  },
                  [
                    t("NewsFilter", {
                      attrs: {
                        categories: e.categories,
                        selectionIndex: e.selectionIndex,
                      },
                      on: {
                        update: e.updateSelectionIndex,
                        updateHoverIndex: e.updateHoverSelectionIndex,
                      },
                    }),
                    e._v(" "),
                    e.page.news && e.page.news.newsDetails.length > 0
                      ? t("NewsGrid", {
                          attrs: {
                            selectedCategory: e.selectedCategory,
                            projects: e.page.news.newsDetails,
                          },
                        })
                      : e._e(),
                  ],
                  1
                ),
                e._v(" "),
                t("Footer", {
                  attrs: {
                    showAbout: !0,
                    theme: "black",
                  },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "f866ac52",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        NewsFilter: n(816).default,
        NewsGrid: n(817).default,
        Footer: n(636).default,
      });
    },
  },
]);
