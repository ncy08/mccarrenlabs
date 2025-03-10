(window.webpackJsonp = window.webpackJsonp || []).push([[86], {
    699: function(e, t, o) {
        "use strict";
        var r = o(2)
          , n = o(96).findIndex
          , l = o(146)
          , c = "findIndex"
          , d = !0;
        c in [] && Array(1)[c]((function() {
            d = !1
        }
        )),
        r({
            target: "Array",
            proto: !0,
            forced: d
        }, {
            findIndex: function(e) {
                return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        l(c)
    },
    704: function(e, t, o) {
        var content = o(789);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
        (0,
        o(33).default)("41450c66", content, !0, {
            sourceMap: !1
        })
    },
    705: function(e, t, o) {
        var content = o(791);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
        (0,
        o(33).default)("4af2fc67", content, !0, {
            sourceMap: !1
        })
    },
    756: function(e, t, o) {
        "use strict";
        o.r(t);
        o(57),
        o(20),
        o(71);
        var r = {
            name: "WorkGridItem",
            props: {
                data: {
                    type: Object,
                    required: !0
                },
                selectedCategory: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                active: function() {
                    return "All" === this.selectedCategory.name || this.data.project.services && this.data.project.services.includes(this.selectedCategory.name)
                },
                cursorCopy: function() {
                    return this.$store.getters.cursorCopy
                }
            },
            mounted: function() {
                var e = this.data.project.preview
                  , t = e.workPageTitleColor
                  , o = e.workPageTileColor;
                t && this.$refs.item.style.setProperty("--copyColor", t),
                o && this.$refs.item.style.setProperty("--tileColor", o)
            },
            methods: {
                handleMouseMove: function(e) {
                    this.cursorCopy !== this.data.project.preview.title && this.$store.dispatch("setCursorCopy", this.data.project.preview.title)
                },
                handleMouseLeave: function() {
                    "" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "")
                },
                handleMouseMoveDisabled: function() {
                    "Coming Soon" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "Coming Soon")
                }
            }
        }
          , n = o(9)
          , component = Object(n.a)(r, (function() {
            var e = this
              , t = e._self._c;
            return t("li", {
                ref: "item",
                class: [e.data.sizing, {
                    active: e.active
                }]
            }, [e.data.project.information.hasOwnProperty("disabled") && e.data.project.information.disabled ? t("div", {
                staticClass: "grid-item"
            }, [e._l(e.data.project.preview.asset, (function(o, r) {
                return t("div", {
                    key: r,
                    staticClass: "asset",
                    on: {
                        mousemove: e.handleMouseMoveDisabled,
                        mouseleave: e.handleMouseLeave
                    }
                }, [t("div", {
                    staticClass: "asset__container"
                }, ["image" == o._type ? t("SanityImage", {
                    ref: "image",
                    refInFor: !0,
                    staticClass: "abs full cover",
                    attrs: {
                        image: o.image
                    }
                }) : "vimeo" == o._type ? t("VideoPlayer", {
                    staticClass: "abs",
                    attrs: {
                        url: o.video.url,
                        autoplay: o.video.autoplay || !1,
                        showDuration: !o.video.autoplay,
                        controls: !o.video.autoplay,
                        hoverActions: !1
                    }
                }) : e._e()], 1)])
            }
            )), e._v(" "), t("p", {
                staticClass: "b2"
            }, [e._v(e._s(e.data.project.preview.title) + " (Coming Soon)")])], 2) : t("nuxt-link", {
                staticClass: "grid-item",
                attrs: {
                    to: "/work/".concat(e.data.project.information.slug.current)
                }
            }, [e._l(e.data.project.preview.asset, (function(o, r) {
                return t("div", {
                    key: r,
                    staticClass: "asset",
                    on: {
                        mousemove: e.handleMouseMove,
                        mouseleave: e.handleMouseLeave
                    }
                }, [t("div", {
                    staticClass: "asset__container"
                }, ["image" == o._type ? t("SanityImage", {
                    ref: "image",
                    refInFor: !0,
                    staticClass: "abs full cover",
                    attrs: {
                        image: o.image
                    }
                }) : "vimeo" == o._type ? t("VideoPlayer", {
                    staticClass: "abs",
                    attrs: {
                        url: o.video.url,
                        autoplay: o.video.autoplay || !1,
                        showDuration: !o.video.autoplay,
                        controls: !o.video.autoplay,
                        hoverActions: !1
                    }
                }) : e._e()], 1)])
            }
            )), e._v(" "), t("p", {
                staticClass: "b2"
            }, [e._v(e._s(e.data.project.preview.title))])], 2)], 1)
        }
        ), [], !1, null, null, null);
        t.default = component.exports;
        installComponents(component, {
            SanityImage: o(471).default,
            VideoPlayer: o(474).default
        })
    },
    788: function(e, t, o) {
        "use strict";
        o(704)
    },
    789: function(e, t, o) {
        var r = o(32)((function(i) {
            return i[1]
        }
        ));
        r.push([e.i, ".work-grid{position:relative;width:100vw;padding:0 var(--margin)}.work-grid__line{position:absolute;bottom:0;left:0;width:100%;height:1px;background:#dcdcdc;transform:translate3d(0, 0, 0)}.work-grid ul{width:100%}.work-grid ul li{position:relative;transition:opacity 500ms ease;--copyColor: black;--tileColor: #b7e3b6}.work-grid ul li:not(.active){opacity:.2}.work-grid ul li .grid-item{position:relative;width:100%;display:block}.work-grid .asset{height:100%;transform:translate3d(0, 0, 0);background:var(--tileColor)}.work-grid .asset__container{height:100%}@media only screen and (min-width: 480px){.work-grid{padding-top:150rem;padding-bottom:250rem}.work-grid ul{display:grid;grid-gap:var(--gutter);grid-template-columns:repeat(3, 1fr);grid-auto-rows:294rem;grid-auto-flow:dense}.work-grid ul li.normal{grid-column:span 1;grid-row:span 1}.work-grid ul li.wide{grid-column:span 2;grid-row:span 2}.work-grid ul li.tall{grid-column:span 1;grid-row:span 2}.work-grid ul li .grid-item{height:100%}.work-grid ul li p{display:none;position:absolute;top:15rem;left:15rem;width:calc(100% - 30rem);font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing);z-index:1;transition:opacity 500ms ease;opacity:0;color:var(--copyColor);will-change:opacity;user-select:none;pointer-events:none}}@media only screen and (max-width: 479px){.work-grid{padding-top:130px;padding-bottom:90px}.work-grid ul{display:flex;flex-wrap:wrap}.work-grid ul li{width:100%}.work-grid ul li:not(:last-child){margin-bottom:25px}.work-grid ul li p{position:relative;margin-top:10px}.work-grid ul li .asset{position:relative}.work-grid ul li .asset__container{width:100%;position:relative}.work-grid ul li.normal .asset__container,.work-grid ul li.wide .asset__container{padding-top:66.66%}.work-grid ul li.tall .asset__container{padding-top:140%}}", ""]),
        r.locals = {},
        e.exports = r
    },
    790: function(e, t, o) {
        "use strict";
        o(705)
    },
    791: function(e, t, o) {
        var r = o(32)((function(i) {
            return i[1]
        }
        ));
        r.push([e.i, '.filter[data-v-eadcd442]{position:fixed;z-index:10;mix-blend-mode:difference;color:#fff;pointer-events:none;width:100%}.filter__bg[data-v-eadcd442]{position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:0;pointer-events:auto;opacity:0;visibility:hidden}.filter ul[data-v-eadcd442]{position:absolute;z-index:1}.filter span[data-v-eadcd442]{color:#fff}.filter__item[data-v-eadcd442]{position:relative;display:inline-block;pointer-events:none}.filter__item button[data-v-eadcd442]{pointer-events:auto}.filter__item__name[data-v-eadcd442]{display:flex}.filter__item__name span[data-v-eadcd442]{position:relative}.filter__item__name span[data-v-eadcd442]:last-child{font-family:"ChaletBook"}@media only screen and (min-width: 480px){.filter ul[data-v-eadcd442]{top:88rem;left:var(--gutter);width:100%;padding-right:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.0833333333 + var(--gutter)*1)}.filter .underline[data-v-eadcd442]:after{bottom:4rem}.filter__item[data-v-eadcd442]{margin-right:8rem}.filter__item:not(:last-child) .filter__item__name span[data-v-eadcd442]:first-child:not(.selected):before{opacity:1}.filter__item:not(:last-child) .filter__item__name span[data-v-eadcd442]:first-child:before{content:",";position:absolute;bottom:0;right:-12rem;font-weight:400;font-family:"PSTimes";font-size:var(--h2);line-height:var(--h2-line_height);letter-spacing:var(--h2-letter_spacing);opacity:0;transition:all 500ms ease}.filter__item__name span[data-v-eadcd442]:last-child{align-self:flex-start;font-size:18rem;letter-spacing:.015em;margin-top:5rem}}@media only screen and (max-width: 479px){.filter ul[data-v-eadcd442]{top:88px;left:var(--gutter);width:calc(100vw - var(--margin)*2)}.filter .underline[data-v-eadcd442]:after{bottom:0}.filter__item[data-v-eadcd442]{margin-right:6px;transform:translate3d(0, 0, 0)}.filter__item button[data-v-eadcd442]{will-change:opacity;transform:translate3d(0, 0, 0)}.filter__item:not(:last-child) .filter__item__name span[data-v-eadcd442]:first-child:not(.selected):before{opacity:1}.filter__item:not(:last-child) .filter__item__name span[data-v-eadcd442]:first-child:before{content:",";position:absolute;bottom:0;right:-6px;font-weight:400;font-family:"PSTimes";font-size:var(--h2);line-height:var(--h2-line_height);letter-spacing:var(--h2-letter_spacing);opacity:0;transition:all 500ms ease}.filter__item__name[data-v-eadcd442]{font-size:25px}.filter__item__name span[data-v-eadcd442]:last-child{align-self:flex-start;font-size:12px;letter-spacing:.015em;margin-top:1px;margin-left:2px}}', ""]),
        r.locals = {},
        e.exports = r
    },
    818: function(e, t, o) {
        "use strict";
        o.r(t);
        var r = o(756)
          , n = {
            name: "WorkGrid",
            props: {
                projects: {
                    type: Array,
                    required: !0
                },
                selectedCategory: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                GridItem: r.default
            }
        }
          , l = (o(788),
        o(9))
          , component = Object(l.a)(n, (function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "work-grid"
            }, [t("ul", e._l(e.projects, (function(data, o) {
                return t("GridItem", {
                    key: o,
                    attrs: {
                        selectedCategory: e.selectedCategory,
                        data: data
                    }
                })
            }
            )), 1), e._v(" "), t("div", {
                staticClass: "work-grid__line"
            })])
        }
        ), [], !1, null, null, null);
        t.default = component.exports
    },
    819: function(e, t, o) {
        "use strict";
        o.r(t);
        o(20);
        var r = o(1)
          , n = o(94)
          , l = (o(22),
        o(70),
        o(269),
        o(142),
        o(13))
          , c = o(477)
          , d = o(4)
          , f = {
            name: "WorkFilter",
            mixins: [c.a],
            props: {
                selectionIndex: {
                    type: Number,
                    required: !0
                },
                categories: {
                    type: Array,
                    required: !0
                }
            },
            computed: {
                cursorCopy: function() {
                    return this.$store.getters.cursorCopy
                }
            },
            data: function() {
                return {
                    tl: null,
                    open: !1,
                    bounds: null,
                    openTl: !1,
                    closeTl: !1,
                    cache: [],
                    bottomTl: null,
                    selected: !0
                }
            },
            beforeDestroy: function() {
                d.a.off("resize", this.resize),
                this.bottomTl && this.bottomTl.kill()
            },
            mounted: function() {
                this.resize();
                var e = Object(n.a)(this.$refs.item);
                e.splice(this.selectionIndex, 1),
                l.a.set(e, {
                    autoAlpha: 0
                });
                var t = this.cache[this.selectionIndex];
                l.a.set(this.$refs.container, {
                    x: this.bounds.left - t.left,
                    y: this.bounds.top - t.top
                }),
                d.a.on("resize", this.resize)
            },
            methods: {
                handleMouseMove: function(e) {
                    "Close" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "Close")
                },
                handleMouseLeave: function() {
                    "" !== this.cursorCopy && this.$store.dispatch("setCursorCopy", "")
                },
                close: function() {
                    this.open && this.handleClick(this.selectionIndex)
                },
                onReady: function() {
                    this.bottomTl = l.a.timeline({
                        scrollTrigger: {
                            trigger: ".work-grid",
                            start: "bottom-=10% center",
                            end: "+=25%",
                            scrub: .2
                        }
                    }),
                    this.bottomTl.fromTo(this.$refs.container, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0
                    })
                },
                handleHoverIndex: function(e) {
                    this.open && this.$emit("updateHoverIndex", e)
                },
                resize: function() {
                    this.bounds = this.$refs.container.getBoundingClientRect(),
                    this.cache = this.$refs.item.map((function(e) {
                        return e.getBoundingClientRect()
                    }
                    ));
                    var e = this.cache[this.selectionIndex];
                    l.a.set(this.$refs.container, {
                        x: this.bounds.left - e.left,
                        y: this.bounds.top - e.top
                    })
                },
                handleClick: function(e) {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function o() {
                        var r, c, f, h, m, v, _, w;
                        return regeneratorRuntime.wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    t.open ? ((r = Object(n.a)(t.$refs.item)).splice(e, 1),
                                    c = t.cache[e],
                                    t.openTl && t.openTl.pause() && t.openTl.kill(),
                                    t.closeTl && t.closeTl.pause() && t.closeTl.kill(),
                                    t.closeTl = null,
                                    t.open = !1,
                                    t.selected = !0,
                                    t.setSelectionIndex(e),
                                    f = (c.right - t.bounds.left) / (d.b.bounds.ww / 1200 * 1e3),
                                    h = (c.bottom - t.bounds.top) / (d.b.bounds.wh / 1200 * 1e3),
                                    .1 == h ? f : .1 == f ? h : Math.max(f, h),
                                    t.closeTl = l.a.timeline({
                                        paused: !0
                                    }).to(t.$refs.bg, {
                                        autoAlpha: 0,
                                        duration: .3
                                    }, 0).to(r, {
                                        autoAlpha: 0,
                                        stagger: .02,
                                        duration: .6,
                                        ease: "power2.inOut"
                                    }).to(t.$refs.container, {
                                        x: t.bounds.left - c.left,
                                        y: t.bounds.top - c.top,
                                        duration: .8,
                                        ease: "power2.inOut"
                                    }),
                                    t.closeTl.play().then((function() {}
                                    ))) : ((m = Object(n.a)(t.$refs.item)).splice(e, 1),
                                    v = t.cache[e],
                                    t.closeTl && t.closeTl.pause() && t.closeTl.kill(),
                                    t.openTl && t.openTl.pause() && t.openTl.kill(),
                                    t.openTl = null,
                                    t.open = !0,
                                    t.selected = !1,
                                    _ = (v.right - t.bounds.left) / (d.b.bounds.ww / 1200 * 800),
                                    w = (v.bottom - t.bounds.top) / (d.b.bounds.wh / 1200 * 800),
                                    .1 == w ? _ : .1 == _ ? w : Math.max(_, w),
                                    t.openTl = l.a.timeline({
                                        paused: !0
                                    }).to(t.$refs.bg, {
                                        autoAlpha: 1,
                                        duration: .3
                                    }, 0).to(t.$refs.container, {
                                        x: 0,
                                        y: 0,
                                        duration: 0 == e ? 0 : .8,
                                        ease: "power2.inOut"
                                    }).to(m, {
                                        autoAlpha: 1,
                                        stagger: .02,
                                        duration: .6,
                                        ease: "power2.inOut"
                                    }),
                                    t.openTl.play().then((function() {
                                        t.open = !0
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o)
                    }
                    )))()
                },
                setSelectionIndex: function(e) {
                    this.$emit("update", e)
                }
            }
        }
          , h = (o(790),
        o(9))
          , component = Object(h.a)(f, (function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "filter"
            }, [t("ul", {
                ref: "container"
            }, e._l(e.categories, (function(o, r) {
                return t("li", {
                    key: r,
                    class: ["filter__item"],
                    on: {
                        "&mouseenter": function(t) {
                            return e.handleHoverIndex(r)
                        },
                        "&mouseleave": function(t) {
                            return e.handleHoverIndex(null)
                        }
                    }
                }, [t("button", {
                    ref: "item",
                    refInFor: !0,
                    on: {
                        click: function(t) {
                            return e.handleClick(r)
                        }
                    }
                }, [t("span", {
                    staticClass: "filter__item__name h2"
                }, [t("span", {
                    class: ["underline white", {
                        selected: e.selectionIndex == r && e.selected
                    }]
                }, [e._v(e._s(o.name))]), e._v(" "), t("span", [e._v("(" + e._s(o.count) + ")")])])])])
            }
            )), 0), e._v(" "), t("div", {
                ref: "bg",
                staticClass: "filter__bg",
                on: {
                    click: e.close,
                    mousemove: e.handleMouseMove,
                    mouseleave: e.handleMouseLeave
                }
            })])
        }
        ), [], !1, null, "eadcd442", null);
        t.default = component.exports
    },
    827: function(e, t, o) {
        var content = o(867);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
        (0,
        o(33).default)("04e4eee0", content, !0, {
            sourceMap: !1
        })
    },
    866: function(e, t, o) {
        "use strict";
        o(827)
    },
    867: function(e, t, o) {
        var r = o(32)((function(i) {
            return i[1]
        }
        ));
        r.push([e.i, ".work-page__content[data-v-1d8de4cc]{position:relative;z-index:5;background:#fff}", ""]),
        r.locals = {},
        e.exports = r
    },
    894: function(e, t, o) {
        "use strict";
        o.r(t);
        var r = o(1)
          , head = (o(54),
        o(699),
        o(20),
        o(55),
        o(11),
        o(25),
        o(45),
        o(49),
        o(27),
        o(22),
        o(652))
          , n = o(660)
          , l = o(112)
          , c = o(818)
          , d = o(819)
          , f = o(114)
          , h = o(113)
          , m = {
            name: "Work",
            components: {
                WorkGrid: c.default,
                WorkFilter: d.default
            },
            asyncData: function(e) {
                return Object(r.a)(regeneratorRuntime.mark((function t() {
                    var o, data;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return o = e.error,
                                t.prev = 1,
                                t.next = 4,
                                f.a.fetch(h.k);
                            case 4:
                                return data = t.sent,
                                t.abrupt("return", {
                                    page: data
                                });
                            case 8:
                                t.prev = 8,
                                t.t0 = t.catch(1),
                                o({
                                    statusCode: 404,
                                    message: "The page you are looking for does not exist. ",
                                    err: t.t0
                                });
                            case 11:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[1, 8]])
                }
                )))()
            },
            mixins: [head.a, l.a, Object(n.a)()],
            computed: {
                selectedCategory: function() {
                    return null !== this.hoverSelectionIndex ? this.categories[this.hoverSelectionIndex] : this.categories[this.selectionIndex]
                },
                categories: function() {
                    if (this.page.overview && this.page.overview.projects) {
                        var e = [];
                        this.page.overview.projects.forEach((function(data) {
                            data.project.services && data.project.services.forEach((function(t) {
                                return e.push(t)
                            }
                            ))
                        }
                        ));
                        var t = {};
                        e.forEach((function(e) {
                            t[e] ? ++t[e] : t[e] = 1
                        }
                        ));
                        var o = [{
                            name: "All",
                            count: this.page.overview.projects.length
                        }];
                        return Object.keys(t).forEach((function(e) {
                            o.push({
                                name: e,
                                count: t[e]
                            })
                        }
                        )),
                        o
                    }
                    return [{
                        name: "All",
                        count: 0
                    }]
                }
            },
            data: function() {
                return {
                    selectionIndex: 0,
                    hoverSelectionIndex: null
                }
            },
            created: function() {
                var e = this
                  , t = this.categories.findIndex((function(t) {
                    var o = t.name;
                    return e.slugify(o) === e.$route.query.filter
                }
                ));
                t > -1 && (this.selectionIndex = t)
            },
            methods: {
                updateSelectionIndex: function(e) {
                    this.selectionIndex = e
                },
                updateHoverSelectionIndex: function(e) {
                    this.hoverSelectionIndex = e
                },
                slugify: function(text) {
                    return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                }
            }
        }
          , v = (o(866),
        o(9))
          , component = Object(v.a)(m, (function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                ref: "main",
                class: ["page work-page"]
            }, [t("div", {
                staticClass: "work-page__content drsw"
            }, [t("WorkFilter", {
                attrs: {
                    categories: e.categories,
                    selectionIndex: e.selectionIndex
                },
                on: {
                    update: e.updateSelectionIndex,
                    updateHoverIndex: e.updateHoverSelectionIndex
                }
            }), e._v(" "), e.page.overview && e.page.overview.projects.length > 0 ? t("WorkGrid", {
                attrs: {
                    selectedCategory: e.selectedCategory,
                    projects: e.page.overview.projects
                }
            }) : e._e()], 1), e._v(" "), t("Footer")], 1)
        }
        ), [], !1, null, "1d8de4cc", null);
        t.default = component.exports;
        installComponents(component, {
            WorkFilter: o(819).default,
            WorkGrid: o(818).default,
            Footer: o(636).default
        })
    }
}]);
