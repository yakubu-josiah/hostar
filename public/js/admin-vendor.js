!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t, n) {
        var r, o = (t = t || ae).createElement("script");
        if (o.text = e,
        n)
            for (r in we)
                n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }
    function r(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[de.call(e)] || "object" : typeof e
    }
    function o(e) {
        var t = !!e && "length"in e && e.length
          , n = r(e);
        return !ye(e) && !be(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function a(e, t, n) {
        return ye(t) ? xe.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? xe.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? xe.grep(e, function(e) {
            return fe.call(t, e) > -1 !== n
        }) : xe.filter(t, e, n)
    }
    function s(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function u(e) {
        var t = {};
        return xe.each(e.match(Oe) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function l(e) {
        return e
    }
    function c(e) {
        throw e
    }
    function f(e, t, n, r) {
        var o;
        try {
            e && ye(o = e.promise) ? o.call(e).done(t).fail(n) : e && ye(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    function p() {
        ae.removeEventListener("DOMContentLoaded", p),
        e.removeEventListener("load", p),
        xe.ready()
    }
    function d(e, t) {
        return t.toUpperCase()
    }
    function h(e) {
        return e.replace(Pe, "ms-").replace(Re, d)
    }
    function m() {
        this.expando = xe.expando + m.uid++
    }
    function g(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e)
    }
    function v(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace($e, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = g(n)
                } catch (e) {}
                We.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function y(e, t, n, r) {
        var o, i, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return xe.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (xe.cssNumber[t] ? "" : "px"), c = (xe.cssNumber[t] || "px" !== l && +u) && _e.exec(xe.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; a--; )
                xe.style(e, t, c + l),
                (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0),
                c /= i;
            c *= 2,
            xe.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = o)),
        o
    }
    function b(e) {
        var t, n = e.ownerDocument, r = e.nodeName, o = Ve[r];
        return o || (t = n.body.appendChild(n.createElement(r)),
        o = xe.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === o && (o = "block"),
        Ve[r] = o,
        o)
    }
    function w(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
            (r = e[i]).style && (n = r.style.display,
            t ? ("none" === n && (o[i] = Ie.get(r, "display") || null,
            o[i] || (r.style.display = "")),
            "" === r.style.display && Ue(r) && (o[i] = b(r))) : "none" !== n && (o[i] = "none",
            Ie.set(r, "display", n)));
        for (i = 0; i < a; i++)
            null != o[i] && (e[i].style.display = o[i]);
        return e
    }
    function x(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && i(e, t) ? xe.merge([e], n) : n
    }
    function T(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Ie.set(e[n], "globalEval", !t || Ie.get(t[n], "globalEval"))
    }
    function C(e, t, n, o, i) {
        for (var a, s, u, l, c, f, p = t.createDocumentFragment(), d = [], h = 0, m = e.length; h < m; h++)
            if ((a = e[h]) || 0 === a)
                if ("object" === r(a))
                    xe.merge(d, a.nodeType ? [a] : a);
                else if (Ze.test(a)) {
                    for (s = s || p.appendChild(t.createElement("div")),
                    u = (Ge.exec(a) || ["", ""])[1].toLowerCase(),
                    l = Je[u] || Je._default,
                    s.innerHTML = l[1] + xe.htmlPrefilter(a) + l[2],
                    f = l[0]; f--; )
                        s = s.lastChild;
                    xe.merge(d, s.childNodes),
                    (s = p.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(a));
        for (p.textContent = "",
        h = 0; a = d[h++]; )
            if (o && xe.inArray(a, o) > -1)
                i && i.push(a);
            else if (c = xe.contains(a.ownerDocument, a),
            s = x(p.appendChild(a), "script"),
            c && T(s),
            n)
                for (f = 0; a = s[f++]; )
                    Qe.test(a.type || "") && n.push(a);
        return p
    }
    function E() {
        return !0
    }
    function S() {
        return !1
    }
    function k() {
        try {
            return ae.activeElement
        } catch (e) {}
    }
    function D(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (s in t)
                D(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n,
        r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
        r = void 0) : (o = r,
        r = n,
        n = void 0)),
        !1 === o)
            o = S;
        else if (!o)
            return e;
        return 1 === i && (a = o,
        (o = function(e) {
            return xe().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = xe.guid++)),
        e.each(function() {
            xe.event.add(this, t, o, r, n)
        })
    }
    function N(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? xe(e).children("tbody")[0] || e : e
    }
    function A(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function j(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function L(e, t) {
        var n, r, o, i, a, s, u, l;
        if (1 === t.nodeType) {
            if (Ie.hasData(e) && (i = Ie.access(e),
            a = Ie.set(t, i),
            l = i.events)) {
                delete a.handle,
                a.events = {};
                for (o in l)
                    for (n = 0,
                    r = l[o].length; n < r; n++)
                        xe.event.add(t, o, l[o][n])
            }
            We.hasData(e) && (s = We.access(e),
            u = xe.extend({}, s),
            We.set(t, u))
        }
    }
    function O(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ke.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function H(e, t, r, o) {
        t = le.apply([], t);
        var i, a, s, u, l, c, f = 0, p = e.length, d = p - 1, h = t[0], m = ye(h);
        if (m || p > 1 && "string" == typeof h && !ve.checkClone && at.test(h))
            return e.each(function(n) {
                var i = e.eq(n);
                m && (t[0] = h.call(this, n, i.html())),
                H(i, t, r, o)
            });
        if (p && (i = C(t, e[0].ownerDocument, !1, e, o),
        a = i.firstChild,
        1 === i.childNodes.length && (i = a),
        a || o)) {
            for (u = (s = xe.map(x(i, "script"), A)).length; f < p; f++)
                l = i,
                f !== d && (l = xe.clone(l, !0, !0),
                u && xe.merge(s, x(l, "script"))),
                r.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                xe.map(s, j),
                f = 0; f < u; f++)
                    l = s[f],
                    Qe.test(l.type || "") && !Ie.access(l, "globalEval") && xe.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? xe._evalUrl && xe._evalUrl(l.src) : n(l.textContent.replace(st, ""), c, l))
        }
        return e
    }
    function q(e, t, n) {
        for (var r, o = t ? xe.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
            n || 1 !== r.nodeType || xe.cleanData(x(r)),
            r.parentNode && (n && xe.contains(r.ownerDocument, r) && T(x(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function M(e, t, n) {
        var r, o, i, a, s = e.style;
        return (n = n || lt(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || xe.contains(e.ownerDocument, e) || (a = xe.style(e, t)),
        !ve.pixelBoxStyles() && ut.test(a) && ct.test(t) && (r = s.width,
        o = s.minWidth,
        i = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = o,
        s.maxWidth = i)),
        void 0 !== a ? a + "" : a
    }
    function P(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function R(e) {
        if (e in gt)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = mt.length; n--; )
            if ((e = mt[n] + t)in gt)
                return e
    }
    function B(e) {
        var t = xe.cssProps[e];
        return t || (t = xe.cssProps[e] = R(e) || e),
        t
    }
    function I(e, t, n) {
        var r = _e.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function W(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += xe.css(e, n + Ye[a], !0, o)),
            r ? ("content" === n && (u -= xe.css(e, "padding" + Ye[a], !0, o)),
            "margin" !== n && (u -= xe.css(e, "border" + Ye[a] + "Width", !0, o))) : (u += xe.css(e, "padding" + Ye[a], !0, o),
            "padding" !== n ? u += xe.css(e, "border" + Ye[a] + "Width", !0, o) : s += xe.css(e, "border" + Ye[a] + "Width", !0, o));
        return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5))),
        u
    }
    function F(e, t, n) {
        var r = lt(e)
          , o = M(e, t, r)
          , i = "border-box" === xe.css(e, "boxSizing", !1, r)
          , a = i;
        if (ut.test(o)) {
            if (!n)
                return o;
            o = "auto"
        }
        return a = a && (ve.boxSizingReliable() || o === e.style[t]),
        ("auto" === o || !parseFloat(o) && "inline" === xe.css(e, "display", !1, r)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)],
        a = !0),
        (o = parseFloat(o) || 0) + W(e, t, n || (i ? "border" : "content"), a, r, o) + "px"
    }
    function $(e, t, n, r, o) {
        return new $.prototype.init(e,t,n,r,o)
    }
    function z() {
        yt && (!1 === ae.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(z) : e.setTimeout(z, xe.fx.interval),
        xe.fx.tick())
    }
    function _() {
        return e.setTimeout(function() {
            vt = void 0
        }),
        vt = Date.now()
    }
    function Y(e, t) {
        var n, r = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            o["margin" + (n = Ye[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function U(e, t, n) {
        for (var r, o = (K.tweeners[t] || []).concat(K.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e))
                return r
    }
    function X(e, t, n) {
        var r, o, i, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, m = e.nodeType && Ue(e), g = Ie.get(e, "fxshow");
        n.queue || (null == (a = xe._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
        s = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || s()
        }
        ),
        a.unqueued++,
        p.always(function() {
            p.always(function() {
                a.unqueued--,
                xe.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (o = t[r],
            bt.test(o)) {
                if (delete t[r],
                i = i || "toggle" === o,
                o === (m ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[r])
                        continue;
                    m = !0
                }
                d[r] = g && g[r] || xe.style(e, r)
            }
        if ((u = !xe.isEmptyObject(t)) || !xe.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
            null == (l = g && g.display) && (l = Ie.get(e, "display")),
            "none" === (c = xe.css(e, "display")) && (l ? c = l : (w([e], !0),
            l = e.style.display || l,
            c = xe.css(e, "display"),
            w([e]))),
            ("inline" === c || "inline-block" === c && null != l) && "none" === xe.css(e, "float") && (u || (p.done(function() {
                h.display = l
            }),
            null == l && (c = h.display,
            l = "none" === c ? "" : c)),
            h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
            p.always(function() {
                h.overflow = n.overflow[0],
                h.overflowX = n.overflow[1],
                h.overflowY = n.overflow[2]
            })),
            u = !1;
            for (r in d)
                u || (g ? "hidden"in g && (m = g.hidden) : g = Ie.access(e, "fxshow", {
                    display: l
                }),
                i && (g.hidden = !m),
                m && w([e], !0),
                p.done(function() {
                    m || w([e]),
                    Ie.remove(e, "fxshow");
                    for (r in d)
                        xe.style(e, r, d[r])
                })),
                u = U(m ? g[r] : 0, r, p),
                r in g || (g[r] = u.start,
                m && (u.end = u.start,
                u.start = 0))
        }
    }
    function V(e, t) {
        var n, r, o, i, a;
        for (n in e)
            if (r = h(n),
            o = t[r],
            i = e[n],
            Array.isArray(i) && (o = i[1],
            i = e[n] = i[0]),
            n !== r && (e[r] = i,
            delete e[n]),
            (a = xe.cssHooks[r]) && "expand"in a) {
                i = a.expand(i),
                delete e[r];
                for (n in i)
                    n in e || (e[n] = i[n],
                    t[n] = o)
            } else
                t[r] = o
    }
    function K(e, t, n) {
        var r, o, i = 0, a = K.prefilters.length, s = xe.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (o)
                return !1;
            for (var t = vt || _(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++)
                l.tweens[i].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
            s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: xe.extend({}, t),
            opts: xe.extend(!0, {
                specialEasing: {},
                easing: xe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: vt || _(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = xe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (V(c, l.opts.specialEasing); i < a; i++)
            if (r = K.prefilters[i].call(l, e, c, l.opts))
                return ye(r.stop) && (xe._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r;
        return xe.map(c, U, l),
        ye(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        xe.fx.timer(xe.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    function G(e) {
        return (e.match(Oe) || []).join(" ")
    }
    function Q(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function J(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(Oe) || [] : []
    }
    function Z(e, t, n, o) {
        var i;
        if (Array.isArray(t))
            xe.each(t, function(t, r) {
                n || Lt.test(e) ? o(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, o)
            });
        else if (n || "object" !== r(t))
            o(e, t);
        else
            for (i in t)
                Z(e + "[" + i + "]", t[i], n, o)
    }
    function ee(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, o = 0, i = t.toLowerCase().match(Oe) || [];
            if (ye(n))
                for (; r = i[o++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function te(e, t, n, r) {
        function o(s) {
            var u;
            return i[s] = !0,
            xe.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || i[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                o(l),
                !1)
            }),
            u
        }
        var i = {}
          , a = e === zt;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }
    function ne(e, t) {
        var n, r, o = xe.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && xe.extend(!0, e, r),
        e
    }
    function re(e, t, n) {
        for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (o in s)
                if (s[o] && s[o].test(r)) {
                    u.unshift(o);
                    break
                }
        if (u[0]in n)
            i = u[0];
        else {
            for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    i = o;
                    break
                }
                a || (a = o)
            }
            i = i || a
        }
        if (i)
            return i !== u[0] && u.unshift(i),
            n[i]
    }
    function oe(e, t, n, r) {
        var o, i, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (i = c.shift(); i; )
            if (e.responseFields[i] && (n[e.responseFields[i]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = i,
            i = c.shift())
                if ("*" === i)
                    i = u;
                else if ("*" !== u && u !== i) {
                    if (!(a = l[u + " " + i] || l["* " + i]))
                        for (o in l)
                            if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e.throws)
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + i
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    var ie = []
      , ae = e.document
      , se = Object.getPrototypeOf
      , ue = ie.slice
      , le = ie.concat
      , ce = ie.push
      , fe = ie.indexOf
      , pe = {}
      , de = pe.toString
      , he = pe.hasOwnProperty
      , me = he.toString
      , ge = me.call(Object)
      , ve = {}
      , ye = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , be = function(e) {
        return null != e && e === e.window
    }
      , we = {
        type: !0,
        src: !0,
        noModule: !0
    }
      , xe = function(e, t) {
        return new xe.fn.init(e,t)
    }
      , Te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    xe.fn = xe.prototype = {
        jquery: "3.3.1",
        constructor: xe,
        length: 0,
        toArray: function() {
            return ue.call(this)
        },
        get: function(e) {
            return null == e ? ue.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = xe.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return xe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(xe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ue.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ce,
        sort: ie.sort,
        splice: ie.splice
    },
    xe.extend = xe.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || ye(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (l && r && (xe.isPlainObject(r) || (o = Array.isArray(r))) ? (o ? (o = !1,
                    i = n && Array.isArray(n) ? n : []) : i = n && xe.isPlainObject(n) ? n : {},
                    a[t] = xe.extend(l, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    xe.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== de.call(e) || (t = se(e)) && ("function" != typeof (n = he.call(t, "constructor") && t.constructor) || me.call(n) !== ge))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            n(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (o(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(Te, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (o(Object(e)) ? xe.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : fe.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                e[o++] = t[r];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                !t(e[o], o) !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0, s = [];
            if (o(e))
                for (r = e.length; a < r; a++)
                    null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e)
                    null != (i = t(e[a], a, n)) && s.push(i);
            return le.apply([], s)
        },
        guid: 1,
        support: ve
    }),
    "function" == typeof Symbol && (xe.fn[Symbol.iterator] = ie[Symbol.iterator]),
    xe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        pe["[object " + t + "]"] = t.toLowerCase()
    });
    var Ce = function(e) {
        function t(e, t, n, r) {
            var o, i, a, s, u, c, p, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!r && ((t ? t.ownerDocument || t : I) !== L && j(t),
            t = t || L,
            H)) {
                if (11 !== h && (u = me.exec(e)))
                    if (o = u[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(o)))
                                return n;
                            if (a.id === o)
                                return n.push(a),
                                n
                        } else if (d && (a = d.getElementById(o)) && R(t, a) && a.id === o)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return G.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((o = u[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return G.apply(n, t.getElementsByClassName(o)),
                            n
                    }
                if (w.qsa && !_[e + " "] && (!q || !q.test(e))) {
                    if (1 !== h)
                        d = t,
                        p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, we) : t.setAttribute("id", s = B),
                        i = (c = E(e)).length; i--; )
                            c[i] = "#" + s + " " + f(c[i]);
                        p = c.join(","),
                        d = ge.test(e) && l(t.parentNode) || t
                    }
                    if (p)
                        try {
                            return G.apply(n, d.querySelectorAll(p)),
                            n
                        } catch (e) {} finally {
                            s === B && t.removeAttribute("id")
                        }
                }
            }
            return k(e.replace(ie, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[B] = !0,
            e
        }
        function o(e) {
            var t = L.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function i(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                x.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function u(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                        n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }
        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function c() {}
        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function p(e, t, n) {
            var r = t.dir
              , o = t.next
              , i = o || r
              , a = n && "parentNode" === i
              , s = F++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, o);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, p = [W, s];
                if (u) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            if (f = t[B] || (t[B] = {}),
                            c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                            o && o === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[i]) && l[0] === W && l[1] === s)
                                    return p[2] = l[2];
                                if (c[i] = p,
                                p[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function d(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function h(e, n, r) {
            for (var o = 0, i = n.length; o < i; o++)
                t(e, n[o], r);
            return r
        }
        function m(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (i = e[s]) && (n && !n(i, r, o) || (a.push(i),
                l && t.push(s)));
            return a
        }
        function g(e, t, n, o, i, a) {
            return o && !o[B] && (o = g(o)),
            i && !i[B] && (i = g(i, a)),
            r(function(r, a, s, u) {
                var l, c, f, p = [], d = [], g = a.length, v = r || h(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : m(v, p, e, s, u), b = n ? i || (r ? e : g || o) ? [] : a : y;
                if (n && n(y, b, s, u),
                o)
                    for (l = m(b, d),
                    o(l, [], s, u),
                    c = l.length; c--; )
                        (f = l[c]) && (b[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (l = [],
                            c = b.length; c--; )
                                (f = b[c]) && l.push(y[c] = f);
                            i(null, b = [], l, u)
                        }
                        for (c = b.length; c--; )
                            (f = b[c]) && (l = i ? J(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else
                    b = m(b === a ? b.splice(g, b.length) : b),
                    i ? i(null, a, b, u) : G.apply(a, b)
            })
        }
        function v(e) {
            for (var t, n, r, o = e.length, i = x.relative[e[0].type], a = i || x.relative[" "], s = i ? 1 : 0, u = p(function(e) {
                return e === t
            }, a, !0), l = p(function(e) {
                return J(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
                var o = !i && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null,
                o
            }
            ]; s < o; s++)
                if (n = x.relative[e[s].type])
                    c = [p(d(c), n)];
                else {
                    if ((n = x.filter[e[s].type].apply(null, e[s].matches))[B]) {
                        for (r = ++s; r < o && !x.relative[e[r].type]; r++)
                            ;
                        return g(s > 1 && d(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ie, "$1"), n, s < r && v(e.slice(s, r)), r < o && v(e = e.slice(r)), r < o && f(e))
                    }
                    c.push(n)
                }
            return d(c)
        }
        function y(e, n) {
            var o = n.length > 0
              , i = e.length > 0
              , a = function(r, a, s, u, l) {
                var c, f, p, d = 0, h = "0", g = r && [], v = [], y = D, b = r || i && x.find.TAG("*", l), w = W += null == y ? 1 : Math.random() || .1, T = b.length;
                for (l && (D = a === L || a || l); h !== T && null != (c = b[h]); h++) {
                    if (i && c) {
                        for (f = 0,
                        a || c.ownerDocument === L || (j(c),
                        s = !H); p = e[f++]; )
                            if (p(c, a || L, s)) {
                                u.push(c);
                                break
                            }
                        l && (W = w)
                    }
                    o && ((c = !p && c) && d--,
                    r && g.push(c))
                }
                if (d += h,
                o && h !== d) {
                    for (f = 0; p = n[f++]; )
                        p(g, v, a, s);
                    if (r) {
                        if (d > 0)
                            for (; h--; )
                                g[h] || v[h] || (v[h] = V.call(u));
                        v = m(v)
                    }
                    G.apply(u, v),
                    l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (W = w,
                D = y),
                g
            };
            return o ? r(a) : a
        }
        var b, w, x, T, C, E, S, k, D, N, A, j, L, O, H, q, M, P, R, B = "sizzle" + 1 * new Date, I = e.document, W = 0, F = 0, $ = n(), z = n(), _ = n(), Y = function(e, t) {
            return e === t && (A = !0),
            0
        }, U = {}.hasOwnProperty, X = [], V = X.pop, K = X.push, G = X.push, Q = X.slice, J = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", oe = new RegExp(ee + "+","g"), ie = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), le = new RegExp(re), ce = new RegExp("^" + te + "$"), fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Z + ")$","i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
        }, pe = /^(?:input|select|textarea|button)$/i, de = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), ye = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, we = function(e, t) {
            return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, xe = function() {
            j()
        }, Te = p(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(X = Q.call(I.childNodes), I.childNodes),
            X[I.childNodes.length].nodeType
        } catch (e) {
            G = {
                apply: X.length ? function(e, t) {
                    K.apply(e, Q.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        j = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : I;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r,
            O = L.documentElement,
            H = !C(L),
            I !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)),
            w.attributes = o(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = o(function(e) {
                return e.appendChild(L.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = he.test(L.getElementsByClassName),
            w.getById = o(function(e) {
                return O.appendChild(e).id = B,
                !L.getElementsByName || !L.getElementsByName(B).length
            }),
            w.getById ? (x.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (x.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n, r, o, i = t.getElementById(e);
                    if (i) {
                        if ((n = i.getAttributeNode("id")) && n.value === e)
                            return [i];
                        for (o = t.getElementsByName(e),
                        r = 0; i = o[r++]; )
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                                return [i]
                    }
                    return []
                }
            }
            ),
            x.find.TAG = w.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], o = 0, i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }
            ,
            x.find.CLASS = w.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && H)
                    return t.getElementsByClassName(e)
            }
            ,
            M = [],
            q = [],
            (w.qsa = he.test(L.querySelectorAll)) && (o(function(e) {
                O.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ee + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || q.push("\\[" + ee + "*(?:value|" + Z + ")"),
                e.querySelectorAll("[id~=" + B + "-]").length || q.push("~="),
                e.querySelectorAll(":checked").length || q.push(":checked"),
                e.querySelectorAll("a#" + B + "+*").length || q.push(".#.+[+~]")
            }),
            o(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && q.push("name" + ee + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"),
                O.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (w.matchesSelector = he.test(P = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(e) {
                w.disconnectedMatch = P.call(e, "*"),
                P.call(e, "[s!='']:x"),
                M.push("!=", re)
            }),
            q = q.length && new RegExp(q.join("|")),
            M = M.length && new RegExp(M.join("|")),
            t = he.test(O.compareDocumentPosition),
            R = t || he.test(O.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            Y = t ? function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === I && R(I, e) ? -1 : t === L || t.ownerDocument === I && R(I, t) ? 1 : N ? J(N, e) - J(N, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n, r = 0, o = e.parentNode, i = t.parentNode, s = [e], u = [t];
                if (!o || !i)
                    return e === L ? -1 : t === L ? 1 : o ? -1 : i ? 1 : N ? J(N, e) - J(N, t) : 0;
                if (o === i)
                    return a(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    u.unshift(n);
                for (; s[r] === u[r]; )
                    r++;
                return r ? a(s[r], u[r]) : s[r] === I ? -1 : u[r] === I ? 1 : 0
            }
            ,
            L) : L
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && j(e),
            n = n.replace(ue, "='$1']"),
            w.matchesSelector && H && !_[n + " "] && (!M || !M.test(n)) && (!q || !q.test(n)))
                try {
                    var r = P.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return t(n, L, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && j(e),
            R(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== L && j(e);
            var n = x.attrHandle[t.toLowerCase()]
              , r = n && U.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : w.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.escape = function(e) {
            return (e + "").replace(be, we)
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, o = 0;
            if (A = !w.detectDuplicates,
            N = !w.sortStable && e.slice(0),
            e.sort(Y),
            A) {
                for (; t = e[o++]; )
                    t === e[o] && (r = n.push(o));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return N = null,
            e
        }
        ,
        T = t.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += T(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += T(t);
            return n
        }
        ,
        (x = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ye),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && $(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : !n || (i += "",
                        "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, m = i !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, b = !1;
                        if (g) {
                            if (i) {
                                for (; m; ) {
                                    for (p = t; p = p[m]; )
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild],
                            a && y) {
                                for (b = (d = (l = (c = (f = (p = g)[B] || (p[B] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === W && l[1]) && l[2],
                                p = d && g.childNodes[d]; p = ++d && p && p[m] || (b = d = 0) || h.pop(); )
                                    if (1 === p.nodeType && ++b && p === t) {
                                        c[e] = [W, d, b];
                                        break
                                    }
                            } else if (y && (b = d = (l = (c = (f = (p = t)[B] || (p[B] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === W && l[1]),
                            !1 === b)
                                for (; (p = ++d && p && p[m] || (b = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((c = (f = p[B] || (p[B] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [W, b]),
                                p !== t)); )
                                    ;
                            return (b -= o) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, i = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[B] ? i(n) : i.length > 1 ? (o = [e, e, "", n],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, o = i(e, n), a = o.length; a--; )
                            e[r = J(e, o[a])] = !(t[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, o)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , o = S(e.replace(ie, "$1"));
                    return o[B] ? r(function(e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--; )
                            (i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, r, i) {
                        return t[0] = e,
                        o(t, null, i, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(ve, ye),
                    function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(ve, ye).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === O
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return de.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[b] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            x.pseudos[b] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(b);
        return c.prototype = x.filters = x.pseudos,
        x.setFilters = new c,
        E = t.tokenize = function(e, n) {
            var r, o, i, a, s, u, l, c = z[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e,
            u = [],
            l = x.preFilter; s; ) {
                r && !(o = ae.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                u.push(i = [])),
                r = !1,
                (o = se.exec(s)) && (r = o.shift(),
                i.push({
                    value: r,
                    type: o[0].replace(ie, " ")
                }),
                s = s.slice(r.length));
                for (a in x.filter)
                    !(o = fe[a].exec(s)) || l[a] && !(o = l[a](o)) || (r = o.shift(),
                    i.push({
                        value: r,
                        type: a,
                        matches: o
                    }),
                    s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
        }
        ,
        S = t.compile = function(e, t) {
            var n, r = [], o = [], i = _[e + " "];
            if (!i) {
                for (t || (t = E(e)),
                n = t.length; n--; )
                    (i = v(t[n]))[B] ? r.push(i) : o.push(i);
                (i = _(e, y(o, r))).selector = e
            }
            return i
        }
        ,
        k = t.select = function(e, t, n, r) {
            var o, i, a, s, u, c = "function" == typeof e && e, p = !r && E(e = c.selector || e);
            if (n = n || [],
            1 === p.length) {
                if ((i = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = i[0]).type && 9 === t.nodeType && H && x.relative[i[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(ve, ye), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(i.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o],
                !x.relative[s = a.type]); )
                    if ((u = x.find[s]) && (r = u(a.matches[0].replace(ve, ye), ge.test(i[0].type) && l(t.parentNode) || t))) {
                        if (i.splice(o, 1),
                        !(e = r.length && f(i)))
                            return G.apply(n, r),
                            n;
                        break
                    }
            }
            return (c || S(e, p))(r, t, !H, n, !t || ge.test(e) && l(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = B.split("").sort(Y).join("") === B,
        w.detectDuplicates = !!A,
        j(),
        w.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("fieldset"))
        }),
        o(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && o(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        o(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(Z, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    xe.find = Ce,
    xe.expr = Ce.selectors,
    xe.expr[":"] = xe.expr.pseudos,
    xe.uniqueSort = xe.unique = Ce.uniqueSort,
    xe.text = Ce.getText,
    xe.isXMLDoc = Ce.isXML,
    xe.contains = Ce.contains,
    xe.escapeSelector = Ce.escape;
    var Ee = function(e, t, n) {
        for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && xe(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , Se = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , ke = xe.expr.match.needsContext
      , De = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    xe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? xe.find.matchesSelector(r, e) ? [r] : [] : xe.find.matches(e, xe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    xe.fn.extend({
        find: function(e) {
            var t, n, r = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(xe(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (xe.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                xe.find(e, o[t], n);
            return r > 1 ? xe.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(a(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(a(this, e || [], !0))
        },
        is: function(e) {
            return !!a(this, "string" == typeof e && ke.test(e) ? xe(e) : e || [], !1).length
        }
    });
    var Ne, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (xe.fn.init = function(e, t, n) {
        var r, o;
        if (!e)
            return this;
        if (n = n || Ne,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ae.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof xe ? t[0] : t,
                xe.merge(this, xe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)),
                De.test(r[1]) && xe.isPlainObject(t))
                    for (r in t)
                        ye(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = ae.getElementById(r[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : ye(e) ? void 0 !== n.ready ? n.ready(e) : e(xe) : xe.makeArray(e, this)
    }
    ).prototype = xe.fn,
    Ne = xe(ae);
    var je = /^(?:parents|prev(?:Until|All))/
      , Le = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    xe.fn.extend({
        has: function(e) {
            var t = xe(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (xe.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, o = this.length, i = [], a = "string" != typeof e && xe(e);
            if (!ke.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && xe.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
            return this.pushStack(i.length > 1 ? xe.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? fe.call(xe(e), this[0]) : fe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(xe.uniqueSort(xe.merge(this.get(), xe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    xe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Ee(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Ee(e, "parentNode", n)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return Ee(e, "nextSibling")
        },
        prevAll: function(e) {
            return Ee(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Ee(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Ee(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Se((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Se(e.firstChild)
        },
        contents: function(e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e),
            xe.merge([], e.childNodes))
        }
    }, function(e, t) {
        xe.fn[e] = function(n, r) {
            var o = xe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (o = xe.filter(r, o)),
            this.length > 1 && (Le[e] || xe.uniqueSort(o),
            je.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var Oe = /[^\x20\t\r\n\f]+/g;
    xe.Callbacks = function(e) {
        e = "string" == typeof e ? u(e) : xe.extend({}, e);
        var t, n, o, i, a = [], s = [], l = -1, c = function() {
            for (i = i || e.once,
            o = t = !0; s.length; l = -1)
                for (n = s.shift(); ++l < a.length; )
                    !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (a = n ? [] : "")
        }, f = {
            add: function() {
                return a && (n && !t && (l = a.length - 1,
                s.push(n)),
                function t(n) {
                    xe.each(n, function(n, o) {
                        ye(o) ? e.unique && f.has(o) || a.push(o) : o && o.length && "string" !== r(o) && t(o)
                    })
                }(arguments),
                n && !t && c()),
                this
            },
            remove: function() {
                return xe.each(arguments, function(e, t) {
                    for (var n; (n = xe.inArray(t, a, n)) > -1; )
                        a.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? xe.inArray(e, a) > -1 : a.length > 0
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return i = s = [],
                a = n = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return i = s = [],
                n || t || (a = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                s.push(n),
                t || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    xe.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", xe.Callbacks("memory"), xe.Callbacks("memory"), 2], ["resolve", "done", xe.Callbacks("once memory"), xe.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", xe.Callbacks("once memory"), xe.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , o = {
                state: function() {
                    return r
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return o.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return xe.Deferred(function(t) {
                        xe.each(n, function(n, r) {
                            var o = ye(e[r[4]]) && e[r[4]];
                            i[r[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && ye(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, o) {
                    function i(t, n, r, o) {
                        return function() {
                            var s = this
                              , u = arguments
                              , f = function() {
                                var e, f;
                                if (!(t < a)) {
                                    if ((e = r.apply(s, u)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    f = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    ye(f) ? o ? f.call(e, i(a, n, l, o), i(a, n, c, o)) : (a++,
                                    f.call(e, i(a, n, l, o), i(a, n, c, o), i(a, n, l, n.notifyWith))) : (r !== l && (s = void 0,
                                    u = [e]),
                                    (o || n.resolveWith)(s, u))
                                }
                            }
                              , p = o ? f : function() {
                                try {
                                    f()
                                } catch (e) {
                                    xe.Deferred.exceptionHook && xe.Deferred.exceptionHook(e, p.stackTrace),
                                    t + 1 >= a && (r !== c && (s = void 0,
                                    u = [e]),
                                    n.rejectWith(s, u))
                                }
                            }
                            ;
                            t ? p() : (xe.Deferred.getStackHook && (p.stackTrace = xe.Deferred.getStackHook()),
                            e.setTimeout(p))
                        }
                    }
                    var a = 0;
                    return xe.Deferred(function(e) {
                        n[0][3].add(i(0, e, ye(o) ? o : l, e.notifyWith)),
                        n[1][3].add(i(0, e, ye(t) ? t : l)),
                        n[2][3].add(i(0, e, ye(r) ? r : c))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? xe.extend(e, o) : o
                }
            }
              , i = {};
            return xe.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                o[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                i[t[0]] = function() {
                    return i[t[0] + "With"](this === i ? void 0 : this, arguments),
                    this
                }
                ,
                i[t[0] + "With"] = a.fireWith
            }),
            o.promise(i),
            t && t.call(i, i),
            i
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , o = ue.call(arguments)
              , i = xe.Deferred()
              , a = function(e) {
                return function(n) {
                    r[e] = this,
                    o[e] = arguments.length > 1 ? ue.call(arguments) : n,
                    --t || i.resolveWith(r, o)
                }
            };
            if (t <= 1 && (f(e, i.done(a(n)).resolve, i.reject, !t),
            "pending" === i.state() || ye(o[n] && o[n].then)))
                return i.then();
            for (; n--; )
                f(o[n], a(n), i.reject);
            return i.promise()
        }
    });
    var He = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    xe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && He.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    xe.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var qe = xe.Deferred();
    xe.fn.ready = function(e) {
        return qe.then(e).catch(function(e) {
            xe.readyException(e)
        }),
        this
    }
    ,
    xe.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --xe.readyWait : xe.isReady) || (xe.isReady = !0,
            !0 !== e && --xe.readyWait > 0 || qe.resolveWith(ae, [xe]))
        }
    }),
    xe.ready.then = qe.then,
    "complete" === ae.readyState || "loading" !== ae.readyState && !ae.documentElement.doScroll ? e.setTimeout(xe.ready) : (ae.addEventListener("DOMContentLoaded", p),
    e.addEventListener("load", p));
    var Me = function(e, t, n, o, i, a, s) {
        var u = 0
          , l = e.length
          , c = null == n;
        if ("object" === r(n)) {
            i = !0;
            for (u in n)
                Me(e, t, u, n[u], !0, a, s)
        } else if (void 0 !== o && (i = !0,
        ye(o) || (s = !0),
        c && (s ? (t.call(e, o),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(xe(e), n)
        }
        )),
        t))
            for (; u < l; u++)
                t(e[u], n, s ? o : o.call(e[u], u, t(e[u], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : a
    }
      , Pe = /^-ms-/
      , Re = /-([a-z])/g
      , Be = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    m.uid = 1,
    m.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Be(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t)
                o[h(t)] = n;
            else
                for (r in t)
                    o[h(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(h) : (t = h(t))in r ? [t] : t.match(Oe) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || xe.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !xe.isEmptyObject(t)
        }
    };
    var Ie = new m
      , We = new m
      , Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , $e = /[A-Z]/g;
    xe.extend({
        hasData: function(e) {
            return We.hasData(e) || Ie.hasData(e)
        },
        data: function(e, t, n) {
            return We.access(e, t, n)
        },
        removeData: function(e, t) {
            We.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ie.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ie.remove(e, t)
        }
    }),
    xe.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0], a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = We.get(i),
                1 === i.nodeType && !Ie.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = h(r.slice(5)),
                        v(i, r, o[r]));
                    Ie.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                We.set(this, e)
            }) : Me(this, function(t) {
                var n;
                if (i && void 0 === t) {
                    if (void 0 !== (n = We.get(i, e)))
                        return n;
                    if (void 0 !== (n = v(i, e)))
                        return n
                } else
                    this.each(function() {
                        We.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                We.remove(this, e)
            })
        }
    }),
    xe.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Ie.get(e, t),
                n && (!r || Array.isArray(n) ? r = Ie.access(e, t, xe.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = xe.queue(e, t)
              , r = n.length
              , o = n.shift()
              , i = xe._queueHooks(e, t)
              , a = function() {
                xe.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(),
            r--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete i.stop,
            o.call(e, a, i)),
            !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ie.get(e, n) || Ie.access(e, n, {
                empty: xe.Callbacks("once memory").add(function() {
                    Ie.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    xe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? xe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = xe.queue(this, e, t);
                xe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && xe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                xe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, o = xe.Deferred(), i = this, a = this.length, s = function() {
                --r || o.resolveWith(i, [i])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = Ie.get(i[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            o.promise(t)
        }
    });
    var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , _e = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$","i")
      , Ye = ["Top", "Right", "Bottom", "Left"]
      , Ue = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && xe.contains(e.ownerDocument, e) && "none" === xe.css(e, "display")
    }
      , Xe = function(e, t, n, r) {
        var o, i, a = {};
        for (i in t)
            a[i] = e.style[i],
            e.style[i] = t[i];
        o = n.apply(e, r || []);
        for (i in t)
            e.style[i] = a[i];
        return o
    }
      , Ve = {};
    xe.fn.extend({
        show: function() {
            return w(this, !0)
        },
        hide: function() {
            return w(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ue(this) ? xe(this).show() : xe(this).hide()
            })
        }
    });
    var Ke = /^(?:checkbox|radio)$/i
      , Ge = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , Qe = /^$|^module$|\/(?:java|ecma)script/i
      , Je = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Je.optgroup = Je.option,
    Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead,
    Je.th = Je.td;
    var Ze = /<|&#?\w+;/;
    !function() {
        var e = ae.createDocumentFragment().appendChild(ae.createElement("div"))
          , t = ae.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var et = ae.documentElement
      , tt = /^key/
      , nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , rt = /^([^.]*)(?:\.(.+)|)/;
    xe.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, p, d, h, m, g = Ie.get(e);
            if (g)
                for (n.handler && (n = (i = n).handler,
                o = i.selector),
                o && xe.find.matchesSelector(et, o),
                n.guid || (n.guid = xe.guid++),
                (u = g.events) || (u = g.events = {}),
                (a = g.handle) || (a = g.handle = function(t) {
                    return void 0 !== xe && xe.event.triggered !== t.type ? xe.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(Oe) || [""]).length; l--; )
                    d = m = (s = rt.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = xe.event.special[d] || {},
                    d = (o ? f.delegateType : f.bindType) || d,
                    f = xe.event.special[d] || {},
                    c = xe.extend({
                        type: d,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && xe.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    xe.event.global[d] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, p, d, h, m, g = Ie.hasData(e) && Ie.get(e);
            if (g && (u = g.events)) {
                for (l = (t = (t || "").match(Oe) || [""]).length; l--; )
                    if (s = rt.exec(t[l]) || [],
                    d = m = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        for (f = xe.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = i = p.length; i--; )
                            c = p[i],
                            !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || xe.removeEvent(e, d, g.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            xe.event.remove(e, d + t[l], n, r, !0);
                xe.isEmptyObject(u) && Ie.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a, s = xe.event.fix(e), u = new Array(arguments.length), l = (Ie.get(this, "events") || {})[s.type] || [], c = xe.event.special[s.type] || {};
            for (u[0] = s,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = xe.event.handlers.call(this, s, l),
                t = 0; (o = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = o.elem,
                    n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i,
                        s.data = i.data,
                        void 0 !== (r = ((xe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (i = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? xe(o, this).index(l) > -1 : xe.find(o, this, null, [l]).length),
                            a[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(xe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ye(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[xe.expando] ? e : new xe.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === k() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && i(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return i(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    xe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    xe.Event = function(e, t) {
        if (!(this instanceof xe.Event))
            return new xe.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? E : S,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && xe.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[xe.expando] = !0
    }
    ,
    xe.Event.prototype = {
        constructor: xe.Event,
        isDefaultPrevented: S,
        isPropagationStopped: S,
        isImmediatePropagationStopped: S,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = E,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = E,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = E,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    xe.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && tt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && nt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, xe.event.addProp),
    xe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        xe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, o = e.relatedTarget, i = e.handleObj;
                return o && (o === r || xe.contains(r, o)) || (e.type = i.origType,
                n = i.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    xe.fn.extend({
        on: function(e, t, n, r) {
            return D(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return D(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                xe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = S),
            this.each(function() {
                xe.event.remove(this, e, n, t)
            })
        }
    });
    var ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , it = /<script|<style|<link/i
      , at = /checked\s*(?:[^=]|=\s*.checked.)/i
      , st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    xe.extend({
        htmlPrefilter: function(e) {
            return e.replace(ot, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, o, i, a, s = e.cloneNode(!0), u = xe.contains(e.ownerDocument, e);
            if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || xe.isXMLDoc(e)))
                for (a = x(s),
                r = 0,
                o = (i = x(e)).length; r < o; r++)
                    O(i[r], a[r]);
            if (t)
                if (n)
                    for (i = i || x(e),
                    a = a || x(s),
                    r = 0,
                    o = i.length; r < o; r++)
                        L(i[r], a[r]);
                else
                    L(e, s);
            return (a = x(s, "script")).length > 0 && T(a, !u && x(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, o = xe.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (Be(n)) {
                    if (t = n[Ie.expando]) {
                        if (t.events)
                            for (r in t.events)
                                o[r] ? xe.event.remove(n, r) : xe.removeEvent(n, r, t.handle);
                        n[Ie.expando] = void 0
                    }
                    n[We.expando] && (n[We.expando] = void 0)
                }
        }
    }),
    xe.fn.extend({
        detach: function(e) {
            return q(this, e, !0)
        },
        remove: function(e) {
            return q(this, e)
        },
        text: function(e) {
            return Me(this, function(e) {
                return void 0 === e ? xe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return H(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || N(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return H(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = N(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return H(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return H(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (xe.cleanData(x(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return xe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Me(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !it.test(e) && !Je[(Ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = xe.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (xe.cleanData(x(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return H(this, arguments, function(t) {
                var n = this.parentNode;
                xe.inArray(this, e) < 0 && (xe.cleanData(x(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    xe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        xe.fn[e] = function(e) {
            for (var n, r = [], o = xe(e), i = o.length - 1, a = 0; a <= i; a++)
                n = a === i ? this : this.clone(!0),
                xe(o[a])[t](n),
                ce.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var ut = new RegExp("^(" + ze + ")(?!px)[a-z%]+$","i")
      , lt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , ct = new RegExp(Ye.join("|"),"i");
    !function() {
        function t() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                et.appendChild(u).appendChild(l);
                var t = e.getComputedStyle(l);
                r = "1%" !== t.top,
                s = 12 === n(t.marginLeft),
                l.style.right = "60%",
                a = 36 === n(t.right),
                o = 36 === n(t.width),
                l.style.position = "absolute",
                i = 36 === l.offsetWidth || "absolute",
                et.removeChild(u),
                l = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, i, a, s, u = ae.createElement("div"), l = ae.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        ve.clearCloneStyle = "content-box" === l.style.backgroundClip,
        xe.extend(ve, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                s
            },
            scrollboxSize: function() {
                return t(),
                i
            }
        }))
    }();
    var ft = /^(none|table(?!-c[ea]).+)/
      , pt = /^--/
      , dt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ht = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , mt = ["Webkit", "Moz", "ms"]
      , gt = ae.createElement("div").style;
    xe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = M(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = h(t), u = pt.test(t), l = e.style;
                if (u || (t = B(s)),
                a = xe.cssHooks[t] || xe.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                "string" == (i = typeof n) && (o = _e.exec(n)) && o[1] && (n = y(e, t, o),
                i = "number"),
                null != n && n === n && ("number" === i && (n += o && o[3] || (xe.cssNumber[s] ? "" : "px")),
                ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = h(t);
            return pt.test(t) || (t = B(s)),
            (a = xe.cssHooks[t] || xe.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = M(e, t, r)),
            "normal" === o && t in ht && (o = ht[t]),
            "" === n || n ? (i = parseFloat(o),
            !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }),
    xe.each(["height", "width"], function(e, t) {
        xe.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !ft.test(xe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, r) : Xe(e, dt, function() {
                        return F(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var o, i = lt(e), a = "border-box" === xe.css(e, "boxSizing", !1, i), s = r && W(e, t, r, a, i);
                return a && ve.scrollboxSize() === i.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - W(e, t, "border", !1, i) - .5)),
                s && (o = _e.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                n = xe.css(e, t)),
                I(e, n, s)
            }
        }
    }),
    xe.cssHooks.marginLeft = P(ve.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(M(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    xe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        xe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    o[e + Ye[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        },
        "margin" !== e && (xe.cssHooks[e + t].set = I)
    }),
    xe.fn.extend({
        css: function(e, t) {
            return Me(this, function(e, t, n) {
                var r, o, i = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = lt(e),
                    o = t.length; a < o; a++)
                        i[t[a]] = xe.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? xe.style(e, t, n) : xe.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    xe.Tween = $,
    $.prototype = {
        constructor: $,
        init: function(e, t, n, r, o, i) {
            this.elem = e,
            this.prop = n,
            this.easing = o || xe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = i || (xe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.options.duration ? this.pos = t = xe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : $.propHooks._default.set(this),
            this
        }
    },
    $.prototype.init.prototype = $.prototype,
    $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = xe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                xe.fx.step[e.prop] ? xe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[xe.cssProps[e.prop]] && !xe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : xe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    xe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    xe.fx = $.prototype.init,
    xe.fx.step = {};
    var vt, yt, bt = /^(?:toggle|show|hide)$/, wt = /queueHooks$/;
    xe.Animation = xe.extend(K, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return y(n.elem, e, _e.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            ye(e) ? (t = e,
            e = ["*"]) : e = e.match(Oe);
            for (var n, r = 0, o = e.length; r < o; r++)
                n = e[r],
                K.tweeners[n] = K.tweeners[n] || [],
                K.tweeners[n].unshift(t)
        },
        prefilters: [X],
        prefilter: function(e, t) {
            t ? K.prefilters.unshift(e) : K.prefilters.push(e)
        }
    }),
    xe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? xe.extend({}, e) : {
            complete: n || !n && t || ye(e) && e,
            duration: e,
            easing: n && t || t && !ye(t) && t
        };
        return xe.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in xe.fx.speeds ? r.duration = xe.fx.speeds[r.duration] : r.duration = xe.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            ye(r.old) && r.old.call(this),
            r.queue && xe.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    xe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Ue).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var o = xe.isEmptyObject(e)
              , i = xe.speed(t, n, r)
              , a = function() {
                var t = K(this, xe.extend({}, e), i);
                (o || Ie.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , i = xe.timers
                  , a = Ie.get(this);
                if (o)
                    a[o] && a[o].stop && r(a[o]);
                else
                    for (o in a)
                        a[o] && a[o].stop && wt.test(o) && r(a[o]);
                for (o = i.length; o--; )
                    i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n),
                    t = !1,
                    i.splice(o, 1));
                !t && n || xe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = Ie.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = xe.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                xe.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = i.length; t--; )
                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                    i.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    xe.each(["toggle", "show", "hide"], function(e, t) {
        var n = xe.fn[t];
        xe.fn[t] = function(e, r, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Y(t, !0), e, r, o)
        }
    }),
    xe.each({
        slideDown: Y("show"),
        slideUp: Y("hide"),
        slideToggle: Y("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        xe.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    xe.timers = [],
    xe.fx.tick = function() {
        var e, t = 0, n = xe.timers;
        for (vt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || xe.fx.stop(),
        vt = void 0
    }
    ,
    xe.fx.timer = function(e) {
        xe.timers.push(e),
        xe.fx.start()
    }
    ,
    xe.fx.interval = 13,
    xe.fx.start = function() {
        yt || (yt = !0,
        z())
    }
    ,
    xe.fx.stop = function() {
        yt = null
    }
    ,
    xe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    xe.fn.delay = function(t, n) {
        return t = xe.fx ? xe.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var o = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(o)
            }
        })
    }
    ,
    function() {
        var e = ae.createElement("input")
          , t = ae.createElement("select").appendChild(ae.createElement("option"));
        e.type = "checkbox",
        ve.checkOn = "" !== e.value,
        ve.optSelected = t.selected,
        (e = ae.createElement("input")).value = "t",
        e.type = "radio",
        ve.radioValue = "t" === e.value
    }();
    var xt, Tt = xe.expr.attrHandle;
    xe.fn.extend({
        attr: function(e, t) {
            return Me(this, xe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                xe.removeAttr(this, e)
            })
        }
    }),
    xe.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return void 0 === e.getAttribute ? xe.prop(e, t, n) : (1 === i && xe.isXMLDoc(e) || (o = xe.attrHooks[t.toLowerCase()] || (xe.expr.match.bool.test(t) ? xt : void 0)),
                void 0 !== n ? null === n ? void xe.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (r = o.get(e, t)) ? r : null == (r = xe.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ve.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, o = t && t.match(Oe);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    e.removeAttribute(n)
        }
    }),
    xt = {
        set: function(e, t, n) {
            return !1 === t ? xe.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    xe.each(xe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Tt[t] || xe.find.attr;
        Tt[t] = function(e, t, r) {
            var o, i, a = t.toLowerCase();
            return r || (i = Tt[a],
            Tt[a] = o,
            o = null != n(e, t, r) ? a : null,
            Tt[a] = i),
            o
        }
    });
    var Ct = /^(?:input|select|textarea|button)$/i
      , Et = /^(?:a|area)$/i;
    xe.fn.extend({
        prop: function(e, t) {
            return Me(this, xe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[xe.propFix[e] || e]
            })
        }
    }),
    xe.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return 1 === i && xe.isXMLDoc(e) || (t = xe.propFix[t] || t,
                o = xe.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = xe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ct.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    ve.optSelected || (xe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    xe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        xe.propFix[this.toLowerCase()] = this
    }),
    xe.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s, u = 0;
            if (ye(e))
                return this.each(function(t) {
                    xe(this).addClass(e.call(this, t, Q(this)))
                });
            if ((t = J(e)).length)
                for (; n = this[u++]; )
                    if (o = Q(n),
                    r = 1 === n.nodeType && " " + G(o) + " ") {
                        for (a = 0; i = t[a++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o !== (s = G(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s, u = 0;
            if (ye(e))
                return this.each(function(t) {
                    xe(this).removeClass(e.call(this, t, Q(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = J(e)).length)
                for (; n = this[u++]; )
                    if (o = Q(n),
                    r = 1 === n.nodeType && " " + G(o) + " ") {
                        for (a = 0; i = t[a++]; )
                            for (; r.indexOf(" " + i + " ") > -1; )
                                r = r.replace(" " + i + " ", " ");
                        o !== (s = G(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : ye(e) ? this.each(function(n) {
                xe(this).toggleClass(e.call(this, n, Q(this), t), t)
            }) : this.each(function() {
                var t, o, i, a;
                if (r)
                    for (o = 0,
                    i = xe(this),
                    a = J(e); t = a[o++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = Q(this)) && Ie.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ie.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + G(Q(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var St = /\r/g;
    xe.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = ye(e),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = r ? e.call(this, n, xe(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = xe.map(o, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = xe.valHooks[this.type] || xe.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = xe.valHooks[o.type] || xe.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(St, "") : null == n ? "" : n : void 0
        }
    }),
    xe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = xe.find.attr(e, "value");
                    return null != t ? t : G(xe.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options, a = e.selectedIndex, s = "select-one" === e.type, u = s ? null : [], l = s ? a + 1 : o.length;
                    for (r = a < 0 ? l : s ? a : 0; r < l; r++)
                        if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = xe(n).val(),
                            s)
                                return t;
                            u.push(t)
                        }
                    return u
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = xe.makeArray(t), a = o.length; a--; )
                        ((r = o[a]).selected = xe.inArray(xe.valHooks.option.get(r), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    xe.each(["radio", "checkbox"], function() {
        xe.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = xe.inArray(xe(e).val(), t) > -1
            }
        },
        ve.checkOn || (xe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    ve.focusin = "onfocusin"in e;
    var kt = /^(?:focusinfocus|focusoutblur)$/
      , Dt = function(e) {
        e.stopPropagation()
    };
    xe.extend(xe.event, {
        trigger: function(t, n, r, o) {
            var i, a, s, u, l, c, f, p, d = [r || ae], h = he.call(t, "type") ? t.type : t, m = he.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = s = r = r || ae,
            3 !== r.nodeType && 8 !== r.nodeType && !kt.test(h + xe.event.triggered) && (h.indexOf(".") > -1 && (h = (m = h.split(".")).shift(),
            m.sort()),
            l = h.indexOf(":") < 0 && "on" + h,
            t = t[xe.expando] ? t : new xe.Event(h,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = m.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : xe.makeArray(n, [t]),
            f = xe.event.special[h] || {},
            o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!o && !f.noBubble && !be(r)) {
                    for (u = f.delegateType || h,
                    kt.test(u + h) || (a = a.parentNode); a; a = a.parentNode)
                        d.push(a),
                        s = a;
                    s === (r.ownerDocument || ae) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (i = 0; (a = d[i++]) && !t.isPropagationStopped(); )
                    p = a,
                    t.type = i > 1 ? u : f.bindType || h,
                    (c = (Ie.get(a, "events") || {})[t.type] && Ie.get(a, "handle")) && c.apply(a, n),
                    (c = l && a[l]) && c.apply && Be(a) && (t.result = c.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = h,
                o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !Be(r) || l && ye(r[h]) && !be(r) && ((s = r[l]) && (r[l] = null),
                xe.event.triggered = h,
                t.isPropagationStopped() && p.addEventListener(h, Dt),
                r[h](),
                t.isPropagationStopped() && p.removeEventListener(h, Dt),
                xe.event.triggered = void 0,
                s && (r[l] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = xe.extend(new xe.Event, n, {
                type: e,
                isSimulated: !0
            });
            xe.event.trigger(r, null, t)
        }
    }),
    xe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                xe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return xe.event.trigger(e, t, n, !0)
        }
    }),
    ve.focusin || xe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            xe.event.simulate(t, e.target, xe.event.fix(e))
        };
        xe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , o = Ie.access(r, t);
                o || r.addEventListener(e, n, !0),
                Ie.access(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , o = Ie.access(r, t) - 1;
                o ? Ie.access(r, t, o) : (r.removeEventListener(e, n, !0),
                Ie.remove(r, t))
            }
        }
    });
    var Nt = e.location
      , At = Date.now()
      , jt = /\?/;
    xe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || xe.error("Invalid XML: " + t),
        n
    }
    ;
    var Lt = /\[\]$/
      , Ot = /\r?\n/g
      , Ht = /^(?:submit|button|image|reset|file)$/i
      , qt = /^(?:input|select|textarea|keygen)/i;
    xe.param = function(e, t) {
        var n, r = [], o = function(e, t) {
            var n = ye(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !xe.isPlainObject(e))
            xe.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                Z(n, e[n], t, o);
        return r.join("&")
    }
    ,
    xe.fn.extend({
        serialize: function() {
            return xe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = xe.prop(this, "elements");
                return e ? xe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !xe(this).is(":disabled") && qt.test(this.nodeName) && !Ht.test(e) && (this.checked || !Ke.test(e))
            }).map(function(e, t) {
                var n = xe(this).val();
                return null == n ? null : Array.isArray(n) ? xe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ot, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ot, "\r\n")
                }
            }).get()
        }
    });
    var Mt = /%20/g
      , Pt = /#.*$/
      , Rt = /([?&])_=[^&]*/
      , Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Wt = /^(?:GET|HEAD)$/
      , Ft = /^\/\//
      , $t = {}
      , zt = {}
      , _t = "*/".concat("*")
      , Yt = ae.createElement("a");
    Yt.href = Nt.href,
    xe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Nt.href,
            type: "GET",
            isLocal: It.test(Nt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": xe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ne(ne(e, xe.ajaxSettings), t) : ne(xe.ajaxSettings, e)
        },
        ajaxPrefilter: ee($t),
        ajaxTransport: ee(zt),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var l, p, d, w, x, T = n;
                c || (c = !0,
                u && e.clearTimeout(u),
                o = void 0,
                a = s || "",
                C.readyState = t > 0 ? 4 : 0,
                l = t >= 200 && t < 300 || 304 === t,
                r && (w = re(h, C, r)),
                w = oe(h, w, C, l),
                l ? (h.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (xe.lastModified[i] = x),
                (x = C.getResponseHeader("etag")) && (xe.etag[i] = x)),
                204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state,
                p = w.data,
                l = !(d = w.error))) : (d = T,
                !t && T || (T = "error",
                t < 0 && (t = 0))),
                C.status = t,
                C.statusText = (n || T) + "",
                l ? v.resolveWith(m, [p, T, C]) : v.rejectWith(m, [C, T, d]),
                C.statusCode(b),
                b = void 0,
                f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]),
                y.fireWith(m, [C, T]),
                f && (g.trigger("ajaxComplete", [C, h]),
                --xe.active || xe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var o, i, a, s, u, l, c, f, p, d, h = xe.ajaxSetup({}, n), m = h.context || h, g = h.context && (m.nodeType || m.jquery) ? xe(m) : xe.event, v = xe.Deferred(), y = xe.Callbacks("once memory"), b = h.statusCode || {}, w = {}, x = {}, T = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s)
                            for (s = {}; t = Bt.exec(a); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return c ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e,
                    w[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            C.always(e[C.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return o && o.abort(t),
                    r(0, t),
                    this
                }
            };
            if (v.promise(C),
            h.url = ((t || h.url || Nt.href) + "").replace(Ft, Nt.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(Oe) || [""],
            null == h.crossDomain) {
                l = ae.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = Yt.protocol + "//" + Yt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = xe.param(h.data, h.traditional)),
            te($t, h, n, C),
            c)
                return C;
            (f = xe.event && h.global) && 0 == xe.active++ && xe.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Wt.test(h.type),
            i = h.url.replace(Pt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Mt, "+")) : (d = h.url.slice(i.length),
            h.data && (h.processData || "string" == typeof h.data) && (i += (jt.test(i) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (i = i.replace(Rt, "$1"),
            d = (jt.test(i) ? "&" : "?") + "_=" + At++ + d),
            h.url = i + d),
            h.ifModified && (xe.lastModified[i] && C.setRequestHeader("If-Modified-Since", xe.lastModified[i]),
            xe.etag[i] && C.setRequestHeader("If-None-Match", xe.etag[i])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType),
            C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers)
                C.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, C, h) || c))
                return C.abort();
            if (T = "abort",
            y.add(h.complete),
            C.done(h.success),
            C.fail(h.error),
            o = te(zt, h, n, C)) {
                if (C.readyState = 1,
                f && g.trigger("ajaxSend", [C, h]),
                c)
                    return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1,
                    o.send(w, r)
                } catch (e) {
                    if (c)
                        throw e;
                    r(-1, e)
                }
            } else
                r(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return xe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return xe.get(e, void 0, t, "script")
        }
    }),
    xe.each(["get", "post"], function(e, t) {
        xe[t] = function(e, n, r, o) {
            return ye(n) && (o = o || r,
            r = n,
            n = void 0),
            xe.ajax(xe.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, xe.isPlainObject(e) && e))
        }
    }),
    xe._evalUrl = function(e) {
        return xe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    xe.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ye(e) && (e = e.call(this[0])),
            t = xe(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return ye(e) ? this.each(function(t) {
                xe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = xe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ye(e);
            return this.each(function(n) {
                xe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                xe(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    xe.expr.pseudos.hidden = function(e) {
        return !xe.expr.pseudos.visible(e)
    }
    ,
    xe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    xe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ut = {
        0: 200,
        1223: 204
    }
      , Xt = xe.ajaxSettings.xhr();
    ve.cors = !!Xt && "withCredentials"in Xt,
    ve.ajax = Xt = !!Xt,
    xe.ajaxTransport(function(t) {
        var n, r;
        if (ve.cors || Xt && !t.crossDomain)
            return {
                send: function(o, i) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (a in o)
                        s.setRequestHeader(a, o[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    xe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    xe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return xe.globalEval(e),
                e
            }
        }
    }),
    xe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    xe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, o) {
                    t = xe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    ae.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Vt = []
      , Kt = /(=)\?(?=&|$)|\?\?/;
    xe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || xe.expando + "_" + At++;
            return this[e] = !0,
            e
        }
    }),
    xe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, s = !1 !== t.jsonp && (Kt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Kt, "$1" + o) : !1 !== t.jsonp && (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return a || xe.error(o + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            i = e[o],
            e[o] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                void 0 === i ? xe(e).removeProp(o) : e[o] = i,
                t[o] && (t.jsonpCallback = n.jsonpCallback,
                Vt.push(o)),
                a && ye(i) && i(a[0]),
                a = i = void 0
            }),
            "script"
    }),
    ve.createHTMLDocument = function() {
        var e = ae.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    xe.parseHTML = function(e, t, n) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (n = t,
        t = !1);
        var r, o, i;
        return t || (ve.createHTMLDocument ? ((r = (t = ae.implementation.createHTMLDocument("")).createElement("base")).href = ae.location.href,
        t.head.appendChild(r)) : t = ae),
        o = De.exec(e),
        i = !n && [],
        o ? [t.createElement(o[1])] : (o = C([e], t, i),
        i && i.length && xe(i).remove(),
        xe.merge([], o.childNodes))
    }
    ,
    xe.fn.load = function(e, t, n) {
        var r, o, i, a = this, s = e.indexOf(" ");
        return s > -1 && (r = G(e.slice(s)),
        e = e.slice(0, s)),
        ye(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        a.length > 0 && xe.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            a.html(r ? xe("<div>").append(xe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    xe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        xe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    xe.expr.pseudos.animated = function(e) {
        return xe.grep(xe.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    xe.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, u, l = xe.css(e, "position"), c = xe(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            i = xe.css(e, "top"),
            u = xe.css(e, "left"),
            ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
            o = r.left) : (a = parseFloat(i) || 0,
            o = parseFloat(u) || 0),
            ye(t) && (t = t.call(e, n, xe.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + o),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    xe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    xe.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === xe.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === xe.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = xe(e).offset()).top += xe.css(e, "borderTopWidth", !0),
                    o.left += xe.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - xe.css(r, "marginTop", !0),
                    left: t.left - o.left - xe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === xe.css(e, "position"); )
                    e = e.offsetParent;
                return e || et
            })
        }
    }),
    xe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        xe.fn[e] = function(r) {
            return Me(this, function(e, r, o) {
                var i;
                if (be(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === o)
                    return i ? i[t] : e[r];
                i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
            }, e, r, arguments.length)
        }
    }),
    xe.each(["top", "left"], function(e, t) {
        xe.cssHooks[t] = P(ve.pixelPosition, function(e, n) {
            if (n)
                return n = M(e, t),
                ut.test(n) ? xe(e).position()[t] + "px" : n
        })
    }),
    xe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        xe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            xe.fn[r] = function(o, i) {
                var a = arguments.length && (n || "boolean" != typeof o)
                  , s = n || (!0 === o || !0 === i ? "margin" : "border");
                return Me(this, function(t, n, o) {
                    var i;
                    return be(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? xe.css(t, n, s) : xe.style(t, n, o, s)
                }, t, a ? o : void 0, a)
            }
        })
    }),
    xe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        xe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    xe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    xe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    xe.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        ye(e))
            return r = ue.call(arguments, 2),
            o = function() {
                return e.apply(t || this, r.concat(ue.call(arguments)))
            }
            ,
            o.guid = e.guid = e.guid || xe.guid++,
            o
    }
    ,
    xe.holdReady = function(e) {
        e ? xe.readyWait++ : xe.ready(!0)
    }
    ,
    xe.isArray = Array.isArray,
    xe.parseJSON = JSON.parse,
    xe.nodeName = i,
    xe.isFunction = ye,
    xe.isWindow = be,
    xe.camelCase = h,
    xe.type = r,
    xe.now = Date.now,
    xe.isNumeric = function(e) {
        var t = xe.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return xe
    });
    var Gt = e.jQuery
      , Qt = e.$;
    return xe.noConflict = function(t) {
        return e.$ === xe && (e.$ = Qt),
        t && e.jQuery === xe && (e.jQuery = Gt),
        xe
    }
    ,
    t || (e.jQuery = e.$ = xe),
    xe
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = window.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function r(e) {
        if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName))
            return window.document.body;
        var o = t(e)
          , i = o.overflow
          , a = o.overflowX;
        return /(auto|scroll)/.test(i + o.overflowY + a) ? e : r(n(e))
    }
    function o(e) {
        var n = e && e.offsetParent
          , r = n && n.nodeName;
        return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? o(n) : n : window.document.documentElement
    }
    function i(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
    }
    function a(e) {
        return null === e.parentNode ? e : a(e.parentNode)
    }
    function s(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return window.document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , r = n ? e : t
          , u = n ? t : e
          , l = document.createRange();
        l.setStart(r, 0),
        l.setEnd(u, 0);
        var c = l.commonAncestorContainer;
        if (e !== c && t !== c || r.contains(u))
            return i(c) ? c : o(c);
        var f = a(e);
        return f.host ? s(f.host, t) : s(e, a(t).host)
    }
    function u(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top"
          , n = "top" === t ? "scrollTop" : "scrollLeft"
          , r = e.nodeName;
        if ("BODY" === r || "HTML" === r) {
            var o = window.document.documentElement;
            return (window.document.scrollingElement || o)[n]
        }
        return e[n]
    }
    function l(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , r = u(t, "top")
          , o = u(t, "left")
          , i = n ? -1 : 1;
        return e.top += r * i,
        e.bottom += r * i,
        e.left += o * i,
        e.right += o * i,
        e
    }
    function c(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , r = "Left" == n ? "Right" : "Bottom";
        return +e["border" + n + "Width"].split("px")[0] + +e["border" + r + "Width"].split("px")[0]
    }
    function f(e, t, n, r) {
        return V(t["offset" + e], n["client" + e], n["offset" + e], re() ? n["offset" + e] + r["margin" + ("Height" === e ? "Top" : "Left")] + r["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }
    function p() {
        var e = window.document.body
          , t = window.document.documentElement
          , n = re() && window.getComputedStyle(t);
        return {
            height: f("Height", e, t, n),
            width: f("Width", e, t, n)
        }
    }
    function d(e) {
        return se({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function h(e) {
        var n = {};
        if (re())
            try {
                n = e.getBoundingClientRect();
                var r = u(e, "top")
                  , o = u(e, "left");
                n.top += r,
                n.left += o,
                n.bottom += r,
                n.right += o
            } catch (e) {}
        else
            n = e.getBoundingClientRect();
        var i = {
            left: n.left,
            top: n.top,
            width: n.right - n.left,
            height: n.bottom - n.top
        }
          , a = "HTML" === e.nodeName ? p() : {}
          , s = a.width || e.clientWidth || i.right - i.left
          , l = a.height || e.clientHeight || i.bottom - i.top
          , f = e.offsetWidth - s
          , h = e.offsetHeight - l;
        if (f || h) {
            var m = t(e);
            f -= c(m, "x"),
            h -= c(m, "y"),
            i.width -= f,
            i.height -= h
        }
        return d(i)
    }
    function m(e, n) {
        var o = re()
          , i = "HTML" === n.nodeName
          , a = h(e)
          , s = h(n)
          , u = r(e)
          , c = t(n)
          , f = +c.borderTopWidth.split("px")[0]
          , p = +c.borderLeftWidth.split("px")[0]
          , m = d({
            top: a.top - s.top - f,
            left: a.left - s.left - p,
            width: a.width,
            height: a.height
        });
        if (m.marginTop = 0,
        m.marginLeft = 0,
        !o && i) {
            var g = +c.marginTop.split("px")[0]
              , v = +c.marginLeft.split("px")[0];
            m.top -= f - g,
            m.bottom -= f - g,
            m.left -= p - v,
            m.right -= p - v,
            m.marginTop = g,
            m.marginLeft = v
        }
        return (o ? n.contains(u) : n === u && "BODY" !== u.nodeName) && (m = l(m, n)),
        m
    }
    function g(e) {
        var t = window.document.documentElement
          , n = m(e, t)
          , r = V(t.clientWidth, window.innerWidth || 0)
          , o = V(t.clientHeight, window.innerHeight || 0)
          , i = u(t)
          , a = u(t, "left");
        return d({
            top: i - n.top + n.marginTop,
            left: a - n.left + n.marginLeft,
            width: r,
            height: o
        })
    }
    function v(e) {
        var r = e.nodeName;
        return "BODY" !== r && "HTML" !== r && ("fixed" === t(e, "position") || v(n(e)))
    }
    function y(e, t, o, i) {
        var a = {
            top: 0,
            left: 0
        }
          , u = s(e, t);
        if ("viewport" === i)
            a = g(u);
        else {
            var l;
            "scrollParent" === i ? (l = r(n(e)),
            "BODY" === l.nodeName && (l = window.document.documentElement)) : l = "window" === i ? window.document.documentElement : i;
            var c = m(l, u);
            if ("HTML" !== l.nodeName || v(u))
                a = c;
            else {
                var f = p()
                  , d = f.height
                  , h = f.width;
                a.top += c.top - c.marginTop,
                a.bottom = d + c.top,
                a.left += c.left - c.marginLeft,
                a.right = h + c.left
            }
        }
        return a.left += o,
        a.top += o,
        a.right -= o,
        a.bottom -= o,
        a
    }
    function b(e) {
        return e.width * e.height
    }
    function w(e, t, n, r, o) {
        var i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var a = y(n, r, i, o)
          , s = {
            top: {
                width: a.width,
                height: t.top - a.top
            },
            right: {
                width: a.right - t.right,
                height: a.height
            },
            bottom: {
                width: a.width,
                height: a.bottom - t.bottom
            },
            left: {
                width: t.left - a.left,
                height: a.height
            }
        }
          , u = Object.keys(s).map(function(e) {
            return se({
                key: e
            }, s[e], {
                area: b(s[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , l = u.filter(function(e) {
            var t = e.width
              , r = e.height;
            return t >= n.clientWidth && r >= n.clientHeight
        })
          , c = 0 < l.length ? l[0].key : u[0].key
          , f = e.split("-")[1];
        return c + (f ? "-" + f : "")
    }
    function x(e, t, n) {
        return m(n, s(t, n))
    }
    function T(e) {
        var t = window.getComputedStyle(e)
          , n = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
          , r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + r,
            height: e.offsetHeight + n
        }
    }
    function C(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function E(e, t, n) {
        n = n.split("-")[0];
        var r = T(e)
          , o = {
            width: r.width,
            height: r.height
        }
          , i = -1 !== ["right", "left"].indexOf(n)
          , a = i ? "top" : "left"
          , s = i ? "left" : "top"
          , u = i ? "height" : "width"
          , l = i ? "width" : "height";
        return o[a] = t[a] + t[u] / 2 - r[u] / 2,
        o[s] = n === s ? t[s] - r[l] : t[C(s)],
        o
    }
    function S(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function k(e, t, n) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === n
            });
        var r = S(e, function(e) {
            return e[t] === n
        });
        return e.indexOf(r)
    }
    function D(t, n, r) {
        return (void 0 === r ? t : t.slice(0, k(t, "name", r))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var r = t.function || t.fn;
            t.enabled && e(r) && (n.offsets.popper = d(n.offsets.popper),
            n.offsets.reference = d(n.offsets.reference),
            n = r(n, t))
        }),
        n
    }
    function N() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = x(this.state, this.popper, this.reference),
            e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.offsets.popper = E(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = "absolute",
            e = D(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function A(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }
    function j(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length - 1; r++) {
            var o = t[r]
              , i = o ? "" + o + n : e;
            if (void 0 !== window.document.body.style[i])
                return i
        }
        return null
    }
    function L() {
        return this.state.isDestroyed = !0,
        A(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
        this.popper.style.left = "",
        this.popper.style.position = "",
        this.popper.style.top = "",
        this.popper.style[j("transform")] = ""),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function O(e, t, n, o) {
        var i = "BODY" === e.nodeName
          , a = i ? window : e;
        a.addEventListener(t, n, {
            passive: !0
        }),
        i || O(r(a.parentNode), t, n, o),
        o.push(a)
    }
    function H(e, t, n, o) {
        n.updateBound = o,
        window.addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var i = r(e);
        return O(i, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = i,
        n.eventsEnabled = !0,
        n
    }
    function q() {
        this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function M(e, t) {
        return window.removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t
    }
    function P() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate),
        this.state = M(this.reference, this.state))
    }
    function R(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function B(e, t) {
        Object.keys(t).forEach(function(n) {
            var r = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && R(t[n]) && (r = "px"),
            e.style[n] = t[n] + r
        })
    }
    function I(e, t) {
        Object.keys(t).forEach(function(n) {
            !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
        })
    }
    function W(e, t, n) {
        var r = S(e, function(e) {
            return e.name === t
        })
          , o = !!r && e.some(function(e) {
            return e.name === n && e.enabled && e.order < r.order
        });
        if (!o) {
            var i = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
        }
        return o
    }
    function F(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e
    }
    function $(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = le.indexOf(e)
          , r = le.slice(n + 1).concat(le.slice(0, n));
        return t ? r.reverse() : r
    }
    function z(e, t, n, r) {
        var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
          , i = +o[1]
          , a = o[2];
        if (!i)
            return e;
        if (0 === a.indexOf("%")) {
            var s;
            switch (a) {
            case "%p":
                s = n;
                break;
            case "%":
            case "%r":
            default:
                s = r
            }
            return d(s)[t] / 100 * i
        }
        if ("vh" === a || "vw" === a) {
            return ("vh" === a ? V(document.documentElement.clientHeight, window.innerHeight || 0) : V(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i
        }
        return i
    }
    function _(e, t, n, r) {
        var o = [0, 0]
          , i = -1 !== ["right", "left"].indexOf(r)
          , a = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , s = a.indexOf(S(a, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var u = /\s*,\s*|\s+/
          , l = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(u)[0]]), [a[s].split(u)[1]].concat(a.slice(s + 1))];
        return l = l.map(function(e, r) {
            var o = (1 === r ? !i : i) ? "height" : "width"
              , a = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                a = !0,
                e) : a ? (e[e.length - 1] += t,
                a = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return z(e, o, t, n)
            })
        }),
        l.forEach(function(e, t) {
            e.forEach(function(n, r) {
                R(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1))
            })
        }),
        o
    }
    function Y(e, t) {
        var n, r = t.offset, o = e.placement, i = e.offsets, a = i.popper, s = i.reference, u = o.split("-")[0];
        return n = R(+r) ? [+r, 0] : _(r, a, s, u),
        "left" === u ? (a.top += n[0],
        a.left -= n[1]) : "right" === u ? (a.top += n[0],
        a.left += n[1]) : "top" === u ? (a.left += n[0],
        a.top -= n[1]) : "bottom" === u && (a.left += n[0],
        a.top += n[1]),
        e.popper = a,
        e
    }
    for (var U = Math.min, X = Math.floor, V = Math.max, K = ["native code", "[object MutationObserverConstructor]"], G = "undefined" != typeof window, Q = ["Edge", "Trident", "Firefox"], J = 0, Z = 0; Z < Q.length; Z += 1)
        if (G && 0 <= navigator.userAgent.indexOf(Q[Z])) {
            J = 1;
            break
        }
    var ee, te = G && function(e) {
        return K.some(function(t) {
            return -1 < (e || "").toString().indexOf(t)
        })
    }(window.MutationObserver), ne = te ? function(e) {
        var t = !1
          , n = 0
          , r = document.createElement("span");
        return new MutationObserver(function() {
            e(),
            t = !1
        }
        ).observe(r, {
            attributes: !0
        }),
        function() {
            t || (t = !0,
            r.setAttribute("x-index", n),
            ++n)
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, J))
        }
    }
    , re = function() {
        return void 0 == ee && (ee = -1 !== navigator.appVersion.indexOf("MSIE 10")),
        ee
    }, oe = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }, ie = function() {
        function e(e, t) {
            for (var n, r = 0; r < t.length; r++)
                n = t[r],
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }(), ae = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }, se = Object.assign || function(e) {
        for (var t, n = 1; n < arguments.length; n++)
            for (var r in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
    }
    , ue = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], le = ue.slice(3), ce = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    }, fe = function() {
        function t(n, r) {
            var o = this
              , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            oe(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(o.update)
            }
            ,
            this.update = ne(this.update.bind(this)),
            this.options = se({}, t.Defaults, i),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = n.jquery ? n[0] : n,
            this.popper = r.jquery ? r[0] : r,
            this.options.modifiers = {},
            Object.keys(se({}, t.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                o.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return se({
                    name: e
                }, o.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state)
            }),
            this.update();
            var a = this.options.eventsEnabled;
            a && this.enableEventListeners(),
            this.state.eventsEnabled = a
        }
        return ie(t, [{
            key: "update",
            value: function() {
                return N.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return L.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return q.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return P.call(this)
            }
        }]),
        t
    }();
    return fe.Utils = ("undefined" == typeof window ? global : window).PopperUtils,
    fe.placements = ue,
    fe.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , r = t.split("-")[1];
                    if (r) {
                        var o = e.offsets
                          , i = o.reference
                          , a = o.popper
                          , s = -1 !== ["bottom", "top"].indexOf(n)
                          , u = s ? "left" : "top"
                          , l = s ? "width" : "height"
                          , c = {
                            start: ae({}, u, i[u]),
                            end: ae({}, u, i[u] + i[l] - a[l])
                        };
                        e.offsets.popper = se({}, a, c[r])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: Y,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || o(e.instance.popper);
                    e.instance.reference === n && (n = o(n));
                    var r = y(e.instance.popper, e.instance.reference, t.padding, n);
                    t.boundaries = r;
                    var i = t.priority
                      , a = e.offsets.popper
                      , s = {
                        primary: function(e) {
                            var n = a[e];
                            return a[e] < r[e] && !t.escapeWithReference && (n = V(a[e], r[e])),
                            ae({}, e, n)
                        },
                        secondary: function(e) {
                            var n = "right" === e ? "left" : "top"
                              , o = a[n];
                            return a[e] > r[e] && !t.escapeWithReference && (o = U(a[n], r[e] - ("right" === e ? a.width : a.height))),
                            ae({}, n, o)
                        }
                    };
                    return i.forEach(function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        a = se({}, a, s[t](e))
                    }),
                    e.offsets.popper = a,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , r = t.reference
                      , o = e.placement.split("-")[0]
                      , i = X
                      , a = -1 !== ["top", "bottom"].indexOf(o)
                      , s = a ? "right" : "bottom"
                      , u = a ? "left" : "top"
                      , l = a ? "width" : "height";
                    return n[s] < i(r[u]) && (e.offsets.popper[u] = i(r[u]) - n[l]),
                    n[u] > i(r[s]) && (e.offsets.popper[u] = i(r[s])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, n) {
                    if (!W(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var r = n.element;
                    if ("string" == typeof r) {
                        if (!(r = e.instance.popper.querySelector(r)))
                            return e
                    } else if (!e.instance.popper.contains(r))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var o = e.placement.split("-")[0]
                      , i = e.offsets
                      , a = i.popper
                      , s = i.reference
                      , u = -1 !== ["left", "right"].indexOf(o)
                      , l = u ? "height" : "width"
                      , c = u ? "Top" : "Left"
                      , f = c.toLowerCase()
                      , p = u ? "left" : "top"
                      , h = u ? "bottom" : "right"
                      , m = T(r)[l];
                    s[h] - m < a[f] && (e.offsets.popper[f] -= a[f] - (s[h] - m)),
                    s[f] + m > a[h] && (e.offsets.popper[f] += s[f] + m - a[h]);
                    var g = s[f] + s[l] / 2 - m / 2
                      , v = t(e.instance.popper, "margin" + c).replace("px", "")
                      , y = g - d(e.offsets.popper)[f] - v;
                    return y = V(U(a[l] - m, y), 0),
                    e.arrowElement = r,
                    e.offsets.arrow = {},
                    e.offsets.arrow[f] = Math.round(y),
                    e.offsets.arrow[p] = "",
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (A(e.instance.modifiers, "inner"))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var n = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement)
                      , r = e.placement.split("-")[0]
                      , o = C(r)
                      , i = e.placement.split("-")[1] || ""
                      , a = [];
                    switch (t.behavior) {
                    case ce.FLIP:
                        a = [r, o];
                        break;
                    case ce.CLOCKWISE:
                        a = $(r);
                        break;
                    case ce.COUNTERCLOCKWISE:
                        a = $(r, !0);
                        break;
                    default:
                        a = t.behavior
                    }
                    return a.forEach(function(s, u) {
                        if (r !== s || a.length === u + 1)
                            return e;
                        r = e.placement.split("-")[0],
                        o = C(r);
                        var l = e.offsets.popper
                          , c = e.offsets.reference
                          , f = X
                          , p = "left" === r && f(l.right) > f(c.left) || "right" === r && f(l.left) < f(c.right) || "top" === r && f(l.bottom) > f(c.top) || "bottom" === r && f(l.top) < f(c.bottom)
                          , d = f(l.left) < f(n.left)
                          , h = f(l.right) > f(n.right)
                          , m = f(l.top) < f(n.top)
                          , g = f(l.bottom) > f(n.bottom)
                          , v = "left" === r && d || "right" === r && h || "top" === r && m || "bottom" === r && g
                          , y = -1 !== ["top", "bottom"].indexOf(r)
                          , b = !!t.flipVariations && (y && "start" === i && d || y && "end" === i && h || !y && "start" === i && m || !y && "end" === i && g);
                        (p || v || b) && (e.flipped = !0,
                        (p || v) && (r = a[u + 1]),
                        b && (i = F(i)),
                        e.placement = r + (i ? "-" + i : ""),
                        e.offsets.popper = se({}, e.offsets.popper, E(e.instance.popper, e.offsets.reference, e.placement)),
                        e = D(e.instance.modifiers, e, "flip"))
                    }),
                    e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , r = e.offsets
                      , o = r.popper
                      , i = r.reference
                      , a = -1 !== ["left", "right"].indexOf(n)
                      , s = -1 === ["top", "left"].indexOf(n);
                    return o[a ? "left" : "top"] = i[n] - (s ? o[a ? "width" : "height"] : 0),
                    e.placement = C(t),
                    e.offsets.popper = d(o),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!W(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = S(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , r = t.y
                      , i = e.offsets.popper
                      , a = S(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, u, l = void 0 === a ? t.gpuAcceleration : a, c = o(e.instance.popper), f = h(c), p = {
                        position: i.position
                    }, d = {
                        left: X(i.left),
                        top: X(i.top),
                        bottom: X(i.bottom),
                        right: X(i.right)
                    }, m = "bottom" === n ? "top" : "bottom", g = "right" === r ? "left" : "right", v = j("transform");
                    if (u = "bottom" == m ? -f.height + d.bottom : d.top,
                    s = "right" == g ? -f.width + d.right : d.left,
                    l && v)
                        p[v] = "translate3d(" + s + "px, " + u + "px, 0)",
                        p[m] = 0,
                        p[g] = 0,
                        p.willChange = "transform";
                    else {
                        var y = "bottom" == m ? -1 : 1
                          , b = "right" == g ? -1 : 1;
                        p[m] = u * y,
                        p[g] = s * b,
                        p.willChange = m + ", " + g
                    }
                    var w = {
                        "x-placement": e.placement
                    };
                    return e.attributes = se({}, w, e.attributes),
                    e.styles = se({}, p, e.styles),
                    e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return B(e.instance.popper, e.styles),
                    I(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && B(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, r, o) {
                    var i = x(o, t, e)
                      , a = w(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", a),
                    B(t, {
                        position: "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    },
    fe
}),
function() {
    function e() {
        if (!j && document.body) {
            j = !0;
            var e = document.body
              , t = document.documentElement
              , n = window.innerHeight
              , o = e.scrollHeight;
            if (L = document.compatMode.indexOf("CSS") >= 0 ? t : e,
            b = e,
            k.keyboardSupport && f("keydown", r),
            top != self)
                N = !0;
            else if (o > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
                var i, a = document.createElement("div");
                if (a.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + L.scrollHeight + "px",
                document.body.appendChild(a),
                x = function() {
                    i || (i = setTimeout(function() {
                        D || (a.style.height = "0",
                        a.style.height = L.scrollHeight + "px",
                        i = null)
                    }, 500))
                }
                ,
                setTimeout(x, 10),
                f("resize", x),
                (w = new z(x)).observe(e, {
                    attributes: !0,
                    childList: !0,
                    characterData: !1
                }),
                L.offsetHeight <= n) {
                    var s = document.createElement("div");
                    s.style.clear = "both",
                    e.appendChild(s)
                }
            }
            k.fixedBackground || D || (e.style.backgroundAttachment = "scroll",
            t.style.backgroundAttachment = "scroll")
        }
    }
    function t(e, t, n) {
        var r, o;
        if (o = n,
        r = (r = t) > 0 ? 1 : -1,
        o = o > 0 ? 1 : -1,
        (A.x !== r || A.y !== o) && (A.x = r,
        A.y = o,
        M = [],
        R = 0),
        1 != k.accelerationMax) {
            var i = Date.now() - R;
            if (i < k.accelerationDelta) {
                var a = (1 + 50 / i) / 2;
                a > 1 && (a = Math.min(a, k.accelerationMax),
                t *= a,
                n *= a)
            }
            R = Date.now()
        }
        if (M.push({
            x: t,
            y: n,
            lastX: t < 0 ? .99 : -.99,
            lastY: n < 0 ? .99 : -.99,
            start: Date.now()
        }),
        !P) {
            var s = e === document.body
              , u = function(r) {
                for (var o = Date.now(), i = 0, a = 0, l = 0; l < M.length; l++) {
                    var c = M[l]
                      , f = o - c.start
                      , p = f >= k.animationTime
                      , d = p ? 1 : f / k.animationTime;
                    k.pulseAlgorithm && (d = v(d));
                    var h = c.x * d - c.lastX >> 0
                      , m = c.y * d - c.lastY >> 0;
                    i += h,
                    a += m,
                    c.lastX += h,
                    c.lastY += m,
                    p && (M.splice(l, 1),
                    l--)
                }
                s ? window.scrollBy(i, a) : (i && (e.scrollLeft += i),
                a && (e.scrollTop += a)),
                t || n || (M = []),
                M.length ? $(u, e, 1e3 / k.frameRate + 1) : P = !1
            };
            $(u, e, 0),
            P = !0
        }
    }
    function n(n) {
        j || e();
        var r = n.target
          , o = s(r);
        if (!o || n.defaultPrevented || n.ctrlKey)
            return !0;
        if (d(b, "embed") || d(r, "embed") && /\.pdf/i.test(r.src) || d(b, "object"))
            return !0;
        var a = -n.wheelDeltaX || n.deltaX || 0
          , u = -n.wheelDeltaY || n.deltaY || 0;
        if (H && (n.wheelDeltaX && h(n.wheelDeltaX, 120) && (a = n.wheelDeltaX / Math.abs(n.wheelDeltaX) * -120),
        n.wheelDeltaY && h(n.wheelDeltaY, 120) && (u = n.wheelDeltaY / Math.abs(n.wheelDeltaY) * -120)),
        a || u || (u = -n.wheelDelta || 0),
        1 === n.deltaMode && (a *= 40,
        u *= 40),
        !k.touchpadSupport && function(e) {
            if (e)
                return O.length || (O = [e, e, e]),
                e = Math.abs(e),
                O.push(e),
                O.shift(),
                clearTimeout(E),
                E = setTimeout(function() {
                    window.localStorage && (localStorage.SS_deltaBuffer = O.join(","))
                }, 1e3),
                !m(120) && !m(100)
        }(u))
            return !0;
        Math.abs(a) > 1.2 && (a *= k.stepSize / 120),
        Math.abs(u) > 1.2 && (u *= k.stepSize / 120),
        t(o, a, u),
        n.preventDefault(),
        i()
    }
    function r(e) {
        var n = e.target
          , r = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== q.spacebar;
        document.contains(b) || (b = document.activeElement);
        var o = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (/^(textarea|select|embed|object)$/i.test(n.nodeName) || d(n, "input") && !o.test(n.type) || d(b, "video") || function(e) {
            var t = e.target
              , n = !1;
            if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                do {
                    if (n = t.classList && t.classList.contains("html5-video-controls"))
                        break
                } while (t = t.parentNode);
            return n
        }(e) || n.isContentEditable || e.defaultPrevented || r)
            return !0;
        if ((d(n, "button") || d(n, "input") && o.test(n.type)) && e.keyCode === q.spacebar)
            return !0;
        var a = 0
          , u = 0
          , l = s(b)
          , c = l.clientHeight;
        switch (l == document.body && (c = window.innerHeight),
        e.keyCode) {
        case q.up:
            u = -k.arrowScroll;
            break;
        case q.down:
            u = k.arrowScroll;
            break;
        case q.spacebar:
            u = -(e.shiftKey ? 1 : -1) * c * .9;
            break;
        case q.pageup:
            u = .9 * -c;
            break;
        case q.pagedown:
            u = .9 * c;
            break;
        case q.home:
            u = -l.scrollTop;
            break;
        case q.end:
            var f = l.scrollHeight - l.scrollTop - c;
            u = f > 0 ? f + 10 : 0;
            break;
        case q.left:
            a = -k.arrowScroll;
            break;
        case q.right:
            a = k.arrowScroll;
            break;
        default:
            return !0
        }
        t(l, a, u),
        e.preventDefault(),
        i()
    }
    function o(e) {
        b = e.target
    }
    function i() {
        clearTimeout(C),
        C = setInterval(function() {
            I = {}
        }, 1e3)
    }
    function a(e, t) {
        for (var n = e.length; n--; )
            I[B(e[n])] = t;
        return t
    }
    function s(e) {
        var t = []
          , n = document.body
          , r = L.scrollHeight;
        do {
            var o = I[B(e)];
            if (o)
                return a(t, o);
            if (t.push(e),
            r === e.scrollHeight) {
                var i = l(L) && l(n) || c(L);
                if (N && u(L) || !N && i)
                    return a(t, _())
            } else if (u(e) && c(e))
                return a(t, e)
        } while (e = e.parentElement)
    }
    function u(e) {
        return e.clientHeight + 10 < e.scrollHeight
    }
    function l(e) {
        return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
    }
    function c(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "scroll" === t || "auto" === t
    }
    function f(e, t) {
        window.addEventListener(e, t, !1)
    }
    function p(e, t) {
        window.removeEventListener(e, t, !1)
    }
    function d(e, t) {
        return (e.nodeName || "").toLowerCase() === t.toLowerCase()
    }
    function h(e, t) {
        return Math.floor(e / t) == e / t
    }
    function m(e) {
        return h(O[0], e) && h(O[1], e) && h(O[2], e)
    }
    function g(e) {
        var t, n;
        return (e *= k.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1,
        t = (n = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - n)),
        t * k.pulseNormalize
    }
    function v(e) {
        return e >= 1 ? 1 : e <= 0 ? 0 : (1 == k.pulseNormalize && (k.pulseNormalize /= g(1)),
        g(e))
    }
    function y(e) {
        for (var t in e)
            S.hasOwnProperty(t) && (k[t] = e[t])
    }
    var b, w, x, T, C, E, S = {
        frameRate: 150,
        animationTime: 600,
        stepSize: 50,
        pulseAlgorithm: !0,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: !0,
        arrowScroll: 50,
        touchpadSupport: !1,
        fixedBackground: !0,
        excluded: ""
    }, k = S, D = !1, N = !1, A = {
        x: 0,
        y: 0
    }, j = !1, L = document.documentElement, O = [], H = /^Mac/.test(navigator.platform), q = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    }, M = [], P = !1, R = Date.now(), B = (T = 0,
    function(e) {
        return e.uniqueID || (e.uniqueID = T++)
    }
    ), I = {};
    window.localStorage && localStorage.SS_deltaBuffer && (O = localStorage.SS_deltaBuffer.split(","));
    var W, F, $ = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, n) {
        window.setTimeout(e, n || 1e3 / 60)
    }
    , z = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, _ = function() {
        if (!W) {
            var e = document.createElement("div");
            e.style.cssText = "height:10000px;width:1px;",
            document.body.appendChild(e);
            var t = document.body.scrollTop;
            document.documentElement.scrollTop,
            window.scrollBy(0, 3),
            W = document.body.scrollTop != t ? document.body : document.documentElement,
            window.scrollBy(0, -3),
            document.body.removeChild(e)
        }
        return W
    }, Y = window.navigator.userAgent, U = /Edge/.test(Y), X = /chrome/i.test(Y) && !U, V = /safari/i.test(Y) && !U, K = /mobile/i.test(Y), G = (X || V) && !K;
    "onwheel"in document.createElement("div") ? F = "wheel" : "onmousewheel"in document.createElement("div") && (F = "mousewheel"),
    F && G && (f(F, n),
    f("mousedown", o),
    f("load", e)),
    y.destroy = function() {
        w && w.disconnect(),
        p(F, n),
        p("mousedown", o),
        p("keydown", r),
        p("resize", x),
        p("load", e)
    }
    ,
    window.SmoothScrollOptions && y(window.SmoothScrollOptions),
    "function" == typeof define && define.amd ? define(function() {
        return y
    }) : "object" == typeof exports ? module.exports = y : window.SmoothScroll = y
}(),
function(e) {
    e.fn.extend({
        slimScroll: function(n) {
            var r = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, n);
            return this.each(function() {
                function o(t) {
                    if (l) {
                        var n = 0;
                        (t = t || window.event).wheelDelta && (n = -t.wheelDelta / 120),
                        t.detail && (n = t.detail / 3);
                        var o = t.target || t.srcTarget || t.srcElement;
                        e(o).closest("." + r.wrapperClass).is(w.parent()) && i(n, !0),
                        t.preventDefault && !b && t.preventDefault(),
                        b || (t.returnValue = !1)
                    }
                }
                function i(e, t, n) {
                    b = !1;
                    var o = e
                      , i = w.outerHeight() - D.outerHeight();
                    if (t && (o = parseInt(D.css("top")) + e * parseInt(r.wheelStep) / 100 * D.outerHeight(),
                    o = Math.min(Math.max(o, 0), i),
                    o = e > 0 ? Math.ceil(o) : Math.floor(o),
                    D.css({
                        top: o + "px"
                    })),
                    o = (m = parseInt(D.css("top")) / (w.outerHeight() - D.outerHeight())) * (w[0].scrollHeight - w.outerHeight()),
                    n) {
                        var a = (o = e) / w[0].scrollHeight * w.outerHeight();
                        a = Math.min(Math.max(a, 0), i),
                        D.css({
                            top: a + "px"
                        })
                    }
                    w.scrollTop(o),
                    w.trigger("slimscrolling", ~~o),
                    s(),
                    u()
                }
                function a() {
                    h = Math.max(w.outerHeight() / w[0].scrollHeight * w.outerHeight(), y),
                    D.css({
                        height: h + "px"
                    });
                    var e = h == w.outerHeight() ? "none" : "block";
                    D.css({
                        display: e
                    })
                }
                function s() {
                    if (a(),
                    clearTimeout(p),
                    m == ~~m) {
                        if (b = r.allowPageScroll,
                        g != m) {
                            var e = 0 == ~~m ? "top" : "bottom";
                            w.trigger("slimscroll", e)
                        }
                    } else
                        b = !1;
                    g = m,
                    h >= w.outerHeight() ? b = !0 : (D.stop(!0, !0).fadeIn("fast"),
                    r.railVisible && k.stop(!0, !0).fadeIn("fast"))
                }
                function u() {
                    r.alwaysVisible || (p = setTimeout(function() {
                        r.disableFadeOut && l || c || f || (D.fadeOut("slow"),
                        k.fadeOut("slow"))
                    }, 1e3))
                }
                var l, c, f, p, d, h, m, g, v = "<div></div>", y = 30, b = !1, w = e(this);
                if (w.parent().hasClass(r.wrapperClass)) {
                    var x = w.scrollTop();
                    if (D = w.siblings("." + r.barClass),
                    k = w.siblings("." + r.railClass),
                    a(),
                    e.isPlainObject(n)) {
                        if ("height"in n && "auto" == n.height) {
                            w.parent().css("height", "auto"),
                            w.css("height", "auto");
                            var T = w.parent().parent().height();
                            w.parent().css("height", T),
                            w.css("height", T)
                        } else if ("height"in n) {
                            var C = n.height;
                            w.parent().css("height", C),
                            w.css("height", C)
                        }
                        if ("scrollTo"in n)
                            x = parseInt(r.scrollTo);
                        else if ("scrollBy"in n)
                            x += parseInt(r.scrollBy);
                        else if ("destroy"in n)
                            return D.remove(),
                            k.remove(),
                            void w.unwrap();
                        i(x, !1, !0)
                    }
                } else if (!(e.isPlainObject(n) && "destroy"in n)) {
                    r.height = "auto" == r.height ? w.parent().height() : r.height;
                    var E = e(v).addClass(r.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: r.width,
                        height: r.height
                    });
                    w.css({
                        overflow: "hidden",
                        width: r.width,
                        height: r.height
                    });
                    var S, k = e(v).addClass(r.railClass).css({
                        width: r.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: r.alwaysVisible && r.railVisible ? "block" : "none",
                        "border-radius": r.railBorderRadius,
                        background: r.railColor,
                        opacity: r.railOpacity,
                        zIndex: 90
                    }), D = e(v).addClass(r.barClass).css({
                        background: r.color,
                        width: r.size,
                        position: "absolute",
                        top: 0,
                        opacity: r.opacity,
                        display: r.alwaysVisible ? "block" : "none",
                        "border-radius": r.borderRadius,
                        BorderRadius: r.borderRadius,
                        MozBorderRadius: r.borderRadius,
                        WebkitBorderRadius: r.borderRadius,
                        zIndex: 99
                    }), N = "right" == r.position ? {
                        right: r.distance
                    } : {
                        left: r.distance
                    };
                    k.css(N),
                    D.css(N),
                    w.wrap(E),
                    w.parent().append(D),
                    w.parent().append(k),
                    r.railDraggable && D.bind("mousedown", function(n) {
                        var r = e(document);
                        return f = !0,
                        t = parseFloat(D.css("top")),
                        pageY = n.pageY,
                        r.bind("mousemove.slimscroll", function(e) {
                            currTop = t + e.pageY - pageY,
                            D.css("top", currTop),
                            i(0, D.position().top, !1)
                        }),
                        r.bind("mouseup.slimscroll", function(e) {
                            f = !1,
                            u(),
                            r.unbind(".slimscroll")
                        }),
                        !1
                    }).bind("selectstart.slimscroll", function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        !1
                    }),
                    k.hover(function() {
                        s()
                    }, function() {
                        u()
                    }),
                    D.hover(function() {
                        c = !0
                    }, function() {
                        c = !1
                    }),
                    w.hover(function() {
                        l = !0,
                        s(),
                        u()
                    }, function() {
                        l = !1,
                        u()
                    }),
                    w.bind("touchstart", function(e, t) {
                        e.originalEvent.touches.length && (d = e.originalEvent.touches[0].pageY)
                    }),
                    w.bind("touchmove", function(e) {
                        b || e.originalEvent.preventDefault(),
                        e.originalEvent.touches.length && (i((d - e.originalEvent.touches[0].pageY) / r.touchScrollStep, !0),
                        d = e.originalEvent.touches[0].pageY)
                    }),
                    a(),
                    "bottom" === r.start ? (D.css({
                        top: w.outerHeight() - D.outerHeight()
                    }),
                    i(0, !0)) : "top" !== r.start && (i(e(r.start).position().top, null, !0),
                    r.alwaysVisible || D.hide()),
                    S = this,
                    window.addEventListener ? (S.addEventListener("DOMMouseScroll", o, !1),
                    S.addEventListener("mousewheel", o, !1)) : document.attachEvent("onmousewheel", o)
                }
            }),
            this
        }
    }),
    e.fn.extend({
        slimscroll: e.fn.slimScroll
    })
}(jQuery);
