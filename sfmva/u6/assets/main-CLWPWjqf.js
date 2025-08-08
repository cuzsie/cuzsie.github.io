/*!
yes the encryption here is pretty rudimentary,
if you really want to rip out all the secret urls and codes and variable names i know i cant really stop you
but by doing so you accept youre kinda just ruining the fun for yourself and everyone else
ha-ha-haaa-ha-haaa-ha-ha-hee-haa-ha-ha-hee-ha-ha-ha
*/
(() => {
  const t = document.createElement("link").relList;
  if (!(t && t.supports && t.supports("modulepreload"))) {
    for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
      i(t);
    new MutationObserver((t) => {
      for (const s of t)
        if (s.type === "childList")
          for (const t of s.addedNodes)
            t.tagName === "LINK" && t.rel === "modulepreload" && i(t);
    }).observe(document, { childList: 1, subtree: 1 });
  }
  function i(t) {
    if (t.t) return;
    t.t = 1;
    const i = ((t) => {
      const i = {};
      return (
        t.integrity && (i.integrity = t.integrity),
        t.referrerPolicy && (i.referrerPolicy = t.referrerPolicy),
        (i.credentials =
          t.crossOrigin === "use-credentials"
            ? "include"
            : t.crossOrigin === "anonymous"
            ? "omit"
            : "same-origin"),
        i
      );
    })(t);
    fetch(t.href, i);
  }
})();
const t = "assets/img/logo.png",
  i = "w[B#S}&5_,(VN+0D*W%SnhMCnge#/eKb",
  s = "$0T)?xy0)mFm{M)]hq6!PamnDNG1jwk@",
  e = "Up_jNNz:kkp{g7z[8Q%8b-5:uiC?:t:b",
  o = "u]%N/7mgG-*pXQD0)N#agFW[rTf#i}3B",
  h = "WU[r@K(815-#1VEDjP04:fELzQA@@9h1";
function n(t, i) {
  return t.charCodeAt(i) ^ 90;
}
function r(t) {
  return String.fromCharCode(t);
}
function a(t) {
  return Array.from(t)
    .map((t) => r(t))
    .join("");
}
function c(t) {
  return a(new Uint8Array(t));
}
async function u(t) {
  const i = new TextEncoder().encode(t),
    s = await crypto.subtle.digest("SHA-256", i);
  return c(s);
}
function d(t, i) {
  const s = t,
    e = s.slice(0, 16),
    o = s.slice(16);
  let h = "";
  for (let a = 0; o.length > a; a++) {
    const t = n(i, a % i.length),
      s = n(o, a) ^ t ^ n(e, a % e.length);
    h += r(s);
  }
  return h;
}
const l = "ç§xAÓÀ°Lf*Ñ¸ÿu÷Úó}5*s¥¤Ä\tdÅO",
  f = "µA`d&÷Wb©¥a2më½\bå;9)²/¿1©Zö",
  m = "ª#kX/N\vvXYbb'Õg²¬JýöÝû",
  p = "VÞ(dâÄå¦½àº¸Wo¾<Rá~Ìeív",
  w = "Z|ô¬T¨/`÷>MKËAÉ©|7[Mxw\vº",
  g = "HJ«/,Ð÷{<0ù!ºvÈÅ*Sá\0J\t'OÓ",
  v = "@kwf¹'#µÇ=¢íÈèzò>*ÄÞ)",
  b = '"MjTèfIFÒWJ8',
  y = "¹ÍtàÿÆ¨/ýþû2&6åªø\"®''°",
  k = "´z ó¼ÐR±9Ì°¡O§wüF#ÄPð",
  M = "­dïÛÌÙÜ¤Ê¯û8ë4Ç!¯¨Å",
  x = '&;Ô"ø#ê»nW@Fïa«E¼ÜH!õÑí',
  S = 'jçM\ní`1mÍ3Ss0«"ÿÙ';
window[d("<*Â´¥H¶Ú³4ÇndW!¥©BÛGÛv", s)] = () => {
  (() => {
    const i = document.createElement("div");
    let s = "";
    const e =
      "from the team at superfucking mario, our deals page is now back up!\nfeel free to apply your various superfuckingmario provided coupons!".split(
        "\n"
      );
    {
      let t = 1;
      for (const i of e) t || (s += "<br>"), (t = 0), (s += i);
      s += "<hr>";
    }
    (s += `<canvas id="logo" width="400" height="120"><img src="${t}"></canvas><br>`),
      (s +=
        '<a href="index.html"><button>home</button></a> <a href="satisfaction.html"><button>customer reviews</button></a> <a href="coupon.html"><button>deals</button></a>'),
      (i.innerHTML = s),
      document.body.insertBefore(i, document.body.firstChild);
  })();
  const i = [];
  for (let t = 0; 36 >= t; t++) i[t] = [255, 255, 255];
  const s = document.getElementById("logo"),
    e = s.getContext("2d");
  if (e === null) return;
  const o = new Image();
  (o.onload = () => {
    let t = document.createElement("canvas"),
      s = t.getContext("2d");
    if (s === null) return;
    (t.width = 1), (t.height = 37), s.drawImage(o, 0, 0);
    let e = s.getImageData(0, 0, 1, 37);
    for (let o = 0; 36 >= o; o++) {
      let t = o * 4;
      (i[o][0] = e.data[t + 0]),
        (i[o][1] = e.data[t + 1]),
        (i[o][2] = e.data[t + 2]);
    }
  }),
    (o.src = "assets/img/firepal.png");
  const h = new Image();
  (h.onload = () => {
    e.drawImage(h, 0, 0);
    const t = e.getImageData(0, 0, s.width, s.height);
    e.clearRect(0, 0, s.width, s.height);
    const o = e.createImageData(t),
      n = e.createImageData(t);
    for (let i = 0; s.width > i; i++) {
      let e = i * 4,
        h = 0;
      for (let i = 0; s.height > i; i++) {
        let i = t.data[e] == 0;
        (o.data[e + 0] = 0),
          (o.data[e + 1] = i && !h ? 255 : 0),
          (o.data[e + 2] = i ? 0 : 255),
          (h = i),
          (e += s.width * 4);
      }
    }
    let r = 0;
    setInterval(() => {
      r += 1;
      const t = 1 + Math.cos(r * 0.6) * Math.sin(r * 0.64);
      for (let i = 1; s.height > i; i++) {
        let e = i * s.width * 4;
        for (let h = 0; s.width > h; h++) {
          if ((o.data[e + 1] && (o.data[e + 0] = 36), o.data[e + 0])) {
            let n = e - s.width * 4;
            const r = 1 - Math.round(Math.random() * t);
            0 > h + r
              ? (n = i * s.width * 4)
              : s.width > h + r
              ? (n += r * 4)
              : (n = 4 * (i * s.width - 1)),
              o.data[n + 2] && (o.data[n + 0] = o.data[e + 0] - 1);
            const a = Math.round(Math.random() * 2);
            o.data[n + 0] -= a & 1;
          }
          e += 4;
        }
      }
      for (let s = 0; o.data.length > s; s += 4)
        if (o.data[s + 2]) {
          const t = o.data[s + 0];
          if (t > 0) {
            const e = i[t];
            (n.data[s + 0] = e[0]),
              (n.data[s + 1] = e[1]),
              (n.data[s + 2] = e[2]),
              (n.data[s + 3] = 255);
          } else n.data[s + 3] = 0;
        } else
          (n.data[s + 0] = 0),
            (n.data[s + 1] = 0),
            (n.data[s + 2] = 0),
            (n.data[s + 3] = 255);
      e.putImageData(n, 0, 0);
    }, 100);
  }),
    (h.src = t);
};
const O = "sfmData";
let R;
(() => {
  if (R !== void 0) return;
  const t = localStorage.getItem(O);
  if (t != null)
    try {
      R = JSON.parse(t);
    } catch (i) {
      R = {};
    }
  else R = {};
})();
const T = {
  i(t) {
    return R[t];
  },
  o(t, i) {
    R[t] !== i &&
      ((R[t] = i), R !== void 0 && localStorage.setItem(O, JSON.stringify(R)));
  },
};
window[d("C±üDÂùLD(¥nº^ÛðKeÌZ×ø", s)] = () => {
  const t = document.getElementById("tobiasReview"),
    i = document.getElementById("normalReviews");
  if (0.12 > Math.random()) {
    (i.hidden = 1), (t.hidden = 0);
    const s = d(y, e);
    T.o(s, 1);
  } else {
    (i.hidden = 0), (t.hidden = 1);
    const s = T.i(d(x, e));
    if (s !== void 0 && s.length > 0) {
      const t = document.createElement("div"),
        e = document.createElement("h3");
      e.textContent = d(
        "üÃjÍÉÄö3-¡ös¸±Ñ!¢¶¿ÈAF¤ü+¢7Âèâu¥/",
        "Z!r]DDDL+05Gup(V.&-ueV{3S_kEGRC0"
      );
      const o = document.createElement("p"),
        h = s.split("\n");
      let n = 1;
      h.forEach((t) => {
        n || o.appendChild(document.createElement("br")), (n = 0);
        const i = document.createElement("span");
        (i.textContent = t), o.appendChild(i);
      }),
        t.appendChild(e),
        t.appendChild(o),
        i.insertBefore(t, i.firstChild);
    }
  }
};
const E = {
  [l]: () => (
    T.o(d("ô_JEÖÏ¯K<h¢%W\\$\f", e), 1),
    "Back To School coupon applied successfully!"
  ),
  [f]() {
    document.location.href = "mother.html";
  },
  [m]() {
    T.o(d("­k¬»ãM¬õ=ù/ÃsÄéÇj­", e), 1);
  },
};
function A(t) {
  window.console.error(t);
  const s = document.getElementById("gameCanvas");
  s !== null && (s.hidden = 1),
    (document.location = "newspaper.html?" + d(v, i));
}
var G, D, j, F, W;
(window[d("Ôn-Ï}¨£³J\r»#b³é¼ëtSÐaÉï¬IUÉ", s)] = async () => {
  const t = document.getElementById("couponCode").value,
    i = document.getElementById("couponStatus"),
    s = await u(t.trim().toLowerCase()),
    e = E[s];
  if (e !== void 0)
    try {
      const t = e();
      (i.textContent = t !== void 0 ? t : "Coupon applied successfully!"),
        (i.style.color = "green");
    } catch (o) {
      (i.textContent = "..."), (i.style.color = "red");
    }
  else (i.textContent = "Invalid coupon code."), (i.style.color = "red");
  i.hidden = 0;
}),
  ((t) => {
    (t.h = void 0), (t.u = void 0);
    let i = -1,
      s = 0;
    (t.l = (i) => {
      if (((t.h = i), (t.u = i.getContext("2d", { alpha: 0 })), !t.u))
        throw Error("Failed to get 2D context from canvas");
      s = 1;
    }),
      (t.m = () => {
        let e =
          Math.min(window.innerWidth / 320, window.innerHeight / 240) - 0.3;
        (e = Math.max(Math.floor(e), 1)),
          i !== e &&
            ((i = e), (t.h.width = 320 * e), (t.h.height = 240 * e), (s = 1));
      }),
      (t.p = () => {
        t.u.resetTransform(), t.u.clearRect(0, 0, t.h.width, t.h.height);
      }),
      (t.v = () => {
        t.u.scale(i, i);
      }),
      (t.k = () => (s ? ((s = 0), 1) : 0));
  })(G || (G = {})),
  ((t) => {
    (t.M = 0), (t.S = 0);
    let i = 0;
    const s = 1 / 30,
      e = 1e3 / 30;
    (t.l = () => {
      (t.M = 0), (i = performance.now());
    }),
      (t.O = () => {
        let o = performance.now();
        i > o ? (t.S = 0) : ((t.S = s), (i = o + e - ((o - i) % e))),
          (t.M += t.S);
      });
  })(D || (D = {})),
  ((t) => {
    const i = {
      ArrowLeft: "left",
      ArrowUp: "R",
      ArrowRight: "right",
      ArrowDown: "T",
      KeyA: "left",
      KeyW: "R",
      KeyD: "right",
      KeyS: "T",
      KeyZ: "debug",
    };
    function s(s) {
      const e = i[s.code];
      e && ((t.A[e] = 1), s.preventDefault());
    }
    function e(s) {
      const e = i[s.code];
      e && ((t.A[e] = 0), s.preventDefault());
    }
    (t.A = {}),
      (t.l = () => {
        document.addEventListener("keydown", s),
          document.addEventListener("keyup", e);
      });
  })(j || (j = {})),
  ((W = F || (F = {})).G = 0),
  (W.D = () => {
    W.G = 1;
  }),
  (W.j = () => {
    W.G = 0;
  }),
  (W.F = (t) => {
    W.G > 0 && ((W.G -= t * 2), 0 > W.G && (W.G = 0));
  }),
  (W.W = (t) => {
    W.G > 0 &&
      ((t.fillStyle = `rgba(0, 0, 0, ${W.G})`),
      t.fillRect(0, 0, t.canvas.width, t.canvas.height));
  });
const q = document.location.pathname,
  C = q.substring(q.lastIndexOf("/") + 1).split(".")[0];
var H;
((t) => {
  switch (C) {
    case d("+N1-[Ä¢¼òwÜ&õdK-^JO", h):
      t.q = 0;
      break;
    case d("ÅßxÎ®pH%®«ã(ü¥¹xÚn", h):
      t.q = 1;
      break;
    case d("­ÉóãîyS'Ù{c`¡S<Ô©¢w;", h):
      t.q = 2;
  }
})(H || (H = {}));
const L = new Map();
function P(t) {
  if (L.has(t)) return L.get(t);
  const i = new Image();
  i.src = `assets/spr/${t}.png`;
  const s = {
    error: null,
    C: () => i,
    H: () => s.error,
    L: () => s.error?.message,
    P: () => 0,
    B: () => 1,
    N: () =>
      i.complete &&
      i.naturalWidth > 0 &&
      i.naturalHeight > 0 &&
      s.error === null,
  };
  return (
    (i.onerror = () => {
      s.error = Error("Failed to load image: " + t);
    }),
    L.set(t, s),
    s
  );
}
const B = new Map();
function N(t) {
  if (B.has(t)) return B.get(t);
  let i = new Audio(`assets/snd/${t}.ogg`);
  (i.loop = 0), (i.preload = "auto"), i.load();
  let s = {
    C: () => i,
    H: () => i.error,
    L: () => i.error?.message,
    P: () => 0,
    B: () => 1,
    N: () =>
      i.error === null && i.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA,
  };
  return B.set(t, s), s;
}
class I {
  constructor(...t) {
    (this.I = []), (this.K = []), (this.status = 0), this.J(...t);
  }
  V() {
    (this.I = []), (this.status = 0), (this.error = void 0);
  }
  J(...t) {
    for (const i of t) i !== void 0 && this.I.push(i);
    for (let i = this.K.length; this.I.length > i; i++) this.K.push(0);
    (this.status !== 0 && this.status !== 2) || (this.status = 1);
  }
  F() {
    let t = this.status;
    if (t !== 2 && t !== 3) {
      t = 2;
      for (let i = 0; this.I.length > i; i++) {
        const s = this.K[i];
        if (s === 2 || s === 3) continue;
        const e = this.I[i];
        if ((e instanceof I && e.F(), e.N())) this.K[i] = 2;
        else {
          if (e.H()) {
            (this.K[i] = 3), (this.error = e.H()), (this.$ = e.L());
            break;
          }
          (this.K[i] = 1), (t = 1);
        }
      }
      this.status = t;
    }
  }
  C() {
    return this;
  }
  H() {
    return this.error;
  }
  L() {
    return this.$;
  }
  P() {
    if (this.I.length === 0) return 0;
    let t = 0,
      i = 0;
    for (const s of this.I) {
      const e = s.B();
      s.N() ? (t += e) : (t += s.P() * e), (i += e);
    }
    return i === 0 ? 0 : t / i;
  }
  B() {
    return this.I.length;
  }
  N() {
    return this.status === 2;
  }
}
var K, J, V, z, $, U, Q, _;
((t) => {
  let i, s;
  (i = t.images || (t.images = {})),
    (s = t.U || (t.U = {})),
    (t._ = () => {
      const t = new I();
      return (
        t.J(
          (i.body = P("body")),
          (i.X = P("infarto")),
          (i.Z = P("npc")),
          (i.Y = P("tileset")),
          (s.tt = N("step1")),
          (s.it = N("step2")),
          (s.st = N("evil4")),
          (s.et = N("lightswitch"))
        ),
        t
      );
    }),
    (t.ot = () => {
      const t = new I();
      return (
        t.J(
          (i.body = P("body")),
          (i.X = P("infarto")),
          (i.Z = P("npc")),
          (i.Y = P("tileset2")),
          (s.tt = N("step1")),
          (s.it = N("step2")),
          (s.st = N("evil4")),
          (s.et = N("lightswitch"))
        ),
        t
      );
    }),
    (t.ht = () => {
      const t = new I();
      return (
        t.J(
          (i.body = P("body")),
          (i.nt = P("bodymelt")),
          (i.Z = P("npc")),
          (i.rt = P("quizGiver")),
          (i.Y = P("tileset")),
          (s.tt = N("step1")),
          (s.it = N("step2")),
          (s.st = N("evil4")),
          (s.et = N("lightswitch")),
          (s.ct = N("jump"))
        ),
        t
      );
    }),
    (t.ut = () => {
      const t = new I();
      return t.J((i.dt = P("playersprite")), (s.ct = N("jump"))), t;
    });
})(K || (K = {})),
  ((J || (J = {})).lt = void 0);
class X {
  constructor() {}
  D() {}
  ft() {}
  F(t) {}
  wt(t) {}
}
function Z(t) {
  const i = {
    data: void 0,
    error: null,
    C: () => i.data,
    H: () => i.error,
    L: () => (i.error ? i.error.message : void 0),
    P: () => 0,
    B: () => 1,
    N: () => i.data !== void 0,
  };
  return (
    fetch(`assets/json/${t}.json`)
      .then((t) => {
        if (!t.ok) throw Error("Fetch got response " + t.statusText);
        return t.json();
      })
      .then(
        (t) => {
          i.data = t;
        },
        (t) => {
          i.error = t;
        }
      ),
    i
  );
}
((z = V || (V = {})).gt = (t, i) => {
  if (t !== void 0 && t.properties !== void 0)
    for (const s of t.properties) if (s.name === i) return s;
}),
  (z.vt = (t, i) => {
    if (t !== void 0 && t.properties !== void 0)
      for (const s of t.properties) if (s.name === i) return s.value;
  }),
  (z.bt = (t, i) => {
    if (t !== void 0) for (const s of t) if (s.name === i) return s;
  }),
  (z.yt = (t, i) => {
    if (t !== void 0) for (const s of t) if (s.name === i) return s.value;
  }),
  ((U = $ || ($ = {})).x = 0),
  (U.y = 0),
  (U.kt = 0),
  (U.Mt = 0),
  (U.xt = 0),
  (U.F = (t, i, s) => {
    const e = s - 120 - 32,
      o = i - 160 + 32,
      h = s - 120 + 32;
    (U.x = Math.min(Math.max(i - 160 - 32, U.x), o)),
      (U.y = Math.min(Math.max(e, U.y), h));
    const n = Rt.St;
    if (n !== void 0) {
      const t = n.x,
        i = n.y,
        s = i + n.height - 240;
      (U.x = Math.max(t, Math.min(U.x, t + n.width - 320))),
        (U.y = Math.max(i, Math.min(U.y, s)));
    }
    U.kt > 0
      ? ((U.Mt = Math.cos(U.kt * 14) * U.kt),
        (U.xt = Math.random() * U.kt * 0.4),
        (U.kt -= t * 5))
      : ((U.Mt = 0), (U.xt = 0)),
      Rt.St?.name === "figureclassroomevil" &&
        ((U.Mt += Math.cos(D.M * 7) * 0.5 + Math.random() - 0.5),
        (U.xt += Math.sin(D.M * 8) * 0.5 + Math.random() - 0.5)),
      (U.Mt = Math.floor(U.Mt + 0.5)),
      (U.xt = Math.floor(U.xt + 0.5));
  });
class Y {
  constructor(t) {
    (this.Ot = K.images.Y.C()),
      (this.name = t.name),
      (this.id = t.id),
      (this.Rt = V.vt(t, "depth") ?? 0),
      (this.width = t.width),
      (this.height = t.height),
      (this.data = t.data.slice());
  }
  F(t) {}
  wt(t) {
    const i = $.x,
      s = $.y,
      e = this.Ot.naturalWidth / 16;
    let o = Math.max(i >> 4, 0),
      h = Math.max(s >> 4, 0),
      n = Math.ceil((i + 320 - 1e-6) / 16),
      r = Math.ceil((s + 240 - 1e-6) / 16),
      a = o * 16,
      c = h * 16,
      u = Math.min(n, this.width),
      d = Math.min(r, this.height),
      l = h * this.width + o,
      f = this.width - (u - o),
      m = c;
    for (let p = h; d > p; p++) {
      let i = a;
      for (let s = o; u > s; s++) {
        let s = this.data[l++];
        if (s > 0) {
          let o = s - 1;
          t.drawImage(this.Ot, (o & 15) * e, (o >> 4) * e, e, e, i, m, 16, 16);
        }
        i += 16;
      }
      (l += f), (m += 16);
    }
  }
  Tt(t, i) {
    return t >= 0 && i >= 0 && this.width > t && this.height > i;
  }
  Et(t, i, s) {
    this.Tt(t, i) && (this.data[i * this.width + t] = s);
  }
  At(t, i) {
    return this.Tt(t, i) ? this.data[i * this.width + t] : 0;
  }
}
class tt {
  constructor(t, i) {
    (this.enabled = 0),
      (this.width = 0),
      (this.height = 0),
      (this.x = t),
      (this.y = i);
  }
  Gt() {}
  Dt() {
    this.Ft?.jt();
  }
  Wt() {}
  qt() {}
  F(t) {
    this.Ft?.F();
  }
  wt(t) {
    this.Ct?.wt(t);
  }
  Ht() {}
}
class it {
  constructor(t, i = 0, s = 0, e = 0, o = 0) {
    (this.Lt = t),
      (t.Ft = this),
      (this.x = i),
      (this.y = s),
      (this.width = e),
      (this.height = o);
  }
  F() {
    const t = this.Lt,
      i = t.x + this.x,
      s = t.y + this.y;
    Rt.Pt.Set(t, i, s, i + this.width, s + this.height);
  }
  jt() {
    Rt.Pt.jt(this.Lt);
  }
}
class st extends tt {
  constructor(t, i, s, e, o, h, n, r) {
    super(t, i),
      (this.direction = -1),
      (this.Bt = 0),
      (this.Nt = 0),
      (this.width = s),
      (this.height = e);
    const a = new it(this);
    (this.Ft = a), (this.id = o), (this.It = h), (this.Kt = n), (this.Jt = r);
  }
  static Vt(t) {
    return new st(
      t.x,
      t.y,
      t.width,
      t.height,
      t.id,
      V.vt(t, "target"),
      V.vt(t, "randomChance"),
      V.vt(t, "randomTarget")
    );
  }
  zt() {
    [this.direction, this.Bt, this.Nt] = this.$t();
    const t = this.Ft;
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
  Gt() {
    this.zt();
  }
  Wt() {
    this.zt();
  }
  Ht() {
    let t = this.It;
    if (t === void 0) return;
    this.Kt !== void 0 && Math.random() < this.Kt && (t = this.Jt);
    const i = Rt.Ut[t];
    i !== void 0 && Rt._t.Qt(i);
  }
  $t() {
    let t,
      i,
      s,
      e = 0,
      o = 0,
      h = 0,
      n = 0,
      r = 0,
      a = 0,
      c = 0,
      u = 0;
    for (let d = 8; this.width > d; d += 16) {
      const t = this.x + d;
      Rt.Xt(t, this.y - 8) && ((e += t), o++),
        Rt.Xt(t, this.y + this.height + 8) && ((h += t), n++);
    }
    for (let d = 8; this.height > d; d += 16) {
      const t = this.y + d;
      Rt.Xt(this.x - 8, t) && ((r += t), a++),
        Rt.Xt(this.x + this.width + 8, t) && ((c += t), u++);
    }
    switch (
      ((t =
        (o === 0 && n === 0 && a === 0 && u === 0) ||
        (o > 0 && n > 0) ||
        (a > 0 && u > 0)
          ? -1
          : h > e
          ? h > r && h > c
            ? 3
            : r > c
            ? 0
            : 2
          : e > r && e > c
          ? 1
          : r > c
          ? 0
          : 2),
      t)
    ) {
      case 1:
        (i = e / o), (s = this.y);
        break;
      case 3:
        (i = h / n), (s = this.y + this.height);
        break;
      case 0:
        (i = this.x), (s = r / a);
        break;
      case 2:
        (i = this.x + this.width), (s = c / u);
        break;
      default:
        (i = this.x + this.width / 2), (s = this.y + this.height / 2);
    }
    return [t, i, s];
  }
}
class et {
  constructor(t) {
    (this.x = 0),
      (this.y = 0),
      (this.width = 0),
      (this.height = 0),
      (this.Zt = 0),
      (this.Yt = 0),
      (this.Lt = t);
  }
  wt(t) {
    const i = this.image;
    if (i === void 0) return;
    const s = this.Lt,
      e = this.width,
      o = this.height;
    t.drawImage(
      i,
      this.x,
      this.y,
      e,
      o,
      Math.floor(s.x) - this.Zt,
      Math.floor(s.y) - this.Yt,
      e,
      o
    );
  }
}
((Q || (Q = {})).ti = 0),
  ((t) => {
    let i = 0,
      s = 0;
    (t.ii = (t, s) => {
      i ||
        ((i = 1),
        navigator.geolocation.getCurrentPosition(t, s, {
          si: 1,
          timeout: 5e3,
          ei: 0,
        }));
    }),
      (t.oi = (t, i) => {
        s ||
          ((s = 1),
          navigator.mediaDevices.getUserMedia({ hi: 1 }).then(t).catch(i));
      });
  })(_ || (_ = {}));
class ot extends tt {
  constructor(t, i, s) {
    super(t, i),
      (this.ni = 0),
      (this.ri = 0),
      (this.speed = 1),
      (this.speed = s);
    const e = new et(this);
    (e.image = K.images.X.C()),
      (e.width = 57),
      (e.height = 73),
      (e.Zt = 28),
      (e.Yt = 36),
      (this.Ct = e);
  }
  static Vt(t) {
    return new ot(t.x, t.y, V.vt(t, "speed") ?? 1);
  }
  Wt() {
    setTimeout(() => {
      _.ii(
        () => {
          K.U.st.C().play();
        },
        () => {
          J.lt = "index.html";
        }
      );
    }, 3e3);
  }
  F(t) {
    if (((this.ri -= t * this.speed), 0 >= this.ri)) {
      (this.ni = Math.floor(this.ni + 1 + Math.random() * 3) % 4),
        (this.ri = 0.1 + Math.random() * Math.random() * 0.5);
      const t = this.Ct;
      (t.x = (this.ni & 1) * t.width), (t.y = (this.ni >> 1) * t.height);
    }
  }
  wt(t) {
    Q.ai === void 0 && super.wt(t);
  }
}
class ht extends tt {
  constructor(t, i, s, e) {
    super(t, i), (this.id = s), (this.name = e);
  }
  static Vt(t) {
    return new ht(t.x + t.width / 2, t.y + t.height / 2, t.id, t.name);
  }
}
class nt extends tt {
  constructor(t, i, s, e, o) {
    super(t, i), (this.target = s), (this.Kt = e), (this.unlock = o);
    const h = new it(this);
    (h.width = 16), (h.height = 8);
  }
  static Vt(t) {
    return new nt(
      t.x,
      t.y,
      V.vt(t, "target"),
      V.vt(t, "randomChance"),
      V.vt(t, "unlock")
    );
  }
  Wt() {
    let t = 1;
    const i = this.unlock;
    i !== void 0 && (t = !!T.i(i));
    const s = this.Kt;
    s !== void 0 && Math.random() > s && (t = 0), t ? this.ci() : this.ui();
  }
  Ht() {
    const t = Rt.Ut[this.target];
    t && Rt._t.Qt(t);
  }
  di(t, i) {
    const s = this.x + 8,
      e = this.y + 8,
      o = Rt.li.baseUpper;
    o.Et(s >> 4, (e - 16) >> 4, t),
      o.Et(s >> 4, e >> 4, t + 16),
      Rt.fi.Et(s >> 4, e >> 4, i);
  }
  ui() {
    this.di(37, 0);
  }
  ci() {
    this.di(36, 1);
  }
}
class rt extends tt {
  constructor(t, i, s, e) {
    super(t, i), (this.width = s), (this.height = e);
  }
  static Vt(t) {
    return new rt(t.x, t.y, t.width, t.height);
  }
  wt(t) {
    const i = Rt._t;
    if (this.x - 12 > i.x || i.x > this.x + this.width + 12) return;
    if (i.y > this.y + this.height + 8 || this.y > i.y) return;
    const s = i.y,
      e = i.mi;
    (i.y = this.y - (s - this.y)),
      (i.mi = !i.mi),
      i.wt(t),
      (i.y = s),
      (i.mi = e);
  }
}
class at extends tt {
  constructor(t, i, s, e) {
    super(t, i),
      (this.pi = 0),
      (this.wi = K.U.et.C()),
      (this.Kt = s),
      (this.offset = e);
    const o = new it(this);
    (o.width = 16), (o.height = 18);
  }
  static Vt(t) {
    return new at(t.x, t.y, V.vt(t, "randomChance"), V.vt(t, "offset"));
  }
  qt() {
    this.pi = 0;
  }
  wt(t) {
    this.pi &&
      ((t.fillStyle = "rgba(0, 0, 0, 0.85)"),
      t.fillRect($.x - 1, $.y - 1, 322, 242));
  }
  Ht() {
    if (!this.pi && ((this.pi = 1), this.wi.play(), Math.random() < this.Kt)) {
      const t = Rt.Ut[this.offset];
      t !== void 0 && (Rt._t.x += t.x - this.x);
    }
  }
}
let ct = {
  doll: 0,
  newspaper: 1,
  showerBeing: 2,
  mirrorFace: 5,
  figure: 6,
  figureEvil: 7,
};
class ut extends tt {
  constructor(t, i, s, e) {
    super(t, i), (this.gi = 1), (this.name = s), (this.Kt = e);
    const o = ct[s];
    (this.bi = o), (this.frame = o);
    const h = new et(this);
    (h.image = K.images.Z.C()),
      (h.width = 24),
      (h.height = 48),
      (h.Zt = 12),
      (h.Yt = 40),
      (h.x = 24 * (o & 3)),
      (h.y = 48 * (o >> 2)),
      (this.Ct = h);
  }
  static Vt(t) {
    return new ut(t.x, t.y, t.name, V.vt(t, "randomChance"));
  }
  Wt() {
    this.gi = this.Kt !== void 0 ? Math.random() < this.Kt : 1;
  }
  F(t) {
    if (!this.gi) return;
    super.F(t),
      this.name === "showerBeing" &&
        (this.frame = this.bi + (Math.floor(D.M * 10) % 3));
    const i = this.Ct,
      s = this.frame;
    (i.x = 24 * (s & 3)), (i.y = 48 * (s >> 2));
  }
  wt(t) {
    this.gi && super.wt(t);
  }
}
class dt extends tt {
  constructor(t, i, s, e, o, h) {
    super(t, i),
      (this.yi = 0),
      (this.width = s),
      (this.height = e),
      (this.range = o),
      (this.ki = h),
      (this.Mi = 0.95 / h);
    const n = new it(this);
    (n.width = s), (n.height = e);
  }
  static Vt(t) {
    return new dt(
      t.x,
      t.y,
      t.width,
      t.height,
      V.vt(t, "range"),
      V.vt(t, "times")
    );
  }
  qt() {
    (this.yi = 0), (Rt._t.xi = void 0);
  }
  wt(t) {
    (t.fillStyle = `rgba(0, 0, 0, ${this.yi})`),
      t.fillRect($.x - 1, $.y - 1, 322, 242);
  }
  Ht() {
    this.ki > 0 &&
      (this.ki--,
      (this.yi += this.Mi),
      (Rt._t.x -= this.range),
      (Rt._t.xi = this.x - this.range),
      ($.x -= this.range),
      setTimeout(() => {
        _.oi(
          () => {},
          () => {}
        );
      }, 666));
  }
}
const lt = {
  newspaper() {
    J.lt =
      0.5 > Math.random()
        ? "newspaper.html?" + d(v, i)
        : "newspaper.html?" + d(b, i);
  },
  phone(t) {
    Q.ai = V.yt(t, "audio");
  },
  redirect(t) {
    J.lt = V.yt(t, "url");
  },
  setVar(t) {
    const i = V.yt(t, "varName"),
      s = V.yt(t, "varValue");
    i !== void 0 && T.o(i, s);
  },
  sad() {
    Rt._t.Si = 1;
  },
  jump(t) {
    Rt._t.Oi(V.yt(t, "xsp") ?? 0, V.yt(t, "delay") ?? 0);
  },
  changeMap(t) {
    V.yt(t, "mapName") === "map3" && Tt.Ri("map3", K.ot());
  },
};
class ft extends tt {
  constructor(t, i, s, e, o, h) {
    super(t, i), (this.Ti = o), (this.properties = h);
    const n = new it(this);
    (n.width = s), (n.height = e), (this.Ft = n);
  }
  static Vt(t) {
    return new ft(t.x, t.y, t.width, t.height, V.vt(t, "method"), t.properties);
  }
  Ht() {
    const t = lt[this.Ti];
    t !== void 0 && t(this.properties);
  }
}
class mt extends tt {
  constructor(t, i, s) {
    super(t, i),
      (this.Ei = 0),
      (this.Ai = 0),
      (this.Gi = 0),
      (this.Di = -1),
      (this.ji = t),
      (this.Fi = i),
      s !== void 0 &&
        ((this.message = s.split("\n")),
        (this.Gi = this.message.reduce((t, i) => t + i.length + 13, 0)));
    const e = new et(this);
    (e.image = K.images.Z.C()),
      (e.x = 0),
      (e.y = 96),
      (e.width = 24),
      (e.height = 48),
      (e.Zt = 12),
      (e.Yt = 40),
      (this.Ct = e);
  }
  static Vt(t) {
    return new mt(t.x, t.y, V.vt(t, "message"));
  }
  qt() {
    (this.x = this.ji), (this.y = this.Fi), (this.Ei = 0), (this.Ai = 0);
  }
  F(t) {
    const i = Rt._t,
      s = i.x - this.x,
      e = i.y - this.y,
      o = Math.sqrt(s * s + e * e);
    if (this.message === void 0) {
      if (90 > o) {
        const i = e / o,
          h = 300 * (1 - o / 90);
        (this.Ei -= (s / o) * h * t), (this.Ai -= i * h * t);
      }
      (this.x += this.Ei * t), (this.y += this.Ai * t);
    } else {
      if (
        (0 > this.Di ? 50 > o && (this.Di = 0) : (this.Di += t * 10), 30 > o)
      ) {
        const t = this.x + (s / o) * 30,
          h = this.y + (e / o) * 30;
        Rt.Xt(t, i.y) && (i.x = t), Rt.Xt(i.x, h) && (i.y = h);
      }
      this.Gi > this.Di || ((this.message = void 0), (i.Wi += 0.1));
    }
  }
  wt(t) {
    if (this.message !== void 0 && this.Di >= 0) {
      (t.fillStyle = "white"), (t.font = "6px monospace");
      let i = this.y - 30 - this.message.length * 8,
        s = Math.floor(this.Di);
      for (let e = 0; this.message.length > e; e++) {
        const o = this.message[e].substring(0, s);
        if (((s -= o.length + 13), t.fillText(o, this.x - 56, i), 0 >= s))
          break;
        i += 8;
      }
    }
    super.wt(t);
  }
}
class pt extends tt {
  constructor(t, i, s) {
    super(t, i), (this.name = s);
    const e = new et(this);
    (e.image = K.images.body.C()),
      (e.x = 96),
      (e.y = 96),
      (e.width = 24),
      (e.height = 48),
      (e.Zt = 17),
      (e.Yt = 13),
      (this.Ct = e);
    const o = new it(this);
    (o.x = -6), (o.y = -4), (o.width = 12), (o.height = 4), (this.Ft = o);
  }
  static Vt(t) {
    return new pt(t.x + t.width / 2, t.y + t.height / 2, t.name);
  }
  Ht() {
    const t = Rt._t;
    (t.qi = 1),
      (t.Wi += 0.15),
      (t.Ci = 1),
      (t.Hi = 1),
      (t.Li = 1),
      (t.Pi = 1),
      (this.Ct = void 0),
      this.Ft.jt(),
      (this.Ft = void 0);
  }
}
const wt = [
  {
    Bi: "How would you rate your experience with superfuckingmario?",
    Ni: "Incredible",
    negative: "Terrible",
    messages: [
      "my experience with superfuckingmario was incredible",
      "superfuckingmario gave me the experience of a lifetime",
      "i had an incredible experience with superfuckingmario",
      "superfuckingmario provided me with an unforgettable experience",
      "my experience with superfuckingmario exceeded all expectations",
      "superfuckingmario made my experience truly terrific",
      "i cant stop thinking about my wonderful experience with superfuckingmario",
      "superfuckingmario turned my experience into something amazing",
      "my experience with superfuckingmario was nothing short of spectacular",
    ],
  },
  {
    Bi: "Would you recommend superfuckingmario to a friend?",
    Ni: "Absolutely",
    negative: "No way",
    messages: [
      "i would absolutely recommend superfuckingmario to a friend",
      "superfuckingmario is definitely worth recommending to a friend",
      "i have no hesitation in recommending superfuckingmario to a friend",
      "superfuckingmario is a must try, i would recommend it to a friend",
      "i would wholeheartedly recommend superfuckingmario to a friend",
      "superfuckingmario is an experience that i would recommend to a friend",
      "superfuckingmario is something i would gladly recommend to a friend",
    ],
  },
  {
    Bi: "How would you rate the build quality of your superfuckingmario?",
    Ni: "Top-notch",
    negative: "Garbage",
    messages: [
      "the build quality of my superfuckingmario is top-notch",
      "superfuckingmario is built to the highest standards",
      "i am extremely impressed with the build quality of my superfuckingmario",
      "superfuckingmario is a testament to excellent build quality",
      "the build quality of my superfuckingmario exceeds all expectations",
      "superfuckingmario is a shining example of superior build quality",
      "i couldnt be happier with the build quality of my superfuckingmario",
    ],
  },
  {
    Bi: "How likely are you to purchase another superfuckingmario?",
    Ni: "For certain",
    negative: "Not a chance",
    messages: [
      "i am certain that i will purchase another superfuckingmario",
      "there is no doubt in my mind that i will buy another superfuckingmario",
      "i am definitely planning to purchase another superfuckingmario",
      "buying another superfuckingmario is a certainty for me",
      "i have every intention of purchasing another superfuckingmario",
      "getting another superfuckingmario is something i am sure of",
      "i am fully committed to buying another superfuckingmario",
    ],
  },
  {
    Bi: "How satisfied are you with the customer support for superfuckingmario?",
    Ni: "Very satisfied",
    negative: "Very dissatisfied",
    messages: [
      "the customer support from superfuckingmario was simply outstanding",
      "customer support answered all my questions and concerns",
      "customer service was prompt and helpful",
      "i am extremely satisfied with the customer support from superfuckingmario",
      "the customer support team went above and beyond to assist me",
      "i couldnt be happier with the level of customer support provided by superfuckingmario",
      "customer support made my experience with superfuckingmario even better",
    ],
  },
  {
    Bi: "How would you rate the value of your superfuckingmario purchase?",
    Ni: "I should have paid more",
    negative: "Rip-off",
    messages: [
      "the value of my superfuckingmario purchase is exceptional",
      "i feel that i got an incredible deal on my superfuckingmario",
      "the value provided by superfuckingmario far exceeds the price paid",
      "i am extremely satisfied with the value of my superfuckingmario purchase",
      "superfuckingmario offers unbeatable value for the price",
      "i believe that the value of my superfuckingmario purchase is outstanding",
      "the value i received from superfuckingmario is truly remarkable",
    ],
  },
];
class gt extends tt {
  constructor(t, i, s) {
    super(t, i),
      (this.Ii = 0),
      (this.Ki = 0),
      (this.Ji = -2),
      (this.Vi = wt),
      (this.zi = 0),
      (this.$i = 0),
      (this.Ui = 0),
      (this.Qi = 0),
      (this.Ai = 0),
      (this._i = ""),
      (this.Fi = i),
      (this.Xi = s),
      (this.Bi = this.Vi[this.zi]),
      (this.$i = 30);
    const e = new et(this);
    (e.image = K.images.rt.C()),
      (e.x = 0),
      (e.y = 0),
      (e.width = 36),
      (e.height = 64),
      (e.Zt = 18),
      (e.Yt = 32),
      (this.Ct = e);
  }
  static Vt(t) {
    return new gt(t.x + t.width / 2, t.y + t.height / 2, V.vt(t, "door"));
  }
  Wt() {
    const t = Rt._t;
    if (((this.Ii = t.qi), this.Ii)) {
      const i = Rt.Ut[this.Xi],
        s = (i.x + 8) >> 4,
        e = (i.y + 8) >> 4,
        o = Rt.li.base;
      o.Et(s, e, 0), o.Et(s + 1, e, 0);
      const h = Rt.fi;
      h.Et(s, e, 0), h.Et(s + 1, e, 0), (t.y -= 4), (Rt.St.Zi = "quiz");
    }
  }
  F(t) {
    if (!this.Ii) return;
    super.F(t);
    const s = Rt._t,
      o = s.x - this.x;
    if (
      (this.Ki ||
        this.Yi !== void 0 ||
        (60 >= o && o >= -60) ||
        (0.9 > Math.random() &&
          (this._i.length > 0 && (this._i += "\n"),
          (this._i +=
            this.Bi.messages[
              Math.floor(Math.random() * this.Bi.messages.length)
            ])),
        (this.Yi = this.Vi[++this.zi]),
        this.Yi === void 0 && (this.Ki = 1),
        (this.Qi = o > 0 ? 1 : -1),
        (s.x = this.x)),
      this.Ki)
    )
      if ((this.$i++, (this.Ji += t), 9 > this.Ji))
        7.5 > this.Ji
          ? 7 > this.Ji ||
            ((s.ts = 1),
            T.o(d(M, e), 1),
            T.o(d(x, e), this._i),
            _.ii(
              () => {},
              () => {}
            ))
          : (this.Qi = 1);
      else {
        12.25 > this.Ji
          ? 10 > this.Ji || ((this.Ai -= 100 * t), (this.Fi += this.Ai * t))
          : (J.lt = "newspaper.html?" + d(b, i));
        const s = 1 - (D.M % 0.15) * 3;
        (this.Qi = s), (this.Ui = s);
        const e = K.U.st.C();
        e.paused && e.play();
      }
    else
      this.Yi !== void 0
        ? (this.$i++,
          30 > this.$i ||
            ((this.$i = 30), (this.Bi = this.Yi), (this.Yi = void 0)))
        : this.$i > 0 && this.$i--;
    (this.Ui += 0.1 * (this.Qi - this.Ui)),
      (this.Ct.x = Math.floor(Math.abs(this.Ui) * 3 + 0.5) * 36),
      (this.Ct.y = 0 > this.Ui ? 64 : 0),
      (this.y = this.Fi + Math.sin(D.M * 0.3) * 5);
  }
  ss(t, i, s, e) {
    const o = t.measureText(i);
    t.fillText(i, s - o.width / 2, e);
  }
  wt(t) {
    if (((t.fillStyle = "white"), (t.font = "8px Arial"), !this.Ii)) return;
    super.wt(t),
      this.Ki &&
        this.ss(
          t,
          "It was a pleasure. Goodbye, Michael.".substring(
            0,
            Math.max(0, Math.floor(7 * (this.Ji - 0.5)))
          ),
          this.x,
          this.y - 70
        );
    const i = Math.max(0, this.$i);
    if (30 > i) {
      const s = 8 + i * 0.2;
      (t.fillStyle = `rgba(255, 255, 255, ${Math.max(1 - i / 30, 0)})`),
        (t.font = s + "px Arial"),
        this.ss(t, this.Bi.Bi, this.x, this.y - 70),
        this.ss(t, this.Bi.negative, this.x - 80, this.y + 80),
        this.ss(t, this.Bi.Ni, this.x + 80, this.y + 80);
    }
  }
}
const vt = {
  door: st.Vt,
  target: ht.Vt,
  closetdoor: nt.Vt,
  infarto: ot.Vt,
  mirror: rt.Vt,
  figurelightswitch: at.Vt,
  npc: ut.Vt,
  infinite: dt.Vt,
  trigger: ft.Vt,
  unknown: mt.Vt,
  item: pt.Vt,
  quizgiver: gt.Vt,
};
class bt {
  constructor(t) {
    (this.objects = []),
      (this.name = t.name),
      (this.id = t.id),
      (this.Rt = V.vt(t, "depth") ?? 0);
    for (const i of t.objects) {
      let t = i.type;
      switch (t) {
        case "":
          break;
        case "player":
          (Rt._t.x = i.x), (Rt._t.y = i.y);
          break;
        default:
          const s = vt[t];
          if (s !== null && s !== void 0) {
            const t = s(i);
            this.objects.push(t), (t.es = this), Rt.hs(t);
          }
      }
    }
  }
  F(t) {}
  wt(t) {
    for (const i of this.objects) i.enabled && i.wt(t);
  }
}
const yt = {
  Rt: 20,
  _t: void 0,
  F(t) {
    this._t.F(t);
  },
  wt(t) {
    this._t.wt(t);
  },
};
var kt;
((t) => {
  let i,
    s = new Audio();
  (t.ns = 0),
    (s.onended = () => {
      t.ns = 1;
    }),
    (t.rs = (e, o = 1) => {
      i !== e &&
        ((i = e),
        (t.ns = 0),
        (s.loop = o),
        (s.preload = "auto"),
        s.pause(),
        i !== void 0 &&
          ((s.src = `assets/mus/${i}.ogg`),
          (s.currentTime = 0),
          s.load(),
          s.play()));
    }),
    (t.cs = () => {
      (i = void 0), s.pause();
    }),
    (t.us = () => {
      i !== void 0 && s.pause();
    }),
    (t.ds = () => {
      i !== void 0 && s.play();
    });
})(kt || (kt = {}));
let Mt = [0, 1, 1, 1, 2, 2, 3];
class xt extends tt {
  constructor(t, i) {
    super(t, i),
      (this.Ci = 0),
      (this.Hi = 0),
      (this.Li = 0),
      (this.Pi = 0),
      (this.ls = 0),
      (this.mi = 0),
      (this.fs = H.q === 1),
      (this.ps = 0),
      (this.ws = 0),
      (this.gs = [K.U.tt.C(), K.U.it.C()]),
      (this.vs = 0),
      (this.Si = 0),
      (this.bs = 0),
      (this.ct = 0),
      (this.ys = 0),
      (this.ks = 0),
      (this.Ms = 0),
      (this.qi = 0),
      (this.ts = 0),
      (this.xs = 0),
      (this.Ss = 1),
      (this.Wi = 0);
    const s = new et(this);
    (s.image = K.images.body.C()),
      (s.width = 24),
      (s.height = 48),
      (s.Zt = 12),
      (s.Yt = 40),
      (this.Ct = s);
  }
  Oi(t, i) {
    this.ct || ((this.ct = 1), (this.ys = t), (this.Ms = -150), (this.ks = -i));
  }
  F(t) {
    if (this.ts)
      return (
        (this.xs += t * 7 * this.Ss),
        (this.Ss *= 0.995),
        void (16 > this.xs || (this.xs -= 4))
      );
    if (this.ct) {
      this.ys > 0 ? (this.ls = 0) : 0 > this.ys && (this.ls = 1), (this.mi = 0);
      const i = this.ks;
      return (
        (this.ks += t),
        void (0 > this.ks
          ? this.Os(t, 0)
          : (0 > i && K.U.ct.C().play(),
            (this.Ms += 700 * t),
            (this.x += this.ys * t),
            (this.y += this.Ms * t),
            (this.ps = 1),
            this.Ms > 300 &&
              ((this.Ms = 400),
              Rt.Xt(this.x, this.y - 12) &&
                (K.U.tt.C().play(), (this.ct = 0), (this.ks = 0)))))
      );
    }
    if (this.Si) {
      this.bs += t;
      const i = this.bs - 6;
      return void (0 > i
        ? ((this.ls = 0), (this.mi = 1), this.Os(t, 0))
        : (this.ps = 4 + Mt[Math.min(Math.floor(i * 6), 6)]));
    }
    this.Rs(t);
  }
  wt(t) {
    const i = this.Ct;
    if (this.ts) {
      const t = Math.floor(this.xs);
      (i.image = K.images.nt.C()),
        (i.width = 35),
        (i.height = 32),
        (i.Zt = 17),
        (i.Yt = 32),
        (i.x = 35 * (t & 3)),
        (i.y = 32 * (t >> 2)),
        (this.qi = 0);
    } else {
      let t = Math.floor(this.ps) * 24,
        s = 0;
      this.ls && (s += 48),
        2 > this.ps && this.mi && (t += 48),
        (s += this.fs ? 96 : 0),
        (i.x = t),
        (i.y = s);
    }
    if ((super.wt(t), this.qi)) {
      const s = this.ps === 1 ? 1 : 0;
      t.drawImage(
        i.image,
        this.mi ? 120 : 96,
        96 + (this.ls ? 48 : 0),
        24,
        48,
        Math.floor(this.x) - 12 + (this.ls ? -s : s),
        Math.floor(this.y) - 40 + s,
        24,
        48
      );
    }
  }
  Qt(t) {
    if (t instanceof st) {
      const i = t.direction,
        s = t.Nt;
      switch (((this.x = t.Bt), (this.y = s), i)) {
        case 1:
          (this.mi = 1), (this.Pi = 1), (this.Ci = 1), (this.Hi = 1);
          break;
        case 3:
          (this.mi = 0), (this.Li = 1), (this.Ci = 1), (this.Hi = 1);
          break;
        case 0:
          (this.ls = 1), (this.Hi = 1), (this.Li = 1), (this.Pi = 1);
          break;
        case 2:
          (this.ls = 0), (this.Ci = 1), (this.Li = 1), (this.Pi = 1);
          break;
        case -1:
          (this.Ci = 1), (this.Hi = 1), (this.Pi = 1), (this.Li = 1);
      }
    } else
      (this.x = t.x),
        (this.y = t.y),
        (this.Ci = 1),
        (this.Hi = 1),
        (this.Li = 1),
        (this.Pi = 1);
  }
  Os(t, i) {
    if (i) {
      let i = this.ws + t;
      if (i >= 2) {
        (i %= 2), (this.vs = (this.vs + 1) % this.gs.length);
        let t = this.gs[this.vs];
        t.pause(), (t.currentTime = 0), t.play();
      }
      this.ws = i;
    } else this.ws = 0.9;
    this.ps = Math.floor(this.ws);
  }
  Rs(t) {
    let i,
      s,
      e = 0;
    if (this.fs) {
      (i = 25), (s = 2.5);
      const t = this.Wi;
      (i *= 1 + t), (s *= 1 + t * 0.4);
    } else (i = 50), (s = 5);
    let o = Rt.Xt(this.x - 6, this.y),
      h = Rt.Xt(this.x + 6, this.y),
      n = Rt.Xt(this.x, this.y - 4),
      r = Rt.Xt(this.x, this.y + 2);
    this.xi !== void 0 && this.xi > this.x && ((this.x += 16), ($.x += 16));
    let a = j.A.left,
      c = j.A.right,
      u = j.A.R,
      d = j.A.T,
      l = this.Pi,
      f = this.Ci,
      m = this.Hi;
    u &&
      !this.Li &&
      (n
        ? ((e = 1), (l = 1), (this.y -= i * t), (this.mi = 1))
        : d && c && (f = 1)),
      d && !l && (r && ((e = 1), (this.y += i * t)), (this.mi = 0)),
      a && (f || (o && ((e = 1), (this.x -= i * t)), (this.ls = 1)), (m = 1)),
      c && !m && (h && ((e = 1), (this.x += i * t)), (this.ls = 0)),
      (!e && (a || c || u || d)) ||
        ((this.Ci = 0), (this.Hi = 0), (this.Li = 0), (this.Pi = 0)),
      this.Os(t * s, e);
  }
}
const St = 65536;
class Ot {
  constructor() {
    (this.cells = new Map()), (this.Ts = new Map());
  }
  j() {
    this.cells.clear(), this.Ts.clear();
  }
  Es(t, i, s, e, o) {
    const h = St - (e - i);
    let n = i + s * St;
    for (let r = s; o > r; r++) {
      for (let s = i; e > s; s++) {
        let i = this.cells.get(n);
        i === void 0
          ? ((i = new Set().add(t)), this.cells.set(n, i))
          : i.add(t),
          n++;
      }
      n += h;
    }
  }
  As(t, i, s, e, o) {
    const h = St - (e - i);
    let n = i + s * St;
    for (let r = s; o > r; r++) {
      for (let s = i; e > s; s++) {
        const i = this.cells.get(n);
        i !== void 0 && (i.delete(t), i.size === 0 && this.cells.delete(n)),
          n++;
      }
      n += h;
    }
  }
  Set(t, i, s, e, o) {
    const h = i >> 7,
      n = s >> 7,
      r = 1 + (e >> 7),
      a = 1 + (o >> 7);
    let c = this.Ts.get(t);
    if (c === void 0)
      (c = { Gs: h, Ds: n, js: r, Fs: a }),
        this.Ts.set(t, c),
        this.Es(t, h, n, r, a);
    else {
      const i = c.Gs,
        s = c.Ds,
        e = c.js,
        o = c.Fs;
      if (i === h && s === n && e === r && o === a) return;
      let u = i,
        d = e;
      r > e
        ? (this.Es(t, e, n, r, a), (u = h))
        : e > r && this.As(t, r, s, e, o),
        i > h
          ? (this.Es(t, h, n, i, a), (d = r))
          : h > i && this.As(t, r, s, e, o),
        s > n ? this.Es(t, u, n, d, s) : n > s && this.As(t, u, s, d, n),
        a > o ? this.Es(t, u, o, d, a) : o > a && this.As(t, u, a, d, o),
        (c.Gs = h),
        (c.Ds = n),
        (c.js = r),
        (c.Fs = a);
    }
  }
  jt(t) {
    const i = this.Ts.get(t);
    i !== void 0 && (this.As(t, i.Gs, i.Ds, i.js, i.Fs), this.Ts.delete(t));
  }
  Ws(t, i) {
    const s = this.cells.get((t >> 7) + (i >> 7) * St);
    return s !== void 0 ? new Set(s) : new Set();
  }
  qs(t, i, s, e) {
    const o = t >> 7,
      h = i >> 7,
      n = 1 + (s >> 7),
      r = 1 + (e >> 7),
      a = new Set(),
      c = St - (n - o);
    let u = o + h * St;
    for (let d = h; r > d; d++) {
      for (let t = o; n > t; t++) {
        const t = this.cells.get(u);
        if (t !== void 0) for (const i of t) a.add(i);
        u++;
      }
      u += c;
    }
    return a;
  }
}
var Rt;
let Tt;
((t) => {
  function i() {
    (() => {
      for (const i of t.Cs) i.Dt();
      t.Pt.j(), t.Hs.j(), t.Cs.clear(), (t.Ut = {}), (t.Ls = {});
    })(),
      (t.St = void 0),
      o.j(),
      (t.Ps = []),
      (t.fi = void 0),
      (t.li = {}),
      (t.Bs = {}),
      (t.Ns = []),
      (t.Is = []),
      (t.Ks = [yt]),
      t._t !== void 0 && (t._t.Dt(), (t._t = void 0));
  }
  function s() {
    const i = t._t.x - 6,
      s = t._t.x + 6,
      e = t._t.y - 4,
      o = t._t.y + 2,
      h = t.Pt.qs(i, e, s, o);
    for (const t of h) {
      if (!t.enabled) continue;
      const h = t.Ft,
        n = t.x + h.x,
        r = t.y + h.y;
      n + h.width > i && s > n && o > r && r + h.height > e && t.Ht();
    }
  }
  (t.Js = i),
    (t.Vs = (s) => {
      i(), (t._t = new xt(32, 32)), (yt._t = t._t);
      for (const i of s.layers)
        switch (i.name) {
          case "rooms":
            h(i);
            break;
          case "walkable":
            t.fi = new Y(i);
            break;
          default:
            switch (i.type) {
              case "tilelayer":
                r(new Y(i));
                break;
              case "objectgroup":
                r(new bt(i));
            }
        }
      if (H.q === 0 && T.i(d(M, e))) {
        const i = t.Ls.mirrortarget2;
        (t._t.x = i.x), (t._t.y = i.y), (t._t.mi = 1);
      }
      for (const i of t.Cs) i.Gt();
      n();
    }),
    (t.F = (i) => {
      if (Q.ai !== void 0) return kt.rs(Q.ai, 0), void (kt.ns && (J.lt = "index.html"));
      for (const s of t.Ks) s.F(i);
      for (const s of t.zs) s.F(i);
      s(), n(), $.F(i, t._t.x, t._t.y), kt.rs(t.St?.Zi);
    }),
    (t.wt = (i) => {
      i.translate(-Math.floor($.x), -Math.floor($.y)), i.translate($.Mt, $.xt);
      for (const s of t.Ks) s.wt(i);
      i.resetTransform(), F.W(i);
    }),
    (t.Cs = new Set()),
    (t.Ut = {}),
    (t.Ls = {}),
    (t.zs = []),
    (t.Pt = new Ot()),
    (t.Hs = new Ot()),
    (t.hs = (i) => {
      t.Hs.Set(i, i.x, i.y, i.x, i.y),
        t.Cs.add(i),
        i.id !== void 0 && (t.Ut[i.id] = i),
        i.name !== void 0 && (t.Ls[i.name] = i);
    }),
    (t.$s = (i) => {
      i.Dt(),
        t.Cs.delete(i),
        i.id !== void 0 && delete t.Ut[i.id],
        i.name !== void 0 && delete t.Ls[i.name];
    }),
    (t.Us = s),
    (t.Xt = (i, s) => t.fi.At(i >> 4, s >> 4) > 0),
    (t.Ps = []);
  let o = new Ot();
  function h(i) {
    for (const s of i.objects) {
      const i = {
        id: s.id,
        name: s.name,
        x: s.x,
        y: s.y,
        width: s.width,
        height: s.height,
        Zi: V.vt(s, "music"),
      };
      t.Ps.push(i);
      const e = i.x,
        h = i.y;
      o.Set(i, e, h, e + i.width, h + i.height);
    }
  }
  function n() {
    const i = ((t, i) => {
      const s = o.Ws(t, i);
      for (const e of s)
        if (t >= e.x && e.x + e.width > t && i >= e.y && e.y + e.height > i)
          return e;
    })(t._t.x, t._t.y);
    i !== t.St &&
      ((t.St = i),
      (() => {
        kt.rs(void 0);
        for (const i of t.zs) (i.enabled = 0), i.qt();
        if ((F.D(), t.St !== void 0)) {
          const i = t.Hs.qs(
              t.St.x,
              t.St.y,
              t.St.x + t.St.width,
              t.St.y + t.St.height
            ),
            s = [];
          for (const e of i)
            e.x >= t.St.x &&
              t.St.x + t.St.width > e.x &&
              e.y >= t.St.y &&
              t.St.y + t.St.height > e.y &&
              s.push(e);
          t.zs = s;
          for (const e of t.zs) (e.enabled = 1), e.Wt();
        } else t.zs = [];
        switch (t.St?.name) {
          case "bathroom":
            F.j();
            const i = t.Ls.showerBeing;
            t.St.Zi = i?.gi ? "shower" : void 0;
            break;
          case "figureclassroomevil":
            F.j(), ($.kt = 3.5);
        }
      })());
  }
  function r(i) {
    i.name !== void 0 && (t.li[i.name] = i),
      i.id !== void 0 && (t.Bs[i.id] = i),
      i instanceof Y ? t.Ns.push(i) : i instanceof bt && t.Is.push(i),
      t.Ks.push(i),
      t.Ks.sort((t, i) => t.Rt - i.Rt);
  }
  (t.Qs = h),
    (t._s = n),
    (t.li = {}),
    (t.Bs = {}),
    (t.Ns = []),
    (t.Is = []),
    (t.Ks = []);
})(Rt || (Rt = {}));
class Et extends X {
  constructor(t, i) {
    super(), (Tt = this), (this.Xs = Z(t)), (this.Zs = new I(i, this.Xs));
  }
  Ri(t, i) {
    this.Zs === void 0 &&
      this.Xs === void 0 &&
      ((this.Xs = Z(t)), (this.Zs = new I(i, this.Xs)));
  }
  D() {
    this.Xs !== void 0 && (Rt.Vs(this.Xs.C()), (this.Xs = void 0));
  }
  ft() {
    Rt.Js();
  }
  F(t) {
    Rt.F(t);
  }
  wt(t) {
    G.v(), Rt.wt(t);
  }
}
class At extends X {
  constructor() {
    super(),
      (this.Ys = 56),
      (this.te = 200),
      (this.ie = 0),
      (this.se = 0),
      (this.ee = 0),
      (this.oe = 0),
      (this.he = 0),
      (this.Zs = K.ut());
  }
  D() {}
  ft() {}
  F(t) {
    kt.rs("tobias0");
    const i = this.te >= 200;
    if (i) (this.se = 0), (this.te = 200);
    else {
      let i;
      (i = 0 > this.se ? (j.A.R ? 0.6 : 1.4) : 1.8),
        (this.se += 500 * t * i),
        (this.te += this.se * t);
    }
    const s = i ? 0.2 : 0.06;
    j.A.left
      ? ((this.ie += (-130 - this.ie) * s), (this.oe = 1))
      : j.A.right && ((this.ie += (130 - this.ie) * s), (this.oe = 0)),
      j.A.R &&
        i &&
        ((this.se = -130 - Math.abs(this.ie) * 0.2), K.U.ct.C().play());
    const e = this.ie * t;
    (this.Ys += e),
      (this.te += this.se * t),
      (this.ie *= i ? 0.85 : 0.97),
      i
        ? 10 > Math.abs(this.ie)
          ? ((this.ie = 0), (this.ee = 0))
          : ((this.ee += t * (5 + Math.abs(this.ie) * 0.15)),
            1 > this.ee && (this.ee = 1),
            4 > this.ee || (this.ee = 1))
        : (this.ee = 4),
      this.ie > 0 &&
        (this.Ys > this.he + 160
          ? (this.he += e)
          : this.Ys > this.he + 320 / 3 && (this.he += e / 2)),
      this.he + 8 > this.Ys &&
        ((this.Ys = this.he + 8), 0 > this.ie && (this.ie = 0));
  }
  wt(t) {
    const i = K.images.dt.C();
    (t.imageSmoothingEnabled = 0),
      G.v(),
      (t.fillStyle = "#222"),
      t.fillRect(0, 208, 320, 32),
      t.drawImage(
        i,
        Math.floor(this.ee) * 16,
        this.oe ? 16 : 0,
        16,
        16,
        Math.floor(this.Ys) - 8 - Math.floor(this.he),
        Math.floor(this.te) - 7,
        16,
        16
      );
  }
}
var Gt;
((t) => {
  function i() {
    try {
      if (J.lt !== void 0)
        return (G.h.hidden = 1), void (document.location = J.lt);
      G.m();
      const s = G.u;
      D.O();
      const e = D.S;
      e > 0 &&
        ((i) => {
          if (
            (F.F(i),
            t.ne !== void 0 &&
              (t.re !== void 0 && t.re.ft(), (t.re = t.ne), (t.ne = void 0)),
            t.re.Zs !== void 0)
          )
            switch ((t.re.Zs.F(), t.re.Zs.status)) {
              case 0:
              case 2:
                (t.re.Zs = void 0), t.re.D();
                break;
              case 3:
                throw t.re.Zs.H();
              case 1:
                return;
            }
          t.re.F(i);
        })(e),
        (G.k() || e > 0) &&
          ((i) => {
            G.p(),
              (i.imageSmoothingEnabled = 0),
              (t.re.Zs === void 0 || t.re.Zs.status !== 1) && t.re.wt(i);
          })(s),
        requestAnimationFrame(i);
    } catch (s) {
      A(s);
    }
  }
  t.D = () => {
    G.l(document.getElementById("gameCanvas")),
      j.l(),
      G.m(),
      G.p(),
      (G.h.hidden = 0),
      (() => {
        switch (H.q) {
          case 0:
            t.ne = new Et("map1", K._());
            break;
          case 1:
            t.ne = new Et("map2", K.ht());
            break;
          case 2:
            t.ne = new At();
        }
      })(),
      requestAnimationFrame(i);
  };
})(Gt || (Gt = {}));
let Dt = 0,
  jt = 0;
(window[d(S, s)] = () => {
  Dt = 1;
}),
  (window[d("þ6ï§ÝÂJ1æ(ÇUù>ë½\vg", s)] = () => {
    if (!Dt) return;
    if (jt) return;
    jt = 1;
    const t = document.getElementById("gameStartButton");
    t && (t.hidden = 1);
    try {
      Gt.D();
    } catch (i) {
      A(i);
    }
  }),
  (window[d("_°]DWW8¡F\bs©¤2´\vrJCw÷", s)] = () => {
    const t = document.getElementById("normalbody"),
      i = document.getElementById("gameStartButton"),
      h = document.getElementById("theimage"),
      n = !!T.i(d(k, e)),
      r = !!T.i(d(M, e));
    !n || r
      ? (h.hidden = 0)
      : ((document.title = d("GgêþÐAB$,Ïð`8%\tê", o)),
        (t.id = "gameBody"),
        (i.hidden = 0),
        window[d(S, s)]());
  }),
  (window[d("'_\f©3ÒsnàgG.4\r3­bÁVsk", s)] = () => {
    const t = document.getElementById("normalbody"),
      i = document.getElementById("gameStartButton"),
      h = d("<} 8Wþð¹øÌËER8QXNÿÖC¢", e);
    T.i(h)
      ? (T.o(h, 0),
        (document.title = d("h¤ªW#ã@æ*E|Ì·{C=ôîqR¶G&c", o)),
        (t.id = "gameBody"),
        (i.hidden = 0),
        window[d(S, s)]())
      : (document.location = "404.html");
  }),
  (window[d('¯Hä_uêèEzywØëªMEq»æìz"g*', s)] = () => {
    const t = document.getElementById("normalbody"),
      h = document.getElementById("gameStartButton");
    document.getElementById("theimage");
    const n = d(y, e);
    if (!T.i(n)) return void (document.location = "404.html");
    const r = d(k, e),
      a = d(M, e),
      c = !!T.i(r),
      u = !!T.i(a);
    c && !u
      ? (document.location = "newspaper.html?" + d("=XpÌhõÔ0-Dc6t\0", i))
      : ((document.title = d("LÅ»ÇQ³N,\0r°Îå7­¦ºE­", o)),
        (t.id = "gameBody"),
        (h.hidden = 0),
        window[d(S, s)]());
  });
const Ft = {
  [p]: "±`ÈI¹ãòá»>4ÜNÃÔ4í°ôªcåEÅhÌz³L¹©ç³MOãNA×",
  [w]: "ixjÂNÊåkvÐ0ª<Îvdr>H¢ô6¡6³Rys]lí5°;tÁb",
  [g]: "9ü¦¦ÁC&Î_j±uÍº¼u¦Nßu·á(¼Ý<Uëßr½°Çz",
};
window[d("TMÃâ°¥ÝnÇPë8Aj!dBºâ¥æaÆ4{\r", s)] = async () => {
  const t = document.getElementById("newspaper"),
    s = new URLSearchParams(window.location.search);
  for (const e of s.keys()) {
    const s = await u(e),
      o = Ft[s];
    if (o) return (t.src = d(o, i)), void (t.hidden = 0);
  }
};