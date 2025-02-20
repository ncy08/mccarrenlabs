/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    495: function (e, t, r) {
      !(function (e) {
        "use strict";
        function t(e, t) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function r(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        }
        var n,
          o,
          l,
          c,
          f,
          d,
          h,
          v,
          m,
          y,
          x,
          w,
          _,
          k = function () {
            return (
              n ||
              ("undefined" != typeof window &&
                (n = window.gsap) &&
                n.registerPlugin &&
                n)
            );
          },
          S = 1,
          T = [],
          C = [],
          E = [],
          P = Date.now,
          M = function (e, t) {
            return t;
          },
          O = function () {
            var e = m.core,
              data = e.bridge || {},
              t = e._scrollers,
              r = e._proxies;
            t.push.apply(t, C),
              r.push.apply(r, E),
              (C = t),
              (E = r),
              (M = function (e, t) {
                return data[e](t);
              });
          },
          A = function (element, e) {
            return ~E.indexOf(element) && E[E.indexOf(element) + 1][e];
          },
          R = function (e) {
            return !!~y.indexOf(e);
          },
          D = function (element, e, t, r, n) {
            return element.addEventListener(e, t, {
              passive: !1 !== r,
              capture: !!n,
            });
          },
          Y = function (element, e, t, r) {
            return element.removeEventListener(e, t, !!r);
          },
          I = "scrollLeft",
          X = "scrollTop",
          z = function () {
            return (x && x.isPressed) || C.cache++;
          },
          B = function (e, t) {
            var r = function r(n) {
              if (n || 0 === n) {
                S && (l.history.scrollRestoration = "manual");
                var o = x && x.isPressed;
                (n = r.v = Math.round(n) || (x && x.iOS ? 1 : 0)),
                  e(n),
                  (r.cacheID = C.cache),
                  o && M("ss", n);
              } else
                (t || C.cache !== r.cacheID || M("ref")) &&
                  ((r.cacheID = C.cache), (r.v = e()));
              return r.v + r.offset;
            };
            return (r.offset = 0), e && r;
          },
          N = {
            s: I,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: B(function (e) {
              return arguments.length
                ? l.scrollTo(e, F.sc())
                : l.pageXOffset || c[I] || f[I] || d[I] || 0;
            }),
          },
          F = {
            s: X,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: N,
            sc: B(function (e) {
              return arguments.length
                ? l.scrollTo(N.sc(), e)
                : l.pageYOffset || c[X] || f[X] || d[X] || 0;
            }),
          },
          H = function (e, t) {
            return (
              ((t && t._ctx && t._ctx.selector) || n.utils.toArray)(e)[0] ||
              ("string" == typeof e && !1 !== n.config().nullTargetWarn
                ? console.warn("Element not found:", e)
                : null)
            );
          },
          L = function (element, e) {
            var s = e.s,
              t = e.sc;
            R(element) && (element = c.scrollingElement || f);
            var i = C.indexOf(element),
              r = t === F.sc ? 1 : 2;
            !~i && (i = C.push(element) - 1),
              C[i + r] || D(element, "scroll", z);
            var o = C[i + r],
              l =
                o ||
                (C[i + r] =
                  B(A(element, s), !0) ||
                  (R(element)
                    ? t
                    : B(function (e) {
                        return arguments.length ? (element[s] = e) : element[s];
                      })));
            return (
              (l.target = element),
              o ||
                (l.smooth =
                  "smooth" === n.getProperty(element, "scrollBehavior")),
              l
            );
          },
          W = function (e, t, r) {
            var n = e,
              o = e,
              l = P(),
              c = l,
              f = t || 50,
              d = Math.max(500, 3 * f),
              h = function (e, t) {
                var d = P();
                t || d - l > f
                  ? ((o = n), (n = e), (c = l), (l = d))
                  : r
                  ? (n += e)
                  : (n = o + ((e - o) / (d - c)) * (l - c));
              },
              v = function (e) {
                var t = c,
                  f = o,
                  v = P();
                return (
                  (e || 0 === e) && e !== n && h(e),
                  l === c || v - c > d
                    ? 0
                    : ((n + (r ? f : -f)) / ((r ? v : l) - t)) * 1e3
                );
              };
            return {
              update: h,
              reset: function () {
                (o = n = r ? 0 : n), (c = l = 0);
              },
              getVelocity: v,
            };
          },
          U = function (e, t) {
            return (
              t && !e._gsapAllow && e.preventDefault(),
              e.changedTouches ? e.changedTouches[0] : e
            );
          },
          V = function (a) {
            var e = Math.max.apply(Math, a),
              t = Math.min.apply(Math, a);
            return Math.abs(e) >= Math.abs(t) ? e : t;
          },
          G = function () {
            (m = n.core.globals().ScrollTrigger) && m.core && O();
          },
          j = function (e) {
            return (
              (n = e || k()),
              !o &&
                n &&
                "undefined" != typeof document &&
                document.body &&
                ((l = window),
                (c = document),
                (f = c.documentElement),
                (d = c.body),
                (y = [l, c, f, d]),
                n.utils.clamp,
                (_ = n.core.context || function () {}),
                (v = "onpointerenter" in d ? "pointer" : "mouse"),
                (h = J.isTouch =
                  l.matchMedia &&
                  l.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in l ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0
                    ? 2
                    : 0),
                (w = J.eventTypes =
                  (
                    "ontouchstart" in f
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in f
                      ? "pointerdown,pointermove,pointercancel,pointerup"
                      : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (S = 0);
                }, 500),
                G(),
                (o = 1)),
              o
            );
          };
        (N.op = F), (C.cache = 0);
        var J = (function () {
          function e(e) {
            this.init(e);
          }
          return (
            (e.prototype.init = function (e) {
              o || j(n) || console.warn("Please gsap.registerPlugin(Observer)"),
                m || G();
              var t = e.tolerance,
                r = e.dragMinimum,
                y = e.type,
                k = e.target,
                S = e.lineHeight,
                C = e.debounce,
                E = e.preventDefault,
                M = e.onStop,
                O = e.onStopDelay,
                A = e.ignore,
                I = e.wheelSpeed,
                X = e.event,
                B = e.onDragStart,
                J = e.onDragEnd,
                K = e.onDrag,
                Z = e.onPress,
                $ = e.onRelease,
                Q = e.onRight,
                ee = e.onLeft,
                te = e.onUp,
                re = e.onDown,
                ne = e.onChangeX,
                oe = e.onChangeY,
                ie = e.onChange,
                ae = e.onToggleX,
                se = e.onToggleY,
                le = e.onHover,
                ce = e.onHoverEnd,
                ue = e.onMove,
                fe = e.ignoreCheck,
                de = e.isNormalizer,
                pe = e.onGestureStart,
                he = e.onGestureEnd,
                ge = e.onWheel,
                ve = e.onEnable,
                me = e.onDisable,
                ye = e.onClick,
                xe = e.scrollSpeed,
                be = e.capture,
                we = e.allowClicks,
                _e = e.lockAxis,
                ke = e.onLockAxis;
              (this.target = k = H(k) || f),
                (this.vars = e),
                A && (A = n.utils.toArray(A)),
                (t = t || 1e-9),
                (r = r || 0),
                (I = I || 1),
                (xe = xe || 1),
                (y = y || "wheel,touch,pointer"),
                (C = !1 !== C),
                S || (S = parseFloat(l.getComputedStyle(d).lineHeight) || 22);
              var Se,
                Te,
                Ce,
                Ee,
                Pe,
                Me,
                Oe,
                Ae = this,
                Re = 0,
                De = 0,
                Ye = e.passive || !E,
                Ie = L(k, N),
                Xe = L(k, F),
                ze = Ie(),
                Be = Xe(),
                Ne =
                  ~y.indexOf("touch") &&
                  !~y.indexOf("pointer") &&
                  "pointerdown" === w[0],
                Fe = R(k),
                He = k.ownerDocument || c,
                Le = [0, 0, 0],
                We = [0, 0, 0],
                qe = 0,
                Ue = function () {
                  return (qe = P());
                },
                Ve = function (e, t) {
                  return (
                    ((Ae.event = e) && A && ~A.indexOf(e.target)) ||
                    (t && Ne && "touch" !== e.pointerType) ||
                    (fe && fe(e, t))
                  );
                },
                Ge = function () {
                  Ae._vx.reset(), Ae._vy.reset(), Te.pause(), M && M(Ae);
                },
                je = function () {
                  var e = (Ae.deltaX = V(Le)),
                    r = (Ae.deltaY = V(We)),
                    n = Math.abs(e) >= t,
                    o = Math.abs(r) >= t;
                  ie && (n || o) && ie(Ae, e, r, Le, We),
                    n &&
                      (Q && Ae.deltaX > 0 && Q(Ae),
                      ee && Ae.deltaX < 0 && ee(Ae),
                      ne && ne(Ae),
                      ae && Ae.deltaX < 0 != Re < 0 && ae(Ae),
                      (Re = Ae.deltaX),
                      (Le[0] = Le[1] = Le[2] = 0)),
                    o &&
                      (re && Ae.deltaY > 0 && re(Ae),
                      te && Ae.deltaY < 0 && te(Ae),
                      oe && oe(Ae),
                      se && Ae.deltaY < 0 != De < 0 && se(Ae),
                      (De = Ae.deltaY),
                      (We[0] = We[1] = We[2] = 0)),
                    (Ee || Ce) &&
                      (ue && ue(Ae), Ce && (K(Ae), (Ce = !1)), (Ee = !1)),
                    Me && !(Me = !1) && ke && ke(Ae),
                    Pe && (ge(Ae), (Pe = !1)),
                    (Se = 0);
                },
                Je = function (e, t, r) {
                  (Le[r] += e),
                    (We[r] += t),
                    Ae._vx.update(e),
                    Ae._vy.update(t),
                    C ? Se || (Se = requestAnimationFrame(je)) : je();
                },
                Ke = function (e, t) {
                  _e &&
                    !Oe &&
                    ((Ae.axis = Oe = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                    (Me = !0)),
                    "y" !== Oe && ((Le[2] += e), Ae._vx.update(e, !0)),
                    "x" !== Oe && ((We[2] += t), Ae._vy.update(t, !0)),
                    C ? Se || (Se = requestAnimationFrame(je)) : je();
                },
                Ze = function (e) {
                  if (!Ve(e, 1)) {
                    var t = (e = U(e, E)).clientX,
                      n = e.clientY,
                      o = t - Ae.x,
                      l = n - Ae.y,
                      c = Ae.isDragging;
                    (Ae.x = t),
                      (Ae.y = n),
                      (c ||
                        Math.abs(Ae.startX - t) >= r ||
                        Math.abs(Ae.startY - n) >= r) &&
                        (K && (Ce = !0),
                        c || (Ae.isDragging = !0),
                        Ke(o, l),
                        c || (B && B(Ae)));
                  }
                },
                $e = (Ae.onPress = function (e) {
                  Ve(e, 1) ||
                    (e && e.button) ||
                    ((Ae.axis = Oe = null),
                    Te.pause(),
                    (Ae.isPressed = !0),
                    (e = U(e)),
                    (Re = De = 0),
                    (Ae.startX = Ae.x = e.clientX),
                    (Ae.startY = Ae.y = e.clientY),
                    Ae._vx.reset(),
                    Ae._vy.reset(),
                    D(de ? k : He, w[1], Ze, Ye, !0),
                    (Ae.deltaX = Ae.deltaY = 0),
                    Z && Z(Ae));
                }),
                Qe = (Ae.onRelease = function (e) {
                  if (!Ve(e, 1)) {
                    Y(de ? k : He, w[1], Ze, !0);
                    var t = !isNaN(Ae.y - Ae.startY),
                      r = Ae.isDragging,
                      o =
                        r &&
                        (Math.abs(Ae.x - Ae.startX) > 3 ||
                          Math.abs(Ae.y - Ae.startY) > 3),
                      c = U(e);
                    !o &&
                      t &&
                      (Ae._vx.reset(),
                      Ae._vy.reset(),
                      E &&
                        we &&
                        n.delayedCall(0.08, function () {
                          if (P() - qe > 300 && !e.defaultPrevented)
                            if (e.target.click) e.target.click();
                            else if (He.createEvent) {
                              var t = He.createEvent("MouseEvents");
                              t.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                l,
                                1,
                                c.screenX,
                                c.screenY,
                                c.clientX,
                                c.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                e.target.dispatchEvent(t);
                            }
                        })),
                      (Ae.isDragging = Ae.isGesturing = Ae.isPressed = !1),
                      M && r && !de && Te.restart(!0),
                      J && r && J(Ae),
                      $ && $(Ae, o);
                  }
                }),
                et = function (e) {
                  return (
                    e.touches &&
                    e.touches.length > 1 &&
                    (Ae.isGesturing = !0) &&
                    pe(e, Ae.isDragging)
                  );
                },
                tt = function () {
                  return (Ae.isGesturing = !1) || he(Ae);
                },
                nt = function (e) {
                  if (!Ve(e)) {
                    var t = Ie(),
                      r = Xe();
                    Je((t - ze) * xe, (r - Be) * xe, 1),
                      (ze = t),
                      (Be = r),
                      M && Te.restart(!0);
                  }
                },
                ot = function (e) {
                  if (!Ve(e)) {
                    (e = U(e, E)), ge && (Pe = !0);
                    var t =
                      (1 === e.deltaMode
                        ? S
                        : 2 === e.deltaMode
                        ? l.innerHeight
                        : 1) * I;
                    Je(e.deltaX * t, e.deltaY * t, 0),
                      M && !de && Te.restart(!0);
                  }
                },
                it = function (e) {
                  if (!Ve(e)) {
                    var t = e.clientX,
                      r = e.clientY,
                      n = t - Ae.x,
                      o = r - Ae.y;
                    (Ae.x = t),
                      (Ae.y = r),
                      (Ee = !0),
                      M && Te.restart(!0),
                      (n || o) && Ke(n, o);
                  }
                },
                at = function (e) {
                  (Ae.event = e), le(Ae);
                },
                st = function (e) {
                  (Ae.event = e), ce(Ae);
                },
                lt = function (e) {
                  return Ve(e) || (U(e, E) && ye(Ae));
                };
              (Te = Ae._dc = n.delayedCall(O || 0.25, Ge).pause()),
                (Ae.deltaX = Ae.deltaY = 0),
                (Ae._vx = W(0, 50, !0)),
                (Ae._vy = W(0, 50, !0)),
                (Ae.scrollX = Ie),
                (Ae.scrollY = Xe),
                (Ae.isDragging = Ae.isGesturing = Ae.isPressed = !1),
                _(this),
                (Ae.enable = function (e) {
                  return (
                    Ae.isEnabled ||
                      (D(Fe ? He : k, "scroll", z),
                      y.indexOf("scroll") >= 0 &&
                        D(Fe ? He : k, "scroll", nt, Ye, be),
                      y.indexOf("wheel") >= 0 && D(k, "wheel", ot, Ye, be),
                      ((y.indexOf("touch") >= 0 && h) ||
                        y.indexOf("pointer") >= 0) &&
                        (D(k, w[0], $e, Ye, be),
                        D(He, w[2], Qe),
                        D(He, w[3], Qe),
                        we && D(k, "click", Ue, !0, !0),
                        ye && D(k, "click", lt),
                        pe && D(He, "gesturestart", et),
                        he && D(He, "gestureend", tt),
                        le && D(k, v + "enter", at),
                        ce && D(k, v + "leave", st),
                        ue && D(k, v + "move", it)),
                      (Ae.isEnabled = !0),
                      e && e.type && $e(e),
                      ve && ve(Ae)),
                    Ae
                  );
                }),
                (Ae.disable = function () {
                  Ae.isEnabled &&
                    (T.filter(function (e) {
                      return e !== Ae && R(e.target);
                    }).length || Y(Fe ? He : k, "scroll", z),
                    Ae.isPressed &&
                      (Ae._vx.reset(),
                      Ae._vy.reset(),
                      Y(de ? k : He, w[1], Ze, !0)),
                    Y(Fe ? He : k, "scroll", nt, be),
                    Y(k, "wheel", ot, be),
                    Y(k, w[0], $e, be),
                    Y(He, w[2], Qe),
                    Y(He, w[3], Qe),
                    Y(k, "click", Ue, !0),
                    Y(k, "click", lt),
                    Y(He, "gesturestart", et),
                    Y(He, "gestureend", tt),
                    Y(k, v + "enter", at),
                    Y(k, v + "leave", st),
                    Y(k, v + "move", it),
                    (Ae.isEnabled = Ae.isPressed = Ae.isDragging = !1),
                    me && me(Ae));
                }),
                (Ae.kill = Ae.revert =
                  function () {
                    Ae.disable();
                    var i = T.indexOf(Ae);
                    i >= 0 && T.splice(i, 1), x === Ae && (x = 0);
                  }),
                T.push(Ae),
                de && R(k) && (x = Ae),
                Ae.enable(X);
            }),
            r(e, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            e
          );
        })();
        (J.version = "3.12.5"),
          (J.create = function (e) {
            return new J(e);
          }),
          (J.register = j),
          (J.getAll = function () {
            return T.slice();
          }),
          (J.getById = function (e) {
            return T.filter(function (t) {
              return t.vars.id === e;
            })[0];
          }),
          k() && n.registerPlugin(J);
        var K,
          Z,
          $,
          Q,
          ee,
          te,
          re,
          ne,
          oe,
          ie,
          ae,
          se,
          le,
          ce,
          ue,
          fe,
          de,
          pe,
          he,
          ge,
          ve,
          me,
          ye,
          xe,
          be,
          we,
          _e,
          ke,
          Se,
          Te,
          Ce,
          Ee,
          Pe,
          Me,
          Oe,
          Ae,
          Re,
          De,
          Ye = 1,
          Ie = Date.now,
          Xe = Ie(),
          ze = 0,
          Be = 0,
          Ne = function (e, t, r) {
            var n =
              tt(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
            return (
              (r["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e
            );
          },
          Fe = function (e, t) {
            return !t || (tt(e) && "clamp(" === e.substr(0, 6))
              ? e
              : "clamp(" + e + ")";
          },
          He = function e() {
            return Be && requestAnimationFrame(e);
          },
          Le = function () {
            return (ce = 1);
          },
          We = function () {
            return (ce = 0);
          },
          qe = function (e) {
            return e;
          },
          Ue = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          },
          Ve = function () {
            return "undefined" != typeof window;
          },
          Ge = function () {
            return K || (Ve() && (K = window.gsap) && K.registerPlugin && K);
          },
          je = function (e) {
            return !!~re.indexOf(e);
          },
          Je = function (e) {
            return (
              ("Height" === e ? Ce : $["inner" + e]) ||
              ee["client" + e] ||
              te["client" + e]
            );
          },
          Ke = function (element) {
            return (
              A(element, "getBoundingClientRect") ||
              (je(element)
                ? function () {
                    return (kr.width = $.innerWidth), (kr.height = Ce), kr;
                  }
                : function () {
                    return Pt(element);
                  })
            );
          },
          Ze = function (e, t, r) {
            var n = r.d,
              o = r.d2,
              a = r.a;
            return (a = A(e, "getBoundingClientRect"))
              ? function () {
                  return a()[n];
                }
              : function () {
                  return (t ? Je(o) : e["client" + o]) || 0;
                };
          },
          $e = function (element, e) {
            return !e || ~E.indexOf(element)
              ? Ke(element)
              : function () {
                  return kr;
                };
          },
          Qe = function (element, e) {
            var s = e.s,
              t = e.d2,
              r = e.d,
              a = e.a;
            return Math.max(
              0,
              (s = "scroll" + t) && (a = A(element, s))
                ? a() - Ke(element)()[r]
                : je(element)
                ? (ee[s] || te[s]) - Je(t)
                : element[s] - element["offset" + t]
            );
          },
          et = function (e, t) {
            for (var i = 0; i < he.length; i += 3)
              (!t || ~t.indexOf(he[i + 1])) && e(he[i], he[i + 1], he[i + 2]);
          },
          tt = function (e) {
            return "string" == typeof e;
          },
          nt = function (e) {
            return "function" == typeof e;
          },
          ot = function (e) {
            return "number" == typeof e;
          },
          it = function (e) {
            return "object" == typeof e;
          },
          at = function (e, t, r) {
            return e && e.progress(t ? 0 : 1) && r && e.pause();
          },
          st = function (e, t) {
            if (e.enabled) {
              var r = e._ctx
                ? e._ctx.add(function () {
                    return t(e);
                  })
                : t(e);
              r && r.totalTime && (e.callbackAnimation = r);
            }
          },
          lt = Math.abs,
          ct = "left",
          ut = "top",
          ft = "right",
          pt = "bottom",
          ht = "width",
          gt = "height",
          vt = "Right",
          mt = "Left",
          yt = "Top",
          xt = "Bottom",
          bt = "padding",
          wt = "margin",
          _t = "Width",
          kt = "Height",
          St = "px",
          Tt = function (element) {
            return $.getComputedStyle(element);
          },
          Ct = function (element) {
            var e = Tt(element).position;
            element.style.position =
              "absolute" === e || "fixed" === e ? e : "relative";
          },
          Et = function (e, t) {
            for (var p in t) p in e || (e[p] = t[p]);
            return e;
          },
          Pt = function (element, e) {
            var t =
                e &&
                "matrix(1, 0, 0, 1, 0, 0)" !== Tt(element)[ue] &&
                K.to(element, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                }).progress(1),
              r = element.getBoundingClientRect();
            return t && t.progress(0).kill(), r;
          },
          Mt = function (element, e) {
            var t = e.d2;
            return element["offset" + t] || element["client" + t] || 0;
          },
          Ot = function (e) {
            var p,
              a = [],
              t = e.labels,
              r = e.duration();
            for (p in t) a.push(t[p] / r);
            return a;
          },
          At = function (e) {
            return function (t) {
              return K.utils.snap(Ot(e), t);
            };
          },
          Rt = function (e) {
            var t = K.utils.snap(e),
              a =
                Array.isArray(e) &&
                e.slice(0).sort(function (a, b) {
                  return a - b;
                });
            return a
              ? function (e, r, n) {
                  var i;
                  if ((void 0 === n && (n = 0.001), !r)) return t(e);
                  if (r > 0) {
                    for (e -= n, i = 0; i < a.length; i++)
                      if (a[i] >= e) return a[i];
                    return a[i - 1];
                  }
                  for (i = a.length, e += n; i--; ) if (a[i] <= e) return a[i];
                  return a[0];
                }
              : function (r, n, o) {
                  void 0 === o && (o = 0.001);
                  var l = t(r);
                  return !n || Math.abs(l - r) < o || l - r < 0 == n < 0
                    ? l
                    : t(n < 0 ? r - e : r + e);
                };
          },
          Dt = function (e) {
            return function (t, r) {
              return Rt(Ot(e))(t, r.direction);
            };
          },
          Yt = function (e, element, t, r) {
            return t.split(",").forEach(function (t) {
              return e(element, t, r);
            });
          },
          It = function (element, e, t, r, n) {
            return element.addEventListener(e, t, {
              passive: !r,
              capture: !!n,
            });
          },
          Xt = function (element, e, t, r) {
            return element.removeEventListener(e, t, !!r);
          },
          zt = function (e, t, r) {
            (r = r && r.wheelHandler) &&
              (e(t, "wheel", r), e(t, "touchmove", r));
          },
          Bt = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          Nt = {
            toggleActions: "play",
            anticipatePin: 0,
          },
          Ft = {
            top: 0,
            left: 0,
            center: 0.5,
            bottom: 1,
            right: 1,
          },
          Ht = function (e, t) {
            if (tt(e)) {
              var r = e.indexOf("="),
                n = ~r
                  ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1))
                  : 0;
              ~r &&
                (e.indexOf("%") > r && (n *= t / 100),
                (e = e.substr(0, r - 1))),
                (e =
                  n +
                  (e in Ft
                    ? Ft[e] * t
                    : ~e.indexOf("%")
                    ? (parseFloat(e) * t) / 100
                    : parseFloat(e) || 0));
            }
            return e;
          },
          Lt = function (e, t, r, n, o, l, c, f) {
            var d = o.startColor,
              h = o.endColor,
              v = o.fontSize,
              m = o.indent,
              y = o.fontWeight,
              x = Q.createElement("div"),
              w = je(r) || "fixed" === A(r, "pinType"),
              _ = -1 !== e.indexOf("scroller"),
              k = w ? te : r,
              S = -1 !== e.indexOf("start"),
              T = S ? d : h,
              C =
                "border-color:" +
                T +
                ";font-size:" +
                v +
                ";color:" +
                T +
                ";font-weight:" +
                y +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (C += "position:" + ((_ || f) && w ? "fixed;" : "absolute;")),
              (_ || f || !w) &&
                (C += (n === F ? ft : pt) + ":" + (l + parseFloat(m)) + "px;"),
              c &&
                (C +=
                  "box-sizing:border-box;text-align:left;width:" +
                  c.offsetWidth +
                  "px;"),
              (x._isStart = S),
              x.setAttribute(
                "class",
                "gsap-marker-" + e + (t ? " marker-" + t : "")
              ),
              (x.style.cssText = C),
              (x.innerText = t || 0 === t ? e + "-" + t : e),
              k.children[0]
                ? k.insertBefore(x, k.children[0])
                : k.appendChild(x),
              (x._offset = x["offset" + n.op.d2]),
              Wt(x, 0, n, S),
              x
            );
          },
          Wt = function (marker, e, t, r) {
            var n = {
                display: "block",
              },
              o = t[r ? "os2" : "p2"],
              l = t[r ? "p2" : "os2"];
            (marker._isFlipped = r),
              (n[t.a + "Percent"] = r ? -100 : 0),
              (n[t.a] = r ? "1px" : 0),
              (n["border" + o + _t] = 1),
              (n["border" + l + _t] = 0),
              (n[t.p] = e + "px"),
              K.set(marker, n);
          },
          qt = [],
          Ut = {},
          Vt = function () {
            return Ie() - ze > 34 && (Oe || (Oe = requestAnimationFrame(dr)));
          },
          Gt = function () {
            (!ye || !ye.isPressed || ye.startX > te.clientWidth) &&
              (C.cache++,
              ye ? Oe || (Oe = requestAnimationFrame(dr)) : dr(),
              ze || Qt("scrollStart"),
              (ze = Ie()));
          },
          jt = function () {
            (we = $.innerWidth), (be = $.innerHeight);
          },
          Jt = function () {
            C.cache++,
              !le &&
                !me &&
                !Q.fullscreenElement &&
                !Q.webkitFullscreenElement &&
                (!xe ||
                  we !== $.innerWidth ||
                  Math.abs($.innerHeight - be) > 0.25 * $.innerHeight) &&
                ne.restart(!0);
          },
          Kt = {},
          Zt = [],
          $t = function e() {
            return Xt(Or, "scrollEnd", e) || cr(!0);
          },
          Qt = function (e) {
            return (
              (Kt[e] &&
                Kt[e].map(function (e) {
                  return e();
                })) ||
              Zt
            );
          },
          er = [],
          rr = function (e) {
            for (var i = 0; i < er.length; i += 5)
              (!e || (er[i + 4] && er[i + 4].query === e)) &&
                ((er[i].style.cssText = er[i + 1]),
                er[i].getBBox &&
                  er[i].setAttribute("transform", er[i + 2] || ""),
                (er[i + 3].uncache = 1));
          },
          nr = function (e, t) {
            var r;
            for (fe = 0; fe < qt.length; fe++)
              !(r = qt[fe]) ||
                (t && r._ctx !== t) ||
                (e ? r.kill(1) : r.revert(!0, !0));
            (Ee = !0), t && rr(t), t || Qt("revert");
          },
          or = function (e, t) {
            C.cache++,
              (t || !Ae) &&
                C.forEach(function (e) {
                  return nt(e) && e.cacheID++ && (e.rec = 0);
                }),
              tt(e) && ($.history.scrollRestoration = Se = e);
          },
          ir = 0,
          ar = function () {
            if (Re !== ir) {
              var e = (Re = ir);
              requestAnimationFrame(function () {
                return e === ir && cr(!0);
              });
            }
          },
          sr = function () {
            te.appendChild(Te),
              (Ce = (!ye && Te.offsetHeight) || $.innerHeight),
              te.removeChild(Te);
          },
          lr = function (e) {
            return oe(
              ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
            ).forEach(function (t) {
              return (t.style.display = e ? "none" : "block");
            });
          },
          cr = function (e, t) {
            if (!ze || e || Ee) {
              sr(),
                (Ae = Or.isRefreshing = !0),
                C.forEach(function (e) {
                  return nt(e) && ++e.cacheID && (e.rec = e());
                });
              var r = Qt("refreshInit");
              ge && Or.sort(),
                t || nr(),
                C.forEach(function (e) {
                  nt(e) &&
                    (e.smooth && (e.target.style.scrollBehavior = "auto"),
                    e(0));
                }),
                qt.slice(0).forEach(function (e) {
                  return e.refresh();
                }),
                (Ee = !1),
                qt.forEach(function (e) {
                  if (e._subPinOffset && e.pin) {
                    var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                      r = e.pin[t];
                    e.revert(!0, 1),
                      e.adjustPinSpacing(e.pin[t] - r),
                      e.refresh();
                  }
                }),
                (Pe = 1),
                lr(!0),
                qt.forEach(function (e) {
                  var t = Qe(e.scroller, e._dir),
                    r = "max" === e.vars.end || (e._endClamp && e.end > t),
                    n = e._startClamp && e.start >= t;
                  (r || n) &&
                    e.setPositions(
                      n ? t - 1 : e.start,
                      r ? Math.max(n ? t : e.start + 1, t) : e.end,
                      !0
                    );
                }),
                lr(!1),
                (Pe = 0),
                r.forEach(function (e) {
                  return e && e.render && e.render(-1);
                }),
                C.forEach(function (e) {
                  nt(e) &&
                    (e.smooth &&
                      requestAnimationFrame(function () {
                        return (e.target.style.scrollBehavior = "smooth");
                      }),
                    e.rec && e(e.rec));
                }),
                or(Se, 1),
                ne.pause(),
                ir++,
                (Ae = 2),
                dr(2),
                qt.forEach(function (e) {
                  return nt(e.vars.onRefresh) && e.vars.onRefresh(e);
                }),
                (Ae = Or.isRefreshing = !1),
                Qt("refresh");
            } else It(Or, "scrollEnd", $t);
          },
          ur = 0,
          fr = 1,
          dr = function (e) {
            if (2 === e || (!Ae && !Ee)) {
              (Or.isUpdating = !0), De && De.update(0);
              var t = qt.length,
                time = Ie(),
                r = time - Xe >= 50,
                n = t && qt[0].scroll();
              if (
                ((fr = ur > n ? -1 : 1),
                Ae || (ur = n),
                r &&
                  (ze && !ce && time - ze > 200 && ((ze = 0), Qt("scrollEnd")),
                  (ae = Xe),
                  (Xe = time)),
                fr < 0)
              ) {
                for (fe = t; fe-- > 0; ) qt[fe] && qt[fe].update(0, r);
                fr = 1;
              } else for (fe = 0; fe < t; fe++) qt[fe] && qt[fe].update(0, r);
              Or.isUpdating = !1;
            }
            Oe = 0;
          },
          pr = [
            ct,
            ut,
            pt,
            ft,
            wt + xt,
            wt + vt,
            wt + yt,
            wt + mt,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
          ],
          gr = pr.concat([
            ht,
            gt,
            "boxSizing",
            "max" + _t,
            "max" + kt,
            "position",
            wt,
            bt,
            bt + yt,
            bt + vt,
            bt + xt,
            bt + mt,
          ]),
          vr = function (e, t, r) {
            xr(r);
            var n = e._gsap;
            if (n.spacerIsNative) xr(n.spacerState);
            else if (e._gsap.swappedIn) {
              var o = t.parentNode;
              o && (o.insertBefore(e, t), o.removeChild(t));
            }
            e._gsap.swappedIn = !1;
          },
          mr = function (e, t, r, n) {
            if (!e._gsap.swappedIn) {
              for (var p, i = pr.length, o = t.style, l = e.style; i--; )
                o[(p = pr[i])] = r[p];
              (o.position =
                "absolute" === r.position ? "absolute" : "relative"),
                "inline" === r.display && (o.display = "inline-block"),
                (l[pt] = l[ft] = "auto"),
                (o.flexBasis = r.flexBasis || "auto"),
                (o.overflow = "visible"),
                (o.boxSizing = "border-box"),
                (o[ht] = Mt(e, N) + St),
                (o[gt] = Mt(e, F) + St),
                (o[bt] = l[wt] = l[ut] = l[ct] = "0"),
                xr(n),
                (l[ht] = l["max" + _t] = r[ht]),
                (l[gt] = l["max" + kt] = r[gt]),
                (l[bt] = r[bt]),
                e.parentNode !== t &&
                  (e.parentNode.insertBefore(t, e), t.appendChild(e)),
                (e._gsap.swappedIn = !0);
            }
          },
          yr = /([A-Z])/g,
          xr = function (e) {
            if (e) {
              var p,
                t,
                style = e.t.style,
                r = e.length,
                i = 0;
              for (
                (e.t._gsap || K.core.getCache(e.t)).uncache = 1;
                i < r;
                i += 2
              )
                (t = e[i + 1]),
                  (p = e[i]),
                  t
                    ? (style[p] = t)
                    : style[p] &&
                      style.removeProperty(p.replace(yr, "-$1").toLowerCase());
            }
          },
          wr = function (element) {
            for (
              var e = gr.length, style = element.style, t = [], i = 0;
              i < e;
              i++
            )
              t.push(gr[i], style[gr[i]]);
            return (t.t = element), t;
          },
          _r = function (e, t, r) {
            for (var p, n = [], o = e.length, i = r ? 8 : 0; i < o; i += 2)
              (p = e[i]), n.push(p, p in t ? t[p] : e[i + 1]);
            return (n.t = e.t), n;
          },
          kr = {
            left: 0,
            top: 0,
          },
          Sr = function (e, t, r, n, o, marker, l, c, f, d, h, v, m, y) {
            nt(e) && (e = e(c)),
              tt(e) &&
                "max" === e.substr(0, 3) &&
                (e = v + ("=" === e.charAt(4) ? Ht("0" + e.substr(3), r) : 0));
            var x,
              w,
              element,
              time = m ? m.time() : 0;
            if ((m && m.seek(0), isNaN(e) || (e = +e), ot(e)))
              m &&
                (e = K.utils.mapRange(
                  m.scrollTrigger.start,
                  m.scrollTrigger.end,
                  0,
                  v,
                  e
                )),
                l && Wt(l, r, n, !0);
            else {
              nt(t) && (t = t(c));
              var _,
                k,
                S,
                T,
                C = (e || "0").split(" ");
              (element = H(t, c) || te),
                ((_ = Pt(element) || {}) && (_.left || _.top)) ||
                  "none" !== Tt(element).display ||
                  ((T = element.style.display),
                  (element.style.display = "block"),
                  (_ = Pt(element)),
                  T
                    ? (element.style.display = T)
                    : element.style.removeProperty("display")),
                (k = Ht(C[0], _[n.d])),
                (S = Ht(C[1] || "0", r)),
                (e = _[n.p] - f[n.p] - d + k + o - S),
                l && Wt(l, S, n, r - S < 20 || (l._isStart && S > 20)),
                (r -= r - S);
            }
            if ((y && ((c[y] = e || -0.001), e < 0 && (e = 0)), marker)) {
              var E = e + r,
                P = marker._isStart;
              (x = "scroll" + n.d2),
                Wt(
                  marker,
                  E,
                  n,
                  (P && E > 20) ||
                    (!P &&
                      (h ? Math.max(te[x], ee[x]) : marker.parentNode[x]) <=
                        E + 1)
                ),
                h &&
                  ((f = Pt(l)),
                  h &&
                    (marker.style[n.op.p] =
                      f[n.op.p] - n.op.m - marker._offset + St));
            }
            return (
              m &&
                element &&
                ((x = Pt(element)),
                m.seek(v),
                (w = Pt(element)),
                (m._caScrollDist = x[n.p] - w[n.p]),
                (e = (e / m._caScrollDist) * v)),
              m && m.seek(time),
              m ? e : Math.round(e)
            );
          },
          Tr = /(webkit|moz|length|cssText|inset)/i,
          Cr = function (element, e, t, r) {
            if (element.parentNode !== e) {
              var p,
                n,
                style = element.style;
              if (e === te) {
                for (p in ((element._stOrig = style.cssText),
                (n = Tt(element))))
                  +p ||
                    Tr.test(p) ||
                    !n[p] ||
                    "string" != typeof style[p] ||
                    "0" === p ||
                    (style[p] = n[p]);
                (style.top = t), (style.left = r);
              } else style.cssText = element._stOrig;
              (K.core.getCache(element).uncache = 1), e.appendChild(element);
            }
          },
          Er = function (e, t, r) {
            var n = t,
              o = n;
            return function (t) {
              var l = Math.round(e());
              return (
                l !== n &&
                  l !== o &&
                  Math.abs(l - n) > 3 &&
                  Math.abs(l - o) > 3 &&
                  ((t = l), r && r()),
                (o = n),
                (n = t),
                t
              );
            };
          },
          Pr = function (marker, e, t) {
            var r = {};
            (r[e.p] = "+=" + t), K.set(marker, r);
          },
          Mr = function (e, t) {
            var r = L(e, t),
              n = "_scroll" + t.p2,
              o = function t(o, l, c, f, d) {
                var h = t.tween,
                  v = l.onComplete,
                  m = {};
                c = c || r();
                var y = Er(r, c, function () {
                  h.kill(), (t.tween = 0);
                });
                return (
                  (d = (f && d) || 0),
                  (f = f || o - c),
                  h && h.kill(),
                  (l[n] = o),
                  (l.inherit = !1),
                  (l.modifiers = m),
                  (m[n] = function () {
                    return y(c + f * h.ratio + d * h.ratio * h.ratio);
                  }),
                  (l.onUpdate = function () {
                    C.cache++, t.tween && dr();
                  }),
                  (l.onComplete = function () {
                    (t.tween = 0), v && v.call(h);
                  }),
                  (h = t.tween = K.to(e, l))
                );
              };
            return (
              (e[n] = r),
              (r.wheelHandler = function () {
                return o.tween && o.tween.kill() && (o.tween = 0);
              }),
              It(e, "wheel", r.wheelHandler),
              Or.isTouch && It(e, "touchmove", r.wheelHandler),
              o
            );
          },
          Or = (function () {
            function e(t, r) {
              Z ||
                e.register(K) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                ke(this),
                this.init(t, r);
            }
            return (
              (e.prototype.init = function (t, r) {
                if (
                  ((this.progress = this.start = 0),
                  this.vars && this.kill(!0, !0),
                  Be)
                ) {
                  var n,
                    o,
                    l,
                    c,
                    f,
                    d,
                    h,
                    v,
                    m,
                    y,
                    x,
                    w,
                    _,
                    k,
                    S,
                    T,
                    P,
                    M,
                    O,
                    R,
                    D,
                    Y,
                    I,
                    X,
                    z,
                    B,
                    W,
                    U,
                    V,
                    G,
                    j,
                    J,
                    Z,
                    re,
                    ne,
                    se,
                    ue,
                    de,
                    pe,
                    he = (t = Et(
                      tt(t) || ot(t) || t.nodeType
                        ? {
                            trigger: t,
                          }
                        : t,
                      Nt
                    )),
                    me = he.onUpdate,
                    ye = he.toggleClass,
                    xe = he.id,
                    be = he.onToggle,
                    we = he.onRefresh,
                    _e = he.scrub,
                    ke = he.trigger,
                    Se = he.pin,
                    Te = he.pinSpacing,
                    Ce = he.invalidateOnRefresh,
                    Ee = he.anticipatePin,
                    Oe = he.onScrubComplete,
                    Re = he.onSnapComplete,
                    Xe = he.once,
                    He = he.snap,
                    Le = he.pinReparent,
                    We = he.pinSpacer,
                    Ve = he.containerAnimation,
                    Ge = he.fastScrollEnd,
                    Je = he.preventOverlaps,
                    Ke =
                      t.horizontal ||
                      (t.containerAnimation && !1 !== t.horizontal)
                        ? N
                        : F,
                    et = !_e && 0 !== _e,
                    ct = H(t.scroller || $),
                    ut = K.core.getCache(ct),
                    ft = je(ct),
                    pt =
                      "fixed" ===
                      ("pinType" in t
                        ? t.pinType
                        : A(ct, "pinType") || (ft && "fixed")),
                    Ot = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                    Yt = et && t.toggleActions.split(" "),
                    zt = "markers" in t ? t.markers : Nt.markers,
                    Ft = ft
                      ? 0
                      : parseFloat(Tt(ct)["border" + Ke.p2 + _t]) || 0,
                    Wt = this,
                    Vt =
                      t.onRefreshInit &&
                      function () {
                        return t.onRefreshInit(Wt);
                      },
                    jt = Ze(ct, ft, Ke),
                    Kt = $e(ct, ft),
                    Zt = 0,
                    Qt = 0,
                    er = 0,
                    rr = L(ct, Ke);
                  if (
                    ((Wt._startClamp = Wt._endClamp = !1),
                    (Wt._dir = Ke),
                    (Ee *= 45),
                    (Wt.scroller = ct),
                    (Wt.scroll = Ve ? Ve.time.bind(Ve) : rr),
                    (c = rr()),
                    (Wt.vars = t),
                    (r = r || t.animation),
                    "refreshPriority" in t &&
                      ((ge = 1), -9999 === t.refreshPriority && (De = Wt)),
                    (ut.tweenScroll = ut.tweenScroll || {
                      top: Mr(ct, F),
                      left: Mr(ct, N),
                    }),
                    (Wt.tweenTo = n = ut.tweenScroll[Ke.p]),
                    (Wt.scrubDuration = function (e) {
                      (Z = ot(e) && e)
                        ? J
                          ? J.duration(e)
                          : (J = K.to(r, {
                              ease: "expo",
                              totalProgress: "+=0",
                              inherit: !1,
                              duration: Z,
                              paused: !0,
                              onComplete: function () {
                                return Oe && Oe(Wt);
                              },
                            }))
                        : (J && J.progress(1).kill(), (J = 0));
                    }),
                    r &&
                      ((r.vars.lazy = !1),
                      (r._initted && !Wt.isReverted) ||
                        (!1 !== r.vars.immediateRender &&
                          !1 !== t.immediateRender &&
                          r.duration() &&
                          r.render(0, !0, !0)),
                      (Wt.animation = r.pause()),
                      (r.scrollTrigger = Wt),
                      Wt.scrubDuration(_e),
                      (G = 0),
                      xe || (xe = r.vars.id)),
                    He &&
                      ((it(He) && !He.push) ||
                        (He = {
                          snapTo: He,
                        }),
                      "scrollBehavior" in te.style &&
                        K.set(ft ? [te, ee] : ct, {
                          scrollBehavior: "auto",
                        }),
                      C.forEach(function (e) {
                        return (
                          nt(e) &&
                          e.target === (ft ? Q.scrollingElement || ee : ct) &&
                          (e.smooth = !1)
                        );
                      }),
                      (l = nt(He.snapTo)
                        ? He.snapTo
                        : "labels" === He.snapTo
                        ? At(r)
                        : "labelsDirectional" === He.snapTo
                        ? Dt(r)
                        : !1 !== He.directional
                        ? function (e, t) {
                            return Rt(He.snapTo)(
                              e,
                              Ie() - Qt < 500 ? 0 : t.direction
                            );
                          }
                        : K.utils.snap(He.snapTo)),
                      (re = He.duration || {
                        min: 0.1,
                        max: 2,
                      }),
                      (re = it(re) ? ie(re.min, re.max) : ie(re, re)),
                      (ne = K.delayedCall(
                        He.delay || Z / 2 || 0.1,
                        function () {
                          var e = rr(),
                            t = Ie() - Qt < 500,
                            o = n.tween;
                          if (
                            !(t || Math.abs(Wt.getVelocity()) < 10) ||
                            o ||
                            ce ||
                            Zt === e
                          )
                            Wt.isActive && Zt !== e && ne.restart(!0);
                          else {
                            var c,
                              f,
                              progress = (e - d) / k,
                              v = r && !et ? r.totalProgress() : progress,
                              m = t ? 0 : ((v - j) / (Ie() - ae)) * 1e3 || 0,
                              y = K.utils.clamp(
                                -progress,
                                1 - progress,
                                (lt(m / 2) * m) / 0.185
                              ),
                              x = progress + (!1 === He.inertia ? 0 : y),
                              w = He,
                              _ = w.onStart,
                              S = w.onInterrupt,
                              T = w.onComplete;
                            if (
                              ((c = l(x, Wt)),
                              ot(c) || (c = x),
                              (f = Math.round(d + c * k)),
                              e <= h && e >= d && f !== e)
                            ) {
                              if (o && !o._initted && o.data <= lt(f - e))
                                return;
                              !1 === He.inertia && (y = c - progress),
                                n(
                                  f,
                                  {
                                    duration: re(
                                      lt(
                                        (0.185 *
                                          Math.max(lt(x - v), lt(c - v))) /
                                          m /
                                          0.05 || 0
                                      )
                                    ),
                                    ease: He.ease || "power3",
                                    data: lt(f - e),
                                    onInterrupt: function () {
                                      return ne.restart(!0) && S && S(Wt);
                                    },
                                    onComplete: function () {
                                      Wt.update(),
                                        (Zt = rr()),
                                        r &&
                                          (J
                                            ? J.resetTo(
                                                "totalProgress",
                                                c,
                                                r._tTime / r._tDur
                                              )
                                            : r.progress(c)),
                                        (G = j =
                                          r && !et
                                            ? r.totalProgress()
                                            : Wt.progress),
                                        Re && Re(Wt),
                                        T && T(Wt);
                                    },
                                  },
                                  e,
                                  y * k,
                                  f - e - y * k
                                ),
                                _ && _(Wt, n.tween);
                            }
                          }
                        }
                      ).pause())),
                    xe && (Ut[xe] = Wt),
                    (pe =
                      (ke = Wt.trigger = H(ke || (!0 !== Se && Se))) &&
                      ke._gsap &&
                      ke._gsap.stRevert) && (pe = pe(Wt)),
                    (Se = !0 === Se ? ke : H(Se)),
                    tt(ye) &&
                      (ye = {
                        targets: ke,
                        className: ye,
                      }),
                    Se &&
                      (!1 === Te ||
                        Te === wt ||
                        (Te =
                          !(
                            !Te &&
                            Se.parentNode &&
                            Se.parentNode.style &&
                            "flex" === Tt(Se.parentNode).display
                          ) && bt),
                      (Wt.pin = Se),
                      (o = K.core.getCache(Se)).spacer
                        ? (S = o.pinState)
                        : (We &&
                            ((We = H(We)) &&
                              !We.nodeType &&
                              (We = We.current || We.nativeElement),
                            (o.spacerIsNative = !!We),
                            We && (o.spacerState = wr(We))),
                          (o.spacer = M = We || Q.createElement("div")),
                          M.classList.add("pin-spacer"),
                          xe && M.classList.add("pin-spacer-" + xe),
                          (o.pinState = S = wr(Se))),
                      !1 !== t.force3D &&
                        K.set(Se, {
                          force3D: !0,
                        }),
                      (Wt.spacer = M = o.spacer),
                      (V = Tt(Se)),
                      (X = V[Te + Ke.os2]),
                      (R = K.getProperty(Se)),
                      (D = K.quickSetter(Se, Ke.a, St)),
                      mr(Se, M, V),
                      (P = wr(Se))),
                    zt)
                  ) {
                    (w = it(zt) ? Et(zt, Bt) : Bt),
                      (y = Lt("scroller-start", xe, ct, Ke, w, 0)),
                      (x = Lt("scroller-end", xe, ct, Ke, w, 0, y)),
                      (O = y["offset" + Ke.op.d2]);
                    var content = H(A(ct, "content") || ct);
                    (v = this.markerStart =
                      Lt("start", xe, content, Ke, w, O, 0, Ve)),
                      (m = this.markerEnd =
                        Lt("end", xe, content, Ke, w, O, 0, Ve)),
                      Ve && (de = K.quickSetter([v, m], Ke.a, St)),
                      pt ||
                        (E.length && !0 === A(ct, "fixedMarkers")) ||
                        (Ct(ft ? te : ct),
                        K.set([y, x], {
                          force3D: !0,
                        }),
                        (B = K.quickSetter(y, Ke.a, St)),
                        (U = K.quickSetter(x, Ke.a, St)));
                  }
                  if (Ve) {
                    var nr = Ve.vars.onUpdate,
                      or = Ve.vars.onUpdateParams;
                    Ve.eventCallback("onUpdate", function () {
                      Wt.update(0, 0, 1), nr && nr.apply(Ve, or || []);
                    });
                  }
                  if (
                    ((Wt.previous = function () {
                      return qt[qt.indexOf(Wt) - 1];
                    }),
                    (Wt.next = function () {
                      return qt[qt.indexOf(Wt) + 1];
                    }),
                    (Wt.revert = function (e, t) {
                      if (!t) return Wt.kill(!0);
                      var n = !1 !== e || !Wt.enabled,
                        o = le;
                      n !== Wt.isReverted &&
                        (n &&
                          ((se = Math.max(rr(), Wt.scroll.rec || 0)),
                          (er = Wt.progress),
                          (ue = r && r.progress())),
                        v &&
                          [v, m, y, x].forEach(function (e) {
                            return (e.style.display = n ? "none" : "block");
                          }),
                        n && ((le = Wt), Wt.update(n)),
                        !Se ||
                          (Le && Wt.isActive) ||
                          (n ? vr(Se, M, S) : mr(Se, M, Tt(Se), z)),
                        n || Wt.update(n),
                        (le = o),
                        (Wt.isReverted = n));
                    }),
                    (Wt.refresh = function (o, l, w, C) {
                      if ((!le && Wt.enabled) || l)
                        if (Se && o && ze) It(e, "scrollEnd", $t);
                        else {
                          !Ae && Vt && Vt(Wt),
                            (le = Wt),
                            n.tween && !w && (n.tween.kill(), (n.tween = 0)),
                            J && J.pause(),
                            Ce &&
                              r &&
                              r
                                .revert({
                                  kill: !1,
                                })
                                .invalidate(),
                            Wt.isReverted || Wt.revert(!0, !0),
                            (Wt._subPinOffset = !1);
                          var E,
                            O,
                            A,
                            D,
                            X,
                            B,
                            U,
                            V,
                            G,
                            j,
                            Z,
                            $,
                            re,
                            oe = jt(),
                            ie = Kt(),
                            ae = Ve ? Ve.duration() : Qe(ct, Ke),
                            ce = k <= 0.01,
                            fe = 0,
                            de = C || 0,
                            pe = it(w) ? w.end : t.end,
                            he = t.endTrigger || ke,
                            ge = it(w)
                              ? w.start
                              : t.start ||
                                (0 !== t.start && ke
                                  ? Se
                                    ? "0 0"
                                    : "0 100%"
                                  : 0),
                            me = (Wt.pinnedContainer =
                              t.pinnedContainer && H(t.pinnedContainer, Wt)),
                            ye = (ke && Math.max(0, qt.indexOf(Wt))) || 0,
                            i = ye;
                          for (
                            zt &&
                            it(w) &&
                            (($ = K.getProperty(y, Ke.p)),
                            (re = K.getProperty(x, Ke.p)));
                            i--;

                          )
                            (B = qt[i]).end || B.refresh(0, 1) || (le = Wt),
                              !(U = B.pin) ||
                                (U !== ke && U !== Se && U !== me) ||
                                B.isReverted ||
                                (j || (j = []), j.unshift(B), B.revert(!0, !0)),
                              B !== qt[i] && (ye--, i--);
                          for (
                            nt(ge) && (ge = ge(Wt)),
                              ge = Ne(ge, "start", Wt),
                              d =
                                Sr(
                                  ge,
                                  ke,
                                  oe,
                                  Ke,
                                  rr(),
                                  v,
                                  y,
                                  Wt,
                                  ie,
                                  Ft,
                                  pt,
                                  ae,
                                  Ve,
                                  Wt._startClamp && "_startClamp"
                                ) || (Se ? -0.001 : 0),
                              nt(pe) && (pe = pe(Wt)),
                              tt(pe) &&
                                !pe.indexOf("+=") &&
                                (~pe.indexOf(" ")
                                  ? (pe = (tt(ge) ? ge.split(" ")[0] : "") + pe)
                                  : ((fe = Ht(pe.substr(2), oe)),
                                    (pe = tt(ge)
                                      ? ge
                                      : (Ve
                                          ? K.utils.mapRange(
                                              0,
                                              Ve.duration(),
                                              Ve.scrollTrigger.start,
                                              Ve.scrollTrigger.end,
                                              d
                                            )
                                          : d) + fe),
                                    (he = ke))),
                              pe = Ne(pe, "end", Wt),
                              h =
                                Math.max(
                                  d,
                                  Sr(
                                    pe || (he ? "100% 0" : ae),
                                    he,
                                    oe,
                                    Ke,
                                    rr() + fe,
                                    m,
                                    x,
                                    Wt,
                                    ie,
                                    Ft,
                                    pt,
                                    ae,
                                    Ve,
                                    Wt._endClamp && "_endClamp"
                                  )
                                ) || -0.001,
                              fe = 0,
                              i = ye;
                            i--;

                          )
                            (U = (B = qt[i]).pin) &&
                              B.start - B._pinPush <= d &&
                              !Ve &&
                              B.end > 0 &&
                              ((E =
                                B.end -
                                (Wt._startClamp
                                  ? Math.max(0, B.start)
                                  : B.start)),
                              ((U === ke && B.start - B._pinPush < d) ||
                                U === me) &&
                                isNaN(ge) &&
                                (fe += E * (1 - B.progress)),
                              U === Se && (de += E));
                          if (
                            ((d += fe),
                            (h += fe),
                            Wt._startClamp && (Wt._startClamp += fe),
                            Wt._endClamp &&
                              !Ae &&
                              ((Wt._endClamp = h || -0.001),
                              (h = Math.min(h, Qe(ct, Ke)))),
                            (k = h - d || ((d -= 0.01) && 0.001)),
                            ce &&
                              (er = K.utils.clamp(
                                0,
                                1,
                                K.utils.normalize(d, h, se)
                              )),
                            (Wt._pinPush = de),
                            v &&
                              fe &&
                              (((E = {})[Ke.a] = "+=" + fe),
                              me && (E[Ke.p] = "-=" + rr()),
                              K.set([v, m], E)),
                            !Se || (Pe && Wt.end >= Qe(ct, Ke)))
                          ) {
                            if (ke && rr() && !Ve)
                              for (O = ke.parentNode; O && O !== te; )
                                O._pinOffset &&
                                  ((d -= O._pinOffset), (h -= O._pinOffset)),
                                  (O = O.parentNode);
                          } else
                            (E = Tt(Se)),
                              (D = Ke === F),
                              (A = rr()),
                              (Y = parseFloat(R(Ke.a)) + de),
                              !ae &&
                                h > 1 &&
                                ((Z = {
                                  style: (Z = (
                                    ft ? Q.scrollingElement || ee : ct
                                  ).style),
                                  value: Z["overflow" + Ke.a.toUpperCase()],
                                }),
                                ft &&
                                  "scroll" !==
                                    Tt(te)["overflow" + Ke.a.toUpperCase()] &&
                                  (Z.style["overflow" + Ke.a.toUpperCase()] =
                                    "scroll")),
                              mr(Se, M, E),
                              (P = wr(Se)),
                              (O = Pt(Se, !0)),
                              (V = pt && L(ct, D ? N : F)()),
                              Te
                                ? (((z = [Te + Ke.os2, k + de + St]).t = M),
                                  (i = Te === bt ? Mt(Se, Ke) + k + de : 0) &&
                                    (z.push(Ke.d, i + St),
                                    "auto" !== M.style.flexBasis &&
                                      (M.style.flexBasis = i + St)),
                                  xr(z),
                                  me &&
                                    qt.forEach(function (e) {
                                      e.pin === me &&
                                        !1 !== e.vars.pinSpacing &&
                                        (e._subPinOffset = !0);
                                    }),
                                  pt && rr(se))
                                : (i = Mt(Se, Ke)) &&
                                  "auto" !== M.style.flexBasis &&
                                  (M.style.flexBasis = i + St),
                              pt &&
                                (((X = {
                                  top: O.top + (D ? A - d : V) + St,
                                  left: O.left + (D ? V : A - d) + St,
                                  boxSizing: "border-box",
                                  position: "fixed",
                                })[ht] = X["max" + _t] =
                                  Math.ceil(O.width) + St),
                                (X[gt] = X["max" + kt] =
                                  Math.ceil(O.height) + St),
                                (X[wt] =
                                  X[wt + yt] =
                                  X[wt + vt] =
                                  X[wt + xt] =
                                  X[wt + mt] =
                                    "0"),
                                (X[bt] = E[bt]),
                                (X[bt + yt] = E[bt + yt]),
                                (X[bt + vt] = E[bt + vt]),
                                (X[bt + xt] = E[bt + xt]),
                                (X[bt + mt] = E[bt + mt]),
                                (T = _r(S, X, Le)),
                                Ae && rr(0)),
                              r
                                ? ((G = r._initted),
                                  ve(1),
                                  r.render(r.duration(), !0, !0),
                                  (I = R(Ke.a) - Y + k + de),
                                  (W = Math.abs(k - I) > 1),
                                  pt && W && T.splice(T.length - 2, 2),
                                  r.render(0, !0, !0),
                                  G || r.invalidate(!0),
                                  r.parent || r.totalTime(r.totalTime()),
                                  ve(0))
                                : (I = k),
                              Z &&
                                (Z.value
                                  ? (Z.style["overflow" + Ke.a.toUpperCase()] =
                                      Z.value)
                                  : Z.style.removeProperty("overflow-" + Ke.a));
                          j &&
                            j.forEach(function (e) {
                              return e.revert(!1, !0);
                            }),
                            (Wt.start = d),
                            (Wt.end = h),
                            (c = f = Ae ? se : rr()),
                            Ve || Ae || (c < se && rr(se), (Wt.scroll.rec = 0)),
                            Wt.revert(!1, !0),
                            (Qt = Ie()),
                            ne && ((Zt = -1), ne.restart(!0)),
                            (le = 0),
                            r &&
                              et &&
                              (r._initted || ue) &&
                              r.progress() !== ue &&
                              r.progress(ue || 0, !0).render(r.time(), !0, !0),
                            (ce || er !== Wt.progress || Ve || Ce) &&
                              (r &&
                                !et &&
                                r.totalProgress(
                                  Ve && d < -0.001 && !er
                                    ? K.utils.normalize(d, h, 0)
                                    : er,
                                  !0
                                ),
                              (Wt.progress =
                                ce || (c - d) / k === er ? 0 : er)),
                            Se &&
                              Te &&
                              (M._pinOffset = Math.round(Wt.progress * I)),
                            J && J.invalidate(),
                            isNaN($) ||
                              (($ -= K.getProperty(y, Ke.p)),
                              (re -= K.getProperty(x, Ke.p)),
                              Pr(y, Ke, $),
                              Pr(v, Ke, $ - (C || 0)),
                              Pr(x, Ke, re),
                              Pr(m, Ke, re - (C || 0))),
                            ce && !Ae && Wt.update(),
                            !we || Ae || _ || ((_ = !0), we(Wt), (_ = !1));
                        }
                    }),
                    (Wt.getVelocity = function () {
                      return ((rr() - f) / (Ie() - ae)) * 1e3 || 0;
                    }),
                    (Wt.endAnimation = function () {
                      at(Wt.callbackAnimation),
                        r &&
                          (J
                            ? J.progress(1)
                            : r.paused()
                            ? et || at(r, Wt.direction < 0, 1)
                            : at(r, r.reversed()));
                    }),
                    (Wt.labelToScroll = function (label) {
                      return (
                        (r &&
                          r.labels &&
                          (d || Wt.refresh() || d) +
                            (r.labels[label] / r.duration()) * k) ||
                        0
                      );
                    }),
                    (Wt.getTrailing = function (e) {
                      var i = qt.indexOf(Wt),
                        a =
                          Wt.direction > 0
                            ? qt.slice(0, i).reverse()
                            : qt.slice(i + 1);
                      return (
                        tt(e)
                          ? a.filter(function (t) {
                              return t.vars.preventOverlaps === e;
                            })
                          : a
                      ).filter(function (e) {
                        return Wt.direction > 0 ? e.end <= d : e.start >= h;
                      });
                    }),
                    (Wt.update = function (e, t, o) {
                      if (!Ve || o || e) {
                        var l,
                          v,
                          m,
                          x,
                          w,
                          _,
                          S,
                          C = !0 === Ae ? se : Wt.scroll(),
                          p = e ? 0 : (C - d) / k,
                          E = p < 0 ? 0 : p > 1 ? 1 : p || 0,
                          O = Wt.progress;
                        if (
                          (t &&
                            ((f = c),
                            (c = Ve ? rr() : C),
                            He &&
                              ((j = G),
                              (G = r && !et ? r.totalProgress() : E))),
                          Ee &&
                            Se &&
                            !le &&
                            !Ye &&
                            ze &&
                            (!E && d < C + ((C - f) / (Ie() - ae)) * Ee
                              ? (E = 1e-4)
                              : 1 === E &&
                                h > C + ((C - f) / (Ie() - ae)) * Ee &&
                                (E = 0.9999)),
                          E !== O && Wt.enabled)
                        ) {
                          if (
                            ((x =
                              (w =
                                (l = Wt.isActive = !!E && E < 1) !=
                                (!!O && O < 1)) || !!E != !!O),
                            (Wt.direction = E > O ? 1 : -1),
                            (Wt.progress = E),
                            x &&
                              !le &&
                              ((v =
                                E && !O ? 0 : 1 === E ? 1 : 1 === O ? 2 : 3),
                              et &&
                                ((m =
                                  (!w && "none" !== Yt[v + 1] && Yt[v + 1]) ||
                                  Yt[v]),
                                (S =
                                  r &&
                                  ("complete" === m ||
                                    "reset" === m ||
                                    m in r)))),
                            Je &&
                              (w || S) &&
                              (S || _e || !r) &&
                              (nt(Je)
                                ? Je(Wt)
                                : Wt.getTrailing(Je).forEach(function (e) {
                                    return e.endAnimation();
                                  })),
                            et ||
                              (!J || le || Ye
                                ? r && r.totalProgress(E, !(!le || (!Qt && !e)))
                                : (J._dp._time - J._start !== J._time &&
                                    J.render(J._dp._time - J._start),
                                  J.resetTo
                                    ? J.resetTo(
                                        "totalProgress",
                                        E,
                                        r._tTime / r._tDur
                                      )
                                    : ((J.vars.totalProgress = E),
                                      J.invalidate().restart()))),
                            Se)
                          )
                            if ((e && Te && (M.style[Te + Ke.os2] = X), pt)) {
                              if (x) {
                                if (
                                  ((_ =
                                    !e &&
                                    E > O &&
                                    h + 1 > C &&
                                    C + 1 >= Qe(ct, Ke)),
                                  Le)
                                )
                                  if (e || (!l && !_)) Cr(Se, M);
                                  else {
                                    var A = Pt(Se, !0),
                                      R = C - d;
                                    Cr(
                                      Se,
                                      te,
                                      A.top + (Ke === F ? R : 0) + St,
                                      A.left + (Ke === F ? 0 : R) + St
                                    );
                                  }
                                xr(l || _ ? T : P),
                                  (W && E < 1 && l) ||
                                    D(Y + (1 !== E || _ ? 0 : I));
                              }
                            } else D(Ue(Y + I * E));
                          He && !n.tween && !le && !Ye && ne.restart(!0),
                            ye &&
                              (w || (Xe && E && (E < 1 || !Me))) &&
                              oe(ye.targets).forEach(function (e) {
                                return e.classList[l || Xe ? "add" : "remove"](
                                  ye.className
                                );
                              }),
                            me && !et && !e && me(Wt),
                            x && !le
                              ? (et &&
                                  (S &&
                                    ("complete" === m
                                      ? r.pause().totalProgress(1)
                                      : "reset" === m
                                      ? r.restart(!0).pause()
                                      : "restart" === m
                                      ? r.restart(!0)
                                      : r[m]()),
                                  me && me(Wt)),
                                (!w && Me) ||
                                  (be && w && st(Wt, be),
                                  Ot[v] && st(Wt, Ot[v]),
                                  Xe &&
                                    (1 === E ? Wt.kill(!1, 1) : (Ot[v] = 0)),
                                  w ||
                                    (Ot[(v = 1 === E ? 1 : 3)] &&
                                      st(Wt, Ot[v]))),
                                Ge &&
                                  !l &&
                                  Math.abs(Wt.getVelocity()) >
                                    (ot(Ge) ? Ge : 2500) &&
                                  (at(Wt.callbackAnimation),
                                  J
                                    ? J.progress(1)
                                    : at(r, "reverse" === m ? 1 : !E, 1)))
                              : et && me && !le && me(Wt);
                        }
                        if (U) {
                          var z = Ve
                            ? (C / Ve.duration()) * (Ve._caScrollDist || 0)
                            : C;
                          B(z + (y._isFlipped ? 1 : 0)), U(z);
                        }
                        de &&
                          de((-C / Ve.duration()) * (Ve._caScrollDist || 0));
                      }
                    }),
                    (Wt.enable = function (t, r) {
                      Wt.enabled ||
                        ((Wt.enabled = !0),
                        It(ct, "resize", Jt),
                        ft || It(ct, "scroll", Gt),
                        Vt && It(e, "refreshInit", Vt),
                        !1 !== t &&
                          ((Wt.progress = er = 0), (c = f = Zt = rr())),
                        !1 !== r && Wt.refresh());
                    }),
                    (Wt.getTween = function (e) {
                      return e && n ? n.tween : J;
                    }),
                    (Wt.setPositions = function (e, t, r, n) {
                      if (Ve) {
                        var o = Ve.scrollTrigger,
                          l = Ve.duration(),
                          c = o.end - o.start;
                        (e = o.start + (c * e) / l),
                          (t = o.start + (c * t) / l);
                      }
                      Wt.refresh(
                        !1,
                        !1,
                        {
                          start: Fe(e, r && !!Wt._startClamp),
                          end: Fe(t, r && !!Wt._endClamp),
                        },
                        n
                      ),
                        Wt.update();
                    }),
                    (Wt.adjustPinSpacing = function (e) {
                      if (z && e) {
                        var i = z.indexOf(Ke.d) + 1;
                        (z[i] = parseFloat(z[i]) + e + St),
                          (z[1] = parseFloat(z[1]) + e + St),
                          xr(z);
                      }
                    }),
                    (Wt.disable = function (t, r) {
                      if (
                        Wt.enabled &&
                        (!1 !== t && Wt.revert(!0, !0),
                        (Wt.enabled = Wt.isActive = !1),
                        r || (J && J.pause()),
                        (se = 0),
                        o && (o.uncache = 1),
                        Vt && Xt(e, "refreshInit", Vt),
                        ne &&
                          (ne.pause(),
                          n.tween && n.tween.kill() && (n.tween = 0)),
                        !ft)
                      ) {
                        for (var i = qt.length; i--; )
                          if (qt[i].scroller === ct && qt[i] !== Wt) return;
                        Xt(ct, "resize", Jt), ft || Xt(ct, "scroll", Gt);
                      }
                    }),
                    (Wt.kill = function (e, n) {
                      Wt.disable(e, n),
                        J && !n && J.kill(),
                        xe && delete Ut[xe];
                      var i = qt.indexOf(Wt);
                      i >= 0 && qt.splice(i, 1),
                        i === fe && fr > 0 && fe--,
                        (i = 0),
                        qt.forEach(function (e) {
                          return e.scroller === Wt.scroller && (i = 1);
                        }),
                        i || Ae || (Wt.scroll.rec = 0),
                        r &&
                          ((r.scrollTrigger = null),
                          e &&
                            r.revert({
                              kill: !1,
                            }),
                          n || r.kill()),
                        v &&
                          [v, m, y, x].forEach(function (e) {
                            return e.parentNode && e.parentNode.removeChild(e);
                          }),
                        De === Wt && (De = 0),
                        Se &&
                          (o && (o.uncache = 1),
                          (i = 0),
                          qt.forEach(function (e) {
                            return e.pin === Se && i++;
                          }),
                          i || (o.spacer = 0)),
                        t.onKill && t.onKill(Wt);
                    }),
                    qt.push(Wt),
                    Wt.enable(!1, !1),
                    pe && pe(Wt),
                    r && r.add && !k)
                  ) {
                    var ir = Wt.update;
                    (Wt.update = function () {
                      (Wt.update = ir), d || h || Wt.refresh();
                    }),
                      K.delayedCall(0.01, Wt.update),
                      (k = 0.01),
                      (d = h = 0);
                  } else Wt.refresh();
                  Se && ar();
                } else this.update = this.refresh = this.kill = qe;
              }),
              (e.register = function (t) {
                return (
                  Z ||
                    ((K = t || Ge()),
                    Ve() && window.document && e.enable(),
                    (Z = Be)),
                  Z
                );
              }),
              (e.defaults = function (e) {
                if (e) for (var p in e) Nt[p] = e[p];
                return Nt;
              }),
              (e.disable = function (e, t) {
                (Be = 0),
                  qt.forEach(function (r) {
                    return r[t ? "kill" : "disable"](e);
                  }),
                  Xt($, "wheel", Gt),
                  Xt(Q, "scroll", Gt),
                  clearInterval(se),
                  Xt(Q, "touchcancel", qe),
                  Xt(te, "touchstart", qe),
                  Yt(Xt, Q, "pointerdown,touchstart,mousedown", Le),
                  Yt(Xt, Q, "pointerup,touchend,mouseup", We),
                  ne.kill(),
                  et(Xt);
                for (var i = 0; i < C.length; i += 3)
                  zt(Xt, C[i], C[i + 1]), zt(Xt, C[i], C[i + 2]);
              }),
              (e.enable = function () {
                if (
                  (($ = window),
                  (Q = document),
                  (ee = Q.documentElement),
                  (te = Q.body),
                  K &&
                    ((oe = K.utils.toArray),
                    (ie = K.utils.clamp),
                    (ke = K.core.context || qe),
                    (ve = K.core.suppressOverwrites || qe),
                    (Se = $.history.scrollRestoration || "auto"),
                    (ur = $.pageYOffset),
                    K.core.globals("ScrollTrigger", e),
                    te))
                ) {
                  (Be = 1),
                    ((Te = document.createElement("div")).style.height =
                      "100vh"),
                    (Te.style.position = "absolute"),
                    sr(),
                    He(),
                    J.register(K),
                    (e.isTouch = J.isTouch),
                    (_e =
                      J.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    (xe = 1 === J.isTouch),
                    It($, "wheel", Gt),
                    (re = [$, Q, ee, te]),
                    K.matchMedia
                      ? ((e.matchMedia = function (e) {
                          var p,
                            t = K.matchMedia();
                          for (p in e) t.add(p, e[p]);
                          return t;
                        }),
                        K.addEventListener("matchMediaInit", function () {
                          return nr();
                        }),
                        K.addEventListener("matchMediaRevert", function () {
                          return rr();
                        }),
                        K.addEventListener("matchMedia", function () {
                          cr(0, 1), Qt("matchMedia");
                        }),
                        K.matchMedia("(orientation: portrait)", function () {
                          return jt(), jt;
                        }))
                      : console.warn("Requires GSAP 3.11.0 or later"),
                    jt(),
                    It(Q, "scroll", Gt);
                  var t,
                    i,
                    r = te.style,
                    n = r.borderTopStyle,
                    o = K.core.Animation.prototype;
                  for (
                    o.revert ||
                      Object.defineProperty(o, "revert", {
                        value: function () {
                          return this.time(-0.01, !0);
                        },
                      }),
                      r.borderTopStyle = "solid",
                      t = Pt(te),
                      F.m = Math.round(t.top + F.sc()) || 0,
                      N.m = Math.round(t.left + N.sc()) || 0,
                      n
                        ? (r.borderTopStyle = n)
                        : r.removeProperty("border-top-style"),
                      se = setInterval(Vt, 250),
                      K.delayedCall(0.5, function () {
                        return (Ye = 0);
                      }),
                      It(Q, "touchcancel", qe),
                      It(te, "touchstart", qe),
                      Yt(It, Q, "pointerdown,touchstart,mousedown", Le),
                      Yt(It, Q, "pointerup,touchend,mouseup", We),
                      ue = K.utils.checkPrefix("transform"),
                      gr.push(ue),
                      Z = Ie(),
                      ne = K.delayedCall(0.2, cr).pause(),
                      he = [
                        Q,
                        "visibilitychange",
                        function () {
                          var e = $.innerWidth,
                            t = $.innerHeight;
                          Q.hidden
                            ? ((de = e), (pe = t))
                            : (de === e && pe === t) || Jt();
                        },
                        Q,
                        "DOMContentLoaded",
                        cr,
                        $,
                        "load",
                        cr,
                        $,
                        "resize",
                        Jt,
                      ],
                      et(It),
                      qt.forEach(function (e) {
                        return e.enable(0, 1);
                      }),
                      i = 0;
                    i < C.length;
                    i += 3
                  )
                    zt(Xt, C[i], C[i + 1]), zt(Xt, C[i], C[i + 2]);
                }
              }),
              (e.config = function (t) {
                "limitCallbacks" in t && (Me = !!t.limitCallbacks);
                var r = t.syncInterval;
                (r && clearInterval(se)) || ((se = r) && setInterval(Vt, r)),
                  "ignoreMobileResize" in t &&
                    (xe = 1 === e.isTouch && t.ignoreMobileResize),
                  "autoRefreshEvents" in t &&
                    (et(Xt) || et(It, t.autoRefreshEvents || "none"),
                    (me = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
              }),
              (e.scrollerProxy = function (e, t) {
                var r = H(e),
                  i = C.indexOf(r),
                  n = je(r);
                ~i && C.splice(i, n ? 6 : 2),
                  t && (n ? E.unshift($, t, te, t, ee, t) : E.unshift(r, t));
              }),
              (e.clearMatchMedia = function (e) {
                qt.forEach(function (t) {
                  return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
                });
              }),
              (e.isInViewport = function (element, e, t) {
                var r = (
                    tt(element) ? H(element) : element
                  ).getBoundingClientRect(),
                  n = r[t ? ht : gt] * e || 0;
                return t
                  ? r.right - n > 0 && r.left + n < $.innerWidth
                  : r.bottom - n > 0 && r.top + n < $.innerHeight;
              }),
              (e.positionInViewport = function (element, e, t) {
                tt(element) && (element = H(element));
                var r = element.getBoundingClientRect(),
                  n = r[t ? ht : gt],
                  o =
                    null == e
                      ? n / 2
                      : e in Ft
                      ? Ft[e] * n
                      : ~e.indexOf("%")
                      ? (parseFloat(e) * n) / 100
                      : parseFloat(e) || 0;
                return t
                  ? (r.left + o) / $.innerWidth
                  : (r.top + o) / $.innerHeight;
              }),
              (e.killAll = function (e) {
                if (
                  (qt.slice(0).forEach(function (e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill();
                  }),
                  !0 !== e)
                ) {
                  var t = Kt.killAll || [];
                  (Kt = {}),
                    t.forEach(function (e) {
                      return e();
                    });
                }
              }),
              e
            );
          })();
        (Or.version = "3.12.5"),
          (Or.saveStyles = function (e) {
            return e
              ? oe(e).forEach(function (e) {
                  if (e && e.style) {
                    var i = er.indexOf(e);
                    i >= 0 && er.splice(i, 5),
                      er.push(
                        e,
                        e.style.cssText,
                        e.getBBox && e.getAttribute("transform"),
                        K.core.getCache(e),
                        ke()
                      );
                  }
                })
              : er;
          }),
          (Or.revert = function (e, t) {
            return nr(!e, t);
          }),
          (Or.create = function (e, t) {
            return new Or(e, t);
          }),
          (Or.refresh = function (e) {
            return e ? Jt() : (Z || Or.register()) && cr(!0);
          }),
          (Or.update = function (e) {
            return ++C.cache && dr(!0 === e ? 2 : 0);
          }),
          (Or.clearScrollMemory = or),
          (Or.maxScroll = function (element, e) {
            return Qe(element, e ? N : F);
          }),
          (Or.getScrollFunc = function (element, e) {
            return L(H(element), e ? N : F);
          }),
          (Or.getById = function (e) {
            return Ut[e];
          }),
          (Or.getAll = function () {
            return qt.filter(function (e) {
              return "ScrollSmoother" !== e.vars.id;
            });
          }),
          (Or.isScrolling = function () {
            return !!ze;
          }),
          (Or.snapDirectional = Rt),
          (Or.addEventListener = function (e, t) {
            var a = Kt[e] || (Kt[e] = []);
            ~a.indexOf(t) || a.push(t);
          }),
          (Or.removeEventListener = function (e, t) {
            var a = Kt[e],
              i = a && a.indexOf(t);
            i >= 0 && a.splice(i, 1);
          }),
          (Or.batch = function (e, t) {
            var p,
              r = [],
              n = {},
              o = t.interval || 0.016,
              l = t.batchMax || 1e9,
              c = function (e, t) {
                var r = [],
                  n = [],
                  c = K.delayedCall(o, function () {
                    t(r, n), (r = []), (n = []);
                  }).pause();
                return function (e) {
                  r.length || c.restart(!0),
                    r.push(e.trigger),
                    n.push(e),
                    l <= r.length && c.progress(1);
                };
              };
            for (p in t)
              n[p] =
                "on" === p.substr(0, 2) && nt(t[p]) && "onRefreshInit" !== p
                  ? c(p, t[p])
                  : t[p];
            return (
              nt(l) &&
                ((l = l()),
                It(Or, "refresh", function () {
                  return (l = t.batchMax());
                })),
              oe(e).forEach(function (e) {
                var t = {};
                for (p in n) t[p] = n[p];
                (t.trigger = e), r.push(Or.create(t));
              }),
              r
            );
          });
        var Ar,
          Rr = function (e, t, r, n) {
            return (
              t > n ? e(n) : t < 0 && e(0),
              r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
            );
          },
          Dr = function e(t, r) {
            !0 === r
              ? t.style.removeProperty("touch-action")
              : (t.style.touchAction =
                  !0 === r
                    ? "auto"
                    : r
                    ? "pan-" + r + (J.isTouch ? " pinch-zoom" : "")
                    : "none"),
              t === ee && e(te, r);
          },
          Yr = {
            auto: 1,
            scroll: 1,
          },
          Ir = function (e) {
            var t,
              r = e.event,
              n = e.target,
              o = e.axis,
              l = (r.changedTouches ? r.changedTouches[0] : r).target,
              c = l._gsap || K.core.getCache(l),
              time = Ie();
            if (!c._isScrollT || time - c._isScrollT > 2e3) {
              for (
                ;
                l &&
                l !== te &&
                ((l.scrollHeight <= l.clientHeight &&
                  l.scrollWidth <= l.clientWidth) ||
                  (!Yr[(t = Tt(l)).overflowY] && !Yr[t.overflowX]));

              )
                l = l.parentNode;
              (c._isScroll =
                l &&
                l !== n &&
                !je(l) &&
                (Yr[(t = Tt(l)).overflowY] || Yr[t.overflowX])),
                (c._isScrollT = time);
            }
            (c._isScroll || "x" === o) &&
              (r.stopPropagation(), (r._gsapAllow = !0));
          },
          Xr = function (e, t, r, n) {
            return J.create({
              target: e,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: t,
              onWheel: (n = n && Ir),
              onPress: n,
              onDrag: n,
              onScroll: n,
              onEnable: function () {
                return r && It(Q, J.eventTypes[0], Br, !1, !0);
              },
              onDisable: function () {
                return Xt(Q, J.eventTypes[0], Br, !0);
              },
            });
          },
          zr = /(input|label|select|textarea)/i,
          Br = function (e) {
            var t = zr.test(e.target.tagName);
            (t || Ar) && ((e._gsapAllow = !0), (Ar = t));
          },
          Nr = function (e) {
            it(e) || (e = {}),
              (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
              e.type || (e.type = "wheel,touch"),
              (e.debounce = !!e.debounce),
              (e.id = e.id || "normalizer");
            var t,
              r,
              n,
              o,
              l,
              c,
              f,
              d,
              h = e,
              v = h.normalizeScrollX,
              m = h.momentum,
              y = h.allowNestedScroll,
              x = h.onRelease,
              w = H(e.target) || ee,
              _ = K.core.globals().ScrollSmoother,
              k = _ && _.get(),
              content =
                _e &&
                ((e.content && H(e.content)) ||
                  (k && !1 !== e.content && !k.smooth() && k.content())),
              S = L(w, F),
              T = L(w, N),
              E = 1,
              P =
                (J.isTouch && $.visualViewport
                  ? $.visualViewport.scale * $.visualViewport.width
                  : $.outerWidth) / $.innerWidth,
              M = 0,
              O = nt(m)
                ? function () {
                    return m(t);
                  }
                : function () {
                    return m || 2.8;
                  },
              A = Xr(w, e.type, !0, y),
              R = function () {
                return (o = !1);
              },
              D = qe,
              Y = qe,
              I = function () {
                (r = Qe(w, F)),
                  (Y = ie(_e ? 1 : 0, r)),
                  v && (D = ie(0, Qe(w, N))),
                  (n = ir);
              },
              X = function () {
                (content._gsap.y =
                  Ue(parseFloat(content._gsap.y) + S.offset) + "px"),
                  (content.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    parseFloat(content._gsap.y) +
                    ", 0, 1)"),
                  (S.offset = S.cacheID = 0);
              },
              z = function () {
                if (o) {
                  requestAnimationFrame(R);
                  var e = Ue(t.deltaY / 2),
                    r = Y(S.v - e);
                  if (content && r !== S.v + S.offset) {
                    S.offset = r - S.v;
                    var n = Ue(
                      (parseFloat(content && content._gsap.y) || 0) - S.offset
                    );
                    (content.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      n +
                      ", 0, 1)"),
                      (content._gsap.y = n + "px"),
                      (S.cacheID = C.cache),
                      dr();
                  }
                  return !0;
                }
                S.offset && X(), (o = !0);
              },
              B = function () {
                I(),
                  l.isActive() &&
                    l.vars.scrollY > r &&
                    (S() > r ? l.progress(1) && S(r) : l.resetTo("scrollY", r));
              };
            return (
              content &&
                K.set(content, {
                  y: "+=0",
                }),
              (e.ignoreCheck = function (e) {
                return (
                  (_e && "touchmove" === e.type && z()) ||
                  (E > 1.05 && "touchstart" !== e.type) ||
                  t.isGesturing ||
                  (e.touches && e.touches.length > 1)
                );
              }),
              (e.onPress = function () {
                o = !1;
                var e = E;
                (E = Ue(
                  (($.visualViewport && $.visualViewport.scale) || 1) / P
                )),
                  l.pause(),
                  e !== E && Dr(w, E > 1.01 || (!v && "x")),
                  (c = T()),
                  (f = S()),
                  I(),
                  (n = ir);
              }),
              (e.onRelease = e.onGestureStart =
                function (e, t) {
                  if ((S.offset && X(), t)) {
                    C.cache++;
                    var n,
                      o,
                      c = O();
                    v &&
                      ((o = (n = T()) + (0.05 * c * -e.velocityX) / 0.227),
                      (c *= Rr(T, n, o, Qe(w, N))),
                      (l.vars.scrollX = D(o))),
                      (o = (n = S()) + (0.05 * c * -e.velocityY) / 0.227),
                      (c *= Rr(S, n, o, Qe(w, F))),
                      (l.vars.scrollY = Y(o)),
                      l.invalidate().duration(c).play(0.01),
                      ((_e && l.vars.scrollY >= r) || n >= r - 1) &&
                        K.to(
                          {},
                          {
                            onUpdate: B,
                            duration: c,
                          }
                        );
                  } else d.restart(!0);
                  x && x(e);
                }),
              (e.onWheel = function () {
                l._ts && l.pause(), Ie() - M > 1e3 && ((n = 0), (M = Ie()));
              }),
              (e.onChange = function (e, t, r, o, l) {
                if (
                  (ir !== n && I(),
                  t &&
                    v &&
                    T(D(o[2] === t ? c + (e.startX - e.x) : T() + t - o[1])),
                  r)
                ) {
                  S.offset && X();
                  var d = l[2] === r,
                    h = d ? f + e.startY - e.y : S() + r - l[1],
                    m = Y(h);
                  d && h !== m && (f += m - h), S(m);
                }
                (r || t) && dr();
              }),
              (e.onEnable = function () {
                Dr(w, !v && "x"),
                  Or.addEventListener("refresh", B),
                  It($, "resize", B),
                  S.smooth &&
                    ((S.target.style.scrollBehavior = "auto"),
                    (S.smooth = T.smooth = !1)),
                  A.enable();
              }),
              (e.onDisable = function () {
                Dr(w, !0),
                  Xt($, "resize", B),
                  Or.removeEventListener("refresh", B),
                  A.kill();
              }),
              (e.lockAxis = !1 !== e.lockAxis),
              ((t = new J(e)).iOS = _e),
              _e && !S() && S(1),
              _e && K.ticker.add(qe),
              (d = t._dc),
              (l = K.to(t, {
                ease: "power4",
                paused: !0,
                inherit: !1,
                scrollX: v ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                  scrollY: Er(S, S(), function () {
                    return l.pause();
                  }),
                },
                onUpdate: dr,
                onComplete: d.vars.onComplete,
              })),
              t
            );
          };
        (Or.sort = function (e) {
          return qt.sort(
            e ||
              function (a, b) {
                return (
                  -1e6 * (a.vars.refreshPriority || 0) +
                  a.start -
                  (b.start + -1e6 * (b.vars.refreshPriority || 0))
                );
              }
          );
        }),
          (Or.observe = function (e) {
            return new J(e);
          }),
          (Or.normalizeScroll = function (e) {
            if (void 0 === e) return ye;
            if (!0 === e && ye) return ye.enable();
            if (!1 === e) return ye && ye.kill(), void (ye = e);
            var t = e instanceof J ? e : Nr(e);
            return (
              ye && ye.target === t.target && ye.kill(),
              je(t.target) && (ye = t),
              t
            );
          }),
          (Or.core = {
            _getVelocityProp: W,
            _inputObserver: Xr,
            _scrollers: C,
            _proxies: E,
            bridge: {
              ss: function () {
                ze || Qt("scrollStart"), (ze = Ie());
              },
              ref: function () {
                return le;
              },
            },
          }),
          Ge() && K.registerPlugin(Or),
          (e.ScrollTrigger = Or),
          (e.default = Or),
          "undefined" == typeof window || window !== e
            ? Object.defineProperty(e, "__esModule", {
                value: !0,
              })
            : delete window.default;
      })(t);
    },
  },
]);
