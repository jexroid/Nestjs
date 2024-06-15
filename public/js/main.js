(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
    new MutationObserver(n => {
        for (const s of n) if (s.type === "childList") for (const a of s.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }).observe(document, { childList: !0, subtree: !0 });

    function e(n) {
        const s = {};
        return n.integrity && (s.integrity = n.integrity), n.referrerPolicy && (s.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? s.credentials = "include" : n.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(n) {
        if (n.ep) return;
        n.ep = !0;
        const s = e(n);
        fetch(n.href, s)
    }
})();
var Ma = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Aa(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}

var Ti = { exports: {} };
(function (i, t) {
    (function (e, r) {
        i.exports = r()
    })(Ma, function () {
        return function (e) {
            function r(s) {
                if (n[s]) return n[s].exports;
                var a = n[s] = { exports: {}, id: s, loaded: !1 };
                return e[s].call(a.exports, a, a.exports, r), a.loaded = !0, a.exports
            }

            var n = {};
            return r.m = e, r.c = n, r.p = "dist/", r(0)
        }([function (e, r, n) {
            function s(C) {
                return C && C.__esModule ? C : { default: C }
            }

            var a = Object.assign || function (C) {
                for (var I = 1; I < arguments.length; I++) {
                    var D = arguments[I];
                    for (var L in D) Object.prototype.hasOwnProperty.call(D, L) && (C[L] = D[L])
                }
                return C
            }, o = n(1), u = (s(o), n(6)), l = s(u), c = n(7), f = s(c), d = n(8), p = s(d), _ = n(9), h = s(_),
                m = n(10), b = s(m), v = n(11), x = s(v), y = n(14), g = s(y), w = [], k = !1, O = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                }, T = function () {
                    var C = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    if (C && (k = !0), k) return w = (0, x.default)(w, O), (0, b.default)(w, O.once), w
                }, A = function () {
                    w = (0, g.default)(), T()
                }, E = function () {
                    w.forEach(function (C, I) {
                        C.node.removeAttribute("data-aos"), C.node.removeAttribute("data-aos-easing"), C.node.removeAttribute("data-aos-duration"), C.node.removeAttribute("data-aos-delay")
                    })
                }, S = function (C) {
                    return C === !0 || C === "mobile" && h.default.mobile() || C === "phone" && h.default.phone() || C === "tablet" && h.default.tablet() || typeof C == "function" && C() === !0
                }, M = function (C) {
                    O = a(O, C), w = (0, g.default)();
                    var I = document.all && !window.atob;
                    return S(O.disable) || I ? E() : (O.disableMutationObserver || p.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), O.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", O.easing), document.querySelector("body").setAttribute("data-aos-duration", O.duration), document.querySelector("body").setAttribute("data-aos-delay", O.delay), O.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? T(!0) : O.startEvent === "load" ? window.addEventListener(O.startEvent, function () {
                        T(!0)
                    }) : document.addEventListener(O.startEvent, function () {
                        T(!0)
                    }), window.addEventListener("resize", (0, f.default)(T, O.debounceDelay, !0)), window.addEventListener("orientationchange", (0, f.default)(T, O.debounceDelay, !0)), window.addEventListener("scroll", (0, l.default)(function () {
                        (0, b.default)(w, O.once)
                    }, O.throttleDelay)), O.disableMutationObserver || p.default.ready("[data-aos]", A), w)
                };
            e.exports = { init: M, refresh: T, refreshHard: A }
        }, function (e, r) {
        }, , , , , function (e, r) {
            (function (n) {
                function s(S, M, C) {
                    function I(F) {
                        var ht = V, Gt = Y;
                        return V = Y = void 0, Yt = F, nt = S.apply(Gt, ht)
                    }

                    function D(F) {
                        return Yt = F, J = setTimeout(tt, M), Xt ? I(F) : nt
                    }

                    function L(F) {
                        var ht = F - bt, Gt = F - Yt, Zn = M - ht;
                        return Vt ? A(Zn, vt - Gt) : Zn
                    }

                    function B(F) {
                        var ht = F - bt, Gt = F - Yt;
                        return bt === void 0 || ht >= M || ht < 0 || Vt && Gt >= vt
                    }

                    function tt() {
                        var F = E();
                        return B(F) ? ft(F) : void (J = setTimeout(tt, L(F)))
                    }

                    function ft(F) {
                        return J = void 0, U && V ? I(F) : (V = Y = void 0, nt)
                    }

                    function R() {
                        J !== void 0 && clearTimeout(J), Yt = 0, V = bt = Y = J = void 0
                    }

                    function q() {
                        return J === void 0 ? nt : ft(E())
                    }

                    function Q() {
                        var F = E(), ht = B(F);
                        if (V = arguments, Y = this, bt = F, ht) {
                            if (J === void 0) return D(bt);
                            if (Vt) return J = setTimeout(tt, M), I(bt)
                        }
                        return J === void 0 && (J = setTimeout(tt, M)), nt
                    }

                    var V, Y, vt, nt, J, bt, Yt = 0, Xt = !1, Vt = !1, U = !0;
                    if (typeof S != "function") throw new TypeError(d);
                    return M = c(M) || 0, o(C) && (Xt = !!C.leading, Vt = "maxWait" in C, vt = Vt ? T(c(C.maxWait) || 0, M) : vt, U = "trailing" in C ? !!C.trailing : U), Q.cancel = R, Q.flush = q, Q
                }

                function a(S, M, C) {
                    var I = !0, D = !0;
                    if (typeof S != "function") throw new TypeError(d);
                    return o(C) && (I = "leading" in C ? !!C.leading : I, D = "trailing" in C ? !!C.trailing : D), s(S, M, {
                        leading: I,
                        maxWait: M,
                        trailing: D
                    })
                }

                function o(S) {
                    var M = typeof S > "u" ? "undefined" : f(S);
                    return !!S && (M == "object" || M == "function")
                }

                function u(S) {
                    return !!S && (typeof S > "u" ? "undefined" : f(S)) == "object"
                }

                function l(S) {
                    return (typeof S > "u" ? "undefined" : f(S)) == "symbol" || u(S) && O.call(S) == _
                }

                function c(S) {
                    if (typeof S == "number") return S;
                    if (l(S)) return p;
                    if (o(S)) {
                        var M = typeof S.valueOf == "function" ? S.valueOf() : S;
                        S = o(M) ? M + "" : M
                    }
                    if (typeof S != "string") return S === 0 ? S : +S;
                    S = S.replace(h, "");
                    var C = b.test(S);
                    return C || v.test(S) ? x(S.slice(2), C ? 2 : 8) : m.test(S) ? p : +S
                }

                var f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (S) {
                    return typeof S
                } : function (S) {
                    return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S
                }, d = "Expected a function", p = NaN, _ = "[object Symbol]", h = /^\s+|\s+$/g,
                    m = /^[-+]0x[0-9a-f]+$/i, b = /^0b[01]+$/i, v = /^0o[0-7]+$/i, x = parseInt,
                    y = (typeof n > "u" ? "undefined" : f(n)) == "object" && n && n.Object === Object && n,
                    g = (typeof self > "u" ? "undefined" : f(self)) == "object" && self && self.Object === Object && self,
                    w = y || g || Function("return this")(), k = Object.prototype, O = k.toString, T = Math.max,
                    A = Math.min, E = function () {
                        return w.Date.now()
                    };
                e.exports = a
            }).call(r, function () {
                return this
            }())
        }, function (e, r) {
            (function (n) {
                function s(E, S, M) {
                    function C(U) {
                        var F = Q, ht = V;
                        return Q = V = void 0, bt = U, vt = E.apply(ht, F)
                    }

                    function I(U) {
                        return bt = U, nt = setTimeout(B, S), Yt ? C(U) : vt
                    }

                    function D(U) {
                        var F = U - J, ht = U - bt, Gt = S - F;
                        return Xt ? T(Gt, Y - ht) : Gt
                    }

                    function L(U) {
                        var F = U - J, ht = U - bt;
                        return J === void 0 || F >= S || F < 0 || Xt && ht >= Y
                    }

                    function B() {
                        var U = A();
                        return L(U) ? tt(U) : void (nt = setTimeout(B, D(U)))
                    }

                    function tt(U) {
                        return nt = void 0, Vt && Q ? C(U) : (Q = V = void 0, vt)
                    }

                    function ft() {
                        nt !== void 0 && clearTimeout(nt), bt = 0, Q = J = V = nt = void 0
                    }

                    function R() {
                        return nt === void 0 ? vt : tt(A())
                    }

                    function q() {
                        var U = A(), F = L(U);
                        if (Q = arguments, V = this, J = U, F) {
                            if (nt === void 0) return I(J);
                            if (Xt) return nt = setTimeout(B, S), C(J)
                        }
                        return nt === void 0 && (nt = setTimeout(B, S)), vt
                    }

                    var Q, V, Y, vt, nt, J, bt = 0, Yt = !1, Xt = !1, Vt = !0;
                    if (typeof E != "function") throw new TypeError(f);
                    return S = l(S) || 0, a(M) && (Yt = !!M.leading, Xt = "maxWait" in M, Y = Xt ? O(l(M.maxWait) || 0, S) : Y, Vt = "trailing" in M ? !!M.trailing : Vt), q.cancel = ft, q.flush = R, q
                }

                function a(E) {
                    var S = typeof E > "u" ? "undefined" : c(E);
                    return !!E && (S == "object" || S == "function")
                }

                function o(E) {
                    return !!E && (typeof E > "u" ? "undefined" : c(E)) == "object"
                }

                function u(E) {
                    return (typeof E > "u" ? "undefined" : c(E)) == "symbol" || o(E) && k.call(E) == p
                }

                function l(E) {
                    if (typeof E == "number") return E;
                    if (u(E)) return d;
                    if (a(E)) {
                        var S = typeof E.valueOf == "function" ? E.valueOf() : E;
                        E = a(S) ? S + "" : S
                    }
                    if (typeof E != "string") return E === 0 ? E : +E;
                    E = E.replace(_, "");
                    var M = m.test(E);
                    return M || b.test(E) ? v(E.slice(2), M ? 2 : 8) : h.test(E) ? d : +E
                }

                var c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (E) {
                    return typeof E
                } : function (E) {
                    return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E
                }, f = "Expected a function", d = NaN, p = "[object Symbol]", _ = /^\s+|\s+$/g,
                    h = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt,
                    x = (typeof n > "u" ? "undefined" : c(n)) == "object" && n && n.Object === Object && n,
                    y = (typeof self > "u" ? "undefined" : c(self)) == "object" && self && self.Object === Object && self,
                    g = x || y || Function("return this")(), w = Object.prototype, k = w.toString, O = Math.max,
                    T = Math.min, A = function () {
                        return g.Date.now()
                    };
                e.exports = s
            }).call(r, function () {
                return this
            }())
        }, function (e, r) {
            function n(c) {
                var f = void 0, d = void 0;
                for (f = 0; f < c.length; f += 1) if (d = c[f], d.dataset && d.dataset.aos || d.children && n(d.children)) return !0;
                return !1
            }

            function s() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function a() {
                return !!s()
            }

            function o(c, f) {
                var d = window.document, p = s(), _ = new p(u);
                l = f, _.observe(d.documentElement, { childList: !0, subtree: !0, removedNodes: !0 })
            }

            function u(c) {
                c && c.forEach(function (f) {
                    var d = Array.prototype.slice.call(f.addedNodes), p = Array.prototype.slice.call(f.removedNodes),
                        _ = d.concat(p);
                    if (n(_)) return l()
                })
            }

            Object.defineProperty(r, "__esModule", { value: !0 });
            var l = function () {
            };
            r.default = { isSupported: a, ready: o }
        }, function (e, r) {
            function n(d, p) {
                if (!(d instanceof p)) throw new TypeError("Cannot call a class as a function")
            }

            function s() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }

            Object.defineProperty(r, "__esModule", { value: !0 });
            var a = function () {
                function d(p, _) {
                    for (var h = 0; h < _.length; h++) {
                        var m = _[h];
                        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(p, m.key, m)
                    }
                }

                return function (p, _, h) {
                    return _ && d(p.prototype, _), h && d(p, h), p
                }
            }(),
                o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                u = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                l = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                f = function () {
                    function d() {
                        n(this, d)
                    }

                    return a(d, [{
                        key: "phone", value: function () {
                            var p = s();
                            return !(!o.test(p) && !u.test(p.substr(0, 4)))
                        }
                    }, {
                        key: "mobile", value: function () {
                            var p = s();
                            return !(!l.test(p) && !c.test(p.substr(0, 4)))
                        }
                    }, {
                        key: "tablet", value: function () {
                            return this.mobile() && !this.phone()
                        }
                    }]), d
                }();
            r.default = new f
        }, function (e, r) {
            Object.defineProperty(r, "__esModule", { value: !0 });
            var n = function (a, o, u) {
                var l = a.node.getAttribute("data-aos-once");
                o > a.position ? a.node.classList.add("aos-animate") : typeof l < "u" && (l === "false" || !u && l !== "true") && a.node.classList.remove("aos-animate")
            }, s = function (a, o) {
                var u = window.pageYOffset, l = window.innerHeight;
                a.forEach(function (c, f) {
                    n(c, l + u, o)
                })
            };
            r.default = s
        }, function (e, r, n) {
            function s(l) {
                return l && l.__esModule ? l : { default: l }
            }

            Object.defineProperty(r, "__esModule", { value: !0 });
            var a = n(12), o = s(a), u = function (l, c) {
                return l.forEach(function (f, d) {
                    f.node.classList.add("aos-init"), f.position = (0, o.default)(f.node, c.offset)
                }), l
            };
            r.default = u
        }, function (e, r, n) {
            function s(l) {
                return l && l.__esModule ? l : { default: l }
            }

            Object.defineProperty(r, "__esModule", { value: !0 });
            var a = n(13), o = s(a), u = function (l, c) {
                var f = 0, d = 0, p = window.innerHeight, _ = {
                    offset: l.getAttribute("data-aos-offset"),
                    anchor: l.getAttribute("data-aos-anchor"),
                    anchorPlacement: l.getAttribute("data-aos-anchor-placement")
                };
                switch (_.offset && !isNaN(_.offset) && (d = parseInt(_.offset)), _.anchor && document.querySelectorAll(_.anchor) && (l = document.querySelectorAll(_.anchor)[0]), f = (0, o.default)(l).top, _.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        f += l.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        f += l.offsetHeight;
                        break;
                    case "top-center":
                        f += p / 2;
                        break;
                    case "bottom-center":
                        f += p / 2 + l.offsetHeight;
                        break;
                    case "center-center":
                        f += p / 2 + l.offsetHeight / 2;
                        break;
                    case "top-top":
                        f += p;
                        break;
                    case "bottom-top":
                        f += l.offsetHeight + p;
                        break;
                    case "center-top":
                        f += l.offsetHeight / 2 + p
                }
                return _.anchorPlacement || _.offset || isNaN(c) || (d = c), f + d
            };
            r.default = u
        }, function (e, r) {
            Object.defineProperty(r, "__esModule", { value: !0 });
            var n = function (s) {
                for (var a = 0, o = 0; s && !isNaN(s.offsetLeft) && !isNaN(s.offsetTop);) a += s.offsetLeft - (s.tagName != "BODY" ? s.scrollLeft : 0), o += s.offsetTop - (s.tagName != "BODY" ? s.scrollTop : 0), s = s.offsetParent;
                return { top: o, left: a }
            };
            r.default = n
        }, function (e, r) {
            Object.defineProperty(r, "__esModule", { value: !0 });
            var n = function (s) {
                return s = s || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(s, function (a) {
                    return { node: a }
                })
            };
            r.default = n
        }])
    })
})(Ti);
var Pa = Ti.exports;
const Da = Aa(Pa);

function Bt(i) {
    if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i
}

function Oi(i, t) {
    i.prototype = Object.create(t.prototype), i.prototype.constructor = i, i.__proto__ = t
}/*!
 * GSAP 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ot = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
    Le = { duration: .5, overwrite: !1, delay: 0 }, wn, st, X, Ct = 1e8, $ = 1 / Ct, Zr = Math.PI * 2, Ia = Zr / 4,
    La = 0, Si = Math.sqrt, Na = Math.cos, Ra = Math.sin, rt = function (t) {
        return typeof t == "string"
    }, G = function (t) {
        return typeof t == "function"
    }, Wt = function (t) {
        return typeof t == "number"
    }, Tn = function (t) {
        return typeof t > "u"
    }, jt = function (t) {
        return typeof t == "object"
    }, pt = function (t) {
        return t !== !1
    }, On = function () {
        return typeof window < "u"
    }, lr = function (t) {
        return G(t) || rt(t)
    }, ki = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () {
    }, at = Array.isArray, Kr = /(?:-?\.?\d|\.)+/gi, Ei = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Ee = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Br = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ci = /[+-]=-?[.\d]+/,
    Mi = /[^,'"\[\]\s]+/gi, Fa = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, W, Et, Jr, Sn, St = {}, xr = {}, Ai,
    Pi = function (t) {
        return (xr = ve(t, St)) && yt
    }, kn = function (t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }, Ze = function (t, e) {
        return !e && console.warn(t)
    }, Di = function (t, e) {
        return t && (St[t] = e) && xr && (xr[t] = e) || St
    }, Ke = function () {
        return 0
    }, za = { suppressEvents: !0, isStart: !0, kill: !1 }, hr = { suppressEvents: !0, kill: !1 }, ja = { suppressEvents: !0 },
    En = {}, ee = [], tn = {}, Ii, xt = {}, qr = {}, Kn = 30, dr = [], Cn = "", Mn = function (t) {
        var e = t[0], r, n;
        if (jt(e) || G(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
            for (n = dr.length; n-- && !dr[n].targetTest(e););
            r = dr[n]
        }
        for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new ns(t[n], r))) || t.splice(n, 1);
        return t
    }, pe = function (t) {
        return t._gsap || Mn(Mt(t))[0]._gsap
    }, Li = function (t, e, r) {
        return (r = t[e]) && G(r) ? t[e]() : Tn(r) && t.getAttribute && t.getAttribute(e) || r
    }, _t = function (t, e) {
        return (t = t.split(",")).forEach(e) || t
    }, Z = function (t) {
        return Math.round(t * 1e5) / 1e5 || 0
    }, et = function (t) {
        return Math.round(t * 1e7) / 1e7 || 0
    }, Ae = function (t, e) {
        var r = e.charAt(0), n = parseFloat(e.substr(2));
        return t = parseFloat(t), r === "+" ? t + n : r === "-" ? t - n : r === "*" ? t * n : t / n
    }, $a = function (t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;);
        return n < r
    }, wr = function () {
        var t = ee.length, e = ee.slice(0), r, n;
        for (tn = {}, ee.length = 0, r = 0; r < t; r++) n = e[r], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0)
    }, Ni = function (t, e, r, n) {
        ee.length && !st && wr(), t.render(e, r, n || st && e < 0 && (t._initted || t._startAt)), ee.length && !st && wr()
    }, Ri = function (t) {
        var e = parseFloat(t);
        return (e || e === 0) && (t + "").match(Mi).length < 2 ? e : rt(t) ? t.trim() : t
    }, Fi = function (t) {
        return t
    }, Pt = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }, Va = function (t) {
        return function (e, r) {
            for (var n in r) n in e || n === "duration" && t || n === "ease" || (e[n] = r[n])
        }
    }, ve = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }, Jn = function i(t, e) {
        for (var r in e) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = jt(e[r]) ? i(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }, Tr = function (t, e) {
        var r = {}, n;
        for (n in t) n in e || (r[n] = t[n]);
        return r
    }, He = function (t) {
        var e = t.parent || W, r = t.keyframes ? Va(at(t.keyframes)) : Pt;
        if (pt(t.inherit)) for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }, Ba = function (t, e) {
        for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
        return r < 0
    }, zi = function (t, e, r, n, s) {
        r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
        var a = t[n], o;
        if (s) for (o = e[s]; a && a[s] > o;) a = a._prev;
        return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = a, e.parent = e._dp = t, e
    }, Lr = function (t, e, r, n) {
        r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
        var s = e._prev, a = e._next;
        s ? s._next = a : t[r] === e && (t[r] = a), a ? a._prev = s : t[n] === e && (t[n] = s), e._next = e._prev = e.parent = null
    }, ne = function (t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
    }, _e = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }, qa = function (t) {
        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
        return t
    }, en = function (t, e, r, n) {
        return t._startAt && (st ? t._startAt.revert(hr) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
    }, Ua = function i(t) {
        return !t || t._ts && i(t.parent)
    }, ti = function (t) {
        return t._repeat ? Ne(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }, Ne = function (t, e) {
        var r = Math.floor(t /= e);
        return t && r === t ? r - 1 : r
    }, Or = function (t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }, Nr = function (t) {
        return t._end = et(t._start + (t._tDur / Math.abs(t._ts || t._rts || $) || 0))
    }, Rr = function (t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = et(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Nr(t), r._dirty || _e(r, t)), t
    }, ji = function (t, e) {
        var r;
        if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Or(t.rawTime(), e), (!e._dur || sr(0, e.totalDuration(), r) - e._tTime > $) && e.render(r, !0)), _e(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration()) for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -$
        }
    }, Lt = function (t, e, r, n) {
        return e.parent && ne(e), e._start = et((Wt(r) ? r : r || t !== W ? kt(t, r, e) : t._time) + e._delay), e._end = et(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), zi(t, e, "_first", "_last", t._sort ? "_start" : 0), rn(e) || (t._recent = e), n || ji(t, e), t._ts < 0 && Rr(t, t._tTime), t
    }, $i = function (t, e) {
        return (St.ScrollTrigger || kn("scrollTrigger", e)) && St.ScrollTrigger.create(e, t)
    }, Vi = function (t, e, r, n, s) {
        if (Pn(t, e, s), !t._initted) return 1;
        if (!r && t._pt && !st && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Ii !== wt.frame) return ee.push(t), t._lazy = [s, n], 1
    }, Wa = function i(t) {
        var e = t.parent;
        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || i(e))
    }, rn = function (t) {
        var e = t.data;
        return e === "isFromStart" || e === "isStart"
    }, Ha = function (t, e, r, n) {
        var s = t.ratio,
            a = e < 0 || !e && (!t._start && Wa(t) && !(!t._initted && rn(t)) || (t._ts < 0 || t._dp._ts < 0) && !rn(t)) ? 0 : 1,
            o = t._rDelay, u = 0, l, c, f;
        if (o && t._repeat && (u = sr(0, t._tDur, e), c = Ne(u, o), t._yoyo && c & 1 && (a = 1 - a), c !== Ne(t._tTime, o) && (s = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), a !== s || st || n || t._zTime === $ || !e && t._zTime) {
            if (!t._initted && Vi(t, e, n, r, u)) return;
            for (f = t._zTime, t._zTime = e || (r ? $ : 0), r || (r = e && !f), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = u, l = t._pt; l;) l.r(a, l.d), l = l._next;
            e < 0 && en(t, e, r, !0), t._onUpdate && !r && Tt(t, "onUpdate"), u && t._repeat && !r && t.parent && Tt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && ne(t, 1), !r && !st && (Tt(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
        } else t._zTime || (t._zTime = e)
    }, Ya = function (t, e, r) {
        var n;
        if (r > e) for (n = t._first; n && n._start <= r;) {
            if (n.data === "isPause" && n._start > e) return n;
            n = n._next
        } else for (n = t._last; n && n._start >= r;) {
            if (n.data === "isPause" && n._start < e) return n;
            n = n._prev
        }
    }, Re = function (t, e, r, n) {
        var s = t._repeat, a = et(e) || 0, o = t._tTime / t._tDur;
        return o && !n && (t._time *= a / t._dur), t._dur = a, t._tDur = s ? s < 0 ? 1e10 : et(a * (s + 1) + t._rDelay * s) : a, o > 0 && !n && Rr(t, t._tTime = t._tDur * o), t.parent && Nr(t), r || _e(t.parent, t), t
    }, ei = function (t) {
        return t instanceof lt ? _e(t) : Re(t, t._dur)
    }, Xa = { _start: 0, endTime: Ke, totalDuration: Ke }, kt = function i(t, e, r) {
        var n = t.labels, s = t._recent || Xa, a = t.duration() >= Ct ? s.endTime(!1) : t._dur, o, u, l;
        return rt(e) && (isNaN(e) || e in n) ? (u = e.charAt(0), l = e.substr(-1) === "%", o = e.indexOf("="), u === "<" || u === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (u === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (o < 0 ? s : r).totalDuration() / 100 : 1)) : o < 0 ? (e in n || (n[e] = a), n[e]) : (u = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), l && r && (u = u / 100 * (at(r) ? r[0] : r).totalDuration()), o > 1 ? i(t, e.substr(0, o - 1), r) + u : a + u)) : e == null ? a : +e
    }, Ye = function (t, e, r) {
        var n = Wt(e[1]), s = (n ? 2 : 1) + (t < 2 ? 0 : 1), a = e[s], o, u;
        if (n && (a.duration = e[1]), a.parent = r, t) {
            for (o = a, u = r; u && !("immediateRender" in o);) o = u.vars.defaults || {}, u = pt(u.vars.inherit) && u.parent;
            a.immediateRender = pt(o.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
        }
        return new K(e[0], a, e[s + 1])
    }, se = function (t, e) {
        return t || t === 0 ? e(t) : e
    }, sr = function (t, e, r) {
        return r < t ? t : r > e ? e : r
    }, it = function (t, e) {
        return !rt(t) || !(e = Fa.exec(t)) ? "" : e[1]
    }, Ga = function (t, e, r) {
        return se(r, function (n) {
            return sr(t, e, n)
        })
    }, nn = [].slice, Bi = function (t, e) {
        return t && jt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && jt(t[0])) && !t.nodeType && t !== Et
    }, Qa = function (t, e, r) {
        return r === void 0 && (r = []), t.forEach(function (n) {
            var s;
            return rt(n) && !e || Bi(n, 1) ? (s = r).push.apply(s, Mt(n)) : r.push(n)
        }) || r
    }, Mt = function (t, e, r) {
        return X && !e && X.selector ? X.selector(t) : rt(t) && !r && (Jr || !Fe()) ? nn.call((e || Sn).querySelectorAll(t), 0) : at(t) ? Qa(t, r) : Bi(t) ? nn.call(t, 0) : t ? [t] : []
    }, sn = function (t) {
        return t = Mt(t)[0] || Ze("Invalid scope") || {}, function (e) {
            var r = t.current || t.nativeElement || t;
            return Mt(e, r.querySelectorAll ? r : r === t ? Ze("Invalid scope") || Sn.createElement("div") : t)
        }
    }, qi = function (t) {
        return t.sort(function () {
            return .5 - Math.random()
        })
    }, Ui = function (t) {
        if (G(t)) return t;
        var e = jt(t) ? t : { each: t }, r = me(e.ease), n = e.from || 0, s = parseFloat(e.base) || 0, a = {},
            o = n > 0 && n < 1, u = isNaN(n) || o, l = e.axis, c = n, f = n;
        return rt(n) ? c = f = {
            center: .5,
            edges: .5,
            end: 1
        }[n] || 0 : !o && u && (c = n[0], f = n[1]), function (d, p, _) {
            var h = (_ || e).length, m = a[h], b, v, x, y, g, w, k, O, T;
            if (!m) {
                if (T = e.grid === "auto" ? 0 : (e.grid || [1, Ct])[1], !T) {
                    for (k = -Ct; k < (k = _[T++].getBoundingClientRect().left) && T < h;);
                    T < h && T--
                }
                for (m = a[h] = [], b = u ? Math.min(T, h) * c - .5 : n % T, v = T === Ct ? 0 : u ? h * f / T - .5 : n / T | 0, k = 0, O = Ct, w = 0; w < h; w++) x = w % T - b, y = v - (w / T | 0), m[w] = g = l ? Math.abs(l === "y" ? y : x) : Si(x * x + y * y), g > k && (k = g), g < O && (O = g);
                n === "random" && qi(m), m.max = k - O, m.min = O, m.v = h = (parseFloat(e.amount) || parseFloat(e.each) * (T > h ? h - 1 : l ? l === "y" ? h / T : T : Math.max(T, h / T)) || 0) * (n === "edges" ? -1 : 1), m.b = h < 0 ? s - h : s, m.u = it(e.amount || e.each) || 0, r = r && h < 0 ? ts(r) : r
            }
            return h = (m[d] - m.min) / m.max || 0, et(m.b + (r ? r(h) : h) * m.v) + m.u
        }
    }, an = function (t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (r) {
            var n = et(Math.round(parseFloat(r) / t) * t * e);
            return (n - n % 1) / e + (Wt(r) ? 0 : it(r))
        }
    }, Wi = function (t, e) {
        var r = at(t), n, s;
        return !r && jt(t) && (n = r = t.radius || Ct, t.values ? (t = Mt(t.values), (s = !Wt(t[0])) && (n *= n)) : t = an(t.increment)), se(e, r ? G(t) ? function (a) {
            return s = t(a), Math.abs(s - a) <= n ? s : a
        } : function (a) {
            for (var o = parseFloat(s ? a.x : a), u = parseFloat(s ? a.y : 0), l = Ct, c = 0, f = t.length, d, p; f--;) s ? (d = t[f].x - o, p = t[f].y - u, d = d * d + p * p) : d = Math.abs(t[f] - o), d < l && (l = d, c = f);
            return c = !n || l <= n ? t[c] : a, s || c === a || Wt(a) ? c : c + it(a)
        } : an(t))
    }, Hi = function (t, e, r, n) {
        return se(at(t) ? !e : r === !0 ? !!(r = 0) : !n, function () {
            return at(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * .99)) / r) * r * n) / n
        })
    }, Za = function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function (n) {
            return e.reduce(function (s, a) {
                return a(s)
            }, n)
        }
    }, Ka = function (t, e) {
        return function (r) {
            return t(parseFloat(r)) + (e || it(r))
        }
    }, Ja = function (t, e, r) {
        return Xi(t, e, 0, 1, r)
    }, Yi = function (t, e, r) {
        return se(r, function (n) {
            return t[~~e(n)]
        })
    }, to = function i(t, e, r) {
        var n = e - t;
        return at(t) ? Yi(t, i(0, t.length), e) : se(r, function (s) {
            return (n + (s - t) % n) % n + t
        })
    }, eo = function i(t, e, r) {
        var n = e - t, s = n * 2;
        return at(t) ? Yi(t, i(0, t.length - 1), e) : se(r, function (a) {
            return a = (s + (a - t) % s) % s || 0, t + (a > n ? s - a : a)
        })
    }, Je = function (t) {
        for (var e = 0, r = "", n, s, a, o; ~(n = t.indexOf("random(", e));) a = t.indexOf(")", n), o = t.charAt(n + 7) === "[", s = t.substr(n + 7, a - n - 7).match(o ? Mi : Kr), r += t.substr(e, n - e) + Hi(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5), e = a + 1;
        return r + t.substr(e, t.length - e)
    }, Xi = function (t, e, r, n, s) {
        var a = e - t, o = n - r;
        return se(s, function (u) {
            return r + ((u - t) / a * o || 0)
        })
    }, ro = function i(t, e, r, n) {
        var s = isNaN(t + e) ? 0 : function (p) {
            return (1 - p) * t + p * e
        };
        if (!s) {
            var a = rt(t), o = {}, u, l, c, f, d;
            if (r === !0 && (n = 1) && (r = null), a) t = { p: t }, e = { p: e }; else if (at(t) && !at(e)) {
                for (c = [], f = t.length, d = f - 2, l = 1; l < f; l++) c.push(i(t[l - 1], t[l]));
                f--, s = function (_) {
                    _ *= f;
                    var h = Math.min(d, ~~_);
                    return c[h](_ - h)
                }, r = e
            } else n || (t = ve(at(t) ? [] : {}, t));
            if (!c) {
                for (u in e) An.call(o, t, u, "get", e[u]);
                s = function (_) {
                    return Ln(_, o) || (a ? t.p : t)
                }
            }
        }
        return se(r, s)
    }, ri = function (t, e, r) {
        var n = t.labels, s = Ct, a, o, u;
        for (a in n) o = n[a] - e, o < 0 == !!r && o && s > (o = Math.abs(o)) && (u = a, s = o);
        return u
    }, Tt = function (t, e, r) {
        var n = t.vars, s = n[e], a = X, o = t._ctx, u, l, c;
        if (s) return u = n[e + "Params"], l = n.callbackScope || t, r && ee.length && wr(), o && (X = o), c = u ? s.apply(l, u) : s.call(l), X = a, c
    }, Be = function (t) {
        return ne(t), t.scrollTrigger && t.scrollTrigger.kill(!!st), t.progress() < 1 && Tt(t, "onInterrupt"), t
    }, Ce, Gi = [], Qi = function (t) {
        if (On() && t) {
            t = !t.name && t.default || t;
            var e = t.name, r = G(t), n = e && !r && t.init ? function () {
                this._props = []
            } : t, s = { init: Ke, render: Ln, add: An, kill: vo, modifier: yo, rawVars: 0 },
                a = { targetTest: 0, get: 0, getSetter: In, aliases: {}, register: 0 };
            if (Fe(), t !== n) {
                if (xt[e]) return;
                Pt(n, Pt(Tr(t, s), a)), ve(n.prototype, ve(s, Tr(t, a))), xt[n.prop = e] = n, t.targetTest && (dr.push(n), En[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            Di(e, n), t.register && t.register(yt, n, mt)
        } else t && Gi.push(t)
    }, j = 255, qe = {
        aqua: [0, j, j],
        lime: [0, j, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, j],
        navy: [0, 0, 128],
        white: [j, j, j],
        olive: [128, 128, 0],
        yellow: [j, j, 0],
        orange: [j, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [j, 0, 0],
        pink: [j, 192, 203],
        cyan: [0, j, j],
        transparent: [j, j, j, 0]
    }, Ur = function (t, e, r) {
        return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < .5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * j + .5 | 0
    }, Zi = function (t, e, r) {
        var n = t ? Wt(t) ? [t >> 16, t >> 8 & j, t & j] : 0 : qe.black, s, a, o, u, l, c, f, d, p, _;
        if (!n) {
            if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), qe[t]) n = qe[t]; else if (t.charAt(0) === "#") {
                if (t.length < 6 && (s = t.charAt(1), a = t.charAt(2), o = t.charAt(3), t = "#" + s + s + a + a + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return n = parseInt(t.substr(1, 6), 16), [n >> 16, n >> 8 & j, n & j, parseInt(t.substr(7), 16) / 255];
                t = parseInt(t.substr(1), 16), n = [t >> 16, t >> 8 & j, t & j]
            } else if (t.substr(0, 3) === "hsl") {
                if (n = _ = t.match(Kr), !e) u = +n[0] % 360 / 360, l = +n[1] / 100, c = +n[2] / 100, a = c <= .5 ? c * (l + 1) : c + l - c * l, s = c * 2 - a, n.length > 3 && (n[3] *= 1), n[0] = Ur(u + 1 / 3, s, a), n[1] = Ur(u, s, a), n[2] = Ur(u - 1 / 3, s, a); else if (~t.indexOf("=")) return n = t.match(Ei), r && n.length < 4 && (n[3] = 1), n
            } else n = t.match(Kr) || qe.transparent;
            n = n.map(Number)
        }
        return e && !_ && (s = n[0] / j, a = n[1] / j, o = n[2] / j, f = Math.max(s, a, o), d = Math.min(s, a, o), c = (f + d) / 2, f === d ? u = l = 0 : (p = f - d, l = c > .5 ? p / (2 - f - d) : p / (f + d), u = f === s ? (a - o) / p + (a < o ? 6 : 0) : f === a ? (o - s) / p + 2 : (s - a) / p + 4, u *= 60), n[0] = ~~(u + .5), n[1] = ~~(l * 100 + .5), n[2] = ~~(c * 100 + .5)), r && n.length < 4 && (n[3] = 1), n
    }, Ki = function (t) {
        var e = [], r = [], n = -1;
        return t.split(re).forEach(function (s) {
            var a = s.match(Ee) || [];
            e.push.apply(e, a), r.push(n += a.length + 1)
        }), e.c = r, e
    }, ni = function (t, e, r) {
        var n = "", s = (t + n).match(re), a = e ? "hsla(" : "rgba(", o = 0, u, l, c, f;
        if (!s) return t;
        if (s = s.map(function (d) {
            return (d = Zi(d, e, 1)) && a + (e ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
        }), r && (c = Ki(t), u = r.c, u.join(n) !== c.c.join(n))) for (l = t.replace(re, "1").split(Ee), f = l.length - 1; o < f; o++) n += l[o] + (~u.indexOf(o) ? s.shift() || a + "0,0,0,0)" : (c.length ? c : s.length ? s : r).shift());
        if (!l) for (l = t.split(re), f = l.length - 1; o < f; o++) n += l[o] + s[o];
        return n + l[f]
    }, re = function () {
        var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
        for (t in qe) i += "|" + t + "\\b";
        return new RegExp(i + ")", "gi")
    }(), no = /hsl[a]?\(/, Ji = function (t) {
        var e = t.join(" "), r;
        if (re.lastIndex = 0, re.test(e)) return r = no.test(e), t[1] = ni(t[1], r), t[0] = ni(t[0], r, Ki(t[1])), !0
    }, tr, wt = function () {
        var i = Date.now, t = 500, e = 33, r = i(), n = r, s = 1e3 / 240, a = s, o = [], u, l, c, f, d, p,
            _ = function h(m) {
                var b = i() - n, v = m === !0, x, y, g, w;
                if (b > t && (r += b - e), n += b, g = n - r, x = g - a, (x > 0 || v) && (w = ++f.frame, d = g - f.time * 1e3, f.time = g = g / 1e3, a += x + (x >= s ? 4 : s - x), y = 1), v || (u = l(h)), y) for (p = 0; p < o.length; p++) o[p](g, d, w, m)
            };
        return f = {
            time: 0, frame: 0, tick: function () {
                _(!0)
            }, deltaRatio: function (m) {
                return d / (1e3 / (m || 60))
            }, wake: function () {
                Ai && (!Jr && On() && (Et = Jr = window, Sn = Et.document || {}, St.gsap = yt, (Et.gsapVersions || (Et.gsapVersions = [])).push(yt.version), Pi(xr || Et.GreenSockGlobals || !Et.gsap && Et || {}), c = Et.requestAnimationFrame, Gi.forEach(Qi)), u && f.sleep(), l = c || function (m) {
                    return setTimeout(m, a - f.time * 1e3 + 1 | 0)
                }, tr = 1, _(2))
            }, sleep: function () {
                (c ? Et.cancelAnimationFrame : clearTimeout)(u), tr = 0, l = Ke
            }, lagSmoothing: function (m, b) {
                t = m || 1 / 0, e = Math.min(b || 33, t)
            }, fps: function (m) {
                s = 1e3 / (m || 240), a = f.time * 1e3 + s
            }, add: function (m, b, v) {
                var x = b ? function (y, g, w, k) {
                    m(y, g, w, k), f.remove(x)
                } : m;
                return f.remove(m), o[v ? "unshift" : "push"](x), Fe(), x
            }, remove: function (m, b) {
                ~(b = o.indexOf(m)) && o.splice(b, 1) && p >= b && p--
            }, _listeners: o
        }, f
    }(), Fe = function () {
        return !tr && wt.wake()
    }, N = {}, io = /^[\d.\-M][\d.\-,\s]/, so = /["']/g, ao = function (t) {
        for (var e = {}, r = t.substr(1, t.length - 3).split(":"), n = r[0], s = 1, a = r.length, o, u, l; s < a; s++) u = r[s], o = s !== a - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, o), e[n] = isNaN(l) ? l.replace(so, "").trim() : +l, n = u.substr(o + 1).trim();
        return e
    }, oo = function (t) {
        var e = t.indexOf("(") + 1, r = t.indexOf(")"), n = t.indexOf("(", e);
        return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r)
    }, uo = function (t) {
        var e = (t + "").split("("), r = N[e[0]];
        return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [ao(e[1])] : oo(t).split(",").map(Ri)) : N._CE && io.test(t) ? N._CE("", t) : r
    }, ts = function (t) {
        return function (e) {
            return 1 - t(1 - e)
        }
    }, es = function i(t, e) {
        for (var r = t._first, n; r;) r instanceof lt ? i(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? i(r.timeline, e) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = e)), r = r._next
    }, me = function (t, e) {
        return t && (G(t) ? t : N[t] || uo(t)) || e
    }, Te = function (t, e, r, n) {
        r === void 0 && (r = function (u) {
            return 1 - e(1 - u)
        }), n === void 0 && (n = function (u) {
            return u < .5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2
        });
        var s = { easeIn: e, easeOut: r, easeInOut: n }, a;
        return _t(t, function (o) {
            N[o] = St[o] = s, N[a = o.toLowerCase()] = r;
            for (var u in s) N[a + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = N[o + "." + u] = s[u]
        }), s
    }, rs = function (t) {
        return function (e) {
            return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
        }
    }, Wr = function i(t, e, r) {
        var n = e >= 1 ? e : 1, s = (r || (t ? .3 : .45)) / (e < 1 ? e : 1), a = s / Zr * (Math.asin(1 / n) || 0),
            o = function (c) {
                return c === 1 ? 1 : n * Math.pow(2, -10 * c) * Ra((c - a) * s) + 1
            }, u = t === "out" ? o : t === "in" ? function (l) {
                return 1 - o(1 - l)
            } : rs(o);
        return s = Zr / s, u.config = function (l, c) {
            return i(t, l, c)
        }, u
    }, Hr = function i(t, e) {
        e === void 0 && (e = 1.70158);
        var r = function (a) {
            return a ? --a * a * ((e + 1) * a + e) + 1 : 0
        }, n = t === "out" ? r : t === "in" ? function (s) {
            return 1 - r(1 - s)
        } : rs(r);
        return n.config = function (s) {
            return i(t, s)
        }, n
    };
_t("Linear,Quad,Cubic,Quart,Quint,Strong", function (i, t) {
    var e = t < 5 ? t + 1 : t;
    Te(i + ",Power" + (e - 1), t ? function (r) {
        return Math.pow(r, e)
    } : function (r) {
        return r
    }, function (r) {
        return 1 - Math.pow(1 - r, e)
    }, function (r) {
        return r < .5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2
    })
});
N.Linear.easeNone = N.none = N.Linear.easeIn;
Te("Elastic", Wr("in"), Wr("out"), Wr());
(function (i, t) {
    var e = 1 / t, r = 2 * e, n = 2.5 * e, s = function (o) {
        return o < e ? i * o * o : o < r ? i * Math.pow(o - 1.5 / t, 2) + .75 : o < n ? i * (o -= 2.25 / t) * o + .9375 : i * Math.pow(o - 2.625 / t, 2) + .984375
    };
    Te("Bounce", function (a) {
        return 1 - s(1 - a)
    }, s)
})(7.5625, 2.75);
Te("Expo", function (i) {
    return i ? Math.pow(2, 10 * (i - 1)) : 0
});
Te("Circ", function (i) {
    return -(Si(1 - i * i) - 1)
});
Te("Sine", function (i) {
    return i === 1 ? 1 : -Na(i * Ia) + 1
});
Te("Back", Hr("in"), Hr("out"), Hr());
N.SteppedEase = N.steps = St.SteppedEase = {
    config: function (t, e) {
        t === void 0 && (t = 1);
        var r = 1 / t, n = t + (e ? 0 : 1), s = e ? 1 : 0, a = 1 - $;
        return function (o) {
            return ((n * sr(0, a, o) | 0) + s) * r
        }
    }
};
Le.ease = N["quad.out"];
_t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (i) {
    return Cn += i + "," + i + "Params,"
});
var ns = function (t, e) {
    this.id = La++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Li, this.set = e ? e.getSetter : In
}, er = function () {
    function i(e) {
        this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Re(this, +e.duration, 1, 1), this.data = e.data, X && (this._ctx = X, X.data.push(this)), tr || wt.wake()
    }

    var t = i.prototype;
    return t.delay = function (r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay
    }, t.duration = function (r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }, t.totalDuration = function (r) {
        return arguments.length ? (this._dirty = 0, Re(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, t.totalTime = function (r, n) {
        if (Fe(), !arguments.length) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
            for (Rr(this, r), !s._dp || s.parent || ji(s, this); s && s.parent;) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Lt(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !n || this._initted && Math.abs(this._zTime) === $ || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Ni(this, r, n)), this
    }, t.time = function (r, n) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + ti(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), n) : this._time
    }, t.totalProgress = function (r, n) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
    }, t.progress = function (r, n) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + ti(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }, t.iteration = function (r, n) {
        var s = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * s, n) : this._repeat ? Ne(this._tTime, s) + 1 : 1
    }, t.timeScale = function (r, n) {
        if (!arguments.length) return this._rts === -$ ? 0 : this._rts;
        if (this._rts === r) return this;
        var s = this.parent && this._ts ? Or(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0, this._ts = this._ps || r === -$ ? 0 : this._rts, this.totalTime(sr(-Math.abs(this._delay), this._tDur, s), n !== !1), Nr(this), qa(this)
    }, t.paused = function (r) {
        return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Fe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== $ && (this._tTime -= $)))), this) : this._ps
    }, t.startTime = function (r) {
        if (arguments.length) {
            this._start = r;
            var n = this.parent || this._dp;
            return n && (n._sort || !this.parent) && Lt(n, this, r - this._delay), this
        }
        return this._start
    }, t.endTime = function (r) {
        return this._start + (pt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, t.rawTime = function (r) {
        var n = this.parent || this._dp;
        return n ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Or(n.rawTime(r), this) : this._tTime : this._tTime
    }, t.revert = function (r) {
        r === void 0 && (r = ja);
        var n = st;
        return st = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), st = n, this
    }, t.globalTime = function (r) {
        for (var n = this, s = arguments.length ? r : n.rawTime(); n;) s = n._start + s / (Math.abs(n._ts) || 1), n = n._dp;
        return !this.parent && this._sat ? this._sat.globalTime(r) : s
    }, t.repeat = function (r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, ei(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }, t.repeatDelay = function (r) {
        if (arguments.length) {
            var n = this._time;
            return this._rDelay = r, ei(this), n ? this.time(n) : this
        }
        return this._rDelay
    }, t.yoyo = function (r) {
        return arguments.length ? (this._yoyo = r, this) : this._yoyo
    }, t.seek = function (r, n) {
        return this.totalTime(kt(this, r), pt(n))
    }, t.restart = function (r, n) {
        return this.play().totalTime(r ? -this._delay : 0, pt(n))
    }, t.play = function (r, n) {
        return r != null && this.seek(r, n), this.reversed(!1).paused(!1)
    }, t.reverse = function (r, n) {
        return r != null && this.seek(r || this.totalDuration(), n), this.reversed(!0).paused(!1)
    }, t.pause = function (r, n) {
        return r != null && this.seek(r, n), this.paused(!0)
    }, t.resume = function () {
        return this.paused(!1)
    }, t.reversed = function (r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -$ : 0)), this) : this._rts < 0
    }, t.invalidate = function () {
        return this._initted = this._act = 0, this._zTime = -$, this
    }, t.isActive = function () {
        var r = this.parent || this._dp, n = this._start, s;
        return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= n && s < this.endTime(!0) - $)
    }, t.eventCallback = function (r, n, s) {
        var a = this.vars;
        return arguments.length > 1 ? (n ? (a[r] = n, s && (a[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = n)) : delete a[r], this) : a[r]
    }, t.then = function (r) {
        var n = this;
        return new Promise(function (s) {
            var a = G(r) ? r : Fi, o = function () {
                var l = n.then;
                n.then = null, G(a) && (a = a(n)) && (a.then || a === n) && (n.then = l), s(a), n.then = l
            };
            n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? o() : n._prom = o
        })
    }, t.kill = function () {
        Be(this)
    }, i
}();
Pt(er.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -$,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var lt = function (i) {
    Oi(t, i);

    function t(r, n) {
        var s;
        return r === void 0 && (r = {}), s = i.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = pt(r.sortChildren), W && Lt(r.parent || W, Bt(s), n), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && $i(Bt(s), r.scrollTrigger), s
    }

    var e = t.prototype;
    return e.to = function (n, s, a) {
        return Ye(0, arguments, this), this
    }, e.from = function (n, s, a) {
        return Ye(1, arguments, this), this
    }, e.fromTo = function (n, s, a, o) {
        return Ye(2, arguments, this), this
    }, e.set = function (n, s, a) {
        return s.duration = 0, s.parent = this, He(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new K(n, s, kt(this, a), 1), this
    }, e.call = function (n, s, a) {
        return Lt(this, K.delayedCall(0, n, s), a)
    }, e.staggerTo = function (n, s, a, o, u, l, c) {
        return a.duration = s, a.stagger = a.stagger || o, a.onComplete = l, a.onCompleteParams = c, a.parent = this, new K(n, a, kt(this, u)), this
    }, e.staggerFrom = function (n, s, a, o, u, l, c) {
        return a.runBackwards = 1, He(a).immediateRender = pt(a.immediateRender), this.staggerTo(n, s, a, o, u, l, c)
    }, e.staggerFromTo = function (n, s, a, o, u, l, c, f) {
        return o.startAt = a, He(o).immediateRender = pt(o.immediateRender), this.staggerTo(n, s, o, u, l, c, f)
    }, e.render = function (n, s, a) {
        var o = this._time, u = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, c = n <= 0 ? 0 : et(n),
            f = this._zTime < 0 != n < 0 && (this._initted || !l), d, p, _, h, m, b, v, x, y, g, w, k;
        if (this !== W && c > u && n >= 0 && (c = u), c !== this._tTime || a || f) {
            if (o !== this._time && l && (c += this._time - o, n += this._time - o), d = c, y = this._start, x = this._ts, b = !x, f && (l || (o = this._zTime), (n || !s) && (this._zTime = n)), this._repeat) {
                if (w = this._yoyo, m = l + this._rDelay, this._repeat < -1 && n < 0) return this.totalTime(m * 100 + n, s, a);
                if (d = et(c % m), c === u ? (h = this._repeat, d = l) : (h = ~~(c / m), h && h === c / m && (d = l, h--), d > l && (d = l)), g = Ne(this._tTime, m), !o && this._tTime && g !== h && this._tTime - g * m - this._dur <= 0 && (g = h), w && h & 1 && (d = l - d, k = 1), h !== g && !this._lock) {
                    var O = w && g & 1, T = O === (w && h & 1);
                    if (h < g && (O = !O), o = O ? 0 : c % l ? l : c, this._lock = 1, this.render(o || (k ? 0 : et(h * m)), s, !l)._lock = 0, this._tTime = c, !s && this.parent && Tt(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), o && o !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (l = this._dur, u = this._tDur, T && (this._lock = 2, o = O ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !b) return this;
                    es(this, k)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (v = Ya(this, et(o), et(d)), v && (c -= d - (d = v._start))), this._tTime = c, this._time = d, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, o = 0), !o && d && !s && !h && (Tt(this, "onStart"), this._tTime !== c)) return this;
            if (d >= o && n >= 0) for (p = this._first; p;) {
                if (_ = p._next, (p._act || d >= p._start) && p._ts && v !== p) {
                    if (p.parent !== this) return this.render(n, s, a);
                    if (p.render(p._ts > 0 ? (d - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (d - p._start) * p._ts, s, a), d !== this._time || !this._ts && !b) {
                        v = 0, _ && (c += this._zTime = -$);
                        break
                    }
                }
                p = _
            } else {
                p = this._last;
                for (var A = n < 0 ? n : d; p;) {
                    if (_ = p._prev, (p._act || A <= p._end) && p._ts && v !== p) {
                        if (p.parent !== this) return this.render(n, s, a);
                        if (p.render(p._ts > 0 ? (A - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (A - p._start) * p._ts, s, a || st && (p._initted || p._startAt)), d !== this._time || !this._ts && !b) {
                            v = 0, _ && (c += this._zTime = A ? -$ : $);
                            break
                        }
                    }
                    p = _
                }
            }
            if (v && !s && (this.pause(), v.render(d >= o ? 0 : -$)._zTime = d >= o ? 1 : -1, this._ts)) return this._start = y, Nr(this), this.render(n, s, a);
            this._onUpdate && !s && Tt(this, "onUpdate", !0), (c === u && this._tTime >= this.totalDuration() || !c && o) && (y === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((n || !l) && (c === u && this._ts > 0 || !c && this._ts < 0) && ne(this, 1), !s && !(n < 0 && !o) && (c || o || !u) && (Tt(this, c === u && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < u && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, e.add = function (n, s) {
        var a = this;
        if (Wt(s) || (s = kt(this, s, n)), !(n instanceof er)) {
            if (at(n)) return n.forEach(function (o) {
                return a.add(o, s)
            }), this;
            if (rt(n)) return this.addLabel(n, s);
            if (G(n)) n = K.delayedCall(0, n); else return this
        }
        return this !== n ? Lt(this, n, s) : this
    }, e.getChildren = function (n, s, a, o) {
        n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = !0), o === void 0 && (o = -Ct);
        for (var u = [], l = this._first; l;) l._start >= o && (l instanceof K ? s && u.push(l) : (a && u.push(l), n && u.push.apply(u, l.getChildren(!0, s, a)))), l = l._next;
        return u
    }, e.getById = function (n) {
        for (var s = this.getChildren(1, 1, 1), a = s.length; a--;) if (s[a].vars.id === n) return s[a]
    }, e.remove = function (n) {
        return rt(n) ? this.removeLabel(n) : G(n) ? this.killTweensOf(n) : (Lr(this, n), n === this._recent && (this._recent = this._last), _e(this))
    }, e.totalTime = function (n, s) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = et(wt.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), i.prototype.totalTime.call(this, n, s), this._forcing = 0, this) : this._tTime
    }, e.addLabel = function (n, s) {
        return this.labels[n] = kt(this, s), this
    }, e.removeLabel = function (n) {
        return delete this.labels[n], this
    }, e.addPause = function (n, s, a) {
        var o = K.delayedCall(0, s || Ke, a);
        return o.data = "isPause", this._hasPause = 1, Lt(this, o, kt(this, n))
    }, e.removePause = function (n) {
        var s = this._first;
        for (n = kt(this, n); s;) s._start === n && s.data === "isPause" && ne(s), s = s._next
    }, e.killTweensOf = function (n, s, a) {
        for (var o = this.getTweensOf(n, a), u = o.length; u--;) Kt !== o[u] && o[u].kill(n, s);
        return this
    }, e.getTweensOf = function (n, s) {
        for (var a = [], o = Mt(n), u = this._first, l = Wt(s), c; u;) u instanceof K ? $a(u._targets, o) && (l ? (!Kt || u._initted && u._ts) && u.globalTime(0) <= s && u.globalTime(u.totalDuration()) > s : !s || u.isActive()) && a.push(u) : (c = u.getTweensOf(o, s)).length && a.push.apply(a, c), u = u._next;
        return a
    }, e.tweenTo = function (n, s) {
        s = s || {};
        var a = this, o = kt(a, n), u = s, l = u.startAt, c = u.onStart, f = u.onStartParams, d = u.immediateRender, p,
            _ = K.to(a, Pt({
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: s.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale()) || $,
                onStart: function () {
                    if (a.pause(), !p) {
                        var m = s.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale());
                        _._dur !== m && Re(_, m, 0, 1).render(_._time, !0, !0), p = 1
                    }
                    c && c.apply(_, f || [])
                }
            }, s));
        return d ? _.render(0) : _
    }, e.tweenFromTo = function (n, s, a) {
        return this.tweenTo(s, Pt({ startAt: { time: kt(this, n) } }, a))
    }, e.recent = function () {
        return this._recent
    }, e.nextLabel = function (n) {
        return n === void 0 && (n = this._time), ri(this, kt(this, n))
    }, e.previousLabel = function (n) {
        return n === void 0 && (n = this._time), ri(this, kt(this, n), 1)
    }, e.currentLabel = function (n) {
        return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + $)
    }, e.shiftChildren = function (n, s, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, u = this.labels, l; o;) o._start >= a && (o._start += n, o._end += n), o = o._next;
        if (s) for (l in u) u[l] >= a && (u[l] += n);
        return _e(this)
    }, e.invalidate = function (n) {
        var s = this._first;
        for (this._lock = 0; s;) s.invalidate(n), s = s._next;
        return i.prototype.invalidate.call(this, n)
    }, e.clear = function (n) {
        n === void 0 && (n = !0);
        for (var s = this._first, a; s;) a = s._next, this.remove(s), s = a;
        return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), _e(this)
    }, e.totalDuration = function (n) {
        var s = 0, a = this, o = a._last, u = Ct, l, c, f;
        if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -n : n));
        if (a._dirty) {
            for (f = a.parent; o;) l = o._prev, o._dirty && o.totalDuration(), c = o._start, c > u && a._sort && o._ts && !a._lock ? (a._lock = 1, Lt(a, o, c - o._delay, 1)._lock = 0) : u = c, c < 0 && o._ts && (s -= c, (!f && !a._dp || f && f.smoothChildTiming) && (a._start += c / a._ts, a._time -= c, a._tTime -= c), a.shiftChildren(-c, !1, -1 / 0), u = 0), o._end > s && o._ts && (s = o._end), o = l;
            Re(a, a === W && a._time > s ? a._time : s, 1, 1), a._dirty = 0
        }
        return a._tDur
    }, t.updateRoot = function (n) {
        if (W._ts && (Ni(W, Or(n, W)), Ii = wt.frame), wt.frame >= Kn) {
            Kn += Ot.autoSleep || 120;
            var s = W._first;
            if ((!s || !s._ts) && Ot.autoSleep && wt._listeners.length < 2) {
                for (; s && !s._ts;) s = s._next;
                s || wt.sleep()
            }
        }
    }, t
}(er);
Pt(lt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var lo = function (t, e, r, n, s, a, o) {
    var u = new mt(this._pt, t, e, 0, 1, ls, null, s), l = 0, c = 0, f, d, p, _, h, m, b, v;
    for (u.b = r, u.e = n, r += "", n += "", (b = ~n.indexOf("random(")) && (n = Je(n)), a && (v = [r, n], a(v, t, e), r = v[0], n = v[1]), d = r.match(Br) || []; f = Br.exec(n);) _ = f[0], h = n.substring(l, f.index), p ? p = (p + 1) % 5 : h.substr(-5) === "rgba(" && (p = 1), _ !== d[c++] && (m = parseFloat(d[c - 1]) || 0, u._pt = {
        _next: u._pt,
        p: h || c === 1 ? h : ",",
        s: m,
        c: _.charAt(1) === "=" ? Ae(m, _) - m : parseFloat(_) - m,
        m: p && p < 4 ? Math.round : 0
    }, l = Br.lastIndex);
    return u.c = l < n.length ? n.substring(l, n.length) : "", u.fp = o, (Ci.test(n) || b) && (u.e = 0), this._pt = u, u
}, An = function (t, e, r, n, s, a, o, u, l, c) {
    G(n) && (n = n(s || 0, t, a));
    var f = t[e],
        d = r !== "get" ? r : G(f) ? l ? t[e.indexOf("set") || !G(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : f,
        p = G(f) ? l ? _o : os : Dn, _;
    if (rt(n) && (~n.indexOf("random(") && (n = Je(n)), n.charAt(1) === "=" && (_ = Ae(d, n) + (it(d) || 0), (_ || _ === 0) && (n = _))), !c || d !== n || on) return !isNaN(d * n) && n !== "" ? (_ = new mt(this._pt, t, e, +d || 0, n - (d || 0), typeof f == "boolean" ? go : us, 0, p), l && (_.fp = l), o && _.modifier(o, this, t), this._pt = _) : (!f && !(e in t) && kn(e, n), lo.call(this, t, e, d, n, p, u || Ot.stringFilter, l))
}, co = function (t, e, r, n, s) {
    if (G(t) && (t = Xe(t, s, e, r, n)), !jt(t) || t.style && t.nodeType || at(t) || ki(t)) return rt(t) ? Xe(t, s, e, r, n) : t;
    var a = {}, o;
    for (o in t) a[o] = Xe(t[o], s, e, r, n);
    return a
}, is = function (t, e, r, n, s, a) {
    var o, u, l, c;
    if (xt[t] && (o = new xt[t]).init(s, o.rawVars ? e[t] : co(e[t], n, s, a, r), r, n, a) !== !1 && (r._pt = u = new mt(r._pt, s, t, 0, 1, o.render, o, 0, o.priority), r !== Ce)) for (l = r._ptLookup[r._targets.indexOf(s)], c = o._props.length; c--;) l[o._props[c]] = u;
    return o
}, Kt, on, Pn = function i(t, e, r) {
    var n = t.vars, s = n.ease, a = n.startAt, o = n.immediateRender, u = n.lazy, l = n.onUpdate, c = n.runBackwards,
        f = n.yoyoEase, d = n.keyframes, p = n.autoRevert, _ = t._dur, h = t._startAt, m = t._targets, b = t.parent,
        v = b && b.data === "nested" ? b.vars.targets : m, x = t._overwrite === "auto" && !wn, y = t.timeline, g, w, k,
        O, T, A, E, S, M, C, I, D, L;
    if (y && (!d || !s) && (s = "none"), t._ease = me(s, Le.ease), t._yEase = f ? ts(me(f === !0 ? s : f, Le.ease)) : 0, f && t._yoyo && !t._repeat && (f = t._yEase, t._yEase = t._ease, t._ease = f), t._from = !y && !!n.runBackwards, !y || d && !n.stagger) {
        if (S = m[0] ? pe(m[0]).harness : 0, D = S && n[S.prop], g = Tr(n, En), h && (h._zTime < 0 && h.progress(1), e < 0 && c && o && !p ? h.render(-1, !0) : h.revert(c && _ ? hr : za), h._lazy = 0), a) {
            if (ne(t._startAt = K.set(m, Pt({
                data: "isStart",
                overwrite: !1,
                parent: b,
                immediateRender: !0,
                lazy: !h && pt(u),
                startAt: null,
                delay: 0,
                onUpdate: l && function () {
                    return Tt(t, "onUpdate")
                },
                stagger: 0
            }, a))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (st || !o && !p) && t._startAt.revert(hr), o && _ && e <= 0 && r <= 0) {
                e && (t._zTime = e);
                return
            }
        } else if (c && _ && !h) {
            if (e && (o = !1), k = Pt({
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !h && pt(u),
                immediateRender: o,
                stagger: 0,
                parent: b
            }, g), D && (k[S.prop] = D), ne(t._startAt = K.set(m, k)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (st ? t._startAt.revert(hr) : t._startAt.render(-1, !0)), t._zTime = e, !o) i(t._startAt, $, $); else if (!e) return
        }
        for (t._pt = t._ptCache = 0, u = _ && pt(u) || u && !_, w = 0; w < m.length; w++) {
            if (T = m[w], E = T._gsap || Mn(m)[w]._gsap, t._ptLookup[w] = C = {}, tn[E.id] && ee.length && wr(), I = v === m ? w : v.indexOf(T), S && (M = new S).init(T, D || g, t, I, v) !== !1 && (t._pt = O = new mt(t._pt, T, M.name, 0, 1, M.render, M, 0, M.priority), M._props.forEach(function (B) {
                C[B] = O
            }), M.priority && (A = 1)), !S || D) for (k in g) xt[k] && (M = is(k, g, t, I, T, v)) ? M.priority && (A = 1) : C[k] = O = An.call(t, T, k, "get", g[k], I, v, 0, n.stringFilter);
            t._op && t._op[w] && t.kill(T, t._op[w]), x && t._pt && (Kt = t, W.killTweensOf(T, C, t.globalTime(e)), L = !t.parent, Kt = 0), t._pt && u && (tn[E.id] = 1)
        }
        A && cs(t), t._onInit && t._onInit(t)
    }
    t._onUpdate = l, t._initted = (!t._op || t._pt) && !L, d && e <= 0 && y.render(Ct, !0, !0)
}, fo = function (t, e, r, n, s, a, o, u) {
    var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], c, f, d, p;
    if (!l) for (l = t._ptCache[e] = [], d = t._ptLookup, p = t._targets.length; p--;) {
        if (c = d[p][e], c && c.d && c.d._pt) for (c = c.d._pt; c && c.p !== e && c.fp !== e;) c = c._next;
        if (!c) return on = 1, t.vars[e] = "+=0", Pn(t, o), on = 0, u ? Ze(e + " not eligible for reset") : 1;
        l.push(c)
    }
    for (p = l.length; p--;) f = l[p], c = f._pt || f, c.s = (n || n === 0) && !s ? n : c.s + (n || 0) + a * c.c, c.c = r - c.s, f.e && (f.e = Z(r) + it(f.e)), f.b && (f.b = c.s + it(f.b))
}, ho = function (t, e) {
    var r = t[0] ? pe(t[0]).harness : 0, n = r && r.aliases, s, a, o, u;
    if (!n) return e;
    s = ve({}, e);
    for (a in n) if (a in s) for (u = n[a].split(","), o = u.length; o--;) s[u[o]] = s[a];
    return s
}, po = function (t, e, r, n) {
    var s = e.ease || n || "power1.inOut", a, o;
    if (at(e)) o = r[t] || (r[t] = []), e.forEach(function (u, l) {
        return o.push({ t: l / (e.length - 1) * 100, v: u, e: s })
    }); else for (a in e) o = r[a] || (r[a] = []), a === "ease" || o.push({ t: parseFloat(t), v: e[a], e: s })
}, Xe = function (t, e, r, n, s) {
    return G(t) ? t.call(e, r, n, s) : rt(t) && ~t.indexOf("random(") ? Je(t) : t
}, ss = Cn + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", as = {};
_t(ss + ",id,stagger,delay,duration,paused,scrollTrigger", function (i) {
    return as[i] = 1
});
var K = function (i) {
    Oi(t, i);

    function t(r, n, s, a) {
        var o;
        typeof n == "number" && (s.duration = n, n = s, s = null), o = i.call(this, a ? n : He(n)) || this;
        var u = o.vars, l = u.duration, c = u.delay, f = u.immediateRender, d = u.stagger, p = u.overwrite,
            _ = u.keyframes, h = u.defaults, m = u.scrollTrigger, b = u.yoyoEase, v = n.parent || W,
            x = (at(r) || ki(r) ? Wt(r[0]) : "length" in n) ? [r] : Mt(r), y, g, w, k, O, T, A, E;
        if (o._targets = x.length ? Mn(x) : Ze("GSAP target " + r + " not found. https://gsap.com", !Ot.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = p, _ || d || lr(l) || lr(c)) {
            if (n = o.vars, y = o.timeline = new lt({
                data: "nested",
                defaults: h || {},
                targets: v && v.data === "nested" ? v.vars.targets : x
            }), y.kill(), y.parent = y._dp = Bt(o), y._start = 0, d || lr(l) || lr(c)) {
                if (k = x.length, A = d && Ui(d), jt(d)) for (O in d) ~ss.indexOf(O) && (E || (E = {}), E[O] = d[O]);
                for (g = 0; g < k; g++) w = Tr(n, as), w.stagger = 0, b && (w.yoyoEase = b), E && ve(w, E), T = x[g], w.duration = +Xe(l, Bt(o), g, T, x), w.delay = (+Xe(c, Bt(o), g, T, x) || 0) - o._delay, !d && k === 1 && w.delay && (o._delay = c = w.delay, o._start += c, w.delay = 0), y.to(T, w, A ? A(g, T, x) : 0), y._ease = N.none;
                y.duration() ? l = c = 0 : o.timeline = 0
            } else if (_) {
                He(Pt(y.vars.defaults, { ease: "none" })), y._ease = me(_.ease || n.ease || "none");
                var S = 0, M, C, I;
                if (at(_)) _.forEach(function (D) {
                    return y.to(x, D, ">")
                }), y.duration(); else {
                    w = {};
                    for (O in _) O === "ease" || O === "easeEach" || po(O, _[O], w, _.easeEach);
                    for (O in w) for (M = w[O].sort(function (D, L) {
                        return D.t - L.t
                    }), S = 0, g = 0; g < M.length; g++) C = M[g], I = {
                        ease: C.e,
                        duration: (C.t - (g ? M[g - 1].t : 0)) / 100 * l
                    }, I[O] = C.v, y.to(x, I, S), S += I.duration;
                    y.duration() < l && y.to({}, { duration: l - y.duration() })
                }
            }
            l || o.duration(l = y.duration())
        } else o.timeline = 0;
        return p === !0 && !wn && (Kt = Bt(o), W.killTweensOf(x), Kt = 0), Lt(v, Bt(o), s), n.reversed && o.reverse(), n.paused && o.paused(!0), (f || !l && !_ && o._start === et(v._time) && pt(f) && Ua(Bt(o)) && v.data !== "nested") && (o._tTime = -$, o.render(Math.max(0, -c) || 0)), m && $i(Bt(o), m), o
    }

    var e = t.prototype;
    return e.render = function (n, s, a) {
        var o = this._time, u = this._tDur, l = this._dur, c = n < 0, f = n > u - $ && !c ? u : n < $ ? 0 : n, d, p, _,
            h, m, b, v, x, y;
        if (!l) Ha(this, n, s, a); else if (f !== this._tTime || !n || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
            if (d = f, x = this.timeline, this._repeat) {
                if (h = l + this._rDelay, this._repeat < -1 && c) return this.totalTime(h * 100 + n, s, a);
                if (d = et(f % h), f === u ? (_ = this._repeat, d = l) : (_ = ~~(f / h), _ && _ === et(f / h) && (d = l, _--), d > l && (d = l)), b = this._yoyo && _ & 1, b && (y = this._yEase, d = l - d), m = Ne(this._tTime, h), d === o && !a && this._initted && _ === m) return this._tTime = f, this;
                _ !== m && (x && this._yEase && es(x, b), this.vars.repeatRefresh && !b && !this._lock && this._time !== l && this._initted && (this._lock = a = 1, this.render(et(h * _), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Vi(this, c ? n : d, a, s, f)) return this._tTime = 0, this;
                if (o !== this._time && !(a && this.vars.repeatRefresh && _ !== m)) return this;
                if (l !== this._dur) return this.render(n, s, a)
            }
            if (this._tTime = f, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = v = (y || this._ease)(d / l), this._from && (this.ratio = v = 1 - v), d && !o && !s && !_ && (Tt(this, "onStart"), this._tTime !== f)) return this;
            for (p = this._pt; p;) p.r(v, p.d), p = p._next;
            x && x.render(n < 0 ? n : !d && b ? -$ : x._dur * x._ease(d / this._dur), s, a) || this._startAt && (this._zTime = n), this._onUpdate && !s && (c && en(this, n, s, a), Tt(this, "onUpdate")), this._repeat && _ !== m && this.vars.onRepeat && !s && this.parent && Tt(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && en(this, n, !0, !0), (n || !l) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && ne(this, 1), !s && !(c && !o) && (f || o || b) && (Tt(this, f === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < u && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, e.targets = function () {
        return this._targets
    }, e.invalidate = function (n) {
        return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), i.prototype.invalidate.call(this, n)
    }, e.resetTo = function (n, s, a, o, u) {
        tr || wt.wake(), this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
        return this._initted || Pn(this, l), c = this._ease(l / this._dur), fo(this, n, s, a, o, c, l, u) ? this.resetTo(n, s, a, o, 1) : (Rr(this, 0), this.parent || zi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, e.kill = function (n, s) {
        if (s === void 0 && (s = "all"), !n && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? Be(this) : this;
        if (this.timeline) {
            var a = this.timeline.totalDuration();
            return this.timeline.killTweensOf(n, s, Kt && Kt.vars.overwrite !== !0)._first || Be(this), this.parent && a !== this.timeline.totalDuration() && Re(this, this._dur * this.timeline._tDur / a, 0, 1), this
        }
        var o = this._targets, u = n ? Mt(n) : o, l = this._ptLookup, c = this._pt, f, d, p, _, h, m, b;
        if ((!s || s === "all") && Ba(o, u)) return s === "all" && (this._pt = 0), Be(this);
        for (f = this._op = this._op || [], s !== "all" && (rt(s) && (h = {}, _t(s, function (v) {
            return h[v] = 1
        }), s = h), s = ho(o, s)), b = o.length; b--;) if (~u.indexOf(o[b])) {
            d = l[b], s === "all" ? (f[b] = s, _ = d, p = {}) : (p = f[b] = f[b] || {}, _ = s);
            for (h in _) m = d && d[h], m && ((!("kill" in m.d) || m.d.kill(h) === !0) && Lr(this, m, "_pt"), delete d[h]), p !== "all" && (p[h] = 1)
        }
        return this._initted && !this._pt && c && Be(this), this
    }, t.to = function (n, s) {
        return new t(n, s, arguments[2])
    }, t.from = function (n, s) {
        return Ye(1, arguments)
    }, t.delayedCall = function (n, s, a, o) {
        return new t(s, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: n,
            onComplete: s,
            onReverseComplete: s,
            onCompleteParams: a,
            onReverseCompleteParams: a,
            callbackScope: o
        })
    }, t.fromTo = function (n, s, a) {
        return Ye(2, arguments)
    }, t.set = function (n, s) {
        return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(n, s)
    }, t.killTweensOf = function (n, s, a) {
        return W.killTweensOf(n, s, a)
    }, t
}(er);
Pt(K.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
_t("staggerTo,staggerFrom,staggerFromTo", function (i) {
    K[i] = function () {
        var t = new lt, e = nn.call(arguments, 0);
        return e.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), t[i].apply(t, e)
    }
});
var Dn = function (t, e, r) {
    return t[e] = r
}, os = function (t, e, r) {
    return t[e](r)
}, _o = function (t, e, r, n) {
    return t[e](n.fp, r)
}, mo = function (t, e, r) {
    return t.setAttribute(e, r)
}, In = function (t, e) {
    return G(t[e]) ? os : Tn(t[e]) && t.setAttribute ? mo : Dn
}, us = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
}, go = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
}, ls = function (t, e) {
    var r = e._pt, n = "";
    if (!t && e.b) n = e.b; else if (t === 1 && e.e) n = e.e; else {
        for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + n, r = r._next;
        n += e.c
    }
    e.set(e.t, e.p, n, e)
}, Ln = function (t, e) {
    for (var r = e._pt; r;) r.r(t, r.d), r = r._next
}, yo = function (t, e, r, n) {
    for (var s = this._pt, a; s;) a = s._next, s.p === n && s.modifier(t, e, r), s = a
}, vo = function (t) {
    for (var e = this._pt, r, n; e;) n = e._next, e.p === t && !e.op || e.op === t ? Lr(this, e, "_pt") : e.dep || (r = 1), e = n;
    return !r
}, bo = function (t, e, r, n) {
    n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
}, cs = function (t) {
    for (var e = t._pt, r, n, s, a; e;) {
        for (r = e._next, n = s; n && n.pr > e.pr;) n = n._next;
        (e._prev = n ? n._prev : a) ? e._prev._next = e : s = e, (e._next = n) ? n._prev = e : a = e, e = r
    }
    t._pt = s
}, mt = function () {
    function i(e, r, n, s, a, o, u, l, c) {
        this.t = r, this.s = s, this.c = a, this.p = n, this.r = o || us, this.d = u || this, this.set = l || Dn, this.pr = c || 0, this._next = e, e && (e._prev = this)
    }

    var t = i.prototype;
    return t.modifier = function (r, n, s) {
        this.mSet = this.mSet || this.set, this.set = bo, this.m = r, this.mt = s, this.tween = n
    }, i
}();
_t(Cn + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (i) {
    return En[i] = 1
});
St.TweenMax = St.TweenLite = K;
St.TimelineLite = St.TimelineMax = lt;
W = new lt({ sortChildren: !1, defaults: Le, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 });
Ot.stringFilter = Ji;
var ge = [], pr = {}, xo = [], ii = 0, wo = 0, Yr = function (t) {
    return (pr[t] || xo).map(function (e) {
        return e()
    })
}, un = function () {
    var t = Date.now(), e = [];
    t - ii > 2 && (Yr("matchMediaInit"), ge.forEach(function (r) {
        var n = r.queries, s = r.conditions, a, o, u, l;
        for (o in n) a = Et.matchMedia(n[o]).matches, a && (u = 1), a !== s[o] && (s[o] = a, l = 1);
        l && (r.revert(), u && e.push(r))
    }), Yr("matchMediaRevert"), e.forEach(function (r) {
        return r.onMatch(r, function (n) {
            return r.add(null, n)
        })
    }), ii = t, Yr("matchMedia"))
}, fs = function () {
    function i(e, r) {
        this.selector = r && sn(r), this.data = [], this._r = [], this.isReverted = !1, this.id = wo++, e && this.add(e)
    }

    var t = i.prototype;
    return t.add = function (r, n, s) {
        G(r) && (s = n, n = r, r = G);
        var a = this, o = function () {
            var l = X, c = a.selector, f;
            return l && l !== a && l.data.push(a), s && (a.selector = sn(s)), X = a, f = n.apply(a, arguments), G(f) && a._r.push(f), X = l, a.selector = c, a.isReverted = !1, f
        };
        return a.last = o, r === G ? o(a, function (u) {
            return a.add(null, u)
        }) : r ? a[r] = o : o
    }, t.ignore = function (r) {
        var n = X;
        X = null, r(this), X = n
    }, t.getTweens = function () {
        var r = [];
        return this.data.forEach(function (n) {
            return n instanceof i ? r.push.apply(r, n.getTweens()) : n instanceof K && !(n.parent && n.parent.data === "nested") && r.push(n)
        }), r
    }, t.clear = function () {
        this._r.length = this.data.length = 0
    }, t.kill = function (r, n) {
        var s = this;
        if (r ? function () {
            for (var o = s.getTweens(), u = s.data.length, l; u--;) l = s.data[u], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function (c) {
                return o.splice(o.indexOf(c), 1)
            }));
            for (o.map(function (c) {
                return {
                    g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                    t: c
                }
            }).sort(function (c, f) {
                return f.g - c.g || -1 / 0
            }).forEach(function (c) {
                return c.t.revert(r)
            }), u = s.data.length; u--;) l = s.data[u], l instanceof lt ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof K) && l.revert && l.revert(r);
            s._r.forEach(function (c) {
                return c(r, s)
            }), s.isReverted = !0
        }() : this.data.forEach(function (o) {
            return o.kill && o.kill()
        }), this.clear(), n) for (var a = ge.length; a--;) ge[a].id === this.id && ge.splice(a, 1)
    }, t.revert = function (r) {
        this.kill(r || {})
    }, i
}(), To = function () {
    function i(e) {
        this.contexts = [], this.scope = e
    }

    var t = i.prototype;
    return t.add = function (r, n, s) {
        jt(r) || (r = { matches: r });
        var a = new fs(0, s || this.scope), o = a.conditions = {}, u, l, c;
        X && !a.selector && (a.selector = X.selector), this.contexts.push(a), n = a.add("onMatch", n), a.queries = r;
        for (l in r) l === "all" ? c = 1 : (u = Et.matchMedia(r[l]), u && (ge.indexOf(a) < 0 && ge.push(a), (o[l] = u.matches) && (c = 1), u.addListener ? u.addListener(un) : u.addEventListener("change", un)));
        return c && n(a, function (f) {
            return a.add(null, f)
        }), this
    }, t.revert = function (r) {
        this.kill(r || {})
    }, t.kill = function (r) {
        this.contexts.forEach(function (n) {
            return n.kill(r, !0)
        })
    }, i
}(), Sr = {
    registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        e.forEach(function (n) {
            return Qi(n)
        })
    },
    timeline: function (t) {
        return new lt(t)
    },
    getTweensOf: function (t, e) {
        return W.getTweensOf(t, e)
    },
    getProperty: function (t, e, r, n) {
        rt(t) && (t = Mt(t)[0]);
        var s = pe(t || {}).get, a = r ? Fi : Ri;
        return r === "native" && (r = ""), t && (e ? a((xt[e] && xt[e].get || s)(t, e, r, n)) : function (o, u, l) {
            return a((xt[o] && xt[o].get || s)(t, o, u, l))
        })
    },
    quickSetter: function (t, e, r) {
        if (t = Mt(t), t.length > 1) {
            var n = t.map(function (c) {
                return yt.quickSetter(c, e, r)
            }), s = n.length;
            return function (c) {
                for (var f = s; f--;) n[f](c)
            }
        }
        t = t[0] || {};
        var a = xt[e], o = pe(t), u = o.harness && (o.harness.aliases || {})[e] || e, l = a ? function (c) {
            var f = new a;
            Ce._pt = 0, f.init(t, r ? c + r : c, Ce, 0, [t]), f.render(1, f), Ce._pt && Ln(1, Ce)
        } : o.set(t, u);
        return a ? l : function (c) {
            return l(t, u, r ? c + r : c, o, 1)
        }
    },
    quickTo: function (t, e, r) {
        var n, s = yt.to(t, ve((n = {}, n[e] = "+=0.1", n.paused = !0, n), r || {})), a = function (u, l, c) {
            return s.resetTo(e, u, l, c)
        };
        return a.tween = s, a
    },
    isTweening: function (t) {
        return W.getTweensOf(t, !0).length > 0
    },
    defaults: function (t) {
        return t && t.ease && (t.ease = me(t.ease, Le.ease)), Jn(Le, t || {})
    },
    config: function (t) {
        return Jn(Ot, t || {})
    },
    registerEffect: function (t) {
        var e = t.name, r = t.effect, n = t.plugins, s = t.defaults, a = t.extendTimeline;
        (n || "").split(",").forEach(function (o) {
            return o && !xt[o] && !St[o] && Ze(e + " effect requires " + o + " plugin.")
        }), qr[e] = function (o, u, l) {
            return r(Mt(o), Pt(u || {}, s), l)
        }, a && (lt.prototype[e] = function (o, u, l) {
            return this.add(qr[e](o, jt(u) ? u : (l = u) && {}, this), l)
        })
    },
    registerEase: function (t, e) {
        N[t] = me(e)
    },
    parseEase: function (t, e) {
        return arguments.length ? me(t, e) : N
    },
    getById: function (t) {
        return W.getById(t)
    },
    exportRoot: function (t, e) {
        t === void 0 && (t = {});
        var r = new lt(t), n, s;
        for (r.smoothChildTiming = pt(t.smoothChildTiming), W.remove(r), r._dp = 0, r._time = r._tTime = W._time, n = W._first; n;) s = n._next, (e || !(!n._dur && n instanceof K && n.vars.onComplete === n._targets[0])) && Lt(r, n, n._start - n._delay), n = s;
        return Lt(W, r, 0), r
    },
    context: function (t, e) {
        return t ? new fs(t, e) : X
    },
    matchMedia: function (t) {
        return new To(t)
    },
    matchMediaRefresh: function () {
        return ge.forEach(function (t) {
            var e = t.conditions, r, n;
            for (n in e) e[n] && (e[n] = !1, r = 1);
            r && t.revert()
        }) || un()
    },
    addEventListener: function (t, e) {
        var r = pr[t] || (pr[t] = []);
        ~r.indexOf(e) || r.push(e)
    },
    removeEventListener: function (t, e) {
        var r = pr[t], n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1)
    },
    utils: {
        wrap: to,
        wrapYoyo: eo,
        distribute: Ui,
        random: Hi,
        snap: Wi,
        normalize: Ja,
        getUnit: it,
        clamp: Ga,
        splitColor: Zi,
        toArray: Mt,
        selector: sn,
        mapRange: Xi,
        pipe: Za,
        unitize: Ka,
        interpolate: ro,
        shuffle: qi
    },
    install: Pi,
    effects: qr,
    ticker: wt,
    updateRoot: lt.updateRoot,
    plugins: xt,
    globalTimeline: W,
    core: {
        PropTween: mt,
        globals: Di,
        Tween: K,
        Timeline: lt,
        Animation: er,
        getCache: pe,
        _removeLinkedListItem: Lr,
        reverting: function () {
            return st
        },
        context: function (t) {
            return t && X && (X.data.push(t), t._ctx = X), X
        },
        suppressOverwrites: function (t) {
            return wn = t
        }
    }
};
_t("to,from,fromTo,delayedCall,set,killTweensOf", function (i) {
    return Sr[i] = K[i]
});
wt.add(lt.updateRoot);
Ce = Sr.to({}, { duration: 0 });
var Oo = function (t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
    return r
}, So = function (t, e) {
    var r = t._targets, n, s, a;
    for (n in e) for (s = r.length; s--;) a = t._ptLookup[s][n], a && (a = a.d) && (a._pt && (a = Oo(a, n)), a && a.modifier && a.modifier(e[n], t, r[s], n))
}, Xr = function (t, e) {
    return {
        name: t, rawVars: 1, init: function (n, s, a) {
            a._onInit = function (o) {
                var u, l;
                if (rt(s) && (u = {}, _t(s, function (c) {
                    return u[c] = 1
                }), s = u), e) {
                    u = {};
                    for (l in s) u[l] = e(s[l]);
                    s = u
                }
                So(o, s)
            }
        }
    }
}, yt = Sr.registerPlugin({
    name: "attr", init: function (t, e, r, n, s) {
        var a, o, u;
        this.tween = r;
        for (a in e) u = t.getAttribute(a) || "", o = this.add(t, "setAttribute", (u || 0) + "", e[a], n, s, 0, 0, a), o.op = a, o.b = u, this._props.push(a)
    }, render: function (t, e) {
        for (var r = e._pt; r;) st ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
    }
}, {
    name: "endArray", init: function (t, e) {
        for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
    }
}, Xr("roundProps", an), Xr("modifiers"), Xr("snap", Wi)) || Sr;
K.version = lt.version = yt.version = "3.12.4";
Ai = 1;
On() && Fe();
N.Power0;
N.Power1;
N.Power2;
N.Power3;
N.Power4;
N.Linear;
N.Quad;
N.Cubic;
N.Quart;
N.Quint;
N.Strong;
N.Elastic;
N.Back;
N.SteppedEase;
N.Bounce;
N.Sine;
N.Expo;
N.Circ;/*!
 * CSSPlugin 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var si, Jt, Pe, Nn, fe, ai, Rn, ko = function () {
    return typeof window < "u"
}, Ht = {}, ue = 180 / Math.PI, De = Math.PI / 180, Oe = Math.atan2, oi = 1e8, Fn = /([A-Z])/g,
    Eo = /(left|right|width|margin|padding|x)/i, Co = /[\s,\(]\S/,
    Nt = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" }, ln = function (t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    }, Mo = function (t, e) {
        return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    }, Ao = function (t, e) {
        return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
    }, Po = function (t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }, hs = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }, ds = function (t, e) {
        return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
    }, Do = function (t, e, r) {
        return t.style[e] = r
    }, Io = function (t, e, r) {
        return t.style.setProperty(e, r)
    }, Lo = function (t, e, r) {
        return t._gsap[e] = r
    }, No = function (t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }, Ro = function (t, e, r, n, s) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(s, a)
    }, Fo = function (t, e, r, n, s) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(s, a)
    }, H = "transform", gt = H + "Origin", zo = function i(t, e) {
        var r = this, n = this.target, s = n.style, a = n._gsap;
        if (t in Ht && s) {
            if (this.tfm = this.tfm || {}, t !== "transform") t = Nt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function (o) {
                return r.tfm[o] = qt(n, o)
            }) : this.tfm[t] = a.x ? a[t] : qt(n, t), t === gt && (this.tfm.zOrigin = a.zOrigin); else return Nt.transform.split(",").forEach(function (o) {
                return i.call(r, o, e)
            });
            if (this.props.indexOf(H) >= 0) return;
            a.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(gt, e, "")), t = H
        }
        (s || e) && this.props.push(t, e, s[t])
    }, ps = function (t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    }, jo = function () {
        var t = this.props, e = this.target, r = e.style, n = e._gsap, s, a;
        for (s = 0; s < t.length; s += 3) t[s + 1] ? e[t[s]] = t[s + 2] : t[s + 2] ? r[t[s]] = t[s + 2] : r.removeProperty(t[s].substr(0, 2) === "--" ? t[s] : t[s].replace(Fn, "-$1").toLowerCase());
        if (this.tfm) {
            for (a in this.tfm) n[a] = this.tfm[a];
            n.svg && (n.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), s = Rn(), (!s || !s.isStart) && !r[H] && (ps(r), n.zOrigin && r[gt] && (r[gt] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1)
        }
    }, _s = function (t, e) {
        var r = { target: t, props: [], revert: jo, save: zo };
        return t._gsap || yt.core.getCache(t), e && e.split(",").forEach(function (n) {
            return r.save(n)
        }), r
    }, ms, cn = function (t, e) {
        var r = Jt.createElementNS ? Jt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Jt.createElement(t);
        return r && r.style ? r : Jt.createElement(t)
    }, Ft = function i(t, e, r) {
        var n = getComputedStyle(t);
        return n[e] || n.getPropertyValue(e.replace(Fn, "-$1").toLowerCase()) || n.getPropertyValue(e) || !r && i(t, ze(e) || e, 1) || ""
    }, ui = "O,Moz,ms,Ms,Webkit".split(","), ze = function (t, e, r) {
        var n = e || fe, s = n.style, a = 5;
        if (t in s && !r) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); a-- && !(ui[a] + t in s););
        return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? ui[a] : "") + t
    }, fn = function () {
        ko() && window.document && (si = window, Jt = si.document, Pe = Jt.documentElement, fe = cn("div") || { style: {} }, cn("div"), H = ze(H), gt = H + "Origin", fe.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ms = !!ze("perspective"), Rn = yt.core.reverting, Nn = 1)
    }, Gr = function i(t) {
        var e = cn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            r = this.parentNode, n = this.nextSibling, s = this.style.cssText, a;
        if (Pe.appendChild(e), e.appendChild(this), this.style.display = "block", t) try {
            a = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = i
        } catch {
        } else this._gsapBBox && (a = this._gsapBBox());
        return r && (n ? r.insertBefore(this, n) : r.appendChild(this)), Pe.removeChild(e), this.style.cssText = s, a
    }, li = function (t, e) {
        for (var r = e.length; r--;) if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }, gs = function (t) {
        var e;
        try {
            e = t.getBBox()
        } catch {
            e = Gr.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === Gr || (e = Gr.call(t, !0)), e && !e.width && !e.x && !e.y ? {
            x: +li(t, ["x", "cx", "x1"]) || 0,
            y: +li(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : e
    }, ys = function (t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && gs(t))
    }, be = function (t, e) {
        if (e) {
            var r = t.style, n;
            e in Ht && e !== gt && (e = H), r.removeProperty ? (n = e.substr(0, 2), (n === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(n === "--" ? e : e.replace(Fn, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }, te = function (t, e, r, n, s, a) {
        var o = new mt(t._pt, e, r, 0, 1, a ? ds : hs);
        return t._pt = o, o.b = n, o.e = s, t._props.push(r), o
    }, ci = { deg: 1, rad: 1, turn: 1 }, $o = { grid: 1, flex: 1 }, ie = function i(t, e, r, n) {
        var s = parseFloat(r) || 0, a = (r + "").trim().substr((s + "").length) || "px", o = fe.style, u = Eo.test(e),
            l = t.tagName.toLowerCase() === "svg", c = (l ? "client" : "offset") + (u ? "Width" : "Height"), f = 100,
            d = n === "px", p = n === "%", _, h, m, b;
        if (n === a || !s || ci[n] || ci[a]) return s;
        if (a !== "px" && !d && (s = i(t, e, r, "px")), b = t.getCTM && ys(t), (p || a === "%") && (Ht[e] || ~e.indexOf("adius"))) return _ = b ? t.getBBox()[u ? "width" : "height"] : t[c], Z(p ? s / _ * f : s / 100 * _);
        if (o[u ? "width" : "height"] = f + (d ? a : n), h = ~e.indexOf("adius") || n === "em" && t.appendChild && !l ? t : t.parentNode, b && (h = (t.ownerSVGElement || {}).parentNode), (!h || h === Jt || !h.appendChild) && (h = Jt.body), m = h._gsap, m && p && m.width && u && m.time === wt.time && !m.uncache) return Z(s / m.width * f);
        if (p && (e === "height" || e === "width")) {
            var v = t.style[e];
            t.style[e] = f + n, _ = t[c], v ? t.style[e] = v : be(t, e)
        } else (p || a === "%") && !$o[Ft(h, "display")] && (o.position = Ft(t, "position")), h === t && (o.position = "static"), h.appendChild(fe), _ = fe[c], h.removeChild(fe), o.position = "absolute";
        return u && p && (m = pe(h), m.time = wt.time, m.width = h[c]), Z(d ? _ * s / f : _ && s ? f / _ * s : 0)
    }, qt = function (t, e, r, n) {
        var s;
        return Nn || fn(), e in Nt && e !== "transform" && (e = Nt[e], ~e.indexOf(",") && (e = e.split(",")[0])), Ht[e] && e !== "transform" ? (s = nr(t, n), s = e !== "transformOrigin" ? s[e] : s.svg ? s.origin : Er(Ft(t, gt)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) && (s = kr[e] && kr[e](t, e, r) || Ft(t, e) || Li(t, e) || (e === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? ie(t, e, s, r) + r : s
    }, Vo = function (t, e, r, n) {
        if (!r || r === "none") {
            var s = ze(e, t, 1), a = s && Ft(t, s, 1);
            a && a !== r ? (e = s, r = a) : e === "borderColor" && (r = Ft(t, "borderTopColor"))
        }
        var o = new mt(this._pt, t.style, e, 0, 1, ls), u = 0, l = 0, c, f, d, p, _, h, m, b, v, x, y, g;
        if (o.b = r, o.e = n, r += "", n += "", n === "auto" && (h = t.style[e], t.style[e] = n, n = Ft(t, e) || n, h ? t.style[e] = h : be(t, e)), c = [r, n], Ji(c), r = c[0], n = c[1], d = r.match(Ee) || [], g = n.match(Ee) || [], g.length) {
            for (; f = Ee.exec(n);) m = f[0], v = n.substring(u, f.index), _ ? _ = (_ + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (_ = 1), m !== (h = d[l++] || "") && (p = parseFloat(h) || 0, y = h.substr((p + "").length), m.charAt(1) === "=" && (m = Ae(p, m) + y), b = parseFloat(m), x = m.substr((b + "").length), u = Ee.lastIndex - x.length, x || (x = x || Ot.units[e] || y, u === n.length && (n += x, o.e += x)), y !== x && (p = ie(t, e, h, x) || 0), o._pt = {
                _next: o._pt,
                p: v || l === 1 ? v : ",",
                s: p,
                c: b - p,
                m: _ && _ < 4 || e === "zIndex" ? Math.round : 0
            });
            o.c = u < n.length ? n.substring(u, n.length) : ""
        } else o.r = e === "display" && n === "none" ? ds : hs;
        return Ci.test(n) && (o.e = 0), this._pt = o, o
    }, fi = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" }, Bo = function (t) {
        var e = t.split(" "), r = e[0], n = e[1] || "50%";
        return (r === "top" || r === "bottom" || n === "left" || n === "right") && (t = r, r = n, n = t), e[0] = fi[r] || r, e[1] = fi[n] || n, e.join(" ")
    }, qo = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r = e.t, n = r.style, s = e.u, a = r._gsap, o, u, l;
            if (s === "all" || s === !0) n.cssText = "", u = 1; else for (s = s.split(","), l = s.length; --l > -1;) o = s[l], Ht[o] && (u = 1, o = o === "transformOrigin" ? gt : H), be(r, o);
            u && (be(r, H), a && (a.svg && r.removeAttribute("transform"), nr(r, 1), a.uncache = 1, ps(n)))
        }
    }, kr = {
        clearProps: function (t, e, r, n, s) {
            if (s.data !== "isFromStart") {
                var a = t._pt = new mt(t._pt, e, r, 0, 0, qo);
                return a.u = n, a.pr = -10, a.tween = s, t._props.push(r), 1
            }
        }
    }, rr = [1, 0, 0, 1, 0, 0], vs = {}, bs = function (t) {
        return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
    }, hi = function (t) {
        var e = Ft(t, H);
        return bs(e) ? rr : e.substr(7).match(Ei).map(Z)
    }, zn = function (t, e) {
        var r = t._gsap || pe(t), n = t.style, s = hi(t), a, o, u, l;
        return r.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, s = [u.a, u.b, u.c, u.d, u.e, u.f], s.join(",") === "1,0,0,1,0,0" ? rr : s) : (s === rr && !t.offsetParent && t !== Pe && !r.svg && (u = n.display, n.display = "block", a = t.parentNode, (!a || !t.offsetParent) && (l = 1, o = t.nextElementSibling, Pe.appendChild(t)), s = hi(t), u ? n.display = u : be(t, "display"), l && (o ? a.insertBefore(t, o) : a ? a.appendChild(t) : Pe.removeChild(t))), e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
    }, hn = function (t, e, r, n, s, a) {
        var o = t._gsap, u = s || zn(t, !0), l = o.xOrigin || 0, c = o.yOrigin || 0, f = o.xOffset || 0, d = o.yOffset || 0,
            p = u[0], _ = u[1], h = u[2], m = u[3], b = u[4], v = u[5], x = e.split(" "), y = parseFloat(x[0]) || 0,
            g = parseFloat(x[1]) || 0, w, k, O, T;
        r ? u !== rr && (k = p * m - _ * h) && (O = y * (m / k) + g * (-h / k) + (h * v - m * b) / k, T = y * (-_ / k) + g * (p / k) - (p * v - _ * b) / k, y = O, g = T) : (w = gs(t), y = w.x + (~x[0].indexOf("%") ? y / 100 * w.width : y), g = w.y + (~(x[1] || x[0]).indexOf("%") ? g / 100 * w.height : g)), n || n !== !1 && o.smooth ? (b = y - l, v = g - c, o.xOffset = f + (b * p + v * h) - b, o.yOffset = d + (b * _ + v * m) - v) : o.xOffset = o.yOffset = 0, o.xOrigin = y, o.yOrigin = g, o.smooth = !!n, o.origin = e, o.originIsAbsolute = !!r, t.style[gt] = "0px 0px", a && (te(a, o, "xOrigin", l, y), te(a, o, "yOrigin", c, g), te(a, o, "xOffset", f, o.xOffset), te(a, o, "yOffset", d, o.yOffset)), t.setAttribute("data-svg-origin", y + " " + g)
    }, nr = function (t, e) {
        var r = t._gsap || new ns(t);
        if ("x" in r && !e && !r.uncache) return r;
        var n = t.style, s = r.scaleX < 0, a = "px", o = "deg", u = getComputedStyle(t), l = Ft(t, gt) || "0", c, f, d, p,
            _, h, m, b, v, x, y, g, w, k, O, T, A, E, S, M, C, I, D, L, B, tt, ft, R, q, Q, V, Y;
        return c = f = d = h = m = b = v = x = y = 0, p = _ = 1, r.svg = !!(t.getCTM && ys(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (n[H] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[H] !== "none" ? u[H] : "")), n.scale = n.rotate = n.translate = "none"), k = zn(t, r.svg), r.svg && (r.uncache ? (B = t.getBBox(), l = r.xOrigin - B.x + "px " + (r.yOrigin - B.y) + "px", L = "") : L = !e && t.getAttribute("data-svg-origin"), hn(t, L || l, !!L || r.originIsAbsolute, r.smooth !== !1, k)), g = r.xOrigin || 0, w = r.yOrigin || 0, k !== rr && (E = k[0], S = k[1], M = k[2], C = k[3], c = I = k[4], f = D = k[5], k.length === 6 ? (p = Math.sqrt(E * E + S * S), _ = Math.sqrt(C * C + M * M), h = E || S ? Oe(S, E) * ue : 0, v = M || C ? Oe(M, C) * ue + h : 0, v && (_ *= Math.abs(Math.cos(v * De))), r.svg && (c -= g - (g * E + w * M), f -= w - (g * S + w * C))) : (Y = k[6], Q = k[7], ft = k[8], R = k[9], q = k[10], V = k[11], c = k[12], f = k[13], d = k[14], O = Oe(Y, q), m = O * ue, O && (T = Math.cos(-O), A = Math.sin(-O), L = I * T + ft * A, B = D * T + R * A, tt = Y * T + q * A, ft = I * -A + ft * T, R = D * -A + R * T, q = Y * -A + q * T, V = Q * -A + V * T, I = L, D = B, Y = tt), O = Oe(-M, q), b = O * ue, O && (T = Math.cos(-O), A = Math.sin(-O), L = E * T - ft * A, B = S * T - R * A, tt = M * T - q * A, V = C * A + V * T, E = L, S = B, M = tt), O = Oe(S, E), h = O * ue, O && (T = Math.cos(O), A = Math.sin(O), L = E * T + S * A, B = I * T + D * A, S = S * T - E * A, D = D * T - I * A, E = L, I = B), m && Math.abs(m) + Math.abs(h) > 359.9 && (m = h = 0, b = 180 - b), p = Z(Math.sqrt(E * E + S * S + M * M)), _ = Z(Math.sqrt(D * D + Y * Y)), O = Oe(I, D), v = Math.abs(O) > 2e-4 ? O * ue : 0, y = V ? 1 / (V < 0 ? -V : V) : 0), r.svg && (L = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !bs(Ft(t, H)), L && t.setAttribute("transform", L))), Math.abs(v) > 90 && Math.abs(v) < 270 && (s ? (p *= -1, v += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (_ *= -1, v += v <= 0 ? 180 : -180)), e = e || r.uncache, r.x = c - ((r.xPercent = c && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + a, r.y = f - ((r.yPercent = f && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + a, r.z = d + a, r.scaleX = Z(p), r.scaleY = Z(_), r.rotation = Z(h) + o, r.rotationX = Z(m) + o, r.rotationY = Z(b) + o, r.skewX = v + o, r.skewY = x + o, r.transformPerspective = y + a, (r.zOrigin = parseFloat(l.split(" ")[2]) || !e && r.zOrigin || 0) && (n[gt] = Er(l)), r.xOffset = r.yOffset = 0, r.force3D = Ot.force3D, r.renderTransform = r.svg ? Wo : ms ? xs : Uo, r.uncache = 0, r
    }, Er = function (t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, Qr = function (t, e, r) {
        var n = it(e);
        return Z(parseFloat(e) + parseFloat(ie(t, "x", r + "px", n))) + n
    }, Uo = function (t, e) {
        e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, xs(t, e)
    }, ae = "0deg", Ve = "0px", oe = ") ", xs = function (t, e) {
        var r = e || this, n = r.xPercent, s = r.yPercent, a = r.x, o = r.y, u = r.z, l = r.rotation, c = r.rotationY,
            f = r.rotationX, d = r.skewX, p = r.skewY, _ = r.scaleX, h = r.scaleY, m = r.transformPerspective,
            b = r.force3D, v = r.target, x = r.zOrigin, y = "", g = b === "auto" && t && t !== 1 || b === !0;
        if (x && (f !== ae || c !== ae)) {
            var w = parseFloat(c) * De, k = Math.sin(w), O = Math.cos(w), T;
            w = parseFloat(f) * De, T = Math.cos(w), a = Qr(v, a, k * T * -x), o = Qr(v, o, -Math.sin(w) * -x), u = Qr(v, u, O * T * -x + x)
        }
        m !== Ve && (y += "perspective(" + m + oe), (n || s) && (y += "translate(" + n + "%, " + s + "%) "), (g || a !== Ve || o !== Ve || u !== Ve) && (y += u !== Ve || g ? "translate3d(" + a + ", " + o + ", " + u + ") " : "translate(" + a + ", " + o + oe), l !== ae && (y += "rotate(" + l + oe), c !== ae && (y += "rotateY(" + c + oe), f !== ae && (y += "rotateX(" + f + oe), (d !== ae || p !== ae) && (y += "skew(" + d + ", " + p + oe), (_ !== 1 || h !== 1) && (y += "scale(" + _ + ", " + h + oe), v.style[H] = y || "translate(0, 0)"
    }, Wo = function (t, e) {
        var r = e || this, n = r.xPercent, s = r.yPercent, a = r.x, o = r.y, u = r.rotation, l = r.skewX, c = r.skewY,
            f = r.scaleX, d = r.scaleY, p = r.target, _ = r.xOrigin, h = r.yOrigin, m = r.xOffset, b = r.yOffset,
            v = r.forceCSS, x = parseFloat(a), y = parseFloat(o), g, w, k, O, T;
        u = parseFloat(u), l = parseFloat(l), c = parseFloat(c), c && (c = parseFloat(c), l += c, u += c), u || l ? (u *= De, l *= De, g = Math.cos(u) * f, w = Math.sin(u) * f, k = Math.sin(u - l) * -d, O = Math.cos(u - l) * d, l && (c *= De, T = Math.tan(l - c), T = Math.sqrt(1 + T * T), k *= T, O *= T, c && (T = Math.tan(c), T = Math.sqrt(1 + T * T), g *= T, w *= T)), g = Z(g), w = Z(w), k = Z(k), O = Z(O)) : (g = f, O = d, w = k = 0), (x && !~(a + "").indexOf("px") || y && !~(o + "").indexOf("px")) && (x = ie(p, "x", a, "px"), y = ie(p, "y", o, "px")), (_ || h || m || b) && (x = Z(x + _ - (_ * g + h * k) + m), y = Z(y + h - (_ * w + h * O) + b)), (n || s) && (T = p.getBBox(), x = Z(x + n / 100 * T.width), y = Z(y + s / 100 * T.height)), T = "matrix(" + g + "," + w + "," + k + "," + O + "," + x + "," + y + ")", p.setAttribute("transform", T), v && (p.style[H] = T)
    }, Ho = function (t, e, r, n, s) {
        var a = 360, o = rt(s), u = parseFloat(s) * (o && ~s.indexOf("rad") ? ue : 1), l = u - n, c = n + l + "deg", f, d;
        return o && (f = s.split("_")[1], f === "short" && (l %= a, l !== l % (a / 2) && (l += l < 0 ? a : -a)), f === "cw" && l < 0 ? l = (l + a * oi) % a - ~~(l / a) * a : f === "ccw" && l > 0 && (l = (l - a * oi) % a - ~~(l / a) * a)), t._pt = d = new mt(t._pt, e, r, n, l, Mo), d.e = c, d.u = "deg", t._props.push(r), d
    }, di = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }, Yo = function (t, e, r) {
        var n = di({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", a = r.style, o, u, l, c, f, d, p, _;
        n.svg ? (l = r.getAttribute("transform"), r.setAttribute("transform", ""), a[H] = e, o = nr(r, 1), be(r, H), r.setAttribute("transform", l)) : (l = getComputedStyle(r)[H], a[H] = e, o = nr(r, 1), a[H] = l);
        for (u in Ht) l = n[u], c = o[u], l !== c && s.indexOf(u) < 0 && (p = it(l), _ = it(c), f = p !== _ ? ie(r, u, l, _) : parseFloat(l), d = parseFloat(c), t._pt = new mt(t._pt, o, u, f, d - f, ln), t._pt.u = _ || 0, t._props.push(u));
        di(o, n)
    };
_t("padding,margin,Width,Radius", function (i, t) {
    var e = "Top", r = "Right", n = "Bottom", s = "Left",
        a = (t < 3 ? [e, r, n, s] : [e + s, e + r, n + r, n + s]).map(function (o) {
            return t < 2 ? i + o : "border" + o + i
        });
    kr[t > 1 ? "border" + i : i] = function (o, u, l, c, f) {
        var d, p;
        if (arguments.length < 4) return d = a.map(function (_) {
            return qt(o, _, l)
        }), p = d.join(" "), p.split(d[0]).length === 5 ? d[0] : p;
        d = (c + "").split(" "), p = {}, a.forEach(function (_, h) {
            return p[_] = d[h] = d[h] || d[(h - 1) / 2 | 0]
        }), o.init(u, p, f)
    }
});
var ws = {
    name: "css", register: fn, targetTest: function (t) {
        return t.style && t.nodeType
    }, init: function (t, e, r, n, s) {
        var a = this._props, o = t.style, u = r.vars.startAt, l, c, f, d, p, _, h, m, b, v, x, y, g, w, k, O;
        Nn || fn(), this.styles = this.styles || _s(t), O = this.styles.props, this.tween = r;
        for (h in e) if (h !== "autoRound" && (c = e[h], !(xt[h] && is(h, e, r, n, t, s)))) {
            if (p = typeof c, _ = kr[h], p === "function" && (c = c.call(r, n, t, s), p = typeof c), p === "string" && ~c.indexOf("random(") && (c = Je(c)), _) _(this, t, h, c, r) && (k = 1); else if (h.substr(0, 2) === "--") l = (getComputedStyle(t).getPropertyValue(h) + "").trim(), c += "", re.lastIndex = 0, re.test(l) || (m = it(l), b = it(c)), b ? m !== b && (l = ie(t, h, l, b) + b) : m && (c += m), this.add(o, "setProperty", l, c, n, s, 0, 0, h), a.push(h), O.push(h, 0, o[h]); else if (p !== "undefined") {
                if (u && h in u ? (l = typeof u[h] == "function" ? u[h].call(r, n, t, s) : u[h], rt(l) && ~l.indexOf("random(") && (l = Je(l)), it(l + "") || l === "auto" || (l += Ot.units[h] || it(qt(t, h)) || ""), (l + "").charAt(1) === "=" && (l = qt(t, h))) : l = qt(t, h), d = parseFloat(l), v = p === "string" && c.charAt(1) === "=" && c.substr(0, 2), v && (c = c.substr(2)), f = parseFloat(c), h in Nt && (h === "autoAlpha" && (d === 1 && qt(t, "visibility") === "hidden" && f && (d = 0), O.push("visibility", 0, o.visibility), te(this, o, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), h !== "scale" && h !== "transform" && (h = Nt[h], ~h.indexOf(",") && (h = h.split(",")[0]))), x = h in Ht, x) {
                    if (this.styles.save(h), y || (g = t._gsap, g.renderTransform && !e.parseTransform || nr(t, e.parseTransform), w = e.smoothOrigin !== !1 && g.smooth, y = this._pt = new mt(this._pt, o, H, 0, 1, g.renderTransform, g, 0, -1), y.dep = 1), h === "scale") this._pt = new mt(this._pt, g, "scaleY", g.scaleY, (v ? Ae(g.scaleY, v + f) : f) - g.scaleY || 0, ln), this._pt.u = 0, a.push("scaleY", h), h += "X"; else if (h === "transformOrigin") {
                        O.push(gt, 0, o[gt]), c = Bo(c), g.svg ? hn(t, c, 0, w, 0, this) : (b = parseFloat(c.split(" ")[2]) || 0, b !== g.zOrigin && te(this, g, "zOrigin", g.zOrigin, b), te(this, o, h, Er(l), Er(c)));
                        continue
                    } else if (h === "svgOrigin") {
                        hn(t, c, 1, w, 0, this);
                        continue
                    } else if (h in vs) {
                        Ho(this, g, h, d, v ? Ae(d, v + c) : c);
                        continue
                    } else if (h === "smoothOrigin") {
                        te(this, g, "smooth", g.smooth, c);
                        continue
                    } else if (h === "force3D") {
                        g[h] = c;
                        continue
                    } else if (h === "transform") {
                        Yo(this, c, t);
                        continue
                    }
                } else h in o || (h = ze(h) || h);
                if (x || (f || f === 0) && (d || d === 0) && !Co.test(c) && h in o) m = (l + "").substr((d + "").length), f || (f = 0), b = it(c) || (h in Ot.units ? Ot.units[h] : m), m !== b && (d = ie(t, h, l, b)), this._pt = new mt(this._pt, x ? g : o, h, d, (v ? Ae(d, v + f) : f) - d, !x && (b === "px" || h === "zIndex") && e.autoRound !== !1 ? Po : ln), this._pt.u = b || 0, m !== b && b !== "%" && (this._pt.b = l, this._pt.r = Ao); else if (h in o) Vo.call(this, t, h, l, v ? v + c : c); else if (h in t) this.add(t, h, l || t[h], v ? v + c : c, n, s); else if (h !== "parseTransform") {
                    kn(h, c);
                    continue
                }
                x || (h in o ? O.push(h, 0, o[h]) : O.push(h, 1, l || t[h])), a.push(h)
            }
        }
        k && cs(this)
    }, render: function (t, e) {
        if (e.tween._time || !Rn()) for (var r = e._pt; r;) r.r(t, r.d), r = r._next; else e.styles.revert()
    }, get: qt, aliases: Nt, getSetter: function (t, e, r) {
        var n = Nt[e];
        return n && n.indexOf(",") < 0 && (e = n), e in Ht && e !== gt && (t._gsap.x || qt(t, "x")) ? r && ai === r ? e === "scale" ? No : Lo : (ai = r || {}) && (e === "scale" ? Ro : Fo) : t.style && !Tn(t.style[e]) ? Do : ~e.indexOf("-") ? Io : In(t, e)
    }, core: { _removeProperty: be, _getMatrix: zn }
};
yt.utils.checkPrefix = ze;
yt.core.getStyleSaver = _s;
(function (i, t, e, r) {
    var n = _t(i + "," + t + "," + e, function (s) {
        Ht[s] = 1
    });
    _t(t, function (s) {
        Ot.units[s] = "deg", vs[s] = 1
    }), Nt[n[13]] = i + "," + t, _t(r, function (s) {
        var a = s.split(":");
        Nt[a[1]] = n[a[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (i) {
    Ot.units[i] = "px"
});
yt.registerPlugin(ws);
var Ts = yt.registerPlugin(ws) || yt;
Ts.core.Tween;
(function () {
    function i() {
        for (var r = arguments.length, n = 0; n < r; n++) {
            var s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            s.nodeType === 1 || s.nodeType === 11 ? this.appendChild(s) : this.appendChild(document.createTextNode(String(s)))
        }
    }

    function t() {
        for (; this.lastChild;) this.removeChild(this.lastChild);
        arguments.length && this.append.apply(this, arguments)
    }

    function e() {
        for (var r = this.parentNode, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
        var o = s.length;
        if (r) for (o || r.removeChild(this); o--;) {
            var u = s[o];
            typeof u != "object" ? u = this.ownerDocument.createTextNode(u) : u.parentNode && u.parentNode.removeChild(u), o ? r.insertBefore(this.previousSibling, u) : r.replaceChild(u, this)
        }
    }

    typeof Element < "u" && (Element.prototype.append || (Element.prototype.append = i, DocumentFragment.prototype.append = i), Element.prototype.replaceChildren || (Element.prototype.replaceChildren = t, DocumentFragment.prototype.replaceChildren = t), Element.prototype.replaceWith || (Element.prototype.replaceWith = e, DocumentFragment.prototype.replaceWith = e))
})();

function Xo(i, t) {
    if (!(i instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function pi(i, t) {
    for (var e = 0; e < t.length; e++) {
        var r = t[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
    }
}

function _i(i, t, e) {
    return t && pi(i.prototype, t), e && pi(i, e), i
}

function Go(i, t, e) {
    return t in i ? Object.defineProperty(i, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[t] = e, i
}

function mi(i, t) {
    var e = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(i);
        t && (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(i, n).enumerable
        })), e.push.apply(e, r)
    }
    return e
}

function gi(i) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t] != null ? arguments[t] : {};
        t % 2 ? mi(Object(e), !0).forEach(function (r) {
            Go(i, r, e[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : mi(Object(e)).forEach(function (r) {
            Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r))
        })
    }
    return i
}

function Os(i, t) {
    return Zo(i) || Jo(i, t) || Ss(i, t) || eu()
}

function ut(i) {
    return Qo(i) || Ko(i) || Ss(i) || tu()
}

function Qo(i) {
    if (Array.isArray(i)) return dn(i)
}

function Zo(i) {
    if (Array.isArray(i)) return i
}

function Ko(i) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(i)) return Array.from(i)
}

function Jo(i, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(i)))) {
        var e = [], r = !0, n = !1, s = void 0;
        try {
            for (var a = i[Symbol.iterator](), o; !(r = (o = a.next()).done) && (e.push(o.value), !(t && e.length === t)); r = !0);
        } catch (u) {
            n = !0, s = u
        } finally {
            try {
                !r && a.return != null && a.return()
            } finally {
                if (n) throw s
            }
        }
        return e
    }
}

function Ss(i, t) {
    if (i) {
        if (typeof i == "string") return dn(i, t);
        var e = Object.prototype.toString.call(i).slice(8, -1);
        if (e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set") return Array.from(i);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return dn(i, t)
    }
}

function dn(i, t) {
    (t == null || t > i.length) && (t = i.length);
    for (var e = 0, r = new Array(t); e < t; e++) r[e] = i[e];
    return r
}

function tu() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function eu() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function he(i, t) {
    return Object.getOwnPropertyNames(Object(i)).reduce(function (e, r) {
        var n = Object.getOwnPropertyDescriptor(Object(i), r), s = Object.getOwnPropertyDescriptor(Object(t), r);
        return Object.defineProperty(e, r, s || n)
    }, {})
}

function ar(i) {
    return typeof i == "string"
}

function jn(i) {
    return Array.isArray(i)
}

function cr() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = he(i), e;
    return t.types !== void 0 ? e = t.types : t.split !== void 0 && (e = t.split), e !== void 0 && (t.types = (ar(e) || jn(e) ? String(e) : "").split(",").map(function (r) {
        return String(r).trim()
    }).filter(function (r) {
        return /((line)|(word)|(char))/i.test(r)
    })), (t.absolute || t.position) && (t.absolute = t.absolute || /absolute/.test(i.position)), t
}

function $n(i) {
    var t = ar(i) || jn(i) ? String(i) : "";
    return { none: !t, lines: /line/i.test(t), words: /word/i.test(t), chars: /char/i.test(t) }
}

function Fr(i) {
    return i !== null && typeof i == "object"
}

function ru(i) {
    return Fr(i) && /^(1|3|11)$/.test(i.nodeType)
}

function nu(i) {
    return typeof i == "number" && i > -1 && i % 1 === 0
}

function iu(i) {
    return Fr(i) && nu(i.length)
}

function xe(i) {
    return jn(i) ? i : i == null ? [] : iu(i) ? Array.prototype.slice.call(i) : [i]
}

function yi(i) {
    var t = i;
    return ar(i) && (/^(#[a-z]\w+)$/.test(i.trim()) ? t = document.getElementById(i.trim().slice(1)) : t = document.querySelectorAll(i)), xe(t).reduce(function (e, r) {
        return [].concat(ut(e), ut(xe(r).filter(ru)))
    }, [])
}

var su = Object.entries, Cr = "_splittype", Dt = {}, au = 0;

function Rt(i, t, e) {
    if (!Fr(i)) return console.warn("[data.set] owner is not an object"), null;
    var r = i[Cr] || (i[Cr] = ++au), n = Dt[r] || (Dt[r] = {});
    return e === void 0 ? t && Object.getPrototypeOf(t) === Object.prototype && (Dt[r] = gi(gi({}, n), t)) : t !== void 0 && (n[t] = e), e
}

function de(i, t) {
    var e = Fr(i) ? i[Cr] : null, r = e && Dt[e] || {};
    return t === void 0 ? r : r[t]
}

function ks(i) {
    var t = i && i[Cr];
    t && (delete i[t], delete Dt[t])
}

function ou() {
    Object.keys(Dt).forEach(function (i) {
        delete Dt[i]
    })
}

function uu() {
    su(Dt).forEach(function (i) {
        var t = Os(i, 2), e = t[0], r = t[1], n = r.isRoot, s = r.isSplit;
        (!n || !s) && (Dt[e] = null, delete Dt[e])
    })
}

function lu(i) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ", e = i ? String(i) : "";
    return e.trim().replace(/\s+/g, " ").split(t)
}

var Vn = "\\ud800-\\udfff", Es = "\\u0300-\\u036f\\ufe20-\\ufe23", Cs = "\\u20d0-\\u20f0", Ms = "\\ufe0e\\ufe0f",
    cu = "[".concat(Vn, "]"), pn = "[".concat(Es).concat(Cs, "]"), _n = "\\ud83c[\\udffb-\\udfff]",
    fu = "(?:".concat(pn, "|").concat(_n, ")"), As = "[^".concat(Vn, "]"), Ps = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Ds = "[\\ud800-\\udbff][\\udc00-\\udfff]", Is = "\\u200d", Ls = "".concat(fu, "?"), Ns = "[".concat(Ms, "]?"),
    hu = "(?:" + Is + "(?:" + [As, Ps, Ds].join("|") + ")" + Ns + Ls + ")*", du = Ns + Ls + hu,
    pu = "(?:".concat(["".concat(As).concat(pn, "?"), pn, Ps, Ds, cu].join("|"), `
)`), _u = RegExp("".concat(_n, "(?=").concat(_n, ")|").concat(pu).concat(du), "g"), mu = [Is, Vn, Es, Cs, Ms],
    gu = RegExp("[".concat(mu.join(""), "]"));

function yu(i) {
    return i.split("")
}

function Rs(i) {
    return gu.test(i)
}

function vu(i) {
    return i.match(_u) || []
}

function bu(i) {
    return Rs(i) ? vu(i) : yu(i)
}

function xu(i) {
    return i == null ? "" : String(i)
}

function wu(i) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return i = xu(i), i && ar(i) && !t && Rs(i) ? bu(i) : i.split(t)
}

function mn(i, t) {
    var e = document.createElement(i);
    return t && Object.keys(t).forEach(function (r) {
        var n = t[r], s = ar(n) ? n.trim() : n;
        s === null || s === "" || (r === "children" ? e.append.apply(e, ut(xe(s))) : e.setAttribute(r, s))
    }), e
}

var Bn = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div"
};

function Tu(i, t) {
    t = he(Bn, t);
    var e = $n(t.types), r = t.tagName, n = i.nodeValue, s = document.createDocumentFragment(), a = [], o = [];
    return /^\s/.test(n) && s.append(" "), a = lu(n).reduce(function (u, l, c, f) {
        var d, p;
        return e.chars && (p = wu(l).map(function (_) {
            var h = mn(r, {
                class: "".concat(t.splitClass, " ").concat(t.charClass),
                style: "display: inline-block;",
                children: _
            });
            return Rt(h, "isChar", !0), o = [].concat(ut(o), [h]), h
        })), e.words || e.lines ? (d = mn(r, {
            class: "".concat(t.wordClass, " ").concat(t.splitClass),
            style: "display: inline-block; ".concat(e.words && t.absolute ? "position: relative;" : ""),
            children: e.chars ? p : l
        }), Rt(d, { isWord: !0, isWordStart: !0, isWordEnd: !0 }), s.appendChild(d)) : p.forEach(function (_) {
            s.appendChild(_)
        }), c < f.length - 1 && s.append(" "), e.words ? u.concat(d) : u
    }, []), /\s$/.test(n) && s.append(" "), i.replaceWith(s), { words: a, chars: o }
}

function Fs(i, t) {
    var e = i.nodeType, r = { words: [], chars: [] };
    if (!/(1|3|11)/.test(e)) return r;
    if (e === 3 && /\S/.test(i.nodeValue)) return Tu(i, t);
    var n = xe(i.childNodes);
    if (n.length && (Rt(i, "isSplit", !0), !de(i).isRoot)) {
        i.style.display = "inline-block", i.style.position = "relative";
        var s = i.nextSibling, a = i.previousSibling, o = i.textContent || "", u = s ? s.textContent : " ",
            l = a ? a.textContent : " ";
        Rt(i, { isWordEnd: /\s$/.test(o) || /^\s/.test(u), isWordStart: /^\s/.test(o) || /\s$/.test(l) })
    }
    return n.reduce(function (c, f) {
        var d = Fs(f, t), p = d.words, _ = d.chars;
        return { words: [].concat(ut(c.words), ut(p)), chars: [].concat(ut(c.chars), ut(_)) }
    }, r)
}

function Ou(i, t, e, r) {
    if (!e.absolute) return { top: t ? i.offsetTop : null };
    var n = i.offsetParent, s = Os(r, 2), a = s[0], o = s[1], u = 0, l = 0;
    if (n && n !== document.body) {
        var c = n.getBoundingClientRect();
        u = c.x + a, l = c.y + o
    }
    var f = i.getBoundingClientRect(), d = f.width, p = f.height, _ = f.x, h = f.y, m = h + o - l, b = _ + a - u;
    return { width: d, height: p, top: m, left: b }
}

function zs(i) {
    de(i).isWord ? (ks(i), i.replaceWith.apply(i, ut(i.childNodes))) : xe(i.children).forEach(function (t) {
        return zs(t)
    })
}

var Su = function () {
    return document.createDocumentFragment()
};

function ku(i, t, e) {
    var r = $n(t.types), n = t.tagName, s = i.getElementsByTagName("*"), a = [], o = [], u = null, l, c, f, d = [],
        p = i.parentElement, _ = i.nextElementSibling, h = Su(), m = window.getComputedStyle(i), b = m.textAlign,
        v = parseFloat(m.fontSize), x = v * .2;
    return t.absolute && (f = {
        left: i.offsetLeft,
        top: i.offsetTop,
        width: i.offsetWidth
    }, c = i.offsetWidth, l = i.offsetHeight, Rt(i, {
        cssWidth: i.style.width,
        cssHeight: i.style.height
    })), xe(s).forEach(function (y) {
        var g = y.parentElement === i, w = Ou(y, g, t, e), k = w.width, O = w.height, T = w.top, A = w.left;
        /^br$/i.test(y.nodeName) || (r.lines && g && ((u === null || T - u >= x) && (u = T, a.push(o = [])), o.push(y)), t.absolute && Rt(y, {
            top: T,
            left: A,
            width: k,
            height: O
        }))
    }), p && p.removeChild(i), r.lines && (d = a.map(function (y) {
        var g = mn(n, {
            class: "".concat(t.splitClass, " ").concat(t.lineClass),
            style: "display: block; text-align: ".concat(b, "; width: 100%;")
        });
        Rt(g, "isLine", !0);
        var w = { height: 0, top: 1e4 };
        return h.appendChild(g), y.forEach(function (k, O, T) {
            var A = de(k), E = A.isWordEnd, S = A.top, M = A.height, C = T[O + 1];
            w.height = Math.max(w.height, M), w.top = Math.min(w.top, S), g.appendChild(k), E && de(C).isWordStart && g.append(" ")
        }), t.absolute && Rt(g, { height: w.height, top: w.top }), g
    }), r.words || zs(h), i.replaceChildren(h)), t.absolute && (i.style.width = "".concat(i.style.width || c, "px"), i.style.height = "".concat(l, "px"), xe(s).forEach(function (y) {
        var g = de(y), w = g.isLine, k = g.top, O = g.left, T = g.width, A = g.height, E = de(y.parentElement),
            S = !w && E.isLine;
        y.style.top = "".concat(S ? k - E.top : k, "px"), y.style.left = w ? "".concat(f.left, "px") : "".concat(O - (S ? f.left : 0), "px"), y.style.height = "".concat(A, "px"), y.style.width = w ? "".concat(f.width, "px") : "".concat(T, "px"), y.style.position = "absolute"
    })), p && (_ ? p.insertBefore(i, _) : p.appendChild(i)), d
}

var Se = he(Bn, {}), Eu = function () {
    _i(i, null, [{
        key: "clearData", value: function () {
            ou()
        }
    }, {
        key: "setDefaults", value: function (e) {
            return Se = he(Se, cr(e)), Bn
        }
    }, {
        key: "revert", value: function (e) {
            yi(e).forEach(function (r) {
                var n = de(r), s = n.isSplit, a = n.html, o = n.cssWidth, u = n.cssHeight;
                s && (r.innerHTML = a, r.style.width = o || "", r.style.height = u || "", ks(r))
            })
        }
    }, {
        key: "create", value: function (e, r) {
            return new i(e, r)
        }
    }, {
        key: "data", get: function () {
            return Dt
        }
    }, {
        key: "defaults", get: function () {
            return Se
        }, set: function (e) {
            Se = he(Se, cr(e))
        }
    }]);

    function i(t, e) {
        Xo(this, i), this.isSplit = !1, this.settings = he(Se, cr(e)), this.elements = yi(t), this.split()
    }

    return _i(i, [{
        key: "split", value: function (e) {
            var r = this;
            this.revert(), this.elements.forEach(function (a) {
                Rt(a, "html", a.innerHTML)
            }), this.lines = [], this.words = [], this.chars = [];
            var n = [window.pageXOffset, window.pageYOffset];
            e !== void 0 && (this.settings = he(this.settings, cr(e)));
            var s = $n(this.settings.types);
            s.none || (this.elements.forEach(function (a) {
                Rt(a, "isRoot", !0);
                var o = Fs(a, r.settings), u = o.words, l = o.chars;
                r.words = [].concat(ut(r.words), ut(u)), r.chars = [].concat(ut(r.chars), ut(l))
            }), this.elements.forEach(function (a) {
                if (s.lines || r.settings.absolute) {
                    var o = ku(a, r.settings, n);
                    r.lines = [].concat(ut(r.lines), ut(o))
                }
            }), this.isSplit = !0, window.scrollTo(n[0], n[1]), uu())
        }
    }, {
        key: "revert", value: function () {
            this.isSplit && (this.lines = null, this.words = null, this.chars = null, this.isSplit = !1), i.revert(this.elements)
        }
    }]), i
}();/*!
* KUTE.js Standard v2.2.4 (http://thednp.github.io/kute.js)
* Copyright 2015-2022 © thednp
* Licensed under MIT (https://github.com/thednp/kute.js/blob/master/LICENSE)
*/
class z {
    constructor(t, e, r, n, s) {
        const a = t || 0, o = e || 0, u = r || 1, l = n || 1;
        this.cx = 3 * a, this.bx = 3 * (u - a) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * o, this.by = 3 * (l - o) - this.cy, this.ay = 1 - this.cy - this.by;
        const c = f => this.sampleCurveY(this.solveCurveX(f));
        return Object.defineProperty(c, "name", { writable: !0 }), c.name = s || `cubic-bezier(${[a, o, u, l]})`, c
    }

    sampleCurveX(t) {
        return ((this.ax * t + this.bx) * t + this.cx) * t
    }

    sampleCurveY(t) {
        return ((this.ay * t + this.by) * t + this.cy) * t
    }

    sampleCurveDerivativeX(t) {
        return (3 * this.ax * t + 2 * this.bx) * t + this.cx
    }

    solveCurveX(t) {
        if (t <= 0) return 0;
        if (t >= 1) return 1;
        let r = t, n = 0, s = 0;
        for (let u = 0; u < 8; u += 1) {
            if (n = this.sampleCurveX(r) - t, Math.abs(n) < 1e-6) return r;
            if (s = this.sampleCurveDerivativeX(r), Math.abs(s) < 1e-6) break;
            r -= n / s
        }
        let a = 0, o = 1;
        for (r = t; a < o;) {
            if (n = this.sampleCurveX(r), Math.abs(n - t) < 1e-6) return r;
            t > n ? a = r : o = r, r = (o - a) * .5 + a
        }
        return r
    }
}

var Cu = "1.0.1";
const Mu = Cu;
Object.assign(z, { Version: Mu });
const P = {}, zt = [];
let _r;
typeof global < "u" ? _r = global : typeof window < "u" ? _r = window.self : _r = {};
const Au = _r, Me = {}, ct = {};
let Ue;
typeof self > "u" && typeof process < "u" && process.hrtime ? Ue = () => {
    const i = process.hrtime();
    return i[0] * 1e3 + i[1] / 1e6
} : typeof self < "u" && self.performance !== void 0 && self.performance.now !== void 0 ? Ue = self.performance.now.bind(self.performance) : typeof Date < "u" && Date.now ? Ue = Date.now : Ue = () => new Date().getTime();
const Pu = Ue, qn = {};
qn.now = Pu;
let ye = 0;
const zr = i => {
    let t = 0;
    for (; t < zt.length;) zt[t].update(i) ? t += 1 : zt.splice(t, 1);
    ye = requestAnimationFrame(zr)
};

function js() {
    setTimeout(() => {
        !zt.length && ye && (cancelAnimationFrame(ye), ye = null, Object.keys(ct).forEach(i => {
            typeof ct[i] == "function" ? P[i] && delete P[i] : Object.keys(ct[i]).forEach(t => {
                P[t] && delete P[t]
            })
        }), Object.keys(Me).forEach(i => {
            P[i] && delete P[i]
        }))
    }, 64)
}

const gn = { Tick: ye, Ticker: zr, Tweens: zt, Time: qn };
Object.keys(gn).forEach(i => {
    P[i] || (P[i] = i === "Time" ? qn.now : gn[i])
});
Au._KUTE = P;
const we = {}, dt = {},
    At = { duration: 700, delay: 0, easing: "linear", repeat: 0, repeatDelay: 0, yoyo: !1, resetStart: !1, offset: 0 },
    Mr = {}, Ar = {}, Qt = {}, Ge = {}, Pr = {}, Du = {
        supportedProperties: we,
        defaultValues: dt,
        defaultOptions: At,
        prepareProperty: Mr,
        prepareStart: Ar,
        crossCheck: Qt,
        onStart: ct,
        onComplete: Ge,
        linkProperty: Pr
    }, yn = {}, Un = i => zt.push(i), Wn = i => {
        const t = zt.indexOf(i);
        t !== -1 && zt.splice(t, 1)
    }, Iu = () => zt, Lu = () => {
        zt.length = 0
    };

function $s() {
    Object.keys(Pr).forEach(i => {
        const t = Pr[i], e = we[i];
        Object.keys(t).forEach(r => {
            typeof t[r] == "function" && Object.keys(this.valuesEnd).some(n => e && e.includes(n) || n === "attr" && Object.keys(this.valuesEnd[n]).some(s => e && e.includes(s))) ? P[r] || (P[r] = t[r]) : Object.keys(this.valuesEnd).forEach(n => {
                const s = this.valuesEnd[n];
                s instanceof Object && Object.keys(s).forEach(a => {
                    typeof t[a] == "function" ? P[a] || (P[a] = t[a]) : Object.keys(t[r]).forEach(o => {
                        t[a] && typeof t[a][o] == "function" && (P[o] || (P[o] = t[a][o]))
                    })
                })
            })
        })
    })
}

const Nu = { add: Un, remove: Wn, getAll: Iu, removeAll: Lu, stop: js, linkInterpolation: $s };

function Hn(i) {
    if (!i.style) return !1;
    const t = i.style.cssText.replace(/\s/g, "").split(";"), e = {},
        r = ["translate3d", "translate", "scale3d", "skew"];
    return t.forEach(n => {
        /transform/i.test(n) && n.split(":")[1].split(")").forEach(a => {
            const o = a.split("("), u = o[0], l = o[1];
            /matrix/.test(u) || (e[u] = r.includes(u) ? l.split(",") : l)
        })
    }), e
}

function je(i, t) {
    let e = dt[t];
    const r = i.style, n = getComputedStyle(i) || i.currentStyle,
        s = r[t] && !/auto|initial|none|unset/.test(r[t]) ? r[t] : n[t];
    return t !== "transform" && (t in n || t in r) && (e = s), e
}

function Dr(i, t) {
    const e = t === "start" ? this.valuesStart : this.valuesEnd;
    Object.keys(Mr).forEach(r => {
        const n = Mr[r], s = we[r];
        Object.keys(n).forEach(a => {
            const o = {};
            Object.keys(i).forEach(u => {
                dt[u] && n[u] ? e[u] = n[u].call(this, u, i[u]) : !dt[a] && a === "transform" && s.includes(u) ? o[u] = i[u] : !dt[u] && u === "transform" ? e[u] = i[u] : !dt[a] && s && s.includes(u) && (e[u] = n[a].call(this, u, i[u]))
            }), Object.keys(o).length && (e[a] = n[a].call(this, a, o))
        })
    })
}

function Vs() {
    const i = {}, t = Hn(this.element);
    Object.keys(this.valuesStart).forEach(e => {
        Object.keys(Ar).forEach(r => {
            const n = Ar[r];
            Object.keys(n).forEach(s => {
                s === e && n[e] ? i[e] = n[s].call(this, e, this.valuesStart[e]) : we[r] && we[r].includes(e) && (i[e] = n[s].call(this, e, this.valuesStart[e]))
            })
        })
    }), Object.keys(t).forEach(e => {
        e in this.valuesStart || (i[e] = t[e] || dt[e])
    }), this.valuesStart = {}, Dr.call(this, i, "start")
}

var Ru = { getInlineStyle: Hn, getStyleForProperty: je, getStartValues: Vs, prepareObject: Dr };
const It = {};
It.tween = null;
It.processEasing = null;
const mr = {
    linear: new z(0, 0, 1, 1, "linear"),
    easingSinusoidalIn: new z(.47, 0, .745, .715, "easingSinusoidalIn"),
    easingSinusoidalOut: new z(.39, .575, .565, 1, "easingSinusoidalOut"),
    easingSinusoidalInOut: new z(.445, .05, .55, .95, "easingSinusoidalInOut"),
    easingQuadraticIn: new z(.55, .085, .68, .53, "easingQuadraticIn"),
    easingQuadraticOut: new z(.25, .46, .45, .94, "easingQuadraticOut"),
    easingQuadraticInOut: new z(.455, .03, .515, .955, "easingQuadraticInOut"),
    easingCubicIn: new z(.55, .055, .675, .19, "easingCubicIn"),
    easingCubicOut: new z(.215, .61, .355, 1, "easingCubicOut"),
    easingCubicInOut: new z(.645, .045, .355, 1, "easingCubicInOut"),
    easingQuarticIn: new z(.895, .03, .685, .22, "easingQuarticIn"),
    easingQuarticOut: new z(.165, .84, .44, 1, "easingQuarticOut"),
    easingQuarticInOut: new z(.77, 0, .175, 1, "easingQuarticInOut"),
    easingQuinticIn: new z(.755, .05, .855, .06, "easingQuinticIn"),
    easingQuinticOut: new z(.23, 1, .32, 1, "easingQuinticOut"),
    easingQuinticInOut: new z(.86, 0, .07, 1, "easingQuinticInOut"),
    easingExponentialIn: new z(.95, .05, .795, .035, "easingExponentialIn"),
    easingExponentialOut: new z(.19, 1, .22, 1, "easingExponentialOut"),
    easingExponentialInOut: new z(1, 0, 0, 1, "easingExponentialInOut"),
    easingCircularIn: new z(.6, .04, .98, .335, "easingCircularIn"),
    easingCircularOut: new z(.075, .82, .165, 1, "easingCircularOut"),
    easingCircularInOut: new z(.785, .135, .15, .86, "easingCircularInOut"),
    easingBackIn: new z(.6, -.28, .735, .045, "easingBackIn"),
    easingBackOut: new z(.175, .885, .32, 1.275, "easingBackOut"),
    easingBackInOut: new z(.68, -.55, .265, 1.55, "easingBackInOut")
};

function Fu(i) {
    if (typeof i == "function") return i;
    if (typeof mr[i] == "function") return mr[i];
    if (/bezier/.test(i)) {
        const t = i.replace(/bezier|\s|\(|\)/g, "").split(",");
        return new z(t[0] * 1, t[1] * 1, t[2] * 1, t[3] * 1)
    }
    return mr.linear
}

It.processEasing = Fu;

function $e(i, t) {
    try {
        let e, r;
        return t ? (r = i instanceof Array && i.every(n => n instanceof Element), e = i instanceof HTMLCollection || i instanceof NodeList || r ? i : document.querySelectorAll(i)) : e = i instanceof Element || i === window ? i : document.querySelector(i), e
    } catch {
        throw TypeError(`KUTE.js - Element(s) not found: ${i}.`)
    }
}

function Bs() {
    Object.keys(ct).forEach(i => {
        typeof ct[i] == "function" ? ct[i].call(this, i) : Object.keys(ct[i]).forEach(t => {
            ct[i][t].call(this, t)
        })
    }), $s.call(this)
}

class qs {
    constructor(t, e, r, n) {
        this.element = t, this.playing = !1, this._startTime = null, this._startFired = !1, this.valuesEnd = r, this.valuesStart = e;
        const s = n || {};
        this._resetStart = s.resetStart || 0, this._easing = typeof s.easing == "function" ? s.easing : It.processEasing(s.easing), this._duration = s.duration || At.duration, this._delay = s.delay || At.delay, Object.keys(s).forEach(o => {
            const u = `_${o}`;
            u in this || (this[u] = s[o])
        });
        const a = this._easing.name;
        return ct[a] || (ct[a] = function (u) {
            !P[u] && u === this._easing.name && (P[u] = this._easing)
        }), this
    }

    start(t) {
        return Un(this), this.playing = !0, this._startTime = typeof t < "u" ? t : P.Time(), this._startTime += this._delay, this._startFired || (this._onStart && this._onStart.call(this), Bs.call(this), this._startFired = !0), ye || zr(), this
    }

    stop() {
        return this.playing && (Wn(this), this.playing = !1, this._onStop && this._onStop.call(this), this.close()), this
    }

    close() {
        Object.keys(Ge).forEach(t => {
            Object.keys(Ge[t]).forEach(e => {
                Ge[t][e].call(this, e)
            })
        }), this._startFired = !1, js.call(this)
    }

    chain(t) {
        return this._chain = [], this._chain = t.length ? t : this._chain.concat(t), this
    }

    stopChainedTweens() {
        this._chain && this._chain.length && this._chain.forEach(t => t.stop())
    }

    update(t) {
        const e = t !== void 0 ? t : P.Time();
        let r;
        if (e < this._startTime && this.playing) return !0;
        r = (e - this._startTime) / this._duration, r = this._duration === 0 || r > 1 ? 1 : r;
        const n = this._easing(r);
        return Object.keys(this.valuesEnd).forEach(s => {
            P[s](this.element, this.valuesStart[s], this.valuesEnd[s], n)
        }), this._onUpdate && this._onUpdate.call(this), r === 1 ? (this._onComplete && this._onComplete.call(this), this.playing = !1, this.close(), this._chain !== void 0 && this._chain.length && this._chain.map(s => s.start()), !1) : !0
    }
}

It.tween = qs;

class Us extends qs {
    constructor(...t) {
        super(...t), this.valuesStart = {}, this.valuesEnd = {};
        const [e, r, n] = t.slice(1);
        return Dr.call(this, r, "end"), this._resetStart ? this.valuesStart = e : Dr.call(this, e, "start"), this._resetStart || Object.keys(Qt).forEach(s => {
            Object.keys(Qt[s]).forEach(a => {
                Qt[s][a].call(this, a)
            })
        }), this.paused = !1, this._pauseTime = null, this._repeat = n.repeat || At.repeat, this._repeatDelay = n.repeatDelay || At.repeatDelay, this._repeatOption = this._repeat, this.valuesRepeat = {}, this._yoyo = n.yoyo || At.yoyo, this._reversed = !1, this
    }

    start(t) {
        return this._resetStart && (this.valuesStart = this._resetStart, Vs.call(this), Object.keys(Qt).forEach(e => {
            Object.keys(Qt[e]).forEach(r => {
                Qt[e][r].call(this, r)
            })
        })), this.paused = !1, this._yoyo && Object.keys(this.valuesEnd).forEach(e => {
            this.valuesRepeat[e] = this.valuesStart[e]
        }), super.start(t), this
    }

    stop() {
        return super.stop(), !this.paused && this.playing && (this.paused = !1, this.stopChainedTweens()), this
    }

    close() {
        return super.close(), this._repeatOption > 0 && (this._repeat = this._repeatOption), this._yoyo && this._reversed === !0 && (this.reverse(), this._reversed = !1), this
    }

    resume() {
        return this.paused && this.playing && (this.paused = !1, this._onResume !== void 0 && this._onResume.call(this), Bs.call(this), this._startTime += P.Time() - this._pauseTime, Un(this), ye || zr()), this
    }

    pause() {
        return !this.paused && this.playing && (Wn(this), this.paused = !0, this._pauseTime = P.Time(), this._onPause !== void 0 && this._onPause.call(this)), this
    }

    reverse() {
        Object.keys(this.valuesEnd).forEach(t => {
            const e = this.valuesRepeat[t];
            this.valuesRepeat[t] = this.valuesEnd[t], this.valuesEnd[t] = e, this.valuesStart[t] = this.valuesRepeat[t]
        })
    }

    update(t) {
        const e = t !== void 0 ? t : P.Time();
        let r;
        if (e < this._startTime && this.playing) return !0;
        r = (e - this._startTime) / this._duration, r = this._duration === 0 || r > 1 ? 1 : r;
        const n = this._easing(r);
        return Object.keys(this.valuesEnd).forEach(s => {
            P[s](this.element, this.valuesStart[s], this.valuesEnd[s], n)
        }), this._onUpdate && this._onUpdate.call(this), r === 1 ? this._repeat > 0 ? (Number.isFinite(this._repeat) && (this._repeat -= 1), this._startTime = e, Number.isFinite(this._repeat) && this._yoyo && !this._reversed && (this._startTime += this._repeatDelay), this._yoyo && (this._reversed = !this._reversed, this.reverse()), !0) : (this._onComplete && this._onComplete.call(this), this.playing = !1, this.close(), this._chain !== void 0 && this._chain.length && this._chain.forEach(s => s.start()), !1) : !0
    }
}

It.tween = Us;

class or {
    constructor(t, e, r, n) {
        const s = It.tween;
        this.tweens = [];
        const a = n || {};
        a.delay = a.delay || At.delay;
        const o = [];
        return Array.from(t).forEach((u, l) => {
            if (o[l] = a || {}, o[l].delay = l > 0 ? a.delay + (a.offset || At.offset) : a.delay, u instanceof Element) this.tweens.push(new s(u, e, r, o[l])); else throw Error(`KUTE - ${u} is not instanceof Element`)
        }), this.length = this.tweens.length, this
    }

    start(t) {
        const e = t === void 0 ? P.Time() : t;
        return this.tweens.map(r => r.start(e)), this
    }

    stop() {
        return this.tweens.map(t => t.stop()), this
    }

    pause() {
        return this.tweens.map(t => t.pause()), this
    }

    resume() {
        return this.tweens.map(t => t.resume()), this
    }

    chain(t) {
        const e = this.tweens[this.length - 1];
        if (t instanceof or) e.chain(t.tweens); else if (t instanceof It.tween) e.chain(t); else throw new TypeError("KUTE.js - invalid chain value");
        return this
    }

    playing() {
        return this.tweens.some(t => t.playing)
    }

    removeTweens() {
        this.tweens = []
    }

    getMaxDuration() {
        const t = [];
        return this.tweens.forEach(e => {
            t.push(e._duration + e._delay + e._repeat * e._repeatDelay)
        }), Math.max(t)
    }
}

const { tween: zu } = It;

function ju(i, t, e) {
    const r = e || {};
    return r.resetStart = t, new zu($e(i), t, t, r)
}

const { tween: $u } = It;

function Vu(i, t, e, r) {
    const n = r || {};
    return new $u($e(i), t, e, n)
}

function Bu(i, t, e) {
    const r = e || {};
    return r.resetStart = t, new or($e(i, !0), t, t, r)
}

function qu(i, t, e, r) {
    const n = r || {};
    return new or($e(i, !0), t, e, n)
}

class Ws {
    constructor(t) {
        try {
            if (t.component in we) throw Error(`KUTE - ${t.component} already registered`);
            if (t.property in dt) throw Error(`KUTE - ${t.property} already registered`)
        } catch (u) {
            throw Error(u)
        }
        const e = this, r = t.component,
            n = { prepareProperty: Mr, prepareStart: Ar, onStart: ct, onComplete: Ge, crossCheck: Qt }, s = t.category,
            a = t.property, o = t.properties && t.properties.length || t.subProperties && t.subProperties.length;
        return we[r] = t.properties || t.subProperties || t.property, "defaultValue" in t ? (dt[a] = t.defaultValue, e.supports = `${a} property`) : t.defaultValues && (Object.keys(t.defaultValues).forEach(u => {
            dt[u] = t.defaultValues[u]
        }), e.supports = `${o || a} ${a || s} properties`), t.defaultOptions && Object.assign(At, t.defaultOptions), t.functions && Object.keys(n).forEach(u => {
            u in t.functions && (typeof t.functions[u] == "function" ? (n[u][r] || (n[u][r] = {}), n[u][r][s || a] || (n[u][r][s || a] = t.functions[u])) : Object.keys(t.functions[u]).forEach(l => {
                n[u][r] || (n[u][r] = {}), n[u][r][l] || (n[u][r][l] = t.functions[u][l])
            }))
        }), t.Interpolate && (Object.keys(t.Interpolate).forEach(u => {
            const l = t.Interpolate[u];
            typeof l == "function" && !Me[u] ? Me[u] = l : Object.keys(l).forEach(c => {
                typeof l[c] == "function" && !Me[u] && (Me[u] = l[c])
            })
        }), Pr[r] = t.Interpolate), t.Util && Object.keys(t.Util).forEach(u => {
            yn[u] || (yn[u] = t.Util[u])
        }), e
    }
}

const Ie = (i, t) => {
    const e = parseInt(i, 10) || 0, r = ["px", "%", "deg", "rad", "em", "rem", "vh", "vw"];
    let n;
    for (let s = 0; s < r.length; s += 1) if (typeof i == "string" && i.includes(r[s])) {
        n = r[s];
        break
    }
    return n === void 0 && (n = t ? "deg" : "px"), { v: e, u: n }
};

function ot(i, t, e) {
    const r = +i, n = t - i;
    return r + n * e
}

function Uu(i) {
    i in this.valuesEnd && !P[i] && (P[i] = (t, e, r, n) => {
        t.style[i] = `${n > .99 || n < .01 ? (ot(e, r, n) * 10 >> 0) / 10 : ot(e, r, n) >> 0}px`
    })
}

function Wu(i) {
    return je(this.element, i) || dt[i]
}

function Hu(i, t) {
    const e = Ie(t), r = i === "height" ? "offsetHeight" : "offsetWidth";
    return e.u === "%" ? e.v * this.element[r] / 100 : e.v
}

const Hs = ["top", "left", "width", "height"], Yu = { top: 0, left: 0, width: 0, height: 0 }, Ys = {};
Hs.forEach(i => {
    Ys[i] = Uu
});
const Xu = { prepareStart: Wu, prepareProperty: Hu, onStart: Ys }, Gu = {
    component: "essentialBoxModel",
    category: "boxModel",
    properties: Hs,
    defaultValues: Yu,
    Interpolate: { numbers: ot },
    functions: Xu,
    Util: { trueDimension: Ie }
}, Qu = i => {
    const t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, e = i.replace(t, (n, s, a, o) => s + s + a + a + o + o),
        r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return r ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) } : null
}, jr = i => {
    let t;
    if (/rgb|rgba/.test(i)) {
        const e = i.replace(/\s|\)/, "").split("(")[1].split(","), r = e[3] ? e[3] : null;
        r ? t = {
            r: parseInt(e[0], 10),
            g: parseInt(e[1], 10),
            b: parseInt(e[2], 10),
            a: parseFloat(r)
        } : t = { r: parseInt(e[0], 10), g: parseInt(e[1], 10), b: parseInt(e[2], 10) }
    }
    if (/^#/.test(i)) {
        const e = Qu(i);
        t = { r: e.r, g: e.g, b: e.b }
    }
    if (/transparent|none|initial|inherit/.test(i) && (t = { r: 0, g: 0, b: 0, a: 0 }), !/^#|^rgb/.test(i)) {
        const e = document.getElementsByTagName("head")[0];
        e.style.color = i;
        let r = getComputedStyle(e, null).color;
        r = /rgb/.test(r) ? r.replace(/[^\d,]/g, "").split(",") : [0, 0, 0], e.style.color = "", t = {
            r: parseInt(r[0], 10),
            g: parseInt(r[1], 10),
            b: parseInt(r[2], 10)
        }
    }
    return t
};

function $r(i, t, e) {
    const r = {}, n = ")", s = ",", a = "rgb(", o = "rgba(";
    return Object.keys(t).forEach(u => {
        u !== "a" ? r[u] = ot(i[u], t[u], e) >> 0 || 0 : i[u] && t[u] && (r[u] = (ot(i[u], t[u], e) * 100 >> 0) / 100)
    }), r.a ? o + r.r + s + r.g + s + r.b + s + r.a + n : a + r.r + s + r.g + s + r.b + n
}

function Zu(i) {
    this.valuesEnd[i] && !P[i] && (P[i] = (t, e, r, n) => {
        t.style[i] = $r(e, r, n)
    })
}

const Yn = ["color", "backgroundColor", "outlineColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
    Xs = {};
Yn.forEach(i => {
    Xs[i] = "#000"
});
const Gs = {};
Yn.forEach(i => {
    Gs[i] = Zu
});

function Ku(i) {
    return je(this.element, i) || dt[i]
}

function Ju(i, t) {
    return jr(t)
}

const tl = { prepareStart: Ku, prepareProperty: Ju, onStart: Gs }, el = {
    component: "colorProperties",
    category: "colors",
    properties: Yn,
    defaultValues: Xs,
    Interpolate: { numbers: ot, colors: $r },
    functions: tl,
    Util: { trueColor: jr }
}, le = {}, rl = {
    attr(i) {
        !P[i] && this.valuesEnd[i] && (P[i] = (t, e, r, n) => {
            Object.keys(r).forEach(s => {
                P.attributes[s](t, s, e[s], r[s], n)
            })
        })
    }, attributes(i) {
        !P[i] && this.valuesEnd.attr && (P[i] = le)
    }
}, gr = "htmlAttributes", Qs = ["fill", "stroke", "stop-color"];

function Xn(i) {
    return i.replace(/[A-Z]/g, "-$&").toLowerCase()
}

function nl(i, t) {
    const e = {};
    return Object.keys(t).forEach(r => {
        const n = Xn(r).replace(/_+[a-z]+/, ""), s = this.element.getAttribute(n);
        e[n] = Qs.includes(n) ? s || "rgba(0,0,0,0)" : s || (/opacity/i.test(r) ? 1 : 0)
    }), e
}

function il(i, t) {
    const e = {};
    return Object.keys(t).forEach(r => {
        const n = Xn(r), s = /(%|[a-z]+)$/, a = this.element.getAttribute(n.replace(/_+[a-z]+/, ""));
        if (Qs.includes(n)) ct[gr][n] = o => {
            this.valuesEnd[i] && this.valuesEnd[i][o] && !(o in le) && (le[o] = (u, l, c, f, d) => {
                u.setAttribute(l, $r(c, f, d))
            })
        }, e[n] = jr(t[r]) || dt.htmlAttributes[r]; else if (a !== null && s.test(a)) {
            const o = Ie(a).u || Ie(t[r]).u, u = /%/.test(o) ? "_percent" : `_${o}`;
            ct[gr][n + u] = l => {
                this.valuesEnd[i] && this.valuesEnd[i][l] && !(l in le) && (le[l] = (c, f, d, p, _) => {
                    const h = f.replace(u, "");
                    c.setAttribute(h, (ot(d.v, p.v, _) * 1e3 >> 0) / 1e3 + p.u)
                })
            }, e[n + u] = Ie(t[r])
        } else (!s.test(t[r]) || a === null || a && !s.test(a)) && (ct[gr][n] = o => {
            this.valuesEnd[i] && this.valuesEnd[i][o] && !(o in le) && (le[o] = (u, l, c, f, d) => {
                u.setAttribute(l, (ot(c, f, d) * 1e3 >> 0) / 1e3)
            })
        }, e[n] = parseFloat(t[r]))
    }), e
}

const sl = { prepareStart: nl, prepareProperty: il, onStart: rl }, al = {
    component: gr,
    property: "attr",
    subProperties: ["fill", "stroke", "stop-color", "fill-opacity", "stroke-opacity"],
    defaultValue: {
        fill: "rgb(0,0,0)",
        stroke: "rgb(0,0,0)",
        "stop-color": "rgb(0,0,0)",
        opacity: 1,
        "stroke-opacity": 1,
        "fill-opacity": 1
    },
    Interpolate: { numbers: ot, colors: $r },
    functions: sl,
    Util: { replaceUppercase: Xn, trueColor: jr, trueDimension: Ie }
};

function ol(i) {
    i in this.valuesEnd && !P[i] && (P[i] = (t, e, r, n) => {
        t.style[i] = (ot(e, r, n) * 1e3 >> 0) / 1e3
    })
}

function ul(i) {
    return je(this.element, i)
}

function ll(i, t) {
    return parseFloat(t)
}

const cl = { prepareStart: ul, prepareProperty: ll, onStart: ol }, fl = {
    component: "opacityProperty",
    property: "opacity",
    defaultValue: 1,
    Interpolate: { numbers: ot },
    functions: cl
}, Zs = "abcdefghijklmnopqrstuvwxyz".split(""), Ks = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),
    Js = "~!@#$%^&*()_+{}[];'<>,./?=-".split(""), ta = "0123456789".split(""), ea = Zs.concat(Ks, ta),
    hl = ea.concat(Js), yr = { alpha: Zs, upper: Ks, symbols: Js, numeric: ta, alphanumeric: ea, all: hl }, dl = {
        text(i) {
            if (!P[i] && this.valuesEnd[i]) {
                const t = this._textChars;
                let e = yr[At.textChars];
                t in yr ? e = yr[t] : t && t.length && (e = t), P[i] = (r, n, s, a) => {
                    let o = "", u = "";
                    const l = s === "" ? " " : s, c = n.substring(0), f = s.substring(0),
                        d = e[Math.random() * e.length >> 0];
                    n === " " ? (u = f.substring(Math.min(a * f.length, f.length) >> 0, 0), r.innerHTML = a < 1 ? u + d : l) : s === " " ? (o = c.substring(0, Math.min((1 - a) * c.length, c.length) >> 0), r.innerHTML = a < 1 ? o + d : l) : (o = c.substring(c.length, Math.min(a * c.length, c.length) >> 0), u = f.substring(0, Math.min(a * f.length, f.length) >> 0), r.innerHTML = a < 1 ? u + d + o : l)
                }
            }
        }, number(i) {
            i in this.valuesEnd && !P[i] && (P[i] = (t, e, r, n) => {
                t.innerHTML = ot(e, r, n) >> 0
            })
        }
    };

function We(i, t) {
    let e, r;
    if (typeof i == "string") return r = document.createElement("SPAN"), r.innerHTML = i, r.className = t, r;
    if (!i.children.length || i.children.length && i.children[0].className !== t) {
        const n = i.innerHTML;
        e = document.createElement("SPAN"), e.className = t, e.innerHTML = n, i.appendChild(e), i.innerHTML = e.outerHTML
    } else i.children.length && i.children[0].className === t && ([e] = i.children);
    return e
}

function vi(i, t) {
    let e = [];
    const r = i.children.length;
    if (r) {
        const n = [];
        let s = i.innerHTML, a;
        for (let o = 0, u, l, c; o < r; o += 1) u = i.children[o], l = u.outerHTML, a = s.split(l), a[0] !== "" ? (c = We(a[0], t), n.push(c), s = s.replace(a[0], "")) : a[1] !== "" && (c = We(a[1].split("<")[0], t), n.push(c), s = s.replace(a[0].split("<")[0], "")), u.classList.contains(t) || u.classList.add(t), n.push(u), s = s.replace(l, "");
        if (s !== "") {
            const o = We(s, t);
            n.push(o)
        }
        e = e.concat(n)
    } else e = e.concat([We(i, t)]);
    return e
}

function pl(i, t) {
    const e = vi(i, "text-part"), r = vi(We(t), "text-part");
    return i.innerHTML = "", i.innerHTML += e.map(n => (n.className += " oldText", n.outerHTML)).join(""), i.innerHTML += r.map(n => (n.className += " newText", n.outerHTML.replace(n.innerHTML, ""))).join(""), [e, r]
}

function _l(i, t, e) {
    if (i.playing) return !1;
    const r = e || {};
    r.duration = 1e3, e.duration === "auto" ? r.duration = "auto" : Number.isFinite(e.duration * 1) && (r.duration = e.duration * 1);
    const n = It.tween, s = pl(i, t), a = s[0], o = s[1],
        u = [].slice.call(i.getElementsByClassName("oldText")).reverse(),
        l = [].slice.call(i.getElementsByClassName("newText"));
    let c = [], f = 0;
    return c = c.concat(u.map((d, p) => (r.duration = r.duration === "auto" ? a[p].innerHTML.length * 75 : r.duration, r.delay = f, r.onComplete = null, f += r.duration, new n(d, { text: d.innerHTML }, { text: "" }, r)))), c = c.concat(l.map((d, p) => {
        function _() {
            i.innerHTML = t, i.playing = !1
        }

        return r.duration = r.duration === "auto" ? o[p].innerHTML.length * 75 : r.duration, r.delay = f, r.onComplete = p === o.length - 1 ? _ : null, f += r.duration, new n(d, { text: "" }, { text: o[p].innerHTML }, r)
    })), c.start = function () {
        i.playing || (c.forEach(p => p.start()), i.playing = !0)
    }, c
}

function ml() {
    return this.element.innerHTML
}

function gl(i, t) {
    return i === "number" ? parseFloat(t) : t === "" ? " " : t
}

const yl = { prepareStart: ml, prepareProperty: gl, onStart: dl }, vl = {
    component: "textWriteProperties",
    category: "textWrite",
    properties: ["text", "number"],
    defaultValues: { text: " ", number: "0" },
    defaultOptions: { textChars: "alpha" },
    Interpolate: { numbers: ot },
    functions: yl,
    Util: { charSet: yr, createTextTweens: _l }
};

function ra(i, t, e, r) {
    return `perspective(${((i + (t - i) * r) * 1e3 >> 0) / 1e3}${e})`
}

function na(i, t, e, r) {
    const n = [];
    for (let s = 0; s < 3; s += 1) n[s] = (i[s] || t[s] ? ((i[s] + (t[s] - i[s]) * r) * 1e3 >> 0) / 1e3 : 0) + e;
    return `translate3d(${n.join(",")})`
}

function ia(i, t, e, r) {
    let n = "";
    return n += i[0] || t[0] ? `rotateX(${((i[0] + (t[0] - i[0]) * r) * 1e3 >> 0) / 1e3}${e})` : "", n += i[1] || t[1] ? `rotateY(${((i[1] + (t[1] - i[1]) * r) * 1e3 >> 0) / 1e3}${e})` : "", n += i[2] || t[2] ? `rotateZ(${((i[2] + (t[2] - i[2]) * r) * 1e3 >> 0) / 1e3}${e})` : "", n
}

function bl(i, t, e, r) {
    const n = [];
    return n[0] = (i[0] === t[0] ? t[0] : ((i[0] + (t[0] - i[0]) * r) * 1e3 >> 0) / 1e3) + e, n[1] = i[1] || t[1] ? (i[1] === t[1] ? t[1] : ((i[1] + (t[1] - i[1]) * r) * 1e3 >> 0) / 1e3) + e : "0", `translate(${n.join(",")})`
}

function xl(i, t, e, r) {
    return `rotate(${((i + (t - i) * r) * 1e3 >> 0) / 1e3}${e})`
}

function sa(i, t, e) {
    return `scale(${((i + (t - i) * e) * 1e3 >> 0) / 1e3})`
}

function aa(i, t, e, r) {
    const n = [];
    return n[0] = (i[0] === t[0] ? t[0] : ((i[0] + (t[0] - i[0]) * r) * 1e3 >> 0) / 1e3) + e, n[1] = i[1] || t[1] ? (i[1] === t[1] ? t[1] : ((i[1] + (t[1] - i[1]) * r) * 1e3 >> 0) / 1e3) + e : "0", `skew(${n.join(",")})`
}

function wl(i) {
    !P[i] && this.valuesEnd[i] && (P[i] = (t, e, r, n) => {
        t.style[i] = (e.perspective || r.perspective ? ra(e.perspective, r.perspective, "px", n) : "") + (e.translate3d ? na(e.translate3d, r.translate3d, "px", n) : "") + (e.rotate3d ? ia(e.rotate3d, r.rotate3d, "deg", n) : "") + (e.skew ? aa(e.skew, r.skew, "deg", n) : "") + (e.scale || r.scale ? sa(e.scale, r.scale, n) : "")
    })
}

function Tl(i) {
    const t = Hn(this.element);
    return t[i] ? t[i] : dt[i]
}

function Ol(i, t) {
    const e = ["X", "Y", "Z"], r = {}, n = [], s = [], a = [], o = ["translate3d", "translate", "rotate3d", "skew"];
    return Object.keys(t).forEach(u => {
        const l = typeof t[u] == "object" && t[u].length ? t[u].map(c => parseInt(c, 10)) : parseInt(t[u], 10);
        if (o.includes(u)) {
            const c = u === "translate" || u === "rotate" ? `${u}3d` : u;
            u === "skew" ? r[c] = l.length ? [l[0] || 0, l[1] || 0] : [l || 0, 0] : u === "translate" ? r[c] = l.length ? [l[0] || 0, l[1] || 0, l[2] || 0] : [l || 0, 0, 0] : r[c] = [l[0] || 0, l[1] || 0, l[2] || 0]
        } else if (/[XYZ]/.test(u)) {
            const c = u.replace(/[XYZ]/, ""), f = c === "skew" ? c : `${c}3d`, d = c === "skew" ? 2 : 3;
            let p = [];
            c === "translate" ? p = n : c === "rotate" ? p = s : c === "skew" && (p = a);
            for (let _ = 0; _ < d; _ += 1) {
                const h = e[_];
                p[_] = `${c}${h}` in t ? parseInt(t[`${c}${h}`], 10) : 0
            }
            r[f] = p
        } else u === "rotate" ? r.rotate3d = [0, 0, l] : r[u] = u === "scale" ? parseFloat(t[u]) : l
    }), r
}

function Sl(i) {
    this.valuesEnd[i] && this.valuesEnd[i] && this.valuesEnd[i].perspective && !this.valuesStart[i].perspective && (this.valuesStart[i].perspective = this.valuesEnd[i].perspective)
}

const kl = { prepareStart: Tl, prepareProperty: Ol, onStart: wl, crossCheck: Sl },
    El = ["perspective", "translate3d", "translateX", "translateY", "translateZ", "translate", "rotate3d", "rotateX", "rotateY", "rotateZ", "rotate", "skewX", "skewY", "skew", "scale"],
    Cl = {
        perspective: 400,
        translate3d: [0, 0, 0],
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        translate: [0, 0],
        rotate3d: [0, 0, 0],
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        rotate: 0,
        skewX: 0,
        skewY: 0,
        skew: [0, 0],
        scale: 1
    }, Ml = {
        component: "transformFunctions",
        property: "transform",
        subProperties: El,
        defaultValues: Cl,
        functions: kl,
        Interpolate: { perspective: ra, translate3d: na, rotate3d: ia, translate: bl, rotate: xl, scale: sa, skew: aa }
    };

function Al(i) {
    i in this.valuesEnd && !P[i] && (P[i] = (t, e, r, n) => {
        const s = (e.l * 100 >> 0) / 100, a = (ot(e.s, r.s, n) * 100 >> 0) / 100,
            o = (ot(e.e, r.e, n) * 100 >> 0) / 100, u = 0 - a, l = o + u;
        t.style.strokeDashoffset = `${u}px`, t.style.strokeDasharray = `${((l < 1 ? 0 : l) * 100 >> 0) / 100}px, ${s}px`
    })
}

function vn(i, t) {
    return parseFloat(i) / 100 * t
}

function oa(i) {
    const t = i.getAttribute("width"), e = i.getAttribute("height");
    return t * 2 + e * 2
}

function ua(i) {
    const t = i.getAttribute("points").split(" ");
    let e = 0;
    if (t.length > 1) {
        const r = s => {
            const a = s.split(",");
            return a.length !== 2 || Number.isNaN(a[0] * 1) || Number.isNaN(a[1] * 1) ? 0 : [parseFloat(a[0]), parseFloat(a[1])]
        }, n = (s, a) => s !== void 0 && a !== void 0 ? Math.sqrt((a[0] - s[0]) ** 2 + (a[1] - s[1]) ** 2) : 0;
        if (t.length > 2) for (let s = 0; s < t.length - 1; s += 1) e += n(r(t[s]), r(t[s + 1]));
        e += i.tagName === "polygon" ? n(r(t[0]), r(t[t.length - 1])) : 0
    }
    return e
}

function la(i) {
    const t = i.getAttribute("x1"), e = i.getAttribute("x2"), r = i.getAttribute("y1"), n = i.getAttribute("y2");
    return Math.sqrt((e - t) ** 2 + (n - r) ** 2)
}

function ca(i) {
    const t = i.getAttribute("r");
    return 2 * Math.PI * t
}

function fa(i) {
    const t = i.getAttribute("rx"), e = i.getAttribute("ry"), r = 2 * t, n = 2 * e;
    return Math.sqrt(.5 * (r * r + n * n)) * (Math.PI * 2) / 2
}

function ha(i) {
    return i.tagName === "rect" ? oa(i) : i.tagName === "circle" ? ca(i) : i.tagName === "ellipse" ? fa(i) : ["polygon", "polyline"].includes(i.tagName) ? ua(i) : i.tagName === "line" ? la(i) : 0
}

function Gn(i, t) {
    const e = /path|glyph/.test(i.tagName) ? i.getTotalLength() : ha(i);
    let r, n, s, a;
    if (t instanceof Object && Object.keys(t).every(o => ["s", "e", "l"].includes(o))) return t;
    if (typeof t == "string") {
        const o = t.split(/,|\s/);
        r = /%/.test(o[0]) ? vn(o[0].trim(), e) : parseFloat(o[0]), n = /%/.test(o[1]) ? vn(o[1].trim(), e) : parseFloat(o[1])
    } else typeof t > "u" && (a = parseFloat(je(i, "stroke-dashoffset")), s = je(i, "stroke-dasharray").split(","), r = 0 - a, n = parseFloat(s[0]) + r || e);
    return { s: r, e: n, l: e }
}

function Pl(i) {
    i.style.strokeDashoffset = "", i.style.strokeDasharray = ""
}

function Dl() {
    return Gn(this.element)
}

function Il(i, t) {
    return Gn(this.element, t)
}

const Ll = { prepareStart: Dl, prepareProperty: Il, onStart: Al }, Nl = {
    component: "svgDraw",
    property: "draw",
    defaultValue: "0% 0%",
    Interpolate: { numbers: ot },
    functions: Ll,
    Util: {
        getRectLength: oa,
        getPolyLength: ua,
        getLineLength: la,
        getCircleLength: ca,
        getEllipseLength: fa,
        getTotalLength: ha,
        resetDraw: Pl,
        getDraw: Gn,
        percent: vn
    }
};

function Rl(i, t, e) {
    if (i[e].length > 7) {
        i[e].shift();
        const r = i[e];
        let n = e;
        for (; r.length;) t[e] = "A", i.splice(n += 1, 0, ["C", ...r.splice(0, 6)]);
        i.splice(e, 1)
    }
}

const Qe = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 };

function da(i) {
    return Array.isArray(i) && i.every(t => {
        const e = t[0].toLowerCase();
        return Qe[e] === t.length - 1 && "achlmqstvz".includes(e)
    })
}

function pa(i) {
    return da(i) && i.every(([t]) => t === t.toUpperCase())
}

function _a(i) {
    return pa(i) && i.every(([t]) => "ACLMQZ".includes(t))
}

function Fl(i) {
    return _a(i) && i.every(([t]) => "MC".includes(t))
}

function ur(i) {
    return i.map(t => Array.isArray(t) ? [...t] : t)
}

function bi(i) {
    let t = i.pathValue[i.segmentStart], e = t.toLowerCase();
    const { data: r } = i;
    for (; r.length >= Qe[e] && (e === "m" && r.length > 2 ? (i.segments.push([t, ...r.splice(0, 2)]), e = "l", t = t === "m" ? "l" : "L") : i.segments.push([t, ...r.splice(0, Qe[e])]), !!Qe[e]););
}

const ce = "SVGPathCommander error";

function zl(i) {
    const { index: t, pathValue: e } = i, r = e.charCodeAt(t);
    if (r === 48) {
        i.param = 0, i.index += 1;
        return
    }
    if (r === 49) {
        i.param = 1, i.index += 1;
        return
    }
    i.err = `${ce}: invalid Arc flag "${e[t]}", expecting 0 or 1 at index ${t}`
}

function ke(i) {
    return i >= 48 && i <= 57
}

const Zt = "Invalid path value";

function jl(i) {
    const { max: t, pathValue: e, index: r } = i;
    let n = r, s = !1, a = !1, o = !1, u = !1, l;
    if (n >= t) {
        i.err = `${ce}: ${Zt} at index ${n}, "pathValue" is missing param`;
        return
    }
    if (l = e.charCodeAt(n), (l === 43 || l === 45) && (n += 1, l = e.charCodeAt(n)), !ke(l) && l !== 46) {
        i.err = `${ce}: ${Zt} at index ${n}, "${e[n]}" is not a number`;
        return
    }
    if (l !== 46) {
        if (s = l === 48, n += 1, l = e.charCodeAt(n), s && n < t && l && ke(l)) {
            i.err = `${ce}: ${Zt} at index ${r}, "${e[r]}" illegal number`;
            return
        }
        for (; n < t && ke(e.charCodeAt(n));) n += 1, a = !0;
        l = e.charCodeAt(n)
    }
    if (l === 46) {
        for (u = !0, n += 1; ke(e.charCodeAt(n));) n += 1, o = !0;
        l = e.charCodeAt(n)
    }
    if (l === 101 || l === 69) {
        if (u && !a && !o) {
            i.err = `${ce}: ${Zt} at index ${n}, "${e[n]}" invalid float exponent`;
            return
        }
        if (n += 1, l = e.charCodeAt(n), (l === 43 || l === 45) && (n += 1), n < t && ke(e.charCodeAt(n))) for (; n < t && ke(e.charCodeAt(n));) n += 1; else {
            i.err = `${ce}: ${Zt} at index ${n}, "${e[n]}" invalid integer exponent`;
            return
        }
    }
    i.index = n, i.param = +i.pathValue.slice(r, n)
}

function $l(i) {
    const t = [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
    return i === 10 || i === 13 || i === 8232 || i === 8233 || i === 32 || i === 9 || i === 11 || i === 12 || i === 160 || i >= 5760 && t.includes(i)
}

function vr(i) {
    const { pathValue: t, max: e } = i;
    for (; i.index < e && $l(t.charCodeAt(i.index));) i.index += 1
}

function Vl(i) {
    switch (i | 32) {
        case 109:
        case 122:
        case 108:
        case 104:
        case 118:
        case 99:
        case 115:
        case 113:
        case 116:
        case 97:
            return !0;
        default:
            return !1
    }
}

function Bl(i) {
    return i >= 48 && i <= 57 || i === 43 || i === 45 || i === 46
}

function ql(i) {
    return (i | 32) === 97
}

function Ul(i) {
    const { max: t, pathValue: e, index: r } = i, n = e.charCodeAt(r), s = Qe[e[r].toLowerCase()];
    if (i.segmentStart = r, !Vl(n)) {
        i.err = `${ce}: ${Zt} "${e[r]}" is not a path command`;
        return
    }
    if (i.index += 1, vr(i), i.data = [], !s) {
        bi(i);
        return
    }
    for (; ;) {
        for (let a = s; a > 0; a -= 1) {
            if (ql(n) && (a === 3 || a === 4) ? zl(i) : jl(i), i.err.length) return;
            i.data.push(i.param), vr(i), i.index < t && e.charCodeAt(i.index) === 44 && (i.index += 1, vr(i))
        }
        if (i.index >= i.max || !Bl(e.charCodeAt(i.index))) break
    }
    bi(i)
}

function Wl(i) {
    this.segments = [], this.pathValue = i, this.max = i.length, this.index = 0, this.param = 0, this.segmentStart = 0, this.data = [], this.err = ""
}

function Hl(i) {
    if (da(i)) return ur(i);
    const t = new Wl(i);
    for (vr(t); t.index < t.max && !t.err.length;) Ul(t);
    return t.err ? t.err : t.segments
}

function Yl(i) {
    if (pa(i)) return ur(i);
    const t = Hl(i);
    let e = 0, r = 0, n = 0, s = 0;
    return t.map(a => {
        const o = a.slice(1).map(Number), [u] = a, l = u.toUpperCase();
        if (u === "M") return [e, r] = o, n = e, s = r, ["M", e, r];
        let c = [];
        if (u !== l) switch (l) {
            case "A":
                c = [l, o[0], o[1], o[2], o[3], o[4], o[5] + e, o[6] + r];
                break;
            case "V":
                c = [l, o[0] + r];
                break;
            case "H":
                c = [l, o[0] + e];
                break;
            default: {
                const d = o.map((p, _) => p + (_ % 2 ? r : e));
                c = [l, ...d]
            }
        } else c = [l, ...o];
        const f = c.length;
        switch (l) {
            case "Z":
                e = n, r = s;
                break;
            case "H":
                [, e] = c;
                break;
            case "V":
                [, r] = c;
                break;
            default:
                e = c[f - 2], r = c[f - 1], l === "M" && (n = e, s = r)
        }
        return c
    })
}

function Xl(i, t) {
    const [e] = i, { x1: r, y1: n, x2: s, y2: a } = t, o = i.slice(1).map(Number);
    let u = i;
    if ("TQ".includes(e) || (t.qx = null, t.qy = null), e === "H") u = ["L", i[1], n]; else if (e === "V") u = ["L", r, i[1]]; else if (e === "S") {
        const l = r * 2 - s, c = n * 2 - a;
        t.x1 = l, t.y1 = c, u = ["C", l, c, ...o]
    } else if (e === "T") {
        const l = r * 2 - t.qx, c = n * 2 - t.qy;
        t.qx = l, t.qy = c, u = ["Q", l, c, ...o]
    } else if (e === "Q") {
        const [l, c] = o;
        t.qx = l, t.qy = c
    }
    return u
}

const ma = { x1: 0, y1: 0, x2: 0, y2: 0, x: 0, y: 0, qx: null, qy: null };

function Vr(i) {
    if (_a(i)) return ur(i);
    const t = Yl(i), e = { ...ma }, r = t.length;
    for (let n = 0; n < r; n += 1) {
        t[n], t[n] = Xl(t[n], e);
        const s = t[n], a = s.length;
        e.x1 = +s[a - 2], e.y1 = +s[a - 1], e.x2 = +s[a - 4] || e.x1, e.y2 = +s[a - 3] || e.y1
    }
    return t
}

function fr(i, t, e) {
    const r = i * Math.cos(e) - t * Math.sin(e), n = i * Math.sin(e) + t * Math.cos(e);
    return { x: r, y: n }
}

function ga(i, t, e, r, n, s, a, o, u, l) {
    let c = i, f = t, d = e, p = r, _ = o, h = u;
    const m = Math.PI * 120 / 180, b = Math.PI / 180 * (+n || 0);
    let v = [], x, y, g, w, k;
    if (l) [y, g, w, k] = l; else {
        x = fr(c, f, -b), c = x.x, f = x.y, x = fr(_, h, -b), _ = x.x, h = x.y;
        const R = (c - _) / 2, q = (f - h) / 2;
        let Q = R * R / (d * d) + q * q / (p * p);
        Q > 1 && (Q = Math.sqrt(Q), d *= Q, p *= Q);
        const V = d * d, Y = p * p,
            vt = (s === a ? -1 : 1) * Math.sqrt(Math.abs((V * Y - V * q * q - Y * R * R) / (V * q * q + Y * R * R)));
        w = vt * d * q / p + (c + _) / 2, k = vt * -p * R / d + (f + h) / 2, y = Math.asin(((f - k) / p * 10 ** 9 >> 0) / 10 ** 9), g = Math.asin(((h - k) / p * 10 ** 9 >> 0) / 10 ** 9), y = c < w ? Math.PI - y : y, g = _ < w ? Math.PI - g : g, y < 0 && (y = Math.PI * 2 + y), g < 0 && (g = Math.PI * 2 + g), a && y > g && (y -= Math.PI * 2), !a && g > y && (g -= Math.PI * 2)
    }
    let O = g - y;
    if (Math.abs(O) > m) {
        const R = g, q = _, Q = h;
        g = y + m * (a && g > y ? 1 : -1), _ = w + d * Math.cos(g), h = k + p * Math.sin(g), v = ga(_, h, d, p, n, 0, a, q, Q, [g, R, w, k])
    }
    O = g - y;
    const T = Math.cos(y), A = Math.sin(y), E = Math.cos(g), S = Math.sin(g), M = Math.tan(O / 4), C = 4 / 3 * d * M,
        I = 4 / 3 * p * M, D = [c, f], L = [c + C * A, f - I * T], B = [_ + C * S, h - I * E], tt = [_, h];
    if (L[0] = 2 * D[0] - L[0], L[1] = 2 * D[1] - L[1], l) return [...L, ...B, ...tt, ...v];
    v = [...L, ...B, ...tt, ...v];
    const ft = [];
    for (let R = 0, q = v.length; R < q; R += 1) ft[R] = R % 2 ? fr(v[R - 1], v[R], b).y : fr(v[R], v[R + 1], b).x;
    return ft
}

function Gl(i, t, e, r, n, s) {
    const a = .3333333333333333, o = 2 / 3;
    return [a * i + o * e, a * t + o * r, a * n + o * e, a * s + o * r, n, s]
}

function Ut(i, t, e) {
    const [r, n] = i, [s, a] = t;
    return [r + (s - r) * e, n + (a - n) * e]
}

function $t(i, t) {
    return Math.sqrt((i[0] - t[0]) * (i[0] - t[0]) + (i[1] - t[1]) * (i[1] - t[1]))
}

function ir(i, t, e, r, n) {
    const s = $t([i, t], [e, r]);
    let a = { x: 0, y: 0 };
    if (typeof n == "number") if (n <= 0) a = { x: i, y: t }; else if (n >= s) a = { x: e, y: r }; else {
        const [o, u] = Ut([i, t], [e, r], n / s);
        a = { x: o, y: u }
    }
    return {
        length: s,
        point: a,
        min: { x: Math.min(i, e), y: Math.min(t, r) },
        max: { x: Math.max(i, e), y: Math.max(t, r) }
    }
}

function xi(i, t, e, r) {
    const s = [i, t], a = [e, r], o = Ut(s, a, .5), u = Ut(a, o, .5), l = Ut(o, u, .5), c = Ut(u, l, .5),
        f = Ut(l, c, .5), d = [...s, ...o, ...l, ...f, .5], p = ir(...d).point, _ = [...f, ...c, ...u, ...a, 0],
        h = ir(..._).point;
    return [p.x, p.y, h.x, h.y, e, r]
}

function Ql(i, t) {
    const [e] = i, r = i.slice(1).map(Number), [n, s] = r;
    let a;
    const { x1: o, y1: u, x: l, y: c } = t;
    switch ("TQ".includes(e) || (t.qx = null, t.qy = null), e) {
        case "M":
            return t.x = n, t.y = s, i;
        case "A":
            return a = [o, u, ...r], ["C", ...ga(...a)];
        case "Q":
            return t.qx = n, t.qy = s, a = [o, u, ...r], ["C", ...Gl(...a)];
        case "L":
            return ["C", ...xi(o, u, n, s)];
        case "Z":
            return ["C", ...xi(o, u, l, c)]
    }
    return i
}

function Zl(i) {
    if (Fl(i)) return ur(i);
    const t = Vr(i), e = { ...ma }, r = [];
    let n = "", s = t.length;
    for (let a = 0; a < s; a += 1) {
        [n] = t[a], r[a] = n, t[a] = Ql(t[a], e), Rl(t, r, a), s = t.length;
        const o = t[a], u = o.length;
        e.x1 = +o[u - 2], e.y1 = +o[u - 1], e.x2 = +o[u - 4] || e.x1, e.y2 = +o[u - 3] || e.y1
    }
    return t
}

const Kl = { origin: [0, 0, 0], round: 4 };

function Ir(i, t) {
    let { round: e } = Kl;
    if (t === "off" || e === "off") return ur(i);
    e = t >= 0 ? t : e;
    const r = typeof e == "number" && e >= 1 ? 10 ** e : 1;
    return i.map(n => {
        const s = n.slice(1).map(Number).map(a => e ? Math.round(a * r) / r : Math.round(a));
        return [n[0], ...s]
    })
}

function Jl(i, t) {
    return Ir(i, t).map(e => e[0] + e.slice(1).join(" ")).join("")
}

function tc(i) {
    const t = [];
    let e, r = -1;
    return i.forEach(n => {
        n[0] === "M" ? (e = [n], r += 1) : e = [...e, n], t[r] = e
    }), t
}

function wi(i, t) {
    const { x: e, y: r } = i, { x: n, y: s } = t, a = e * n + r * s, o = Math.sqrt((e ** 2 + r ** 2) * (n ** 2 + s ** 2));
    return (e * s - r * n < 0 ? -1 : 1) * Math.acos(a / o)
}

function ec(i, t, e, r, n, s, a, o, u, l) {
    const { abs: c, sin: f, cos: d, sqrt: p, PI: _ } = Math;
    let h = c(e), m = c(r);
    const v = (n % 360 + 360) % 360 * (_ / 180);
    if (i === o && t === u) return { x: i, y: t };
    if (h === 0 || m === 0) return ir(i, t, o, u, l).point;
    const x = (i - o) / 2, y = (t - u) / 2, g = { x: d(v) * x + f(v) * y, y: -f(v) * x + d(v) * y },
        w = g.x ** 2 / h ** 2 + g.y ** 2 / m ** 2;
    w > 1 && (h *= p(w), m *= p(w));
    const k = h ** 2 * m ** 2 - h ** 2 * g.y ** 2 - m ** 2 * g.x ** 2, O = h ** 2 * g.y ** 2 + m ** 2 * g.x ** 2;
    let T = k / O;
    T = T < 0 ? 0 : T;
    const A = (s !== a ? 1 : -1) * p(T), E = { x: A * (h * g.y / m), y: A * (-(m * g.x) / h) },
        S = { x: d(v) * E.x - f(v) * E.y + (i + o) / 2, y: f(v) * E.x + d(v) * E.y + (t + u) / 2 },
        M = { x: (g.x - E.x) / h, y: (g.y - E.y) / m }, C = wi({ x: 1, y: 0 }, M),
        I = { x: (-g.x - E.x) / h, y: (-g.y - E.y) / m };
    let D = wi(M, I);
    !a && D > 0 ? D -= 2 * _ : a && D < 0 && (D += 2 * _), D %= 2 * _;
    const L = C + D * l, B = h * d(L), tt = m * f(L);
    return { x: d(v) * B - f(v) * tt + S.x, y: f(v) * B + d(v) * tt + S.y }
}

function rc(i, t, e, r, n, s, a, o, u, l) {
    const c = typeof l == "number";
    let f = i, d = t, p = 0, _ = [f, d, p], h = [f, d], m = 0, b = { x: 0, y: 0 }, v = [{ x: f, y: d }];
    c && l <= 0 && (b = { x: f, y: d });
    const x = 300;
    for (let y = 0; y <= x; y += 1) {
        if (m = y / x, { x: f, y: d } = ec(i, t, e, r, n, s, a, o, u, m), v = [...v, {
            x: f,
            y: d
        }], p += $t(h, [f, d]), h = [f, d], c && p > l && l > _[2]) {
            const g = (p - l) / (p - _[2]);
            b = { x: h[0] * (1 - g) + _[0] * g, y: h[1] * (1 - g) + _[1] * g }
        }
        _ = [f, d, p]
    }
    return c && l >= p && (b = { x: o, y: u }), {
        length: p,
        point: b,
        min: { x: Math.min(...v.map(y => y.x)), y: Math.min(...v.map(y => y.y)) },
        max: { x: Math.max(...v.map(y => y.x)), y: Math.max(...v.map(y => y.y)) }
    }
}

function nc(i, t, e, r, n, s, a, o, u) {
    const l = 1 - u;
    return {
        x: l ** 3 * i + 3 * l ** 2 * u * e + 3 * l * u ** 2 * n + u ** 3 * a,
        y: l ** 3 * t + 3 * l ** 2 * u * r + 3 * l * u ** 2 * s + u ** 3 * o
    }
}

function ic(i, t, e, r, n, s, a, o, u) {
    const l = typeof u == "number";
    let c = i, f = t, d = 0, p = [c, f, d], _ = [c, f], h = 0, m = { x: 0, y: 0 }, b = [{ x: c, y: f }];
    l && u <= 0 && (m = { x: c, y: f });
    const v = 300;
    for (let x = 0; x <= v; x += 1) {
        if (h = x / v, { x: c, y: f } = nc(i, t, e, r, n, s, a, o, h), b = [...b, {
            x: c,
            y: f
        }], d += $t(_, [c, f]), _ = [c, f], l && d > u && u > p[2]) {
            const y = (d - u) / (d - p[2]);
            m = { x: _[0] * (1 - y) + p[0] * y, y: _[1] * (1 - y) + p[1] * y }
        }
        p = [c, f, d]
    }
    return l && u >= d && (m = { x: a, y: o }), {
        length: d,
        point: m,
        min: { x: Math.min(...b.map(x => x.x)), y: Math.min(...b.map(x => x.y)) },
        max: { x: Math.max(...b.map(x => x.x)), y: Math.max(...b.map(x => x.y)) }
    }
}

function sc(i, t, e, r, n, s, a) {
    const o = 1 - a;
    return { x: o ** 2 * i + 2 * o * a * e + a ** 2 * n, y: o ** 2 * t + 2 * o * a * r + a ** 2 * s }
}

function ac(i, t, e, r, n, s, a) {
    const o = typeof a == "number";
    let u = i, l = t, c = 0, f = [u, l, c], d = [u, l], p = 0, _ = { x: 0, y: 0 }, h = [{ x: u, y: l }];
    o && a <= 0 && (_ = { x: u, y: l });
    const m = 300;
    for (let b = 0; b <= m; b += 1) {
        if (p = b / m, { x: u, y: l } = sc(i, t, e, r, n, s, p), h = [...h, {
            x: u,
            y: l
        }], c += $t(d, [u, l]), d = [u, l], o && c > a && a > f[2]) {
            const v = (c - a) / (c - f[2]);
            _ = { x: d[0] * (1 - v) + f[0] * v, y: d[1] * (1 - v) + f[1] * v }
        }
        f = [u, l, c]
    }
    return o && a >= c && (_ = { x: n, y: s }), {
        length: c,
        point: _,
        min: { x: Math.min(...h.map(b => b.x)), y: Math.min(...h.map(b => b.y)) },
        max: { x: Math.max(...h.map(b => b.x)), y: Math.max(...h.map(b => b.y)) }
    }
}

function ya(i, t) {
    const e = Vr(i), r = typeof t == "number";
    let n, s = [], a, o = 0, u = 0, l = 0, c = 0, f, d = [], p = [], _ = 0, h = { x: 0, y: 0 }, m = h, b = h, v = h,
        x = 0;
    for (let y = 0, g = e.length; y < g; y += 1) f = e[y], [a] = f, n = a === "M", s = n ? s : [o, u, ...f.slice(1)], n ? ([, l, c] = f, h = {
        x: l,
        y: c
    }, m = h, _ = 0, r && t < .001 && (v = h)) : a === "L" ? {
        length: _,
        min: h,
        max: m,
        point: b
    } = ir(...s, (t || 0) - x) : a === "A" ? {
        length: _,
        min: h,
        max: m,
        point: b
    } = rc(...s, (t || 0) - x) : a === "C" ? {
        length: _,
        min: h,
        max: m,
        point: b
    } = ic(...s, (t || 0) - x) : a === "Q" ? {
        length: _,
        min: h,
        max: m,
        point: b
    } = ac(...s, (t || 0) - x) : a === "Z" && (s = [o, u, l, c], {
        length: _,
        min: h,
        max: m,
        point: b
    } = ir(...s, (t || 0) - x)), r && x < t && x + _ >= t && (v = b), p = [...p, m], d = [...d, h], x += _, [o, u] = a !== "Z" ? f.slice(-2) : [l, c];
    return r && t >= x && (v = { x: o, y: u }), {
        length: x,
        point: v,
        min: { x: Math.min(...d.map(y => y.x)), y: Math.min(...d.map(y => y.y)) },
        max: { x: Math.max(...p.map(y => y.x)), y: Math.max(...p.map(y => y.y)) }
    }
}

function va(i) {
    return ya(i).length
}

function ba(i, t) {
    return ya(i, t).point
}

function xa(i) {
    const t = i.length;
    let e = -1, r, n = i[t - 1], s = 0;
    for (; ++e < t;) r = n, n = i[e], s += r[1] * n[0] - r[0] * n[1];
    return s / 2
}

function oc(i) {
    return i.reduce((t, e, r) => r ? t + $t(i[r - 1], e) : 0, 0)
}

const uc = 1e-9;

function wa(i, t, e, r) {
    const n = [];
    for (let s = 0; s < e; s += 1) {
        n[s] = [];
        for (let a = 0; a < 2; a += 1) n[s].push(((i[s][a] + (t[s][a] - i[s][a]) * r) * 1e3 >> 0) / 1e3)
    }
    return n
}

function lc(i) {
    !P[i] && this.valuesEnd[i] && (P[i] = (t, e, r, n) => {
        const s = e.polygon, a = r.polygon, o = a.length;
        t.setAttribute("d", n === 1 ? r.original : `M${wa(s, a, o, n).join("L")}Z`)
    })
}

function cc(i) {
    const t = [], e = i.length;
    let r = [], n = "";
    if (!i.length || i[0][0] !== "M") return !1;
    for (let s = 0; s < e && (r = i[s], [n] = r, !(n === "M" && s || n === "Z")); s += 1) if ("ML".includes(n)) t.push([r[1], r[2]]); else return !1;
    return e ? { polygon: t } : !1
}

function Ta(i, t) {
    const e = tc(i)[0], r = Vr(e), n = va(r), s = [];
    let a = 3, o;
    t && !Number.isNaN(t) && +t > 0 && (a = Math.max(a, Math.ceil(n / t)));
    for (let u = 0; u < a; u += 1) o = ba(r, n * u / a), s.push([o.x, o.y]);
    return xa(s) > 0 && s.reverse(), { polygon: s, skipBisect: !0 }
}

function Oa(i, t) {
    const e = Vr(i);
    return cc(e) || Ta(e, t)
}

function Sa(i, t) {
    const e = i.length;
    let r = 1 / 0, n, s = 0, a, o, u;
    for (let l = 0; l < e; l += 1) {
        s = 0;
        for (let c = 0; c < t.length; c += 1) u = t[c], o = $t(i[(l + c) % e], u), s += o * o;
        s < r && (r = s, n = l)
    }
    n && (a = i.splice(0, n), i.splice(i.length, 0, ...a))
}

function bn(i, t) {
    const e = i.length + t, r = oc(i) / t;
    let n = 0, s = 0, a = r / 2, o, u, l;
    for (; i.length < e;) o = i[n], u = i[(n + 1) % i.length], l = $t(o, u), a <= s + l ? (i.splice(n + 1, 0, l ? Ut(o, u, (a - s) / l) : o.slice(0)), a += r) : (s += l, n += 1)
}

function ka(i, t = 1 / 0) {
    let e = [], r = [];
    for (let n = 0; n < i.length; n += 1) for (e = i[n], r = n === i.length - 1 ? i[0] : i[n + 1]; $t(e, r) > t;) r = Ut(e, r, .5), i.splice(n + 1, 0, r)
}

function Ea(i) {
    return Array.isArray(i) && i.every(t => Array.isArray(t) && t.length === 2 && !Number.isNaN(t[0]) && !Number.isNaN(t[1]))
}

function xn(i, t) {
    let e, r;
    if (typeof i == "string") ({
        polygon: r,
        skipBisect: e
    } = Oa(i, t)); else if (!Array.isArray(i)) throw Error(`${Zt}: ${i}`);
    const n = [...r];
    if (!Ea(n)) throw Error(`${Zt}: ${n}`);
    return n.length > 1 && $t(n[0], n[n.length - 1]) < uc && n.pop(), !e && t && !Number.isNaN(t) && +t > 0 && ka(n, t), n
}

function Ca(i, t, e) {
    const r = e || At.morphPrecision, n = xn(i, r), s = xn(t, r), a = n.length - s.length;
    return bn(n, a < 0 ? a * -1 : 0), bn(s, a > 0 ? a : 0), Sa(n, s), [Ir(n), Ir(s)]
}

function fc() {
    return this.element.getAttribute("d")
}

function hc(i, t) {
    const e = {}, r = new RegExp("\\n", "ig");
    let n = null;
    return t instanceof SVGPathElement ? n = t : /^\.|^#/.test(t) && (n = $e(t)), typeof t == "object" && t.polygon ? t : (n && ["path", "glyph"].includes(n.tagName) ? e.original = n.getAttribute("d").replace(r, "") : !n && typeof t == "string" && (e.original = t.replace(r, "")), e)
}

function dc(i) {
    if (this.valuesEnd[i]) {
        const t = this.valuesStart[i].polygon, e = this.valuesEnd[i].polygon;
        if (!t || !e || t.length !== e.length) {
            const r = this.valuesStart[i].original, n = this.valuesEnd[i].original,
                s = this._morphPrecision ? parseInt(this._morphPrecision, 10) : At.morphPrecision, [a, o] = Ca(r, n, s);
            this.valuesStart[i].polygon = a, this.valuesEnd[i].polygon = o
        }
    }
}

const pc = { prepareStart: fc, prepareProperty: hc, onStart: lc, crossCheck: dc }, _c = {
    component: "svgMorph",
    property: "path",
    defaultValue: [],
    Interpolate: wa,
    defaultOptions: { morphPrecision: 10 },
    functions: pc,
    Util: {
        addPoints: bn,
        bisect: ka,
        getPolygon: xn,
        validPolygon: Ea,
        getInterpolationPoints: Ca,
        pathStringToPolygon: Oa,
        distanceSquareRoot: $t,
        midPoint: Ut,
        approximatePolygon: Ta,
        rotatePolygon: Sa,
        pathToString: Jl,
        pathToCurve: Zl,
        getTotalLength: va,
        getPointAtLength: ba,
        polygonArea: xa,
        roundPath: Ir
    }
}, br = {
    EssentialBoxModel: Gu,
    ColorsProperties: el,
    HTMLAttributes: al,
    OpacityProperty: fl,
    TextWriteProp: vl,
    TransformFunctions: Ml,
    SVGDraw: Nl,
    SVGMorph: _c
};
Object.keys(br).forEach(i => {
    const t = br[i];
    br[i] = new Ws(t)
});
var mc = "2.2.4";
const gc = mc, Qn = {
    Animation: Ws,
    Components: br,
    Tween: Us,
    fromTo: Vu,
    to: ju,
    TweenCollection: or,
    allFromTo: qu,
    allTo: Bu,
    Objects: Du,
    Util: yn,
    Easing: mr,
    CubicBezier: z,
    Render: gn,
    Interpolate: Me,
    Process: Ru,
    Internals: Nu,
    Selector: $e,
    Version: gc
}, yc = new Eu("h1.hero-matlab", { types: "lines, words" }), vc = yc.words,
    bc = Qn.fromTo("#blob3", { path: "#blob3" }, { path: "#blob4" }, { repeat: 999, duration: 7e3, yoyo: !0 });
bc.start();
const xc = Qn.fromTo("#blob1", { path: "#blob1" }, { path: "#blob2" }, { repeat: 999, duration: 7e3, yoyo: !0 });
xc.start();
const wc = Qn.fromTo("#blob5", { path: "#blob5" }, { path: "#blob6" }, { repeat: 999, duration: 7e3, yoyo: !0 });
wc.start();
Ts.fromTo(vc, { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: .05, duration: 3, ease: "power4.out" });
Da.init();
