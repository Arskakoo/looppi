(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function u0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Pa = { exports: {} },
  wl = {},
  za = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ur = Symbol.for("react.element"),
  a0 = Symbol.for("react.portal"),
  s0 = Symbol.for("react.fragment"),
  c0 = Symbol.for("react.strict_mode"),
  d0 = Symbol.for("react.profiler"),
  f0 = Symbol.for("react.provider"),
  p0 = Symbol.for("react.context"),
  m0 = Symbol.for("react.forward_ref"),
  h0 = Symbol.for("react.suspense"),
  v0 = Symbol.for("react.memo"),
  g0 = Symbol.for("react.lazy"),
  bi = Symbol.iterator;
function y0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bi && e[bi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Aa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ma = Object.assign,
  Oa = {};
function gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Aa);
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function La() {}
La.prototype = gn.prototype;
function li(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Aa);
}
var oi = (li.prototype = new La());
oi.constructor = li;
Ma(oi, gn.prototype);
oi.isPureReactComponent = !0;
var eu = Array.isArray,
  Ta = Object.prototype.hasOwnProperty,
  ii = { current: null },
  Ra = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fa(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ta.call(t, r) && !Ra.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ur,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ii.current,
  };
}
function w0(e, t) {
  return {
    $$typeof: ur,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ui(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ur;
}
function x0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var tu = /\/+/g;
function Fl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? x0("" + e.key)
    : t.toString(36);
}
function Tr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ur:
          case a0:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Fl(i, 0) : r),
      eu(l)
        ? ((n = ""),
          e != null && (n = e.replace(tu, "$&/") + "/"),
          Tr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (ui(l) &&
            (l = w0(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(tu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), eu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Fl(o, u);
      i += Tr(o, t, n, a, l);
    }
  else if (((a = y0(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Fl(o, u++)), (i += Tr(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function vr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Tr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function k0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null },
  Rr = { transition: null },
  S0 = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: Rr,
    ReactCurrentOwner: ii,
  };
T.Children = {
  map: vr,
  forEach: function (e, t, n) {
    vr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ui(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = gn;
T.Fragment = s0;
T.Profiler = d0;
T.PureComponent = li;
T.StrictMode = c0;
T.Suspense = h0;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = S0;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ma({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ii.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Ta.call(t, a) &&
        !Ra.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: ur, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: p0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: f0, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = Fa;
T.createFactory = function (e) {
  var t = Fa.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: m0, render: e };
};
T.isValidElement = ui;
T.lazy = function (e) {
  return { $$typeof: g0, _payload: { _status: -1, _result: e }, _init: k0 };
};
T.memo = function (e, t) {
  return { $$typeof: v0, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Rr.transition;
  Rr.transition = {};
  try {
    e();
  } finally {
    Rr.transition = t;
  }
};
T.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
T.useContext = function (e) {
  return pe.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
T.useId = function () {
  return pe.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return pe.current.useRef(e);
};
T.useState = function (e) {
  return pe.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return pe.current.useTransition();
};
T.version = "18.2.0";
za.exports = T;
var V = za.exports;
const g = u0(V);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var E0 = V,
  C0 = Symbol.for("react.element"),
  j0 = Symbol.for("react.fragment"),
  N0 = Object.prototype.hasOwnProperty,
  _0 = E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  P0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function $a(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) N0.call(t, r) && !P0.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: C0,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: _0.current,
  };
}
wl.Fragment = j0;
wl.jsx = $a;
wl.jsxs = $a;
Pa.exports = wl;
var v = Pa.exports,
  ao = {},
  Ia = { exports: {} },
  Ce = {},
  Va = { exports: {} },
  Da = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, z) {
    var M = E.length;
    E.push(z);
    e: for (; 0 < M; ) {
      var I = (M - 1) >>> 1,
        Q = E[I];
      if (0 < l(Q, z)) (E[I] = z), (E[M] = Q), (M = I);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var z = E[0],
      M = E.pop();
    if (M !== z) {
      E[0] = M;
      e: for (var I = 0, Q = E.length, mr = Q >>> 1; I < mr; ) {
        var Nt = 2 * (I + 1) - 1,
          Rl = E[Nt],
          _t = Nt + 1,
          hr = E[_t];
        if (0 > l(Rl, M))
          _t < Q && 0 > l(hr, Rl)
            ? ((E[I] = hr), (E[_t] = M), (I = _t))
            : ((E[I] = Rl), (E[Nt] = M), (I = Nt));
        else if (_t < Q && 0 > l(hr, M)) (E[I] = hr), (E[_t] = M), (I = _t);
        else break e;
      }
    }
    return z;
  }
  function l(E, z) {
    var M = E.sortIndex - z.sortIndex;
    return M !== 0 ? M : E.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    c = [],
    m = 1,
    h = null,
    p = 3,
    k = !1,
    S = !1,
    x = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(E) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= E)
        r(c), (z.sortIndex = z.expirationTime), t(a, z);
      else break;
      z = n(c);
    }
  }
  function y(E) {
    if (((x = !1), f(E), !S))
      if (n(a) !== null) (S = !0), nt(C);
      else {
        var z = n(c);
        z !== null && Zt(y, z.startTime - E);
      }
  }
  function C(E, z) {
    (S = !1), x && ((x = !1), d(P), (P = -1)), (k = !0);
    var M = p;
    try {
      for (
        f(z), h = n(a);
        h !== null && (!(h.expirationTime > z) || (E && !ce()));

      ) {
        var I = h.callback;
        if (typeof I == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var Q = I(h.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Q == "function" ? (h.callback = Q) : h === n(a) && r(a),
            f(z);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var mr = !0;
      else {
        var Nt = n(c);
        Nt !== null && Zt(y, Nt.startTime - z), (mr = !1);
      }
      return mr;
    } finally {
      (h = null), (p = M), (k = !1);
    }
  }
  var N = !1,
    _ = null,
    P = -1,
    H = 5,
    L = -1;
  function ce() {
    return !(e.unstable_now() - L < H);
  }
  function F() {
    if (_ !== null) {
      var E = e.unstable_now();
      L = E;
      var z = !0;
      try {
        z = _(!0, E);
      } finally {
        z ? tt() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var tt;
  if (typeof s == "function")
    tt = function () {
      s(F);
    };
  else if (typeof MessageChannel < "u") {
    var jt = new MessageChannel(),
      pr = jt.port2;
    (jt.port1.onmessage = F),
      (tt = function () {
        pr.postMessage(null);
      });
  } else
    tt = function () {
      A(F, 0);
    };
  function nt(E) {
    (_ = E), N || ((N = !0), tt());
  }
  function Zt(E, z) {
    P = A(function () {
      E(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || k || ((S = !0), nt(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (E) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var M = p;
      p = z;
      try {
        return E();
      } finally {
        p = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, z) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var M = p;
      p = E;
      try {
        return z();
      } finally {
        p = M;
      }
    }),
    (e.unstable_scheduleCallback = function (E, z, M) {
      var I = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? I + M : I))
          : (M = I),
        E)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = M + Q),
        (E = {
          id: m++,
          callback: z,
          priorityLevel: E,
          startTime: M,
          expirationTime: Q,
          sortIndex: -1,
        }),
        M > I
          ? ((E.sortIndex = M),
            t(c, E),
            n(a) === null &&
              E === n(c) &&
              (x ? (d(P), (P = -1)) : (x = !0), Zt(y, M - I)))
          : ((E.sortIndex = Q), t(a, E), S || k || ((S = !0), nt(C))),
        E
      );
    }),
    (e.unstable_shouldYield = ce),
    (e.unstable_wrapCallback = function (E) {
      var z = p;
      return function () {
        var M = p;
        p = z;
        try {
          return E.apply(this, arguments);
        } finally {
          p = M;
        }
      };
    });
})(Da);
Va.exports = Da;
var z0 = Va.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ha = V,
  Ee = z0;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ua = new Set(),
  Bn = {};
function Ht(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Bn[e] = t, e = 0; e < t.length; e++) Ua.add(t[e]);
}
var Xe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  so = Object.prototype.hasOwnProperty,
  A0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  nu = {},
  ru = {};
function M0(e) {
  return so.call(ru, e)
    ? !0
    : so.call(nu, e)
    ? !1
    : A0.test(e)
    ? (ru[e] = !0)
    : ((nu[e] = !0), !1);
}
function O0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function L0(e, t, n, r) {
  if (t === null || typeof t > "u" || O0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function me(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ai = /[\-:]([a-z])/g;
function si(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ai, si);
    oe[t] = new me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ai, si);
    oe[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ai, si);
  oe[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ci(e, t, n, r) {
  var l = oe.hasOwnProperty(t) ? oe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (L0(t, n, l, r) && (n = null),
    r || l === null
      ? M0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = Ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gr = Symbol.for("react.element"),
  Wt = Symbol.for("react.portal"),
  Qt = Symbol.for("react.fragment"),
  di = Symbol.for("react.strict_mode"),
  co = Symbol.for("react.profiler"),
  Za = Symbol.for("react.provider"),
  Ba = Symbol.for("react.context"),
  fi = Symbol.for("react.forward_ref"),
  fo = Symbol.for("react.suspense"),
  po = Symbol.for("react.suspense_list"),
  pi = Symbol.for("react.memo"),
  it = Symbol.for("react.lazy"),
  Wa = Symbol.for("react.offscreen"),
  lu = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lu && e[lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  $l;
function Mn(e) {
  if ($l === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $l = (t && t[1]) || "";
    }
  return (
    `
` +
    $l +
    e
  );
}
var Il = !1;
function Vl(e, t) {
  if (!e || Il) return "";
  Il = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Il = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mn(e) : "";
}
function T0(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn("Lazy");
    case 13:
      return Mn("Suspense");
    case 19:
      return Mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Vl(e.type, !1)), e;
    case 11:
      return (e = Vl(e.type.render, !1)), e;
    case 1:
      return (e = Vl(e.type, !0)), e;
    default:
      return "";
  }
}
function mo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qt:
      return "Fragment";
    case Wt:
      return "Portal";
    case co:
      return "Profiler";
    case di:
      return "StrictMode";
    case fo:
      return "Suspense";
    case po:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ba:
        return (e.displayName || "Context") + ".Consumer";
      case Za:
        return (e._context.displayName || "Context") + ".Provider";
      case fi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pi:
        return (
          (t = e.displayName || null), t !== null ? t : mo(e.type) || "Memo"
        );
      case it:
        (t = e._payload), (e = e._init);
        try {
          return mo(e(t));
        } catch {}
    }
  return null;
}
function R0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return mo(t);
    case 8:
      return t === di ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function xt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Qa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function F0(e) {
  var t = Qa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function yr(e) {
  e._valueTracker || (e._valueTracker = F0(e));
}
function Ka(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Qa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ho(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ou(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ga(e, t) {
  (t = t.checked), t != null && ci(e, "checked", t, !1);
}
function vo(e, t) {
  Ga(e, t);
  var n = xt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? go(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && go(e, t.type, xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function iu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function go(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var On = Array.isArray;
function rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function yo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function uu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (On(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: xt(n) };
}
function Ya(e, t) {
  var n = xt(t.value),
    r = xt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Xa(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wr,
  Ja = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wr = wr || document.createElement("div"),
          wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  $0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function (e) {
  $0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rn[t] = Rn[e]);
  });
});
function qa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rn.hasOwnProperty(e) && Rn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ba(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = qa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var I0 = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xo(e, t) {
  if (t) {
    if (I0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function ko(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var So = null;
function mi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Eo = null,
  ln = null,
  on = null;
function su(e) {
  if ((e = cr(e))) {
    if (typeof Eo != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Cl(t)), Eo(e.stateNode, e.type, t));
  }
}
function es(e) {
  ln ? (on ? on.push(e) : (on = [e])) : (ln = e);
}
function ts() {
  if (ln) {
    var e = ln,
      t = on;
    if (((on = ln = null), su(e), t)) for (e = 0; e < t.length; e++) su(t[e]);
  }
}
function ns(e, t) {
  return e(t);
}
function rs() {}
var Dl = !1;
function ls(e, t, n) {
  if (Dl) return e(t, n);
  Dl = !0;
  try {
    return ns(e, t, n);
  } finally {
    (Dl = !1), (ln !== null || on !== null) && (rs(), ts());
  }
}
function Qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var Co = !1;
if (Xe)
  try {
    var Sn = {};
    Object.defineProperty(Sn, "passive", {
      get: function () {
        Co = !0;
      },
    }),
      window.addEventListener("test", Sn, Sn),
      window.removeEventListener("test", Sn, Sn);
  } catch {
    Co = !1;
  }
function V0(e, t, n, r, l, o, i, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Fn = !1,
  Kr = null,
  Gr = !1,
  jo = null,
  D0 = {
    onError: function (e) {
      (Fn = !0), (Kr = e);
    },
  };
function H0(e, t, n, r, l, o, i, u, a) {
  (Fn = !1), (Kr = null), V0.apply(D0, arguments);
}
function U0(e, t, n, r, l, o, i, u, a) {
  if ((H0.apply(this, arguments), Fn)) {
    if (Fn) {
      var c = Kr;
      (Fn = !1), (Kr = null);
    } else throw Error(w(198));
    Gr || ((Gr = !0), (jo = c));
  }
}
function Ut(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function os(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function cu(e) {
  if (Ut(e) !== e) throw Error(w(188));
}
function Z0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ut(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return cu(l), e;
        if (o === r) return cu(l), t;
        o = o.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function is(e) {
  return (e = Z0(e)), e !== null ? us(e) : null;
}
function us(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = us(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var as = Ee.unstable_scheduleCallback,
  du = Ee.unstable_cancelCallback,
  B0 = Ee.unstable_shouldYield,
  W0 = Ee.unstable_requestPaint,
  J = Ee.unstable_now,
  Q0 = Ee.unstable_getCurrentPriorityLevel,
  hi = Ee.unstable_ImmediatePriority,
  ss = Ee.unstable_UserBlockingPriority,
  Yr = Ee.unstable_NormalPriority,
  K0 = Ee.unstable_LowPriority,
  cs = Ee.unstable_IdlePriority,
  xl = null,
  Ue = null;
function G0(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(xl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : J0,
  Y0 = Math.log,
  X0 = Math.LN2;
function J0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Y0(e) / X0) | 0)) | 0;
}
var xr = 64,
  kr = 4194304;
function Ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Xr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Ln(u)) : ((o &= i), o !== 0 && (r = Ln(o)));
  } else (i = n & ~l), i !== 0 ? (r = Ln(i)) : o !== 0 && (r = Ln(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Fe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function q0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function b0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Fe(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = q0(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function No(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ds() {
  var e = xr;
  return (xr <<= 1), !(xr & 4194240) && (xr = 64), e;
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ar(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fe(t)),
    (e[t] = n);
}
function ed(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Fe(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function vi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var $ = 0;
function fs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ps,
  gi,
  ms,
  hs,
  vs,
  _o = !1,
  Sr = [],
  ft = null,
  pt = null,
  mt = null,
  Kn = new Map(),
  Gn = new Map(),
  at = [],
  td =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function fu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Kn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gn.delete(t.pointerId);
  }
}
function En(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = cr(t)), t !== null && gi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function nd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ft = En(ft, e, t, n, r, l)), !0;
    case "dragenter":
      return (pt = En(pt, e, t, n, r, l)), !0;
    case "mouseover":
      return (mt = En(mt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Kn.set(o, En(Kn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Gn.set(o, En(Gn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function gs(e) {
  var t = At(e.target);
  if (t !== null) {
    var n = Ut(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = os(n)), t !== null)) {
          (e.blockedOn = t),
            vs(e.priority, function () {
              ms(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (So = r), n.target.dispatchEvent(r), (So = null);
    } else return (t = cr(n)), t !== null && gi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function pu(e, t, n) {
  Fr(e) && n.delete(t);
}
function rd() {
  (_o = !1),
    ft !== null && Fr(ft) && (ft = null),
    pt !== null && Fr(pt) && (pt = null),
    mt !== null && Fr(mt) && (mt = null),
    Kn.forEach(pu),
    Gn.forEach(pu);
}
function Cn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _o ||
      ((_o = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, rd)));
}
function Yn(e) {
  function t(l) {
    return Cn(l, e);
  }
  if (0 < Sr.length) {
    Cn(Sr[0], e);
    for (var n = 1; n < Sr.length; n++) {
      var r = Sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ft !== null && Cn(ft, e),
      pt !== null && Cn(pt, e),
      mt !== null && Cn(mt, e),
      Kn.forEach(t),
      Gn.forEach(t),
      n = 0;
    n < at.length;
    n++
  )
    (r = at[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); )
    gs(n), n.blockedOn === null && at.shift();
}
var un = et.ReactCurrentBatchConfig,
  Jr = !0;
function ld(e, t, n, r) {
  var l = $,
    o = un.transition;
  un.transition = null;
  try {
    ($ = 1), yi(e, t, n, r);
  } finally {
    ($ = l), (un.transition = o);
  }
}
function od(e, t, n, r) {
  var l = $,
    o = un.transition;
  un.transition = null;
  try {
    ($ = 4), yi(e, t, n, r);
  } finally {
    ($ = l), (un.transition = o);
  }
}
function yi(e, t, n, r) {
  if (Jr) {
    var l = Po(e, t, n, r);
    if (l === null) Jl(e, t, r, qr, n), fu(e, r);
    else if (nd(l, e, t, n, r)) r.stopPropagation();
    else if ((fu(e, r), t & 4 && -1 < td.indexOf(e))) {
      for (; l !== null; ) {
        var o = cr(l);
        if (
          (o !== null && ps(o),
          (o = Po(e, t, n, r)),
          o === null && Jl(e, t, r, qr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Jl(e, t, r, null, n);
  }
}
var qr = null;
function Po(e, t, n, r) {
  if (((qr = null), (e = mi(r)), (e = At(e)), e !== null))
    if (((t = Ut(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = os(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qr = e), null;
}
function ys(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Q0()) {
        case hi:
          return 1;
        case ss:
          return 4;
        case Yr:
        case K0:
          return 16;
        case cs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null,
  wi = null,
  $r = null;
function ws() {
  if ($r) return $r;
  var e,
    t = wi,
    n = t.length,
    r,
    l = "value" in ct ? ct.value : ct.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return ($r = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ir(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Er() {
  return !0;
}
function mu() {
  return !1;
}
function je(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Er
        : mu),
      (this.isPropagationStopped = mu),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Er));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Er));
      },
      persist: function () {},
      isPersistent: Er,
    }),
    t
  );
}
var yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xi = je(yn),
  sr = Y({}, yn, { view: 0, detail: 0 }),
  id = je(sr),
  Ul,
  Zl,
  jn,
  kl = Y({}, sr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ki,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== jn &&
            (jn && e.type === "mousemove"
              ? ((Ul = e.screenX - jn.screenX), (Zl = e.screenY - jn.screenY))
              : (Zl = Ul = 0),
            (jn = e)),
          Ul);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zl;
    },
  }),
  hu = je(kl),
  ud = Y({}, kl, { dataTransfer: 0 }),
  ad = je(ud),
  sd = Y({}, sr, { relatedTarget: 0 }),
  Bl = je(sd),
  cd = Y({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dd = je(cd),
  fd = Y({}, yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pd = je(fd),
  md = Y({}, yn, { data: 0 }),
  vu = je(md),
  hd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  vd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  gd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function yd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gd[e]) ? !!t[e] : !1;
}
function ki() {
  return yd;
}
var wd = Y({}, sr, {
    key: function (e) {
      if (e.key) {
        var t = hd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ki,
    charCode: function (e) {
      return e.type === "keypress" ? Ir(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ir(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xd = je(wd),
  kd = Y({}, kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  gu = je(kd),
  Sd = Y({}, sr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ki,
  }),
  Ed = je(Sd),
  Cd = Y({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jd = je(Cd),
  Nd = Y({}, kl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _d = je(Nd),
  Pd = [9, 13, 27, 32],
  Si = Xe && "CompositionEvent" in window,
  $n = null;
Xe && "documentMode" in document && ($n = document.documentMode);
var zd = Xe && "TextEvent" in window && !$n,
  xs = Xe && (!Si || ($n && 8 < $n && 11 >= $n)),
  yu = " ",
  wu = !1;
function ks(e, t) {
  switch (e) {
    case "keyup":
      return Pd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ss(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function Ad(e, t) {
  switch (e) {
    case "compositionend":
      return Ss(t);
    case "keypress":
      return t.which !== 32 ? null : ((wu = !0), yu);
    case "textInput":
      return (e = t.data), e === yu && wu ? null : e;
    default:
      return null;
  }
}
function Md(e, t) {
  if (Kt)
    return e === "compositionend" || (!Si && ks(e, t))
      ? ((e = ws()), ($r = wi = ct = null), (Kt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Od = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Od[e.type] : t === "textarea";
}
function Es(e, t, n, r) {
  es(r),
    (t = br(t, "onChange")),
    0 < t.length &&
      ((n = new xi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var In = null,
  Xn = null;
function Ld(e) {
  Ts(e, 0);
}
function Sl(e) {
  var t = Xt(e);
  if (Ka(t)) return e;
}
function Td(e, t) {
  if (e === "change") return t;
}
var Cs = !1;
if (Xe) {
  var Wl;
  if (Xe) {
    var Ql = "oninput" in document;
    if (!Ql) {
      var ku = document.createElement("div");
      ku.setAttribute("oninput", "return;"),
        (Ql = typeof ku.oninput == "function");
    }
    Wl = Ql;
  } else Wl = !1;
  Cs = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Su() {
  In && (In.detachEvent("onpropertychange", js), (Xn = In = null));
}
function js(e) {
  if (e.propertyName === "value" && Sl(Xn)) {
    var t = [];
    Es(t, Xn, e, mi(e)), ls(Ld, t);
  }
}
function Rd(e, t, n) {
  e === "focusin"
    ? (Su(), (In = t), (Xn = n), In.attachEvent("onpropertychange", js))
    : e === "focusout" && Su();
}
function Fd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Sl(Xn);
}
function $d(e, t) {
  if (e === "click") return Sl(t);
}
function Id(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function Vd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ie = typeof Object.is == "function" ? Object.is : Vd;
function Jn(e, t) {
  if (Ie(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!so.call(t, l) || !Ie(e[l], t[l])) return !1;
  }
  return !0;
}
function Eu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Cu(e, t) {
  var n = Eu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Eu(n);
  }
}
function Ns(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ns(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function _s() {
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function Ei(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Dd(e) {
  var t = _s(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ns(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ei(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Cu(n, o));
        var i = Cu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Hd = Xe && "documentMode" in document && 11 >= document.documentMode,
  Gt = null,
  zo = null,
  Vn = null,
  Ao = !1;
function ju(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ao ||
    Gt == null ||
    Gt !== Qr(r) ||
    ((r = Gt),
    "selectionStart" in r && Ei(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Vn && Jn(Vn, r)) ||
      ((Vn = r),
      (r = br(zo, "onSelect")),
      0 < r.length &&
        ((t = new xi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Gt))));
}
function Cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Yt = {
    animationend: Cr("Animation", "AnimationEnd"),
    animationiteration: Cr("Animation", "AnimationIteration"),
    animationstart: Cr("Animation", "AnimationStart"),
    transitionend: Cr("Transition", "TransitionEnd"),
  },
  Kl = {},
  Ps = {};
Xe &&
  ((Ps = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yt.animationend.animation,
    delete Yt.animationiteration.animation,
    delete Yt.animationstart.animation),
  "TransitionEvent" in window || delete Yt.transitionend.transition);
function El(e) {
  if (Kl[e]) return Kl[e];
  if (!Yt[e]) return e;
  var t = Yt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ps) return (Kl[e] = t[n]);
  return e;
}
var zs = El("animationend"),
  As = El("animationiteration"),
  Ms = El("animationstart"),
  Os = El("transitionend"),
  Ls = new Map(),
  Nu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function St(e, t) {
  Ls.set(e, t), Ht(t, [e]);
}
for (var Gl = 0; Gl < Nu.length; Gl++) {
  var Yl = Nu[Gl],
    Ud = Yl.toLowerCase(),
    Zd = Yl[0].toUpperCase() + Yl.slice(1);
  St(Ud, "on" + Zd);
}
St(zs, "onAnimationEnd");
St(As, "onAnimationIteration");
St(Ms, "onAnimationStart");
St("dblclick", "onDoubleClick");
St("focusin", "onFocus");
St("focusout", "onBlur");
St(Os, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Ht(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ht(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ht(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ht(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ht(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Tn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));
function _u(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), U0(r, t, void 0, e), (e.currentTarget = null);
}
function Ts(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          _u(l, u, c), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          _u(l, u, c), (o = a);
        }
    }
  }
  if (Gr) throw ((e = jo), (Gr = !1), (jo = null), e);
}
function Z(e, t) {
  var n = t[Ro];
  n === void 0 && (n = t[Ro] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Rs(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), Rs(n, e, r, t);
}
var jr = "_reactListening" + Math.random().toString(36).slice(2);
function qn(e) {
  if (!e[jr]) {
    (e[jr] = !0),
      Ua.forEach(function (n) {
        n !== "selectionchange" && (Bd.has(n) || Xl(n, !1, e), Xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jr] || ((t[jr] = !0), Xl("selectionchange", !1, t));
  }
}
function Rs(e, t, n, r) {
  switch (ys(t)) {
    case 1:
      var l = ld;
      break;
    case 4:
      l = od;
      break;
    default:
      l = yi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Co ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Jl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = At(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ls(function () {
    var c = o,
      m = mi(n),
      h = [];
    e: {
      var p = Ls.get(e);
      if (p !== void 0) {
        var k = xi,
          S = e;
        switch (e) {
          case "keypress":
            if (Ir(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = xd;
            break;
          case "focusin":
            (S = "focus"), (k = Bl);
            break;
          case "focusout":
            (S = "blur"), (k = Bl);
            break;
          case "beforeblur":
          case "afterblur":
            k = Bl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = hu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = ad;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Ed;
            break;
          case zs:
          case As:
          case Ms:
            k = dd;
            break;
          case Os:
            k = jd;
            break;
          case "scroll":
            k = id;
            break;
          case "wheel":
            k = _d;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = pd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = gu;
        }
        var x = (t & 4) !== 0,
          A = !x && e === "scroll",
          d = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var s = c, f; s !== null; ) {
          f = s;
          var y = f.stateNode;
          if (
            (f.tag === 5 &&
              y !== null &&
              ((f = y),
              d !== null && ((y = Qn(s, d)), y != null && x.push(bn(s, y, f)))),
            A)
          )
            break;
          s = s.return;
        }
        0 < x.length &&
          ((p = new k(p, S, null, n, m)), h.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          p &&
            n !== So &&
            (S = n.relatedTarget || n.fromElement) &&
            (At(S) || S[Je]))
        )
          break e;
        if (
          (k || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          k
            ? ((S = n.relatedTarget || n.toElement),
              (k = c),
              (S = S ? At(S) : null),
              S !== null &&
                ((A = Ut(S)), S !== A || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((k = null), (S = c)),
          k !== S)
        ) {
          if (
            ((x = hu),
            (y = "onMouseLeave"),
            (d = "onMouseEnter"),
            (s = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = gu),
              (y = "onPointerLeave"),
              (d = "onPointerEnter"),
              (s = "pointer")),
            (A = k == null ? p : Xt(k)),
            (f = S == null ? p : Xt(S)),
            (p = new x(y, s + "leave", k, n, m)),
            (p.target = A),
            (p.relatedTarget = f),
            (y = null),
            At(m) === c &&
              ((x = new x(d, s + "enter", S, n, m)),
              (x.target = f),
              (x.relatedTarget = A),
              (y = x)),
            (A = y),
            k && S)
          )
            t: {
              for (x = k, d = S, s = 0, f = x; f; f = Bt(f)) s++;
              for (f = 0, y = d; y; y = Bt(y)) f++;
              for (; 0 < s - f; ) (x = Bt(x)), s--;
              for (; 0 < f - s; ) (d = Bt(d)), f--;
              for (; s--; ) {
                if (x === d || (d !== null && x === d.alternate)) break t;
                (x = Bt(x)), (d = Bt(d));
              }
              x = null;
            }
          else x = null;
          k !== null && Pu(h, p, k, x, !1),
            S !== null && A !== null && Pu(h, A, S, x, !0);
        }
      }
      e: {
        if (
          ((p = c ? Xt(c) : window),
          (k = p.nodeName && p.nodeName.toLowerCase()),
          k === "select" || (k === "input" && p.type === "file"))
        )
          var C = Td;
        else if (xu(p))
          if (Cs) C = Id;
          else {
            C = Fd;
            var N = Rd;
          }
        else
          (k = p.nodeName) &&
            k.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = $d);
        if (C && (C = C(e, c))) {
          Es(h, C, n, m);
          break e;
        }
        N && N(e, p, c),
          e === "focusout" &&
            (N = p._wrapperState) &&
            N.controlled &&
            p.type === "number" &&
            go(p, "number", p.value);
      }
      switch (((N = c ? Xt(c) : window), e)) {
        case "focusin":
          (xu(N) || N.contentEditable === "true") &&
            ((Gt = N), (zo = c), (Vn = null));
          break;
        case "focusout":
          Vn = zo = Gt = null;
          break;
        case "mousedown":
          Ao = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ao = !1), ju(h, n, m);
          break;
        case "selectionchange":
          if (Hd) break;
        case "keydown":
        case "keyup":
          ju(h, n, m);
      }
      var _;
      if (Si)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Kt
          ? ks(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (xs &&
          n.locale !== "ko" &&
          (Kt || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Kt && (_ = ws())
            : ((ct = m),
              (wi = "value" in ct ? ct.value : ct.textContent),
              (Kt = !0))),
        (N = br(c, P)),
        0 < N.length &&
          ((P = new vu(P, e, null, n, m)),
          h.push({ event: P, listeners: N }),
          _ ? (P.data = _) : ((_ = Ss(n)), _ !== null && (P.data = _)))),
        (_ = zd ? Ad(e, n) : Md(e, n)) &&
          ((c = br(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new vu("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: c }),
            (m.data = _)));
    }
    Ts(h, t);
  });
}
function bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Qn(e, n)),
      o != null && r.unshift(bn(e, o, l)),
      (o = Qn(e, t)),
      o != null && r.push(bn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Bt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((a = Qn(n, o)), a != null && i.unshift(bn(n, a, u)))
        : l || ((a = Qn(n, o)), a != null && i.push(bn(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Wd = /\r\n?/g,
  Qd = /\u0000|\uFFFD/g;
function zu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Wd,
      `
`
    )
    .replace(Qd, "");
}
function Nr(e, t, n) {
  if (((t = zu(t)), zu(e) !== t && n)) throw Error(w(425));
}
function el() {}
var Mo = null,
  Oo = null;
function Lo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var To = typeof setTimeout == "function" ? setTimeout : void 0,
  Kd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Au = typeof Promise == "function" ? Promise : void 0,
  Gd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Au < "u"
      ? function (e) {
          return Au.resolve(null).then(e).catch(Yd);
        }
      : To;
function Yd(e) {
  setTimeout(function () {
    throw e;
  });
}
function ql(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Yn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Yn(t);
}
function ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Mu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var wn = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + wn,
  er = "__reactProps$" + wn,
  Je = "__reactContainer$" + wn,
  Ro = "__reactEvents$" + wn,
  Xd = "__reactListeners$" + wn,
  Jd = "__reactHandles$" + wn;
function At(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Je] || n[He])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Mu(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = Mu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cr(e) {
  return (
    (e = e[He] || e[Je]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Cl(e) {
  return e[er] || null;
}
var Fo = [],
  Jt = -1;
function Et(e) {
  return { current: e };
}
function B(e) {
  0 > Jt || ((e.current = Fo[Jt]), (Fo[Jt] = null), Jt--);
}
function D(e, t) {
  Jt++, (Fo[Jt] = e.current), (e.current = t);
}
var kt = {},
  se = Et(kt),
  ge = Et(!1),
  Ft = kt;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function tl() {
  B(ge), B(se);
}
function Ou(e, t, n) {
  if (se.current !== kt) throw Error(w(168));
  D(se, t), D(ge, n);
}
function Fs(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, R0(e) || "Unknown", l));
  return Y({}, n, r);
}
function nl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kt),
    (Ft = se.current),
    D(se, e),
    D(ge, ge.current),
    !0
  );
}
function Lu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = Fs(e, t, Ft)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(ge),
      B(se),
      D(se, e))
    : B(ge),
    D(ge, n);
}
var Qe = null,
  jl = !1,
  bl = !1;
function $s(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
function qd(e) {
  (jl = !0), $s(e);
}
function Ct() {
  if (!bl && Qe !== null) {
    bl = !0;
    var e = 0,
      t = $;
    try {
      var n = Qe;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Qe = null), (jl = !1);
    } catch (l) {
      throw (Qe !== null && (Qe = Qe.slice(e + 1)), as(hi, Ct), l);
    } finally {
      ($ = t), (bl = !1);
    }
  }
  return null;
}
var qt = [],
  bt = 0,
  rl = null,
  ll = 0,
  Ne = [],
  _e = 0,
  $t = null,
  Ke = 1,
  Ge = "";
function Pt(e, t) {
  (qt[bt++] = ll), (qt[bt++] = rl), (rl = e), (ll = t);
}
function Is(e, t, n) {
  (Ne[_e++] = Ke), (Ne[_e++] = Ge), (Ne[_e++] = $t), ($t = e);
  var r = Ke;
  e = Ge;
  var l = 32 - Fe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Fe(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ke = (1 << (32 - Fe(t) + l)) | (n << l) | r),
      (Ge = o + e);
  } else (Ke = (1 << o) | (n << l) | r), (Ge = e);
}
function Ci(e) {
  e.return !== null && (Pt(e, 1), Is(e, 1, 0));
}
function ji(e) {
  for (; e === rl; )
    (rl = qt[--bt]), (qt[bt] = null), (ll = qt[--bt]), (qt[bt] = null);
  for (; e === $t; )
    ($t = Ne[--_e]),
      (Ne[_e] = null),
      (Ge = Ne[--_e]),
      (Ne[_e] = null),
      (Ke = Ne[--_e]),
      (Ne[_e] = null);
}
var Se = null,
  ke = null,
  W = !1,
  Re = null;
function Vs(e, t) {
  var n = Pe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Tu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (ke = ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = $t !== null ? { id: Ke, overflow: Ge } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function $o(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Io(e) {
  if (W) {
    var t = ke;
    if (t) {
      var n = t;
      if (!Tu(e, t)) {
        if ($o(e)) throw Error(w(418));
        t = ht(n.nextSibling);
        var r = Se;
        t && Tu(e, t)
          ? Vs(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Se = e));
      }
    } else {
      if ($o(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Se = e);
    }
  }
}
function Ru(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function _r(e) {
  if (e !== Se) return !1;
  if (!W) return Ru(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Lo(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if ($o(e)) throw (Ds(), Error(w(418)));
    for (; t; ) Vs(e, t), (t = ht(t.nextSibling));
  }
  if ((Ru(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Se ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function Ds() {
  for (var e = ke; e; ) e = ht(e.nextSibling);
}
function fn() {
  (ke = Se = null), (W = !1);
}
function Ni(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var bd = et.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ol = Et(null),
  il = null,
  en = null,
  _i = null;
function Pi() {
  _i = en = il = null;
}
function zi(e) {
  var t = ol.current;
  B(ol), (e._currentValue = t);
}
function Vo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function an(e, t) {
  (il = e),
    (_i = en = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function Ae(e) {
  var t = e._currentValue;
  if (_i !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), en === null)) {
      if (il === null) throw Error(w(308));
      (en = e), (il.dependencies = { lanes: 0, firstContext: e });
    } else en = en.next = e;
  return t;
}
var Mt = null;
function Ai(e) {
  Mt === null ? (Mt = [e]) : Mt.push(e);
}
function Hs(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ai(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    qe(e, r)
  );
}
function qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ut = !1;
function Mi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Us(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ye(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      qe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ai(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    qe(e, n)
  );
}
function Vr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vi(e, n);
  }
}
function Fu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ul(e, t, n, r) {
  var l = e.updateQueue;
  ut = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      c = a.next;
    (a.next = null), i === null ? (o = c) : (i.next = c), (i = a);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== i &&
        (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
        (m.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (m = c = a = null), (u = o);
    do {
      var p = u.lane,
        k = u.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: k,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            x = u;
          switch (((p = t), (k = n), x.tag)) {
            case 1:
              if (((S = x.payload), typeof S == "function")) {
                h = S.call(k, h, p);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = x.payload),
                (p = typeof S == "function" ? S.call(k, h, p) : S),
                p == null)
              )
                break e;
              h = Y({}, h, p);
              break e;
            case 2:
              ut = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (k = {
          eventTime: k,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((c = m = k), (a = h)) : (m = m.next = k),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (a = h),
      (l.baseState = a),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Vt |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function $u(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(w(191, l));
        l.call(r);
      }
    }
}
var Zs = new Ha.Component().refs;
function Do(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Nl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ut(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = yt(e),
      o = Ye(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = vt(e, o, l)),
      t !== null && ($e(t, e, l, r), Vr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = yt(e),
      o = Ye(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = vt(e, o, l)),
      t !== null && ($e(t, e, l, r), Vr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = yt(e),
      l = Ye(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = vt(e, l, r)),
      t !== null && ($e(t, e, r, n), Vr(t, e, r));
  },
};
function Iu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jn(n, r) || !Jn(l, o)
      : !0
  );
}
function Bs(e, t, n) {
  var r = !1,
    l = kt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ae(o))
      : ((l = ye(t) ? Ft : se.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? dn(e, l) : kt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Nl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Vu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Nl.enqueueReplaceState(t, t.state, null);
}
function Ho(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Zs), Mi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ae(o))
    : ((o = ye(t) ? Ft : se.current), (l.context = dn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Do(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Nl.enqueueReplaceState(l, l.state, null),
      ul(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Zs && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Du(e) {
  var t = e._init;
  return t(e._payload);
}
function Ws(e) {
  function t(d, s) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [s]), (d.flags |= 16)) : f.push(s);
    }
  }
  function n(d, s) {
    if (!e) return null;
    for (; s !== null; ) t(d, s), (s = s.sibling);
    return null;
  }
  function r(d, s) {
    for (d = new Map(); s !== null; )
      s.key !== null ? d.set(s.key, s) : d.set(s.index, s), (s = s.sibling);
    return d;
  }
  function l(d, s) {
    return (d = wt(d, s)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, s, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < s ? ((d.flags |= 2), s) : f)
            : ((d.flags |= 2), s))
        : ((d.flags |= 1048576), s)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, s, f, y) {
    return s === null || s.tag !== 6
      ? ((s = io(f, d.mode, y)), (s.return = d), s)
      : ((s = l(s, f)), (s.return = d), s);
  }
  function a(d, s, f, y) {
    var C = f.type;
    return C === Qt
      ? m(d, s, f.props.children, y, f.key)
      : s !== null &&
        (s.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === it &&
            Du(C) === s.type))
      ? ((y = l(s, f.props)), (y.ref = Nn(d, s, f)), (y.return = d), y)
      : ((y = Wr(f.type, f.key, f.props, null, d.mode, y)),
        (y.ref = Nn(d, s, f)),
        (y.return = d),
        y);
  }
  function c(d, s, f, y) {
    return s === null ||
      s.tag !== 4 ||
      s.stateNode.containerInfo !== f.containerInfo ||
      s.stateNode.implementation !== f.implementation
      ? ((s = uo(f, d.mode, y)), (s.return = d), s)
      : ((s = l(s, f.children || [])), (s.return = d), s);
  }
  function m(d, s, f, y, C) {
    return s === null || s.tag !== 7
      ? ((s = Rt(f, d.mode, y, C)), (s.return = d), s)
      : ((s = l(s, f)), (s.return = d), s);
  }
  function h(d, s, f) {
    if ((typeof s == "string" && s !== "") || typeof s == "number")
      return (s = io("" + s, d.mode, f)), (s.return = d), s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case gr:
          return (
            (f = Wr(s.type, s.key, s.props, null, d.mode, f)),
            (f.ref = Nn(d, null, s)),
            (f.return = d),
            f
          );
        case Wt:
          return (s = uo(s, d.mode, f)), (s.return = d), s;
        case it:
          var y = s._init;
          return h(d, y(s._payload), f);
      }
      if (On(s) || kn(s))
        return (s = Rt(s, d.mode, f, null)), (s.return = d), s;
      Pr(d, s);
    }
    return null;
  }
  function p(d, s, f, y) {
    var C = s !== null ? s.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return C !== null ? null : u(d, s, "" + f, y);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case gr:
          return f.key === C ? a(d, s, f, y) : null;
        case Wt:
          return f.key === C ? c(d, s, f, y) : null;
        case it:
          return (C = f._init), p(d, s, C(f._payload), y);
      }
      if (On(f) || kn(f)) return C !== null ? null : m(d, s, f, y, null);
      Pr(d, f);
    }
    return null;
  }
  function k(d, s, f, y, C) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (d = d.get(f) || null), u(s, d, "" + y, C);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case gr:
          return (d = d.get(y.key === null ? f : y.key) || null), a(s, d, y, C);
        case Wt:
          return (d = d.get(y.key === null ? f : y.key) || null), c(s, d, y, C);
        case it:
          var N = y._init;
          return k(d, s, f, N(y._payload), C);
      }
      if (On(y) || kn(y)) return (d = d.get(f) || null), m(s, d, y, C, null);
      Pr(s, y);
    }
    return null;
  }
  function S(d, s, f, y) {
    for (
      var C = null, N = null, _ = s, P = (s = 0), H = null;
      _ !== null && P < f.length;
      P++
    ) {
      _.index > P ? ((H = _), (_ = null)) : (H = _.sibling);
      var L = p(d, _, f[P], y);
      if (L === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && L.alternate === null && t(d, _),
        (s = o(L, s, P)),
        N === null ? (C = L) : (N.sibling = L),
        (N = L),
        (_ = H);
    }
    if (P === f.length) return n(d, _), W && Pt(d, P), C;
    if (_ === null) {
      for (; P < f.length; P++)
        (_ = h(d, f[P], y)),
          _ !== null &&
            ((s = o(_, s, P)), N === null ? (C = _) : (N.sibling = _), (N = _));
      return W && Pt(d, P), C;
    }
    for (_ = r(d, _); P < f.length; P++)
      (H = k(_, d, P, f[P], y)),
        H !== null &&
          (e && H.alternate !== null && _.delete(H.key === null ? P : H.key),
          (s = o(H, s, P)),
          N === null ? (C = H) : (N.sibling = H),
          (N = H));
    return (
      e &&
        _.forEach(function (ce) {
          return t(d, ce);
        }),
      W && Pt(d, P),
      C
    );
  }
  function x(d, s, f, y) {
    var C = kn(f);
    if (typeof C != "function") throw Error(w(150));
    if (((f = C.call(f)), f == null)) throw Error(w(151));
    for (
      var N = (C = null), _ = s, P = (s = 0), H = null, L = f.next();
      _ !== null && !L.done;
      P++, L = f.next()
    ) {
      _.index > P ? ((H = _), (_ = null)) : (H = _.sibling);
      var ce = p(d, _, L.value, y);
      if (ce === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && ce.alternate === null && t(d, _),
        (s = o(ce, s, P)),
        N === null ? (C = ce) : (N.sibling = ce),
        (N = ce),
        (_ = H);
    }
    if (L.done) return n(d, _), W && Pt(d, P), C;
    if (_ === null) {
      for (; !L.done; P++, L = f.next())
        (L = h(d, L.value, y)),
          L !== null &&
            ((s = o(L, s, P)), N === null ? (C = L) : (N.sibling = L), (N = L));
      return W && Pt(d, P), C;
    }
    for (_ = r(d, _); !L.done; P++, L = f.next())
      (L = k(_, d, P, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && _.delete(L.key === null ? P : L.key),
          (s = o(L, s, P)),
          N === null ? (C = L) : (N.sibling = L),
          (N = L));
    return (
      e &&
        _.forEach(function (F) {
          return t(d, F);
        }),
      W && Pt(d, P),
      C
    );
  }
  function A(d, s, f, y) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Qt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case gr:
          e: {
            for (var C = f.key, N = s; N !== null; ) {
              if (N.key === C) {
                if (((C = f.type), C === Qt)) {
                  if (N.tag === 7) {
                    n(d, N.sibling),
                      (s = l(N, f.props.children)),
                      (s.return = d),
                      (d = s);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === it &&
                    Du(C) === N.type)
                ) {
                  n(d, N.sibling),
                    (s = l(N, f.props)),
                    (s.ref = Nn(d, N, f)),
                    (s.return = d),
                    (d = s);
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            f.type === Qt
              ? ((s = Rt(f.props.children, d.mode, y, f.key)),
                (s.return = d),
                (d = s))
              : ((y = Wr(f.type, f.key, f.props, null, d.mode, y)),
                (y.ref = Nn(d, s, f)),
                (y.return = d),
                (d = y));
          }
          return i(d);
        case Wt:
          e: {
            for (N = f.key; s !== null; ) {
              if (s.key === N)
                if (
                  s.tag === 4 &&
                  s.stateNode.containerInfo === f.containerInfo &&
                  s.stateNode.implementation === f.implementation
                ) {
                  n(d, s.sibling),
                    (s = l(s, f.children || [])),
                    (s.return = d),
                    (d = s);
                  break e;
                } else {
                  n(d, s);
                  break;
                }
              else t(d, s);
              s = s.sibling;
            }
            (s = uo(f, d.mode, y)), (s.return = d), (d = s);
          }
          return i(d);
        case it:
          return (N = f._init), A(d, s, N(f._payload), y);
      }
      if (On(f)) return S(d, s, f, y);
      if (kn(f)) return x(d, s, f, y);
      Pr(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        s !== null && s.tag === 6
          ? (n(d, s.sibling), (s = l(s, f)), (s.return = d), (d = s))
          : (n(d, s), (s = io(f, d.mode, y)), (s.return = d), (d = s)),
        i(d))
      : n(d, s);
  }
  return A;
}
var pn = Ws(!0),
  Qs = Ws(!1),
  dr = {},
  Ze = Et(dr),
  tr = Et(dr),
  nr = Et(dr);
function Ot(e) {
  if (e === dr) throw Error(w(174));
  return e;
}
function Oi(e, t) {
  switch ((D(nr, t), D(tr, e), D(Ze, dr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = wo(t, e));
  }
  B(Ze), D(Ze, t);
}
function mn() {
  B(Ze), B(tr), B(nr);
}
function Ks(e) {
  Ot(nr.current);
  var t = Ot(Ze.current),
    n = wo(t, e.type);
  t !== n && (D(tr, e), D(Ze, n));
}
function Li(e) {
  tr.current === e && (B(Ze), B(tr));
}
var K = Et(0);
function al(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var eo = [];
function Ti() {
  for (var e = 0; e < eo.length; e++)
    eo[e]._workInProgressVersionPrimary = null;
  eo.length = 0;
}
var Dr = et.ReactCurrentDispatcher,
  to = et.ReactCurrentBatchConfig,
  It = 0,
  G = null,
  b = null,
  te = null,
  sl = !1,
  Dn = !1,
  rr = 0,
  e1 = 0;
function ie() {
  throw Error(w(321));
}
function Ri(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ie(e[n], t[n])) return !1;
  return !0;
}
function Fi(e, t, n, r, l, o) {
  if (
    ((It = o),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Dr.current = e === null || e.memoizedState === null ? l1 : o1),
    (e = n(r, l)),
    Dn)
  ) {
    o = 0;
    do {
      if (((Dn = !1), (rr = 0), 25 <= o)) throw Error(w(301));
      (o += 1),
        (te = b = null),
        (t.updateQueue = null),
        (Dr.current = i1),
        (e = n(r, l));
    } while (Dn);
  }
  if (
    ((Dr.current = cl),
    (t = b !== null && b.next !== null),
    (It = 0),
    (te = b = G = null),
    (sl = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function $i() {
  var e = rr !== 0;
  return (rr = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (G.memoizedState = te = e) : (te = te.next = e), te;
}
function Me() {
  if (b === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = b.next;
  var t = te === null ? G.memoizedState : te.next;
  if (t !== null) (te = t), (b = e);
  else {
    if (e === null) throw Error(w(310));
    (b = e),
      (e = {
        memoizedState: b.memoizedState,
        baseState: b.baseState,
        baseQueue: b.baseQueue,
        queue: b.queue,
        next: null,
      }),
      te === null ? (G.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function no(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = b,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      c = o;
    do {
      var m = c.lane;
      if ((It & m) === m)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((u = a = h), (i = r)) : (a = a.next = h),
          (G.lanes |= m),
          (Vt |= m);
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? (i = r) : (a.next = u),
      Ie(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (G.lanes |= o), (Vt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ro(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ie(o, t.memoizedState) || (ve = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Gs() {}
function Ys(e, t) {
  var n = G,
    r = Me(),
    l = t(),
    o = !Ie(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ve = !0)),
    (r = r.queue),
    Ii(qs.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      or(9, Js.bind(null, n, r, l, t), void 0, null),
      ne === null)
    )
      throw Error(w(349));
    It & 30 || Xs(n, t, l);
  }
  return l;
}
function Xs(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Js(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), bs(t) && ec(e);
}
function qs(e, t, n) {
  return n(function () {
    bs(t) && ec(e);
  });
}
function bs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function ec(e) {
  var t = qe(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function Hu(e) {
  var t = De();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = r1.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function or(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function tc() {
  return Me().memoizedState;
}
function Hr(e, t, n, r) {
  var l = De();
  (G.flags |= e),
    (l.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r));
}
function _l(e, t, n, r) {
  var l = Me();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (b !== null) {
    var i = b.memoizedState;
    if (((o = i.destroy), r !== null && Ri(r, i.deps))) {
      l.memoizedState = or(t, n, o, r);
      return;
    }
  }
  (G.flags |= e), (l.memoizedState = or(1 | t, n, o, r));
}
function Uu(e, t) {
  return Hr(8390656, 8, e, t);
}
function Ii(e, t) {
  return _l(2048, 8, e, t);
}
function nc(e, t) {
  return _l(4, 2, e, t);
}
function rc(e, t) {
  return _l(4, 4, e, t);
}
function lc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function oc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), _l(4, 4, lc.bind(null, t, e), n)
  );
}
function Vi() {}
function ic(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ri(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function uc(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ri(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ac(e, t, n) {
  return It & 21
    ? (Ie(n, t) || ((n = ds()), (G.lanes |= n), (Vt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function t1(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = to.transition;
  to.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (to.transition = r);
  }
}
function sc() {
  return Me().memoizedState;
}
function n1(e, t, n) {
  var r = yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cc(e))
  )
    dc(t, n);
  else if (((n = Hs(e, t, n, r)), n !== null)) {
    var l = fe();
    $e(n, e, r, l), fc(n, t, r);
  }
}
function r1(e, t, n) {
  var r = yt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cc(e)) dc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ie(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Ai(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hs(e, t, l, r)),
      n !== null && ((l = fe()), $e(n, e, r, l), fc(n, t, r));
  }
}
function cc(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function dc(e, t) {
  Dn = sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vi(e, n);
  }
}
var cl = {
    readContext: Ae,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  l1 = {
    readContext: Ae,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ae,
    useEffect: Uu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hr(4194308, 4, lc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = De();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = n1.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = De();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Hu,
    useDebugValue: Vi,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = Hu(!1),
        t = e[0];
      return (e = t1.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        l = De();
      if (W) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(w(349));
        It & 30 || Xs(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Uu(qs.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        or(9, Js.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = De(),
        t = ne.identifierPrefix;
      if (W) {
        var n = Ge,
          r = Ke;
        (n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = rr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = e1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  o1 = {
    readContext: Ae,
    useCallback: ic,
    useContext: Ae,
    useEffect: Ii,
    useImperativeHandle: oc,
    useInsertionEffect: nc,
    useLayoutEffect: rc,
    useMemo: uc,
    useReducer: no,
    useRef: tc,
    useState: function () {
      return no(lr);
    },
    useDebugValue: Vi,
    useDeferredValue: function (e) {
      var t = Me();
      return ac(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = no(lr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: Gs,
    useSyncExternalStore: Ys,
    useId: sc,
    unstable_isNewReconciler: !1,
  },
  i1 = {
    readContext: Ae,
    useCallback: ic,
    useContext: Ae,
    useEffect: Ii,
    useImperativeHandle: oc,
    useInsertionEffect: nc,
    useLayoutEffect: rc,
    useMemo: uc,
    useReducer: ro,
    useRef: tc,
    useState: function () {
      return ro(lr);
    },
    useDebugValue: Vi,
    useDeferredValue: function (e) {
      var t = Me();
      return b === null ? (t.memoizedState = e) : ac(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = ro(lr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: Gs,
    useSyncExternalStore: Ys,
    useId: sc,
    unstable_isNewReconciler: !1,
  };
function hn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += T0(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function lo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Uo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var u1 = typeof WeakMap == "function" ? WeakMap : Map;
function pc(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      fl || ((fl = !0), (qo = r)), Uo(e, t);
    }),
    n
  );
}
function mc(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Uo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Uo(e, t),
          typeof r != "function" &&
            (gt === null ? (gt = new Set([this])) : gt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new u1();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = k1.bind(null, e, t, n)), t.then(e, e));
}
function Bu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Wu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ye(-1, 1)), (t.tag = 2), vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var a1 = et.ReactCurrentOwner,
  ve = !1;
function de(e, t, n, r) {
  t.child = e === null ? Qs(t, null, n, r) : pn(t, e.child, n, r);
}
function Qu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    an(t, l),
    (r = Fi(e, t, n, r, o, l)),
    (n = $i()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        be(e, t, l))
      : (W && n && Ci(t), (t.flags |= 1), de(e, t, r, l), t.child)
  );
}
function Ku(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ki(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), hc(e, t, o, r, l))
      : ((e = Wr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jn), n(i, r) && e.ref === t.ref)
    )
      return be(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = wt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function hc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Jn(o, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), be(e, t, l);
  }
  return Zo(e, t, n, r, l);
}
function vc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(nn, xe),
        (xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(nn, xe),
          (xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(nn, xe),
        (xe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(nn, xe),
      (xe |= r);
  return de(e, t, l, n), t.child;
}
function gc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zo(e, t, n, r, l) {
  var o = ye(n) ? Ft : se.current;
  return (
    (o = dn(t, o)),
    an(t, l),
    (n = Fi(e, t, n, r, o, l)),
    (r = $i()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        be(e, t, l))
      : (W && r && Ci(t), (t.flags |= 1), de(e, t, n, l), t.child)
  );
}
function Gu(e, t, n, r, l) {
  if (ye(n)) {
    var o = !0;
    nl(t);
  } else o = !1;
  if ((an(t, l), t.stateNode === null))
    Ur(e, t), Bs(t, n, r), Ho(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ae(c))
      : ((c = ye(n) ? Ft : se.current), (c = dn(t, c)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== c) && Vu(t, i, r, c)),
      (ut = !1);
    var p = t.memoizedState;
    (i.state = p),
      ul(t, r, i, l),
      (a = t.memoizedState),
      u !== r || p !== a || ge.current || ut
        ? (typeof m == "function" && (Do(t, n, m, r), (a = t.memoizedState)),
          (u = ut || Iu(t, n, u, r, p, a, c))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Us(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Le(t.type, u)),
      (i.props = c),
      (h = t.pendingProps),
      (p = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ae(a))
        : ((a = ye(n) ? Ft : se.current), (a = dn(t, a)));
    var k = n.getDerivedStateFromProps;
    (m =
      typeof k == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || p !== a) && Vu(t, i, r, a)),
      (ut = !1),
      (p = t.memoizedState),
      (i.state = p),
      ul(t, r, i, l);
    var S = t.memoizedState;
    u !== h || p !== S || ge.current || ut
      ? (typeof k == "function" && (Do(t, n, k, r), (S = t.memoizedState)),
        (c = ut || Iu(t, n, c, r, p, S, a) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = a),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Bo(e, t, n, r, o, l);
}
function Bo(e, t, n, r, l, o) {
  gc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Lu(t, n, !1), be(e, t, o);
  (r = t.stateNode), (a1.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = pn(t, e.child, null, o)), (t.child = pn(t, null, u, o)))
      : de(e, t, u, o),
    (t.memoizedState = r.state),
    l && Lu(t, n, !0),
    t.child
  );
}
function yc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ou(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ou(e, t.context, !1),
    Oi(e, t.containerInfo);
}
function Yu(e, t, n, r, l) {
  return fn(), Ni(l), (t.flags |= 256), de(e, t, n, r), t.child;
}
var Wo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wc(e, t, n) {
  var r = t.pendingProps,
    l = K.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(K, l & 1),
    e === null)
  )
    return (
      Io(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Al(i, r, 0, null)),
              (e = Rt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Qo(n)),
              (t.memoizedState = Wo),
              e)
            : Di(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return s1(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = wt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = wt(u, o)) : ((o = Rt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Qo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = wt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Di(e, t) {
  return (
    (t = Al({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zr(e, t, n, r) {
  return (
    r !== null && Ni(r),
    pn(t, e.child, null, n),
    (e = Di(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function s1(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = lo(Error(w(422)))), zr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Al({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Rt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && pn(t, e.child, null, i),
        (t.child.memoizedState = Qo(i)),
        (t.memoizedState = Wo),
        o);
  if (!(t.mode & 1)) return zr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(w(419))), (r = lo(o, r, void 0)), zr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ve || u)) {
    if (((r = ne), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), qe(e, l), $e(r, e, l, -1));
    }
    return Qi(), (r = lo(Error(w(421)))), zr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = S1.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ke = ht(l.nextSibling)),
      (Se = t),
      (W = !0),
      (Re = null),
      e !== null &&
        ((Ne[_e++] = Ke),
        (Ne[_e++] = Ge),
        (Ne[_e++] = $t),
        (Ke = e.id),
        (Ge = e.overflow),
        ($t = t)),
      (t = Di(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Xu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vo(e.return, t, n);
}
function oo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function xc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((de(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xu(e, n, t);
        else if (e.tag === 19) Xu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && al(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          oo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && al(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        oo(t, !0, n, null, o);
        break;
      case "together":
        oo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ur(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function be(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function c1(e, t, n) {
  switch (t.tag) {
    case 3:
      yc(t), fn();
      break;
    case 5:
      Ks(t);
      break;
    case 1:
      ye(t.type) && nl(t);
      break;
    case 4:
      Oi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(ol, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? wc(e, t, n)
          : (D(K, K.current & 1),
            (e = be(e, t, n)),
            e !== null ? e.sibling : null);
      D(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vc(e, t, n);
  }
  return be(e, t, n);
}
var kc, Ko, Sc, Ec;
kc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ko = function () {};
Sc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ot(Ze.current);
    var o = null;
    switch (n) {
      case "input":
        (l = ho(e, l)), (r = ho(e, r)), (o = []);
        break;
      case "select":
        (l = Y({}, l, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = yo(e, l)), (r = yo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = el);
    }
    xo(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Bn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && a !== u && (a != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Bn.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && Z("scroll", e),
                  o || u === a || (o = []))
                : (o = o || []).push(c, a));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ec = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function d1(e, t, n) {
  var r = t.pendingProps;
  switch ((ji(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return ye(t.type) && tl(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mn(),
        B(ge),
        B(se),
        Ti(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Re !== null && (ti(Re), (Re = null)))),
        Ko(e, t),
        ue(t),
        null
      );
    case 5:
      Li(t);
      var l = Ot(nr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return ue(t), null;
        }
        if (((e = Ot(Ze.current)), _r(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[He] = t), (r[er] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Tn.length; l++) Z(Tn[l], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z("error", r), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              ou(r, o), Z("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Z("invalid", r);
              break;
            case "textarea":
              uu(r, o), Z("invalid", r);
          }
          xo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Bn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  Z("scroll", r);
            }
          switch (n) {
            case "input":
              yr(r), iu(r, o, !0);
              break;
            case "textarea":
              yr(r), au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = el);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Xa(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[He] = t),
            (e[er] = r),
            kc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ko(n, r)), n)) {
              case "dialog":
                Z("cancel", e), Z("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tn.length; l++) Z(Tn[l], e);
                l = r;
                break;
              case "source":
                Z("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                Z("error", e), Z("load", e), (l = r);
                break;
              case "details":
                Z("toggle", e), (l = r);
                break;
              case "input":
                ou(e, r), (l = ho(e, r)), Z("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Y({}, r, { value: void 0 })),
                  Z("invalid", e);
                break;
              case "textarea":
                uu(e, r), (l = yo(e, r)), Z("invalid", e);
                break;
              default:
                l = r;
            }
            xo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? ba(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ja(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Wn(e, a)
                    : typeof a == "number" && Wn(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Bn.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && Z("scroll", e)
                      : a != null && ci(e, o, a, i));
              }
            switch (n) {
              case "input":
                yr(e), iu(e, r, !1);
                break;
              case "textarea":
                yr(e), au(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? rn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = el);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) Ec(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = Ot(nr.current)), Ot(Ze.current), _r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[He] = t),
            (o = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[He] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (B(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && ke !== null && t.mode & 1 && !(t.flags & 128))
          Ds(), fn(), (t.flags |= 98560), (o = !1);
        else if (((o = _r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(w(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(w(317));
            o[He] = t;
          } else
            fn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (o = !1);
        } else Re !== null && (ti(Re), (Re = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? ee === 0 && (ee = 3) : Qi())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        mn(), Ko(e, t), e === null && qn(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return zi(t.type._context), ue(t), null;
    case 17:
      return ye(t.type) && tl(), ue(t), null;
    case 19:
      if ((B(K), (o = t.memoizedState), o === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) _n(o, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = al(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    _n(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            J() > vn &&
            ((t.flags |= 128), (r = !0), _n(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = al(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _n(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !W)
            )
              return ue(t), null;
          } else
            2 * J() - o.renderingStartTime > vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _n(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = J()),
          (t.sibling = null),
          (n = K.current),
          D(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        Wi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? xe & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function f1(e, t) {
  switch ((ji(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && tl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mn(),
        B(ge),
        B(se),
        Ti(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Li(t), null;
    case 13:
      if ((B(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        fn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(K), null;
    case 4:
      return mn(), null;
    case 10:
      return zi(t.type._context), null;
    case 22:
    case 23:
      return Wi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ar = !1,
  ae = !1,
  p1 = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function Go(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var Ju = !1;
function m1(e, t) {
  if (((Mo = Jr), (e = _s()), Ei(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            c = 0,
            m = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var k;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (a = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (k = h.firstChild) !== null;

            )
              (p = h), (h = k);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++c === l && (u = i),
                p === o && ++m === r && (a = i),
                (k = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = k;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Oo = { focusedElem: e, selectionRange: n }, Jr = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var x = S.memoizedProps,
                    A = S.memoizedState,
                    d = t.stateNode,
                    s = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Le(t.type, x),
                      A
                    );
                  d.__reactInternalSnapshotBeforeUpdate = s;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (y) {
          X(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (S = Ju), (Ju = !1), S;
}
function Hn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Go(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Yo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[He], delete t[er], delete t[Ro], delete t[Xd], delete t[Jd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function jc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = el));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xo(e, t, n), e = e.sibling; e !== null; ) Xo(e, t, n), (e = e.sibling);
}
function Jo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jo(e, t, n), e = e.sibling; e !== null; ) Jo(e, t, n), (e = e.sibling);
}
var re = null,
  Te = !1;
function rt(e, t, n) {
  for (n = n.child; n !== null; ) Nc(e, t, n), (n = n.sibling);
}
function Nc(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(xl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || tn(n, t);
    case 6:
      var r = re,
        l = Te;
      (re = null),
        rt(e, t, n),
        (re = r),
        (Te = l),
        re !== null &&
          (Te
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        (Te
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? ql(e.parentNode, n)
              : e.nodeType === 1 && ql(e, n),
            Yn(e))
          : ql(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (l = Te),
        (re = n.stateNode.containerInfo),
        (Te = !0),
        rt(e, t, n),
        (re = r),
        (Te = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Go(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      rt(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (tn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          X(n, t, u);
        }
      rt(e, t, n);
      break;
    case 21:
      rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ae = (r = ae) || n.memoizedState !== null), rt(e, t, n), (ae = r))
        : rt(e, t, n);
      break;
    default:
      rt(e, t, n);
  }
}
function bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new p1()),
      t.forEach(function (r) {
        var l = E1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Oe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (re = u.stateNode), (Te = !1);
              break e;
            case 3:
              (re = u.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (re = u.stateNode.containerInfo), (Te = !0);
              break e;
          }
          u = u.return;
        }
        if (re === null) throw Error(w(160));
        Nc(o, i, l), (re = null), (Te = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (c) {
        X(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _c(t, e), (t = t.sibling);
}
function _c(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Oe(t, e), Ve(e), r & 4)) {
        try {
          Hn(3, e, e.return), Pl(3, e);
        } catch (x) {
          X(e, e.return, x);
        }
        try {
          Hn(5, e, e.return);
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 1:
      Oe(t, e), Ve(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (
        (Oe(t, e),
        Ve(e),
        r & 512 && n !== null && tn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Wn(l, "");
        } catch (x) {
          X(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Ga(l, o),
              ko(u, i);
            var c = ko(u, o);
            for (i = 0; i < a.length; i += 2) {
              var m = a[i],
                h = a[i + 1];
              m === "style"
                ? ba(l, h)
                : m === "dangerouslySetInnerHTML"
                ? Ja(l, h)
                : m === "children"
                ? Wn(l, h)
                : ci(l, m, h, c);
            }
            switch (u) {
              case "input":
                vo(l, o);
                break;
              case "textarea":
                Ya(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var k = o.value;
                k != null
                  ? rn(l, !!o.multiple, k, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? rn(l, !!o.multiple, o.defaultValue, !0)
                      : rn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[er] = o;
          } catch (x) {
            X(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Oe(t, e), Ve(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Oe(t, e), Ve(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yn(t.containerInfo);
        } catch (x) {
          X(e, e.return, x);
        }
      break;
    case 4:
      Oe(t, e), Ve(e);
      break;
    case 13:
      Oe(t, e),
        Ve(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Zi = J())),
        r & 4 && bu(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (c = ae) || m), Oe(t, e), (ae = c)) : Oe(t, e),
        Ve(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (j = e, m = e.child; m !== null; ) {
            for (h = j = m; j !== null; ) {
              switch (((p = j), (k = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hn(4, p, p.return);
                  break;
                case 1:
                  tn(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (x) {
                      X(r, n, x);
                    }
                  }
                  break;
                case 5:
                  tn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    ta(h);
                    continue;
                  }
              }
              k !== null ? ((k.return = p), (j = k)) : ta(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (a = h.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = qa("display", i)));
              } catch (x) {
                X(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (x) {
                X(e, e.return, x);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Oe(t, e), Ve(e), r & 4 && bu(e);
      break;
    case 21:
      break;
    default:
      Oe(t, e), Ve(e);
  }
}
function Ve(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wn(l, ""), (r.flags &= -33));
          var o = qu(e);
          Jo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = qu(e);
          Xo(e, u, i);
          break;
        default:
          throw Error(w(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function h1(e, t, n) {
  (j = e), Pc(e);
}
function Pc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Ar;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || ae;
        u = Ar;
        var c = ae;
        if (((Ar = i), (ae = a) && !c))
          for (j = l; j !== null; )
            (i = j),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? na(l)
                : a !== null
                ? ((a.return = i), (j = a))
                : na(l);
        for (; o !== null; ) (j = o), Pc(o), (o = o.sibling);
        (j = l), (Ar = u), (ae = c);
      }
      ea(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (j = o)) : ea(e);
  }
}
function ea(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || Pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && $u(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                $u(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Yn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        ae || (t.flags & 512 && Yo(t));
      } catch (p) {
        X(t, t.return, p);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function ta(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function na(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pl(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, l, a);
            }
          }
          var o = t.return;
          try {
            Yo(t);
          } catch (a) {
            X(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Yo(t);
          } catch (a) {
            X(t, i, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      j = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (j = u);
      break;
    }
    j = t.return;
  }
}
var v1 = Math.ceil,
  dl = et.ReactCurrentDispatcher,
  Hi = et.ReactCurrentOwner,
  ze = et.ReactCurrentBatchConfig,
  R = 0,
  ne = null,
  q = null,
  le = 0,
  xe = 0,
  nn = Et(0),
  ee = 0,
  ir = null,
  Vt = 0,
  zl = 0,
  Ui = 0,
  Un = null,
  he = null,
  Zi = 0,
  vn = 1 / 0,
  We = null,
  fl = !1,
  qo = null,
  gt = null,
  Mr = !1,
  dt = null,
  pl = 0,
  Zn = 0,
  bo = null,
  Zr = -1,
  Br = 0;
function fe() {
  return R & 6 ? J() : Zr !== -1 ? Zr : (Zr = J());
}
function yt(e) {
  return e.mode & 1
    ? R & 2 && le !== 0
      ? le & -le
      : bd.transition !== null
      ? (Br === 0 && (Br = ds()), Br)
      : ((e = $),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ys(e.type))),
        e)
    : 1;
}
function $e(e, t, n, r) {
  if (50 < Zn) throw ((Zn = 0), (bo = null), Error(w(185)));
  ar(e, n, r),
    (!(R & 2) || e !== ne) &&
      (e === ne && (!(R & 2) && (zl |= n), ee === 4 && st(e, le)),
      we(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((vn = J() + 500), jl && Ct()));
}
function we(e, t) {
  var n = e.callbackNode;
  b0(e, t);
  var r = Xr(e, e === ne ? le : 0);
  if (r === 0)
    n !== null && du(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && du(n), t === 1))
      e.tag === 0 ? qd(ra.bind(null, e)) : $s(ra.bind(null, e)),
        Gd(function () {
          !(R & 6) && Ct();
        }),
        (n = null);
    else {
      switch (fs(r)) {
        case 1:
          n = hi;
          break;
        case 4:
          n = ss;
          break;
        case 16:
          n = Yr;
          break;
        case 536870912:
          n = cs;
          break;
        default:
          n = Yr;
      }
      n = Fc(n, zc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function zc(e, t) {
  if (((Zr = -1), (Br = 0), R & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (sn() && e.callbackNode !== n) return null;
  var r = Xr(e, e === ne ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ml(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = Mc();
    (ne !== e || le !== t) && ((We = null), (vn = J() + 500), Tt(e, t));
    do
      try {
        w1();
        break;
      } catch (u) {
        Ac(e, u);
      }
    while (!0);
    Pi(),
      (dl.current = o),
      (R = l),
      q !== null ? (t = 0) : ((ne = null), (le = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = No(e)), l !== 0 && ((r = l), (t = ei(e, l)))), t === 1)
    )
      throw ((n = ir), Tt(e, 0), st(e, r), we(e, J()), n);
    if (t === 6) st(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !g1(l) &&
          ((t = ml(e, r)),
          t === 2 && ((o = No(e)), o !== 0 && ((r = o), (t = ei(e, o)))),
          t === 1))
      )
        throw ((n = ir), Tt(e, 0), st(e, r), we(e, J()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          zt(e, he, We);
          break;
        case 3:
          if (
            (st(e, r), (r & 130023424) === r && ((t = Zi + 500 - J()), 10 < t))
          ) {
            if (Xr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = To(zt.bind(null, e, he, We), t);
            break;
          }
          zt(e, he, We);
          break;
        case 4:
          if ((st(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Fe(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * v1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = To(zt.bind(null, e, he, We), r);
            break;
          }
          zt(e, he, We);
          break;
        case 5:
          zt(e, he, We);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return we(e, J()), e.callbackNode === n ? zc.bind(null, e) : null;
}
function ei(e, t) {
  var n = Un;
  return (
    e.current.memoizedState.isDehydrated && (Tt(e, t).flags |= 256),
    (e = ml(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && ti(t)),
    e
  );
}
function ti(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function g1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function st(e, t) {
  for (
    t &= ~Ui,
      t &= ~zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ra(e) {
  if (R & 6) throw Error(w(327));
  sn();
  var t = Xr(e, 0);
  if (!(t & 1)) return we(e, J()), null;
  var n = ml(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = No(e);
    r !== 0 && ((t = r), (n = ei(e, r)));
  }
  if (n === 1) throw ((n = ir), Tt(e, 0), st(e, t), we(e, J()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zt(e, he, We),
    we(e, J()),
    null
  );
}
function Bi(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((vn = J() + 500), jl && Ct());
  }
}
function Dt(e) {
  dt !== null && dt.tag === 0 && !(R & 6) && sn();
  var t = R;
  R |= 1;
  var n = ze.transition,
    r = $;
  try {
    if (((ze.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (ze.transition = n), (R = t), !(R & 6) && Ct();
  }
}
function Wi() {
  (xe = nn.current), B(nn);
}
function Tt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Kd(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((ji(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && tl();
          break;
        case 3:
          mn(), B(ge), B(se), Ti();
          break;
        case 5:
          Li(r);
          break;
        case 4:
          mn();
          break;
        case 13:
          B(K);
          break;
        case 19:
          B(K);
          break;
        case 10:
          zi(r.type._context);
          break;
        case 22:
        case 23:
          Wi();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (q = e = wt(e.current, null)),
    (le = xe = t),
    (ee = 0),
    (ir = null),
    (Ui = zl = Vt = 0),
    (he = Un = null),
    Mt !== null)
  ) {
    for (t = 0; t < Mt.length; t++)
      if (((n = Mt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Mt = null;
  }
  return e;
}
function Ac(e, t) {
  do {
    var n = q;
    try {
      if ((Pi(), (Dr.current = cl), sl)) {
        for (var r = G.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        sl = !1;
      }
      if (
        ((It = 0),
        (te = b = G = null),
        (Dn = !1),
        (rr = 0),
        (Hi.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (ir = t), (q = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = le),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            m = u,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var k = Bu(i);
          if (k !== null) {
            (k.flags &= -257),
              Wu(k, i, u, o, t),
              k.mode & 1 && Zu(o, c, t),
              (t = k),
              (a = c);
            var S = t.updateQueue;
            if (S === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Zu(o, c, t), Qi();
              break e;
            }
            a = Error(w(426));
          }
        } else if (W && u.mode & 1) {
          var A = Bu(i);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              Wu(A, i, u, o, t),
              Ni(hn(a, u));
            break e;
          }
        }
        (o = a = hn(a, u)),
          ee !== 4 && (ee = 2),
          Un === null ? (Un = [o]) : Un.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = pc(o, a, t);
              Fu(o, d);
              break e;
            case 1:
              u = a;
              var s = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof s.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (gt === null || !gt.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = mc(o, u, t);
                Fu(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Lc(n);
    } catch (C) {
      (t = C), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Mc() {
  var e = dl.current;
  return (dl.current = cl), e === null ? cl : e;
}
function Qi() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    ne === null || (!(Vt & 268435455) && !(zl & 268435455)) || st(ne, le);
}
function ml(e, t) {
  var n = R;
  R |= 2;
  var r = Mc();
  (ne !== e || le !== t) && ((We = null), Tt(e, t));
  do
    try {
      y1();
      break;
    } catch (l) {
      Ac(e, l);
    }
  while (!0);
  if ((Pi(), (R = n), (dl.current = r), q !== null)) throw Error(w(261));
  return (ne = null), (le = 0), ee;
}
function y1() {
  for (; q !== null; ) Oc(q);
}
function w1() {
  for (; q !== null && !B0(); ) Oc(q);
}
function Oc(e) {
  var t = Rc(e.alternate, e, xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Lc(e) : (q = t),
    (Hi.current = null);
}
function Lc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = f1(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (q = null);
        return;
      }
    } else if (((n = d1(n, t, xe)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function zt(e, t, n) {
  var r = $,
    l = ze.transition;
  try {
    (ze.transition = null), ($ = 1), x1(e, t, n, r);
  } finally {
    (ze.transition = l), ($ = r);
  }
  return null;
}
function x1(e, t, n, r) {
  do sn();
  while (dt !== null);
  if (R & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (ed(e, o),
    e === ne && ((q = ne = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Mr ||
      ((Mr = !0),
      Fc(Yr, function () {
        return sn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ze.transition), (ze.transition = null);
    var i = $;
    $ = 1;
    var u = R;
    (R |= 4),
      (Hi.current = null),
      m1(e, n),
      _c(n, e),
      Dd(Oo),
      (Jr = !!Mo),
      (Oo = Mo = null),
      (e.current = n),
      h1(n),
      W0(),
      (R = u),
      ($ = i),
      (ze.transition = o);
  } else e.current = n;
  if (
    (Mr && ((Mr = !1), (dt = e), (pl = l)),
    (o = e.pendingLanes),
    o === 0 && (gt = null),
    G0(n.stateNode),
    we(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (fl) throw ((fl = !1), (e = qo), (qo = null), e);
  return (
    pl & 1 && e.tag !== 0 && sn(),
    (o = e.pendingLanes),
    o & 1 ? (e === bo ? Zn++ : ((Zn = 0), (bo = e))) : (Zn = 0),
    Ct(),
    null
  );
}
function sn() {
  if (dt !== null) {
    var e = fs(pl),
      t = ze.transition,
      n = $;
    try {
      if (((ze.transition = null), ($ = 16 > e ? 16 : e), dt === null))
        var r = !1;
      else {
        if (((e = dt), (dt = null), (pl = 0), R & 6)) throw Error(w(331));
        var l = R;
        for (R |= 4, j = e.current; j !== null; ) {
          var o = j,
            i = o.child;
          if (j.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (j = c; j !== null; ) {
                  var m = j;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hn(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (j = h);
                  else
                    for (; j !== null; ) {
                      m = j;
                      var p = m.sibling,
                        k = m.return;
                      if ((Cc(m), m === c)) {
                        j = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = k), (j = p);
                        break;
                      }
                      j = k;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var x = S.child;
                if (x !== null) {
                  S.child = null;
                  do {
                    var A = x.sibling;
                    (x.sibling = null), (x = A);
                  } while (x !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (j = i);
          else
            e: for (; j !== null; ) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hn(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (j = d);
                break e;
              }
              j = o.return;
            }
        }
        var s = e.current;
        for (j = s; j !== null; ) {
          i = j;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) (f.return = i), (j = f);
          else
            e: for (i = s; j !== null; ) {
              if (((u = j), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pl(9, u);
                  }
                } catch (C) {
                  X(u, u.return, C);
                }
              if (u === i) {
                j = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (j = y);
                break e;
              }
              j = u.return;
            }
        }
        if (
          ((R = l), Ct(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(xl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (ze.transition = t);
    }
  }
  return !1;
}
function la(e, t, n) {
  (t = hn(n, t)),
    (t = pc(e, t, 1)),
    (e = vt(e, t, 1)),
    (t = fe()),
    e !== null && (ar(e, 1, t), we(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) la(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        la(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (gt === null || !gt.has(r)))
        ) {
          (e = hn(n, e)),
            (e = mc(t, e, 1)),
            (t = vt(t, e, 1)),
            (e = fe()),
            t !== null && (ar(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function k1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (le & n) === n &&
      (ee === 4 || (ee === 3 && (le & 130023424) === le && 500 > J() - Zi)
        ? Tt(e, 0)
        : (Ui |= n)),
    we(e, t);
}
function Tc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = kr), (kr <<= 1), !(kr & 130023424) && (kr = 4194304))
      : (t = 1));
  var n = fe();
  (e = qe(e, t)), e !== null && (ar(e, t, n), we(e, n));
}
function S1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Tc(e, n);
}
function E1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), Tc(e, n);
}
var Rc;
Rc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), c1(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), W && t.flags & 1048576 && Is(t, ll, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ur(e, t), (e = t.pendingProps);
      var l = dn(t, se.current);
      an(t, n), (l = Fi(null, t, r, e, l, n));
      var o = $i();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((o = !0), nl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Mi(t),
            (l.updater = Nl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ho(t, r, e, n),
            (t = Bo(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && Ci(t), de(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ur(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = j1(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = Zo(null, t, r, e, n);
            break e;
          case 1:
            t = Gu(null, t, r, e, n);
            break e;
          case 11:
            t = Qu(null, t, r, e, n);
            break e;
          case 14:
            t = Ku(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Zo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Gu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((yc(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Us(e, t),
          ul(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = hn(Error(w(423)), t)), (t = Yu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = hn(Error(w(424)), t)), (t = Yu(e, t, r, n, l));
            break e;
          } else
            for (
              ke = ht(t.stateNode.containerInfo.firstChild),
                Se = t,
                W = !0,
                Re = null,
                n = Qs(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fn(), r === l)) {
            t = be(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ks(t),
        e === null && Io(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Lo(r, l) ? (i = null) : o !== null && Lo(r, o) && (t.flags |= 32),
        gc(e, t),
        de(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Io(t), null;
    case 13:
      return wc(e, t, n);
    case 4:
      return (
        Oi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pn(t, null, r, n)) : de(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Qu(e, t, r, l, n)
      );
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          D(ol, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ie(o.value, i)) {
            if (o.children === l.children && !ge.current) {
              t = be(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Ye(-1, n & -n)), (a.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (c.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Vo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(w(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Vo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        de(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        an(t, n),
        (l = Ae(l)),
        (r = r(l)),
        (t.flags |= 1),
        de(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        Ku(e, t, r, l, n)
      );
    case 15:
      return hc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ur(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), nl(t)) : (e = !1),
        an(t, n),
        Bs(t, r, l),
        Ho(t, r, l, n),
        Bo(null, t, r, !0, e, n)
      );
    case 19:
      return xc(e, t, n);
    case 22:
      return vc(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function Fc(e, t) {
  return as(e, t);
}
function C1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pe(e, t, n, r) {
  return new C1(e, t, n, r);
}
function Ki(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function j1(e) {
  if (typeof e == "function") return Ki(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fi)) return 11;
    if (e === pi) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ki(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Qt:
        return Rt(n.children, l, o, t);
      case di:
        (i = 8), (l |= 8);
        break;
      case co:
        return (
          (e = Pe(12, n, t, l | 2)), (e.elementType = co), (e.lanes = o), e
        );
      case fo:
        return (e = Pe(13, n, t, l)), (e.elementType = fo), (e.lanes = o), e;
      case po:
        return (e = Pe(19, n, t, l)), (e.elementType = po), (e.lanes = o), e;
      case Wa:
        return Al(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Za:
              i = 10;
              break e;
            case Ba:
              i = 9;
              break e;
            case fi:
              i = 11;
              break e;
            case pi:
              i = 14;
              break e;
            case it:
              (i = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Pe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Rt(e, t, n, r) {
  return (e = Pe(7, e, r, t)), (e.lanes = n), e;
}
function Al(e, t, n, r) {
  return (
    (e = Pe(22, e, r, t)),
    (e.elementType = Wa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function io(e, t, n) {
  return (e = Pe(6, e, null, t)), (e.lanes = n), e;
}
function uo(e, t, n) {
  return (
    (t = Pe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function N1(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hl(0)),
    (this.expirationTimes = Hl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Gi(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new N1(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Pe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Mi(o),
    e
  );
}
function _1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function $c(e) {
  if (!e) return kt;
  e = e._reactInternals;
  e: {
    if (Ut(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return Fs(e, n, t);
  }
  return t;
}
function Ic(e, t, n, r, l, o, i, u, a) {
  return (
    (e = Gi(n, r, !0, e, l, o, i, u, a)),
    (e.context = $c(null)),
    (n = e.current),
    (r = fe()),
    (l = yt(n)),
    (o = Ye(r, l)),
    (o.callback = t ?? null),
    vt(n, o, l),
    (e.current.lanes = l),
    ar(e, l, r),
    we(e, r),
    e
  );
}
function Ml(e, t, n, r) {
  var l = t.current,
    o = fe(),
    i = yt(l);
  return (
    (n = $c(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ye(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vt(l, t, i)),
    e !== null && ($e(e, l, i, o), Vr(e, l, i)),
    i
  );
}
function hl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function oa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yi(e, t) {
  oa(e, t), (e = e.alternate) && oa(e, t);
}
function P1() {
  return null;
}
var Vc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xi(e) {
  this._internalRoot = e;
}
Ol.prototype.render = Xi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Ml(e, t, null, null);
};
Ol.prototype.unmount = Xi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dt(function () {
      Ml(null, e, null, null);
    }),
      (t[Je] = null);
  }
};
function Ol(e) {
  this._internalRoot = e;
}
Ol.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
    at.splice(n, 0, e), n === 0 && gs(e);
  }
};
function Ji(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ll(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ia() {}
function z1(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = hl(i);
        o.call(c);
      };
    }
    var i = Ic(t, r, e, 0, null, !1, !1, "", ia);
    return (
      (e._reactRootContainer = i),
      (e[Je] = i.current),
      qn(e.nodeType === 8 ? e.parentNode : e),
      Dt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = hl(a);
      u.call(c);
    };
  }
  var a = Gi(e, 0, !1, null, null, !1, !1, "", ia);
  return (
    (e._reactRootContainer = a),
    (e[Je] = a.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    Dt(function () {
      Ml(t, a, n, r);
    }),
    a
  );
}
function Tl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = hl(i);
        u.call(a);
      };
    }
    Ml(t, i, e, l);
  } else i = z1(n, t, e, l, r);
  return hl(i);
}
ps = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (vi(t, n | 1), we(t, J()), !(R & 6) && ((vn = J() + 500), Ct()));
      }
      break;
    case 13:
      Dt(function () {
        var r = qe(e, 1);
        if (r !== null) {
          var l = fe();
          $e(r, e, 1, l);
        }
      }),
        Yi(e, 1);
  }
};
gi = function (e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = fe();
      $e(t, e, 134217728, n);
    }
    Yi(e, 134217728);
  }
};
ms = function (e) {
  if (e.tag === 13) {
    var t = yt(e),
      n = qe(e, t);
    if (n !== null) {
      var r = fe();
      $e(n, e, t, r);
    }
    Yi(e, t);
  }
};
hs = function () {
  return $;
};
vs = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
Eo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Cl(r);
            if (!l) throw Error(w(90));
            Ka(r), vo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ya(e, n);
      break;
    case "select":
      (t = n.value), t != null && rn(e, !!n.multiple, t, !1);
  }
};
ns = Bi;
rs = Dt;
var A1 = { usingClientEntryPoint: !1, Events: [cr, Xt, Cl, es, ts, Bi] },
  Pn = {
    findFiberByHostInstance: At,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  M1 = {
    bundleType: Pn.bundleType,
    version: Pn.version,
    rendererPackageName: Pn.rendererPackageName,
    rendererConfig: Pn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = is(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Pn.findFiberByHostInstance || P1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Or.isDisabled && Or.supportsFiber)
    try {
      (xl = Or.inject(M1)), (Ue = Or);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A1;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ji(t)) throw Error(w(200));
  return _1(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!Ji(e)) throw Error(w(299));
  var n = !1,
    r = "",
    l = Vc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Gi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Je] = t.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    new Xi(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = is(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return Dt(e);
};
Ce.hydrate = function (e, t, n) {
  if (!Ll(t)) throw Error(w(200));
  return Tl(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!Ji(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Vc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ic(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Je] = t.current),
    qn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ol(t);
};
Ce.render = function (e, t, n) {
  if (!Ll(t)) throw Error(w(200));
  return Tl(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!Ll(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (Dt(function () {
        Tl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Je] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = Bi;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ll(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Tl(e, t, n, !1, r);
};
Ce.version = "18.2.0-next-9e3b772b8-20220608";
function Dc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dc);
    } catch (e) {
      console.error(e);
    }
}
Dc(), (Ia.exports = Ce);
var O1 = Ia.exports,
  ua = O1;
(ao.createRoot = ua.createRoot), (ao.hydrateRoot = ua.hydrateRoot);
function L1(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function T1(...e) {
  return (t) => e.forEach((n) => L1(n, t));
}
var Hc = V.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    l = V.Children.toArray(n),
    o = l.find(F1);
  if (o) {
    const i = o.props.children,
      u = l.map((a) =>
        a === o
          ? V.Children.count(i) > 1
            ? V.Children.only(null)
            : V.isValidElement(i)
            ? i.props.children
            : null
          : a
      );
    return v.jsx(ni, {
      ...r,
      ref: t,
      children: V.isValidElement(i) ? V.cloneElement(i, void 0, u) : null,
    });
  }
  return v.jsx(ni, { ...r, ref: t, children: n });
});
Hc.displayName = "Slot";
var ni = V.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (V.isValidElement(n)) {
    const l = I1(n);
    return V.cloneElement(n, { ...$1(r, n.props), ref: t ? T1(t, l) : l });
  }
  return V.Children.count(n) > 1 ? V.Children.only(null) : null;
});
ni.displayName = "SlotClone";
var R1 = ({ children: e }) => v.jsx(v.Fragment, { children: e });
function F1(e) {
  return V.isValidElement(e) && e.type === R1;
}
function $1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const l = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? l && o
        ? (n[r] = (...u) => {
            o(...u), l(...u);
          })
        : l && (n[r] = l)
      : r === "style"
      ? (n[r] = { ...l, ...o })
      : r === "className" && (n[r] = [l, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function I1(e) {
  var r, l;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (l = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : l.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Uc(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Uc(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function V1() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Uc(e)) && (r && (r += " "), (r += t));
  return r;
}
const aa = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  sa = V1,
  D1 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return sa(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: l, defaultVariants: o } = t,
      i = Object.keys(l).map((c) => {
        const m = n == null ? void 0 : n[c],
          h = o == null ? void 0 : o[c];
        if (m === null) return null;
        const p = aa(m) || aa(h);
        return l[c][p];
      }),
      u =
        n &&
        Object.entries(n).reduce((c, m) => {
          let [h, p] = m;
          return p === void 0 || (c[h] = p), c;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, m) => {
              let { class: h, className: p, ...k } = m;
              return Object.entries(k).every((S) => {
                let [x, A] = S;
                return Array.isArray(A)
                  ? A.includes({ ...o, ...u }[x])
                  : { ...o, ...u }[x] === A;
              })
                ? [...c, h, p]
                : c;
            }, []);
    return sa(
      e,
      i,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
function Zc(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (t = 0; t < l; t++)
        e[t] && (n = Zc(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function H1() {
  for (var e, t, n = 0, r = "", l = arguments.length; n < l; n++)
    (e = arguments[n]) && (t = Zc(e)) && (r && (r += " "), (r += t));
  return r;
}
const qi = "-";
function U1(e) {
  const t = B1(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function l(i) {
    const u = i.split(qi);
    return u[0] === "" && u.length !== 1 && u.shift(), Bc(u, t) || Z1(i);
  }
  function o(i, u) {
    const a = n[i] || [];
    return u && r[i] ? [...a, ...r[i]] : a;
  }
  return { getClassGroupId: l, getConflictingClassGroupIds: o };
}
function Bc(e, t) {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    l = r ? Bc(e.slice(1), r) : void 0;
  if (l) return l;
  if (t.validators.length === 0) return;
  const o = e.join(qi);
  return (i = t.validators.find(({ validator: u }) => u(o))) == null
    ? void 0
    : i.classGroupId;
}
const ca = /^\[(.+)\]$/;
function Z1(e) {
  if (ca.test(e)) {
    const t = ca.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function B1(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    Q1(Object.entries(e.classGroups), n).forEach(([o, i]) => {
      ri(i, r, o, t);
    }),
    r
  );
}
function ri(e, t, n, r) {
  e.forEach((l) => {
    if (typeof l == "string") {
      const o = l === "" ? t : da(t, l);
      o.classGroupId = n;
      return;
    }
    if (typeof l == "function") {
      if (W1(l)) {
        ri(l(r), t, n, r);
        return;
      }
      t.validators.push({ validator: l, classGroupId: n });
      return;
    }
    Object.entries(l).forEach(([o, i]) => {
      ri(i, da(t, o), n, r);
    });
  });
}
function da(e, t) {
  let n = e;
  return (
    t.split(qi).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function W1(e) {
  return e.isThemeGetter;
}
function Q1(e, t) {
  return t
    ? e.map(([n, r]) => {
        const l = r.map((o) =>
          typeof o == "string"
            ? t + o
            : typeof o == "object"
            ? Object.fromEntries(Object.entries(o).map(([i, u]) => [t + i, u]))
            : o
        );
        return [n, l];
      })
    : e;
}
function K1(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function l(o, i) {
    n.set(o, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(o) {
      let i = n.get(o);
      if (i !== void 0) return i;
      if ((i = r.get(o)) !== void 0) return l(o, i), i;
    },
    set(o, i) {
      n.has(o) ? n.set(o, i) : l(o, i);
    },
  };
}
const Wc = "!";
function G1(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    l = t.length;
  return function (i) {
    const u = [];
    let a = 0,
      c = 0,
      m;
    for (let x = 0; x < i.length; x++) {
      let A = i[x];
      if (a === 0) {
        if (A === r && (n || i.slice(x, x + l) === t)) {
          u.push(i.slice(c, x)), (c = x + l);
          continue;
        }
        if (A === "/") {
          m = x;
          continue;
        }
      }
      A === "[" ? a++ : A === "]" && a--;
    }
    const h = u.length === 0 ? i : i.substring(c),
      p = h.startsWith(Wc),
      k = p ? h.substring(1) : h,
      S = m && m > c ? m - c : void 0;
    return {
      modifiers: u,
      hasImportantModifier: p,
      baseClassName: k,
      maybePostfixModifierPosition: S,
    };
  };
}
function Y1(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function X1(e) {
  return { cache: K1(e.cacheSize), splitModifiers: G1(e), ...U1(e) };
}
const J1 = /\s+/;
function q1(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: l,
    } = t,
    o = new Set();
  return e
    .trim()
    .split(J1)
    .map((i) => {
      const {
        modifiers: u,
        hasImportantModifier: a,
        baseClassName: c,
        maybePostfixModifierPosition: m,
      } = n(i);
      let h = r(m ? c.substring(0, m) : c),
        p = !!m;
      if (!h) {
        if (!m) return { isTailwindClass: !1, originalClassName: i };
        if (((h = r(c)), !h))
          return { isTailwindClass: !1, originalClassName: i };
        p = !1;
      }
      const k = Y1(u).join(":");
      return {
        isTailwindClass: !0,
        modifierId: a ? k + Wc : k,
        classGroupId: h,
        originalClassName: i,
        hasPostfixModifier: p,
      };
    })
    .reverse()
    .filter((i) => {
      if (!i.isTailwindClass) return !0;
      const { modifierId: u, classGroupId: a, hasPostfixModifier: c } = i,
        m = u + a;
      return o.has(m)
        ? !1
        : (o.add(m), l(a, c).forEach((h) => o.add(u + h)), !0);
    })
    .reverse()
    .map((i) => i.originalClassName)
    .join(" ");
}
function b1() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Qc(t)) && (r && (r += " "), (r += n));
  return r;
}
function Qc(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Qc(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function ef(e, ...t) {
  let n,
    r,
    l,
    o = i;
  function i(a) {
    const c = t.reduce((m, h) => h(m), e());
    return (n = X1(c)), (r = n.cache.get), (l = n.cache.set), (o = u), u(a);
  }
  function u(a) {
    const c = r(a);
    if (c) return c;
    const m = q1(a, n);
    return l(a, m), m;
  }
  return function () {
    return o(b1.apply(null, arguments));
  };
}
function U(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const Kc = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  tf = /^\d+\/\d+$/,
  nf = new Set(["px", "full", "screen"]),
  rf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  lf =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  of = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  uf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  af =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Be(e) {
  return Lt(e) || nf.has(e) || tf.test(e);
}
function lt(e) {
  return xn(e, "length", vf);
}
function Lt(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Lr(e) {
  return xn(e, "number", Lt);
}
function zn(e) {
  return !!e && Number.isInteger(Number(e));
}
function sf(e) {
  return e.endsWith("%") && Lt(e.slice(0, -1));
}
function O(e) {
  return Kc.test(e);
}
function ot(e) {
  return rf.test(e);
}
const cf = new Set(["length", "size", "percentage"]);
function df(e) {
  return xn(e, cf, Gc);
}
function ff(e) {
  return xn(e, "position", Gc);
}
const pf = new Set(["image", "url"]);
function mf(e) {
  return xn(e, pf, yf);
}
function hf(e) {
  return xn(e, "", gf);
}
function An() {
  return !0;
}
function xn(e, t, n) {
  const r = Kc.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function vf(e) {
  return lf.test(e) && !of.test(e);
}
function Gc() {
  return !1;
}
function gf(e) {
  return uf.test(e);
}
function yf(e) {
  return af.test(e);
}
function wf() {
  const e = U("colors"),
    t = U("spacing"),
    n = U("blur"),
    r = U("brightness"),
    l = U("borderColor"),
    o = U("borderRadius"),
    i = U("borderSpacing"),
    u = U("borderWidth"),
    a = U("contrast"),
    c = U("grayscale"),
    m = U("hueRotate"),
    h = U("invert"),
    p = U("gap"),
    k = U("gradientColorStops"),
    S = U("gradientColorStopPositions"),
    x = U("inset"),
    A = U("margin"),
    d = U("opacity"),
    s = U("padding"),
    f = U("saturate"),
    y = U("scale"),
    C = U("sepia"),
    N = U("skew"),
    _ = U("space"),
    P = U("translate"),
    H = () => ["auto", "contain", "none"],
    L = () => ["auto", "hidden", "clip", "visible", "scroll"],
    ce = () => ["auto", O, t],
    F = () => [O, t],
    tt = () => ["", Be, lt],
    jt = () => ["auto", Lt, O],
    pr = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    nt = () => ["solid", "dashed", "dotted", "double", "none"],
    Zt = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    E = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    z = () => ["", "0", O],
    M = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    I = () => [Lt, Lr],
    Q = () => [Lt, O];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [An],
      spacing: [Be, lt],
      blur: ["none", "", ot, O],
      brightness: I(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ot, O],
      borderSpacing: F(),
      borderWidth: tt(),
      contrast: I(),
      grayscale: z(),
      hueRotate: Q(),
      invert: z(),
      gap: F(),
      gradientColorStops: [e],
      gradientColorStopPositions: [sf, lt],
      inset: ce(),
      margin: ce(),
      opacity: I(),
      padding: F(),
      saturate: I(),
      scale: I(),
      sepia: z(),
      skew: Q(),
      space: F(),
      translate: F(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", O] }],
      container: ["container"],
      columns: [{ columns: [ot] }],
      "break-after": [{ "break-after": M() }],
      "break-before": [{ "break-before": M() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...pr(), O] }],
      overflow: [{ overflow: L() }],
      "overflow-x": [{ "overflow-x": L() }],
      "overflow-y": [{ "overflow-y": L() }],
      overscroll: [{ overscroll: H() }],
      "overscroll-x": [{ "overscroll-x": H() }],
      "overscroll-y": [{ "overscroll-y": H() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [x] }],
      "inset-x": [{ "inset-x": [x] }],
      "inset-y": [{ "inset-y": [x] }],
      start: [{ start: [x] }],
      end: [{ end: [x] }],
      top: [{ top: [x] }],
      right: [{ right: [x] }],
      bottom: [{ bottom: [x] }],
      left: [{ left: [x] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", zn, O] }],
      basis: [{ basis: ce() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", O] }],
      grow: [{ grow: z() }],
      shrink: [{ shrink: z() }],
      order: [{ order: ["first", "last", "none", zn, O] }],
      "grid-cols": [{ "grid-cols": [An] }],
      "col-start-end": [{ col: ["auto", { span: ["full", zn, O] }, O] }],
      "col-start": [{ "col-start": jt() }],
      "col-end": [{ "col-end": jt() }],
      "grid-rows": [{ "grid-rows": [An] }],
      "row-start-end": [{ row: ["auto", { span: [zn, O] }, O] }],
      "row-start": [{ "row-start": jt() }],
      "row-end": [{ "row-end": jt() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", O] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", O] }],
      gap: [{ gap: [p] }],
      "gap-x": [{ "gap-x": [p] }],
      "gap-y": [{ "gap-y": [p] }],
      "justify-content": [{ justify: ["normal", ...E()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...E(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...E(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [s] }],
      px: [{ px: [s] }],
      py: [{ py: [s] }],
      ps: [{ ps: [s] }],
      pe: [{ pe: [s] }],
      pt: [{ pt: [s] }],
      pr: [{ pr: [s] }],
      pb: [{ pb: [s] }],
      pl: [{ pl: [s] }],
      m: [{ m: [A] }],
      mx: [{ mx: [A] }],
      my: [{ my: [A] }],
      ms: [{ ms: [A] }],
      me: [{ me: [A] }],
      mt: [{ mt: [A] }],
      mr: [{ mr: [A] }],
      mb: [{ mb: [A] }],
      ml: [{ ml: [A] }],
      "space-x": [{ "space-x": [_] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [_] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", O, t] }],
      "min-w": [{ "min-w": [O, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            O,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [ot] },
            ot,
          ],
        },
      ],
      h: [{ h: [O, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [O, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", ot, lt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Lr,
          ],
        },
      ],
      "font-family": [{ font: [An] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            O,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", Lt, Lr] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Be,
            O,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", O] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", O] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [d] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [d] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...nt(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", Be, lt] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", Be, O] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: F() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            O,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", O] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [d] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...pr(), ff] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", df] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            mf,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [S] }],
      "gradient-via-pos": [{ via: [S] }],
      "gradient-to-pos": [{ to: [S] }],
      "gradient-from": [{ from: [k] }],
      "gradient-via": [{ via: [k] }],
      "gradient-to": [{ to: [k] }],
      rounded: [{ rounded: [o] }],
      "rounded-s": [{ "rounded-s": [o] }],
      "rounded-e": [{ "rounded-e": [o] }],
      "rounded-t": [{ "rounded-t": [o] }],
      "rounded-r": [{ "rounded-r": [o] }],
      "rounded-b": [{ "rounded-b": [o] }],
      "rounded-l": [{ "rounded-l": [o] }],
      "rounded-ss": [{ "rounded-ss": [o] }],
      "rounded-se": [{ "rounded-se": [o] }],
      "rounded-ee": [{ "rounded-ee": [o] }],
      "rounded-es": [{ "rounded-es": [o] }],
      "rounded-tl": [{ "rounded-tl": [o] }],
      "rounded-tr": [{ "rounded-tr": [o] }],
      "rounded-br": [{ "rounded-br": [o] }],
      "rounded-bl": [{ "rounded-bl": [o] }],
      "border-w": [{ border: [u] }],
      "border-w-x": [{ "border-x": [u] }],
      "border-w-y": [{ "border-y": [u] }],
      "border-w-s": [{ "border-s": [u] }],
      "border-w-e": [{ "border-e": [u] }],
      "border-w-t": [{ "border-t": [u] }],
      "border-w-r": [{ "border-r": [u] }],
      "border-w-b": [{ "border-b": [u] }],
      "border-w-l": [{ "border-l": [u] }],
      "border-opacity": [{ "border-opacity": [d] }],
      "border-style": [{ border: [...nt(), "hidden"] }],
      "divide-x": [{ "divide-x": [u] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [u] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [d] }],
      "divide-style": [{ divide: nt() }],
      "border-color": [{ border: [l] }],
      "border-color-x": [{ "border-x": [l] }],
      "border-color-y": [{ "border-y": [l] }],
      "border-color-t": [{ "border-t": [l] }],
      "border-color-r": [{ "border-r": [l] }],
      "border-color-b": [{ "border-b": [l] }],
      "border-color-l": [{ "border-l": [l] }],
      "divide-color": [{ divide: [l] }],
      "outline-style": [{ outline: ["", ...nt()] }],
      "outline-offset": [{ "outline-offset": [Be, O] }],
      "outline-w": [{ outline: [Be, lt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: tt() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [d] }],
      "ring-offset-w": [{ "ring-offset": [Be, lt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", ot, hf] }],
      "shadow-color": [{ shadow: [An] }],
      opacity: [{ opacity: [d] }],
      "mix-blend": [{ "mix-blend": [...Zt(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": Zt() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [a] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", ot, O] }],
      grayscale: [{ grayscale: [c] }],
      "hue-rotate": [{ "hue-rotate": [m] }],
      invert: [{ invert: [h] }],
      saturate: [{ saturate: [f] }],
      sepia: [{ sepia: [C] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [a] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [m] }],
      "backdrop-invert": [{ "backdrop-invert": [h] }],
      "backdrop-opacity": [{ "backdrop-opacity": [d] }],
      "backdrop-saturate": [{ "backdrop-saturate": [f] }],
      "backdrop-sepia": [{ "backdrop-sepia": [C] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [i] }],
      "border-spacing-x": [{ "border-spacing-x": [i] }],
      "border-spacing-y": [{ "border-spacing-y": [i] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            O,
          ],
        },
      ],
      duration: [{ duration: Q() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", O] }],
      delay: [{ delay: Q() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", O] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [y] }],
      "scale-x": [{ "scale-x": [y] }],
      "scale-y": [{ "scale-y": [y] }],
      rotate: [{ rotate: [zn, O] }],
      "translate-x": [{ "translate-x": [P] }],
      "translate-y": [{ "translate-y": [P] }],
      "skew-x": [{ "skew-x": [N] }],
      "skew-y": [{ "skew-y": [N] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            O,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            O,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": F() }],
      "scroll-mx": [{ "scroll-mx": F() }],
      "scroll-my": [{ "scroll-my": F() }],
      "scroll-ms": [{ "scroll-ms": F() }],
      "scroll-me": [{ "scroll-me": F() }],
      "scroll-mt": [{ "scroll-mt": F() }],
      "scroll-mr": [{ "scroll-mr": F() }],
      "scroll-mb": [{ "scroll-mb": F() }],
      "scroll-ml": [{ "scroll-ml": F() }],
      "scroll-p": [{ "scroll-p": F() }],
      "scroll-px": [{ "scroll-px": F() }],
      "scroll-py": [{ "scroll-py": F() }],
      "scroll-ps": [{ "scroll-ps": F() }],
      "scroll-pe": [{ "scroll-pe": F() }],
      "scroll-pt": [{ "scroll-pt": F() }],
      "scroll-pr": [{ "scroll-pr": F() }],
      "scroll-pb": [{ "scroll-pb": F() }],
      "scroll-pl": [{ "scroll-pl": F() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", O] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Be, lt, Lr] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const xf = ef(wf);
function kf(...e) {
  return xf(H1(e));
}
const Sf = D1(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
    {
      variants: {
        variant: {
          default:
            "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
          destructive:
            "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
          outline:
            "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
          secondary:
            "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
          ghost:
            "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
          link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  vl = V.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...l }, o) => {
      const i = r ? Hc : "button";
      return v.jsx(i, {
        className: kf(Sf({ variant: t, size: n, className: e })),
        ref: o,
        ...l,
      });
    }
  );
vl.displayName = "Button";
const Ef = () =>
    v.jsxs("header", {
      className: "flex justify-between items-center py-2 px-4 md:py-4 md:px-6",
      children: [
        v.jsx("div", {
          children: v.jsx("p", {
            className: "text-xl md:text-2xl font-bold Title",
            children: "Looppi",
          }),
        }),
        v.jsxs("nav", {
          className: "",
          children: [
            v.jsx("a", {
              href: "#about",
              children: v.jsx(vl, {
                variant: "ghost",
                className: "text-sm",
                children: "Meistä",
              }),
            }),
            v.jsx("a", {
              href: "#price",
              children: v.jsx(vl, {
                variant: "ghost",
                className: "text-sm",
                children: "Hinnasto",
              }),
            }),
          ],
        }),
      ],
    }),
  Cf = () =>
    v.jsx("section", {
      className: "py-8",
      children: v.jsx("div", {
        className: "container mx-auto px-4 lg:px-0",
        children: v.jsxs("div", {
          className: "max-w-3xl mx-auto",
          children: [
            v.jsxs("div", {
              className: "mb-8",
              children: [
                v.jsx("p", {
                  className:
                    "font-bold text-3xl bg-gray-200 inline-block px-2 rounded p-1",
                  children: "Meistä",
                }),
                v.jsx("p", {
                  className: "my-5",
                  children:
                    "Looppi perustettiin vuonna 2024 tarpeesta ammattimaiselle sosiaalisen median hallinnalle, ja tavoitteemme on auttaa yrityksiä ja yksityishenkilöitä menestymään sosiaalisessa mediassa. Tarjoamme kattavia sosiaalisen median palveluita, kuten strategista suunnittelua, sisällöntuotantoa, analytiikkaa ja raportointia sekä koulutusta ja konsultointia. Vahvuuksiamme ovat luovuus, asiantuntemus ja joustavuus: luomme innovatiivisia ja vaikuttavia ratkaisuja, omaamme syvällisen ymmärryksen sosiaalisen median trendeistä ja sopeudumme nopeasti muuttuviin tarpeisiin. Missiomme on auttaa sinua saavuttamaan täysi potentiaalisi sosiaalisessa mediassa. Valmis nostamaan sosiaalisen median pelisi uudelle tasolle? Ota yhteyttä meihin tänään!",
                }),
              ],
            }),
            v.jsxs("div", {
              children: [
                v.jsx("p", {
                  className:
                    "font-bold text-3xl bg-gray-200 inline-block px-2 rounded p-1 mt-8",
                  id: "what-we-do",
                  children: "Mitä teemme",
                }),
                v.jsxs("ul", {
                  className: "my-5 pl-5 list-disc",
                  children: [
                    v.jsx("li", {
                      children:
                        "Sosiaalisen median strategian suunnittelu ja strategioiden määrittely yrityksille.",
                    }),
                    v.jsx("li", {
                      children:
                        "Sisällöntuotanto: kuvat, videot, blogikirjoitukset ja infografiikat eri alustoille.",
                    }),
                    v.jsx("li", {
                      children:
                        "Sosiaalisen median hallinta: tilejä hallinnoimalla ja käyttäjien kanssa vuorovaikuttelemalla.",
                    }),
                    v.jsx("li", {
                      children:
                        "Mainonnan hallinta: mainoskampanjoiden suunnittelu ja toteutus eri alustoilla.",
                    }),
                    v.jsx("li", {
                      children:
                        "Analytiikka ja raportointi: kampanjoiden suorituskyvyn seuranta ja asiakkaille raportointi.",
                    }),
                    v.jsx("li", {
                      children:
                        "Koulutus ja konsultointi: koulutukset asiakkaille sosiaalisen median taitojen kehittämiseksi.",
                    }),
                    v.jsx("li", {
                      children:
                        "Kilpailijaseuranta ja trendien seuraaminen: kilpailijoiden ja trendien seuranta markkinakilpailukyvyn varmistamiseksi.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  jf = () =>
    v.jsxs("div", {
      className: "max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        v.jsx("div", {
          className: "text-center",
          children: v.jsx("p", {
            className:
              "font-bold text-3xl bg-black bg-opacity-5 inline-block px-2 rounded p-1 ",
            id: "price",
            children: "Hinnasto.",
          }),
        }),
        v.jsxs("div", {
          className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
          children: [
            v.jsxs("div", {
              className:
                "border-2 border-black/60 rounded-2xl flex flex-col p-2",
              children: [
                v.jsx("div", {
                  className: "p-3 font-bold text-xl border-b",
                  children: v.jsx("p", { children: "Elvytys-paketti" }),
                }),
                v.jsx("p", {
                  className: "mx-2 text-sm font-semibold mt-2",
                  children: "Sisältää:",
                }),
                v.jsx("div", {
                  className: "mx-4 flex-1",
                  children: v.jsxs("ul", {
                    className: "text-sm list-disc ml-3",
                    children: [
                      v.jsx("li", { children: "Tuoteesittelyjä " }),
                      v.jsx("li", { children: "Asiakastapaamisia " }),
                      v.jsx("li", { children: "Mainostaminen somekanavissa " }),
                      v.jsx("li", { children: "Verkkosivuston kehittäminen " }),
                      v.jsx("li", { children: "SEO-optimointi " }),
                    ],
                  }),
                }),
                v.jsxs("div", {
                  className: "p-3 font-bold text-xl mt-auto",
                  children: [
                    v.jsx("p", {
                      className: "text-xs font-normal opacity-50",
                      children: "Hinta alkaen",
                    }),
                    v.jsx("p", { children: "200€/kk" }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              className:
                "border-2 rounded-2xl border-black/60 flex flex-col p-2",
              children: [
                v.jsx("div", {
                  className: "p-3 font-bold border-b text-xl",
                  children: v.jsx("p", { children: "Huomion kaipuu-paketti" }),
                }),
                v.jsx("p", {
                  className: "mx-2 text-sm font-semibold mt-2",
                  children: "Sisältää:",
                }),
                v.jsx("div", {
                  className: "mx-4 flex-1",
                  children: v.jsxs("ul", {
                    className: "text-sm list-disc ml-3",
                    children: [
                      v.jsx("li", { children: "Tuoteesittelyjä " }),
                      v.jsx("li", { children: "Asiakastapaamisia " }),
                      v.jsx("li", { children: "Mainostaminen somekanavissa " }),
                      v.jsx("li", { children: "Verkkosivuston kehittäminen " }),
                      v.jsx("li", { children: "SEO-optimointi " }),
                      v.jsx("li", {
                        children:
                          "Artikkeleiden ja blogipostauksien kirjoittaminen ",
                      }),
                      v.jsx("li", {
                        children: "Mainostaminen verkkosivuilla ",
                      }),
                      v.jsx("li", { children: "Sisältömarkkinointi " }),
                      v.jsx("li", {
                        children: "Asiakaskokemuksen parantaminen ",
                      }),
                    ],
                  }),
                }),
                v.jsxs("div", {
                  className: "p-3 font-bold text-xl mt-auto",
                  children: [
                    v.jsx("p", {
                      className: "text-xs font-normal opacity-50",
                      children: "Hinta alkaen",
                    }),
                    v.jsx("p", { children: "350€/kk" }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              className:
                "border-2 rounded-2xl border-black/60 flex flex-col p-2",
              children: [
                v.jsx("div", {
                  className: "p-3 font-bold border-b text-xl",
                  children: v.jsx("p", { children: "Kaikki huomaa-paketti" }),
                }),
                v.jsx("p", {
                  className: "mx-2 text-sm font-semibold mt-2",
                  children: "Sisältää:",
                }),
                v.jsx("div", {
                  className: "mx-4 flex-1",
                  children: v.jsxs("ul", {
                    className: "text-sm list-disc ml-3",
                    children: [
                      v.jsx("li", { children: "Tuoteesittelyjä " }),
                      v.jsx("li", { children: "Asiakastapaamisia " }),
                      v.jsx("li", { children: "Mainostaminen somekanavissa " }),
                      v.jsx("li", { children: "Verkkosivuston kehittäminen " }),
                      v.jsx("li", { children: "SEO-optimointi " }),
                      v.jsx("li", {
                        children:
                          "Artikkeleiden ja blogipostauksien kirjoittaminen ",
                      }),
                      v.jsx("li", {
                        children: "Mainostaminen verkkosivuilla ",
                      }),
                      v.jsx("li", { children: "Sisältömarkkinointi " }),
                      v.jsx("li", {
                        children: "Asiakaskokemuksen parantaminen ",
                      }),
                      v.jsx("li", { children: "Television ja radiomainonta " }),
                      v.jsx("li", { children: "Tapahtumien järjestäminen " }),
                      v.jsx("li", {
                        children: "Laajennettu markkinointistrategia ",
                      }),
                      v.jsx("li", { children: "Kansainvälinen markkinointi " }),
                    ],
                  }),
                }),
                v.jsxs("div", {
                  className: "p-3 font-bold text-xl mt-auto",
                  children: [
                    v.jsx("p", {
                      className: "text-xs font-normal opacity-50",
                      children: "Hinta alkaen",
                    }),
                    v.jsx("p", { children: "500€/kk" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        v.jsx("div", {
          className: "text-center my-5 text-sm opacity-50",
          children: v.jsxs("p", {
            children: [
              "Eikö löytynyt sopivaa pakettia? ",
              v.jsx("br", {}),
              "Ota yhteyttä ja suunnitellaan yhdessä sopiva paketti.",
            ],
          }),
        }),
      ],
    });
var Nf = Object.defineProperty,
  gl = Object.getOwnPropertySymbols,
  Yc = Object.prototype.hasOwnProperty,
  Xc = Object.prototype.propertyIsEnumerable,
  fa = (e, t, n) =>
    t in e
      ? Nf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  _f = (e, t) => {
    for (var n in t || (t = {})) Yc.call(t, n) && fa(e, n, t[n]);
    if (gl) for (var n of gl(t)) Xc.call(t, n) && fa(e, n, t[n]);
    return e;
  },
  Pf = (e, t) => {
    var n = {};
    for (var r in e) Yc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && gl)
      for (var r of gl(e)) t.indexOf(r) < 0 && Xc.call(e, r) && (n[r] = e[r]);
    return n;
  };
const Jc = V.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: l = "currentColor",
      size: o = "1em",
      weight: i = "regular",
      mirrored: u = !1,
      children: a,
      weights: c,
    } = n,
    m = Pf(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]);
  return g.createElement(
    "svg",
    _f(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        fill: l,
        viewBox: "0 0 256 256",
        transform: u ? "scale(-1, 1)" : void 0,
      },
      m
    ),
    !!r && g.createElement("title", null, r),
    a,
    c.get(i)
  );
});
Jc.displayName = "SSRBase";
const zf = Jc,
  Af = new Map([
    [
      "bold",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V156h20a12,12,0,0,0,0-24H140V112a12,12,0,0,1,12-12h16a12,12,0,0,0,0-24H152a36,36,0,0,0-36,36v20H96a12,12,0,0,0,0,24h20v55.13a84,84,0,1,1,24,0Z",
        })
      ),
    ],
    [
      "duotone",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
          opacity: "0.2",
        }),
        g.createElement("path", {
          d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z",
        })
      ),
    ],
    [
      "fill",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z",
        })
      ),
    ],
    [
      "light",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z",
        })
      ),
    ],
    [
      "regular",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z",
        })
      ),
    ],
    [
      "thin",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V148h28a4,4,0,0,0,0-8H132V112a20,20,0,0,1,20-20h16a4,4,0,0,0,0-8H152a28,28,0,0,0-28,28v28H96a4,4,0,0,0,0,8h28v71.91a92,92,0,1,1,8,0Z",
        })
      ),
    ],
  ]);
var Mf = Object.defineProperty,
  Of = Object.defineProperties,
  Lf = Object.getOwnPropertyDescriptors,
  pa = Object.getOwnPropertySymbols,
  Tf = Object.prototype.hasOwnProperty,
  Rf = Object.prototype.propertyIsEnumerable,
  ma = (e, t, n) =>
    t in e
      ? Mf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ff = (e, t) => {
    for (var n in t || (t = {})) Tf.call(t, n) && ma(e, n, t[n]);
    if (pa) for (var n of pa(t)) Rf.call(t, n) && ma(e, n, t[n]);
    return e;
  },
  $f = (e, t) => Of(e, Lf(t));
const qc = V.forwardRef((e, t) =>
  g.createElement(zf, $f(Ff({ ref: t }, e), { weights: Af }))
);
qc.displayName = "FacebookLogo";
const If = new Map([
    [
      "bold",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z",
        })
      ),
    ],
    [
      "duotone",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
          opacity: "0.2",
        }),
        g.createElement("path", {
          d: "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
        })
      ),
    ],
    [
      "fill",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z",
        })
      ),
    ],
    [
      "light",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z",
        })
      ),
    ],
    [
      "regular",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
        })
      ),
    ],
    [
      "thin",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM176,28H80A52.06,52.06,0,0,0,28,80v96a52.06,52.06,0,0,0,52,52h96a52.06,52.06,0,0,0,52-52V80A52.06,52.06,0,0,0,176,28Zm44,148a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z",
        })
      ),
    ],
  ]),
  Vf = new Map([
    [
      "bold",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M188.84,120.46a68.14,68.14,0,0,0-10-6.23c-3.72-21.68-16.41-37.41-35.52-43.2C121.94,64.55,97.29,72.42,86,89.34a12,12,0,0,0,20,13.32c5.47-8.2,19.11-12.08,30.41-8.66a24.72,24.72,0,0,1,14.88,12.24,86.73,86.73,0,0,0-8.86-.45C108.56,105.79,84,125.22,84,152c0,22.9,17.54,39.52,41.71,39.52a52,52,0,0,0,37.23-16c6-6.23,12.88-16.46,15.72-32.07,6.2,6.42,9.34,14.67,9.34,24.59,0,17.74-19.07,44-60,44-45.76,0-68-27.48-68-84s22.24-84,68-84c31.08,0,51,12.42,60.8,38a12,12,0,0,0,22.4-8.62C197.77,38.44,169,20,128,20,68.67,20,36,58.35,36,128s32.67,108,92,108c31.36,0,51.08-12.05,62.11-22.15C203.81,201.28,212,184.14,212,168,212,148.36,204,131.92,188.84,120.46Zm-43.2,38.39a27.9,27.9,0,0,1-19.93,8.67c-8.17,0-17.71-4.06-17.71-15.52,0-15.26,17.84-22.21,34.41-22.21a60.23,60.23,0,0,1,13.51,1.52C155.36,142.93,151.84,152.41,145.64,158.85Z",
        })
      ),
    ],
    [
      "duotone",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M208,128c0,48-16,96-80,96s-80-48-80-96,16-96,80-96S208,80,208,128Z",
          opacity: "0.2",
        }),
        g.createElement("path", {
          d: "M186.42,123.65a63.81,63.81,0,0,0-11.13-6.72c-4-29.89-24-39.31-33.1-42.07-19.78-6-42.51,1.19-52.85,16.7a8,8,0,0,0,13.32,8.88c6.37-9.56,22-14.16,34.89-10.27,9.95,3,16.82,10.3,20.15,21a81.05,81.05,0,0,0-15.29-1.43c-13.92,0-26.95,3.59-36.67,10.1C94.3,127.57,88,139,88,152c0,20.58,15.86,35.52,37.71,35.52a48,48,0,0,0,34.35-14.81c6.44-6.7,14-18.36,15.61-37.1.38.26.74.53,1.1.8C186.88,144.05,192,154.68,192,168c0,19.36-20.34,48-64,48-26.73,0-45.48-8.65-57.34-26.44C60.93,175,56,154.26,56,128s4.93-47,14.66-61.56C82.52,48.65,101.27,40,128,40c32.93,0,54,13.25,64.53,40.52a8,8,0,1,0,14.93-5.75C194.68,41.56,167.2,24,128,24,96,24,72.19,35.29,57.34,57.56,45.83,74.83,40,98.52,40,128s5.83,53.17,17.34,70.44C72.19,220.71,96,232,128,232c30.07,0,48.9-11.48,59.4-21.1C200.3,199.08,208,183,208,168,208,149.66,200.54,134.32,186.42,123.65Zm-37.89,38a31.94,31.94,0,0,1-22.82,9.9c-10.81,0-21.71-6-21.71-19.52,0-12.63,12-26.21,38.41-26.21A63.88,63.88,0,0,1,160,128.24C160,142.32,156,153.86,148.53,161.62Z",
        })
      ),
    ],
    [
      "fill",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M138.62,128a53.54,53.54,0,0,1,13.1,1.63c-.57,8.21-3.34,15-8.11,19.61A23.89,23.89,0,0,1,127,156c-11.87,0-15-7.58-15-12.07C112,133,125.8,128,138.62,128ZM224,128c0,65.12-35.89,104-96,104S32,193.12,32,128,67.89,24,128,24,224,62.88,224,128ZM72,128c0-43.07,18.32-64,56-64,26.34,0,43,10.08,50.81,30.83a8,8,0,0,0,15-5.66C180.9,55.14,150.9,48,128,48c-26.1,0-45.52,8.7-57.72,25.86C60.8,87.19,56,105.4,56,128s4.8,40.81,14.28,54.14C82.48,199.3,101.9,208,128,208c24.45,0,39.82-8.8,48.41-16.18,10.76-9.25,17.19-21.89,17.19-33.82,0-14.3-6.59-26.79-18.56-35.17a54.16,54.16,0,0,0-7.77-4.5c-2.09-14.65-10-25.75-22.34-31.07C130.43,81,112,83.93,101.21,94.19a8,8,0,0,0,11,11.62c5.43-5.14,16.79-8,26.4-3.85a20.05,20.05,0,0,1,10.77,10.92,68.89,68.89,0,0,0-10.76-.85C113.53,112,96,125.15,96,143.93c0,16.27,13,28.07,31,28.07a40,40,0,0,0,27.75-11.29c4.7-4.59,10.11-12.2,12.17-24A25.55,25.55,0,0,1,177.6,158c0,13.71-15.76,34-49.6,34C90.32,192,72,171.07,72,128Z",
        })
      ),
    ],
    [
      "light",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M185.22,125.25a62,62,0,0,0-11.78-7c-3.53-29.6-23-38.82-31.83-41.5-19-5.74-40.73,1.09-50.6,15.9a6,6,0,1,0,10,6.66c6.94-10.41,23.25-15.28,37.14-11.07,7.22,2.18,18.39,8.34,22.39,25.61a78.74,78.74,0,0,0-18.11-2.08c-13.53,0-26.16,3.46-35.55,9.77C96,128.85,90,139.66,90,152c0,22,18,33.52,35.71,33.52a46,46,0,0,0,32.91-14.19c6.58-6.85,14.35-19.11,15.29-39.26a44.59,44.59,0,0,1,4.07,2.75c10.48,7.92,16,19.4,16,33.18,0,20.16-21,50-66,50-27.07,0-46.92-9.19-59-27.33C59,175.75,54,154.66,54,128s5-47.75,15-62.67C81.08,47.19,100.93,38,128,38c33.85,0,55.57,13.67,66.4,41.8a6,6,0,1,0,11.2-4.31C193,42.65,166.85,26,128,26,96.67,26,73.46,37,59,58.67,47.72,75.6,42,98.93,42,128s5.72,52.4,17,69.33C73.46,219,96.67,230,128,230c29.43,0,47.81-11.19,58.05-20.58C198.54,198,206,182.49,206,168,206,150.31,198.81,135.52,185.22,125.25ZM150,163a33.94,33.94,0,0,1-24.26,10.51C109.33,173.52,102,162.71,102,152c0-13.59,12.64-28.21,40.41-28.21a65.33,65.33,0,0,1,19.58,3c0,.41,0,.82,0,1.24C162,142.72,157.84,154.82,150,163Z",
        })
      ),
    ],
    [
      "regular",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M186.42,123.65a63.81,63.81,0,0,0-11.13-6.72c-4-29.89-24-39.31-33.1-42.07-19.78-6-42.51,1.19-52.85,16.7a8,8,0,0,0,13.32,8.88c6.37-9.56,22-14.16,34.89-10.27,9.95,3,16.82,10.3,20.15,21a81.05,81.05,0,0,0-15.29-1.43c-13.92,0-26.95,3.59-36.67,10.1C94.3,127.57,88,139,88,152c0,20.58,15.86,35.52,37.71,35.52a48,48,0,0,0,34.35-14.81c6.44-6.7,14-18.36,15.61-37.1.38.26.74.53,1.1.8C186.88,144.05,192,154.68,192,168c0,19.36-20.34,48-64,48-26.73,0-45.48-8.65-57.34-26.44C60.93,175,56,154.26,56,128s4.93-47,14.66-61.56C82.52,48.65,101.27,40,128,40c32.93,0,54,13.25,64.53,40.52a8,8,0,1,0,14.93-5.75C194.68,41.56,167.2,24,128,24,96,24,72.19,35.29,57.34,57.56,45.83,74.83,40,98.52,40,128s5.83,53.17,17.34,70.44C72.19,220.71,96,232,128,232c30.07,0,48.9-11.48,59.4-21.1C200.3,199.08,208,183,208,168,208,149.66,200.54,134.32,186.42,123.65Zm-37.89,38a31.94,31.94,0,0,1-22.82,9.9c-10.81,0-21.71-6-21.71-19.52,0-12.63,12-26.21,38.41-26.21A63.88,63.88,0,0,1,160,128.24C160,142.32,156,153.86,148.53,161.62Z",
        })
      ),
    ],
    [
      "thin",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M184,126.84a59.8,59.8,0,0,0-12.42-7.16c-3-29.38-22-38.4-30.56-41-18.16-5.5-39,1-48.36,15.09a4,4,0,0,0,6.66,4.44c7.4-11.1,24.7-16.32,39.38-11.87,8.12,2.45,20.95,9.6,24.41,30.32a75.83,75.83,0,0,0-20.71-2.88c-13.14,0-25.37,3.34-34.44,9.43-10.45,7-16,17-16,28.78,0,20.7,17,31.52,33.71,31.52a44,44,0,0,0,31.47-13.58c9.56-9.94,14.68-24.19,14.82-41.23a50.18,50.18,0,0,1,7.19,4.51c11,8.32,16.81,20.34,16.81,34.78,0,11.73-6.25,24.46-16.7,34.05C170.36,210.24,154.21,220,128,220c-50.43,0-76-30.95-76-92s25.57-92,76-92c34.29,0,57.26,14.5,68.27,43.08a4,4,0,1,0,7.46-2.87C191.42,44.22,165.94,28,128,28,73.05,28,44,62.58,44,128s29.05,100,84,100c28.79,0,46.72-10.9,56.7-20.05,12.09-11.08,19.3-26,19.3-39.95C204,151,197.09,136.73,184,126.84Zm-32.6,37.55a35.92,35.92,0,0,1-25.7,11.13c-12.38,0-25.71-7.36-25.71-23.52,0-20.76,22-30.21,42.41-30.21A67.08,67.08,0,0,1,164,125.3c0,.88.05,1.78.05,2.7C164,143.25,159.65,155.83,151.41,164.39Z",
        })
      ),
    ],
  ]),
  Df = new Map([
    [
      "bold",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M224,68a44.05,44.05,0,0,1-44-44,12,12,0,0,0-12-12H128a12,12,0,0,0-12,12V156a16,16,0,1,1-22.85-14.47A12,12,0,0,0,100,130.69V88A12,12,0,0,0,85.9,76.19a79.35,79.35,0,0,0-47.08,27.74A81.84,81.84,0,0,0,20,156a80,80,0,0,0,160,0V122.67A107.47,107.47,0,0,0,224,132a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68Zm-12,39.15a83.05,83.05,0,0,1-37-14.91A12,12,0,0,0,156,102v54a56,56,0,0,1-112,0,57.86,57.86,0,0,1,32-51.56V124a40,40,0,1,0,64,32V36h17.06A68.21,68.21,0,0,0,212,90.94Z",
        })
      ),
    ],
    [
      "duotone",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M224,120a95.55,95.55,0,0,1-56-18v54a68,68,0,0,1-136,0c0-33.46,24.17-62.33,56-68v42.69A28,28,0,1,0,128,156V24h40a56,56,0,0,0,56,56Z",
          opacity: "0.2",
        }),
        g.createElement("path", {
          d: "M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z",
        })
      ),
    ],
    [
      "fill",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M232,80v40a8,8,0,0,1-8,8,103.25,103.25,0,0,1-48-11.71V156a76,76,0,0,1-152,0c0-36.9,26.91-69.52,62.6-75.88A8,8,0,0,1,96,88v42.69a8,8,0,0,1-4.57,7.23A20,20,0,1,0,120,156V24a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8,48.05,48.05,0,0,0,48,48A8,8,0,0,1,232,80Z",
        })
      ),
    ],
    [
      "light",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M224,74a50.06,50.06,0,0,1-50-50,6,6,0,0,0-6-6H128a6,6,0,0,0-6,6V156a22,22,0,1,1-31.43-19.89A6,6,0,0,0,94,130.69V88a6,6,0,0,0-7-5.91C52.2,88.28,26,120.05,26,156a74,74,0,0,0,148,0V112.93A101.28,101.28,0,0,0,224,126a6,6,0,0,0,6-6V80A6,6,0,0,0,224,74Zm-6,39.8a89.13,89.13,0,0,1-46.5-16.69A6,6,0,0,0,162,102v54a62,62,0,0,1-124,0c0-27.72,18.47-52.48,44-60.38v31.53A34,34,0,1,0,134,156V30h28.29A62.09,62.09,0,0,0,218,85.71Z",
        })
      ),
    ],
    [
      "regular",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z",
        })
      ),
    ],
    [
      "thin",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M224,76a52.06,52.06,0,0,1-52-52,4,4,0,0,0-4-4H128a4,4,0,0,0-4,4V156a24,24,0,1,1-34.28-21.69A4,4,0,0,0,92,130.69V88a4,4,0,0,0-4.7-3.94C53.49,90.08,28,121,28,156a72,72,0,0,0,144,0V109.44A99.26,99.26,0,0,0,224,124a4,4,0,0,0,4-4V80A4,4,0,0,0,224,76Zm-4,39.92a91.32,91.32,0,0,1-49.66-17.18A4,4,0,0,0,164,102v54a64,64,0,0,1-128,0c0-29.52,20.32-55.79,48-63v35.31A32,32,0,1,0,132,156V28h32.13A60.11,60.11,0,0,0,220,83.87Z",
        })
      ),
    ],
  ]),
  Hf = new Map([
    [
      "bold",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M251.09,67.41A12,12,0,0,0,240,60H211.82a52.73,52.73,0,0,0-43.67-24,50.85,50.85,0,0,0-36.6,14.85A51.87,51.87,0,0,0,116,88v.78c-36.83-11.57-66.38-40.9-66.7-41.23a12,12,0,0,0-20.47,7.38C22.52,125.1,53.48,162.72,70.89,178.05,56.4,192.83,36,200.68,35.8,200.76A12,12,0,0,0,30,218.66C32,221.55,43.44,236,80,236c72.25,0,132.7-55.26,139.6-126.63l28.88-28.88A12,12,0,0,0,251.09,67.41ZM199.52,95.52a11.93,11.93,0,0,0-3.49,7.72C192.14,164.23,141.18,212,80,212a90.78,90.78,0,0,1-12.49-.79C78,204.55,89.72,195.07,98,182.66a12,12,0,0,0-3.9-17c-.12-.07-12.33-7.49-23.43-24.42s-17.26-37-18.46-59.78C69.37,94.4,96,110.79,126,115.84A12,12,0,0,0,140,104V88a28,28,0,0,1,8.41-20.07A27.07,27.07,0,0,1,167.86,60a28.83,28.83,0,0,1,25.82,16.81,12,12,0,0,0,11,7.19H211Z",
        })
      ),
    ],
    [
      "duotone",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M240,72l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12s32-12,48-36c0,0-55.15-32-47.22-120,0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24Z",
          opacity: "0.2",
        }),
        g.createElement("path", {
          d: "M247.39,68.94A8,8,0,0,0,240,64H209.57A48.65,48.65,0,0,0,168.1,40a46.87,46.87,0,0,0-33.74,13.7A47.87,47.87,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.3,47.79,9.57,79.77,22,98.18a110.92,110.92,0,0,0,21.89,24.2C61.43,195.2,37.45,204.41,37.2,204.51a8,8,0,0,0-3.85,11.93c.74,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.68,0,129.72-54.42,135.76-124.44l29.9-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.52-6.25,27.56-17,37.88-32.48a8,8,0,0,0-2.61-11.34c-.13-.08-12.86-7.74-24.48-25.29C54.54,124.11,48,100.38,48,73.09c16,13,45.25,33.18,78.69,38.8A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.89,30.89,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z",
        })
      ),
    ],
    [
      "fill",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z",
        })
      ),
    ],
    [
      "light",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M245.54,69.71A6,6,0,0,0,240,66H208.4a46.6,46.6,0,0,0-40.33-24,44.93,44.93,0,0,0-32.31,13.12A45.92,45.92,0,0,0,122,88v8.66c-42-10-76.6-44.52-77-44.88A6,6,0,0,0,34.8,55.46c-4.25,47.22,9.42,78.75,21.64,96.89a107.71,107.71,0,0,0,23.07,25c-15.49,19-41.34,28.89-41.62,29a6,6,0,0,0-2.88,9C36,216.83,45.78,230,80,230c69.88,0,128.23-54,133.82-123.34l30.42-30.41A6,6,0,0,0,245.54,69.71ZM203.76,99.76a6,6,0,0,0-1.75,3.86C197.93,167.76,144.33,218,80,218c-14,0-22.76-2.41-28.06-4.8,11.3-5.68,29.72-16.88,41.05-33.87a6,6,0,0,0,.85-4.67A6,6,0,0,0,91,170.82c-.13-.08-13.13-7.86-25-25.72C52,124,45.31,98.43,46,68.88c14.88,12.6,45.57,35.09,81,41a6,6,0,0,0,7-5.92V88a34,34,0,0,1,10.19-24.34A33.05,33.05,0,0,1,167.93,54c13.43.17,26,8.37,31.24,20.4a6,6,0,0,0,5.5,3.6h20.84Z",
        })
      ),
    ],
    [
      "regular",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z",
        })
      ),
    ],
    [
      "thin",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M243.7,70.47A4,4,0,0,0,240,68H207.2a44.57,44.57,0,0,0-39.15-24,42.76,42.76,0,0,0-30.88,12.55A43.85,43.85,0,0,0,124,88V99.16c-43.65-9.39-80-45.6-80.39-46a4,4,0,0,0-4.19-.95,4,4,0,0,0-2.63,3.41c-4.2,46.62,9.27,77.71,21.31,95.59A103.68,103.68,0,0,0,82.35,177c-15.68,20.49-43.46,31.13-43.75,31.24a4,4,0,0,0-1.93,6c.27.4,2.79,4,9.54,7.36C54.73,225.84,66.1,228,80,228c69.09,0,126.73-53.56,131.89-122.23l30.94-30.94A4,4,0,0,0,243.7,70.47Zm-38.53,30.7a4,4,0,0,0-1.16,2.58C199.85,168.94,145.38,220,80,220c-17.85,0-27.63-3.89-32.5-6.87,10.37-4.82,31.45-16.34,43.83-34.91a4,4,0,0,0,.56-3.12A3.93,3.93,0,0,0,90,172.55c-.13-.08-13.39-8-25.52-26.15C54,130.71,42.39,104.11,44.19,64.65c13.17,11.62,45.48,37,83.15,43.3a4,4,0,0,0,4.66-4V88a36,36,0,0,1,10.79-25.76A35,35,0,0,1,168,52c14.2.18,27.49,8.86,33.06,21.61A4,4,0,0,0,204.67,76h25.67Z",
        })
      ),
    ],
  ]),
  Uf = new Map([
    [
      "bold",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z",
        })
      ),
    ],
    [
      "duotone",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",
          opacity: "0.2",
        }),
        g.createElement("path", {
          d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z",
        })
      ),
    ],
    [
      "fill",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z",
        })
      ),
    ],
    [
      "light",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z",
        })
      ),
    ],
    [
      "regular",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z",
        })
      ),
    ],
    [
      "thin",
      g.createElement(
        g.Fragment,
        null,
        g.createElement("path", {
          d: "M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z",
        })
      ),
    ],
  ]),
  Zf = V.createContext({
    color: "currentColor",
    size: "1em",
    weight: "regular",
    mirrored: !1,
  });
var Bf = Object.defineProperty,
  yl = Object.getOwnPropertySymbols,
  bc = Object.prototype.hasOwnProperty,
  e0 = Object.prototype.propertyIsEnumerable,
  ha = (e, t, n) =>
    t in e
      ? Bf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  va = (e, t) => {
    for (var n in t || (t = {})) bc.call(t, n) && ha(e, n, t[n]);
    if (yl) for (var n of yl(t)) e0.call(t, n) && ha(e, n, t[n]);
    return e;
  },
  ga = (e, t) => {
    var n = {};
    for (var r in e) bc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && yl)
      for (var r of yl(e)) t.indexOf(r) < 0 && e0.call(e, r) && (n[r] = e[r]);
    return n;
  };
const t0 = V.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: l,
      size: o,
      weight: i,
      mirrored: u,
      children: a,
      weights: c,
    } = n,
    m = ga(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]),
    h = V.useContext(Zf),
    {
      color: p = "currentColor",
      size: k,
      weight: S = "regular",
      mirrored: x = !1,
    } = h,
    A = ga(h, ["color", "size", "weight", "mirrored"]);
  return g.createElement(
    "svg",
    va(
      va(
        {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: o ?? k,
          height: o ?? k,
          fill: l ?? p,
          viewBox: "0 0 256 256",
          transform: u || x ? "scale(-1, 1)" : void 0,
        },
        A
      ),
      m
    ),
    !!r && g.createElement("title", null, r),
    a,
    c.get(i ?? S)
  );
});
t0.displayName = "IconBase";
const fr = t0;
var Wf = Object.defineProperty,
  Qf = Object.defineProperties,
  Kf = Object.getOwnPropertyDescriptors,
  ya = Object.getOwnPropertySymbols,
  Gf = Object.prototype.hasOwnProperty,
  Yf = Object.prototype.propertyIsEnumerable,
  wa = (e, t, n) =>
    t in e
      ? Wf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Xf = (e, t) => {
    for (var n in t || (t = {})) Gf.call(t, n) && wa(e, n, t[n]);
    if (ya) for (var n of ya(t)) Yf.call(t, n) && wa(e, n, t[n]);
    return e;
  },
  Jf = (e, t) => Qf(e, Kf(t));
const n0 = V.forwardRef((e, t) =>
  g.createElement(fr, Jf(Xf({ ref: t }, e), { weights: If }))
);
n0.displayName = "InstagramLogo";
var qf = Object.defineProperty,
  bf = Object.defineProperties,
  ep = Object.getOwnPropertyDescriptors,
  xa = Object.getOwnPropertySymbols,
  tp = Object.prototype.hasOwnProperty,
  np = Object.prototype.propertyIsEnumerable,
  ka = (e, t, n) =>
    t in e
      ? qf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  rp = (e, t) => {
    for (var n in t || (t = {})) tp.call(t, n) && ka(e, n, t[n]);
    if (xa) for (var n of xa(t)) np.call(t, n) && ka(e, n, t[n]);
    return e;
  },
  lp = (e, t) => bf(e, ep(t));
const r0 = V.forwardRef((e, t) =>
  g.createElement(fr, lp(rp({ ref: t }, e), { weights: Vf }))
);
r0.displayName = "ThreadsLogo";
var op = Object.defineProperty,
  ip = Object.defineProperties,
  up = Object.getOwnPropertyDescriptors,
  Sa = Object.getOwnPropertySymbols,
  ap = Object.prototype.hasOwnProperty,
  sp = Object.prototype.propertyIsEnumerable,
  Ea = (e, t, n) =>
    t in e
      ? op(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  cp = (e, t) => {
    for (var n in t || (t = {})) ap.call(t, n) && Ea(e, n, t[n]);
    if (Sa) for (var n of Sa(t)) sp.call(t, n) && Ea(e, n, t[n]);
    return e;
  },
  dp = (e, t) => ip(e, up(t));
const l0 = V.forwardRef((e, t) =>
  g.createElement(fr, dp(cp({ ref: t }, e), { weights: Df }))
);
l0.displayName = "TiktokLogo";
var fp = Object.defineProperty,
  pp = Object.defineProperties,
  mp = Object.getOwnPropertyDescriptors,
  Ca = Object.getOwnPropertySymbols,
  hp = Object.prototype.hasOwnProperty,
  vp = Object.prototype.propertyIsEnumerable,
  ja = (e, t, n) =>
    t in e
      ? fp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  gp = (e, t) => {
    for (var n in t || (t = {})) hp.call(t, n) && ja(e, n, t[n]);
    if (Ca) for (var n of Ca(t)) vp.call(t, n) && ja(e, n, t[n]);
    return e;
  },
  yp = (e, t) => pp(e, mp(t));
const o0 = V.forwardRef((e, t) =>
  g.createElement(fr, yp(gp({ ref: t }, e), { weights: Hf }))
);
o0.displayName = "TwitterLogo";
var wp = Object.defineProperty,
  xp = Object.defineProperties,
  kp = Object.getOwnPropertyDescriptors,
  Na = Object.getOwnPropertySymbols,
  Sp = Object.prototype.hasOwnProperty,
  Ep = Object.prototype.propertyIsEnumerable,
  _a = (e, t, n) =>
    t in e
      ? wp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Cp = (e, t) => {
    for (var n in t || (t = {})) Sp.call(t, n) && _a(e, n, t[n]);
    if (Na) for (var n of Na(t)) Ep.call(t, n) && _a(e, n, t[n]);
    return e;
  },
  jp = (e, t) => xp(e, kp(t));
const i0 = V.forwardRef((e, t) =>
  g.createElement(fr, jp(Cp({ ref: t }, e), { weights: Uf }))
);
i0.displayName = "Warning";
const Np = () =>
    v.jsx(v.Fragment, {
      children: v.jsxs("div", {
        className: "m-4",
        children: [
          v.jsxs("div", {
            className: "flex flex-col md:flex-row md:h-screen items-center",
            children: [
              v.jsxs("div", {
                className: "md:w-1/2 text-center md:text-left md:pl-20",
                children: [
                  v.jsx("p", {
                    className: "font-bold text-6xl Title mb-5",
                    children: "Looppi",
                  }),
                  v.jsx("p", {
                    className: "text-2xl font-semibold opacity-80",
                    children: "Se vähän parempi somevastaava.",
                  }),
                  v.jsx(vl, {
                    className: "my-3",
                    children: "Tutustu hinnastoon",
                  }),
                  " ",
                  v.jsxs("div", {
                    className:
                      "opacity-50 border-2 w-full md:w-2/3 px-5 p-3 flex rounded border-black font-semibold text-sm mt-3 md:mt-0",
                    children: [
                      v.jsxs("p", {
                        children: [
                          "Huomioithan, ",
                          v.jsx("br", {}),
                          " että tämä sivusto on vain esimerkki eikä täältä voi tehdä ostoksia!",
                        ],
                      }),
                      v.jsx(i0, { size: 40, className: "my-auto ml-auto" }),
                    ],
                  }),
                ],
              }),
              v.jsx("div", {
                className: "hidden md:block w-full md:w-1/2 mt-5 md:mt-0",
                children: v.jsx("img", {
                  src: "./Marketing-cuate.svg",
                  className: "w-full md:w-4/5 m-auto",
                  alt: "Marketing Image",
                }),
              }),
            ],
          }),
          v.jsx("div", {
            className: "my-20",
            id: "about",
            children: v.jsx(Cf, {}),
          }),
          v.jsx("div", { className: "my-20", children: v.jsx(jf, {}) }),
        ],
      }),
    }),
  _p = () =>
    v.jsx(v.Fragment, {
      children: v.jsxs("div", {
        className: "flex border-black rounded border-2 py-8 px-4",
        children: [
          v.jsxs("div", {
            className: "",
            children: [
              v.jsx("p", {
                className: "font-bold border-b mb-1 mx-5",
                children: "Somet",
              }),
              v.jsxs("div", {
                className: "flex mx-4 m-1 gap-1",
                children: [
                  v.jsx(n0, { size: 32 }),
                  v.jsx(r0, { size: 32 }),
                  v.jsx(l0, { size: 32 }),
                  v.jsx(qc, { size: 32 }),
                  v.jsx(o0, { size: 32 }),
                ],
              }),
            ],
          }),
          v.jsx("div", {
            className: "ml-auto text-sm my-auto font-bold text-center w-1/2",
            children: v.jsx("p", {
              children:
                "Huomioithan, että tämä sivusto on vain esimerkki eikä täältä voi tehdä ostoksia!",
            }),
          }),
        ],
      }),
    });
function Pp() {
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx("header", { children: v.jsx(Ef, {}) }),
      v.jsx("main", { children: v.jsx(Np, {}) }),
      v.jsx("footer", { children: v.jsx(_p, {}) }),
    ],
  });
}
ao.createRoot(document.getElementById("root")).render(
  v.jsx(g.StrictMode, { children: v.jsx(Pp, {}) })
);
