(window.webpackJsonp = window.webpackJsonp || []).push([[80, 4, 5, 6, 19, 21, 23, 36, 38, 41], {
    471: function(t, e, o) {
        "use strict";
        o.r(e);
        o(53);
        var n = o(476)
          , r = {
            name: "SanityImage",
            props: {
                image: {
                    type: Object,
                    required: !0
                },
                alt: {
                    type: String,
                    required: !1
                },
                critical: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                fade: {
                    type: Boolean,
                    required: !1,
                    default: !0
                }
            },
            computed: {
                inDevelopment: function() {
                    return "development" === this.$config.ENV
                }
            },
            mounted: function() {
                this.critical && this.$refs.img.setAttribute("data-critical", ""),
                this.fade && this.$refs.img.setAttribute("data-fade", "")
            },
            methods: {
                formatImageUrl: n.a
            }
        }
          , c = (o(478),
        o(9))
          , component = Object(c.a)(r, (function() {
            var t = this;
            return (0,
            t._self._c)("img", {
                ref: "img",
                attrs: {
                    "data-srcset": "\n            ".concat(t.formatImageUrl(t.image.url, {
                        width: 480
                    }), " 480w,\n            ").concat(t.formatImageUrl(t.image.url, {
                        width: 750
                    }), " 750w,\n            ").concat(t.formatImageUrl(t.image.url, {
                        width: 1200
                    }), " 1200w,\n            ").concat(t.formatImageUrl(t.image.url, {
                        width: 1920
                    }), " 1920w"),
                    sizes: "(max-width: 480px) 480px, (max-width: 750px) 750px, (max-width: 1200px) 1200px, 1920px",
                    alt: ""
                }
            })
        }
        ), [], !1, null, "1083b122", null);
        e.default = component.exports
    },
    472: function(t, e, o) {
        var content = o(479);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("98e994cc", content, !0, {
            sourceMap: !1
        })
    },
    473: function(t, e, o) {
        var content = o(482);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("d2896c1e", content, !0, {
            sourceMap: !1
        })
    },
    474: function(t, e, o) {
        "use strict";
        o.r(e);
        o(53),
        o(480),
        o(143);
        var n = o(477)
          , r = o(4)
          , c = o(475)
          , l = {
            name: "VideoPlayer",
            mixins: [n.a],
            props: {
                url: {
                    type: String,
                    required: !0
                },
                autoplay: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                showDuration: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                controls: {
                    type: Boolean,
                    required: !1,
                    default: !0
                },
                hoverActions: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                skip: {
                    type: Boolean,
                    required: !1,
                    default: !1
                }
            },
            computed: {
                playCopy: function() {
                    return this.isPlaying ? "Pause" : "Play"
                },
                formattedDuration: function() {
                    return 0 === this.duration ? "00:00" : "".concat(this.duration.minutes, ":").concat(this.duration.seconds)
                },
                formattedCurrentTime: function() {
                    return null === this.currentTime ? "00:00" : "".concat(this.currentTime.minutes, ":").concat(this.currentTime.seconds)
                }
            },
            data: function() {
                return {
                    duration: 0,
                    isPlaying: !1,
                    videoReady: !1,
                    currentTime: null
                }
            },
            beforeDestroy: function() {
                this.$refs.video.removeEventListener("loadeddata", this.handleLoaded),
                this.$refs.video.removeEventListener("timeupdate", this.handleTimeUpdate),
                this.$refs.container.removeEventListener("mouseenter", this.handleMouseEnter),
                this.$refs.container.removeEventListener("mouseleave", this.handleMouseLeave)
            },
            mounted: function() {
                this.skip && this.$refs.video.setAttribute("data-skip", ""),
                this.$refs.video.addEventListener("loadeddata", this.handleLoaded),
                this.$refs.video.addEventListener("timeupdate", this.handleTimeUpdate),
                this.hoverActions && (this.$refs.container.addEventListener("mouseenter", this.handleMouseEnter),
                this.$refs.container.addEventListener("mouseleave", this.handleMouseLeave))
            },
            methods: {
                handleMouseEnter: function() {
                    r.b.flags.hasTouch || r.b.bounds.ww < 480 || (this.isPlaying = !0,
                    this.videoReady && this.$refs.video && this.$refs.video.play())
                },
                handleMouseLeave: function() {
                    r.b.flags.hasTouch || r.b.bounds.ww < 480 || (this.isPlaying = !1,
                    this.videoReady && this.$refs.video && this.$refs.video.pause())
                },
                handleLoaded: function() {
                    this.videoReady = !0,
                    this.duration = Object(c.b)(this.$refs.video.duration),
                    this.isPlaying && this.$refs.video.play()
                },
                handleTimeUpdate: function() {
                    var time = this.$refs.video.currentTime.toFixed(2);
                    this.currentTime = Object(c.b)(time)
                },
                togglePlay: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.$refs.video.paused || this.$refs.video.ended || t ? (this.$refs.video.muted = !1,
                    this.$refs.video.play()) : this.$refs.video.pause(),
                    this.isPlaying = !this.$refs.video.paused
                },
                onReady: function() {
                    var t = this;
                    this.autoplay && r.a.emit("AddToScrollAnimations", {
                        el: this.$refs.container,
                        onVisible: function() {
                            t.isPlaying = !0,
                            t.videoReady && t.$refs.video && t.$refs.video.play()
                        },
                        onHidden: function() {
                            t.isPlaying = !1,
                            t.$refs.video && t.$refs.video.pause()
                        },
                        inView: !1,
                        once: !1
                    })
                }
            }
        }
          , d = l
          , f = (o(481),
        o(9))
          , component = Object(f.a)(d, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: "container",
                class: ["player", {
                    active: t.isPlaying
                }, {
                    duration: t.showDuration
                }]
            }, [e("video", {
                ref: "video",
                attrs: {
                    "data-src": t.url,
                    preload: "metadata",
                    playsinline: "",
                    loop: "",
                    "data-fade": ""
                },
                domProps: {
                    muted: t.autoplay || t.hoverActions
                }
            }), t._v(" "), t.controls ? e("div", {
                ref: "controls",
                staticClass: "player__controls hidden"
            }, [e("button", {
                ref: "play",
                attrs: {
                    "data-title": "Play (k)",
                    id: "play",
                    "aria-label": t.playCopy
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.togglePlay(!t.isPlaying)
                    }
                }
            }, [t.isPlaying ? e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 8.32 12.24"
                }
            }, [e("g", {
                attrs: {
                    id: "Layer_2",
                    "data-name": "Layer 2"
                }
            }, [e("g", {
                attrs: {
                    id: "Grid"
                }
            }, [e("rect", {
                attrs: {
                    x: "5.94",
                    width: "2.38",
                    height: "12.24"
                }
            }), t._v(" "), e("rect", {
                attrs: {
                    width: "2.38",
                    height: "12.24"
                }
            })])])]) : e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 10.6 12.24"
                }
            }, [e("g", {
                attrs: {
                    id: "Layer_2",
                    "data-name": "Layer 2"
                }
            }, [e("g", {
                attrs: {
                    id: "Design_System",
                    "data-name": "Design System"
                }
            }, [e("polygon", {
                attrs: {
                    points: "10.6 6.12 0 0 0 12.24 10.6 6.12"
                }
            })])])]), t._v(" "), e("span", {
                staticClass: "b2"
            }, [t._v(t._s(t.playCopy))]), t._v(" "), e("span", {
                staticClass: "b2"
            }, [t._v(t._s(t.isPlaying ? "(".concat(t.formattedCurrentTime, "/").concat(t.formattedDuration, ")") : "(".concat(t.formattedDuration, ")")))])])]) : t._e()])
        }
        ), [], !1, null, "277a8328", null);
        e.default = component.exports
    },
    475: function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return n
        }
        )),
        o.d(e, "c", (function() {
            return r
        }
        )),
        o.d(e, "b", (function() {
            return c
        }
        ));
        o(53),
        o(183),
        o(67),
        o(11),
        o(25),
        o(45),
        o(49);
        var n = function(t) {
            var path = t.composedPath && t.composedPath() || t.path
              , e = t.target;
            if (null != path)
                return path.indexOf(window) < 0 ? path.concat(window) : path;
            if (e === window)
                return [window];
            return [e].concat(function t(e, o) {
                o = o || [];
                var n = e.parentNode;
                return n ? t(n, o.concat(n)) : o
            }(e), window)
        }
          , r = function(text) {
            return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }
          , c = function(t) {
            var e = new Date(1e3 * t).toISOString().substr(11, 8);
            return {
                minutes: e.substr(3, 2),
                seconds: e.substr(6, 2)
            }
        }
    },
    476: function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return n
        }
        ));
        o(53);
        var n = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , e = arguments.length > 1 ? arguments[1] : void 0
              , o = e.width
              , n = (e.height,
            "".concat(t, "?"));
            return o && (n = "".concat(n, "&w=").concat(o)),
            n
        }
    },
    477: function(t, e, o) {
        "use strict";
        e.a = {
            computed: {
                domLoaded: function() {
                    return this.$store.getters["preloader/isLoaded"]
                },
                navigating: function() {
                    return this.$store.getters["nav/isNavigating"]
                }
            },
            watch: {
                domLoaded: function(t) {
                    t && !this.navigating && this.ready()
                },
                navigating: function(t) {
                    !t && this.domLoaded && this.ready()
                }
            },
            mounted: function() {
                var t = this;
                this.domLoaded && !this.navigating && this.$nextTick((function() {
                    t.ready()
                }
                ))
            },
            methods: {
                ready: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.onReady()
                    }
                    ))
                },
                onReady: function() {}
            }
        }
    },
    478: function(t, e, o) {
        "use strict";
        o(472)
    },
    479: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, "img[data-v-1083b122]{will-change:opacity}", ""]),
        n.locals = {},
        t.exports = n
    },
    481: function(t, e, o) {
        "use strict";
        o(473)
    },
    482: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, ".player[data-v-277a8328]{position:relative;width:100%;height:100%;overflow:hidden}.player.abs[data-v-277a8328]{position:absolute;top:0;left:0}.player:not(.duration) .player__controls span[data-v-277a8328]:last-child{display:none}.player video[data-v-277a8328]{position:absolute;top:50%;left:50%;transform:translate3d(-50%, -50%, 0);width:101%;height:101%;object-fit:cover;z-index:0}.player__controls[data-v-277a8328]{position:absolute;z-index:1}.player__controls button[data-v-277a8328]{display:inline-flex;align-items:center}.player__controls button span[data-v-277a8328]{color:#000;display:inline-block;text-transform:uppercase;line-height:.85}.player__controls button svg[data-v-277a8328]{display:inline-block}@media only screen and (min-width: 480px){.player__controls[data-v-277a8328]{top:50%;left:50%;transform:translate3d(-50%, -50%, 0)}.player button span[data-v-277a8328]:last-child{margin-left:4rem}.player button svg[data-v-277a8328]{position:relative;width:12rem;height:12rem}.player button svg[data-v-277a8328]:first-child{margin-right:3rem}.player button svg[data-v-277a8328]:nth-child(2){top:1rem;margin-right:2rem}}@media only screen and (max-width: 479px){.player__controls[data-v-277a8328]{bottom:15px;left:var(--margin)}.player button span[data-v-277a8328]:last-child{margin-left:4px}.player button svg[data-v-277a8328]{width:12px;height:12px}.player button svg[data-v-277a8328]:first-child{top:1px;margin-right:3px}.player button svg[data-v-277a8328]:nth-child(2){top:1px;margin-right:2px}}", ""]),
        n.locals = {},
        t.exports = n
    },
    483: function(t, e, o) {
        var content = o(489);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("a30f11f2", content, !0, {
            sourceMap: !1
        })
    },
    484: function(t, e, o) {
        var content = o(492);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("46152030", content, !0, {
            sourceMap: !1
        })
    },
    485: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(1)
          , r = (o(22),
        o(13))
          , c = o(182)
          , l = (o(4),
        o(141))
          , d = o(475)
          , f = {
            name: "ExternalLinkSerializer",
            components: {
                SanityImageNew: o(471).default
            },
            props: {
                children: {
                    type: String
                },
                href: {
                    type: String
                },
                hoverAsset: {
                    type: Array,
                    required: !1
                }
            },
            data: function() {
                return {
                    active: !1,
                    loaded: !1
                }
            },
            methods: {
                slugify: d.c,
                getAspect: l.b,
                handleTouch: function() {
                    this.active = !this.active,
                    this.active ? this.loadAsset() : this.handleLeave()
                },
                handleEnter: function() {
                    this.active = !0,
                    this.loadAsset()
                },
                loadAsset: function() {
                    this.loaded ? this.$refs.video && this.$refs.video.$refs.video.play() : !this.loaded && this.loadImage()
                },
                handleLeave: function() {
                    this.active = !1,
                    this.$refs.video && this.$refs.video.$refs.video.pause()
                },
                loadImage: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var image, video;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.loaded && (t.$refs.image || t.$refs.video)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (!t.$refs.image) {
                                        e.next = 13;
                                        break
                                    }
                                    if (!(t.$refs.image.$el.hasAttribute("data-loading") || t.$refs.image.$el.hasAttribute("data-loaded"))) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return t.loaded = !0,
                                    e.next = 9,
                                    Object(c.a)(t.$refs.image.$el);
                                case 9:
                                    image = e.sent,
                                    r.a.to(image, {
                                        autoAlpha: 1,
                                        duration: .5,
                                        ease: "power2.inOut"
                                    }),
                                    e.next = 24;
                                    break;
                                case 13:
                                    if (!t.$refs.video) {
                                        e.next = 24;
                                        break
                                    }
                                    if (video = t.$refs.video.$refs.video,
                                    !(video.hasAttribute("data-loading") || video.hasAttribute("data-loaded"))) {
                                        e.next = 18;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 18:
                                    return t.loaded = !0,
                                    e.next = 21,
                                    Object(c.a)(video);
                                case 21:
                                    video = e.sent,
                                    r.a.to(video, {
                                        autoAlpha: 1,
                                        duration: .5,
                                        ease: "power2.inOut"
                                    }),
                                    t.$refs.video.$refs.video.play();
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                }
            }
        }
          , h = (o(491),
        o(9))
          , component = Object(h.a)(f, (function() {
            var t = this
              , e = t._self._c;
            return e("a", {
                staticClass: "decoration active opaque green",
                style: t.hoverAsset && t.hoverAsset[0] && "--color: ".concat(t.hoverAsset[0].hoverColor),
                attrs: {
                    href: t.href,
                    target: "_blank",
                    rel: "noopener noreferrer"
                },
                on: {
                    mouseenter: t.handleEnter,
                    touchstart: t.handleTouch,
                    mouseleave: t.handleLeave
                }
            }, [e("client-only", [t.hoverAsset && t.hoverAsset[0] ? e("div", {
                ref: "image_container",
                class: ["hover-asset", {
                    active: t.active
                }]
            }, ["imageAsset" == t.hoverAsset[0]._type ? e("div", {
                staticClass: "hover-asset__container",
                style: "--ratio: ".concat(t.getAspect(t.hoverAsset[0].image), "%;")
            }, [e("SanityImageNew", {
                ref: "image",
                staticClass: "abs full cover",
                attrs: {
                    image: t.hoverAsset[0].image,
                    "data-fade": "",
                    "data-skip": ""
                }
            })], 1) : "videoAsset" == t.hoverAsset[0]._type ? e("div", {
                staticClass: "hover-asset__container",
                style: "--ratio: ".concat(t.getAspect(t.hoverAsset[0].video.dimensions), "%;")
            }, [e("VideoPlayer", {
                ref: "video",
                staticClass: "abs",
                attrs: {
                    url: t.hoverAsset[0].video.url,
                    autoplay: !1,
                    showDuration: !0,
                    controls: !1,
                    hoverActions: !0,
                    skip: !0
                }
            })], 1) : t._e()]) : t._e()]), t._v(" "), t._t("default")], 2)
        }
        ), [], !1, null, "9040327a", null);
        e.default = component.exports;
        installComponents(component, {
            VideoPlayer: o(474).default
        })
    },
    486: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = {
            name: "ExternalStyledLinkSerializer",
            props: {
                children: {
                    type: String
                },
                href: {
                    type: String
                }
            }
        }
          , r = (o(488),
        o(9))
          , component = Object(r.a)(n, (function() {
            var t = this
              , e = t._self._c;
            return e("a", {
                attrs: {
                    href: t.href,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [e("span", {
                staticClass: "decoration active opaque black"
            }, [t._t("default")], 2), t._v(" "), e("client-only", [e("div", {
                staticClass: "icon"
            }, [e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 9.47 9.47"
                }
            }, [e("g", {
                attrs: {
                    id: "Layer_2",
                    "data-name": "Layer 2"
                }
            }, [e("g", {
                attrs: {
                    id: "Design_System",
                    "data-name": "Design System"
                }
            }, [e("polygon", {
                attrs: {
                    points: "0.8 0 0.8 1.3 6.58 1.3 7.34 1.22 0 8.56 0.92 9.47 8.26 2.13 8.18 2.89 8.18 8.67 9.47 8.67 9.47 0 0.8 0"
                }
            })])])])])])], 1)
        }
        ), [], !1, null, "ce6c94de", null);
        e.default = component.exports
    },
    488: function(t, e, o) {
        "use strict";
        o(483)
    },
    489: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, "a[data-v-ce6c94de]{text-decoration:none}@media only screen and (min-width: 480px){a .icon[data-v-ce6c94de]{display:inline-block;position:relative;width:10rem;margin-left:2rem}}@media only screen and (max-width: 479px){a .icon[data-v-ce6c94de]{display:inline-block;position:relative;width:10px;margin-left:2px}}", ""]),
        n.locals = {},
        t.exports = n
    },
    490: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = {
            name: "IndentSerializer",
            props: {
                children: {
                    type: String
                },
                href: {
                    type: String
                }
            }
        }
          , r = o(9)
          , component = Object(r.a)(n, (function() {
            return (0,
            this._self._c)("span", {
                staticClass: "indent"
            }, [this._t("default")], 2)
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    491: function(t, e, o) {
        "use strict";
        o(484)
    },
    492: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, "a[data-v-9040327a]{display:inline;position:relative;transition:all .5s ease}a pre[data-v-9040327a]{display:inline;font-weight:inherit;font-family:inherit;font-size:inherit;line-height:inherit;letter-spacing:inherit;white-space:normal}a[data-v-9040327a]:hover{z-index:1;color:var(--color);text-decoration-color:var(--color) !important}a .hover-asset[data-v-9040327a]{display:inline;position:absolute;top:50%;left:50%;transform:translate3d(-50%, -47%, 0);transition:opacity 500ms ease;opacity:0;z-index:-1}a .hover-asset__container[data-v-9040327a]{width:100%;padding-top:var(--ratio);position:relative}a .hover-asset.active[data-v-9040327a]{opacity:1}@media only screen and (min-width: 480px){a .hover-asset[data-v-9040327a]{width:240rem}}@media only screen and (max-width: 479px){a .hover-asset[data-v-9040327a]{width:240rem}}", ""]),
        n.locals = {},
        t.exports = n
    },
    635: function(t, e, o) {
        var content = o(656);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("cd8ca9f8", content, !0, {
            sourceMap: !1
        })
    },
    636: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(94)
          , r = (o(50),
        o(69),
        o(496),
        o(1))
          , c = (o(22),
        o(54),
        o(70),
        o(55),
        o(11),
        o(27),
        o(13))
          , l = o(646)
          , d = o.n(l)
          , f = o(4)
          , h = o(698)
          , _ = o.n(h)
          , m = o(184)
          , v = o(115)
          , w = o(490)
          , y = o(647)
          , x = o(485)
          , k = o(185)
          , j = {
            name: "Footer",
            mixins: [m.validationMixin],
            props: {
                theme: {
                    type: String,
                    required: !1,
                    default: "white"
                },
                showAbout: {
                    type: Boolean,
                    required: !1,
                    default: !1
                }
            },
            computed: {
                data: function() {
                    return this.$store.getters["footer/footerData"]
                },
                isHoveringFooter: function() {
                    return this.$store.getters["footer/isHovering"]
                }
            },
            data: function() {
                return {
                    marqueeTl: null,
                    contactBounds: null,
                    error: !1,
                    success: !1,
                    showing: !1,
                    submitting: !1,
                    form: {
                        email: ""
                    },
                    delayedCalls: [],
                    cities: [],
                    serializers: {
                        marks: {
                            indent: w.default,
                            link: x.default,
                            hoverAsset: y.default
                        }
                    }
                }
            },
            validations: {
                form: {
                    email: {
                        required: v.required,
                        email: v.email
                    }
                }
            },
            beforeDestroy: function() {
                f.a.off("tick", this.tick),
                f.a.off("resize", this.resize),
                this.$store.dispatch("footer/setHovering", !1)
            },
            mounted: function() {
                this.cities = this.data.marquee.marqueeCities.filter((function(t) {
                    return _.a.lookupViaCity(t.cityName).length > 0
                }
                )),
                this.calculateTimezones(),
                this.resize(),
                f.a.on("tick", this.tick),
                f.a.on("resize", this.resize)
            },
            methods: {
                handleMouseEnter: function() {
                    !this.isHoveringFooter && this.$store.dispatch("footer/setHovering", !0)
                },
                handleMouseLeave: function() {
                    this.isHoveringFooter && this.$store.dispatch("footer/setHovering", !1)
                },
                resize: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.$refs.contact.style.position = "",
                        t.$refs.container.style.height = "";
                        var e = t.showAbout ? t.$refs.about.getBoundingClientRect() : null
                          , o = t.$refs.contact.getBoundingClientRect();
                        t.contactBounds = {
                            height: o.height,
                            top: o.top + window.pageYOffset,
                            bottom: o.bottom + window.pageYOffset
                        };
                        var n = e ? e.height + t.contactBounds.height : t.contactBounds.height;
                        (e ? n >= f.b.bounds.wh : n < f.b.bounds.wh) && (t.$refs.contact.style.position = "fixed",
                        t.$refs.container.style.height = "".concat(n, "px"));
                        var r = t.$refs.set.getBoundingClientRect().width;
                        t.marqueeTl && t.marqueeTl.kill(),
                        t.marqueeTl = c.a.timeline({
                            repeat: -1,
                            paused: !0
                        }).fromTo(t.$refs.inner, {
                            x: 0
                        }, {
                            x: -1 * r,
                            force3D: !0,
                            duration: 20,
                            ease: "none"
                        })
                    }
                    ))
                },
                tick: function() {
                    this.contactBounds && f.b.bounds.ww >= 480 ? window.pageYOffset >= this.contactBounds.bottom - this.contactBounds.height - f.b.bounds.wh ? this.inView || (this.inView = !0,
                    this.marqueeTl.play()) : this.inView && (this.inView = !1,
                    this.marqueeTl.pause()) : this.contactBounds && f.b.bounds.ww < 480 && (window.pageYOffset >= this.contactBounds.top - f.b.bounds.wh ? this.inView || (this.inView = !0,
                    this.marqueeTl.play()) : this.inView && (this.inView = !1,
                    this.marqueeTl.pause())),
                    this.inView && this.calculateTimezones()
                },
                calculateTimezones: function() {
                    this.cities = this.cities.map((function(t) {
                        var e = _.a.lookupViaCity(t.cityName)[0].timezone;
                        return {
                            time: d()(new Date).tz(e).format("HH:mm:ss"),
                            cityName: t.cityName,
                            cityAbbreviations: t.cityAbbreviations
                        }
                    }
                    ))
                },
                submit: function(t) {
                    var e = this;
                    return Object(r.a)(regeneratorRuntime.mark((function o() {
                        var n, l;
                        return regeneratorRuntime.wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    if (o.prev = 0,
                                    !e.submitting) {
                                        o.next = 3;
                                        break
                                    }
                                    return o.abrupt("return");
                                case 3:
                                    for (l in t.preventDefault(),
                                    e.clearDelayedCalls(),
                                    n = new FormData,
                                    e.form)
                                        n.append(l, e.form[l]);
                                    if (e.$v.$touch(),
                                    !e.$v.$invalid) {
                                        o.next = 12;
                                        break
                                    }
                                    throw Error("Invalid");
                                case 12:
                                    return e.submitting = !0,
                                    e.error = !1,
                                    o.next = 16,
                                    Object(k.b)(k.a, e.form);
                                case 16:
                                    e.$refs.input.blur(),
                                    e.delayedCalls.push(c.a.delayedCall(1, Object(r.a)(regeneratorRuntime.mark((function t() {
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    e.success = !0,
                                                    e.submitting = !1;
                                                case 2:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    ))))),
                                    e.delayedCalls.push(c.a.delayedCall(4, Object(r.a)(regeneratorRuntime.mark((function t() {
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    e.resetForm();
                                                case 1:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )))));
                                case 19:
                                    o.next = 27;
                                    break;
                                case 21:
                                    o.prev = 21,
                                    o.t0 = o.catch(0),
                                    console.log(o.t0),
                                    e.clearDelayedCalls(),
                                    console.log(o.t0),
                                    c.a.delayedCall(1, Object(r.a)(regeneratorRuntime.mark((function t() {
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    e.error = !0,
                                                    e.success = !1,
                                                    e.submitting = !1,
                                                    e.delayedCalls.push(c.a.delayedCall(3, (function() {
                                                        e.error = !1
                                                    }
                                                    )));
                                                case 4:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    ))));
                                case 27:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o, null, [[0, 21]])
                    }
                    )))()
                },
                resetForm: function() {
                    var t = this;
                    Object.keys(this.form).forEach((function(e) {
                        t.form[e] = ""
                    }
                    )),
                    this.submitting = this.success = this.error = !1
                },
                clearDelayedCalls: function() {
                    this.delayedCalls.forEach((function(t) {
                        return t.kill()
                    }
                    )),
                    this.delayedCalls = []
                }
            }
        }
          , C = (o(665),
        o(9))
          , component = Object(C.a)(j, (function() {
            var t = this
              , e = t._self._c;
            return e("footer", {
                ref: "container",
                class: [t.theme]
            }, [t.showAbout ? e("div", {
                ref: "about",
                class: ["about drsw", {
                    darkgreen: "green" === t.theme
                }]
            }, [e("div", {
                staticClass: "about__inner"
            }, [e("div", {
                staticClass: "about__line"
            }), t._v(" "), e("div", {
                staticClass: "about__line"
            }), t._v(" "), e("div", {
                staticClass: "about__description"
            }, [e("block-content", {
                attrs: {
                    blocks: t.data.description.description,
                    serializers: t.serializers
                }
            })], 1), t._v(" "), e("nuxt-link", {
                staticClass: "about__link b2",
                attrs: {
                    to: "/about"
                }
            }, [e("span", {
                class: ["decoration active opaque black", {
                    white: "black" == t.theme
                }]
            }, [t._v(t._s(t.data.description.linkCopy))]), t._v(" "), e("RightArrowIcon", {
                attrs: {
                    color: "white" == t.theme ? "black" : "white"
                }
            })], 1)], 1)]) : t._e(), t._v(" "), e("div", {
                ref: "contact",
                staticClass: "contact",
                on: {
                    mouseenter: t.handleMouseEnter,
                    mouseleave: t.handleMouseLeave
                }
            }, [e("div", {
                staticClass: "contact__line"
            }), t._v(" "), t._m(0), t._v(" "), e("div", {
                staticClass: "contact__information"
            }, [e("div", {
                staticClass: "contact__information__detail"
            }, [e("div", {
                staticClass: "contact__information__detail__line"
            }), t._v(" "), t._m(1), t._v(" "), t._l(t.data.locations, (function(o, n) {
                return e("div", {
                    key: n,
                    staticClass: "contact__information__detail__content"
                }, [e("p", {
                    staticClass: "contact__information__detail__content__title b2"
                }, [t._v(t._s(o.title))]), t._v(" "), e("div", {
                    staticClass: "contact__information__detail__content__detail"
                }, [e("block-content", {
                    attrs: {
                        blocks: o.address
                    }
                })], 1), t._v(" "), e("a", {
                    staticClass: "b2",
                    attrs: {
                        href: o.googleMapsShareLink,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [e("span", {
                    staticClass: "decoration active opaque green"
                }, [t._v("Map")]), t._v(" "), e("div", [e("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 9.47 9.47"
                    }
                }, [e("g", {
                    attrs: {
                        id: "Layer_2",
                        "data-name": "Layer 2"
                    }
                }, [e("g", {
                    attrs: {
                        id: "Design_System",
                        "data-name": "Design System"
                    }
                }, [e("polygon", {
                    attrs: {
                        points: "0.8 0 0.8 1.3 6.58 1.3 7.34 1.22 0 8.56 0.92 9.47 8.26 2.13 8.18 2.89 8.18 8.67 9.47 8.67 9.47 0 0.8 0"
                    }
                })])])])])])])
            }
            ))], 2), t._v(" "), e("div", {
                staticClass: "contact__information__detail"
            }, [e("div", {
                staticClass: "contact__information__detail__line"
            }), t._v(" "), t._m(2), t._v(" "), t._l(t.data.locations, (function(o, n) {
                return e("div", {
                    key: n,
                    staticClass: "contact__information__detail__content"
                }, [e("div", {
                    staticClass: "contact__information__detail__content__detail"
                }, [e("ul", t._l(o.inquiriesDetails, (function(o, n) {
                    return e("li", {
                        key: n
                    }, [o.link ? e("a", {
                        staticClass: "b2",
                        attrs: {
                            href: o.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e("span", {
                        staticClass: "decoration active opaque green"
                    }, [t._v(t._s(o.copy))]), t._v(" "), e("div", [e("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 9.47 9.47"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Layer_2",
                            "data-name": "Layer 2"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Design_System",
                            "data-name": "Design System"
                        }
                    }, [e("polygon", {
                        attrs: {
                            points: "0.8 0 0.8 1.3 6.58 1.3 7.34 1.22 0 8.56 0.92 9.47 8.26 2.13 8.18 2.89 8.18 8.67 9.47 8.67 9.47 0 0.8 0"
                        }
                    })])])])])]) : e("p", {
                        staticClass: "b2"
                    }, [t._v(t._s(o.copy))])])
                }
                )), 0)])])
            }
            ))], 2), t._v(" "), e("div", {
                staticClass: "contact__information__detail"
            }, [e("div", {
                staticClass: "contact__information__detail__line"
            }), t._v(" "), t._m(3), t._v(" "), t._l(t.data.locations, (function(o, n) {
                return e("div", {
                    key: n,
                    staticClass: "contact__information__detail__content"
                }, [e("div", {
                    staticClass: "contact__information__detail__content__detail"
                }, [e("ul", t._l(o.careersIntershipsDetails, (function(o, n) {
                    return e("li", {
                        key: n
                    }, [o.link ? e("a", {
                        staticClass: "b2",
                        attrs: {
                            href: o.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e("span", {
                        staticClass: "decoration active opaque green"
                    }, [t._v(t._s(o.copy))]), t._v(" "), e("div", [e("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 9.47 9.47"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Layer_2",
                            "data-name": "Layer 2"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Design_System",
                            "data-name": "Design System"
                        }
                    }, [e("polygon", {
                        attrs: {
                            points: "0.8 0 0.8 1.3 6.58 1.3 7.34 1.22 0 8.56 0.92 9.47 8.26 2.13 8.18 2.89 8.18 8.67 9.47 8.67 9.47 0 0.8 0"
                        }
                    })])])])])]) : e("p", {
                        staticClass: "b2"
                    }, [t._v(t._s(o.copy))])])
                }
                )), 0)])])
            }
            ))], 2), t._v(" "), e("div", {
                staticClass: "contact__information__detail"
            }, [e("div", {
                staticClass: "contact__information__detail__line"
            }), t._v(" "), t._m(4), t._v(" "), t._l(t.data.locations, (function(o, n) {
                return e("div", {
                    key: n,
                    staticClass: "contact__information__detail__content"
                }, [e("div", {
                    staticClass: "contact__information__detail__content__detail"
                }, [e("ul", t._l(o.socialMediaDetails, (function(o, n) {
                    return e("li", {
                        key: n
                    }, [o.link ? e("a", {
                        staticClass: "b2",
                        attrs: {
                            href: o.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e("span", {
                        staticClass: "decoration active opaque green"
                    }, [t._v(t._s(o.copy))]), t._v(" "), e("div", [e("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 9.47 9.47"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Layer_2",
                            "data-name": "Layer 2"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Design_System",
                            "data-name": "Design System"
                        }
                    }, [e("polygon", {
                        attrs: {
                            points: "0.8 0 0.8 1.3 6.58 1.3 7.34 1.22 0 8.56 0.92 9.47 8.26 2.13 8.18 2.89 8.18 8.67 9.47 8.67 9.47 0 0.8 0"
                        }
                    })])])])])]) : e("p", {
                        staticClass: "b2"
                    }, [t._v(t._s(o.copy))])])
                }
                )), 0)])])
            }
            ))], 2), t._v(" "), e("div", {
                class: ["contact__information__detail", {
                    submitting: t.submitting
                }]
            }, [e("div", {
                staticClass: "contact__information__detail__line"
            }), t._v(" "), t._m(5), t._v(" "), e("form", {
                staticClass: "contact__information__detail__form",
                attrs: {
                    action: ""
                }
            }, [t.success ? e("p", {
                staticClass: "contact__information__detail__form__feedback b2"
            }, [t._v("Thank You!")]) : t.error ? e("p", {
                staticClass: "contact__information__detail__form__feedback b2"
            }, [t._v("Error")]) : [e("div", {
                staticClass: "contact__information__detail__form__input"
            }, [e("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.form.email,
                    expression: "form.email"
                }],
                ref: "input",
                attrs: {
                    type: "email",
                    placeholder: "Email address"
                },
                domProps: {
                    value: t.form.email
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.form, "email", e.target.value)
                    }
                }
            }), t._v(" "), e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 290.78 5.31"
                }
            }, [e("g", {
                attrs: {
                    id: "Layer_2",
                    "data-name": "Layer 2"
                }
            }, [e("g", {
                attrs: {
                    id: "Design_System",
                    "data-name": "Design System"
                }
            }, [e("path", {
                attrs: {
                    d: "M290.48,0a5,5,0,0,1-5,5H5.31a5,5,0,0,1-5-5",
                    fill: "none",
                    stroke: "#000",
                    "stroke-miterlimit": "10",
                    "stroke-width": "0.61"
                }
            })])])])]), t._v(" "), e("button", {
                staticClass: "b2 decoration active green",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.submit.apply(null, arguments)
                    }
                }
            }, [t._v("Submit")])]], 2)])]), t._v(" "), e("div", {
                ref: "marquee",
                staticClass: "contact__marquee"
            }, [e("div", {
                staticClass: "contact__marquee__line"
            }), t._v(" "), t._m(6), t._v(" "), e("div", {
                ref: "ticker",
                staticClass: "contact__marquee__ticker"
            }, [e("div", {
                ref: "inner",
                staticClass: "contact__marquee__ticker__inner"
            }, [e("div", {
                ref: "set"
            }, t._l(Object(n.a)(t.cities), (function(o, n) {
                return e("p", {
                    key: n,
                    staticClass: "h3"
                }, [t._v("\n                            " + t._s(o.cityAbbreviations) + " "), e("span", [t._v(" (" + t._s(o.time) + "),")])])
            }
            )), 0), t._v(" "), e("div", t._l(Object(n.a)(t.cities), (function(o, n) {
                return e("p", {
                    key: n,
                    staticClass: "h3"
                }, [t._v("\n                            " + t._s(o.cityAbbreviations) + " "), e("span", [t._v(" (" + t._s(o.time) + "),")])])
            }
            )), 0)])])])])])
        }
        ), [function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "contact__title"
            }, [t("p", {
                staticClass: "b2"
            }, [this._v("Contact")])])
        }
        , function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "contact__information__detail__title"
            }, [t("p", {
                staticClass: "b2"
            }, [this._v("Address")])])
        }
        , function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "contact__information__detail__title"
            }, [t("p", {
                staticClass: "b2"
            }, [this._v("Inquiries")])])
        }
        , function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "contact__information__detail__title"
            }, [e("p", {
                staticClass: "b2"
            }, [t._v("Careers "), e("br"), t._v("Internships")])])
        }
        , function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "contact__information__detail__title"
            }, [t("p", {
                staticClass: "b2"
            }, [this._v("Follow us")])])
        }
        , function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "contact__information__detail__title"
            }, [t("p", {
                staticClass: "b2"
            }, [this._v("Newsletter")])])
        }
        , function() {
            var t = this
              , e = t._self._c;
            return e("p", {
                staticClass: "contact__marquee__description b2"
            }, [e("span", {
                staticClass: "b2"
            }, [t._v("Currently Working in:")]), t._v(" "), e("span", {
                staticClass: "b2"
            }, [t._v("Working in:")])])
        }
        ], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            RightArrowIcon: o(268).default,
            Footer: o(636).default
        })
    },
    639: function(t, e, o) {
        var content = o(666);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("55f28c30", content, !0, {
            sourceMap: !1
        })
    },
    640: function(t, e, o) {
        var content = o(668);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("09002598", content, !0, {
            sourceMap: !1
        })
    },
    647: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(1)
          , r = (o(22),
        o(13))
          , c = o(182)
          , l = (o(4),
        o(141))
          , d = o(475)
          , f = {
            name: "HoverAssetSerializer",
            components: {
                SanityImageNew: o(471).default
            },
            props: {
                children: {
                    type: String
                },
                hoverAsset: {
                    type: Array,
                    required: !1
                }
            },
            data: function() {
                return {
                    active: !1,
                    loaded: !1
                }
            },
            methods: {
                slugify: d.c,
                getAspect: l.b,
                handleTouch: function() {
                    this.active = !this.active,
                    this.active ? this.loadAsset() : this.handleLeave()
                },
                handleEnter: function() {
                    this.active = !0,
                    this.loadAsset()
                },
                loadAsset: function() {
                    this.loaded ? this.$refs.video && this.$refs.video.$refs.video.play() : !this.loaded && this.loadImage()
                },
                handleLeave: function() {
                    this.active = !1,
                    this.$refs.video && this.$refs.video.$refs.video.pause()
                },
                loadImage: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var image, video;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.loaded && (t.$refs.image || t.$refs.video)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (!t.$refs.image) {
                                        e.next = 13;
                                        break
                                    }
                                    if (!(t.$refs.image.$el.hasAttribute("data-loading") || t.$refs.image.$el.hasAttribute("data-loaded"))) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return t.loaded = !0,
                                    e.next = 9,
                                    Object(c.a)(t.$refs.image.$el);
                                case 9:
                                    image = e.sent,
                                    r.a.to(image, {
                                        autoAlpha: 1,
                                        duration: .5,
                                        ease: "power2.inOut"
                                    }),
                                    e.next = 24;
                                    break;
                                case 13:
                                    if (!t.$refs.video) {
                                        e.next = 24;
                                        break
                                    }
                                    if (video = t.$refs.video.$refs.video,
                                    !(video.hasAttribute("data-loading") || video.hasAttribute("data-loaded"))) {
                                        e.next = 18;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 18:
                                    return t.loaded = !0,
                                    e.next = 21,
                                    Object(c.a)(video);
                                case 21:
                                    video = e.sent,
                                    r.a.to(video, {
                                        autoAlpha: 1,
                                        duration: .5,
                                        ease: "power2.inOut"
                                    }),
                                    t.$refs.video.$refs.video.play();
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                }
            }
        }
          , h = (o(655),
        o(9))
          , component = Object(h.a)(f, (function() {
            var t = this
              , e = t._self._c;
            return e("span", {
                staticClass: "decoration active opaque green",
                style: t.hoverAsset && t.hoverAsset[0] && "--color: ".concat(t.hoverAsset[0].hoverColor),
                on: {
                    mouseenter: t.handleEnter,
                    touchstart: t.handleTouch,
                    mouseleave: t.handleLeave
                }
            }, [e("client-only", [t.hoverAsset && t.hoverAsset[0] ? e("div", {
                ref: "image_container",
                class: ["hover-asset", {
                    active: t.active
                }]
            }, ["imageAsset" == t.hoverAsset[0]._type ? e("div", {
                staticClass: "hover-asset__container",
                style: "--ratio: ".concat(t.getAspect(t.hoverAsset[0].image), "%;")
            }, [e("SanityImageNew", {
                ref: "image",
                staticClass: "abs full cover",
                attrs: {
                    image: t.hoverAsset[0].image,
                    "data-fade": "",
                    "data-skip": ""
                }
            })], 1) : "videoAsset" == t.hoverAsset[0]._type ? e("div", {
                staticClass: "hover-asset__container",
                style: "--ratio: ".concat(t.getAspect(t.hoverAsset[0].video.dimensions), "%;")
            }, [e("VideoPlayer", {
                ref: "video",
                staticClass: "abs",
                attrs: {
                    url: t.hoverAsset[0].video.url,
                    autoplay: !1,
                    showDuration: !0,
                    controls: !1,
                    hoverActions: !0,
                    skip: !0
                }
            })], 1) : t._e()]) : t._e()]), t._v(" "), t._t("default")], 2)
        }
        ), [], !1, null, "df620228", null);
        e.default = component.exports;
        installComponents(component, {
            VideoPlayer: o(474).default
        })
    },
    651: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(4)
          , r = o(141)
          , c = o(13)
          , l = o(495);
        c.a.registerPlugin(l.ScrollTrigger);
        var d = {
            name: "Project",
            props: {
                project: {
                    type: Object,
                    required: !0
                }
            },
            data: function() {
                return {
                    bounds: null,
                    scrollTrigger: null
                }
            },
            beforeDestroy: function() {
                this.scrollTrigger && this.scrollTrigger.kill()
            },
            mounted: function() {
                this.resize(),
                n.a.on("resize", this.resize)
            },
            methods: {
                getAspect: r.b,
                resize: function() {
                    n.b.bounds.ww < 480 ? !this.scrollTrigger && this.setupTrigger() : (this.scrollTrigger && this.scrollTrigger.kill(),
                    this.scrollTrigger = null)
                },
                setupTrigger: function() {
                    var t = this;
                    this.scrollTrigger = l.ScrollTrigger.create({
                        trigger: this.$refs.container.$el,
                        start: "top center",
                        end: "bottom center",
                        onToggle: function(e) {
                            e.isActive && n.a.emit("indicator:change", t.project.preview.indicatorTitle)
                        }
                    })
                },
                handleMouseEnter: function(t) {
                    n.a.emit("indicator:change", this.project.preview.indicatorTitle)
                },
                handleMouseLeave: function(t) {
                    n.a.emit("indicator:change", "")
                }
            }
        }
          , f = (o(667),
        o(9))
          , component = Object(f.a)(d, (function() {
            var t = this
              , e = t._self._c;
            return e("nuxt-link", {
                ref: "container",
                class: ["project"],
                attrs: {
                    to: "/work/".concat(t.project.information.slug.current)
                },
                nativeOn: {
                    mouseenter: function(e) {
                        return t.handleMouseEnter.apply(null, arguments)
                    },
                    mouseleave: function(e) {
                        return t.handleMouseLeave.apply(null, arguments)
                    }
                }
            }, [e("div", {
                staticClass: "asset"
            }, [e("div", {
                staticClass: "asset__container"
            }, ["image" == t.project.preview.asset._type ? e("SanityImage", {
                ref: "image",
                staticClass: "abs full cover",
                attrs: {
                    image: t.project.preview.asset.image
                }
            }) : "vimeo" == t.project.preview.asset._type ? e("VideoPlayer", {
                staticClass: "abs",
                attrs: {
                    url: t.project.preview.asset.video.url,
                    autoplay: t.project.preview.asset.video.autoplay || !1,
                    showDuration: !t.project.preview.asset.video.autoplay,
                    controls: !t.project.preview.asset.video.autoplay
                }
            }) : t._e()], 1)]), t._v(" "), e("div", {
                staticClass: "copy"
            }, [e("p", {
                staticClass: "b2"
            }, [t._v(t._s(t.project.preview.subtitle))])])])
        }
        ), [], !1, null, "968ac0ba", null);
        e.default = component.exports;
        installComponents(component, {
            SanityImage: o(471).default,
            VideoPlayer: o(474).default
        })
    },
    652: function(t, e, o) {
        "use strict";
        o(50),
        o(69),
        o(53);
        e.a = {
            head: function() {
                return {
                    title: this.page && this.page.metadata && this.page.metadata.title ? this.page.metadata.title : "".concat(this.$config.SITE_NAME),
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: this.page && this.page.metadata && this.page.metadata.description ? this.page.metadata.description : "".concat(this.$config.SITE_NAME)
                    }, {
                        hid: "og:title",
                        property: "og:title",
                        content: this.page && this.page.metadata && this.page.metadata.title ? this.page.metadata.title : "".concat(this.$config.SITE_NAME)
                    }, {
                        hid: "og:url",
                        property: "og:url",
                        content: "".concat(this.$config.BASE_URL).concat(this.$route.path)
                    }, {
                        hid: "og:type",
                        property: "og:type",
                        content: "article"
                    }, {
                        hid: "og:site_name",
                        property: "og:site_name",
                        content: "".concat(this.$config.SITE_NAME)
                    }, {
                        hid: "og:description",
                        property: "og:description",
                        content: this.page && this.page.metadata && this.page.metadata.description ? this.page.metadata.description : "".concat(this.$config.SITE_NAME)
                    }, {
                        hid: "og:image:width",
                        property: "og:image:width",
                        content: this.page && this.page.metadata && this.page.metadata.image ? this.page.metadata.image.width : "1200"
                    }, {
                        hid: "og:image:height",
                        property: "og:image:height",
                        content: this.page && this.page.metadata && this.page.metadata.image ? this.page.metadata.image.height : "628"
                    }, {
                        hid: "og:image",
                        property: "og:image",
                        content: this.page && this.page.metadata && this.page.metadata.image ? this.page.metadata.image.url : "".concat(this.$config.BASE_URL, "/img/default.jpg")
                    }, {
                        hid: "twitter:card",
                        property: "twitter:card",
                        content: "summary_large_image"
                    }, {
                        hid: "twitter:url",
                        property: "twitter:url",
                        content: "".concat(this.$config.BASE_URL).concat(this.$route.path)
                    }, {
                        hid: "twitter:title",
                        property: "twitter:title",
                        content: this.page && this.page.metadata && this.page.metadata.title ? this.page.metadata.title : "".concat(this.$config.SITE_NAME)
                    }, {
                        hid: "twitter:description",
                        property: "twitter:description",
                        content: this.page && this.page.metadata && this.page.metadata.description ? this.page.metadata.description : "".concat(this.$config.SITE_NAME)
                    }, {
                        hid: "twitter:image",
                        property: "twitter:image",
                        content: "".concat(this.$config.BASE_URL, "/img/twitter.jpg")
                    }]
                }
            }
        }
    },
    655: function(t, e, o) {
        "use strict";
        o(635)
    },
    656: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, "span[data-v-df620228]{display:inline-block;position:relative;transition:all .5s ease}span[data-v-df620228]:hover{z-index:1;color:var(--color);text-decoration-color:var(--color) !important}span .hover-asset[data-v-df620228]{display:inline;position:absolute;top:50%;left:50%;transform:translate3d(-50%, -47%, 0);transition:opacity 500ms ease;pointer-events:none;opacity:0;z-index:-1}span .hover-asset__container[data-v-df620228]{width:100%;padding-top:var(--ratio);position:relative}span .hover-asset.active[data-v-df620228]{opacity:1}@media only screen and (min-width: 480px){span .hover-asset[data-v-df620228]{width:240rem}}@media only screen and (max-width: 479px){span .hover-asset[data-v-df620228]{width:240rem}}", ""]),
        n.locals = {},
        t.exports = n
    },
    660: function(t, e, o) {
        "use strict";
        var n = o(1)
          , r = (o(22),
        o(13))
          , c = o(94)
          , l = o(59)
          , d = o(60)
          , f = (o(53),
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
        o(182))
          , h = o(4)
          , _ = function() {
            return Object(d.a)((function t() {
                var e = this
                  , o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Object(l.a)(this, t),
                this.getElems = function() {
                    e.elems = [];
                    var t = [].concat(Object(c.a)(document.querySelectorAll("[data-src]:not([data-loading]):not([data-skip])")), Object(c.a)(document.querySelectorAll("[data-srcset]:not([data-loading]):not([data-skip])")));
                    Array.from(new Set(t)).forEach((function(t) {
                        t.setAttribute("data-load-set", ""),
                        e.elems.push(t)
                    }
                    ))
                }
                ,
                this.getCache = function() {
                    e.cache = [],
                    e.elems.forEach((function(t, o) {
                        var n = t.getBoundingClientRect().top
                          , r = {
                            el: t,
                            fade: t.hasAttribute("data-fade"),
                            isIntersected: !1,
                            elems: null,
                            inView: n <= e.vars.height
                        };
                        e.cache.push(r)
                    }
                    ))
                }
                ,
                this.renew = function() {
                    e.removeElements(),
                    e.addNewElements()
                }
                ,
                this.createObserver = function() {
                    e.hasIntersectionObserver && (e.observer = new IntersectionObserver(e.handler,{
                        root: null,
                        rootMargin: "0px 0px 0px 0px",
                        threshold: 0
                    }))
                }
                ,
                this.start = function() {
                    e.cache.forEach((function(t) {
                        t.inView,
                        t.tl;
                        var o = t.el;
                        e.hasIntersectionObserver ? e.observer.observe(t.el) : Object(f.a)(o)
                    }
                    ))
                }
                ,
                this.stillObserving = function() {
                    return e.cache.some((function(t) {
                        return !t.isIntersected
                    }
                    ))
                }
                ,
                this.handler = function(t) {
                    t.forEach((function(t) {
                        if (t.isIntersecting) {
                            var i = e.elems.indexOf(t.target)
                              , o = e.cache[i]
                              , c = o.el
                              , l = o.fade;
                            o.isIntersected = !0,
                            Object(f.a)(c).then(function() {
                                var t = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                if (t.t0 = l,
                                                !t.t0) {
                                                    t.next = 4;
                                                    break
                                                }
                                                return t.next = 4,
                                                r.a.to(e, {
                                                    autoAlpha: 1,
                                                    duration: .5,
                                                    ease: "power2.inOut"
                                                });
                                            case 4:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()),
                            e.stillObserving() ? e.observer.unobserve(t.target) : e.observer.disconnect()
                        }
                    }
                    ))
                }
                ;
                var d = h.b.bounds
                  , _ = d.ww
                  , m = d.wh;
                this.elems = [],
                this.cache = null,
                this.observer = null,
                this.vars = {
                    width: _,
                    height: m
                },
                this.hasIntersectionObserver = "IntersectionObserver"in window,
                this.options = {
                    direction: o.direction || "vertical"
                },
                this.init()
            }
            ), [{
                key: "init",
                value: function() {
                    this.getElems(),
                    this.getCache(),
                    this.createObserver(),
                    this.start()
                }
            }])
        }()
          , m = (o(54),
        o(67),
        function() {
            return Object(d.a)((function t() {
                var e = this
                  , o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Object(l.a)(this, t),
                this.add = function(t) {
                    var o = t.el
                      , n = t.tl
                      , r = void 0 === n ? null : n
                      , c = t.isIntersected
                      , l = void 0 !== c && c
                      , d = t.onVisible
                      , f = void 0 === d ? null : d
                      , h = t.onHidden
                      , _ = void 0 === h ? null : h
                      , m = t.inView
                      , v = t.once;
                    e.funcElems.push(o),
                    e.funcCache.push({
                        el: o,
                        tl: r,
                        onVisible: f,
                        onHidden: _,
                        isIntersected: l,
                        inView: m,
                        once: v
                    }),
                    e.observer.observe(o)
                }
                ,
                this.destroy = function() {
                    h.a.off("AddToScrollAnimations", e.add),
                    e.observer && e.observer.disconnect(),
                    e.observer = null
                }
                ,
                this.run = function() {
                    e.cache.forEach((function(t) {
                        e.setAnimation(t)
                    }
                    ))
                }
                ,
                this.start = function() {
                    e.cache.forEach((function(t) {
                        var o = t.inView
                          , n = t.tl;
                        e.hasIntersectionObserver ? o ? n.play() : e.observer.observe(t.el) : n.play()
                    }
                    ))
                }
                ,
                this.stillObserving = function() {
                    return [].concat(Object(c.a)(e.cache), Object(c.a)(e.funcCache)).some((function(t) {
                        return !t.isIntersected && t.isIntersected && !t.once
                    }
                    ))
                }
                ,
                this.handler = function(t) {
                    t.forEach((function(t) {
                        var o = t.target
                          , n = t.isIntersecting
                          , r = t.intersectionRatio
                          , c = e.elems.indexOf(o)
                          , l = e.funcElems.indexOf(o);
                        if (c > -1 && n) {
                            var d = e.cache[c];
                            d.isIntersected = !0,
                            d.tl.play(),
                            e.observer.unobserve(o)
                        } else if (l > -1) {
                            var f = e.funcCache[l];
                            n && !f.isIntersected ? (f.isIntersected = !0,
                            e.funcCache[l].tl && e.funcCache[l].tl.play(),
                            e.funcCache[l].onVisible && e.funcCache[l].onVisible(r),
                            e.funcCache[l].once && e.observer.unobserve(o)) : f.isIntersected && (!e.funcCache[l].once && f.isIntersected && (e.funcCache[l].tl && e.funcCache[l].tl.pause(),
                            e.funcCache[l].onHidden && e.funcCache[l].onHidden()),
                            f.isIntersected = !1)
                        }
                        e.stillObserving() && e.observer.disconnect()
                    }
                    ))
                }
                ,
                this.getCache = function() {
                    e.cache = [],
                    e.elems.forEach((function(t, o) {
                        var n = t.getBoundingClientRect().top
                          , r = {
                            el: t,
                            animation: t.dataset.animate,
                            isIntersected: !1,
                            elems: null,
                            tl: null,
                            inView: n <= e.vars.height,
                            once: !1
                        };
                        e.cache.push(r)
                    }
                    ))
                }
                ,
                this.queryDirectChildren = function(t, e) {
                    var o = t.querySelectorAll(e);
                    return [].slice.call(o).filter((function(o) {
                        return o.parentNode.closest(e) === t.closest(e)
                    }
                    ))
                }
                ,
                this.createObserver = function() {
                    e.hasIntersectionObserver && (e.observer = new IntersectionObserver(e.handler,{
                        root: null,
                        rootMargin: (e.options.direction,
                        "0px 0px 0px 0px"),
                        threshold: [.5]
                    }))
                }
                ,
                this.getElems = function() {
                    e.elems = [],
                    Object(c.a)(document.querySelectorAll("[data-animate]")).forEach((function(t) {
                        if ("vertical" == e.options.direction) {
                            var o = t.getBoundingClientRect()
                              , n = o.top
                              , r = o.left;
                            (n >= e.vars.height || r >= e.vars.width) && e.elems.push(t)
                        } else {
                            t.getBoundingClientRect().left >= e.vars.width && e.elems.push(t)
                        }
                    }
                    ))
                }
                ,
                this.setAnimation = function(t) {
                    var e = t.el;
                    t.animation,
                    t.inView;
                    t.tl = r.a.timeline({
                        paused: !0,
                        immediate: !0
                    }),
                    t.tl.fromTo(e, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: 1,
                        ease: "Power2.easeOut"
                    }),
                    t.tl.progress(1).progress(0)
                }
                ,
                this.elems = [],
                this.funcElems = [],
                this.cache = [],
                this.funcCache = [],
                this.observer = null,
                this.vars = {
                    width: h.b.bounds.ww,
                    height: h.b.bounds.wh
                },
                this.hasIntersectionObserver = "IntersectionObserver"in window,
                this.options = {
                    direction: o.direction || "vertical"
                },
                h.a.on("AddToScrollAnimations", this.add),
                this.init()
            }
            ), [{
                key: "init",
                value: function() {
                    this.getElems(),
                    this.getCache(),
                    this.createObserver(),
                    this.run()
                }
            }])
        }());
        e.a = function() {
            return {
                computed: {
                    domLoaded: function() {
                        return this.$store.getters["preloader/isLoaded"]
                    },
                    navigating: function() {
                        return this.$store.getters["nav/isNavigating"]
                    }
                },
                watch: {
                    domLoaded: function(t) {
                        t && !this.navigating && this.init()
                    },
                    navigating: function(t) {
                        !t && this.domLoaded && this.init()
                    }
                },
                beforeDestroy: function() {
                    this.ScrollAnimations && this.ScrollAnimations.destroy()
                },
                mounted: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    r.a.delayedCall(.01, (function() {
                                        window.scrollTo(0, 0),
                                        t.domLoaded && !t.navigating && t.$nextTick((function() {
                                            t.init()
                                        }
                                        ))
                                    }
                                    ));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                methods: {
                    init: function() {
                        this.LazyLoading = new _,
                        this.ScrollAnimations = new m
                    }
                }
            }
        }
    },
    664: function(t, e, o) {
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
            "./zh-tw.js": 633
        };
        function n(t) {
            var e = r(t);
            return o(e)
        }
        function r(t) {
            if (!o.o(map, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return map[t]
        }
        n.keys = function() {
            return Object.keys(map)
        }
        ,
        n.resolve = r,
        t.exports = n,
        n.id = 664
    },
    665: function(t, e, o) {
        "use strict";
        o(639)
    },
    666: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, 'footer{position:relative}footer.white{background:#b7e3b6}footer.white .about{background:#fff}footer.white .about__line{background:#dcdcdc}footer.white .about .decoration.opaque{text-decoration-color:#ccc}footer.white .about .decoration:not(.opaque){text-decoration-color:rgba(204,204,204,0)}footer.white .contact__information__detail__line{background:#7da07d}footer.white .contact .underline:after{background:#7da07d}footer.white .contact input::placeholder{color:#849f80}footer.black{background:#000}footer.black .about{color:#fff;background:#000}footer.black .about__line{background:#dcdcdc}footer.black .about .decoration.opaque{text-decoration-color:#ccc}footer.black .about .decoration:not(.opaque){text-decoration-color:rgba(204,204,204,0)}footer.black .about .decoration:hover{text-decoration-color:#fff !important}footer.black .contact__information__detail__line{background:#7da07d}footer.black .contact .underline:after{background:#7da07d}footer.black .contact input::placeholder{color:#849f80}footer.green{background:#b7e3b6}footer.green .about{background:#fff}footer.green .about__line{background:#dcdcdc}footer.green .about .decoration.opaque{text-decoration-color:#ccc}footer.green .about .decoration:not(.opaque){text-decoration-color:rgba(204,204,204,0)}footer.green .contact__information__detail__line{background:#7da07d}footer.green .contact .underline:after{background:#7da07d}footer.green .contact input::placeholder{color:#849f80}footer.darkgreen{background:#2d593b}footer.darkgreen .decoration{text-decoration-color:#244931 !important}footer.darkgreen .decoration:hover{text-decoration-color:#000 !important}footer.darkgreen .about{background:#2d593b}footer.darkgreen .about__line{background:#20412b}footer.darkgreen .contact{background:#2d593b}footer.darkgreen .contact__information__detail__line{background:#20412b}footer.darkgreen .contact__marquee{background:#b7e3b6}footer.darkgreen .contact .underline:after{background:#20412b}footer.darkgreen .contact input::placeholder{color:#244931}footer .about{position:relative;z-index:1}footer .about__link{display:inline-block;text-transform:capitalize}footer .about__link span{position:relative;font-weight:400}footer .about__description p{font-family:"PSTimes"}footer .contact{position:relative;display:flex;flex-wrap:wrap;overflow:hidden;background:#b7e3b6}footer .contact input::placeholder{font-weight:500;color:#ccc}@media(hover: hover){footer .contact input:hover::placeholder{color:#000}}footer .contact input:focus::placeholder{color:#b7e3b6}footer .contact__marquee{text-transform:uppercase}footer .contact__information__detail p,footer .contact__information__detail button,footer .contact__information__detail input,footer .contact__information__detail ::placeholder,footer .contact__information__detail svg path,footer .contact__information__detail button:after{transition:all 500ms ease}footer .contact__information__detail.submitting{pointer-events:none}footer .contact__information__detail.submitting p,footer .contact__information__detail.submitting button,footer .contact__information__detail.submitting input,footer .contact__information__detail.submitting svg path{opacity:.2}footer .contact__information__detail.submitting input{pointer-events:none}footer .contact__information__detail.error p,footer .contact__information__detail.error button,footer .contact__information__detail.error input,footer .contact__information__detail.error svg path{opacity:1}footer .contact__information__detail.error p{color:red}footer .contact__information__detail.error button{color:red}footer .contact__information__detail.error button:after{background:red}footer .contact__information__detail.error input{color:red;pointer-events:none}footer .contact__information__detail.error ::placeholder{color:red !important}footer .contact__information__detail.error svg path{stroke:red}footer .contact__information__detail.success p,footer .contact__information__detail.success button,footer .contact__information__detail.success input,footer .contact__information__detail.success svg path{opacity:1}footer .contact__information__detail.success p{color:#036600}footer .contact__information__detail.success button{color:#036600}footer .contact__information__detail.success button:after{background:#036600}footer .contact__information__detail.success input{color:#036600;pointer-events:none}footer .contact__information__detail.success ::placeholder{color:#036600 !important}footer .contact__information__detail.success svg path{stroke:#036600}@media only screen and (min-width: 480px){footer{z-index:4}footer .about{transform:translate3d(0, 0, 0)}footer .about__inner{padding:14rem var(--margin) 34rem var(--margin)}footer .about__line{position:absolute;left:0;width:100vw;height:1px}footer .about__line:first-child{top:0}footer .about__line:nth-child(2){bottom:0}footer .about__description p{font-size:var(--h2);line-height:var(--h2-line_height);letter-spacing:var(--h2-letter_spacing)}footer .about__description p .indent{margin-left:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.0833333333 + var(--gutter)*1)}footer .about__description p a{text-decoration:underline;text-decoration-style:solid;text-decoration-thickness:3px;text-underline-offset:2px}footer .about__link{margin-top:54rem}footer .about__link div{width:12rem}footer .contact{position:relative;display:flex;flex-wrap:wrap;overflow:hidden;bottom:0;transform:translate3d(0, 0, 0)}footer .contact__title{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2);margin-top:23rem;margin-left:var(--margin);margin-right:var(--gutter)}footer .contact__title p{text-transform:uppercase}footer .contact__information{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.75 + var(--gutter)*8)}footer .contact__information__detail{display:flex;position:relative;padding:23rem 0 40rem 0}footer .contact__information__detail:first-child .contact__information__detail__line{display:none}footer .contact__information__detail:last-of-type{padding:20rem 0 80rem 0}footer .contact__information__detail__line{position:absolute;top:0;left:0;width:calc(100% + var(--margin));height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}footer .contact__information__detail__form{position:relative;display:flex;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}footer .contact__information__detail__form__feedback{position:absolute;top:0;left:0}footer .contact__information__detail__form__input{position:absolute;top:0;left:0;width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2);margin-right:var(--gutter)}footer .contact__information__detail__form__input input{width:92%;font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}footer .contact__information__detail__form__input svg{position:absolute;width:100%;left:-10rem;bottom:-6rem}footer .contact__information__detail__form button{position:absolute;top:0;left:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*3);text-transform:uppercase;padding-left:18rem}footer .contact__information__detail__form button:before{content:"";position:absolute;top:50%;left:0;width:12rem;height:12rem;border-radius:100%;background:#000;transform:translate3d(0, -50%, 0)}footer .contact__information__detail__title{text-transform:uppercase;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2);margin-right:var(--margin)}footer .contact__information__detail__title p{text-transform:uppercase}footer .contact__information__detail__content{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2)}footer .contact__information__detail__content:last-child{margin-left:var(--gutter)}footer .contact__information__detail__content__title{text-transform:uppercase}footer .contact__information__detail__content__detail p{font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}footer .contact__information__detail__content a div{display:inline-block;width:9rem;position:relative;top:-1rem}footer .contact__marquee{display:flex;flex:0 0 100%;position:relative;align-items:center;padding:0 0 0 var(--margin)}footer .contact__marquee__description{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*1);margin-right:var(--gutter);text-transform:uppercase;letter-spacing:-0.02em}footer .contact__marquee__description span:last-child{display:none}footer .contact__marquee__line{display:none;position:absolute;top:0;left:0;width:100%;height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}footer .contact__marquee__ticker{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.8333333333 + var(--gutter)*10);overflow:hidden;user-select:none;pointer-events:none}footer .contact__marquee__ticker__inner{display:flex;will-change:transform}footer .contact__marquee__ticker__inner div{display:inline-flex;will-change:transform;transform:translate3d(0, 0, 0)}footer .contact__marquee__ticker__inner p{display:inline-block;white-space:nowrap;line-height:1.1}footer .contact__marquee__ticker__inner p span{display:inline-block;width:200rem;text-align:left}}@media only screen and (max-width: 479px){footer{z-index:4}footer .about{padding:15px var(--margin) 30px var(--margin)}footer .about__line{position:absolute;left:0;width:100vw;height:1px}footer .about__line:first-child{top:0}footer .about__line:nth-child(2){bottom:0}footer .about__description p{font-size:var(--h2);line-height:var(--h2-line_height);letter-spacing:var(--h2-letter_spacing)}footer .about__description p .indent{margin-left:52rem}footer .about__description p a{text-decoration:underline;text-decoration-style:solid;text-decoration-thickness:3px;text-underline-offset:2px}footer .about__link{margin-top:52px}footer .about__link div{width:10px}footer .contact{bottom:0}footer .contact__title{display:none}footer .contact__information{margin-left:var(--margin);flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}footer .contact__information .contact__information__detail__line{position:absolute;top:0;left:-15px;width:100vw;height:1px;transform:translate3d(0, 0, 0)}footer .contact__information__detail{display:flex;flex-wrap:wrap;position:relative;padding:14px 0 20px 0}footer .contact__information__detail:last-child{padding:14px 0}footer .contact__information__detail:first-child .contact__information__detail__line{display:none}footer .contact__information__detail__form{position:relative;display:flex;flex:0 0 100vw;height:16px}footer .contact__information__detail__form__input{position:absolute;top:0;left:0;width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2);margin-right:var(--gutter)}footer .contact__information__detail__form__input input{width:92%;font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}footer .contact__information__detail__form__input svg{position:absolute;width:100%;left:-10rem;bottom:-6rem}footer .contact__information__detail__form button{position:absolute;top:0;left:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*3);text-transform:uppercase;padding-left:18rem;margin-left:14rem}footer .contact__information__detail__form button:before{content:"";position:absolute;top:5rem;left:0;width:12rem;height:12rem;border-radius:100%;background:#000}footer .contact__information__detail__title{text-transform:uppercase;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin-bottom:24px}footer .contact__information__detail__title p{text-transform:uppercase}footer .contact__information__detail__title p br{display:none}footer .contact__information__detail__content{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.5 + var(--gutter)*1)}footer .contact__information__detail__content:last-child{margin-left:var(--gutter)}footer .contact__information__detail__content__title{text-transform:uppercase}footer .contact__information__detail__content__detail p{font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}footer .contact__information__detail__content a span:after{bottom:2px}footer .contact__information__detail__content a div{display:inline-block;width:8px}footer .contact__marquee{display:flex;flex-wrap:wrap;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);align-items:center;position:relative;padding:12px 0}footer .contact__marquee__description{flex:0 0 auto;margin-right:14px;text-transform:uppercase;letter-spacing:-0.02em;margin-left:var(--margin)}footer .contact__marquee__description span:first-child{display:none}footer .contact__marquee__ticker{flex:1;overflow:hidden;user-select:none;pointer-events:none}footer .contact__marquee__ticker__inner{display:flex;will-change:transform}footer .contact__marquee__ticker__inner div{display:inline-flex;will-change:transform;transform:translate3d(0, 0, 0)}footer .contact__marquee__ticker__inner p{display:inline-block;white-space:nowrap;line-height:1.1;font-size:27rem}footer .contact__marquee__ticker__inner p span{display:inline-block;width:126rem;text-align:left}}', ""]),
        n.locals = {},
        t.exports = n
    },
    667: function(t, e, o) {
        "use strict";
        o(640)
    },
    668: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, ".project[data-v-968ac0ba]{position:relative;align-self:flex-start}.asset[data-v-968ac0ba]{transform:translate3d(0, 0, 0)}.asset__container[data-v-968ac0ba]{width:100%;padding-top:var(--ratio);position:relative;background:#b7e3b6}.asset__container video[data-v-968ac0ba]{position:absolute;top:0;left:0}@media only screen and (min-width: 480px){.copy[data-v-968ac0ba]{margin-top:14rem}}@media only screen and (max-width: 479px){.copy[data-v-968ac0ba]{margin-top:10px}}", ""]),
        n.locals = {},
        t.exports = n
    },
    670: function(t, e, o) {
        var content = o(707);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("42235922", content, !0, {
            sourceMap: !1
        })
    },
    671: function(t, e, o) {
        var content = o(712);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("252ab0c6", content, !0, {
            sourceMap: !1
        })
    },
    672: function(t, e, o) {
        var content = o(714);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("56c0a096", content, !0, {
            sourceMap: !1
        })
    },
    706: function(t, e, o) {
        "use strict";
        o(670)
    },
    707: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, ".image-slide[data-v-2021e505]{user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}", ""]),
        n.locals = {},
        t.exports = n
    },
    708: function(t, e, o) {
        var content = o(793);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("32bea9c1", content, !0, {
            sourceMap: !1
        })
    },
    709: function(t, e, o) {
        var content = o(795);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("dc98c4ba", content, !0, {
            sourceMap: !1
        })
    },
    710: function(t, e, o) {
        var content = o(797);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("147089e2", content, !0, {
            sourceMap: !1
        })
    },
    711: function(t, e, o) {
        "use strict";
        o(671)
    },
    712: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, ".selected-work-module.double .project:first-child .asset__container{padding-top:140%}.selected-work-module.double .project:last-child .asset__container{padding-top:66.66%}@media only screen and (min-width: 480px){.selected-work-module.double{padding-left:var(--gutter)}.selected-work-module.double .project:first-child{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3);margin-left:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.0833333333 + var(--gutter)*1);margin-right:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.0833333333 + var(--gutter)*1)}.selected-work-module.double .project:first-child .asset__container{padding-top:140%}.selected-work-module.double .project:last-child{width:50vw;margin-left:calc(var(--gutter)/2)}.selected-work-module.double .project:last-child .asset__container{padding-top:66.66%}}@media only screen and (max-width: 479px){.selected-work-module.double{padding:0 var(--margin)}.selected-work-module.double .project{width:100%;margin-bottom:100px}.selected-work-module.double .project:first-child .asset__container{padding-top:66.66%}}", ""]),
        n.locals = {},
        t.exports = n
    },
    713: function(t, e, o) {
        "use strict";
        o(672)
    },
    714: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, ".singular{padding:0 var(--margin);justify-content:center}.singular .project .asset__container{padding-top:66.66%}@media only screen and (min-width: 480px){.singular.regular .project{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.6041666667 + var(--gutter)*6.25)}.singular.wide .project{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.7708333333 + var(--gutter)*8.25)}}@media only screen and (max-width: 479px){.singular .project{width:100%;margin-bottom:100px}}", ""]),
        n.locals = {},
        t.exports = n
    },
    715: function(t, e, o) {
        var content = o(799);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("67a008f1", content, !0, {
            sourceMap: !1
        })
    },
    757: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(1)
          , r = (o(22),
        o(142),
        o(13))
          , c = o(182)
          , l = {
            name: "ImageModule",
            components: {
                SanityImageNew: o(471).default
            },
            props: {
                asset: {
                    type: Object,
                    required: !0
                },
                currentIndex: {
                    type: Number,
                    required: !0
                },
                index: {
                    type: Number,
                    required: !0
                },
                total: {
                    type: Number,
                    required: !0
                }
            },
            computed: {
                domLoaded: function() {
                    return this.$store.getters["preloader/isLoaded"]
                },
                navigating: function() {
                    return this.$store.getters["nav/isNavigating"]
                },
                inDevelopment: function() {
                    return "development" === this.$config.ENV
                }
            },
            watch: {
                domLoaded: function(t) {
                    var e = this;
                    t && !this.navigating && this.loadable() && this.$nextTick((function() {
                        e.loadImage()
                    }
                    ))
                },
                navigating: function(t) {
                    var e = this;
                    !t && this.domLoaded && this.loadable() && this.$nextTick((function() {
                        e.loadImage()
                    }
                    ))
                },
                currentIndex: {
                    handler: function(t) {
                        var e = this;
                        this.domLoaded && !this.navigating && this.loadable() && this.$nextTick((function() {
                            e.loadImage()
                        }
                        ))
                    }
                }
            },
            data: function() {
                return {
                    loaded: !1
                }
            },
            mounted: function() {
                var t = this;
                0 == this.index && this.$refs.img.setAttribute("data-critical", ""),
                this.domLoaded && !this.navigating && this.loadable() && this.$nextTick((function() {
                    t.loadImage()
                }
                ))
            },
            methods: {
                loadable: function() {
                    var t = this.currentIndex - 1 < 0 ? this.total - 1 : this.currentIndex - 1;
                    return this.index == this.currentIndex || this.index == this.currentIndex + 1 || t == this.index
                },
                loadImage: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var image;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.loaded) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (!(t.$refs.img.hasAttribute("data-loading") || t.$refs.img.hasAttribute("data-loaded"))) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    return t.loaded = !0,
                                    e.next = 8,
                                    Object(c.a)(t.$refs.img);
                                case 8:
                                    image = e.sent,
                                    r.a.to(image, {
                                        autoAlpha: 1,
                                        duration: .5,
                                        ease: "power2.inOut"
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                }
            }
        }
          , d = o(9)
          , component = Object(d.a)(l, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "image-container"
            }, [e("img", {
                ref: "img",
                staticClass: "abs full cover",
                attrs: {
                    "data-src": t.inDevelopment ? "/placeholders/placeholder-1.jpg" : t.asset.image.url,
                    alt: "",
                    "data-fade": "",
                    "data-skip": ""
                }
            })])
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    758: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(1)
          , r = (o(22),
        o(142),
        o(13))
          , c = o(182)
          , l = {
            name: "VideoSlide",
            props: {
                asset: {
                    type: Object,
                    required: !0
                },
                currentIndex: {
                    type: Number,
                    required: !0
                },
                index: {
                    type: Number,
                    required: !0
                },
                total: {
                    type: Number,
                    required: !0
                }
            },
            computed: {
                domLoaded: function() {
                    return this.$store.getters["preloader/isLoaded"]
                },
                navigating: function() {
                    return this.$store.getters["nav/isNavigating"]
                },
                active: function() {
                    return this.index === this.currentIndex
                }
            },
            watch: {
                domLoaded: function(t) {
                    var e = this;
                    t && !this.navigating && this.loadable() && this.$nextTick((function() {
                        e.loadVideo()
                    }
                    ))
                },
                navigating: function(t) {
                    var e = this;
                    !t && this.domLoaded && this.loadable() && this.$nextTick((function() {
                        e.loadVideo()
                    }
                    ))
                },
                currentIndex: {
                    handler: function(t) {
                        var e = this;
                        this.domLoaded && !this.navigating && this.loadable() && this.$nextTick((function() {
                            e.loadVideo()
                        }
                        ))
                    }
                },
                active: {
                    handler: function(t) {
                        t ? (this.isPlaying = !0,
                        this.loaded && this.$refs.video.$refs.video.play()) : (this.isPlaying = !1,
                        this.loaded && this.$refs.video.$refs.video.pause())
                    }
                }
            },
            data: function() {
                return {
                    loaded: !1
                }
            },
            mounted: function() {
                var t = this;
                this.domLoaded && !this.navigating && this.loadable() && this.$nextTick((function() {
                    t.loadVideo()
                }
                ))
            },
            methods: {
                loadable: function() {
                    var t = this.currentIndex - 1 < 0 ? this.total - 1 : this.currentIndex - 1;
                    return this.index == this.currentIndex || this.index == this.currentIndex + 1 || t == this.index
                },
                loadVideo: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var video;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.loaded) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (video = t.$refs.video.$refs.video,
                                    !(video.hasAttribute("data-loading") || video.hasAttribute("data-loaded"))) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return t.loaded = !0,
                                    e.next = 9,
                                    Object(c.a)(video);
                                case 9:
                                    video = e.sent,
                                    r.a.to(video, {
                                        autoAlpha: 1,
                                        duration: .5,
                                        ease: "power2.inOut"
                                    }),
                                    t.isPlaying && t.$refs.video.$refs.video.play();
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                }
            }
        }
          , d = (o(706),
        o(9))
          , component = Object(d.a)(l, (function() {
            return (0,
            this._self._c)("VideoPlayer", {
                ref: "video",
                staticClass: "abs",
                attrs: {
                    url: this.asset.video.url,
                    autoplay: !0,
                    showDuration: !0,
                    controls: !1,
                    skip: !0
                }
            })
        }
        ), [], !1, null, "2021e505", null);
        e.default = component.exports;
        installComponents(component, {
            VideoPlayer: o(474).default
        })
    },
    759: function(t, e, o) {
        "use strict";
        o.r(e);
        o(53),
        o(183),
        o(496),
        o(142);
        var n = o(646)
          , r = o.n(n)
          , c = {
            name: "NewsSectionCarouselItem",
            props: {
                newsDetail: {
                    type: Object,
                    required: !0
                },
                index: {
                    type: Number,
                    required: !0
                },
                total: {
                    type: Number,
                    required: !0
                }
            },
            computed: {
                cursorCopy: function() {
                    return this.$store.getters.cursorCopy
                }
            },
            methods: {
                formatDate: function(t) {
                    return r()(new Date(t), "YYYY-MM-DD").format("MM/DD/YY")
                },
                handleMouseMove: function(t) {
                    this.cursorCopy !== "".concat(this.index + 1, " of ").concat(this.total) && this.$store.dispatch("setCursorCopy", "".concat(this.index + 1, " of ").concat(this.total))
                },
                handleMouseLeave: function() {
                    "" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "")
                }
            }
        }
          , l = o(9)
          , component = Object(l.a)(c, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "news-section__item"
            }, [t.newsDetail.content.link ? e("a", {
                attrs: {
                    href: t.newsDetail.content.link,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [e("div", {
                class: ["asset", t.newsDetail.content.sizing],
                on: {
                    mousemove: t.handleMouseMove,
                    mouseleave: t.handleMouseLeave
                }
            }, [e("div", {
                staticClass: "asset__container"
            }, [e("SanityImage", {
                ref: "image",
                staticClass: "abs full cover",
                attrs: {
                    image: t.newsDetail.content.asset.image
                }
            })], 1)]), t._v(" "), e("p", {
                staticClass: "b3"
            }, [t._v(t._s(t.newsDetail.content.title))]), t._v(" "), e("p", {
                staticClass: "b3"
            }, [t._v("\n            " + t._s(t.newsDetail.content.date ? "".concat(t.formatDate(t.newsDetail.content.date)).concat(t.newsDetail.content.services ? " •  " : "", " ") : "") + "\n            " + t._s(t.newsDetail.content.services && t.newsDetail.content.services.join(", ")) + "\n        ")])]) : [e("div", {
                class: ["asset", t.newsDetail.content.sizing],
                on: {
                    mousemove: t.handleMouseMove,
                    mouseleave: t.handleMouseLeave
                }
            }, [e("div", {
                staticClass: "asset__container"
            }, [e("SanityImage", {
                ref: "image",
                staticClass: "abs full cover",
                attrs: {
                    image: t.newsDetail.content.asset.image
                }
            })], 1)]), t._v(" "), e("p", {
                staticClass: "b3"
            }, [t._v(t._s(t.newsDetail.content.title))]), t._v(" "), e("p", {
                staticClass: "b3"
            }, [t._v("\n            " + t._s(t.newsDetail.content.date ? "".concat(t.formatDate(t.newsDetail.content.date)).concat(t.newsDetail.content.services ? " •  " : "", " ") : "") + "\n            " + t._s(t.newsDetail.content.services && t.newsDetail.content.services.join(", ")) + "\n        ")])]], 2)
        }
        ), [], !1, null, "4a78fed4", null);
        e.default = component.exports;
        installComponents(component, {
            SanityImage: o(471).default
        })
    },
    760: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(651)
          , r = {
            name: "DoubleProjectModule",
            props: {
                module: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                Project: n.default
            }
        }
          , c = (o(711),
        o(9))
          , component = Object(c.a)(r, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                class: ["selected-work-module double"]
            }, t._l(t.module.projects, (function(t, o) {
                return e("Project", {
                    key: o,
                    attrs: {
                        project: t
                    }
                })
            }
            )), 1)
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    761: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(651)
          , r = {
            name: "SingularProjectModule",
            props: {
                module: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                Project: n.default
            }
        }
          , c = (o(713),
        o(9))
          , component = Object(c.a)(r, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                class: ["selected-work-module singular", t.module.layout]
            }, [e("Project", {
                attrs: {
                    project: t.module.project
                }
            })], 1)
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    792: function(t, e, o) {
        "use strict";
        o(708)
    },
    793: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, ".slideshow[data-v-991aa808]{position:relative;background:#fff;width:100vw;overflow:hidden;cursor:pointer;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.slideshow .slides[data-v-991aa808]{position:fixed;top:0;left:0;width:100vw;will-change:transform;overflow:hidden;transform:translate3d(0, 0, 0)}.slideshow .slide[data-v-991aa808]{position:fixed;top:0;left:0;width:100vw;display:flex}.slideshow .slide[data-v-991aa808]:not(.active){opacity:0}.slideshow .image-container[data-v-991aa808]{position:relative;flex:1}.slideshow .details[data-v-991aa808]{position:absolute;left:50%;transform:translate3d(-50%, 0, 0);width:calc(100vw - var(--margin)*2);height:100%;user-select:none;z-index:10;mix-blend-mode:difference;color:#fff}.slideshow .details__descriptions[data-v-991aa808]{position:absolute;bottom:0;left:0;z-index:1}.slideshow .details__description[data-v-991aa808]{position:absolute;bottom:0;left:0}.slideshow .details__description[data-v-991aa808]:not(.active){opacity:0}.slideshow .details__counter[data-v-991aa808]{position:absolute;bottom:0;right:0;text-align:right}@media only screen and (min-width: 480px){.slideshow[data-v-991aa808]{height:calc(100*var(--vh, 1vh))}.slideshow .slides[data-v-991aa808],.slideshow .slide[data-v-991aa808]{height:calc(100*var(--vh, 1vh))}.slideshow .details[data-v-991aa808]{bottom:20rem}.slideshow .details__descriptions[data-v-991aa808],.slideshow .details__description[data-v-991aa808]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.slideshow .details__counter[data-v-991aa808]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*1)}}@media only screen and (max-width: 479px){.slideshow[data-v-991aa808]{height:580rem}.slideshow .slide[data-v-991aa808]{transition:opacity 600ms ease}.slideshow .slides[data-v-991aa808],.slideshow .slide[data-v-991aa808]{height:580rem}.slideshow .details[data-v-991aa808]{bottom:11px}.slideshow .details__descriptions[data-v-991aa808],.slideshow .details__description[data-v-991aa808]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.slideshow .details__counter[data-v-991aa808]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.25 + var(--gutter)*0)}}", ""]),
        n.locals = {},
        t.exports = n
    },
    794: function(t, e, o) {
        "use strict";
        o(709)
    },
    795: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, ".news-section{position:relative;overflow:hidden;background:#fff}.news-section__carousel{position:relative;width:100%}.news-section__carousel__container{display:flex}.news-section__item .asset{transform:translate3d(0, 0, 0)}.news-section__item .asset__container{width:100%;padding-top:var(--ratio);position:relative;background:#b7e3b6}.news-section__item .asset.square .asset__container{padding-top:100%}.news-section__item .asset.tall .asset__container{padding-top:140%}.news-section__link{display:inline-block;text-transform:capitalize}.news-section__link span{position:relative;font-weight:400}@media only screen and (min-width: 480px){.news-section{padding:20rem 0 40rem 0}.news-section h2{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5);margin-left:var(--margin)}.news-section__link{margin-left:var(--margin);margin-top:54rem}.news-section__link div{width:12rem}.news-section__line{position:absolute;top:0;left:0;width:100%;height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}.news-section__carousel{margin-top:174rem;margin-bottom:164rem;padding-left:calc(calc((100vw - var(--margin) * 2 - var(--gutter) * 11) * 0.0833333333 + var(--gutter) * 1) + var(--gutter));padding-right:calc(calc((100vw - var(--margin) * 2 - var(--gutter) * 11) * 0.0833333333 + var(--gutter) * 1) + var(--gutter))}.news-section__item{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2);margin-right:var(--gutter)}.news-section__item p{font-size:16rem;line-height:1.125}.news-section__item p:first-of-type{margin-top:12rem;color:#000}.news-section__item p:last-of-type{color:#a5a5a5}.news-section__item p:last-of-type span{position:relative}}@media only screen and (max-width: 479px){.news-section{padding:15px 0 30px 0}.news-section h2{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2);margin-left:var(--margin)}.news-section__link{margin-left:var(--margin);margin-top:52px}.news-section__link div{width:10px}.news-section__line{position:absolute;top:0;left:0;width:100%;height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}.news-section__carousel{margin-top:55px;padding-left:var(--gutter);padding-right:var(--gutter)}.news-section__item{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2);margin-right:var(--gutter)}.news-section__item p{font-size:14px;line-height:1.125}.news-section__item p:first-of-type{margin-top:12px;color:#000}.news-section__item p:last-of-type{color:#a5a5a5}.news-section__item p:last-of-type span{position:relative}}", ""]),
        n.locals = {},
        t.exports = n
    },
    796: function(t, e, o) {
        "use strict";
        o(710)
    },
    797: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, ".selected-work-module.triple .project:first-child .asset__container,.selected-work-module.triple .project:nth-child(3) .asset__container{padding-top:66.66%}.selected-work-module.triple .project:nth-child(2) .asset__container{padding-top:140%}@media only screen and (min-width: 480px){.selected-work-module.triple:not(.mirrored) .project:first-child{width:50vw;margin-right:calc(var(--gutter)/2)}.selected-work-module.triple:not(.mirrored) .project:first-child .copy{padding-left:var(--margin)}.selected-work-module.triple:not(.mirrored) .project:nth-child(2){width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3);margin-top:360rem;margin-left:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*2)}.selected-work-module.triple:not(.mirrored) .project:nth-child(3){margin-top:-60rem;margin-left:var(--margin);width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.4166666667 + var(--gutter)*4)}.selected-work-module.triple.mirrored .project:first-child{order:2;width:50vw;margin-left:auto}.selected-work-module.triple.mirrored .project:first-child .copy{padding-left:var(--margin)}.selected-work-module.triple.mirrored .project:nth-child(2){order:1;width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3);margin-left:var(--margin);margin-top:360rem}.selected-work-module.triple.mirrored .project:nth-child(3){order:3;margin-top:-60rem;margin-left:auto;margin-right:var(--margin);width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.4166666667 + var(--gutter)*4)}}@media only screen and (max-width: 479px){.selected-work-module.triple{padding:0 var(--margin)}.selected-work-module.triple .project{width:100%;margin-bottom:100px}}", ""]),
        n.locals = {},
        t.exports = n
    },
    798: function(t, e, o) {
        "use strict";
        o(715)
    },
    799: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, ".selected-work[data-v-fbf2ea30]{position:relative;overflow:hidden;z-index:0;background:#fff}.selected-work .selected-work-module[data-v-fbf2ea30]{display:flex;flex-wrap:wrap;position:relative}.selected-work__indicator[data-v-fbf2ea30]{position:fixed;top:50%;left:50%;transform:translate3d(-50%, -50%, 0);z-index:10;mix-blend-mode:difference;color:#fff;text-align:center;width:75vw;user-select:none;pointer-events:none;white-space:pre}.selected-work__link[data-v-fbf2ea30]{display:inline-block;text-transform:capitalize}.selected-work__link span[data-v-fbf2ea30]{position:relative;font-weight:400}@media only screen and (min-width: 480px){.selected-work[data-v-fbf2ea30]{padding-bottom:40rem}.selected-work .selected-work-module[data-v-fbf2ea30]:first-child{margin-top:123rem}.selected-work .selected-work-module[data-v-fbf2ea30]:not(:last-child){margin-bottom:214rem}.selected-work .selected-work-module[data-v-fbf2ea30]:last-child{margin-bottom:100rem}.selected-work__link[data-v-fbf2ea30]{margin-left:var(--margin);margin-top:54rem}.selected-work__link div[data-v-fbf2ea30]{width:12rem}.selected-work h1[data-v-fbf2ea30]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5);margin-top:14rem;margin-left:var(--margin)}}@media only screen and (max-width: 479px){.selected-work[data-v-fbf2ea30]{padding-bottom:18px}.selected-work .selected-work-module[data-v-fbf2ea30]:first-child{margin-top:65px}.selected-work .selected-work-module[data-v-fbf2ea30]:not(:last-child){margin-bottom:30px}.selected-work__link[data-v-fbf2ea30]{margin-left:var(--margin);margin-top:52px}.selected-work__link div[data-v-fbf2ea30]{width:10px}.selected-work h1[data-v-fbf2ea30]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2);margin-top:15px;margin-left:var(--margin)}}", ""]),
        n.locals = {},
        t.exports = n
    },
    820: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(651)
          , r = {
            name: "TripleProjectModule",
            props: {
                module: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                Project: n.default
            }
        }
          , c = (o(796),
        o(9))
          , component = Object(c.a)(r, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                class: ["selected-work-module triple", {
                    mirrored: t.module.mirrored
                }]
            }, t._l(t.module.projects, (function(t, o) {
                return e("Project", {
                    key: o,
                    attrs: {
                        project: t
                    }
                })
            }
            )), 1)
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    828: function(t, e, o) {
        var content = o(869);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(33).default)("04e86549", content, !0, {
            sourceMap: !1
        })
    },
    840: function(t, e, o) {
        "use strict";
        o.r(e);
        o(11),
        o(56);
        var n = o(4)
          , r = o(475)
          , c = o(757)
          , l = o(758)
          , d = o(13)
          , f = o(495);
        d.a.registerPlugin(f.ScrollTrigger);
        var h = {
            name: "Slideshow",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                ImageModule: c.default,
                VideoModule: l.default
            },
            computed: {
                total: function() {
                    return this.data.projects.length
                },
                cursorCopy: function() {
                    return this.$store.getters.cursorCopy
                }
            },
            data: function() {
                return {
                    tl: null,
                    currentIndex: 0,
                    hovering: !1,
                    cycleId: null,
                    mouse: {
                        x: 0,
                        y: 0,
                        down: !1
                    }
                }
            },
            beforeDestroy: function() {
                this.tl && this.tl.kill(),
                this.removeListeners(),
                this.stopCycle()
            },
            mounted: function() {
                this.addListeners(),
                this.setupTl(),
                this.startCycle()
            },
            methods: {
                setupTl: function() {
                    var t = this;
                    this.tl = d.a.timeline({
                        scrollTrigger: {
                            trigger: this.$refs.container,
                            start: "top top",
                            end: "bottom+=10% top",
                            scrub: !0,
                            onToggle: function(e) {
                                1 !== e.progress ? t.$refs.container.style.visibility = "" : t.$refs.container.style.visibility = "hidden"
                            }
                        }
                    });
                    var e = -.4 * this.$refs.slides.offsetHeight;
                    this.tl.to(this.$refs.slides, {
                        y: e,
                        force3D: !0,
                        ease: "none"
                    }, 0)
                },
                addListeners: function() {
                    n.a.on("up", this.handleUp),
                    n.a.on("move", this.handleMove),
                    n.a.on("down", this.handleDown)
                },
                removeListeners: function() {
                    n.a.off("up", this.handleUp),
                    n.a.off("move", this.handleMove),
                    n.a.off("down", this.handleDown)
                },
                handleMouseMove: function(t) {
                    var e = t.pageX / n.b.bounds.ww;
                    this.total > 1 && (e > 1 / 3 && e < 1 / 3 * 2 ? "View Project" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "View Project") : e <= 1 / 3 ? "Previous" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "Previous") : e >= 1 / 3 * 2 && "Next" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "Next"))
                },
                handleMouseLeave: function() {
                    "" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "")
                },
                handleUp: function(t) {
                    var e = t.x
                      , o = Math.abs(this.mouse.x - e);
                    if (this.mouse.down) {
                        if (o > 10)
                            this.mouse.x - e > 0 ? this.next() : this.prev();
                        else {
                            var r = e / n.b.bounds.ww;
                            this.stopCycle(),
                            r <= 1 / 3 ? this.prev() : r >= 1 / 3 * 2 ? this.next() : this.handleProjectClick()
                        }
                        this.mouse.down = !1
                    }
                },
                handleMove: function(t) {
                    var e = t.x
                      , o = t.y
                      , n = t.ev
                      , r = Math.abs(e - this.mouse.x);
                    Math.abs(o - this.mouse.y);
                    this.mouse.down && r > 20 && n.cancelable && n.preventDefault()
                },
                handleDown: function(t) {
                    var e = t.x
                      , o = t.y
                      , n = t.ev
                      , c = Object(r.a)(n).some((function(t) {
                        return t.classList && t.classList.contains("slideshow")
                    }
                    ));
                    this.mouse = {
                        x: e,
                        y: o,
                        down: c
                    }
                },
                handleProjectClick: function() {
                    this.$router.push({
                        name: "work-slug",
                        params: {
                            slug: this.data.projects[this.currentIndex].information.slug.current
                        }
                    })
                },
                next: function() {
                    this.currentIndex = this.currentIndex + 1 < this.total ? this.currentIndex + 1 : 0,
                    this.$emit("update:value", this.currentIndex)
                },
                prev: function() {
                    this.currentIndex = this.currentIndex - 1 >= 0 ? this.currentIndex - 1 : this.total - 1,
                    this.$emit("update:value", this.currentIndex)
                },
                startCycle: function() {
                    var t = this;
                    this.total <= 1 || (this.cycleId = setInterval((function() {
                        t.next()
                    }
                    ), 1e4))
                },
                stopCycle: function() {
                    this.cycleId && clearInterval(this.cycleId),
                    this.cycleId = null
                }
            }
        }
          , _ = (o(792),
        o(9))
          , component = Object(_.a)(h, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: "container",
                staticClass: "slideshow",
                on: {
                    mousemove: t.handleMouseMove,
                    mouseleave: t.handleMouseLeave
                }
            }, [e("div", {
                ref: "slides",
                staticClass: "slides desktop-only"
            }, [t._l(t.data.projects, (function(o, n) {
                return [e("div", {
                    key: n,
                    class: ["slide image-slide", {
                        active: t.currentIndex == n
                    }]
                }, [t._l(o.preview.homepageSlideshowAssets, (function(o, r) {
                    return ["image" == o._type ? e("ImageModule", {
                        key: r,
                        attrs: {
                            asset: o,
                            index: n,
                            currentIndex: t.currentIndex,
                            total: t.total
                        }
                    }) : t._e(), t._v(" "), "vimeo" == o._type ? e("VideoModule", {
                        key: r,
                        attrs: {
                            asset: o,
                            index: n,
                            currentIndex: t.currentIndex,
                            total: t.total
                        }
                    }) : t._e()]
                }
                ))], 2)]
            }
            ))], 2), t._v(" "), e("div", {
                ref: "slides",
                staticClass: "slides mobile-only"
            }, [t._l(t.data.projects, (function(o, n) {
                return [e("div", {
                    key: n,
                    class: ["slide image-slide", {
                        active: t.currentIndex == n
                    }]
                }, [t._l(o.preview.homepageSlideshowMobileAssets, (function(o, r) {
                    return ["image" == o._type ? e("ImageModule", {
                        key: r,
                        attrs: {
                            asset: o,
                            index: n,
                            currentIndex: t.currentIndex,
                            total: t.total
                        }
                    }) : t._e(), t._v(" "), "vimeo" == o._type ? e("VideoModule", {
                        key: r,
                        attrs: {
                            asset: o,
                            index: n,
                            currentIndex: t.currentIndex,
                            total: t.total
                        }
                    }) : t._e()]
                }
                ))], 2)]
            }
            ))], 2), t._v(" "), e("div", {
                staticClass: "details"
            }, [e("div", {
                staticClass: "details__descriptions"
            }, t._l(t.data.projects, (function(o, n) {
                return e("p", {
                    key: n,
                    class: ["details__description b2", {
                        active: n == t.currentIndex
                    }]
                }, [t._v("\n                " + t._s(o.preview.subtitle) + "\n            ")])
            }
            )), 0), t._v(" "), e("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.total > 1,
                    expression: "total > 1"
                }],
                staticClass: "details__counter b2"
            }, [t._v(t._s(t.currentIndex + 1) + " of " + t._s(t.total))])])])
        }
        ), [], !1, null, "991aa808", null);
        e.default = component.exports
    },
    841: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(646)
          , r = o.n(n)
          , c = o(759)
          , l = o(669)
          , d = o(485)
          , f = o(486)
          , h = {
            name: "NewsSection",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                NewsSectionCarouselItem: c.default
            },
            data: function() {
                return {
                    embla: null,
                    serializers: {
                        marks: {
                            link: d.default,
                            styledLink: f.default
                        }
                    }
                }
            },
            beforeDestroy: function() {
                this.embla && this.embla.destroy()
            },
            mounted: function() {
                this.embla = Object(l.a)(this.$refs.container, {
                    loop: !1,
                    dragFree: !0,
                    align: "start",
                    containScroll: "trimSnaps"
                })
            },
            methods: {
                formatDate: function(t) {
                    return r()(new Date(t), "YYYY-MM-DD").format("MM/DD/YY")
                }
            }
        }
          , _ = (o(794),
        o(9))
          , component = Object(_.a)(h, (function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                staticClass: "news-section"
            }, [e("div", {
                staticClass: "news-section__line"
            }), t._v(" "), e("h2", [t._v("News")]), t._v(" "), e("div", {
                ref: "container",
                staticClass: "news-section__carousel"
            }, [e("div", {
                staticClass: "news-section__carousel__container"
            }, t._l(t.data.newsDetails, (function(o, n) {
                return e("NewsSectionCarouselItem", {
                    key: n,
                    attrs: {
                        newsDetail: o,
                        index: n,
                        total: t.data.newsDetails.length
                    }
                })
            }
            )), 1)]), t._v(" "), e("nuxt-link", {
                staticClass: "news-section__link b2",
                attrs: {
                    to: "/news"
                }
            }, [e("span", {
                staticClass: "decoration active opaque black"
            }, [t._v("View More News")]), t._v(" "), e("RightArrowIcon", {
                attrs: {
                    color: "black"
                }
            })], 1)], 1)
        }
        ), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            RightArrowIcon: o(268).default
        })
    },
    842: function(t, e, o) {
        "use strict";
        o.r(e);
        o(20);
        var n = o(4)
          , r = o(820)
          , c = o(760)
          , l = o(761)
          , d = o(13)
          , f = o(495);
        d.a.registerPlugin(f.ScrollTrigger);
        var h = {
            name: "SelectedWork",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                TripleProjectModule: r.default,
                DoubleProjectModule: c.default,
                SingularProjectModule: l.default
            },
            data: function() {
                return {
                    name: "",
                    topTl: null,
                    bottomTl: null,
                    titleScrollController: null
                }
            },
            beforeDestroy: function() {
                n.a.off("indicator:change", this.handleIndicatorChange),
                this.titleScrollController && this.titleScrollController.destroy(),
                this.titleScrollController = null,
                this.topTl && this.topTl.kill(),
                this.bottomTl && this.bottomTl.kill()
            },
            mounted: function() {
                this.setupScrollTitles(),
                this.setupScrollTls()
            },
            methods: {
                setupScrollTitles: function() {
                    n.a.on("indicator:change", this.handleIndicatorChange)
                },
                setupScrollTls: function() {
                    this.topTl = d.a.timeline({
                        scrollTrigger: {
                            trigger: this.$refs.container,
                            start: "top+=2% 45%",
                            end: "+=5%",
                            scrub: .05
                        }
                    }),
                    this.topTl.fromTo(this.$refs.indicator, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1
                    }),
                    this.bottomTl = d.a.timeline({
                        scrollTrigger: {
                            trigger: this.$refs.container,
                            start: "bottom+=10vh bottom",
                            end: "+=25%",
                            scrub: .2
                        }
                    }),
                    this.bottomTl.to(this.$refs.indicator, {
                        autoAlpha: 0
                    })
                },
                handleIndicatorChange: function(t) {
                    this.name = t
                }
            }
        }
          , _ = (o(798),
        o(9))
          , component = Object(_.a)(h, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: "container",
                staticClass: "selected-work"
            }, [e("span", {
                ref: "indicator",
                staticClass: "selected-work__indicator h1",
                domProps: {
                    innerHTML: t._s(t.name)
                }
            }), t._v(" "), e("h1", {
                staticClass: "selected-work__title h2"
            }, [t._v(t._s(t.data.title))]), t._v(" "), e("div", {
                staticClass: "modules"
            }, [t._l(t.data.modules, (function(o, n) {
                return ["singularProject" == o._type ? e("SingularProjectModule", {
                    key: n,
                    attrs: {
                        module: o
                    }
                }) : "doubleProject" == o._type ? e("DoubleProjectModule", {
                    key: n,
                    attrs: {
                        module: o
                    }
                }) : "tripleProject" == o._type ? e("TripleProjectModule", {
                    key: n,
                    attrs: {
                        module: o
                    }
                }) : t._e()]
            }
            ))], 2), t._v(" "), e("nuxt-link", {
                staticClass: "selected-work__link b2",
                attrs: {
                    to: "/work"
                }
            }, [e("span", {
                staticClass: "decoration active opaque black"
            }, [t._v("View All Work")]), t._v(" "), e("RightArrowIcon", {
                attrs: {
                    color: "black"
                }
            })], 1)], 1)
        }
        ), [], !1, null, "fbf2ea30", null);
        e.default = component.exports;
        installComponents(component, {
            RightArrowIcon: o(268).default
        })
    },
    868: function(t, e, o) {
        "use strict";
        o(828)
    },
    869: function(t, e, o) {
        var n = o(32)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, ".home-page__content[data-v-df287f04]{position:relative;z-index:5;background:#fff}", ""]),
        n.locals = {},
        t.exports = n
    },
    895: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(1)
          , head = (o(22),
        o(652))
          , r = o(660)
          , c = o(112)
          , l = o(840)
          , d = o(841)
          , f = o(842)
          , h = o(114)
          , _ = o(113)
          , m = {
            name: "Home",
            asyncData: function(t) {
                return Object(n.a)(regeneratorRuntime.mark((function e() {
                    var o, n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return o = t.error,
                                e.prev = 1,
                                e.next = 4,
                                h.a.fetch(_.d);
                            case 4:
                                return n = e.sent,
                                e.abrupt("return", {
                                    page: n
                                });
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(1),
                                o({
                                    statusCode: 404,
                                    message: "The page you are looking for does not exist. ",
                                    err: e.t0
                                });
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 8]])
                }
                )))()
            },
            components: {
                Slideshow: l.default,
                NewsSection: d.default,
                SelectedWork: f.default
            },
            mixins: [head.a, c.a, Object(r.a)()]
        }
          , v = (o(868),
        o(9))
          , component = Object(v.a)(m, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: "main",
                class: ["page home-page"]
            }, [e("div", {
                staticClass: "home-page__content"
            }, [e("Slideshow", {
                attrs: {
                    data: t.page.slideshow
                }
            }), t._v(" "), e("SelectedWork", {
                attrs: {
                    data: t.page.selectedWork
                }
            }), t._v(" "), e("NewsSection", {
                attrs: {
                    data: t.page.news
                }
            })], 1), t._v(" "), e("Footer", {
                attrs: {
                    showAbout: !0
                }
            })], 1)
        }
        ), [], !1, null, "df287f04", null);
        e.default = component.exports;
        installComponents(component, {
            Footer: o(636).default
        })
    }
}]);
