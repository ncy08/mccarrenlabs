(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    669: function (n, e, t) {
      "use strict";
      function r() {
        return (
          (r =
            Object.assign ||
            function (n) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var e in source)
                  Object.prototype.hasOwnProperty.call(source, e) &&
                    (n[e] = source[e]);
              }
              return n;
            }),
          r.apply(this, arguments)
        );
      }
      function o(n, e) {
        var t = {
          start: function () {
            return 0;
          },
          center: function (n) {
            return r(n) / 2;
          },
          end: r,
        };
        function r(n) {
          return e - n;
        }
        return {
          measure: function (r) {
            return "number" == typeof n ? e * Number(n) : t[n](r);
          },
        };
      }
      function c(n, e) {
        var t = Math.abs(n - e);
        function r(e) {
          return e < n;
        }
        function o(n) {
          return n > e;
        }
        function c(n) {
          return r(n) || o(n);
        }
        return {
          constrain: function (t) {
            return c(t) ? (r(t) ? n : e) : t;
          },
          length: t,
          max: e,
          min: n,
          reachedAny: c,
          reachedMax: o,
          reachedMin: r,
          removeOffset: function (n) {
            return t ? n - t * Math.ceil((n - e) / t) : n;
          },
        };
      }
      function d(n, e, t) {
        var r = c(0, n),
          o = r.min,
          l = r.constrain,
          f = n + 1,
          m = v(e);
        function v(n) {
          return t ? Math.abs((f + n) % f) : l(n);
        }
        function h() {
          return m;
        }
        function x(n) {
          return (m = v(n)), y;
        }
        var y = {
          add: function (n) {
            return x(h() + n);
          },
          clone: function () {
            return d(n, h(), t);
          },
          get: h,
          set: x,
          min: o,
          max: n,
        };
        return y;
      }
      function l() {
        var n = [];
        var e = {
          add: function (t, r, o, c) {
            return (
              void 0 === c && (c = !1),
              t.addEventListener(r, o, c),
              n.push(function () {
                return t.removeEventListener(r, o, c);
              }),
              e
            );
          },
          removeAll: function () {
            return (
              (n = n.filter(function (n) {
                return n();
              })),
              e
            );
          },
        };
        return e;
      }
      function f(n) {
        var e = n;
        function t(n) {
          return (e /= n), o;
        }
        function r(n) {
          return "number" == typeof n ? n : n.get();
        }
        var o = {
          add: function (n) {
            return (e += r(n)), o;
          },
          divide: t,
          get: function () {
            return e;
          },
          multiply: function (n) {
            return (e *= n), o;
          },
          normalize: function () {
            return 0 !== e && t(e), o;
          },
          set: function (n) {
            return (e = r(n)), o;
          },
          subtract: function (n) {
            return (e -= r(n)), o;
          },
        };
        return o;
      }
      function m(n) {
        return n ? n / Math.abs(n) : 0;
      }
      function v(n, e) {
        return Math.abs(n - e);
      }
      function h(n, e) {
        for (var t = [], i = 0; i < n.length; i += e) t.push(n.slice(i, i + e));
        return t;
      }
      function x(n) {
        return Object.keys(n).map(Number);
      }
      function y(n) {
        return n[w(n)];
      }
      function w(n) {
        return Math.max(0, n.length - 1);
      }
      function M(n, e) {
        var t = n.classList;
        e && t.contains(e) && t.remove(e);
      }
      function S(n, e) {
        var t = n.classList;
        e && !t.contains(e) && t.add(e);
      }
      function E(n, e, t, r, o, c, d, h, x, y, w, M, S, E, A) {
        var T = n.scroll,
          C = n.cross,
          D = ["INPUT", "SELECT", "TEXTAREA"],
          P = f(0),
          B = f(0),
          k = f(0),
          I = l(),
          L = l(),
          z = {
            mouse: 2.5,
            touch: 3.5,
          },
          O = {
            mouse: 5,
            touch: 7,
          },
          N = o ? 5 : 16,
          F = 1,
          U = 20,
          V = !1,
          H = !1,
          R = !1,
          j = !1;
        function G(n) {
          if (!(j = "mousedown" === n.type) || 0 === n.button) {
            var e,
              o,
              l = v(r.get(), d.get()) >= 2,
              f = j || !l,
              m =
                ((e = n.target), (o = e.nodeName || ""), !(D.indexOf(o) > -1)),
              h = l || (j && m);
            (V = !0),
              c.pointerDown(n),
              k.set(r),
              r.set(d),
              y.useBaseMass().useSpeed(80),
              (function () {
                var n = j ? document : t;
                L.add(n, "touchmove", J)
                  .add(n, "touchend", W)
                  .add(n, "mousemove", J)
                  .add(n, "mouseup", W);
              })(),
              P.set(c.readPoint(n, T)),
              B.set(c.readPoint(n, C)),
              S.emit("pointerDown"),
              f && (R = !1),
              h && n.preventDefault();
          }
        }
        function J(n) {
          if (!H && !j) {
            if (!n.cancelable) return W();
            var t = c.readPoint(n, T).get(),
              o = c.readPoint(n, C).get(),
              d = v(t, P.get()),
              l = v(o, B.get());
            if (!(H = d > l) && !R) return W();
          }
          var f = c.pointerMove(n);
          !R && f && (R = !0),
            h.start(),
            r.add(e.applyTo(f)),
            n.preventDefault();
        }
        function W() {
          var n = w.byDistance(0, !1).index !== M.get(),
            t = c.pointerUp() * (o ? O : z)[j ? "mouse" : "touch"],
            d = (function (n, e) {
              var t = M.clone().add(-1 * m(n)),
                r = t.get() === M.min || t.get() === M.max,
                c = w.byDistance(n, !o).distance;
              return o || Math.abs(n) < U
                ? c
                : !E && r
                ? 0.6 * c
                : A && e
                ? 0.5 * c
                : w.byIndex(t.get(), 0).distance;
            })(e.applyTo(t), n),
            l = (function (n, e) {
              if (0 === n || 0 === e) return 0;
              if (Math.abs(n) <= Math.abs(e)) return 0;
              var t = v(Math.abs(n), Math.abs(e));
              return Math.abs(t / n);
            })(t, d),
            f = v(r.get(), k.get()) >= 0.5,
            h = n && l > 0.75,
            T = Math.abs(t) < U,
            C = h ? 10 : N,
            D = h ? F + 2.5 * l : F;
          f && !j && (R = !0),
            (H = !1),
            (V = !1),
            L.removeAll(),
            y.useSpeed(T ? 9 : C).useMass(D),
            x.distance(d, !o),
            (j = !1),
            S.emit("pointerUp");
        }
        function X(n) {
          R && n.preventDefault();
        }
        return {
          addActivationEvents: function () {
            var n = t;
            I.add(n, "touchmove", function () {})
              .add(n, "touchend", function () {})
              .add(n, "touchstart", G)
              .add(n, "mousedown", G)
              .add(n, "touchcancel", W)
              .add(n, "contextmenu", W)
              .add(n, "click", X);
          },
          clickAllowed: function () {
            return !R;
          },
          pointerDown: function () {
            return V;
          },
          removeAllEvents: function () {
            I.removeAll(), L.removeAll();
          },
        };
      }
      function A(n, e, t) {
        var r,
          o,
          c =
            ((r = 2),
            (o = Math.pow(10, r)),
            function (n) {
              return Math.round(n * o) / o;
            }),
          d = f(0),
          l = f(0),
          v = f(0),
          h = 0,
          x = e,
          y = t;
        function w(n) {
          return (x = n), S;
        }
        function M(n) {
          return (y = n), S;
        }
        var S = {
          direction: function () {
            return h;
          },
          seek: function (e) {
            v.set(e).subtract(n);
            var t,
              r,
              o,
              c =
                ((t = v.get()),
                (o = 0) + ((t - (r = 0)) / (100 - r)) * (x - o));
            return (
              (h = m(v.get())),
              v.normalize().multiply(c).subtract(d),
              (function (n) {
                n.divide(y), l.add(n);
              })(v),
              S
            );
          },
          settle: function (e) {
            var t = e.get() - n.get(),
              r = !c(t);
            return r && n.set(e), r;
          },
          update: function () {
            d.add(l), n.add(d), l.multiply(0);
          },
          useBaseMass: function () {
            return M(t);
          },
          useBaseSpeed: function () {
            return w(e);
          },
          useMass: M,
          useSpeed: w,
        };
        return S;
      }
      function T(n, e, t, r) {
        var o = !1;
        return {
          constrain: function (c) {
            if (!o && n.reachedAny(t.get()) && n.reachedAny(e.get())) {
              var d = c ? 0.7 : 0.45,
                l = t.get() - e.get();
              t.subtract(l * d),
                !c &&
                  Math.abs(l) < 10 &&
                  (t.set(n.constrain(t.get())), r.useSpeed(10).useMass(3));
            }
          },
          toggleActive: function (n) {
            o = !n;
          },
        };
      }
      function C(n, e, t, r, o) {
        var d = c(-e + n, t[0]),
          l = r.map(d.constrain);
        return {
          snapsContained: (function () {
            if (e <= n) return [d.max];
            if ("keepSnaps" === o) return l;
            var t = (function () {
                var n = l[0],
                  e = y(l),
                  t = l.lastIndexOf(n),
                  r = l.indexOf(e) + 1;
                return c(t, r);
              })(),
              r = t.min,
              f = t.max;
            return l.slice(r, f);
          })(),
        };
      }
      function D(n, e, t, r, o) {
        var d = c(t.min + e.measure(0.1), t.max + e.measure(0.1)),
          l = d.reachedMin,
          f = d.reachedMax;
        return {
          loop: function (e) {
            if (
              (function (n) {
                return 1 === n ? f(r.get()) : -1 === n && l(r.get());
              })(e)
            ) {
              var t = n * (-1 * e);
              o.forEach(function (n) {
                return n.add(t);
              });
            }
          },
        };
      }
      function P(n) {
        var e = n.max,
          t = n.length;
        return {
          get: function (n) {
            return (n - e) / -t;
          },
        };
      }
      function B(n, e, t, r, o, c) {
        var d,
          l,
          f = n.startEdge,
          m = n.endEdge,
          v = o
            .map(function (rect) {
              return r[f] - rect[f];
            })
            .map(t.measure)
            .map(function (n) {
              return -Math.abs(n);
            }),
          x =
            ((d = h(v, c).map(function (g) {
              return g[0];
            })),
            (l = h(o, c)
              .map(function (n) {
                return y(n)[m] - n[0][f];
              })
              .map(t.measure)
              .map(Math.abs)
              .map(e.measure)),
            d.map(function (n, e) {
              return n + l[e];
            }));
        return {
          snaps: v,
          snapsAligned: x,
        };
      }
      function k(n, e, t, r, o) {
        var c = r.reachedAny,
          d = r.removeOffset,
          l = r.constrain;
        function f(n, e) {
          return Math.abs(n) < Math.abs(e) ? n : e;
        }
        function m(e, r) {
          var o = e,
            c = e + t,
            d = e - t;
          if (!n) return o;
          if (!r) return f(f(o, c), d);
          var l = f(o, 1 === r ? c : d);
          return Math.abs(l) * r;
        }
        return {
          byDistance: function (t, r) {
            var f = o.get() + t,
              v = (function (t) {
                var r = n ? d(t) : l(t);
                return {
                  index: e
                    .map(function (n) {
                      return n - r;
                    })
                    .map(function (n) {
                      return m(n, 0);
                    })
                    .map(function (n, i) {
                      return {
                        diff: n,
                        index: i,
                      };
                    })
                    .sort(function (n, e) {
                      return Math.abs(n.diff) - Math.abs(e.diff);
                    })[0].index,
                  distance: r,
                };
              })(f),
              h = v.index,
              x = v.distance,
              y = !n && c(f);
            return !r || y
              ? {
                  index: h,
                  distance: t,
                }
              : {
                  index: h,
                  distance: t + m(e[h] - x, 0),
                };
          },
          byIndex: function (n, t) {
            return {
              index: n,
              distance: m(e[n] - o.get(), t),
            };
          },
          shortcut: m,
        };
      }
      function I(n, e, t, r, o, c, d, l) {
        var f,
          m = x(r),
          v = x(r).reverse(),
          h = ((f = o[0] - 1), M(w(v, f), "end")).concat(
            (function () {
              var n = e - o[0] - 1,
                t = w(m, n);
              return M(t, "start");
            })()
          );
        function y(n, e) {
          return n.reduce(function (a, i) {
            return a - r[i];
          }, e);
        }
        function w(n, e) {
          return n.reduce(function (a, i) {
            return y(a, e) > 0 ? a.concat([i]) : a;
          }, []);
        }
        function M(n, e) {
          var r = "start" === e,
            o = r ? -t : t,
            l = c.findSlideBounds(o);
          return n.map(function (n) {
            var e = r ? 0 : -t,
              o = r ? t : 0,
              c = l.filter(function (b) {
                return b.index === n;
              })[0][r ? "end" : "start"];
            return {
              point: c,
              getTarget: function () {
                return d.get() > c ? e : o;
              },
              index: n,
              location: -1,
            };
          });
        }
        return {
          canLoop: function () {
            return h.every(function (n) {
              var t = n.index;
              return (
                y(
                  m.filter(function (i) {
                    return i !== t;
                  }),
                  e
                ) <= 0
              );
            });
          },
          clear: function () {
            h.forEach(function (e) {
              var t = e.index;
              l[t].style[n.startEdge] = "";
            });
          },
          loop: function () {
            h.forEach(function (e) {
              var t = e.getTarget,
                r = e.location,
                o = e.index,
                c = t();
              c !== r &&
                ((l[o].style[n.startEdge] = c + "%"), (e.location = c));
            });
          },
          loopPoints: h,
        };
      }
      function L(n, e, t) {
        var r = l(),
          o = r.removeAll,
          c = 0;
        function d(n) {
          9 === n.keyCode && (c = new Date().getTime());
        }
        function f(o, d) {
          r.add(
            o,
            "focus",
            function () {
              if (!(new Date().getTime() - c > 10)) {
                n.scrollLeft = 0;
                var r = Math.floor(d / t);
                e.index(r, 0);
              }
            },
            !0
          );
        }
        return {
          addActivationEvents: function (n) {
            r.add(document, "keydown", d, !1), n.forEach(f);
          },
          removeAllEvents: o,
        };
      }
      function z(n, e, t) {
        var r = t.style,
          o =
            "x" === n.scroll
              ? function (n) {
                  return "translate3d(" + n + "%,0px,0px)";
                }
              : function (n) {
                  return "translate3d(0px," + n + "%,0px)";
                },
          c = !1;
        return {
          clear: function () {
            r.transform = "";
          },
          to: function (n) {
            c || (r.transform = o(e.applyTo(n.get())));
          },
          toggleActive: function (n) {
            c = !n;
          },
        };
      }
      function O(n, e, t, r, l) {
        var m,
          v = r.align,
          h = r.axis,
          M = r.direction,
          S = r.startIndex,
          O = r.inViewThreshold,
          N = r.loop,
          F = r.speed,
          U = r.dragFree,
          V = r.slidesToScroll,
          H = r.skipSnaps,
          R = r.containScroll,
          j = e.getBoundingClientRect(),
          G = t.map(function (n) {
            return n.getBoundingClientRect();
          }),
          J = (function (n) {
            var e = "rtl" === n ? -1 : 1;
            return {
              applyTo: function (n) {
                return n * e;
              },
            };
          })(M),
          W = (function (n, e) {
            var t = "y" === n ? "y" : "x";
            return {
              scroll: t,
              cross: "y" === n ? "x" : "y",
              startEdge: "y" === t ? "top" : "rtl" === e ? "right" : "left",
              endEdge: "y" === t ? "bottom" : "rtl" === e ? "left" : "right",
              measureSize: function (rect) {
                var n = rect.width,
                  e = rect.height;
                return "x" === t ? n : e;
              },
            };
          })(h, M),
          X =
            ((m = W.measureSize(j)),
            {
              measure: function (n) {
                return 0 === m ? 0 : (n / m) * 100;
              },
              totalPercent: 100,
            }),
          Y = X.totalPercent,
          K = o(v, Y),
          Q = (function (n, e, t, r, o) {
            var c = n.measureSize,
              d = n.startEdge,
              l = n.endEdge,
              f = r.map(c);
            return {
              slideSizes: f.map(e.measure),
              slideSizesWithGaps: r
                .map(function (rect, n, e) {
                  var r = n === w(e),
                    style = window.getComputedStyle(y(t)),
                    c = parseFloat(style.getPropertyValue("margin-" + l));
                  return r ? f[n] + (o ? c : 0) : e[n + 1][d] - rect[d];
                })
                .map(e.measure)
                .map(Math.abs),
            };
          })(W, X, t, G, N),
          Z = Q.slideSizes,
          $ = Q.slideSizesWithGaps,
          _ = B(W, K, X, j, G, V),
          nn = _.snaps,
          en = _.snapsAligned,
          tn = -y(nn) + y($),
          rn = C(Y, tn, nn, en, R).snapsContained,
          on = !N && "" !== R ? rn : en,
          an = (function (n, e, t) {
            var r, o;
            return {
              limit: ((r = e[0]), (o = y(e)), c(t ? r - n : o, r)),
            };
          })(tn, on, N).limit,
          un = d(w(on), S, N),
          cn = un.clone(),
          sn = x(t),
          dn = (function (n) {
            var e = 0;
            function t(n, t) {
              return function () {
                n === !!e && t();
              };
            }
            function r() {
              e = window.requestAnimationFrame(n);
            }
            return {
              proceed: t(!0, r),
              start: t(!1, r),
              stop: t(!0, function () {
                window.cancelAnimationFrame(e), (e = 0);
              }),
            };
          })(function () {
            N || bn.scrollBounds.constrain(bn.dragHandler.pointerDown()),
              bn.scrollBody.seek(pn).update();
            var n = bn.scrollBody.settle(pn);
            n &&
              !bn.dragHandler.pointerDown() &&
              (bn.animation.stop(), l.emit("settle")),
              n || l.emit("scroll"),
              N &&
                (bn.scrollLooper.loop(bn.scrollBody.direction()),
                bn.slideLooper.loop()),
              bn.translate.to(fn),
              bn.animation.proceed();
          }),
          ln = on[un.get()],
          fn = f(ln),
          pn = f(ln),
          gn = A(fn, F, 1),
          mn = k(N, on, tn, an, pn),
          vn = (function (n, e, t, r, o, c) {
            function d(r) {
              var d = r.distance,
                l = r.index !== e.get();
              d && (n.start(), o.add(d)),
                l && (t.set(e.get()), e.set(r.index), c.emit("select"));
            }
            return {
              distance: function (n, e) {
                d(r.byDistance(n, e));
              },
              index: function (n, t) {
                var o = e.clone().set(n);
                d(r.byIndex(o.get(), t));
              },
            };
          })(dn, un, cn, mn, pn, l),
          hn = (function (n, e, t, r, o, c) {
            var d = Math.min(Math.max(c, 0.01), 0.99),
              l = (o ? [0, e, -e] : [0]).reduce(function (a, n) {
                return a.concat(f(n, d));
              }, []);
            function f(e, o) {
              var c = t.map(function (s) {
                return s * (o || 0);
              });
              return r.map(function (r, o) {
                return {
                  start: r - t[o] + c[o] + e,
                  end: r + n - c[o] + e,
                  index: o,
                };
              });
            }
            return {
              check: function (n) {
                return l.reduce(function (e, t) {
                  var r = t.index,
                    o = t.start,
                    c = t.end;
                  return -1 === e.indexOf(r) && o < n && c > n
                    ? e.concat([r])
                    : e;
                }, []);
              },
              findSlideBounds: f,
            };
          })(Y, tn, Z, nn, N, O),
          xn = E(
            W,
            J,
            n,
            pn,
            U,
            (function (n, e) {
              var t = n.scroll,
                r = {
                  x: "clientX",
                  y: "clientY",
                },
                o = f(0),
                c = f(0),
                d = f(0),
                l = f(0),
                m = [],
                v = new Date().getTime(),
                h = !1;
              function x(n, e) {
                h = !n.touches;
                var t = r[e],
                  o = h ? n[t] : n.touches[0][t];
                return l.set(o);
              }
              return {
                pointerDown: function (n) {
                  var r = x(n, t);
                  return o.set(r), d.set(r), e.measure(o.get());
                },
                pointerMove: function (n) {
                  var r = x(n, t),
                    o = new Date().getTime(),
                    l = o - v;
                  return (
                    l >= 10 && (l >= 100 && (m = []), m.push(r.get()), (v = o)),
                    c.set(r).subtract(d),
                    d.set(r),
                    e.measure(c.get())
                  );
                },
                pointerUp: function () {
                  var n = new Date().getTime() - v,
                    t = d.get(),
                    r = m
                      .slice(-5)
                      .map(function (n) {
                        return t - n;
                      })
                      .sort(function (n, e) {
                        return Math.abs(n) < Math.abs(e) ? 1 : -1;
                      })[0];
                  return (
                    d.set(n > 100 || !r ? 0 : r), (m = []), e.measure(d.get())
                  );
                },
                readPoint: x,
              };
            })(W, X),
            fn,
            dn,
            vn,
            gn,
            mn,
            un,
            l,
            N,
            H
          ),
          bn = {
            animation: dn,
            axis: W,
            direction: J,
            dragHandler: xn,
            pxToPercent: X,
            index: un,
            indexPrevious: cn,
            limit: an,
            location: fn,
            options: r,
            scrollBody: gn,
            scrollBounds: T(an, fn, pn, gn),
            scrollLooper: D(tn, X, an, fn, [fn, pn]),
            scrollProgress: P(an),
            scrollSnaps: on,
            scrollTarget: mn,
            scrollTo: vn,
            slideFocus: L(n, vn, V),
            slideLooper: I(W, Y, tn, $, on, hn, fn, t),
            slidesInView: hn,
            slideIndexes: sn,
            target: pn,
            translate: z(W, J, e),
          };
        return bn;
      }
      var N = {
        align: "center",
        axis: "x",
        containScroll: "",
        direction: "ltr",
        dragFree: !1,
        draggable: !0,
        draggableClass: "is-draggable",
        draggingClass: "is-dragging",
        inViewThreshold: 0,
        loop: !1,
        skipSnaps: !0,
        selectedClass: "is-selected",
        slidesToScroll: 1,
        speed: 10,
        startIndex: 0,
      };
      e.a = function (n, e) {
        var t,
          time,
          o,
          c,
          d,
          f,
          m,
          v = (function () {
            var n = {};
            function e(e) {
              return n[e] || [];
            }
            var t = {
              emit: function (n) {
                return (
                  e(n).forEach(function (e) {
                    return e(n);
                  }),
                  t
                );
              },
              off: function (r, o) {
                return (
                  (n[r] = e(r).filter(function (n) {
                    return n !== o;
                  })),
                  t
                );
              },
              on: function (r, o) {
                return (n[r] = e(r).concat([o])), t;
              },
            };
            return t;
          })(),
          h = l(),
          x =
            ((t = function () {
              if (A) {
                var e = c.axis.measureSize(n.getBoundingClientRect());
                D !== e && z(), v.emit("resize");
              }
            }),
            (time = 500),
            (o = 0),
            function () {
              window.clearTimeout(o), (o = window.setTimeout(t, time) || 0);
            }),
          y = z,
          w = v.on,
          E = v.off,
          A = !1,
          T = r({}, N),
          C = r({}, T),
          D = 0;
        function P() {
          if (!n) throw new Error("Missing root node 😢");
          var e,
            t = n.querySelector("*");
          if (!t) throw new Error("Missing container node 😢");
          (f = t),
            (m = Array.prototype.slice.call(f.children)),
            (e = getComputedStyle(n, ":before").content),
            (d = {
              get: function () {
                try {
                  return JSON.parse(e.slice(1, -1).replace(/\\/g, ""));
                } catch (n) {}
                return {};
              },
            });
        }
        function B(e) {
          if (
            (P(),
            (T = r({}, T, e)),
            (C = r({}, T, d.get())),
            (c = O(n, f, m, C, v)),
            h.add(window, "resize", x),
            c.translate.to(c.location),
            (D = c.axis.measureSize(n.getBoundingClientRect())),
            C.loop)
          ) {
            if (!c.slideLooper.canLoop())
              return (
                L(),
                B({
                  loop: !1,
                })
              );
            c.slideLooper.loop();
          }
          C.draggable &&
            f.offsetParent &&
            m.length &&
            (c.dragHandler.addActivationEvents(),
            C.draggableClass && S(n, C.draggableClass),
            C.draggingClass && v.on("pointerDown", k).on("pointerUp", k)),
            m.length && c.slideFocus.addActivationEvents(m),
            C.selectedClass && (I(), v.on("select", I).on("pointerUp", I)),
            A ||
              (setTimeout(function () {
                return v.emit("init");
              }, 0),
              (A = !0));
        }
        function k(e) {
          var t = C.draggingClass;
          "pointerDown" === e ? S(n, t) : M(n, t);
        }
        function I() {
          var n = C.selectedClass,
            e = F(!0);
          U(!0).forEach(function (e) {
            return M(m[e], n);
          }),
            e.forEach(function (e) {
              return S(m[e], n);
            });
        }
        function L() {
          c.dragHandler.removeAllEvents(),
            c.slideFocus.removeAllEvents(),
            c.animation.stop(),
            h.removeAll(),
            c.translate.clear(),
            c.slideLooper.clear(),
            M(n, C.draggableClass),
            m.forEach(function (n) {
              return M(n, C.selectedClass);
            }),
            v
              .off("select", I)
              .off("pointerUp", I)
              .off("pointerDown", k)
              .off("pointerUp", k);
        }
        function z(n) {
          if (A) {
            var e = r(
              {
                startIndex: H(),
              },
              n
            );
            L(), B(e), v.emit("reInit");
          }
        }
        function F(n) {
          var e = c[n ? "target" : "location"].get(),
            t = C.loop ? "removeOffset" : "constrain";
          return c.slidesInView.check(c.limit[t](e));
        }
        function U(n) {
          var e = F(n);
          return c.slideIndexes.filter(function (n) {
            return -1 === e.indexOf(n);
          });
        }
        function V(n, e, t) {
          c.scrollBody.useBaseMass().useSpeed(e ? 100 : C.speed),
            A && c.scrollTo.index(n, t || 0);
        }
        function H() {
          return c.index.get();
        }
        return (
          B(e),
          {
            canScrollNext: function () {
              return c.index.clone().add(1).get() !== H();
            },
            canScrollPrev: function () {
              return c.index.clone().add(-1).get() !== H();
            },
            clickAllowed: function () {
              return c.dragHandler.clickAllowed();
            },
            containerNode: function () {
              return f;
            },
            dangerouslyGetEngine: function () {
              return c;
            },
            destroy: function () {
              A && (L(), (A = !1), v.emit("destroy"));
            },
            off: E,
            on: w,
            previousScrollSnap: function () {
              return c.indexPrevious.get();
            },
            reInit: y,
            rootNode: function () {
              return n;
            },
            scrollNext: function (n) {
              V(c.index.clone().add(1).get(), !0 === n, -1);
            },
            scrollPrev: function (n) {
              V(c.index.clone().add(-1).get(), !0 === n, 1);
            },
            scrollProgress: function () {
              return c.scrollProgress.get(c.location.get());
            },
            scrollSnapList: function () {
              return c.scrollSnaps.map(c.scrollProgress.get);
            },
            scrollTo: V,
            selectedScrollSnap: H,
            slideNodes: function () {
              return m;
            },
            slidesInView: F,
            slidesNotInView: U,
          }
        );
      };
    },
  },
]);
