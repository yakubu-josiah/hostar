(this.wc = this.wc || {}),
    (this.wc.blocksCheckout = (function (e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
                n.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var r = Object.create(null);
                if (
                    (n.r(r),
                    Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && "string" != typeof e)
                )
                    for (var o in e)
                        n.d(
                            r,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 142))
        );
    })({
        0: function (e, t) {
            e.exports = window.wp.element;
        },
        1: function (e, t) {
            e.exports = window.wp.i18n;
        },
        10: function (e, t, n) {
            "use strict";
            function r() {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) &&
                                    (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        11: function (e, t) {
            function n() {
                return (
                    (e.exports = n =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports),
                    n.apply(this, arguments)
                );
            }
            (e.exports = n),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        12: function (e, t) {
            e.exports = window.wp.isShallowEqual;
        },
        131: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return o;
            }),
                n.d(t, "b", function () {
                    return i;
                });
            var r = n(23);
            const o = (e) =>
                !Object(r.a)(e) &&
                e instanceof Object &&
                e.constructor === Object;
            function i(e, t) {
                return o(e) && t in e;
            }
        },
        134: function (e, t) {},
        135: function (e, t) {},
        136: function (e, t) {},
        137: function (e, t) {},
        138: function (e, t) {},
        139: function (e, t) {},
        14: function (e, t) {
            e.exports = window.wp.compose;
        },
        140: function (e, t) {},
        142: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "TotalsItem", function () {
                    return k;
                }),
                n.d(t, "Subtotal", function () {
                    return F;
                }),
                n.d(t, "TotalsTaxes", function () {
                    return C;
                }),
                n.d(t, "TotalsFees", function () {
                    return T;
                }),
                n.d(t, "TotalsWrapper", function () {
                    return P;
                }),
                n.d(t, "ExperimentalOrderMeta", function () {
                    return me;
                }),
                n.d(t, "ExperimentalDiscountsMeta", function () {
                    return he;
                }),
                n.d(t, "ExperimentalOrderShippingPackages", function () {
                    return ve;
                }),
                n.d(t, "Panel", function () {
                    return ye;
                }),
                n.d(t, "Button", function () {
                    return Ye;
                }),
                n.d(t, "Label", function () {
                    return Ze;
                }),
                n.d(t, "CheckboxControl", function () {
                    return Je;
                }),
                n.d(t, "mustContain", function () {
                    return Qe;
                }),
                n.d(t, "extensionCartUpdate", function () {
                    return nt;
                }),
                n.d(t, "hasValidFills", function () {
                    return ae;
                }),
                n.d(t, "useSlot", function () {
                    return ce;
                }),
                n.d(t, "createSlotFill", function () {
                    return le;
                }),
                n.d(t, "__experimentalRegisterCheckoutFilters", function () {
                    return ct;
                }),
                n.d(t, "__experimentalApplyCheckoutFilter", function () {
                    return mt;
                }),
                n.d(t, "hasInnerBlocks", function () {
                    return ht;
                }),
                n.d(t, "getRegisteredBlocks", function () {
                    return bt;
                }),
                n.d(t, "registerCheckoutBlock", function () {
                    return vt;
                }),
                n.d(t, "innerBlockAreas", function () {
                    return ft;
                }),
                n.d(t, "SlotFillProvider", function () {
                    return te;
                });
            var r = n(0),
                o = n(5),
                i = n.n(o),
                s = n(11),
                a = n.n(s),
                c = n(16),
                l = n.n(c);
            function u() {}
            function p(e) {
                return !!(e || "").match(/\d/);
            }
            function m(e) {
                return null == e;
            }
            function f(e) {
                return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
            }
            function d(e, t) {
                void 0 === t && (t = !0);
                var n = "-" === e[0],
                    r = n && t,
                    o = (e = e.replace("-", "")).split(".");
                return {
                    beforeDecimal: o[0],
                    afterDecimal: o[1] || "",
                    hasNagation: n,
                    addNegation: r,
                };
            }
            function h(e, t, n) {
                for (var r = "", o = n ? "0" : "", i = 0; i <= t - 1; i++)
                    r += e[i] || o;
                return r;
            }
            function b(e, t) {
                return Array(t + 1).join(e);
            }
            function g(e, t) {
                if (((e.value = e.value), null !== e)) {
                    if (e.createTextRange) {
                        var n = e.createTextRange();
                        return n.move("character", t), n.select(), !0;
                    }
                    return e.selectionStart || 0 === e.selectionStart
                        ? (e.focus(), e.setSelectionRange(t, t), !0)
                        : (e.focus(), !1);
                }
            }
            function v(e, t, n) {
                return Math.min(Math.max(e, t), n);
            }
            function O(e) {
                return Math.max(e.selectionStart, e.selectionEnd);
            }
            var w = {
                    displayType: "input",
                    decimalSeparator: ".",
                    thousandsGroupStyle: "thousand",
                    fixedDecimalScale: !1,
                    prefix: "",
                    suffix: "",
                    allowNegative: !0,
                    allowEmptyFormatting: !1,
                    allowLeadingZeros: !1,
                    isNumericString: !1,
                    type: "text",
                    onValueChange: u,
                    onChange: u,
                    onKeyDown: u,
                    onMouseUp: u,
                    onFocus: u,
                    onBlur: u,
                    isAllowed: function () {
                        return !0;
                    },
                },
                j = (function (e) {
                    function t(t) {
                        e.call(this, t);
                        var n = t.defaultValue;
                        this.validateProps();
                        var r = this.formatValueProp(n);
                        (this.state = {
                            value: r,
                            numAsString: this.removeFormatting(r),
                            mounted: !1,
                        }),
                            (this.selectionBeforeInput = {
                                selectionStart: 0,
                                selectionEnd: 0,
                            }),
                            (this.onChange = this.onChange.bind(this)),
                            (this.onKeyDown = this.onKeyDown.bind(this)),
                            (this.onMouseUp = this.onMouseUp.bind(this)),
                            (this.onFocus = this.onFocus.bind(this)),
                            (this.onBlur = this.onBlur.bind(this));
                    }
                    return (
                        e && (t.__proto__ = e),
                        (t.prototype = Object.create(e && e.prototype)),
                        (t.prototype.constructor = t),
                        (t.prototype.componentDidMount = function () {
                            this.setState({ mounted: !0 });
                        }),
                        (t.prototype.componentDidUpdate = function (e) {
                            this.updateValueIfRequired(e);
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            clearTimeout(this.focusTimeout),
                                clearTimeout(this.caretPositionTimeout);
                        }),
                        (t.prototype.updateValueIfRequired = function (e) {
                            var t = this.props,
                                n = this.state,
                                r = this.focusedElm,
                                o = n.value,
                                i = n.numAsString;
                            if ((void 0 === i && (i = ""), e !== t)) {
                                this.validateProps();
                                var s = this.formatNumString(i),
                                    a = m(t.value) ? s : this.formatValueProp(),
                                    c = this.removeFormatting(a),
                                    l = parseFloat(c),
                                    u = parseFloat(i);
                                (((isNaN(l) && isNaN(u)) || l === u) &&
                                    s === o &&
                                    (null !== r || a === o)) ||
                                    this.updateValue({
                                        formattedValue: a,
                                        numAsString: c,
                                        input: r,
                                        source: "prop",
                                        event: null,
                                    });
                            }
                        }),
                        (t.prototype.getFloatString = function (e) {
                            void 0 === e && (e = "");
                            var t = this.props.decimalScale,
                                n = this.getSeparators().decimalSeparator,
                                r = this.getNumberRegex(!0),
                                o = "-" === e[0];
                            o && (e = e.replace("-", "")),
                                n && 0 === t && (e = e.split(n)[0]);
                            var i = (e = (e.match(r) || [])
                                .join("")
                                .replace(n, ".")).indexOf(".");
                            return (
                                -1 !== i &&
                                    (e =
                                        e.substring(0, i) +
                                        "." +
                                        e
                                            .substring(i + 1, e.length)
                                            .replace(
                                                new RegExp(f(n), "g"),
                                                ""
                                            )),
                                o && (e = "-" + e),
                                e
                            );
                        }),
                        (t.prototype.getNumberRegex = function (e, t) {
                            var n = this.props,
                                r = n.format,
                                o = n.decimalScale,
                                i = n.customNumerals,
                                s = this.getSeparators().decimalSeparator;
                            return new RegExp(
                                "[0-9" +
                                    (i ? i.join("") : "") +
                                    "]" +
                                    (!s || 0 === o || t || r ? "" : "|" + f(s)),
                                e ? "g" : void 0
                            );
                        }),
                        (t.prototype.getSeparators = function () {
                            var e = this.props.decimalSeparator,
                                t = this.props,
                                n = t.thousandSeparator,
                                r = t.allowedDecimalSeparators;
                            return (
                                !0 === n && (n = ","),
                                r || (r = [e, "."]),
                                {
                                    decimalSeparator: e,
                                    thousandSeparator: n,
                                    allowedDecimalSeparators: r,
                                }
                            );
                        }),
                        (t.prototype.getMaskAtIndex = function (e) {
                            var t = this.props.mask;
                            return (
                                void 0 === t && (t = " "),
                                "string" == typeof t ? t : t[e] || " "
                            );
                        }),
                        (t.prototype.getValueObject = function (e, t) {
                            var n = parseFloat(t);
                            return {
                                formattedValue: e,
                                value: t,
                                floatValue: isNaN(n) ? void 0 : n,
                            };
                        }),
                        (t.prototype.validateProps = function () {
                            var e = this.props.mask,
                                t = this.getSeparators(),
                                n = t.decimalSeparator,
                                r = t.thousandSeparator;
                            if (n === r)
                                throw new Error(
                                    "\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: " +
                                        r +
                                        ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ' +
                                        n +
                                        " (default value for decimalSeparator is .)\n       "
                                );
                            if (
                                e &&
                                ("string" === e ? e : e.toString()).match(/\d/g)
                            )
                                throw new Error(
                                    "\n          Mask " +
                                        e +
                                        " should not contain numeric character;\n        "
                                );
                        }),
                        (t.prototype.setPatchedCaretPosition = function (
                            e,
                            t,
                            n
                        ) {
                            g(e, t),
                                (this.caretPositionTimeout = setTimeout(
                                    function () {
                                        e.value === n && g(e, t);
                                    },
                                    0
                                ));
                        }),
                        (t.prototype.correctCaretPosition = function (e, t, n) {
                            var r = this.props,
                                o = r.prefix,
                                i = r.suffix,
                                s = r.format;
                            if ("" === e) return 0;
                            if (((t = v(t, 0, e.length)), !s)) {
                                var a = "-" === e[0];
                                return v(
                                    t,
                                    o.length + (a ? 1 : 0),
                                    e.length - i.length
                                );
                            }
                            if ("function" == typeof s) return t;
                            if ("#" === s[t] && p(e[t])) return t;
                            if ("#" === s[t - 1] && p(e[t - 1])) return t;
                            var c = s.indexOf("#");
                            t = v(t, c, s.lastIndexOf("#") + 1);
                            for (
                                var l = s.substring(t, s.length).indexOf("#"),
                                    u = t,
                                    m = t + (-1 === l ? 0 : l);
                                u > c && ("#" !== s[u] || !p(e[u]));

                            )
                                u -= 1;
                            return !p(e[m]) ||
                                ("left" === n && t !== c) ||
                                t - u < m - t
                                ? p(e[u])
                                    ? u + 1
                                    : u
                                : m;
                        }),
                        (t.prototype.getCaretPosition = function (e, t, n) {
                            var r,
                                o,
                                i = this.props.format,
                                s = this.state.value,
                                a = this.getNumberRegex(!0),
                                c = (e.match(a) || []).join(""),
                                l = (t.match(a) || []).join("");
                            for (r = 0, o = 0; o < n; o++) {
                                var u = e[o] || "",
                                    p = t[r] || "";
                                if (
                                    (u.match(a) || u === p) &&
                                    ("0" !== u ||
                                        !p.match(a) ||
                                        "0" === p ||
                                        c.length === l.length)
                                ) {
                                    for (; u !== t[r] && r < t.length; ) r++;
                                    r++;
                                }
                            }
                            return (
                                "string" != typeof i || s || (r = t.length),
                                this.correctCaretPosition(t, r)
                            );
                        }),
                        (t.prototype.removePrefixAndSuffix = function (e) {
                            var t = this.props,
                                n = t.format,
                                r = t.prefix,
                                o = t.suffix;
                            if (!n && e) {
                                var i = "-" === e[0];
                                i && (e = e.substring(1, e.length));
                                var s = (e =
                                    r && 0 === e.indexOf(r)
                                        ? e.substring(r.length, e.length)
                                        : e).lastIndexOf(o);
                                (e =
                                    o && -1 !== s && s === e.length - o.length
                                        ? e.substring(0, s)
                                        : e),
                                    i && (e = "-" + e);
                            }
                            return e;
                        }),
                        (t.prototype.removePatternFormatting = function (e) {
                            for (
                                var t = this.props.format
                                        .split("#")
                                        .filter(function (e) {
                                            return "" !== e;
                                        }),
                                    n = 0,
                                    r = "",
                                    o = 0,
                                    i = t.length;
                                o <= i;
                                o++
                            ) {
                                var s = t[o] || "",
                                    a = o === i ? e.length : e.indexOf(s, n);
                                if (-1 === a) {
                                    r = e;
                                    break;
                                }
                                (r += e.substring(n, a)), (n = a + s.length);
                            }
                            return (
                                r.match(this.getNumberRegex(!0)) || []
                            ).join("");
                        }),
                        (t.prototype.removeFormatting = function (e) {
                            var t = this.props,
                                n = t.format,
                                r = t.removeFormatting;
                            return e
                                ? (n
                                      ? (e =
                                            "string" == typeof n
                                                ? this.removePatternFormatting(
                                                      e
                                                  )
                                                : "function" == typeof r
                                                ? r(e)
                                                : (
                                                      e.match(
                                                          this.getNumberRegex(
                                                              !0
                                                          )
                                                      ) || []
                                                  ).join(""))
                                      : ((e = this.removePrefixAndSuffix(e)),
                                        (e = this.getFloatString(e))),
                                  e)
                                : e;
                        }),
                        (t.prototype.formatWithPattern = function (e) {
                            for (
                                var t = this.props.format,
                                    n = 0,
                                    r = t.split(""),
                                    o = 0,
                                    i = t.length;
                                o < i;
                                o++
                            )
                                "#" === t[o] &&
                                    ((r[o] = e[n] || this.getMaskAtIndex(n)),
                                    (n += 1));
                            return r.join("");
                        }),
                        (t.prototype.formatAsNumber = function (e) {
                            var t = this.props,
                                n = t.decimalScale,
                                r = t.fixedDecimalScale,
                                o = t.prefix,
                                i = t.suffix,
                                s = t.allowNegative,
                                a = t.thousandsGroupStyle,
                                c = this.getSeparators(),
                                l = c.thousandSeparator,
                                u = c.decimalSeparator,
                                p = -1 !== e.indexOf(".") || (n && r),
                                m = d(e, s),
                                f = m.beforeDecimal,
                                b = m.afterDecimal,
                                g = m.addNegation;
                            return (
                                void 0 !== n && (b = h(b, n, r)),
                                l &&
                                    (f = (function (e, t, n) {
                                        var r = (function (e) {
                                                switch (e) {
                                                    case "lakh":
                                                        return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                                                    case "wan":
                                                        return /(\d)(?=(\d{4})+(?!\d))/g;
                                                    case "thousand":
                                                    default:
                                                        return /(\d)(?=(\d{3})+(?!\d))/g;
                                                }
                                            })(n),
                                            o = e.search(/[1-9]/);
                                        return (
                                            (o = -1 === o ? e.length : o),
                                            e.substring(0, o) +
                                                e
                                                    .substring(o, e.length)
                                                    .replace(r, "$1" + t)
                                        );
                                    })(f, l, a)),
                                o && (f = o + f),
                                i && (b += i),
                                g && (f = "-" + f),
                                f + ((p && u) || "") + b
                            );
                        }),
                        (t.prototype.formatNumString = function (e) {
                            void 0 === e && (e = "");
                            var t = this.props,
                                n = t.format,
                                r = t.allowEmptyFormatting,
                                o = t.customNumerals,
                                i = e;
                            if (o && 10 === o.length) {
                                var s = new RegExp("[" + o.join("") + "]", "g");
                                i = e.replace(s, function (e) {
                                    return o.indexOf(e).toString();
                                });
                            }
                            return "" !== e || r
                                ? "-" !== e || n
                                    ? "string" == typeof n
                                        ? this.formatWithPattern(i)
                                        : "function" == typeof n
                                        ? n(i)
                                        : this.formatAsNumber(i)
                                    : "-"
                                : "";
                        }),
                        (t.prototype.formatValueProp = function (e) {
                            var t = this.props,
                                n = t.format,
                                r = t.decimalScale,
                                o = t.fixedDecimalScale,
                                i = t.allowEmptyFormatting,
                                s = this.props,
                                a = s.value,
                                c = s.isNumericString,
                                l = !(a = m(a) ? e : a) && 0 !== a;
                            return (
                                l && i && (a = ""),
                                l && !i
                                    ? ""
                                    : ("number" == typeof a &&
                                          ((a = (function (e) {
                                              var t =
                                                  "-" === (e += "")[0]
                                                      ? "-"
                                                      : "";
                                              t && (e = e.substring(1));
                                              var n = e.split(/[eE]/g),
                                                  r = n[0],
                                                  o = n[1];
                                              if (!(o = Number(o)))
                                                  return t + r;
                                              var i = 1 + o,
                                                  s = (r = r.replace(".", ""))
                                                      .length;
                                              return (
                                                  i < 0
                                                      ? (r =
                                                            "0." +
                                                            b(
                                                                "0",
                                                                Math.abs(i)
                                                            ) +
                                                            r)
                                                      : i >= s
                                                      ? (r += b("0", i - s))
                                                      : (r =
                                                            (r.substring(
                                                                0,
                                                                i
                                                            ) || "0") +
                                                            "." +
                                                            r.substring(i)),
                                                  t + r
                                              );
                                          })(a)),
                                          (c = !0)),
                                      "Infinity" === a && c && (a = ""),
                                      c &&
                                          !n &&
                                          "number" == typeof r &&
                                          (a = (function (e, t, n) {
                                              if (-1 !== ["", "-"].indexOf(e))
                                                  return e;
                                              var r =
                                                      -1 !== e.indexOf(".") &&
                                                      t,
                                                  o = d(e),
                                                  i = o.beforeDecimal,
                                                  s = o.afterDecimal,
                                                  a = o.hasNagation,
                                                  c = parseFloat(
                                                      "0." + (s || "0")
                                                  ),
                                                  l = (
                                                      s.length <= t
                                                          ? "0." + s
                                                          : c.toFixed(t)
                                                  ).split(".");
                                              return (
                                                  (a ? "-" : "") +
                                                  i
                                                      .split("")
                                                      .reverse()
                                                      .reduce(function (
                                                          e,
                                                          t,
                                                          n
                                                      ) {
                                                          return e.length > n
                                                              ? (
                                                                    Number(
                                                                        e[0]
                                                                    ) +
                                                                    Number(t)
                                                                ).toString() +
                                                                    e.substring(
                                                                        1,
                                                                        e.length
                                                                    )
                                                              : t + e;
                                                      },
                                                      l[0]) +
                                                  (r ? "." : "") +
                                                  h(
                                                      l[1] || "",
                                                      Math.min(t, s.length),
                                                      n
                                                  )
                                              );
                                          })(a, r, o)),
                                      c
                                          ? this.formatNumString(a)
                                          : this.formatInput(a))
                            );
                        }),
                        (t.prototype.formatNegation = function (e) {
                            void 0 === e && (e = "");
                            var t = this.props.allowNegative,
                                n = new RegExp("(-)"),
                                r = new RegExp("(-)(.)*(-)"),
                                o = n.test(e),
                                i = r.test(e);
                            return (
                                (e = e.replace(/-/g, "")),
                                o && !i && t && (e = "-" + e),
                                e
                            );
                        }),
                        (t.prototype.formatInput = function (e) {
                            return (
                                void 0 === e && (e = ""),
                                this.props.format ||
                                    ((e = this.removePrefixAndSuffix(e)),
                                    (e = this.formatNegation(e))),
                                (e = this.removeFormatting(e)),
                                this.formatNumString(e)
                            );
                        }),
                        (t.prototype.isCharacterAFormat = function (e, t) {
                            var n = this.props,
                                r = n.format,
                                o = n.prefix,
                                i = n.suffix,
                                s = n.decimalScale,
                                a = n.fixedDecimalScale,
                                c = this.getSeparators().decimalSeparator;
                            return (
                                ("string" == typeof r && "#" !== r[e]) ||
                                !(
                                    r ||
                                    !(
                                        e < o.length ||
                                        e >= t.length - i.length ||
                                        (s && a && t[e] === c)
                                    )
                                )
                            );
                        }),
                        (t.prototype.correctInputValue = function (e, t, n) {
                            var r = this,
                                o = this.props,
                                i = o.format,
                                s = o.allowNegative,
                                a = o.prefix,
                                c = o.suffix,
                                l = o.decimalScale,
                                u = this.getSeparators(),
                                p = u.allowedDecimalSeparators,
                                m = u.decimalSeparator,
                                f = this.state.numAsString || "",
                                h = this.selectionBeforeInput,
                                b = h.selectionStart,
                                g = h.selectionEnd,
                                v = (function (e, t) {
                                    for (
                                        var n = 0,
                                            r = 0,
                                            o = e.length,
                                            i = t.length;
                                        e[n] === t[n] && n < o;

                                    )
                                        n++;
                                    for (
                                        ;
                                        e[o - 1 - r] === t[i - 1 - r] &&
                                        i - r > n &&
                                        o - r > n;

                                    )
                                        r++;
                                    return { start: n, end: o - r };
                                })(t, n),
                                O = v.start,
                                w = v.end;
                            if (!i && O === w && -1 !== p.indexOf(n[b])) {
                                var j = 0 === l ? "" : m;
                                return (
                                    n.substr(0, b) +
                                    j +
                                    n.substr(b + 1, n.length)
                                );
                            }
                            var y = i ? 0 : a.length,
                                E = t.length - (i ? 0 : c.length);
                            if (
                                n.length > t.length ||
                                !n.length ||
                                O === w ||
                                (0 === b && g === t.length) ||
                                (0 === O && w === t.length) ||
                                (b === y && g === E)
                            )
                                return n;
                            var S = t.substr(O, w - O);
                            if (
                                [].concat(S).find(function (e, n) {
                                    return r.isCharacterAFormat(n + O, t);
                                })
                            ) {
                                var x = t.substr(O),
                                    k = {},
                                    N = [];
                                [].concat(x).forEach(function (e, n) {
                                    r.isCharacterAFormat(n + O, t)
                                        ? (k[n] = e)
                                        : n > S.length - 1 && N.push(e);
                                }),
                                    Object.keys(k).forEach(function (e) {
                                        N.length > e
                                            ? N.splice(e, 0, k[e])
                                            : N.push(k[e]);
                                    }),
                                    (n = t.substr(0, O) + N.join(""));
                            }
                            if (!i) {
                                var _ = this.removeFormatting(n),
                                    F = d(_, s),
                                    C = F.beforeDecimal,
                                    T = F.afterDecimal,
                                    P = F.addNegation,
                                    R = e < n.indexOf(m) + 1;
                                if (
                                    _.length < f.length &&
                                    R &&
                                    "" === C &&
                                    !parseFloat(T)
                                )
                                    return P ? "-" : "";
                            }
                            return n;
                        }),
                        (t.prototype.updateValue = function (e) {
                            var t = e.formattedValue,
                                n = e.input,
                                r = e.setCaretPosition;
                            void 0 === r && (r = !0);
                            var o = e.source,
                                i = e.event,
                                s = e.numAsString,
                                a = e.caretPos,
                                c = this.props.onValueChange,
                                l = this.state.value;
                            if (n) {
                                if (void 0 === a && r) {
                                    var u = e.inputValue || n.value,
                                        p = O(n);
                                    (n.value = t),
                                        (a = this.getCaretPosition(u, t, p));
                                }
                                (n.value = t),
                                    r && this.setPatchedCaretPosition(n, a, t);
                            }
                            void 0 === s && (s = this.removeFormatting(t)),
                                t !== l &&
                                    (this.setState({
                                        value: t,
                                        numAsString: s,
                                    }),
                                    c(this.getValueObject(t, s), {
                                        event: i,
                                        source: o,
                                    }));
                        }),
                        (t.prototype.onChange = function (e) {
                            var t = e.target,
                                n = t.value,
                                r = this.state,
                                o = this.props,
                                i = o.isAllowed,
                                s = r.value || "",
                                a = O(t);
                            n = this.correctInputValue(a, s, n);
                            var c = this.formatInput(n) || "",
                                l = this.removeFormatting(c),
                                u = i(this.getValueObject(c, l));
                            u || (c = s),
                                this.updateValue({
                                    formattedValue: c,
                                    numAsString: l,
                                    inputValue: n,
                                    input: t,
                                    event: e,
                                    source: "event",
                                }),
                                u && o.onChange(e);
                        }),
                        (t.prototype.onBlur = function (e) {
                            var t = this.props,
                                n = this.state,
                                r = t.format,
                                o = t.onBlur,
                                i = t.allowLeadingZeros,
                                s = n.numAsString,
                                a = n.value;
                            if (
                                ((this.focusedElm = null),
                                clearTimeout(this.focusTimeout),
                                clearTimeout(this.caretPositionTimeout),
                                !r)
                            ) {
                                isNaN(parseFloat(s)) && (s = ""),
                                    i ||
                                        (s = (function (e) {
                                            if (!e) return e;
                                            var t = "-" === e[0];
                                            t && (e = e.substring(1, e.length));
                                            var n = e.split("."),
                                                r =
                                                    n[0].replace(/^0+/, "") ||
                                                    "0",
                                                o = n[1] || "";
                                            return (
                                                (t ? "-" : "") +
                                                r +
                                                (o ? "." + o : "")
                                            );
                                        })(s));
                                var c = this.formatNumString(s);
                                if (c !== a)
                                    return (
                                        this.updateValue({
                                            formattedValue: c,
                                            numAsString: s,
                                            input: e.target,
                                            setCaretPosition: !1,
                                            event: e,
                                            source: "event",
                                        }),
                                        void o(e)
                                    );
                            }
                            o(e);
                        }),
                        (t.prototype.onKeyDown = function (e) {
                            var t,
                                n = e.target,
                                r = e.key,
                                o = n.selectionStart,
                                i = n.selectionEnd,
                                s = n.value;
                            void 0 === s && (s = "");
                            var a = this.props,
                                c = a.decimalScale,
                                l = a.fixedDecimalScale,
                                u = a.prefix,
                                p = a.suffix,
                                m = a.format,
                                f = a.onKeyDown,
                                d = void 0 !== c && l,
                                h = this.getNumberRegex(!1, d),
                                b = new RegExp("-"),
                                g = "string" == typeof m;
                            if (
                                ((this.selectionBeforeInput = {
                                    selectionStart: o,
                                    selectionEnd: i,
                                }),
                                "ArrowLeft" === r || "Backspace" === r
                                    ? (t = o - 1)
                                    : "ArrowRight" === r
                                    ? (t = o + 1)
                                    : "Delete" === r && (t = o),
                                void 0 !== t && o === i)
                            ) {
                                var v = t,
                                    O = g ? m.indexOf("#") : u.length,
                                    w = g
                                        ? m.lastIndexOf("#") + 1
                                        : s.length - p.length;
                                if ("ArrowLeft" === r || "ArrowRight" === r) {
                                    var j =
                                        "ArrowLeft" === r ? "left" : "right";
                                    v = this.correctCaretPosition(s, t, j);
                                } else if (
                                    "Delete" !== r ||
                                    h.test(s[t]) ||
                                    b.test(s[t])
                                ) {
                                    if ("Backspace" === r && !h.test(s[t]))
                                        if (
                                            o <= O + 1 &&
                                            "-" === s[0] &&
                                            void 0 === m
                                        ) {
                                            var y = s.substring(1);
                                            this.updateValue({
                                                formattedValue: y,
                                                caretPos: v,
                                                input: n,
                                                event: e,
                                                source: "event",
                                            });
                                        } else if (!b.test(s[t])) {
                                            for (; !h.test(s[v - 1]) && v > O; )
                                                v--;
                                            v = this.correctCaretPosition(
                                                s,
                                                v,
                                                "left"
                                            );
                                        }
                                } else for (; !h.test(s[v]) && v < w; ) v++;
                                (v !== t || t < O || t > w) &&
                                    (e.preventDefault(),
                                    this.setPatchedCaretPosition(n, v, s)),
                                    e.isUnitTestRun &&
                                        this.setPatchedCaretPosition(n, v, s),
                                    f(e);
                            } else f(e);
                        }),
                        (t.prototype.onMouseUp = function (e) {
                            var t = e.target,
                                n = t.selectionStart,
                                r = t.selectionEnd,
                                o = t.value;
                            if ((void 0 === o && (o = ""), n === r)) {
                                var i = this.correctCaretPosition(o, n);
                                i !== n &&
                                    this.setPatchedCaretPosition(t, i, o);
                            }
                            this.props.onMouseUp(e);
                        }),
                        (t.prototype.onFocus = function (e) {
                            var t = this;
                            e.persist(),
                                (this.focusedElm = e.target),
                                (this.focusTimeout = setTimeout(function () {
                                    var n = e.target,
                                        r = n.selectionStart,
                                        o = n.selectionEnd,
                                        i = n.value;
                                    void 0 === i && (i = "");
                                    var s = t.correctCaretPosition(i, r);
                                    s === r ||
                                        (0 === r && o === i.length) ||
                                        t.setPatchedCaretPosition(n, s, i),
                                        t.props.onFocus(e);
                                }, 0));
                        }),
                        (t.prototype.render = function () {
                            var e = this.props,
                                t = e.type,
                                n = e.displayType,
                                r = e.customInput,
                                o = e.renderText,
                                i = e.getInputRef,
                                s = e.format,
                                a =
                                    (e.thousandSeparator,
                                    e.decimalSeparator,
                                    e.allowedDecimalSeparators,
                                    e.thousandsGroupStyle,
                                    e.decimalScale,
                                    e.fixedDecimalScale,
                                    e.prefix,
                                    e.suffix,
                                    e.removeFormatting,
                                    e.mask,
                                    e.defaultValue,
                                    e.isNumericString,
                                    e.allowNegative,
                                    e.allowEmptyFormatting,
                                    e.allowLeadingZeros,
                                    e.onValueChange,
                                    e.isAllowed,
                                    e.customNumerals,
                                    e.onChange,
                                    e.onKeyDown,
                                    e.onMouseUp,
                                    e.onFocus,
                                    e.onBlur,
                                    e.value,
                                    (function (e, t) {
                                        var n = {};
                                        for (var r in e)
                                            Object.prototype.hasOwnProperty.call(
                                                e,
                                                r
                                            ) &&
                                                -1 === t.indexOf(r) &&
                                                (n[r] = e[r]);
                                        return n;
                                    })(e, [
                                        "type",
                                        "displayType",
                                        "customInput",
                                        "renderText",
                                        "getInputRef",
                                        "format",
                                        "thousandSeparator",
                                        "decimalSeparator",
                                        "allowedDecimalSeparators",
                                        "thousandsGroupStyle",
                                        "decimalScale",
                                        "fixedDecimalScale",
                                        "prefix",
                                        "suffix",
                                        "removeFormatting",
                                        "mask",
                                        "defaultValue",
                                        "isNumericString",
                                        "allowNegative",
                                        "allowEmptyFormatting",
                                        "allowLeadingZeros",
                                        "onValueChange",
                                        "isAllowed",
                                        "customNumerals",
                                        "onChange",
                                        "onKeyDown",
                                        "onMouseUp",
                                        "onFocus",
                                        "onBlur",
                                        "value",
                                    ])),
                                c = this.state,
                                u = c.value,
                                p =
                                    c.mounted &&
                                    (function (e) {
                                        return (
                                            e ||
                                            ("undefined" != typeof navigator &&
                                                !(
                                                    navigator.platform &&
                                                    /iPhone|iPod/.test(
                                                        navigator.platform
                                                    )
                                                ))
                                        );
                                    })(s)
                                        ? "numeric"
                                        : void 0,
                                m = Object.assign({ inputMode: p }, a, {
                                    type: t,
                                    value: u,
                                    onChange: this.onChange,
                                    onKeyDown: this.onKeyDown,
                                    onMouseUp: this.onMouseUp,
                                    onFocus: this.onFocus,
                                    onBlur: this.onBlur,
                                });
                            if ("text" === n)
                                return o
                                    ? o(u, a) || null
                                    : l.a.createElement(
                                          "span",
                                          Object.assign({}, a, { ref: i }),
                                          u
                                      );
                            if (r) {
                                var f = r;
                                return l.a.createElement(
                                    f,
                                    Object.assign({}, m, { ref: i })
                                );
                            }
                            return l.a.createElement(
                                "input",
                                Object.assign({}, m, { ref: i })
                            );
                        }),
                        t
                    );
                })(l.a.Component);
            j.defaultProps = w;
            var y = j;
            n(135);
            const E = (e) => ({
                thousandSeparator: e.thousandSeparator,
                decimalSeparator: e.decimalSeparator,
                decimalScale: e.minorUnit,
                fixedDecimalScale: !0,
                prefix: e.prefix,
                suffix: e.suffix,
                isNumericString: !0,
            });
            var S = (e) => {
                let {
                    className: t,
                    value: n,
                    currency: o,
                    onValueChange: s,
                    displayType: c = "text",
                    ...l
                } = e;
                const u = "string" == typeof n ? parseInt(n, 10) : n;
                if (!Number.isFinite(u)) return null;
                const p = u / 10 ** o.minorUnit;
                if (!Number.isFinite(p)) return null;
                const m = i()(
                        "wc-block-formatted-money-amount",
                        "wc-block-components-formatted-money-amount",
                        t
                    ),
                    f = {
                        ...l,
                        ...E(o),
                        value: void 0,
                        currency: void 0,
                        onValueChange: void 0,
                    },
                    d = s
                        ? (e) => {
                              const t = +e.value * 10 ** o.minorUnit;
                              s(t);
                          }
                        : () => {};
                return Object(r.createElement)(
                    y,
                    a()({ className: m, displayType: c }, f, {
                        value: p,
                        onValueChange: d,
                    })
                );
            };
            n(134);
            const x = (e) => {
                let { value: t, currency: n } = e;
                return Object(r.isValidElement)(t)
                    ? Object(r.createElement)(
                          "div",
                          {
                              className:
                                  "wc-block-components-totals-item__value",
                          },
                          t
                      )
                    : Number.isFinite(t)
                    ? Object(r.createElement)(S, {
                          className: "wc-block-components-totals-item__value",
                          currency: n || {},
                          value: t,
                      })
                    : null;
            };
            var k = (e) => {
                    let {
                        className: t,
                        currency: n,
                        label: o,
                        value: s,
                        description: a,
                    } = e;
                    return Object(r.createElement)(
                        "div",
                        {
                            className: i()(
                                "wc-block-components-totals-item",
                                t
                            ),
                        },
                        Object(r.createElement)(
                            "span",
                            {
                                className:
                                    "wc-block-components-totals-item__label",
                            },
                            o
                        ),
                        Object(r.createElement)(x, { value: s, currency: n }),
                        Object(r.createElement)(
                            "div",
                            {
                                className:
                                    "wc-block-components-totals-item__description",
                            },
                            a
                        )
                    );
                },
                N = n(1),
                _ = n(3),
                F = (e) => {
                    let { currency: t, values: n, className: o } = e;
                    const { total_items: i, total_items_tax: s } = n,
                        a = parseInt(i, 10),
                        c = parseInt(s, 10);
                    return Object(r.createElement)(k, {
                        className: o,
                        currency: t,
                        label: Object(N.__)("Subtotal", "woocommerce"),
                        value: Object(_.getSetting)(
                            "displayCartPricesIncludingTax",
                            !1
                        )
                            ? a + c
                            : a,
                    });
                },
                C = (e) => {
                    let {
                        currency: t,
                        values: n,
                        className: o,
                        showRateAfterTaxName: s,
                    } = e;
                    const { total_tax: a, tax_lines: c } = n;
                    if (
                        !Object(_.getSetting)("taxesEnabled", !0) &&
                        parseInt(a, 10) <= 0
                    )
                        return null;
                    const l = Object(_.getSetting)("displayItemizedTaxes", !1),
                        u =
                            l && c.length > 0
                                ? Object(r.createElement)(
                                      r.Fragment,
                                      null,
                                      c.map((e, n) => {
                                          let {
                                              name: a,
                                              rate: c,
                                              price: l,
                                          } = e;
                                          const u = `${a}${s ? " " + c : ""}`;
                                          return Object(r.createElement)(k, {
                                              key: "tax-line-" + n,
                                              className: i()(
                                                  "wc-block-components-totals-taxes",
                                                  o
                                              ),
                                              currency: t,
                                              label: u,
                                              value: parseInt(l, 10),
                                          });
                                      }),
                                      " "
                                  )
                                : null;
                    return l
                        ? u
                        : Object(r.createElement)(
                              r.Fragment,
                              null,
                              Object(r.createElement)(k, {
                                  className: i()(
                                      "wc-block-components-totals-taxes",
                                      o
                                  ),
                                  currency: t,
                                  label: Object(N.__)("Taxes", "woocommerce"),
                                  value: parseInt(a, 10),
                                  description: null,
                              })
                          );
                },
                T = (e) => {
                    let { currency: t, cartFees: n, className: o } = e;
                    return Object(r.createElement)(
                        r.Fragment,
                        null,
                        n.map((e, n) => {
                            let { id: s, name: a, totals: c } = e;
                            const l = parseInt(c.total, 10);
                            if (!l) return null;
                            const u = parseInt(c.total_tax, 10);
                            return Object(r.createElement)(k, {
                                key: s || `${n}-${a}`,
                                className: i()(
                                    "wc-block-components-totals-fees",
                                    o
                                ),
                                currency: t,
                                label: a || Object(N.__)("Fee", "woocommerce"),
                                value: Object(_.getSetting)(
                                    "displayCartPricesIncludingTax",
                                    !1
                                )
                                    ? l + u
                                    : l,
                            });
                        })
                    );
                };
            n(136);
            var P = (e) => {
                    let { children: t, slotWrapper: n = !1, className: o } = e;
                    return c.Children.count(t)
                        ? Object(r.createElement)(
                              "div",
                              {
                                  className: i()(
                                      o,
                                      "wc-block-components-totals-wrapper",
                                      { "slot-wrapper": n }
                                  ),
                              },
                              t
                          )
                        : null;
                },
                R = n(8),
                M = n.n(R),
                A = n(6),
                D = n(22);
            function L(e) {
                const t = Object(r.useContext)(D.a),
                    n = t.slots[e] || {},
                    o = t.fills[e],
                    i = Object(r.useMemo)(() => o || [], [o]);
                return {
                    ...n,
                    updateSlot: Object(r.useCallback)(
                        (n) => {
                            t.updateSlot(e, n);
                        },
                        [e, t.updateSlot]
                    ),
                    unregisterSlot: Object(r.useCallback)(
                        (n) => {
                            t.unregisterSlot(e, n);
                        },
                        [e, t.unregisterSlot]
                    ),
                    fills: i,
                    registerFill: Object(r.useCallback)(
                        (n) => {
                            t.registerFill(e, n);
                        },
                        [e, t.registerFill]
                    ),
                    unregisterFill: Object(r.useCallback)(
                        (n) => {
                            t.unregisterFill(e, n);
                        },
                        [e, t.unregisterFill]
                    ),
                };
            }
            var I = n(10),
                V = n(4),
                B = Object(r.createContext)({
                    registerSlot: () => {},
                    unregisterSlot: () => {},
                    registerFill: () => {},
                    unregisterFill: () => {},
                    getSlot: () => {},
                    getFills: () => {},
                    subscribe: () => {},
                });
            function U({
                name: e,
                children: t,
                registerFill: n,
                unregisterFill: o,
            }) {
                const i = ((e) => {
                        const { getSlot: t, subscribe: n } = Object(
                                r.useContext
                            )(B),
                            [o, i] = Object(r.useState)(t(e));
                        return (
                            Object(r.useEffect)(
                                () => (
                                    i(t(e)),
                                    n(() => {
                                        i(t(e));
                                    })
                                ),
                                [e]
                            ),
                            o
                        );
                    })(e),
                    s = Object(r.useRef)({ name: e, children: t });
                return (
                    Object(r.useLayoutEffect)(
                        () => (n(e, s.current), () => o(e, s.current)),
                        []
                    ),
                    Object(r.useLayoutEffect)(() => {
                        (s.current.children = t), i && i.forceUpdate();
                    }, [t]),
                    Object(r.useLayoutEffect)(() => {
                        e !== s.current.name &&
                            (o(s.current.name, s.current),
                            (s.current.name = e),
                            n(e, s.current));
                    }, [e]),
                    i && i.node
                        ? (Object(V.isFunction)(t) &&
                              (t = t(i.props.fillProps)),
                          Object(r.createPortal)(t, i.node))
                        : null
                );
            }
            var W = (e) =>
                Object(r.createElement)(
                    B.Consumer,
                    null,
                    ({ registerFill: t, unregisterFill: n }) =>
                        Object(r.createElement)(
                            U,
                            Object(I.a)({}, e, {
                                registerFill: t,
                                unregisterFill: n,
                            })
                        )
                );
            class H extends r.Component {
                constructor() {
                    super(...arguments),
                        (this.isUnmounted = !1),
                        (this.bindNode = this.bindNode.bind(this));
                }
                componentDidMount() {
                    const { registerSlot: e } = this.props;
                    e(this.props.name, this);
                }
                componentWillUnmount() {
                    const { unregisterSlot: e } = this.props;
                    (this.isUnmounted = !0), e(this.props.name, this);
                }
                componentDidUpdate(e) {
                    const {
                        name: t,
                        unregisterSlot: n,
                        registerSlot: r,
                    } = this.props;
                    e.name !== t && (n(e.name), r(t, this));
                }
                bindNode(e) {
                    this.node = e;
                }
                forceUpdate() {
                    this.isUnmounted || super.forceUpdate();
                }
                render() {
                    const {
                            children: e,
                            name: t,
                            fillProps: n = {},
                            getFills: o,
                        } = this.props,
                        i = Object(V.map)(o(t, this), (e) => {
                            const t = Object(V.isFunction)(e.children)
                                ? e.children(n)
                                : e.children;
                            return r.Children.map(t, (e, t) => {
                                if (!e || Object(V.isString)(e)) return e;
                                const n = e.key || t;
                                return Object(r.cloneElement)(e, { key: n });
                            });
                        }).filter(Object(V.negate)(r.isEmptyElement));
                    return Object(r.createElement)(
                        r.Fragment,
                        null,
                        Object(V.isFunction)(e) ? e(i) : i
                    );
                }
            }
            var z = (e) =>
                Object(r.createElement)(
                    B.Consumer,
                    null,
                    ({ registerSlot: t, unregisterSlot: n, getFills: o }) =>
                        Object(r.createElement)(
                            H,
                            Object(I.a)({}, e, {
                                registerSlot: t,
                                unregisterSlot: n,
                                getFills: o,
                            })
                        )
                );
            function $() {
                const [, e] = Object(r.useState)({}),
                    t = Object(r.useRef)(!0);
                return (
                    Object(r.useEffect)(
                        () => () => {
                            t.current = !1;
                        },
                        []
                    ),
                    () => {
                        t.current && e({});
                    }
                );
            }
            function K({ name: e, children: t }) {
                const n = L(e),
                    o = Object(r.useRef)({ rerender: $() });
                return (
                    Object(r.useEffect)(
                        () => (
                            n.registerFill(o),
                            () => {
                                n.unregisterFill(o);
                            }
                        ),
                        [n.registerFill, n.unregisterFill]
                    ),
                    n.ref && n.ref.current
                        ? ("function" == typeof t && (t = t(n.fillProps)),
                          Object(r.createPortal)(t, n.ref.current))
                        : null
                );
            }
            var G = n(14),
                q = Object(r.forwardRef)(function (
                    { name: e, fillProps: t = {}, as: n = "div", ...o },
                    i
                ) {
                    const s = Object(r.useContext)(D.a),
                        a = Object(r.useRef)();
                    return (
                        Object(r.useLayoutEffect)(
                            () => (
                                s.registerSlot(e, a, t),
                                () => {
                                    s.unregisterSlot(e, a);
                                }
                            ),
                            [s.registerSlot, s.unregisterSlot, e]
                        ),
                        Object(r.useLayoutEffect)(() => {
                            s.updateSlot(e, t);
                        }),
                        Object(r.createElement)(
                            n,
                            Object(I.a)(
                                { ref: Object(G.useMergeRefs)([i, a]) },
                                o
                            )
                        )
                    );
                }),
                Y = n(12),
                Z = n.n(Y);
            function X({ children: e }) {
                const t = (function () {
                    const [e, t] = Object(r.useState)({}),
                        [n, o] = Object(r.useState)({}),
                        i = Object(r.useCallback)((e, n, r) => {
                            t((t) => {
                                const o = t[e] || {};
                                return {
                                    ...t,
                                    [e]: {
                                        ...o,
                                        ref: n || o.ref,
                                        fillProps: r || o.fillProps || {},
                                    },
                                };
                            });
                        }, []),
                        s = Object(r.useCallback)((e, n) => {
                            t((t) => {
                                const { [e]: r, ...o } = t;
                                return (null == r ? void 0 : r.ref) === n
                                    ? o
                                    : t;
                            });
                        }, []),
                        a = Object(r.useCallback)(
                            (t, r) => {
                                const o = e[t];
                                if (o && !Z()(o.fillProps, r)) {
                                    o.fillProps = r;
                                    const e = n[t];
                                    e && e.map((e) => e.current.rerender());
                                }
                            },
                            [e, n]
                        ),
                        c = Object(r.useCallback)((e, t) => {
                            o((n) => ({ ...n, [e]: [...(n[e] || []), t] }));
                        }, []),
                        l = Object(r.useCallback)((e, t) => {
                            o((n) =>
                                n[e]
                                    ? { ...n, [e]: n[e].filter((e) => e !== t) }
                                    : n
                            );
                        }, []);
                    return Object(r.useMemo)(
                        () => ({
                            slots: e,
                            fills: n,
                            registerSlot: i,
                            updateSlot: a,
                            unregisterSlot: s,
                            registerFill: c,
                            unregisterFill: l,
                        }),
                        [e, n, i, a, s, c, l]
                    );
                })();
                return Object(r.createElement)(D.a.Provider, { value: t }, e);
            }
            class J extends r.Component {
                constructor() {
                    super(...arguments),
                        (this.registerSlot = this.registerSlot.bind(this)),
                        (this.registerFill = this.registerFill.bind(this)),
                        (this.unregisterSlot = this.unregisterSlot.bind(this)),
                        (this.unregisterFill = this.unregisterFill.bind(this)),
                        (this.getSlot = this.getSlot.bind(this)),
                        (this.getFills = this.getFills.bind(this)),
                        (this.hasFills = this.hasFills.bind(this)),
                        (this.subscribe = this.subscribe.bind(this)),
                        (this.slots = {}),
                        (this.fills = {}),
                        (this.listeners = []),
                        (this.contextValue = {
                            registerSlot: this.registerSlot,
                            unregisterSlot: this.unregisterSlot,
                            registerFill: this.registerFill,
                            unregisterFill: this.unregisterFill,
                            getSlot: this.getSlot,
                            getFills: this.getFills,
                            hasFills: this.hasFills,
                            subscribe: this.subscribe,
                        });
                }
                registerSlot(e, t) {
                    const n = this.slots[e];
                    (this.slots[e] = t),
                        this.triggerListeners(),
                        this.forceUpdateSlot(e),
                        n && n.forceUpdate();
                }
                registerFill(e, t) {
                    (this.fills[e] = [...(this.fills[e] || []), t]),
                        this.forceUpdateSlot(e);
                }
                unregisterSlot(e, t) {
                    this.slots[e] === t &&
                        (delete this.slots[e], this.triggerListeners());
                }
                unregisterFill(e, t) {
                    (this.fills[e] = Object(V.without)(this.fills[e], t)),
                        this.forceUpdateSlot(e);
                }
                getSlot(e) {
                    return this.slots[e];
                }
                getFills(e, t) {
                    return this.slots[e] !== t ? [] : this.fills[e];
                }
                hasFills(e) {
                    return this.fills[e] && !!this.fills[e].length;
                }
                forceUpdateSlot(e) {
                    const t = this.getSlot(e);
                    t && t.forceUpdate();
                }
                triggerListeners() {
                    this.listeners.forEach((e) => e());
                }
                subscribe(e) {
                    return (
                        this.listeners.push(e),
                        () => {
                            this.listeners = Object(V.without)(
                                this.listeners,
                                e
                            );
                        }
                    );
                }
                render() {
                    return Object(r.createElement)(
                        B.Provider,
                        { value: this.contextValue },
                        this.props.children
                    );
                }
            }
            function Q(e) {
                return Object(r.createElement)(
                    r.Fragment,
                    null,
                    Object(r.createElement)(W, e),
                    Object(r.createElement)(K, e)
                );
            }
            const ee = Object(r.forwardRef)(
                ({ bubblesVirtually: e, ...t }, n) =>
                    e
                        ? Object(r.createElement)(
                              q,
                              Object(I.a)({}, t, { ref: n })
                          )
                        : Object(r.createElement)(z, t)
            );
            function te({ children: e, ...t }) {
                return Object(r.createElement)(
                    J,
                    t,
                    Object(r.createElement)(X, null, e)
                );
            }
            function ne(e) {
                const t = (t) =>
                    Object(r.createElement)(Q, Object(I.a)({ name: e }, t));
                t.displayName = e + "Fill";
                const n = (t) =>
                    Object(r.createElement)(ee, Object(I.a)({ name: e }, t));
                return (
                    (n.displayName = e + "Slot"),
                    (n.__unstableName = e),
                    { Fill: t, Slot: n }
                );
            }
            var re = n(20),
                oe = n.n(re);
            class ie extends c.Component {
                constructor() {
                    super(...arguments),
                        oe()(this, "state", { errorMessage: "", hasError: !1 });
                }
                static getDerivedStateFromError(e) {
                    return void 0 !== e.statusText && void 0 !== e.status
                        ? {
                              errorMessage: Object(r.createElement)(
                                  r.Fragment,
                                  null,
                                  Object(r.createElement)(
                                      "strong",
                                      null,
                                      e.status
                                  ),
                                  ": " + e.statusText
                              ),
                              hasError: !0,
                          }
                        : { errorMessage: e.message, hasError: !0 };
                }
                render() {
                    const { renderError: e } = this.props,
                        { errorMessage: t, hasError: n } = this.state;
                    return n
                        ? "function" == typeof e
                            ? e(t)
                            : Object(r.createElement)("p", null, t)
                        : this.props.children;
                }
            }
            var se = ie;
            const ae = (e) => Array.isArray(e) && e.filter(Boolean).length > 0;
            let ce;
            ce = L;
            const le = function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null;
                    const { Fill: n, Slot: o } = ne(e),
                        i = (e) => {
                            let { children: o } = e;
                            return Object(r.createElement)(n, null, (e) =>
                                r.Children.map(o, (n) =>
                                    Object(r.createElement)(
                                        se,
                                        {
                                            renderError: _.CURRENT_USER_IS_ADMIN
                                                ? t
                                                : () => null,
                                        },
                                        Object(r.cloneElement)(n, e)
                                    )
                                )
                            );
                        },
                        s = (e) =>
                            Object(r.createElement)(
                                o,
                                a()({}, e, { bubblesVirtually: !0 })
                            );
                    return { Fill: i, Slot: s };
                },
                { Fill: ue, Slot: pe } = le("__experimentalOrderMeta");
            ue.Slot = (e) => {
                let { className: t, extensions: n, cart: o, context: s } = e;
                const { fills: a } = ce("__experimentalOrderMeta");
                return (
                    ae(a) &&
                    Object(r.createElement)(
                        P,
                        { slotWrapper: !0 },
                        Object(r.createElement)(pe, {
                            className: i()(t, "wc-block-components-order-meta"),
                            fillProps: { extensions: n, cart: o, context: s },
                        })
                    )
                );
            };
            var me = ue;
            const { Fill: fe, Slot: de } = le("__experimentalDiscountsMeta");
            fe.Slot = (e) => {
                let { className: t, extensions: n, cart: o, context: s } = e;
                const { fills: a } = ce("__experimentalDiscountsMeta");
                return (
                    ae(a) &&
                    Object(r.createElement)(
                        P,
                        { slotWrapper: !0 },
                        Object(r.createElement)(de, {
                            className: i()(
                                t,
                                "wc-block-components-discounts-meta"
                            ),
                            fillProps: { extensions: n, cart: o, context: s },
                        })
                    )
                );
            };
            var he = fe;
            const { Fill: be, Slot: ge } = le(
                "__experimentalOrderShippingPackages"
            );
            be.Slot = (e) => {
                let {
                    className: t,
                    collapsible: n,
                    noResultsMessage: o,
                    renderOption: s,
                    extensions: a,
                    cart: c,
                    components: l,
                    context: u,
                    shippingRates: p,
                } = e;
                const { fills: m } = ce("__experimentalOrderShippingPackages"),
                    f = m.length > 1 || (null == p ? void 0 : p.length) > 1;
                return Object(r.createElement)(ge, {
                    className: i()(
                        "wc-block-components-shipping-rates-control",
                        t
                    ),
                    fillProps: {
                        collapsible: n,
                        collapse: f,
                        showItems: f,
                        noResultsMessage: o,
                        renderOption: s,
                        extensions: a,
                        cart: c,
                        components: l,
                        context: u,
                    },
                });
            };
            var ve = be,
                Oe = function (e) {
                    let { icon: t, size: n = 24, ...o } = e;
                    return Object(r.cloneElement)(t, {
                        width: n,
                        height: n,
                        ...o,
                    });
                },
                we = Object(r.createElement)(
                    A.SVG,
                    {
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                    },
                    Object(r.createElement)(A.Path, {
                        d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z",
                    })
                ),
                je = Object(r.createElement)(
                    A.SVG,
                    {
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                    },
                    Object(r.createElement)(A.Path, {
                        d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z",
                    })
                );
            n(137);
            var ye = (e) => {
                    let {
                        children: t,
                        className: n,
                        initialOpen: o = !1,
                        hasBorder: s = !1,
                        title: a,
                        titleTag: c = "div",
                    } = e;
                    const [l, u] = Object(r.useState)(o);
                    return Object(r.createElement)(
                        "div",
                        {
                            className: i()(n, "wc-block-components-panel", {
                                "has-border": s,
                            }),
                        },
                        Object(r.createElement)(
                            c,
                            null,
                            Object(r.createElement)(
                                "button",
                                {
                                    "aria-expanded": l,
                                    className:
                                        "wc-block-components-panel__button",
                                    onClick: () => u(!l),
                                },
                                Object(r.createElement)(Oe, {
                                    "aria-hidden": "true",
                                    className:
                                        "wc-block-components-panel__button-icon",
                                    icon: l ? we : je,
                                }),
                                a
                            )
                        ),
                        l &&
                            Object(r.createElement)(
                                "div",
                                {
                                    className:
                                        "wc-block-components-panel__content",
                                },
                                t
                            )
                    );
                },
                Ee = n(39),
                Se = Object(r.createElement)(
                    A.SVG,
                    {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                    },
                    Object(r.createElement)(A.Path, {
                        d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z",
                    })
                );
            function xe(e, t, n) {
                const { defaultView: r } = t,
                    { frameElement: o } = r;
                if (!o || t === n.ownerDocument) return e;
                const i = o.getBoundingClientRect();
                return new r.DOMRect(
                    e.left + i.left,
                    e.top + i.top,
                    e.width,
                    e.height
                );
            }
            let ke = 0;
            function Ne(e) {
                const t = document.scrollingElement || document.body;
                e && (ke = t.scrollTop);
                const n = e ? "add" : "remove";
                t.classList[n]("lockscroll"),
                    document.documentElement.classList[n]("lockscroll"),
                    e || (t.scrollTop = ke);
            }
            let _e = 0;
            function Fe() {
                return (
                    Object(r.useEffect)(
                        () => (
                            0 === _e && Ne(!0),
                            ++_e,
                            () => {
                                1 === _e && Ne(!1), --_e;
                            }
                        ),
                        []
                    ),
                    null
                );
            }
            function Ce(e) {
                return "appear" === e ? "top" : "left";
            }
            function Te(e, t) {
                const {
                    paddingTop: n,
                    paddingBottom: r,
                    paddingLeft: o,
                    paddingRight: i,
                } = (s = t).ownerDocument.defaultView.getComputedStyle(s);
                var s;
                const a = n ? parseInt(n, 10) : 0,
                    c = r ? parseInt(r, 10) : 0,
                    l = o ? parseInt(o, 10) : 0,
                    u = i ? parseInt(i, 10) : 0;
                return {
                    x: e.left + l,
                    y: e.top + a,
                    width: e.width - l - u,
                    height: e.height - a - c,
                    left: e.left + l,
                    right: e.right - u,
                    top: e.top + a,
                    bottom: e.bottom - c,
                };
            }
            function Pe(e, t, n) {
                n
                    ? e.getAttribute(t) !== n && e.setAttribute(t, n)
                    : e.hasAttribute(t) && e.removeAttribute(t);
            }
            function Re(e, t, n = "") {
                e.style[t] !== n && (e.style[t] = n);
            }
            function Me(e, t, n) {
                n
                    ? e.classList.contains(t) || e.classList.add(t)
                    : e.classList.contains(t) && e.classList.remove(t);
            }
            const Ae = Object(r.forwardRef)(
                (
                    {
                        headerTitle: e,
                        onClose: t,
                        children: n,
                        className: o,
                        noArrow: s = !0,
                        isAlternate: a,
                        position: c = "bottom right",
                        range: l,
                        focusOnMount: u = "firstElement",
                        anchorRef: p,
                        shouldAnchorIncludePadding: m,
                        anchorRect: f,
                        getAnchorRect: d,
                        expandOnMobile: h,
                        animate: b = !0,
                        onClickOutside: g,
                        onFocusOutside: v,
                        __unstableStickyBoundaryElement: O,
                        __unstableSlotName: w = "Popover",
                        __unstableObserveElement: j,
                        __unstableBoundaryParent: y,
                        __unstableForcePosition: E,
                        __unstableForceXAlignment: S,
                        ...x
                    },
                    k
                ) => {
                    const _ = Object(r.useRef)(null),
                        F = Object(r.useRef)(null),
                        C = Object(r.useRef)(),
                        T = Object(G.useViewportMatch)("medium", "<"),
                        [P, R] = Object(r.useState)(),
                        A = L(w),
                        D = h && T,
                        [V, B] = Object(G.useResizeObserver)();
                    (s = D || s),
                        Object(r.useLayoutEffect)(() => {
                            if (D)
                                return (
                                    Me(C.current, "is-without-arrow", s),
                                    Me(C.current, "is-alternate", a),
                                    Pe(C.current, "data-x-axis"),
                                    Pe(C.current, "data-y-axis"),
                                    Re(C.current, "top"),
                                    Re(C.current, "left"),
                                    Re(F.current, "maxHeight"),
                                    void Re(F.current, "maxWidth")
                                );
                            const e = () => {
                                if (!C.current || !F.current) return;
                                let e = (function (e, t, n, r = !1, o, i) {
                                    if (t) return t;
                                    if (n) {
                                        if (!e.current) return;
                                        const t = n(e.current);
                                        return xe(
                                            t,
                                            t.ownerDocument ||
                                                e.current.ownerDocument,
                                            i
                                        );
                                    }
                                    if (!1 !== r) {
                                        if (
                                            !(
                                                r &&
                                                window.Range &&
                                                window.Element &&
                                                window.DOMRect
                                            )
                                        )
                                            return;
                                        if (
                                            "function" ==
                                            typeof (null == r
                                                ? void 0
                                                : r.cloneRange)
                                        )
                                            return xe(
                                                Object(
                                                    Ee.getRectangleFromRange
                                                )(r),
                                                r.endContainer.ownerDocument,
                                                i
                                            );
                                        if (
                                            "function" ==
                                            typeof (null == r
                                                ? void 0
                                                : r.getBoundingClientRect)
                                        ) {
                                            const e = xe(
                                                r.getBoundingClientRect(),
                                                r.ownerDocument,
                                                i
                                            );
                                            return o ? e : Te(e, r);
                                        }
                                        const { top: e, bottom: t } = r,
                                            n = e.getBoundingClientRect(),
                                            s = t.getBoundingClientRect(),
                                            a = xe(
                                                new window.DOMRect(
                                                    n.left,
                                                    n.top,
                                                    n.width,
                                                    s.bottom - n.top
                                                ),
                                                e.ownerDocument,
                                                i
                                            );
                                        return o ? a : Te(a, r);
                                    }
                                    if (!e.current) return;
                                    const { parentNode: s } = e.current,
                                        a = s.getBoundingClientRect();
                                    return o ? a : Te(a, s);
                                })(_, f, d, p, m, C.current);
                                if (!e) return;
                                const { offsetParent: t, ownerDocument: n } =
                                    C.current;
                                let r,
                                    o = 0;
                                if (t && t !== n.body) {
                                    const n = t.getBoundingClientRect();
                                    (o = n.top),
                                        (e = new window.DOMRect(
                                            e.left - n.left,
                                            e.top - n.top,
                                            e.width,
                                            e.height
                                        ));
                                }
                                var i;
                                y &&
                                    (r =
                                        null ===
                                            (i =
                                                C.current.closest(
                                                    ".popover-slot"
                                                )) || void 0 === i
                                            ? void 0
                                            : i.parentNode);
                                const l = B.height
                                        ? B
                                        : F.current.getBoundingClientRect(),
                                    {
                                        popoverTop: u,
                                        popoverLeft: h,
                                        xAxis: b,
                                        yAxis: g,
                                        contentHeight: v,
                                        contentWidth: w,
                                    } = (function (
                                        e,
                                        t,
                                        n = "top",
                                        r,
                                        o,
                                        i,
                                        s,
                                        a,
                                        c
                                    ) {
                                        const [l, u = "center", p] =
                                                n.split(" "),
                                            m = (function (
                                                e,
                                                t,
                                                n,
                                                r,
                                                o,
                                                i,
                                                s,
                                                a
                                            ) {
                                                const { height: c } = t;
                                                if (o) {
                                                    const t =
                                                        o.getBoundingClientRect()
                                                            .top +
                                                        c -
                                                        s;
                                                    if (e.top <= t)
                                                        return {
                                                            yAxis: n,
                                                            popoverTop:
                                                                Math.min(
                                                                    e.bottom,
                                                                    t
                                                                ),
                                                        };
                                                }
                                                let l = e.top + e.height / 2;
                                                "bottom" === r
                                                    ? (l = e.bottom)
                                                    : "top" === r &&
                                                      (l = e.top);
                                                const u = {
                                                        popoverTop: l,
                                                        contentHeight:
                                                            (l - c / 2 > 0
                                                                ? c / 2
                                                                : l) +
                                                            (l + c / 2 >
                                                            window.innerHeight
                                                                ? window.innerHeight -
                                                                  l
                                                                : c / 2),
                                                    },
                                                    p = {
                                                        popoverTop: e.top,
                                                        contentHeight:
                                                            e.top - 10 - c > 0
                                                                ? c
                                                                : e.top - 10,
                                                    },
                                                    m = {
                                                        popoverTop: e.bottom,
                                                        contentHeight:
                                                            e.bottom + 10 + c >
                                                            window.innerHeight
                                                                ? window.innerHeight -
                                                                  10 -
                                                                  e.bottom
                                                                : c,
                                                    };
                                                let f,
                                                    d = n,
                                                    h = null;
                                                if (!o && !a)
                                                    if (
                                                        "middle" === n &&
                                                        u.contentHeight === c
                                                    )
                                                        d = "middle";
                                                    else if (
                                                        "top" === n &&
                                                        p.contentHeight === c
                                                    )
                                                        d = "top";
                                                    else if (
                                                        "bottom" === n &&
                                                        m.contentHeight === c
                                                    )
                                                        d = "bottom";
                                                    else {
                                                        d =
                                                            p.contentHeight >
                                                            m.contentHeight
                                                                ? "top"
                                                                : "bottom";
                                                        const e =
                                                            "top" === d
                                                                ? p.contentHeight
                                                                : m.contentHeight;
                                                        h = e !== c ? e : null;
                                                    }
                                                return (
                                                    (f =
                                                        "middle" === d
                                                            ? u.popoverTop
                                                            : "top" === d
                                                            ? p.popoverTop
                                                            : m.popoverTop),
                                                    {
                                                        yAxis: d,
                                                        popoverTop: f,
                                                        contentHeight: h,
                                                    }
                                                );
                                            })(e, t, l, p, r, 0, i, a);
                                        return {
                                            ...(function (
                                                e,
                                                t,
                                                n,
                                                r,
                                                o,
                                                i,
                                                s,
                                                a,
                                                c
                                            ) {
                                                const { width: l } = t;
                                                "left" === n &&
                                                Object(N.isRTL)()
                                                    ? (n = "right")
                                                    : "right" === n &&
                                                      Object(N.isRTL)() &&
                                                      (n = "left"),
                                                    "left" === r &&
                                                    Object(N.isRTL)()
                                                        ? (r = "right")
                                                        : "right" === r &&
                                                          Object(N.isRTL)() &&
                                                          (r = "left");
                                                const u = Math.round(
                                                        e.left + e.width / 2
                                                    ),
                                                    p = {
                                                        popoverLeft: u,
                                                        contentWidth:
                                                            (u - l / 2 > 0
                                                                ? l / 2
                                                                : u) +
                                                            (u + l / 2 >
                                                            window.innerWidth
                                                                ? window.innerWidth -
                                                                  u
                                                                : l / 2),
                                                    };
                                                let m = e.left;
                                                "right" === r
                                                    ? (m = e.right)
                                                    : "middle" === i ||
                                                      c ||
                                                      (m = u);
                                                let f = e.right;
                                                "left" === r
                                                    ? (f = e.left)
                                                    : "middle" === i ||
                                                      c ||
                                                      (f = u);
                                                const d = {
                                                        popoverLeft: m,
                                                        contentWidth:
                                                            m - l > 0 ? l : m,
                                                    },
                                                    h = {
                                                        popoverLeft: f,
                                                        contentWidth:
                                                            f + l >
                                                            window.innerWidth
                                                                ? window.innerWidth -
                                                                  f
                                                                : l,
                                                    };
                                                let b,
                                                    g = n,
                                                    v = null;
                                                if (!o && !a)
                                                    if (
                                                        "center" === n &&
                                                        p.contentWidth === l
                                                    )
                                                        g = "center";
                                                    else if (
                                                        "left" === n &&
                                                        d.contentWidth === l
                                                    )
                                                        g = "left";
                                                    else if (
                                                        "right" === n &&
                                                        h.contentWidth === l
                                                    )
                                                        g = "right";
                                                    else {
                                                        g =
                                                            d.contentWidth >
                                                            h.contentWidth
                                                                ? "left"
                                                                : "right";
                                                        const e =
                                                            "left" === g
                                                                ? d.contentWidth
                                                                : h.contentWidth;
                                                        l > window.innerWidth &&
                                                            (v =
                                                                window.innerWidth),
                                                            e !== l &&
                                                                ((g = "center"),
                                                                (p.popoverLeft =
                                                                    window.innerWidth /
                                                                    2));
                                                    }
                                                if (
                                                    ((b =
                                                        "center" === g
                                                            ? p.popoverLeft
                                                            : "left" === g
                                                            ? d.popoverLeft
                                                            : h.popoverLeft),
                                                    s)
                                                ) {
                                                    const e =
                                                        s.getBoundingClientRect();
                                                    (b = Math.min(
                                                        b,
                                                        e.right - l
                                                    )),
                                                        Object(N.isRTL)() ||
                                                            (b = Math.max(
                                                                b,
                                                                0
                                                            ));
                                                }
                                                return {
                                                    xAxis: g,
                                                    popoverLeft: b,
                                                    contentWidth: v,
                                                };
                                            })(e, t, u, p, r, m.yAxis, s, a, c),
                                            ...m,
                                        };
                                    })(e, l, c, O, C.current, o, r, E, S);
                                "number" == typeof u &&
                                    "number" == typeof h &&
                                    (Re(C.current, "top", u + "px"),
                                    Re(C.current, "left", h + "px")),
                                    Me(
                                        C.current,
                                        "is-without-arrow",
                                        s || ("center" === b && "middle" === g)
                                    ),
                                    Me(C.current, "is-alternate", a),
                                    Pe(C.current, "data-x-axis", b),
                                    Pe(C.current, "data-y-axis", g),
                                    Re(
                                        F.current,
                                        "maxHeight",
                                        "number" == typeof v ? v + "px" : ""
                                    ),
                                    Re(
                                        F.current,
                                        "maxWidth",
                                        "number" == typeof w ? w + "px" : ""
                                    ),
                                    R(
                                        ({ left: "right", right: "left" }[b] ||
                                            "center") +
                                            " " +
                                            ({ top: "bottom", bottom: "top" }[
                                                g
                                            ] || "middle")
                                    );
                            };
                            e();
                            const { ownerDocument: t } = C.current,
                                { defaultView: n } = t,
                                r = n.setInterval(e, 500);
                            let o;
                            const i = () => {
                                n.cancelAnimationFrame(o),
                                    (o = n.requestAnimationFrame(e));
                            };
                            n.addEventListener("click", i),
                                n.addEventListener("resize", e),
                                n.addEventListener("scroll", e, !0);
                            const l = (function (e) {
                                if (e)
                                    return e.endContainer
                                        ? e.endContainer.ownerDocument
                                        : e.top
                                        ? e.top.ownerDocument
                                        : e.ownerDocument;
                            })(p);
                            let u;
                            return (
                                l &&
                                    l !== t &&
                                    (l.defaultView.addEventListener(
                                        "resize",
                                        e
                                    ),
                                    l.defaultView.addEventListener(
                                        "scroll",
                                        e,
                                        !0
                                    )),
                                j &&
                                    ((u = new n.MutationObserver(e)),
                                    u.observe(j, { attributes: !0 })),
                                () => {
                                    n.clearInterval(r),
                                        n.removeEventListener("resize", e),
                                        n.removeEventListener("scroll", e, !0),
                                        n.removeEventListener("click", i),
                                        n.cancelAnimationFrame(o),
                                        l &&
                                            l !== t &&
                                            (l.defaultView.removeEventListener(
                                                "resize",
                                                e
                                            ),
                                            l.defaultView.removeEventListener(
                                                "scroll",
                                                e,
                                                !0
                                            )),
                                        u && u.disconnect();
                                }
                            );
                        }, [D, f, d, p, m, c, B, O, j, y]);
                    const U = (e, n) => {
                            if ("focus-outside" === e && v) v(n);
                            else if ("focus-outside" === e && g) {
                                const e = new window.MouseEvent("click");
                                Object.defineProperty(e, "target", {
                                    get: () => n.relatedTarget,
                                }),
                                    M()("Popover onClickOutside prop", {
                                        since: "5.3",
                                        alternative: "onFocusOutside",
                                    }),
                                    g(e);
                            } else t && t();
                        },
                        [W, H] = Object(G.__experimentalUseDialog)({
                            focusOnMount: u,
                            __unstableOnClose: U,
                            onClose: U,
                        }),
                        z = Object(G.useMergeRefs)([C, W, k]),
                        $ =
                            Boolean(b && P) &&
                            (function (e) {
                                if ("loading" === e.type)
                                    return i()("components-animate__loading");
                                const { type: t, origin: n = Ce(t) } = e;
                                if ("appear" === t) {
                                    const [e, t = "center"] = n.split(" ");
                                    return i()("components-animate__appear", {
                                        ["is-from-" + t]: "center" !== t,
                                        ["is-from-" + e]: "middle" !== e,
                                    });
                                }
                                return "slide-in" === t
                                    ? i()(
                                          "components-animate__slide-in",
                                          "is-from-" + n
                                      )
                                    : void 0;
                            })({ type: "appear", origin: P });
                    let K = Object(r.createElement)(
                        "div",
                        Object(I.a)(
                            {
                                className: i()("components-popover", o, $, {
                                    "is-expanded": D,
                                    "is-without-arrow": s,
                                    "is-alternate": a,
                                }),
                            },
                            x,
                            { ref: z },
                            H,
                            { tabIndex: "-1" }
                        ),
                        D && Object(r.createElement)(Fe, null),
                        D &&
                            Object(r.createElement)(
                                "div",
                                { className: "components-popover__header" },
                                Object(r.createElement)(
                                    "span",
                                    {
                                        className:
                                            "components-popover__header-title",
                                    },
                                    e
                                ),
                                Object(r.createElement)(Ge, {
                                    className: "components-popover__close",
                                    icon: Se,
                                    onClick: t,
                                })
                            ),
                        Object(r.createElement)(
                            "div",
                            {
                                ref: F,
                                className: "components-popover__content",
                            },
                            Object(r.createElement)(
                                "div",
                                { style: { position: "relative" } },
                                V,
                                n
                            )
                        )
                    );
                    return (
                        A.ref &&
                            (K = Object(r.createElement)(Q, { name: w }, K)),
                        p || f
                            ? K
                            : Object(r.createElement)("span", { ref: _ }, K)
                    );
                }
            );
            Ae.Slot = Object(r.forwardRef)(function (
                { name: e = "Popover" },
                t
            ) {
                return Object(r.createElement)(ee, {
                    bubblesVirtually: !0,
                    name: e,
                    className: "popover-slot",
                    ref: t,
                });
            });
            var De = Ae,
                Le = function ({ shortcut: e, className: t }) {
                    if (!e) return null;
                    let n, o;
                    return (
                        Object(V.isString)(e) && (n = e),
                        Object(V.isObject)(e) &&
                            ((n = e.display), (o = e.ariaLabel)),
                        Object(r.createElement)(
                            "span",
                            { className: t, "aria-label": o },
                            n
                        )
                    );
                };
            const Ie = Object(r.createElement)("div", {
                    className: "event-catcher",
                }),
                Ve = ({ eventHandlers: e, child: t, childrenWithPopover: n }) =>
                    Object(r.cloneElement)(
                        Object(r.createElement)(
                            "span",
                            { className: "disabled-element-wrapper" },
                            Object(r.cloneElement)(Ie, e),
                            Object(r.cloneElement)(t, { children: n }),
                            ","
                        ),
                        e
                    ),
                Be = ({ child: e, eventHandlers: t, childrenWithPopover: n }) =>
                    Object(r.cloneElement)(e, { ...t, children: n }),
                Ue = (e, t, n) => {
                    if (1 !== r.Children.count(e)) return;
                    const o = r.Children.only(e);
                    "function" == typeof o.props[t] && o.props[t](n);
                };
            var We = function ({
                    children: e,
                    position: t,
                    text: n,
                    shortcut: o,
                }) {
                    const [i, s] = Object(r.useState)(!1),
                        [a, c] = Object(r.useState)(!1),
                        l = Object(G.useDebounce)(c, 700),
                        u = (t) => {
                            Ue(e, "onMouseDown", t),
                                document.addEventListener("mouseup", f),
                                s(!0);
                        },
                        p = (t) => {
                            Ue(e, "onMouseUp", t),
                                document.removeEventListener("mouseup", f),
                                s(!1);
                        },
                        m = (e) =>
                            "mouseUp" === e
                                ? p
                                : "mouseDown" === e
                                ? u
                                : void 0,
                        f = m("mouseUp"),
                        d = (t, n) => (r) => {
                            if ((Ue(e, t, r), r.currentTarget.disabled)) return;
                            if ("focus" === r.type && i) return;
                            l.cancel();
                            const o = Object(V.includes)(
                                ["focus", "mouseenter"],
                                r.type
                            );
                            o !== a && (n ? l(o) : c(o));
                        },
                        h = () => {
                            l.cancel(),
                                document.removeEventListener("mouseup", f);
                        };
                    if (
                        (Object(r.useEffect)(() => h, []),
                        1 !== r.Children.count(e))
                    )
                        return e;
                    const b = {
                            onMouseEnter: d("onMouseEnter", !0),
                            onMouseLeave: d("onMouseLeave"),
                            onClick: d("onClick"),
                            onFocus: d("onFocus"),
                            onBlur: d("onBlur"),
                            onMouseDown: m("mouseDown"),
                        },
                        g = r.Children.only(e),
                        { children: v, disabled: O } = g.props;
                    return (O ? Ve : Be)({
                        child: g,
                        eventHandlers: b,
                        childrenWithPopover: (({
                            grandchildren: e,
                            isOver: t,
                            position: n,
                            text: o,
                            shortcut: i,
                        }) =>
                            Object(r.concatChildren)(
                                e,
                                t &&
                                    Object(r.createElement)(
                                        De,
                                        {
                                            focusOnMount: !1,
                                            position: n,
                                            className: "components-tooltip",
                                            "aria-hidden": "true",
                                            animate: !1,
                                            noArrow: !0,
                                        },
                                        o,
                                        Object(r.createElement)(Le, {
                                            className:
                                                "components-tooltip__shortcut",
                                            shortcut: i,
                                        })
                                    )
                            ))({
                            grandchildren: v,
                            isOver: a,
                            position: t,
                            text: n,
                            shortcut: o,
                        }),
                    });
                },
                He = function ({ icon: e, className: t, ...n }) {
                    const o = ["dashicon", "dashicons", "dashicons-" + e, t]
                        .filter(Boolean)
                        .join(" ");
                    return Object(r.createElement)(
                        "span",
                        Object(I.a)({ className: o }, n)
                    );
                },
                ze = function ({ icon: e = null, size: t = 24, ...n }) {
                    if ("string" == typeof e)
                        return Object(r.createElement)(
                            He,
                            Object(I.a)({ icon: e }, n)
                        );
                    if (Object(r.isValidElement)(e) && He === e.type)
                        return Object(r.cloneElement)(e, { ...n });
                    if ("function" == typeof e)
                        return e.prototype instanceof r.Component
                            ? Object(r.createElement)(e, { size: t, ...n })
                            : e({ size: t, ...n });
                    if (e && ("svg" === e.type || e.type === A.SVG)) {
                        const o = { width: t, height: t, ...e.props, ...n };
                        return Object(r.createElement)(A.SVG, o);
                    }
                    return Object(r.isValidElement)(e)
                        ? Object(r.cloneElement)(e, { size: t, ...n })
                        : e;
                },
                $e = Object(r.forwardRef)(function (
                    { as: e = "div", className: t, ...n },
                    o
                ) {
                    return (function ({ as: e = "div", ...t }) {
                        return "function" == typeof t.children
                            ? t.children(t)
                            : Object(r.createElement)(e, t);
                    })({
                        as: e,
                        className: i()("components-visually-hidden", t),
                        ...n,
                        ref: o,
                    });
                });
            const Ke = ["onMouseDown", "onClick"];
            var Ge = Object(r.forwardRef)(function (e, t) {
                const {
                        href: n,
                        target: o,
                        isSmall: s,
                        isPressed: a,
                        isBusy: c,
                        isDestructive: l,
                        className: u,
                        disabled: p,
                        icon: m,
                        iconPosition: f = "left",
                        iconSize: d,
                        showTooltip: h,
                        tooltipPosition: b,
                        shortcut: g,
                        label: v,
                        children: O,
                        text: w,
                        variant: j,
                        __experimentalIsFocusable: y,
                        describedBy: E,
                        ...S
                    } = (function ({
                        isDefault: e,
                        isPrimary: t,
                        isSecondary: n,
                        isTertiary: r,
                        isLink: o,
                        variant: i,
                        ...s
                    }) {
                        let a = i;
                        var c, l, u, p, m;
                        return (
                            t &&
                                ((null !== (c = a) && void 0 !== c) ||
                                    (a = "primary")),
                            r &&
                                ((null !== (l = a) && void 0 !== l) ||
                                    (a = "tertiary")),
                            n &&
                                ((null !== (u = a) && void 0 !== u) ||
                                    (a = "secondary")),
                            e &&
                                (M()("Button isDefault prop", {
                                    since: "5.4",
                                    alternative: 'variant="secondary"',
                                }),
                                (null !== (p = a) && void 0 !== p) ||
                                    (a = "secondary")),
                            o &&
                                ((null !== (m = a) && void 0 !== m) ||
                                    (a = "link")),
                            { ...s, variant: a }
                        );
                    })(e),
                    x = i()("components-button", u, {
                        "is-secondary": "secondary" === j,
                        "is-primary": "primary" === j,
                        "is-small": s,
                        "is-tertiary": "tertiary" === j,
                        "is-pressed": a,
                        "is-busy": c,
                        "is-link": "link" === j,
                        "is-destructive": l,
                        "has-text": !!m && !!O,
                        "has-icon": !!m,
                    }),
                    k = p && !y,
                    N = void 0 === n || k ? "button" : "a",
                    _ =
                        "a" === N
                            ? { href: n, target: o }
                            : {
                                  type: "button",
                                  disabled: k,
                                  "aria-pressed": a,
                              };
                if (p && y) {
                    _["aria-disabled"] = !0;
                    for (const e of Ke)
                        S[e] = (e) => {
                            e.stopPropagation(), e.preventDefault();
                        };
                }
                const F =
                        !k &&
                        ((h && v) ||
                            g ||
                            (!!v &&
                                (!O || (Object(V.isArray)(O) && !O.length)) &&
                                !1 !== h)),
                    C = E ? Object(V.uniqueId)() : null,
                    T = S["aria-describedby"] || C,
                    P = Object(r.createElement)(
                        N,
                        Object(I.a)({}, _, S, {
                            className: x,
                            "aria-label": S["aria-label"] || v,
                            "aria-describedby": T,
                            ref: t,
                        }),
                        m &&
                            "left" === f &&
                            Object(r.createElement)(ze, { icon: m, size: d }),
                        w && Object(r.createElement)(r.Fragment, null, w),
                        m &&
                            "right" === f &&
                            Object(r.createElement)(ze, { icon: m, size: d }),
                        O
                    );
                return F
                    ? Object(r.createElement)(
                          r.Fragment,
                          null,
                          Object(r.createElement)(
                              We,
                              { text: E || v, shortcut: g, position: b },
                              P
                          ),
                          E &&
                              Object(r.createElement)(
                                  $e,
                                  null,
                                  Object(r.createElement)("span", { id: C }, E)
                              )
                      )
                    : Object(r.createElement)(
                          r.Fragment,
                          null,
                          P,
                          E &&
                              Object(r.createElement)(
                                  $e,
                                  null,
                                  Object(r.createElement)("span", { id: C }, E)
                              )
                      );
            });
            n(139);
            var qe = () =>
                Object(r.createElement)("span", {
                    className: "wc-block-components-spinner",
                    "aria-hidden": "true",
                });
            n(138);
            var Ye = (e) => {
                    let {
                        className: t,
                        showSpinner: n = !1,
                        children: o,
                        variant: s = "contained",
                        ...c
                    } = e;
                    const l = i()("wc-block-components-button", t, s, {
                        "wc-block-components-button--loading": n,
                    });
                    return Object(r.createElement)(
                        Ge,
                        a()({ className: l }, c),
                        n && Object(r.createElement)(qe, null),
                        Object(r.createElement)(
                            "span",
                            { className: "wc-block-components-button__text" },
                            o
                        )
                    );
                },
                Ze = (e) => {
                    let t,
                        {
                            label: n,
                            screenReaderLabel: o,
                            wrapperElement: s,
                            wrapperProps: a = {},
                        } = e;
                    const c = null != n,
                        l = null != o;
                    return !c && l
                        ? ((t = s || "span"),
                          (a = {
                              ...a,
                              className: i()(a.className, "screen-reader-text"),
                          }),
                          Object(r.createElement)(t, a, o))
                        : ((t = s || r.Fragment),
                          c && l && n !== o
                              ? Object(r.createElement)(
                                    t,
                                    a,
                                    Object(r.createElement)(
                                        "span",
                                        { "aria-hidden": "true" },
                                        n
                                    ),
                                    Object(r.createElement)(
                                        "span",
                                        { className: "screen-reader-text" },
                                        o
                                    )
                                )
                              : Object(r.createElement)(t, a, n));
                };
            n(140);
            const Xe = (e) => {
                let {
                    className: t,
                    label: n,
                    id: o,
                    onChange: s,
                    children: c,
                    hasError: l = !1,
                    checked: u = !1,
                    disabled: p = !1,
                    ...m
                } = e;
                const f = Object(G.useInstanceId)(Xe),
                    d = o || "checkbox-control-" + f;
                return Object(r.createElement)(
                    "div",
                    {
                        className: i()(
                            "wc-block-components-checkbox",
                            { "has-error": l },
                            t
                        ),
                    },
                    Object(r.createElement)(
                        "label",
                        { htmlFor: d },
                        Object(r.createElement)(
                            "input",
                            a()(
                                {
                                    id: d,
                                    className:
                                        "wc-block-components-checkbox__input",
                                    type: "checkbox",
                                    onChange: (e) => s(e.target.checked),
                                    "aria-invalid": !0 === l,
                                    checked: u,
                                    disabled: p,
                                },
                                m
                            )
                        ),
                        Object(r.createElement)(
                            "svg",
                            {
                                className: "wc-block-components-checkbox__mark",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 20",
                            },
                            Object(r.createElement)("path", {
                                d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
                            })
                        ),
                        n &&
                            Object(r.createElement)(
                                "span",
                                {
                                    className:
                                        "wc-block-components-checkbox__label",
                                },
                                n
                            ),
                        c
                    )
                );
            };
            var Je = Xe;
            const Qe = (e, t) => {
                if (!e.includes(t))
                    throw Error(
                        Object(N.sprintf)(
                            /* translators: %1$s value passed to filter, %2$s : value that must be included. */
                            Object(N.__)(
                                'Returned value must include %1$s, you passed "%2$s"',
                                "woocommerce"
                            ),
                            t,
                            e
                        )
                    );
                return !0;
            };
            var et = n(2),
                tt = n(9);
            const nt = (e) => {
                const { applyExtensionCartUpdate: t } = Object(et.dispatch)(
                    tt.b
                );
                return t(e);
            };
            var rt = n(23),
                ot = n(131);
            const it = () => !0;
            let st = {};
            const at = {},
                ct = (e, t) => {
                    Object.keys(t).includes("couponName") &&
                        M()("snackbarNotices", {
                            alternative: "snackbarNoticeVisibility",
                            plugin: "WooCommerce Blocks",
                            link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4417",
                        }),
                        Object.keys(t).includes("couponName") &&
                            M()("couponName", {
                                alternative: "coupons",
                                plugin: "WooCommerce Blocks",
                                link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/blob/bb921d21f42e21f38df2b1c87b48e07aa4cb0538/docs/extensibility/available-filters.md#coupons",
                            }),
                        (st = { ...st, [e]: t });
                },
                lt = {},
                ut = (e, t, n, r) => {
                    lt[e] = { arg: t, extensions: n, defaultValue: r };
                },
                pt = (e, t) =>
                    !(!Object(rt.a)(e) || !Object(rt.a)(t)) ||
                    (Object(ot.a)(e) &&
                        Object(ot.a)(t) &&
                        Object.keys(e).length === Object.keys(t).length &&
                        Object.keys(e).every(
                            (n) => Object(ot.b)(t, n) && Z()(e[n], t[n])
                        )),
                mt = (e) => {
                    let {
                        filterName: t,
                        defaultValue: n,
                        extensions: o = null,
                        arg: i = null,
                        validation: s = it,
                    } = e;
                    return Object(r.useMemo)(() => {
                        if (
                            !((e, t, n, r) => {
                                const o = lt[e];
                                if (!o) return ut(e, t, n, r), !0;
                                const {
                                    arg: i = {},
                                    extensions: s = {},
                                    defaultValue: a = null,
                                } = o;
                                return pt(t, i)
                                    ? !(
                                          (r === a && pt(n, s)) ||
                                          (ut(e, t, n, r), 0)
                                      )
                                    : (ut(e, t, n, r), !0);
                            })(t, i, o, n) &&
                            void 0 !== at[t]
                        )
                            return at[t];
                        const e = ((e) =>
                            Object.keys(st)
                                .map((t) => st[t][e])
                                .filter(Boolean))(t);
                        let r = n;
                        return (
                            e.forEach((e) => {
                                try {
                                    const t = e(r, o || {}, i);
                                    if (typeof t != typeof r)
                                        throw new Error(
                                            Object(N.sprintf)(
                                                /* translators: %1$s is the type of the variable passed to the filter function, %2$s is the type of the value returned by the filter function. */
                                                Object(N.__)(
                                                    "The type returned by checkout filters must be the same as the type they receive. The function received %1$s but returned %2$s.",
                                                    "woocommerce"
                                                ),
                                                typeof r,
                                                typeof t
                                            )
                                        );
                                    r = s(t) ? t : r;
                                } catch (e) {
                                    if (_.CURRENT_USER_IS_ADMIN) throw e;
                                    console.error(e);
                                }
                            }),
                            (at[t] = r),
                            r
                        );
                    }, [i, n, o, t, s]);
                };
            let ft;
            !(function (e) {
                (e.CHECKOUT = "woocommerce/checkout"),
                    (e.CHECKOUT_FIELDS = "woocommerce/checkout-fields-block"),
                    (e.CHECKOUT_TOTALS = "woocommerce/checkout-totals-block"),
                    (e.CONTACT_INFORMATION =
                        "woocommerce/checkout-contact-information-block"),
                    (e.SHIPPING_ADDRESS =
                        "woocommerce/checkout-shipping-address-block"),
                    (e.BILLING_ADDRESS =
                        "woocommerce/checkout-billing-address-block"),
                    (e.SHIPPING_METHODS =
                        "woocommerce/checkout-shipping-methods-block"),
                    (e.PAYMENT_METHODS =
                        "woocommerce/checkout-payment-methods-block"),
                    (e.CART = "woocommerce/cart"),
                    (e.EMPTY_CART = "woocommerce/empty-cart-block"),
                    (e.FILLED_CART = "woocommerce/filled-cart-block"),
                    (e.CART_ITEMS = "woocommerce/cart-items-block"),
                    (e.CART_CROSS_SELLS = "woocommerce/cart-cross-sells-block"),
                    (e.CART_TOTALS = "woocommerce/cart-totals-block"),
                    (e.MINI_CART = "woocommerce/mini-cart-contents"),
                    (e.EMPTY_MINI_CART =
                        "woocommerce/empty-mini-cart-contents-block"),
                    (e.FILLED_MINI_CART =
                        "woocommerce/filled-mini-cart-contents-block"),
                    (e.MINI_CART_ITEMS = "woocommerce/mini-cart-items-block"),
                    (e.CART_ORDER_SUMMARY =
                        "woocommerce/cart-order-summary-block"),
                    (e.CHECKOUT_ORDER_SUMMARY =
                        "woocommerce/checkout-order-summary-block");
            })(ft || (ft = {}));
            const dt = {},
                ht = (e) => Object.values(ft).includes(e),
                bt = (e) =>
                    ht(e)
                        ? Object.values(dt).filter((t) => {
                              let { metadata: n } = t;
                              return (
                                  (null == n ? void 0 : n.parent) || []
                              ).includes(e);
                          })
                        : [];
            var gt = n(19);
            const vt = (e) => {
                var t, n, r, o;
                ((e, t, n) => {
                    if (!Object(ot.a)(e)) return;
                    const r = typeof e.metadata;
                    if ("object" !== r)
                        throw new Error(
                            `Incorrect value for the metadata argument when registering a block component. It was a ${r}, but must be a object.`
                        );
                })(e),
                    ((e) => {
                        if (
                            (((e, t, n) => {
                                const r = typeof t;
                                if ("string" !== r)
                                    throw new Error(
                                        `Incorrect value for the blockName argument when registering a checkout block. It was a ${r}, but must be a string.`
                                    );
                            })(0, e),
                            !e)
                        )
                            throw new Error(
                                "Value for the blockName argument must not be empty."
                            );
                    })(e.metadata.name),
                    ((e) => {
                        if ("string" != typeof e && !Array.isArray(e))
                            throw new Error(
                                `Incorrect value for the parent argument when registering a checkout block. It was a ${typeof e}, but must be a string or array of strings.`
                            );
                        if ("string" == typeof e && !ht(e))
                            throw new Error(
                                "When registering a checkout block, the parent must be a valid inner block area."
                            );
                        if (Array.isArray(e) && !e.some((e) => ht(e)))
                            throw new Error(
                                "When registering a checkout block, the parent must be a valid inner block area."
                            );
                    })(e.metadata.parent),
                    ((e, t) => {
                        const n = e.component;
                        if (n) {
                            if ("function" == typeof n) return;
                            if (
                                Object(ot.a)(n) &&
                                n.$$typeof &&
                                n.$$typeof === Symbol.for("react.lazy")
                            )
                                return;
                        }
                        throw new Error(
                            "Incorrect value for the component argument when registering a block component. Component must be a valid React Element or Lazy callback."
                        );
                    })(e),
                    Object(gt.registerBlockComponent)({
                        blockName: e.metadata.name,
                        component: e.component,
                    }),
                    (dt[e.metadata.name] = {
                        blockName: e.metadata.name,
                        metadata: e.metadata,
                        component: e.component,
                        force: !(
                            null === (t = e.metadata) ||
                            void 0 === t ||
                            null === (n = t.attributes) ||
                            void 0 === n ||
                            null === (r = n.lock) ||
                            void 0 === r ||
                            null === (o = r.default) ||
                            void 0 === o ||
                            !o.remove
                        ),
                    });
            };
        },
        16: function (e, t) {
            e.exports = window.React;
        },
        19: function (e, t) {
            e.exports = window.wc.wcBlocksRegistry;
        },
        2: function (e, t) {
            e.exports = window.wp.data;
        },
        20: function (e, t) {
            (e.exports = function (e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n),
                    e
                );
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        22: function (e, t, n) {
            "use strict";
            (function (e) {
                var r = n(0);
                n(38);
                const o = Object(r.createContext)({
                    slots: {},
                    fills: {},
                    registerSlot: () => {
                        void 0 !== e && e.env;
                    },
                    updateSlot: () => {},
                    unregisterSlot: () => {},
                    registerFill: () => {},
                    unregisterFill: () => {},
                });
                t.a = o;
            }.call(this, n(27)));
        },
        23: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return r;
            });
            const r = (e) => null === e;
        },
        27: function (e, t) {
            var n,
                r,
                o = (e.exports = {});
            function i() {
                throw new Error("setTimeout has not been defined");
            }
            function s() {
                throw new Error("clearTimeout has not been defined");
            }
            function a(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === i || !n) && setTimeout)
                    return (n = setTimeout), setTimeout(e, 0);
                try {
                    return n(e, 0);
                } catch (t) {
                    try {
                        return n.call(null, e, 0);
                    } catch (t) {
                        return n.call(this, e, 0);
                    }
                }
            }
            !(function () {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                    n = i;
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (e) {
                    r = s;
                }
            })();
            var c,
                l = [],
                u = !1,
                p = -1;
            function m() {
                u &&
                    c &&
                    ((u = !1),
                    c.length ? (l = c.concat(l)) : (p = -1),
                    l.length && f());
            }
            function f() {
                if (!u) {
                    var e = a(m);
                    u = !0;
                    for (var t = l.length; t; ) {
                        for (c = l, l = []; ++p < t; ) c && c[p].run();
                        (p = -1), (t = l.length);
                    }
                    (c = null),
                        (u = !1),
                        (function (e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === s || !r) && clearTimeout)
                                return (r = clearTimeout), clearTimeout(e);
                            try {
                                r(e);
                            } catch (t) {
                                try {
                                    return r.call(null, e);
                                } catch (t) {
                                    return r.call(this, e);
                                }
                            }
                        })(e);
                }
            }
            function d(e, t) {
                (this.fun = e), (this.array = t);
            }
            function h() {}
            (o.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                l.push(new d(e, t)), 1 !== l.length || u || a(f);
            }),
                (d.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = h),
                (o.addListener = h),
                (o.once = h),
                (o.off = h),
                (o.removeListener = h),
                (o.removeAllListeners = h),
                (o.emit = h),
                (o.prependListener = h),
                (o.prependOnceListener = h),
                (o.listeners = function (e) {
                    return [];
                }),
                (o.binding = function (e) {
                    throw new Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                    return "/";
                }),
                (o.chdir = function (e) {
                    throw new Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                    return 0;
                });
        },
        3: function (e, t) {
            e.exports = window.wc.wcSettings;
        },
        38: function (e, t) {
            e.exports = window.wp.warning;
        },
        39: function (e, t) {
            e.exports = window.wp.dom;
        },
        4: function (e, t) {
            e.exports = window.lodash;
        },
        5: function (e, t, n) {
            var r;
            !(function () {
                "use strict";
                var n = {}.hasOwnProperty;
                function o() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var i = typeof r;
                            if ("string" === i || "number" === i) e.push(r);
                            else if (Array.isArray(r)) {
                                if (r.length) {
                                    var s = o.apply(null, r);
                                    s && e.push(s);
                                }
                            } else if ("object" === i)
                                if (r.toString === Object.prototype.toString)
                                    for (var a in r)
                                        n.call(r, a) && r[a] && e.push(a);
                                else e.push(r.toString());
                        }
                    }
                    return e.join(" ");
                }
                e.exports
                    ? ((o.default = o), (e.exports = o))
                    : void 0 ===
                          (r = function () {
                              return o;
                          }.apply(t, [])) || (e.exports = r);
            })();
        },
        6: function (e, t) {
            e.exports = window.wp.primitives;
        },
        8: function (e, t) {
            e.exports = window.wp.deprecated;
        },
        9: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return o;
            }),
                n.d(t, "a", function () {
                    return i;
                });
            var r = n(1);
            const o = "wc/store/cart",
                i = {
                    code: "cart_api_error",
                    message: Object(r.__)(
                        "Unable to get cart data from the API.",
                        "woocommerce"
                    ),
                    data: { status: 500 },
                };
        },
    }));
