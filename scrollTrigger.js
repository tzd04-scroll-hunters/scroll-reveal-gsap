/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function r() {
    return (
      Te ||
      ("undefined" != typeof window &&
        (Te = window.gsap) &&
        Te.registerPlugin &&
        Te)
    );
  }
  function z(e, t) {
    return ~Ie.indexOf(e) && Ie[Ie.indexOf(e) + 1][t];
  }
  function A(e) {
    return !!~t.indexOf(e);
  }
  function B(e, t, r, n, i) {
    return e.addEventListener(t, r, { passive: !1 !== n, capture: !!i });
  }
  function C(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function F() {
    return (De && De.isPressed) || qe.cache++;
  }
  function G(r, n) {
    function dd(e) {
      if (e || 0 === e) {
        i && (Se.history.scrollRestoration = "manual");
        var t = De && De.isPressed;
        (e = dd.v = Math.round(e) || (De && De.iOS ? 1 : 0)),
          r(e),
          (dd.cacheID = qe.cache),
          t && o("ss", e);
      } else (n || qe.cache !== dd.cacheID || o("ref")) && ((dd.cacheID = qe.cache), (dd.v = r()));
      return dd.v + dd.offset;
    }
    return (dd.offset = 0), r && dd;
  }
  function J(e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || Te.utils.toArray)(e)[0] ||
      ("string" == typeof e && !1 !== Te.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  }
  function K(t, e) {
    var r = e.s,
      n = e.sc;
    A(t) && (t = ke.scrollingElement || Ee);
    var i = qe.indexOf(t),
      o = n === ze.sc ? 1 : 2;
    ~i || (i = qe.push(t) - 1), qe[i + o] || B(t, "scroll", F);
    var a = qe[i + o],
      s =
        a ||
        (qe[i + o] =
          G(z(t, r), !0) ||
          (A(t)
            ? n
            : G(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (
      (s.target = t),
      a || (s.smooth = "smooth" === Te.getProperty(t, "scrollBehavior")),
      s
    );
  }
  function L(e, t, i) {
    function Cd(e, t) {
      var r = Ye();
      t || n < r - s
        ? ((a = o), (o = e), (l = s), (s = r))
        : i
        ? (o += e)
        : (o = a + ((e - a) / (r - l)) * (s - l));
    }
    var o = e,
      a = e,
      s = Ye(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: Cd,
      reset: function reset() {
        (a = o = i ? 0 : o), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = Ye();
        return (
          (!e && 0 !== e) || e === o || Cd(e),
          s === l || c < n - l
            ? 0
            : ((o + (i ? r : -r)) / ((i ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function M(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }
  function N(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function O() {
    (Ae = Te.core.globals().ScrollTrigger) &&
      Ae.core &&
      (function _integrate() {
        var e = Ae.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, qe),
          n.push.apply(n, Ie),
          (qe = t),
          (Ie = n),
          (o = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function P(e) {
    return (
      (Te = e || r()),
      !Ce &&
        Te &&
        "undefined" != typeof document &&
        document.body &&
        ((Se = window),
        (Ee = (ke = document).documentElement),
        (Pe = ke.body),
        (t = [Se, ke, Ee, Pe]),
        Te.utils.clamp,
        (Re = Te.core.context || function () {}),
        (Oe = "onpointerenter" in Pe ? "pointer" : "mouse"),
        (Me = k.isTouch =
          Se.matchMedia &&
          Se.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Se ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (Be = k.eventTypes =
          (
            "ontouchstart" in Ee
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Ee
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (i = 0);
        }, 500),
        O(),
        (Ce = 1)),
      Ce
    );
  }
  var Te,
    Ce,
    Se,
    ke,
    Ee,
    Pe,
    Me,
    Oe,
    Ae,
    t,
    De,
    Be,
    Re,
    i = 1,
    Le = [],
    qe = [],
    Ie = [],
    Ye = Date.now,
    o = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    a = "scrollTop",
    Fe = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: G(function (e) {
        return arguments.length
          ? Se.scrollTo(e, ze.sc())
          : Se.pageXOffset || ke[n] || Ee[n] || Pe[n] || 0;
      }),
    },
    ze = {
      s: a,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Fe,
      sc: G(function (e) {
        return arguments.length
          ? Se.scrollTo(Fe.sc(), e)
          : Se.pageYOffset || ke[a] || Ee[a] || Pe[a] || 0;
      }),
    };
  (Fe.op = ze), (qe.cache = 0);
  var k =
    ((Observer.prototype.init = function init(e) {
      Ce || P(Te) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ae || O();
      var i = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        o = e.target,
        r = e.lineHeight,
        n = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        w = e.onDown,
        _ = e.onChangeX,
        T = e.onChangeY,
        S = e.onChange,
        k = e.onToggleX,
        E = e.onToggleY,
        D = e.onHover,
        R = e.onHoverEnd,
        q = e.onMove,
        I = e.ignoreCheck,
        Y = e.isNormalizer,
        z = e.onGestureStart,
        H = e.onGestureEnd,
        X = e.onWheel,
        W = e.onEnable,
        V = e.onDisable,
        U = e.onClick,
        G = e.scrollSpeed,
        j = e.capture,
        Q = e.allowClicks,
        Z = e.lockAxis,
        $ = e.onLockAxis;
      function cf() {
        return (xe = Ye());
      }
      function df(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) ||
          (t && he && "touch" !== e.pointerType) ||
          (I && I(e, t))
        );
      }
      function ff() {
        var e = (se.deltaX = N(me)),
          t = (se.deltaY = N(ye)),
          r = Math.abs(e) >= i,
          n = Math.abs(t) >= i;
        S && (r || n) && S(se, e, t, me, ye),
          r &&
            (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            _ && _(se),
            k && se.deltaX < 0 != le < 0 && k(se),
            (le = se.deltaX),
            (me[0] = me[1] = me[2] = 0)),
          n &&
            (w && 0 < se.deltaY && w(se),
            x && se.deltaY < 0 && x(se),
            T && T(se),
            E && se.deltaY < 0 != ce < 0 && E(se),
            (ce = se.deltaY),
            (ye[0] = ye[1] = ye[2] = 0)),
          (ne || re) &&
            (q && q(se),
            re && (p && 1 === re && p(se), h && h(se), (re = 0)),
            (ne = !1)),
          oe && !(oe = !1) && $ && $(se),
          ie && (X(se), (ie = !1)),
          (ee = 0);
      }
      function gf(e, t, r) {
        (me[r] += e),
          (ye[r] += t),
          se._vx.update(e),
          se._vy.update(t),
          n ? (ee = ee || requestAnimationFrame(ff)) : ff();
      }
      function hf(e, t) {
        Z &&
          !ae &&
          ((se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y"), (oe = !0)),
          "y" !== ae && ((me[2] += e), se._vx.update(e, !0)),
          "x" !== ae && ((ye[2] += t), se._vy.update(t, !0)),
          n ? (ee = ee || requestAnimationFrame(ff)) : ff();
      }
      function jf(e) {
        if (!df(e, 1)) {
          var t = (e = M(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            i = r - se.y,
            o = se.isDragging;
          (se.x = t),
            (se.y = r),
            (o ||
              ((n || i) &&
                (Math.abs(se.startX - t) >= a ||
                  Math.abs(se.startY - r) >= a))) &&
              ((re = o ? 2 : 1), o || (se.isDragging = !0), hf(n, i));
        }
      }
      function mf(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (se.isGesturing = !0) &&
          z(e, se.isDragging)
        );
      }
      function nf() {
        return (se.isGesturing = !1) || H(se);
      }
      function of(e) {
        if (!df(e)) {
          var t = fe(),
            r = de();
          gf((t - pe) * G, (r - ge) * G, 1),
            (pe = t),
            (ge = r),
            l && te.restart(!0);
        }
      }
      function pf(e) {
        if (!df(e)) {
          (e = M(e, s)), X && (ie = !0);
          var t =
            (1 === e.deltaMode ? r : 2 === e.deltaMode ? Se.innerHeight : 1) *
            f;
          gf(e.deltaX * t, e.deltaY * t, 0), l && !Y && te.restart(!0);
        }
      }
      function qf(e) {
        if (!df(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            i = r - se.y;
          (se.x = t),
            (se.y = r),
            (ne = !0),
            l && te.restart(!0),
            (n || i) && hf(n, i);
        }
      }
      function rf(e) {
        (se.event = e), D(se);
      }
      function sf(e) {
        (se.event = e), R(se);
      }
      function tf(e) {
        return df(e) || (M(e, s) && U(se));
      }
      (this.target = o = J(o) || Ee),
        (this.vars = e),
        (u = u && Te.utils.toArray(u)),
        (i = i || 1e-9),
        (a = a || 0),
        (f = f || 1),
        (G = G || 1),
        (t = t || "wheel,touch,pointer"),
        (n = !1 !== n),
        (r = r || parseFloat(Se.getComputedStyle(Pe).lineHeight) || 22);
      var ee,
        te,
        re,
        ne,
        ie,
        oe,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = e.passive || (!s && !1 !== e.passive),
        fe = K(o, Fe),
        de = K(o, ze),
        pe = fe(),
        ge = de(),
        he =
          ~t.indexOf("touch") &&
          !~t.indexOf("pointer") &&
          "pointerdown" === Be[0],
        ve = A(o),
        be = o.ownerDocument || ke,
        me = [0, 0, 0],
        ye = [0, 0, 0],
        xe = 0,
        we = (se.onPress = function (e) {
          df(e, 1) ||
            (e && e.button) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = M(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            B(Y ? o : be, Be[1], jf, ue, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        }),
        _e = (se.onRelease = function (t) {
          if (!df(t, 1)) {
            C(Y ? o : be, Be[1], jf, !0);
            var e = !isNaN(se.y - se.startY),
              r = se.isDragging,
              n =
                r &&
                (3 < Math.abs(se.x - se.startX) ||
                  3 < Math.abs(se.y - se.startY)),
              i = M(t);
            !n &&
              e &&
              (se._vx.reset(),
              se._vy.reset(),
              s &&
                Q &&
                Te.delayedCall(0.08, function () {
                  if (300 < Ye() - xe && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (be.createEvent) {
                      var e = be.createEvent("MouseEvents");
                      e.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Se,
                        1,
                        i.screenX,
                        i.screenY,
                        i.clientX,
                        i.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        t.target.dispatchEvent(e);
                    }
                })),
              (se.isDragging = se.isGesturing = se.isPressed = !1),
              l && r && !Y && te.restart(!0),
              re && ff(),
              g && r && g(se),
              b && b(se, n);
          }
        });
      (te = se._dc =
        Te.delayedCall(c || 0.25, function onStopFunc() {
          se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
        }).pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = L(0, 50, !0)),
        (se._vy = L(0, 50, !0)),
        (se.scrollX = fe),
        (se.scrollY = de),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        Re(this),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (B(ve ? be : o, "scroll", F),
              0 <= t.indexOf("scroll") && B(ve ? be : o, "scroll", of, ue, j),
              0 <= t.indexOf("wheel") && B(o, "wheel", pf, ue, j),
              ((0 <= t.indexOf("touch") && Me) || 0 <= t.indexOf("pointer")) &&
                (B(o, Be[0], we, ue, j),
                B(be, Be[2], _e),
                B(be, Be[3], _e),
                Q && B(o, "click", cf, !0, !0),
                U && B(o, "click", tf),
                z && B(be, "gesturestart", mf),
                H && B(be, "gestureend", nf),
                D && B(o, Oe + "enter", rf),
                R && B(o, Oe + "leave", sf),
                q && B(o, Oe + "move", qf)),
              (se.isEnabled = !0),
              (se.isDragging = se.isGesturing = se.isPressed = ne = re = !1),
              se._vx.reset(),
              se._vy.reset(),
              (pe = fe()),
              (ge = de()),
              e && e.type && we(e),
              W && W(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (Le.filter(function (e) {
              return e !== se && A(e.target);
            }).length || C(ve ? be : o, "scroll", F),
            se.isPressed &&
              (se._vx.reset(), se._vy.reset(), C(Y ? o : be, Be[1], jf, !0)),
            C(ve ? be : o, "scroll", of, j),
            C(o, "wheel", pf, j),
            C(o, Be[0], we, j),
            C(be, Be[2], _e),
            C(be, Be[3], _e),
            C(o, "click", cf, !0),
            C(o, "click", tf),
            C(be, "gesturestart", mf),
            C(be, "gestureend", nf),
            C(o, Oe + "enter", rf),
            C(o, Oe + "leave", sf),
            C(o, Oe + "move", qf),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            V && V(se));
        }),
        (se.kill = se.revert =
          function () {
            se.disable();
            var e = Le.indexOf(se);
            0 <= e && Le.splice(e, 1), De === se && (De = 0);
          }),
        Le.push(se),
        Y && A(o) && (De = se),
        se.enable(d);
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      );
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (k.version = "3.12.7"),
    (k.create = function (e) {
      return new k(e);
    }),
    (k.register = P),
    (k.getAll = function () {
      return Le.slice();
    }),
    (k.getById = function (t) {
      return Le.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    r() && Te.registerPlugin(k);
  function Ca(e, t, r) {
    var n = ct(e) && ("clamp(" === e.substr(0, 6) || -1 < e.indexOf("max"));
    return (r["_" + t + "Clamp"] = n) ? e.substr(6, e.length - 7) : e;
  }
  function Da(e, t) {
    return !t || (ct(e) && "clamp(" === e.substr(0, 6))
      ? e
      : "clamp(" + e + ")";
  }
  function Fa() {
    return (je = 1);
  }
  function Ga() {
    return (je = 0);
  }
  function Ha(e) {
    return e;
  }
  function Ia(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Ja() {
    return "undefined" != typeof window;
  }
  function Ka() {
    return He || (Ja() && (He = window.gsap) && He.registerPlugin && He);
  }
  function La(e) {
    return !!~l.indexOf(e);
  }
  function Ma(e) {
    return (
      ("Height" === e ? T : Ne["inner" + e]) ||
      We["client" + e] ||
      Je["client" + e]
    );
  }
  function Na(e) {
    return (
      z(e, "getBoundingClientRect") ||
      (La(e)
        ? function () {
            return (Ot.width = Ne.innerWidth), (Ot.height = T), Ot;
          }
        : function () {
            return wt(e);
          })
    );
  }
  function Qa(e, t) {
    var r = t.s,
      n = t.d2,
      i = t.d,
      o = t.a;
    return Math.max(
      0,
      (r = "scroll" + n) && (o = z(e, r))
        ? o() - Na(e)()[i]
        : La(e)
        ? (We[r] || Je[r]) - Ma(n)
        : e[r] - e["offset" + n]
    );
  }
  function Ra(e, t) {
    for (var r = 0; r < g.length; r += 3)
      (t && !~t.indexOf(g[r + 1])) || e(g[r], g[r + 1], g[r + 2]);
  }
  function Ta(e) {
    return "function" == typeof e;
  }
  function Ua(e) {
    return "number" == typeof e;
  }
  function Va(e) {
    return "object" == typeof e;
  }
  function Wa(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Xa(e, t) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function mb(e) {
    return Ne.getComputedStyle(e);
  }
  function ob(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function qb(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function rb(e) {
    var t,
      r = [],
      n = e.labels,
      i = e.duration();
    for (t in n) r.push(n[t] / i);
    return r;
  }
  function tb(i) {
    var o = He.utils.snap(i),
      a =
        Array.isArray(i) &&
        i.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return o(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = o(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : o(t < 0 ? e - i : e + i);
        };
  }
  function vb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function wb(e, t, r, n, i) {
    return e.addEventListener(t, r, { passive: !n, capture: !!i });
  }
  function xb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function yb(e, t, r) {
    (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
  }
  function Cb(e, t) {
    if (ct(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in H
            ? H[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function Db(e, t, r, n, i, o, a, s) {
    var l = i.startColor,
      c = i.endColor,
      u = i.fontSize,
      f = i.indent,
      d = i.fontWeight,
      p = Xe.createElement("div"),
      g = La(r) || "fixed" === z(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      v = g ? Je : r,
      b = -1 !== e.indexOf("start"),
      m = b ? l : c,
      y =
        "border-color:" +
        m +
        ";font-size:" +
        u +
        ";color:" +
        m +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((h || s) && g ? "fixed;" : "absolute;")),
      (!h && !s && g) ||
        (y += (n === ze ? q : I) + ":" + (o + parseFloat(f)) + "px;"),
      a &&
        (y +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = b),
      p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (p.style.cssText = y),
      (p.innerText = t || 0 === t ? e + "-" + t : e),
      v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      X(p, 0, n, b),
      p
    );
  }
  function Ib() {
    return 34 < at() - st && (D = D || requestAnimationFrame(Z));
  }
  function Jb() {
    (v && v.isPressed && !(v.startX > Je.clientWidth)) ||
      (qe.cache++,
      v ? (D = D || requestAnimationFrame(Z)) : Z(),
      st || U("scrollStart"),
      (st = at()));
  }
  function Kb() {
    (y = Ne.innerWidth), (m = Ne.innerHeight);
  }
  function Lb(e) {
    qe.cache++,
      (!0 !== e &&
        (Ke ||
          h ||
          Xe.fullscreenElement ||
          Xe.webkitFullscreenElement ||
          (b &&
            y === Ne.innerWidth &&
            !(Math.abs(Ne.innerHeight - m) > 0.25 * Ne.innerHeight)))) ||
        c.restart(!0);
  }
  function Ob() {
    return xb(ne, "scrollEnd", Ob) || Et(!0);
  }
  function Rb(e) {
    for (var t = 0; t < j.length; t += 5)
      (!e || (j[t + 4] && j[t + 4].query === e)) &&
        ((j[t].style.cssText = j[t + 1]),
        j[t].getBBox && j[t].setAttribute("transform", j[t + 2] || ""),
        (j[t + 3].uncache = 1));
  }
  function Sb(e, t) {
    var r;
    for (Qe = 0; Qe < Ct.length; Qe++)
      !(r = Ct[Qe]) ||
        (t && r._ctx !== t) ||
        (e ? r.kill(1) : r.revert(!0, !0));
    (S = !0), t && Rb(t), t || U("revert");
  }
  function Tb(e, t) {
    qe.cache++,
      (!t && rt) ||
        qe.forEach(function (e) {
          return Ta(e) && e.cacheID++ && (e.rec = 0);
        }),
      ct(e) && (Ne.history.scrollRestoration = w = e);
  }
  function Yb() {
    Je.appendChild(_),
      (T = (!v && _.offsetHeight) || Ne.innerHeight),
      Je.removeChild(_);
  }
  function Zb(t) {
    return Ve(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (e) {
      return (e.style.display = t ? "none" : "block");
    });
  }
  function gc(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var i, o = $.length, a = t.style, s = e.style; o--; )
        a[(i = $[o])] = r[i];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[I] = s[q] = "auto"),
        (a.flexBasis = r.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[ft] = qb(e, Fe) + xt),
        (a[dt] = qb(e, ze) + xt),
        (a[bt] = s[mt] = s.top = s.left = "0"),
        Mt(n),
        (s[ft] = s.maxWidth = r[ft]),
        (s[dt] = s.maxHeight = r[dt]),
        (s[bt] = r[bt]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function jc(e) {
    for (var t = ee.length, r = e.style, n = [], i = 0; i < t; i++)
      n.push(ee[i], r[ee[i]]);
    return (n.t = e), n;
  }
  function mc(e, t, r, n, i, o, a, s, l, c, u, f, d, p) {
    Ta(e) && (e = e(s)),
      ct(e) &&
        "max" === e.substr(0, 3) &&
        (e = f + ("=" === e.charAt(4) ? Cb("0" + e.substr(3), r) : 0));
    var g,
      h,
      v,
      b = d ? d.time() : 0;
    if ((d && d.seek(0), isNaN(e) || (e = +e), Ua(e)))
      d &&
        (e = He.utils.mapRange(
          d.scrollTrigger.start,
          d.scrollTrigger.end,
          0,
          f,
          e
        )),
        a && X(a, r, n, !0);
    else {
      Ta(t) && (t = t(s));
      var m,
        y,
        x,
        w,
        _ = (e || "0").split(" ");
      (v = J(t, s) || Je),
        ((m = wt(v) || {}) && (m.left || m.top)) ||
          "none" !== mb(v).display ||
          ((w = v.style.display),
          (v.style.display = "block"),
          (m = wt(v)),
          w ? (v.style.display = w) : v.style.removeProperty("display")),
        (y = Cb(_[0], m[n.d])),
        (x = Cb(_[1] || "0", r)),
        (e = m[n.p] - l[n.p] - c + y + i - x),
        a && X(a, x, n, r - x < 20 || (a._isStart && 20 < x)),
        (r -= r - x);
    }
    if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), o)) {
      var T = e + r,
        C = o._isStart;
      (g = "scroll" + n.d2),
        X(
          o,
          T,
          n,
          (C && 20 < T) ||
            (!C && (u ? Math.max(Je[g], We[g]) : o.parentNode[g]) <= T + 1)
        ),
        u &&
          ((l = wt(a)),
          u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + xt));
    }
    return (
      d &&
        v &&
        ((g = wt(v)),
        d.seek(f),
        (h = wt(v)),
        (d._caScrollDist = g[n.p] - h[n.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(b),
      d ? e : Math.round(e)
    );
  }
  function oc(e, t, r, n) {
    if (e.parentNode !== t) {
      var i,
        o,
        a = e.style;
      if (t === Je) {
        for (i in ((e._stOrig = a.cssText), (o = mb(e))))
          +i ||
            re.test(i) ||
            !o[i] ||
            "string" != typeof a[i] ||
            "0" === i ||
            (a[i] = o[i]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (He.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function pc(r, e, n) {
    var i = e,
      o = i;
    return function (e) {
      var t = Math.round(r());
      return (
        t !== i &&
          t !== o &&
          3 < Math.abs(t - i) &&
          3 < Math.abs(t - o) &&
          ((e = t), n && n()),
        (o = i),
        (i = Math.round(e))
      );
    };
  }
  function qc(e, t, r) {
    var n = {};
    (n[t.p] = "+=" + r), He.set(e, n);
  }
  function rc(c, e) {
    function Dk(e, t, r, n, i) {
      var o = Dk.tween,
        a = t.onComplete,
        s = {};
      r = r || u();
      var l = pc(u, r, function () {
        o.kill(), (Dk.tween = 0);
      });
      return (
        (i = (n && i) || 0),
        (n = n || e - r),
        o && o.kill(),
        (t[f] = e),
        (t.inherit = !1),
        ((t.modifiers = s)[f] = function () {
          return l(r + n * o.ratio + i * o.ratio * o.ratio);
        }),
        (t.onUpdate = function () {
          qe.cache++, Dk.tween && Z();
        }),
        (t.onComplete = function () {
          (Dk.tween = 0), a && a.call(o);
        }),
        (o = Dk.tween = He.to(c, t))
      );
    }
    var u = K(c, e),
      f = "_scroll" + e.p2;
    return (
      ((c[f] = u).wheelHandler = function () {
        return Dk.tween && Dk.tween.kill() && (Dk.tween = 0);
      }),
      wb(c, "wheel", u.wheelHandler),
      ne.isTouch && wb(c, "touchmove", u.wheelHandler),
      Dk
    );
  }
  var He,
    s,
    Ne,
    Xe,
    We,
    Je,
    l,
    c,
    Ve,
    Ue,
    Ge,
    u,
    Ke,
    je,
    f,
    Qe,
    d,
    p,
    g,
    Ze,
    $e,
    h,
    v,
    b,
    m,
    y,
    E,
    x,
    w,
    _,
    T,
    S,
    et,
    tt,
    D,
    rt,
    nt,
    it,
    ot = 1,
    at = Date.now,
    R = at(),
    st = 0,
    lt = 0,
    ct = function _isString(e) {
      return "string" == typeof e;
    },
    ut = Math.abs,
    q = "right",
    I = "bottom",
    ft = "width",
    dt = "height",
    pt = "Right",
    gt = "Left",
    ht = "Top",
    vt = "Bottom",
    bt = "padding",
    mt = "margin",
    yt = "Width",
    Y = "Height",
    xt = "px",
    wt = function _getBounds(e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== mb(e)[f] &&
          He.to(e, {
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
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    _t = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Tt = { toggleActions: "play", anticipatePin: 0 },
    H = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    X = function _positionMarker(e, t, r, n) {
      var i = { display: "block" },
        o = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (i[r.a + "Percent"] = n ? -100 : 0),
        (i[r.a] = n ? "1px" : 0),
        (i["border" + o + yt] = 1),
        (i["border" + a + yt] = 0),
        (i[r.p] = t + "px"),
        He.set(e, i);
    },
    Ct = [],
    St = {},
    W = {},
    V = [],
    U = function _dispatch(e) {
      return (
        (W[e] &&
          W[e].map(function (e) {
            return e();
          })) ||
        V
      );
    },
    j = [],
    kt = 0,
    Et = function _refreshAll(e, t) {
      if (
        ((We = Xe.documentElement),
        (Je = Xe.body),
        (l = [Ne, Xe, We, Je]),
        !st || e || S)
      ) {
        Yb(),
          (rt = ne.isRefreshing = !0),
          qe.forEach(function (e) {
            return Ta(e) && ++e.cacheID && (e.rec = e());
          });
        var r = U("refreshInit");
        Ze && ne.sort(),
          t || Sb(),
          qe.forEach(function (e) {
            Ta(e) &&
              (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          Ct.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          (S = !1),
          Ct.forEach(function (e) {
            if (e._subPinOffset && e.pin) {
              var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                r = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh();
            }
          }),
          (et = 1),
          Zb(!0),
          Ct.forEach(function (e) {
            var t = Qa(e.scroller, e._dir),
              r = "max" === e.vars.end || (e._endClamp && e.end > t),
              n = e._startClamp && e.start >= t;
            (r || n) &&
              e.setPositions(
                n ? t - 1 : e.start,
                r ? Math.max(n ? t : e.start + 1, t) : e.end,
                !0
              );
          }),
          Zb(!1),
          (et = 0),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          qe.forEach(function (e) {
            Ta(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          Tb(w, 1),
          c.pause(),
          kt++,
          Z((rt = 2)),
          Ct.forEach(function (e) {
            return Ta(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (rt = ne.isRefreshing = !1),
          U("refresh");
      } else wb(ne, "scrollEnd", Ob);
    },
    Q = 0,
    Pt = 1,
    Z = function _updateAll(e) {
      if (2 === e || (!rt && !S)) {
        (ne.isUpdating = !0), it && it.update(0);
        var t = Ct.length,
          r = at(),
          n = 50 <= r - R,
          i = t && Ct[0].scroll();
        if (
          ((Pt = i < Q ? -1 : 1),
          rt || (Q = i),
          n &&
            (st && !je && 200 < r - st && ((st = 0), U("scrollEnd")),
            (Ge = R),
            (R = r)),
          Pt < 0)
        ) {
          for (Qe = t; 0 < Qe--; ) Ct[Qe] && Ct[Qe].update(0, n);
          Pt = 1;
        } else for (Qe = 0; Qe < t; Qe++) Ct[Qe] && Ct[Qe].update(0, n);
        ne.isUpdating = !1;
      }
      D = 0;
    },
    $ = [
      "left",
      "top",
      I,
      q,
      mt + vt,
      mt + pt,
      mt + ht,
      mt + gt,
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
    ee = $.concat([
      ft,
      dt,
      "boxSizing",
      "max" + yt,
      "max" + Y,
      "position",
      mt,
      bt,
      bt + ht,
      bt + pt,
      bt + vt,
      bt + gt,
    ]),
    te = /([A-Z])/g,
    Mt = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          i = e.length,
          o = 0;
        for ((e.t._gsap || He.core.getCache(e.t)).uncache = 1; o < i; o += 2)
          (r = e[o + 1]),
            (t = e[o]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(te, "-$1").toLowerCase());
      }
    },
    Ot = { left: 0, top: 0 },
    re = /(webkit|moz|length|cssText|inset)/i,
    ne =
      ((ScrollTrigger.prototype.init = function init(M, O) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), lt)
        ) {
          var A,
            n,
            p,
            D,
            B,
            R,
            L,
            q,
            I,
            Y,
            F,
            e,
            H,
            N,
            X,
            W,
            V,
            U,
            t,
            G,
            b,
            j,
            Q,
            m,
            Z,
            y,
            $,
            x,
            r,
            w,
            _,
            ee,
            i,
            g,
            te,
            re,
            ne,
            T,
            o,
            C = (M = ob(ct(M) || Ua(M) || M.nodeType ? { trigger: M } : M, Tt))
              .onUpdate,
            S = M.toggleClass,
            a = M.id,
            k = M.onToggle,
            ie = M.onRefresh,
            E = M.scrub,
            oe = M.trigger,
            ae = M.pin,
            se = M.pinSpacing,
            le = M.invalidateOnRefresh,
            P = M.anticipatePin,
            s = M.onScrubComplete,
            h = M.onSnapComplete,
            ce = M.once,
            ue = M.snap,
            fe = M.pinReparent,
            l = M.pinSpacer,
            de = M.containerAnimation,
            pe = M.fastScrollEnd,
            ge = M.preventOverlaps,
            he =
              M.horizontal || (M.containerAnimation && !1 !== M.horizontal)
                ? Fe
                : ze,
            ve = !E && 0 !== E,
            be = J(M.scroller || Ne),
            c = He.core.getCache(be),
            me = La(be),
            ye =
              "fixed" ===
              ("pinType" in M
                ? M.pinType
                : z(be, "pinType") || (me && "fixed")),
            xe = [M.onEnter, M.onLeave, M.onEnterBack, M.onLeaveBack],
            we = ve && M.toggleActions.split(" "),
            _e = "markers" in M ? M.markers : Tt.markers,
            Te = me ? 0 : parseFloat(mb(be)["border" + he.p2 + yt]) || 0,
            Ce = this,
            Se =
              M.onRefreshInit &&
              function () {
                return M.onRefreshInit(Ce);
              },
            ke = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                i = r.d2,
                o = r.a;
              return (o = z(e, "getBoundingClientRect"))
                ? function () {
                    return o()[n];
                  }
                : function () {
                    return (t ? Ma(i) : e["client" + i]) || 0;
                  };
            })(be, me, he),
            Ee = (function _getOffsetsFunc(e, t) {
              return !t || ~Ie.indexOf(e)
                ? Na(e)
                : function () {
                    return Ot;
                  };
            })(be, me),
            Pe = 0,
            Me = 0,
            Oe = 0,
            Ae = K(be, he);
          if (
            ((Ce._startClamp = Ce._endClamp = !1),
            (Ce._dir = he),
            (P *= 45),
            (Ce.scroller = be),
            (Ce.scroll = de ? de.time.bind(de) : Ae),
            (D = Ae()),
            (Ce.vars = M),
            (O = O || M.animation),
            "refreshPriority" in M &&
              ((Ze = 1), -9999 === M.refreshPriority && (it = Ce)),
            (c.tweenScroll = c.tweenScroll || {
              top: rc(be, ze),
              left: rc(be, Fe),
            }),
            (Ce.tweenTo = A = c.tweenScroll[he.p]),
            (Ce.scrubDuration = function (e) {
              (i = Ua(e) && e)
                ? ee
                  ? ee.duration(e)
                  : (ee = He.to(O, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: i,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(Ce);
                      },
                    }))
                : (ee && ee.progress(1).kill(), (ee = 0));
            }),
            O &&
              ((O.vars.lazy = !1),
              (O._initted && !Ce.isReverted) ||
                (!1 !== O.vars.immediateRender &&
                  !1 !== M.immediateRender &&
                  O.duration() &&
                  O.render(0, !0, !0)),
              (Ce.animation = O.pause()),
              (O.scrollTrigger = Ce).scrubDuration(E),
              (w = 0),
              (a = a || O.vars.id)),
            ue &&
              ((Va(ue) && !ue.push) || (ue = { snapTo: ue }),
              "scrollBehavior" in Je.style &&
                He.set(me ? [Je, We] : be, { scrollBehavior: "auto" }),
              qe.forEach(function (e) {
                return (
                  Ta(e) &&
                  e.target === (me ? Xe.scrollingElement || We : be) &&
                  (e.smooth = !1)
                );
              }),
              (p = Ta(ue.snapTo)
                ? ue.snapTo
                : "labels" === ue.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return He.utils.snap(rb(t), e);
                    };
                  })(O)
                : "labelsDirectional" === ue.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return tb(rb(r))(e, t.direction);
                    };
                  })(O)
                : !1 !== ue.directional
                ? function (e, t) {
                    return tb(ue.snapTo)(e, at() - Me < 500 ? 0 : t.direction);
                  }
                : He.utils.snap(ue.snapTo)),
              (g = ue.duration || { min: 0.1, max: 2 }),
              (g = Va(g) ? Ue(g.min, g.max) : Ue(g, g)),
              (te = He.delayedCall(ue.delay || i / 2 || 0.1, function () {
                var e = Ae(),
                  t = at() - Me < 500,
                  r = A.tween;
                if (
                  !(t || Math.abs(Ce.getVelocity()) < 10) ||
                  r ||
                  je ||
                  Pe === e
                )
                  Ce.isActive && Pe !== e && te.restart(!0);
                else {
                  var n,
                    i,
                    o = (e - R) / N,
                    a = O && !ve ? O.totalProgress() : o,
                    s = t ? 0 : ((a - _) / (at() - Ge)) * 1e3 || 0,
                    l = He.utils.clamp(-o, 1 - o, (ut(s / 2) * s) / 0.185),
                    c = o + (!1 === ue.inertia ? 0 : l),
                    u = ue.onStart,
                    f = ue.onInterrupt,
                    d = ue.onComplete;
                  if (
                    ((n = p(c, Ce)),
                    Ua(n) || (n = c),
                    (i = Math.max(0, Math.round(R + n * N))),
                    e <= L && R <= e && i !== e)
                  ) {
                    if (r && !r._initted && r.data <= ut(i - e)) return;
                    !1 === ue.inertia && (l = n - o),
                      A(
                        i,
                        {
                          duration: g(
                            ut(
                              (0.185 * Math.max(ut(c - a), ut(n - a))) /
                                s /
                                0.05 || 0
                            )
                          ),
                          ease: ue.ease || "power3",
                          data: ut(i - e),
                          onInterrupt: function onInterrupt() {
                            return te.restart(!0) && f && f(Ce);
                          },
                          onComplete: function onComplete() {
                            Ce.update(),
                              (Pe = Ae()),
                              O &&
                                !ve &&
                                (ee
                                  ? ee.resetTo(
                                      "totalProgress",
                                      n,
                                      O._tTime / O._tDur
                                    )
                                  : O.progress(n)),
                              (w = _ =
                                O && !ve ? O.totalProgress() : Ce.progress),
                              h && h(Ce),
                              d && d(Ce);
                          },
                        },
                        e,
                        l * N,
                        i - e - l * N
                      ),
                      u && u(Ce, A.tween);
                  }
                }
              }).pause())),
            a && (St[a] = Ce),
            (o =
              (o =
                (oe = Ce.trigger = J(oe || (!0 !== ae && ae))) &&
                oe._gsap &&
                oe._gsap.stRevert) && o(Ce)),
            (ae = !0 === ae ? oe : J(ae)),
            ct(S) && (S = { targets: oe, className: S }),
            ae &&
              (!1 === se ||
                se === mt ||
                (se =
                  !(
                    !se &&
                    ae.parentNode &&
                    ae.parentNode.style &&
                    "flex" === mb(ae.parentNode).display
                  ) && bt),
              (Ce.pin = ae),
              (n = He.core.getCache(ae)).spacer
                ? (X = n.pinState)
                : (l &&
                    ((l = J(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = jc(l))),
                  (n.spacer = U = l || Xe.createElement("div")),
                  U.classList.add("pin-spacer"),
                  a && U.classList.add("pin-spacer-" + a),
                  (n.pinState = X = jc(ae))),
              !1 !== M.force3D && He.set(ae, { force3D: !0 }),
              (Ce.spacer = U = n.spacer),
              (r = mb(ae)),
              (m = r[se + he.os2]),
              (G = He.getProperty(ae)),
              (b = He.quickSetter(ae, he.a, xt)),
              gc(ae, U, r),
              (V = jc(ae))),
            _e)
          ) {
            (e = Va(_e) ? ob(_e, _t) : _t),
              (Y = Db("scroller-start", a, be, he, e, 0)),
              (F = Db("scroller-end", a, be, he, e, 0, Y)),
              (t = Y["offset" + he.op.d2]);
            var u = J(z(be, "content") || be);
            (q = this.markerStart = Db("start", a, u, he, e, t, 0, de)),
              (I = this.markerEnd = Db("end", a, u, he, e, t, 0, de)),
              de && (T = He.quickSetter([q, I], he.a, xt)),
              ye ||
                (Ie.length && !0 === z(be, "fixedMarkers")) ||
                ((function _makePositionable(e) {
                  var t = mb(e).position;
                  e.style.position =
                    "absolute" === t || "fixed" === t ? t : "relative";
                })(me ? Je : be),
                He.set([Y, F], { force3D: !0 }),
                (y = He.quickSetter(Y, he.a, xt)),
                (x = He.quickSetter(F, he.a, xt)));
          }
          if (de) {
            var f = de.vars.onUpdate,
              d = de.vars.onUpdateParams;
            de.eventCallback("onUpdate", function () {
              Ce.update(0, 0, 1), f && f.apply(de, d || []);
            });
          }
          if (
            ((Ce.previous = function () {
              return Ct[Ct.indexOf(Ce) - 1];
            }),
            (Ce.next = function () {
              return Ct[Ct.indexOf(Ce) + 1];
            }),
            (Ce.revert = function (e, t) {
              if (!t) return Ce.kill(!0);
              var r = !1 !== e || !Ce.enabled,
                n = Ke;
              r !== Ce.isReverted &&
                (r &&
                  ((re = Math.max(Ae(), Ce.scroll.rec || 0)),
                  (Oe = Ce.progress),
                  (ne = O && O.progress())),
                q &&
                  [q, I, Y, F].forEach(function (e) {
                    return (e.style.display = r ? "none" : "block");
                  }),
                r && (Ke = Ce).update(r),
                !ae ||
                  (fe && Ce.isActive) ||
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Mt(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Mt(n.spacerState);
                        else if (e._gsap.swappedIn) {
                          var i = t.parentNode;
                          i && (i.insertBefore(e, t), i.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(ae, U, X)
                    : gc(ae, U, mb(ae), Z)),
                r || Ce.update(r),
                (Ke = n),
                (Ce.isReverted = r));
            }),
            (Ce.refresh = function (e, t, r, n) {
              if ((!Ke && Ce.enabled) || t)
                if (ae && e && st) wb(ScrollTrigger, "scrollEnd", Ob);
                else {
                  !rt && Se && Se(Ce),
                    (Ke = Ce),
                    A.tween && !r && (A.tween.kill(), (A.tween = 0)),
                    ee && ee.pause(),
                    le && O && O.revert({ kill: !1 }).invalidate(),
                    Ce.isReverted || Ce.revert(!0, !0),
                    (Ce._subPinOffset = !1);
                  var i,
                    o,
                    a,
                    s,
                    l,
                    c,
                    u,
                    f,
                    d,
                    p,
                    g,
                    h,
                    v,
                    b = ke(),
                    m = Ee(),
                    y = de ? de.duration() : Qa(be, he),
                    x = N <= 0.01,
                    w = 0,
                    _ = n || 0,
                    T = Va(r) ? r.end : M.end,
                    C = M.endTrigger || oe,
                    S = Va(r)
                      ? r.start
                      : M.start ||
                        (0 !== M.start && oe ? (ae ? "0 0" : "0 100%") : 0),
                    k = (Ce.pinnedContainer =
                      M.pinnedContainer && J(M.pinnedContainer, Ce)),
                    E = (oe && Math.max(0, Ct.indexOf(Ce))) || 0,
                    P = E;
                  for (
                    _e &&
                    Va(r) &&
                    ((h = He.getProperty(Y, he.p)),
                    (v = He.getProperty(F, he.p)));
                    0 < P--;

                  )
                    (c = Ct[P]).end || c.refresh(0, 1) || (Ke = Ce),
                      !(u = c.pin) ||
                        (u !== oe && u !== ae && u !== k) ||
                        c.isReverted ||
                        ((p = p || []).unshift(c), c.revert(!0, !0)),
                      c !== Ct[P] && (E--, P--);
                  for (
                    Ta(S) && (S = S(Ce)),
                      S = Ca(S, "start", Ce),
                      R =
                        mc(
                          S,
                          oe,
                          b,
                          he,
                          Ae(),
                          q,
                          Y,
                          Ce,
                          m,
                          Te,
                          ye,
                          y,
                          de,
                          Ce._startClamp && "_startClamp"
                        ) || (ae ? -0.001 : 0),
                      Ta(T) && (T = T(Ce)),
                      ct(T) &&
                        !T.indexOf("+=") &&
                        (~T.indexOf(" ")
                          ? (T = (ct(S) ? S.split(" ")[0] : "") + T)
                          : ((w = Cb(T.substr(2), b)),
                            (T = ct(S)
                              ? S
                              : (de
                                  ? He.utils.mapRange(
                                      0,
                                      de.duration(),
                                      de.scrollTrigger.start,
                                      de.scrollTrigger.end,
                                      R
                                    )
                                  : R) + w),
                            (C = oe))),
                      T = Ca(T, "end", Ce),
                      L =
                        Math.max(
                          R,
                          mc(
                            T || (C ? "100% 0" : y),
                            C,
                            b,
                            he,
                            Ae() + w,
                            I,
                            F,
                            Ce,
                            m,
                            Te,
                            ye,
                            y,
                            de,
                            Ce._endClamp && "_endClamp"
                          )
                        ) || -0.001,
                      w = 0,
                      P = E;
                    P--;

                  )
                    (u = (c = Ct[P]).pin) &&
                      c.start - c._pinPush <= R &&
                      !de &&
                      0 < c.end &&
                      ((i =
                        c.end -
                        (Ce._startClamp ? Math.max(0, c.start) : c.start)),
                      ((u === oe && c.start - c._pinPush < R) || u === k) &&
                        isNaN(S) &&
                        (w += i * (1 - c.progress)),
                      u === ae && (_ += i));
                  if (
                    ((R += w),
                    (L += w),
                    Ce._startClamp && (Ce._startClamp += w),
                    Ce._endClamp &&
                      !rt &&
                      ((Ce._endClamp = L || -0.001),
                      (L = Math.min(L, Qa(be, he)))),
                    (N = L - R || ((R -= 0.01) && 0.001)),
                    x &&
                      (Oe = He.utils.clamp(0, 1, He.utils.normalize(R, L, re))),
                    (Ce._pinPush = _),
                    q &&
                      w &&
                      (((i = {})[he.a] = "+=" + w),
                      k && (i[he.p] = "-=" + Ae()),
                      He.set([q, I], i)),
                    !ae || (et && Ce.end >= Qa(be, he)))
                  ) {
                    if (oe && Ae() && !de)
                      for (o = oe.parentNode; o && o !== Je; )
                        o._pinOffset &&
                          ((R -= o._pinOffset), (L -= o._pinOffset)),
                          (o = o.parentNode);
                  } else
                    (i = mb(ae)),
                      (s = he === ze),
                      (a = Ae()),
                      (j = parseFloat(G(he.a)) + _),
                      !y &&
                        1 < L &&
                        ((g = {
                          style: (g = (me ? Xe.scrollingElement || We : be)
                            .style),
                          value: g["overflow" + he.a.toUpperCase()],
                        }),
                        me &&
                          "scroll" !==
                            mb(Je)["overflow" + he.a.toUpperCase()] &&
                          (g.style["overflow" + he.a.toUpperCase()] =
                            "scroll")),
                      gc(ae, U, i),
                      (V = jc(ae)),
                      (o = wt(ae, !0)),
                      (f = ye && K(be, s ? Fe : ze)()),
                      se
                        ? (((Z = [se + he.os2, N + _ + xt]).t = U),
                          (P = se === bt ? qb(ae, he) + N + _ : 0) &&
                            (Z.push(he.d, P + xt),
                            "auto" !== U.style.flexBasis &&
                              (U.style.flexBasis = P + xt)),
                          Mt(Z),
                          k &&
                            Ct.forEach(function (e) {
                              e.pin === k &&
                                !1 !== e.vars.pinSpacing &&
                                (e._subPinOffset = !0);
                            }),
                          ye && Ae(re))
                        : (P = qb(ae, he)) &&
                          "auto" !== U.style.flexBasis &&
                          (U.style.flexBasis = P + xt),
                      ye &&
                        (((l = {
                          top: o.top + (s ? a - R : f) + xt,
                          left: o.left + (s ? f : a - R) + xt,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[ft] = l.maxWidth =
                          Math.ceil(o.width) + xt),
                        (l[dt] = l.maxHeight = Math.ceil(o.height) + xt),
                        (l[mt] =
                          l[mt + ht] =
                          l[mt + pt] =
                          l[mt + vt] =
                          l[mt + gt] =
                            "0"),
                        (l[bt] = i[bt]),
                        (l[bt + ht] = i[bt + ht]),
                        (l[bt + pt] = i[bt + pt]),
                        (l[bt + vt] = i[bt + vt]),
                        (l[bt + gt] = i[bt + gt]),
                        (W = (function _copyState(e, t, r) {
                          for (
                            var n, i = [], o = e.length, a = r ? 8 : 0;
                            a < o;
                            a += 2
                          )
                            (n = e[a]), i.push(n, n in t ? t[n] : e[a + 1]);
                          return (i.t = e.t), i;
                        })(X, l, fe)),
                        rt && Ae(0)),
                      O
                        ? ((d = O._initted),
                          $e(1),
                          O.render(O.duration(), !0, !0),
                          (Q = G(he.a) - j + N + _),
                          ($ = 1 < Math.abs(N - Q)),
                          ye && $ && W.splice(W.length - 2, 2),
                          O.render(0, !0, !0),
                          d || O.invalidate(!0),
                          O.parent || O.totalTime(O.totalTime()),
                          $e(0))
                        : (Q = N),
                      g &&
                        (g.value
                          ? (g.style["overflow" + he.a.toUpperCase()] = g.value)
                          : g.style.removeProperty("overflow-" + he.a));
                  p &&
                    p.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (Ce.start = R),
                    (Ce.end = L),
                    (D = B = rt ? re : Ae()),
                    de || rt || (D < re && Ae(re), (Ce.scroll.rec = 0)),
                    Ce.revert(!1, !0),
                    (Me = at()),
                    te && ((Pe = -1), te.restart(!0)),
                    (Ke = 0),
                    O &&
                      ve &&
                      (O._initted || ne) &&
                      O.progress() !== ne &&
                      O.progress(ne || 0, !0).render(O.time(), !0, !0),
                    (x ||
                      Oe !== Ce.progress ||
                      de ||
                      le ||
                      (O && !O._initted)) &&
                      (O &&
                        !ve &&
                        O.totalProgress(
                          de && R < -0.001 && !Oe
                            ? He.utils.normalize(R, L, 0)
                            : Oe,
                          !0
                        ),
                      (Ce.progress = x || (D - R) / N === Oe ? 0 : Oe)),
                    ae && se && (U._pinOffset = Math.round(Ce.progress * Q)),
                    ee && ee.invalidate(),
                    isNaN(h) ||
                      ((h -= He.getProperty(Y, he.p)),
                      (v -= He.getProperty(F, he.p)),
                      qc(Y, he, h),
                      qc(q, he, h - (n || 0)),
                      qc(F, he, v),
                      qc(I, he, v - (n || 0))),
                    x && !rt && Ce.update(),
                    !ie || rt || H || ((H = !0), ie(Ce), (H = !1));
                }
            }),
            (Ce.getVelocity = function () {
              return ((Ae() - B) / (at() - Ge)) * 1e3 || 0;
            }),
            (Ce.endAnimation = function () {
              Wa(Ce.callbackAnimation),
                O &&
                  (ee
                    ? ee.progress(1)
                    : O.paused()
                    ? ve || Wa(O, Ce.direction < 0, 1)
                    : Wa(O, O.reversed()));
            }),
            (Ce.labelToScroll = function (e) {
              return (
                (O &&
                  O.labels &&
                  (R || Ce.refresh() || R) +
                    (O.labels[e] / O.duration()) * N) ||
                0
              );
            }),
            (Ce.getTrailing = function (t) {
              var e = Ct.indexOf(Ce),
                r =
                  0 < Ce.direction ? Ct.slice(0, e).reverse() : Ct.slice(e + 1);
              return (
                ct(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < Ce.direction ? e.end <= R : e.start >= L;
              });
            }),
            (Ce.update = function (e, t, r) {
              if (!de || r || e) {
                var n,
                  i,
                  o,
                  a,
                  s,
                  l,
                  c,
                  u = !0 === rt ? re : Ce.scroll(),
                  f = e ? 0 : (u - R) / N,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = Ce.progress;
                if (
                  (t &&
                    ((B = D),
                    (D = de ? Ae() : u),
                    ue && ((_ = w), (w = O && !ve ? O.totalProgress() : d))),
                  P &&
                    ae &&
                    !Ke &&
                    !ot &&
                    st &&
                    (!d && R < u + ((u - B) / (at() - Ge)) * P
                      ? (d = 1e-4)
                      : 1 === d &&
                        L > u + ((u - B) / (at() - Ge)) * P &&
                        (d = 0.9999)),
                  d !== p && Ce.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = Ce.isActive = !!d && d < 1) != (!!p && p < 1)) ||
                      !!d != !!p),
                    (Ce.direction = p < d ? 1 : -1),
                    (Ce.progress = d),
                    a &&
                      !Ke &&
                      ((i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3),
                      ve &&
                        ((o =
                          (!s && "none" !== we[i + 1] && we[i + 1]) || we[i]),
                        (c =
                          O && ("complete" === o || "reset" === o || o in O)))),
                    ge &&
                      (s || c) &&
                      (c || E || !O) &&
                      (Ta(ge)
                        ? ge(Ce)
                        : Ce.getTrailing(ge).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    ve ||
                      (!ee || Ke || ot
                        ? O && O.totalProgress(d, !(!Ke || (!Me && !e)))
                        : (ee._dp._time - ee._start !== ee._time &&
                            ee.render(ee._dp._time - ee._start),
                          ee.resetTo
                            ? ee.resetTo("totalProgress", d, O._tTime / O._tDur)
                            : ((ee.vars.totalProgress = d),
                              ee.invalidate().restart()))),
                    ae)
                  )
                    if ((e && se && (U.style[se + he.os2] = m), ye)) {
                      if (a) {
                        if (
                          ((l =
                            !e && p < d && u < L + 1 && u + 1 >= Qa(be, he)),
                          fe)
                        )
                          if (e || (!n && !l)) oc(ae, U);
                          else {
                            var g = wt(ae, !0),
                              h = u - R;
                            oc(
                              ae,
                              Je,
                              g.top + (he === ze ? h : 0) + xt,
                              g.left + (he === ze ? 0 : h) + xt
                            );
                          }
                        Mt(n || l ? W : V),
                          ($ && d < 1 && n) || b(j + (1 !== d || l ? 0 : Q));
                      }
                    } else b(Ia(j + Q * d));
                  !ue || A.tween || Ke || ot || te.restart(!0),
                    S &&
                      (s || (ce && d && (d < 1 || !tt))) &&
                      Ve(S.targets).forEach(function (e) {
                        return e.classList[n || ce ? "add" : "remove"](
                          S.className
                        );
                      }),
                    !C || ve || e || C(Ce),
                    a && !Ke
                      ? (ve &&
                          (c &&
                            ("complete" === o
                              ? O.pause().totalProgress(1)
                              : "reset" === o
                              ? O.restart(!0).pause()
                              : "restart" === o
                              ? O.restart(!0)
                              : O[o]()),
                          C && C(Ce)),
                        (!s && tt) ||
                          (k && s && Xa(Ce, k),
                          xe[i] && Xa(Ce, xe[i]),
                          ce && (1 === d ? Ce.kill(!1, 1) : (xe[i] = 0)),
                          s || (xe[(i = 1 === d ? 1 : 3)] && Xa(Ce, xe[i]))),
                        pe &&
                          !n &&
                          Math.abs(Ce.getVelocity()) > (Ua(pe) ? pe : 2500) &&
                          (Wa(Ce.callbackAnimation),
                          ee
                            ? ee.progress(1)
                            : Wa(O, "reverse" === o ? 1 : !d, 1)))
                      : ve && C && !Ke && C(Ce);
                }
                if (x) {
                  var v = de
                    ? (u / de.duration()) * (de._caScrollDist || 0)
                    : u;
                  y(v + (Y._isFlipped ? 1 : 0)), x(v);
                }
                T && T((-u / de.duration()) * (de._caScrollDist || 0));
              }
            }),
            (Ce.enable = function (e, t) {
              Ce.enabled ||
                ((Ce.enabled = !0),
                wb(be, "resize", Lb),
                me || wb(be, "scroll", Jb),
                Se && wb(ScrollTrigger, "refreshInit", Se),
                !1 !== e && ((Ce.progress = Oe = 0), (D = B = Pe = Ae())),
                !1 !== t && Ce.refresh());
            }),
            (Ce.getTween = function (e) {
              return e && A ? A.tween : ee;
            }),
            (Ce.setPositions = function (e, t, r, n) {
              if (de) {
                var i = de.scrollTrigger,
                  o = de.duration(),
                  a = i.end - i.start;
                (e = i.start + (a * e) / o), (t = i.start + (a * t) / o);
              }
              Ce.refresh(
                !1,
                !1,
                {
                  start: Da(e, r && !!Ce._startClamp),
                  end: Da(t, r && !!Ce._endClamp),
                },
                n
              ),
                Ce.update();
            }),
            (Ce.adjustPinSpacing = function (e) {
              if (Z && e) {
                var t = Z.indexOf(he.d) + 1;
                (Z[t] = parseFloat(Z[t]) + e + xt),
                  (Z[1] = parseFloat(Z[1]) + e + xt),
                  Mt(Z);
              }
            }),
            (Ce.disable = function (e, t) {
              if (
                Ce.enabled &&
                (!1 !== e && Ce.revert(!0, !0),
                (Ce.enabled = Ce.isActive = !1),
                t || (ee && ee.pause()),
                (re = 0),
                n && (n.uncache = 1),
                Se && xb(ScrollTrigger, "refreshInit", Se),
                te && (te.pause(), A.tween && A.tween.kill() && (A.tween = 0)),
                !me)
              ) {
                for (var r = Ct.length; r--; )
                  if (Ct[r].scroller === be && Ct[r] !== Ce) return;
                xb(be, "resize", Lb), me || xb(be, "scroll", Jb);
              }
            }),
            (Ce.kill = function (e, t) {
              Ce.disable(e, t), ee && !t && ee.kill(), a && delete St[a];
              var r = Ct.indexOf(Ce);
              0 <= r && Ct.splice(r, 1),
                r === Qe && 0 < Pt && Qe--,
                (r = 0),
                Ct.forEach(function (e) {
                  return e.scroller === Ce.scroller && (r = 1);
                }),
                r || rt || (Ce.scroll.rec = 0),
                O &&
                  ((O.scrollTrigger = null),
                  e && O.revert({ kill: !1 }),
                  t || O.kill()),
                q &&
                  [q, I, Y, F].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                it === Ce && (it = 0),
                ae &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  Ct.forEach(function (e) {
                    return e.pin === ae && r++;
                  }),
                  r || (n.spacer = 0)),
                M.onKill && M.onKill(Ce);
            }),
            Ct.push(Ce),
            Ce.enable(!1, !1),
            o && o(Ce),
            O && O.add && !N)
          ) {
            var v = Ce.update;
            (Ce.update = function () {
              (Ce.update = v), qe.cache++, R || L || Ce.refresh();
            }),
              He.delayedCall(0.01, Ce.update),
              (N = 0.01),
              (R = L = 0);
          } else Ce.refresh();
          ae &&
            (function _queueRefreshAll() {
              if (nt !== kt) {
                var e = (nt = kt);
                requestAnimationFrame(function () {
                  return e === kt && Et(!0);
                });
              }
            })();
        } else this.update = this.refresh = this.kill = Ha;
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          s ||
            ((He = e || Ka()),
            Ja() && window.document && ScrollTrigger.enable(),
            (s = lt)),
          s
        );
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) Tt[t] = e[t];
        return Tt;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (lt = 0),
          Ct.forEach(function (e) {
            return e[r ? "kill" : "disable"](t);
          }),
          xb(Ne, "wheel", Jb),
          xb(Xe, "scroll", Jb),
          clearInterval(u),
          xb(Xe, "touchcancel", Ha),
          xb(Je, "touchstart", Ha),
          vb(xb, Xe, "pointerdown,touchstart,mousedown", Fa),
          vb(xb, Xe, "pointerup,touchend,mouseup", Ga),
          c.kill(),
          Ra(xb);
        for (var e = 0; e < qe.length; e += 3)
          yb(xb, qe[e], qe[e + 1]), yb(xb, qe[e], qe[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((Ne = window),
          (Xe = document),
          (We = Xe.documentElement),
          (Je = Xe.body),
          He &&
            ((Ve = He.utils.toArray),
            (Ue = He.utils.clamp),
            (x = He.core.context || Ha),
            ($e = He.core.suppressOverwrites || Ha),
            (w = Ne.history.scrollRestoration || "auto"),
            (Q = Ne.pageYOffset || 0),
            He.core.globals("ScrollTrigger", ScrollTrigger),
            Je))
        ) {
          (lt = 1),
            ((_ = document.createElement("div")).style.height = "100vh"),
            (_.style.position = "absolute"),
            Yb(),
            (function _rafBugFix() {
              return lt && requestAnimationFrame(_rafBugFix);
            })(),
            k.register(He),
            (ScrollTrigger.isTouch = k.isTouch),
            (E =
              k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (b = 1 === k.isTouch),
            wb(Ne, "wheel", Jb),
            (l = [Ne, Xe, We, Je]),
            He.matchMedia
              ? ((ScrollTrigger.matchMedia = function (e) {
                  var t,
                    r = He.matchMedia();
                  for (t in e) r.add(t, e[t]);
                  return r;
                }),
                He.addEventListener("matchMediaInit", function () {
                  return Sb();
                }),
                He.addEventListener("matchMediaRevert", function () {
                  return Rb();
                }),
                He.addEventListener("matchMedia", function () {
                  Et(0, 1), U("matchMedia");
                }),
                He.matchMedia().add("(orientation: portrait)", function () {
                  return Kb(), Kb;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Kb(),
            wb(Xe, "scroll", Jb);
          var e,
            t,
            r = Je.hasAttribute("style"),
            n = Je.style,
            i = n.borderTopStyle,
            o = He.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function value() {
                  return this.time(-0.01, !0);
                },
              }),
              n.borderTopStyle = "solid",
              e = wt(Je),
              ze.m = Math.round(e.top + ze.sc()) || 0,
              Fe.m = Math.round(e.left + Fe.sc()) || 0,
              i ? (n.borderTopStyle = i) : n.removeProperty("border-top-style"),
              r || (Je.setAttribute("style", ""), Je.removeAttribute("style")),
              u = setInterval(Ib, 250),
              He.delayedCall(0.5, function () {
                return (ot = 0);
              }),
              wb(Xe, "touchcancel", Ha),
              wb(Je, "touchstart", Ha),
              vb(wb, Xe, "pointerdown,touchstart,mousedown", Fa),
              vb(wb, Xe, "pointerup,touchend,mouseup", Ga),
              f = He.utils.checkPrefix("transform"),
              ee.push(f),
              s = at(),
              c = He.delayedCall(0.2, Et).pause(),
              g = [
                Xe,
                "visibilitychange",
                function () {
                  var e = Ne.innerWidth,
                    t = Ne.innerHeight;
                  Xe.hidden ? ((d = e), (p = t)) : (d === e && p === t) || Lb();
                },
                Xe,
                "DOMContentLoaded",
                Et,
                Ne,
                "load",
                Et,
                Ne,
                "resize",
                Lb,
              ],
              Ra(wb),
              Ct.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < qe.length;
            t += 3
          )
            yb(xb, qe[t], qe[t + 1]), yb(xb, qe[t], qe[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (tt = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(u)) || ((u = t) && setInterval(Ib, t)),
          "ignoreMobileResize" in e &&
            (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (Ra(xb) || Ra(wb, e.autoRefreshEvents || "none"),
            (h = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = J(e),
          n = qe.indexOf(r),
          i = La(r);
        ~n && qe.splice(n, i ? 6 : 2),
          t && (i ? Ie.unshift(Ne, t, Je, t, We, t) : Ie.unshift(r, t));
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        Ct.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (ct(e) ? J(e) : e).getBoundingClientRect(),
          i = n[r ? ft : dt] * t || 0;
        return r
          ? 0 < n.right - i && n.left + i < Ne.innerWidth
          : 0 < n.bottom - i && n.top + i < Ne.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        ct(e) && (e = J(e));
        var n = e.getBoundingClientRect(),
          i = n[r ? ft : dt],
          o =
            null == t
              ? i / 2
              : t in H
              ? H[t] * i
              : ~t.indexOf("%")
              ? (parseFloat(t) * i) / 100
              : parseFloat(t) || 0;
        return r ? (n.left + o) / Ne.innerWidth : (n.top + o) / Ne.innerHeight;
      }),
      (ScrollTrigger.killAll = function killAll(e) {
        if (
          (Ct.slice(0).forEach(function (e) {
            return "ScrollSmoother" !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = W.killAll || [];
          (W = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    s ||
      ScrollTrigger.register(He) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      x(this),
      this.init(e, t);
  }
  (ne.version = "3.12.7"),
    (ne.saveStyles = function (e) {
      return e
        ? Ve(e).forEach(function (e) {
            if (e && e.style) {
              var t = j.indexOf(e);
              0 <= t && j.splice(t, 5),
                j.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  He.core.getCache(e),
                  x()
                );
            }
          })
        : j;
    }),
    (ne.revert = function (e, t) {
      return Sb(!e, t);
    }),
    (ne.create = function (e, t) {
      return new ne(e, t);
    }),
    (ne.refresh = function (e) {
      return e ? Lb(!0) : (s || ne.register()) && Et(!0);
    }),
    (ne.update = function (e) {
      return ++qe.cache && Z(!0 === e ? 2 : 0);
    }),
    (ne.clearScrollMemory = Tb),
    (ne.maxScroll = function (e, t) {
      return Qa(e, t ? Fe : ze);
    }),
    (ne.getScrollFunc = function (e, t) {
      return K(J(e), t ? Fe : ze);
    }),
    (ne.getById = function (e) {
      return St[e];
    }),
    (ne.getAll = function () {
      return Ct.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (ne.isScrolling = function () {
      return !!st;
    }),
    (ne.snapDirectional = tb),
    (ne.addEventListener = function (e, t) {
      var r = W[e] || (W[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (ne.removeEventListener = function (e, t) {
      var r = W[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (ne.batch = function (e, t) {
      function Ep(e, t) {
        var r = [],
          n = [],
          i = He.delayedCall(o, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || i.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && i.progress(1);
        };
      }
      var r,
        n = [],
        i = {},
        o = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        i[r] =
          "on" === r.substr(0, 2) && Ta(t[r]) && "onRefreshInit" !== r
            ? Ep(0, t[r])
            : t[r];
      return (
        Ta(a) &&
          ((a = a()),
          wb(ne, "refresh", function () {
            return (a = t.batchMax());
          })),
        Ve(e).forEach(function (e) {
          var t = {};
          for (r in i) t[r] = i[r];
          (t.trigger = e), n.push(ne.create(t));
        }),
        n
      );
    });
  function tc(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  }
  function uc(e, t) {
    !0 === t
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          !0 === t
            ? "auto"
            : t
            ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === We && uc(Je, t);
  }
  function wc(e) {
    var t,
      r = e.event,
      n = e.target,
      i = e.axis,
      o = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = o._gsap || He.core.getCache(o),
      s = at();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (
        ;
        o &&
        o !== Je &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          (!oe[(t = mb(o)).overflowY] && !oe[t.overflowX]));

      )
        o = o.parentNode;
      (a._isScroll =
        o &&
        o !== n &&
        !La(o) &&
        (oe[(t = mb(o)).overflowY] || oe[t.overflowX])),
        (a._isScrollT = s);
    }
    (!a._isScroll && "x" !== i) || (r.stopPropagation(), (r._gsapAllow = !0));
  }
  function xc(e, t, r, n) {
    return k.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && wc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && wb(Xe, k.eventTypes[0], se, !1, !0);
      },
      onDisable: function onDisable() {
        return xb(Xe, k.eventTypes[0], se, !0);
      },
    });
  }
  function Bc(e) {
    function Bq() {
      return (i = !1);
    }
    function Eq() {
      (o = Qa(p, ze)),
        (S = Ue(E ? 1 : 0, o)),
        f && (C = Ue(0, Qa(p, Fe))),
        (l = kt);
    }
    function Fq() {
      (v._gsap.y = Ia(parseFloat(v._gsap.y) + b.offset) + "px"),
        (v.style.transform =
          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
          parseFloat(v._gsap.y) +
          ", 0, 1)"),
        (b.offset = b.cacheID = 0);
    }
    function Lq() {
      Eq(),
        a.isActive() &&
          a.vars.scrollY > o &&
          (b() > o ? a.progress(1) && b(o) : a.resetTo("scrollY", o));
    }
    Va(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n,
      o,
      l,
      i,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = e.onRelease,
      p = J(e.target) || We,
      g = He.core.globals().ScrollSmoother,
      h = g && g.get(),
      v =
        E &&
        ((e.content && J(e.content)) ||
          (h && !1 !== e.content && !h.smooth() && h.content())),
      b = K(p, ze),
      m = K(p, Fe),
      y = 1,
      x =
        (k.isTouch && Ne.visualViewport
          ? Ne.visualViewport.scale * Ne.visualViewport.width
          : Ne.outerWidth) / Ne.innerWidth,
      w = 0,
      _ = Ta(t)
        ? function () {
            return t(n);
          }
        : function () {
            return t || 2.8;
          },
      T = xc(p, e.type, !0, r),
      C = Ha,
      S = Ha;
    return (
      v && He.set(v, { y: "+=0" }),
      (e.ignoreCheck = function (e) {
        return (
          (E &&
            "touchmove" === e.type &&
            (function ignoreDrag() {
              if (i) {
                requestAnimationFrame(Bq);
                var e = Ia(n.deltaY / 2),
                  t = S(b.v - e);
                if (v && t !== b.v + b.offset) {
                  b.offset = t - b.v;
                  var r = Ia((parseFloat(v && v._gsap.y) || 0) - b.offset);
                  (v.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    r +
                    ", 0, 1)"),
                    (v._gsap.y = r + "px"),
                    (b.cacheID = qe.cache),
                    Z();
                }
                return !0;
              }
              b.offset && Fq(), (i = !0);
            })()) ||
          (1.05 < y && "touchstart" !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        i = !1;
        var e = y;
        (y = Ia(((Ne.visualViewport && Ne.visualViewport.scale) || 1) / x)),
          a.pause(),
          e !== y && uc(p, 1.01 < y || (!f && "x")),
          (c = m()),
          (u = b()),
          Eq(),
          (l = kt);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((b.offset && Fq(), t)) {
            qe.cache++;
            var r,
              n,
              i = _();
            f &&
              ((n = (r = m()) + (0.05 * i * -e.velocityX) / 0.227),
              (i *= tc(m, r, n, Qa(p, Fe))),
              (a.vars.scrollX = C(n))),
              (n = (r = b()) + (0.05 * i * -e.velocityY) / 0.227),
              (i *= tc(b, r, n, Qa(p, ze))),
              (a.vars.scrollY = S(n)),
              a.invalidate().duration(i).play(0.01),
              ((E && a.vars.scrollY >= o) || o - 1 <= r) &&
                He.to({}, { onUpdate: Lq, duration: i });
          } else s.restart(!0);
          d && d(e);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < at() - w && ((l = 0), (w = at()));
      }),
      (e.onChange = function (e, t, r, n, i) {
        if (
          (kt !== l && Eq(),
          t && f && m(C(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])),
          r)
        ) {
          b.offset && Fq();
          var o = i[2] === r,
            a = o ? u + e.startY - e.y : b() + r - i[1],
            s = S(a);
          o && a !== s && (u += s - a), b(s);
        }
        (r || t) && Z();
      }),
      (e.onEnable = function () {
        uc(p, !f && "x"),
          ne.addEventListener("refresh", Lq),
          wb(Ne, "resize", Lq),
          b.smooth &&
            ((b.target.style.scrollBehavior = "auto"),
            (b.smooth = m.smooth = !1)),
          T.enable();
      }),
      (e.onDisable = function () {
        uc(p, !0),
          xb(Ne, "resize", Lq),
          ne.removeEventListener("refresh", Lq),
          T.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new k(e)).iOS = E) && !b() && b(1),
      E && He.ticker.add(Ha),
      (s = n._dc),
      (a = He.to(n, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: f ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: pc(b, b(), function () {
            return a.pause();
          }),
        },
        onUpdate: Z,
        onComplete: s.vars.onComplete,
      })),
      n
    );
  }
  var ie,
    oe = { auto: 1, scroll: 1 },
    ae = /(input|label|select|textarea)/i,
    se = function _captureInputs(e) {
      var t = ae.test(e.target.tagName);
      (t || ie) && ((e._gsapAllow = !0), (ie = t));
    };
  (ne.sort = function (e) {
    if (Ta(e)) return Ct.sort(e);
    var t = Ne.pageYOffset || 0;
    return (
      ne.getAll().forEach(function (e) {
        return (e._sortY = e.trigger
          ? t + e.trigger.getBoundingClientRect().top
          : e.start + Ne.innerHeight);
      }),
      Ct.sort(
        e ||
          function (e, t) {
            return (
              -1e6 * (e.vars.refreshPriority || 0) +
              (e.vars.containerAnimation ? 1e6 : e._sortY) -
              ((t.vars.containerAnimation ? 1e6 : t._sortY) +
                -1e6 * (t.vars.refreshPriority || 0))
            );
          }
      )
    );
  }),
    (ne.observe = function (e) {
      return new k(e);
    }),
    (ne.normalizeScroll = function (e) {
      if (void 0 === e) return v;
      if (!0 === e && v) return v.enable();
      if (!1 === e) return v && v.kill(), void (v = e);
      var t = e instanceof k ? e : Bc(e);
      return v && v.target === t.target && v.kill(), La(t.target) && (v = t), t;
    }),
    (ne.core = {
      _getVelocityProp: L,
      _inputObserver: xc,
      _scrollers: qe,
      _proxies: Ie,
      bridge: {
        ss: function ss() {
          st || U("scrollStart"), (st = at());
        },
        ref: function ref() {
          return Ke;
        },
      },
    }),
    Ka() && He.registerPlugin(ne),
    (e.ScrollTrigger = ne),
    (e.default = ne);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
