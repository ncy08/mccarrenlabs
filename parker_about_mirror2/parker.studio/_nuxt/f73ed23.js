(window.webpackJsonp = window.webpackJsonp || []).push([
  [82, 28, 38, 39, 44, 45, 49, 50, 51, 55, 68, 69],
  {
    480: function (t, e, r) {
      "use strict";
      var n = r(2),
        o = r(6),
        l = r(68),
        d = r(267),
        c = r(266),
        h = r(5),
        v = RangeError,
        f = String,
        m = Math.floor,
        _ = o(c),
        x = o("".slice),
        y = o((1).toFixed),
        w = function (t, e, r) {
          return 0 === e
            ? r
            : e % 2 == 1
            ? w(t, e - 1, r * t)
            : w(t * t, e / 2, r);
        },
        C = function (data, t, e) {
          for (var r = -1, n = e; ++r < 6; )
            (n += t * data[r]), (data[r] = n % 1e7), (n = m(n / 1e7));
        },
        k = function (data, t) {
          for (var e = 6, r = 0; --e >= 0; )
            (r += data[e]), (data[e] = m(r / t)), (r = (r % t) * 1e7);
        },
        I = function (data) {
          for (var t = 6, s = ""; --t >= 0; )
            if ("" !== s || 0 === t || 0 !== data[t]) {
              var e = f(data[t]);
              s = "" === s ? e : s + _("0", 7 - e.length) + e;
            }
          return s;
        };
      n(
        {
          target: "Number",
          proto: !0,
          forced:
            h(function () {
              return (
                "0.000" !== y(8e-5, 3) ||
                "1" !== y(0.9, 0) ||
                "1.25" !== y(1.255, 2) ||
                "1000000000000000128" !== y(0xde0b6b3a7640080, 0)
              );
            }) ||
            !h(function () {
              y({});
            }),
        },
        {
          toFixed: function (t) {
            var e,
              r,
              n,
              o,
              c = d(this),
              h = l(t),
              data = [0, 0, 0, 0, 0, 0],
              m = "",
              y = "0";
            if (h < 0 || h > 20) throw new v("Incorrect fraction digits");
            if (c != c) return "NaN";
            if (c <= -1e21 || c >= 1e21) return f(c);
            if ((c < 0 && ((m = "-"), (c = -c)), c > 1e-21))
              if (
                ((r =
                  (e =
                    (function (t) {
                      for (var e = 0, r = t; r >= 4096; )
                        (e += 12), (r /= 4096);
                      for (; r >= 2; ) (e += 1), (r /= 2);
                      return e;
                    })(c * w(2, 69, 1)) - 69) < 0
                    ? c * w(2, -e, 1)
                    : c / w(2, e, 1)),
                (r *= 4503599627370496),
                (e = 52 - e) > 0)
              ) {
                for (C(data, 0, r), n = h; n >= 7; ) C(data, 1e7, 0), (n -= 7);
                for (C(data, w(10, n, 1), 0), n = e - 1; n >= 23; )
                  k(data, 1 << 23), (n -= 23);
                k(data, 1 << n), C(data, 1, 1), k(data, 2), (y = I(data));
              } else
                C(data, 0, r), C(data, 1 << -e, 0), (y = I(data) + _("0", h));
            return (y =
              h > 0
                ? m +
                  ((o = y.length) <= h
                    ? "0." + _("0", h - o) + y
                    : x(y, 0, o - h) + "." + x(y, o - h))
                : m + y);
          },
        }
      );
    },
    483: function (t, e, r) {
      var content = r(489);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("a30f11f2", content, !0, {
        sourceMap: !1,
      });
    },
    486: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = {
          name: "ExternalStyledLinkSerializer",
          props: {
            children: {
              type: String,
            },
            href: {
              type: String,
            },
          },
        },
        o = (r(488), r(9)),
        component = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "a",
              {
                attrs: {
                  href: t.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
              },
              [
                e(
                  "span",
                  {
                    staticClass: "decoration active opaque black",
                  },
                  [t._t("default")],
                  2
                ),
                t._v(" "),
                e("client-only", [
                  e(
                    "div",
                    {
                      staticClass: "icon",
                    },
                    [
                      e(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
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
                                    "data-name": "Design System",
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
                    ]
                  ),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "ce6c94de",
          null
        );
      e.default = component.exports;
    },
    487: function (t, e, r) {
      var content = r(638);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("5cc69aa0", content, !0, {
        sourceMap: !1,
      });
    },
    488: function (t, e, r) {
      "use strict";
      r(483);
    },
    489: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        "a[data-v-ce6c94de]{text-decoration:none}@media only screen and (min-width: 480px){a .icon[data-v-ce6c94de]{display:inline-block;position:relative;width:10rem;margin-left:2rem}}@media only screen and (max-width: 479px){a .icon[data-v-ce6c94de]{display:inline-block;position:relative;width:10px;margin-left:2px}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    493: function (t, e, r) {
      var content = r(643);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("a95f1320", content, !0, {
        sourceMap: !1,
      });
    },
    494: function (t, e, r) {
      var content = r(645);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("4364cdc8", content, !0, {
        sourceMap: !1,
      });
    },
    496: function (t, e, r) {
      "use strict";
      var n = r(2),
        o = r(662);
      n(
        {
          target: "String",
          proto: !0,
          forced: r(663)("link"),
        },
        {
          link: function (t) {
            return o(this, "a", "href", t);
          },
        }
      );
    },
    634: function (t, e, r) {
      var content = r(654);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("23d700c2", content, !0, {
        sourceMap: !1,
      });
    },
    637: function (t, e, r) {
      "use strict";
      r(487);
    },
    638: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".greyed-out{color:#a5a5a5}.greyed-out svg polygon{fill:#a5a5a5 !important}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    641: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = {
          name: "GreySerializer",
          props: {
            children: {
              type: String,
            },
            href: {
              type: String,
            },
          },
        },
        o = (r(637), r(9)),
        component = Object(o.a)(
          n,
          function () {
            return (0, this._self._c)(
              "span",
              {
                staticClass: "greyed-out",
              },
              [this._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    642: function (t, e, r) {
      "use strict";
      r(493);
    },
    643: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".image-slide[data-v-03a4a7bd]{user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    644: function (t, e, r) {
      "use strict";
      r(494);
    },
    645: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".image-slide[data-v-d4b2a46e]{user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    648: function (t, e, r) {
      "use strict";
      r.r(e);
      r(53), r(70), r(142);
      var n = r(141),
        o = r(641),
        l = r(485),
        d = r(486),
        c = {
          name: "CarouselItem",
          props: {
            asset: {
              type: Object,
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
          data: function () {
            return {
              serializers: {
                marks: {
                  grey: o.default,
                  link: l.default,
                  styledLink: d.default,
                },
              },
            };
          },
          methods: {
            getAspect: function (t) {
              var e = t.split("x").map(function (t) {
                return Number(t);
              });
              return Object(n.d)((e[1] / e[0]) * 100);
            },
            handleMouseMove: function (t) {
              this.cursorCopy !==
                "".concat(this.index + 1, " of ").concat(this.total) &&
                this.$store.dispatch(
                  "setCursorCopy",
                  "".concat(this.index + 1, " of ").concat(this.total)
                );
            },
            handleMouseLeave: function () {
              "" !== this.cursorCopy &&
                this.$store.dispatch("setCursorCopy", "");
            },
          },
        },
        h = r(9),
        component = Object(h.a)(
          c,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                class: ["asset", "size-".concat(t.asset.sizing)],
              },
              [
                e(
                  "div",
                  {
                    staticClass: "asset__container",
                    style: "--ratio: ".concat(
                      t.getAspect(t.asset.sizing),
                      "%;"
                    ),
                    on: {
                      mousemove: t.handleMouseMove,
                      mouseleave: t.handleMouseLeave,
                    },
                  },
                  [
                    "image" == t.asset.media._type
                      ? e("SanityImage", {
                          ref: "image",
                          staticClass: "abs full cover",
                          attrs: {
                            image: t.asset.media.image,
                          },
                        })
                      : "vimeo" == t.asset.media._type
                      ? e("VideoPlayer", {
                          staticClass: "abs",
                          attrs: {
                            url: t.asset.media.vimeo.url,
                            autoplay: !0 === t.asset.media.vimeo.autoplay,
                            showDuration: !1,
                            controls: !0 !== t.asset.media.vimeo.autoplay,
                            hoverActions: !1,
                          },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                t.asset.subtitle
                  ? e(
                      "div",
                      {
                        staticClass: "asset__copy",
                      },
                      [
                        e("block-content", {
                          attrs: {
                            blocks: t.asset.subtitle,
                            serializers: t.serializers,
                          },
                        }),
                      ],
                      1
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "1260ef24",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        SanityImage: r(471).default,
        VideoPlayer: r(474).default,
      });
    },
    649: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(1),
        o = (r(22), r(142), r(13)),
        l = r(182),
        d = {
          name: "ImageModule",
          components: {
            SanityImageNew: r(471).default,
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
              return Object(n.a)(
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
                            Object(l.a)(t.$refs.img)
                          );
                        case 8:
                          (image = e.sent),
                            o.a.to(image, {
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
        c = (r(642), r(9)),
        component = Object(c.a)(
          d,
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
    650: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(1),
        o = (r(22), r(142), r(13)),
        l = r(182),
        d = {
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
              return Object(n.a)(
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
                            (t.loaded = !0), (e.next = 9), Object(l.a)(video)
                          );
                        case 9:
                          (video = e.sent),
                            o.a.to(video, {
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
        c = (r(644), r(9)),
        component = Object(c.a)(
          d,
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
        VideoPlayer: r(474).default,
      });
    },
    653: function (t, e, r) {
      "use strict";
      r(634);
    },
    654: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".carousel{position:relative;width:100%}.carousel__container{display:flex}.carousel .asset{transform:translate3d(0, 0, 0);margin-right:var(--gutter)}.carousel .asset__container{width:100%;padding-top:var(--ratio);position:relative;background:#b7e3b6}.carousel .asset__copy p{font-size:var(--b3);line-height:var(--b3-line_height);letter-spacing:var(--b3-letter_spacing)}@media only screen and (min-width: 480px){.carousel .asset.size-16x9{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.4166666667 + var(--gutter)*4)}.carousel .asset.size-6x4{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.4166666667 + var(--gutter)*4)}.carousel .asset.size-5x7{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2)}.carousel .asset.size-4x3{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2)}.carousel .asset.size-1x1{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2)}.carousel .asset__copy{margin-top:7rem}.carousel .asset a div{width:10rem;margin-left:0rem}}@media only screen and (max-width: 479px){.carousel .asset.size-16x9{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.carousel .asset.size-6x4{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.carousel .asset.size-5x7{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.carousel .asset.size-4x3{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.carousel .asset.size-1x1{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.carousel .asset__copy{margin-top:7px}.carousel .asset a div{display:inline-block;width:7px;margin-left:0px}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    657: function (t, e, r) {
      var content = r(687);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("26fcff0a", content, !0, {
        sourceMap: !1,
      });
    },
    658: function (t, e, r) {
      var content = r(689);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("3e13115c", content, !0, {
        sourceMap: !1,
      });
    },
    659: function (t, e, r) {
      var content = r(691);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("1cc41ee0", content, !0, {
        sourceMap: !1,
      });
    },
    661: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(669),
        o = r(648),
        l = {
          name: "Carousel",
          props: {
            data: {
              type: Object,
              required: !0,
            },
          },
          components: {
            CarouselItem: o.default,
          },
          data: function () {
            return {
              embla: null,
            };
          },
          beforeDestroy: function () {
            this.embla && this.embla.destroy();
          },
          mounted: function () {
            this.embla = Object(n.a)(this.$refs.container, {
              loop: !1,
              dragFree: !0,
              align: "start",
              containScroll: "trimSnaps",
            });
          },
        },
        d = (r(653), r(9)),
        component = Object(d.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                ref: "container",
                staticClass: "carousel",
              },
              [
                e(
                  "div",
                  {
                    staticClass: "carousel__container",
                  },
                  t._l(t.data.carousel.assets, function (r, n) {
                    return e("CarouselItem", {
                      key: n,
                      attrs: {
                        asset: r,
                        index: n,
                        total: t.data.carousel.assets.length,
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
      e.default = component.exports;
    },
    662: function (t, e, r) {
      "use strict";
      var n = r(6),
        o = r(34),
        l = r(17),
        d = /"/g,
        c = n("".replace);
      t.exports = function (t, e, r, n) {
        var h = l(o(t)),
          v = "<" + e;
        return (
          "" !== r && (v += " " + r + '="' + c(l(n), d, "&quot;") + '"'),
          v + ">" + h + "</" + e + ">"
        );
      };
    },
    663: function (t, e, r) {
      "use strict";
      var n = r(5);
      t.exports = function (t) {
        return n(function () {
          var e = ""[t]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3;
        });
      };
    },
    673: function (t, e, r) {
      var content = r(717);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("fe35bd72", content, !0, {
        sourceMap: !1,
      });
    },
    674: function (t, e, r) {
      var content = r(719);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("a045fe60", content, !0, {
        sourceMap: !1,
      });
    },
    675: function (t, e, r) {
      var content = r(725);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("a734a1a4", content, !0, {
        sourceMap: !1,
      });
    },
    676: function (t, e, r) {
      var content = r(727);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("14da743d", content, !0, {
        sourceMap: !1,
      });
    },
    677: function (t, e, r) {
      var content = r(730);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("07e6c5be", content, !0, {
        sourceMap: !1,
      });
    },
    678: function (t, e, r) {
      var content = r(733);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("79f48308", content, !0, {
        sourceMap: !1,
      });
    },
    679: function (t, e, r) {
      var content = r(735);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("0a90f769", content, !0, {
        sourceMap: !1,
      });
    },
    680: function (t, e, r) {
      var content = r(737);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("7fb4e5b2", content, !0, {
        sourceMap: !1,
      });
    },
    681: function (t, e, r) {
      var content = r(739);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("6d07dd47", content, !0, {
        sourceMap: !1,
      });
    },
    682: function (t, e, r) {
      var content = r(743);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("ed8b6794", content, !0, {
        sourceMap: !1,
      });
    },
    683: function (t, e, r) {
      var content = r(745);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("1ebca0b5", content, !0, {
        sourceMap: !1,
      });
    },
    684: function (t, e, r) {
      var content = r(747);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("66868ba2", content, !0, {
        sourceMap: !1,
      });
    },
    685: function (t, e, r) {
      var content = r(750);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("8b4c9cd0", content, !0, {
        sourceMap: !1,
      });
    },
    686: function (t, e, r) {
      "use strict";
      r(657);
    },
    687: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".slideshow[data-v-061b0ba0]{position:relative;background:#fff;width:100vw;overflow:hidden;cursor:pointer;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.slideshow .slides[data-v-061b0ba0]{position:fixed;top:0;left:0;width:100vw;will-change:transform;overflow:hidden}.slideshow .slide[data-v-061b0ba0]{position:fixed;top:0;left:0;width:100vw;display:flex}.slideshow .slide[data-v-061b0ba0]:not(.active){opacity:0}.slideshow .image-container[data-v-061b0ba0]{position:relative;flex:1}.slideshow .details[data-v-061b0ba0]{position:absolute;left:50%;transform:translate3d(-50%, 0, 0);width:calc(100vw - var(--margin)*2);height:100%;user-select:none;z-index:10;mix-blend-mode:difference;color:#fff}.slideshow .details__descriptions[data-v-061b0ba0]{position:absolute;bottom:0;left:0;z-index:1}.slideshow .details__description[data-v-061b0ba0]{position:absolute;bottom:0;left:0}.slideshow .details__description[data-v-061b0ba0]:not(.active){opacity:0}.slideshow .details__counter[data-v-061b0ba0]{position:absolute;bottom:0;right:0;text-align:right}@media only screen and (min-width: 480px){.slideshow[data-v-061b0ba0]{height:700rem}.slideshow .slides[data-v-061b0ba0],.slideshow .slide[data-v-061b0ba0]{height:700rem}.slideshow .details[data-v-061b0ba0]{bottom:20rem}.slideshow .details__descriptions[data-v-061b0ba0],.slideshow .details__description[data-v-061b0ba0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.slideshow .details__counter[data-v-061b0ba0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*1)}}@media only screen and (max-width: 479px){.slideshow[data-v-061b0ba0]{padding-top:125%}.slideshow .slide[data-v-061b0ba0]{transition:opacity 600ms ease}.slideshow .slides[data-v-061b0ba0],.slideshow .slide[data-v-061b0ba0]{height:125vw}.slideshow .slides img[data-v-061b0ba0],.slideshow .slides video[data-v-061b0ba0],.slideshow .slide img[data-v-061b0ba0],.slideshow .slide video[data-v-061b0ba0]{object-fit:contain}.slideshow .details[data-v-061b0ba0]{bottom:11px}.slideshow .details__descriptions[data-v-061b0ba0],.slideshow .details__description[data-v-061b0ba0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.slideshow .details__counter[data-v-061b0ba0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.25 + var(--gutter)*0)}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    688: function (t, e, r) {
      "use strict";
      r(658);
    },
    689: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".image-slide[data-v-34b57018]{user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    690: function (t, e, r) {
      "use strict";
      r(659);
    },
    691: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".image-slide[data-v-b34823b2]{user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    693: function (t, e, r) {
      "use strict";
      r.r(e);
      r(11), r(56);
      var n = r(4),
        o = r(475),
        l = r(649),
        d = r(650),
        c = r(13),
        h = r(495);
      c.a.registerPlugin(h.ScrollTrigger);
      var v = {
          name: "Slideshow",
          props: {
            data: {
              type: Object,
              required: !0,
            },
          },
          components: {
            ImageModule: l.default,
            VideoModule: d.default,
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
              this.tl = c.a.timeline({
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
              n.a.on("up", this.handleUp),
                n.a.on("move", this.handleMove),
                n.a.on("down", this.handleDown);
            },
            removeListeners: function () {
              n.a.off("up", this.handleUp),
                n.a.off("move", this.handleMove),
                n.a.off("down", this.handleDown);
            },
            handleUp: function (t) {
              var e = t.x,
                r = Math.abs(this.mouse.x - e);
              if (this.mouse.down) {
                if (r > 10) this.mouse.x - e > 0 ? this.next() : this.prev();
                else {
                  var o = e / n.b.bounds.ww;
                  this.stopCycle(),
                    o <= 1 / 3 ? this.prev() : o >= (1 / 3) * 2 && this.next();
                }
                this.mouse.down = !1;
              }
            },
            handleMouseMove: function (t) {
              var e = t.pageX / n.b.bounds.ww;
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
                r = t.y,
                n = t.ev,
                o = Math.abs(e - this.mouse.x);
              Math.abs(r - this.mouse.y);
              this.mouse.down && o > 20 && n.cancelable && n.preventDefault();
            },
            handleDown: function (t) {
              var e = t.x,
                r = t.y,
                n = t.ev,
                l = Object(o.a)(n).some(function (t) {
                  return t.classList && t.classList.contains("slideshow");
                });
              this.mouse = {
                x: e,
                y: r,
                down: l,
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
        f = (r(686), r(9)),
        component = Object(f.a)(
          v,
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
                    t._l(t.data.assets, function (r, n) {
                      return [
                        e(
                          "div",
                          {
                            key: n,
                            class: [
                              "slide",
                              {
                                "image-slide":
                                  (r.assetMobile &&
                                    "image" == r.assetMobile._type) ||
                                  "image" == r.asset._type,
                              },
                              {
                                "video-slide":
                                  (r.assetMobile &&
                                    "video" == r.assetMobile._type) ||
                                  "video" == r.asset._type,
                              },
                              {
                                active: t.currentIndex == n,
                              },
                            ],
                          },
                          [
                            (
                              t.$device.isMobile && r.assetMobile
                                ? "image" == r.assetMobile._type
                                : "image" == r.asset._type
                            )
                              ? e("ImageModule", {
                                  attrs: {
                                    content: r,
                                    index: n,
                                    currentIndex: t.currentIndex,
                                    total: t.total,
                                  },
                                })
                              : (
                                  t.$device.isMobile && r.assetMobile
                                    ? "vimeo" == r.assetMobile._type
                                    : "vimeo" == r.asset._type
                                )
                              ? e("VideoModule", {
                                  attrs: {
                                    content: r,
                                    index: n,
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
                      t._l(t.data.assets, function (r, n) {
                        return e(
                          "p",
                          {
                            key: n,
                            class: [
                              "details__description b2",
                              {
                                active: n == t.currentIndex,
                              },
                            ],
                          },
                          [
                            t._v(
                              "\n                " +
                                t._s(r.copy) +
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
    694: function (t, e, r) {
      "use strict";
      r.r(e);
      r(53);
      var n = r(1),
        o = (r(22), r(142), r(13)),
        l = r(4),
        d = r(477),
        c = r(182),
        h = r(471),
        v = r(476),
        f = {
          name: "TwinColumnImageSlide",
          mixins: [d.a],
          components: {
            SanityImageNew: h.default,
          },
          props: {
            asset: {
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
          data: function () {
            return {
              img: null,
              loaded: !1,
            };
          },
          mounted: function () {
            (this.img = this.$refs.img),
              0 == this.index &&
                this.$refs.img.setAttribute("data-critical", "");
          },
          methods: {
            formatImageUrl: v.a,
            random: function (t, e) {
              return Math.floor(Math.random() * (e - t + 1) + t);
            },
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
              return Object(n.a)(
                regeneratorRuntime.mark(function e() {
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
                          (t.img = e.sent),
                            o.a.to(t.img, {
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
            onReady: function () {
              var t = this;
              l.a.emit("AddToScrollAnimations", {
                el: this.$el,
                onVisible: function () {
                  console.log("load: ", t.index), t.loadImage();
                },
                onHidden: function () {},
                inView: !1,
                once: !0,
              });
            },
          },
        },
        m = (r(688), r(9)),
        component = Object(m.a)(
          f,
          function () {
            var t = this;
            return (0, t._self._c)("img", {
              ref: "img",
              staticClass: "abs full cover",
              attrs: {
                "data-srcset": "\n            "
                  .concat(
                    t.inDevelopment
                      ? "/placeholders/placeholder-".concat(
                          t.random(1, 11),
                          ".jpg"
                        )
                      : t.formatImageUrl(t.asset.image.url, {
                          width: 480,
                        }),
                    " 480w,\n            "
                  )
                  .concat(
                    t.inDevelopment
                      ? "/placeholders/placeholder-".concat(
                          t.random(1, 11),
                          ".jpg"
                        )
                      : t.formatImageUrl(t.asset.image.url, {
                          width: 750,
                        }),
                    " 750w,\n            "
                  )
                  .concat(
                    t.inDevelopment
                      ? "/placeholders/placeholder-".concat(
                          t.random(1, 11),
                          ".jpg"
                        )
                      : t.formatImageUrl(t.asset.image.url, {
                          width: 1200,
                        }),
                    " 1200w,\n            "
                  )
                  .concat(
                    t.inDevelopment
                      ? "/placeholders/placeholder-".concat(
                          t.random(1, 11),
                          ".jpg"
                        )
                      : t.formatImageUrl(t.asset.image.url, {
                          width: 1920,
                        }),
                    " 1920w"
                  ),
                sizes:
                  "(max-width: 480px) 480px, (max-width: 750px) 750px, (max-width: 1200px) 1200px, 1920px",
                alt: "",
                "data-fade": "",
                "data-skip": "",
              },
            });
          },
          [],
          !1,
          null,
          "34b57018",
          null
        );
      e.default = component.exports;
    },
    695: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(1),
        o = (r(22), r(142), r(13)),
        l = r(182),
        d = {
          name: "TwinColumnVideoSlide",
          props: {
            asset: {
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
              this.$refs.video.$el.setAttribute("data-critical", ""),
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
              return Object(n.a)(
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
                            (t.loaded = !0), (e.next = 9), Object(l.a)(video)
                          );
                        case 9:
                          (video = e.sent),
                            o.a.to(video, {
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
        c = (r(690), r(9)),
        component = Object(c.a)(
          d,
          function () {
            return (0, this._self._c)("VideoPlayer", {
              ref: "video",
              staticClass: "abs",
              attrs: {
                url: this.asset.video.url,
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
          "b34823b2",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        VideoPlayer: r(474).default,
      });
    },
    716: function (t, e, r) {
      "use strict";
      r(673);
    },
    717: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".hero[data-v-f2047c86]{position:relative;width:100%;background:#b7e3b6}@media only screen and (min-width: 480px){.hero[data-v-f2047c86]{height:700rem}}@media only screen and (max-width: 479px){.hero[data-v-f2047c86]{height:580rem}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    718: function (t, e, r) {
      "use strict";
      r(674);
    },
    719: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        "ul[data-v-cf3f9a6e]{display:flex;padding:0 var(--margin)}@media only screen and (min-width: 480px){ul[data-v-cf3f9a6e]{justify-content:space-between;padding-top:220rem;padding-bottom:40rem}ul a div[data-v-cf3f9a6e]{display:inline-block;position:relative;width:8rem;margin-left:2rem}}@media only screen and (max-width: 479px){ul[data-v-cf3f9a6e]{flex-direction:column;padding-bottom:15px}ul li[data-v-cf3f9a6e]{margin:2px 0}ul a[data-v-cf3f9a6e]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}ul a div[data-v-cf3f9a6e]{display:inline-block;position:relative;width:8px;margin-left:2px}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    720: function (t, e, r) {
      var content = r(801);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("48c77ed8", content, !0, {
        sourceMap: !1,
      });
    },
    724: function (t, e, r) {
      "use strict";
      r(675);
    },
    725: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".quote-slide[data-v-47257640]{position:relative;width:100%}@media only screen and (min-width: 480px){.quote-slide[data-v-47257640]{padding:210rem var(--margin) 20rem var(--margin)}.quote-slide h2[data-v-47257640]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.75 + var(--gutter)*9);margin-bottom:26rem}.quote-slide p[data-v-47257640]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*4)}}@media only screen and (max-width: 479px){.quote-slide[data-v-47257640]{padding:0 var(--margin) var(--margin) var(--margin)}.quote-slide h2[data-v-47257640]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin-bottom:22px}.quote-slide p[data-v-47257640]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    726: function (t, e, r) {
      "use strict";
      r(676);
    },
    727: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.description[data-v-4b86e7c7]{position:relative;width:100%;background:#fff}.description__main__button[data-v-4b86e7c7]{position:relative}.description__side__details__detail span[data-v-4b86e7c7]{font-family:"ChaletBook";font-size:var(--b3);line-height:var(--b3-line_height);letter-spacing:var(--b3-letter_spacing)}.description__side__details__detail p[data-v-4b86e7c7],.description__side__details__detail li[data-v-4b86e7c7]{font-family:"ChaletBook";font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}@media only screen and (min-width: 480px){.description[data-v-4b86e7c7]{padding:20rem var(--margin) 0 var(--margin)}.description__main[data-v-4b86e7c7]{padding-bottom:10rem}.description__main h1[data-v-4b86e7c7]{text-indent:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.0833333333 + var(--gutter)*1)}.description__main__button[data-v-4b86e7c7]{display:inline-flex;align-items:center;margin-top:34rem}.description__main__button:hover .description__main__button__line[data-v-4b86e7c7]{background:#000}.description__main__button span[data-v-4b86e7c7]{height:20rem}.description__main__button__line[data-v-4b86e7c7]{position:absolute;left:0;width:100%;height:1px;bottom:-2rem;will-change:transform;transition:background .5s ease;background:#ccc}.description__main__button__copy[data-v-4b86e7c7]{position:relative;display:inline-block;height:20rem;width:44rem;overflow:hidden;margin-left:4rem}.description__main__button__copy span[data-v-4b86e7c7]{position:absolute;top:0;left:0;transform:translate3d(0, -50%, 0)}.description__side[data-v-4b86e7c7]{position:relative;overflow:hidden}.description__side__inner[data-v-4b86e7c7]{position:relative;display:flex;margin-top:28rem;padding-top:24rem;padding-bottom:36rem}.description__side__details[data-v-4b86e7c7]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5);margin-right:var(--gutter)}.description__side__details__detail[data-v-4b86e7c7]:not(:last-child){margin-bottom:30rem}.description__side__description[data-v-4b86e7c7]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.description__side__description p[data-v-4b86e7c7]{margin-bottom:24rem}.description__side__description p span[data-v-4b86e7c7]{margin-left:36rem}}@media only screen and (max-width: 479px){.description[data-v-4b86e7c7]{padding:15px var(--margin) 0 var(--margin)}.description__main h1[data-v-4b86e7c7]{text-indent:30px}.description__main__button[data-v-4b86e7c7]{display:inline-flex;align-items:center;margin-top:22px}.description__main__button__line[data-v-4b86e7c7]{position:absolute;left:0;width:100%;height:1px;background:#000;bottom:0px;will-change:transform}.description__main__button__copy[data-v-4b86e7c7]{position:relative;display:inline-block;height:16px;width:33px;overflow:hidden;margin-left:4px}.description__main__button__copy span[data-v-4b86e7c7]{position:absolute;top:1px;left:0;line-height:1;transform:translate3d(0, -50%, 0)}.description__side[data-v-4b86e7c7]{position:relative;overflow:hidden}.description__side__inner[data-v-4b86e7c7]{position:relative;display:flex;flex-wrap:wrap;margin-top:20px;padding-top:40px;padding-bottom:30px}.description__side__details[data-v-4b86e7c7]{order:1;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.description__side__details__detail[data-v-4b86e7c7]:not(:last-child){margin-bottom:30px}.description__side__description[data-v-4b86e7c7]{order:0;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.description__side__description p[data-v-4b86e7c7]{margin-bottom:24px}.description__side__description p span[data-v-4b86e7c7]{margin-left:16px}}',
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    728: function (t, e, r) {
      var content = r(803);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("083ed060", content, !0, {
        sourceMap: !1,
      });
    },
    729: function (t, e, r) {
      "use strict";
      r(677);
    },
    730: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".centered-slide[data-v-014be0b8]{position:relative;width:100%;padding:0 var(--margin)}.centered-slide .asset[data-v-014be0b8]{background:#b7e3b6}.centered-slide .asset__container[data-v-014be0b8]{width:100%;padding-top:66.66%;position:relative}@media only screen and (min-width: 480px){.centered-slide[data-v-014be0b8]{padding:120rem calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.125 + var(--gutter)*0.5)}.centered-slide[data-v-014be0b8]:not(:last-child){padding:120rem calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.125 + var(--gutter)*0.5)}.centered-slide[data-v-014be0b8]:last-child{padding:120rem calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.125 + var(--gutter)*0.5) 20rem calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.125 + var(--gutter)*0.5)}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    731: function (t, e, r) {
      var content = r(805);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("e00ed53c", content, !0, {
        sourceMap: !1,
      });
    },
    732: function (t, e, r) {
      "use strict";
      r(678);
    },
    733: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".fullbleed-slide[data-v-9e3178f6]{position:relative;width:100%;padding:0 var(--margin)}.fullbleed-slide .asset__container[data-v-9e3178f6]{width:100%;background:#b7e3b6;padding-top:66.66%;position:relative}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    734: function (t, e, r) {
      "use strict";
      r(679);
    },
    735: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".twocolumn-slide[data-v-77f1af7c]{position:relative;width:100%;display:flex;padding:0 var(--margin)}.twocolumn-slide.mirrored.equal .asset__container[data-v-77f1af7c]{padding-top:150%}.twocolumn-slide.mirrored:not(.equal) .asset:first-child .asset__container[data-v-77f1af7c]{padding-top:140%}.twocolumn-slide.mirrored:not(.equal) .asset:last-child:not(:first-child) .asset__container[data-v-77f1af7c]{padding-top:66.66%}.twocolumn-slide:not(.mirrored).equal .asset__container[data-v-77f1af7c]{padding-top:150%}.twocolumn-slide:not(.mirrored):not(.equal) .asset:first-child .asset__container[data-v-77f1af7c]{padding-top:66.66%}.twocolumn-slide:not(.mirrored):not(.equal) .asset:last-child:not(:first-child) .asset__container[data-v-77f1af7c]{padding-top:140%}.twocolumn-slide .asset[data-v-77f1af7c]{align-self:flex-start;background:#b7e3b6}.twocolumn-slide .asset__container[data-v-77f1af7c]{width:100%;position:relative}@media only screen and (min-width: 480px){.twocolumn-slide[data-v-77f1af7c]{justify-content:space-between}.twocolumn-slide .asset[data-v-77f1af7c]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}}@media only screen and (max-width: 479px){.twocolumn-slide[data-v-77f1af7c]{flex-wrap:wrap}.twocolumn-slide .asset[data-v-77f1af7c]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.twocolumn-slide .asset[data-v-77f1af7c]:first-child:not(:last-child){margin-bottom:var(--gutter)}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    736: function (t, e, r) {
      "use strict";
      r(680);
    },
    737: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".assetcopy-slide{position:relative;width:100%;display:flex;align-items:center;padding:0 var(--margin)}.assetcopy-slide .decoration.opaque.green{text-decoration-color:#ccc}.assetcopy-slide .asset{background:#b7e3b6;align-self:stretch}.assetcopy-slide .asset__container{position:relative;width:100%}@media only screen and (min-width: 480px){.assetcopy-slide{justify-content:space-between}.assetcopy-slide.mirrored .asset{order:2}.assetcopy-slide.mirrored .copy{order:1}.assetcopy-slide:not(.mirrored) .asset{order:1}.assetcopy-slide:not(.mirrored) .copy{order:2}.assetcopy-slide .asset{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3)}.assetcopy-slide .asset__container{height:100%}.assetcopy-slide .copy{padding:230rem 0 250rem 0;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.assetcopy-slide .copy a .icon{width:12rem;margin-left:-2rem}}@media only screen and (max-width: 479px){.assetcopy-slide{flex-wrap:wrap}.assetcopy-slide .asset{order:1;width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.assetcopy-slide .asset__container{padding-top:140%}.assetcopy-slide .copy{order:0;padding:0 0 84px 0;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.assetcopy-slide .copy a .icon{width:10px;margin-left:-1px}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    738: function (t, e, r) {
      "use strict";
      r(681);
    },
    739: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".titled-carousel{position:relative;width:100%;padding:0 var(--margin);overflow:hidden;display:flex}.titled-carousel__container{display:flex}.titled-carousel__title p{font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}.titled-carousel .asset{margin-right:var(--gutter)}.titled-carousel .asset__container{width:100%;padding-top:var(--ratio);position:relative;background:#b7e3b6}.titled-carousel .carousel a{color:#a5a5a5;transition:color .3s}.titled-carousel .carousel a span{color:#a5a5a5;transition:color .3s}.titled-carousel .carousel a svg polygon{transition:fill .3s}@media(hover: hover){.titled-carousel .carousel a:hover{color:#000}.titled-carousel .carousel a:hover span{color:#000}.titled-carousel .carousel a:hover svg polygon{fill:#000}}.titled-carousel .carousel p{color:#a5a5a5;font-size:var(--b3);line-height:var(--b3-line_height);letter-spacing:var(--b3-letter_spacing)}.titled-carousel .carousel p svg polygon{fill:#a5a5a5}@media only screen and (min-width: 480px){.titled-carousel{margin-top:180rem;margin-bottom:180rem}.titled-carousel__line{display:none}.titled-carousel__title{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2);padding-right:calc(calc((100vw - var(--margin) * 2 - var(--gutter) * 11) * 0.0833333333 + var(--gutter) * 1) + var(--gutter))}.titled-carousel .carousel{margin-right:calc(calc((100vw - var(--margin) * 2 - var(--gutter) * 11) * 0.25 + var(--gutter) * 3) + var(--gutter))}.titled-carousel .asset.size-16x9{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5833333333 + var(--gutter)*6)}.titled-carousel .asset.size-6x4{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.titled-carousel .asset.size-5x7{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*4)}.titled-carousel .asset.size-4x3{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*4)}.titled-carousel .asset.size-1x1{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*4)}.titled-carousel .asset__copy{margin-top:7rem}.titled-carousel .asset a div{width:10rem;margin-left:0rem}}@media only screen and (max-width: 479px){.titled-carousel{margin-bottom:87px;flex-wrap:wrap;padding-top:10px}.titled-carousel__line{position:absolute;top:0;left:0;width:100%;height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}.titled-carousel__title{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin-bottom:60px}.titled-carousel__title br{display:none}.titled-carousel .asset.size-16x9{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.titled-carousel .asset.size-6x4{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.titled-carousel .asset.size-5x7{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.titled-carousel .asset.size-4x3{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.titled-carousel .asset.size-1x1{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.titled-carousel .asset__copy{margin-top:12px}.titled-carousel .asset a div{display:inline-block;width:7px;margin-left:0px}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    740: function (t, e, r) {
      var content = r(807);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("3f8fda34", content, !0, {
        sourceMap: !1,
      });
    },
    741: function (t, e, r) {
      var content = r(809);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("3a370a60", content, !0, {
        sourceMap: !1,
      });
    },
    742: function (t, e, r) {
      "use strict";
      r(682);
    },
    743: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".twocolumn-asset-slide[data-v-eb09b0de]{position:relative;width:100%;display:flex;padding:0 var(--margin)}.twocolumn-asset-slide .asset[data-v-eb09b0de]{background:#b7e3b6}.twocolumn-asset-slide .asset__container[data-v-eb09b0de]{width:100%;padding-top:140%;position:relative}.twocolumn-asset-slide .asset-copy .asset__container[data-v-eb09b0de]{padding-top:66.66%}.twocolumn-asset-slide .copy[data-v-eb09b0de]{display:flex}@media only screen and (min-width: 480px){.twocolumn-asset-slide[data-v-eb09b0de]{justify-content:space-between;margin-bottom:150rem}.twocolumn-asset-slide__line[data-v-eb09b0de]{display:none}.twocolumn-asset-slide__column[data-v-eb09b0de]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.twocolumn-asset-slide .copy[data-v-eb09b0de]{margin-top:38rem}.twocolumn-asset-slide .copy p[data-v-eb09b0de],.twocolumn-asset-slide .copy span[data-v-eb09b0de]{font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}.twocolumn-asset-slide .copy__title[data-v-eb09b0de]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*1);margin-right:var(--gutter)}.twocolumn-asset-slide .copy__description[data-v-eb09b0de]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3)}.twocolumn-asset-slide .copy__description p[data-v-eb09b0de]:not(:last-child){margin-bottom:24rem}.twocolumn-asset-slide .copy__description span[data-v-eb09b0de]{margin-left:36rem}}@media only screen and (max-width: 479px){.twocolumn-asset-slide[data-v-eb09b0de]{flex-wrap:wrap;flex-direction:row-reverse}.twocolumn-asset-slide__line[data-v-eb09b0de]{display:none;position:absolute;top:0;left:0;width:100%;height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}.twocolumn-asset-slide__column[data-v-eb09b0de]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.twocolumn-asset-slide__column[data-v-eb09b0de]:first-child{order:1}.twocolumn-asset-slide__column[data-v-eb09b0de]:last-child{order:0}.twocolumn-asset-slide .asset-copy[data-v-eb09b0de]{display:flex;flex-wrap:wrap}.twocolumn-asset-slide .asset[data-v-eb09b0de]{order:1;width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin-bottom:var(--gutter)}.twocolumn-asset-slide .copy[data-v-eb09b0de]{order:0;flex-wrap:wrap;margin-bottom:var(--margin)}.twocolumn-asset-slide .copy__title[data-v-eb09b0de]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin-bottom:16px}.twocolumn-asset-slide .copy__title br[data-v-eb09b0de]{display:none}.twocolumn-asset-slide .copy__description[data-v-eb09b0de]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.twocolumn-asset-slide .copy__description p[data-v-eb09b0de]:not(:last-child){margin-bottom:24px}.twocolumn-asset-slide .copy__description span[data-v-eb09b0de]{margin-left:36px}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    744: function (t, e, r) {
      "use strict";
      r(683);
    },
    745: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.highlight[data-v-f58fc904]{display:flex;flex-direction:column;position:relative;transition:background 500ms ease,color 500ms ease,border-color 500ms ease;border:1px solid}.highlight.dark[data-v-f58fc904]{color:#fff;background:#000;border-color:#000}.highlight.dark .highlight__controls__theme[data-v-f58fc904]:before{border:2px solid #fff}.highlight.dark .highlight__controls__theme[data-v-f58fc904]:after{background:#fff}.highlight.dark .highlight__controls__type[data-v-f58fc904]{color:#fff}.highlight.dark .highlight__controls__type[data-v-f58fc904]:after{background:#fff}.highlight.light[data-v-f58fc904]{color:#000;background:#fff;border-color:#cacaca}.highlight.light .highlight__controls__theme[data-v-f58fc904]:before{border:2px solid #000}.highlight.light .highlight__controls__theme[data-v-f58fc904]:after{background:#000}.highlight.light .highlight__controls__type[data-v-f58fc904]{color:#000}.highlight.light .highlight__controls__type[data-v-f58fc904]:after{background:#000}.highlight__canvas[data-v-f58fc904]{flex:1}.highlight__controls[data-v-f58fc904]{text-align:center}.highlight__controls__theme[data-v-f58fc904]{position:absolute;border-radius:100%;overflow:hidden}.highlight__controls__theme[data-v-f58fc904]:before{content:"";position:absolute;top:50%;left:50%;transform:translate3d(-50%, -50%, 0);width:calc(100% - 4px);height:calc(100% - 4px);border-radius:100%;transition:border-color 500ms ease}.highlight__controls__theme[data-v-f58fc904]:after{content:"";position:absolute;top:0;left:50%;transform:translate3d(0, 0, 0) rotate(45deg);transform-origin:left center;width:100%;height:100%;transition:background 500ms ease}.highlight__controls__type[data-v-f58fc904]{position:relative;transition:color .5s ease}.highlight__controls__type[data-v-f58fc904]::after{position:absolute;left:0;content:"";width:100%;height:1px;bottom:0;opacity:0;transform:translate3d(0, 0, 0) scale(1, 1);transition:transform .3s,background .5s ease,opacity .5s ease;transform-origin:right top;will-change:transform}.highlight__controls__type.active[data-v-f58fc904]::after{transform:translate3d(0, 0, 0) scale(1, 1);transform-origin:left top;opacity:1}@media(hover: hover){.highlight__controls__type[data-v-f58fc904]:hover::after{transform:translate3d(0, 0, 0) scale(1, 1);transform-origin:left top;opacity:1}}@media only screen and (min-width: 480px){.highlight[data-v-f58fc904]{flex:0 0 auto;width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5);height:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5);margin-right:var(--gutter)}.highlight__controls[data-v-f58fc904]{margin:28rem 0}.highlight__controls__theme[data-v-f58fc904]{bottom:20px;left:20px;width:20px;height:20px}.highlight__controls__type[data-v-f58fc904]{font-size:12px;margin:0 10px}.highlight__controls__type[data-v-f58fc904]:after{bottom:-1px}}@media only screen and (max-width: 479px){.highlight[data-v-f58fc904]{flex:0 0 auto;width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);height:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.highlight__controls[data-v-f58fc904]{margin:24rem 0}.highlight__controls__theme[data-v-f58fc904]{bottom:16px;left:16px;width:16px;height:16px;transform:translateZ(0)}.highlight__controls__type[data-v-f58fc904]{font-size:10px;margin:0 8px}.highlight__controls__type[data-v-f58fc904]:after{bottom:-1px}}',
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    746: function (t, e, r) {
      "use strict";
      r(684);
    },
    747: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".characters[data-v-90ddee18]{position:relative;display:flex;flex-wrap:wrap;align-content:flex-start}.characters .character[data-v-90ddee18]{position:relative;z-index:0;opacity:0}.characters .character button[data-v-90ddee18]{position:absolute;top:50%;left:50%;transform:translate3d(-50%, -50%, 0);width:100%;height:100%}.characters .character span[data-v-90ddee18]{font-family:inherit;position:absolute;top:50%;left:50%;transform:translate3d(-50%, -50%, 0);transition:color .5s ease}.characters canvas[data-v-90ddee18]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}@media only screen and (min-width: 480px){.characters[data-v-90ddee18]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5);align-self:flex-start}.characters .character[data-v-90ddee18]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter))/2/12);width:calc((100vw - var(--margin)*2 - var(--gutter))/2/12);height:calc((100vw - var(--margin)*2 - var(--gutter))/2/12)}.characters .character span[data-v-90ddee18]{font-size:28rem}}@media only screen and (max-width: 479px){.characters[data-v-90ddee18]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);align-self:flex-start}.characters .character[data-v-90ddee18]{flex:0 0 calc((100vw - var(--margin)*2)/8);width:calc((100vw - var(--margin)*2)/8);height:calc((100vw - var(--margin)*2)/8)}.characters .character span[data-v-90ddee18]{font-size:28rem}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    748: function (t, e, r) {
      var content = r(811);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("fcd97e8c", content, !0, {
        sourceMap: !1,
      });
    },
    749: function (t, e, r) {
      "use strict";
      r(685);
    },
    750: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        'div[data-v-0a21353a]{position:relative;width:100%}div.dark input[data-v-0a21353a]::-webkit-slider-thumb{background:#cacaca}div.dark input[data-v-0a21353a]::-moz-range-thumb{background:#cacaca}div.dark[data-v-0a21353a]:after{background:#cacaca}div.light input[data-v-0a21353a]::-webkit-slider-thumb{background:#000}div.light input[data-v-0a21353a]::-moz-range-thumb{background:#000}div.light[data-v-0a21353a]:after{background:#cacaca}div[data-v-0a21353a]:after{content:"";position:absolute;top:4px;left:0;height:1px;width:100%;transition:background 500ms ease;z-index:0}div input[data-v-0a21353a]{position:relative;-webkit-appearance:none;width:100%;z-index:1}div input[data-v-0a21353a]:focus{outline:0}div input[data-v-0a21353a]::-webkit-slider-runnable-track{position:relative;width:100%;height:10px;cursor:pointer;animation:.2s;border-radius:1px;box-shadow:none;border:0}div input[data-v-0a21353a]::-webkit-slider-thumb{z-index:2;position:relative;height:16px;width:16px;border-radius:50%;transition:background 500ms ease;cursor:pointer;-webkit-appearance:none;top:-3px}div input[data-v-0a21353a]::-moz-range-track{width:100%;height:10px;cursor:pointer;animation:.2s;border-radius:1px;box-shadow:none;border:0}div input[data-v-0a21353a]::-moz-range-thumb{z-index:2;position:relative;border:none;height:16px;width:16px;border-radius:50%;transition:background 500ms ease;cursor:pointer}',
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    751: function (t, e, r) {
      var content = r(813);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("6b003e16", content, !0, {
        sourceMap: !1,
      });
    },
    762: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = {
          name: "Hero",
          props: {
            data: {
              type: Object,
              required: !0,
            },
          },
        },
        o = (r(716), r(9)),
        component = Object(o.a)(
          n,
          function () {
            var t = this._self._c;
            return t(
              "section",
              {
                staticClass: "hero",
              },
              [
                t("SanityImage", {
                  ref: "image",
                  staticClass: "rel full cover",
                  attrs: {
                    image: this.data.image,
                  },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "f2047c86",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        SanityImage: r(471).default,
      });
    },
    763: function (t, e, r) {
      "use strict";
      r.r(e);
      r(496);
      var n = r(13),
        o = r(4),
        l = r(495);
      n.a.registerPlugin(l.ScrollTrigger);
      var d = {
          name: "Press",
          props: {
            data: {
              type: Object,
              required: !0,
            },
          },
          data: function () {
            return {
              tl: null,
            };
          },
          beforeDestroy: function () {
            o.a.off("resize", this.onResize);
          },
          mounted: function () {
            this.onResize(), o.a.on("resize", this.onResize);
          },
          methods: {
            onResize: function () {
              if (o.b.bounds.ww < 480) {
                if (this.tl) return;
                (this.tl = n.a.timeline({
                  scrollTrigger: {
                    trigger: this.$refs.container,
                    start: "top-=100px top",
                    end: "bottom-=100px top",
                    scrub: 0.05,
                  },
                })),
                  this.tl.to(this.$refs.container, {
                    autoAlpha: 0,
                  });
              } else
                this.tl && this.tl.kill(),
                  (this.tl = null),
                  n.a.set(this.$refs.container, {
                    clearProps: "all",
                  });
            },
          },
        },
        c = (r(718), r(9)),
        component = Object(c.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "ul",
              {
                ref: "container",
                staticClass: "press",
              },
              t._l(t.data.pressLinks, function (r, n) {
                return e(
                  "li",
                  {
                    key: n,
                  },
                  [
                    e(
                      "span",
                      {
                        staticClass: "b2",
                      },
                      [t._v(t._s(r.type))]
                    ),
                    t._v(" "),
                    e(
                      "a",
                      {
                        staticClass: "black opaque decoration active",
                        attrs: {
                          href: r.link,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        e(
                          "span",
                          {
                            staticClass: "b2",
                          },
                          [t._v(t._s(r.copy))]
                        ),
                        t._v(" "),
                        e("div", [
                          e(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
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
                                        "data-name": "Design System",
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
              0
            );
          },
          [],
          !1,
          null,
          "cf3f9a6e",
          null
        );
      e.default = component.exports;
    },
    764: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = {
          name: "QuoteSlide",
          props: {
            slide: {
              type: Object,
              required: !0,
            },
          },
        },
        o = (r(724), r(9)),
        component = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                staticClass: "quote-slide slide",
              },
              [
                e("h2", [t._v(t._s(t.slide.quote))]),
                t._v(" "),
                e(
                  "p",
                  {
                    staticClass: "b2",
                  },
                  [t._v(t._s(t.slide.subtitle))]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "47257640",
          null
        );
      e.default = component.exports;
    },
    765: function (t, e, r) {
      "use strict";
      r.r(e);
      r(20);
      var n = r(36),
        o = (r(692), r(13)),
        l = r(4),
        d = r(145),
        c = r(490),
        h = r(486),
        v = {
          name: "Description",
          props: {
            data: {
              type: Object,
              required: !0,
            },
          },
          data: function () {
            return Object(n.a)(
              Object(n.a)(
                {
                  active: !1,
                  expandTl: null,
                },
                "expandTl",
                null
              ),
              "serializers",
              {
                marks: {
                  indent: c.default,
                  styledLink: h.default,
                },
              }
            );
          },
          beforeDestroy: function () {
            l.a.off("resize", this.onResize);
          },
          mounted: function () {
            this.onResize(), l.a.on("resize", this.onResize);
          },
          methods: {
            sort: function (t, e) {
              return t.sort(function (a, b) {
                var t = a[e] ? a[e] : "",
                  r = b[e] ? b[e] : "";
                return t.localeCompare(r);
              });
            },
            onResize: function () {
              var t = this;
              this.data.detailsToggle &&
                (this.expandTl &&
                  (this.expandTl.pause(),
                  this.expandTl.kill(),
                  (this.expandTl = null),
                  this.$refs.side && (this.$refs.side.style.height = "")),
                this.$nextTick(function () {
                  var e = Object(d.a)(".description__side__details__detail");
                  (t.expandTl = o.a
                    .timeline({
                      paused: !0,
                    })
                    .from(
                      t.$refs.side,
                      {
                        height: 0,
                        duration: 1,
                        ease: "power2.inOut",
                      },
                      0
                    )),
                    e &&
                      t.expandTl.fromTo(
                        e,
                        {
                          autoAlpha: 0,
                        },
                        {
                          autoAlpha: 1,
                          stagger: 0.12,
                          duration: 0.6,
                          ease: "power2.inOut",
                        },
                        0
                      ),
                    t.active ? t.expandTl.progress(1) : t.expandTl.progress(0);
                }));
            },
            toggle: function () {
              (this.active = !this.active),
                this.active
                  ? this.expandTl.timeScale(1).play()
                  : this.expandTl.timeScale(1.5).reverse();
            },
          },
        },
        f = (r(726), r(9)),
        component = Object(f.a)(
          v,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                staticClass: "description",
              },
              [
                e(
                  "div",
                  {
                    staticClass: "description__main",
                  },
                  [
                    e(
                      "h1",
                      {
                        staticClass: "h2",
                      },
                      [t._v(t._s(t.data.mainDescription))]
                    ),
                    t._v(" "),
                    t.data.detailsToggle
                      ? e(
                          "button",
                          {
                            staticClass:
                              "description__main__button black decoration opaque",
                            on: {
                              click: t.toggle,
                            },
                          },
                          [
                            e(
                              "span",
                              {
                                staticClass: "b2",
                              },
                              [t._v("Read " + t._s(t.active ? "Less" : "More"))]
                            ),
                          ]
                        )
                      : t._e(),
                  ]
                ),
                t._v(" "),
                t.data.detailsToggle
                  ? e(
                      "div",
                      {
                        ref: "side",
                        staticClass: "description__side",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "description__side__inner",
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "description__side__details",
                              },
                              [
                                t.data.year
                                  ? e(
                                      "div",
                                      {
                                        staticClass:
                                          "description__side__details__detail",
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            staticClass: "b3",
                                          },
                                          [t._v("Year")]
                                        ),
                                        t._v(" "),
                                        e(
                                          "p",
                                          {
                                            staticClass: "b2",
                                          },
                                          [t._v(t._s(t.data.year))]
                                        ),
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                t.data.industries
                                  ? e(
                                      "div",
                                      {
                                        staticClass:
                                          "description__side__details__detail",
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            staticClass: "b3",
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.data.industries.length > 1
                                                  ? "Industries"
                                                  : "Industry"
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "ul",
                                          t._l(
                                            t.data.industries,
                                            function (r, n) {
                                              return e(
                                                "li",
                                                {
                                                  key: n,
                                                  staticClass: "b2",
                                                },
                                                [
                                                  t._v(
                                                    "\n                            " +
                                                      t._s(r.name) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              );
                                            }
                                          ),
                                          0
                                        ),
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                t.data.services
                                  ? e(
                                      "div",
                                      {
                                        staticClass:
                                          "description__side__details__detail",
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            staticClass: "b3",
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.data.services.length > 1
                                                  ? "Services"
                                                  : "Service"
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "ul",
                                          t._l(
                                            t.data.services,
                                            function (r, n) {
                                              return e(
                                                "li",
                                                {
                                                  key: n,
                                                  staticClass: "b2",
                                                },
                                                [
                                                  t._v(
                                                    "\n                            " +
                                                      t._s(r.name) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              );
                                            }
                                          ),
                                          0
                                        ),
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                t.data.credits
                                  ? e(
                                      "div",
                                      {
                                        staticClass:
                                          "description__side__details__detail",
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            staticClass: "b3",
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.data.credits.length > 1
                                                  ? "Credits"
                                                  : "Credit"
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("block-content", {
                                          attrs: {
                                            blocks: t.data.credits,
                                            serializers: t.serializers,
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t._e(),
                              ]
                            ),
                            t._v(" "),
                            t.data.detailedDescription
                              ? e(
                                  "div",
                                  {
                                    ref: "side_description",
                                    staticClass:
                                      "description__side__description",
                                  },
                                  [
                                    e("block-content", {
                                      attrs: {
                                        blocks: t.data.detailedDescription,
                                        serializers: t.serializers,
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "4b86e7c7",
          null
        );
      e.default = component.exports;
    },
    766: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = {
          name: "CenteredSlide",
          props: {
            slide: {
              type: Object,
              required: !0,
            },
          },
        },
        o = (r(729), r(9)),
        component = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                staticClass: "centered-slide slide",
              },
              t._l(t.slide.slide, function (r, n) {
                return e(
                  "div",
                  {
                    key: n,
                    staticClass: "asset",
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "asset__container",
                      },
                      [
                        "image" == r._type
                          ? e("SanityImage", {
                              ref: "image",
                              refInFor: !0,
                              staticClass: "abs full cover",
                              attrs: {
                                image: r.image,
                              },
                            })
                          : "vimeo" == r._type
                          ? e("VideoPlayer", {
                              staticClass: "abs",
                              attrs: {
                                url: r.video.url,
                                autoplay: r.video.autoplay || !1,
                                showDuration: !r.video.autoplay,
                                controls: !r.video.autoplay,
                                hoverActions: !1,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                  ]
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          "014be0b8",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        SanityImage: r(471).default,
        VideoPlayer: r(474).default,
      });
    },
    767: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(141),
        o = {
          name: "FullBleedSlide",
          props: {
            slide: {
              type: Object,
              required: !0,
            },
          },
          methods: {
            getAspect: n.b,
          },
        },
        l = (r(732), r(9)),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                staticClass: "fullbleed-slide slide",
              },
              t._l(t.slide.slide, function (r, n) {
                return e(
                  "div",
                  {
                    key: n,
                    staticClass: "asset",
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "asset__container",
                      },
                      [
                        "image" == r._type
                          ? e("SanityImage", {
                              ref: "image",
                              refInFor: !0,
                              staticClass: "abs full cover",
                              attrs: {
                                image: r.image,
                              },
                            })
                          : "vimeo" == r._type
                          ? e("VideoPlayer", {
                              staticClass: "abs",
                              attrs: {
                                url: r.video.url,
                                autoplay: r.video.autoplay || !1,
                                showDuration: !r.video.autoplay,
                                controls: !r.video.autoplay,
                                hoverActions: !1,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                  ]
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          "9e3178f6",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        SanityImage: r(471).default,
        VideoPlayer: r(474).default,
      });
    },
    768: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = {
          name: "TwoColumnSlide",
          props: {
            slide: {
              type: Object,
              required: !0,
            },
            equal: {
              type: Boolean,
              required: !1,
              default: !1,
            },
          },
        },
        o = (r(734), r(9)),
        component = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                class: [
                  "twocolumn-slide slide",
                  {
                    mirrored: t.slide.mirrored,
                  },
                  {
                    equal: t.equal,
                  },
                ],
              },
              t._l(t.slide.slide, function (r, n) {
                return e(
                  "div",
                  {
                    key: n,
                    staticClass: "asset",
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "asset__container",
                      },
                      [
                        "image" == r._type
                          ? e("SanityImage", {
                              ref: "image",
                              refInFor: !0,
                              staticClass: "abs full cover",
                              attrs: {
                                image: r.image,
                              },
                            })
                          : "vimeo" == r._type
                          ? e("VideoPlayer", {
                              staticClass: "abs",
                              attrs: {
                                url: r.video.url,
                                autoplay: r.video.autoplay || !1,
                                showDuration: !r.video.autoplay,
                                controls: !r.video.autoplay,
                                hoverActions: !1,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                  ]
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          "77f1af7c",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        SanityImage: r(471).default,
        VideoPlayer: r(474).default,
      });
    },
    769: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(141),
        o = r(647),
        l = r(485),
        d = r(486),
        c = {
          name: "AssetCopySlide",
          props: {
            slide: {
              type: Object,
              required: !0,
            },
          },
          data: function () {
            return {
              serializers: {
                marks: {
                  link: l.default,
                  hoverAsset: o.default,
                  styledLink: d.default,
                },
              },
            };
          },
          methods: {
            getAspect: n.b,
          },
        },
        h = (r(736), r(9)),
        component = Object(h.a)(
          c,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                class: [
                  "assetcopy-slide slide",
                  {
                    mirrored: t.slide.mirrored,
                  },
                ],
              },
              [
                t._l(t.slide.slide, function (r, n) {
                  return e(
                    "div",
                    {
                      key: n,
                      staticClass: "asset",
                    },
                    [
                      e(
                        "div",
                        {
                          staticClass: "asset__container",
                        },
                        [
                          "image" == r._type
                            ? e("SanityImage", {
                                ref: "image",
                                refInFor: !0,
                                staticClass: "abs full cover",
                                attrs: {
                                  image: r.image,
                                },
                              })
                            : "vimeo" == r._type
                            ? e("VideoPlayer", {
                                staticClass: "abs",
                                attrs: {
                                  url: r.video.url,
                                  autoplay: r.video.autoplay || !1,
                                  showDuration: !r.video.autoplay,
                                  controls: !r.video.autoplay,
                                  hoverActions: !1,
                                },
                              })
                            : t._e(),
                        ],
                        1
                      ),
                    ]
                  );
                }),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "copy",
                  },
                  [
                    e("block-content", {
                      attrs: {
                        blocks: t.slide.copy,
                        serializers: t.serializers,
                      },
                    }),
                  ],
                  1
                ),
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
      e.default = component.exports;
      installComponents(component, {
        SanityImage: r(471).default,
        VideoPlayer: r(474).default,
      });
    },
    770: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = {
          name: "TitledCarousel",
          components: {
            Carousel: r(661).default,
          },
          props: {
            slide: {
              type: Object,
              required: !0,
            },
          },
        },
        o = (r(738), r(9)),
        component = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                ref: "container",
                staticClass: "titled-carousel",
              },
              [
                e("div", {
                  staticClass: "titled-carousel__line",
                }),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "titled-carousel__title",
                  },
                  [
                    e("block-content", {
                      attrs: {
                        blocks: t.slide.title,
                      },
                    }),
                  ],
                  1
                ),
                t._v(" "),
                e("Carousel", {
                  attrs: {
                    data: t.slide,
                  },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    771: function (t, e, r) {
      "use strict";
      r.r(e);
      r(53), r(11);
      var rect = r(144),
        n = r(4),
        o = r(141),
        l = r(475),
        d = r(694),
        c = r(695),
        h = {
          name: "TwinColumnSlideColumn",
          components: {
            TwinColumnImageSlide: d.default,
            TwinColumnVideoSlide: c.default,
          },
          props: {
            column: {
              type: Object,
              required: !0,
            },
          },
          computed: {
            total: function () {
              return this.column.assets.length;
            },
            cursorCopy: function () {
              return this.$store.getters.cursorCopy;
            },
            currentIndexCopy: function () {
              return ""
                .concat(this.currentIndex + 1, " of ")
                .concat(this.total);
            },
          },
          data: function () {
            return {
              currentIndex: 0,
              mouse: {
                x: 0,
                y: 0,
                down: !1,
                direction: "next",
              },
            };
          },
          beforeDestroy: function () {
            this.removeListeners();
          },
          mounted: function () {
            this.addListeners(), this.handleResize();
          },
          methods: {
            getAspect: o.b,
            addListeners: function () {
              n.a.on("resize", this.handleResize),
                n.a.on("up", this.handleUp),
                n.a.on("move", this.handleMove),
                n.a.on("down", this.handleDown);
            },
            removeListeners: function () {
              n.a.off("resize", this.handleResize),
                n.a.off("up", this.handleUp),
                n.a.off("move", this.handleMove),
                n.a.off("down", this.handleDown);
            },
            handleMouseEnter: function () {
              this.updateCursor();
            },
            handleMouseLeave: function () {
              "" !== this.cursorCopy &&
                this.$store.dispatch("setCursorCopy", "");
            },
            handleDown: function (t) {
              var e = t.x,
                r = t.y,
                n = t.ev,
                o = Object(l.a)(n).some(function (t) {
                  return (
                    t.classList && t.classList.contains("twincolumn__column")
                  );
                });
              this.mouse = {
                x: e,
                y: r,
                down: o,
              };
            },
            handleMove: function (t) {
              var e = t.x,
                r = t.y;
              t.ev, Math.abs(e - this.mouse.x), Math.abs(r - this.mouse.y);
            },
            handleUp: function (t) {
              t.x;
              this.mouse.down = !1;
            },
            handleClick: function (t) {
              var e = t.clientX;
              this.bounds.left;
              e > this.bounds.left + this.bounds.width / 2
                ? this.next()
                : this.prev(),
                this.updateCursor();
            },
            handleResize: function () {
              this.bounds = Object(rect.a)(this.$el);
            },
            next: function () {
              this.currentIndex =
                this.currentIndex + 1 < this.total ? this.currentIndex + 1 : 0;
            },
            prev: function () {
              this.currentIndex =
                this.currentIndex - 1 >= 0
                  ? this.currentIndex - 1
                  : this.total - 1;
            },
            updateCursor: function () {
              this.cursorCopy !== this.currentIndexCopy &&
                this.$store.dispatch("setCursorCopy", this.currentIndexCopy);
            },
          },
        },
        v = r(9),
        component = Object(v.a)(
          h,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "twincolumn__column",
                on: {
                  mouseenter: t.handleMouseEnter,
                  click: t.handleClick,
                  mouseleave: t.handleMouseLeave,
                },
              },
              [
                e(
                  "div",
                  {
                    staticClass: "twincolumn__column__inner",
                  },
                  t._l(t.column.assets, function (r, n) {
                    return e(
                      "div",
                      {
                        key: n,
                        class: [
                          "asset",
                          {
                            active: t.currentIndex == n,
                          },
                        ],
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "asset__container",
                          },
                          [
                            "image" == r.media._type
                              ? e("TwinColumnImageSlide", {
                                  key: n,
                                  attrs: {
                                    asset: r.media,
                                    index: n,
                                    currentIndex: t.currentIndex,
                                    total: t.total,
                                  },
                                })
                              : "vimeo" == r.media._type
                              ? e("TwinColumnVideoSlide", {
                                  key: n,
                                  staticClass: "abs",
                                  attrs: {
                                    asset: r.media,
                                    index: n,
                                    currentIndex: t.currentIndex,
                                    total: t.total,
                                  },
                                })
                              : t._e(),
                          ],
                          1
                        ),
                      ]
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
          null,
          null
        );
      e.default = component.exports;
    },
    772: function (t, e, r) {
      "use strict";
      r.r(e);
      r(50), r(69);
      var n = r(141),
        o = r(490),
        l = {
          name: "TwoColumnAssetsCopy",
          props: {
            slide: {
              type: Object,
              required: !0,
            },
          },
          data: function () {
            return {
              serializers: {
                marks: {
                  indent: o.default,
                },
              },
            };
          },
          methods: {
            getAspect: n.b,
          },
        },
        d = (r(742), r(9)),
        component = Object(d.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                staticClass: "twocolumn-asset-slide",
              },
              t._l(t.slide.slide, function (r, n) {
                var o, l;
                return e(
                  "div",
                  {
                    key: n,
                    staticClass: "twocolumn-asset-slide__column",
                  },
                  [
                    "asset" === r._type
                      ? t._l(r.slide, function (r, n) {
                          return e(
                            "div",
                            {
                              key: n,
                              staticClass: "asset",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass: "asset__container",
                                },
                                [
                                  "image" == r._type
                                    ? e("SanityImage", {
                                        ref: "image",
                                        refInFor: !0,
                                        staticClass: "abs full cover",
                                        attrs: {
                                          image: r.image,
                                        },
                                      })
                                    : "vimeo" == r._type
                                    ? e("VideoPlayer", {
                                        staticClass: "abs",
                                        attrs: {
                                          url: r.video.url,
                                          autoplay: r.video.autoplay || !1,
                                          showDuration: !r.video.autoplay,
                                          controls: !r.video.autoplay,
                                          hoverActions: !1,
                                        },
                                      })
                                    : t._e(),
                                ],
                                1
                              ),
                            ]
                          );
                        })
                      : e(
                          "div",
                          {
                            staticClass: "asset-copy",
                          },
                          [
                            t._l(r.slide, function (r, n) {
                              return e(
                                "div",
                                {
                                  key: n,
                                  staticClass: "asset",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "asset__container",
                                    },
                                    [
                                      "image" == r._type
                                        ? e("SanityImage", {
                                            ref: "image",
                                            refInFor: !0,
                                            staticClass: "abs full cover",
                                            attrs: {
                                              image: r.image,
                                            },
                                          })
                                        : "vimeo" == r._type
                                        ? e("VideoPlayer", {
                                            staticClass: "abs",
                                            attrs: {
                                              url: r.video.url,
                                              autoplay: r.video.autoplay || !1,
                                              showDuration: !r.video.autoplay,
                                              controls: !r.video.autoplay,
                                              hoverActions: !1,
                                            },
                                          })
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                ]
                              );
                            }),
                            t._v(" "),
                            r.copy
                              ? e(
                                  "div",
                                  {
                                    staticClass: "copy",
                                  },
                                  [
                                    null !== (o = r.copy) &&
                                    void 0 !== o &&
                                    o.title
                                      ? e(
                                          "div",
                                          {
                                            staticClass: "copy__title",
                                          },
                                          [
                                            e("block-content", {
                                              attrs: {
                                                blocks: r.copy.title,
                                                serializers: t.serializers,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    null !== (l = r.copy) &&
                                    void 0 !== l &&
                                    l.description
                                      ? e(
                                          "div",
                                          {
                                            staticClass: "copy__description",
                                          },
                                          [
                                            e("block-content", {
                                              attrs: {
                                                blocks: r.copy.description,
                                                serializers: t.serializers,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                  ]
                                )
                              : t._e(),
                          ],
                          2
                        ),
                    t._v(" "),
                    e("div", {
                      staticClass: "twocolumn-asset-slide__line",
                    }),
                  ],
                  2
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          "eb09b0de",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        SanityImage: r(471).default,
        VideoPlayer: r(474).default,
      });
    },
    773: function (t, e, r) {
      "use strict";
      r.r(e);
      r(53), r(142);
      var n = r(13),
        o = r(4),
        rect = r(144),
        l = {
          name: "GlyphsHighlight",
          props: {
            product: {
              type: Object,
              required: !0,
            },
            selectedIndex: {
              type: Number,
              required: !0,
            },
            letters: {
              type: Array,
              required: !0,
            },
            fontStyle: {
              type: String,
              required: !0,
            },
            theme: {
              type: String,
              required: !0,
            },
            loaded: {
              type: Boolean,
              required: !0,
            },
          },
          computed: {
            selectedLetter: function () {
              return this.letters[this.selectedIndex].char;
            },
          },
          watch: {
            loaded: function (t) {
              t && this.setup();
            },
            selectedIndex: function () {
              this.draw();
            },
            fontStyle: function (t) {
              (this.ctx.font = ""
                .concat(t, " ", 380, "rem ")
                .concat(this.product.fontFamilyName)),
                this.draw();
            },
            theme: function (t) {
              var e = this;
              this.tween && this.tween.kill(),
                (this.tween = n.a.timeline().to(this.copyColor, {
                  val: "dark" == t ? "white" : "black",
                  onUpdate: function () {
                    e.draw();
                  },
                }));
            },
          },
          data: function () {
            return {
              ratio: 1,
              ctx: null,
              tween: null,
              bounds: null,
              copyColor: {
                val: "white",
              },
            };
          },
          beforeDestroy: function () {
            o.a.off("resize", this.handleResize);
          },
          mounted: function () {
            var t = this;
            this.loaded &&
              this.$nextTick(function () {
                t.setup();
              });
          },
          methods: {
            setup: function () {
              (this.$el.style.fontFamily = this.product.fontFamilyName),
                this.handleResize(),
                o.a.on("resize", this.handleResize);
            },
            handleResize: function () {
              this.setupCanvas(), this.draw();
            },
            setupCanvas: function () {
              (this.ctx = this.$refs.canvas.getContext("2d")),
                this.ctx.scale(1, 1),
                (this.$refs.canvas.style.width = ""),
                (this.$refs.canvas.style.height = ""),
                (this.bounds = Object(rect.a)(this.$refs.canvas)),
                this.scaleCanvas(
                  this.$refs.canvas,
                  this.ctx,
                  this.bounds.width,
                  this.bounds.height
                ),
                (this.ctx.lineWidth = 1),
                (this.ctx.font = ""
                  .concat(this.fontStyle, " ")
                  .concat(o.b.bounds.ww < 480 ? 300 : 380, "rem ")
                  .concat(this.product.fontFamilyName)),
                (this.ctx.textBaseline = "middle");
            },
            scaleCanvas: function (canvas, t, e, r) {
              var n =
                t.webkitBackingStorePixelRatio ||
                t.mozBackingStorePixelRatio ||
                t.msBackingStorePixelRatio ||
                t.oBackingStorePixelRatio ||
                t.backingStorePixelRatio ||
                1;
              (this.ratio = 2),
                2 !== n
                  ? ((canvas.width = e * this.ratio),
                    (canvas.height = r * this.ratio),
                    (canvas.style.width = e + "px"),
                    (canvas.style.height = r + "px"))
                  : ((canvas.width = e),
                    (canvas.height = r),
                    (canvas.style.width = ""),
                    (canvas.style.height = "")),
                t.scale(this.ratio, this.ratio);
            },
            draw: function () {
              this.ctx.clearRect(0, 0, this.bounds.width, this.bounds.height),
                this.drawLetter();
            },
            drawLetter: function () {
              var t = this.letters[this.selectedIndex].char;
              this.ctx.save();
              var e = this.ctx.measureText(t),
                r =
                  (e.fontBoundingBoxAscent,
                  e.fontBoundingBoxDescent,
                  e.actualBoundingBoxAscent,
                  e.actualBoundingBoxDescent,
                  this.bounds.width / 2 - e.width / 2),
                n = this.bounds.height / 2,
                o =
                  (e.actualBoundingBoxAscent - e.actualBoundingBoxDescent) / 2;
              (this.ctx.fillStyle = this.copyColor.val),
                this.ctx.fillText(t, r, n + o),
                this.ctx.restore();
            },
            setFontStyle: function (style) {
              this.$emit("updatedStyle", style);
            },
            toggleTheme: function () {
              var t = "dark" == this.theme ? "light" : "dark";
              this.$emit("updateTheme", t);
            },
          },
        },
        d = (r(744), r(9)),
        component = Object(d.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                class: ["highlight", t.theme],
              },
              [
                e("canvas", {
                  ref: "canvas",
                  staticClass: "highlight__canvas",
                }),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "highlight__controls",
                  },
                  [
                    e("button", {
                      staticClass: "highlight__controls__theme",
                      on: {
                        click: t.toggleTheme,
                      },
                    }),
                    t._v(" "),
                    e(
                      "button",
                      {
                        class: [
                          "highlight__controls__type",
                          {
                            active: "normal" == t.fontStyle,
                          },
                        ],
                        on: {
                          click: function (e) {
                            return t.setFontStyle("normal");
                          },
                        },
                      },
                      [t._v("\n            Regular\n        ")]
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "f58fc904",
          null
        );
      e.default = component.exports;
    },
    774: function (t, e, r) {
      "use strict";
      r.r(e);
      r(53), r(142);
      var n = r(13),
        o = r(4),
        rect = r(144),
        l = {
          name: "GlyphsCharacters",
          props: {
            product: {
              type: Object,
              required: !0,
            },
            selectedIndex: {
              type: Number,
              required: !0,
            },
            hoverIndex: {
              type: Number,
              required: !1,
              default: null,
            },
            letters: {
              type: Array,
              required: !0,
            },
            tweens: {
              type: Object,
              required: !0,
            },
            theme: {
              type: String,
              required: !0,
            },
            inView: {
              type: Boolean,
              required: !0,
            },
            loaded: {
              type: Boolean,
              required: !0,
            },
          },
          computed: {
            domLoaded: function () {
              return this.$store.getters["preloader/isLoaded"];
            },
          },
          watch: {
            loaded: function (t) {
              t && this.setup();
            },
            hoverIndex: function (t, e) {
              this.handleHoverTransition(t, e);
            },
            selectedIndex: function (t, e) {
              (this.cache.selection.val = t),
                (this.cache.selection.oldVal = e),
                this.handleSelectionTransition(t, e);
            },
            theme: function (t) {
              this.handleSelectionTransition(
                this.cache.selection.val,
                this.cache.selection.oldVal
              );
            },
          },
          data: function () {
            return {
              ratio: 1,
              ctx: null,
              bounds: null,
              themeTl: null,
              boundsTile: null,
              tileColumnsCount: 12,
              colors: {
                bgColor: "white",
                textColor: "black",
              },
              cache: {
                selection: {
                  val: 0,
                  oldVal: null,
                },
                hover: {
                  val: null,
                  oldVal: null,
                },
              },
            };
          },
          beforeDestroy: function () {
            o.a.off("tick", this.tick), o.a.off("resize", this.handleResize);
          },
          mounted: function () {
            var t = this;
            this.loaded &&
              this.$nextTick(function () {
                t.setup();
              });
          },
          methods: {
            setup: function () {
              (this.$el.style.fontFamily = this.product.fontFamilyName),
                (this.ctx = this.$refs.canvas.getContext("2d")),
                this.handleResize(),
                this.draw(),
                o.a.on("tick", this.tick),
                o.a.on("resize", this.handleResize);
            },
            handleResize: function () {
              this.setupCanvas();
            },
            setupCanvas: function () {
              this.ctx.scale(1, 1),
                (this.$refs.canvas.style.width = ""),
                (this.$refs.canvas.style.height = ""),
                (this.bounds = Object(rect.a)(this.$refs.canvas)),
                (this.tileColumnsCount = o.b.bounds.ww < 480 ? 8 : 12),
                (this.boundsTile = {
                  width: this.bounds.width / this.tileColumnsCount,
                  height: this.bounds.width / this.tileColumnsCount,
                }),
                this.scaleCanvas(
                  this.$refs.canvas,
                  this.ctx,
                  this.bounds.width,
                  this.bounds.height
                ),
                (this.ctx.lineWidth = 1),
                (this.ctx.font = ""
                  .concat(o.b.bounds.ww < 480 ? 22 : 28, "rem ")
                  .concat(this.product.fontFamilyName)),
                (this.ctx.textBaseline = "middle");
            },
            scaleCanvas: function (canvas, t, e, r) {
              var n =
                t.webkitBackingStorePixelRatio ||
                t.mozBackingStorePixelRatio ||
                t.msBackingStorePixelRatio ||
                t.oBackingStorePixelRatio ||
                t.backingStorePixelRatio ||
                1;
              (this.ratio = 2),
                2 !== n
                  ? ((canvas.width = e * this.ratio),
                    (canvas.height = r * this.ratio),
                    (canvas.style.width = e + "px"),
                    (canvas.style.height = r + "px"))
                  : ((canvas.width = e),
                    (canvas.height = r),
                    (canvas.style.width = ""),
                    (canvas.style.height = "")),
                t.scale(this.ratio, this.ratio);
            },
            tick: function (t) {
              t.time;
              this.inView && this.draw();
            },
            draw: function () {
              this.ctx.clearRect(0, 0, this.bounds.width, this.bounds.height),
                this.drawLetters(),
                this.drawColumnLines(),
                this.drawRowLines();
            },
            drawColumnLines: function () {
              for (
                var t,
                  e,
                  r =
                    this.letters.length > this.tileColumnsCount
                      ? this.tileColumnsCount
                      : this.letters.length,
                  n =
                    (e =
                      (t = Math.ceil(
                        this.letters.length / this.tileColumnsCount
                      )) > 1
                        ? (t - 1) * this.tileColumnsCount
                        : this.letters.length) == this.letters.length
                      ? this.letters.length + 1
                      : this.letters.length - e,
                  i = 0;
                i <= r;
                i++
              ) {
                var o =
                    i <= n
                      ? this.bounds.height
                      : this.bounds.height - this.boundsTile.height,
                  l =
                    12 == i
                      ? this.boundsTile.width * i - 1
                      : this.boundsTile.width * i;
                this.ctx.save(),
                  (this.ctx.strokeStyle = "#CACACA"),
                  this.ctx.beginPath(),
                  this.ctx.moveTo(l, 0),
                  this.ctx.lineTo(l, o),
                  this.ctx.closePath(),
                  this.ctx.stroke(),
                  this.ctx.restore();
              }
            },
            drawRowLines: function () {
              for (
                var t,
                  e,
                  r =
                    (e =
                      (t = Math.ceil(
                        this.letters.length / this.tileColumnsCount
                      )) > 1
                        ? (t - 1) * this.tileColumnsCount
                        : this.letters.length) == this.letters.length
                      ? this.letters.length + 1
                      : this.letters.length - e,
                  i = 0;
                i <= t;
                i++
              ) {
                var n =
                    i < t
                      ? this.bounds.width
                      : this.bounds.width -
                        this.boundsTile.width * (this.tileColumnsCount - r),
                  o =
                    i == t
                      ? this.boundsTile.height * i - 1
                      : this.boundsTile.height * i;
                this.ctx.save(),
                  (this.ctx.strokeStyle = "#CACACA"),
                  this.ctx.beginPath(),
                  this.ctx.moveTo(0, o),
                  this.ctx.lineTo(n, o),
                  this.ctx.closePath(),
                  this.ctx.stroke(),
                  this.ctx.restore();
              }
            },
            drawLetters: function () {
              for (var i = 0; i < this.letters.length; i++) {
                var t = this.letters[i],
                  e = t.char,
                  r = t.bgColor,
                  n = t.textColor,
                  o = Math.floor(i / this.tileColumnsCount),
                  l = i % this.tileColumnsCount;
                this.ctx.save();
                var d = this.ctx.measureText(e),
                  c =
                    (d.fontBoundingBoxAscent,
                    d.fontBoundingBoxDescent,
                    d.actualBoundingBoxAscent + d.actualBoundingBoxDescent),
                  h = l * this.boundsTile.width,
                  v = o * this.boundsTile.height,
                  f = h + this.boundsTile.width / 2 - d.width / 2,
                  m = v + c / 2 + this.boundsTile.height / 2 - c / 2;
                (this.ctx.fillStyle = r),
                  this.ctx.fillRect(
                    h,
                    v,
                    this.boundsTile.width,
                    this.boundsTile.height
                  ),
                  (this.ctx.fillStyle = n),
                  this.ctx.fillText(e, f, m),
                  this.ctx.restore();
              }
            },
            setSelectedIndex: function (t) {
              this.$emit("updatedSelectedIndex", t);
            },
            setHoverIndex: function (t) {
              this.$emit("updateHoverIndex", t);
            },
            handleMouseEnter: function (t) {
              this.setSelectedIndex(t), this.setHoverIndex(t);
            },
            handleSelectionTransition: function (t, e) {
              this.tweens["".concat(t)] &&
                (this.tweens["".concat(t)].kill(),
                delete this.tweens["".concat(t)]);
              var r = this.letters[t];
              ((this.tweens["".concat(t)] = n.a.timeline().to(r, {
                bgColor: "black",
                textColor: "white",
              })),
              this.tweens["".concat(e)]) &&
                (this.tweens["".concat(e)].kill(),
                delete this.tweens["".concat(e)]);
              null !== e &&
                ((r = this.letters[e]),
                (this.tweens["".concat(e)] = n.a.timeline().to(r, {
                  bgColor: "white",
                  textColor: "black",
                })));
            },
            handleHoverTransition: function (t, e) {
              if (this.selectedIndex !== e && this.selectedIndex !== t) {
                if (null !== t) {
                  if (this.tweens["".concat(t)])
                    this.tweens["".concat(t)].kill(),
                      delete this.tweens["".concat(t)];
                  var r = this.letters[t];
                  this.tweens["".concat(t)] = n.a.timeline().to(r, {
                    bgColor: "black",
                    textColor: "white",
                  });
                }
                if (null !== e) {
                  if (this.tweens["".concat(e)])
                    this.tweens["".concat(e)].kill(),
                      delete this.tweens["".concat(e)];
                  var o = this.letters[e];
                  this.tweens["".concat(e)] = n.a.timeline().to(o, {
                    bgColor: "white",
                    textColor: "black",
                  });
                }
              }
            },
          },
        },
        d = (r(746), r(9)),
        component = Object(d.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "characters",
              },
              [
                t._l(t.letters, function (r, n) {
                  return e(
                    "div",
                    {
                      key: n,
                      class: [
                        "character",
                        {
                          active: n == t.selectedIndex,
                        },
                      ],
                    },
                    [
                      e(
                        "button",
                        {
                          on: {
                            click: function (e) {
                              return t.setSelectedIndex(n);
                            },
                            mouseenter: function (e) {
                              return t.handleMouseEnter(n);
                            },
                            mouseleave: function (e) {
                              return t.setHoverIndex(null);
                            },
                          },
                        },
                        [e("span", [t._v(t._s(r.char))])]
                      ),
                    ]
                  );
                }),
                t._v(" "),
                e("canvas", {
                  ref: "canvas",
                }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "90ddee18",
          null
        );
      e.default = component.exports;
    },
    775: function (t, e, r) {
      "use strict";
      r.r(e);
      r(142);
      var n = {
          name: "RangeInput",
          props: {
            min: {
              type: Number,
              required: !0,
            },
            max: {
              type: Number,
              required: !0,
            },
            value: {
              type: Number,
              required: !0,
            },
            step: {
              type: Number,
              required: !0,
            },
            theme: {
              type: String,
              required: !0,
            },
          },
          methods: {
            handleChange: function (t) {
              this.$emit("update", t.srcElement.valueAsNumber);
            },
          },
        },
        o = (r(749), r(9)),
        component = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                class: [t.theme],
              },
              [
                e("input", {
                  attrs: {
                    min: t.min,
                    max: t.max,
                    step: t.step,
                    type: "range",
                  },
                  domProps: {
                    value: t.value,
                  },
                  on: {
                    input: t.handleChange,
                  },
                }),
              ]
            );
          },
          [],
          !1,
          null,
          "0a21353a",
          null
        );
      e.default = component.exports;
    },
    800: function (t, e, r) {
      "use strict";
      r(720);
    },
    801: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".buy-button[data-v-d693b022]{position:fixed;z-index:10}.buy-button button[data-v-d693b022]{position:absolute;top:0;left:0;width:100%;height:100%;background:#000;border:1px solid #fff;border-radius:100%;overflow:hidden;will-change:transform;transform:translate3d(0, 0, 0)}.buy-button button span[data-v-d693b022]{position:absolute;top:50%;left:50%;transform:translate3d(-50%, -50%, 0);text-transform:uppercase;color:#fff}@media only screen and (min-width: 480px){.buy-button[data-v-d693b022]{bottom:98rem;right:var(--margin);width:148rem;height:148rem}}@media only screen and (max-width: 479px){.buy-button[data-v-d693b022]{bottom:80rem;right:var(--margin);width:119rem;height:119rem}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    802: function (t, e, r) {
      "use strict";
      r(728);
    },
    803: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.centered-text[data-v-238404f5]{position:relative;width:100%;padding:0 var(--margin)}.centered-text p[data-v-238404f5]{font-family:"PSTimes";font-weight:350;text-align:center;color:#201b1b;letter-spacing:normal}@media only screen and (min-width: 480px){.centered-text[data-v-238404f5]{padding:200rem calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.0833333333 + var(--gutter)*1)}.centered-text p[data-v-238404f5]{font-size:90rem;line-height:.88}}@media only screen and (max-width: 479px){.centered-text[data-v-238404f5]{padding:0 var(--margin)}.centered-text p[data-v-238404f5]{font-size:38rem;line-height:.95}}',
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    804: function (t, e, r) {
      "use strict";
      r(731);
    },
    805: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".semifullbleed-slide[data-v-074ae216]{position:relative;width:100%;padding:0 var(--margin)}.semifullbleed-slide .asset__container[data-v-074ae216]{width:100%;background:#b7e3b6;padding-top:66.66%;position:relative}@media only screen and (min-width: 480px){.semifullbleed-slide[data-v-074ae216]:not(:last-child){margin-bottom:200rem}.semifullbleed-slide.wide .asset[data-v-074ae216]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.8333333333 + var(--gutter)*9)}.semifullbleed-slide.regular .asset[data-v-074ae216]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.6666666667 + var(--gutter)*7)}.semifullbleed-slide .asset[data-v-074ae216]{margin:0 auto}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    806: function (t, e, r) {
      "use strict";
      r(740);
    },
    807: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".related[data-v-57b7133b]{position:relative;width:100%;z-index:4}.related__inner[data-v-57b7133b]{width:100%;padding:0 var(--margin);bottom:0}.related .asset[data-v-57b7133b]{background:#b7e3b6}.related .asset__container[data-v-57b7133b]{width:100%;position:relative}.related ul[data-v-57b7133b]{display:flex;width:100%}.related ul li[data-v-57b7133b]{--copyColor: black}.related__product[data-v-57b7133b]{position:relative}.related__product__copy[data-v-57b7133b]{display:flex;flex-direction:column}@media only screen and (min-width: 480px){.related__inner[data-v-57b7133b]{padding-top:20rem;padding-bottom:34rem}.related .asset__container[data-v-57b7133b]{padding-top:66.59%}.related h2[data-v-57b7133b]{margin-bottom:129rem}.related ul[data-v-57b7133b]{margin-bottom:46rem}.related li[data-v-57b7133b]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3)}.related li[data-v-57b7133b]:not(:last-child){margin-right:var(--gutter)}.related__product[data-v-57b7133b]{display:block}.related__product:hover p[data-v-57b7133b]{opacity:1}.related__product__copy[data-v-57b7133b]{position:absolute;top:15rem;left:15rem;width:calc(100% - 30rem);z-index:1}.related__product__copy p[data-v-57b7133b]{transition:opacity 500ms ease;opacity:0;color:var(--copyColor);will-change:opacity}.related__link span[data-v-57b7133b]{display:inline-block;line-height:1}.related__link div[data-v-57b7133b]{width:12rem;margin-left:2rem}}@media only screen and (max-width: 479px){.related__inner[data-v-57b7133b]{padding-top:15px;padding-bottom:15px}.related .asset__container[data-v-57b7133b]{padding-top:66.59%}.related h2[data-v-57b7133b]{font-size:28px;margin-bottom:46px}.related ul[data-v-57b7133b]{flex-wrap:wrap}.related li[data-v-57b7133b]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.related li[data-v-57b7133b]:first-child{margin-bottom:var(--gutter)}.related li[data-v-57b7133b]:nth-child(3){display:none}.related__product__copy[data-v-57b7133b]{margin-top:11px}.related__link[data-v-57b7133b]{display:none}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    808: function (t, e, r) {
      "use strict";
      r(741);
    },
    809: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".twincolumn{position:relative;width:100%;padding:0 var(--margin);display:flex}.twincolumn__inner{width:100%;position:relative}.twincolumn .asset{position:absolute;top:0;left:0;width:100%;height:100%;transition:opacity 500ms ease}.twincolumn .asset:not(.active){opacity:0;pointer-events:none}.twincolumn .asset__container{width:100%;background:#b7e3b6;position:relative}.twincolumn__column{position:relative;overflow:hidden}@media only screen and (min-width: 480px){.twincolumn{justify-content:center}.twincolumn__column:nth-child(2){margin-left:var(--margin)}.twincolumn .asset__container{height:100%}.twincolumn.wide .twincolumn__column{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.twincolumn.regular .twincolumn__column{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3)}.twincolumn.portrait .twincolumn__column__inner{padding-top:150.0900900901%}.twincolumn.landscape .twincolumn__column__inner{padding-top:66.7164179104%}}@media only screen and (max-width: 479px){.twincolumn{justify-content:space-between}.twincolumn.portrait .twincolumn__column{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.5 + var(--gutter)*1)}.twincolumn.portrait .twincolumn__column__inner{padding-top:153.1791907514%}.twincolumn.portrait .asset__container{height:100%}.twincolumn.landscape{flex-wrap:wrap}.twincolumn.landscape .twincolumn__column{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.twincolumn.landscape .twincolumn__column:first-child:not(:only-child){margin-bottom:var(--gutter)}.twincolumn.landscape .twincolumn__column__inner{padding-top:65.4596100279%}.twincolumn.landscape .asset__container{height:100%}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    810: function (t, e, r) {
      "use strict";
      r(748);
    },
    811: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".glyphs[data-v-53a1b99f]{position:relative;width:100%;display:flex;padding:0 var(--margin)}.glyphs.light .highlight button[data-v-53a1b99f],.glyphs.light .highlight span[data-v-53a1b99f]{color:#fff}.glyphs.light .character span[data-v-53a1b99f]{color:#000}.glyphs.light .character.active span[data-v-53a1b99f]{color:#fff}@media(hover: hover){.glyphs.light .character:hover span[data-v-53a1b99f]{color:#fff}}.glyphs.dark .highlight button[data-v-53a1b99f],.glyphs.dark .highlight span[data-v-53a1b99f]{color:#000}.glyphs.dark .character span[data-v-53a1b99f]{color:#fff}@media(hover: hover){.glyphs.dark .character[data-v-53a1b99f]:hover{background:#fff}.glyphs.dark .character:hover span[data-v-53a1b99f]{color:#000}}@media only screen and (min-width: 480px){.glyphs[data-v-53a1b99f]:not(:last-child){margin-bottom:260rem}.glyphs[data-v-53a1b99f]:last-child{margin-bottom:200rem}}@media only screen and (max-width: 479px){.glyphs[data-v-53a1b99f]{flex-wrap:wrap;margin-bottom:140rem}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    812: function (t, e, r) {
      "use strict";
      r(751);
    },
    813: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.interactive-copy[data-v-1ed732d6]{position:relative;display:flex;flex-wrap:wrap;justify-content:space-between;color:#000;padding:0 var(--margin);transition:background 500ms ease,color 500ms ease}.interactive-copy[data-v-1ed732d6]:before{content:"";position:absolute;top:0;left:0;width:100%;height:1px;transition:background 500ms ease}.interactive-copy[data-v-1ed732d6]:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:1px;transition:background 500ms ease}.interactive-copy.dark[data-v-1ed732d6]{color:#fff;background:#000}.interactive-copy.dark[data-v-1ed732d6]:before,.interactive-copy.dark[data-v-1ed732d6]:after{background:#cacaca}.interactive-copy.dark .interactive-copy__textarea[data-v-1ed732d6]{color:#fff}.interactive-copy.dark .interactive-copy__controls__theme[data-v-1ed732d6]:before{border:1px solid #fff}.interactive-copy.dark .interactive-copy__controls__theme[data-v-1ed732d6]:after{background:#fff}.interactive-copy.dark .range-group button:not(.active) svg path[data-v-1ed732d6]{stroke:rgba(242,242,242,.39)}@media(hover: hover){.interactive-copy.dark .range-group button:hover svg path[data-v-1ed732d6]{stroke:#fff}}.interactive-copy.dark .range-group button svg path[data-v-1ed732d6]{stroke:#fff}.interactive-copy.light[data-v-1ed732d6]{color:#000;background:#fff}.interactive-copy.light[data-v-1ed732d6]:before,.interactive-copy.light[data-v-1ed732d6]:after{background:#201b1b}.interactive-copy.light .interactive-copy__textarea[data-v-1ed732d6]{color:#000}.interactive-copy.light .interactive-copy__controls__theme[data-v-1ed732d6]:before{border:1px solid #000}.interactive-copy.light .interactive-copy__controls__theme[data-v-1ed732d6]:after{background:#000}.interactive-copy.light .range-group button:not(.active) svg path[data-v-1ed732d6]{stroke:#cacaca}@media(hover: hover){.interactive-copy.light .range-group button:hover svg path[data-v-1ed732d6]{stroke:#201b1b}}.interactive-copy__textarea[data-v-1ed732d6]{display:block;width:100%;flex:0 0 100%;margin:0 auto;resize:none;text-align:center;color:#000;font-family:inherit;transition:color 500ms ease}.interactive-copy .range-group[data-v-1ed732d6]{position:relative}.interactive-copy .range-group__header[data-v-1ed732d6]{display:flex;justify-content:space-between}.interactive-copy .range-group__header span[data-v-1ed732d6]:first-child{color:#cacaca;text-transform:uppercase}.interactive-copy .range-group button svg path[data-v-1ed732d6]{transition:stroke 500ms ease}.interactive-copy__controls[data-v-1ed732d6]{position:relative;display:flex;flex-wrap:wrap;justify-content:center;width:100%}.interactive-copy__controls__theme[data-v-1ed732d6]{position:relative;border-radius:100%;overflow:hidden}.interactive-copy__controls__theme[data-v-1ed732d6]:before{content:"";position:absolute;top:50%;left:50%;transform:translate3d(-50%, -50%, 0);width:calc(100% - 2px);height:calc(100% - 2px);border-radius:100%;transition:border-color 500ms ease;z-index:1}.interactive-copy__controls__theme[data-v-1ed732d6]:after{content:"";position:absolute;top:0;left:50%;transform:translate3d(0, 0, 0) rotate(-135deg);transform-origin:left center;width:100%;height:100%;transition:background 500ms ease;z-index:0}@media only screen and (min-width: 480px){.interactive-copy[data-v-1ed732d6]{padding-top:50rem;padding-bottom:88rem}.interactive-copy.spacing[data-v-1ed732d6]{margin-bottom:200rem}.interactive-copy__controls[data-v-1ed732d6]{width:100%;margin:0 auto}.interactive-copy__controls__theme[data-v-1ed732d6]{width:20px;height:20px;margin:0 0 0 calc(var(--gutter)/2)}.interactive-copy__controls .range-group[data-v-1ed732d6]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*1);margin:0 calc(var(--gutter)/2)}.interactive-copy__controls .range-group__header[data-v-1ed732d6]{margin-bottom:14rem}.interactive-copy__controls .range-group input[data-v-1ed732d6]{width:100%}.interactive-copy__controls .range-group[data-v-1ed732d6]:last-of-type:after{content:"";position:absolute;left:0;bottom:5px;width:100%;height:1px;background:#cacaca}.interactive-copy__controls .range-group:last-of-type span[data-v-1ed732d6]{margin-right:auto}.interactive-copy__controls .range-group:last-of-type button[data-v-1ed732d6]:not(:last-child){margin-right:20rem}.interactive-copy__controls .range-group:last-of-type button svg[data-v-1ed732d6]{width:20rem}.interactive-copy__textarea[data-v-1ed732d6]{font-size:150rem;padding:180rem 0}}@media only screen and (max-width: 479px){.interactive-copy[data-v-1ed732d6]{display:none}}',
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    830: function (t, e, r) {
      var content = r(873);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(33).default)("389f6212", content, !0, {
        sourceMap: !1,
      });
    },
    843: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(1),
        o = (r(11), r(27), r(22), r(13)),
        l = r(4),
        d = r(141),
        c = r(145),
        h = r(495);
      o.a.registerPlugin(h.ScrollTrigger);
      var v = {
          name: "BuyButton",
          props: {
            product: {
              type: Object,
              required: !0,
            },
          },
          computed: {
            cart: function () {
              return this.$store.getters["cart/cart"];
            },
            ctaText: function () {
              return this.success
                ? "Added"
                : this.error
                ? "Error"
                : this.submitting
                ? "Adding"
                : "Buy";
            },
          },
          data: function () {
            return {
              tl: null,
              error: !1,
              success: !1,
              delayedCalls: [],
              submitting: !1,
              fontPurchaseEl: null,
              rotation: {
                current: 0,
                eased: 0,
                ease: 0.6,
              },
            };
          },
          beforeDestroy: function () {
            this.removeEventListeners(),
              "typeface" == this.product.productType &&
                this.tl &&
                this.tl.kill();
          },
          mounted: function () {
            (this.fontPurchaseEl = Object(c.a)(".font-purchase")),
              this.addEventListeners(),
              "typeface" == this.product.productType && this.setupTl();
          },
          methods: {
            setupTl: function () {
              (this.tl = o.a.timeline({
                scrollTrigger: {
                  trigger: this.fontPurchaseEl,
                  start: function () {
                    return "top bottom-=".concat(
                      l.b.bounds.ww < 480 ? 160 : 260 * l.b.units.rem,
                      "px"
                    );
                  },
                  end: function () {
                    return "top bottom-=".concat(
                      l.b.bounds.ww < 480 ? 200 : 360 * l.b.units.rem,
                      "px"
                    );
                  },
                  scrub: !0,
                },
              })),
                this.tl.to(
                  this.$el,
                  {
                    autoAlpha: 0,
                    ease: "none",
                  },
                  0
                );
            },
            addEventListeners: function () {
              l.a.on("tick", this.tick),
                window.addEventListener("scroll", this.handleScroll);
            },
            removeEventListeners: function () {
              l.a.off("tick", this.tick),
                window.removeEventListener("scroll", this.handleScroll);
            },
            handleScroll: function (t) {
              (this.rotation.current = Object(d.c)(
                window.pageYOffset,
                0,
                1200,
                0,
                360
              )),
                (this.rotation.eased +=
                  (this.rotation.current - this.rotation.eased) *
                  this.rotation.ease);
            },
            tick: function () {
              (this.rotation.eased +=
                (this.rotation.current - this.rotation.eased) *
                this.rotation.ease),
                o.a.set(this.$refs.button, {
                  rotation: this.rotation.eased,
                });
            },
            handleClick: function () {
              "typeface" == this.product.productType
                ? this.fontPurchaseEl.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                : this.addProductToCart();
            },
            addProductToCart: function () {
              var t = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function e() {
                  var r, l, d, c;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              (t.submitting = !0),
                              null === t.cart || !t.cart.hasOwnProperty("id"))
                            ) {
                              e.next = 6;
                              break;
                            }
                            (e.t0 = t.cart), (e.next = 9);
                            break;
                          case 6:
                            return (e.next = 8), t.$shopify.checkout.create();
                          case 8:
                            e.t0 = e.sent;
                          case 9:
                            return (
                              (r = e.t0),
                              (l = r.id),
                              (d = {
                                variantId:
                                  t.product.store.variants[0].store.gid,
                                quantity: 1,
                              }),
                              (e.next = 14),
                              t.$shopify.checkout.addLineItems(l, d)
                            );
                          case 14:
                            (c = e.sent),
                              t.$store.dispatch("cart/setCart", c),
                              t.delayedCalls.push(
                                o.a.delayedCall(
                                  1,
                                  Object(n.a)(
                                    regeneratorRuntime.mark(function e() {
                                      return regeneratorRuntime.wrap(function (
                                        e
                                      ) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              (t.success = !0),
                                                (t.submitting = !1);
                                            case 2:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e);
                                    })
                                  )
                                )
                              ),
                              t.delayedCalls.push(
                                o.a.delayedCall(
                                  4,
                                  Object(n.a)(
                                    regeneratorRuntime.mark(function e() {
                                      return regeneratorRuntime.wrap(function (
                                        e
                                      ) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              t.error =
                                                t.success =
                                                t.submitting =
                                                  !1;
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e);
                                    })
                                  )
                                )
                              ),
                              (e.next = 25);
                            break;
                          case 20:
                            (e.prev = 20),
                              (e.t1 = e.catch(0)),
                              console.log(e.t1),
                              t.clearDelayedCalls(),
                              o.a.delayedCall(
                                1,
                                Object(n.a)(
                                  regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(function (
                                      e
                                    ) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            (t.error = !0),
                                              (t.success = !1),
                                              (t.submitting = !1),
                                              t.delayedCalls.push(
                                                o.a.delayedCall(3, function () {
                                                  t.error = !1;
                                                })
                                              );
                                          case 4:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e);
                                  })
                                )
                              );
                          case 25:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 20]]
                  );
                })
              )();
            },
            clearDelayedCalls: function () {
              this.delayedCalls.forEach(function (t) {
                return t.kill();
              }),
                (this.delayedCalls = []);
            },
          },
        },
        f = (r(800), r(9)),
        component = Object(f.a)(
          v,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "buy-button",
              },
              [
                e(
                  "button",
                  {
                    ref: "button",
                    on: {
                      click: t.handleClick,
                    },
                  },
                  [
                    e(
                      "span",
                      {
                        staticClass: "b2",
                      },
                      [t._v(t._s(t.ctaText))]
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "d693b022",
          null
        );
      e.default = component.exports;
    },
    845: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = {
          name: "CenteredText",
          props: {
            product: {
              type: Object,
              required: !0,
            },
            slide: {
              type: Object,
              required: !0,
            },
          },
          mounted: function () {
            this.$el.style.fontFamily = this.product.fontFamilyName;
          },
        },
        o = (r(802), r(9)),
        component = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                staticClass: "centered-text slide",
              },
              [e("p", [t._v(t._s(t.slide.text))])]
            );
          },
          [],
          !1,
          null,
          "238404f5",
          null
        );
      e.default = component.exports;
    },
    846: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(141),
        o = {
          name: "SemiBleedSlide",
          props: {
            slide: {
              type: Object,
              required: !0,
            },
          },
          methods: {
            getAspect: n.b,
          },
        },
        l = (r(804), r(9)),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                class: ["semifullbleed-slide slide", t.slide.width],
              },
              t._l(t.slide.slide, function (r, n) {
                return e(
                  "div",
                  {
                    key: n,
                    staticClass: "asset",
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "asset__container",
                      },
                      [
                        "image" == r._type
                          ? e("SanityImage", {
                              ref: "image",
                              refInFor: !0,
                              staticClass: "abs full cover",
                              attrs: {
                                image: r.image,
                              },
                            })
                          : "vimeo" == r._type
                          ? e("VideoPlayer", {
                              staticClass: "abs",
                              attrs: {
                                url: r.video.url,
                                autoplay: r.video.autoplay || !1,
                                showDuration: !r.video.autoplay,
                                controls: !r.video.autoplay,
                                hoverActions: !1,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                  ]
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          "074ae216",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        SanityImage: r(471).default,
        VideoPlayer: r(474).default,
      });
    },
    847: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(4),
        o = r(141),
        l = r(268),
        d = {
          name: "RelatedProducts",
          props: {
            data: {
              type: Object,
              required: !0,
            },
          },
          data: function () {
            return {
              sticky: !1,
            };
          },
          components: {
            RightArrowIcon: l.default,
          },
          beforeDestroy: function () {},
          mounted: function () {},
          methods: {
            getAspect: o.b,
            onResize: function () {
              (this.$refs.inner.style.position = ""),
                (this.$refs.container.style.height = "");
              var t = this.$refs.inner.getBoundingClientRect();
              t.height <= n.b.bounds.wh &&
                ((this.$refs.inner.style.position = "fixed"),
                (this.$refs.container.style.height = "".concat(
                  t.height,
                  "px"
                )));
            },
          },
        },
        c = (r(806), r(9)),
        component = Object(c.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                ref: "container",
                class: [
                  "related",
                  {
                    sticky: t.sticky,
                  },
                ],
              },
              [
                e(
                  "div",
                  {
                    ref: "inner",
                    staticClass: "related__inner",
                  },
                  [
                    e("h2", [t._v(t._s(t.data.title))]),
                    t._v(" "),
                    e(
                      "ul",
                      {
                        staticClass: "related___products",
                      },
                      t._l(t.data.relatedProducts, function (r, n) {
                        return e(
                          "li",
                          {
                            key: n,
                            style: "--copyColor: ".concat(r.preview.titleColor),
                          },
                          [
                            r.isActiveProduct
                              ? e(
                                  "nuxt-link",
                                  {
                                    staticClass: "related__product",
                                    attrs: {
                                      to: "/store/".concat(
                                        r.information.slug.current
                                      ),
                                    },
                                  },
                                  [
                                    t._l(r.preview.asset, function (r, n) {
                                      return e(
                                        "div",
                                        {
                                          key: n,
                                          staticClass: "asset",
                                        },
                                        [
                                          e(
                                            "div",
                                            {
                                              staticClass: "asset__container",
                                            },
                                            [
                                              "image" == r._type
                                                ? e("SanityImage", {
                                                    ref: "image",
                                                    refInFor: !0,
                                                    staticClass:
                                                      "abs full cover",
                                                    attrs: {
                                                      image: r.image,
                                                    },
                                                  })
                                                : "vimeo" == r._type
                                                ? e("VideoPlayer", {
                                                    staticClass: "abs",
                                                    attrs: {
                                                      url: r.video.url,
                                                      autoplay:
                                                        r.video.autoplay || !1,
                                                      showDuration:
                                                        !r.video.autoplay,
                                                      controls:
                                                        !r.video.autoplay,
                                                      hoverActions: !1,
                                                    },
                                                  })
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      );
                                    }),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticClass: "related__product__copy",
                                      },
                                      [
                                        e(
                                          "p",
                                          {
                                            staticClass: "b2",
                                          },
                                          [t._v(t._s(r.preview.title))]
                                        ),
                                      ]
                                    ),
                                  ],
                                  2
                                )
                              : e(
                                  "div",
                                  {
                                    staticClass: "related__product",
                                  },
                                  [
                                    t._l(r.preview.asset, function (r, n) {
                                      return e(
                                        "div",
                                        {
                                          key: n,
                                          staticClass: "asset",
                                        },
                                        [
                                          e(
                                            "div",
                                            {
                                              staticClass: "asset__container",
                                            },
                                            [
                                              "image" == r._type
                                                ? e("SanityImage", {
                                                    ref: "image",
                                                    refInFor: !0,
                                                    staticClass:
                                                      "abs full cover",
                                                    attrs: {
                                                      image: r.image,
                                                    },
                                                  })
                                                : "vimeo" == r._type
                                                ? e("VideoPlayer", {
                                                    staticClass: "abs",
                                                    attrs: {
                                                      url: r.video.url,
                                                      autoplay:
                                                        r.video.autoplay || !1,
                                                      showDuration:
                                                        !r.video.autoplay,
                                                      controls:
                                                        !r.video.autoplay,
                                                      hoverActions: !1,
                                                    },
                                                  })
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      );
                                    }),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticClass: "related__product__copy",
                                      },
                                      [
                                        e(
                                          "p",
                                          {
                                            staticClass: "b2",
                                          },
                                          [t._v(t._s(r.preview.title))]
                                        ),
                                        t._v(" "),
                                        e(
                                          "p",
                                          {
                                            staticClass: "b2",
                                          },
                                          [t._v("Coming Soon")]
                                        ),
                                      ]
                                    ),
                                  ],
                                  2
                                ),
                          ],
                          1
                        );
                      }),
                      0
                    ),
                    t._v(" "),
                    e(
                      "nuxt-link",
                      {
                        staticClass: "related__link",
                        attrs: {
                          to: "/work",
                        },
                      },
                      [
                        e(
                          "span",
                          {
                            staticClass: "decoration active b2 opaque black",
                          },
                          [t._v("Go Back to Store")]
                        ),
                        t._v(" "),
                        e("RightArrowIcon", {
                          attrs: {
                            color: "black",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "57b7133b",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        SanityImage: r(471).default,
        VideoPlayer: r(474).default,
        RightArrowIcon: r(268).default,
      });
    },
    848: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(141),
        o = {
          name: "TwinColumnSlide",
          components: {
            TwinColumnSlideColumn: r(771).default,
          },
          props: {
            slide: {
              type: Object,
              required: !0,
            },
          },
          methods: {
            getAspect: n.b,
          },
        },
        l = (r(808), r(9)),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                class: ["twincolumn slide", t.slide.orientation, t.slide.width],
              },
              t._l(t.slide.columns, function (t, r) {
                return e("TwinColumnSlideColumn", {
                  key: r,
                  attrs: {
                    column: t,
                  },
                });
              }),
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    849: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(94),
        o = (r(70), r(11), r(27), r(13)),
        l = r(4),
        d = r(477),
        c = r(773),
        h = {
          name: "Glyphs",
          components: {
            GlyphsCharacters: r(774).default,
            GlyphsHighlight: c.default,
          },
          mixins: [d.a],
          props: {
            product: {
              type: Object,
              required: !0,
            },
            slide: {
              type: Object,
              required: !0,
            },
            loaded: {
              type: Boolean,
              required: !0,
            },
          },
          watch: {
            selectedIndex: function (t, e) {
              this.selectedLetter = this.letters[t].char;
            },
          },
          data: function () {
            return {
              tweens: {},
              letters: [],
              alphabet: "",
              inView: !1,
              theme: "dark",
              selectedIndex: 0,
              hoverIndex: null,
              selectedLetter: "",
              fontStyle: "normal",
            };
          },
          created: function () {
            var t = this;
            (this.alphabet = this.createAlphabetSet(this.slide)),
              (this.letters = this.alphabet.map(function (e, r) {
                return {
                  char: e,
                  bgColor: t.selectedIndex == r ? "black" : "white",
                  textColor: t.selectedIndex == r ? "white" : "black",
                };
              })),
              (this.tweens[this.selectedIndex] = o.a
                .timeline({
                  paused: !0,
                })
                .to(this.letters[this.selectedIndex], {
                  bgColor: "black",
                  textColor: "white",
                })
                .progress(0));
          },
          mounted: function () {
            this.selectedLetter = this.letters[this.selectedIndex].char;
          },
          methods: {
            createAlphabetSet: function (t) {
              var e = t.glyphsSet,
                r = t.glyphsAdditionalCharacters,
                o = void 0 === r ? null : r,
                l = [];
              return (
                "default" == e &&
                  (l = Object(n.a)(
                    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()".split(
                      ""
                    )
                  )),
                this.addAdditionalCharacters(l, o),
                l
              );
            },
            addAdditionalCharacters: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              return (
                e &&
                  e.length > 0 &&
                  e.forEach(function (e) {
                    t.push(e);
                  }),
                t
              );
            },
            handleSelectedIndexUpdate: function (t) {
              this.selectedIndex = t;
            },
            updateHoverIndex: function (t) {
              this.hoverIndex = t;
            },
            handleStyleUpdate: function (style) {
              this.fontStyle = style;
            },
            handleThemeUpdate: function (t) {
              this.theme = t;
            },
            onReady: function () {
              var t = this;
              l.a.emit("AddToScrollAnimations", {
                el: this.$refs.container,
                onVisible: function () {
                  t.inView = !0;
                },
                onHidden: function () {
                  t.inView = !1;
                },
                inView: !1,
                once: !1,
              });
            },
          },
        },
        v = h,
        f = (r(810), r(9)),
        component = Object(f.a)(
          v,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                ref: "container",
                staticClass: "glyphs",
              },
              [
                e("GlyphsHighlight", {
                  ref: "highlight",
                  attrs: {
                    product: t.product,
                    selectedIndex: t.selectedIndex,
                    letters: t.letters,
                    theme: t.theme,
                    loaded: t.loaded,
                    fontStyle: t.fontStyle,
                  },
                  on: {
                    updatedStyle: t.handleStyleUpdate,
                    updateTheme: t.handleThemeUpdate,
                  },
                }),
                t._v(" "),
                e("GlyphsCharacters", {
                  ref: "characters",
                  attrs: {
                    tweens: t.tweens,
                    fontStyle: t.fontStyle,
                    product: t.product,
                    selectedIndex: t.selectedIndex,
                    hoverIndex: t.hoverIndex,
                    selectedLetter: t.selectedLetter,
                    letters: t.letters,
                    theme: t.theme,
                    loaded: t.loaded,
                    inView: t.inView,
                  },
                  on: {
                    updateHoverIndex: t.updateHoverIndex,
                    updatedSelectedIndex: t.handleSelectedIndexUpdate,
                  },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "53a1b99f",
          null
        );
      e.default = component.exports;
    },
    850: function (t, e, r) {
      "use strict";
      r.r(e);
      r(53), r(142), r(4), r(173);
      var n = r(141),
        o = {
          name: "InteractiveCopy",
          components: {
            RangeInput: r(775).default,
          },
          props: {
            product: {
              type: Object,
              required: !0,
            },
            slide: {
              type: Object,
              required: !1,
            },
            index: {
              type: Number,
              required: !1,
            },
            modulesCount: {
              type: Number,
              required: !1,
            },
          },
          computed: {
            parsedLetterSpacing: function () {
              return this.letterSpacing;
            },
          },
          data: function () {
            return {
              copy: "",
              theme: "light",
              fontSize: 150,
              lineHeight: 0.8,
              letterSpacing: 0,
              roundedLineHeight: 0.8,
              textAlignment: "center",
            };
          },
          created: function () {
            this.copy = this.slide.placeholderCopy;
          },
          mounted: function () {
            (this.$el.style.fontFamily = "".concat(
              this.product.fontFamilyName
            )),
              (this.roundedLineHeight = Object(n.d)(
                this.lineHeight * this.fontSize,
                0
              ));
          },
          methods: {
            handleUpdate: function (t, e) {
              (this[e] = t),
                "lineHeight" == e &&
                  (this.roundedLineHeight = Object(n.d)(
                    this.lineHeight * this.fontSize,
                    0
                  ));
            },
            setTextAlignment: function (t) {
              this.textAlignment = t;
            },
            toggleTheme: function () {
              var t = "dark" == this.theme ? "light" : "dark";
              this.theme = t;
            },
          },
        },
        l = (r(812), r(9)),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                class: [
                  "interactive-copy",
                  t.theme,
                  {
                    spacing: t.index !== t.modulesCount,
                  },
                ],
              },
              [
                e(
                  "div",
                  {
                    staticClass: "interactive-copy__controls",
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "range-group",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "range-group__header",
                          },
                          [
                            e(
                              "span",
                              {
                                staticClass: "b3",
                              },
                              [t._v("Size")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                staticClass: "b3",
                              },
                              [t._v(t._s(t.fontSize))]
                            ),
                          ]
                        ),
                        t._v(" "),
                        e("RangeInput", {
                          attrs: {
                            theme: t.theme,
                            min: 46,
                            max: 200,
                            value: t.fontSize,
                            step: 1,
                          },
                          on: {
                            update: function (e) {
                              return t.handleUpdate(e, "fontSize");
                            },
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "range-group",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "range-group__header",
                          },
                          [
                            e(
                              "span",
                              {
                                staticClass: "b3",
                              },
                              [t._v("Letter spacing")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                staticClass: "b3",
                              },
                              [t._v(t._s(t.letterSpacing))]
                            ),
                          ]
                        ),
                        t._v(" "),
                        e("RangeInput", {
                          attrs: {
                            theme: t.theme,
                            min: -3,
                            max: 3,
                            step: 3,
                            value: t.letterSpacing,
                          },
                          on: {
                            update: function (e) {
                              return t.handleUpdate(e, "letterSpacing");
                            },
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "range-group",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "range-group__header",
                          },
                          [
                            e(
                              "span",
                              {
                                staticClass: "b3",
                              },
                              [t._v("Line height")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                staticClass: "b3",
                              },
                              [t._v(t._s(t.roundedLineHeight))]
                            ),
                          ]
                        ),
                        t._v(" "),
                        e("RangeInput", {
                          attrs: {
                            theme: t.theme,
                            min: 0.4,
                            max: 2,
                            step: 0.001,
                            value: t.lineHeight,
                          },
                          on: {
                            update: function (e) {
                              return t.handleUpdate(e, "lineHeight");
                            },
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "range-group",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "range-group__header",
                          },
                          [
                            e(
                              "span",
                              {
                                staticClass: "b3",
                              },
                              [t._v("Alignment")]
                            ),
                            t._v(" "),
                            e(
                              "button",
                              {
                                class: {
                                  active: "left" == t.textAlignment,
                                },
                                on: {
                                  click: function (e) {
                                    return t.setTextAlignment("left");
                                  },
                                },
                              },
                              [
                                e(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "20",
                                      height: "11",
                                      viewBox: "0 0 20 11",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                  },
                                  [
                                    e("path", {
                                      attrs: {
                                        d: "M0 1H19.5",
                                        stroke: "#201B1B",
                                      },
                                    }),
                                    t._v(" "),
                                    e("path", {
                                      attrs: {
                                        d: "M0 4H16",
                                        stroke: "#201B1B",
                                      },
                                    }),
                                    t._v(" "),
                                    e("path", {
                                      attrs: {
                                        d: "M0 7H20",
                                        stroke: "#201B1B",
                                      },
                                    }),
                                    t._v(" "),
                                    e("path", {
                                      attrs: {
                                        d: "M0 10H12",
                                        stroke: "#201B1B",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            e(
                              "button",
                              {
                                class: {
                                  active: "center" == t.textAlignment,
                                },
                                on: {
                                  click: function (e) {
                                    return t.setTextAlignment("center");
                                  },
                                },
                              },
                              [
                                e(
                                  "svg",
                                  {
                                    attrs: {
                                      viewBox: "0 0 20 11",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                  },
                                  [
                                    e("path", {
                                      attrs: {
                                        d: "M0 1H19.5",
                                        stroke: "#201B1B",
                                      },
                                    }),
                                    t._v(" "),
                                    e("path", {
                                      attrs: {
                                        d: "M2 4H18",
                                        stroke: "#201B1B",
                                      },
                                    }),
                                    t._v(" "),
                                    e("path", {
                                      attrs: {
                                        d: "M0 7H20",
                                        stroke: "#201B1B",
                                      },
                                    }),
                                    t._v(" "),
                                    e("path", {
                                      attrs: {
                                        d: "M4 10H16",
                                        stroke: "#201B1B",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            e(
                              "button",
                              {
                                class: {
                                  active: "right" == t.textAlignment,
                                },
                                on: {
                                  click: function (e) {
                                    return t.setTextAlignment("right");
                                  },
                                },
                              },
                              [
                                e(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "21",
                                      height: "11",
                                      viewBox: "0 0 21 11",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                  },
                                  [
                                    e("path", {
                                      attrs: {
                                        d: "M1 1H20.5",
                                        stroke: "#201B1B",
                                      },
                                    }),
                                    t._v(" "),
                                    e("path", {
                                      attrs: {
                                        d: "M4 4H20",
                                        stroke: "#201B1B",
                                      },
                                    }),
                                    t._v(" "),
                                    e("path", {
                                      attrs: {
                                        d: "M0 7H20",
                                        stroke: "#201B1B",
                                      },
                                    }),
                                    t._v(" "),
                                    e("path", {
                                      attrs: {
                                        d: "M8 10H20",
                                        stroke: "#201B1B",
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
                    e("button", {
                      staticClass: "interactive-copy__controls__theme",
                      on: {
                        click: t.toggleTheme,
                      },
                    }),
                  ]
                ),
                t._v(" "),
                e(
                  "span",
                  {
                    ref: "textarea",
                    staticClass: "interactive-copy__textarea",
                    style: "font-size: "
                      .concat(t.fontSize, "rem; letter-spacing: ")
                      .concat(t.parsedLetterSpacing / 100, "em; line-height: ")
                      .concat(t.lineHeight, "; text-align: ")
                      .concat(t.textAlignment, "; font-variant-ligatures: ")
                      .concat(
                        0 == t.letterSpacing ? "" : "common-ligatures",
                        ";"
                      ),
                    attrs: {
                      role: "textbox",
                      contenteditable: "",
                    },
                  },
                  [t._v(t._s(t.copy))]
                ),
                t._v(" "),
                e("div"),
              ]
            );
          },
          [],
          !1,
          null,
          "1ed732d6",
          null
        );
      e.default = component.exports;
    },
    872: function (t, e, r) {
      "use strict";
      r(830);
    },
    873: function (t, e, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".store-detail__content[data-v-b8f345d4]{position:relative;z-index:5;background:#fff}.store-detail .slides[data-v-b8f345d4]{position:relative;z-index:1;background:#fff}@media only screen and (min-width: 480px){.store-detail .description[data-v-b8f345d4]{padding-bottom:242rem}.store-detail .slides[data-v-b8f345d4]{padding-top:40rem}.store-detail .slide[data-v-b8f345d4]{margin-bottom:200rem}.store-detail .slide .asset[data-v-b8f345d4]{background:#b7e3b6}}@media only screen and (max-width: 479px){.store-detail .slides[data-v-b8f345d4]{padding-top:30px}.store-detail .slide[data-v-b8f345d4]{margin-bottom:100rem}.store-detail .slide .asset[data-v-b8f345d4]{background:#b7e3b6}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    896: function (t, e, r) {
      "use strict";
      r.r(e);
      r(50), r(69);
      var n = r(1),
        head = (r(290), r(20), r(11), r(22), r(652)),
        o = r(4),
        l = r(660),
        d = r(112),
        c = r(762),
        h = r(763),
        v = r(843),
        f = r(693),
        m = r(883),
        _ = r(764),
        x = r(765),
        y = r(845),
        w = r(766),
        C = r(846),
        k = r(767),
        I = r(768),
        S = r(769),
        M = r(770),
        T = r(847),
        z = r(848),
        $ = r(772),
        j = r(849),
        O = r(850),
        A = r(114),
        L = r(113),
        B = {
          name: "StoreDetail",
          asyncData: function (t) {
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                var r, n, o, data;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.params),
                            (n = t.error),
                            (o = t.redirect),
                            (e.prev = 1),
                            (e.next = 4),
                            A.a.fetch(L.f, r)
                          );
                        case 4:
                          return (
                            (data = e.sent).isActiveProduct ||
                              o(307, {
                                name: "store",
                              }),
                            e.abrupt("return", {
                              page: data,
                            })
                          );
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            n({
                              statusCode: 404,
                              message:
                                "The page you are looking for does not exist. ",
                              err: e.t0,
                            });
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            )();
          },
          mixins: [head.a, d.a, Object(l.a)()],
          components: {
            Hero: c.default,
            Press: h.default,
            Glyphs: j.default,
            BuyButton: v.default,
            Slideshow: f.default,
            QuoteSlide: _.default,
            Description: x.default,
            CenteredText: y.default,
            FontPurchase: m.default,
            CenteredSlide: w.default,
            FullBleedSlide: k.default,
            SemiBleedSlide: C.default,
            TwoColumnSlide: I.default,
            AssetCopySlide: S.default,
            TitledCarousel: M.default,
            InteractiveCopy: O.default,
            TwinColumnSlide: z.default,
            RelatedProducts: T.default,
            TwoColumnAssetsCopy: $.default,
          },
          data: function () {
            return {
              loaded: !1,
            };
          },
          created: function () {
            this.$store.dispatch("projectTitle", this.page.information.title);
          },
          mounted: function () {
            "typeface" == this.page.product.productType && this.checkFont();
          },
          methods: {
            checkFont: function () {
              var t = this;
              if (
                o.b.fontsLoaded.find(function (e) {
                  return e.name == t.page.product.fontFamilyName;
                })
              )
                this.loaded = !0;
              else {
                var e = new XMLHttpRequest();
                e.addEventListener(
                  "readystatechange",
                  (function () {
                    var r = Object(n.a)(
                      regeneratorRuntime.mark(function r(n) {
                        return regeneratorRuntime.wrap(function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                4 == e.readyState && t.setupFont(e.response);
                              case 1:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                      })
                    );
                    return function (t) {
                      return r.apply(this, arguments);
                    };
                  })()
                ),
                  (e.responseType = "arraybuffer"),
                  e.open("get", this.page.product.fontFile),
                  e.send();
              }
            },
            setupFont: function (t) {
              var e = this;
              new FontFace(this.page.product.fontFamilyName, t)
                .load()
                .then(function (r) {
                  document.fonts.add(r),
                    (e.loaded = !0),
                    o.b.fontsLoaded.push({
                      name: e.page.product.fontFamilyName,
                      file: t,
                    });
                })
                .catch(function (t) {
                  e.error = !0;
                });
            },
          },
        },
        R = B,
        P = (r(872), r(9)),
        component = Object(P.a)(
          R,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                ref: "main",
                class: ["page store-detail"],
              },
              [
                e("BuyButton", {
                  attrs: {
                    product: t.page.product,
                  },
                }),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "store-detail__content drsw",
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
                    e("Description", {
                      attrs: {
                        data: t.page.description,
                      },
                    }),
                    t._v(" "),
                    t.page.content && t.page.content.modules
                      ? e(
                          "div",
                          {
                            staticClass: "slides",
                          },
                          [
                            t._l(t.page.content.modules, function (r, n) {
                              return [
                                "fullBleed" == r._type
                                  ? e("FullBleedSlide", {
                                      key: n,
                                      attrs: {
                                        slide: r,
                                      },
                                    })
                                  : "assetCopy" == r._type
                                  ? e("AssetCopySlide", {
                                      key: n,
                                      attrs: {
                                        slide: r,
                                      },
                                    })
                                  : "semiFullBleed" == r._type
                                  ? e("SemiBleedSlide", {
                                      key: n,
                                      attrs: {
                                        slide: r,
                                      },
                                    })
                                  : "interactiveCopy" == r._type
                                  ? e("InteractiveCopy", {
                                      key: n,
                                      attrs: {
                                        index: n,
                                        modulesCount:
                                          t.page.content.modules.length - 1,
                                        slide: r,
                                        product: t.page.product,
                                      },
                                    })
                                  : "glyphs" == r._type
                                  ? e("Glyphs", {
                                      key: n,
                                      attrs: {
                                        slide: r,
                                        loaded: t.loaded,
                                        product: t.page.product,
                                      },
                                    })
                                  : "centeredText" == r._type
                                  ? e("CenteredText", {
                                      key: n,
                                      attrs: {
                                        slide: r,
                                        product: t.page.product,
                                      },
                                    })
                                  : "twinColumn" == r._type
                                  ? e("TwinColumnSlide", {
                                      key: n,
                                      attrs: {
                                        slide: r,
                                      },
                                    })
                                  : t._e(),
                              ];
                            }),
                          ],
                          2
                        )
                      : t._e(),
                    t._v(" "),
                    "typeface" == t.page.product.productType
                      ? e("FontPurchase", {
                          attrs: {
                            product: t.page.product,
                          },
                        })
                      : t._e(),
                    t._v(" "),
                    t.page.related
                      ? e("RelatedProducts", {
                          attrs: {
                            data: t.page.related,
                          },
                        })
                      : t._e(),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "b8f345d4",
          null
        );
      e.default = component.exports;
    },
  },
]);
