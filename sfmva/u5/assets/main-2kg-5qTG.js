const t = "assets/img/logo.png";
window.MainPageSetup = () => {
  (() => {
    const s = document.createElement("div");
    let i = "";
    const e =
      "from the team at superfucking mario, our deals page is now back up!\nfeel free to apply your various superfuckingmario provided coupons!".split(
        "\n"
      );
    {
      let t = 1;
      for (const s of e) t || (i += "<br>"), (t = 0), (i += s);
      i += "<hr>";
    }
    (i += `<canvas id="logo" width="400" height="120"><img src="${t}"></canvas><br>`),
      (i +=
        '<a href="/"><button>home</button></a> <a href="satisfaction.html"><button>customer reviews</button></a> <a href="coupon.html"><button>deals</button></a>'),
      (s.innerHTML = i),
      document.body.insertBefore(s, document.body.firstChild);
  })();
  const s = [];
  for (let t = 0; 36 >= t; t++) s[t] = [255, 255, 255];
  const i = document.getElementById("logo"),
    e = i.getContext("2d");
  if (e === null) return;
  const o = new Image();
  (o.onload = () => {
    let t = document.createElement("canvas"),
      i = t.getContext("2d");
    if (i === null) return;
    (t.width = 1), (t.height = 37), i.drawImage(o, 0, 0);
    let e = i.getImageData(0, 0, 1, 37);
    for (let o = 0; 36 >= o; o++) {
      let t = o * 4;
      (s[o][0] = e.data[t + 0]),
        (s[o][1] = e.data[t + 1]),
        (s[o][2] = e.data[t + 2]);
    }
  }),
    (o.src = "assets/img/firepal.png");
  const h = new Image();
  (h.onload = () => {
    e.drawImage(h, 0, 0);
    const t = e.getImageData(0, 0, i.width, i.height);
    e.clearRect(0, 0, i.width, i.height);
    const o = e.createImageData(t),
      n = e.createImageData(t);
    for (let s = 0; i.width > s; s++) {
      let e = s * 4,
        h = 0;
      for (let s = 0; i.height > s; s++) {
        let s = t.data[e] == 0;
        (o.data[e + 0] = 0),
          (o.data[e + 1] = s && !h ? 255 : 0),
          (o.data[e + 2] = s ? 0 : 255),
          (h = s),
          (e += i.width * 4);
      }
    }
    let r = 0;
    setInterval(() => {
      r += 1;
      const t = 1 + Math.cos(r * 0.6) * Math.sin(r * 0.64);
      for (let s = 1; i.height > s; s++) {
        let e = s * i.width * 4;
        for (let h = 0; i.width > h; h++) {
          if ((o.data[e + 1] && (o.data[e + 0] = 36), o.data[e + 0])) {
            let n = e - i.width * 4;
            const r = 1 - Math.round(Math.random() * t);
            0 > h + r
              ? (n = s * i.width * 4)
              : i.width > h + r
              ? (n += r * 4)
              : (n = 4 * (s * i.width - 1)),
              o.data[n + 2] && (o.data[n + 0] = o.data[e + 0] - 1);
            const c = Math.round(Math.random() * 2);
            o.data[n + 0] -= c & 1;
          }
          e += 4;
        }
      }
      for (let i = 0; o.data.length > i; i += 4)
        if (o.data[i + 2]) {
          const t = o.data[i + 0];
          if (t > 0) {
            const e = s[t];
            (n.data[i + 0] = e[0]),
              (n.data[i + 1] = e[1]),
              (n.data[i + 2] = e[2]),
              (n.data[i + 3] = 255);
          } else n.data[i + 3] = 0;
        } else
          (n.data[i + 0] = 0),
            (n.data[i + 1] = 0),
            (n.data[i + 2] = 0),
            (n.data[i + 3] = 255);
      e.putImageData(n, 0, 0);
    }, 100);
  }),
    (h.src = t);
};
const s = "sfmData";
let i;
function e() {
  if (i !== void 0) return;
  const t = localStorage.getItem(s);
  if (t != null)
    try {
      i = JSON.parse(t);
    } catch (e) {
      i = {};
    }
  else i = {};
}
var o, h;
((h = o || (o = {})).t = (t) => (e(), i[t])),
  (h.i = (t, o) => {
    e(), (i[t] = o), i !== void 0 && localStorage.setItem(s, JSON.stringify(i));
  });
const n = {
  kz392: () => (o.i("bsky", 1), "Back To School coupon applied successfully!"),
  ft23() {
    document.location.href = "mother.html";
  },
};
function r(t) {
  window.console.error(t);
  const s = document.getElementById("gameCanvas");
  s !== null && (s.hidden = 1),
    (document.location = "newspaper.html?whatsleftof");
}
var c, a, l, d, u, f, w, p, v, m, g, b, M;
(window.ApplyCoupon = () => {
  const t = document.getElementById("couponCode").value,
    s = document.getElementById("couponStatus"),
    i = n[t.trim().toLowerCase()];
  if (i !== void 0)
    try {
      const t = i();
      (s.textContent = t !== void 0 ? t : "Coupon applied successfully!"),
        (s.style.color = "green");
    } catch (e) {
      (s.textContent = "..."), (s.style.color = "red");
    }
  else (s.textContent = "Invalid coupon code."), (s.style.color = "red");
  s.hidden = 0;
}),
  ((t) => {
    (t.o = void 0), (t.h = void 0);
    let s = -1,
      i = 0;
    (t.l = (s) => {
      if (((t.o = s), (t.h = s.getContext("2d", { alpha: 0 })), !t.h))
        throw Error("Failed to get 2D context from canvas");
      i = 1;
    }),
      (t.u = () => {
        let e =
          Math.min(window.innerWidth / 320, window.innerHeight / 240) - 0.3;
        (e = Math.max(Math.floor(e), 1)),
          s !== e &&
            ((s = e), (t.o.width = 320 * e), (t.o.height = 240 * e), (i = 1));
      }),
      (t.p = () => {
        t.h.resetTransform(), t.h.clearRect(0, 0, t.o.width, t.o.height);
      }),
      (t.v = () => {
        t.h.scale(s, s);
      }),
      (t.m = () => (i ? ((i = 0), 1) : 0));
  })(c || (c = {})),
  ((t) => {
    (t.M = 0), (t.k = 0);
    let s = 0;
    const i = 1 / 30,
      e = 1e3 / 30;
    (t.l = () => {
      (t.M = 0), (s = performance.now());
    }),
      (t.S = () => {
        let o = performance.now();
        s > o ? (t.k = 0) : ((t.k = i), (s = o + e - ((o - s) % e))),
          (t.M += t.k);
      });
  })(a || (a = {})),
  ((t) => {
    const s = {
      ArrowLeft: "left",
      ArrowUp: "O",
      ArrowRight: "right",
      ArrowDown: "R",
      a: "left",
      w: "O",
      d: "right",
      s: "R",
      KeyA: "left",
      KeyW: "O",
      KeyD: "right",
      KeyS: "R",
      z: "debug",
    };
    function i(i) {
      const e = s[i.key];
      e && ((t.G[e] = 1), i.preventDefault());
    }
    function e(i) {
      const e = s[i.key];
      e && ((t.G[e] = 0), i.preventDefault());
    }
    (t.G = {}),
      (t.l = () => {
        document.addEventListener("keydown", i),
          document.addEventListener("keyup", e);
      });
  })(l || (l = {})),
  ((u = d || (d = {})).T = 0),
  (u.A = () => {
    u.T = 1;
  }),
  (u.D = () => {
    u.T = 0;
  }),
  (u.F = (t) => {
    u.T > 0 && ((u.T -= t * 2), 0 > u.T && (u.T = 0));
  }),
  (u.j = (t) => {
    u.T > 0 &&
      ((t.fillStyle = `rgba(0, 0, 0, ${u.T})`),
      t.fillRect(0, 0, t.canvas.width, t.canvas.height));
  }),
  ((f || (f = {})).P = void 0);
class k {
  constructor() {}
  A() {}
  C() {}
  F(t) {}
  H(t) {}
}
class S {
  constructor(...t) {
    (this.I = []), (this.L = t), (this.status = this.L.length === 0 ? 0 : 1);
  }
  W() {
    (this.L = []), (this.status = 0), (this.error = void 0);
  }
  $(...t) {
    this.L.push(...t);
    for (let s = this.I.length; this.L.length > s; s++) this.I.push(0);
    (this.status !== 0 && this.status !== 2) || (this.status = 1);
  }
  F() {
    let t = this.status;
    if (t !== 2 && t !== 3) {
      t = 2;
      for (let s = 0; this.L.length > s; s++) {
        const i = this.I[s];
        if (i === 2 || i === 3) continue;
        const e = this.L[s];
        if ((e instanceof S && e.F(), e.B())) this.I[s] = 2;
        else {
          if (e.K()) {
            (this.I[s] = 3), (this.error = e.K()), (this.U = e.q());
            break;
          }
          (this.I[s] = 1), (t = 1);
        }
      }
      this.status = t;
    }
  }
  J() {
    return this;
  }
  K() {
    return this.error;
  }
  q() {
    return this.U;
  }
  N() {
    if (this.L.length === 0) return 1;
    let t = 0,
      s = 0;
    for (const i of this.L) {
      const e = i.V();
      i.B() ? (t += e) : (t += i.N() * e), (s += e);
    }
    return s === 0 ? 0 : t / s;
  }
  V() {
    return this.L.length;
  }
  B() {
    return this.status === 2;
  }
}
function y(t) {
  const s = new Image();
  s.src = `assets/spr/${t}.png`;
  const i = {
    error: null,
    J: () => s,
    K: () => i.error,
    q: () => i.error?.message,
    N: () => 0,
    V: () => 1,
    B: () =>
      s.complete &&
      s.naturalWidth > 0 &&
      s.naturalHeight > 0 &&
      i.error === null,
  };
  return (
    (s.onerror = () => {
      i.error = Error("Failed to load image: " + t);
    }),
    i
  );
}
function O(t) {
  let s = new Audio(`assets/snd/${t}.ogg`);
  return (
    (s.loop = 0),
    (s.preload = "auto"),
    s.load(),
    {
      J: () => s,
      K: () => s.error,
      q: () => s.error?.message,
      N: () => 0,
      V: () => 1,
      B: () =>
        s.error === null && s.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA,
    }
  );
}
((p = w || (w = {})).images = {
  body: y("body"),
  X: y("bodymelt"),
  Y: y("infarto"),
  Z: y("npc"),
  _: y("tileset"),
}),
  (p.tt = {
    st: O("step1"),
    it: O("step2"),
    et: O("evil4"),
    ot: O("lightswitch"),
  }),
  (p.ht = new S()),
  p.ht.$(...Object.values(p.images), ...Object.values(p.tt)),
  ((v || (v = {})).nt = 0),
  ((g = m || (m = {})).rt = (t, s) => {
    if (t !== void 0 && t.properties !== void 0)
      for (const i of t.properties) if (i.name === s) return i;
  }),
  (g.ct = (t, s) => {
    if (t !== void 0 && t.properties !== void 0)
      for (const i of t.properties) if (i.name === s) return i.value;
  }),
  (g.lt = (t, s) => {
    if (t !== void 0) for (const i of t) if (i.name === s) return i;
  }),
  (g.dt = (t, s) => {
    if (t !== void 0) for (const i of t) if (i.name === s) return i.value;
  }),
  ((M = b || (b = {})).x = 0),
  (M.y = 0),
  (M.ut = 0),
  (M.ft = 0),
  (M.wt = 0),
  (M.F = (t, s, i) => {
    const e = i - 120 - 32,
      o = s - 160 + 32,
      h = i - 120 + 32;
    (M.x = Math.min(Math.max(s - 160 - 32, M.x), o)),
      (M.y = Math.min(Math.max(e, M.y), h));
    const n = V.vt;
    if (n !== void 0) {
      const t = n.x,
        s = n.y,
        i = s + n.height - 240;
      (M.x = Math.max(t, Math.min(M.x, t + n.width - 320))),
        (M.y = Math.max(s, Math.min(M.y, i)));
    }
    M.ut > 0
      ? ((M.ft = Math.cos(M.ut * 14) * M.ut),
        (M.wt = Math.random() * M.ut * 0.4),
        (M.ut -= t * 5))
      : ((M.ft = 0), (M.wt = 0)),
      V.vt?.name === "figureclassroomevil" &&
        ((M.ft += Math.cos(a.M * 7) * 0.5 + Math.random() - 0.5),
        (M.wt += Math.sin(a.M * 8) * 0.5 + Math.random() - 0.5)),
      (M.ft = Math.floor(M.ft + 0.5)),
      (M.wt = Math.floor(M.wt + 0.5));
  });
class R {
  constructor(t) {
    (this.gt = w.images._.J()),
      (this.name = t.name),
      (this.id = t.id),
      (this.bt = m.ct(t, "depth") ?? 0),
      (this.width = t.width),
      (this.height = t.height),
      (this.data = t.data.slice());
  }
  F(t) {}
  H(t) {
    const s = b.x,
      i = b.y;
    for (
      var e = Math.max(s >> 4, 0),
        o = Math.max(i >> 4, 0),
        h = 1 + ((i + 240) >> 4),
        n = e * 16,
        r = o * 16,
        c = Math.min(2 + ((s + 320) >> 4), this.width),
        a = Math.min(h + 1, this.height),
        l = o * this.width + e,
        d = this.width - (c - e),
        u = r,
        f = o;
      a > f;
      f++
    ) {
      for (var w = n, p = e; c > p; p++) {
        var v = this.data[l++];
        if (v > 0) {
          var m = v - 1;
          t.drawImage(this.gt, (m & 15) << 4, m & 240, 16, 16, w, u, 16, 16);
        }
        w += 16;
      }
      (l += d), (u += 16);
    }
  }
  Mt(t, s) {
    return t >= 0 && s >= 0 && this.width > t && this.height > s;
  }
  kt(t, s, i) {
    this.Mt(t, s) && (this.data[s * this.width + t] = i);
  }
  St(t, s) {
    return this.Mt(t, s) ? this.data[s * this.width + t] : 0;
  }
}
class G {
  constructor(t, s) {
    (this.x = t), (this.y = s);
  }
  yt() {}
  Ot() {}
  Rt() {}
  Gt() {}
  F(t) {}
  H(t) {}
}
class T {
  constructor(t, s = 0, i = 0, e = 0, o = 0) {
    (this.Tt = t),
      (this.Tt.Et = this),
      (this.x = s),
      (this.y = i),
      (this.width = e),
      (this.height = o);
  }
  F() {
    const t = this.Tt.x + this.x,
      s = this.Tt.y + this.y;
    V.At.Set(this.Tt, t, s, t + this.width, s + this.height);
  }
  Dt() {
    V.At.Dt(this.Tt);
  }
}
class E extends G {
  constructor(t, s, i, e, o, h, n, r) {
    super(t, s),
      (this.direction = -1),
      (this.Ft = 0),
      (this.jt = 0),
      (this.width = i),
      (this.height = e);
    const c = new T(this);
    (this.Et = c), (this.id = o), (this.xt = h), (this.Pt = n), (this.Ct = r);
  }
  static Ht(t) {
    return new E(
      t.x,
      t.y,
      t.width,
      t.height,
      t.id,
      m.ct(t, "target"),
      m.ct(t, "randomChance"),
      m.ct(t, "randomTarget")
    );
  }
  It() {
    [this.direction, this.Ft, this.jt] = this.Lt();
    const t = this.Et;
    switch (
      ((t.x = 0),
      (t.y = 0),
      (t.width = this.width),
      (t.height = this.height),
      this.direction)
    ) {
      case 1:
        (t.y = 8), (t.height -= 8);
        break;
      case 3:
        t.height -= 8;
        break;
      case 0:
        (t.x = 8), (t.width -= 8);
        break;
      case 2:
        t.width -= 8;
    }
  }
  yt() {
    this.It();
  }
  Rt() {
    this.It();
  }
  F(t) {
    this.Et.F();
  }
  Ot() {
    this.Et.Dt();
  }
  Wt() {
    var t = this.xt;
    this.Pt !== void 0 && Math.random() < this.Pt && (t = this.Ct);
    const s = V.$t[t];
    s !== void 0 && V.Kt.Bt(s);
  }
  Lt() {
    let t,
      s = 0,
      i = 0,
      e = 0,
      o = 0,
      h = 0,
      n = 0,
      r = 0,
      c = 0;
    for (let d = 8; this.width > d; d += 16) {
      const t = this.x + d;
      V.Ut(t, this.y - 8) && ((s += t), i++),
        V.Ut(t, this.y + this.height + 8) && ((e += t), o++);
    }
    for (let d = 8; this.height > d; d += 16) {
      const t = this.y + d;
      V.Ut(this.x - 8, t) && ((h += t), n++),
        V.Ut(this.x + this.width + 8, t) && ((r += t), c++);
    }
    var a, l;
    switch (
      ((t =
        (i === 0 && o === 0 && n === 0 && c === 0) ||
        (i > 0 && o > 0) ||
        (n > 0 && c > 0)
          ? -1
          : e > s
          ? e > h && e > r
            ? 3
            : h > r
            ? 0
            : 2
          : s > h && s > r
          ? 1
          : h > r
          ? 0
          : 2),
      t)
    ) {
      case 1:
        (a = s / i), (l = this.y);
        break;
      case 3:
        (a = e / o), (l = this.y + this.height);
        break;
      case 0:
        (a = this.x), (l = h / n);
        break;
      case 2:
        (a = this.x + this.width), (l = r / c);
        break;
      default:
        (a = this.x + this.width / 2), (l = this.y + this.height / 2);
    }
    return [t, a, l];
  }
}
class A {
  constructor() {
    (this.x = 0),
      (this.y = 0),
      (this.width = 0),
      (this.height = 0),
      (this.qt = 0),
      (this.zt = 0);
  }
  H(t, s) {
    this.image &&
      s.drawImage(
        this.image,
        this.x,
        this.y,
        this.width,
        this.height,
        Math.floor(t.x) - this.qt,
        Math.floor(t.y) - this.zt,
        this.width,
        this.height
      );
  }
}
class D extends G {
  constructor(t, s, i) {
    super(t, s),
      (this.Jt = 0),
      (this.Nt = 0),
      (this.speed = 1),
      (this.speed = i);
    const e = new A();
    (e.image = w.images.Y.J()),
      (e.width = 57),
      (e.height = 73),
      (e.qt = 28),
      (e.zt = 36),
      (this.Qt = e);
  }
  static Ht(t) {
    return new D(t.x, t.y, m.ct(t, "speed") ?? 1);
  }
  F(t) {
    if (((this.Nt -= t * this.speed), 0 >= this.Nt)) {
      (this.Jt = Math.floor(this.Jt + 1 + Math.random() * 3) % 4),
        (this.Nt = 0.1 + Math.random() * Math.random() * 0.5);
      const t = this.Qt;
      (t.x = (this.Jt & 1) * t.width), (t.y = (this.Jt >> 1) * t.height);
    }
  }
  H(t) {
    v.Vt === void 0 && this.Qt.H(this, t);
  }
}
class F extends G {
  constructor(t, s, i) {
    super(t, s), (this.id = i);
  }
  static Ht(t) {
    return new F(t.x + t.width / 2, t.y + t.height / 2, t.id);
  }
}
class j extends G {
  constructor(t, s, i, e, o) {
    super(t, s), (this.Xt = o);
    const h = new T(this);
    (h.width = i), (h.height = e), (this.Et = h);
  }
  static Ht(t) {
    return new j(t.x, t.y, t.width, t.height, m.ct(t, "audio"));
  }
  F(t) {
    this.Et.F();
  }
  Ot() {
    this.Et.Dt();
  }
  Wt() {
    v.Vt = this.Xt;
  }
}
class x extends G {
  constructor(t, s, i, e, o) {
    super(t, s), (this.target = i), (this.Pt = e), (this.unlock = o);
    const h = new T(this);
    (h.width = 16), (h.height = 8);
  }
  static Ht(t) {
    return new x(
      t.x,
      t.y,
      m.ct(t, "target"),
      m.ct(t, "randomChance"),
      m.ct(t, "unlock")
    );
  }
  Rt() {
    let t = 1;
    const s = this.unlock;
    s !== void 0 && (t = !!o.t(s));
    const i = this.Pt;
    i !== void 0 && Math.random() > i && (t = 0), t ? this.Yt() : this.Zt();
  }
  F(t) {
    this.Et.F();
  }
  Wt() {
    const t = V.$t[this.target];
    t && V.Kt.Bt(t);
  }
  Zt() {
    const t = this.x + 8,
      s = this.y + 8,
      i = V._t.baseUpper;
    i.kt(t >> 4, (s - 16) >> 4, 37),
      i.kt(t >> 4, s >> 4, 53),
      V.ts.kt(t >> 4, s >> 4, 0),
      this.Et.F();
  }
  Yt() {
    const t = this.x + 8,
      s = this.y + 8,
      i = V._t.baseUpper;
    i.kt(t >> 4, (s - 16) >> 4, 36),
      i.kt(t >> 4, s >> 4, 52),
      V.ts.kt(t >> 4, s >> 4, 1),
      this.Et.F();
  }
}
class P extends G {
  constructor(t, s, i, e) {
    super(t, s), (this.width = i), (this.height = e);
  }
  static Ht(t) {
    return new P(t.x, t.y, t.width, t.height);
  }
  H(t) {
    const s = V.Kt;
    if (this.x - 24 > s.x || s.x > this.x + 24) return;
    if (s.y > this.y + this.height + 8 || this.y > s.y) return;
    const i = s.y,
      e = s.ss;
    (s.y = this.y - (i - this.y)),
      (s.ss = !s.ss),
      s.H(t),
      (s.y = i),
      (s.ss = e);
  }
}
class C extends G {
  constructor(t, s, i, e) {
    super(t, s),
      (this.es = 0),
      (this.hs = w.tt.ot.J()),
      (this.Pt = i),
      (this.offset = e);
    const o = new T(this);
    (o.width = 16), (o.height = 18);
  }
  static Ht(t) {
    return new C(t.x, t.y, m.ct(t, "randomChance"), m.ct(t, "offset"));
  }
  Gt() {
    this.es = 0;
  }
  F(t) {
    this.Et.F();
  }
  H(t) {
    this.es &&
      ((t.fillStyle = "rgba(0, 0, 0, 0.85)"),
      t.fillRect(b.x - 1, b.y - 1, 322, 242));
  }
  Wt() {
    if (!this.es && ((this.es = 1), this.hs.play(), Math.random() < this.Pt)) {
      const t = V.$t[this.offset];
      t !== void 0 && (V.Kt.x += t.x - this.x);
    }
  }
}
var H = {
  doll: 0,
  newspaper: 1,
  showerBeing: 2,
  mirrorFace: 5,
  figure: 6,
  figureEvil: 7,
};
class I extends G {
  constructor(t, s, i, e) {
    super(t, s), (this.ns = 1), (this.name = i), (this.Pt = e);
    const o = H[i];
    (this.rs = o), (this.frame = o);
    const h = new A();
    (h.image = w.images.Z.J()),
      (h.width = 24),
      (h.height = 48),
      (h.qt = 12),
      (h.zt = 40),
      (h.x = 24 * (o & 3)),
      (h.y = 48 * (o >> 2)),
      (this.Qt = h);
  }
  static Ht(t) {
    return new I(t.x, t.y, t.name, m.ct(t, "randomChance"));
  }
  Rt() {
    this.ns = this.Pt !== void 0 ? Math.random() < this.Pt : 1;
  }
  F(t) {
    if (!this.ns) return;
    this.Et?.F(),
      this.name === "showerBeing" &&
        (this.frame = this.rs + (Math.floor(a.M * 10) % 3));
    const s = this.Qt,
      i = this.frame;
    (s.x = 24 * (i & 3)), (s.y = 48 * (i >> 2));
  }
  H(t) {
    this.ns && this.Qt.H(this, t);
  }
}
class L extends G {
  constructor(t, s, i, e, o, h) {
    super(t, s),
      (this.cs = 0),
      (this.width = i),
      (this.height = e),
      (this.range = o),
      (this.ls = h),
      (this.ds = 0.95 / h);
    const n = new T(this);
    (n.width = i), (n.height = e);
  }
  static Ht(t) {
    return new L(
      t.x,
      t.y,
      t.width,
      t.height,
      m.ct(t, "range"),
      m.ct(t, "times")
    );
  }
  Gt() {
    (this.cs = 0), (V.Kt.us = void 0);
  }
  F(t) {
    this.Et.F();
  }
  H(t) {
    (t.fillStyle = `rgba(0, 0, 0, ${this.cs})`),
      t.fillRect(b.x - 1, b.y - 1, 322, 242);
  }
  Wt() {
    this.ls > 0 &&
      (this.ls--,
      (this.cs += this.ds),
      (V.Kt.x -= this.range),
      (V.Kt.us = this.x - this.range),
      (b.x -= this.range));
  }
}
class W extends G {
  constructor(t, s) {
    super(t, s);
    const i = new T(this);
    (i.width = 16), (i.height = 16), (this.Et = i);
  }
  static Ht(t) {
    return new W(t.x, t.y);
  }
  F(t) {
    this.Et?.F();
  }
  Wt() {
    f.P =
      0.5 > Math.random()
        ? "newspaper.html?whatsleftof"
        : "newspaper.html?him";
  }
}
class $ extends G {
  constructor(t, s, i, e) {
    super(t, s);
    const o = new T(this);
    (o.width = i), (o.height = e), (this.Et = o);
  }
  static Ht(t) {
    return new $(t.x, t.y, t.width, t.height);
  }
  F(t) {
    this.Et.F();
  }
  Wt() {
    V.Kt.fs = 1;
  }
}
const B = {
  door: E.Ht,
  target: F.Ht,
  closetdoor: x.Ht,
  infarto: D.Ht,
  phone: j.Ht,
  mirror: P.Ht,
  figurelightswitch: C.Ht,
  npc: I.Ht,
  infinite: L.Ht,
  newspaper: W.Ht,
  sadTrigger: $.Ht,
};
class K {
  constructor(t) {
    (this.objects = []),
      (this.name = t.name),
      (this.id = t.id),
      (this.bt = m.ct(t, "depth") ?? 0);
    for (const s of t.objects) {
      let t = s.type;
      switch (t) {
        case "":
          break;
        case "player":
          (V.Kt.x = s.x), (V.Kt.y = s.y);
          break;
        default:
          const i = B[t];
          if (i !== null && i !== void 0) {
            const t = i(s);
            this.objects.push(t), (t.ws = this), V.ps(t);
          }
      }
    }
  }
  F(t) {}
  H(t) {
    for (const s of this.objects) s.H(t);
  }
}
const U = {
  bt: 20,
  Kt: void 0,
  F(t) {
    this.Kt.F(t);
  },
  H(t) {
    this.Kt.H(t);
  },
};
var q;
((t) => {
  let s,
    i = new Audio();
  (t.vs = 0),
    (i.onended = () => {
      t.vs = 1;
    }),
    (t.gs = (e, o = 1) => {
      s !== e &&
        ((s = e),
        (t.vs = 0),
        (i.loop = o),
        (i.preload = "auto"),
        i.pause(),
        s !== void 0 &&
          ((i.src = `assets/mus/${s}.ogg`),
          (i.currentTime = 0),
          i.load(),
          i.play()));
    }),
    (t.bs = () => {
      (s = void 0), i.pause();
    }),
    (t.Ms = () => {
      s !== void 0 && i.pause();
    }),
    (t.ks = () => {
      s !== void 0 && i.play();
    });
})(q || (q = {}));
var z = [0, 1, 1, 2, 2, 2, 3];
class J extends G {
  constructor(t, s) {
    super(t, s),
      (this.Ss = 0),
      (this.ys = 0),
      (this.Os = 0),
      (this.Rs = 0),
      (this.Gs = 0),
      (this.ss = 0),
      (this.Ts = 0),
      (this.Es = [w.tt.st.J(), w.tt.it.J()]),
      (this.As = 0),
      (this.fs = 0),
      (this.Ds = 0);
    const i = new A();
    (i.image = w.images.body.J()),
      (i.width = 24),
      (i.height = 48),
      (i.qt = 12),
      (i.zt = 40),
      (this.Qt = i);
  }
  F(t) {
    if (this.fs) {
      this.Ds += t;
      const s = this.Ds - 6;
      if (0 > s) (this.Gs = 0), (this.ss = 1), this.Fs(t, 0);
      else {
        const t = z[Math.min(Math.floor(s * 6), z.length - 1)],
          i = this.Qt;
        (i.x = 96 + 24 * (t & 1)), (i.y = 0 + 48 * (t >> 1));
      }
      return;
    }
    this.js(t);
  }
  H(t) {
    this.Qt.H(this, t);
  }
  Bt(t) {
    if (t instanceof E) {
      const s = t.direction,
        i = t.jt;
      switch (((this.x = t.Ft), (this.y = i), s)) {
        case 1:
          (this.ss = 1), (this.Rs = 1), (this.Ss = 1), (this.ys = 1);
          break;
        case 3:
          (this.ss = 0), (this.Os = 1), (this.Ss = 1), (this.ys = 1);
          break;
        case 0:
          (this.Gs = 1), (this.ys = 1), (this.Os = 1), (this.Rs = 1);
          break;
        case 2:
          (this.Gs = 0), (this.Ss = 1), (this.Os = 1), (this.Rs = 1);
          break;
        case -1:
          (this.Ss = 1), (this.ys = 1), (this.Rs = 1), (this.Os = 1);
      }
    } else
      (this.x = t.x),
        (this.y = t.y),
        (this.Ss = 1),
        (this.ys = 1),
        (this.Os = 1),
        (this.Rs = 1);
  }
  Fs(t, s) {
    if (s) {
      var i = this.Ts + t;
      if (i >= 2) {
        (i %= 2), (this.As = (this.As + 1) % this.Es.length);
        var e = this.Es[this.As];
        e.pause(), (e.currentTime = 0), e.play();
      }
      this.Ts = i;
    } else this.Ts = 0.9;
    const o = this.Qt;
    (o.x = Math.floor(this.Ts) * o.width + (this.Gs ? o.width * 2 : 0)),
      (o.y = this.ss ? o.height : 0);
  }
  js(t) {
    let s = 0,
      i = 17,
      e = 2.5;
    (i = 50), (e = 5);
    let o = V.Ut(this.x - 6, this.y),
      h = V.Ut(this.x + 6, this.y),
      n = V.Ut(this.x, this.y - 4),
      r = V.Ut(this.x, this.y + 2);
    this.us !== void 0 && this.us > this.x && ((this.x += 16), (b.x += 16));
    var c = l.G.left,
      a = l.G.right,
      d = l.G.O,
      u = l.G.R,
      f = this.Rs,
      w = this.Ss,
      p = this.ys;
    d &&
      !this.Os &&
      (n
        ? ((s = 1), (f = 1), (this.y -= 50 * t), (this.ss = 1))
        : u && a && (w = 1)),
      u && !f && (r && ((s = 1), (this.y += 50 * t)), (this.ss = 0)),
      c && (w || (o && ((s = 1), (this.x -= 50 * t)), (this.Gs = 1)), (p = 1)),
      a && !p && (h && ((s = 1), (this.x += 50 * t)), (this.Gs = 0)),
      (!s && (c || a || d || u)) ||
        ((this.Ss = 0), (this.ys = 0), (this.Os = 0), (this.Rs = 0)),
      this.Fs(t * 5, s);
  }
}
const N = 65536;
class Q {
  constructor() {
    (this.cells = new Map()), (this.xs = new Map());
  }
  D() {
    this.cells.clear(), this.xs.clear();
  }
  Ps(t, s, i, e, o) {
    const h = N - (e - s);
    let n = s + i * N;
    for (let r = i; o > r; r++) {
      for (let i = s; e > i; i++) {
        let s = this.cells.get(n);
        s === void 0
          ? ((s = new Set().add(t)), this.cells.set(n, s))
          : s.add(t),
          n++;
      }
      n += h;
    }
  }
  Cs(t, s, i, e, o) {
    const h = N - (e - s);
    let n = s + i * N;
    for (let r = i; o > r; r++) {
      for (let i = s; e > i; i++) {
        const s = this.cells.get(n);
        s !== void 0 && (s.delete(t), s.size === 0 && this.cells.delete(n)),
          n++;
      }
      n += h;
    }
  }
  Set(t, s, i, e, o) {
    const h = s >> 7,
      n = i >> 7,
      r = 1 + (e >> 7),
      c = 1 + (o >> 7);
    let a = this.xs.get(t);
    if (a === void 0)
      (a = { Hs: h, Is: n, Ls: r, Ws: c }),
        this.xs.set(t, a),
        this.Ps(t, h, n, r, c);
    else {
      const s = a.Hs,
        i = a.Is,
        e = a.Ls,
        o = a.Ws;
      if (s === h && i === n && e === r && o === c) return;
      let l = s,
        d = e;
      r > e
        ? (this.Ps(t, e, n, r, c), (l = h))
        : e > r && this.Cs(t, r, i, e, o),
        s > h
          ? (this.Ps(t, h, n, s, c), (d = r))
          : h > s && this.Cs(t, r, i, e, o),
        i > n ? this.Ps(t, l, n, d, i) : n > i && this.Cs(t, l, i, d, n),
        c > o ? this.Ps(t, l, o, d, c) : o > c && this.Cs(t, l, c, d, o),
        (a.Hs = h),
        (a.Is = n),
        (a.Ls = r),
        (a.Ws = c);
    }
  }
  Dt(t) {
    const s = this.xs.get(t);
    s !== void 0 && (this.Cs(t, s.Hs, s.Is, s.Ls, s.Ws), this.xs.delete(t));
  }
  $s(t, s) {
    const i = this.cells.get((t >> 7) + (s >> 7) * N);
    return i !== void 0 ? new Set(i) : new Set();
  }
  Bs(t, s, i, e) {
    const o = t >> 7,
      h = s >> 7,
      n = 1 + (i >> 7),
      r = 1 + (e >> 7),
      c = new Set(),
      a = N - (n - o);
    let l = o + h * N;
    for (let d = h; r > d; d++) {
      for (let t = o; n > t; t++) {
        const t = this.cells.get(l);
        if (t !== void 0) for (const s of t) c.add(s);
        l++;
      }
      l += a;
    }
    return c;
  }
}
var V, X;
((t) => {
  function s() {
    (() => {
      for (const s of t.Ks) s.Ot();
      t.At.D(), t.Us.D(), t.Ks.clear(), (t.$t = {}), (t.qs = {});
    })(),
      (t.vt = void 0),
      e.D(),
      (t.zs = []),
      (t.ts = void 0),
      (t._t = {}),
      (t.Js = {}),
      (t.Ns = []),
      (t.Qs = []),
      (t.Vs = [U]),
      t.Kt !== void 0 && (t.Kt.Ot(), (t.Kt = void 0));
  }
  function i() {
    const s = t.Kt.x - 6,
      i = t.Kt.x + 6,
      e = t.Kt.y - 4,
      o = t.Kt.y + 2,
      h = t.At.Bs(s, e, i, o);
    for (const t of h) {
      const h = t.Et,
        n = t.x + h.x,
        r = t.y + h.y;
      n + h.width > s && i > n && o > r && r + h.height > e && t.Wt();
    }
  }
  (t.Xs = s),
    (t.Ys = (i) => {
      s(), (t.Kt = new J(32, 32)), (U.Kt = t.Kt);
      for (const s of i.layers)
        switch (s.name) {
          case "rooms":
            o(s);
            break;
          case "walkable":
            t.ts = new R(s);
            break;
          default:
            switch (s.type) {
              case "tilelayer":
                n(new R(s));
                break;
              case "objectgroup":
                n(new K(s));
            }
        }
      for (const s of t.Ks) s.yt();
      h();
    }),
    (t.F = (s) => {
      for (const i of t.Vs) i.F(s);
      for (const i of t.Zs) i.F(s);
      i(), h(), b.F(s, t.Kt.x, t.Kt.y), q.gs(t.vt?._s);
    }),
    (t.H = (s) => {
      s.translate(-Math.floor(b.x), -Math.floor(b.y)), s.translate(b.ft, b.wt);
      for (const i of t.Vs) i.H(s);
    }),
    (t.Ks = new Set()),
    (t.$t = {}),
    (t.qs = {}),
    (t.Zs = []),
    (t.At = new Q()),
    (t.Us = new Q()),
    (t.ps = (s) => {
      t.Us.Set(s, s.x, s.y, s.x, s.y),
        t.Ks.add(s),
        s.id !== void 0 && (t.$t[s.id] = s),
        s.name !== void 0 && (t.qs[s.name] = s);
    }),
    (t.ti = (s) => {
      s.Ot(),
        t.Ks.delete(s),
        s.id !== void 0 && delete t.$t[s.id],
        s.name !== void 0 && delete t.qs[s.name];
    }),
    (t.si = i),
    (t.Ut = (s, i) => t.ts.St(s >> 4, i >> 4) > 0),
    (t.zs = []);
  let e = new Q();
  function o(s) {
    for (const i of s.objects) {
      const s = {
        id: i.id,
        name: i.name,
        x: i.x,
        y: i.y,
        width: i.width,
        height: i.height,
        _s: m.ct(i, "music"),
      };
      t.zs.push(s);
      const o = s.x,
        h = s.y;
      e.Set(s, o, h, o + s.width, h + s.height);
    }
  }
  function h() {
    const s = ((t, s) => {
      const i = e.$s(t, s);
      for (const e of i)
        if (t >= e.x && e.x + e.width > t && s >= e.y && e.y + e.height > s)
          return e;
    })(t.Kt.x, t.Kt.y);
    s !== t.vt &&
      ((t.vt = s),
      (() => {
        q.gs(void 0);
        for (const s of t.Zs) s.Gt();
        if ((d.A(), t.vt !== void 0)) {
          const s = t.Us.Bs(
              t.vt.x,
              t.vt.y,
              t.vt.x + t.vt.width,
              t.vt.y + t.vt.height
            ),
            i = [];
          for (const e of s)
            e.x >= t.vt.x &&
              t.vt.x + t.vt.width > e.x &&
              e.y >= t.vt.y &&
              t.vt.y + t.vt.height > e.y &&
              i.push(e);
          t.Zs = i;
          for (const e of t.Zs) e.Rt();
        } else t.Zs = [];
        switch (t.vt?.name) {
          case "bathroom":
            d.D();
            const s = t.qs.showerBeing;
            t.vt._s = s?.ns ? "shower" : void 0;
            break;
          case "figureclassroomevil":
            d.D(), (b.ut = 3.5);
        }
      })());
  }
  function n(s) {
    s.name !== void 0 && (t._t[s.name] = s),
      s.id !== void 0 && (t.Js[s.id] = s),
      s instanceof R ? t.Ns.push(s) : s instanceof K && t.Qs.push(s),
      t.Vs.push(s),
      t.Vs.sort((t, s) => t.bt - s.bt);
  }
  (t.ii = o),
    (t.ei = h),
    (t._t = {}),
    (t.Js = {}),
    (t.Ns = []),
    (t.Qs = []),
    (t.Vs = []);
})(V || (V = {}));
class Y extends k {
  constructor(t) {
    super(),
      (this.oi = ((t) => {
        const s = {
          data: void 0,
          error: null,
          J() {
            return s.data;
          },
          K() {
            return s.error;
          },
          q() {
            return s.error ? s.error.message : void 0;
          },
          N() {
            return 0;
          },
          V() {
            return 1;
          },
          B() {
            return s.data !== void 0;
          },
        };
        return (
          fetch(`assets/json/${t}.json`)
            .then((t) => {
              if (!t.ok) throw Error("Fetch got response " + t.statusText);
              return t.json();
            })
            .then(
              (t) => {
                s.data = t;
              },
              (t) => {
                s.error = t;
              }
            ),
          s
        );
      })(t)),
      (this.ht = new S(w.ht, this.oi));
  }
  A() {
    this.oi !== void 0 && (V.Ys(this.oi.J()), (this.oi = void 0));
  }
  C() {
    V.Xs();
  }
  F(t) {
    if (v.Vt !== void 0) return q.gs(v.Vt, 0), void (q.vs && (f.P = "/"));
    V.F(t);
  }
  H(t) {
    c.v(), V.H(t);
  }
}
((t) => {
  function s() {
    try {
      if (f.P !== void 0)
        return (c.o.hidden = 1), void (document.location = f.P);
      c.u();
      const i = c.h;
      a.S();
      const e = a.k;
      e > 0 &&
        ((s) => {
          if (
            (d.F(s),
            t.hi !== void 0 &&
              (t.ni !== void 0 && t.ni.C(), (t.ni = t.hi), (t.hi = void 0)),
            t.ni.ht !== void 0)
          )
            switch ((t.ni.ht.F(), t.ni.ht.status)) {
              case 0:
              case 2:
                (t.ni.ht = void 0), t.ni.A();
                break;
              case 3:
                throw t.ni.ht.K();
              case 1:
                return;
            }
          t.ni.F(s);
        })(e),
        (c.m() || e > 0) &&
          ((s) => {
            c.p(),
              (s.imageSmoothingEnabled = 0),
              (t.ni.ht === void 0 || t.ni.ht.status !== 1) &&
                (t.ni.H(s), s.resetTransform(), d.j(s));
          })(i),
        requestAnimationFrame(s);
    } catch (i) {
      r(i);
    }
  }
  t.A = () => {
    c.l(document.getElementById("gameCanvas")),
      l.l(),
      c.u(),
      c.p(),
      (c.o.hidden = 0),
      (t.hi = new Y("map1")),
      requestAnimationFrame(s);
  };
})(X || (X = {}));
let Z = 0,
  _ = 0;
(window.GameOnLoad = () => {
  Z = 1;
}),
  (window.GameOnClick = () => {
    if (!Z) return;
    if (_) return;
    _ = 1;
    const t = document.getElementById("gameStartButton");
    t && (t.hidden = 1);
    try {
      X.A();
    } catch (s) {
      r(s);
    }
  }),
  (window.NewspaperSetup = () => {
    const t = document.getElementById("newspaper"),
      s = new URLSearchParams(window.location.search);
    if (s.has("whatsleftof")) t.src = "assets/img/newspaperA.png";
    else {
      if (!s.has("him")) return;
      t.src = "assets/img/newspaperB.png";
    }
    t.hidden = 0;
  });
