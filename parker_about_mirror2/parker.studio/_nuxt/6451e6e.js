(window.webpackJsonp = window.webpackJsonp || []).push([
  [83, 5, 46],
  {
    493: function (t, e, o) {
      var content = o(643);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("a95f1320", content, !0, {
        sourceMap: !1,
      });
    },
    494: function (t, e, o) {
      var content = o(645);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("4364cdc8", content, !0, {
        sourceMap: !1,
      });
    },
    636: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = o(94),
        n = (o(50), o(69), o(496), o(1)),
        c = (o(22), o(54), o(70), o(55), o(11), o(27), o(13)),
        l = o(646),
        d = o.n(l),
        _ = o(4),
        f = o(698),
        m = o.n(f),
        v = o(184),
        h = o(115),
        w = o(490),
        x = o(647),
        y = o(485),
        k = o(185),
        j = {
          name: "Footer",
          mixins: [v.validationMixin],
          props: {
            theme: {
              type: String,
              required: !1,
              default: "white",
            },
            showAbout: {
              type: Boolean,
              required: !1,
              default: !1,
            },
          },
          computed: {
            data: function () {
              return this.$store.getters["footer/footerData"];
            },
            isHoveringFooter: function () {
              return this.$store.getters["footer/isHovering"];
            },
          },
          data: function () {
            return {
              marqueeTl: null,
              contactBounds: null,
              error: !1,
              success: !1,
              showing: !1,
              submitting: !1,
              form: {
                email: "",
              },
              delayedCalls: [],
              cities: [],
              serializers: {
                marks: {
                  indent: w.default,
                  link: y.default,
                  hoverAsset: x.default,
                },
              },
            };
          },
          validations: {
            form: {
              email: {
                required: h.required,
                email: h.email,
              },
            },
          },
          beforeDestroy: function () {
            _.a.off("tick", this.tick),
              _.a.off("resize", this.resize),
              this.$store.dispatch("footer/setHovering", !1);
          },
          mounted: function () {
            (this.cities = this.data.marquee.marqueeCities.filter(function (t) {
              return m.a.lookupViaCity(t.cityName).length > 0;
            })),
              this.calculateTimezones(),
              this.resize(),
              _.a.on("tick", this.tick),
              _.a.on("resize", this.resize);
          },
          methods: {
            handleMouseEnter: function () {
              !this.isHoveringFooter &&
                this.$store.dispatch("footer/setHovering", !0);
            },
            handleMouseLeave: function () {
              this.isHoveringFooter &&
                this.$store.dispatch("footer/setHovering", !1);
            },
            resize: function () {
              var t = this;
              this.$nextTick(function () {
                (t.$refs.contact.style.position = ""),
                  (t.$refs.container.style.height = "");
                var e = t.showAbout
                    ? t.$refs.about.getBoundingClientRect()
                    : null,
                  o = t.$refs.contact.getBoundingClientRect();
                t.contactBounds = {
                  height: o.height,
                  top: o.top + window.pageYOffset,
                  bottom: o.bottom + window.pageYOffset,
                };
                var r = e
                  ? e.height + t.contactBounds.height
                  : t.contactBounds.height;
                (e ? r >= _.b.bounds.wh : r < _.b.bounds.wh) &&
                  ((t.$refs.contact.style.position = "fixed"),
                  (t.$refs.container.style.height = "".concat(r, "px")));
                var n = t.$refs.set.getBoundingClientRect().width;
                t.marqueeTl && t.marqueeTl.kill(),
                  (t.marqueeTl = c.a
                    .timeline({
                      repeat: -1,
                      paused: !0,
                    })
                    .fromTo(
                      t.$refs.inner,
                      {
                        x: 0,
                      },
                      {
                        x: -1 * n,
                        force3D: !0,
                        duration: 20,
                        ease: "none",
                      }
                    ));
              });
            },
            tick: function () {
              this.contactBounds && _.b.bounds.ww >= 480
                ? window.pageYOffset >=
                  this.contactBounds.bottom -
                    this.contactBounds.height -
                    _.b.bounds.wh
                  ? this.inView || ((this.inView = !0), this.marqueeTl.play())
                  : this.inView && ((this.inView = !1), this.marqueeTl.pause())
                : this.contactBounds &&
                  _.b.bounds.ww < 480 &&
                  (window.pageYOffset >= this.contactBounds.top - _.b.bounds.wh
                    ? this.inView || ((this.inView = !0), this.marqueeTl.play())
                    : this.inView &&
                      ((this.inView = !1), this.marqueeTl.pause())),
                this.inView && this.calculateTimezones();
            },
            calculateTimezones: function () {
              this.cities = this.cities.map(function (t) {
                var e = m.a.lookupViaCity(t.cityName)[0].timezone;
                return {
                  time: d()(new Date()).tz(e).format("HH:mm:ss"),
                  cityName: t.cityName,
                  cityAbbreviations: t.cityAbbreviations,
                };
              });
            },
            submit: function (t) {
              var e = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function o() {
                  var r, l;
                  return regeneratorRuntime.wrap(
                    function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            if (((o.prev = 0), !e.submitting)) {
                              o.next = 3;
                              break;
                            }
                            return o.abrupt("return");
                          case 3:
                            for (l in (t.preventDefault(),
                            e.clearDelayedCalls(),
                            (r = new FormData()),
                            e.form))
                              r.append(l, e.form[l]);
                            if ((e.$v.$touch(), !e.$v.$invalid)) {
                              o.next = 12;
                              break;
                            }
                            throw Error("Invalid");
                          case 12:
                            return (
                              (e.submitting = !0),
                              (e.error = !1),
                              (o.next = 16),
                              Object(k.b)(k.a, e.form)
                            );
                          case 16:
                            e.$refs.input.blur(),
                              e.delayedCalls.push(
                                c.a.delayedCall(
                                  1,
                                  Object(n.a)(
                                    regeneratorRuntime.mark(function t() {
                                      return regeneratorRuntime.wrap(function (
                                        t
                                      ) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              (e.success = !0),
                                                (e.submitting = !1);
                                            case 2:
                                            case "end":
                                              return t.stop();
                                          }
                                      },
                                      t);
                                    })
                                  )
                                )
                              ),
                              e.delayedCalls.push(
                                c.a.delayedCall(
                                  4,
                                  Object(n.a)(
                                    regeneratorRuntime.mark(function t() {
                                      return regeneratorRuntime.wrap(function (
                                        t
                                      ) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              e.resetForm();
                                            case 1:
                                            case "end":
                                              return t.stop();
                                          }
                                      },
                                      t);
                                    })
                                  )
                                )
                              );
                          case 19:
                            o.next = 27;
                            break;
                          case 21:
                            (o.prev = 21),
                              (o.t0 = o.catch(0)),
                              console.log(o.t0),
                              e.clearDelayedCalls(),
                              console.log(o.t0),
                              c.a.delayedCall(
                                1,
                                Object(n.a)(
                                  regeneratorRuntime.mark(function t() {
                                    return regeneratorRuntime.wrap(function (
                                      t
                                    ) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            (e.error = !0),
                                              (e.success = !1),
                                              (e.submitting = !1),
                                              e.delayedCalls.push(
                                                c.a.delayedCall(3, function () {
                                                  e.error = !1;
                                                })
                                              );
                                          case 4:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t);
                                  })
                                )
                              );
                          case 27:
                          case "end":
                            return o.stop();
                        }
                    },
                    o,
                    null,
                    [[0, 21]]
                  );
                })
              )();
            },
            resetForm: function () {
              var t = this;
              Object.keys(this.form).forEach(function (e) {
                t.form[e] = "";
              }),
                (this.submitting = this.success = this.error = !1);
            },
            clearDelayedCalls: function () {
              this.delayedCalls.forEach(function (t) {
                return t.kill();
              }),
                (this.delayedCalls = []);
            },
          },
        },
        C = (o(665), o(9)),
        component = Object(C.a)(
          j,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "footer",
              {
                ref: "container",
                class: [t.theme],
              },
              [
                t.showAbout
                  ? e(
                      "div",
                      {
                        ref: "about",
                        class: [
                          "about drsw",
                          {
                            darkgreen: "green" === t.theme,
                          },
                        ],
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "about__inner",
                          },
                          [
                            e("div", {
                              staticClass: "about__line",
                            }),
                            t._v(" "),
                            e("div", {
                              staticClass: "about__line",
                            }),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass: "about__description",
                              },
                              [
                                e("block-content", {
                                  attrs: {
                                    blocks: t.data.description.description,
                                    serializers: t.serializers,
                                  },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            e(
                              "nuxt-link",
                              {
                                staticClass: "about__link b2",
                                attrs: {
                                  to: "/about",
                                },
                              },
                              [
                                e(
                                  "span",
                                  {
                                    class: [
                                      "decoration active opaque black",
                                      {
                                        white: "black" == t.theme,
                                      },
                                    ],
                                  },
                                  [t._v(t._s(t.data.description.linkCopy))]
                                ),
                                t._v(" "),
                                e("RightArrowIcon", {
                                  attrs: {
                                    color:
                                      "white" == t.theme ? "black" : "white",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    )
                  : t._e(),
                t._v(" "),
                e(
                  "div",
                  {
                    ref: "contact",
                    staticClass: "contact",
                    on: {
                      mouseenter: t.handleMouseEnter,
                      mouseleave: t.handleMouseLeave,
                    },
                  },
                  [
                    e("div", {
                      staticClass: "contact__line",
                    }),
                    t._v(" "),
                    t._m(0),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "contact__information",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "contact__information__detail",
                          },
                          [
                            e("div", {
                              staticClass: "contact__information__detail__line",
                            }),
                            t._v(" "),
                            t._m(1),
                            t._v(" "),
                            t._l(t.data.locations, function (o, r) {
                              return e(
                                "div",
                                {
                                  key: r,
                                  staticClass:
                                    "contact__information__detail__content",
                                },
                                [
                                  e(
                                    "p",
                                    {
                                      staticClass:
                                        "contact__information__detail__content__title b2",
                                    },
                                    [t._v(t._s(o.title))]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "contact__information__detail__content__detail",
                                    },
                                    [
                                      e("block-content", {
                                        attrs: {
                                          blocks: o.address,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  e(
                                    "a",
                                    {
                                      staticClass: "b2",
                                      attrs: {
                                        href: o.googleMapsShareLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      },
                                    },
                                    [
                                      e(
                                        "span",
                                        {
                                          staticClass:
                                            "decoration active opaque green",
                                        },
                                        [t._v("Map")]
                                      ),
                                      t._v(" "),
                                      e("div", [
                                        e(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 9.47 9.47",
                                            },
                                          },
                                          [
                                            e(
                                              "g",
                                              {
                                                attrs: {
                                                  id: "Layer_2",
                                                  "data-name": "Layer 2",
                                                },
                                              },
                                              [
                                                e(
                                                  "g",
                                                  {
                                                    attrs: {
                                                      id: "Design_System",
                                                      "data-name":
                                                        "Design System",
                                                    },
                                                  },
                                                  [
                                                    e("polygon", {
                                                      attrs: {
                                                        points:
                                                          "0.8 0 0.8 1.3 6.58 1.3 7.34 1.22 0 8.56 0.92 9.47 8.26 2.13 8.18 2.89 8.18 8.67 9.47 8.67 9.47 0 0.8 0",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              );
                            }),
                          ],
                          2
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "contact__information__detail",
                          },
                          [
                            e("div", {
                              staticClass: "contact__information__detail__line",
                            }),
                            t._v(" "),
                            t._m(2),
                            t._v(" "),
                            t._l(t.data.locations, function (o, r) {
                              return e(
                                "div",
                                {
                                  key: r,
                                  staticClass:
                                    "contact__information__detail__content",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "contact__information__detail__content__detail",
                                    },
                                    [
                                      e(
                                        "ul",
                                        t._l(
                                          o.inquiriesDetails,
                                          function (o, r) {
                                            return e(
                                              "li",
                                              {
                                                key: r,
                                              },
                                              [
                                                o.link
                                                  ? e(
                                                      "a",
                                                      {
                                                        staticClass: "b2",
                                                        attrs: {
                                                          href: o.link,
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                        },
                                                      },
                                                      [
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "decoration active opaque green",
                                                          },
                                                          [t._v(t._s(o.copy))]
                                                        ),
                                                        t._v(" "),
                                                        e("div", [
                                                          e(
                                                            "svg",
                                                            {
                                                              attrs: {
                                                                xmlns:
                                                                  "http://www.w3.org/2000/svg",
                                                                viewBox:
                                                                  "0 0 9.47 9.47",
                                                              },
                                                            },
                                                            [
                                                              e(
                                                                "g",
                                                                {
                                                                  attrs: {
                                                                    id: "Layer_2",
                                                                    "data-name":
                                                                      "Layer 2",
                                                                  },
                                                                },
                                                                [
                                                                  e(
                                                                    "g",
                                                                    {
                                                                      attrs: {
                                                                        id: "Design_System",
                                                                        "data-name":
                                                                          "Design System",
                                                                      },
                                                                    },
                                                                    [
                                                                      e(
                                                                        "polygon",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              points:
                                                                                "0.8 0 0.8 1.3 6.58 1.3 7.34 1.22 0 8.56 0.92 9.47 8.26 2.13 8.18 2.89 8.18 8.67 9.47 8.67 9.47 0 0.8 0",
                                                                            },
                                                                        }
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]),
                                                      ]
                                                    )
                                                  : e(
                                                      "p",
                                                      {
                                                        staticClass: "b2",
                                                      },
                                                      [t._v(t._s(o.copy))]
                                                    ),
                                              ]
                                            );
                                          }
                                        ),
                                        0
                                      ),
                                    ]
                                  ),
                                ]
                              );
                            }),
                          ],
                          2
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "contact__information__detail",
                          },
                          [
                            e("div", {
                              staticClass: "contact__information__detail__line",
                            }),
                            t._v(" "),
                            t._m(3),
                            t._v(" "),
                            t._l(t.data.locations, function (o, r) {
                              return e(
                                "div",
                                {
                                  key: r,
                                  staticClass:
                                    "contact__information__detail__content",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "contact__information__detail__content__detail",
                                    },
                                    [
                                      e(
                                        "ul",
                                        t._l(
                                          o.careersIntershipsDetails,
                                          function (o, r) {
                                            return e(
                                              "li",
                                              {
                                                key: r,
                                              },
                                              [
                                                o.link
                                                  ? e(
                                                      "a",
                                                      {
                                                        staticClass: "b2",
                                                        attrs: {
                                                          href: o.link,
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                        },
                                                      },
                                                      [
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "decoration active opaque green",
                                                          },
                                                          [t._v(t._s(o.copy))]
                                                        ),
                                                        t._v(" "),
                                                        e("div", [
                                                          e(
                                                            "svg",
                                                            {
                                                              attrs: {
                                                                xmlns:
                                                                  "http://www.w3.org/2000/svg",
                                                                viewBox:
                                                                  "0 0 9.47 9.47",
                                                              },
                                                            },
                                                            [
                                                              e(
                                                                "g",
                                                                {
                                                                  attrs: {
                                                                    id: "Layer_2",
                                                                    "data-name":
                                                                      "Layer 2",
                                                                  },
                                                                },
                                                                [
                                                                  e(
                                                                    "g",
                                                                    {
                                                                      attrs: {
                                                                        id: "Design_System",
                                                                        "data-name":
                                                                          "Design System",
                                                                      },
                                                                    },
                                                                    [
                                                                      e(
                                                                        "polygon",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              points:
                                                                                "0.8 0 0.8 1.3 6.58 1.3 7.34 1.22 0 8.56 0.92 9.47 8.26 2.13 8.18 2.89 8.18 8.67 9.47 8.67 9.47 0 0.8 0",
                                                                            },
                                                                        }
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]),
                                                      ]
                                                    )
                                                  : e(
                                                      "p",
                                                      {
                                                        staticClass: "b2",
                                                      },
                                                      [t._v(t._s(o.copy))]
                                                    ),
                                              ]
                                            );
                                          }
                                        ),
                                        0
                                      ),
                                    ]
                                  ),
                                ]
                              );
                            }),
                          ],
                          2
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "contact__information__detail",
                          },
                          [
                            e("div", {
                              staticClass: "contact__information__detail__line",
                            }),
                            t._v(" "),
                            t._m(4),
                            t._v(" "),
                            t._l(t.data.locations, function (o, r) {
                              return e(
                                "div",
                                {
                                  key: r,
                                  staticClass:
                                    "contact__information__detail__content",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "contact__information__detail__content__detail",
                                    },
                                    [
                                      e(
                                        "ul",
                                        t._l(
                                          o.socialMediaDetails,
                                          function (o, r) {
                                            return e(
                                              "li",
                                              {
                                                key: r,
                                              },
                                              [
                                                o.link
                                                  ? e(
                                                      "a",
                                                      {
                                                        staticClass: "b2",
                                                        attrs: {
                                                          href: o.link,
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                        },
                                                      },
                                                      [
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "decoration active opaque green",
                                                          },
                                                          [t._v(t._s(o.copy))]
                                                        ),
                                                        t._v(" "),
                                                        e("div", [
                                                          e(
                                                            "svg",
                                                            {
                                                              attrs: {
                                                                xmlns:
                                                                  "http://www.w3.org/2000/svg",
                                                                viewBox:
                                                                  "0 0 9.47 9.47",
                                                              },
                                                            },
                                                            [
                                                              e(
                                                                "g",
                                                                {
                                                                  attrs: {
                                                                    id: "Layer_2",
                                                                    "data-name":
                                                                      "Layer 2",
                                                                  },
                                                                },
                                                                [
                                                                  e(
                                                                    "g",
                                                                    {
                                                                      attrs: {
                                                                        id: "Design_System",
                                                                        "data-name":
                                                                          "Design System",
                                                                      },
                                                                    },
                                                                    [
                                                                      e(
                                                                        "polygon",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              points:
                                                                                "0.8 0 0.8 1.3 6.58 1.3 7.34 1.22 0 8.56 0.92 9.47 8.26 2.13 8.18 2.89 8.18 8.67 9.47 8.67 9.47 0 0.8 0",
                                                                            },
                                                                        }
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]),
                                                      ]
                                                    )
                                                  : e(
                                                      "p",
                                                      {
                                                        staticClass: "b2",
                                                      },
                                                      [t._v(t._s(o.copy))]
                                                    ),
                                              ]
                                            );
                                          }
                                        ),
                                        0
                                      ),
                                    ]
                                  ),
                                ]
                              );
                            }),
                          ],
                          2
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            class: [
                              "contact__information__detail",
                              {
                                submitting: t.submitting,
                              },
                            ],
                          },
                          [
                            e("div", {
                              staticClass: "contact__information__detail__line",
                            }),
                            t._v(" "),
                            t._m(5),
                            t._v(" "),
                            e(
                              "form",
                              {
                                staticClass:
                                  "contact__information__detail__form",
                                attrs: {
                                  action: "",
                                },
                              },
                              [
                                t.success
                                  ? e(
                                      "p",
                                      {
                                        staticClass:
                                          "contact__information__detail__form__feedback b2",
                                      },
                                      [t._v("Thank You!")]
                                    )
                                  : t.error
                                  ? e(
                                      "p",
                                      {
                                        staticClass:
                                          "contact__information__detail__form__feedback b2",
                                      },
                                      [t._v("Error")]
                                    )
                                  : [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "contact__information__detail__form__input",
                                        },
                                        [
                                          e("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.form.email,
                                                expression: "form.email",
                                              },
                                            ],
                                            ref: "input",
                                            attrs: {
                                              type: "email",
                                              placeholder: "Email address",
                                            },
                                            domProps: {
                                              value: t.form.email,
                                            },
                                            on: {
                                              input: function (e) {
                                                e.target.composing ||
                                                  t.$set(
                                                    t.form,
                                                    "email",
                                                    e.target.value
                                                  );
                                              },
                                            },
                                          }),
                                          t._v(" "),
                                          e(
                                            "svg",
                                            {
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 290.78 5.31",
                                              },
                                            },
                                            [
                                              e(
                                                "g",
                                                {
                                                  attrs: {
                                                    id: "Layer_2",
                                                    "data-name": "Layer 2",
                                                  },
                                                },
                                                [
                                                  e(
                                                    "g",
                                                    {
                                                      attrs: {
                                                        id: "Design_System",
                                                        "data-name":
                                                          "Design System",
                                                      },
                                                    },
                                                    [
                                                      e("path", {
                                                        attrs: {
                                                          d: "M290.48,0a5,5,0,0,1-5,5H5.31a5,5,0,0,1-5-5",
                                                          fill: "none",
                                                          stroke: "#000",
                                                          "stroke-miterlimit":
                                                            "10",
                                                          "stroke-width":
                                                            "0.61",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "button",
                                        {
                                          staticClass:
                                            "b2 decoration active green",
                                          on: {
                                            click: function (e) {
                                              return (
                                                e.preventDefault(),
                                                t.submit.apply(null, arguments)
                                              );
                                            },
                                          },
                                        },
                                        [t._v("Submit")]
                                      ),
                                    ],
                              ],
                              2
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        ref: "marquee",
                        staticClass: "contact__marquee",
                      },
                      [
                        e("div", {
                          staticClass: "contact__marquee__line",
                        }),
                        t._v(" "),
                        t._m(6),
                        t._v(" "),
                        e(
                          "div",
                          {
                            ref: "ticker",
                            staticClass: "contact__marquee__ticker",
                          },
                          [
                            e(
                              "div",
                              {
                                ref: "inner",
                                staticClass: "contact__marquee__ticker__inner",
                              },
                              [
                                e(
                                  "div",
                                  {
                                    ref: "set",
                                  },
                                  t._l(Object(r.a)(t.cities), function (o, r) {
                                    return e(
                                      "p",
                                      {
                                        key: r,
                                        staticClass: "h3",
                                      },
                                      [
                                        t._v(
                                          "\n                            " +
                                            t._s(o.cityAbbreviations) +
                                            " "
                                        ),
                                        e("span", [
                                          t._v(" (" + t._s(o.time) + "),"),
                                        ]),
                                      ]
                                    );
                                  }),
                                  0
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  t._l(Object(r.a)(t.cities), function (o, r) {
                                    return e(
                                      "p",
                                      {
                                        key: r,
                                        staticClass: "h3",
                                      },
                                      [
                                        t._v(
                                          "\n                            " +
                                            t._s(o.cityAbbreviations) +
                                            " "
                                        ),
                                        e("span", [
                                          t._v(" (" + t._s(o.time) + "),"),
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
                      ]
                    ),
                  ]
                ),
              ]
            );
          },
          [
            function () {
              var t = this._self._c;
              return t(
                "div",
                {
                  staticClass: "contact__title",
                },
                [
                  t(
                    "p",
                    {
                      staticClass: "b2",
                    },
                    [this._v("Contact")]
                  ),
                ]
              );
            },
            function () {
              var t = this._self._c;
              return t(
                "div",
                {
                  staticClass: "contact__information__detail__title",
                },
                [
                  t(
                    "p",
                    {
                      staticClass: "b2",
                    },
                    [this._v("Address")]
                  ),
                ]
              );
            },
            function () {
              var t = this._self._c;
              return t(
                "div",
                {
                  staticClass: "contact__information__detail__title",
                },
                [
                  t(
                    "p",
                    {
                      staticClass: "b2",
                    },
                    [this._v("Inquiries")]
                  ),
                ]
              );
            },
            function () {
              var t = this,
                e = t._self._c;
              return e(
                "div",
                {
                  staticClass: "contact__information__detail__title",
                },
                [
                  e(
                    "p",
                    {
                      staticClass: "b2",
                    },
                    [t._v("Careers "), e("br"), t._v("Internships")]
                  ),
                ]
              );
            },
            function () {
              var t = this._self._c;
              return t(
                "div",
                {
                  staticClass: "contact__information__detail__title",
                },
                [
                  t(
                    "p",
                    {
                      staticClass: "b2",
                    },
                    [this._v("Follow us")]
                  ),
                ]
              );
            },
            function () {
              var t = this._self._c;
              return t(
                "div",
                {
                  staticClass: "contact__information__detail__title",
                },
                [
                  t(
                    "p",
                    {
                      staticClass: "b2",
                    },
                    [this._v("Newsletter")]
                  ),
                ]
              );
            },
            function () {
              var t = this,
                e = t._self._c;
              return e(
                "p",
                {
                  staticClass: "contact__marquee__description b2",
                },
                [
                  e(
                    "span",
                    {
                      staticClass: "b2",
                    },
                    [t._v("Currently Working in:")]
                  ),
                  t._v(" "),
                  e(
                    "span",
                    {
                      staticClass: "b2",
                    },
                    [t._v("Working in:")]
                  ),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        RightArrowIcon: o(268).default,
        Footer: o(636).default,
      });
    },
    639: function (t, e, o) {
      var content = o(666);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("55f28c30", content, !0, {
        sourceMap: !1,
      });
    },
    642: function (t, e, o) {
      "use strict";
      o(493);
    },
    643: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".image-slide[data-v-03a4a7bd]{user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    644: function (t, e, o) {
      "use strict";
      o(494);
    },
    645: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".image-slide[data-v-d4b2a46e]{user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    649: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = o(1),
        n = (o(22), o(142), o(13)),
        c = o(182),
        l = {
          name: "ImageModule",
          components: {
            SanityImageNew: o(471).default,
          },
          props: {
            content: {
              type: Object,
              required: !0,
            },
            currentIndex: {
              type: Number,
              required: !0,
            },
            index: {
              type: Number,
              required: !0,
            },
            total: {
              type: Number,
              required: !0,
            },
          },
          computed: {
            domLoaded: function () {
              return this.$store.getters["preloader/isLoaded"];
            },
            navigating: function () {
              return this.$store.getters["nav/isNavigating"];
            },
            inDevelopment: function () {
              return "development" === this.$config.ENV;
            },
          },
          watch: {
            domLoaded: function (t) {
              var e = this;
              t &&
                !this.navigating &&
                this.loadable() &&
                this.$nextTick(function () {
                  e.loadImage();
                });
            },
            navigating: function (t) {
              var e = this;
              !t &&
                this.domLoaded &&
                this.loadable() &&
                this.$nextTick(function () {
                  e.loadImage();
                });
            },
            currentIndex: {
              handler: function (t) {
                var e = this;
                this.domLoaded &&
                  !this.navigating &&
                  this.loadable() &&
                  this.$nextTick(function () {
                    e.loadImage();
                  });
              },
            },
          },
          data: function () {
            return {
              loaded: !1,
            };
          },
          mounted: function () {
            var t = this;
            0 == this.index && this.$refs.img.setAttribute("data-critical", ""),
              this.domLoaded &&
                !this.navigating &&
                this.loadable() &&
                this.$nextTick(function () {
                  t.loadImage();
                });
          },
          methods: {
            loadable: function () {
              var t =
                this.currentIndex - 1 < 0
                  ? this.total - 1
                  : this.currentIndex - 1;
              return (
                this.index == this.currentIndex ||
                this.index == this.currentIndex + 1 ||
                t == this.index
              );
            },
            loadImage: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var image;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t.loaded) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (
                            !(
                              t.$refs.img.hasAttribute("data-loading") ||
                              t.$refs.img.hasAttribute("data-loaded")
                            )
                          ) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          return (
                            (t.loaded = !0),
                            (e.next = 8),
                            Object(c.a)(t.$refs.img)
                          );
                        case 8:
                          (image = e.sent),
                            n.a.to(image, {
                              autoAlpha: 1,
                              duration: 0.5,
                              ease: "power2.inOut",
                            });
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        },
        d = (o(642), o(9)),
        component = Object(d.a)(
          l,
          function () {
            var t = this;
            return (0, t._self._c)("img", {
              ref: "img",
              staticClass: "abs full cover",
              attrs: {
                "data-src": t.inDevelopment
                  ? "/placeholders/placeholder-1.jpg"
                  : t.$device.isMobile && t.content.assetMobile
                  ? t.content.assetMobile.image.url
                  : t.content.asset.image.url,
                alt: "",
                "data-fade": "",
                "data-skip": "",
              },
            });
          },
          [],
          !1,
          null,
          "03a4a7bd",
          null
        );
      e.default = component.exports;
    },
    650: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = o(1),
        n = (o(22), o(142), o(13)),
        c = o(182),
        l = {
          name: "VideoSlide",
          props: {
            content: {
              type: Object,
              required: !0,
            },
            currentIndex: {
              type: Number,
              required: !0,
            },
            index: {
              type: Number,
              required: !0,
            },
            total: {
              type: Number,
              required: !0,
            },
          },
          computed: {
            domLoaded: function () {
              return this.$store.getters["preloader/isLoaded"];
            },
            navigating: function () {
              return this.$store.getters["nav/isNavigating"];
            },
            active: function () {
              return this.index === this.currentIndex;
            },
          },
          watch: {
            domLoaded: function (t) {
              var e = this;
              t &&
                !this.navigating &&
                this.loadable() &&
                this.$nextTick(function () {
                  e.loadImage();
                });
            },
            navigating: function (t) {
              var e = this;
              !t &&
                this.domLoaded &&
                this.loadable() &&
                this.$nextTick(function () {
                  e.loadImage();
                });
            },
            currentIndex: {
              handler: function (t) {
                var e = this;
                this.domLoaded &&
                  !this.navigating &&
                  this.loadable() &&
                  this.$nextTick(function () {
                    e.loadImage();
                  });
              },
            },
            active: {
              handler: function (t) {
                t
                  ? ((this.isPlaying = !0),
                    this.loaded && this.$refs.video.$refs.video.play())
                  : ((this.isPlaying = !1),
                    this.loaded && this.$refs.video.$refs.video.pause());
              },
            },
          },
          data: function () {
            return {
              loaded: !1,
            };
          },
          mounted: function () {
            var t = this;
            0 == this.index &&
              this.$refs.video.$refs.video.setAttribute("data-critical", ""),
              this.domLoaded &&
                !this.navigating &&
                this.loadable() &&
                this.$nextTick(function () {
                  t.loadImage();
                });
          },
          methods: {
            loadable: function () {
              var t =
                this.currentIndex - 1 < 0
                  ? this.total - 1
                  : this.currentIndex - 1;
              return (
                this.index == this.currentIndex ||
                this.index == this.currentIndex + 1 ||
                t == this.index
              );
            },
            loadImage: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var video;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t.loaded) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (
                            ((video = t.$refs.video.$refs.video),
                            !(
                              video.hasAttribute("data-loading") ||
                              video.hasAttribute("data-loaded")
                            ))
                          ) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          return (
                            (t.loaded = !0), (e.next = 9), Object(c.a)(video)
                          );
                        case 9:
                          (video = e.sent),
                            n.a.to(video, {
                              autoAlpha: 1,
                              duration: 0.5,
                              ease: "power2.inOut",
                            }),
                            t.isPlaying && t.$refs.video.$refs.video.play();
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        },
        d = (o(644), o(9)),
        component = Object(d.a)(
          l,
          function () {
            var t = this;
            return (0, t._self._c)("VideoPlayer", {
              ref: "video",
              staticClass: "abs",
              attrs: {
                url: t.$device.isMobile
                  ? t.content.assetMobile.video.url
                  : t.content.asset.video.url,
                autoplay: !0,
                showDuration: !0,
                controls: !1,
                skip: !0,
              },
            });
          },
          [],
          !1,
          null,
          "d4b2a46e",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        VideoPlayer: o(474).default,
      });
    },
    657: function (t, e, o) {
      var content = o(687);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("26fcff0a", content, !0, {
        sourceMap: !1,
      });
    },
    664: function (t, e, o) {
      var map = {
        "./af": 497,
        "./af.js": 497,
        "./ar": 498,
        "./ar-dz": 499,
        "./ar-dz.js": 499,
        "./ar-kw": 500,
        "./ar-kw.js": 500,
        "./ar-ly": 501,
        "./ar-ly.js": 501,
        "./ar-ma": 502,
        "./ar-ma.js": 502,
        "./ar-ps": 503,
        "./ar-ps.js": 503,
        "./ar-sa": 504,
        "./ar-sa.js": 504,
        "./ar-tn": 505,
        "./ar-tn.js": 505,
        "./ar.js": 498,
        "./az": 506,
        "./az.js": 506,
        "./be": 507,
        "./be.js": 507,
        "./bg": 508,
        "./bg.js": 508,
        "./bm": 509,
        "./bm.js": 509,
        "./bn": 510,
        "./bn-bd": 511,
        "./bn-bd.js": 511,
        "./bn.js": 510,
        "./bo": 512,
        "./bo.js": 512,
        "./br": 513,
        "./br.js": 513,
        "./bs": 514,
        "./bs.js": 514,
        "./ca": 515,
        "./ca.js": 515,
        "./cs": 516,
        "./cs.js": 516,
        "./cv": 517,
        "./cv.js": 517,
        "./cy": 518,
        "./cy.js": 518,
        "./da": 519,
        "./da.js": 519,
        "./de": 520,
        "./de-at": 521,
        "./de-at.js": 521,
        "./de-ch": 522,
        "./de-ch.js": 522,
        "./de.js": 520,
        "./dv": 523,
        "./dv.js": 523,
        "./el": 524,
        "./el.js": 524,
        "./en-au": 525,
        "./en-au.js": 525,
        "./en-ca": 526,
        "./en-ca.js": 526,
        "./en-gb": 527,
        "./en-gb.js": 527,
        "./en-ie": 528,
        "./en-ie.js": 528,
        "./en-il": 529,
        "./en-il.js": 529,
        "./en-in": 530,
        "./en-in.js": 530,
        "./en-nz": 531,
        "./en-nz.js": 531,
        "./en-sg": 532,
        "./en-sg.js": 532,
        "./eo": 533,
        "./eo.js": 533,
        "./es": 534,
        "./es-do": 535,
        "./es-do.js": 535,
        "./es-mx": 536,
        "./es-mx.js": 536,
        "./es-us": 537,
        "./es-us.js": 537,
        "./es.js": 534,
        "./et": 538,
        "./et.js": 538,
        "./eu": 539,
        "./eu.js": 539,
        "./fa": 540,
        "./fa.js": 540,
        "./fi": 541,
        "./fi.js": 541,
        "./fil": 542,
        "./fil.js": 542,
        "./fo": 543,
        "./fo.js": 543,
        "./fr": 544,
        "./fr-ca": 545,
        "./fr-ca.js": 545,
        "./fr-ch": 546,
        "./fr-ch.js": 546,
        "./fr.js": 544,
        "./fy": 547,
        "./fy.js": 547,
        "./ga": 548,
        "./ga.js": 548,
        "./gd": 549,
        "./gd.js": 549,
        "./gl": 550,
        "./gl.js": 550,
        "./gom-deva": 551,
        "./gom-deva.js": 551,
        "./gom-latn": 552,
        "./gom-latn.js": 552,
        "./gu": 553,
        "./gu.js": 553,
        "./he": 554,
        "./he.js": 554,
        "./hi": 555,
        "./hi.js": 555,
        "./hr": 556,
        "./hr.js": 556,
        "./hu": 557,
        "./hu.js": 557,
        "./hy-am": 558,
        "./hy-am.js": 558,
        "./id": 559,
        "./id.js": 559,
        "./is": 560,
        "./is.js": 560,
        "./it": 561,
        "./it-ch": 562,
        "./it-ch.js": 562,
        "./it.js": 561,
        "./ja": 563,
        "./ja.js": 563,
        "./jv": 564,
        "./jv.js": 564,
        "./ka": 565,
        "./ka.js": 565,
        "./kk": 566,
        "./kk.js": 566,
        "./km": 567,
        "./km.js": 567,
        "./kn": 568,
        "./kn.js": 568,
        "./ko": 569,
        "./ko.js": 569,
        "./ku": 570,
        "./ku-kmr": 571,
        "./ku-kmr.js": 571,
        "./ku.js": 570,
        "./ky": 572,
        "./ky.js": 572,
        "./lb": 573,
        "./lb.js": 573,
        "./lo": 574,
        "./lo.js": 574,
        "./lt": 575,
        "./lt.js": 575,
        "./lv": 576,
        "./lv.js": 576,
        "./me": 577,
        "./me.js": 577,
        "./mi": 578,
        "./mi.js": 578,
        "./mk": 579,
        "./mk.js": 579,
        "./ml": 580,
        "./ml.js": 580,
        "./mn": 581,
        "./mn.js": 581,
        "./mr": 582,
        "./mr.js": 582,
        "./ms": 583,
        "./ms-my": 584,
        "./ms-my.js": 584,
        "./ms.js": 583,
        "./mt": 585,
        "./mt.js": 585,
        "./my": 586,
        "./my.js": 586,
        "./nb": 587,
        "./nb.js": 587,
        "./ne": 588,
        "./ne.js": 588,
        "./nl": 589,
        "./nl-be": 590,
        "./nl-be.js": 590,
        "./nl.js": 589,
        "./nn": 591,
        "./nn.js": 591,
        "./oc-lnc": 592,
        "./oc-lnc.js": 592,
        "./pa-in": 593,
        "./pa-in.js": 593,
        "./pl": 594,
        "./pl.js": 594,
        "./pt": 595,
        "./pt-br": 596,
        "./pt-br.js": 596,
        "./pt.js": 595,
        "./ro": 597,
        "./ro.js": 597,
        "./ru": 598,
        "./ru.js": 598,
        "./sd": 599,
        "./sd.js": 599,
        "./se": 600,
        "./se.js": 600,
        "./si": 601,
        "./si.js": 601,
        "./sk": 602,
        "./sk.js": 602,
        "./sl": 603,
        "./sl.js": 603,
        "./sq": 604,
        "./sq.js": 604,
        "./sr": 605,
        "./sr-cyrl": 606,
        "./sr-cyrl.js": 606,
        "./sr.js": 605,
        "./ss": 607,
        "./ss.js": 607,
        "./sv": 608,
        "./sv.js": 608,
        "./sw": 609,
        "./sw.js": 609,
        "./ta": 610,
        "./ta.js": 610,
        "./te": 611,
        "./te.js": 611,
        "./tet": 612,
        "./tet.js": 612,
        "./tg": 613,
        "./tg.js": 613,
        "./th": 614,
        "./th.js": 614,
        "./tk": 615,
        "./tk.js": 615,
        "./tl-ph": 616,
        "./tl-ph.js": 616,
        "./tlh": 617,
        "./tlh.js": 617,
        "./tr": 618,
        "./tr.js": 618,
        "./tzl": 619,
        "./tzl.js": 619,
        "./tzm": 620,
        "./tzm-latn": 621,
        "./tzm-latn.js": 621,
        "./tzm.js": 620,
        "./ug-cn": 622,
        "./ug-cn.js": 622,
        "./uk": 623,
        "./uk.js": 623,
        "./ur": 624,
        "./ur.js": 624,
        "./uz": 625,
        "./uz-latn": 626,
        "./uz-latn.js": 626,
        "./uz.js": 625,
        "./vi": 627,
        "./vi.js": 627,
        "./x-pseudo": 628,
        "./x-pseudo.js": 628,
        "./yo": 629,
        "./yo.js": 629,
        "./zh-cn": 630,
        "./zh-cn.js": 630,
        "./zh-hk": 631,
        "./zh-hk.js": 631,
        "./zh-mo": 632,
        "./zh-mo.js": 632,
        "./zh-tw": 633,
        "./zh-tw.js": 633,
      };
      function r(t) {
        var e = n(t);
        return o(e);
      }
      function n(t) {
        if (!o.o(map, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return map[t];
      }
      (r.keys = function () {
        return Object.keys(map);
      }),
        (r.resolve = n),
        (t.exports = r),
        (r.id = 664);
    },
    665: function (t, e, o) {
      "use strict";
      o(639);
    },
    666: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        'footer{position:relative}footer.white{background:#b7e3b6}footer.white .about{background:#fff}footer.white .about__line{background:#dcdcdc}footer.white .about .decoration.opaque{text-decoration-color:#ccc}footer.white .about .decoration:not(.opaque){text-decoration-color:rgba(204,204,204,0)}footer.white .contact__information__detail__line{background:#7da07d}footer.white .contact .underline:after{background:#7da07d}footer.white .contact input::placeholder{color:#849f80}footer.black{background:#000}footer.black .about{color:#fff;background:#000}footer.black .about__line{background:#dcdcdc}footer.black .about .decoration.opaque{text-decoration-color:#ccc}footer.black .about .decoration:not(.opaque){text-decoration-color:rgba(204,204,204,0)}footer.black .about .decoration:hover{text-decoration-color:#fff !important}footer.black .contact__information__detail__line{background:#7da07d}footer.black .contact .underline:after{background:#7da07d}footer.black .contact input::placeholder{color:#849f80}footer.green{background:#b7e3b6}footer.green .about{background:#fff}footer.green .about__line{background:#dcdcdc}footer.green .about .decoration.opaque{text-decoration-color:#ccc}footer.green .about .decoration:not(.opaque){text-decoration-color:rgba(204,204,204,0)}footer.green .contact__information__detail__line{background:#7da07d}footer.green .contact .underline:after{background:#7da07d}footer.green .contact input::placeholder{color:#849f80}footer.darkgreen{background:#2d593b}footer.darkgreen .decoration{text-decoration-color:#244931 !important}footer.darkgreen .decoration:hover{text-decoration-color:#000 !important}footer.darkgreen .about{background:#2d593b}footer.darkgreen .about__line{background:#20412b}footer.darkgreen .contact{background:#2d593b}footer.darkgreen .contact__information__detail__line{background:#20412b}footer.darkgreen .contact__marquee{background:#b7e3b6}footer.darkgreen .contact .underline:after{background:#20412b}footer.darkgreen .contact input::placeholder{color:#244931}footer .about{position:relative;z-index:1}footer .about__link{display:inline-block;text-transform:capitalize}footer .about__link span{position:relative;font-weight:400}footer .about__description p{font-family:"PSTimes"}footer .contact{position:relative;display:flex;flex-wrap:wrap;overflow:hidden;background:#b7e3b6}footer .contact input::placeholder{font-weight:500;color:#ccc}@media(hover: hover){footer .contact input:hover::placeholder{color:#000}}footer .contact input:focus::placeholder{color:#b7e3b6}footer .contact__marquee{text-transform:uppercase}footer .contact__information__detail p,footer .contact__information__detail button,footer .contact__information__detail input,footer .contact__information__detail ::placeholder,footer .contact__information__detail svg path,footer .contact__information__detail button:after{transition:all 500ms ease}footer .contact__information__detail.submitting{pointer-events:none}footer .contact__information__detail.submitting p,footer .contact__information__detail.submitting button,footer .contact__information__detail.submitting input,footer .contact__information__detail.submitting svg path{opacity:.2}footer .contact__information__detail.submitting input{pointer-events:none}footer .contact__information__detail.error p,footer .contact__information__detail.error button,footer .contact__information__detail.error input,footer .contact__information__detail.error svg path{opacity:1}footer .contact__information__detail.error p{color:red}footer .contact__information__detail.error button{color:red}footer .contact__information__detail.error button:after{background:red}footer .contact__information__detail.error input{color:red;pointer-events:none}footer .contact__information__detail.error ::placeholder{color:red !important}footer .contact__information__detail.error svg path{stroke:red}footer .contact__information__detail.success p,footer .contact__information__detail.success button,footer .contact__information__detail.success input,footer .contact__information__detail.success svg path{opacity:1}footer .contact__information__detail.success p{color:#036600}footer .contact__information__detail.success button{color:#036600}footer .contact__information__detail.success button:after{background:#036600}footer .contact__information__detail.success input{color:#036600;pointer-events:none}footer .contact__information__detail.success ::placeholder{color:#036600 !important}footer .contact__information__detail.success svg path{stroke:#036600}@media only screen and (min-width: 480px){footer{z-index:4}footer .about{transform:translate3d(0, 0, 0)}footer .about__inner{padding:14rem var(--margin) 34rem var(--margin)}footer .about__line{position:absolute;left:0;width:100vw;height:1px}footer .about__line:first-child{top:0}footer .about__line:nth-child(2){bottom:0}footer .about__description p{font-size:var(--h2);line-height:var(--h2-line_height);letter-spacing:var(--h2-letter_spacing)}footer .about__description p .indent{margin-left:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.0833333333 + var(--gutter)*1)}footer .about__description p a{text-decoration:underline;text-decoration-style:solid;text-decoration-thickness:3px;text-underline-offset:2px}footer .about__link{margin-top:54rem}footer .about__link div{width:12rem}footer .contact{position:relative;display:flex;flex-wrap:wrap;overflow:hidden;bottom:0;transform:translate3d(0, 0, 0)}footer .contact__title{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2);margin-top:23rem;margin-left:var(--margin);margin-right:var(--gutter)}footer .contact__title p{text-transform:uppercase}footer .contact__information{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.75 + var(--gutter)*8)}footer .contact__information__detail{display:flex;position:relative;padding:23rem 0 40rem 0}footer .contact__information__detail:first-child .contact__information__detail__line{display:none}footer .contact__information__detail:last-of-type{padding:20rem 0 80rem 0}footer .contact__information__detail__line{position:absolute;top:0;left:0;width:calc(100% + var(--margin));height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}footer .contact__information__detail__form{position:relative;display:flex;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}footer .contact__information__detail__form__feedback{position:absolute;top:0;left:0}footer .contact__information__detail__form__input{position:absolute;top:0;left:0;width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2);margin-right:var(--gutter)}footer .contact__information__detail__form__input input{width:92%;font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}footer .contact__information__detail__form__input svg{position:absolute;width:100%;left:-10rem;bottom:-6rem}footer .contact__information__detail__form button{position:absolute;top:0;left:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*3);text-transform:uppercase;padding-left:18rem}footer .contact__information__detail__form button:before{content:"";position:absolute;top:50%;left:0;width:12rem;height:12rem;border-radius:100%;background:#000;transform:translate3d(0, -50%, 0)}footer .contact__information__detail__title{text-transform:uppercase;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2);margin-right:var(--margin)}footer .contact__information__detail__title p{text-transform:uppercase}footer .contact__information__detail__content{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2)}footer .contact__information__detail__content:last-child{margin-left:var(--gutter)}footer .contact__information__detail__content__title{text-transform:uppercase}footer .contact__information__detail__content__detail p{font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}footer .contact__information__detail__content a div{display:inline-block;width:9rem;position:relative;top:-1rem}footer .contact__marquee{display:flex;flex:0 0 100%;position:relative;align-items:center;padding:0 0 0 var(--margin)}footer .contact__marquee__description{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*1);margin-right:var(--gutter);text-transform:uppercase;letter-spacing:-0.02em}footer .contact__marquee__description span:last-child{display:none}footer .contact__marquee__line{display:none;position:absolute;top:0;left:0;width:100%;height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}footer .contact__marquee__ticker{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.8333333333 + var(--gutter)*10);overflow:hidden;user-select:none;pointer-events:none}footer .contact__marquee__ticker__inner{display:flex;will-change:transform}footer .contact__marquee__ticker__inner div{display:inline-flex;will-change:transform;transform:translate3d(0, 0, 0)}footer .contact__marquee__ticker__inner p{display:inline-block;white-space:nowrap;line-height:1.1}footer .contact__marquee__ticker__inner p span{display:inline-block;width:200rem;text-align:left}}@media only screen and (max-width: 479px){footer{z-index:4}footer .about{padding:15px var(--margin) 30px var(--margin)}footer .about__line{position:absolute;left:0;width:100vw;height:1px}footer .about__line:first-child{top:0}footer .about__line:nth-child(2){bottom:0}footer .about__description p{font-size:var(--h2);line-height:var(--h2-line_height);letter-spacing:var(--h2-letter_spacing)}footer .about__description p .indent{margin-left:52rem}footer .about__description p a{text-decoration:underline;text-decoration-style:solid;text-decoration-thickness:3px;text-underline-offset:2px}footer .about__link{margin-top:52px}footer .about__link div{width:10px}footer .contact{bottom:0}footer .contact__title{display:none}footer .contact__information{margin-left:var(--margin);flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}footer .contact__information .contact__information__detail__line{position:absolute;top:0;left:-15px;width:100vw;height:1px;transform:translate3d(0, 0, 0)}footer .contact__information__detail{display:flex;flex-wrap:wrap;position:relative;padding:14px 0 20px 0}footer .contact__information__detail:last-child{padding:14px 0}footer .contact__information__detail:first-child .contact__information__detail__line{display:none}footer .contact__information__detail__form{position:relative;display:flex;flex:0 0 100vw;height:16px}footer .contact__information__detail__form__input{position:absolute;top:0;left:0;width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2);margin-right:var(--gutter)}footer .contact__information__detail__form__input input{width:92%;font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}footer .contact__information__detail__form__input svg{position:absolute;width:100%;left:-10rem;bottom:-6rem}footer .contact__information__detail__form button{position:absolute;top:0;left:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*3);text-transform:uppercase;padding-left:18rem;margin-left:14rem}footer .contact__information__detail__form button:before{content:"";position:absolute;top:5rem;left:0;width:12rem;height:12rem;border-radius:100%;background:#000}footer .contact__information__detail__title{text-transform:uppercase;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin-bottom:24px}footer .contact__information__detail__title p{text-transform:uppercase}footer .contact__information__detail__title p br{display:none}footer .contact__information__detail__content{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.5 + var(--gutter)*1)}footer .contact__information__detail__content:last-child{margin-left:var(--gutter)}footer .contact__information__detail__content__title{text-transform:uppercase}footer .contact__information__detail__content__detail p{font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}footer .contact__information__detail__content a span:after{bottom:2px}footer .contact__information__detail__content a div{display:inline-block;width:8px}footer .contact__marquee{display:flex;flex-wrap:wrap;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);align-items:center;position:relative;padding:12px 0}footer .contact__marquee__description{flex:0 0 auto;margin-right:14px;text-transform:uppercase;letter-spacing:-0.02em;margin-left:var(--margin)}footer .contact__marquee__description span:first-child{display:none}footer .contact__marquee__ticker{flex:1;overflow:hidden;user-select:none;pointer-events:none}footer .contact__marquee__ticker__inner{display:flex;will-change:transform}footer .contact__marquee__ticker__inner div{display:inline-flex;will-change:transform;transform:translate3d(0, 0, 0)}footer .contact__marquee__ticker__inner p{display:inline-block;white-space:nowrap;line-height:1.1;font-size:27rem}footer .contact__marquee__ticker__inner p span{display:inline-block;width:126rem;text-align:left}}',
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    686: function (t, e, o) {
      "use strict";
      o(657);
    },
    687: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".slideshow[data-v-061b0ba0]{position:relative;background:#fff;width:100vw;overflow:hidden;cursor:pointer;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.slideshow .slides[data-v-061b0ba0]{position:fixed;top:0;left:0;width:100vw;will-change:transform;overflow:hidden}.slideshow .slide[data-v-061b0ba0]{position:fixed;top:0;left:0;width:100vw;display:flex}.slideshow .slide[data-v-061b0ba0]:not(.active){opacity:0}.slideshow .image-container[data-v-061b0ba0]{position:relative;flex:1}.slideshow .details[data-v-061b0ba0]{position:absolute;left:50%;transform:translate3d(-50%, 0, 0);width:calc(100vw - var(--margin)*2);height:100%;user-select:none;z-index:10;mix-blend-mode:difference;color:#fff}.slideshow .details__descriptions[data-v-061b0ba0]{position:absolute;bottom:0;left:0;z-index:1}.slideshow .details__description[data-v-061b0ba0]{position:absolute;bottom:0;left:0}.slideshow .details__description[data-v-061b0ba0]:not(.active){opacity:0}.slideshow .details__counter[data-v-061b0ba0]{position:absolute;bottom:0;right:0;text-align:right}@media only screen and (min-width: 480px){.slideshow[data-v-061b0ba0]{height:700rem}.slideshow .slides[data-v-061b0ba0],.slideshow .slide[data-v-061b0ba0]{height:700rem}.slideshow .details[data-v-061b0ba0]{bottom:20rem}.slideshow .details__descriptions[data-v-061b0ba0],.slideshow .details__description[data-v-061b0ba0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.slideshow .details__counter[data-v-061b0ba0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*1)}}@media only screen and (max-width: 479px){.slideshow[data-v-061b0ba0]{padding-top:125%}.slideshow .slide[data-v-061b0ba0]{transition:opacity 600ms ease}.slideshow .slides[data-v-061b0ba0],.slideshow .slide[data-v-061b0ba0]{height:125vw}.slideshow .slides img[data-v-061b0ba0],.slideshow .slides video[data-v-061b0ba0],.slideshow .slide img[data-v-061b0ba0],.slideshow .slide video[data-v-061b0ba0]{object-fit:contain}.slideshow .details[data-v-061b0ba0]{bottom:11px}.slideshow .details__descriptions[data-v-061b0ba0],.slideshow .details__description[data-v-061b0ba0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.slideshow .details__counter[data-v-061b0ba0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.25 + var(--gutter)*0)}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    693: function (t, e, o) {
      "use strict";
      o.r(e);
      o(11), o(56);
      var r = o(4),
        n = o(475),
        c = o(649),
        l = o(650),
        d = o(13),
        _ = o(495);
      d.a.registerPlugin(_.ScrollTrigger);
      var f = {
          name: "Slideshow",
          props: {
            data: {
              type: Object,
              required: !0,
            },
          },
          components: {
            ImageModule: c.default,
            VideoModule: l.default,
          },
          computed: {
            total: function () {
              return this.data.assets.length;
            },
            cursorCopy: function () {
              return this.$store.getters.cursorCopy;
            },
          },
          data: function () {
            return {
              tl: null,
              cycleId: null,
              currentIndex: 0,
              mouse: {
                x: 0,
                y: 0,
                down: !1,
              },
            };
          },
          beforeDestroy: function () {
            this.tl && this.tl.kill(), this.removeListeners(), this.stopCycle();
          },
          mounted: function () {
            this.addListeners(), this.setupTl(), this.startCycle();
          },
          methods: {
            setupTl: function () {
              var t = this;
              this.tl = d.a.timeline({
                scrollTrigger: {
                  trigger: this.$refs.container,
                  start: "top top",
                  end: "bottom+=10% top",
                  scrub: !0,
                  onToggle: function (e) {
                    1 !== e.progress
                      ? (t.$refs.container.style.visibility = "")
                      : (t.$refs.container.style.visibility = "hidden");
                  },
                },
              });
              var e = -0.4 * this.$refs.slides.offsetHeight;
              this.tl.to(
                this.$refs.slides,
                {
                  y: e,
                  force3D: !0,
                  ease: "none",
                },
                0
              );
            },
            next: function () {
              (this.currentIndex =
                this.currentIndex + 1 < this.total ? this.currentIndex + 1 : 0),
                this.$emit("update:value", this.currentIndex);
            },
            prev: function () {
              (this.currentIndex =
                this.currentIndex - 1 >= 0
                  ? this.currentIndex - 1
                  : this.total - 1),
                this.$emit("update:value", this.currentIndex);
            },
            addListeners: function () {
              r.a.on("up", this.handleUp),
                r.a.on("move", this.handleMove),
                r.a.on("down", this.handleDown);
            },
            removeListeners: function () {
              r.a.off("up", this.handleUp),
                r.a.off("move", this.handleMove),
                r.a.off("down", this.handleDown);
            },
            handleUp: function (t) {
              var e = t.x,
                o = Math.abs(this.mouse.x - e);
              if (this.mouse.down) {
                if (o > 10) this.mouse.x - e > 0 ? this.next() : this.prev();
                else {
                  var n = e / r.b.bounds.ww;
                  this.stopCycle(),
                    n <= 1 / 3 ? this.prev() : n >= (1 / 3) * 2 && this.next();
                }
                this.mouse.down = !1;
              }
            },
            handleMouseMove: function (t) {
              var e = t.pageX / r.b.bounds.ww;
              this.total > 1 &&
                (e <= 1 / 3
                  ? "Previous" !== this.cursorCopy &&
                    this.$store.dispatch("setCursorCopy", "Previous")
                  : e >= (1 / 3) * 2
                  ? "Next" !== this.cursorCopy &&
                    this.$store.dispatch("setCursorCopy", "Next")
                  : "" !== this.cursorCopy &&
                    this.$store.dispatch("setCursorCopy", ""));
            },
            handleMouseLeave: function () {
              "" !== this.cursorCopy &&
                this.$store.dispatch("setCursorCopy", "");
            },
            handleMove: function (t) {
              var e = t.x,
                o = t.y,
                r = t.ev,
                n = Math.abs(e - this.mouse.x);
              Math.abs(o - this.mouse.y);
              this.mouse.down && n > 20 && r.cancelable && r.preventDefault();
            },
            handleDown: function (t) {
              var e = t.x,
                o = t.y,
                r = t.ev,
                c = Object(n.a)(r).some(function (t) {
                  return t.classList && t.classList.contains("slideshow");
                });
              this.mouse = {
                x: e,
                y: o,
                down: c,
              };
            },
            startCycle: function () {
              var t = this;
              this.total <= 1 ||
                (this.cycleId = setInterval(function () {
                  t.next();
                }, 3e3));
            },
            stopCycle: function () {
              this.cycleId && clearInterval(this.cycleId),
                (this.cycleId = null);
            },
          },
        },
        m = (o(686), o(9)),
        component = Object(m.a)(
          f,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                ref: "container",
                staticClass: "slideshow",
                on: {
                  mousemove: t.handleMouseMove,
                  mouseleave: t.handleMouseLeave,
                },
              },
              [
                e(
                  "div",
                  {
                    ref: "slides",
                    staticClass: "slides",
                  },
                  [
                    t._l(t.data.assets, function (o, r) {
                      return [
                        e(
                          "div",
                          {
                            key: r,
                            class: [
                              "slide",
                              {
                                "image-slide":
                                  (o.assetMobile &&
                                    "image" == o.assetMobile._type) ||
                                  "image" == o.asset._type,
                              },
                              {
                                "video-slide":
                                  (o.assetMobile &&
                                    "video" == o.assetMobile._type) ||
                                  "video" == o.asset._type,
                              },
                              {
                                active: t.currentIndex == r,
                              },
                            ],
                          },
                          [
                            (
                              t.$device.isMobile && o.assetMobile
                                ? "image" == o.assetMobile._type
                                : "image" == o.asset._type
                            )
                              ? e("ImageModule", {
                                  attrs: {
                                    content: o,
                                    index: r,
                                    currentIndex: t.currentIndex,
                                    total: t.total,
                                  },
                                })
                              : (
                                  t.$device.isMobile && o.assetMobile
                                    ? "vimeo" == o.assetMobile._type
                                    : "vimeo" == o.asset._type
                                )
                              ? e("VideoModule", {
                                  attrs: {
                                    content: o,
                                    index: r,
                                    currentIndex: t.currentIndex,
                                    total: t.total,
                                  },
                                })
                              : t._e(),
                          ],
                          1
                        ),
                      ];
                    }),
                  ],
                  2
                ),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "details",
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "details__descriptions",
                      },
                      t._l(t.data.assets, function (o, r) {
                        return e(
                          "p",
                          {
                            key: r,
                            class: [
                              "details__description b2",
                              {
                                active: r == t.currentIndex,
                              },
                            ],
                          },
                          [
                            t._v(
                              "\n                " +
                                t._s(o.copy) +
                                "\n            "
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                    t._v(" "),
                    e(
                      "p",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.total > 1,
                            expression: "total > 1",
                          },
                        ],
                        staticClass: "details__counter b2",
                      },
                      [
                        t._v(
                          t._s(t.currentIndex + 1) +
                            " of " +
                            t._s(t.data.assets.length)
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "061b0ba0",
          null
        );
      e.default = component.exports;
    },
    702: function (t, e, o) {
      var content = o(785);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("5f347409", content, !0, {
        sourceMap: !1,
      });
    },
    703: function (t, e, o) {
      var content = o(787);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("16ba572e", content, !0, {
        sourceMap: !1,
      });
    },
    784: function (t, e, o) {
      "use strict";
      o(702);
    },
    785: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".description[data-v-5c469eb1]{position:relative;width:100%;z-index:1}@media only screen and (min-width: 480px){.description[data-v-5c469eb1]:first-child{padding:18rem var(--margin) 0 var(--margin)}.description[data-v-5c469eb1]:not(:first-child){padding:0 var(--margin)}.description[data-v-5c469eb1]:not(:last-child){margin-bottom:42rem}.description p[data-v-5c469eb1]{font-weight:350;text-indent:120rem}}@media only screen and (max-width: 479px){.description[data-v-5c469eb1]:first-child{padding:18rem var(--margin) 0 var(--margin)}.description[data-v-5c469eb1]:not(:first-child){padding:0 var(--margin)}.description[data-v-5c469eb1]:not(:last-child){margin-bottom:28rem}.description p[data-v-5c469eb1]{font-weight:350;text-indent:120rem}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    786: function (t, e, o) {
      "use strict";
      o(703);
    },
    787: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        '.products-module[data-v-edf84fc0]{position:relative;width:100%;z-index:1}.products-module .product[data-v-edf84fc0]{display:block;position:relative}.products-module .product__asset[data-v-edf84fc0]{width:100%}.products-module .product__asset__container[data-v-edf84fc0]{position:relative;width:100%;background:#b7e3b6}.products-module .product__details p[data-v-edf84fc0]{font-family:"ChaletBook";font-weight:400}.products-module .product__details p:first-child span[data-v-edf84fc0]:first-child{color:#201b1b}.products-module .product__details p:first-child span[data-v-edf84fc0]:nth-child(2){color:#a5a5a5}.products-module .product__details p[data-v-edf84fc0]:last-child{color:#a5a5a5}@media only screen and (min-width: 480px){.products-module[data-v-edf84fc0]{padding:0 var(--margin)}.products-module[data-v-edf84fc0]:not(:last-child){margin-bottom:42rem}.products-module ul.large li[data-v-edf84fc0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.6666666667 + var(--gutter)*7)}.products-module ul.large li[data-v-edf84fc0]:nth-child(2){margin-top:-32rem;margin-left:auto}.products-module ul.large .product__asset__container[data-v-edf84fc0]{padding-top:67%}.products-module ul:not(.large) .product__asset__container[data-v-edf84fc0]{padding-top:137.0454545455%}.products-module ul.regular[data-v-edf84fc0]{display:flex}.products-module ul.regular li[data-v-edf84fc0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3)}.products-module ul.regular:not(.mirrored) li[data-v-edf84fc0]:nth-child(1){margin-right:var(--gutter)}.products-module ul.regular.mirrored li[data-v-edf84fc0]:nth-child(1){margin-left:auto}.products-module ul.regular.mirrored li[data-v-edf84fc0]:nth-child(2){margin-left:var(--gutter)}.products-module .product__details[data-v-edf84fc0]{margin-top:20rem;width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3)}.products-module .product__details p[data-v-edf84fc0]{line-height:1.22}}@media only screen and (max-width: 479px){.products-module[data-v-edf84fc0]{padding:0 var(--margin)}.products-module[data-v-edf84fc0]:not(:last-child){margin-bottom:28rem}.products-module ul[data-v-edf84fc0]{display:flex;flex-wrap:wrap;justify-content:space-between}.products-module ul.large .product__asset__container[data-v-edf84fc0]{padding-top:67%}.products-module ul.large li[data-v-edf84fc0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.products-module ul:not(.large) .product__asset__container[data-v-edf84fc0]{padding-top:137.0454545455%}.products-module ul:not(.large) li[data-v-edf84fc0]:only-child{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin-bottom:28rem}.products-module ul:not(.large) li[data-v-edf84fc0]:not(:only-child){width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.5 + var(--gutter)*1);margin-bottom:28rem}.products-module ul li[data-v-edf84fc0]{margin-bottom:28rem}.products-module .product__details[data-v-edf84fc0]{margin-top:12rem;width:100%}.products-module .product__details p[data-v-edf84fc0]{line-height:1.22}}',
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    825: function (t, e, o) {
      var content = o(863);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("8dde3be8", content, !0, {
        sourceMap: !1,
      });
    },
    838: function (t, e, o) {
      "use strict";
      o.r(e);
      o(50), o(69);
      var r = {
          name: "Description",
          props: {
            slide: {
              type: Object,
              required: !0,
            },
          },
        },
        n = (o(784), o(9)),
        component = Object(n.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "description",
              },
              [
                e(
                  "p",
                  {
                    staticClass: "h2",
                  },
                  [t._v(t._s(t.slide.description))]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "5c469eb1",
          null
        );
      e.default = component.exports;
    },
    839: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = {
          name: "ProductsModule",
          props: {
            slide: {
              type: Object,
              required: !0,
            },
          },
          methods: {
            formatPrice: function (t) {
              return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(t);
            },
          },
        },
        n = (o(786), o(9)),
        component = Object(n.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "products-module",
              },
              [
                e(
                  "ul",
                  {
                    class: [
                      t.slide.layoutSizing,
                      {
                        mirrored: t.slide.mirrored,
                      },
                    ],
                  },
                  t._l(t.slide.products, function (o, r) {
                    return e(
                      "li",
                      {
                        key: r,
                      },
                      [
                        o.isActiveProduct
                          ? e(
                              "nuxt-link",
                              {
                                staticClass: "product",
                                attrs: {
                                  to: "/store/".concat(
                                    o.information.slug.current
                                  ),
                                },
                              },
                              [
                                e(
                                  "div",
                                  {
                                    staticClass: "product__asset",
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "product__asset__container",
                                      },
                                      [
                                        "image" == o.preview.asset._type
                                          ? e("SanityImage", {
                                              ref: "image",
                                              refInFor: !0,
                                              staticClass: "abs full cover",
                                              attrs: {
                                                image: o.preview.asset.image,
                                              },
                                            })
                                          : "vimeo" == o.preview.asset._type
                                          ? e("VideoPlayer", {
                                              staticClass: "abs",
                                              attrs: {
                                                url: o.preview.asset.video.url,
                                                autoplay: !0,
                                                showDuration: !1,
                                                controls: !1,
                                                skip: !1,
                                                hoverActions: !1,
                                              },
                                            })
                                          : t._e(),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  {
                                    staticClass: "product__details",
                                  },
                                  [
                                    e(
                                      "p",
                                      {
                                        staticClass: "b2",
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            staticClass: "b2",
                                          },
                                          [t._v(t._s(o.preview.title))]
                                        ),
                                        t._v(" "),
                                        o.preview.subtitle
                                          ? e(
                                              "span",
                                              {
                                                staticClass: "b2",
                                              },
                                              [t._v(t._s(o.preview.subtitle))]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "p",
                                      {
                                        staticClass: "b2",
                                      },
                                      [
                                        t._v(
                                          "\n                        " +
                                            t._s(
                                              o.isActiveProduct
                                                ? t.formatPrice(
                                                    o.product.store.priceRange
                                                      .minVariantPrice
                                                  )
                                                : "Coming Soon"
                                            ) +
                                            "\n                    "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : e(
                              "div",
                              {
                                staticClass: "product",
                              },
                              [
                                e(
                                  "div",
                                  {
                                    staticClass: "product__asset",
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "product__asset__container",
                                      },
                                      [
                                        "image" == o.preview.asset._type
                                          ? e("SanityImage", {
                                              ref: "image",
                                              refInFor: !0,
                                              staticClass: "abs full cover",
                                              attrs: {
                                                image: o.preview.asset.image,
                                              },
                                            })
                                          : "vimeo" == o.preview.asset._type
                                          ? e("VideoPlayer", {
                                              staticClass: "abs",
                                              attrs: {
                                                url: o.preview.asset.video.url,
                                                autoplay: !0,
                                                showDuration: !1,
                                                controls: !1,
                                                skip: !1,
                                                hoverActions: !1,
                                              },
                                            })
                                          : t._e(),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  {
                                    staticClass: "product__details",
                                  },
                                  [
                                    e(
                                      "p",
                                      {
                                        staticClass: "b2",
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            staticClass: "b2",
                                          },
                                          [t._v(t._s(o.preview.title))]
                                        ),
                                        t._v(" "),
                                        o.preview.subtitle
                                          ? e(
                                              "span",
                                              {
                                                staticClass: "b2",
                                              },
                                              [t._v(t._s(o.preview.subtitle))]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "p",
                                      {
                                        staticClass: "b2",
                                      },
                                      [
                                        t._v(
                                          "\n                        " +
                                            t._s(
                                              o.isActiveProduct
                                                ? t.formatPrice(
                                                    o.product.store.priceRange
                                                      .minVariantPrice
                                                  )
                                                : "Coming Soon"
                                            ) +
                                            "\n                    "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                      ],
                      1
                    );
                  }),
                  0
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "edf84fc0",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        SanityImage: o(471).default,
        VideoPlayer: o(474).default,
      });
    },
    862: function (t, e, o) {
      "use strict";
      o(825);
    },
    863: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        '.store-page__content[data-v-7177ebe8]{position:relative;z-index:5;background:#fff}.store-page .slides[data-v-7177ebe8]{position:relative}.store-page .slides[data-v-7177ebe8]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;z-index:0}@media only screen and (min-width: 480px){.store-page .slides[data-v-7177ebe8]{padding-bottom:42rem}}@media only screen and (max-width: 479px){.store-page .slides[data-v-7177ebe8]{padding-bottom:28rem}}',
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    892: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = o(1),
        head = (o(22), o(652)),
        n = o(660),
        c = o(112),
        l = o(693),
        d = o(838),
        _ = o(839),
        f = o(114),
        m = o(113),
        v = {
          name: "Store",
          components: {
            Slideshow: l.default,
            Description: d.default,
            ProductsModule: _.default,
          },
          asyncData: function (t) {
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var o, data;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = t.error),
                            (e.prev = 1),
                            (e.next = 4),
                            f.a.fetch(m.h)
                          );
                        case 4:
                          return (
                            (data = e.sent),
                            e.abrupt("return", {
                              page: data,
                            })
                          );
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(1)),
                            o({
                              statusCode: 404,
                              message:
                                "The page you are looking for does not exist. ",
                              err: e.t0,
                            });
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                );
              })
            )();
          },
          mixins: [head.a, c.a, Object(n.a)()],
          computed: {},
          data: function () {
            return {};
          },
          methods: {},
        },
        h = (o(862), o(9)),
        component = Object(h.a)(
          v,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                ref: "main",
                class: ["page store-page"],
              },
              [
                e(
                  "div",
                  {
                    staticClass: "store-page__content drsw",
                  },
                  [
                    t.page.slideshow && t.page.slideshow.assets.length > 0
                      ? e("Slideshow", {
                          attrs: {
                            data: t.page.slideshow,
                          },
                        })
                      : t._e(),
                    t._v(" "),
                    t.page.content && t.page.content.modules
                      ? e(
                          "div",
                          {
                            staticClass: "slides",
                          },
                          [
                            t._l(t.page.content.modules, function (o, r) {
                              return [
                                "descriptionModule" == o._type
                                  ? e("Description", {
                                      key: r,
                                      attrs: {
                                        slide: o,
                                      },
                                    })
                                  : "productsModule" == o._type
                                  ? e("ProductsModule", {
                                      key: r,
                                      attrs: {
                                        slide: o,
                                      },
                                    })
                                  : t._e(),
                              ];
                            }),
                          ],
                          2
                        )
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                e("Footer"),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "7177ebe8",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        Footer: o(636).default,
      });
    },
  },
]);
