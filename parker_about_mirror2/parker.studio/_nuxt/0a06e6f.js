(window.webpackJsonp = window.webpackJsonp || []).push([[85, 28, 38, 39, 68, 69], {
    480: function(t, e, r) {
        "use strict";
        var o = r(2)
          , n = r(6)
          , l = r(68)
          , d = r(267)
          , c = r(266)
          , v = r(5)
          , f = RangeError
          , m = String
          , h = Math.floor
          , _ = n(c)
          , y = n("".slice)
          , w = n(1..toFixed)
          , x = function(t, e, r) {
            return 0 === e ? r : e % 2 == 1 ? x(t, e - 1, r * t) : x(t * t, e / 2, r)
        }
          , k = function(data, t, e) {
            for (var r = -1, o = e; ++r < 6; )
                o += t * data[r],
                data[r] = o % 1e7,
                o = h(o / 1e7)
        }
          , C = function(data, t) {
            for (var e = 6, r = 0; --e >= 0; )
                r += data[e],
                data[e] = h(r / t),
                r = r % t * 1e7
        }
          , I = function(data) {
            for (var t = 6, s = ""; --t >= 0; )
                if ("" !== s || 0 === t || 0 !== data[t]) {
                    var e = m(data[t]);
                    s = "" === s ? e : s + _("0", 7 - e.length) + e
                }
            return s
        };
        o({
            target: "Number",
            proto: !0,
            forced: v((function() {
                return "0.000" !== w(8e-5, 3) || "1" !== w(.9, 0) || "1.25" !== w(1.255, 2) || "1000000000000000128" !== w(0xde0b6b3a7640080, 0)
            }
            )) || !v((function() {
                w({})
            }
            ))
        }, {
            toFixed: function(t) {
                var e, r, o, n, c = d(this), v = l(t), data = [0, 0, 0, 0, 0, 0], h = "", w = "0";
                if (v < 0 || v > 20)
                    throw new f("Incorrect fraction digits");
                if (c != c)
                    return "NaN";
                if (c <= -1e21 || c >= 1e21)
                    return m(c);
                if (c < 0 && (h = "-",
                c = -c),
                c > 1e-21)
                    if (r = (e = function(t) {
                        for (var e = 0, r = t; r >= 4096; )
                            e += 12,
                            r /= 4096;
                        for (; r >= 2; )
                            e += 1,
                            r /= 2;
                        return e
                    }(c * x(2, 69, 1)) - 69) < 0 ? c * x(2, -e, 1) : c / x(2, e, 1),
                    r *= 4503599627370496,
                    (e = 52 - e) > 0) {
                        for (k(data, 0, r),
                        o = v; o >= 7; )
                            k(data, 1e7, 0),
                            o -= 7;
                        for (k(data, x(10, o, 1), 0),
                        o = e - 1; o >= 23; )
                            C(data, 1 << 23),
                            o -= 23;
                        C(data, 1 << o),
                        k(data, 1, 1),
                        C(data, 2),
                        w = I(data)
                    } else
                        k(data, 0, r),
                        k(data, 1 << -e, 0),
                        w = I(data) + _("0", v);
                return w = v > 0 ? h + ((n = w.length) <= v ? "0." + _("0", v - n) + w : y(w, 0, n - v) + "." + y(w, n - v)) : h + w
            }
        })
    },
    483: function(t, e, r) {
        var content = r(489);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("a30f11f2", content, !0, {
            sourceMap: !1
        })
    },
    486: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = {
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
          , n = (r(488),
        r(9))
          , component = Object(n.a)(o, (function() {
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
    487: function(t, e, r) {
        var content = r(638);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("5cc69aa0", content, !0, {
            sourceMap: !1
        })
    },
    488: function(t, e, r) {
        "use strict";
        r(483)
    },
    489: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, "a[data-v-ce6c94de]{text-decoration:none}@media only screen and (min-width: 480px){a .icon[data-v-ce6c94de]{display:inline-block;position:relative;width:10rem;margin-left:2rem}}@media only screen and (max-width: 479px){a .icon[data-v-ce6c94de]{display:inline-block;position:relative;width:10px;margin-left:2px}}", ""]),
        o.locals = {},
        t.exports = o
    },
    493: function(t, e, r) {
        var content = r(643);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("a95f1320", content, !0, {
            sourceMap: !1
        })
    },
    494: function(t, e, r) {
        var content = r(645);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("4364cdc8", content, !0, {
            sourceMap: !1
        })
    },
    496: function(t, e, r) {
        "use strict";
        var o = r(2)
          , n = r(662);
        o({
            target: "String",
            proto: !0,
            forced: r(663)("link")
        }, {
            link: function(t) {
                return n(this, "a", "href", t)
            }
        })
    },
    634: function(t, e, r) {
        var content = r(654);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("23d700c2", content, !0, {
            sourceMap: !1
        })
    },
    637: function(t, e, r) {
        "use strict";
        r(487)
    },
    638: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".greyed-out{color:#a5a5a5}.greyed-out svg polygon{fill:#a5a5a5 !important}", ""]),
        o.locals = {},
        t.exports = o
    },
    641: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = {
            name: "GreySerializer",
            props: {
                children: {
                    type: String
                },
                href: {
                    type: String
                }
            }
        }
          , n = (r(637),
        r(9))
          , component = Object(n.a)(o, (function() {
            return (0,
            this._self._c)("span", {
                staticClass: "greyed-out"
            }, [this._t("default")], 2)
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    642: function(t, e, r) {
        "use strict";
        r(493)
    },
    643: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".image-slide[data-v-03a4a7bd]{user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}", ""]),
        o.locals = {},
        t.exports = o
    },
    644: function(t, e, r) {
        "use strict";
        r(494)
    },
    645: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".image-slide[data-v-d4b2a46e]{user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}", ""]),
        o.locals = {},
        t.exports = o
    },
    648: function(t, e, r) {
        "use strict";
        r.r(e);
        r(53),
        r(70),
        r(142);
        var o = r(141)
          , n = r(641)
          , l = r(485)
          , d = r(486)
          , c = {
            name: "CarouselItem",
            props: {
                asset: {
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
            data: function() {
                return {
                    serializers: {
                        marks: {
                            grey: n.default,
                            link: l.default,
                            styledLink: d.default
                        }
                    }
                }
            },
            methods: {
                getAspect: function(t) {
                    var e = t.split("x").map((function(t) {
                        return Number(t)
                    }
                    ));
                    return Object(o.d)(e[1] / e[0] * 100)
                },
                handleMouseMove: function(t) {
                    this.cursorCopy !== "".concat(this.index + 1, " of ").concat(this.total) && this.$store.dispatch("setCursorCopy", "".concat(this.index + 1, " of ").concat(this.total))
                },
                handleMouseLeave: function() {
                    "" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "")
                }
            }
        }
          , v = r(9)
          , component = Object(v.a)(c, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                class: ["asset", "size-".concat(t.asset.sizing)]
            }, [e("div", {
                staticClass: "asset__container",
                style: "--ratio: ".concat(t.getAspect(t.asset.sizing), "%;"),
                on: {
                    mousemove: t.handleMouseMove,
                    mouseleave: t.handleMouseLeave
                }
            }, ["image" == t.asset.media._type ? e("SanityImage", {
                ref: "image",
                staticClass: "abs full cover",
                attrs: {
                    image: t.asset.media.image
                }
            }) : "vimeo" == t.asset.media._type ? e("VideoPlayer", {
                staticClass: "abs",
                attrs: {
                    url: t.asset.media.vimeo.url,
                    autoplay: !0 === t.asset.media.vimeo.autoplay,
                    showDuration: !1,
                    controls: !0 !== t.asset.media.vimeo.autoplay,
                    hoverActions: !1
                }
            }) : t._e()], 1), t._v(" "), t.asset.subtitle ? e("div", {
                staticClass: "asset__copy"
            }, [e("block-content", {
                attrs: {
                    blocks: t.asset.subtitle,
                    serializers: t.serializers
                }
            })], 1) : t._e()])
        }
        ), [], !1, null, "1260ef24", null);
        e.default = component.exports;
        installComponents(component, {
            SanityImage: r(471).default,
            VideoPlayer: r(474).default
        })
    },
    649: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1)
          , n = (r(22),
        r(142),
        r(13))
          , l = r(182)
          , d = {
            name: "ImageModule",
            components: {
                SanityImageNew: r(471).default
            },
            props: {
                content: {
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
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
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
                                    Object(l.a)(t.$refs.img);
                                case 8:
                                    image = e.sent,
                                    n.a.to(image, {
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
          , c = (r(642),
        r(9))
          , component = Object(c.a)(d, (function() {
            var t = this;
            return (0,
            t._self._c)("img", {
                ref: "img",
                staticClass: "abs full cover",
                attrs: {
                    "data-src": t.inDevelopment ? "/placeholders/placeholder-1.jpg" : t.$device.isMobile && t.content.assetMobile ? t.content.assetMobile.image.url : t.content.asset.image.url,
                    alt: "",
                    "data-fade": "",
                    "data-skip": ""
                }
            })
        }
        ), [], !1, null, "03a4a7bd", null);
        e.default = component.exports
    },
    650: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(1)
          , n = (r(22),
        r(142),
        r(13))
          , l = r(182)
          , d = {
            name: "VideoSlide",
            props: {
                content: {
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
                0 == this.index && this.$refs.video.$refs.video.setAttribute("data-critical", ""),
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
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
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
                                    Object(l.a)(video);
                                case 9:
                                    video = e.sent,
                                    n.a.to(video, {
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
          , c = (r(644),
        r(9))
          , component = Object(c.a)(d, (function() {
            var t = this;
            return (0,
            t._self._c)("VideoPlayer", {
                ref: "video",
                staticClass: "abs",
                attrs: {
                    url: t.$device.isMobile ? t.content.assetMobile.video.url : t.content.asset.video.url,
                    autoplay: !0,
                    showDuration: !0,
                    controls: !1,
                    skip: !0
                }
            })
        }
        ), [], !1, null, "d4b2a46e", null);
        e.default = component.exports;
        installComponents(component, {
            VideoPlayer: r(474).default
        })
    },
    653: function(t, e, r) {
        "use strict";
        r(634)
    },
    654: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".carousel{position:relative;width:100%}.carousel__container{display:flex}.carousel .asset{transform:translate3d(0, 0, 0);margin-right:var(--gutter)}.carousel .asset__container{width:100%;padding-top:var(--ratio);position:relative;background:#b7e3b6}.carousel .asset__copy p{font-size:var(--b3);line-height:var(--b3-line_height);letter-spacing:var(--b3-letter_spacing)}@media only screen and (min-width: 480px){.carousel .asset.size-16x9{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.4166666667 + var(--gutter)*4)}.carousel .asset.size-6x4{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.4166666667 + var(--gutter)*4)}.carousel .asset.size-5x7{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2)}.carousel .asset.size-4x3{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2)}.carousel .asset.size-1x1{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2)}.carousel .asset__copy{margin-top:7rem}.carousel .asset a div{width:10rem;margin-left:0rem}}@media only screen and (max-width: 479px){.carousel .asset.size-16x9{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.carousel .asset.size-6x4{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.carousel .asset.size-5x7{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.carousel .asset.size-4x3{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.carousel .asset.size-1x1{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.carousel .asset__copy{margin-top:7px}.carousel .asset a div{display:inline-block;width:7px;margin-left:0px}}", ""]),
        o.locals = {},
        t.exports = o
    },
    657: function(t, e, r) {
        var content = r(687);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("26fcff0a", content, !0, {
            sourceMap: !1
        })
    },
    661: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(669)
          , n = r(648)
          , l = {
            name: "Carousel",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                CarouselItem: n.default
            },
            data: function() {
                return {
                    embla: null
                }
            },
            beforeDestroy: function() {
                this.embla && this.embla.destroy()
            },
            mounted: function() {
                this.embla = Object(o.a)(this.$refs.container, {
                    loop: !1,
                    dragFree: !0,
                    align: "start",
                    containScroll: "trimSnaps"
                })
            }
        }
          , d = (r(653),
        r(9))
          , component = Object(d.a)(l, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: "container",
                staticClass: "carousel"
            }, [e("div", {
                staticClass: "carousel__container"
            }, t._l(t.data.carousel.assets, (function(r, o) {
                return e("CarouselItem", {
                    key: o,
                    attrs: {
                        asset: r,
                        index: o,
                        total: t.data.carousel.assets.length
                    }
                })
            }
            )), 1)])
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    662: function(t, e, r) {
        "use strict";
        var o = r(6)
          , n = r(34)
          , l = r(17)
          , d = /"/g
          , c = o("".replace);
        t.exports = function(t, e, r, o) {
            var v = l(n(t))
              , f = "<" + e;
            return "" !== r && (f += " " + r + '="' + c(l(o), d, "&quot;") + '"'),
            f + ">" + v + "</" + e + ">"
        }
    },
    663: function(t, e, r) {
        "use strict";
        var o = r(5);
        t.exports = function(t) {
            return o((function() {
                var e = ""[t]('"');
                return e !== e.toLowerCase() || e.split('"').length > 3
            }
            ))
        }
    },
    673: function(t, e, r) {
        var content = r(717);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("fe35bd72", content, !0, {
            sourceMap: !1
        })
    },
    674: function(t, e, r) {
        var content = r(719);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("a045fe60", content, !0, {
            sourceMap: !1
        })
    },
    675: function(t, e, r) {
        var content = r(725);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("a734a1a4", content, !0, {
            sourceMap: !1
        })
    },
    676: function(t, e, r) {
        var content = r(727);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("14da743d", content, !0, {
            sourceMap: !1
        })
    },
    677: function(t, e, r) {
        var content = r(730);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("07e6c5be", content, !0, {
            sourceMap: !1
        })
    },
    678: function(t, e, r) {
        var content = r(733);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("79f48308", content, !0, {
            sourceMap: !1
        })
    },
    679: function(t, e, r) {
        var content = r(735);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("0a90f769", content, !0, {
            sourceMap: !1
        })
    },
    680: function(t, e, r) {
        var content = r(737);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("7fb4e5b2", content, !0, {
            sourceMap: !1
        })
    },
    681: function(t, e, r) {
        var content = r(739);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("6d07dd47", content, !0, {
            sourceMap: !1
        })
    },
    682: function(t, e, r) {
        var content = r(743);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("ed8b6794", content, !0, {
            sourceMap: !1
        })
    },
    686: function(t, e, r) {
        "use strict";
        r(657)
    },
    687: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".slideshow[data-v-061b0ba0]{position:relative;background:#fff;width:100vw;overflow:hidden;cursor:pointer;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.slideshow .slides[data-v-061b0ba0]{position:fixed;top:0;left:0;width:100vw;will-change:transform;overflow:hidden}.slideshow .slide[data-v-061b0ba0]{position:fixed;top:0;left:0;width:100vw;display:flex}.slideshow .slide[data-v-061b0ba0]:not(.active){opacity:0}.slideshow .image-container[data-v-061b0ba0]{position:relative;flex:1}.slideshow .details[data-v-061b0ba0]{position:absolute;left:50%;transform:translate3d(-50%, 0, 0);width:calc(100vw - var(--margin)*2);height:100%;user-select:none;z-index:10;mix-blend-mode:difference;color:#fff}.slideshow .details__descriptions[data-v-061b0ba0]{position:absolute;bottom:0;left:0;z-index:1}.slideshow .details__description[data-v-061b0ba0]{position:absolute;bottom:0;left:0}.slideshow .details__description[data-v-061b0ba0]:not(.active){opacity:0}.slideshow .details__counter[data-v-061b0ba0]{position:absolute;bottom:0;right:0;text-align:right}@media only screen and (min-width: 480px){.slideshow[data-v-061b0ba0]{height:700rem}.slideshow .slides[data-v-061b0ba0],.slideshow .slide[data-v-061b0ba0]{height:700rem}.slideshow .details[data-v-061b0ba0]{bottom:20rem}.slideshow .details__descriptions[data-v-061b0ba0],.slideshow .details__description[data-v-061b0ba0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.slideshow .details__counter[data-v-061b0ba0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*1)}}@media only screen and (max-width: 479px){.slideshow[data-v-061b0ba0]{padding-top:125%}.slideshow .slide[data-v-061b0ba0]{transition:opacity 600ms ease}.slideshow .slides[data-v-061b0ba0],.slideshow .slide[data-v-061b0ba0]{height:125vw}.slideshow .slides img[data-v-061b0ba0],.slideshow .slides video[data-v-061b0ba0],.slideshow .slide img[data-v-061b0ba0],.slideshow .slide video[data-v-061b0ba0]{object-fit:contain}.slideshow .details[data-v-061b0ba0]{bottom:11px}.slideshow .details__descriptions[data-v-061b0ba0],.slideshow .details__description[data-v-061b0ba0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.slideshow .details__counter[data-v-061b0ba0]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.25 + var(--gutter)*0)}}", ""]),
        o.locals = {},
        t.exports = o
    },
    692: function(t, e, r) {
        "use strict";
        var o = r(2)
          , n = r(6)
          , l = r(47)
          , d = r(46)
          , c = r(72)
          , v = r(270)
          , f = r(17)
          , m = r(5)
          , h = r(271)
          , _ = r(186)
          , y = r(721)
          , w = r(722)
          , x = r(116)
          , k = r(723)
          , C = []
          , I = n(C.sort)
          , M = n(C.push)
          , z = m((function() {
            C.sort(void 0)
        }
        ))
          , S = m((function() {
            C.sort(null)
        }
        ))
          , $ = _("sort")
          , j = !m((function() {
            if (x)
                return x < 70;
            if (!(y && y > 3)) {
                if (w)
                    return !0;
                if (k)
                    return k < 603;
                var code, t, e, r, o = "";
                for (code = 65; code < 76; code++) {
                    switch (t = String.fromCharCode(code),
                    code) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                        e = 3;
                        break;
                    case 68:
                    case 71:
                        e = 4;
                        break;
                    default:
                        e = 2
                    }
                    for (r = 0; r < 47; r++)
                        C.push({
                            k: t + r,
                            v: e
                        })
                }
                for (C.sort((function(a, b) {
                    return b.v - a.v
                }
                )),
                r = 0; r < C.length; r++)
                    t = C[r].k.charAt(0),
                    o.charAt(o.length - 1) !== t && (o += t);
                return "DGBEFHACIJK" !== o
            }
        }
        ));
        o({
            target: "Array",
            proto: !0,
            forced: z || !S || !$ || !j
        }, {
            sort: function(t) {
                void 0 !== t && l(t);
                var e = d(this);
                if (j)
                    return void 0 === t ? I(e) : I(e, t);
                var r, o, n = [], m = c(e);
                for (o = 0; o < m; o++)
                    o in e && M(n, e[o]);
                for (h(n, function(t) {
                    return function(e, r) {
                        return void 0 === r ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, r) || 0 : f(e) > f(r) ? 1 : -1
                    }
                }(t)),
                r = c(n),
                o = 0; o < r; )
                    e[o] = n[o++];
                for (; o < m; )
                    v(e, o++);
                return e
            }
        })
    },
    693: function(t, e, r) {
        "use strict";
        r.r(e);
        r(11),
        r(56);
        var o = r(4)
          , n = r(475)
          , l = r(649)
          , d = r(650)
          , c = r(13)
          , v = r(495);
        c.a.registerPlugin(v.ScrollTrigger);
        var f = {
            name: "Slideshow",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                ImageModule: l.default,
                VideoModule: d.default
            },
            computed: {
                total: function() {
                    return this.data.assets.length
                },
                cursorCopy: function() {
                    return this.$store.getters.cursorCopy
                }
            },
            data: function() {
                return {
                    tl: null,
                    cycleId: null,
                    currentIndex: 0,
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
                    this.tl = c.a.timeline({
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
                next: function() {
                    this.currentIndex = this.currentIndex + 1 < this.total ? this.currentIndex + 1 : 0,
                    this.$emit("update:value", this.currentIndex)
                },
                prev: function() {
                    this.currentIndex = this.currentIndex - 1 >= 0 ? this.currentIndex - 1 : this.total - 1,
                    this.$emit("update:value", this.currentIndex)
                },
                addListeners: function() {
                    o.a.on("up", this.handleUp),
                    o.a.on("move", this.handleMove),
                    o.a.on("down", this.handleDown)
                },
                removeListeners: function() {
                    o.a.off("up", this.handleUp),
                    o.a.off("move", this.handleMove),
                    o.a.off("down", this.handleDown)
                },
                handleUp: function(t) {
                    var e = t.x
                      , r = Math.abs(this.mouse.x - e);
                    if (this.mouse.down) {
                        if (r > 10)
                            this.mouse.x - e > 0 ? this.next() : this.prev();
                        else {
                            var n = e / o.b.bounds.ww;
                            this.stopCycle(),
                            n <= 1 / 3 ? this.prev() : n >= 1 / 3 * 2 && this.next()
                        }
                        this.mouse.down = !1
                    }
                },
                handleMouseMove: function(t) {
                    var e = t.pageX / o.b.bounds.ww;
                    this.total > 1 && (e <= 1 / 3 ? "Previous" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "Previous") : e >= 1 / 3 * 2 ? "Next" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "Next") : "" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", ""))
                },
                handleMouseLeave: function() {
                    "" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "")
                },
                handleMove: function(t) {
                    var e = t.x
                      , r = t.y
                      , o = t.ev
                      , n = Math.abs(e - this.mouse.x);
                    Math.abs(r - this.mouse.y);
                    this.mouse.down && n > 20 && o.cancelable && o.preventDefault()
                },
                handleDown: function(t) {
                    var e = t.x
                      , r = t.y
                      , o = t.ev
                      , l = Object(n.a)(o).some((function(t) {
                        return t.classList && t.classList.contains("slideshow")
                    }
                    ));
                    this.mouse = {
                        x: e,
                        y: r,
                        down: l
                    }
                },
                startCycle: function() {
                    var t = this;
                    this.total <= 1 || (this.cycleId = setInterval((function() {
                        t.next()
                    }
                    ), 3e3))
                },
                stopCycle: function() {
                    this.cycleId && clearInterval(this.cycleId),
                    this.cycleId = null
                }
            }
        }
          , m = (r(686),
        r(9))
          , component = Object(m.a)(f, (function() {
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
                staticClass: "slides"
            }, [t._l(t.data.assets, (function(r, o) {
                return [e("div", {
                    key: o,
                    class: ["slide", {
                        "image-slide": r.assetMobile && "image" == r.assetMobile._type || "image" == r.asset._type
                    }, {
                        "video-slide": r.assetMobile && "video" == r.assetMobile._type || "video" == r.asset._type
                    }, {
                        active: t.currentIndex == o
                    }]
                }, [(t.$device.isMobile && r.assetMobile ? "image" == r.assetMobile._type : "image" == r.asset._type) ? e("ImageModule", {
                    attrs: {
                        content: r,
                        index: o,
                        currentIndex: t.currentIndex,
                        total: t.total
                    }
                }) : (t.$device.isMobile && r.assetMobile ? "vimeo" == r.assetMobile._type : "vimeo" == r.asset._type) ? e("VideoModule", {
                    attrs: {
                        content: r,
                        index: o,
                        currentIndex: t.currentIndex,
                        total: t.total
                    }
                }) : t._e()], 1)]
            }
            ))], 2), t._v(" "), e("div", {
                staticClass: "details"
            }, [e("div", {
                staticClass: "details__descriptions"
            }, t._l(t.data.assets, (function(r, o) {
                return e("p", {
                    key: o,
                    class: ["details__description b2", {
                        active: o == t.currentIndex
                    }]
                }, [t._v("\n                " + t._s(r.copy) + "\n            ")])
            }
            )), 0), t._v(" "), e("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.total > 1,
                    expression: "total > 1"
                }],
                staticClass: "details__counter b2"
            }, [t._v(t._s(t.currentIndex + 1) + " of " + t._s(t.data.assets.length))])])])
        }
        ), [], !1, null, "061b0ba0", null);
        e.default = component.exports
    },
    716: function(t, e, r) {
        "use strict";
        r(673)
    },
    717: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".hero[data-v-f2047c86]{position:relative;width:100%;background:#b7e3b6}@media only screen and (min-width: 480px){.hero[data-v-f2047c86]{height:700rem}}@media only screen and (max-width: 479px){.hero[data-v-f2047c86]{height:580rem}}", ""]),
        o.locals = {},
        t.exports = o
    },
    718: function(t, e, r) {
        "use strict";
        r(674)
    },
    719: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, "ul[data-v-cf3f9a6e]{display:flex;padding:0 var(--margin)}@media only screen and (min-width: 480px){ul[data-v-cf3f9a6e]{justify-content:space-between;padding-top:220rem;padding-bottom:40rem}ul a div[data-v-cf3f9a6e]{display:inline-block;position:relative;width:8rem;margin-left:2rem}}@media only screen and (max-width: 479px){ul[data-v-cf3f9a6e]{flex-direction:column;padding-bottom:15px}ul li[data-v-cf3f9a6e]{margin:2px 0}ul a[data-v-cf3f9a6e]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}ul a div[data-v-cf3f9a6e]{display:inline-block;position:relative;width:8px;margin-left:2px}}", ""]),
        o.locals = {},
        t.exports = o
    },
    721: function(t, e, r) {
        "use strict";
        var o = r(95).match(/firefox\/(\d+)/i);
        t.exports = !!o && +o[1]
    },
    722: function(t, e, r) {
        "use strict";
        var o = r(95);
        t.exports = /MSIE|Trident/.test(o)
    },
    723: function(t, e, r) {
        "use strict";
        var o = r(95).match(/AppleWebKit\/(\d+)\./);
        t.exports = !!o && +o[1]
    },
    724: function(t, e, r) {
        "use strict";
        r(675)
    },
    725: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".quote-slide[data-v-47257640]{position:relative;width:100%}@media only screen and (min-width: 480px){.quote-slide[data-v-47257640]{padding:210rem var(--margin) 20rem var(--margin)}.quote-slide h2[data-v-47257640]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.75 + var(--gutter)*9);margin-bottom:26rem}.quote-slide p[data-v-47257640]{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*4)}}@media only screen and (max-width: 479px){.quote-slide[data-v-47257640]{padding:0 var(--margin) var(--margin) var(--margin)}.quote-slide h2[data-v-47257640]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin-bottom:22px}.quote-slide p[data-v-47257640]{width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}}", ""]),
        o.locals = {},
        t.exports = o
    },
    726: function(t, e, r) {
        "use strict";
        r(676)
    },
    727: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, '.description[data-v-4b86e7c7]{position:relative;width:100%;background:#fff}.description__main__button[data-v-4b86e7c7]{position:relative}.description__side__details__detail span[data-v-4b86e7c7]{font-family:"ChaletBook";font-size:var(--b3);line-height:var(--b3-line_height);letter-spacing:var(--b3-letter_spacing)}.description__side__details__detail p[data-v-4b86e7c7],.description__side__details__detail li[data-v-4b86e7c7]{font-family:"ChaletBook";font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}@media only screen and (min-width: 480px){.description[data-v-4b86e7c7]{padding:20rem var(--margin) 0 var(--margin)}.description__main[data-v-4b86e7c7]{padding-bottom:10rem}.description__main h1[data-v-4b86e7c7]{text-indent:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.0833333333 + var(--gutter)*1)}.description__main__button[data-v-4b86e7c7]{display:inline-flex;align-items:center;margin-top:34rem}.description__main__button:hover .description__main__button__line[data-v-4b86e7c7]{background:#000}.description__main__button span[data-v-4b86e7c7]{height:20rem}.description__main__button__line[data-v-4b86e7c7]{position:absolute;left:0;width:100%;height:1px;bottom:-2rem;will-change:transform;transition:background .5s ease;background:#ccc}.description__main__button__copy[data-v-4b86e7c7]{position:relative;display:inline-block;height:20rem;width:44rem;overflow:hidden;margin-left:4rem}.description__main__button__copy span[data-v-4b86e7c7]{position:absolute;top:0;left:0;transform:translate3d(0, -50%, 0)}.description__side[data-v-4b86e7c7]{position:relative;overflow:hidden}.description__side__inner[data-v-4b86e7c7]{position:relative;display:flex;margin-top:28rem;padding-top:24rem;padding-bottom:36rem}.description__side__details[data-v-4b86e7c7]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5);margin-right:var(--gutter)}.description__side__details__detail[data-v-4b86e7c7]:not(:last-child){margin-bottom:30rem}.description__side__description[data-v-4b86e7c7]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.description__side__description p[data-v-4b86e7c7]{margin-bottom:24rem}.description__side__description p span[data-v-4b86e7c7]{margin-left:36rem}}@media only screen and (max-width: 479px){.description[data-v-4b86e7c7]{padding:15px var(--margin) 0 var(--margin)}.description__main h1[data-v-4b86e7c7]{text-indent:30px}.description__main__button[data-v-4b86e7c7]{display:inline-flex;align-items:center;margin-top:22px}.description__main__button__line[data-v-4b86e7c7]{position:absolute;left:0;width:100%;height:1px;background:#000;bottom:0px;will-change:transform}.description__main__button__copy[data-v-4b86e7c7]{position:relative;display:inline-block;height:16px;width:33px;overflow:hidden;margin-left:4px}.description__main__button__copy span[data-v-4b86e7c7]{position:absolute;top:1px;left:0;line-height:1;transform:translate3d(0, -50%, 0)}.description__side[data-v-4b86e7c7]{position:relative;overflow:hidden}.description__side__inner[data-v-4b86e7c7]{position:relative;display:flex;flex-wrap:wrap;margin-top:20px;padding-top:40px;padding-bottom:30px}.description__side__details[data-v-4b86e7c7]{order:1;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.description__side__details__detail[data-v-4b86e7c7]:not(:last-child){margin-bottom:30px}.description__side__description[data-v-4b86e7c7]{order:0;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.description__side__description p[data-v-4b86e7c7]{margin-bottom:24px}.description__side__description p span[data-v-4b86e7c7]{margin-left:16px}}', ""]),
        o.locals = {},
        t.exports = o
    },
    729: function(t, e, r) {
        "use strict";
        r(677)
    },
    730: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".centered-slide[data-v-014be0b8]{position:relative;width:100%;padding:0 var(--margin)}.centered-slide .asset[data-v-014be0b8]{background:#b7e3b6}.centered-slide .asset__container[data-v-014be0b8]{width:100%;padding-top:66.66%;position:relative}@media only screen and (min-width: 480px){.centered-slide[data-v-014be0b8]{padding:120rem calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.125 + var(--gutter)*0.5)}.centered-slide[data-v-014be0b8]:not(:last-child){padding:120rem calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.125 + var(--gutter)*0.5)}.centered-slide[data-v-014be0b8]:last-child{padding:120rem calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.125 + var(--gutter)*0.5) 20rem calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.125 + var(--gutter)*0.5)}}", ""]),
        o.locals = {},
        t.exports = o
    },
    732: function(t, e, r) {
        "use strict";
        r(678)
    },
    733: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".fullbleed-slide[data-v-9e3178f6]{position:relative;width:100%;padding:0 var(--margin)}.fullbleed-slide .asset__container[data-v-9e3178f6]{width:100%;background:#b7e3b6;padding-top:66.66%;position:relative}", ""]),
        o.locals = {},
        t.exports = o
    },
    734: function(t, e, r) {
        "use strict";
        r(679)
    },
    735: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".twocolumn-slide[data-v-77f1af7c]{position:relative;width:100%;display:flex;padding:0 var(--margin)}.twocolumn-slide.mirrored.equal .asset__container[data-v-77f1af7c]{padding-top:150%}.twocolumn-slide.mirrored:not(.equal) .asset:first-child .asset__container[data-v-77f1af7c]{padding-top:140%}.twocolumn-slide.mirrored:not(.equal) .asset:last-child:not(:first-child) .asset__container[data-v-77f1af7c]{padding-top:66.66%}.twocolumn-slide:not(.mirrored).equal .asset__container[data-v-77f1af7c]{padding-top:150%}.twocolumn-slide:not(.mirrored):not(.equal) .asset:first-child .asset__container[data-v-77f1af7c]{padding-top:66.66%}.twocolumn-slide:not(.mirrored):not(.equal) .asset:last-child:not(:first-child) .asset__container[data-v-77f1af7c]{padding-top:140%}.twocolumn-slide .asset[data-v-77f1af7c]{align-self:flex-start;background:#b7e3b6}.twocolumn-slide .asset__container[data-v-77f1af7c]{width:100%;position:relative}@media only screen and (min-width: 480px){.twocolumn-slide[data-v-77f1af7c]{justify-content:space-between}.twocolumn-slide .asset[data-v-77f1af7c]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}}@media only screen and (max-width: 479px){.twocolumn-slide[data-v-77f1af7c]{flex-wrap:wrap}.twocolumn-slide .asset[data-v-77f1af7c]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.twocolumn-slide .asset[data-v-77f1af7c]:first-child:not(:last-child){margin-bottom:var(--gutter)}}", ""]),
        o.locals = {},
        t.exports = o
    },
    736: function(t, e, r) {
        "use strict";
        r(680)
    },
    737: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".assetcopy-slide{position:relative;width:100%;display:flex;align-items:center;padding:0 var(--margin)}.assetcopy-slide .decoration.opaque.green{text-decoration-color:#ccc}.assetcopy-slide .asset{background:#b7e3b6;align-self:stretch}.assetcopy-slide .asset__container{position:relative;width:100%}@media only screen and (min-width: 480px){.assetcopy-slide{justify-content:space-between}.assetcopy-slide.mirrored .asset{order:2}.assetcopy-slide.mirrored .copy{order:1}.assetcopy-slide:not(.mirrored) .asset{order:1}.assetcopy-slide:not(.mirrored) .copy{order:2}.assetcopy-slide .asset{width:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3)}.assetcopy-slide .asset__container{height:100%}.assetcopy-slide .copy{padding:230rem 0 250rem 0;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.assetcopy-slide .copy a .icon{width:12rem;margin-left:-2rem}}@media only screen and (max-width: 479px){.assetcopy-slide{flex-wrap:wrap}.assetcopy-slide .asset{order:1;width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.assetcopy-slide .asset__container{padding-top:140%}.assetcopy-slide .copy{order:0;padding:0 0 84px 0;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.assetcopy-slide .copy a .icon{width:10px;margin-left:-1px}}", ""]),
        o.locals = {},
        t.exports = o
    },
    738: function(t, e, r) {
        "use strict";
        r(681)
    },
    739: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".titled-carousel{position:relative;width:100%;padding:0 var(--margin);overflow:hidden;display:flex}.titled-carousel__container{display:flex}.titled-carousel__title p{font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}.titled-carousel .asset{margin-right:var(--gutter)}.titled-carousel .asset__container{width:100%;padding-top:var(--ratio);position:relative;background:#b7e3b6}.titled-carousel .carousel a{color:#a5a5a5;transition:color .3s}.titled-carousel .carousel a span{color:#a5a5a5;transition:color .3s}.titled-carousel .carousel a svg polygon{transition:fill .3s}@media(hover: hover){.titled-carousel .carousel a:hover{color:#000}.titled-carousel .carousel a:hover span{color:#000}.titled-carousel .carousel a:hover svg polygon{fill:#000}}.titled-carousel .carousel p{color:#a5a5a5;font-size:var(--b3);line-height:var(--b3-line_height);letter-spacing:var(--b3-letter_spacing)}.titled-carousel .carousel p svg polygon{fill:#a5a5a5}@media only screen and (min-width: 480px){.titled-carousel{margin-top:180rem;margin-bottom:180rem}.titled-carousel__line{display:none}.titled-carousel__title{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.25 + var(--gutter)*2);padding-right:calc(calc((100vw - var(--margin) * 2 - var(--gutter) * 11) * 0.0833333333 + var(--gutter) * 1) + var(--gutter))}.titled-carousel .carousel{margin-right:calc(calc((100vw - var(--margin) * 2 - var(--gutter) * 11) * 0.25 + var(--gutter) * 3) + var(--gutter))}.titled-carousel .asset.size-16x9{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5833333333 + var(--gutter)*6)}.titled-carousel .asset.size-6x4{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.titled-carousel .asset.size-5x7{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*4)}.titled-carousel .asset.size-4x3{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*4)}.titled-carousel .asset.size-1x1{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*4)}.titled-carousel .asset__copy{margin-top:7rem}.titled-carousel .asset a div{width:10rem;margin-left:0rem}}@media only screen and (max-width: 479px){.titled-carousel{margin-bottom:87px;flex-wrap:wrap;padding-top:10px}.titled-carousel__line{position:absolute;top:0;left:0;width:100%;height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}.titled-carousel__title{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin-bottom:60px}.titled-carousel__title br{display:none}.titled-carousel .asset.size-16x9{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.titled-carousel .asset.size-6x4{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.titled-carousel .asset.size-5x7{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.titled-carousel .asset.size-4x3{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*7)*0.875 + var(--gutter)*6)}.titled-carousel .asset.size-1x1{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*0.75 + var(--gutter)*2)}.titled-carousel .asset__copy{margin-top:12px}.titled-carousel .asset a div{display:inline-block;width:7px;margin-left:0px}}", ""]),
        o.locals = {},
        t.exports = o
    },
    742: function(t, e, r) {
        "use strict";
        r(682)
    },
    743: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".twocolumn-asset-slide[data-v-eb09b0de]{position:relative;width:100%;display:flex;padding:0 var(--margin)}.twocolumn-asset-slide .asset[data-v-eb09b0de]{background:#b7e3b6}.twocolumn-asset-slide .asset__container[data-v-eb09b0de]{width:100%;padding-top:140%;position:relative}.twocolumn-asset-slide .asset-copy .asset__container[data-v-eb09b0de]{padding-top:66.66%}.twocolumn-asset-slide .copy[data-v-eb09b0de]{display:flex}@media only screen and (min-width: 480px){.twocolumn-asset-slide[data-v-eb09b0de]{justify-content:space-between;margin-bottom:150rem}.twocolumn-asset-slide__line[data-v-eb09b0de]{display:none}.twocolumn-asset-slide__column[data-v-eb09b0de]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5)}.twocolumn-asset-slide .copy[data-v-eb09b0de]{margin-top:38rem}.twocolumn-asset-slide .copy p[data-v-eb09b0de],.twocolumn-asset-slide .copy span[data-v-eb09b0de]{font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}.twocolumn-asset-slide .copy__title[data-v-eb09b0de]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.1666666667 + var(--gutter)*1);margin-right:var(--gutter)}.twocolumn-asset-slide .copy__description[data-v-eb09b0de]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3)}.twocolumn-asset-slide .copy__description p[data-v-eb09b0de]:not(:last-child){margin-bottom:24rem}.twocolumn-asset-slide .copy__description span[data-v-eb09b0de]{margin-left:36rem}}@media only screen and (max-width: 479px){.twocolumn-asset-slide[data-v-eb09b0de]{flex-wrap:wrap;flex-direction:row-reverse}.twocolumn-asset-slide__line[data-v-eb09b0de]{display:none;position:absolute;top:0;left:0;width:100%;height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}.twocolumn-asset-slide__column[data-v-eb09b0de]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.twocolumn-asset-slide__column[data-v-eb09b0de]:first-child{order:1}.twocolumn-asset-slide__column[data-v-eb09b0de]:last-child{order:0}.twocolumn-asset-slide .asset-copy[data-v-eb09b0de]{display:flex;flex-wrap:wrap}.twocolumn-asset-slide .asset[data-v-eb09b0de]{order:1;width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin-bottom:var(--gutter)}.twocolumn-asset-slide .copy[data-v-eb09b0de]{order:0;flex-wrap:wrap;margin-bottom:var(--margin)}.twocolumn-asset-slide .copy__title[data-v-eb09b0de]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin-bottom:16px}.twocolumn-asset-slide .copy__title br[data-v-eb09b0de]{display:none}.twocolumn-asset-slide .copy__description[data-v-eb09b0de]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.twocolumn-asset-slide .copy__description p[data-v-eb09b0de]:not(:last-child){margin-bottom:24px}.twocolumn-asset-slide .copy__description span[data-v-eb09b0de]{margin-left:36px}}", ""]),
        o.locals = {},
        t.exports = o
    },
    752: function(t, e, r) {
        var content = r(815);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("3bc0e818", content, !0, {
            sourceMap: !1
        })
    },
    762: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = {
            name: "Hero",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            }
        }
          , n = (r(716),
        r(9))
          , component = Object(n.a)(o, (function() {
            var t = this._self._c;
            return t("section", {
                staticClass: "hero"
            }, [t("SanityImage", {
                ref: "image",
                staticClass: "rel full cover",
                attrs: {
                    image: this.data.image
                }
            })], 1)
        }
        ), [], !1, null, "f2047c86", null);
        e.default = component.exports;
        installComponents(component, {
            SanityImage: r(471).default
        })
    },
    763: function(t, e, r) {
        "use strict";
        r.r(e);
        r(496);
        var o = r(13)
          , n = r(4)
          , l = r(495);
        o.a.registerPlugin(l.ScrollTrigger);
        var d = {
            name: "Press",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            data: function() {
                return {
                    tl: null
                }
            },
            beforeDestroy: function() {
                n.a.off("resize", this.onResize)
            },
            mounted: function() {
                this.onResize(),
                n.a.on("resize", this.onResize)
            },
            methods: {
                onResize: function() {
                    if (n.b.bounds.ww < 480) {
                        if (this.tl)
                            return;
                        this.tl = o.a.timeline({
                            scrollTrigger: {
                                trigger: this.$refs.container,
                                start: "top-=100px top",
                                end: "bottom-=100px top",
                                scrub: .05
                            }
                        }),
                        this.tl.to(this.$refs.container, {
                            autoAlpha: 0
                        })
                    } else
                        this.tl && this.tl.kill(),
                        this.tl = null,
                        o.a.set(this.$refs.container, {
                            clearProps: "all"
                        })
                }
            }
        }
          , c = (r(718),
        r(9))
          , component = Object(c.a)(d, (function() {
            var t = this
              , e = t._self._c;
            return e("ul", {
                ref: "container",
                staticClass: "press"
            }, t._l(t.data.pressLinks, (function(r, o) {
                return e("li", {
                    key: o
                }, [e("span", {
                    staticClass: "b2"
                }, [t._v(t._s(r.type))]), t._v(" "), e("a", {
                    staticClass: "black opaque decoration active",
                    attrs: {
                        href: r.link,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [e("span", {
                    staticClass: "b2"
                }, [t._v(t._s(r.copy))]), t._v(" "), e("div", [e("svg", {
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
            )), 0)
        }
        ), [], !1, null, "cf3f9a6e", null);
        e.default = component.exports
    },
    764: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = {
            name: "QuoteSlide",
            props: {
                slide: {
                    type: Object,
                    required: !0
                }
            }
        }
          , n = (r(724),
        r(9))
          , component = Object(n.a)(o, (function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                staticClass: "quote-slide slide"
            }, [e("h2", [t._v(t._s(t.slide.quote))]), t._v(" "), e("p", {
                staticClass: "b2"
            }, [t._v(t._s(t.slide.subtitle))])])
        }
        ), [], !1, null, "47257640", null);
        e.default = component.exports
    },
    765: function(t, e, r) {
        "use strict";
        r.r(e);
        r(20);
        var o = r(36)
          , n = (r(692),
        r(13))
          , l = r(4)
          , d = r(145)
          , c = r(490)
          , v = r(486)
          , f = {
            name: "Description",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            data: function() {
                return Object(o.a)(Object(o.a)({
                    active: !1,
                    expandTl: null
                }, "expandTl", null), "serializers", {
                    marks: {
                        indent: c.default,
                        styledLink: v.default
                    }
                })
            },
            beforeDestroy: function() {
                l.a.off("resize", this.onResize)
            },
            mounted: function() {
                this.onResize(),
                l.a.on("resize", this.onResize)
            },
            methods: {
                sort: function(t, e) {
                    return t.sort((function(a, b) {
                        var t = a[e] ? a[e] : ""
                          , r = b[e] ? b[e] : "";
                        return t.localeCompare(r)
                    }
                    ))
                },
                onResize: function() {
                    var t = this;
                    this.data.detailsToggle && (this.expandTl && (this.expandTl.pause(),
                    this.expandTl.kill(),
                    this.expandTl = null,
                    this.$refs.side && (this.$refs.side.style.height = "")),
                    this.$nextTick((function() {
                        var e = Object(d.a)(".description__side__details__detail");
                        t.expandTl = n.a.timeline({
                            paused: !0
                        }).from(t.$refs.side, {
                            height: 0,
                            duration: 1,
                            ease: "power2.inOut"
                        }, 0),
                        e && t.expandTl.fromTo(e, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            stagger: .12,
                            duration: .6,
                            ease: "power2.inOut"
                        }, 0),
                        t.active ? t.expandTl.progress(1) : t.expandTl.progress(0)
                    }
                    )))
                },
                toggle: function() {
                    this.active = !this.active,
                    this.active ? this.expandTl.timeScale(1).play() : this.expandTl.timeScale(1.5).reverse()
                }
            }
        }
          , m = (r(726),
        r(9))
          , component = Object(m.a)(f, (function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                staticClass: "description"
            }, [e("div", {
                staticClass: "description__main"
            }, [e("h1", {
                staticClass: "h2"
            }, [t._v(t._s(t.data.mainDescription))]), t._v(" "), t.data.detailsToggle ? e("button", {
                staticClass: "description__main__button black decoration opaque",
                on: {
                    click: t.toggle
                }
            }, [e("span", {
                staticClass: "b2"
            }, [t._v("Read " + t._s(t.active ? "Less" : "More"))])]) : t._e()]), t._v(" "), t.data.detailsToggle ? e("div", {
                ref: "side",
                staticClass: "description__side"
            }, [e("div", {
                staticClass: "description__side__inner"
            }, [e("div", {
                staticClass: "description__side__details"
            }, [t.data.year ? e("div", {
                staticClass: "description__side__details__detail"
            }, [e("span", {
                staticClass: "b3"
            }, [t._v("Year")]), t._v(" "), e("p", {
                staticClass: "b2"
            }, [t._v(t._s(t.data.year))])]) : t._e(), t._v(" "), t.data.industries ? e("div", {
                staticClass: "description__side__details__detail"
            }, [e("span", {
                staticClass: "b3"
            }, [t._v(t._s(t.data.industries.length > 1 ? "Industries" : "Industry"))]), t._v(" "), e("ul", t._l(t.data.industries, (function(r, o) {
                return e("li", {
                    key: o,
                    staticClass: "b2"
                }, [t._v("\n                            " + t._s(r.name) + "\n                        ")])
            }
            )), 0)]) : t._e(), t._v(" "), t.data.services ? e("div", {
                staticClass: "description__side__details__detail"
            }, [e("span", {
                staticClass: "b3"
            }, [t._v(t._s(t.data.services.length > 1 ? "Services" : "Service"))]), t._v(" "), e("ul", t._l(t.data.services, (function(r, o) {
                return e("li", {
                    key: o,
                    staticClass: "b2"
                }, [t._v("\n                            " + t._s(r.name) + "\n                        ")])
            }
            )), 0)]) : t._e(), t._v(" "), t.data.credits ? e("div", {
                staticClass: "description__side__details__detail"
            }, [e("span", {
                staticClass: "b3"
            }, [t._v(t._s(t.data.credits.length > 1 ? "Credits" : "Credit"))]), t._v(" "), e("block-content", {
                attrs: {
                    blocks: t.data.credits,
                    serializers: t.serializers
                }
            })], 1) : t._e()]), t._v(" "), t.data.detailedDescription ? e("div", {
                ref: "side_description",
                staticClass: "description__side__description"
            }, [e("block-content", {
                attrs: {
                    blocks: t.data.detailedDescription,
                    serializers: t.serializers
                }
            })], 1) : t._e()])]) : t._e()])
        }
        ), [], !1, null, "4b86e7c7", null);
        e.default = component.exports
    },
    766: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = {
            name: "CenteredSlide",
            props: {
                slide: {
                    type: Object,
                    required: !0
                }
            }
        }
          , n = (r(729),
        r(9))
          , component = Object(n.a)(o, (function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                staticClass: "centered-slide slide"
            }, t._l(t.slide.slide, (function(r, o) {
                return e("div", {
                    key: o,
                    staticClass: "asset"
                }, [e("div", {
                    staticClass: "asset__container"
                }, ["image" == r._type ? e("SanityImage", {
                    ref: "image",
                    refInFor: !0,
                    staticClass: "abs full cover",
                    attrs: {
                        image: r.image
                    }
                }) : "vimeo" == r._type ? e("VideoPlayer", {
                    staticClass: "abs",
                    attrs: {
                        url: r.video.url,
                        autoplay: r.video.autoplay || !1,
                        showDuration: !r.video.autoplay,
                        controls: !r.video.autoplay,
                        hoverActions: !1
                    }
                }) : t._e()], 1)])
            }
            )), 0)
        }
        ), [], !1, null, "014be0b8", null);
        e.default = component.exports;
        installComponents(component, {
            SanityImage: r(471).default,
            VideoPlayer: r(474).default
        })
    },
    767: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(141)
          , n = {
            name: "FullBleedSlide",
            props: {
                slide: {
                    type: Object,
                    required: !0
                }
            },
            methods: {
                getAspect: o.b
            }
        }
          , l = (r(732),
        r(9))
          , component = Object(l.a)(n, (function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                staticClass: "fullbleed-slide slide"
            }, t._l(t.slide.slide, (function(r, o) {
                return e("div", {
                    key: o,
                    staticClass: "asset"
                }, [e("div", {
                    staticClass: "asset__container"
                }, ["image" == r._type ? e("SanityImage", {
                    ref: "image",
                    refInFor: !0,
                    staticClass: "abs full cover",
                    attrs: {
                        image: r.image
                    }
                }) : "vimeo" == r._type ? e("VideoPlayer", {
                    staticClass: "abs",
                    attrs: {
                        url: r.video.url,
                        autoplay: r.video.autoplay || !1,
                        showDuration: !r.video.autoplay,
                        controls: !r.video.autoplay,
                        hoverActions: !1
                    }
                }) : t._e()], 1)])
            }
            )), 0)
        }
        ), [], !1, null, "9e3178f6", null);
        e.default = component.exports;
        installComponents(component, {
            SanityImage: r(471).default,
            VideoPlayer: r(474).default
        })
    },
    768: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = {
            name: "TwoColumnSlide",
            props: {
                slide: {
                    type: Object,
                    required: !0
                },
                equal: {
                    type: Boolean,
                    required: !1,
                    default: !1
                }
            }
        }
          , n = (r(734),
        r(9))
          , component = Object(n.a)(o, (function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                class: ["twocolumn-slide slide", {
                    mirrored: t.slide.mirrored
                }, {
                    equal: t.equal
                }]
            }, t._l(t.slide.slide, (function(r, o) {
                return e("div", {
                    key: o,
                    staticClass: "asset"
                }, [e("div", {
                    staticClass: "asset__container"
                }, ["image" == r._type ? e("SanityImage", {
                    ref: "image",
                    refInFor: !0,
                    staticClass: "abs full cover",
                    attrs: {
                        image: r.image
                    }
                }) : "vimeo" == r._type ? e("VideoPlayer", {
                    staticClass: "abs",
                    attrs: {
                        url: r.video.url,
                        autoplay: r.video.autoplay || !1,
                        showDuration: !r.video.autoplay,
                        controls: !r.video.autoplay,
                        hoverActions: !1
                    }
                }) : t._e()], 1)])
            }
            )), 0)
        }
        ), [], !1, null, "77f1af7c", null);
        e.default = component.exports;
        installComponents(component, {
            SanityImage: r(471).default,
            VideoPlayer: r(474).default
        })
    },
    769: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(141)
          , n = r(647)
          , l = r(485)
          , d = r(486)
          , c = {
            name: "AssetCopySlide",
            props: {
                slide: {
                    type: Object,
                    required: !0
                }
            },
            data: function() {
                return {
                    serializers: {
                        marks: {
                            link: l.default,
                            hoverAsset: n.default,
                            styledLink: d.default
                        }
                    }
                }
            },
            methods: {
                getAspect: o.b
            }
        }
          , v = (r(736),
        r(9))
          , component = Object(v.a)(c, (function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                class: ["assetcopy-slide slide", {
                    mirrored: t.slide.mirrored
                }]
            }, [t._l(t.slide.slide, (function(r, o) {
                return e("div", {
                    key: o,
                    staticClass: "asset"
                }, [e("div", {
                    staticClass: "asset__container"
                }, ["image" == r._type ? e("SanityImage", {
                    ref: "image",
                    refInFor: !0,
                    staticClass: "abs full cover",
                    attrs: {
                        image: r.image
                    }
                }) : "vimeo" == r._type ? e("VideoPlayer", {
                    staticClass: "abs",
                    attrs: {
                        url: r.video.url,
                        autoplay: r.video.autoplay || !1,
                        showDuration: !r.video.autoplay,
                        controls: !r.video.autoplay,
                        hoverActions: !1
                    }
                }) : t._e()], 1)])
            }
            )), t._v(" "), e("div", {
                staticClass: "copy"
            }, [e("block-content", {
                attrs: {
                    blocks: t.slide.copy,
                    serializers: t.serializers
                }
            })], 1)], 2)
        }
        ), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            SanityImage: r(471).default,
            VideoPlayer: r(474).default
        })
    },
    770: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = {
            name: "TitledCarousel",
            components: {
                Carousel: r(661).default
            },
            props: {
                slide: {
                    type: Object,
                    required: !0
                }
            }
        }
          , n = (r(738),
        r(9))
          , component = Object(n.a)(o, (function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                ref: "container",
                staticClass: "titled-carousel"
            }, [e("div", {
                staticClass: "titled-carousel__line"
            }), t._v(" "), e("div", {
                staticClass: "titled-carousel__title"
            }, [e("block-content", {
                attrs: {
                    blocks: t.slide.title
                }
            })], 1), t._v(" "), e("Carousel", {
                attrs: {
                    data: t.slide
                }
            })], 1)
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    772: function(t, e, r) {
        "use strict";
        r.r(e);
        r(50),
        r(69);
        var o = r(141)
          , n = r(490)
          , l = {
            name: "TwoColumnAssetsCopy",
            props: {
                slide: {
                    type: Object,
                    required: !0
                }
            },
            data: function() {
                return {
                    serializers: {
                        marks: {
                            indent: n.default
                        }
                    }
                }
            },
            methods: {
                getAspect: o.b
            }
        }
          , d = (r(742),
        r(9))
          , component = Object(d.a)(l, (function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                staticClass: "twocolumn-asset-slide"
            }, t._l(t.slide.slide, (function(r, o) {
                var n, l;
                return e("div", {
                    key: o,
                    staticClass: "twocolumn-asset-slide__column"
                }, ["asset" === r._type ? t._l(r.slide, (function(r, o) {
                    return e("div", {
                        key: o,
                        staticClass: "asset"
                    }, [e("div", {
                        staticClass: "asset__container"
                    }, ["image" == r._type ? e("SanityImage", {
                        ref: "image",
                        refInFor: !0,
                        staticClass: "abs full cover",
                        attrs: {
                            image: r.image
                        }
                    }) : "vimeo" == r._type ? e("VideoPlayer", {
                        staticClass: "abs",
                        attrs: {
                            url: r.video.url,
                            autoplay: r.video.autoplay || !1,
                            showDuration: !r.video.autoplay,
                            controls: !r.video.autoplay,
                            hoverActions: !1
                        }
                    }) : t._e()], 1)])
                }
                )) : e("div", {
                    staticClass: "asset-copy"
                }, [t._l(r.slide, (function(r, o) {
                    return e("div", {
                        key: o,
                        staticClass: "asset"
                    }, [e("div", {
                        staticClass: "asset__container"
                    }, ["image" == r._type ? e("SanityImage", {
                        ref: "image",
                        refInFor: !0,
                        staticClass: "abs full cover",
                        attrs: {
                            image: r.image
                        }
                    }) : "vimeo" == r._type ? e("VideoPlayer", {
                        staticClass: "abs",
                        attrs: {
                            url: r.video.url,
                            autoplay: r.video.autoplay || !1,
                            showDuration: !r.video.autoplay,
                            controls: !r.video.autoplay,
                            hoverActions: !1
                        }
                    }) : t._e()], 1)])
                }
                )), t._v(" "), r.copy ? e("div", {
                    staticClass: "copy"
                }, [null !== (n = r.copy) && void 0 !== n && n.title ? e("div", {
                    staticClass: "copy__title"
                }, [e("block-content", {
                    attrs: {
                        blocks: r.copy.title,
                        serializers: t.serializers
                    }
                })], 1) : t._e(), t._v(" "), null !== (l = r.copy) && void 0 !== l && l.description ? e("div", {
                    staticClass: "copy__description"
                }, [e("block-content", {
                    attrs: {
                        blocks: r.copy.description,
                        serializers: t.serializers
                    }
                })], 1) : t._e()]) : t._e()], 2), t._v(" "), e("div", {
                    staticClass: "twocolumn-asset-slide__line"
                })], 2)
            }
            )), 0)
        }
        ), [], !1, null, "eb09b0de", null);
        e.default = component.exports;
        installComponents(component, {
            SanityImage: r(471).default,
            VideoPlayer: r(474).default
        })
    },
    814: function(t, e, r) {
        "use strict";
        r(752)
    },
    815: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".related-work[data-v-5d147903]{position:relative;width:100%;z-index:4}.related-work__inner[data-v-5d147903]{width:100%;padding:0 var(--margin);bottom:0}.related-work .asset[data-v-5d147903]{background:#b7e3b6}.related-work .asset__container[data-v-5d147903]{width:100%;position:relative}.related-work ul[data-v-5d147903]{display:flex;width:100%}.related-work ul li[data-v-5d147903]{--copyColor: black}.related-work ul li a[data-v-5d147903]{position:relative}@media only screen and (min-width: 480px){.related-work__inner[data-v-5d147903]{padding-top:20rem;padding-bottom:34rem}.related-work__line[data-v-5d147903]{position:absolute;top:0;left:0;width:100%;height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}.related-work .asset__container[data-v-5d147903]{padding-top:66.59%}.related-work h2[data-v-5d147903]{margin-bottom:129rem}.related-work ul[data-v-5d147903]{margin-bottom:46rem}.related-work li[data-v-5d147903]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.3333333333 + var(--gutter)*3)}.related-work li[data-v-5d147903]:not(:last-child){margin-right:var(--gutter)}.related-work li a[data-v-5d147903]{display:block}.related-work li a:hover p[data-v-5d147903]{opacity:1}.related-work li p[data-v-5d147903]{position:absolute;top:15rem;left:15rem;width:calc(100% - 30rem);z-index:1;transition:opacity 500ms ease;opacity:0;color:var(--copyColor);will-change:opacity}.related-work__link span[data-v-5d147903]{display:inline-block;line-height:1}.related-work__link div[data-v-5d147903]{width:12rem;margin-left:2rem}}@media only screen and (max-width: 479px){.related-work__inner[data-v-5d147903]{padding-top:15px;padding-bottom:15px}.related-work__line[data-v-5d147903]{position:absolute;top:0;left:0;width:100%;height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}.related-work .asset__container[data-v-5d147903]{padding-top:66.59%}.related-work h2[data-v-5d147903]{font-size:28px;margin-bottom:46px}.related-work ul[data-v-5d147903]{flex-wrap:wrap}.related-work li[data-v-5d147903]{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.related-work li[data-v-5d147903]:first-child{margin-bottom:var(--gutter)}.related-work li[data-v-5d147903]:nth-child(3){display:none}.related-work li p[data-v-5d147903]{margin-top:11px}.related-work__link[data-v-5d147903]{display:none}}", ""]),
        o.locals = {},
        t.exports = o
    },
    831: function(t, e, r) {
        var content = r(875);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(33).default)("1b01d815", content, !0, {
            sourceMap: !1
        })
    },
    851: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(4)
          , n = r(141)
          , l = r(268)
          , d = {
            name: "RelatedWork",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            data: function() {
                return {
                    sticky: !1
                }
            },
            components: {
                RightArrowIcon: l.default
            },
            beforeDestroy: function() {
                o.a.off("resize", this.onResize)
            },
            mounted: function() {
                this.onResize(),
                o.a.on("resize", this.onResize)
            },
            methods: {
                getAspect: n.b,
                onResize: function() {
                    this.$refs.inner.style.position = "",
                    this.$refs.container.style.height = "";
                    var t = this.$refs.inner.getBoundingClientRect();
                    t.height <= o.b.bounds.wh && (this.$refs.inner.style.position = "fixed",
                    this.$refs.container.style.height = "".concat(t.height, "px"))
                }
            }
        }
          , c = (r(814),
        r(9))
          , component = Object(c.a)(d, (function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                ref: "container",
                class: ["related-work", {
                    sticky: t.sticky
                }]
            }, [e("div", {
                staticClass: "related-work__line"
            }), t._v(" "), e("div", {
                ref: "inner",
                staticClass: "related-work__inner"
            }, [e("h2", [t._v(t._s(t.data.title))]), t._v(" "), e("ul", t._l(t.data.relatedProjects, (function(r, o) {
                return e("li", {
                    key: o,
                    style: "--copyColor: ".concat(r.preview.workPageTitleColor)
                }, [e("nuxt-link", {
                    attrs: {
                        to: "/work/".concat(r.information.slug.current)
                    }
                }, [t._l(r.preview.asset, (function(r, o) {
                    return e("div", {
                        key: o,
                        staticClass: "asset"
                    }, [e("div", {
                        staticClass: "asset__container"
                    }, ["image" == r._type ? e("SanityImage", {
                        ref: "image",
                        refInFor: !0,
                        staticClass: "abs full cover",
                        attrs: {
                            image: r.image
                        }
                    }) : "vimeo" == r._type ? e("VideoPlayer", {
                        staticClass: "abs",
                        attrs: {
                            url: r.video.url,
                            autoplay: r.video.autoplay || !1,
                            showDuration: !r.video.autoplay,
                            controls: !r.video.autoplay,
                            hoverActions: !1
                        }
                    }) : t._e()], 1)])
                }
                )), t._v(" "), e("p", {
                    staticClass: "b2"
                }, [t._v(t._s(r.preview.title))])], 2)], 1)
            }
            )), 0), t._v(" "), e("nuxt-link", {
                staticClass: "related-work__link",
                attrs: {
                    to: "/work"
                }
            }, [e("span", {
                staticClass: "decoration active b2 opaque black"
            }, [t._v("View All Work")]), t._v(" "), e("RightArrowIcon", {
                attrs: {
                    color: "black"
                }
            })], 1)], 1)])
        }
        ), [], !1, null, "5d147903", null);
        e.default = component.exports;
        installComponents(component, {
            SanityImage: r(471).default,
            VideoPlayer: r(474).default,
            RightArrowIcon: r(268).default
        })
    },
    874: function(t, e, r) {
        "use strict";
        r(831)
    },
    875: function(t, e, r) {
        var o = r(32)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".work-detail__content[data-v-8f67d008]{position:relative;z-index:5;background:#fff}.work-detail .slides[data-v-8f67d008]{position:relative;z-index:1;background:#fff}@media only screen and (min-width: 480px){.work-detail .slides[data-v-8f67d008]{padding-top:40rem}.work-detail .slide[data-v-8f67d008]{margin-bottom:var(--gutter)}.work-detail .slide .asset[data-v-8f67d008]{background:#b7e3b6}}@media only screen and (max-width: 479px){.work-detail .slides[data-v-8f67d008]{padding-top:30px}.work-detail .slide[data-v-8f67d008]{margin-bottom:var(--gutter)}.work-detail .slide .asset[data-v-8f67d008]{background:#b7e3b6}}", ""]),
        o.locals = {},
        t.exports = o
    },
    897: function(t, e, r) {
        "use strict";
        r.r(e);
        r(50),
        r(69);
        var o = r(1)
          , head = (r(22),
        r(652))
          , n = r(660)
          , l = r(112)
          , d = r(762)
          , c = r(763)
          , v = r(693)
          , f = r(764)
          , m = r(851)
          , h = r(765)
          , _ = r(766)
          , y = r(767)
          , w = r(768)
          , x = r(769)
          , k = r(770)
          , C = r(772)
          , I = r(114)
          , M = r(113)
          , z = {
            name: "WorkDetail",
            asyncData: function(t) {
                return Object(o.a)(regeneratorRuntime.mark((function e() {
                    var r, o, data;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = t.params,
                                o = t.error,
                                e.prev = 1,
                                e.next = 4,
                                I.a.fetch(M.g, r);
                            case 4:
                                return data = e.sent,
                                e.abrupt("return", {
                                    page: data
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
            mixins: [head.a, l.a, Object(n.a)()],
            components: {
                Hero: d.default,
                Press: c.default,
                Slideshow: v.default,
                QuoteSlide: f.default,
                Description: h.default,
                RelatedWork: m.default,
                CenteredSlide: _.default,
                FullBleedSlide: y.default,
                TwoColumnSlide: w.default,
                AssetCopySlide: x.default,
                TitledCarousel: k.default,
                TwoColumnAssetsCopy: C.default
            },
            created: function() {
                this.$store.dispatch("projectTitle", this.page.information.title)
            }
        }
          , S = (r(874),
        r(9))
          , component = Object(S.a)(z, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: "main",
                class: ["page work-detail"]
            }, [e("div", {
                staticClass: "work-detail__content drsw"
            }, [t.page.slideshow && t.page.slideshow.assets.length > 0 ? e("Slideshow", {
                attrs: {
                    data: t.page.slideshow
                }
            }) : t._e(), t._v(" "), e("Description", {
                attrs: {
                    data: t.page.description
                }
            }), t._v(" "), t.page.content && t.page.content.slides ? e("div", {
                staticClass: "slides"
            }, [t._l(t.page.content.slides, (function(r, o) {
                return ["fullBleed" == r._type ? e("FullBleedSlide", {
                    key: o,
                    attrs: {
                        slide: r
                    }
                }) : "twoColumnAssets" == r._type ? e("TwoColumnSlide", {
                    key: o,
                    attrs: {
                        slide: r,
                        equal: !0
                    }
                }) : "assetCopy" == r._type ? e("AssetCopySlide", {
                    key: o,
                    attrs: {
                        slide: r
                    }
                }) : "centeredAsset" == r._type ? e("CenteredSlide", {
                    key: o,
                    attrs: {
                        slide: r
                    }
                }) : "quote" == r._type ? e("QuoteSlide", {
                    key: o,
                    attrs: {
                        slide: r
                    }
                }) : "twoColumnAssetsCopy" == r._type ? e("TwoColumnAssetsCopy", {
                    key: o,
                    attrs: {
                        slide: r
                    }
                }) : "titledCarousel" == r._type ? e("TitledCarousel", {
                    key: o,
                    attrs: {
                        slide: r
                    }
                }) : t._e()]
            }
            ))], 2) : t._e(), t._v(" "), t.page.press && t.page.press.pressLinks.length > 0 ? e("Press", {
                attrs: {
                    data: t.page.press
                }
            }) : t._e()], 1), t._v(" "), t.page.related ? e("RelatedWork", {
                attrs: {
                    data: t.page.related
                }
            }) : t._e()], 1)
        }
        ), [], !1, null, "8f67d008", null);
        e.default = component.exports
    }
}]);
