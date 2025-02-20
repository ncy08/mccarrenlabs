(window.webpackJsonp = window.webpackJsonp || []).push([
  [78, 4, 5, 14, 17, 19, 36, 38, 39, 41],
  {
    471: function (t, e, o) {
      "use strict";
      o.r(e);
      o(53);
      var r = o(476),
        n = {
          name: "SanityImage",
          props: {
            image: {
              type: Object,
              required: !0,
            },
            alt: {
              type: String,
              required: !1,
            },
            critical: {
              type: Boolean,
              required: !1,
              default: !1,
            },
            fade: {
              type: Boolean,
              required: !1,
              default: !0,
            },
          },
          computed: {
            inDevelopment: function () {
              return "development" === this.$config.ENV;
            },
          },
          mounted: function () {
            this.critical && this.$refs.img.setAttribute("data-critical", ""),
              this.fade && this.$refs.img.setAttribute("data-fade", "");
          },
          methods: {
            formatImageUrl: r.a,
          },
        },
        c = (o(478), o(9)),
        component = Object(c.a)(
          n,
          function () {
            var t = this;
            return (0, t._self._c)("img", {
              ref: "img",
              attrs: {
                "data-srcset": "\n            "
                  .concat(
                    t.formatImageUrl(t.image.url, {
                      width: 480,
                    }),
                    " 480w,\n            "
                  )
                  .concat(
                    t.formatImageUrl(t.image.url, {
                      width: 750,
                    }),
                    " 750w,\n            "
                  )
                  .concat(
                    t.formatImageUrl(t.image.url, {
                      width: 1200,
                    }),
                    " 1200w,\n            "
                  )
                  .concat(
                    t.formatImageUrl(t.image.url, {
                      width: 1920,
                    }),
                    " 1920w"
                  ),
                sizes:
                  "(max-width: 480px) 480px, (max-width: 750px) 750px, (max-width: 1200px) 1200px, 1920px",
                alt: "",
              },
            });
          },
          [],
          !1,
          null,
          "1083b122",
          null
        );
      e.default = component.exports;
    },
    472: function (t, e, o) {
      var content = o(479);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("98e994cc", content, !0, {
        sourceMap: !1,
      });
    },
    473: function (t, e, o) {
      var content = o(482);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("d2896c1e", content, !0, {
        sourceMap: !1,
      });
    },
    474: function (t, e, o) {
      "use strict";
      o.r(e);
      o(53), o(480), o(143);
      var r = o(477),
        n = o(4),
        c = o(475),
        l = {
          name: "VideoPlayer",
          mixins: [r.a],
          props: {
            url: {
              type: String,
              required: !0,
            },
            autoplay: {
              type: Boolean,
              required: !1,
              default: !1,
            },
            showDuration: {
              type: Boolean,
              required: !1,
              default: !1,
            },
            controls: {
              type: Boolean,
              required: !1,
              default: !0,
            },
            hoverActions: {
              type: Boolean,
              required: !1,
              default: !1,
            },
            skip: {
              type: Boolean,
              required: !1,
              default: !1,
            },
          },
          computed: {
            playCopy: function () {
              return this.isPlaying ? "Pause" : "Play";
            },
            formattedDuration: function () {
              return 0 === this.duration
                ? "00:00"
                : ""
                    .concat(this.duration.minutes, ":")
                    .concat(this.duration.seconds);
            },
            formattedCurrentTime: function () {
              return null === this.currentTime
                ? "00:00"
                : ""
                    .concat(this.currentTime.minutes, ":")
                    .concat(this.currentTime.seconds);
            },
          },
          data: function () {
            return {
              duration: 0,
              isPlaying: !1,
              videoReady: !1,
              currentTime: null,
            };
          },
          beforeDestroy: function () {
            this.$refs.video.removeEventListener(
              "loadeddata",
              this.handleLoaded
            ),
              this.$refs.video.removeEventListener(
                "timeupdate",
                this.handleTimeUpdate
              ),
              this.$refs.container.removeEventListener(
                "mouseenter",
                this.handleMouseEnter
              ),
              this.$refs.container.removeEventListener(
                "mouseleave",
                this.handleMouseLeave
              );
          },
          mounted: function () {
            this.skip && this.$refs.video.setAttribute("data-skip", ""),
              this.$refs.video.addEventListener(
                "loadeddata",
                this.handleLoaded
              ),
              this.$refs.video.addEventListener(
                "timeupdate",
                this.handleTimeUpdate
              ),
              this.hoverActions &&
                (this.$refs.container.addEventListener(
                  "mouseenter",
                  this.handleMouseEnter
                ),
                this.$refs.container.addEventListener(
                  "mouseleave",
                  this.handleMouseLeave
                ));
          },
          methods: {
            handleMouseEnter: function () {
              n.b.flags.hasTouch ||
                n.b.bounds.ww < 480 ||
                ((this.isPlaying = !0),
                this.videoReady && this.$refs.video && this.$refs.video.play());
            },
            handleMouseLeave: function () {
              n.b.flags.hasTouch ||
                n.b.bounds.ww < 480 ||
                ((this.isPlaying = !1),
                this.videoReady &&
                  this.$refs.video &&
                  this.$refs.video.pause());
            },
            handleLoaded: function () {
              (this.videoReady = !0),
                (this.duration = Object(c.b)(this.$refs.video.duration)),
                this.isPlaying && this.$refs.video.play();
            },
            handleTimeUpdate: function () {
              var time = this.$refs.video.currentTime.toFixed(2);
              this.currentTime = Object(c.b)(time);
            },
            togglePlay: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this.$refs.video.paused || this.$refs.video.ended || t
                ? ((this.$refs.video.muted = !1), this.$refs.video.play())
                : this.$refs.video.pause(),
                (this.isPlaying = !this.$refs.video.paused);
            },
            onReady: function () {
              var t = this;
              this.autoplay &&
                n.a.emit("AddToScrollAnimations", {
                  el: this.$refs.container,
                  onVisible: function () {
                    (t.isPlaying = !0),
                      t.videoReady && t.$refs.video && t.$refs.video.play();
                  },
                  onHidden: function () {
                    (t.isPlaying = !1), t.$refs.video && t.$refs.video.pause();
                  },
                  inView: !1,
                  once: !1,
                });
            },
          },
        },
        d = l,
        f = (o(481), o(9)),
        component = Object(f.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                ref: "container",
                class: [
                  "player",
                  {
                    active: t.isPlaying,
                  },
                  {
                    duration: t.showDuration,
                  },
                ],
              },
              [
                e("video", {
                  ref: "video",
                  attrs: {
                    "data-src": t.url,
                    preload: "metadata",
                    playsinline: "",
                    loop: "",
                    "data-fade": "",
                  },
                  domProps: {
                    muted: t.autoplay || t.hoverActions,
                  },
                }),
                t._v(" "),
                t.controls
                  ? e(
                      "div",
                      {
                        ref: "controls",
                        staticClass: "player__controls hidden",
                      },
                      [
                        e(
                          "button",
                          {
                            ref: "play",
                            attrs: {
                              "data-title": "Play (k)",
                              id: "play",
                              "aria-label": t.playCopy,
                            },
                            on: {
                              click: function (e) {
                                return (
                                  e.preventDefault(), t.togglePlay(!t.isPlaying)
                                );
                              },
                            },
                          },
                          [
                            t.isPlaying
                              ? e(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 8.32 12.24",
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
                                              id: "Grid",
                                            },
                                          },
                                          [
                                            e("rect", {
                                              attrs: {
                                                x: "5.94",
                                                width: "2.38",
                                                height: "12.24",
                                              },
                                            }),
                                            t._v(" "),
                                            e("rect", {
                                              attrs: {
                                                width: "2.38",
                                                height: "12.24",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                )
                              : e(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 10.6 12.24",
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
                                                  "10.6 6.12 0 0 0 12.24 10.6 6.12",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                staticClass: "b2",
                              },
                              [t._v(t._s(t.playCopy))]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                staticClass: "b2",
                              },
                              [
                                t._v(
                                  t._s(
                                    t.isPlaying
                                      ? "("
                                          .concat(t.formattedCurrentTime, "/")
                                          .concat(t.formattedDuration, ")")
                                      : "(".concat(t.formattedDuration, ")")
                                  )
                                ),
                              ]
                            ),
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
          "277a8328",
          null
        );
      e.default = component.exports;
    },
    475: function (t, e, o) {
      "use strict";
      o.d(e, "a", function () {
        return r;
      }),
        o.d(e, "c", function () {
          return n;
        }),
        o.d(e, "b", function () {
          return c;
        });
      o(53), o(183), o(67), o(11), o(25), o(45), o(49);
      var r = function (t) {
          var path = (t.composedPath && t.composedPath()) || t.path,
            e = t.target;
          if (null != path)
            return path.indexOf(window) < 0 ? path.concat(window) : path;
          if (e === window) return [window];
          return [e].concat(
            (function t(e, o) {
              o = o || [];
              var r = e.parentNode;
              return r ? t(r, o.concat(r)) : o;
            })(e),
            window
          );
        },
        n = function (text) {
          return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
        },
        c = function (t) {
          var e = new Date(1e3 * t).toISOString().substr(11, 8);
          return {
            minutes: e.substr(3, 2),
            seconds: e.substr(6, 2),
          };
        };
    },
    476: function (t, e, o) {
      "use strict";
      o.d(e, "a", function () {
        return r;
      });
      o(53);
      var r = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = arguments.length > 1 ? arguments[1] : void 0,
          o = e.width,
          r = (e.height, "".concat(t, "?"));
        return o && (r = "".concat(r, "&w=").concat(o)), r;
      };
    },
    477: function (t, e, o) {
      "use strict";
      e.a = {
        computed: {
          domLoaded: function () {
            return this.$store.getters["preloader/isLoaded"];
          },
          navigating: function () {
            return this.$store.getters["nav/isNavigating"];
          },
        },
        watch: {
          domLoaded: function (t) {
            t && !this.navigating && this.ready();
          },
          navigating: function (t) {
            !t && this.domLoaded && this.ready();
          },
        },
        mounted: function () {
          var t = this;
          this.domLoaded &&
            !this.navigating &&
            this.$nextTick(function () {
              t.ready();
            });
        },
        methods: {
          ready: function () {
            var t = this;
            this.$nextTick(function () {
              t.onReady();
            });
          },
          onReady: function () {},
        },
      };
    },
    478: function (t, e, o) {
      "use strict";
      o(472);
    },
    479: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([t.i, "img[data-v-1083b122]{will-change:opacity}", ""]),
        (r.locals = {}),
        (t.exports = r);
    },
    481: function (t, e, o) {
      "use strict";
      o(473);
    },
    482: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".player[data-v-277a8328]{position:relative;width:100%;height:100%;overflow:hidden}.player.abs[data-v-277a8328]{position:absolute;top:0;left:0}.player:not(.duration) .player__controls span[data-v-277a8328]:last-child{display:none}.player video[data-v-277a8328]{position:absolute;top:50%;left:50%;transform:translate3d(-50%, -50%, 0);width:101%;height:101%;object-fit:cover;z-index:0}.player__controls[data-v-277a8328]{position:absolute;z-index:1}.player__controls button[data-v-277a8328]{display:inline-flex;align-items:center}.player__controls button span[data-v-277a8328]{color:#000;display:inline-block;text-transform:uppercase;line-height:.85}.player__controls button svg[data-v-277a8328]{display:inline-block}@media only screen and (min-width: 480px){.player__controls[data-v-277a8328]{top:50%;left:50%;transform:translate3d(-50%, -50%, 0)}.player button span[data-v-277a8328]:last-child{margin-left:4rem}.player button svg[data-v-277a8328]{position:relative;width:12rem;height:12rem}.player button svg[data-v-277a8328]:first-child{margin-right:3rem}.player button svg[data-v-277a8328]:nth-child(2){top:1rem;margin-right:2rem}}@media only screen and (max-width: 479px){.player__controls[data-v-277a8328]{bottom:15px;left:var(--margin)}.player button span[data-v-277a8328]:last-child{margin-left:4px}.player button svg[data-v-277a8328]{width:12px;height:12px}.player button svg[data-v-277a8328]:first-child{top:1px;margin-right:3px}.player button svg[data-v-277a8328]:nth-child(2){top:1px;margin-right:2px}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    483: function (t, e, o) {
      var content = o(489);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("a30f11f2", content, !0, {
        sourceMap: !1,
      });
    },
    484: function (t, e, o) {
      var content = o(492);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("46152030", content, !0, {
        sourceMap: !1,
      });
    },
    485: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = o(1),
        n = (o(22), o(13)),
        c = o(182),
        l = (o(4), o(141)),
        d = o(475),
        f = {
          name: "ExternalLinkSerializer",
          components: {
            SanityImageNew: o(471).default,
          },
          props: {
            children: {
              type: String,
            },
            href: {
              type: String,
            },
            hoverAsset: {
              type: Array,
              required: !1,
            },
          },
          data: function () {
            return {
              active: !1,
              loaded: !1,
            };
          },
          methods: {
            slugify: d.c,
            getAspect: l.b,
            handleTouch: function () {
              (this.active = !this.active),
                this.active ? this.loadAsset() : this.handleLeave();
            },
            handleEnter: function () {
              (this.active = !0), this.loadAsset();
            },
            loadAsset: function () {
              this.loaded
                ? this.$refs.video && this.$refs.video.$refs.video.play()
                : !this.loaded && this.loadImage();
            },
            handleLeave: function () {
              (this.active = !1),
                this.$refs.video && this.$refs.video.$refs.video.pause();
            },
            loadImage: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var image, video;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t.loaded && (t.$refs.image || t.$refs.video)) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (!t.$refs.image) {
                            e.next = 13;
                            break;
                          }
                          if (
                            !(
                              t.$refs.image.$el.hasAttribute("data-loading") ||
                              t.$refs.image.$el.hasAttribute("data-loaded")
                            )
                          ) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          return (
                            (t.loaded = !0),
                            (e.next = 9),
                            Object(c.a)(t.$refs.image.$el)
                          );
                        case 9:
                          (image = e.sent),
                            n.a.to(image, {
                              autoAlpha: 1,
                              duration: 0.5,
                              ease: "power2.inOut",
                            }),
                            (e.next = 24);
                          break;
                        case 13:
                          if (!t.$refs.video) {
                            e.next = 24;
                            break;
                          }
                          if (
                            ((video = t.$refs.video.$refs.video),
                            !(
                              video.hasAttribute("data-loading") ||
                              video.hasAttribute("data-loaded")
                            ))
                          ) {
                            e.next = 18;
                            break;
                          }
                          return e.abrupt("return");
                        case 18:
                          return (
                            (t.loaded = !0), (e.next = 21), Object(c.a)(video)
                          );
                        case 21:
                          (video = e.sent),
                            n.a.to(video, {
                              autoAlpha: 1,
                              duration: 0.5,
                              ease: "power2.inOut",
                            }),
                            t.$refs.video.$refs.video.play();
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        },
        _ = (o(491), o(9)),
        component = Object(_.a)(
          f,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "a",
              {
                staticClass: "decoration active opaque green",
                style:
                  t.hoverAsset &&
                  t.hoverAsset[0] &&
                  "--color: ".concat(t.hoverAsset[0].hoverColor),
                attrs: {
                  href: t.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                on: {
                  mouseenter: t.handleEnter,
                  touchstart: t.handleTouch,
                  mouseleave: t.handleLeave,
                },
              },
              [
                e("client-only", [
                  t.hoverAsset && t.hoverAsset[0]
                    ? e(
                        "div",
                        {
                          ref: "image_container",
                          class: [
                            "hover-asset",
                            {
                              active: t.active,
                            },
                          ],
                        },
                        [
                          "imageAsset" == t.hoverAsset[0]._type
                            ? e(
                                "div",
                                {
                                  staticClass: "hover-asset__container",
                                  style: "--ratio: ".concat(
                                    t.getAspect(t.hoverAsset[0].image),
                                    "%;"
                                  ),
                                },
                                [
                                  e("SanityImageNew", {
                                    ref: "image",
                                    staticClass: "abs full cover",
                                    attrs: {
                                      image: t.hoverAsset[0].image,
                                      "data-fade": "",
                                      "data-skip": "",
                                    },
                                  }),
                                ],
                                1
                              )
                            : "videoAsset" == t.hoverAsset[0]._type
                            ? e(
                                "div",
                                {
                                  staticClass: "hover-asset__container",
                                  style: "--ratio: ".concat(
                                    t.getAspect(
                                      t.hoverAsset[0].video.dimensions
                                    ),
                                    "%;"
                                  ),
                                },
                                [
                                  e("VideoPlayer", {
                                    ref: "video",
                                    staticClass: "abs",
                                    attrs: {
                                      url: t.hoverAsset[0].video.url,
                                      autoplay: !1,
                                      showDuration: !0,
                                      controls: !1,
                                      hoverActions: !0,
                                      skip: !0,
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ]
                      )
                    : t._e(),
                ]),
                t._v(" "),
                t._t("default"),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "9040327a",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        VideoPlayer: o(474).default,
      });
    },
    486: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = {
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
        n = (o(488), o(9)),
        component = Object(n.a)(
          r,
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
    487: function (t, e, o) {
      var content = o(638);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("5cc69aa0", content, !0, {
        sourceMap: !1,
      });
    },
    488: function (t, e, o) {
      "use strict";
      o(483);
    },
    489: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "a[data-v-ce6c94de]{text-decoration:none}@media only screen and (min-width: 480px){a .icon[data-v-ce6c94de]{display:inline-block;position:relative;width:10rem;margin-left:2rem}}@media only screen and (max-width: 479px){a .icon[data-v-ce6c94de]{display:inline-block;position:relative;width:10px;margin-left:2px}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    490: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = {
          name: "IndentSerializer",
          props: {
            children: {
              type: String,
            },
            href: {
              type: String,
            },
          },
        },
        n = o(9),
        component = Object(n.a)(
          r,
          function () {
            return (0, this._self._c)(
              "span",
              {
                staticClass: "indent",
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
    491: function (t, e, o) {
      "use strict";
      o(484);
    },
    492: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "a[data-v-9040327a]{display:inline;position:relative;transition:all .5s ease}a pre[data-v-9040327a]{display:inline;font-weight:inherit;font-family:inherit;font-size:inherit;line-height:inherit;letter-spacing:inherit;white-space:normal}a[data-v-9040327a]:hover{z-index:1;color:var(--color);text-decoration-color:var(--color) !important}a .hover-asset[data-v-9040327a]{display:inline;position:absolute;top:50%;left:50%;transform:translate3d(-50%, -47%, 0);transition:opacity 500ms ease;opacity:0;z-index:-1}a .hover-asset__container[data-v-9040327a]{width:100%;padding-top:var(--ratio);position:relative}a .hover-asset.active[data-v-9040327a]{opacity:1}@media only screen and (min-width: 480px){a .hover-asset[data-v-9040327a]{width:240rem}}@media only screen and (max-width: 479px){a .hover-asset[data-v-9040327a]{width:240rem}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
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
    634: function (t, e, o) {
      var content = o(654);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("23d700c2", content, !0, {
        sourceMap: !1,
      });
    },
    635: function (t, e, o) {
      var content = o(656);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("cd8ca9f8", content, !0, {
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
        f = o(4),
        _ = o(698),
        m = o.n(_),
        h = o(184),
        v = o(115),
        y = o(490),
        w = o(647),
        x = o(485),
        k = o(185),
        C = {
          name: "Footer",
          mixins: [h.validationMixin],
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
                  indent: y.default,
                  link: x.default,
                  hoverAsset: w.default,
                },
              },
            };
          },
          validations: {
            form: {
              email: {
                required: v.required,
                email: v.email,
              },
            },
          },
          beforeDestroy: function () {
            f.a.off("tick", this.tick),
              f.a.off("resize", this.resize),
              this.$store.dispatch("footer/setHovering", !1);
          },
          mounted: function () {
            (this.cities = this.data.marquee.marqueeCities.filter(function (t) {
              return m.a.lookupViaCity(t.cityName).length > 0;
            })),
              this.calculateTimezones(),
              this.resize(),
              f.a.on("tick", this.tick),
              f.a.on("resize", this.resize);
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
                (e ? r >= f.b.bounds.wh : r < f.b.bounds.wh) &&
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
              this.contactBounds && f.b.bounds.ww >= 480
                ? window.pageYOffset >=
                  this.contactBounds.bottom -
                    this.contactBounds.height -
                    f.b.bounds.wh
                  ? this.inView || ((this.inView = !0), this.marqueeTl.play())
                  : this.inView && ((this.inView = !1), this.marqueeTl.pause())
                : this.contactBounds &&
                  f.b.bounds.ww < 480 &&
                  (window.pageYOffset >= this.contactBounds.top - f.b.bounds.wh
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
        j = (o(665), o(9)),
        component = Object(j.a)(
          C,
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
    637: function (t, e, o) {
      "use strict";
      o(487);
    },
    638: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".greyed-out{color:#a5a5a5}.greyed-out svg polygon{fill:#a5a5a5 !important}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
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
    641: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = {
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
        n = (o(637), o(9)),
        component = Object(n.a)(
          r,
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
    647: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = o(1),
        n = (o(22), o(13)),
        c = o(182),
        l = (o(4), o(141)),
        d = o(475),
        f = {
          name: "HoverAssetSerializer",
          components: {
            SanityImageNew: o(471).default,
          },
          props: {
            children: {
              type: String,
            },
            hoverAsset: {
              type: Array,
              required: !1,
            },
          },
          data: function () {
            return {
              active: !1,
              loaded: !1,
            };
          },
          methods: {
            slugify: d.c,
            getAspect: l.b,
            handleTouch: function () {
              (this.active = !this.active),
                this.active ? this.loadAsset() : this.handleLeave();
            },
            handleEnter: function () {
              (this.active = !0), this.loadAsset();
            },
            loadAsset: function () {
              this.loaded
                ? this.$refs.video && this.$refs.video.$refs.video.play()
                : !this.loaded && this.loadImage();
            },
            handleLeave: function () {
              (this.active = !1),
                this.$refs.video && this.$refs.video.$refs.video.pause();
            },
            loadImage: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var image, video;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t.loaded && (t.$refs.image || t.$refs.video)) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (!t.$refs.image) {
                            e.next = 13;
                            break;
                          }
                          if (
                            !(
                              t.$refs.image.$el.hasAttribute("data-loading") ||
                              t.$refs.image.$el.hasAttribute("data-loaded")
                            )
                          ) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          return (
                            (t.loaded = !0),
                            (e.next = 9),
                            Object(c.a)(t.$refs.image.$el)
                          );
                        case 9:
                          (image = e.sent),
                            n.a.to(image, {
                              autoAlpha: 1,
                              duration: 0.5,
                              ease: "power2.inOut",
                            }),
                            (e.next = 24);
                          break;
                        case 13:
                          if (!t.$refs.video) {
                            e.next = 24;
                            break;
                          }
                          if (
                            ((video = t.$refs.video.$refs.video),
                            !(
                              video.hasAttribute("data-loading") ||
                              video.hasAttribute("data-loaded")
                            ))
                          ) {
                            e.next = 18;
                            break;
                          }
                          return e.abrupt("return");
                        case 18:
                          return (
                            (t.loaded = !0), (e.next = 21), Object(c.a)(video)
                          );
                        case 21:
                          (video = e.sent),
                            n.a.to(video, {
                              autoAlpha: 1,
                              duration: 0.5,
                              ease: "power2.inOut",
                            }),
                            t.$refs.video.$refs.video.play();
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        },
        _ = (o(655), o(9)),
        component = Object(_.a)(
          f,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "span",
              {
                staticClass: "decoration active opaque green",
                style:
                  t.hoverAsset &&
                  t.hoverAsset[0] &&
                  "--color: ".concat(t.hoverAsset[0].hoverColor),
                on: {
                  mouseenter: t.handleEnter,
                  touchstart: t.handleTouch,
                  mouseleave: t.handleLeave,
                },
              },
              [
                e("client-only", [
                  t.hoverAsset && t.hoverAsset[0]
                    ? e(
                        "div",
                        {
                          ref: "image_container",
                          class: [
                            "hover-asset",
                            {
                              active: t.active,
                            },
                          ],
                        },
                        [
                          "imageAsset" == t.hoverAsset[0]._type
                            ? e(
                                "div",
                                {
                                  staticClass: "hover-asset__container",
                                  style: "--ratio: ".concat(
                                    t.getAspect(t.hoverAsset[0].image),
                                    "%;"
                                  ),
                                },
                                [
                                  e("SanityImageNew", {
                                    ref: "image",
                                    staticClass: "abs full cover",
                                    attrs: {
                                      image: t.hoverAsset[0].image,
                                      "data-fade": "",
                                      "data-skip": "",
                                    },
                                  }),
                                ],
                                1
                              )
                            : "videoAsset" == t.hoverAsset[0]._type
                            ? e(
                                "div",
                                {
                                  staticClass: "hover-asset__container",
                                  style: "--ratio: ".concat(
                                    t.getAspect(
                                      t.hoverAsset[0].video.dimensions
                                    ),
                                    "%;"
                                  ),
                                },
                                [
                                  e("VideoPlayer", {
                                    ref: "video",
                                    staticClass: "abs",
                                    attrs: {
                                      url: t.hoverAsset[0].video.url,
                                      autoplay: !1,
                                      showDuration: !0,
                                      controls: !1,
                                      hoverActions: !0,
                                      skip: !0,
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ]
                      )
                    : t._e(),
                ]),
                t._v(" "),
                t._t("default"),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "df620228",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        VideoPlayer: o(474).default,
      });
    },
    648: function (t, e, o) {
      "use strict";
      o.r(e);
      o(53), o(70), o(142);
      var r = o(141),
        n = o(641),
        c = o(485),
        l = o(486),
        d = {
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
                  grey: n.default,
                  link: c.default,
                  styledLink: l.default,
                },
              },
            };
          },
          methods: {
            getAspect: function (t) {
              var e = t.split("x").map(function (t) {
                return Number(t);
              });
              return Object(r.d)((e[1] / e[0]) * 100);
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
        f = o(9),
        component = Object(f.a)(
          d,
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
        SanityImage: o(471).default,
        VideoPlayer: o(474).default,
      });
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
    652: function (t, e, o) {
      "use strict";
      o(50), o(69), o(53);
      e.a = {
        head: function () {
          return {
            title:
              this.page && this.page.metadata && this.page.metadata.title
                ? this.page.metadata.title
                : "".concat(this.$config.SITE_NAME),
            meta: [
              {
                hid: "description",
                name: "description",
                content:
                  this.page &&
                  this.page.metadata &&
                  this.page.metadata.description
                    ? this.page.metadata.description
                    : "".concat(this.$config.SITE_NAME),
              },
              {
                hid: "og:title",
                property: "og:title",
                content:
                  this.page && this.page.metadata && this.page.metadata.title
                    ? this.page.metadata.title
                    : "".concat(this.$config.SITE_NAME),
              },
              {
                hid: "og:url",
                property: "og:url",
                content: ""
                  .concat(this.$config.BASE_URL)
                  .concat(this.$route.path),
              },
              {
                hid: "og:type",
                property: "og:type",
                content: "article",
              },
              {
                hid: "og:site_name",
                property: "og:site_name",
                content: "".concat(this.$config.SITE_NAME),
              },
              {
                hid: "og:description",
                property: "og:description",
                content:
                  this.page &&
                  this.page.metadata &&
                  this.page.metadata.description
                    ? this.page.metadata.description
                    : "".concat(this.$config.SITE_NAME),
              },
              {
                hid: "og:image:width",
                property: "og:image:width",
                content:
                  this.page && this.page.metadata && this.page.metadata.image
                    ? this.page.metadata.image.width
                    : "1200",
              },
              {
                hid: "og:image:height",
                property: "og:image:height",
                content:
                  this.page && this.page.metadata && this.page.metadata.image
                    ? this.page.metadata.image.height
                    : "628",
              },
              {
                hid: "og:image",
                property: "og:image",
                content:
                  this.page && this.page.metadata && this.page.metadata.image
                    ? this.page.metadata.image.url
                    : "".concat(this.$config.BASE_URL, "/img/default.jpg"),
              },
              {
                hid: "twitter:card",
                property: "twitter:card",
                content: "summary_large_image",
              },
              {
                hid: "twitter:url",
                property: "twitter:url",
                content: ""
                  .concat(this.$config.BASE_URL)
                  .concat(this.$route.path),
              },
              {
                hid: "twitter:title",
                property: "twitter:title",
                content:
                  this.page && this.page.metadata && this.page.metadata.title
                    ? this.page.metadata.title
                    : "".concat(this.$config.SITE_NAME),
              },
              {
                hid: "twitter:description",
                property: "twitter:description",
                content:
                  this.page &&
                  this.page.metadata &&
                  this.page.metadata.description
                    ? this.page.metadata.description
                    : "".concat(this.$config.SITE_NAME),
              },
              {
                hid: "twitter:image",
                property: "twitter:image",
                content: "".concat(this.$config.BASE_URL, "/img/twitter.jpg"),
              },
            ],
          };
        },
      };
    },
    653: function (t, e, o) {
      "use strict";
      o(634);
    },
    654: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".carousel{position:relative;width:100%}.carousel__container{display:flex}.carousel .asset{transform:translate3d(0, 0, 0);margin-right:var(--gutter)}.carousel .asset__container{width:100%;padding-top:var(--ratio);position:relative;background:#b7e3b6}.carousel .asset__copy p{font-size:var(--b3);line-height:var(--b3-line_height);letter-spacing:var(--b3-letter_spacing)}@media only screen and (min-width: 480px){.carousel .asset.size-16x9{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.4166666667 + var(--gutter)*4)}.carousel .asset.size-6x4{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.4166666667 + var(--gutter)*4)}.carousel .asset.size-5x7{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2)}.carousel .asset.size-4x3{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2)}.carousel .asset.size-1x1{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2)}.carousel .asset__copy{margin-top:7rem}.carousel .asset a div{width:10rem;margin-left:0rem}}@media only screen and (max-width: 479px){.carousel .asset.size-16x9{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.carousel .asset.size-6x4{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.carousel .asset.size-5x7{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.carousel .asset.size-4x3{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.carousel .asset.size-1x1{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.carousel .asset__copy{margin-top:7px}.carousel .asset a div{display:inline-block;width:7px;margin-left:0px}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    655: function (t, e, o) {
      "use strict";
      o(635);
    },
    656: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "span[data-v-df620228]{display:inline-block;position:relative;transition:all .5s ease}span[data-v-df620228]:hover{z-index:1;color:var(--color);text-decoration-color:var(--color) !important}span .hover-asset[data-v-df620228]{display:inline;position:absolute;top:50%;left:50%;transform:translate3d(-50%, -47%, 0);transition:opacity 500ms ease;pointer-events:none;opacity:0;z-index:-1}span .hover-asset__container[data-v-df620228]{width:100%;padding-top:var(--ratio);position:relative}span .hover-asset.active[data-v-df620228]{opacity:1}@media only screen and (min-width: 480px){span .hover-asset[data-v-df620228]{width:240rem}}@media only screen and (max-width: 479px){span .hover-asset[data-v-df620228]{width:240rem}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    660: function (t, e, o) {
      "use strict";
      var r = o(1),
        n = (o(22), o(13)),
        c = o(94),
        l = o(59),
        d = o(60),
        f =
          (o(53),
          o(58),
          o(11),
          o(272),
          o(42),
          o(273),
          o(274),
          o(275),
          o(276),
          o(277),
          o(278),
          o(279),
          o(280),
          o(281),
          o(282),
          o(283),
          o(284),
          o(285),
          o(286),
          o(287),
          o(288),
          o(27),
          o(43),
          o(182)),
        _ = o(4),
        m = (function () {
          return Object(d.a)(
            function t() {
              var e = this,
                o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              Object(l.a)(this, t),
                (this.getElems = function () {
                  e.elems = [];
                  var t = [].concat(
                    Object(c.a)(
                      document.querySelectorAll(
                        "[data-src]:not([data-loading]):not([data-skip])"
                      )
                    ),
                    Object(c.a)(
                      document.querySelectorAll(
                        "[data-srcset]:not([data-loading]):not([data-skip])"
                      )
                    )
                  );
                  Array.from(new Set(t)).forEach(function (t) {
                    t.setAttribute("data-load-set", ""), e.elems.push(t);
                  });
                }),
                (this.getCache = function () {
                  (e.cache = []),
                    e.elems.forEach(function (t, o) {
                      var r = t.getBoundingClientRect().top,
                        n = {
                          el: t,
                          fade: t.hasAttribute("data-fade"),
                          isIntersected: !1,
                          elems: null,
                          inView: r <= e.vars.height,
                        };
                      e.cache.push(n);
                    });
                }),
                (this.renew = function () {
                  e.removeElements(), e.addNewElements();
                }),
                (this.createObserver = function () {
                  e.hasIntersectionObserver &&
                    (e.observer = new IntersectionObserver(e.handler, {
                      root: null,
                      rootMargin: "0px 0px 0px 0px",
                      threshold: 0,
                    }));
                }),
                (this.start = function () {
                  e.cache.forEach(function (t) {
                    t.inView, t.tl;
                    var o = t.el;
                    e.hasIntersectionObserver
                      ? e.observer.observe(t.el)
                      : Object(f.a)(o);
                  });
                }),
                (this.stillObserving = function () {
                  return e.cache.some(function (t) {
                    return !t.isIntersected;
                  });
                }),
                (this.handler = function (t) {
                  t.forEach(function (t) {
                    if (t.isIntersecting) {
                      var i = e.elems.indexOf(t.target),
                        o = e.cache[i],
                        c = o.el,
                        l = o.fade;
                      (o.isIntersected = !0),
                        Object(f.a)(c).then(
                          (function () {
                            var t = Object(r.a)(
                              regeneratorRuntime.mark(function t(e) {
                                return regeneratorRuntime.wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (((t.t0 = l), !t.t0)) {
                                          t.next = 4;
                                          break;
                                        }
                                        return (
                                          (t.next = 4),
                                          n.a.to(e, {
                                            autoAlpha: 1,
                                            duration: 0.5,
                                            ease: "power2.inOut",
                                          })
                                        );
                                      case 4:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        ),
                        e.stillObserving()
                          ? e.observer.unobserve(t.target)
                          : e.observer.disconnect();
                    }
                  });
                });
              var d = _.b.bounds,
                m = d.ww,
                h = d.wh;
              (this.elems = []),
                (this.cache = null),
                (this.observer = null),
                (this.vars = {
                  width: m,
                  height: h,
                }),
                (this.hasIntersectionObserver =
                  "IntersectionObserver" in window),
                (this.options = {
                  direction: o.direction || "vertical",
                }),
                this.init();
            },
            [
              {
                key: "init",
                value: function () {
                  this.getElems(),
                    this.getCache(),
                    this.createObserver(),
                    this.start();
                },
              },
            ]
          );
        })(),
        h =
          (o(54),
          o(67),
          (function () {
            return Object(d.a)(
              function t() {
                var e = this,
                  o =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                Object(l.a)(this, t),
                  (this.add = function (t) {
                    var o = t.el,
                      r = t.tl,
                      n = void 0 === r ? null : r,
                      c = t.isIntersected,
                      l = void 0 !== c && c,
                      d = t.onVisible,
                      f = void 0 === d ? null : d,
                      _ = t.onHidden,
                      m = void 0 === _ ? null : _,
                      h = t.inView,
                      v = t.once;
                    e.funcElems.push(o),
                      e.funcCache.push({
                        el: o,
                        tl: n,
                        onVisible: f,
                        onHidden: m,
                        isIntersected: l,
                        inView: h,
                        once: v,
                      }),
                      e.observer.observe(o);
                  }),
                  (this.destroy = function () {
                    _.a.off("AddToScrollAnimations", e.add),
                      e.observer && e.observer.disconnect(),
                      (e.observer = null);
                  }),
                  (this.run = function () {
                    e.cache.forEach(function (t) {
                      e.setAnimation(t);
                    });
                  }),
                  (this.start = function () {
                    e.cache.forEach(function (t) {
                      var o = t.inView,
                        r = t.tl;
                      e.hasIntersectionObserver
                        ? o
                          ? r.play()
                          : e.observer.observe(t.el)
                        : r.play();
                    });
                  }),
                  (this.stillObserving = function () {
                    return []
                      .concat(Object(c.a)(e.cache), Object(c.a)(e.funcCache))
                      .some(function (t) {
                        return !t.isIntersected && t.isIntersected && !t.once;
                      });
                  }),
                  (this.handler = function (t) {
                    t.forEach(function (t) {
                      var o = t.target,
                        r = t.isIntersecting,
                        n = t.intersectionRatio,
                        c = e.elems.indexOf(o),
                        l = e.funcElems.indexOf(o);
                      if (c > -1 && r) {
                        var d = e.cache[c];
                        (d.isIntersected = !0),
                          d.tl.play(),
                          e.observer.unobserve(o);
                      } else if (l > -1) {
                        var f = e.funcCache[l];
                        r && !f.isIntersected
                          ? ((f.isIntersected = !0),
                            e.funcCache[l].tl && e.funcCache[l].tl.play(),
                            e.funcCache[l].onVisible &&
                              e.funcCache[l].onVisible(n),
                            e.funcCache[l].once && e.observer.unobserve(o))
                          : f.isIntersected &&
                            (!e.funcCache[l].once &&
                              f.isIntersected &&
                              (e.funcCache[l].tl && e.funcCache[l].tl.pause(),
                              e.funcCache[l].onHidden &&
                                e.funcCache[l].onHidden()),
                            (f.isIntersected = !1));
                      }
                      e.stillObserving() && e.observer.disconnect();
                    });
                  }),
                  (this.getCache = function () {
                    (e.cache = []),
                      e.elems.forEach(function (t, o) {
                        var r = t.getBoundingClientRect().top,
                          n = {
                            el: t,
                            animation: t.dataset.animate,
                            isIntersected: !1,
                            elems: null,
                            tl: null,
                            inView: r <= e.vars.height,
                            once: !1,
                          };
                        e.cache.push(n);
                      });
                  }),
                  (this.queryDirectChildren = function (t, e) {
                    var o = t.querySelectorAll(e);
                    return [].slice.call(o).filter(function (o) {
                      return o.parentNode.closest(e) === t.closest(e);
                    });
                  }),
                  (this.createObserver = function () {
                    e.hasIntersectionObserver &&
                      (e.observer = new IntersectionObserver(e.handler, {
                        root: null,
                        rootMargin: (e.options.direction, "0px 0px 0px 0px"),
                        threshold: [0.5],
                      }));
                  }),
                  (this.getElems = function () {
                    (e.elems = []),
                      Object(c.a)(
                        document.querySelectorAll("[data-animate]")
                      ).forEach(function (t) {
                        if ("vertical" == e.options.direction) {
                          var o = t.getBoundingClientRect(),
                            r = o.top,
                            n = o.left;
                          (r >= e.vars.height || n >= e.vars.width) &&
                            e.elems.push(t);
                        } else {
                          t.getBoundingClientRect().left >= e.vars.width &&
                            e.elems.push(t);
                        }
                      });
                  }),
                  (this.setAnimation = function (t) {
                    var e = t.el;
                    t.animation, t.inView;
                    (t.tl = n.a.timeline({
                      paused: !0,
                      immediate: !0,
                    })),
                      t.tl.fromTo(
                        e,
                        {
                          opacity: 0,
                        },
                        {
                          opacity: 1,
                          duration: 1,
                          ease: "Power2.easeOut",
                        }
                      ),
                      t.tl.progress(1).progress(0);
                  }),
                  (this.elems = []),
                  (this.funcElems = []),
                  (this.cache = []),
                  (this.funcCache = []),
                  (this.observer = null),
                  (this.vars = {
                    width: _.b.bounds.ww,
                    height: _.b.bounds.wh,
                  }),
                  (this.hasIntersectionObserver =
                    "IntersectionObserver" in window),
                  (this.options = {
                    direction: o.direction || "vertical",
                  }),
                  _.a.on("AddToScrollAnimations", this.add),
                  this.init();
              },
              [
                {
                  key: "init",
                  value: function () {
                    this.getElems(),
                      this.getCache(),
                      this.createObserver(),
                      this.run();
                  },
                },
              ]
            );
          })());
      e.a = function () {
        return {
          computed: {
            domLoaded: function () {
              return this.$store.getters["preloader/isLoaded"];
            },
            navigating: function () {
              return this.$store.getters["nav/isNavigating"];
            },
          },
          watch: {
            domLoaded: function (t) {
              t && !this.navigating && this.init();
            },
            navigating: function (t) {
              !t && this.domLoaded && this.init();
            },
          },
          beforeDestroy: function () {
            this.ScrollAnimations && this.ScrollAnimations.destroy();
          },
          mounted: function () {
            var t = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          n.a.delayedCall(0.01, function () {
                            window.scrollTo(0, 0),
                              t.domLoaded &&
                                !t.navigating &&
                                t.$nextTick(function () {
                                  t.init();
                                });
                          })
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          methods: {
            init: function () {
              (this.LazyLoading = new m()), (this.ScrollAnimations = new h());
            },
          },
        };
      };
    },
    661: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = o(669),
        n = o(648),
        c = {
          name: "Carousel",
          props: {
            data: {
              type: Object,
              required: !0,
            },
          },
          components: {
            CarouselItem: n.default,
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
            this.embla = Object(r.a)(this.$refs.container, {
              loop: !1,
              dragFree: !0,
              align: "start",
              containScroll: "trimSnaps",
            });
          },
        },
        l = (o(653), o(9)),
        component = Object(l.a)(
          c,
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
                  t._l(t.data.carousel.assets, function (o, r) {
                    return e("CarouselItem", {
                      key: r,
                      attrs: {
                        asset: o,
                        index: r,
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
    696: function (t, e, o) {
      var content = o(777);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("3aac4780", content, !0, {
        sourceMap: !1,
      });
    },
    697: function (t, e, o) {
      var content = o(779);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("b617a190", content, !0, {
        sourceMap: !1,
      });
    },
    753: function (t, e, o) {
      "use strict";
      o.r(e);
      o(20);
      var r = o(1),
        n = (o(22), o(13)),
        c = o(182),
        l = o(4),
        d = o(141),
        f = o(475),
        _ = {
          name: "ListItem",
          components: {
            SanityImageNew: o(471).default,
          },
          props: {
            item: {
              type: Object,
              required: !0,
            },
          },
          computed: {
            hoverType: function () {
              return this.item.asset &&
                this.item.asset.hasOwnProperty("positioning") &&
                this.item.asset.positioning
                ? this.item.asset.positioning
                : "";
            },
          },
          data: function () {
            return {
              bounds: null,
              active: !1,
              loaded: !1,
            };
          },
          beforeDestroy: function () {
            l.a.off("resize", this.resize);
          },
          mounted: function () {
            l.a.on("resize", this.resize);
          },
          methods: {
            slugify: f.c,
            getAspect: d.b,
            resize: function () {
              this.bounds = null;
            },
            handleEnter: function () {
              !this.bounds &&
                this.$refs.image &&
                "centered" == this.hoverType &&
                ((this.bounds = this.$refs.container.getBoundingClientRect()),
                this.$refs.image_container.style.setProperty(
                  "--spacing",
                  "".concat(-1 * this.bounds.left, "px")
                )),
                (this.active = !0),
                this.loaded
                  ? this.$refs.video && this.$refs.video.$refs.video.play()
                  : !this.loaded && this.loadImage();
            },
            handleLeave: function () {
              (this.active = !1),
                this.$refs.video && this.$refs.video.$refs.video.pause();
            },
            loadImage: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var image, video;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !(
                              t.loaded ||
                              (!t.$refs.image && !t.$refs.video) ||
                              l.b.bounds.ww < 480
                            )
                          ) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (!t.$refs.image) {
                            e.next = 13;
                            break;
                          }
                          if (
                            !(
                              t.$refs.image.$el.hasAttribute("data-loading") ||
                              t.$refs.image.$el.hasAttribute("data-loaded")
                            )
                          ) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          return (
                            (t.loaded = !0),
                            (e.next = 9),
                            Object(c.a)(t.$refs.image.$el)
                          );
                        case 9:
                          (image = e.sent),
                            n.a.to(image, {
                              autoAlpha: 1,
                              duration: 0.5,
                              ease: "power2.inOut",
                            }),
                            (e.next = 24);
                          break;
                        case 13:
                          if (!t.$refs.video) {
                            e.next = 24;
                            break;
                          }
                          if (
                            ((video = t.$refs.video.$refs.video),
                            !(
                              video.hasAttribute("data-loading") ||
                              video.hasAttribute("data-loaded")
                            ))
                          ) {
                            e.next = 18;
                            break;
                          }
                          return e.abrupt("return");
                        case 18:
                          return (
                            (t.loaded = !0), (e.next = 21), Object(c.a)(video)
                          );
                        case 21:
                          (video = e.sent),
                            n.a.to(video, {
                              autoAlpha: 1,
                              duration: 0.5,
                              ease: "power2.inOut",
                            }),
                            t.$refs.video.$refs.video.play();
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        },
        m = o(9),
        component = Object(m.a)(
          _,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "li",
              {
                ref: "container",
                class: [
                  "category-lists__list__list__item",
                  t.item.asset &&
                    t.item.asset.hasOwnProperty("positioning") &&
                    t.item.asset.positioning,
                ],
              },
              [
                e(
                  "div",
                  {
                    staticClass: "category-lists__list__list__item__copy",
                    style:
                      t.item.asset &&
                      t.item.asset.hasOwnProperty("hoverColor") &&
                      "--color: ".concat(t.item.asset.hoverColor),
                    on: {
                      mouseenter: t.handleEnter,
                      mouseleave: t.handleLeave,
                    },
                  },
                  [
                    "copy" == t.item._type
                      ? e(
                          "p",
                          {
                            class: [
                              "b2",
                              {
                                "decoration active opaque darkgreen":
                                  t.item.asset,
                              },
                            ],
                          },
                          [
                            t._v(
                              "\n            " +
                                t._s(t.item.title) +
                                "\n        "
                            ),
                          ]
                        )
                      : "serviceItem" == t.item._type
                      ? e(
                          "nuxt-link",
                          {
                            class: ["b2 decoration active opaque darkgreen"],
                            attrs: {
                              to: {
                                name: "work",
                                query: {
                                  filter: "".concat(t.slugify(t.item.name)),
                                },
                              },
                            },
                          },
                          [
                            t._v(
                              "\n            " +
                                t._s(t.item.name) +
                                "\n        "
                            ),
                          ]
                        )
                      : t._e(),
                    t._v(" "),
                    t.item.asset
                      ? e(
                          "div",
                          {
                            ref: "image_container",
                            class: [
                              "hover-asset",
                              {
                                active: t.active,
                              },
                            ],
                          },
                          [
                            "imageAsset" == t.item.asset._type
                              ? e(
                                  "div",
                                  {
                                    staticClass: "hover-asset__container",
                                    style: "--ratio: ".concat(
                                      t.getAspect(t.item.asset.image),
                                      "%;"
                                    ),
                                  },
                                  [
                                    e("SanityImageNew", {
                                      ref: "image",
                                      staticClass: "abs full cover",
                                      attrs: {
                                        image: t.item.asset.image,
                                        "data-fade": "",
                                        "data-skip": "",
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : "videoAsset" == t.item.asset._type
                              ? e(
                                  "div",
                                  {
                                    staticClass: "hover-asset__container",
                                    style: "--ratio: ".concat(
                                      t.getAspect(
                                        t.item.asset.video.dimensions
                                      ),
                                      "%;"
                                    ),
                                  },
                                  [
                                    e("VideoPlayer", {
                                      ref: "video",
                                      staticClass: "abs",
                                      attrs: {
                                        url: t.item.asset.video.url,
                                        autoplay: !1,
                                        showDuration: !0,
                                        controls: !1,
                                        hoverActions: !0,
                                        skip: !0,
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
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "7c4df518",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        VideoPlayer: o(474).default,
      });
    },
    754: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = o(1),
        n = (o(22), o(13)),
        c = o(182),
        l = o(141),
        d = {
          name: "TwoColumnListItem",
          components: {
            SanityImageNew: o(471).default,
          },
          props: {
            item: {
              type: Object,
              required: !0,
            },
          },
          data: function () {
            return {
              bounds: null,
              active: !1,
              loaded: !1,
            };
          },
          methods: {
            getAspect: l.b,
            handleEnter: function () {
              (this.active = !0), !this.loaded && this.loadImage();
            },
            handleLeave: function () {
              this.active = !1;
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
                          if (!t.loaded && t.$refs.image) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (
                            !(
                              t.$refs.image.$el.hasAttribute("data-loading") ||
                              t.$refs.image.$el.hasAttribute("data-loaded")
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
                            Object(c.a)(t.$refs.image.$el)
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
        f = o(9),
        component = Object(f.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e("li", [
              e(
                "p",
                {
                  class: [
                    "h2",
                    {
                      active: t.active && t.item.image,
                    },
                  ],
                  on: {
                    mouseenter: t.handleEnter,
                    mouseleave: t.handleLeave,
                  },
                },
                [t._v("\n        " + t._s(t.item.title) + "\n    ")]
              ),
              t._v(" "),
              t.item.image
                ? e(
                    "div",
                    {
                      ref: "image_container",
                      class: [
                        "hover-asset",
                        {
                          active: t.active,
                        },
                      ],
                    },
                    [
                      e(
                        "div",
                        {
                          staticClass: "hover-asset__container",
                          style: "--ratio: ".concat(
                            t.getAspect(t.item.image),
                            "%;"
                          ),
                        },
                        [
                          e("SanityImageNew", {
                            ref: "image",
                            staticClass: "abs full cover",
                            attrs: {
                              image: t.item.image,
                              "data-fade": "",
                              "data-skip": "",
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  )
                : t._e(),
            ]);
          },
          [],
          !1,
          null,
          "f6191ace",
          null
        );
      e.default = component.exports;
    },
    776: function (t, e, o) {
      "use strict";
      o(696);
    },
    777: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".about-module{position:relative;display:flex;flex-wrap:wrap;overflow:hidden}.about-module .b2.underline:after{background:#244931}.about-module__title span,.about-module__title p{display:inline-block;text-transform:uppercase}.about-module__line{position:absolute;top:0;left:0;width:100%;height:1px;background:#20412b;transform:translate3d(0, 0, 0)}.about-module .hover-asset{position:absolute;transition:opacity 500ms ease;pointer-events:none}.about-module .hover-asset:not(.active){opacity:0}.about-module .hover-asset__container{width:100%;padding-top:var(--ratio);position:relative}.about-module .two-column-list{position:relative}.about-module .two-column-list li p{transition:all 333ms ease}.about-module .two-column-list li p.active{color:#b7e3b6}.about-module .category-lists{position:relative;display:flex;flex-wrap:wrap}@media(hover: hover){.about-module .category-lists__list__list__item__copy p,.about-module .category-lists__list__list__item__copy a{transition:all .5s ease}.about-module .category-lists__list__list__item__copy p:hover,.about-module .category-lists__list__list__item__copy a:hover{color:var(--color);text-decoration-color:var(--color) !important}}.about-module .carousel .decoration.opaque.green,.about-module .carousel .decoration.opaque.black{text-decoration-color:#8cb48c}.about-module .carousel .decoration:not(.opaque).green,.about-module .carousel .decoration:not(.opaque).black{text-decoration-color:rgba(140,180,140,0)}.about-module .carousel .decoration:hover{text-decoration-color:#000 !important}.about-module .carousel a.decoration{transition:color .5s ease,text-decoration-color .5s ease}.about-module .carousel a span{transition:color .5s ease,text-decoration-color .5s ease}.about-module .carousel a svg polygon{transition:fill .5s ease}@media(hover: hover){.about-module .carousel a:hover{color:#000}.about-module .carousel a:hover .decoration{text-decoration-color:#000 !important}.about-module .carousel a:hover span{color:#000}.about-module .carousel a:hover svg polygon{fill:#000 !important}}.about-module .carousel p{color:#000}.about-module .carousel p .greyed-out{color:#7da07d}.about-module .carousel p svg polygon{fill:#8cb48c !important}@media only screen and (min-width: 480px){.about-module{padding:20rem 0 60rem 0}.about-module__title{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*4);margin-left:var(--margin);margin-right:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*1)}.about-module__title span{width:32rem}.about-module__component:not(:last-child){margin-bottom:32rem}.about-module .descriptive{margin-left:var(--margin);flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.about-module .descriptive p:not(:last-child){margin-bottom:24rem}.about-module .descriptive span{margin-left:36rem}.about-module .two-column-list{column-count:2;column-width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5);column-gap:var(--gutter);margin-left:var(--margin)}.about-module .two-column-list li .hover-asset{top:50%;left:50%;transform:translate3d(-50%, -50%, 0);z-index:1;width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.about-module .category-lists{justify-content:space-between;margin-left:var(--margin);flex:0 0 calc(100vw - var(--margin)*2);padding-left:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*6)}.about-module .category-lists__list{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2)}.about-module .category-lists__list:not(:last-child){margin-bottom:24rem}.about-module .category-lists__list__title{font-size:16rem;text-transform:uppercase}.about-module .category-lists__list a,.about-module .category-lists__list p{line-height:1.3}.about-module .category-lists__list__list__item{display:block}.about-module .category-lists__list__list__item__copy{display:inline-block}.about-module .category-lists__list__list__item.lower_left .hover-asset{bottom:0;left:0;width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3)}.about-module .category-lists__list__list__item.centered:hover .category-lists__list__list__item__copy{z-index:1}.about-module .category-lists__list__list__item.centered .category-lists__list__list__item__copy{position:relative}.about-module .category-lists__list__list__item.centered .category-lists__list__list__item__copy .hover-asset{top:50%;left:0;--spacing: 0px;transform:translate3d(calc(var(--spacing) + calc((100vw - var(--margin) * 2 - var(--gutter) * 11) * 0.0833333333 + var(--gutter) * 1) + var(--margin)), -50%, 0);z-index:-1;width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3)}.about-module .category-lists__list__list__item.copy:hover .category-lists__list__list__item__copy{z-index:1}.about-module .category-lists__list__list__item.copy .category-lists__list__list__item__copy{position:relative}.about-module .category-lists__list__list__item.copy .category-lists__list__list__item__copy .hover-asset{top:50%;left:50%;transform:translate3d(-50%, -50%, 0);z-index:-1;width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*1)}.about-module .slider{margin-top:148rem;margin-bottom:190rem;flex:0 0 100vw;overflow:hidden}.about-module .slider .carousel{padding-left:calc(calc((100vw - var(--margin) * 2 - var(--gutter) * 11) * 0.0833333333 + var(--gutter) * 1) + var(--margin));padding-right:calc(calc((100vw - var(--margin) * 2 - var(--gutter) * 11) * 0.0833333333 + var(--gutter) * 1) + var(--margin))}}@media only screen and (max-width: 479px){.about-module{padding:15px 0 25px 0}.about-module__title{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin:0 var(--margin) 18px var(--margin)}.about-module__title span{width:32rem}.about-module__component:not(:last-child){margin-bottom:26px}.about-module .descriptive{margin-left:var(--margin);flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.about-module .descriptive p{font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}.about-module .descriptive p:not(:last-child){margin-bottom:24px}.about-module .descriptive span{margin-left:26px}.about-module .two-column-list{margin-top:-10px;margin-left:var(--margin);width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.about-module .two-column-list li .hover-asset{top:50%;left:50%;transform:translate3d(-50%, -50%, 0);z-index:1;width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.about-module .category-lists{justify-content:space-between;margin-left:var(--margin);flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.about-module .category-lists__list{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.about-module .category-lists__list:not(:last-child){margin-bottom:24px}.about-module .category-lists__list__title{font-size:12px;text-transform:uppercase}.about-module .category-lists__list a,.about-module .category-lists__list p{line-height:1.3}.about-module .category-lists__list__list__item{display:block}.about-module .category-lists__list__list__item .hover-asset{display:none}.about-module .category-lists__list__list__item__copy{display:inline-block}.about-module .slider{margin-top:40px;margin-bottom:62px;flex:0 0 100vw;overflow:hidden}.about-module .slider .carousel{padding:0 var(--margin)}.about-module .slider .carousel p{font-size:12px}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    778: function (t, e, o) {
      "use strict";
      o(697);
    },
    779: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".slideshow[data-v-e9ab39c6]{position:relative;background:#2d593b;width:100vw;overflow:hidden;cursor:pointer;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.slideshow .slides[data-v-e9ab39c6]{position:fixed;top:0;left:0;width:100vw;will-change:transform;overflow:hidden}.slideshow .slide[data-v-e9ab39c6]{position:fixed;top:0;left:0;width:100vw;display:flex}.slideshow .slide[data-v-e9ab39c6]:not(.active){opacity:0}.slideshow .image-container[data-v-e9ab39c6]{position:relative;flex:1}.slideshow .details[data-v-e9ab39c6]{position:absolute;left:50%;transform:translate3d(-50%, 0, 0);width:calc(100vw - var(--margin)*2);height:100%;user-select:none;z-index:10;mix-blend-mode:difference;color:#fff}.slideshow .details__descriptions[data-v-e9ab39c6]{position:absolute;bottom:0;left:0;z-index:1}.slideshow .details__description[data-v-e9ab39c6]{position:absolute;bottom:0;left:0}.slideshow .details__description[data-v-e9ab39c6]:not(.active){opacity:0}.slideshow .details__counter[data-v-e9ab39c6]{position:absolute;bottom:0;right:0;text-align:right}@media only screen and (min-width: 480px){.slideshow[data-v-e9ab39c6]{height:calc(100*var(--vh, 1vh))}.slideshow .slides[data-v-e9ab39c6],.slideshow .slide[data-v-e9ab39c6]{height:calc(100*var(--vh, 1vh))}.slideshow .details[data-v-e9ab39c6]{bottom:20rem}.slideshow .details__descriptions[data-v-e9ab39c6],.slideshow .details__description[data-v-e9ab39c6]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.slideshow .details__counter[data-v-e9ab39c6]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*1)}}@media only screen and (max-width: 479px){.slideshow[data-v-e9ab39c6]{height:580rem}.slideshow .slide[data-v-e9ab39c6]{transition:opacity 600ms ease}.slideshow .slides[data-v-e9ab39c6],.slideshow .slide[data-v-e9ab39c6]{height:580rem}.slideshow .details[data-v-e9ab39c6]{bottom:11px}.slideshow .details__descriptions[data-v-e9ab39c6],.slideshow .details__description[data-v-e9ab39c6]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.slideshow .details__counter[data-v-e9ab39c6]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.25 + var(--gutter)*0)}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    821: function (t, e, o) {
      var content = o(853);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(33).default)("46fe80b3", content, !0, {
        sourceMap: !1,
      });
    },
    835: function (t, e, o) {
      "use strict";
      o.r(e);
      o(50), o(69), o(142);
      var r = o(661),
        n = o(753),
        c = o(754),
        l = o(490),
        d = o(141),
        f = o(475),
        _ = {
          name: "Module",
          props: {
            index: {
              type: Number,
              required: !0,
            },
            module: {
              type: Object,
              required: !0,
            },
          },
          components: {
            Carousel: r.default,
            CategoryListItem: n.default,
            TwoColumnListItem: c.default,
          },
          data: function () {
            return {
              serializers: {
                marks: {
                  indent: l.default,
                },
              },
            };
          },
          methods: {
            slugify: f.c,
            getAspect: d.b,
          },
        },
        m = (o(776), o(9)),
        component = Object(m.a)(
          _,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "about-module",
              },
              [
                e("div", {
                  staticClass: "about-module__line",
                }),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "about-module__title",
                  },
                  [
                    e(
                      "span",
                      {
                        staticClass: "b2",
                      },
                      [t._v(t._s(t.index + 1) + ".")]
                    ),
                    t._v(" "),
                    e(
                      "p",
                      {
                        staticClass: "b2",
                      },
                      [t._v(t._s(t.module.title))]
                    ),
                  ]
                ),
                t._v(" "),
                t._l(t.module.components, function (component, o) {
                  return [
                    "descriptive" == component._type
                      ? e(
                          "div",
                          {
                            key: o,
                            staticClass: "about-module__component descriptive",
                          },
                          [
                            e("block-content", {
                              attrs: {
                                blocks: component.description,
                                serializers: t.serializers,
                              },
                            }),
                          ],
                          1
                        )
                      : "categoryLists" == component._type
                      ? e(
                          "div",
                          {
                            key: o,
                            staticClass:
                              "about-module__component category-lists",
                          },
                          t._l(component.lists, function (o, r) {
                            return e(
                              "div",
                              {
                                key: r,
                                staticClass: "category-lists__list",
                              },
                              [
                                e(
                                  "p",
                                  {
                                    staticClass:
                                      "category-lists__list__title b3",
                                  },
                                  [t._v(t._s(o.listTitle))]
                                ),
                                t._v(" "),
                                e(
                                  "ul",
                                  {
                                    staticClass: "category-lists__list__list",
                                  },
                                  t._l(o.listItems, function (t, o) {
                                    return e("CategoryListItem", {
                                      key: o,
                                      attrs: {
                                        item: t,
                                      },
                                    });
                                  }),
                                  1
                                ),
                              ]
                            );
                          }),
                          0
                        )
                      : "twoColumnList" == component._type
                      ? e(
                          "ul",
                          {
                            key: o,
                            staticClass:
                              "about-module__component two-column-list",
                          },
                          t._l(component.listItems, function (t, o) {
                            return e("TwoColumnListItem", {
                              key: o,
                              attrs: {
                                item: t,
                              },
                            });
                          }),
                          1
                        )
                      : "carousel" == component._type
                      ? e(
                          "div",
                          {
                            key: o,
                            staticClass: "about-module__component slider",
                          },
                          [
                            e("Carousel", {
                              attrs: {
                                data: component,
                              },
                            }),
                          ],
                          1
                        )
                      : t._e(),
                  ];
                }),
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
    },
    836: function (t, e, o) {
      "use strict";
      o.r(e);
      o(11), o(56);
      var r = o(4),
        n = o(475),
        c = o(649),
        l = o(650),
        d = o(13),
        f = o(495);
      d.a.registerPlugin(f.ScrollTrigger);
      var _ = {
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
            handleMouseDown: function () {
              this.mouse.down = !0;
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
        m = (o(778), o(9)),
        component = Object(m.a)(
          _,
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
                                "image-slide": "image" == o.asset._type,
                              },
                              {
                                "video-slide": "video" == o.asset._type,
                              },
                              {
                                active: t.currentIndex == r,
                              },
                            ],
                          },
                          [
                            "image" == o.asset._type
                              ? e("ImageModule", {
                                  attrs: {
                                    content: o,
                                    index: r,
                                    currentIndex: t.currentIndex,
                                    total: t.total,
                                  },
                                })
                              : "vimeo" == o.asset._type
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
          "e9ab39c6",
          null
        );
      e.default = component.exports;
    },
    852: function (t, e, o) {
      "use strict";
      o(821);
    },
    853: function (t, e, o) {
      var r = o(32)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".about-page__content[data-v-31ab288b]{position:relative;z-index:5;background:#2d593b}.about-page__content__line[data-v-31ab288b]{position:absolute;bottom:0;left:0;width:100%;height:1px;background:#20412b;transform:translate3d(0, 0, 0)}.about-page h1[data-v-31ab288b],.about-page .modules[data-v-31ab288b]{position:relative;background:#2d593b;z-index:1}@media only screen and (min-width: 480px){.about-page h1[data-v-31ab288b]{padding:20rem var(--margin) 80rem var(--margin);text-indent:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.0833333333 + var(--gutter)*1)}}@media only screen and (max-width: 479px){.about-page h1[data-v-31ab288b]{padding:11px var(--margin) 85px var(--margin);text-indent:30px}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    890: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = o(1),
        head = (o(22), o(652)),
        n = o(660),
        c = o(112),
        l = o(835),
        d = o(836),
        f = o(113),
        _ = o(114),
        m = {
          name: "About",
          mixins: [head.a, c.a, Object(n.a)()],
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
                            _.a.fetch(f.a)
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
          components: {
            Module: l.default,
            Slideshow: d.default,
          },
        },
        h = (o(852), o(9)),
        component = Object(h.a)(
          m,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                ref: "main",
                class: ["page about-page"],
              },
              [
                e(
                  "div",
                  {
                    staticClass: "about-page__content drsw darkgreen",
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
                    e(
                      "h1",
                      {
                        staticClass: "h2",
                      },
                      [t._v(t._s(t.page.content.mainDescription))]
                    ),
                    t._v(" "),
                    t.page.content && t.page.content.modules
                      ? e(
                          "div",
                          {
                            staticClass: "modules",
                          },
                          t._l(t.page.content.modules, function (t, o) {
                            return e("Module", {
                              key: o,
                              attrs: {
                                module: t,
                                index: o,
                              },
                            });
                          }),
                          1
                        )
                      : t._e(),
                    t._v("\n        .\n        "),
                    e("div", {
                      staticClass: "about-page__content__line",
                    }),
                  ],
                  1
                ),
                t._v(" "),
                e("Footer", {
                  attrs: {
                    theme: "green",
                  },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "31ab288b",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        Footer: o(636).default,
      });
    },
  },
]);
