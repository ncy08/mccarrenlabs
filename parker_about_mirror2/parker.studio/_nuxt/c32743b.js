(window.webpackJsonp = window.webpackJsonp || []).push([
  [7, 47],
  {
    692: function (e, t, r) {
      "use strict";
      var n = r(2),
        o = r(6),
        c = r(47),
        l = r(46),
        f = r(72),
        d = r(270),
        h = r(17),
        m = r(5),
        _ = r(271),
        v = r(186),
        k = r(721),
        y = r(722),
        x = r(116),
        w = r(723),
        C = [],
        z = o(C.sort),
        $ = o(C.push),
        A = m(function () {
          C.sort(void 0);
        }),
        M = m(function () {
          C.sort(null);
        }),
        P = v("sort"),
        j = !m(function () {
          if (x) return x < 70;
          if (!(k && k > 3)) {
            if (y) return !0;
            if (w) return w < 603;
            var code,
              e,
              t,
              r,
              n = "";
            for (code = 65; code < 76; code++) {
              switch (((e = String.fromCharCode(code)), code)) {
                case 66:
                case 69:
                case 70:
                case 72:
                  t = 3;
                  break;
                case 68:
                case 71:
                  t = 4;
                  break;
                default:
                  t = 2;
              }
              for (r = 0; r < 47; r++)
                C.push({
                  k: e + r,
                  v: t,
                });
            }
            for (
              C.sort(function (a, b) {
                return b.v - a.v;
              }),
                r = 0;
              r < C.length;
              r++
            )
              (e = C[r].k.charAt(0)), n.charAt(n.length - 1) !== e && (n += e);
            return "DGBEFHACIJK" !== n;
          }
        });
      n(
        {
          target: "Array",
          proto: !0,
          forced: A || !M || !P || !j,
        },
        {
          sort: function (e) {
            void 0 !== e && c(e);
            var t = l(this);
            if (j) return void 0 === e ? z(t) : z(t, e);
            var r,
              n,
              o = [],
              m = f(t);
            for (n = 0; n < m; n++) n in t && $(o, t[n]);
            for (
              _(
                o,
                (function (e) {
                  return function (t, r) {
                    return void 0 === r
                      ? -1
                      : void 0 === t
                      ? 1
                      : void 0 !== e
                      ? +e(t, r) || 0
                      : h(t) > h(r)
                      ? 1
                      : -1;
                  };
                })(e)
              ),
                r = f(o),
                n = 0;
              n < r;

            )
              t[n] = o[n++];
            for (; n < m; ) d(t, n++);
            return t;
          },
        }
      );
    },
    699: function (e, t, r) {
      "use strict";
      var n = r(2),
        o = r(96).findIndex,
        c = r(146),
        l = "findIndex",
        f = !0;
      l in [] &&
        Array(1)[l](function () {
          f = !1;
        }),
        n(
          {
            target: "Array",
            proto: !0,
            forced: f,
          },
          {
            findIndex: function (e) {
              return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        c(l);
    },
    721: function (e, t, r) {
      "use strict";
      var n = r(95).match(/firefox\/(\d+)/i);
      e.exports = !!n && +n[1];
    },
    722: function (e, t, r) {
      "use strict";
      var n = r(95);
      e.exports = /MSIE|Trident/.test(n);
    },
    723: function (e, t, r) {
      "use strict";
      var n = r(95).match(/AppleWebKit\/(\d+)\./);
      e.exports = !!n && +n[1];
    },
    829: function (e, t, r) {
      var content = r(871);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(33).default)("1de1538e", content, !0, {
        sourceMap: !1,
      });
    },
    844: function (e, t, r) {
      "use strict";
      r.r(t);
      r(53), r(67), r(20);
      var n = r(1),
        o = (r(22), r(55), r(11), r(27), r(13)),
        c = r(184),
        l = r(115),
        f = r(185),
        d = {
          name: "FontPurchaseTrial",
          mixins: [c.validationMixin],
          props: {
            product: {
              type: Object,
              required: !0,
            },
          },
          computed: {
            ctaText: function () {
              return this.success
                ? "Success! Check your email"
                : this.error
                ? "Something went wrong"
                : this.submitting
                ? "Submitting"
                : "Download free trial";
            },
          },
          data: function () {
            return {
              error: !1,
              success: !1,
              delayedCalls: [],
              submitting: !1,
              form: {
                name: "",
                email: "",
                agreement: !1,
              },
            };
          },
          validations: {
            form: {
              agreement: {
                required: l.required,
                isTrue: function (e) {
                  return 1 == e;
                },
              },
              name: {
                required: l.required,
              },
              email: {
                required: l.required,
                email: l.email,
              },
            },
          },
          methods: {
            submit: function (e) {
              var t = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function r() {
                  var c, l;
                  return regeneratorRuntime.wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              ((r.prev = 0),
                              !t.submitting && !t.$v.form.$invalid)
                            ) {
                              r.next = 3;
                              break;
                            }
                            return r.abrupt("return");
                          case 3:
                            if (
                              (e.preventDefault(),
                              t.clearDelayedCalls(),
                              t.$v.$touch(),
                              !t.$v.$invalid)
                            ) {
                              r.next = 10;
                              break;
                            }
                            throw Error("Invalid");
                          case 10:
                            return (
                              (t.submitting = !0),
                              (t.error = !1),
                              (r.next = 14),
                              Object(f.b)("Xmr7Qu", {
                                email: t.form.email,
                                first_name:
                                  null === (c = t.form.name) ||
                                  void 0 === c ||
                                  null === (c = c.split(" ")) ||
                                  void 0 === c
                                    ? void 0
                                    : c[0],
                                last_name:
                                  null === (l = t.form.name) ||
                                  void 0 === l ||
                                  null === (l = l.split(" ")) ||
                                  void 0 === l
                                    ? void 0
                                    : l[1],
                              })
                            );
                          case 14:
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
                                  8,
                                  Object(n.a)(
                                    regeneratorRuntime.mark(function e() {
                                      return regeneratorRuntime.wrap(function (
                                        e
                                      ) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              t.resetForm();
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e);
                                    })
                                  )
                                )
                              );
                          case 16:
                            r.next = 24;
                            break;
                          case 18:
                            (r.prev = 18),
                              (r.t0 = r.catch(0)),
                              console.log(r.t0),
                              t.clearDelayedCalls(),
                              console.log(r.t0),
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
                          case 24:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[0, 18]]
                  );
                })
              )();
            },
            clearDelayedCalls: function () {
              this.delayedCalls.forEach(function (e) {
                return e.kill();
              }),
                (this.delayedCalls = []);
            },
            resetForm: function () {
              var e = this;
              Object.keys(this.form).forEach(function (t) {
                e.form[t] = "";
              }),
                (this.submitting = this.success = this.error = !1);
            },
          },
        },
        h = r(9),
        component = Object(h.a)(
          d,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "stage",
              },
              [
                t(
                  "div",
                  {
                    staticClass: "stage__indicator",
                  },
                  [
                    t("span", [e._v("00. ")]),
                    e._v(" "),
                    t("span", [
                      e._v(e._s(e.product.store.title) + " Free Trial"),
                    ]),
                  ]
                ),
                e._v(" "),
                t(
                  "form",
                  {
                    staticClass: "stage__details",
                    attrs: {
                      action: "",
                    },
                  },
                  [
                    t(
                      "div",
                      {
                        staticClass: "stage__detail",
                      },
                      [t("p", [e._v(e._s(e.product.store.title))])]
                    ),
                    e._v(" "),
                    t(
                      "div",
                      {
                        staticClass: "stage__detail",
                      },
                      [
                        t(
                          "div",
                          {
                            staticClass: "stage__detail__input",
                          },
                          [
                            t("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.form.name,
                                  expression: "form.name",
                                },
                              ],
                              attrs: {
                                type: "text",
                                placeholder: "First & Last Name",
                              },
                              domProps: {
                                value: e.form.name,
                              },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    e.$set(e.form, "name", t.target.value);
                                },
                              },
                            }),
                            e._v(" "),
                            t("div"),
                          ]
                        ),
                      ]
                    ),
                    e._v(" "),
                    t(
                      "div",
                      {
                        staticClass: "stage__detail",
                      },
                      [
                        t(
                          "div",
                          {
                            staticClass: "stage__detail__input",
                          },
                          [
                            t("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.form.email,
                                  expression: "form.email",
                                },
                              ],
                              attrs: {
                                type: "text",
                                placeholder: "Email Address",
                              },
                              domProps: {
                                value: e.form.email,
                              },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    e.$set(e.form, "email", t.target.value);
                                },
                              },
                            }),
                            e._v(" "),
                            t("div"),
                          ]
                        ),
                      ]
                    ),
                    e._v(" "),
                    t(
                      "div",
                      {
                        staticClass: "stage__detail",
                      },
                      [
                        t(
                          "div",
                          {
                            staticClass: "checkbox",
                          },
                          [
                            t("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.form.agreement,
                                  expression: "form.agreement",
                                },
                              ],
                              attrs: {
                                type: "checkbox",
                                id: "agreement",
                                name: "agreement",
                              },
                              domProps: {
                                checked: Array.isArray(e.form.agreement)
                                  ? e._i(e.form.agreement, null) > -1
                                  : e.form.agreement,
                              },
                              on: {
                                change: function (t) {
                                  var r = e.form.agreement,
                                    n = t.target,
                                    o = !!n.checked;
                                  if (Array.isArray(r)) {
                                    var c = e._i(r, null);
                                    n.checked
                                      ? c < 0 &&
                                        e.$set(
                                          e.form,
                                          "agreement",
                                          r.concat([null])
                                        )
                                      : c > -1 &&
                                        e.$set(
                                          e.form,
                                          "agreement",
                                          r.slice(0, c).concat(r.slice(c + 1))
                                        );
                                  } else e.$set(e.form, "agreement", o);
                                },
                              },
                            }),
                            e._v(" "),
                            t(
                              "label",
                              {
                                attrs: {
                                  for: "agreement",
                                },
                              },
                              [
                                e._v("I agree to the\n                    "),
                                t(
                                  "nuxt-link",
                                  {
                                    staticClass: "decoration",
                                    attrs: {
                                      to: "/trial-agreement",
                                    },
                                  },
                                  [e._v("license agreement")]
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    ),
                    e._v(" "),
                    t(
                      "button",
                      {
                        class: [
                          "cta",
                          {
                            disabled: e.$v.form.$invalid,
                          },
                        ],
                        on: {
                          click: function (t) {
                            return (
                              t.preventDefault(),
                              e.submit.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [e._v(e._s(e.ctaText))]
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "7bb820ca",
          null
        );
      t.default = component.exports;
    },
    870: function (e, t, r) {
      "use strict";
      r(829);
    },
    871: function (e, t, r) {
      var n = r(32)(function (i) {
        return i[1];
      });
      n.push([
        e.i,
        '.font-purchase{display:flex;background:#000;overflow:hidden;width:100vw;padding:var(--margin) var(--margin) 0 var(--margin);min-height:100vh}.font-purchase input{background-color:#000}.font-purchase .description{font-family:"PSTimes";font-weight:350;color:#fff}.font-purchase .stage{position:relative;display:flex}.font-purchase .stage:after{content:"";position:absolute;top:0;left:calc(var(--margin)*-1);width:100vw;height:1px;background:#fff}.font-purchase .stage__indicator span{color:#fff;text-transform:uppercase;font-family:"ChaletBook";font-weight:400}.font-purchase .stage__details{display:flex;flex-direction:column}.font-purchase .stage__detail{position:relative}.font-purchase .stage__detail:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:1px;background:#717171}.font-purchase .stage__detail:before{content:"";position:absolute;top:50%;left:0;transform:translate3d(0, -50%, 0) scaleX(0);width:100%;height:1px;background:#717171}.font-purchase .stage__detail.striked{pointer-events:none}.font-purchase .stage__detail.striked:before{transform:translate3d(0, -50%, 0) scaleX(1)}.font-purchase .stage__detail.striked p,.font-purchase .stage__detail.striked input,.font-purchase .stage__detail.striked label,.font-purchase .stage__detail.striked label span,.font-purchase .stage__detail.striked button span{color:#717171 !important}.font-purchase .stage__detail.striked label:before{border-color:#717171 !important}.font-purchase .stage__detail.striked .checkbox input:checked+label:before{background:none !important}.font-purchase .stage__detail p,.font-purchase .stage__detail input,.font-purchase .stage__detail label,.font-purchase .stage__detail label span,.font-purchase .stage__detail label button{color:#fff}.font-purchase .stage__detail label button{text-decoration:underline}.font-purchase .stage__detail label{display:inline-block;font-family:"ChaletBook"}.font-purchase .stage__detail svg{position:absolute;width:100%;pointer-events:none}.font-purchase .stage__detail svg path{stroke:#fff}.font-purchase .stage__detail.hover p,.font-purchase .stage__detail.hover input,.font-purchase .stage__detail.hover label,.font-purchase .stage__detail.hover button span{transition:color 500ms ease;color:#717171}.font-purchase .stage__detail.hover:hover p,.font-purchase .stage__detail.hover:hover input,.font-purchase .stage__detail.hover:hover label,.font-purchase .stage__detail.hover:hover button span,.font-purchase .stage__detail.hover.active p,.font-purchase .stage__detail.hover.active input,.font-purchase .stage__detail.hover.active label,.font-purchase .stage__detail.hover.active button span{color:#fff}.font-purchase .stage__detail .input{position:relative}.font-purchase .cta{border-radius:50px;font-family:"ChaletBook";font-weight:400;text-align:center;text-transform:uppercase}.font-purchase .cta:not(.disabled){color:#fff;border:1px solid #fff;color:#fff;transition:background 500ms ease,color 500ms ease}@media(hover: hover){.font-purchase .cta:not(.disabled):hover{background:#fff;color:#000}}.font-purchase .cta.disabled{pointer-events:none;color:#717171;border:1px solid #717171;color:#717171}@media only screen and (min-width: 480px){.font-purchase{flex-direction:column}.font-purchase .description{font-size:60rem;line-height:.967;letter-spacing:normal;text-indent:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.0833333333 + var(--gutter)*1);margin-bottom:294rem}.font-purchase .checkbox{position:relative;margin-right:16rem}.font-purchase .checkbox input:checked+label:before{background:#fff}.font-purchase .checkbox label{margin-left:28rem}.font-purchase .checkbox label:before{content:"";position:absolute;top:50%;left:0;transform:translate3d(0, -50%, 0);width:14rem;height:14rem;border:1px solid #fff}.font-purchase .cta{font-size:18rem;line-height:1;padding:18rem}.font-purchase .stage{margin-bottom:20rem}.font-purchase .stage__indicator{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5);margin-top:16rem}.font-purchase .stage__indicator span{font-size:18rem;line-height:1.22}.font-purchase .stage__details{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.5 + var(--gutter)*5);margin-left:auto}.font-purchase .stage__detail{display:flex;align-items:center;width:100%;height:56rem}.font-purchase .stage__detail:after{width:calc(100% + var(--margin))}.font-purchase .stage__detail p,.font-purchase .stage__detail label,.font-purchase .stage__detail span,.font-purchase .stage__detail input,.font-purchase .stage__detail button span{font-size:var(--b2);line-height:var(--b2-line_height);letter-spacing:var(--b2-letter_spacing)}.font-purchase .stage__detail input[type=text]{width:100%;padding:0 18rem}.font-purchase .stage:first-of-type .cta{margin-top:104rem}.font-purchase .stage:first-of-type .stage__detail__input{position:relative;width:calc(100% - 10rem);margin-left:10rem}.font-purchase .stage:first-of-type .stage__detail__input input{position:relative;width:92%;padding:0;z-index:1}.font-purchase .stage:first-of-type .stage__detail__input div{position:absolute;width:calc(100% + 10rem);height:100%;object-fit:contain;left:-10rem;bottom:-6rem;border:1px solid #fff;border-radius:8rem;z-index:0}.font-purchase .stage:first-of-type .stage__detail__input div:after{content:"";position:absolute;top:-35%;left:-2%;width:110%;height:110%;background:#000}.font-purchase .stage:nth-of-type(2) .stage__detail button{width:100%;display:flex;color:#fff;justify-content:space-between}.font-purchase .stage:nth-of-type(2) .stage__detail:last-child{margin-bottom:110rem}.font-purchase .stage:nth-of-type(3) .stage__detail:last-child{margin-bottom:45rem}.font-purchase .stage:nth-of-type(4) .stage__detail:first-child .checkbox{margin-right:110rem}.font-purchase .stage:nth-of-type(4) .stage__detail:last-child{margin-bottom:45rem}.font-purchase .stage:nth-of-type(4) .stage__detail:last-child .checkbox{margin-right:74rem}.font-purchase .stage:nth-of-type(4) .stage__detail:last-child .input{width:440rem}.font-purchase .stage:nth-of-type(4) .stage__detail:last-child .input input{position:relative;width:92%;padding:0;z-index:1}.font-purchase .stage:nth-of-type(4) .stage__detail:last-child .input div{position:absolute;width:calc(100% + 10rem);height:100%;object-fit:contain;left:-10rem;bottom:-6rem;border:1px solid #fff;border-radius:8rem;z-index:0}.font-purchase .stage:nth-of-type(4) .stage__detail:last-child .input div:after{content:"";position:absolute;top:-35%;left:-2%;width:110%;height:110%;background:#000}.font-purchase .stage:nth-of-type(5) .stage__detail:last-child{margin-bottom:45rem}.font-purchase .stage:nth-of-type(6) .stage__details{margin-top:26rem}}@media only screen and (max-width: 479px){.font-purchase{flex-direction:column}.font-purchase .description{font-size:30rem;line-height:.9;letter-spacing:normal;text-indent:calc((100vw - var(--margin)*2 - var(--gutter)*11)*0.0833333333 + var(--gutter)*1);margin-bottom:100rem}.font-purchase .checkbox{position:relative;margin-right:16rem;display:flex;align-items:center}.font-purchase .checkbox input:checked+label:before{background:#fff}.font-purchase .checkbox label{margin-left:18rem}.font-purchase .checkbox label:before{content:"";position:absolute;top:50%;left:0;transform:translate3d(0, -50%, 0);width:14rem;height:14rem;border:1px solid #fff}.font-purchase .cta{font-size:18rem;line-height:1;padding:18rem}.font-purchase .stage{flex-wrap:wrap;margin-bottom:20rem}.font-purchase .stage:first-of-type .cta{margin-top:104rem}.font-purchase .stage:first-of-type .stage__detail__input{position:relative;width:100%}.font-purchase .stage:first-of-type .stage__detail__input input{position:relative;width:100%;padding:0 10rem;z-index:1}.font-purchase .stage:first-of-type .stage__detail__input div{position:absolute;width:calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);height:100%;object-fit:contain;left:0rem;bottom:-6rem;border:1px solid #fff;border-radius:8rem;z-index:0}.font-purchase .stage:first-of-type .stage__detail__input div:after{content:"";position:absolute;top:-35%;left:-2%;width:110%;height:110%;background:#000}.font-purchase .stage:nth-of-type(2) .stage__detail button{width:100%;display:flex;color:#fff;justify-content:space-between}.font-purchase .stage:nth-of-type(2) .stage__detail:last-child{margin-bottom:110rem}.font-purchase .stage:nth-of-type(3) .stage__detail:last-child{margin-bottom:45rem}.font-purchase .stage:nth-of-type(4) .stage__detail:first-child .checkbox:first-child{width:140rem;margin-right:34rem}.font-purchase .stage:nth-of-type(4) .stage__detail:last-child{margin-bottom:45rem}.font-purchase .stage:nth-of-type(4) .stage__detail:last-child .checkbox:first-child{width:160rem;margin-right:14rem}.font-purchase .stage:nth-of-type(4) .stage__detail:last-child .input{width:260rem}.font-purchase .stage:nth-of-type(4) .stage__detail:last-child .input input{position:relative;padding:0 10rem;z-index:1}.font-purchase .stage:nth-of-type(4) .stage__detail:last-child .input div{position:absolute;width:100%;height:100%;object-fit:contain;left:0rem;bottom:-6rem;border:1px solid #fff;border-radius:8rem;z-index:0}.font-purchase .stage:nth-of-type(4) .stage__detail:last-child .input div:after{content:"";position:absolute;top:-35%;left:-2%;width:110%;height:110%;background:#000}.font-purchase .stage:nth-of-type(5) .stage__detail:last-child{margin-bottom:45rem}.font-purchase .stage:nth-of-type(5) .stage__detail .checkbox label{margin-left:10rem}.font-purchase .stage:nth-of-type(5) .stage__detail .checkbox:not(:last-child){margin-right:26rem}.font-purchase .stage:nth-of-type(5) .stage__detail .checkbox:last-child{margin-right:0}.font-purchase .stage:nth-of-type(6) .stage__details{margin-top:26rem}.font-purchase .stage__indicator{position:relative;align-self:flex-start;flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3);margin-top:16rem;margin-bottom:110rem}.font-purchase .stage__indicator:after{content:"";position:absolute;bottom:-110rem;left:0;width:100%;height:1px;background:#717171}.font-purchase .stage__indicator span{font-size:18rem;line-height:1.22}.font-purchase .stage__indicator span:last-child{margin-left:20rem}.font-purchase .stage__details{flex:0 0 calc((100vw - var(--margin)*2 - var(--gutter)*3)*1 + var(--gutter)*3)}.font-purchase .stage__detail{display:flex;align-items:center;width:100%;height:65rem}.font-purchase .stage__detail:after{width:100%}.font-purchase .stage__detail p,.font-purchase .stage__detail label,.font-purchase .stage__detail span,.font-purchase .stage__detail input,.font-purchase .stage__detail button span{font-size:16rem;line-height:.92}.font-purchase .stage__detail input[type=text]{width:100%;padding:0 18rem}}',
        "",
      ]),
        (n.locals = {}),
        (e.exports = n);
    },
    883: function (e, t, r) {
      "use strict";
      r.r(t);
      r(53), r(67);
      var n = r(94),
        o = r(1),
        c =
          (r(22),
          r(54),
          r(290),
          r(699),
          r(70),
          r(692),
          r(269),
          r(20),
          r(11),
          r(25),
          r(49),
          r(27),
          r(13)),
        l = r(184),
        f = r(844),
        d = r(115),
        h = {
          name: "FontPurchase",
          mixins: [l.validationMixin],
          components: {
            FontPurchaseTrial: f.default,
          },
          props: {
            product: {
              type: Object,
              required: !0,
            },
          },
          computed: {
            variants: function () {
              var e = this.product.store.options.findIndex(function (option) {
                return "party" == option.name.toLowerCase();
              });
              return this.product.store.variants
                .filter(function (t) {
                  return "First Party" == t.store["option".concat(e + 1)];
                })
                .sort(function (a, b) {
                  return a.details.purchasable === b.details.purchasable
                    ? 0
                    : a.details.purchasable
                    ? -1
                    : 1;
                });
            },
            ctaText: function () {
              return this.success
                ? "Success!"
                : this.error
                ? "Something went wrong"
                : this.submitting
                ? "Adding"
                : "Add to cart";
            },
            cart: function () {
              return this.$store.getters["cart/cart"];
            },
          },
          data: function () {
            return {
              error: !1,
              success: !1,
              delayedCalls: [],
              submitting: !1,
              form: {
                license: "",
                size: "",
                web: !1,
                forMe: null,
                desktop: !1,
                forClient: null,
                educational: !1,
                selectedVariants: [],
              },
            };
          },
          validations: {
            form: {
              selectedVariants: {
                required: d.required,
                minLength: Object(d.minLength)(1),
              },
              web: {
                required: Object(d.requiredIf)(function (e) {
                  return !this.form.desktop;
                }),
              },
              desktop: {
                required: Object(d.requiredIf)(function (e) {
                  return !this.form.web;
                }),
              },
              forMe: {
                required: Object(d.requiredIf)(function (e) {
                  return !this.form.forClient;
                }),
              },
              forClient: {
                required: Object(d.requiredIf)(function (e) {
                  return !this.form.forMe;
                }),
              },
              size: {
                required: Object(d.requiredIf)(function (e) {
                  return this.form.forClient;
                }),
              },
              thirdParty: {
                required: Object(d.requiredIf)(function (e) {
                  return this.form.forClient;
                }),
              },
            },
          },
          mounted: function () {
            this.setDefaultVariant();
          },
          methods: {
            setDefaultVariant: function () {
              var e = this.variants.filter(function (e) {
                return e.details.purchasable;
              });
              this.form.selectedVariants.push(e[0]);
            },
            handleClick: function (e) {
              if (e.details.purchasable) {
                var t = this.form.selectedVariants.findIndex(function (t) {
                  return t._id == e._id;
                });
                -1 !== t
                  ? this.form.selectedVariants.splice(t, 1)
                  : this.form.selectedVariants.push(e);
              } else this.openSignupModal(e);
            },
            isVariantSelected: function (e) {
              return this.form.selectedVariants.find(function (t) {
                return t._id == e._id;
              });
            },
            openSignupModal: function (e) {
              this.$store.dispatch("setSignupVariant", e),
                this.$store.dispatch("setSignupOpen", !0);
            },
            handleForMeClick: function () {
              this.form.forClient = !1;
            },
            handleForClientClick: function () {
              this.form.forMe = !1;
            },
            handleEducationalChange: function () {
              this.form.educational && (this.form.forMe = !0);
            },
            handleLicenseChange: function () {
              this.form.license.length > 0 && (this.form.forClient = !0);
            },
            handleSizeClick: function (e, t) {
              var r = e.target.checked;
              "" !== this.form.size &&
                (this.$refs[
                  "size-".concat(this.form.size.replace("<", ""))
                ].checked = !1),
                (this.form.size = r ? "<".concat(t) : "");
            },
            submit: function (e) {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function r() {
                  var l, f, d, h, m, _, v;
                  return regeneratorRuntime.wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              ((r.prev = 0),
                              !t.submitting && !t.$v.form.$invalid)
                            ) {
                              r.next = 3;
                              break;
                            }
                            return r.abrupt("return");
                          case 3:
                            if (
                              (e.preventDefault(),
                              t.clearDelayedCalls(),
                              t.$v.$touch(),
                              !t.$v.$invalid)
                            ) {
                              r.next = 10;
                              break;
                            }
                            throw Error("Invalid");
                          case 10:
                            if (
                              ((t.submitting = !0),
                              (t.error = !1),
                              null === t.cart || !t.cart.hasOwnProperty("id"))
                            ) {
                              r.next = 16;
                              break;
                            }
                            (r.t0 = t.cart), (r.next = 19);
                            break;
                          case 16:
                            return (r.next = 18), t.$shopify.checkout.create();
                          case 18:
                            r.t0 = r.sent;
                          case 19:
                            return (
                              (l = r.t0),
                              (f = l.id),
                              (d = []),
                              t.form.desktop &&
                                d.push({
                                  key: "Desktop",
                                  value: "Desktop",
                                }),
                              t.form.web &&
                                d.push({
                                  key: "Web",
                                  value: "Web",
                                }),
                              t.form.forMe &&
                                (d.push({
                                  key: "For me",
                                  value: "For me",
                                }),
                                d.push({
                                  key: "Educational",
                                  value: "Educational",
                                })),
                              t.form.forClient &&
                                (t.form.license.length > 0
                                  ? d.push({
                                      key: "For my client",
                                      value: "For my client ".concat(
                                        t.form.license
                                      ),
                                    })
                                  : d.push({
                                      key: "For my client",
                                      value: "For my client",
                                    }),
                                d.push({
                                  key: "Size",
                                  value: "".concat(t.form.size),
                                })),
                              (h = Object(n.a)(t.form.selectedVariants)),
                              (m = h.map(function (e) {
                                if (t.form.thirdParty) {
                                  var r = t.product.store.options.map(function (
                                      option
                                    ) {
                                      return option.name;
                                    }),
                                    n = r.findIndex(function (option) {
                                      return "Party" == option;
                                    }),
                                    o = [];
                                  return (
                                    r.forEach(function (option, e) {
                                      e !== n && o.push(e);
                                    }),
                                    t.product.store.variants.find(function (t) {
                                      return (
                                        o
                                          .map(function (r) {
                                            return (
                                              e.store["option".concat(r + 1)] ==
                                              t.store["option".concat(r + 1)]
                                            );
                                          })
                                          .filter(function (e) {
                                            return e;
                                          }).length == o.length &&
                                        "Third Party" ==
                                          t.store["option".concat(n + 1)]
                                      );
                                    })
                                  );
                                }
                                return e;
                              })),
                              (_ = m.map(function (e) {
                                return {
                                  variantId: e.store.gid,
                                  quantity: 1,
                                  customAttributes: d,
                                };
                              })),
                              (r.next = 32),
                              t.$shopify.checkout.addLineItems(f, _)
                            );
                          case 32:
                            (v = r.sent),
                              t.$store.dispatch("cart/setCart", v),
                              t.delayedCalls.push(
                                c.a.delayedCall(
                                  1,
                                  Object(o.a)(
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
                                c.a.delayedCall(
                                  4,
                                  Object(o.a)(
                                    regeneratorRuntime.mark(function e() {
                                      return regeneratorRuntime.wrap(function (
                                        e
                                      ) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              t.resetForm();
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e);
                                    })
                                  )
                                )
                              );
                          case 36:
                            r.next = 44;
                            break;
                          case 38:
                            (r.prev = 38),
                              (r.t1 = r.catch(0)),
                              console.log(r.t1),
                              t.clearDelayedCalls(),
                              console.log(r.t1),
                              c.a.delayedCall(
                                1,
                                Object(o.a)(
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
                                                c.a.delayedCall(3, function () {
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
                          case 44:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[0, 38]]
                  );
                })
              )();
            },
            resetForm: function () {
              (this.form = {
                license: "",
                size: "",
                web: !1,
                forMe: null,
                desktop: !1,
                forClient: null,
                educational: !1,
                selectedVariants: [],
              }),
                (this.submitting = this.success = this.error = !1),
                this.setDefaultVariant();
            },
            clearDelayedCalls: function () {
              this.delayedCalls.forEach(function (e) {
                return e.kill();
              }),
                (this.delayedCalls = []);
            },
          },
        },
        m = (r(870), r(9)),
        component = Object(m.a)(
          h,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "font-purchase",
              },
              [
                t(
                  "p",
                  {
                    staticClass: "description",
                  },
                  [e._v(e._s(e.product.purchaseDescription))]
                ),
                e._v(" "),
                t("FontPurchaseTrial", {
                  attrs: {
                    product: e.product,
                  },
                }),
                e._v(" "),
                t(
                  "div",
                  {
                    staticClass: "stage",
                  },
                  [
                    t(
                      "div",
                      {
                        staticClass: "stage__indicator",
                      },
                      [
                        t("span", [e._v("01. ")]),
                        e._v(" "),
                        t("span", [e._v(e._s(e.product.store.title))]),
                      ]
                    ),
                    e._v(" "),
                    t(
                      "div",
                      {
                        staticClass: "stage__details",
                      },
                      e._l(e.variants, function (r, n) {
                        return t(
                          "div",
                          {
                            key: n,
                            class: [
                              "stage__detail hover",
                              {
                                waitlist: !r.details.purchasable,
                              },
                              {
                                active: e.isVariantSelected(r),
                              },
                            ],
                          },
                          [
                            r.details.purchasable
                              ? t(
                                  "button",
                                  {
                                    on: {
                                      click: function (t) {
                                        return (
                                          t.preventDefault(), e.handleClick(r)
                                        );
                                      },
                                    },
                                  },
                                  [
                                    t("span", [e._v(e._s(r.title))]),
                                    e._v(" "),
                                    t("span", [
                                      e._v("$" + e._s(r.store.price)),
                                    ]),
                                  ]
                                )
                              : t(
                                  "button",
                                  {
                                    on: {
                                      click: function (t) {
                                        return (
                                          t.preventDefault(), e.handleClick(r)
                                        );
                                      },
                                    },
                                  },
                                  [
                                    t("span", [e._v(e._s(r.title))]),
                                    e._v(" "),
                                    t(
                                      "span",
                                      {
                                        staticClass: "decoration",
                                      },
                                      [e._v("Sign up for Waitlist")]
                                    ),
                                  ]
                                ),
                          ]
                        );
                      }),
                      0
                    ),
                  ]
                ),
                e._v(" "),
                t(
                  "div",
                  {
                    staticClass: "stage",
                  },
                  [
                    e._m(0),
                    e._v(" "),
                    t(
                      "div",
                      {
                        staticClass: "stage__details",
                      },
                      [
                        t(
                          "div",
                          {
                            staticClass: "stage__detail",
                          },
                          [
                            t(
                              "div",
                              {
                                staticClass: "checkbox",
                              },
                              [
                                t("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.form.desktop,
                                      expression: "form.desktop",
                                    },
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    id: "desktop",
                                    name: "desktop",
                                  },
                                  domProps: {
                                    checked: Array.isArray(e.form.desktop)
                                      ? e._i(e.form.desktop, null) > -1
                                      : e.form.desktop,
                                  },
                                  on: {
                                    change: function (t) {
                                      var r = e.form.desktop,
                                        n = t.target,
                                        o = !!n.checked;
                                      if (Array.isArray(r)) {
                                        var c = e._i(r, null);
                                        n.checked
                                          ? c < 0 &&
                                            e.$set(
                                              e.form,
                                              "desktop",
                                              r.concat([null])
                                            )
                                          : c > -1 &&
                                            e.$set(
                                              e.form,
                                              "desktop",
                                              r
                                                .slice(0, c)
                                                .concat(r.slice(c + 1))
                                            );
                                      } else e.$set(e.form, "desktop", o);
                                    },
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "label",
                                  {
                                    attrs: {
                                      for: "desktop",
                                    },
                                  },
                                  [e._v("Desktop/Print")]
                                ),
                              ]
                            ),
                          ]
                        ),
                        e._v(" "),
                        t(
                          "div",
                          {
                            staticClass: "stage__detail",
                          },
                          [
                            t(
                              "div",
                              {
                                staticClass: "checkbox",
                              },
                              [
                                t("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.form.web,
                                      expression: "form.web",
                                    },
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    id: "web",
                                    name: "web",
                                  },
                                  domProps: {
                                    checked: Array.isArray(e.form.web)
                                      ? e._i(e.form.web, null) > -1
                                      : e.form.web,
                                  },
                                  on: {
                                    change: function (t) {
                                      var r = e.form.web,
                                        n = t.target,
                                        o = !!n.checked;
                                      if (Array.isArray(r)) {
                                        var c = e._i(r, null);
                                        n.checked
                                          ? c < 0 &&
                                            e.$set(
                                              e.form,
                                              "web",
                                              r.concat([null])
                                            )
                                          : c > -1 &&
                                            e.$set(
                                              e.form,
                                              "web",
                                              r
                                                .slice(0, c)
                                                .concat(r.slice(c + 1))
                                            );
                                      } else e.$set(e.form, "web", o);
                                    },
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "label",
                                  {
                                    attrs: {
                                      for: "web",
                                    },
                                  },
                                  [e._v("Web")]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
                e._v(" "),
                t(
                  "div",
                  {
                    staticClass: "stage",
                  },
                  [
                    e._m(1),
                    e._v(" "),
                    t(
                      "div",
                      {
                        staticClass: "stage__details",
                      },
                      [
                        t(
                          "div",
                          {
                            staticClass: "stage__detail",
                          },
                          [
                            t(
                              "div",
                              {
                                staticClass: "checkbox",
                              },
                              [
                                t("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.form.forMe,
                                      expression: "form.forMe",
                                    },
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    id: "for-me",
                                    name: "for-me",
                                  },
                                  domProps: {
                                    checked: Array.isArray(e.form.forMe)
                                      ? e._i(e.form.forMe, null) > -1
                                      : e.form.forMe,
                                  },
                                  on: {
                                    click: e.handleForMeClick,
                                    change: function (t) {
                                      var r = e.form.forMe,
                                        n = t.target,
                                        o = !!n.checked;
                                      if (Array.isArray(r)) {
                                        var c = e._i(r, null);
                                        n.checked
                                          ? c < 0 &&
                                            e.$set(
                                              e.form,
                                              "forMe",
                                              r.concat([null])
                                            )
                                          : c > -1 &&
                                            e.$set(
                                              e.form,
                                              "forMe",
                                              r
                                                .slice(0, c)
                                                .concat(r.slice(c + 1))
                                            );
                                      } else e.$set(e.form, "forMe", o);
                                    },
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "label",
                                  {
                                    attrs: {
                                      for: "for-me",
                                    },
                                  },
                                  [e._v("For Me")]
                                ),
                              ]
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      1 == e.form.forMe || null == e.form.forMe,
                                    expression:
                                      "form.forMe == true || form.forMe == null",
                                  },
                                ],
                                staticClass: "checkbox",
                              },
                              [
                                t("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.form.educational,
                                      expression: "form.educational",
                                    },
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    id: "educational",
                                    name: "educational",
                                  },
                                  domProps: {
                                    checked: Array.isArray(e.form.educational)
                                      ? e._i(e.form.educational, null) > -1
                                      : e.form.educational,
                                  },
                                  on: {
                                    change: [
                                      function (t) {
                                        var r = e.form.educational,
                                          n = t.target,
                                          o = !!n.checked;
                                        if (Array.isArray(r)) {
                                          var c = e._i(r, null);
                                          n.checked
                                            ? c < 0 &&
                                              e.$set(
                                                e.form,
                                                "educational",
                                                r.concat([null])
                                              )
                                            : c > -1 &&
                                              e.$set(
                                                e.form,
                                                "educational",
                                                r
                                                  .slice(0, c)
                                                  .concat(r.slice(c + 1))
                                              );
                                        } else e.$set(e.form, "educational", o);
                                      },
                                      e.handleEducationalChange,
                                    ],
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "label",
                                  {
                                    attrs: {
                                      for: "educational",
                                    },
                                  },
                                  [e._v("I am a student or educator")]
                                ),
                              ]
                            ),
                          ]
                        ),
                        e._v(" "),
                        t(
                          "div",
                          {
                            staticClass: "stage__detail",
                          },
                          [
                            t(
                              "div",
                              {
                                staticClass: "checkbox",
                              },
                              [
                                t("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.form.forClient,
                                      expression: "form.forClient",
                                    },
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    id: "for-client",
                                    name: "for-client",
                                  },
                                  domProps: {
                                    checked: Array.isArray(e.form.forClient)
                                      ? e._i(e.form.forClient, null) > -1
                                      : e.form.forClient,
                                  },
                                  on: {
                                    click: e.handleForClientClick,
                                    change: function (t) {
                                      var r = e.form.forClient,
                                        n = t.target,
                                        o = !!n.checked;
                                      if (Array.isArray(r)) {
                                        var c = e._i(r, null);
                                        n.checked
                                          ? c < 0 &&
                                            e.$set(
                                              e.form,
                                              "forClient",
                                              r.concat([null])
                                            )
                                          : c > -1 &&
                                            e.$set(
                                              e.form,
                                              "forClient",
                                              r
                                                .slice(0, c)
                                                .concat(r.slice(c + 1))
                                            );
                                      } else e.$set(e.form, "forClient", o);
                                    },
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "label",
                                  {
                                    attrs: {
                                      for: "for-client",
                                    },
                                  },
                                  [e._v("For my client")]
                                ),
                              ]
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      1 == e.form.forClient ||
                                      null == e.form.forClient,
                                    expression:
                                      "form.forClient == true || form.forClient == null",
                                  },
                                ],
                                staticClass: "input",
                              },
                              [
                                t("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.form.license,
                                      expression: "form.license",
                                    },
                                  ],
                                  attrs: {
                                    type: "text",
                                    placeholder: "Enter Name of License Owner",
                                  },
                                  domProps: {
                                    value: e.form.license,
                                  },
                                  on: {
                                    input: [
                                      function (t) {
                                        t.target.composing ||
                                          e.$set(
                                            e.form,
                                            "license",
                                            t.target.value
                                          );
                                      },
                                      e.handleLicenseChange,
                                    ],
                                  },
                                }),
                                e._v(" "),
                                t("div"),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
                e._v(" "),
                t(
                  "div",
                  {
                    staticClass: "stage",
                  },
                  [
                    e._m(2),
                    e._v(" "),
                    t(
                      "div",
                      {
                        staticClass: "stage__details",
                      },
                      [
                        t(
                          "div",
                          {
                            class: [
                              "stage__detail",
                              {
                                striked: e.form.forMe,
                              },
                            ],
                          },
                          [
                            t(
                              "div",
                              {
                                staticClass: "checkbox",
                              },
                              [
                                t("input", {
                                  ref: "size-10",
                                  attrs: {
                                    type: "checkbox",
                                    id: "size-10",
                                    name: "size-10",
                                  },
                                  on: {
                                    click: function (t) {
                                      return e.handleSizeClick(t, 10);
                                    },
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "label",
                                  {
                                    attrs: {
                                      for: "size-10",
                                    },
                                  },
                                  [e._v(" <10 ")]
                                ),
                              ]
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass: "checkbox",
                              },
                              [
                                t("input", {
                                  ref: "size-25",
                                  attrs: {
                                    type: "checkbox",
                                    id: "size-25",
                                    name: "size-25",
                                  },
                                  on: {
                                    click: function (t) {
                                      return e.handleSizeClick(t, 25);
                                    },
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "label",
                                  {
                                    attrs: {
                                      for: "size-25",
                                    },
                                  },
                                  [e._v(" <25 ")]
                                ),
                              ]
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass: "checkbox",
                              },
                              [
                                t("input", {
                                  ref: "size-50",
                                  attrs: {
                                    type: "checkbox",
                                    id: "size-50",
                                    name: "size-50",
                                  },
                                  on: {
                                    click: function (t) {
                                      return e.handleSizeClick(t, 50);
                                    },
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "label",
                                  {
                                    attrs: {
                                      for: "size-50",
                                    },
                                  },
                                  [e._v(" <50 ")]
                                ),
                              ]
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass: "checkbox",
                              },
                              [
                                t("input", {
                                  ref: "size-100",
                                  attrs: {
                                    type: "checkbox",
                                    id: "size-100",
                                    name: "size-100",
                                  },
                                  on: {
                                    click: function (t) {
                                      return e.handleSizeClick(t, 100);
                                    },
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "label",
                                  {
                                    attrs: {
                                      for: "size-100",
                                    },
                                  },
                                  [e._v(" <100 ")]
                                ),
                              ]
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass: "checkbox",
                              },
                              [
                                t("input", {
                                  ref: "size-500",
                                  attrs: {
                                    type: "checkbox",
                                    id: "size-500",
                                    name: "size-500",
                                  },
                                  on: {
                                    click: function (t) {
                                      return e.handleSizeClick(t, 500);
                                    },
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "label",
                                  {
                                    attrs: {
                                      for: "size-500",
                                    },
                                  },
                                  [e._v(" <500 ")]
                                ),
                              ]
                            ),
                          ]
                        ),
                        e._v(" "),
                        t(
                          "div",
                          {
                            class: [
                              "stage__detail",
                              {
                                striked: e.form.forMe,
                              },
                            ],
                          },
                          [
                            t(
                              "div",
                              {
                                staticClass: "checkbox",
                              },
                              [
                                t("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.form.thirdParty,
                                      expression: "form.thirdParty",
                                    },
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    id: "third-party",
                                    name: "third-party",
                                  },
                                  domProps: {
                                    checked: Array.isArray(e.form.thirdParty)
                                      ? e._i(e.form.thirdParty, null) > -1
                                      : e.form.thirdParty,
                                  },
                                  on: {
                                    change: function (t) {
                                      var r = e.form.thirdParty,
                                        n = t.target,
                                        o = !!n.checked;
                                      if (Array.isArray(r)) {
                                        var c = e._i(r, null);
                                        n.checked
                                          ? c < 0 &&
                                            e.$set(
                                              e.form,
                                              "thirdParty",
                                              r.concat([null])
                                            )
                                          : c > -1 &&
                                            e.$set(
                                              e.form,
                                              "thirdParty",
                                              r
                                                .slice(0, c)
                                                .concat(r.slice(c + 1))
                                            );
                                      } else e.$set(e.form, "thirdParty", o);
                                    },
                                  },
                                }),
                                e._v(" "),
                                e._m(3),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
                e._v(" "),
                t(
                  "div",
                  {
                    staticClass: "stage",
                  },
                  [
                    t(
                      "div",
                      {
                        staticClass: "stage__details",
                      },
                      [
                        t(
                          "button",
                          {
                            class: [
                              "cta",
                              {
                                disabled: e.$v.form.$invalid,
                              },
                            ],
                            on: {
                              click: function (t) {
                                return (
                                  t.preventDefault(),
                                  e.submit.apply(null, arguments)
                                );
                              },
                            },
                          },
                          [e._v(e._s(e.ctaText))]
                        ),
                      ]
                    ),
                  ]
                ),
              ],
              1
            );
          },
          [
            function () {
              var e = this,
                t = e._self._c;
              return t(
                "div",
                {
                  staticClass: "stage__indicator",
                },
                [
                  t("span", [e._v("02. ")]),
                  e._v(" "),
                  t("span", [e._v("Licences")]),
                ]
              );
            },
            function () {
              var e = this,
                t = e._self._c;
              return t(
                "div",
                {
                  staticClass: "stage__indicator",
                },
                [
                  t("span", [e._v("03. ")]),
                  e._v(" "),
                  t("span", [e._v("Users")]),
                ]
              );
            },
            function () {
              var e = this,
                t = e._self._c;
              return t(
                "div",
                {
                  staticClass: "stage__indicator",
                },
                [
                  t("span", [e._v("04. ")]),
                  e._v(" "),
                  t("span", [e._v("Size")]),
                ]
              );
            },
            function () {
              var e = this,
                t = e._self._c;
              return t(
                "label",
                {
                  attrs: {
                    for: "third-party",
                  },
                },
                [
                  t("span", [
                    e._v("I want to legally share fonts with third parties "),
                  ]),
                  e._v(" "),
                  t("span", [e._v("+10%")]),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
  },
]);
