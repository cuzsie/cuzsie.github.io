/*! it's impossible to have mysteries nowadays */
(() => {
  const t = document.createElement("link").relList;
  if (!(t && t.supports && t.supports("modulepreload"))) {
    for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
      h(t);
    new MutationObserver((t) => {
      for (const i of t)
        if (i.type === "childList")
          for (const t of i.addedNodes)
            t.tagName === "LINK" && t.rel === "modulepreload" && h(t);
    }).observe(document, { childList: 1, subtree: 1 });
  }
  function h(t) {
    if (t.t) return;
    t.t = 1;
    const h = ((t) => {
      const h = {};
      return (
        t.integrity && (h.integrity = t.integrity),
        t.referrerPolicy && (h.referrerPolicy = t.referrerPolicy),
        (h.credentials =
          t.crossOrigin === "use-credentials"
            ? "include"
            : t.crossOrigin === "anonymous"
            ? "omit"
            : "same-origin"),
        h
      );
    })(t);
    fetch(t.href, h);
  }
})();
const t = "/michaelBattle.html";
function h(h, i) {
  return h.charCodeAt(i) ^ t.charCodeAt(i % t.length);
}
function i(t) {
  return String.fromCharCode(t);
}
function s(t) {
  return Array.from(t)
    .map((t) => i(t))
    .join("");
}
function a(t) {
  return s(new Uint8Array(t));
}
const r = c("7\0½ziM\tv\\uz°Gxà)µø", "Ï·A\tbÂú¶wûf½ÀÆVëûÌic0;µnH8");
async function e(t) {
  const h = new TextEncoder().encode(t),
    i = await crypto.subtle.digest(r, h);
  return a(i);
}
function c(t, s) {
  const a = t,
    r = a.slice(0, 16),
    e = a.slice(16);
  let c = "";
  for (let n = 0; e.length > n; n++) {
    const t = h(s, n % s.length),
      a = h(e, n) ^ t ^ h(r, n % r.length);
    c += i(a);
  }
  return c;
}
const n = "#ì/¤³WVòg·[SFhÞ±(",
  f = "assets/img/logo.png";
window[c("8ô¹ã4,ã`´Á[ØÛ»2´[×Oø>ð", n)] = () => {
  (() => {
    const t = document.createElement(
      c("poýÐèh/¬ÂÛ,0íéHY", "Æ<)Z¸»¿¾)Lÿ,¨Rã5¨@õfû%¿|^;")
    );
    let h = "";
    (h += `<canvas id="logo" width="400" height="120"><img src="${f}"></canvas><br>`),
      (h +=
        '<a href="index.html"><button>home</button></a> <a href="satisfaction.html"><button>customer reviews</button></a> <a href="coupon.html"><button>deals</button></a>'),
      (t.innerHTML = h),
      document.body.insertBefore(t, document.body.firstChild);
  })();
  const t = [];
  for (let r = 0; 36 >= r; r++) t[r] = [255, 255, 255];
  const h = document.getElementById(c("s2±±äSÇ6c2d¿", n)),
    i = h.getContext(c("ÑµÏ÷ÇXùÙw\bõ¸ïP", n));
  if (i === null) return;
  const s = new Image();
  (s.onload = () => {
    let h = document.createElement(c("0`{á{;çÒmKß²emÐHÊ[>", n)),
      i = h.getContext(c("»´CWîÉh¶·qbrÛte&", "Ã.>ì×nMõëJLWæíÏëÜÍGÄE|ùÉÔ±sæÞ"));
    if (i === null) return;
    (h.width = 1), (h.height = 37), i.drawImage(s, 0, 0);
    let a = i.getImageData(0, 0, 1, 37);
    for (let s = 0; 36 >= s; s++) {
      let h = s * 4;
      (t[s][0] = a.data[h + 0]),
        (t[s][1] = a.data[h + 1]),
        (t[s][2] = a.data[h + 2]);
    }
  }),
    (s.src = "assets/img/firepal.png");
  const a = new Image();
  (a.onload = () => {
    i.drawImage(a, 0, 0);
    const s = i.getImageData(0, 0, h.width, h.height);
    i.clearRect(0, 0, h.width, h.height);
    const r = i.createImageData(s),
      e = i.createImageData(s);
    for (let t = 0; h.width > t; t++) {
      let i = t * 4,
        a = 0;
      for (let t = 0; h.height > t; t++) {
        let t = s.data[i] === 0;
        (r.data[i + 0] = 0),
          (r.data[i + 1] = t && !a ? 255 : 0),
          (r.data[i + 2] = t ? 0 : 255),
          (a = t),
          (i += h.width * 4);
      }
    }
    let c = 0;
    setInterval(() => {
      c += 1;
      const s = 1 + Math.cos(c * 0.6) * Math.sin(c * 0.64);
      for (let t = 1; h.height > t; t++) {
        let i = t * h.width * 4;
        for (let a = 0; h.width > a; a++) {
          if ((r.data[i + 1] && (r.data[i + 0] = 36), r.data[i + 0])) {
            let e = i - h.width * 4;
            const c = 1 - Math.round(Math.random() * s);
            0 > a + c
              ? (e = t * h.width * 4)
              : h.width > a + c
              ? (e += c * 4)
              : (e = 4 * (t * h.width - 1)),
              r.data[e + 2] && (r.data[e + 0] = r.data[i + 0] - 1);
            const n = Math.round(Math.random() * 2);
            r.data[e + 0] -= n & 1;
          }
          i += 4;
        }
      }
      for (let h = 0; r.data.length > h; h += 4)
        if (r.data[h + 2]) {
          const i = r.data[h + 0];
          if (i > 0) {
            const s = t[i];
            (e.data[h + 0] = s[0]),
              (e.data[h + 1] = s[1]),
              (e.data[h + 2] = s[2]),
              (e.data[h + 3] = 255);
          } else e.data[h + 3] = 0;
        } else
          (e.data[h + 0] = 0),
            (e.data[h + 1] = 0),
            (e.data[h + 2] = 0),
            (e.data[h + 3] = 255);
      i.putImageData(e, 0, 0);
    }, 100);
  }),
    (a.src = f);
};
const o = c("júË-¸H«´¸qzÁuÖ¿ÿ-Ï", "Ï·A\tbÂú¶wûf½ÀÆVëûÌic0;µnH8");
let d;
(() => {
  if (d !== void 0) return;
  const t = localStorage.getItem(o);
  if (t != null)
    try {
      d = JSON.parse(t);
    } catch (h) {
      d = {};
    }
  else d = {};
})();
const m = {
    h(t) {
      return d[t];
    },
    i(t, h) {
      d[t] !== h &&
        ((d[t] = h),
        d !== void 0 && localStorage.setItem(o, JSON.stringify(d)));
    },
  },
  g = "â³¡´ÏÆd\bXãÓ¾kÝ",
  v = "Î90ñ/Ý`¼ÇSï£E+ðI§",
  b = "°\vr$a8ü_£p.vláuÅ",
  u = "Óty×ï¨öE*àrO5ýVbùµÄ¡ê",
  l = "Ï·A\tbÂú¶wûf½ÀÆVëûÌic0;µnH8";
var X, Y;
((Y = X || (X = {})).o = c("t\t¢YS\tÍ²>å¡¸8ãâØwäSù", g)),
  (Y.m = c("ó­ZnêÑ\\îî(j°<ùÜ<QëÕ", g)),
  (Y.v = c("cü4Òdº>$@&Cê´mµ$ëÁP", v)),
  (Y.u = c("û}§+Õ7(íÏÓÆ\bï\tïrvt\n\v", v)),
  (Y.l = c("ñÕ2+ÒÔXÙ1åö\f$ÕÝÎ:ów", v)),
  (Y.X = c("¯ÿ©gáàµ9°ÌJ¾+Ä$]ÿïýÅ", v)),
  (Y.Y = c("¦­\v¤hBÝp0Rx+£P¤v¯ÆB¿×÷¨ïo\t", b)),
  (Y.H = c("ú|ïz1]\bD\rÔPÉuQd'zD½", b)),
  (Y.W = c("Ä!9UIüWWyO+\b`^ ", b)),
  (Y.p = c("ñ{?êfGC9ñºÿà\ntVÙzïPÃErù", b)),
  (Y.O = c("üèýTQ×¤ûâÇ¼ÅÚÈ0Ê©\\\n", b)),
  (Y.A = c("¯T»ûñ¢¥Ú)Í1/ÄE\0ý§P¨/n]ºN", b)),
  (Y.M = c("z/ Órª·õÙ_\vÎúû¥YôÞÍhbP", u)),
  (Y.k = c("ÐdQØwçCÖ]ÃÛµ§4¿ó¿/Æ%[å", u)),
  (Y.T = c("Q¾!X\b¥äàN¾¶J/ý|ô1", u)),
  (Y.L = c("UúíHgópµqÁnÍmv!Vk¥&¥", u)),
  (Y.S = c('sE¡F"[¹0|j6àúêDûÚ¨', l)),
  (Y.C = c("ÉÞGì5:Ñým°.öZ<EèbÍÊ", l)),
  (Y.I = () =>
    m.h(Y.W) ? ((document.location = c("÷¯¾á;d8Òú+!#eñ·ñæ", l)), 1) : 0);
const H = "Ã.>ì×nMõëJLWæíÏëÜÍGÄE|ùÉÔ±sæÞ",
  W = 'ñ«´Å¸"|\t¤»oô-ëûÂ.¯Y';
window[c("\b8à¡vp¾CEä©2·¯Óv¦\fÅ¾|þã", H)] = () => {
  const t = document.getElementById(c("¦°d°SÛv\0èlË\f?PUÀ|åk&ä?", H)),
    h = document.getElementById(c("äìKE©³#Ä¢À¤ÙëØ|u4 lD½_:í­¼he", H)),
    i = document.getElementById(c("ê\bP7Hð8-×Ó ­C9Ãá&]<»t", W)),
    s = document.getElementById(c('¦;§»W2"\rC§ªÐuâ=r4§/', W)),
    a = !!m.h(X.o);
  let r = 0.1;
  if ((m.h(X.W) ? (r = 0) : a && (r = 0.3), Math.random() < r)) {
    const i = !!m.h(X.v),
      a = !!m.h(X.l),
      r = !!m.h(X.X);
    if (i)
      if (a) {
        if (r) {
          for (t.hidden = 0; h.firstChild; ) h.removeChild(h.firstChild);
          const i = document.createElement("p");
          (i.textContent = c(
            '}µ,Ö½ÇÝEóÛoå\r±ïnàì¡g«Oàç\0i¾¾46Kkh©ºåb3æ¬(&¢DXB(«çYO~7"øÇ³/¥Å×þÖiß×»¸Ã´{tx',
            W
          )),
            (i.style.color = "white"),
            h.appendChild(i);
        }
      } else s.hidden = 0;
    else (t.hidden = 0), m.i(X.o, 1);
  } else {
    i.hidden = 0;
    const t = m.h(X.Y);
    if (t !== void 0 && t.length > 0) {
      const h = document.createElement("div"),
        s = document.createElement("h3");
      s.textContent = c("îÖúÊ0lZÃµ!}yDA´Ò#óúa®«Z)µ!cH<Åå(", W);
      const a = document.createElement("p"),
        r = t.split("\n");
      let e = 1;
      r.forEach((t) => {
        e || a.appendChild(document.createElement("br")), (e = 0);
        const h = document.createElement("span");
        (h.textContent = t), a.appendChild(h);
      }),
        h.appendChild(s),
        h.appendChild(a),
        i.insertBefore(h, i.firstChild);
    }
  }
};
const p = "£ûÂáðxjg©1£H¿¸9Ì!òËl<÷Wïþ¿",
  O = "T%dõG)æ6¸Â(/~¦é²^âß",
  A = "¼Ívû¿Û8ÜqíâÌ½Îdu;¦",
  x = c('íË\v>jV)¦Å/QHv¨#9WÑã­"m6<3ðÂ©|­', "Ö¿\0ôsE78ÄäZÞù2ÕøØò!´¢{ú<¶\fK{Ê"),
  M = c("ïq]@C?¢)KÍMùn© û'>þ´=Éõsï/v", "pìÇ\vùÔ¹T´ÏóÛ³ÜgR²·fãY¡ÛVk2Õwc"),
  w = {
    "ç§xAÓÀ°Lf*Ñ¸ÿu÷Úó}5*s¥¤Ä\tdÅO": () => (
      m.i(X.m, 1), c("u¬VÂ/lèÓúïêÏ»ìd¿ê.ï\\HüÒV»}¼\rcÃ¢ÿ'(L¢×ø}qÇªD¤Æ¤æµåÆ", p)
    ),
    "µA`d&÷Wb©¥a2më½\bå;9)²/¿1©Zö"() {
        document.location = "mother.html"; //ORIGINAL: document.location.href = c("êÀ¸WnP\x003ÚKîüÞM'I;|¡ñ¤h\tC¨Á_", p);
    },
    "ª#kX/N\vvXYbb'Õg²¬JýöÝû"() {
      m.i(X.u, 1);
    },
    "ÜÅ[#Ö\v\tûëE¢·Ëz¸\\È'·Þ'ñÔ²"() {
      m.i(X.A, 1);
    },
  };
window[c("îHhmeí.\f9´&dÔ!ý²\bFpú4>", O)] = async () => {
  const t = document.getElementById(c("i~tù^û&Ã=KùýYNôæñ", O)).value,
    h = document.getElementById(c("Ç¦²Á·dFÇù±ßÊ'Ï,ÚIäºà", O)),
    i = await e(t.trim().toLowerCase()),
    s = w[i];
  if (s !== void 0)
    try {
      const t = s();
      (h.textContent = t !== void 0 ? t : x),
        (h.style.color = c("$Ô23zÝNÑ+²%58îûÁJ", O));
    } catch (a) {
      (h.textContent = c("Aà4wÕj7}y=ºÞB³Äün", A)),
        (h.style.color = c("JpéüMqthfq2~å«µ", A));
    }
  else (h.textContent = M), (h.style.color = c("¦ï'A¹ÅÈâò8JGD", A));
  h.hidden = 0;
};
const k = "@W¯ÒW°­\n\n:3$&pÂ";
function T(t) {
  window.console.error(t);
  const h = document.getElementById(c("¯cZI¡\0_¸ô²×!/", k));
  h !== null && (h.hidden = 1),
    (document.location = c("Ê;+Z{ù[µä´l=§á×9@Æð¿)ÉÄÇÂ­÷»Ë8", k));
}
var L, S, C, I, R;
((t) => {
  (t.R = void 0), (t.j = void 0);
  let h = -1,
    i = 0;
  (t.P = (h) => {
    if (((t.R = h), (t.j = h.getContext("2d", { alpha: 0 })), !t.j))
      throw Error("Failed to get 2D context from canvas");
    i = 1;
  }),
    (t.F = () => {
      let s = Math.min(window.innerWidth / 320, window.innerHeight / 240) - 0.3;
      (s = Math.max(Math.floor(s), 1)),
        h !== s &&
          ((h = s), (t.R.width = 320 * s), (t.R.height = 240 * s), (i = 1));
    }),
    (t.B = () => {
      t.j.resetTransform(), t.j.clearRect(0, 0, t.R.width, t.R.height);
    }),
    (t.D = () => {
      t.j.scale(h, h);
    }),
    (t.K = () => (i ? ((i = 0), 1) : 0));
})(L || (L = {})),
  ((t) => {
    (t.G = 0), (t.V = 0);
    let h = 0;
    const i = 1 / 30,
      s = 1e3 / 30;
    (t.P = () => {
      (t.G = 0), (h = performance.now());
    }),
      (t.U = () => {
        let a = performance.now();
        h > a ? (t.V = 0) : ((t.V = i), (h = a + s - ((a - h) % s))),
          (t.G += t.V);
      });
  })(S || (S = {})),
  ((t) => {
    function h(h) {
      const i = t.q[h.code];
      i && ((t.N[i] = 1), h.preventDefault());
    }
    function i(h) {
      const i = t.q[h.code];
      i && ((t.N[i] = 0), h.preventDefault());
    }
    (t.q = {
      ArrowLeft: "left",
      ArrowUp: "up",
      ArrowRight: "right",
      ArrowDown: "down",
      KeyA: "left",
      KeyW: "up",
      KeyD: "right",
      KeyS: "down",
    }),
      (t.N = {}),
      (t.$ = {}),
      (t.J = {}),
      (t._ = {}),
      (t.P = () => {
        document.addEventListener("keydown", h),
          document.addEventListener("keyup", i);
      }),
      (t.Z = () => {
        for (const h in t.N) {
          const i = !!t.N[h],
            s = !!t.$[h];
          (t.J[h] = i && !s), (t._[h] = !i && s), (t.$[h] = i);
        }
      });
  })(C || (C = {})),
  ((R = I || (I = {})).tt = 0),
  (R.ht = () => {
    R.tt = 1;
  }),
  (R.it = () => {
    R.tt = 0;
  }),
  (R.st = (t) => {
    R.tt > 0 && ((R.tt -= t * 2), 0 > R.tt && (R.tt = 0));
  }),
  (R.rt = (t) => {
    R.tt > 0 &&
      ((t.fillStyle = `rgba(0, 0, 0, ${R.tt})`),
      t.fillRect(0, 0, t.canvas.width, t.canvas.height));
  });
const j = ";hÛÀ¼ÅW©Ü¸m",
  y = "I6ñéÔÃþ]¾#cý{P@ãÿÇ",
  E = document[c('\\"á=ùKFø{Yl^Y$þó#/MÕR', j)][c("ýÖ½¼\f¥\nôSo¦GÕ¸²{wë", j)],
  P = E.substring(E.lastIndexOf(c("ëÀOãñ\v(WG_í!ìÔÐ", j)) + 1)
    .split(c("¬'ùõûÈèW1³'ÞljØ¨", j))[0]
    .toLowerCase();
var F;
((t) => {
  switch (P) {
    case c("P¾øúæjË\rÝ»0Ô(0H", j): {
      const h = !!m.h(X.X);
      t.et = h ? 3 : 0;
      break;
    }
    case c("Wÿ2c{M(Óo;2ð.æ.ùdÃÐ", j):
      t.et = 1;
      break;
    case c("uãi@Ó§æ.ÔdJí¿Ég×£v´", y):
      t.et = 2;
      break;
    case c("ì\v\f{üÇX/-Qç9÷Ê;É¨j0\fVì", y):
      t.et = 4;
  }
})(F || (F = {}));
const B = new Map();
function D(t) {
  if (B.has(t)) return B.get(t);
  const h = new Image();
  h.src = `assets/spr/${t}.png`;
  const i = {
    error: null,
    ct: () =>
      i.error
        ? 2
        : h.complete && h.naturalWidth > 0 && h.naturalHeight > 0
        ? 1
        : 0,
    nt: () => t,
    ft: () => h,
    ot: () => i.error,
    dt: () => i.error?.message,
    gt: () => 0,
    vt: () => 1,
  };
  return (
    (h.onerror = () => {
      i.error = Error("Failed to load image: " + t);
    }),
    B.set(t, i),
    i
  );
}
class K {
  constructor(t) {
    (this.error = null),
      (this.name = t),
      fetch(`assets/snd/${t}.ogg`)
        .then((t) => t.arrayBuffer())
        .then((t) => G.bt().decodeAudioData(t))
        .then((t) => (this.buffer = t));
  }
  ct() {
    return this.error ? 2 : this.buffer ? 1 : 0;
  }
  nt() {
    return this.name;
  }
  ft() {
    return this.buffer;
  }
  ot() {
    return this.error;
  }
  dt() {
    return this.error?.message;
  }
  gt() {
    return 0;
  }
  vt() {
    return 1;
  }
}
var G;
((t) => {
  t.bt = () => (
    t.ut === void 0 &&
      (t.ut = new (AudioContext || window.webkitAudioContext)()),
    t.ut
  );
  const h = [];
  let i = 0;
  const s = new Map();
  let a = {};
  function r(t) {
    const h = s.get(t);
    if (h) for (const s of h) if (s.source === void 0) return s;
    const i = { buffer: t.ft(), id: -1 };
    return h ? h.push(i) : s.set(t, [i]), i;
  }
  function e(s, r, e, n) {
    const f = s.source;
    let o = s.lt;
    f !== void 0 && ((f.onended = null), f.stop(), f.disconnect());
    let d = i++;
    (s.id = d),
      o === void 0 &&
        ((o = (() => {
          for (const t of h) if (t.Xt) return t;
          let i = t.ut.createGain();
          i.connect(t.ut.destination);
          const s = { node: i, Xt: 1 };
          return h.push(s), s;
        })()),
        (s.lt = o)),
      o.node.gain.setValueAtTime(r, t.ut.currentTime);
    const m = t.ut.createBufferSource();
    (s.source = m),
      (m.buffer = s.buffer),
      (m.onended = () => {
        c(s);
      }),
      m.connect(o.node),
      m.start(void 0, n),
      (m.playbackRate.value = e),
      (a[s.id] = s);
  }
  function c(t) {
    const h = t.source;
    if (h !== void 0) {
      (t.source = void 0),
        delete a[t.id],
        (h.onended = null),
        h.stop(),
        h.disconnect();
      const i = t.lt;
      i && (i.Xt = 1);
    }
  }
  const n = new Map();
  (t.Yt = (t) => {
    if (n.has(t)) return n.get(t);
    const h = new K(t);
    return n.set(t, h), h;
  }),
    (t.Ht = (t) => {
      const h = s.get(t);
      if (h) for (const i of h) c(i);
    }),
    (t.Wt = (t) => {
      const h = a[t];
      h && c(h);
    }),
    (t.Ot = (t, h = 1, i = 1, s = 0) => {
      const a = r(t);
      return e(a, h, i, s), a.id;
    }),
    (t.At = (t, h = 1, i = 1, a = 0) => {
      const n = ((t) => {
        const h = s.get(t);
        let i;
        if (h)
          for (const s of h)
            s.source !== void 0 && (i !== void 0 ? c(s) : (i = s));
        return i || r(t);
      })(t);
      return e(n, h, i, a), n.id;
    }),
    (t.xt = (t) => {
      const h = s.get(t);
      if (h) for (const i of h) if (i.source !== void 0) return 1;
      return 0;
    });
})(G || (G = {}));
class V {
  constructor(...t) {
    (this.Mt = []), (this.status = 0), this.wt(...t);
  }
  kt() {
    (this.Mt = []), (this.status = 1), (this.error = void 0);
  }
  wt(...t) {
    for (const h of t) h !== void 0 && this.Mt.push(h);
    this.status === 1 && (this.status = 0);
  }
  st() {
    let t = this.status;
    if (t !== 1 && t !== 2) {
      t = 1;
      for (let h = 0; this.Mt.length > h; h++) {
        const i = this.Mt[h];
        let s = i.ct();
        if (s === 0)
          switch ((i instanceof V && (i.st(), (s = i.ct())), s)) {
            case 1:
              break;
            case 2:
              return (
                (this.status = 2),
                (this.error = i.ot()),
                void (this.Tt = i.dt())
              );
            case 0:
              t = 0;
          }
      }
      this.status = t;
    }
  }
  ct() {
    return this.status;
  }
  nt() {
    return "";
  }
  ft() {
    return this;
  }
  ot() {
    return this.error;
  }
  dt() {
    return this.Tt;
  }
  gt() {
    if (this.Mt.length === 0) return 0;
    let t = 0,
      h = 0;
    for (const i of this.Mt) {
      const s = i.ct(),
        a = i.vt();
      s === 1 ? (t += a) : s === 0 && (t += i.gt() * a), (h += a);
    }
    return h === 0 ? 0 : t / h;
  }
  vt() {
    return this.Mt.length;
  }
}
const U = "I6ñéÔÃþ]¾#cý{P@ãÿÇ",
  q = "{!<X)§o^G\vÉ¨,;ø¯úy~^´ÌÔñ¿bePê©",
  N = "\t[ÂU£\t¶µßlGY",
  $ = "µ\bÂFÕü¼Uþ¤¿câog\\X¯WiRÀ",
  Q = "{ô$zÚ¯\nZB(·üHXºÎÄñX©vM",
  J = "0\rÎXaÃ!k-qÙ¥Ô¨õ-æá#+Ê`}ÿµÅS",
  _ = "æÌø¥h£jèGy¥@MÐ#` /´a~ïAze`Ñ",
  z = "=Sjx¾û·{ÀfC^ÔÈ)KÚÆÆXWt¶K",
  Z = "÷PrêB5®§âXÍÍ_²8îf.ÆØ",
  tt = 'zÏZ¸é"|ÅD+\r¤èí!ñC2âò';
var ht, it, st;
((t) => {
  let h, i;
  (h = t.images || (t.images = {})),
    (i = t.Lt || (t.Lt = {})),
    (t.St = () => {
      const t = new V();
      return (
        t.wt(
          (h.body = D(c("=Ñr/N!QDTy9åÜm!æ/ª", U))),
          (h.Ct = D(c("?u¾¥ü­¤pú>0¶Uk* ", U))),
          (h.It = D(c("{aë Òi^Y{R]|A¼W¦±:(", q))),
          (h.Rt = D(c("xéÈGxk­l`M$ç4X1%·úä", q))),
          (i.jt = G.Yt(c("0éLY3ï Ýbx¼/ÙLa", q))),
          (i.yt = G.Yt(c("î\bQKBþÇ 7íÇ±Xï<Ö88", q))),
          (i.Et = G.Yt(c("ÞkÆ\nêp*YÃ\\*a}ïQú]h", q))),
          (i.Pt = G.Yt(c(".è¡Î\rKÐu_?JÀÍ0òû¸6V", q)))
        ),
        t
      );
    }),
    (t.Ft = () => {
      const t = new V();
      return (
        t.wt(
          (h.body = D(c("Ú*Y_5'¹0ªDæB¡!Ä°%Lw9+", N))),
          (h.Bt = D(c("ãúJ[×c­}ß%\rV¿ñÑÏËÛx/", N))),
          (h.Dt = D(c(':5I"\\Ò-9dTy8Üv.LQ6', N))),
          (h.Kt = D(c("»}b]Àæ*UÒ#­ýÝÜçvù_üÀ", N))),
          (h.Ct = D(c("Ú2v[òxOÔQ¾jò­/Ø\r^", N))),
          (h.It = D(c("ò,jÁ©\\4W´±h9QépR1¬q", $))),
          (h.Gt = D(c("Ç\ný¤/é&µÖæ*ó.?Z¾Ï", $))),
          (h.Vt = D(c("4Â Th¶Å*èZJ\fg£UÝÆbrVOvIZÿ", $))),
          (h.Ut = D(c("¸¸¶ñªy~µ¥gtãAkÍp¨s", $))),
          (h.Rt = D(c("ë<=¨Ìn­ñ9°\b°éE0Ö}y!", $))),
          (i.jt = G.Yt(c("ª{(gª7³¶K®³§Cjæ2B", $))),
          (i.yt = G.Yt(c("âgÇæd¦UÕ&\\®MlòÅhO®+", Q))),
          (i.qt = G.Yt(c("·F¤pá¶\n¸ù»õdÎ âú¤", Q))),
          (i.Nt = G.Yt(c("ô-\fW]³sêTÏó½ÖÇÆ.sÛµ\rpE", Q))),
          (i.Pt = G.Yt(c("g´âÏúrèEØ=(-íiGRÜ", Q))),
          (i.$t = G.Yt(c("\\¾¿·ÔÇ%÷ô+¦í¨ñuZBÂNøf", Q))),
          (i.Qt = G.Yt(c("½³`ÙìÕjÿsµÈ_Ñ»¦\r", J))),
          (i.Jt = G.Yt(c(":Wen*÷°ñ¤²¶&C", J))),
          (i._t = G.Yt(c("óS#ê1uóûöóaõ¿VÕj(", J))),
          (i.zt = G.Yt(c("Õæ]Sñ(9`nSÅ$9è", J)))
        ),
        t
      );
    }),
    (t.Zt = () => {
      const t = new V();
      return (
        t.wt(
          (h.body = D(c("Äy±-öÚ¤ÞnBÊÝo\\²­þS´oT¿", _))),
          (h.th = D(c('\tÅN¤ -û0Çèe"R', _))),
          (h.It = D(c("Þ/w?þê¯?7>ö«ûUyþ\bZXF}", _))),
          (h.hh = D(c("Àz®~Ð,Í,Íú6Çbx®Vô°®×", _))),
          (h.Rt = D(c("ÕÊãJðjMD,Ð@ÝÁhUNîØ", _))),
          (i.jt = G.Yt(c('©Ï¢äÌ"%\nú·K5ôÈÛÅ', z))),
          (i.yt = G.Yt(c(";f\nhæ@ðIÙÏâ¢Ò(", z))),
          (i.Et = G.Yt(c("ñi\fH/ãW£`ú)¢õiò_-;", z))),
          (i.Pt = G.Yt(c("ùÑ¦,íÈ}¥ºIYìÚ\tUûMdhý$Ã", z))),
          (i.ih = G.Yt(c("ËwxkÖ8\\&.UyNö", Z)))
        ),
        t
      );
    }),
    (t.sh = (t) => {
      const s = new V();
      return (
        s.wt(
          (h.ah = D(c("%54°AÀjèÈEaddrdN@LVãØÆx\f", Z))),
          (i.ih = G.Yt(c("ÓdWï~S%-2aÁ®", Z)))
        ),
        t &&
          s.wt(
            (h.rh = D(c("EåM(ÍªòIeÌfñ^Þúªi·qïb@", Z))),
            (h.eh = D(c("å¨ª?QmzÛKD½\\£;oÄeû·ßaD£ro¢û\\", tt))),
            (h.hh = D(c("t.O3>ºÎxçÒ1¶£tîõrvy", tt)))
          ),
        s
      );
    });
})(ht || (ht = {})),
  ((it || (it = {})).nh = void 0);
class at {
  constructor() {}
  ht() {}
  fh() {}
  st(t) {}
  oh(t) {}
}
function rt(t) {
  const h = {
    data: void 0,
    error: null,
    ct: () => (h.error ? 2 : h.data ? 1 : 0),
    nt: () => t,
    ft: () => h.data,
    ot: () => h.error,
    dt: () => (h.error ? h.error.message : void 0),
    gt: () => 0,
    vt: () => 1,
  };
  return (
    fetch(`assets/json/${t}.json`)
      .then((t) => {
        if (!t.ok) throw Error("Fetch got response " + t.statusText);
        return t.json();
      })
      .then(
        (t) => {
          h.data = t;
        },
        (t) => {
          h.error = t;
        }
      ),
    h
  );
}
((t) => {
  function h(t, h) {
    if (t !== void 0) for (const i of t) if (i.name === h) return i;
  }
  (t.dh = (t, h) => {
    if (t !== void 0 && t.properties !== void 0)
      for (const i of t.properties) if (i.name === h) return i;
  }),
    (t.mh = (t, h) => {
      if (t !== void 0 && t.properties !== void 0)
        for (const i of t.properties) if (i.name === h) return i.value;
    }),
    (t.gh = h),
    (t.bh = (t, h) => {
      if (t !== void 0) for (const i of t) if (i.name === h) return i.value;
    }),
    (t.uh = (t, i, s) => {
      const a = h(t, i);
      a
        ? ((a.type = "float"), (a.value = s))
        : t.push({ name: i, type: "float", value: s });
    }),
    (t.Xh = (t, i, s) => {
      const a = h(t, i);
      a
        ? ((a.type = "string"), (a.value = s))
        : t.push({ name: i, type: "string", value: s });
    });
})(st || (st = {}));
const et = c('©Ñjþ%kF÷\\Z\vê@~)J\0\b"0NÑ', "ë?\\ý\bY=íÓá=g¾\fTQ");
var ct, nt, ft, ot;
((nt = ct || (ct = {})).x = 0),
  (nt.y = 0),
  (nt.Yh = 0),
  (nt.Hh = 0),
  (nt.Wh = 0),
  (nt.st = (t, h, i) => {
    const s = i - 120 - 32,
      a = h - 160 + 32,
      r = i - 120 + 32;
    (nt.x = Math.min(Math.max(h - 160 - 32, nt.x), a)),
      (nt.y = Math.min(Math.max(s, nt.y), r));
    const e = zc.ph;
    if (e !== void 0) {
      const t = e.x,
        h = e.y,
        i = h + e.height - 240;
      (nt.x = Math.max(t, Math.min(nt.x, t + e.width - 320))),
        (nt.y = Math.max(h, Math.min(nt.y, i)));
    }
    nt.Yh > 0
      ? ((nt.Hh = Math.cos(nt.Yh * 14) * nt.Yh),
        (nt.Wh = Math.random() * nt.Yh * 0.4),
        (nt.Yh -= t * 5))
      : ((nt.Hh = 0), (nt.Wh = 0));
    let c = 0;
    zc.ph?.name === et && (c = 1),
      zc.Ah.Oh && (c = 1),
      c &&
        ((nt.Hh += Math.cos(S.G * 7) * 0.5 + Math.random() - 0.5),
        (nt.Wh += Math.sin(S.G * 8) * 0.5 + Math.random() - 0.5)),
      (nt.Hh = Math.floor(nt.Hh + 0.5)),
      (nt.Wh = Math.floor(nt.Wh + 0.5));
  });
class dt {
  constructor(t) {
    (this.xh = ht.images.Rt.ft()),
      (this.name = t.name),
      (this.id = t.id),
      (this.Mh = st.mh(t, "depth") ?? 0),
      (this.width = t.width),
      (this.height = t.height),
      (this.data = t.data.slice());
  }
  st(t) {}
  oh(t) {
    const h = ct.x,
      i = ct.y,
      s = this.xh.naturalWidth / 16;
    let a = Math.max(h >> 4, 0),
      r = Math.max(i >> 4, 0),
      e = Math.ceil((h + 320 - 1e-6) / 16),
      c = Math.ceil((i + 240 - 1e-6) / 16),
      n = a * 16,
      f = r * 16,
      o = Math.min(e, this.width),
      d = Math.min(c, this.height),
      m = r * this.width + a,
      g = this.width - (o - a),
      v = f;
    for (let b = r; d > b; b++) {
      let h = n;
      for (let i = a; o > i; i++) {
        let i = this.data[m++];
        if (i > 0) {
          let a = i - 1;
          t.drawImage(this.xh, (a & 15) * s, (a >> 4) * s, s, s, h, v, 16, 16);
        }
        h += 16;
      }
      (m += g), (v += 16);
    }
  }
  wh(t, h) {
    return t >= 0 && h >= 0 && this.width > t && this.height > h;
  }
  kh(t, h, i) {
    this.wh(t, h) && (this.data[h * this.width + t] = i);
  }
  Th(t, h) {
    return this.wh(t, h) ? this.data[h * this.width + t] : 0;
  }
}
class mt {
  constructor(t, h) {
    (this.enabled = 0),
      (this.Lh = void 0),
      (this.Sh = void 0),
      (this.Ch = void 0),
      (this.Ih = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.x = t),
      (this.y = h);
  }
  Rh() {}
  jh() {
    this.Eh?.yh();
  }
  Ph() {}
  Fh() {}
  st(t) {
    this.Eh?.st();
  }
  oh(t) {
    this.Bh?.oh(t);
  }
  Dh() {}
}
class gt {
  constructor(t, h = 0, i = 0, s = 0, a = 0) {
    (this.Kh = t),
      (t.Eh = this),
      (this.x = h),
      (this.y = i),
      (this.width = s),
      (this.height = a);
  }
  st() {
    const t = this.Kh,
      h = t.x + this.x,
      i = t.y + this.y;
    zc.Gh.Set(t, h, i, h + this.width, i + this.height);
  }
  yh() {
    zc.Gh.yh(this.Kh);
  }
}
class vt extends mt {
  constructor(t, h, i, s, a, r, e, c) {
    super(t, h),
      (this.width = i),
      (this.height = s),
      (this.id = a),
      (this.Vh = r),
      (this.Uh = e),
      (this.qh = c),
      (this.Eh = new gt(this));
  }
  static Nh(t) {
    return new vt(
      t.x,
      t.y,
      t.width,
      t.height,
      t.id,
      st.mh(t, "target"),
      st.mh(t, "randomChance"),
      st.mh(t, "randomTarget")
    );
  }
  static $h(t) {
    [t.Qh, t.Jh, t._h] = vt.zh(t);
    const h = t.Eh;
    switch (
      ((h.x = 0), (h.y = 0), (h.width = t.width), (h.height = t.height), t.Qh)
    ) {
      case 1:
        (h.y = 8), (h.height -= 8);
        break;
      case 3:
        h.height -= 8;
        break;
      case 0:
        (h.x = 8), (h.width -= 8);
        break;
      case 2:
        h.width -= 8;
    }
  }
  Rh() {
    vt.$h(this);
  }
  Ph() {
    vt.$h(this);
  }
  Dh() {
    let t = this.Vh;
    if (t === void 0) return;
    this.Uh !== void 0 && Math.random() < this.Uh && (t = this.qh);
    const h = zc.Zh[t];
    h !== void 0 && zc.Ah.ti(h);
  }
  static zh(t) {
    let h,
      i,
      s,
      a = 0,
      r = 0,
      e = 0,
      c = 0,
      n = 0,
      f = 0,
      o = 0,
      d = 0;
    for (let m = 8; t.width > m; m += 16) {
      const h = t.x + m;
      zc.hi(h, t.y - 8) && ((a += h), r++),
        zc.hi(h, t.y + t.height + 8) && ((e += h), c++);
    }
    for (let m = 8; t.height > m; m += 16) {
      const h = t.y + m;
      zc.hi(t.x - 8, h) && ((n += h), f++),
        zc.hi(t.x + t.width + 8, h) && ((o += h), d++);
    }
    switch (
      ((h =
        (r === 0 && c === 0 && f === 0 && d === 0) ||
        (r > 0 && c > 0) ||
        (f > 0 && d > 0)
          ? -1
          : e > a
          ? e > n && e > o
            ? 3
            : n > o
            ? 0
            : 2
          : a > n && a > o
          ? 1
          : n > o
          ? 0
          : 2),
      h)
    ) {
      case 1:
        (i = a / r), (s = t.y);
        break;
      case 3:
        (i = e / c), (s = t.y + t.height);
        break;
      case 0:
        (i = t.x), (s = n / f);
        break;
      case 2:
        (i = t.x + t.width), (s = o / d);
        break;
      default:
        (i = t.x + t.width / 2), (s = t.y + t.height / 2);
    }
    return [h, i, s];
  }
}
class bt {
  constructor(t) {
    (this.x = 0),
      (this.y = 0),
      (this.width = 0),
      (this.height = 0),
      (this.ii = 0),
      (this.si = 0),
      (this.ai = 1),
      (this.ri = 1),
      (this.Kh = t);
  }
  oh(t) {
    const h = this.image;
    if (h === void 0) return;
    const i = this.Kh,
      s = this.width,
      a = this.height;
    t.drawImage(
      h,
      this.x,
      this.y,
      s,
      a,
      Math.floor(i.x) - this.ii * this.ai,
      Math.floor(i.y) - this.si * this.ri,
      s * this.ai,
      a * this.ri
    );
  }
}
((ft || (ft = {})).ei = 0),
  ((t) => {
    let h = 0,
      i = 0;
    (t.ci = (t, i) => {
      h ||
        ((h = 1),
        navigator.geolocation.getCurrentPosition(t, i, {
          ni: 1,
          timeout: 5e3,
          fi: 0,
        }));
    }),
      (t.oi = (t, h) => {
        i ||
          ((i = 1),
          navigator.mediaDevices.getUserMedia({ di: 1 }).then(t).catch(h));
      });
  })(ot || (ot = {}));
class ut extends mt {
  constructor(t, h, i) {
    super(t, h),
      (this.mi = 0),
      (this.gi = 0),
      (this.speed = 1),
      (this.speed = i);
    const s = new bt(this);
    (s.image = ht.images.Ct.ft()),
      (s.width = 57),
      (s.height = 73),
      (s.ii = 28),
      (s.si = 36),
      (this.Bh = s);
  }
  static Nh(t) {
    return new ut(t.x, t.y, st.mh(t, "speed") ?? 1);
  }
  Ph() {
    F.et === 0 &&
      setTimeout(() => {
        ot.ci(
          () => {
            G.At(ht.Lt.Et);
          },
          () => {
            it.nh = "index.html" + c("ð9»ûC*K¶ü>÷", "f-<­Ê4ÔÈY¾;¥÷át'{¢P¼'ä");
          }
        );
      }, 3e3);
  }
  st(t) {
    if (((this.gi -= t * this.speed), 0 >= this.gi)) {
      (this.mi = Math.floor(this.mi + 1 + Math.random() * 3) % 4),
        (this.gi = 0.1 + Math.random() * Math.random() * 0.5);
      const t = this.Bh;
      (t.x = (this.mi & 1) * t.width), (t.y = (this.mi >> 1) * t.height);
    }
  }
  oh(t) {
    ft.bi === void 0 && super.oh(t);
  }
}
class lt extends mt {
  constructor(t, h, i, s, a, r) {
    super(t, h), (this.id = i), (this.name = s), (this.ui = a), (this.li = r);
  }
  static Nh(t) {
    return new lt(
      t.x + t.width / 2,
      t.y + t.height / 2,
      t.id,
      t.name,
      st.mh(t, "next"),
      st.mh(t, "prev")
    );
  }
  oh(t) {}
}
class Xt extends mt {
  constructor(t, h, i, s, a) {
    super(t, h), (this.target = i), (this.Uh = s), (this.unlock = a);
    const r = new gt(this);
    (r.width = 16),
      (r.height = 8),
      (this.Qh = 3),
      (this.Jh = t + 8),
      (this._h = h + 18);
  }
  static Nh(t) {
    return new Xt(
      t.x,
      t.y,
      st.mh(t, "target"),
      st.mh(t, "randomChance"),
      st.mh(t, "unlock")
    );
  }
  Ph() {
    let t = 1;
    const h = this.unlock;
    h !== void 0 && (t = !!m.h(h));
    const i = this.Uh;
    i !== void 0 && Math.random() > i && (t = 0), t ? this.Xi() : this.Yi();
  }
  Dh() {
    const t = zc.Zh[this.target];
    t && zc.Ah.ti(t);
  }
  Yi() {
    zc.Hi((this.x + 8) >> 4, (this.y + 8) >> 4, 37, 0);
  }
  Xi() {
    zc.Hi((this.x + 8) >> 4, (this.y + 8) >> 4, 36, 1);
  }
}
class Yt extends mt {
  constructor(t, h, i, s) {
    super(t, h), (this.width = i), (this.height = s);
  }
  static Nh(t) {
    return new Yt(t.x, t.y, t.width, t.height);
  }
  oh(t) {
    const h = zc.Ah;
    if (this.x - 12 > h.x || h.x > this.x + this.width + 12) return;
    if (h.y > this.y + this.height + 8 || this.y > h.y) return;
    const i = h.y,
      s = h.Wi;
    (h.y = this.y - (i - this.y)),
      (h.Wi = !h.Wi),
      h.oh(t),
      (h.y = i),
      (h.Wi = s);
  }
}
class Ht extends mt {
  constructor(t, h, i, s) {
    super(t, h), (this.pi = 0), (this.Uh = i), (this.offset = s);
    const a = new gt(this);
    (a.width = 16), (a.height = 18);
  }
  static Nh(t) {
    return new Ht(t.x, t.y, st.mh(t, "randomChance"), st.mh(t, "offset"));
  }
  Fh() {
    this.pi = 0;
  }
  oh(t) {
    this.pi &&
      ((t.fillStyle = "rgba(0, 0, 0, 0.85)"),
      t.fillRect(ct.x - 1, ct.y - 1, 322, 242));
  }
  Dh() {
    if (!this.pi && ((this.pi = 1), G.At(ht.Lt.Pt), Math.random() < this.Uh)) {
      const t = zc.Zh[this.offset];
      t !== void 0 && (zc.Ah.x += t.x - this.x);
    }
  }
}
let Wt = {
  doll: 0,
  newspaper: 1,
  showerBeing: 2,
  mirrorFace: 5,
  figure: 6,
  figureEvil: 7,
};
class pt extends mt {
  constructor(t, h, i, s) {
    super(t, h), (this.Oi = 1), (this.name = i), (this.Uh = s);
    const a = Wt[i];
    (this.Ai = a), (this.frame = a);
    const r = new bt(this);
    (r.image = ht.images.It.ft()),
      (r.width = 24),
      (r.height = 48),
      (r.ii = 12),
      (r.si = 40),
      (r.x = 24 * (a & 3)),
      (r.y = 48 * (a >> 2)),
      (this.Bh = r);
  }
  static Nh(t) {
    return new pt(t.x, t.y, t.name, st.mh(t, "randomChance"));
  }
  Ph() {
    this.Oi = this.Uh !== void 0 ? Math.random() < this.Uh : 1;
  }
  st(t) {
    if (!this.Oi) return;
    super.st(t),
      this.name === "showerBeing" &&
        (this.frame = this.Ai + (Math.floor(S.G * 10) % 3));
    const h = this.Bh,
      i = this.frame;
    (h.x = 24 * (i & 3)), (h.y = 48 * (i >> 2));
  }
  oh(t) {
    this.Oi && super.oh(t);
  }
}
class Ot extends mt {
  constructor(t, h, i, s, a, r) {
    super(t, h),
      (this.xi = 0),
      (this.width = i),
      (this.height = s),
      (this.range = a),
      (this.Mi = r),
      (this.wi = 0.95 / r);
    const e = new gt(this);
    (e.width = i), (e.height = s);
  }
  static Nh(t) {
    return new Ot(
      t.x,
      t.y,
      t.width,
      t.height,
      st.mh(t, "range"),
      st.mh(t, "times")
    );
  }
  Fh() {
    (this.xi = 0), (zc.Ah.ki = void 0);
  }
  oh(t) {
    (t.fillStyle = `rgba(0, 0, 0, ${this.xi})`),
      t.fillRect(ct.x - 1, ct.y - 1, 322, 242);
  }
  Dh() {
    this.Mi > 0 &&
      (this.Mi--,
      (this.xi += this.wi),
      (zc.Ah.x -= this.range),
      (zc.Ah.ki = this.x - this.range),
      (ct.x -= this.range),
      setTimeout(() => {
        ot.oi(
          () => {},
          () => {}
        );
      }, 666));
  }
}
const At = "8Áaø@;£ï÷J\\_!6Pé`fØ-Õ";
class xt extends mt {
  constructor(t, h, i, s, a, r, e) {
    super(t, h),
      (this.width = i),
      (this.height = s),
      (this.id = a),
      (this.target = r),
      (this.Ti = e),
      (this.Eh = new gt(this));
  }
  static Nh(t) {
    return new xt(
      t.x,
      t.y,
      t.width,
      t.height,
      t.id,
      st.mh(t, "target"),
      st.mh(t, "switch")
    );
  }
  Rh() {
    vt.$h(this);
  }
  Li() {
    const t = this.Ti,
      h = zc.Ah.Si;
    let i = 1;
    for (let s = 0; t.length > s; s++)
      if (!h[t[s]]) {
        i = 0;
        break;
      }
    return i;
  }
  Ph() {
    vt.$h(this);
    const t = this.Li(),
      h = t ? 38 : 39,
      i = t ? 34 : 66,
      s = t ? 1 : 0;
    this.width > 24
      ? (zc.Hi((this.x + 8) >> 4, (this.y + 8) >> 4, i, s),
        zc.Hi((this.x + 24) >> 4, (this.y + 8) >> 4, i + 1, s))
      : zc.Hi((this.x + 8) >> 4, (this.y + 8) >> 4, h, s);
  }
  Dh() {
    const t = zc.Zh[this.target];
    t !== void 0 && zc.Ah.ti(t);
  }
}
const Mt = "Óµ+ªkú±\0f8^Æ\n/ìÎ×(I;PßÑÉ=J£",
  wt = { Ci: 1, Ii: 1, Ri: 0 },
  kt = { Ci: 0.78, Ii: 1, Ri: 0 },
  Tt = { Ci: 0.84, Ii: 1, Ri: 0 },
  Lt = { Ci: 0.84, Ii: 1, Ri: 0 },
  St = { Ci: 1, Ii: 1, Ri: 0 },
  Ct = { Ci: 1, Ii: 1, Ri: 0 },
  It = { Ci: 0.94, Ii: 1, Ri: 0 },
  Rt = { Ci: 1, Ii: 1, Ri: 0 },
  jt = { Ci: 0.92, Ii: 1, Ri: 0 },
  yt = { Ci: 0.97, Ii: 1, Ri: 0 },
  Et = { Ci: 0.93, Ii: 1, Ri: 0 },
  Pt = { Ci: 1, Ii: 1, Ri: 0 },
  Ft = { Ci: 0.88, Ii: 1, Ri: 0 },
  Bt = { Ci: 0.87, Ii: 1, Ri: 0 },
  Dt = { Ci: 1, Ii: 1, Ri: 0 },
  Kt = { Ci: 1, Ii: 1, Ri: 0 },
  Gt = { Ci: 1, Ii: 1, Ri: 0 },
  Vt = { Ci: 1, Ii: 1, Ri: 0 },
  Ut = { Ci: 1, Ii: 1, Ri: 0 },
  qt = { Ci: 0.76, Ii: 1, Ri: 0 },
  Nt = { Ci: 1, Ii: 1, Ri: 0 },
  $t = { Ci: 0.86, Ii: 1, Ri: 0 },
  Qt = { Ci: 1, Ii: 1, Ri: 0 },
  Jt = "$h(7WÞÏ4øI7trl^Oÿ»tÌT«c¯n",
  _t = "!ãHgaíDÂüîÙze",
  zt = "Þ>NÒLØ×À¬Ì£zÂ`ôç÷°7ZEhDìÂ",
  Zt = "¸SP$9jwôjgÄ/fdo \vÇí³",
  th = "Á·­òY#É@ôeÍ: uFÛÍÿFÉâM¾",
  hh = {
    [(wt.name = c("è\0ïb530_ct8í%\bIø«ù", Jt))]: wt,
    [(kt.name = c("ãæ\fxX³xw7hËWÞ¢%", Jt))]: kt,
    [(Tt.name = c("Ú-¡¨ôD6;häÓ¢F¤üg#³Ä*¤", Jt))]: Tt,
    [(Lt.name = c("]ö¿'ó?*BM¢íÓVM eWï", _t))]: Lt,
    [(St.name = c("56ß:Ù¤ÏÛ\t¥FHÖûx­Å/²B", _t))]: St,
    [(Ct.name = c("(2iþ!×Y#p~niÖ¬®UÒM¼U¶¹µ", _t))]: Ct,
    [(It.name = c("?¥9x\0³Ô¿åy|¹ áôP5!", _t))]: It,
    [(Rt.name = c(":zQÅ#}°¼y{\ro|¼^¶UÓ", _t))]: Rt,
    [(jt.name = c("Û¤×Ð\n¤Ö±´åYz±nv", zt))]: jt,
    [(yt.name = c("Dé­G¹Ká¹yCÍÆÔ³ê5²", zt))]: yt,
    [(Et.name = c("Î°åùM)Ä³LûT.z", zt))]: Et,
    [(Pt.name = c('_~ÂÓ":zg­ÄG¶\\OÅÝCo©8aÉp', zt))]: Pt,
    [(Ft.name = c("°~\tÑ$}4Æ2`¤ÝZ5Ô", zt))]: Ft,
    [(Bt.name = c("Ùøä1AAmÌÏ¯¶äæIdFP", zt))]: Bt,
    [(Dt.name = c("8í¾µÐ~xúòv»ÜË&Ín7þ²", Zt))]: Dt,
    [(Kt.name = c("N4Õ@\v6ÄéÏ+Ùª¼á@é­Úò\b7", Zt))]: Kt,
    [(Gt.name = c("é?Öå:`@²KjFë?\r·Éw®­T¦\tÏ", Zt))]: Gt,
    [(Vt.name = c("¦¬»xû[¤ä5B$ß´L*¼AË÷t", Zt))]: Vt,
    [(Ut.name = c("zLè.-å\\ÌNEä6¿°°Ä¶\\³Ð8", Zt))]: Ut,
    [(qt.name = c("½c¸A;2·\0Á²Íö´÷e>¼0 º", th))]: qt,
    [(Nt.name = c("\tyQ`^öÅ|G]4åjÍÿ¬Ë\\Jå­Y", th))]: Nt,
    [($t.name = c("P[xÃØçv¥óJ8øQÂV\v¦ÓÁd\n\f=", th))]: $t,
    [(Qt.name = c("!9ï<Ë^>GÕÞ^Ek?iò2's¯ú\"", th))]: Qt,
  },
  ih = "?P;C^Ú\b&öd1ÙÅEàr×=ßWx",
  sh = "jÆë@zD0YU²Û´t\fm·",
  ah = "©ç5à8/ÉYüa÷8EtöC",
  rh = "7py'¾Ë%ÏeoÇëwÆÞA\nAäýø¦Wòü¶bP]¡",
  eh = "*8ÁÁdóû8»u×",
  ch = "Ãz§³æPmk w8Æ¯qIOwê³I©",
  nh = "Ø¦à7ÔËJ\nx½CïY",
  fh = "SquÙÕb\\@zÆ4øUÆ%Ò¶y";
var oh, dh, mh, gh;
((t) => {
  let h, i;
  (h = t.images || (t.images = {})),
    (i = t.Lt || (t.Lt = {})),
    (t.ji = () => {
      const s = new V(
          (h.texture = D(c("­Ðý}X4ØÇêÇ-«ÎÁî\\jÝb\\äð", ih))),
          (h.yi = D(c("ØÉÙTQõ§7Äs©ZY]Q½\v6]", ih))),
          (h.Ei = D(c("Ü®ü³=G§½3N)@ÕêdcH:(ã½Ò¼Øí¬Óã", sh))),
          (h.Pi = D(c("*§T+2>\f-E?>·Cµî ;o°è½m¯©", sh))),
          (h.font = D(c("áÂì$>ä%pï/ÝE×\b#Cª½J", sh))),
          (h.Fi = D(c("ÒßFHæÖlÖ±C]hPkäÙ³áf^¹0üäÒ", sh))),
          (h.Bi = D(c(" Ñù}R¸dC\\ÉRræUfUÅ*q3a+", sh))),
          (h.Di = D(c("EtV%Ü·oªpëEDkTK°Éª¸Èë{fT", ah))),
          (i.Ki = G.Yt(c("©´vl¹i¹vQÔ^£È\\`+\0¾U÷¶úKÍ.];vÝ\vJ", ah))),
          (i.Gi = G.Yt(c("Í´@ ]\tÝ^}¹êLëÊ8_ßhdùÒÍWv¶êÔqæCpKÕ©L*", ah))),
          (i.Vi = G.Yt(c("· ØìÕ©9d1Z\vñiBKGcÉk¢pµ~ákXæ½«[~Ç", ah))),
          (i.Ui = G.Yt(c("¢QÞÐ&c¬´¹ù­k5WºA_î¢£'ÄWzÆ»à_~", ah))),
          (i.qi = G.Yt(c("*DDÜ ¦1¬öæV-éÝ¿iRÅ2ê", rh))),
          (i.Ni = G.Yt(c('ëûÏa§CæXIAIÑ"P3ÿv¦>ö%`', rh))),
          (i.$i = G.Yt(c("âAZOë¨¾ÓtBiËG=×&´§}ë¸2l¶ÜY¢Û", rh))),
          (i.Qi = G.Yt(c("æÀý3T®Ã±ºéT¼púQ'`Æ}", rh))),
          (i.Ji = G.Yt(c("|IoÜ<ó\t$Ug³z¬5âµcÆ¶Ó1è6yç", rh))),
          (i._i = G.Yt(c("×*(ÚVqÆyÎç·l§+®¬®MB¡jB>", eh))),
          (i.zi = G.Yt(c("£Á=\\\bý¼Fï<6_zÕõû]DµÒwºÂ", eh))),
          (i.Zi = G.Yt(c("ÆmÒ¡ò?7à¸pµùyò«ÓêY´¿!ó", eh))),
          (i.ts = G.Yt(c("ÝtW)/¼É[ëèïé«¥²V¯YD:Ð5Ië9!", eh))),
          (i.hs = G.Yt(c("q¦ÙÊ8½¤3nþÁv3¤Ë¾áEW¸[.", eh))),
          (i.ss = G.Yt(c("ødj£ð¼\v?­0Ûv\0p-¼ô¯Ì", ch))),
          (i.rs = G.Yt(c("¦>KCô¤8û>ÂÛ|Hi,!AÃºP Ó", ch))),
          (i.es = G.Yt(c("b³\n4\\ ¿î×\\:X¤ªÊ¡`ç»ä.D¬H3ï", ch))),
          (i.cs = G.Yt(c("æ]L p\vH7Ô\t\v).^J£<2³uO|åÓ", ch))),
          (i.ns = G.Yt(c("¯[S«t«Ï¨ìª¯'|âìJ+¢ðwðâ£ÚcçÊ", nh))),
          (i.fs = G.Yt(c('=Ea"ÿº<1,O`&9~×Ú>àçtVrÙ ', nh))),
          (i.ds = G.Yt(c("pTÄ'J)|øËaüUZ3\rro­ Ò ÆHWA", nh))),
          (i.gs = G.Yt(c("e«Û\té¸½F )æ&Â¿NaÃ¸\f", nh))),
          (i.vs = G.Yt(c("!Ø)&YIGÛà_L\\i¨OO\bJax", fh))),
          (i.bs = G.Yt(c('¹ëi9"¯ÚoýÐïyô¶ä «£ÆÌ.¨AlKÍ­', fh))),
          (i.us = G.Yt(c("ÐFÀmÔlzûJQßd4\tÿUÌ/ÂË²", fh))),
          (i.ls = G.Yt(c("­=Íýy3\0Í¶ëÕEN¢@joøZ\bSWEÈ.ö¤²ò", fh)))
        ),
        a = c('âÂ;£2òÆ"©\rþvË5', "\fÛF4Ãª{lâïËpôOÜRuA\nJ#X");
      for (const [h, i] of Object.entries(hh)) {
        const s = a + h;
        for (const h of Object.values(t.Lt)) h.nt() === s && (i.di = h);
      }
      return s;
    });
})(oh || (oh = {}));
class vh {
  constructor(t) {
    (this.visible = 0),
      (this.Xs = 0),
      (this.Ys = 0),
      (this.Hs = 0),
      (this.Ws = 0),
      (this.ps = 0),
      (this.Os = 0),
      (this.As = 0),
      (this.xs = 0),
      t !== void 0 &&
        ((this.visible = t.visible),
        (this.Xs = t.Xs),
        (this.Ys = t.Ys),
        (this.Hs = t.Hs),
        (this.Ws = t.Ws),
        (this.ps = t.ps),
        (this.Os = t.Os),
        (this.As = t.As),
        (this.xs = t.xs));
  }
}
class bh {
  constructor(t) {
    (this.Ms = {}),
      (this.ws = 0),
      (this.ks = t),
      (this.Ts = t.id),
      (this.Ls = t.name),
      (this.width = t.Ss),
      (this.height = t.Cs),
      (this.Is = t.Rs),
      (this.backgroundColor = t.js),
      t.ys !== void 0 && (this.views = t.ys.map((t) => new vh(t)));
  }
  Es(t = this.ws) {
    let h = this.views;
    h === void 0 && ((h = []), (this.views = h));
    let i = h[t];
    return i === void 0 && ((i = new vh()), (h[t] = i)), i;
  }
}
((t) => {
  function h(t) {
    return 0 > t ? Math.ceil(t) : Math.floor(t);
  }
  function i(t, h) {
    return h > 0
      ? Math.atan(t / h)
      : 0 > h && t >= 0
      ? Math.atan(t / h) + 3.141592653589793
      : 0 > h && 0 > t
      ? Math.atan(t / h) - 3.141592653589793
      : h === 0 && t > 0
      ? 1.5707963267948966
      : h === 0 && 0 > t
      ? -1.5707963267948966
      : 0;
  }
  function s() {
    return Math.random();
  }
  function a(t) {
    return s() * t;
  }
  (t.Ps = h),
    (t.Fs = i),
    (t.Bs = (t, h) =>
      t === void 0 || h > t.length ? "" : (h > 0 || (h = 1), t.charAt(h - 1))),
    (t.Ds = (t, h) => t * Math.cos(h * 0.017453292519943295)),
    (t.Ks = (t, h) => t * -Math.sin(h * 0.017453292519943295)),
    (t.Gs = (t, h, i, s) => {
      const a = i - t,
        r = s - h;
      return Math.sqrt(a * a + r * r);
    }),
    (t.Vs = (t, h, s, a) => i(h - a, s - t) * 57.29577951308232),
    (t.Us = () => {}),
    (t.qs = s),
    (t.Ns = a),
    (t.$s = (t) => {
      const i = 0 > t ? -1 : 1;
      return h(s() * (t + i));
    }),
    (t.Qs = (t, h) => {
      if (t === h) return t;
      const i = Math.min(t, h);
      return i + a(Math.max(t, h) - i);
    }),
    (t.Js = (t, i) => {
      if (t === i) return t;
      const s = h(Math.min(t, i)),
        r = h(Math.max(t, i));
      return s + h(a(r - s + 1));
    }),
    (t._s = (...t) => t[Math.floor(a(t.length))]),
    (t.zs = (t, h, i) => {
      let s, a, r;
      const e = Math.floor((t / 256) * 6),
        c = t * 6 - e,
        n = i * (1 - h),
        f = i * (1 - c * h),
        o = i * (1 - (1 - c) * h);
      switch (e % 6) {
        case 0:
          [s, a, r] = [i, o, n];
          break;
        case -5:
        case 1:
          [s, a, r] = [f, i, n];
          break;
        case -4:
        case 2:
          [s, a, r] = [n, i, o];
          break;
        case -3:
        case 3:
          [s, a, r] = [n, f, i];
          break;
        case -2:
        case 4:
          [s, a, r] = [o, n, i];
          break;
        case -1:
        case 5:
          [s, a, r] = [i, n, f];
      }
      return (
        (s = Math.floor(s * 255)),
        (a = Math.floor(a * 255)),
        (r = Math.floor(r * 255)),
        (s << 16) | (a << 8) | r
      );
    });
})(dh || (dh = {})),
  ((t) => {
    function h(t, h, i, s, a, r) {
      const e = L.j;
      (e.fillStyle = `rgba(${(a >> 16) & 255}, ${(a >> 8) & 255}, ${
        a & 255
      }, ${r})`),
        e.fillRect(t, h, i - t, s - h);
    }
    function i(t, h, i, s, a, r, e, c, n, f, o, d, m, g, v, b) {
      let u;
      switch (e) {
        case 0:
          u = oh.images.texture.ft();
          break;
        case 1:
          u = v === 65535 ? oh.images.Ei.ft() : oh.images.yi.ft();
          break;
        case 2:
          u = oh.images.Pi.ft();
      }
      if (u === void 0) return;
      const l = i - t,
        X = s - h;
      (g = 360 - (g % 360)), (c *= d), (n *= m), (f *= d), (o *= m);
      const Y = L.j;
      Y.save(),
        Y.translate(Math.round(a + 0.001), Math.round(r + 0.001)),
        Y.rotate(g * 0.017453292519943295),
        b !== 1
          ? ((Y.globalAlpha = Math.max(b, 0)),
            Y.drawImage(u, t, h, l, X, f - c, o - n, l * d, X * m),
            (Y.globalAlpha = 1))
          : Y.drawImage(u, t, h, l, X, f - c, o - n, l * d, X * m),
        Y.restore();
    }
    function s(h, s, a, r, e, c, n, f, o) {
      0 > (s = Math.floor(s) % h.Zs.length) && (s += h.Zs.length);
      let d = h.Zs[s];
      if (d === void 0 && ((d = h.Zs[(s = 0)]), d === void 0)) return;
      const m = d.ta,
        g = d.ha;
      i(
        m,
        g,
        m + d.ia,
        g + d.sa,
        a,
        r,
        d.aa,
        h.ii,
        h.si,
        d.ra,
        d.ea,
        e,
        c,
        n,
        f,
        o * t.ca
      );
    }
    function a(t, h, s, a, r, e, c, n, f, o, d, m) {
      0 > (h = Math.floor(h) % t.Zs.length) && (h += t.Zs.length);
      let g = t.Zs[h];
      if (g === void 0 && ((g = t.Zs[(h = 0)]), g === void 0)) return;
      const v = g.ta + (s = Math.max(s, 0)),
        b = g.ha + (a = Math.max(a, 0));
      i(
        v,
        b,
        v + (r = Math.min(g.ia - s, r)),
        b + (e = Math.min(g.sa - a, e)),
        c,
        n,
        g.aa,
        t.ii,
        t.si,
        g.ra,
        g.ea,
        f,
        o,
        0,
        d,
        m
      );
    }
    function r(t, h, i, s, a, r, e, c) {
      if (i === void 0 || i.length === 0) return;
      let n;
      switch (c) {
        case 0:
          n = oh.images.Fi.ft();
          break;
        case 16711680:
          n = oh.images.Bi.ft();
          break;
        case 16776960:
          n = oh.images.Di.ft();
          break;
        default:
          n = oh.images.font.ft();
      }
      const f = L.j;
      let o = 0,
        d = 0;
      for (let m = 1; i.length >= m; m++) {
        let r = dh.Bs(i, m);
        r === "" &&
          dh.Bs(i, m - 1) === "\\" &&
          ((o = 0), (d += e.fontSize + 4));
        const c = e.na[r];
        if (c === void 0) continue;
        const g = (o + c.fa) * s,
          v = d * a;
        f.drawImage(
          n,
          c.oa,
          c.da,
          c.ma,
          c.ga,
          Math.round(t + 1 / 640) + g,
          Math.round(h + 1 / 480) + v,
          c.ma * s,
          c.ga * a
        ),
          (o += c.va);
      }
    }
    (t.ba = 16777215),
      (t.ca = 1),
      (t.ua = void 0),
      (t.Rect = h),
      (t.la = (t, i, s, a, r, e) => {
        let c = Math.min(t, s),
          n = Math.max(s, t);
        h(c, Math.min(i, a), n + 1, Math.max(a, i) + 1, r, e);
      }),
      (t.Xa = (t, h, i, s, a, r) => {
        const e = L.j;
        (e.strokeStyle = `rgba(${(a >> 16) & 255}, ${(a >> 8) & 255}, ${
          a & 255
        }, ${r})`),
          (e.lineWidth = 1),
          e.strokeRect(t, h, i - t + 1, s - h + 1);
      }),
      (t.Ya = (t, h, i, s, a, r, e) => {
        const c = L.j;
        (c.lineWidth = a),
          (c.strokeStyle = `rgba(${(r >> 16) & 255}, ${(r >> 8) & 255}, ${
            r & 255
          }, ${e})`),
          c.beginPath(),
          c.moveTo(t, h),
          c.lineTo(i, s),
          c.stroke();
      }),
      (t.Image = i),
      (t.Ha = (t, h, i, a) => {
        s(t, h, i, a, 1, 1, 0, 16777215, 1);
      }),
      (t.Wa = s),
      (t.pa = (t, h, i, s, r, e, c, n) => {
        a(t, h, i, s, r, e, c, n, 1, 1, 16777215, 1);
      }),
      (t.Oa = a),
      (t.Text = r),
      (t.Aa = (t, h, i, s, a = 16777215) => {
        r(t, h, i, 1, 1, 0, s, a);
      });
  })(mh || (mh = {})),
  ((t) => {
    t.xa = void 0;
    let h = new Audio(),
      i = new Map(),
      s = Infinity;
    (t.Ma = 0),
      (h.onended = () => {
        t.Ma = 1;
      }),
      (t.wa = (t) => {
        if (i.has(t)) return;
        const h = new Audio(`assets/mus/${t}.ogg`);
        (h.preload = "auto"), h.load(), i.set(t, { di: h });
      }),
      (t.ka = (a, r = 1) => {
        if (t.xa === a) return;
        t.xa = a;
        let e = 0;
        if (a !== void 0) {
          const t = i.get(a);
          t && ((h = t.di), i.delete(a), (e = 1));
        }
        (t.Ma = 0),
          (h.loop = r),
          (h.preload = "auto"),
          h.pause(),
          t.xa !== void 0 &&
            (e ||
              ((h.src = `assets/mus/${t.xa}.ogg`),
              h.load(),
              (h.currentTime = 0),
              (h.volume = 1),
              (h.playbackRate = 1)),
            h.play()),
          (s = S.G + 5);
      }),
      (t.Ta = () => {
        (t.xa = void 0), h.pause();
      }),
      (t.La = () => {
        t.xa !== void 0 && h.pause();
      }),
      (t.Sa = () => {
        t.xa !== void 0 && h.play();
      }),
      (t.Ca = () => {
        t.xa !== void 0 &&
          (h.pause(),
          i.set(t.xa, { di: h }),
          (t.xa = void 0),
          (h = new Audio()));
      }),
      (t.Ia = (t) => {
        h.volume = t;
      }),
      (t.Ra = (t) => {
        h.playbackRate = t;
      }),
      (t.ja = () => (s > S.G ? h.readyState === 4 : 1));
  })(gh || (gh = {}));
const uh = {};
var lh = 1;
function Xh(t, h, i, s, a, r) {
  return t >= a + 1 || i > t || h >= r + 1 || s > h ? 0 : 1;
}
function Yh(t, h, i, s, a, r, e, c) {
  return Math.min(t, i) >= e + 1 ||
    a > Math.max(t, i) ||
    Math.min(h, s) >= c + 1 ||
    r > Math.max(h, s)
    ? 0
    : 1;
}
function Hh(t, h, i, s, a, r, e, c) {
  if (
    Math.min(t, i) >= e + 1 ||
    a > Math.max(t, i) ||
    Math.min(h, s) >= c + 1 ||
    r > Math.max(h, s)
  )
    return 0;
  if (t > i) {
    const a = i,
      r = s;
    (i = t), (s = h), (t = a), (h = r);
  }
  if (
    (a > t && ((h = ((s - h) * (a - t)) / (i - t) + h), (t = a)), i > e + 1)
  ) {
    const a = e + 1;
    (s = ((s - h) * (a - i)) / (i - t) + s), (i = a);
  }
  return (r > h && r > s) || (h >= c + 1 && s >= c + 1) ? 0 : 1;
}
class Wh {
  constructor(t) {
    (this.Ls = ""),
      (this.Ts = 0),
      (this.ya = lh++),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Is = 0),
      (this.Pa = 0),
      (this.Fa = []),
      (this.Ba = []),
      (this.Da = 0),
      (this.Ka = 0),
      (this.Ga = 0),
      (this.Va = 0),
      (this.Ua = 0),
      (this.qa = 0),
      (this.Na = 0),
      (this.$a = 0),
      (this.Qa = 0),
      (this.x = 0),
      (this.y = 0),
      (this.Ja = 0),
      (this._a = 0),
      (this.za = 0),
      (this.Za = 0),
      (this.tr = 0),
      (this.hr = 0),
      (this.ir = 1),
      (this.sr = 0),
      (this.ar = 16777215),
      (this.rr = 0),
      (this.er = 0),
      (this.cr = 0),
      (this.nr = 1),
      (this.dr = 1),
      (this.mr = -1),
      (this.gr = 0),
      (this.vr = 0),
      (this.br = 0),
      (this.ur = 0),
      (this.lr = {}),
      (this.Xr = {}),
      (this.Yr = {}),
      (this.Hr = new Map()),
      (this.Wr = 1),
      (this.pr = 0),
      (this.Or = 0),
      (this.Ar = 0),
      (this.ks = t),
      (this.Ls = t.name),
      (this.Ts = t.id);
  }
  get Mh() {
    return this.Pa;
  }
  set Mh(t) {
    (this.Pa = t), (Be.Mr = 1);
  }
  get wr() {
    return this.kr;
  }
  set wr(t) {
    (this.kr = t), this.Tr();
  }
  get Lr() {
    return this.rr;
  }
  set Lr(t) {
    (this.rr = t), this.Tr();
  }
  get Sr() {
    return this.Ua;
  }
  set Sr(t) {
    (this.Ua = t), this.Cr();
  }
  get Ir() {
    return this.qa;
  }
  set Ir(t) {
    (this.qa = t), this.Cr();
  }
  get speed() {
    return this.Na;
  }
  set speed(t) {
    this.Rr(t, this.Da);
  }
  get direction() {
    return this.Da;
  }
  set direction(t) {
    this.Rr(this.Na, t);
  }
  Rr(t, h) {
    (this.Na = t),
      (this.Da = h),
      (this.Ua = Math.cos((h *= 0.017453292519943295)) * t),
      (this.qa = -Math.sin(h) * t);
  }
  Cr() {
    const t = this.Ua,
      h = this.qa;
    t !== 0 || h !== 0
      ? ((this.Na = Math.sqrt(t * t + h * h)), (this.Da = dh.Vs(0, 0, t, h)))
      : (this.Na = 0);
  }
  jr() {
    if (this.Ga !== 0) {
      let t = this.Va * 0.017453292519943295;
      (this.Ua += this.Ga * Math.cos(t)),
        (this.qa += this.Ga * -Math.sin(t)),
        this.Cr();
    }
    (this.x += this.Ua), (this.y += this.qa);
  }
  yr() {
    for (const [t, h] of this.Hr.entries()) {
      const i = this.Er(this.vr, this.ur, this.br, this.gr, t);
      i !== void 0 && h(i);
    }
  }
  Pr(t, h, i) {
    for (const s of Be.Fr(i))
      if ((s.Br(), Xh(t, h, s.vr, s.ur, s.br, s.gr))) return s.Ts;
  }
  Er(t, h, i, s, a) {
    for (const r of Be.Fr(a))
      if ((r.Br(), Yh(t, h, i, s, r.vr, r.ur, r.br, r.gr))) return r;
  }
  Dr(t, h, i, s, a) {
    for (const r of Be.Fr(a))
      if ((r.Br(), Hh(t, h, i, s, r.vr, r.ur, r.br, r.gr))) return r;
  }
  Kr(t, h) {
    return dh.Gs(this.x, this.y, t, h);
  }
  Gr(t, h, i) {
    const s = dh.Vs(this.x, this.y, t, h);
    this.Rr(i, s);
  }
  Tr() {
    const t = this.wr;
    if (t === void 0)
      (this.za = 0),
        (this.Za = 0),
        (this.er = 0),
        (this.vr = this.x),
        (this.br = this.x),
        (this.ur = this.y),
        (this.gr = this.y);
    else {
      (this.za = t.Vr * this.nr),
        (this.Za = t.Ur * this.dr),
        (this.er = t.Zs.length);
      const h = t.Zs[this.rr];
      if (
        (h !== void 0
          ? ((this.tr = h.ra * this.nr), (this.hr = h.ea * this.dr))
          : ((this.tr = 0), (this.hr = 0), (this.rr = 0)),
        this.sr === 0)
      ) {
        const h = Math.round(this.x + (t.qr - t.ii) * this.nr),
          i = Math.round(this.x + (t.Nr - t.ii + 1) * this.nr),
          s = Math.round(this.y + (t.$r - t.si) * this.dr),
          a = Math.round(this.y + (t.Qr - t.si + 1) * this.dr);
        (this.vr = Math.min(h, i)),
          (this.ur = Math.min(s, a)),
          (this.br = Math.max(h, i) - 1),
          (this.gr = Math.max(s, a) - 1);
      } else {
        let h = Math.round((t.qr - t.ii) * this.nr),
          i = Math.round((t.Nr - t.ii + 1) * this.nr),
          s = Math.round((t.$r - t.si) * this.dr),
          a = Math.round((t.Qr - t.si + 1) * this.dr);
        (h *= Math.cos(this.sr * 0.017453292519943295)),
          (i *= Math.cos(this.sr * 0.017453292519943295)),
          (s *= Math.sin(this.sr * 0.017453292519943295)),
          (a *= Math.sin(this.sr * 0.017453292519943295)),
          (this.vr = Math.round(
            this.x + Math.min(h, i) + Math.min(s, a) + 0.5
          )),
          (this.br = Math.round(
            this.x + Math.max(h, i) + Math.max(s, a) - 0.5
          )),
          (this.ur = Math.round(
            this.y + Math.min(s, a) - Math.max(h, i) + 0.5
          )),
          (this.gr = Math.round(
            this.y + Math.max(s, a) - Math.min(h, i) - 0.5
          ));
      }
    }
  }
  Jr() {
    if (((this.Or += 1), this.cr > 0)) {
      const t = this.wr;
      t === void 0
        ? ((this.Ar = 0), (this.rr = 0))
        : (this.Ar === -1 && (this.Ar = this.rr),
          (this.Ar += this.cr),
          (this.rr = Math.floor(this.Ar)),
          t.Zs.length > this.rr ||
            ((this.Ar = this.Ar - this.rr),
            (this.rr = Math.floor(this.Ar)),
            this._r()));
    } else this.Ar = -1;
    (this.Ja = this.x), (this._a = this.y), this.Br();
  }
  zr() {
    for (const t of this.Fa.keys()) {
      let h = this.Fa[t];
      h === void 0 ||
        0 > h ||
        (h--, h > 0 ? (this.Fa[t] = h) : ((this.Fa[t] = -1), this.Ba[t]?.()));
    }
  }
  Zr() {
    for (const t in this.lr) C.N[t] && this.lr[t]();
    for (const t in this.Xr) C.J[t] && this.Xr[t]();
    for (const t in this.Yr) C._[t] && this.Yr[t]();
  }
  Br() {
    this.Tr(), this.Cr();
  }
  te() {
    const t = this.wr;
    t !== void 0 &&
      (t.Zs[this.rr] !== void 0
        ? mh.Wa(
            t,
            this.rr,
            this.x,
            this.y,
            this.nr,
            this.dr,
            this.sr,
            this.ar,
            this.ir
          )
        : (this.rr = 0));
  }
  he() {}
  ie() {}
  se() {}
  ae() {}
  st() {}
  re() {}
  ee() {}
  ce() {}
  rt() {
    this.te();
  }
  ne() {}
  fe() {}
  oe() {}
  de() {}
  me() {}
  ge() {}
  ve() {}
  be() {}
  ue() {}
  _r() {}
}
class ph extends Wh {
  constructor(t) {
    super(t),
      (this.le = 0),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -999),
      (this.Is = 0);
  }
}
const Oh = { Xe: () => new ph(Oh) },
  Ah = {
    Zs: [{ aa: 0, ta: 642, ha: 106, ia: 239, sa: 104, ra: 0, ea: 0 }],
    Vr: 239,
    Ur: 104,
    qr: 2,
    $r: 0,
    Nr: 238,
    Qr: 103,
    ii: 2,
    si: 2,
  };
class xh extends Wh {
  constructor() {
    super(Mh),
      (this.wr = Ah),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 10),
      (this.Is = 0);
  }
  he() {
    this.parent = void 0;
  }
  st() {
    Be.Ye(this.parent) || Be.He(this);
  }
}
const Mh = { Xe: () => new xh() },
  wh = {
    Zs: [{ aa: 1, ta: 846, ha: 0, ia: 100, sa: 202, ra: 0, ea: 0 }],
    Vr: 100,
    Ur: 202,
    qr: 3,
    $r: 1,
    Nr: 96,
    Qr: 199,
    ii: 0,
    si: 0,
  },
  kh = {
    Zs: [{ aa: 1, ta: 642, ha: 0, ia: 202, sa: 100, ra: 0, ea: 0 }],
    Vr: 202,
    Ur: 100,
    qr: 1,
    $r: 3,
    Nr: 199,
    Qr: 95,
    ii: 0,
    si: 0,
  },
  Th = 0.5;
var Lh, Sh, Ch;
((Sh = Lh || (Lh = {})).We = (t) => {
  t.di !== void 0 && G.Ot(t.di, Th * t.Ci, t.Ii, t.Ri);
}),
  (Sh.pe = (t) => {
    t.di !== void 0 && G.At(t.di, Th * t.Ci, t.Ii, t.Ri);
  }),
  (Sh.Oe = (t) => (t.di === void 0 ? 0 : G.xt(t.di))),
  (Sh.Ae = (t) => {
    t.di !== void 0 && G.Ht(t.di);
  }),
  (Sh.xe = () => {
    gh.ka(void 0);
  }),
  Ch || (Ch = {});
const Ih = {
  Zs: [{ aa: 0, ta: 614, ha: 964, ia: 5, sa: 5, ra: 0, ea: 0 }],
  Vr: 5,
  Ur: 5,
  qr: 0,
  $r: 0,
  Nr: 4,
  Qr: 4,
  ii: 0,
  si: 0,
};
class Rh extends ph {
  constructor() {
    super(jh),
      (this.Me = 0),
      (this.wr = Ih),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -999),
      (this.Is = 0);
  }
  st() {
    this.x !== Ch.we[0] &&
      (Math.abs(this.x - Ch.we[0]) > 15
        ? this.x > Ch.we[0]
          ? (this.x -= 15)
          : (this.x += 15)
        : (this.x = Ch.we[0])),
      this.y !== Ch.we[3] &&
        (Math.abs(this.y - Ch.we[3]) > 15
          ? this.y > Ch.we[3]
            ? (this.y -= 15)
            : (this.y += 15)
          : (this.y = Ch.we[3]));
    const t = Math.round((Ch.we[1] - Ch.we[0]) / 5) + 1;
    this.nr !== t &&
      (Math.abs(t - this.nr) > 6 || (this.nr = t),
      this.nr > t && (this.nr -= 6),
      t > this.nr && (this.nr += 6)),
      this.le === 1 &&
        ((this.x = Ch.we[0]),
        (this.y = Ch.we[3]),
        (this.nr = 1 + (Ch.we[1] - Ch.we[0]) / 5));
  }
  be() {
    (this.x = Ch.we[0]),
      (this.y = Ch.we[3]),
      (this.nr = (Ch.we[1] - Ch.we[0]) / 5),
      (this.Me = 0);
  }
}
const jh = { parent: Oh, Xe: () => new Rh() };
class yh extends ph {
  constructor() {
    super(Eh),
      (this.Me = 0),
      (this.wr = Ih),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -999),
      (this.Is = 0);
  }
  st() {
    this.x !== Ch.we[0] &&
      (Math.abs(this.x - Ch.we[0]) > 15
        ? this.x > Ch.we[0]
          ? (this.x -= 15)
          : (this.x += 15)
        : (this.x = Ch.we[0])),
      (this.x !== Ch.we[0] && this.y >= Ch.we[2]) ||
        this.y === Ch.we[2] ||
        (Math.abs(this.y - Ch.we[2]) > 15
          ? this.y > Ch.we[2]
            ? (this.y -= 15)
            : (this.y += 15)
          : (this.y = Ch.we[2]));
    const t = Math.round((Ch.we[1] - Ch.we[0]) / 5);
    this.nr !== t &&
      (Math.abs(t - this.nr) > 6 || (this.nr = t),
      this.nr > t && (this.nr -= 6),
      t > this.nr && (this.nr += 6)),
      this.Me === 1 && (this.y = Ch.we[2]),
      this.le === 1 &&
        ((this.x = Ch.we[0]),
        (this.y = Ch.we[2]),
        (this.nr = (Ch.we[1] - Ch.we[0]) / 5));
  }
  be() {
    (this.x = Ch.we[0]),
      (this.y = Ch.we[2]),
      (this.nr = (Ch.we[1] - Ch.we[0]) / 5),
      (this.Me = 0);
  }
}
const Eh = { parent: Oh, Xe: () => new yh() };
class Ph extends ph {
  constructor() {
    super(Fh),
      (this.Me = 0),
      (this.wr = Ih),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -999),
      (this.Is = 0);
  }
  re() {
    const t = Be.ke(Eh),
      h = Be.ke(jh);
    this.x !== Ch.we[0] &&
      (Math.abs(this.x - Ch.we[0]) > 15
        ? this.x > Ch.we[0]
          ? (this.x -= 15)
          : (this.x += 15)
        : (this.x = Ch.we[0])),
      this.y !== Ch.we[3] &&
        (Math.abs(this.y - Ch.we[3]) > 15
          ? (this.y > Ch.we[3] ? (this.y -= 15) : (this.y += 15),
            t.y > Ch.we[2] && h.y > Ch.we[3] && (this.y -= 15),
            Ch.we[2] > t.y && Ch.we[3] > h.y && (this.y += 15))
          : (this.y = Ch.we[3]));
    const i = Math.round((Ch.we[2] - Ch.we[3]) / 5);
    (this.x !== Ch.we[0] && this.y + this.dr * 5 >= Ch.we[2]) ||
      this.dr === i ||
      (Math.abs(i - this.dr) > 3 || (this.dr = i),
      this.dr > i && (this.dr -= 3),
      i > this.dr && (this.dr += 3),
      t.y > Ch.we[2] && h.y > Ch.we[3] && (this.dr += 3),
      Ch.we[2] > t.y && Ch.we[3] > h.y && (this.dr -= 3)),
      (this.y = h.y),
      (this.dr = (t.y - h.y) / 5),
      this.le === 1 &&
        ((this.x = Ch.we[0]),
        (this.y = Ch.we[2]),
        (this.dr = (Ch.we[3] - Ch.we[2]) / 5));
  }
  be() {
    (this.x = Ch.we[0]), (this.y = Ch.we[3]), (this.dr = -27), (this.Me = 0);
  }
}
const Fh = { parent: Oh, Xe: () => new Ph() };
class Bh extends ph {
  constructor() {
    super(Dh),
      (this.Me = 0),
      (this.wr = Ih),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -999),
      (this.Is = 0);
  }
  he() {
    (this.x = Ch.we[1]), (this.y = Ch.we[3]), (this.dr = -27), (this.Me = 0);
  }
  re() {
    const t = Be.ke(Eh),
      h = Be.ke(jh);
    this.x !== Ch.we[1] &&
      (Math.abs(this.x - Ch.we[1]) > 15
        ? this.x > Ch.we[1]
          ? (this.x -= 15)
          : (this.x += 15)
        : (this.x = Ch.we[1])),
      this.y !== Ch.we[3] &&
        (Math.abs(this.y - Ch.we[3]) > 15
          ? this.y > Ch.we[3]
            ? (this.y -= 15)
            : (this.y += 15)
          : (this.y = Ch.we[3]));
    const i = Math.ceil((Ch.we[2] - Ch.we[3]) / 5);
    (this.x === Ch.we[1] || Ch.we[2] > this.y + this.dr * 5) &&
      this.dr !== i &&
      (Math.abs(i - this.dr) > 3 || (this.dr = i),
      this.dr > i && (this.dr -= 3),
      i > this.dr && (this.dr += 3)),
      (this.y = h.y),
      (this.dr = (t.y - h.y) / 5),
      this.le === 1 &&
        ((this.x = Ch.we[1]),
        (this.y = Ch.we[3]),
        (this.dr = (Ch.we[2] - Ch.we[3]) / 5));
  }
}
const Dh = { parent: Oh, Xe: () => new Bh() };
function Kh(t, h = 0, i = 0) {
  if (t.wr === void 0) return;
  const s = Be.ke(Fh),
    a = Be.ke(Dh);
  let r = 0,
    e = 0,
    c = t.za,
    n = t.Za,
    f = s.x - t.x + 1 - h,
    o = Ch.we[2] - t.y + 1 - i,
    d = t.x + c - a.x - 1,
    m = t.y + n - Ch.we[3] - 1;
  f > 0 && (r += f),
    o > 0 && (e += o),
    d > 0 && (c -= d),
    m > 0 && (n -= m),
    (c = Math.round(c)),
    (n = Math.round(n)),
    (r = Math.round(r)),
    (e = Math.round(e)),
    c + h > 0 &&
      n + i > 0 &&
      c > r &&
      n > e &&
      mh.pa(t.wr, t.Lr, r, e, c - r + h, n - e + i, t.x + r - h, t.y + e - i);
}
class Gh extends Wh {
  constructor(t) {
    super(t),
      (this.Te = 0),
      (this.reduce = 0),
      this.Hr.set(Vr, () => this.Le()),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 0);
  }
  he() {
    this.Te = 6;
  }
  Le() {
    this.Se();
  }
  Se() {
    const t = Be.ke(xa);
    t !== void 0 &&
      ((this.reduce = 0),
      4 > t.Ce
        ? t.Ie ||
          ((Ch.Re += this.Te),
          3 > this.Te || (this.Te = 2),
          5 > this.Te || (this.Te = 3),
          t.je())
        : 60 > Ch.ye
        ? (30 > Ch.ye || Ch.Re++, t.je())
        : ((Ch.Re += this.Te),
          3 > this.Te || (this.Te = 2),
          5 > this.Te || (this.Te = 3),
          t.je()));
  }
}
class Vh extends Gh {
  constructor() {
    super(qh),
      (this.Ee = 0),
      (this.Pe = 9),
      (this.dir = 0),
      (this.height = 25),
      (this.Fe = 0),
      (this.Be = 0),
      (this.De = 0),
      (this.Ke = 3),
      (this.active = 0),
      (this.Ge = 0),
      (this.Ve = 0),
      (this.Ue = 0),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -1),
      (this.Is = 0),
      (this.Ba[0] = () => this.qe());
  }
  he() {
    (this.Ee = 0),
      (this.Pe = 9),
      (this.dir = 0),
      (this.height = 25),
      (this.Fe = 4),
      (this.Be = 0),
      (this.De = 0),
      (this.Ke = 3),
      (this.active = 0),
      (this.Ge = 0),
      (this.Fa[0] = 1),
      (this.dir = dh._s(0, 2)),
      (this.Te = 6);
  }
  qe() {
    (this.active = 1),
      (this.Ee = 1),
      (this.dir !== 1 && this.dir !== 3) || (this.wr = wh),
      (this.dir !== 0 && this.dir !== 2) || (this.wr = kh),
      (this.dir !== 0 && this.dir !== 2) || (this.x = Ch.we[0]),
      this.dir === 3 && (this.x = Ch.we[0] - this.za),
      this.dir === 1 && (this.x = Ch.we[1]),
      this.dir === 0 && (this.y = Ch.we[3]),
      (this.dir !== 1 && this.dir !== 3) || (this.y = Ch.we[2]),
      this.dir === 2 && (this.y = Ch.we[2] - this.Za),
      (this.Ve = this.y),
      (this.Ue = this.x),
      this.Pe > 4 && Lh.We(kt);
  }
  rt() {
    if (this.active === 1)
      if ((this.Pe--, this.Pe > 0)) {
        let t = 0,
          h = 0,
          i = 0,
          s = 0;
        this.dir === 0 &&
          ((t = Ch.we[0] + 8),
          (h = Ch.we[1] - 3),
          (i = Ch.we[3] - 3),
          (s = Ch.we[3] - this.height)),
          this.dir === 1 &&
            ((t = Ch.we[1] - this.height),
            (h = Ch.we[1] - 3),
            (i = Ch.we[2] + 8),
            (s = Ch.we[3] - 3)),
          this.dir === 2 &&
            ((t = Ch.we[0] + 8),
            (h = Ch.we[1] - 3),
            (i = Ch.we[2] + 6),
            (s = Ch.we[2] + 5 + this.height)),
          this.dir === 3 &&
            ((t = Ch.we[0] + 5 + this.height),
            (h = Ch.we[0] + 8),
            (i = Ch.we[2] + 8),
            (s = Ch.we[3] - 3)),
          mh.Xa(t, i, h, s, 16711680, 1);
      } else Kh(this), this.Ee === 1 && (this.Ee = 2);
    if (this.Ee === 2) {
      if (
        (this.Ge === 0 && Lh.We(Kt),
        0 > this.Ge ||
          this.Ge > 2 ||
          (this.dir === 0 && (this.y -= Math.floor(this.height / 3)),
          this.dir === 1 && (this.x -= Math.floor(this.height / 3)),
          this.dir === 2 && (this.y += Math.floor(this.height / 3)),
          this.dir === 3 && (this.x += Math.floor(this.height / 3))),
        this.Ge === 3 &&
          (this.dir === 0 && (this.Be -= Math.floor(this.height / 5)),
          this.dir === 1 && (this.De -= Math.floor(this.height / 5)),
          this.dir === 2 && (this.Be += Math.floor(this.height / 5)),
          this.dir === 3 && (this.De += Math.floor(this.height / 5))),
        this.Ge === 4 && ((this.De = 0), (this.Be = 0)),
        this.Fe >= 0 && this.Ge >= 4 && 8 >= this.Ge)
      ) {
        let t = dh.Ns(this.Ke) - dh.Ns(this.Ke),
          h = dh.Ns(this.Ke) - dh.Ns(this.Ke);
        this.Ke > 1 && this.Ke--,
          this.Ge === 9 && (t = 0),
          this.Ge === 9 && (h = 0),
          this.dir === 0 &&
            ((this.y = this.Ve - this.height + t), (this.x = this.Ue + h)),
          this.dir === 1 &&
            ((this.y = this.Ve + t), (this.x = this.Ue - this.height + h)),
          this.dir === 2 &&
            ((this.y = this.Ve + this.height + t), (this.x = this.Ue + h)),
          this.dir === 3 &&
            ((this.y = this.Ve + t), (this.x = this.Ue + this.height + h));
      }
      9 + this.Fe > this.Ge ||
        (this.dir === 0 &&
          ((this.y += Math.floor(this.height / 4)),
          this.y > this.Ve && Be.He(this)),
        this.dir === 1 &&
          ((this.x += Math.floor(this.height / 4)),
          this.x > this.Ue && Be.He(this)),
        this.dir === 2 &&
          ((this.y -= Math.floor(this.height / 4)),
          this.Ve > this.y && Be.He(this)),
        this.dir === 3 &&
          ((this.x -= Math.floor(this.height / 4)),
          this.Ue > this.x && Be.He(this))),
        this.Ge++;
    }
  }
}
const Uh = { Xe: () => new Gh(Uh) },
  qh = { parent: Uh, Xe: () => new Vh() },
  Nh = {
    Zs: [{ aa: 1, ta: 788, ha: 340, ia: 200, sa: 10, ra: 0, ea: 0 }],
    Vr: 200,
    Ur: 10,
    qr: 5,
    $r: 3,
    Nr: 195,
    Qr: 7,
    ii: 0,
    si: 0,
  };
class $h extends Gh {
  constructor() {
    super(Qh),
      (this.wr = Nh),
      (this.visible = 1),
      (this.Ea = 1),
      (this.Mh = -1),
      (this.Is = 0);
  }
}
const Qh = { parent: Uh, Xe: () => new $h() },
  Jh = {
    Zs: [{ aa: 0, ta: 0, ha: 964, ia: 124, sa: 38, ra: 0, ea: 0 }],
    Vr: 124,
    Ur: 38,
    qr: 3,
    $r: 4,
    Nr: 120,
    Qr: 33,
    ii: 0,
    si: 0,
  },
  _h = {
    Zs: [
      { aa: 0, ta: 126, ha: 964, ia: 36, sa: 38, ra: 0, ea: 0 },
      { aa: 0, ta: 164, ha: 964, ia: 36, sa: 38, ra: 0, ea: 0 },
      { aa: 0, ta: 202, ha: 964, ia: 36, sa: 38, ra: 0, ea: 0 },
      { aa: 0, ta: 240, ha: 964, ia: 36, sa: 38, ra: 0, ea: 0 },
      { aa: 0, ta: 278, ha: 964, ia: 36, sa: 38, ra: 0, ea: 0 },
      { aa: 0, ta: 316, ha: 964, ia: 36, sa: 38, ra: 0, ea: 0 },
      { aa: 0, ta: 354, ha: 964, ia: 36, sa: 38, ra: 0, ea: 0 },
      { aa: 0, ta: 392, ha: 964, ia: 36, sa: 38, ra: 0, ea: 0 },
      { aa: 0, ta: 430, ha: 964, ia: 36, sa: 38, ra: 0, ea: 0 },
      { aa: 0, ta: 468, ha: 964, ia: 36, sa: 38, ra: 0, ea: 0 },
    ],
    Vr: 36,
    Ur: 38,
    qr: 3,
    $r: 4,
    Nr: 32,
    Qr: 33,
    ii: 0,
    si: 0,
  };
class zh extends Wh {
  constructor() {
    super(Zh),
      (this.Ne = 0),
      (this.$e = 0),
      (this.Qe = 0),
      (this.Je = 0),
      (this._e = 0),
      (this.negative = 0),
      (this.ze = 0),
      (this.Ze = 0),
      (this.tc = 0),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -2002),
      (this.Is = 0),
      (this.Ba[0] = () => this.qe()),
      (this.Ba[2] = () => this.hc());
  }
  he() {
    (this.Ne = Ch.ac[Ch.rc].sc),
      (this.$e = this.Ne / Ch.ec[Ch.rc]),
      (this.Qe = Ch.cc[Ch.rc]),
      (this.Je = Ch.cc[Ch.rc]),
      (this._e = Ch.ec[Ch.rc]),
      (this.negative = 0),
      (this.ze = 0),
      (this.Ze = Ch.nc),
      (this.Fa[0] = 1),
      this.Ze !== 0 && ((this.Ir = -4), (this.Ga = 0.5), (this.Va = 270)),
      (this.tc = 1);
  }
  qe() {
    this.Qe > this.Je - this.Ze
      ? (this.Qe -= this.Ze / 15)
      : (this.Qe = this.Je - this.Ze),
      this.negative === 0 && 0 > this.Qe && (this.Qe = 0),
      (this.Fa[0] = 2);
  }
  hc() {
    Be.He(this);
  }
  rt() {
    let t,
      h = this.Ze;
    if (0 > h) (h = 0), (t = 0);
    else {
      t = 0;
      let i = 10;
      if (h >= i) for (; h >= i; ) t++, (i *= 10);
    }
    let i = h,
      s = [];
    for (let a = t; a >= 0; a--)
      (s[a] = Math.floor(i / Math.pow(10, a))), (i -= s[a] * Math.pow(10, a));
    if (h > 0) {
      this.tc === 1 &&
        (mh.la(
          this.x - 1,
          this.Qa + 7,
          this.x + Math.round(Ch.ec[Ch.rc] * this.$e + 1),
          this.Qa + 21,
          0,
          1
        ),
        mh.la(
          this.x,
          this.Qa + 8,
          this.x + Math.round(Ch.ec[Ch.rc] * this.$e),
          this.Qa + 20,
          4210752,
          1
        ),
        this.Qe > 0 &&
          mh.la(
            this.x,
            this.Qa + 8,
            Math.round(this.x + this.Qe * this.$e),
            this.Qa + 20,
            65280,
            1
          ));
      for (let h = t; h >= 0; h--)
        mh.Wa(
          _h,
          s[h],
          this.Ne > 120
            ? this.x - 30 + this.Ne / 2 - h * 32 + t * 16
            : this.x + 30 - h * 32 + t * 16,
          this.y - 28,
          1,
          1,
          0,
          16711680,
          1
        );
    }
    h === 0 &&
      this.ze === 0 &&
      mh.Wa(Jh, 0, this.x - 10, this.y - 16, 1, 1, 0, 12632256, 1),
      this.y > this.Qa && ((this.y = this.Qa), (this.Ir = 0), (this.Ga = 0));
  }
}
const Zh = { Xe: () => new zh() },
  ti = {
    Zs: [{ aa: 0, ta: 642, ha: 432, ia: 165, sa: 165, ra: 0, ea: 0 }],
    Vr: 165,
    Ur: 165,
    qr: 0,
    $r: 0,
    Nr: 164,
    Qr: 164,
    ii: 0,
    si: 0,
  };
class hi extends Wh {
  constructor() {
    super(ii),
      (this.fc = 0),
      (this.oc = 0),
      (this.dc = 0),
      (this.mc = 0),
      (this.wr = ti),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 0);
  }
  he() {
    (this.fc = this.x), (this.oc = this.y), (this.dc = 20), (this.mc = 310);
  }
  st() {
    (this.x = this.fc), (this.y = this.oc);
    const t = this.za,
      h = this.Za,
      i = Be.ke(Vr);
    this.x + 4 > i.x &&
      (this.x > this.dc
        ? ((this.fc -= 0.5), (this.x -= 0.5), this.gc())
        : ((this.x = this.dc), (this.fc = this.dc)),
      Be.vc(
        Vr,
        (t) => {
          t.x = Math.ceil(this.x + 5);
        },
        0
      )),
      this.y + 4 > i.y &&
        Be.vc(
          Vr,
          (t) => {
            t.y = this.y + 4;
          },
          0
        ),
      i.x > this.x + t - 16 &&
        Be.vc(
          Vr,
          (h) => {
            h.x = this.x + t - 16;
          },
          0
        ),
      i.y > this.y + h - 16 &&
        (this.mc > this.y &&
          this.x == this.dc &&
          ((this.oc += 0.5), (this.y += 0.5), this.gc()),
        Be.vc(
          Vr,
          (t) => {
            t.y = Math.floor(this.y + h - 17);
          },
          0
        ));
  }
  gc() {
    (this.x = this.fc + dh.Ns(1) - dh.Ns(1)),
      (this.y = this.oc + dh.Ns(1) - dh.Ns(1));
  }
}
const ii = { Xe: () => new hi() },
  si = {
    Zs: [
      { aa: 1, ta: 564, ha: 276, ia: 110, sa: 42, ra: 0, ea: 0 },
      { aa: 1, ta: 676, ha: 276, ia: 110, sa: 42, ra: 0, ea: 0 },
    ],
    Vr: 110,
    Ur: 42,
    qr: 3,
    $r: 3,
    Nr: 105,
    Qr: 38,
    ii: 0,
    si: 0,
  };
class ai extends Wh {
  constructor(t) {
    super(t),
      (this.wr = si),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 2),
      (this.Is = 0);
  }
  he() {
    this.cr = 0;
  }
}
class ri extends ai {
  constructor() {
    super(ci),
      (this.wr = si),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 2),
      (this.Is = 0);
  }
  st() {
    (this.Lr = 0),
      Ch.bc[0] === 0 &&
        (Ch.uc === 0 && Ch.lc === 0 && (this.Lr = 1),
        Ch.Xc === 0 &&
          Be.vc(
            Vr,
            (t) => {
              (t.x = this.x + 8), (t.y = this.y + 14);
            },
            0
          ));
  }
}
const ei = { Xe: () => new ai(ei) },
  ci = { parent: ei, Xe: () => new ri() },
  ni = {
    Zs: [{ aa: 1, ta: 826, ha: 102, ia: 14, sa: 44, ra: 0, ea: 0 }],
    Vr: 14,
    Ur: 44,
    qr: 5,
    $r: 6,
    Nr: 8,
    Qr: 37,
    ii: 2,
    si: 2,
  };
class fi extends Gh {
  constructor() {
    super(oi),
      (this.Yc = 0),
      (this.Hc = 0),
      (this.terminate = 0),
      (this.wr = ni),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -20),
      (this.Is = 0);
  }
  he() {
    (this.y = 270),
      (this.x = -10),
      (this.Yc = 0),
      (this.Hc = 0),
      (this.terminate = 0),
      (this.Te = 2);
  }
  st() {
    (this.Hc = 1),
      this.Yc++,
      (this.x = -30 + Math.abs(Math.sin(this.Yc / 9) * 105)),
      64 > this.x || (this.Yc -= 0.72),
      10 > this.x && (this.Hc = 0),
      this.x > -8 || (this.terminate === 1 && Be.He(this));
  }
  Le() {
    Be.ke(xa).Ie === 0 &&
      (60 > Ch.ye || Ch.Re++,
      Be.vc(xa, (t) => {
        t.je();
      }),
      1 > Ch.ye && (Ch.ye = 1));
  }
}
const oi = { parent: Uh, Xe: () => new fi() };
class di extends Gh {
  constructor() {
    super(mi),
      (this.Wc = 0),
      (this.fc = 0),
      (this.Oc = 0),
      (this.oc = 0),
      (this.Ee = 0),
      (this.active = 0),
      (this.Ac = 0),
      (this.terminate = 0),
      (this.wr = ni),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -20),
      (this.Is = 0),
      (this.Ba[0] = () => this.qe());
  }
  he() {
    (this.Wc = 0),
      (this.fc = 0),
      (this.Oc = 10),
      (this.Ee = 1),
      (this.active = 0),
      (this.Ac = -8),
      (this.Fa[0] = 1),
      (this.terminate = 0),
      (this.Te = 1);
  }
  qe() {
    (this.oc = 440),
      this.Wc === 0 && ((this.fc = 140), (this.Oc = 10)),
      this.Wc === 1 && ((this.fc = 300), (this.Oc = 170)),
      this.Wc === 2 && ((this.fc = 450), (this.Oc = 320)),
      this.Wc === 3 && ((this.Oc = 490), (this.fc = 620)),
      (this.active = 1);
  }
  st() {
    if (this.active === 1) {
      if (
        (this.Ee === 1 &&
          ((this.x = this.fc), (this.y = 480), (this.Ir = -10), (this.Ee = 2)),
        this.Ee === 2 &&
          (this.y > this.oc ||
            ((this.Ir = 0), (this.Sr = this.Ac), (this.Ee = 3))),
        this.Ee === 3)
      ) {
        let t = 0;
        0 > this.Sr && (this.x > this.Oc || (t = 1)),
          this.Sr > 0 && (this.Oc > this.x || (t = 1)),
          t === 1 && ((this.Sr = 0), (this.Ir = 10), (this.Ee = 4));
      }
      this.Ee === 4 &&
        (480 > this.y ||
          ((this.speed = 0),
          (this.Ee = 1),
          this.terminate === 1 && Be.He(this)));
    }
  }
  Le() {
    Be.ke(xa).Ie === 0 &&
      (Be.vc(xa, (t) => {
        t.je();
      }),
      1 > Ch.ye && (Ch.ye = 1));
  }
}
const mi = { parent: Uh, Xe: () => new di() };
class gi extends Wh {
  constructor() {
    super(vi),
      (this.Ba[0] = () => this.qe()),
      (this.Ba[1] = () => this.xc()),
      (this.Ba[2] = () => this.hc()),
      (this.Ba[3] = () => this.Mc()),
      (this.Ba[4] = () => this.wc()),
      (this.Ba[5] = () => this.kc());
  }
  he() {
    if (Be.Tc(oi) || Be.Tc(mi)) return void Be.He(this);
    let t = 0;
    const h = Be.ke(fr);
    if (h === void 0) throw Error("sansb not found");
    h.Lc === 14 && (t = 1),
      h.Lc === 15 && (t = 1),
      h.Lc === 16 && (t = 2),
      h.Lc === 17 && (t = 2),
      23 > h.Lc
        ? (t !== 2 && (this.Fa[0] = 1),
          t !== 1 &&
            ((this.Fa[1] = 3),
            (this.Fa[2] = 20),
            (this.Fa[3] = 3),
            (this.Fa[4] = 20)),
          (this.Fa[5] = 50))
        : Be.He(this);
  }
  qe() {
    Be.Sc(-20, -20, oi);
  }
  xc() {
    let t = Be.Sc(-20, -20, mi);
    (t.Wc = 0), (t.Ac = -5);
  }
  hc() {
    let t = Be.Sc(-20, -20, mi);
    (t.Wc = 1), (t.Ac = -5);
  }
  Mc() {
    let t = Be.Sc(-20, -20, mi);
    (t.Wc = 2), (t.Ac = -5);
  }
  wc() {
    let t = Be.Sc(-20, -20, mi);
    (t.Wc = 3), (t.Ac = -5), Be.He(this);
  }
  kc() {
    Be.He(this);
  }
}
const vi = { Xe: () => new gi() },
  bi = {};
class ui extends Wh {
  constructor() {
    super(li),
      (this.Ee = 0),
      (this.on = 0),
      (this.wr = si),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 2),
      (this.Is = 0),
      this.Hr.set(Vr, () => this.Le());
  }
  he() {
    (this.Ee = 0), (this.on = 0);
  }
  st() {
    this.on === 1
      ? ((this.Lr = 1),
        C.J.z &&
          this.Ee === 0 &&
          ((this.Ee = 1),
          Be.vc(xa, (t) => {
            t.Cc = 1;
          }),
          Be.vc(Vr, (t) => {
            t.Ic = -1;
          })))
      : (this.Lr = 0),
      (this.on = 0);
  }
  Le() {
    this.on = 1;
  }
}
const li = { Xe: () => new ui() },
  Xi = {
    Zs: [{ aa: 1, ta: 799, ha: 250, ia: 26, sa: 29, ra: 0, ea: 0 }],
    Vr: 26,
    Ur: 29,
    qr: 0,
    $r: 0,
    Nr: 25,
    Qr: 28,
    ii: 13,
    si: 14,
  };
class Yi extends Wh {
  constructor() {
    super(Hi),
      (this.Yc = 0),
      (this.wr = Xi),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 6),
      (this.Is = 0);
  }
  he() {
    (this.ir = 1),
      (this.nr = 0.1),
      (this.dr = 0.1),
      (this.Yc = 0),
      (this.Ir = -1),
      (this.Ga = -0.04);
  }
  st() {
    (this.Sr = 2),
      this.Yc++,
      (this.x += Math.sin(this.Yc / 4)),
      (this.y += Math.cos(this.Yc / 4)),
      1 > this.nr && (this.nr += 0.04),
      1 > this.dr && (this.dr += 0.04),
      this.Yc > 60 && ((this.ir -= 0.1), 0.1 > this.ir && Be.He(this));
  }
}
const Hi = { Xe: () => new Yi() };
class Wi extends Wh {
  constructor() {
    super(pi),
      (this.lock = 0),
      (this.Rc = 0),
      (this.jc = 0),
      (this.Yc = 0),
      (this.yc = 0),
      (this.Ec = 0),
      (this.Pc = 0),
      (this.Fc = 0),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 0);
  }
  he() {
    (this.lock = 0),
      (this.Rc = 5),
      (this.jc = 50),
      (this.yc = 0),
      (this.Ec = 0),
      (this.Yc = 0),
      (this.Pc = 0),
      (this.Fc = 0);
  }
  ie() {
    this.lock === 1 &&
      Be.ke(Vr).Bc === 1 &&
      Be.vc(
        Vr,
        (t) => {
          (t.Bc = 2), (t.Ir = 0);
        },
        0
      ),
      (this.lock = 0);
  }
  rt() {
    this.Yc++,
      this.Ec !== 0 && (this.Sr = Math.cos(this.yc * this.Yc) * this.Ec),
      mh.Xa(
        this.x - this.jc,
        this.y,
        this.x + this.jc,
        this.y + 6,
        16777215,
        1
      ),
      mh.Xa(
        this.x - this.jc,
        this.y + 2,
        this.x + this.jc,
        this.y - 4,
        32768,
        1
      ),
      this.Er(
        this.x - this.jc + 2,
        this.y + 2,
        this.x + this.jc - 2,
        this.y - 4,
        Vr
      )
        ? 0 > Be.ke(Vr).Ir ||
          Be.ke(Vr).y > this.y - 11 ||
          ((this.lock = 1),
          Be.vc(Vr, (t) => {
            (t.y = this.y - 16), (t.Ir = 0), (t.Bc = 1);
          }))
        : (this.lock === 1 &&
            Be.ke(Vr).Bc === 1 &&
            Be.vc(Vr, (t) => {
              (t.Ir = 0), (t.Bc = 2);
            }),
          (this.lock = 0)),
      this.lock === 1 &&
        (Be.vc(Vr, (t) => {
          (t.x += this.Sr), (t.y += this.Ir);
        }),
        Be.ke(Vr).x < Ch.we[0] + 5 &&
          Be.vc(Vr, (t) => {
            t.x = Ch.we[0] + 5;
          }),
        Be.ke(Vr).x > Ch.we[1] - 16 &&
          Be.vc(Vr, (t) => {
            t.x = Ch.we[1] - 16;
          })),
      0 - this.jc > this.x && 0 > this.Sr && Be.He(this),
      this.x > 640 + this.jc && this.Sr > 0 && Be.He(this),
      this.Ir > 0 && this.y > Ch.we[3] && Be.He(this),
      this.Pc === 1 &&
        (this.Fc++,
        5 > this.Fc || this.Fc > 20 || (this.Sr += 0.25),
        this.Fc === 21 && (this.Sr = 3),
        this.x > Ch.we[1] - this.jc && this.Sr > 0 && (this.Sr *= -1),
        Ch.we[0] + this.jc > this.x && 0 > this.Sr && (this.Sr *= -1));
  }
}
const pi = { Xe: () => new Wi() },
  Oi = {
    Zs: [{ aa: 1, ta: 826, ha: 148, ia: 10, sa: 50, ra: 0, ea: 0 }],
    Vr: 10,
    Ur: 50,
    qr: 1,
    $r: 3,
    Nr: 8,
    Qr: 46,
    ii: 0,
    si: 0,
  };
class Ai extends Gh {
  constructor() {
    super(xi),
      (this.wr = Oi),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -1),
      (this.Is = 0);
  }
  st() {
    0 > this.x && 0 > this.Sr && Be.He(this),
      this.x > 640 && this.Sr > 0 && Be.He(this);
  }
  rt() {
    Kh(this);
  }
}
const xi = { parent: Uh, Xe: () => new Ai() },
  Mi = {
    Zs: [{ aa: 1, ta: 821, ha: 242, ia: 10, sa: 6, ra: 0, ea: 0 }],
    Vr: 10,
    Ur: 6,
    qr: 0,
    $r: 0,
    Nr: 9,
    Qr: 5,
    ii: 0,
    si: 0,
  },
  wi = {
    Zs: [{ aa: 1, ta: 987, ha: 283, ia: 10, sa: 6, ra: 0, ea: 0 }],
    Vr: 10,
    Ur: 6,
    qr: 0,
    $r: 0,
    Nr: 9,
    Qr: 5,
    ii: 0,
    si: 0,
  };
class ki extends Gh {
  constructor() {
    super(Ti),
      (this.type = 0),
      (this.yc = 0),
      (this.Ec = 0),
      (this.Dc = 0),
      (this.Yc = 0),
      (this.Kc = 0),
      (this.width = 0),
      (this.Gc = 0),
      (this.Vc = 0),
      (this.Uc = 0),
      (this.wr = wi),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -1),
      (this.Is = 0),
      this.Hr.delete(Vr);
  }
  he() {
    (this.type = 0),
      (this.yc = 0),
      (this.Ec = 0),
      (this.Dc = 0),
      (this.Yc = 0),
      (this.Sr = 0),
      (this.Te = 6);
  }
  je() {
    if (this.type !== 1) this.Se();
    else {
      const t = Be.ke(Vr);
      (Math.abs(t.x - t.Ja) > 0.01 || Math.abs(t.y - t._a) > 0.01) && this.Se();
    }
  }
  qc() {
    (this.width = 0), (this.Uc = 0), (this.Gc = 0), (this.Vc = 0);
    let t = Ch.we[1] - this.x;
    t > 0 && (this.width = t);
    let h = this.x - (Ch.we[0] + 5);
    0 > h && ((this.Uc = -h), (this.width = 10 + h)),
      this.width > 10 && (this.width = 10),
      9 > this.width &&
        ((this.Gc = 8 - this.width), 1 > this.Gc && (this.Gc = 0)),
      this.Uc > 1 &&
        ((this.Vc = this.Uc - 2), (this.Gc = 0), this.Vc > 8 && (this.Vc = 0));
  }
  rt() {
    if (
      (this.Yc++,
      (this.y = this.Kc + Math.sin(this.Yc * this.Ec) * this.yc),
      this.qc(),
      this.width > 0)
    ) {
      let t,
        h,
        i = this.type === 1 ? 65535 : 16777215;
      this.type === 2
        ? ((t = Ch.we[2] + 6), (h = this.y))
        : ((t = this.y), (h = Ch.we[3] - 6)),
        mh.Oa(
          wi,
          0,
          this.Uc,
          0,
          this.width,
          6,
          this.x + this.Uc,
          t,
          1,
          1,
          i,
          1
        ),
        mh.la(this.x + 2 + this.Vc, t + 5, this.x + 8 - this.Gc, h, i, 1),
        this.width > 0 &&
          this.Er(this.x + 2 + this.Vc, t + 5, this.x + 8 - this.Gc, h, Vr) &&
          this.je(),
        mh.Oa(
          Mi,
          0,
          this.Uc,
          0,
          this.width,
          6,
          this.x + this.Uc,
          h,
          1,
          1,
          i,
          1
        );
    }
    0 > this.x && 0 > this.Sr && Be.He(this),
      this.x > 640 && this.Sr > 0 && Be.He(this);
  }
}
const Ti = { parent: Uh, Xe: () => new ki() };
class Li extends Wh {
  constructor() {
    super(Si),
      (this.Nc = 0),
      (this.$c = 0),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 0),
      (this.Ba[0] = () => this.qe());
  }
  he() {
    (this.Nc = 10),
      (this.Fa[0] = 1),
      (this.$c = 0),
      Be.vc(Si, (t) => {
        t.$c++, t.gc();
      }),
      (this.$c = 1);
    const t = Be.ph.Es();
    (t.Xs = 0), (t.Ys = 0);
  }
  qe() {
    const t = Be.ph.Es();
    (t.Xs = dh._s(-1, 1) * this.Nc),
      (t.Ys = dh._s(-1, 1) * this.Nc),
      this.Nc--,
      this.Nc > 0 || Be.He(this),
      (this.Fa[0] = 1);
  }
  gc() {
    2 > this.$c || Be.He(this);
  }
}
const Si = { Xe: () => new Li() },
  Ci = {
    Zs: [
      { aa: 1, ta: 928, ha: 204, ia: 16, sa: 16, ra: 0, ea: 0 },
      { aa: 1, ta: 928, ha: 222, ia: 16, sa: 16, ra: 0, ea: 0 },
    ],
    Vr: 16,
    Ur: 16,
    qr: 0,
    $r: 0,
    Nr: 15,
    Qr: 15,
    ii: 0,
    si: 0,
  },
  Ii = {
    Zs: [
      { aa: 1, ta: 928, ha: 240, ia: 16, sa: 16, ra: 0, ea: 0 },
      { aa: 1, ta: 928, ha: 258, ia: 16, sa: 16, ra: 0, ea: 0 },
    ],
    Vr: 16,
    Ur: 16,
    qr: 0,
    $r: 0,
    Nr: 15,
    Qr: 15,
    ii: 0,
    si: 0,
  },
  Ri = {
    Zs: [
      { aa: 1, ta: 917, ha: 276, ia: 16, sa: 16, ra: 0, ea: 0 },
      { aa: 1, ta: 917, ha: 294, ia: 16, sa: 16, ra: 0, ea: 0 },
    ],
    Vr: 16,
    Ur: 16,
    qr: 0,
    $r: 0,
    Nr: 15,
    Qr: 15,
    ii: 0,
    si: 0,
  },
  ji = {
    Zs: [
      { aa: 1, ta: 969, ha: 283, ia: 16, sa: 16, ra: 0, ea: 0 },
      { aa: 1, ta: 969, ha: 301, ia: 16, sa: 16, ra: 0, ea: 0 },
    ],
    Vr: 16,
    Ur: 16,
    qr: 0,
    $r: 0,
    Nr: 15,
    Qr: 15,
    ii: 0,
    si: 0,
  },
  yi = {
    Zs: [
      { aa: 1, ta: 935, ha: 305, ia: 16, sa: 16, ra: 0, ea: 0 },
      { aa: 1, ta: 917, ha: 312, ia: 16, sa: 16, ra: 0, ea: 0 },
    ],
    Vr: 16,
    Ur: 16,
    qr: 0,
    $r: 0,
    Nr: 15,
    Qr: 15,
    ii: 0,
    si: 0,
  },
  Ei = {
    Zs: [
      { aa: 1, ta: 953, ha: 319, ia: 16, sa: 16, ra: 0, ea: 0 },
      { aa: 1, ta: 935, ha: 322, ia: 16, sa: 16, ra: 0, ea: 0 },
    ],
    Vr: 16,
    Ur: 16,
    qr: 0,
    $r: 0,
    Nr: 15,
    Qr: 15,
    ii: 0,
    si: 0,
  };
function Pi(t, h, i, s) {
  let a = Be.Sc(900, 900, pi);
  return (a.y = Ch.we[3] - t), (a.Sr = h), (a.x = 320 - i * h), (a.jc = s), a;
}
function Fi(t, h, i, s) {
  const a = Be.Sc(900, 900, Ti);
  return (
    (a.y = Ch.we[3] - t),
    (a.Sr = h),
    (a.type = s),
    (a.x = 320 - h * i),
    (a.Kc = a.y),
    a
  );
}
class Bi extends Wh {
  constructor() {
    super(Di),
      (this.Qc = 0),
      (this.level = 0),
      (this.Jc = 3),
      (this._c = 0),
      (this.zc = 0),
      (this.Zc = 6),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -50),
      (this.Is = 0),
      (this.Ba[0] = () => this.qe()),
      (this.Ba[1] = () => this.xc());
  }
  he() {
    (this.Qc = 0),
      (this.level = 0),
      (this.Jc = 3),
      (this._c = 0),
      (this.zc = 0),
      (this.Zc = 6),
      Be.vc(
        Oh,
        (t) => {
          t.le = 1;
        },
        1
      ),
      (Ch.border = -1),
      this.gc();
  }
  qe() {
    Be.vc(
      Oh,
      (t) => {
        t.visible = 1;
      },
      1
    ),
      Lh.We(Et),
      gh.Sa(),
      (this.Qc = 0),
      (Ch.we[3] = 385);
    let t = 0;
    if (
      (this.level === 0 &&
        ((t = dh._s(0, 1, 2, 3, 4)),
        this.Jc === t && (t = dh._s(0, 1, 2, 3, 4)),
        this.Jc === t && (t = dh._s(0, 1, 2, 3, 4))),
      this.level === 1 &&
        ((t = dh._s(5, 6, 7, 8)),
        this.Jc === t && (t = dh._s(5, 6, 7, 8)),
        this.Jc === t && (t = dh._s(5, 6, 7, 8))),
      this.level === 2 &&
        ((t = dh._s(0, 1, 2, 3, 4, 5, 6, 7, 8)),
        this.Jc === t && (t = dh._s(0, 1, 2, 3, 4, 5, 6, 7, 8)),
        this.Jc === t && (t = dh._s(0, 1, 2, 3, 4, 5, 6, 7, 8))),
      this.level === 3 &&
        ((t = 50),
        this.Jc === 50 && (t = 51),
        this.Jc === 51 && (t = 52),
        this.Jc === 52 && (t = 53),
        this.Jc === 53 && (t = 54)),
      (this.Jc = t),
      this.zc >= this.Zc)
    )
      return (
        3 > this.level && (Be.Tc(vi) || Be.Sc(0, 0, vi)),
        Be.vc(
          xa,
          (t) => {
            t.x = 320;
          },
          0
        ),
        Be.vc(
          fr,
          (t) => {
            t.tn = 0;
          },
          1
        ),
        Be.vc(
          Oh,
          (t) => {
            t.le = 0;
          },
          1
        ),
        (t = -1),
        (Ch.lc = 3),
        Be.vc(
          Vr,
          (t) => {
            (t.Ic = 1), (t.wr = Ci), (t.speed = 0);
          },
          1
        ),
        void Be.He(this)
      );
    if (
      (3 > this.level &&
        Be.vc(
          xa,
          (t) => {
            t.x = 100 + dh.Ns(440);
          },
          0
        ),
      this.zc++,
      t === 0 &&
        ((Ch.we[0] = 120),
        (Ch.we[1] = 520),
        (Ch.we[2] = Ch.we[3] - 110),
        Be.vc(
          Vr,
          (t) => {
            (t.x = Ch.we[0] + (Ch.we[1] - Ch.we[0]) / 2 - 5),
              (t.y = Ch.we[3] - 15),
              (t.Ic = 2),
              (t.wr = Ri),
              (t.speed = 0);
          },
          0
        ),
        Fi(45, 8, 25, 0),
        Fi(45, -8, 25, 0),
        Fi(45, 8, 27, 0),
        Fi(45, -8, 27, 0),
        Fi(45, 8, 29, 0),
        Fi(45, -8, 29, 0),
        Fi(45, 8, 31, 0),
        Fi(45, -8, 31, 0),
        Fi(100, 8, 33, 0),
        Fi(100, -8, 33, 0),
        (this.Fa[1] = 28)),
      t === 1 &&
        ((Ch.we[0] = 120),
        (Ch.we[1] = 520),
        (Ch.we[2] = Ch.we[3] - 110),
        Be.vc(
          Vr,
          (t) => {
            (t.x = Ch.we[0] + (Ch.we[1] - Ch.we[0]) / 2 - 5),
              (t.y = Ch.we[3] - 15),
              (t.Ic = 2),
              (t.wr = Ri),
              (t.speed = 0);
          },
          0
        ),
        Fi(100, 8, 25, 1),
        Fi(100, -8, 25, 1),
        Fi(20, 8, 34, 0),
        Fi(20, -8, 34, 0),
        Fi(100, 8, 38, 0),
        Fi(100, -8, 38, 0),
        (this.Fa[1] = 35)),
      t === 2)
    ) {
      (Ch.we[0] = 170),
        (Ch.we[1] = 470),
        (Ch.we[2] = Ch.we[3] - 110),
        Be.vc(
          Vr,
          (t) => {
            (t.x = Ch.we[0] + (Ch.we[1] - Ch.we[0]) / 2 - 5),
              (t.y = Ch.we[3] - 15),
              (t.Ic = 2),
              (t.wr = Ri),
              (t.speed = 0);
          },
          0
        );
      let t = 0;
      for (let h = 0; 7 > h; h++) {
        let i = dh._s(20, 30, 40),
          s = 0;
        h > 0 && (s = dh._s(-2, 0, 2)),
          Fi(i, 6 + s, 25 + h * 22 + t, 0),
          Fi(i, -6 + s, 25 + h * 22 + t, 0),
          Fi(i + 24, 6 + s, 25 + h * 22 + t, 2),
          Fi(i + 24, -6 + s, 25 + h * 22 + t, 2),
          i === 30 && (t += 5),
          i === 40 && (t += 10),
          i === 60 && (t += 20);
      }
      this.Fa[1] = 58;
    }
    if (t === 3) {
      (Ch.we[0] = 170),
        (Ch.we[1] = 470),
        (Ch.we[2] = Ch.we[3] - 110),
        Be.vc(
          Vr,
          (t) => {
            (t.x = Ch.we[0] + (Ch.we[1] - Ch.we[0]) / 2 - 5),
              (t.y = Ch.we[3] - 15),
              (t.Ic = 2),
              (t.wr = Ri),
              (t.speed = 0);
          },
          0
        );
      for (let t = 0; 8 > t; t++)
        Fi(15, 5, 25 + t * 25, 0),
          Fi(15, -5, 25 + t * 25, 0),
          Fi(40, 5, 25 + t * 25, 2),
          Fi(40, -5, 25 + t * 25, 2);
      this.Fa[1] = 52;
    }
    if (t === 4) {
      (Ch.we[0] = 120), (Ch.we[1] = 520);
      let t = dh._s(1, -1);
      Be.vc(
        Vr,
        (h) => {
          (h.x = t === 1 ? Ch.we[0] + 20 : Ch.we[1] - 20),
            (h.y = Ch.we[3] - 15),
            (h.Ic = 2),
            (h.wr = Ri),
            (h.speed = 0);
        },
        0
      ),
        (Ch.we[2] = Ch.we[3] - 110),
        Fi(55, -12 * t, 11, 0),
        Fi(55, -12 * t, 13, 0),
        Fi(55, -12 * t, 15, 0),
        Fi(55, -12 * t, 17, 0),
        Fi(55, -12 * t, 19, 0),
        Fi(55, -12 * t, 21, 0),
        Fi(55, -12 * t, 23, 0),
        Fi(55, -12 * t, 25, 0),
        Fi(55, -12 * t, 27, 0),
        Fi(55, -12 * t, 29, 0),
        Fi(55, -12 * t, 31, 0),
        Fi(15, -12 * t, 33, 0),
        Fi(15, -12 * t, 35, 0),
        Fi(15, -12 * t, 37, 0),
        Fi(15, -12 * t, 39, 0),
        Fi(15, -12 * t, 41, 0),
        Fi(15, -12 * t, 43, 0),
        Fi(15, -12 * t, 45, 0),
        Fi(15, -12 * t, 47, 0),
        Fi(15, -12 * t, 49, 0),
        Fi(15, -12 * t, 51, 0),
        (this.Fa[1] = 47);
    }
    if (t === 5) {
      (Ch.we[0] = 120),
        (Ch.we[1] = 520),
        (Ch.we[2] = Ch.we[3] - 110),
        Be.vc(
          Vr,
          (t) => {
            (t.x = Ch.we[0] + (Ch.we[1] - Ch.we[0]) / 2),
              (t.y = Ch.we[3] - 90),
              (t.Ic = 2),
              (t.wr = Ri),
              (t.speed = 0),
              (t.Ir = 1);
          },
          0
        );
      let t = dh._s(1, -1);
      Fi(75, 8 * t, 27, 2), Fi(65, -8 * t, 42, 0);
      let h = Pi(70, 0, 0, 20);
      (h.x += 8), (h = Pi(30, 0, 0, 20)), (h.x += 8);
      for (let i = 0; 30 > i; i++) Be.Sc(Ch.we[0] + i * 16, Ch.we[3] - 20, xi);
      this.Fa[1] = 45;
    }
    if (t === 6) {
      (Ch.we[0] = 240), (Ch.we[1] = 400), (Ch.we[2] = Ch.we[3] - 160);
      let t = Ch.we[0] + (Ch.we[1] - Ch.we[0]) / 2,
        h = Ch.we[2] + (Ch.we[3] - Ch.we[2]) / 2;
      Be.vc(
        Vr,
        (t) => {
          (t.x = Ch.we[0] + (Ch.we[1] - Ch.we[0]) / 2 - 8),
            (t.y = Ch.we[2] + (Ch.we[3] - Ch.we[2]) / 2 - 8),
            (t.Ic = 1),
            (t.wr = Ii),
            (t.speed = 0);
        },
        0
      );
      let i = dh._s(0, 1);
      if (i === 0) {
        let i = Be.Sc(0, 0, Nr);
        (i.hn = 90),
          (i.fc = Ch.we[0] - 50),
          (i.oc = h),
          (i.nr = 2),
          (i.dr = 2),
          (i = Be.Sc(640, 480, Nr)),
          (i.hn = -90),
          (i.fc = Ch.we[1] + 50),
          (i.oc = h),
          (i.nr = 2),
          (i.dr = 2),
          (i = Be.Sc(0, 0, Nr)),
          (i.hn = 0),
          (i.fc = t),
          (i.oc = Ch.we[2] - 60),
          (i.nr = 2),
          (i.dr = 2),
          (i = Be.Sc(640, 480, Nr)),
          (i.hn = 180),
          (i.fc = t),
          (i.oc = Ch.we[3] + 60),
          (i.nr = 2),
          (i.dr = 2),
          Be.vc(
            Nr,
            (t) => {
              (t.pause = 18 - this._c),
                (t.sn = 8),
                (t.x = t.fc),
                (t.y = t.oc),
                (t.sr = t.hn);
            },
            0
          );
      }
      if (i === 1) {
        let t = Be.Sc(0, 0, Nr);
        (t.hn = 45),
          (t.fc = Ch.we[0] - 50),
          (t.oc = Ch.we[2] - 50),
          (t.nr = 2),
          (t.dr = 2),
          (t = Be.Sc(640, 0, Nr)),
          (t.hn = -45),
          (t.fc = Ch.we[1] + 50),
          (t.oc = Ch.we[2] - 50),
          (t.nr = 2),
          (t.dr = 2),
          (t = Be.Sc(0, 480, Nr)),
          (t.hn = 135),
          (t.fc = Ch.we[0] - 50),
          (t.oc = Ch.we[3] + 50),
          (t.nr = 2),
          (t.dr = 2),
          (t = Be.Sc(640, 480, Nr)),
          (t.hn = -135),
          (t.fc = Ch.we[1] + 50),
          (t.oc = Ch.we[3] + 50),
          (t.nr = 2),
          (t.dr = 2),
          Be.vc(
            Nr,
            (t) => {
              (t.pause = 20 - this._c),
                (t.sn = 8),
                (t.x = t.fc),
                (t.y = t.oc),
                (t.sr = t.hn);
            },
            0
          );
      }
      this.Fa[1] = 37 - this._c;
    }
    if (t === 7) {
      (Ch.we[0] = 240), (Ch.we[1] = 400), (Ch.we[2] = Ch.we[3] - 160);
      let t = dh._s(-1, 1);
      Be.vc(
        Vr,
        (h) => {
          (h.x = Ch.we[0] + (Ch.we[1] - Ch.we[0]) / 2 - 8),
            (h.y = Ch.we[2] + (Ch.we[3] - Ch.we[2]) / 2 - 8),
            (h.Ic = 1),
            (h.wr = Ii),
            (h.speed = 0),
            t === -1 && (h.x = Ch.we[0] + 20),
            t === 1 && (h.x = Ch.we[1] - 20);
        },
        0
      ),
        t === -1 && (Ch.we[1] += 60),
        t === 1 && (Ch.we[0] -= 60);
      let h = dh._s(-1, 1);
      for (let i = 0; 16 > i; i++) {
        let s = Fi(105 - Math.sin(i / 3) * 28 * h, 10 * t, 16 + i * 2, 2);
        (s.Yc = i * 3),
          (s = Fi(60 - Math.sin(i / 3) * 28 * h, 10 * t, 16 + i * 2, 0)),
          (s.Yc = i * 3);
      }
      this.Fa[1] = 52;
    }
    if (t === 8) {
      (Ch.we[0] = 120), (Ch.we[1] = 520), (Ch.we[2] = Ch.we[3] - 110);
      let t = dh._s(1, -1);
      Be.vc(
        Vr,
        (h) => {
          (h.x = t === 1 ? Ch.we[1] - 40 : Ch.we[0] + 40),
            (h.y = Ch.we[3] - 15),
            (h.Ic = 2),
            (h.wr = Ri),
            (h.speed = 0);
        },
        0
      );
      for (let h = 0; 10 > h; h++)
        Fi(20, 4 * t, h * 19 - 5, 0), Fi(28, -4 * t, h * 19 - 5, 2);
      this.Fa[1] = 57;
    }
    if (t === 50) {
      (Ch.we[0] = 240), (Ch.we[1] = 400), (Ch.we[2] = Ch.we[3] - 160);
      let t = Ch.we[0] + (Ch.we[1] - Ch.we[0]) / 2;
      Be.vc(
        Vr,
        (h) => {
          (h.x = t - 8),
            (h.y = Ch.we[3] - 15),
            (h.Ic = 2),
            (h.wr = Ri),
            (h.speed = 0),
            (h.Ir = 1);
        },
        0
      );
      let h = Be.Sc(0, 0, qh);
      (h.dir = 0),
        (h.Pe = 18),
        (h.height = 50),
        (h = Be.Sc(0, 0, qh)),
        (h.dir = 2),
        (h.Pe = 18),
        (h.height = 50),
        (this.Fa[1] = 27);
    }
    if (t === 51) {
      (Ch.we[0] = 240),
        (Ch.we[1] = 400),
        (Ch.we[2] = Ch.we[3] - 160),
        Be.vc(
          Vr,
          (t) => {
            (t.x = Ch.we[0] + 15),
              (t.y = Ch.we[2] + 10),
              (t.Ic = 12),
              (t.wr = Ei),
              (t.speed = 0),
              (t.Ir = -2);
          },
          0
        );
      let t = Be.Sc(0, 0, qh);
      (t.dir = 2),
        (t.Pe = 19),
        (t.height = 50),
        (t = Be.Sc(0, 0, qh)),
        (t.dir = 3),
        (t.Pe = 19),
        (t.height = 50),
        (this.Fa[1] = 27);
    }
    if (t === 52) {
      (Ch.we[0] = 240),
        (Ch.we[1] = 400),
        (Ch.we[2] = Ch.we[3] - 160),
        Be.vc(
          Vr,
          (t) => {
            (t.x = Ch.we[1] - 15),
              (t.y = Ch.we[3] - 15),
              (t.speed = 0),
              (t.Ic = 11),
              (t.wr = yi),
              (t.Sr = 2);
          },
          0
        );
      let t = Be.Sc(0, 0, qh);
      (t.dir = 0),
        (t.Pe = 19),
        (t.height = 50),
        (t = Be.Sc(0, 0, qh)),
        (t.dir = 1),
        (t.Pe = 19),
        (t.height = 50),
        (this.Fa[1] = 27);
    }
    if (t === 53) {
      (Ch.we[0] = 240), (Ch.we[1] = 400), (Ch.we[2] = Ch.we[3] - 160);
      let t = Ch.we[2] + (Ch.we[3] - Ch.we[2]) / 2;
      Be.vc(
        Vr,
        (h) => {
          (h.x = Ch.we[0] + 10),
            (h.y = Ch.we[2] === t - 8 ? 1 : 0),
            (h.speed = 0),
            (h.Ic = 13),
            (h.wr = ji),
            (h.Sr = -2);
        },
        0
      );
      let h = Be.Sc(0, 0, qh);
      return (
        (h.dir = 3),
        (h.Pe = 19),
        (h.Fe = 10),
        (h.height = 50),
        (this.Fa[1] = 22),
        Be.vc(
          xa,
          (t) => {
            (t.x = 320), (t.Ce = 49), (t.Fa[5] = 20);
          },
          1
        ),
        void Be.He(this)
      );
    }
  }
  xc() {
    this.gc();
  }
  gc() {
    (this.Qc = 1),
      (this.Fa[0] = 12),
      this.level === 2 && (this.Fa[0] = 3),
      this.level === 3 && (this.Fa[0] = 3),
      gh.La(),
      Be.vc(
        qh,
        (t) => {
          Be.He(t);
        },
        1
      ),
      Be.vc(
        Si,
        (t) => {
          Be.He(t);
        },
        1
      ),
      Be.vc(
        Qh,
        (t) => {
          Be.He(t);
        },
        1
      ),
      Be.vc(
        xi,
        (t) => {
          Be.He(t);
        },
        1
      ),
      Be.vc(
        pi,
        (t) => {
          Be.He(t);
        },
        1
      ),
      Be.vc(
        Ti,
        (t) => {
          Be.He(t);
        },
        1
      ),
      Be.vc(
        Nr,
        (t) => {
          Be.He(t);
        },
        1
      ),
      this.Zc > this.zc || (Ch.border = 0),
      Lh.We(Et),
      Be.vc(
        Oh,
        (t) => {
          t.visible = 0;
        },
        1
      );
  }
  rt() {
    this.Qc && mh.la(-10, -10, 999, 999, 0, 1);
  }
}
const Di = { Xe: () => new Bi() },
  Ki = {
    Zs: [
      { aa: 1, ta: 948, ha: 0, ia: 26, sa: 110, ra: 0, ea: 0 },
      { aa: 1, ta: 976, ha: 0, ia: 26, sa: 110, ra: 0, ea: 0 },
      { aa: 1, ta: 948, ha: 112, ia: 26, sa: 110, ra: 0, ea: 0 },
      { aa: 1, ta: 976, ha: 112, ia: 26, sa: 110, ra: 0, ea: 0 },
      { aa: 1, ta: 754, ha: 102, ia: 26, sa: 110, ra: 0, ea: 0 },
      { aa: 1, ta: 782, ha: 102, ia: 26, sa: 110, ra: 0, ea: 0 },
    ],
    Vr: 26,
    Ur: 110,
    qr: 8,
    $r: 6,
    Nr: 23,
    Qr: 99,
    ii: 0,
    si: 0,
  };
class Gi extends Wh {
  constructor() {
    super(Vi),
      (this.wr = Ki),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -10),
      (this.Is = 0);
  }
  he() {
    this.cr = 0.5;
  }
  _r() {
    Be.He(this);
  }
}
const Vi = { Xe: () => new Gi() },
  Ui = {};
function qi(t) {
  t.an = Ch.cc[t.rn] - Ch.at - Ch.en + Ch.cn[t.rn] - t.nn;
}
const Ni = "8¼¤xØNüx°fú\t­©\fãÊó£Ìâû(",
  $i = "PÞðV(/w]¦©XQ9Ú³ôæÛ¼|J<",
  Qi = "­âMÎ@Hêâ",
  Ji = "MâWq>Üî\n+o ²+",
  _i = "áÆs)4Ã\\õ\0­íA#",
  zi = "àùD¹ßèÐÃCà¶÷yô7\bø";
function Zi() {
  let t = "";
  return (
    Ch.fn[22] === 0
      ? (t = c(" ÙÂÐØL÷\x000éÀñ%E(", Ni))
      : Ch.fn[22] === 2 && (t = c("'£.í¡ª+®&%£fïã÷l", Ni)),
    t
  );
}
const ts = {
    fontSize: 10,
    na: {
      " ": { oa: 50, da: 795, ma: 6, ga: 19, va: 6, fa: 0 },
      "!": { oa: 30, da: 837, ma: 2, ga: 15, va: 3, fa: 1 },
      '"': { oa: 7, da: 837, ma: 5, ga: 9, va: 6, fa: 1 },
      "#": { oa: 157, da: 774, ma: 9, ga: 15, va: 11, fa: 1 },
      $: { oa: 92, da: 774, ma: 8, ga: 17, va: 9, fa: 0 },
      "%": { oa: 44, da: 774, ma: 11, ga: 15, va: 11, fa: 0 },
      "&": { oa: 102, da: 774, ma: 9, ga: 15, va: 9, fa: 0 },
      "'": { oa: 55, da: 837, ma: 2, ga: 9, va: 6, fa: 2 },
      "(": { oa: 198, da: 816, ma: 4, ga: 19, va: 5, fa: 1 },
      ")": { oa: 180, da: 816, ma: 4, ga: 19, va: 5, fa: 0 },
      "*": { oa: 225, da: 816, ma: 6, ga: 10, va: 7, fa: 0 },
      "+": { oa: 163, da: 816, ma: 6, ga: 14, va: 8, fa: 1 },
      ",": { oa: 26, da: 837, ma: 2, ga: 17, va: 6, fa: 1 },
      "-": { oa: 233, da: 816, ma: 5, ga: 12, va: 8, fa: 1 },
      ".": { oa: 42, da: 837, ma: 2, ga: 15, va: 6, fa: 2 },
      "/": { oa: 172, da: 795, ma: 6, ga: 16, va: 7, fa: 0 },
      0: { oa: 122, da: 816, ma: 6, ga: 15, va: 8, fa: 1 },
      1: { oa: 26, da: 816, ma: 6, ga: 15, va: 8, fa: 1 },
      2: { oa: 146, da: 795, ma: 7, ga: 15, va: 8, fa: 0 },
      3: { oa: 34, da: 816, ma: 6, ga: 15, va: 8, fa: 1 },
      4: { oa: 110, da: 795, ma: 7, ga: 15, va: 8, fa: 0 },
      5: { oa: 82, da: 816, ma: 6, ga: 15, va: 8, fa: 1 },
      6: { oa: 42, da: 816, ma: 6, ga: 15, va: 8, fa: 1 },
      7: { oa: 119, da: 795, ma: 7, ga: 15, va: 8, fa: 1 },
      8: { oa: 18, da: 816, ma: 6, ga: 15, va: 8, fa: 1 },
      9: { oa: 146, da: 816, ma: 6, ga: 15, va: 8, fa: 1 },
      ":": { oa: 46, da: 837, ma: 2, ga: 14, va: 6, fa: 2 },
      ";": { oa: 2, da: 837, ma: 3, ga: 16, va: 6, fa: 1 },
      "<": { oa: 240, da: 816, ma: 4, ga: 14, va: 8, fa: 2 },
      "=": { oa: 218, da: 816, ma: 5, ga: 14, va: 8, fa: 1 },
      ">": { oa: 246, da: 816, ma: 4, ga: 14, va: 8, fa: 3 },
      "?": { oa: 74, da: 795, ma: 7, ga: 15, va: 7, fa: 0 },
      "@": { oa: 30, da: 774, ma: 12, ga: 16, va: 12, fa: 0 },
      A: { oa: 32, da: 795, ma: 8, ga: 15, va: 10, fa: 1 },
      B: { oa: 101, da: 795, ma: 7, ga: 15, va: 8, fa: 1 },
      C: { oa: 237, da: 774, ma: 8, ga: 15, va: 8, fa: 0 },
      D: { oa: 155, da: 795, ma: 7, ga: 15, va: 9, fa: 1 },
      E: { oa: 83, da: 795, ma: 7, ga: 15, va: 8, fa: 0 },
      F: { oa: 106, da: 816, ma: 6, ga: 15, va: 8, fa: 1 },
      G: { oa: 146, da: 774, ma: 9, ga: 15, va: 9, fa: 0 },
      H: { oa: 217, da: 774, ma: 8, ga: 15, va: 10, fa: 1 },
      I: { oa: 138, da: 816, ma: 6, ga: 15, va: 7, fa: 0 },
      J: { oa: 177, da: 774, ma: 8, ga: 16, va: 9, fa: 0 },
      K: { oa: 128, da: 795, ma: 7, ga: 15, va: 8, fa: 1 },
      L: { oa: 225, da: 795, ma: 6, ga: 15, va: 7, fa: 1 },
      M: { oa: 80, da: 774, ma: 10, ga: 15, va: 11, fa: 0 },
      N: { oa: 124, da: 774, ma: 9, ga: 15, va: 11, fa: 1 },
      O: { oa: 68, da: 774, ma: 10, ga: 15, va: 10, fa: 0 },
      P: { oa: 204, da: 816, ma: 5, ga: 15, va: 7, fa: 1 },
      Q: { oa: 2, da: 774, ma: 11, ga: 18, va: 11, fa: 0 },
      R: { oa: 217, da: 795, ma: 6, ga: 15, va: 8, fa: 1 },
      S: { oa: 227, da: 774, ma: 8, ga: 15, va: 9, fa: 0 },
      T: { oa: 2, da: 795, ma: 8, ga: 15, va: 9, fa: 0 },
      U: { oa: 187, da: 774, ma: 8, ga: 15, va: 10, fa: 1 },
      V: { oa: 135, da: 774, ma: 9, ga: 15, va: 9, fa: 0 },
      W: { oa: 15, da: 774, ma: 13, ga: 15, va: 14, fa: 1 },
      X: { oa: 113, da: 774, ma: 9, ga: 15, va: 9, fa: 0 },
      Y: { oa: 207, da: 774, ma: 8, ga: 15, va: 8, fa: 0 },
      Z: { oa: 197, da: 774, ma: 8, ga: 15, va: 9, fa: 0 },
      "[": { oa: 186, da: 816, ma: 4, ga: 19, va: 5, fa: 1 },
      "\\": { oa: 180, da: 795, ma: 6, ga: 16, va: 7, fa: 1 },
      "]": { oa: 192, da: 816, ma: 4, ga: 19, va: 5, fa: 0 },
      "^": { oa: 14, da: 837, ma: 6, ga: 7, va: 8, fa: 1 },
      _: { oa: 57, da: 774, ma: 9, ga: 17, va: 8, fa: 0 },
      "`": { oa: 50, da: 837, ma: 3, ga: 7, va: 7, fa: 1 },
      a: { oa: 66, da: 816, ma: 6, ga: 15, va: 7, fa: 0 },
      b: { oa: 90, da: 816, ma: 6, ga: 15, va: 8, fa: 1 },
      c: { oa: 74, da: 816, ma: 6, ga: 15, va: 7, fa: 0 },
      d: { oa: 137, da: 795, ma: 7, ga: 15, va: 8, fa: 0 },
      e: { oa: 50, da: 816, ma: 6, ga: 15, va: 7, fa: 0 },
      f: { oa: 164, da: 795, ma: 6, ga: 16, va: 7, fa: 0 },
      g: { oa: 42, da: 795, ma: 6, ga: 19, va: 7, fa: 0 },
      h: { oa: 98, da: 816, ma: 6, ga: 15, va: 8, fa: 1 },
      i: { oa: 38, da: 837, ma: 2, ga: 15, va: 4, fa: 1 },
      j: { oa: 195, da: 795, ma: 5, ga: 19, va: 5, fa: -1 },
      k: { oa: 130, da: 816, ma: 6, ga: 15, va: 7, fa: 0 },
      l: { oa: 34, da: 837, ma: 2, ga: 15, va: 4, fa: 1 },
      m: { oa: 12, da: 795, ma: 8, ga: 15, va: 10, fa: 1 },
      n: { oa: 233, da: 795, ma: 6, ga: 15, va: 7, fa: 0 },
      o: { oa: 58, da: 816, ma: 6, ga: 15, va: 7, fa: 0 },
      p: { oa: 66, da: 795, ma: 6, ga: 19, va: 7, fa: 0 },
      q: { oa: 58, da: 795, ma: 6, ga: 19, va: 7, fa: 0 },
      r: { oa: 209, da: 795, ma: 6, ga: 15, va: 6, fa: 0 },
      s: { oa: 211, da: 816, ma: 5, ga: 15, va: 6, fa: 0 },
      t: { oa: 10, da: 816, ma: 6, ga: 15, va: 6, fa: 0 },
      u: { oa: 241, da: 795, ma: 6, ga: 15, va: 7, fa: 0 },
      v: { oa: 114, da: 816, ma: 6, ga: 15, va: 6, fa: 0 },
      w: { oa: 22, da: 795, ma: 8, ga: 15, va: 9, fa: 0 },
      x: { oa: 92, da: 795, ma: 7, ga: 15, va: 8, fa: 0 },
      y: { oa: 168, da: 774, ma: 7, ga: 19, va: 7, fa: 0 },
      z: { oa: 2, da: 816, ma: 6, ga: 15, va: 7, fa: 0 },
      "{": { oa: 188, da: 795, ma: 5, ga: 19, va: 5, fa: 0 },
      "|": { oa: 22, da: 837, ma: 2, ga: 19, va: 5, fa: 1 },
      "}": { oa: 202, da: 795, ma: 5, ga: 19, va: 5, fa: 0 },
      "~": { oa: 171, da: 816, ma: 7, ga: 12, va: 8, fa: 0 },
      "": { oa: 154, da: 816, ma: 7, ga: 12, va: 8, fa: 0 },
    },
  },
  hs = {
    fontSize: 18,
    na: {
      " ": { oa: 358, da: 834, ma: 9, ga: 24, va: 9, fa: 0 },
      "!": { oa: 302, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      '"': { oa: 496, da: 860, ma: 9, ga: 9, va: 12, fa: 0 },
      "#": { oa: 379, da: 774, ma: 15, ga: 18, va: 18, fa: 0 },
      $: { oa: 277, da: 774, ma: 15, ga: 18, va: 18, fa: 0 },
      "%": { oa: 383, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      "&": { oa: 294, da: 774, ma: 15, ga: 18, va: 18, fa: 0 },
      "'": { oa: 293, da: 880, ma: 3, ga: 9, va: 6, fa: 0 },
      "(": { oa: 449, da: 860, ma: 9, ga: 18, va: 12, fa: 0 },
      ")": { oa: 405, da: 860, ma: 9, ga: 18, va: 12, fa: 0 },
      "*": { oa: 328, da: 774, ma: 15, ga: 18, va: 18, fa: 0 },
      "+": { oa: 311, da: 774, ma: 15, ga: 18, va: 18, fa: 0 },
      ",": { oa: 460, da: 860, ma: 6, ga: 18, va: 9, fa: 0 },
      "-": { oa: 260, da: 880, ma: 6, ga: 12, va: 9, fa: 0 },
      ".": { oa: 268, da: 880, ma: 3, ga: 18, va: 6, fa: 0 },
      "/": { oa: 274, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      0: { oa: 288, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      1: { oa: 394, da: 860, ma: 9, ga: 18, va: 15, fa: 0 },
      2: { oa: 430, da: 774, ma: 12, ga: 18, va: 15, fa: 0 },
      3: { oa: 302, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      4: { oa: 484, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      5: { oa: 498, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      6: { oa: 372, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      7: { oa: 428, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      8: { oa: 484, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      9: { oa: 330, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      ":": { oa: 283, da: 880, ma: 3, ga: 15, va: 6, fa: 0 },
      ";": { oa: 273, da: 880, ma: 3, ga: 18, va: 6, fa: 0 },
      "<": { oa: 383, da: 860, ma: 9, ga: 18, va: 12, fa: 0 },
      "=": { oa: 330, da: 860, ma: 12, ga: 15, va: 15, fa: 0 },
      ">": { oa: 361, da: 860, ma: 9, ga: 18, va: 12, fa: 0 },
      "?": { oa: 425, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      "@": { oa: 260, da: 774, ma: 15, ga: 18, va: 18, fa: 0 },
      A: { oa: 442, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      B: { oa: 386, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      C: { oa: 274, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      D: { oa: 288, da: 860, ma: 12, ga: 18, va: 15, fa: 0 },
      E: { oa: 467, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      F: { oa: 288, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      G: { oa: 344, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      H: { oa: 400, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      I: { oa: 386, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      J: { oa: 260, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      K: { oa: 495, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      L: { oa: 330, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      M: { oa: 413, da: 774, ma: 15, ga: 18, va: 18, fa: 0 },
      N: { oa: 414, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      O: { oa: 344, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      P: { oa: 316, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      Q: { oa: 274, da: 860, ma: 12, ga: 18, va: 15, fa: 0 },
      R: { oa: 302, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      S: { oa: 453, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      T: { oa: 316, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      U: { oa: 470, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      V: { oa: 411, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      W: { oa: 396, da: 774, ma: 15, ga: 18, va: 18, fa: 0 },
      X: { oa: 372, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      Y: { oa: 439, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      Z: { oa: 316, da: 860, ma: 12, ga: 18, va: 15, fa: 0 },
      "[": { oa: 416, da: 860, ma: 9, ga: 18, va: 12, fa: 0 },
      "\\": { oa: 302, da: 860, ma: 12, ga: 18, va: 15, fa: 0 },
      "]": { oa: 372, da: 860, ma: 9, ga: 18, va: 12, fa: 0 },
      "^": { oa: 344, da: 860, ma: 15, ga: 12, va: 18, fa: 0 },
      _: { oa: 358, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      "`": { oa: 288, da: 880, ma: 3, ga: 9, va: 6, fa: 0 },
      a: { oa: 456, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      b: { oa: 414, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      c: { oa: 316, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      d: { oa: 260, da: 860, ma: 12, ga: 18, va: 15, fa: 0 },
      e: { oa: 288, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      f: { oa: 458, da: 774, ma: 12, ga: 18, va: 15, fa: 0 },
      g: { oa: 260, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      h: { oa: 472, da: 774, ma: 12, ga: 18, va: 15, fa: 0 },
      i: { oa: 369, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      j: { oa: 400, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      k: { oa: 428, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      l: { oa: 481, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      m: { oa: 362, da: 774, ma: 15, ga: 18, va: 18, fa: 0 },
      n: { oa: 456, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      o: { oa: 358, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      p: { oa: 397, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      q: { oa: 470, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      r: { oa: 260, da: 834, ma: 12, ga: 18, va: 15, fa: 0 },
      s: { oa: 498, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      t: { oa: 274, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      u: { oa: 344, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      v: { oa: 444, da: 774, ma: 12, ga: 18, va: 15, fa: 0 },
      w: { oa: 345, da: 774, ma: 15, ga: 18, va: 18, fa: 0 },
      x: { oa: 330, da: 794, ma: 12, ga: 18, va: 15, fa: 0 },
      y: { oa: 486, da: 774, ma: 12, ga: 18, va: 15, fa: 0 },
      z: { oa: 442, da: 814, ma: 12, ga: 18, va: 15, fa: 0 },
      "{": { oa: 427, da: 860, ma: 9, ga: 18, va: 12, fa: 0 },
      "|": { oa: 278, da: 880, ma: 3, ga: 18, va: 6, fa: 0 },
      "}": { oa: 438, da: 860, ma: 9, ga: 18, va: 12, fa: 0 },
      "~": { oa: 482, da: 860, ma: 12, ga: 9, va: 15, fa: 0 },
      "": { oa: 468, da: 860, ma: 12, ga: 9, va: 15, fa: 0 },
    },
  },
  is = {
    fontSize: 24,
    na: {
      " ": { oa: 712, da: 122, ma: 6, ga: 32, va: 6, fa: 0 },
      "!": { oa: 702, da: 122, ma: 8, ga: 26, va: 12, fa: 2 },
      '"': { oa: 734, da: 122, ma: 10, ga: 16, va: 12, fa: 0 },
      "#": { oa: 618, da: 2, ma: 14, ga: 26, va: 16, fa: 0 },
      $: { oa: 698, da: 2, ma: 12, ga: 30, va: 14, fa: 0 },
      "%": { oa: 602, da: 2, ma: 14, ga: 26, va: 16, fa: 0 },
      "&": { oa: 650, da: 2, ma: 14, ga: 26, va: 16, fa: 0 },
      "'": { oa: 528, da: 156, ma: 4, ga: 16, va: 6, fa: 0 },
      "(": { oa: 692, da: 122, ma: 8, ga: 26, va: 10, fa: 0 },
      ")": { oa: 672, da: 122, ma: 8, ga: 26, va: 10, fa: 0 },
      "*": { oa: 726, da: 2, ma: 16, ga: 22, va: 18, fa: 0 },
      "+": { oa: 530, da: 122, ma: 12, ga: 22, va: 14, fa: 0 },
      ",": { oa: 752, da: 122, ma: 4, ga: 30, va: 6, fa: 0 },
      "-": { oa: 648, da: 122, ma: 12, ga: 18, va: 14, fa: 0 },
      ".": { oa: 516, da: 156, ma: 4, ga: 26, va: 6, fa: 0 },
      "/": { oa: 516, da: 36, ma: 12, ga: 28, va: 14, fa: 0 },
      0: { oa: 628, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      1: { oa: 572, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      2: { oa: 754, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      3: { oa: 670, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      4: { oa: 614, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      5: { oa: 558, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      6: { oa: 684, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      7: { oa: 740, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      8: { oa: 516, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      9: { oa: 698, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      ":": { oa: 758, da: 122, ma: 4, ga: 26, va: 6, fa: 0 },
      ";": { oa: 746, da: 122, ma: 4, ga: 30, va: 6, fa: 0 },
      "<": { oa: 580, da: 122, ma: 10, ga: 26, va: 12, fa: 0 },
      "=": { oa: 634, da: 122, ma: 12, ga: 20, va: 14, fa: 0 },
      ">": { oa: 544, da: 122, ma: 10, ga: 26, va: 12, fa: 0 },
      "?": { oa: 600, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      "@": { oa: 586, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      A: { oa: 698, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      B: { oa: 642, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      C: { oa: 754, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      D: { oa: 614, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      E: { oa: 670, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      F: { oa: 656, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      G: { oa: 656, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      H: { oa: 656, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      I: { oa: 544, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      J: { oa: 586, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      K: { oa: 614, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      L: { oa: 698, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      M: { oa: 666, da: 2, ma: 14, ga: 26, va: 16, fa: 0 },
      N: { oa: 586, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      O: { oa: 684, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      P: { oa: 712, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      Q: { oa: 712, da: 2, ma: 12, ga: 30, va: 14, fa: 0 },
      R: { oa: 642, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      S: { oa: 684, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      T: { oa: 600, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      U: { oa: 726, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      V: { oa: 628, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      W: { oa: 586, da: 2, ma: 14, ga: 26, va: 16, fa: 0 },
      X: { oa: 530, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      Y: { oa: 642, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      Z: { oa: 516, da: 122, ma: 12, ga: 26, va: 14, fa: 0 },
      "[": { oa: 682, da: 122, ma: 8, ga: 26, va: 10, fa: 0 },
      "\\": { oa: 744, da: 2, ma: 12, ga: 28, va: 14, fa: 0 },
      "]": { oa: 662, da: 122, ma: 8, ga: 26, va: 10, fa: 0 },
      "^": { oa: 720, da: 122, ma: 12, ga: 14, va: 14, fa: 0 },
      _: { oa: 592, da: 122, ma: 8, ga: 32, va: 10, fa: 0 },
      "`": { oa: 534, da: 156, ma: 6, ga: 10, va: 8, fa: 0 },
      a: { oa: 670, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      b: { oa: 572, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      c: { oa: 600, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      d: { oa: 726, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      e: { oa: 516, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      f: { oa: 530, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      g: { oa: 516, da: 2, ma: 12, ga: 32, va: 14, fa: 0 },
      h: { oa: 572, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      i: { oa: 530, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      j: { oa: 544, da: 2, ma: 12, ga: 32, va: 14, fa: 0 },
      k: { oa: 754, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      l: { oa: 740, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      m: { oa: 634, da: 2, ma: 14, ga: 26, va: 16, fa: 0 },
      n: { oa: 712, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      o: { oa: 558, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      p: { oa: 572, da: 2, ma: 12, ga: 32, va: 14, fa: 0 },
      q: { oa: 558, da: 2, ma: 12, ga: 32, va: 14, fa: 0 },
      r: { oa: 740, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      s: { oa: 558, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      t: { oa: 726, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      u: { oa: 712, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      v: { oa: 544, da: 66, ma: 12, ga: 26, va: 14, fa: 0 },
      w: { oa: 682, da: 2, ma: 14, ga: 26, va: 16, fa: 0 },
      x: { oa: 628, da: 36, ma: 12, ga: 26, va: 14, fa: 0 },
      y: { oa: 530, da: 2, ma: 12, ga: 32, va: 14, fa: 0 },
      z: { oa: 544, da: 94, ma: 12, ga: 26, va: 14, fa: 0 },
      "{": { oa: 568, da: 122, ma: 10, ga: 26, va: 12, fa: 0 },
      "|": { oa: 522, da: 156, ma: 4, ga: 26, va: 6, fa: 0 },
      "}": { oa: 556, da: 122, ma: 10, ga: 26, va: 12, fa: 0 },
      "~": { oa: 618, da: 122, ma: 14, ga: 18, va: 16, fa: 0 },
      "": { oa: 602, da: 122, ma: 14, ga: 18, va: 16, fa: 0 },
    },
  },
  ss = {
    fontSize: 12,
    na: {
      " ": { oa: 593, da: 469, ma: 3, ga: 16, va: 3, fa: 0 },
      "!": { oa: 587, da: 469, ma: 4, ga: 13, va: 6, fa: 1 },
      '"': { oa: 606, da: 469, ma: 5, ga: 8, va: 6, fa: 0 },
      "#": { oa: 574, da: 390, ma: 7, ga: 13, va: 8, fa: 0 },
      $: { oa: 619, da: 390, ma: 6, ga: 15, va: 7, fa: 0 },
      "%": { oa: 565, da: 390, ma: 7, ga: 13, va: 8, fa: 0 },
      "&": { oa: 592, da: 390, ma: 7, ga: 13, va: 8, fa: 0 },
      "'": { oa: 633, da: 469, ma: 2, ga: 8, va: 3, fa: 0 },
      "(": { oa: 581, da: 469, ma: 4, ga: 13, va: 5, fa: 0 },
      ")": { oa: 569, da: 469, ma: 4, ga: 13, va: 5, fa: 0 },
      "*": { oa: 516, da: 408, ma: 8, ga: 11, va: 9, fa: 0 },
      "+": { oa: 612, da: 454, ma: 6, ga: 11, va: 7, fa: 0 },
      ",": { oa: 617, da: 469, ma: 2, ga: 15, va: 3, fa: 0 },
      "-": { oa: 555, da: 469, ma: 6, ga: 9, va: 7, fa: 0 },
      ".": { oa: 625, da: 469, ma: 2, ga: 13, va: 3, fa: 0 },
      "/": { oa: 534, da: 408, ma: 6, ga: 14, va: 7, fa: 0 },
      0: { oa: 620, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      1: { oa: 588, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      2: { oa: 572, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      3: { oa: 622, da: 408, ma: 6, ga: 13, va: 7, fa: 0 },
      4: { oa: 590, da: 408, ma: 6, ga: 13, va: 7, fa: 0 },
      5: { oa: 580, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      6: { oa: 630, da: 408, ma: 6, ga: 13, va: 7, fa: 0 },
      7: { oa: 540, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      8: { oa: 580, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      9: { oa: 540, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      ":": { oa: 621, da: 469, ma: 2, ga: 13, va: 3, fa: 0 },
      ";": { oa: 613, da: 469, ma: 2, ga: 15, va: 3, fa: 0 },
      "<": { oa: 516, da: 469, ma: 5, ga: 13, va: 6, fa: 0 },
      "=": { oa: 547, da: 469, ma: 6, ga: 10, va: 7, fa: 0 },
      ">": { oa: 620, da: 454, ma: 5, ga: 13, va: 6, fa: 0 },
      "?": { oa: 628, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      "@": { oa: 620, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      A: { oa: 516, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      B: { oa: 606, da: 408, ma: 6, ga: 13, va: 7, fa: 0 },
      C: { oa: 548, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      D: { oa: 516, da: 454, ma: 6, ga: 13, va: 7, fa: 0 },
      E: { oa: 548, da: 454, ma: 6, ga: 13, va: 7, fa: 0 },
      F: { oa: 540, da: 454, ma: 6, ga: 13, va: 7, fa: 0 },
      G: { oa: 614, da: 408, ma: 6, ga: 13, va: 7, fa: 0 },
      H: { oa: 516, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      I: { oa: 550, da: 408, ma: 6, ga: 13, va: 7, fa: 0 },
      J: { oa: 596, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      K: { oa: 612, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      L: { oa: 564, da: 454, ma: 6, ga: 13, va: 7, fa: 0 },
      M: { oa: 601, da: 390, ma: 7, ga: 13, va: 8, fa: 0 },
      N: { oa: 574, da: 408, ma: 6, ga: 13, va: 7, fa: 0 },
      O: { oa: 532, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      P: { oa: 548, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      Q: { oa: 627, da: 390, ma: 6, ga: 15, va: 7, fa: 0 },
      R: { oa: 628, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      S: { oa: 556, da: 454, ma: 6, ga: 13, va: 7, fa: 0 },
      T: { oa: 604, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      U: { oa: 556, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      V: { oa: 524, da: 454, ma: 6, ga: 13, va: 7, fa: 0 },
      W: { oa: 556, da: 390, ma: 7, ga: 13, va: 8, fa: 0 },
      X: { oa: 542, da: 408, ma: 6, ga: 13, va: 7, fa: 0 },
      Y: { oa: 532, da: 454, ma: 6, ga: 13, va: 7, fa: 0 },
      Z: { oa: 604, da: 454, ma: 6, ga: 13, va: 7, fa: 0 },
      "[": { oa: 575, da: 469, ma: 4, ga: 13, va: 5, fa: 0 },
      "\\": { oa: 526, da: 408, ma: 6, ga: 14, va: 7, fa: 0 },
      "]": { oa: 563, da: 469, ma: 4, ga: 13, va: 5, fa: 0 },
      "^": { oa: 598, da: 469, ma: 6, ga: 7, va: 7, fa: 0 },
      _: { oa: 523, da: 469, ma: 4, ga: 16, va: 5, fa: 0 },
      "`": { oa: 516, da: 487, ma: 3, ga: 5, va: 4, fa: 0 },
      a: { oa: 524, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      b: { oa: 612, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      c: { oa: 582, da: 408, ma: 6, ga: 13, va: 7, fa: 0 },
      d: { oa: 580, da: 454, ma: 6, ga: 13, va: 7, fa: 0 },
      e: { oa: 556, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      f: { oa: 564, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      g: { oa: 516, da: 390, ma: 6, ga: 16, va: 7, fa: 0 },
      h: { oa: 566, da: 408, ma: 6, ga: 13, va: 7, fa: 0 },
      i: { oa: 588, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      j: { oa: 532, da: 390, ma: 6, ga: 16, va: 7, fa: 0 },
      k: { oa: 596, da: 454, ma: 6, ga: 13, va: 7, fa: 0 },
      l: { oa: 564, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      m: { oa: 583, da: 390, ma: 7, ga: 13, va: 8, fa: 0 },
      n: { oa: 524, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      o: { oa: 558, da: 408, ma: 6, ga: 13, va: 7, fa: 0 },
      p: { oa: 548, da: 390, ma: 6, ga: 16, va: 7, fa: 0 },
      q: { oa: 540, da: 390, ma: 6, ga: 16, va: 7, fa: 0 },
      r: { oa: 588, da: 454, ma: 6, ga: 13, va: 7, fa: 0 },
      s: { oa: 604, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      t: { oa: 532, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      u: { oa: 572, da: 454, ma: 6, ga: 13, va: 7, fa: 0 },
      v: { oa: 572, da: 424, ma: 6, ga: 13, va: 7, fa: 0 },
      w: { oa: 610, da: 390, ma: 7, ga: 13, va: 8, fa: 0 },
      x: { oa: 598, da: 408, ma: 6, ga: 13, va: 7, fa: 0 },
      y: { oa: 524, da: 390, ma: 6, ga: 16, va: 7, fa: 0 },
      z: { oa: 596, da: 439, ma: 6, ga: 13, va: 7, fa: 0 },
      "{": { oa: 634, da: 454, ma: 5, ga: 13, va: 6, fa: 0 },
      "|": { oa: 629, da: 469, ma: 2, ga: 13, va: 3, fa: 0 },
      "}": { oa: 627, da: 454, ma: 5, ga: 13, va: 6, fa: 0 },
      "~": { oa: 538, da: 469, ma: 7, ga: 9, va: 8, fa: 0 },
      "": { oa: 529, da: 469, ma: 7, ga: 9, va: 8, fa: 0 },
    },
  },
  as = {
    fontSize: 12,
    na: {
      " ": { oa: 516, da: 780, ma: 9, ga: 16, va: 9, fa: 0 },
      "!": { oa: 610, da: 880, ma: 2, ga: 14, va: 9, fa: 4 },
      '"': { oa: 591, da: 880, ma: 5, ga: 6, va: 9, fa: 3 },
      "#": { oa: 527, da: 780, ma: 9, ga: 14, va: 9, fa: 0 },
      $: { oa: 589, da: 780, ma: 8, ga: 15, va: 9, fa: 1 },
      "%": { oa: 546, da: 798, ma: 8, ga: 14, va: 9, fa: 1 },
      "&": { oa: 606, da: 830, ma: 8, ga: 14, va: 9, fa: 1 },
      "'": { oa: 636, da: 880, ma: 2, ga: 6, va: 9, fa: 4 },
      "(": { oa: 523, da: 880, ma: 5, ga: 15, va: 9, fa: 3 },
      ")": { oa: 530, da: 880, ma: 5, ga: 15, va: 9, fa: 1 },
      "*": { oa: 557, da: 880, ma: 6, ga: 10, va: 9, fa: 1 },
      "+": { oa: 577, da: 863, ma: 8, ga: 11, va: 9, fa: 1 },
      ",": { oa: 577, da: 880, ma: 3, ga: 15, va: 9, fa: 3 },
      "-": { oa: 537, da: 880, ma: 8, ga: 8, va: 9, fa: 1 },
      ".": { oa: 598, da: 880, ma: 2, ga: 14, va: 9, fa: 4 },
      "/": { oa: 552, da: 863, ma: 7, ga: 13, va: 9, fa: 1 },
      0: { oa: 596, da: 814, ma: 8, ga: 14, va: 9, fa: 1 },
      1: { oa: 571, da: 880, ma: 4, ga: 14, va: 9, fa: 2 },
      2: { oa: 606, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      3: { oa: 588, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      4: { oa: 596, da: 798, ma: 8, ga: 14, va: 9, fa: 1 },
      5: { oa: 525, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      6: { oa: 597, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      7: { oa: 543, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      8: { oa: 552, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      9: { oa: 534, da: 863, ma: 7, ga: 14, va: 9, fa: 1 },
      ":": { oa: 626, da: 880, ma: 2, ga: 12, va: 9, fa: 3 },
      ";": { oa: 582, da: 880, ma: 3, ga: 14, va: 9, fa: 3 },
      "<": { oa: 587, da: 863, ma: 8, ga: 11, va: 9, fa: 1 },
      "=": { oa: 623, da: 863, ma: 8, ga: 10, va: 9, fa: 1 },
      ">": { oa: 597, da: 863, ma: 8, ga: 11, va: 9, fa: 1 },
      "?": { oa: 566, da: 798, ma: 8, ga: 14, va: 9, fa: 1 },
      "@": { oa: 526, da: 798, ma: 8, ga: 14, va: 9, fa: 1 },
      A: { oa: 616, da: 798, ma: 8, ga: 14, va: 9, fa: 1 },
      B: { oa: 586, da: 798, ma: 8, ga: 14, va: 9, fa: 1 },
      C: { oa: 566, da: 814, ma: 8, ga: 14, va: 9, fa: 1 },
      D: { oa: 586, da: 830, ma: 8, ga: 14, va: 9, fa: 1 },
      E: { oa: 556, da: 798, ma: 8, ga: 14, va: 9, fa: 1 },
      F: { oa: 576, da: 798, ma: 8, ga: 14, va: 9, fa: 1 },
      G: { oa: 516, da: 814, ma: 8, ga: 14, va: 9, fa: 1 },
      H: { oa: 576, da: 830, ma: 8, ga: 14, va: 9, fa: 1 },
      I: { oa: 606, da: 880, ma: 2, ga: 14, va: 9, fa: 4 },
      J: { oa: 615, da: 863, ma: 6, ga: 14, va: 9, fa: 1 },
      K: { oa: 546, da: 830, ma: 8, ga: 14, va: 9, fa: 1 },
      L: { oa: 525, da: 863, ma: 7, ga: 14, va: 9, fa: 1 },
      M: { oa: 556, da: 830, ma: 8, ga: 14, va: 9, fa: 1 },
      N: { oa: 556, da: 814, ma: 8, ga: 14, va: 9, fa: 1 },
      O: { oa: 626, da: 814, ma: 8, ga: 14, va: 9, fa: 1 },
      P: { oa: 516, da: 830, ma: 8, ga: 14, va: 9, fa: 1 },
      Q: { oa: 569, da: 780, ma: 8, ga: 15, va: 9, fa: 1 },
      R: { oa: 606, da: 814, ma: 8, ga: 14, va: 9, fa: 1 },
      S: { oa: 516, da: 798, ma: 8, ga: 14, va: 9, fa: 1 },
      T: { oa: 606, da: 798, ma: 8, ga: 14, va: 9, fa: 1 },
      U: { oa: 526, da: 830, ma: 8, ga: 14, va: 9, fa: 1 },
      V: { oa: 536, da: 798, ma: 8, ga: 14, va: 9, fa: 1 },
      W: { oa: 536, da: 830, ma: 8, ga: 14, va: 9, fa: 1 },
      X: { oa: 536, da: 814, ma: 8, ga: 14, va: 9, fa: 1 },
      Y: { oa: 609, da: 780, ma: 8, ga: 14, va: 9, fa: 1 },
      Z: { oa: 570, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      "[": { oa: 516, da: 880, ma: 5, ga: 15, va: 9, fa: 3 },
      "\\": { oa: 538, da: 780, ma: 9, ga: 14, va: 9, fa: 0 },
      "]": { oa: 633, da: 863, ma: 5, ga: 15, va: 9, fa: 1 },
      "^": { oa: 618, da: 880, ma: 6, ga: 4, va: 9, fa: 2 },
      _: { oa: 599, da: 780, ma: 8, ga: 15, va: 9, fa: 1 },
      "`": { oa: 630, da: 880, ma: 4, ga: 4, va: 9, fa: 2 },
      a: { oa: 616, da: 814, ma: 8, ga: 14, va: 9, fa: 1 },
      b: { oa: 566, da: 830, ma: 8, ga: 14, va: 9, fa: 1 },
      c: { oa: 546, da: 814, ma: 8, ga: 14, va: 9, fa: 1 },
      d: { oa: 596, da: 830, ma: 8, ga: 14, va: 9, fa: 1 },
      e: { oa: 526, da: 814, ma: 8, ga: 14, va: 9, fa: 1 },
      f: { oa: 624, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      g: { oa: 616, da: 830, ma: 7, ga: 15, va: 9, fa: 1 },
      h: { oa: 516, da: 863, ma: 7, ga: 14, va: 9, fa: 1 },
      i: { oa: 602, da: 880, ma: 2, ga: 14, va: 9, fa: 4 },
      j: { oa: 565, da: 880, ma: 4, ga: 15, va: 9, fa: 2 },
      k: { oa: 615, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      l: { oa: 614, da: 880, ma: 2, ga: 14, va: 9, fa: 4 },
      m: { oa: 586, da: 814, ma: 8, ga: 14, va: 9, fa: 1 },
      n: { oa: 516, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      o: { oa: 629, da: 780, ma: 8, ga: 14, va: 9, fa: 1 },
      p: { oa: 549, da: 780, ma: 8, ga: 15, va: 9, fa: 1 },
      q: { oa: 579, da: 780, ma: 8, ga: 15, va: 9, fa: 1 },
      r: { oa: 607, da: 863, ma: 6, ga: 14, va: 9, fa: 2 },
      s: { oa: 534, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      t: { oa: 579, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      u: { oa: 561, da: 847, ma: 7, ga: 14, va: 9, fa: 1 },
      v: { oa: 576, da: 814, ma: 8, ga: 14, va: 9, fa: 1 },
      w: { oa: 626, da: 798, ma: 8, ga: 14, va: 9, fa: 1 },
      x: { oa: 619, da: 780, ma: 8, ga: 14, va: 9, fa: 1 },
      y: { oa: 559, da: 780, ma: 8, ga: 15, va: 9, fa: 1 },
      z: { oa: 543, da: 863, ma: 7, ga: 14, va: 9, fa: 1 },
      "{": { oa: 561, da: 863, ma: 6, ga: 15, va: 9, fa: 2 },
      "|": { oa: 587, da: 880, ma: 2, ga: 15, va: 9, fa: 4 },
      "}": { oa: 569, da: 863, ma: 6, ga: 15, va: 9, fa: 1 },
      "~": { oa: 547, da: 880, ma: 8, ga: 8, va: 9, fa: 1 },
      "": { oa: 625, da: 830, ma: 7, ga: 14, va: 9, fa: 1 },
    },
  };
function rs(t, h, i, s, a, r, e, c, n, f, o) {
  (t.dn = h),
    (t.mn = i),
    (t.gn = s),
    (t.vn = a),
    (t.bn = r),
    (t.un = e),
    (t.ln = c),
    (t.Xn = n),
    (t.spacing = f),
    (t.Yn = o);
}
function es(t) {
  const h = Be.ph.Es();
  switch (Ch.Hn) {
    case 1:
      rs(
        t,
        is,
        16777215,
        t.x + 20,
        t.y + 20,
        t.x + (Ch.we[1] - 55),
        1,
        1,
        qt,
        16,
        32
      );
      break;
    case 2:
      rs(t, as, 0, t.x, t.y, t.x + 190, 43, 2, Ut, 9, 20);
      break;
    case 3:
      rs(t, hs, 8421376, t.x, t.y, t.x + 100, 39, 3, Ut, 10, 10);
      break;
    case 4:
    case 6:
    case 7:
    case 8:
    case 9:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 19:
    case 18:
    case 20:
    case 22:
    case 24:
    case 25:
    case 26:
    case 32:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 47:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 91:
    case 93:
    case 94:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
    case 101:
    case 102:
    case 103:
      break;
    case 5:
      rs(t, ss, 16777215, t.x + 20, t.y + 20, h.Xs + 290, 0, 1, Ut, 8, 18);
      break;
    case 10:
      rs(t, ss, 16777215, t.x + 20, t.y + 20, h.Xs + 290, 0, 1, Pt, 8, 18);
      break;
    case 11:
      rs(t, ss, 16777215, t.x + 20, t.y + 20, h.Xs + 290, 0, 1, qt, 8, 18);
      break;
    case 17:
      rs(t, ts, 16777215, t.x + 20, t.y + 20, h.Xs + 290, 0, 1, $t, 8, 18);
      break;
    case 21:
      rs(t, ss, 16777215, t.x + 20, t.y + 20, h.Xs + 290, 0, 4, Pt, 10, 18);
      break;
    case 23:
      rs(t, ss, 16777215, t.x + 20, t.y + 20, h.Xs + 310, 0, 1, Ut, 8, 18);
      break;
    case 30:
      rs(t, is, 16777215, t.x + 20, t.y + 20, 9999, 0, 2, Nt, 20, 36);
      break;
    case 31:
      rs(t, ss, 16777215, t.x + 20, t.y + 20, 9999, 0, 2, Nt, 12, 18);
      break;
    case 33:
      rs(t, as, 0, t.x, t.y, t.x + 190, 43, 1, Ut, 9, 20);
      break;
    case 55:
      rs(t, as, 0, t.x, t.y, t.x + 999, 0, 2, Pt, 9, 20);
      break;
    case 60:
      rs(t, ss, 16777215, t.x + 20, t.y + 20, h.Xs + 290, 0, 2, Nt, 8, 18);
      break;
    case 61:
      rs(t, is, 16777215, t.x + 20, t.y + 20, t.x + 99999, 0, 2, Pt, 16, 32);
      break;
    case 62:
      rs(t, as, 0, t.x, t.y, t.x + 200, 0, 3, Nt, 9, 20);
      break;
    case 63:
      rs(t, as, 0, t.x, t.y, t.x + 200, 0, 2, Nt, 9, 20);
      break;
    case 64:
      rs(t, as, 0, t.x, t.y, t.x + 200, 2, 3, Nt, 9, 20);
      break;
    case 73:
      rs(t, is, 0, t.x + 20, t.y + 20, t.x + 99999, 0, 5, Pt, 16, 32);
      break;
    case 80:
      rs(t, ts, 0, t.x, t.y, t.x + 200, 0, 1, $t, 10, 20);
      break;
    case 92:
      rs(t, as, 16777215, t.x, t.y, t.x + 190, 41, 1, Ut, 9, 20);
      break;
    case 100:
      rs(t, as, 16777215, t.x + 20, t.y + 20, h.Xs + 290, 0, 1, Pt, 8, 18);
      break;
    case 104:
      rs(t, as, 16777215, t.x + 20, t.y + 20, 999, 0, 4, Pt, 16, 34);
      break;
    case 105:
      rs(t, as, 16777215, t.x + 20, t.y + 20, 999, 0, 3, Pt, 16, 34);
      break;
    case 106:
      rs(t, as, 16777215, t.x + 20, t.y + 20, 999, 0, 3, Pt, 8, 18);
      break;
    case 107:
      rs(t, ts, 0, t.x + 5, t.y, t.x + 200, 0, 2, $t, 10, 20);
      break;
    case 108:
      rs(t, as, 0, t.x, t.y, t.x + 200, 0, 4, Pt, 9, 20);
      break;
    case 109:
      rs(t, ts, 0, t.x + 5, t.y, t.x + 200, 0, 1, $t, 10, 20);
      break;
    case 110:
      rs(t, is, 16777215, t.x + 20, t.y + 20, 9999, 0, 2, $t, 10, 36);
      break;
    case 111:
      rs(t, is, 16777215, t.x, t.y, t.x + 190, 43, 1, Ut, 9, 20);
  }
}
function cs(t) {
  (t.Wn = t.gn), (t.pn += t.Yn), t.lineno++;
}
const ns = "|¥¨Ükb~r%~ñ63Áë",
  fs = "~r{s¬Èö\rmCyXÁ_\fÚ8",
  os = "ßS\\¹YY5Ô*¦ÜK!º?¸­tMj¡>ïI5`",
  ds = "äfY91i)Q@u3bäçmE¾Lßyy",
  ms = '_¦M"üh#MLpRß8½y',
  gs = "MçUyo£ja\0ÄsýÁÃÓ\n{\0«&«Ã'¸¾";
function vs(t, h) {
  return dh.Bs(t, h).charCodeAt(0) - 48;
}
const bs = {
    [c("3±Ð|/?îK^¨d", "*³y±¦<¸òªb>:\téKSvØNØNÈ")]: 16711680,
    [c("áç(¡^¸øF", ns)]: 65280,
    [c("ábºY«MÐïe§kÀQKå", ns)]: 16777215,
    [c("YY©v[%ò\vb×tS", ns)]: 16776960,
    [c("ouÙ÷Xÿ<Bäß³]®(d", ns)]: 0,
    [c("pæfMûüA+û\0åuû6Sc", fs)]: 255,
    [c("5ókÅÄÝ­ûÖÿ\t", fs)]: 16752704,
    [c("´wýÄú\\4Ç¯óE0 ©", fs)]: 1354239,
    [c("¶jÊ÷ÅÁÕä²·", fs)]: 16711935,
    [c('gÐa3{ÀKmTIé"ÚmeF', fs)]: 16759764,
  },
  us = c("â<~Ùñf'!^O½I", fs),
  ls = c("þH³Ãõ ÂáB²R", os),
  Xs = c("»or7þè¦ü®G±&d", os),
  Ys = c("\\& ¹ÃÞarb:Þ¸§", os),
  Hs = c("o)îÇdÕ3[DøÁ", os),
  Ws = c("bt@òúµÿÑZ½Â½Ì", os),
  ps = c("4Ô\r¬îÝ=§ü÷×ÞO", os),
  Os = c("S0÷@µÇ=N£4H", ds),
  As = c('¤Ë½É"Èg\t.ÿ\0¼', ds),
  xs = c("Òe¥ê¤½¬MnPpÇÜc¼", ds),
  Ms = c("ÈÈ\vèR5¯m", ds),
  ws = c('p"ê?§ãÅ¡ V¨¥^Á', ds),
  ks = c("ª°ð2\bÚöÂHì°ûTZ", ms),
  Ts = c("ýñ²wcká¹0©B¥\x007ª", ms),
  Ls = c("Îs×Úü³ñ¨ÈôÌÆê", ms),
  Ss = c("ÎE­ÚÌÚ\bÍ¿53", ms),
  Cs = c("tv>Ï½®`g\b©µ ", ms),
  Is = c("\bÆ÷§ÝóG×³n", gs),
  Rs = c(":åì$}õ.Ké]ÇÂQ/", gs),
  js = c("kÜkÿA\rº3)\vXâ\næd", gs),
  ys = c("Iìq_jÛ\\Q)ÌB", gs),
  Es = c("Z[än®@¹Q¯-óÛOÜT", gs),
  Ps = c('è@ÁÁhä0"UL¢,', "f-<­Ê4ÔÈY¾;¥÷át'{¢P¼'ä");
class Fs extends Wh {
  constructor(t) {
    super(t),
      (this.dn = void 0),
      (this.mn = 0),
      (this.gn = 0),
      (this.vn = 0),
      (this.bn = 0),
      (this.un = 0),
      (this.ln = 0),
      (this.Xn = void 0),
      (this.spacing = 0),
      (this.Yn = 0),
      (this.Wn = 0),
      (this.pn = 0),
      (this.On = []),
      (this.An = 0),
      (this.xn = 0),
      (this.Mn = 0),
      (this.lineno = 0),
      (this.wn = 0),
      (this.kn = void 0),
      (this.Tn = 0),
      (this.Ln = void 0),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -500),
      (this.Is = 0),
      (this.Ba[0] = () => this.qe());
  }
  he() {
    (this.ln = 0),
      (this.un = 0),
      (this.bn = 0),
      es(this),
      (this.x = Math.floor(this.x + 0.5)),
      (this.y = Math.floor(this.y + 0.5)),
      (this.An = 0),
      (this.xn = 0),
      (this.Mn = 1),
      (this.lineno = 0),
      (this.wn = 0),
      (this.gn = Math.floor(this.gn + 0.5)),
      (this.vn = Math.floor(this.vn + 0.5)),
      (this.Wn = this.gn),
      (this.pn = this.vn),
      (this.On = []),
      ((t) => {
        switch (t) {
          case 0:
          case 1:
          case 2:
            break;
          case 3:
            Ch.Sn[0] = "";
            for (let t = 0; 3 > t; t++) {
              if (Ch.Cn[t]) {
                const h = Ch.ac[t];
                qi(h),
                  0 > h.an && (Ch.Sn[0] += Zi()),
                  (Ch.Sn[0] += c("µxËÉ¹)/æw®U°­Dù", Ni) + Ch.In[t]);
                const i = Ch.Rn[t];
                switch (t) {
                  case 1:
                    (i !== Ch.Rn[1] && i !== Ch.Rn[2]) ||
                      (Ch.Sn[0] += c(" ½²|ÌâAÃXR#ö©mì-", Ni));
                    break;
                  case 2:
                    i === Ch.Rn[0] && (Ch.Sn[0] += c("¼.Ê&%³ûzët9»;Q", $i));
                    break;
                  case 3:
                    i === Ch.Rn[1] && (Ch.Sn[0] += c("y¬ûòÓ9êÄDýc\\RðþÒ", $i));
                }
              }
              2 > t && (Ch.Sn[0] += c("Ó q®¡gÚä(ò·¯", $i));
            }
            Ch.Sn[1] = c("\nuýË5]+OR@gmo", $i);
            break;
          case 7:
            Ch.Sn[0] = "";
            for (let t = 0; 3 > t; t++)
              if (Ch.Cn[t]) {
                const h = Ch.ac[t];
                if ((qi(h), 0 > h.an)) {
                  Ch.Sn[0] += Zi();
                  break;
                }
              }
            (Ch.Sn[0] += c("J\\ÉRõå¡Ê~-\fÍËpLÏÞ", $i)),
              Ch.an === 0 && (Ch.Sn[0] += c("©ß¿*\n»[çæ¶ú\r´4]¡CjráÍëª", $i));
            break;
          case 9:
          case 10: {
            const h = c(t === 9 ? "ÃÚKSC¹/ö7ü" : "\nªù¶`@Ë«NÐ@Îë", Qi),
              i = t === 9 ? 0 : 4;
            (Ch.Sn[0] =
              c("QÉ`5ç½¹#-oeDØ7ßÐ", Qi) + Ch.jn[i] + c("F:UXKC¸ý_¹]ôäm½", Qi)),
              Ch.item[i + 1] !== 0 &&
                (Ch.Sn[0] += c("rµ-&V:ÑmÚw¥ÏÚ:", Ji) + Ch.jn[i + 1]),
              (Ch.Sn[0] += c(";*O<(´ì.;moy", Ji)),
              Ch.item[i + 2] !== 0 &&
                (Ch.Sn[0] +=
                  c("Y.¢I,Í¬:-¼ûÑl¼v", Ji) +
                  Ch.jn[i + 2] +
                  c("×MGá}hÇ$l\f¿â»", Ji)),
              Ch.item[i + 3] !== 0 &&
                (Ch.Sn[0] += c("T´ªfË%eË>¾±°?", _i) + Ch.jn[i + 3]),
              (Ch.Sn[0] += c("¨g Äw)w½²ûìÆ¥Hs%]Ê¸õ0ÎßëpBá ¸FéÖ«­F#", _i) + h),
              (Ch.Sn[1] = c("ÔxàÌ1Hy\x001", _i));
            break;
          }
          case 11:
            (Ch.Sn[0] += c("ÔrÜµmG#ðÂÍ^=y:", _i)),
              (Ch.Sn[0] +=
                99 > Ch.item[8]
                  ? c("Å!KÉàþu&3½ÀyNb bK«;ÖÚÅä", _i) +
                    "" +
                    Ch.item[8] +
                    c("VÓÙ'ß×¡F?®í·@E¹Ú®\"gD", zi)
                  : c("ùÄ¬ÒÉôâ\0Ñ+ìÜX¬8pØ¶ÈYÑÓÈO4d(µû&H-{åÖ", zi));
            break;
          case 14:
          case 1068:
            (Ch.Sn[0] = c("5¨à/X­d<xR-HÀÛ @!»¾§Ý", "úÁéFå8âë?_½Yëº2JíF¶ ^SãÅa")),
              (Ch.yn[0] = 1),
              (Ch.yn[1] = 0),
              (Ch.yn[2] = 0),
              (Ch.yn[3] = 0),
              (Ch.yn[4] = 0),
              (Ch.yn[5] = 0);
        }
      })(Ch.En);
    for (let t = 0; Ch.Sn[t] !== us; t++) this.On[t] = Ch.Sn[t];
    (this.kn = this.On[0]), (this.Tn = 0), (this.Fa[0] = this.ln);
  }
  qe() {
    if (this.kn.length > this.Mn) {
      this.Mn++, (this.Fa[0] = this.ln);
      const t = dh.Bs(this.kn, this.Mn),
        h = dh.Bs(this.kn, this.Mn - 1),
        i = dh.Bs(this.kn, this.Mn + 1);
      t === Ws && i !== ps
        ? (this.Fa[0] = i !== "" ? vs(this.kn, this.Mn + 1) * 10 : -1)
        : t !== "" &&
          t !== Ys &&
          t !== Os &&
          t !== Ws &&
          h !== Ws &&
          t !== ls &&
          i !== ls &&
          t !== Xs &&
          t !== Os &&
          Lh.pe(this.Xn),
        t === Hs
          ? (this.Mn++, i === ls && (this.Mn += 2))
          : t === ls && (this.Mn += 2);
    }
  }
  ae() {
    (this.Ln = dh.Bs(this.kn, this.Mn)),
      this.un > 38 && ((this.speed = 2), (this.direction += 20)),
      this.un === 42 && ((this.speed = 4), (this.direction += 19)),
      (this.wn !== 3 && this.Tn !== 1) || Be.He(this);
  }
  st() {
    C.J.z &&
      (this.wn === 1 &&
        ((this.Ln = Ys),
        (this.Mn = 1),
        this.xn++,
        (this.kn = this.On[this.xn]),
        (this.Wn = this.gn),
        (this.pn = this.vn),
        (this.lineno = 0),
        (this.wn = 0),
        (this.Fa[0] = this.ln)),
      this.wn === 2 && Be.He(this),
      this.wn === 4 &&
        ((Ch.uc = 0),
        (Ch.lc = 1),
        (C.N.z = 0),
        (C.J.z = 0),
        (C._.z = 0),
        Be.He(this)));
  }
  rt() {
    this.Pn(0);
  }
  Pn(t) {
    (this.Wn = this.gn), (this.pn = this.vn);
    for (let h = 1; this.Mn >= h; ) {
      let i = 0,
        s = dh.Bs(this.kn, h);
      if (
        (s === Hs && (cs(this), (s = dh.Bs(this.kn, ++h))),
        s === Ws &&
          (t || dh.Bs(this.kn, h + 1) !== ps
            ? (s = dh.Bs(this.kn, (h += 2)))
            : (i = 1)),
        s === ls)
      ) {
        const i = dh.Bs(this.kn, h + 1);
        if (t)
          switch (i) {
            case xs:
              rs(
                this,
                as,
                16711680,
                this.x,
                this.y,
                this.x + 150,
                43,
                4,
                qt,
                10,
                0
              );
              break;
            case Ms:
              break;
            default:
              const t = bs[i];
              t !== void 0 && (this.mn = t);
          }
        else
          switch (i) {
            case Ms:
              break;
            case ws:
              (Ch.fn[20] = vs(this.kn, h + 2)), h++;
              break;
            case ks:
              (Ch.Fn = vs(this.kn, h + 2)), h++;
              break;
            case Ts:
              (Ch.Bn = vs(this.kn, h + 2)), (Ch.Dn = 1), h++;
              break;
            case Ls:
              switch (dh.Bs(this.kn, h + 2)) {
                case ps:
                  Ch.Hn = 5;
                  break;
                case Cs:
                  Ch.Hn = 10;
                  break;
                case Is:
                  Ch.Hn = 17;
              }
              es(this), (Ch.Dn = 1), h++;
              break;
            case Ss:
              break;
            default:
              const t = bs[i];
              t !== void 0 && (this.mn = t);
          }
        h += 2;
      }
      if (((s = dh.Bs(this.kn, h)), s === Xs)) {
        this.wn = 1;
        const i = dh.Bs(this.kn, h + 1);
        i === Os
          ? (this.wn = 2)
          : t ||
            (i === Ws && dh.Bs(this.kn, h + 2) !== ps
              ? (this.wn = 4)
              : i === As && (this.wn = 6));
        break;
      }
      if (s === Os) {
        if (dh.Bs(this.kn, h + 1) === Os) {
          Be.He(this);
          break;
        }
        (this.Mn = 1),
          this.xn++,
          (this.kn = this.On[this.xn]),
          (this.Wn = this.gn),
          (this.pn = this.vn),
          (this.lineno = 0),
          (this.Fa[0] = this.ln),
          (this.Ln = " ");
        break;
      }
      {
        this.Wn > this.bn && cs(this), (this.Ln = dh.Bs(this.kn, h));
        let s = 0,
          a = 0;
        if (this.un > 38)
          switch (this.un) {
            case 39:
            case 40:
              (this.direction += 10), (s = this.Sr), (a = this.Ir);
              break;
            case 41:
              (this.direction += 10 * h),
                (s = this.Sr),
                (a = this.Ir),
                (this.direction -= 10 * h);
              break;
            case 42:
              (this.direction += 20 * h),
                (s = this.Sr),
                (a = this.Ir),
                (this.direction -= 20 * h);
              break;
            case 43:
              (this.direction += 30 * h),
                (s = this.Sr * 0.7 + 10),
                (a = this.Ir * 0.7),
                (this.direction -= 30 * h);
          }
        else
          (s = dh.Ns(this.un) - this.un / 2),
            (a = dh.Ns(this.un) - this.un / 2);
        mh.Aa(this.Wn + s, this.pn + a, this.Ln, this.dn, this.mn),
          (this.Wn += this.spacing),
          t ||
            (this.dn === ts &&
              (this.Ln === Rs || this.Ln === js
                ? (this.Wn += 2)
                : this.Ln === ys || this.Ln === Es
                ? (this.Wn -= 2)
                : (this.Ln === Is || this.Ln === Ps) && (this.Wn -= 1))),
          (h += i),
          h++;
      }
    }
  }
}
const Bs = { Xe: () => new Fs(Bs) },
  Ds = {
    Zs: [
      { aa: 0, ta: 506, ha: 964, ia: 16, sa: 16, ra: 0, ea: 0 },
      { aa: 0, ta: 524, ha: 964, ia: 16, sa: 16, ra: 0, ea: 0 },
      { aa: 0, ta: 542, ha: 964, ia: 16, sa: 16, ra: 0, ea: 0 },
      { aa: 0, ta: 560, ha: 964, ia: 16, sa: 16, ra: 0, ea: 0 },
    ],
    Vr: 16,
    Ur: 16,
    qr: 0,
    $r: 0,
    Nr: 14,
    Qr: 15,
    ii: 8,
    si: 8,
  },
  Ks = {
    Zs: [{ aa: 1, ta: 1004, ha: 0, ia: 10, sa: 200, ra: 0, ea: 0 }],
    Vr: 10,
    Ur: 200,
    qr: 1,
    $r: 3,
    Nr: 8,
    Qr: 195,
    ii: 0,
    si: 0,
  },
  Gs = {
    Zs: [
      { aa: 2, ta: 100, ha: 0, ia: 34, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 136, ha: 0, ia: 34, sa: 32, ra: 0, ea: 0 },
    ],
    Vr: 34,
    Ur: 32,
    qr: 1,
    $r: 1,
    Nr: 32,
    Qr: 30,
    ii: 17,
    si: 16,
  },
  Vs = {
    Zs: [
      { aa: 2, ta: 172, ha: 0, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 206, ha: 0, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 240, ha: 0, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 274, ha: 0, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 308, ha: 0, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 342, ha: 0, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 376, ha: 0, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 410, ha: 0, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 444, ha: 0, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 478, ha: 0, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 0, ha: 19, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 34, ha: 25, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 68, ha: 34, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 102, ha: 34, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 136, ha: 34, ia: 32, sa: 32, ra: 0, ea: 0 },
    ],
    Vr: 32,
    Ur: 32,
    qr: 0,
    $r: 0,
    Nr: 31,
    Qr: 29,
    ii: 16,
    si: 15,
  },
  Us = {
    Zs: [
      { aa: 2, ta: 170, ha: 34, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 204, ha: 34, ia: 32, sa: 32, ra: 0, ea: 0 },
      { aa: 2, ta: 238, ha: 34, ia: 32, sa: 32, ra: 0, ea: 0 },
    ],
    Vr: 32,
    Ur: 32,
    qr: 0,
    $r: 0,
    Nr: 31,
    Qr: 8,
    ii: 16,
    si: 15,
  },
  qs = {
    Zs: [
      { aa: 2, ta: 297, ha: 108, ia: 64, sa: 73, ra: 0, ea: 0 },
      { aa: 2, ta: 99, ha: 162, ia: 64, sa: 73, ra: 0, ea: 0 },
      { aa: 2, ta: 165, ha: 165, ia: 64, sa: 73, ra: 0, ea: 0 },
      { aa: 2, ta: 231, ha: 165, ia: 64, sa: 73, ra: 0, ea: 0 },
      { aa: 2, ta: 297, ha: 183, ia: 64, sa: 73, ra: 0, ea: 0 },
    ],
    Vr: 64,
    Ur: 73,
    qr: 0,
    $r: 0,
    Nr: 63,
    Qr: 72,
    ii: 30,
    si: 34,
  },
  Ns = {
    Zs: [
      { aa: 2, ta: 363, ha: 183, ia: 64, sa: 73, ra: 0, ea: 0 },
      { aa: 2, ta: 429, ha: 183, ia: 64, sa: 73, ra: 0, ea: 0 },
      { aa: 2, ta: 0, ha: 219, ia: 64, sa: 73, ra: 0, ea: 0 },
      { aa: 2, ta: 66, ha: 237, ia: 64, sa: 73, ra: 0, ea: 0 },
      { aa: 2, ta: 132, ha: 240, ia: 64, sa: 73, ra: 0, ea: 0 },
      { aa: 2, ta: 198, ha: 240, ia: 64, sa: 73, ra: 0, ea: 0 },
    ],
    Vr: 64,
    Ur: 73,
    qr: 0,
    $r: 0,
    Nr: 63,
    Qr: 72,
    ii: 30,
    si: 34,
  },
  $s = {
    Zs: [{ aa: 2, ta: 54, ha: 0, ia: 44, sa: 23, ra: 0, ea: 0 }],
    Vr: 44,
    Ur: 23,
    qr: 0,
    $r: 0,
    Nr: 43,
    Qr: 22,
    ii: 21,
    si: 11,
  },
  Qs = {
    Zs: [{ aa: 2, ta: 0, ha: 0, ia: 52, sa: 17, ra: 0, ea: 0 }],
    Vr: 52,
    Ur: 17,
    qr: 0,
    $r: 0,
    Nr: 51,
    Qr: 16,
    ii: 26,
    si: 8,
  },
  Js = {
    Zs: [
      { aa: 2, ta: 370, ha: 71, ia: 97, sa: 55, ra: 0, ea: 0 },
      { aa: 2, ta: 0, ha: 105, ia: 97, sa: 55, ra: 0, ea: 0 },
      { aa: 2, ta: 99, ha: 105, ia: 97, sa: 55, ra: 0, ea: 0 },
      { aa: 2, ta: 198, ha: 108, ia: 97, sa: 55, ra: 0, ea: 0 },
      { aa: 2, ta: 363, ha: 128, ia: 97, sa: 55, ra: 0, ea: 0 },
      { aa: 2, ta: 0, ha: 162, ia: 97, sa: 55, ra: 0, ea: 0 },
    ],
    Vr: 97,
    Ur: 55,
    qr: 0,
    $r: 0,
    Nr: 96,
    Qr: 54,
    ii: 33,
    si: 12,
  },
  _s = {
    Zs: [
      { aa: 2, ta: 272, ha: 34, ia: 72, sa: 35, ra: 0, ea: 0 },
      { aa: 2, ta: 346, ha: 34, ia: 72, sa: 35, ra: 0, ea: 0 },
      { aa: 2, ta: 420, ha: 34, ia: 72, sa: 35, ra: 0, ea: 0 },
      { aa: 2, ta: 0, ha: 68, ia: 72, sa: 35, ra: 0, ea: 0 },
      { aa: 2, ta: 74, ha: 68, ia: 72, sa: 35, ra: 0, ea: 0 },
      { aa: 2, ta: 148, ha: 68, ia: 72, sa: 35, ra: 0, ea: 0 },
      { aa: 2, ta: 222, ha: 71, ia: 72, sa: 35, ra: 0, ea: 0 },
      { aa: 2, ta: 296, ha: 71, ia: 72, sa: 35, ra: 0, ea: 0 },
    ],
    Vr: 72,
    Ur: 35,
    qr: 0,
    $r: 0,
    Nr: 71,
    Qr: 34,
    ii: 36,
    si: 12,
  },
  zs = {
    Zs: [{ aa: 0, ta: 642, ha: 212, ia: 210, sa: 108, ra: 0, ea: 0 }],
    Vr: 210,
    Ur: 108,
    qr: 18,
    $r: 0,
    Nr: 191,
    Qr: 104,
    ii: 0,
    si: 0,
  },
  Zs = {
    Zs: [{ aa: 0, ta: 642, ha: 322, ia: 210, sa: 108, ra: 0, ea: 0 }],
    Vr: 210,
    Ur: 108,
    qr: 18,
    $r: 3,
    Nr: 191,
    Qr: 107,
    ii: 0,
    si: 16,
  },
  ta = {
    Zs: [{ aa: 0, ta: 642, ha: 0, ia: 259, sa: 104, ra: 0, ea: 0 }],
    Vr: 259,
    Ur: 104,
    qr: 20,
    $r: 0,
    Nr: 256,
    Qr: 103,
    ii: 2,
    si: 2,
  };
function ha(t, h, i, s) {
  const a = Be.Sc(h + 30, i + 10, Bs),
    r = Be.Sc(a.x - 30, a.y - 10, Mh);
  switch (((t.Kn = r), (r.parent = a), s)) {
    case 1:
      r.wr = ta;
      break;
    case 2:
      (r.wr = zs), (a.gn -= 20), (a.vn -= 20);
      break;
    case 3:
      (r.wr = Ah), (a.vn -= 20);
      break;
    case 4:
      (r.wr = Zs), (a.gn -= 10);
  }
}
const ia = {};
class sa extends Wh {
  constructor() {
    super(aa),
      (this.type = 0),
      (this.Gn = 0),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 0),
      (this.Ba[0] = () => this.qe());
  }
  he() {
    (this.Fa[0] = 10), (this.type = 0), (this.Gn = 0);
  }
  qe() {
    let t = [];
    if (this.type === 0) {
      this.Fa[0] = 13;
      let h = Be.Sc(Be.ke(Vr).x + 8, Be.ke(Vr).y + 8, Nr);
      if (((t[this.Gn] = h), Be.Ye(h))) {
        let t = dh.Ns(360);
        (h.fc = h.x + dh.Ds(200, t)),
          (h.oc = h.y + dh.Ks(200, t)),
          h.oc > 440 && (h.oc = 440),
          40 > h.oc && (h.oc = 40),
          50 > h.fc && (h.fc = 50),
          h.fc > 590 && (h.fc = 590),
          (h.x = h.x + dh.Ds(400, t)),
          (h.y = h.y + dh.Ks(300, t)),
          (h.hn = dh.Vs(h.fc, h.oc, Be.ke(Vr).x + 8, Be.ke(Vr).y + 8) + 90),
          (h.nr = 1),
          (h.dr = 2),
          (h.sn = 1),
          (h.pause = 9);
      }
    }
    if (this.type === 1) {
      this.Fa[0] = 16;
      let h = Be.Sc(Be.ke(Vr).x + 8, Be.ke(Vr).y + 8, Nr);
      t[this.Gn] = h;
      let i = dh.Ns(360);
      Be.Ye(h) &&
        ((h.fc = h.x + dh.Ds(200, i)),
        (h.oc = h.y + dh.Ks(200, i)),
        h.oc > 440 && (h.oc = 440),
        40 > h.oc && (h.oc = 40),
        50 > h.fc && (h.fc = 50),
        h.fc > 590 && (h.fc = 590),
        (h.x = h.x + dh.Ds(400, i)),
        (h.y = h.y + dh.Ks(300, i)),
        (h.hn = dh.Vs(h.fc, h.oc, Be.ke(Vr).x + 8, Be.ke(Vr).y + 8) + 90),
        (h.nr = 1),
        (h.dr = 2),
        (h.sn = 1),
        (h.pause = 14));
    }
    if (this.type === 2) {
      this.Fa[0] = 20;
      let h = Be.Sc(Be.ke(Vr).x + 8, Be.ke(Vr).y + 8, Nr);
      t[this.Gn] = h;
      let i = dh.Ns(360);
      Be.Ye(h) &&
        ((h.fc = h.x + dh.Ds(200, i)),
        (h.oc = h.y + dh.Ks(200, i)),
        h.oc > 440 && (h.oc = 440),
        40 > h.oc && (h.oc = 40),
        50 > h.fc && (h.fc = 50),
        h.fc > 590 && (h.fc = 590),
        (h.x = h.x + dh.Ds(400, i)),
        (h.y = h.y + dh.Ks(300, i)),
        (h.hn = dh.Vs(h.fc, h.oc, Be.ke(Vr).x + 8, Be.ke(Vr).y + 8) + 90),
        (h.nr = 2),
        (h.dr = 2),
        (h.sn = 1),
        (h.pause = 20));
    }
    this.Gn++;
  }
}
const aa = { Xe: () => new sa() },
  ra = {
    Zs: [{ aa: 1, ta: 826, ha: 200, ia: 10, sa: 40, ra: 0, ea: 0 }],
    Vr: 10,
    Ur: 40,
    qr: 3,
    $r: 5,
    Nr: 6,
    Qr: 35,
    ii: 0,
    si: 0,
  };
class ea extends Gh {
  constructor() {
    super(ca),
      (this.wr = ra),
      (this.Ea = 1),
      (this.Ea = 0),
      (this.Mh = -1),
      (this.Is = 0);
  }
  he() {
    (this.Ir = 4), (this.Te = 5);
  }
  st() {
    0 > this.Ir && Ch.we[2] - this.Za > this.y && (this.y = Ch.we[3]),
      this.Ir > 0 && this.y > Ch.we[3] && (this.y = Ch.we[2] - this.Za),
      0 > this.Sr && 0 > this.x && Be.He(this),
      this.Sr > 0 && this.x > Be.ph.width && Be.He(this);
  }
  rt() {
    Kh(this);
  }
}
const ca = { parent: Uh, Xe: () => new ea() };
function na(t, h, i, s, a) {
  let r;
  for (t.Vn = 0; a > t.Vn; )
    (r = Be.Sc(900, 900, xi)),
      (r.y = Ch.we[3] - h),
      (r.Sr = i),
      (r.x = 320 - s * i),
      320 > r.x && (r.x -= t.Vn * 15),
      r.x > 320 && (r.x += t.Vn * 15),
      t.Vn++;
  return r;
}
const fa = "8¼¤xØNüx°fú\t­©\fãÊó£Ìâû(";
class oa extends at {
  constructor() {
    super(),
      (this.Un = c(
        "L#µS¬1¥rÞ³¹rÖLÕrôµ¡¤}|o'hË@ÏwóÿË£×\\qp96MÂx©úÞ£+o6hÎKzí¿¥mÆ 05åYÏÓr±õÂªbw,0$ÝHÁ«ö¦ÝíÔdx:[¶(ÅÇk¸Í²ÏuhÐ)%7Ì\rÒÉvû»Ç¶°d,')v_ÖÇ^½Ï®}u¸6w'×Èa÷²¢Òze$=ÁVËÌp½²Ö·*(>8LäÍ/ó°Ïê>q/8ßGÐÞ¼Ü½Ö}39:#ð&·Ùfå·Ý}g/j9À^Ñ6ü¦ÌégWp5)ÉÍsêþÛ¢kw%\0/ÈZÏ:ñÉÝ±Äbc9!2ÐmÒÐnê»àfd+3ÍXßÕAµ¬Ùä-c&=w²EÞÂrð¾íéqfx*1ÝIÛÆk·²Ã¿G?-0ZÔx©®ØªnyÂ;hÍXØz·ÀófiÆ5)\"ãRÁÄrõ¹É¥Öv%##1ÇÌä{ä°Û¢Ún)x9ÙPØqêÐ½cy..qÍØÄ¢Î¥­x,!!zÉÎÀtþ±Ôàgqì2?'ÕAÚÌnë²å{uKEÛEÙ×w½·ÃåÅu'Õj.3Ô\rùÎ/á·Ê¦wx+= ÆLÇÊbÕ½Þ²b79!~CÐ æ¢Ê`Â5e5ÏGËìî¡Û¬`O;>>×ÝÏ÷¶Í®\":A4ÅPÙ¦&é³Ë¶Òrr%,>ÔbÇÔ`¶±­Ïa{Ói->ÐE»ÖLå¦Å¢'{'(~ÙZÞÎ4ò´ìéqfËk9<²^Ôwå¹×®Aw=.+FÇx¶úÌ¤+p++«'»óµóabÆ#)(·BÅÞväêÎü&$\",1]×þh ¤Î Ð\":~(¶(ÝÄm÷ÕÑ¬etÁ w%Ñ×Ëk¼¢Éä dyð*#qÜ@ÊÀtö°Ì¹Ún4¸7\"-BÏ/ö½Ì¶yu':ß\\ÎÂs»­Þªý2z+/}×B¶Ügò´Óá>ff+!Þ@ÛË7Å¹¯z&4n6^Þ{ü¡àqyÅ3htÀ\fÊwñôÄ§(0åZ6>ÉÝÄe¸íÆ©Øg|=sAÐÍ!ïãÚ¬Ñ't(HSÞlÚÙmá·Í´fzÊ:j9ÒRÄUùãÃ¬dc9*aÞ]ÔÊsÿ¼ì¬qfo8h^Ôwå¹×®Aw=.+FÍdûµÜ®#<Ò\rÃtè®§whÆ*05åÜ{ý¹ÄªtyÃ*/;ÐÖâ}è·",
        "pöôeJQÅÇvnô"
      )),
      (this.qn = this.Un.split("\n")),
      (this.Nn = -30),
      (this.$n = 0),
      (this.Qn = 0),
      (this.Jn = 24);
  }
  ht() {
    gh.ka(c(" N kÚÎr1é|d{1Xü¼qþ£ÊÇïÞµË¶H&øÿSIV¶á", fa)), gh.Ia(0.5);
  }
  st(t) {
    (this.Nn += t * this.Jn * 0.7),
      C.N.debug && (this.Nn += t * this.Jn * 5),
      (this.$n = Math.max(0, Math.floor((this.Nn - 240) / this.Jn))),
      (this.Qn = Math.min(this.qn.length, Math.ceil(this.Nn / this.Jn))),
      this.$n === this.Qn &&
        this.$n > 0 &&
        (gh.ka(void 0),
        L.B(),
        alert(
          c(
            "å1P7p§@¢IXÆSW÷APU¯¡E5´Àê?8ûz¼<±æÂÁ¤¶ £xà·îÙÄè@yTzÖhuõ|-}4Û¶³úCÒö(Ù÷ºÞmÊ¹B",
            fa
          )
        ),
        (it.nh = "index.html"));
  }
  oh(t) {
    L.D(),
      (t.fillStyle = "black"),
      t.fillRect(0, 0, 320, 240),
      (t.fillStyle = "white"),
      (t.font = "6px sans-serif");
    for (let h = this.$n; this.Qn > h; h++)
      t.fillText(this.qn[h], 10, 240 + (h + 1) * this.Jn - this.Nn);
  }
}
const da = "ÅQîN2zr^èÛN=ÓÖz";
function ma() {
  return m.h(X.O)
    ? (window.alert(c("ÞûÑÏº­µ\bÔÍ¿¿b¼«9:0wàr¦ô]âº¿C%º8c­", da)),
      (document.location = c("±=á6+À[ÙíßJÚï».lÌGóJr«o.×Îï", da)),
      1)
    : 0;
}
const ga = "PDºQõ0É@£c¦¹j6µdÞ½\t¨#â=òÃEÅeÍ)µ",
  va = "\rô¿éùMÀûô_ÚWÆEü",
  ba = "×­PÔ 5Ù\vòaÚ´",
  ua = "pçM¯ÌiçÌMAoãÒla-YÀ\bö",
  la = "¬ùr®?®g9º©]gP:Ö\r9ôÕ³¨èÞ",
  Xa = "\t{%¼´Ûü!OYM¼ÏÔÜMîÕ(Ô7",
  Ya = "ÌPGÏx¼$F«Á^¼âÞä¹èÅ´Üñ",
  Ha = "q@j*¯e;³Å!@1®ÉI\rIíMÜ^\nåq×ë&t",
  Wa = "5DoÎ#UÂpâR§Ë+75À",
  pa = "¯å¼à7A§àÑ³g±Ã",
  Oa = "ÃtOV{¾0U©ÚåéBÁâ@ª=ï=iÈUTð";
class Aa extends Wh {
  constructor() {
    super(xa),
      (this._n = 0),
      (this.zn = 0),
      (this.Zn = 0),
      (this.pause = 0),
      (this.tf = 0),
      (this.Yc = 0),
      (this.hf = 0),
      (this.if = 0),
      (this.sf = 0),
      (this.af = 0),
      (this.rf = 0),
      (this.ef = 0),
      (this.cf = 0),
      (this.nf = 0),
      (this.ff = 0),
      (this.df = 0),
      (this.mf = 1),
      (this.gf = 0),
      (this.vf = 0),
      (this.bf = 0),
      (this.uf = 0),
      (this.Ce = 0),
      (this.lf = 0),
      (this.Nc = 15),
      (this.Xf = 0),
      (this.Yf = 4),
      (this.Hf = 0),
      (this.Wf = 2),
      (this.pf = 0),
      (this.Of = 8),
      (this.Af = -1),
      (this.xf = 0),
      (this.Mf = 0),
      (this.wf = 0),
      (this.Cc = 0),
      (this.kf = 0),
      (this.Tf = 0),
      (this.Lf = 0),
      (this.Sf = 0),
      (this.Cf = 0),
      (this.If = 0),
      (this.Rf = 0),
      (this.Ie = 0),
      (this.jf = 0),
      (this.yf = 0),
      (this.Ef = 0),
      (this.Pf = 0),
      (this.Ff = 0),
      (this.Bf = 0),
      (this.Df = 0),
      (this.Kf = 0),
      (this.Gf = 0),
      (this.Vf = []),
      (this.Uf = 0),
      (this.qf = 0),
      (this.Nf = 0),
      (this.$f = 0),
      (this.Qf = 0),
      (this.Jf = 0),
      (this._f = 0),
      (this.zf = 0),
      (this.Zf = 0),
      (this.ho = 0),
      (this.io = 0),
      (this.so = 0),
      (this.ao = 0),
      (this.ro = 0),
      (this.Vn = 0),
      (this.wr = Vs),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 0),
      (this.Ba[5] = () => this.kc()),
      (this.Ba[6] = () => this.eo()),
      (this.Ba[7] = () => this.co()),
      (this.Ba[8] = () => this.no());
  }
  he() {
    (this.x = 320),
      (this._n = 0),
      (this.zn = 0),
      (Ch.Fn = 4),
      (Ch.fn[20] = 0),
      (this.Zn = 0),
      (this.pause = 0),
      (this.tf = 0),
      (this.Yc = 0),
      (this.hf = 0),
      (this.if = 0),
      (this.sf = 0),
      (this.af = 0),
      (this.rf = 0),
      (this.ef = 0),
      (this.cf = 0),
      (this.nf = 0),
      (this.ff = 0),
      (this.df = 0),
      (this.mf = 1),
      (this.gf = 0),
      (this.vf = 0),
      (this.bf = 0),
      (this.uf = 0),
      (this.Ce = 0),
      (this.lf = 0),
      (this.Nc = 15),
      (this.Xf = 0),
      (this.Yf = 4),
      (this.Hf = 0),
      (this.Wf = 2),
      (this.pf = 0),
      (this.Of = 8),
      (this.Af = -1),
      (this.xf = 0),
      (this.Mf = 0),
      (this.wf = 0),
      (this.Cc = 0),
      (this.kf = 0),
      (this.Tf = 0),
      (this.Lf = 0),
      (this.Sf = 0),
      (this.Cf = 0),
      (this.If = 0),
      (this.Rf = Ch.ye),
      (this.Ie = 0),
      (this.jf = 0),
      (this.yf = 0),
      (Ch.fo = -1);
  }
  kc() {
    this.Ce++;
  }
  eo() {
    this.Cc++;
  }
  co() {
    this.uf++;
  }
  no() {
    this.Hf++;
  }
  gc() {
    if (
      (Be.vc(fr, (t) => {
        t.oo = 1;
      }),
      this._n === 0)
    )
      for (Ch.do = 200, this.Vn = 0; 8 > this.Vn; this.Vn++)
        Fi(20, 6, 40 + this.Vn * 20, 0),
          Fi(20, -6, 40 + this.Vn * 20, 0),
          Fi(40, 6, 40 + this.Vn * 20, 2),
          Fi(40, -6, 40 + this.Vn * 20, 2);
    if (this._n === 1)
      if (((Ch.do = 190), this.bf === 1))
        for (this.Vn = 0; 8 > this.Vn; this.Vn++)
          Fi(20, 8, 40 + this.Vn * 18, 0),
            Fi(20, -8, 40 + this.Vn * 18, 0),
            Fi(40, 8, 40 + this.Vn * 18, 2),
            Fi(40, -8, 40 + this.Vn * 18, 2);
      else
        for (this.Vn = 0; 8 > this.Vn; this.Vn++)
          Fi(20, 7, 40 + this.Vn * 19, 0),
            Fi(20, -7, 40 + this.Vn * 19, 0),
            Fi(40, 7, 40 + this.Vn * 19, 2),
            Fi(40, -7, 40 + this.Vn * 19, 2);
    if (this._n === 2) {
      Ch.do = 240;
      let t = 0;
      for (this.Vn = 0; 5 > this.Vn; this.Vn++) {
        let h = dh._s(20, 30, 40, 60),
          i = 0;
        this.Vn > 0 && (i = dh._s(-2, 0, 2)),
          h === 60 && (i = 0),
          h === 40 && (i *= 0.5),
          Fi(h, 7 + i, 40 + this.Vn * 25 + t, 0),
          Fi(h, -7 + i, 40 + this.Vn * 25 + t, 0),
          Fi(h + 24, 7 + i, 40 + this.Vn * 25 + t, 2),
          Fi(h + 24, -7 + i, 40 + this.Vn * 25 + t, 2),
          h === 30 && (t += 5),
          h === 40 && (t += 10),
          h === 60 && (t += 20);
      }
    }
    if (
      (this._n === 3 &&
        ((Ch.do = 190),
        this.bf === 1
          ? (Fi(100, -12, 25, 1),
            Fi(20, -12, 32, 0),
            Fi(100, -12, 47, 1),
            Fi(20, -12, 54, 0),
            Fi(100, -12, 69, 1),
            Fi(20, -12, 76, 0),
            Fi(20, 10, 105, 0),
            Fi(100, 10, 117, 1),
            Fi(20, 10, 127, 0),
            Fi(100, 10, 139, 1),
            Fi(20, 10, 149, 0),
            Fi(100, 10, 161, 1))
          : (Fi(100, -10, 25, 1),
            Fi(20, -10, 32, 0),
            Fi(100, -10, 47, 1),
            Fi(20, -10, 54, 0),
            Fi(100, -10, 69, 1),
            Fi(20, -10, 76, 0),
            Fi(20, 10, 105, 0),
            Fi(100, 10, 117, 1),
            Fi(20, 10, 127, 0),
            Fi(100, 10, 139, 1),
            Fi(20, 10, 149, 0),
            Fi(100, 10, 161, 1))),
      this._n === 5)
    )
      for (Ch.do = 230, this.Vn = 0; 8 > this.Vn; this.Vn++)
        Fi(20, 4, 65 + this.Vn * 19, 0), Fi(28, -4, 65 + this.Vn * 19, 2);
    if (
      (this._n === 6 &&
        ((Ch.do = 250),
        na(this, 30, 4, 60, 41),
        Pi(40, 4, 70, 30),
        Pi(40, 5, 120, 30),
        Pi(40, 6, 160, 30),
        Fi(90, 7, 160, 2),
        Fi(90, 7, 162, 2),
        Fi(90, 7, 164, 2),
        Fi(40, 9, 222, 2)),
      this._n === 7 &&
        ((Ch.do = 290),
        na(this, 30, -4, 60, 58),
        Pi(40, -5, 70, 25),
        Fi(70, -5, 90, 0),
        Pi(90, -5, 95, 25),
        Pi(40, -5, 110, 25),
        Pi(60, -5, 150, 25),
        Fi(90, -5, 148, 2),
        Pi(50, -5, 170, 25),
        Fi(80, -5, 168, 2),
        Pi(70, -5, 190, 25),
        Fi(100, -5, 188, 2),
        Pi(90, -2, 230, 15),
        Fi(110, -8, 240, 0),
        Fi(40, 3, 260, 2)),
      this._n === 8 && ((Ch.do = 240), (Be.Sc(0, 0, Qr).type = 1)),
      this._n === 9 &&
        ((Ch.we[2] -= 200),
        (Ch.we[0] += 60),
        (Ch.we[1] -= 60),
        Be.Sc(0, 0, ia)),
      this._n === 10)
    ) {
      if (
        (Be.vc(Vr, (t) => {
          (t.speed = 0), (t.Ic = 1);
        }),
        (Ch.we[2] = Ch.we[3] - 200),
        (Ch.we[0] = 220),
        (Ch.we[1] = 420),
        this.bf === 1)
      ) {
        let t = Be.Sc(-40, Ch.we[2] - 95, Qh);
        (t.wr = Ks),
          (t.Sr = 7),
          (t = Be.Sc(720, Ch.we[2] + 100, Qh)),
          (t.wr = Ks),
          (t.Sr = -8),
          (t = Be.Sc(Ch.we[0] - 90, -110, Qh)),
          (t.wr = Nh),
          (t.Ir = 7),
          (t = Be.Sc(Ch.we[0] + 90, 730, Qh)),
          (t.wr = Nh),
          (t.Ir = -7),
          (t = Be.Sc(-190, Ch.we[2] - 95, Qh)),
          (t.wr = Ks),
          (t.Sr = 5),
          (t = Be.Sc(870, Ch.we[2] + 95, Qh)),
          (t.wr = Ks),
          (t.Sr = -8),
          (t = Be.Sc(Ch.we[0] - 90, -310, Qh)),
          (t.wr = Nh),
          (t.Ir = 7),
          (t = Be.Sc(Ch.we[0] + 90, 900, Qh)),
          (t.wr = Nh),
          (t.Ir = -6),
          (t = Be.Sc(-700, Ch.we[2] - 95, Qh)),
          (t.wr = Ks),
          (t.Sr = 7),
          (t = Be.Sc(1290, Ch.we[2] + 95, Qh)),
          (t.wr = Ks),
          (t.Sr = -7),
          (t = Be.Sc(Ch.we[0] - 90, -650, Qh)),
          (t.wr = Nh),
          (t.Ir = 7),
          (t = Be.Sc(Ch.we[0] + 90, 1180, Qh)),
          (t.wr = Nh),
          (t.Ir = -7);
      }
      if (this.bf === 0) {
        let t = Be.Sc(-40, Ch.we[2] - 95, Qh);
        (t.wr = Ks),
          (t.Sr = 7),
          (t = Be.Sc(720, Ch.we[2] + 100, Qh)),
          (t.wr = Ks),
          (t.Sr = -8),
          (t = Be.Sc(Ch.we[0] - 90, -110, Qh)),
          (t.wr = Nh),
          (t.Ir = 7),
          (t = Be.Sc(Ch.we[0] + 90, 760, Qh)),
          (t.wr = Nh),
          (t.Ir = -7),
          (t = Be.Sc(-190, Ch.we[2] - 95, Qh)),
          (t.wr = Ks),
          (t.Sr = 5),
          (t = Be.Sc(870, Ch.we[2] + 95, Qh)),
          (t.wr = Ks),
          (t.Sr = -8),
          (t = Be.Sc(Ch.we[0] - 90, -310, Qh)),
          (t.wr = Nh),
          (t.Ir = 7),
          (t = Be.Sc(Ch.we[0] + 90, 900, Qh)),
          (t.wr = Nh),
          (t.Ir = -6),
          (t = Be.Sc(-660, Ch.we[2] - 95, Qh)),
          (t.wr = Ks),
          (t.Sr = 6),
          (t = Be.Sc(1290, Ch.we[2] + 95, Qh)),
          (t.wr = Ks),
          (t.Sr = -7),
          (t = Be.Sc(Ch.we[0] - 90, -650, Qh)),
          (t.wr = Nh),
          (t.Ir = 7),
          (t = Be.Sc(Ch.we[0] + 90, 1180, Qh)),
          (t.wr = Nh),
          (t.Ir = -7),
          (t = Be.Sc(Ch.we[0] - 90, -960, Qh)),
          (t.wr = Nh),
          (t.Ir = 7),
          (t = Be.Sc(Ch.we[0] + 110, 1510, Qh)),
          (t.wr = Nh),
          (t.Ir = -7);
      }
    }
    if (this._n === 11) {
      Be.vc(Vr, (t) => {
        (t.speed = 0), (t.Ic = 1);
      }),
        (Ch.we[2] = Ch.we[3] - 200),
        (Ch.we[0] = 270),
        (Ch.we[1] = 470);
      let t = Be.Sc(-40, Ch.we[2] - 95, Qh);
      (t.wr = Ks),
        (t.Sr = 6),
        (t = Be.Sc(770, Ch.we[2] + 100, Qh)),
        (t.wr = Ks),
        (t.Sr = -7),
        (t = Be.Sc(Ch.we[0] + 100, -250, Qh)),
        (t.wr = Nh),
        (t.Ir = 7),
        (t = Be.Sc(Ch.we[0] - 100, 630, Qh)),
        (t.wr = Nh),
        (t.Ir = -6),
        (t = Be.Sc(-190, Ch.we[2] - 95, Qh)),
        (t.wr = Ks),
        (t.Sr = 6),
        (t = Be.Sc(1120, Ch.we[2] + 100, Qh)),
        (t.wr = Ks),
        (t.Sr = -7),
        (t = Be.Sc(Ch.we[0] + 100, -500, Qh)),
        (t.wr = Nh),
        (t.Ir = 7),
        (t = Be.Sc(Ch.we[0] - 100, 880, Qh)),
        (t.wr = Nh),
        (t.Ir = -6);
    }
    if (
      (this._n === 12 &&
        ((Ch.do = 240),
        Be.vc(Vr, (t) => {
          (t.speed = 0), (t.Ic = 1);
        }),
        (Ch.we[2] = Ch.we[3] - 200),
        (Ch.we[0] = 120),
        (Ch.we[1] = 520),
        (Be.Sc(0, 0, aa).type = 1)),
      this._n === 13 &&
        ((Ch.do = 240),
        Be.vc(Vr, (t) => {
          (t.speed = 0), (t.Ic = 1);
        }),
        (Ch.we[2] = Ch.we[3] - 200),
        (Ch.we[0] = 120),
        (Ch.we[1] = 520),
        (Be.Sc(0, 0, aa).type = 2)),
      this._n === 14 && (this.uf = 1),
      this._n === 15 && ((Ch.do = 250), (Be.Sc(0, 0, Qr).type = 2)),
      this._n === 16 && ((Ch.do = 240), (Be.Sc(0, 0, Qr).type = 3)),
      this._n === 17)
    ) {
      (Ch.do = 220), na(this, 20, 2, 3, 50), na(this, 20, 2, -5, 20);
      let t = Pi(50, 0, 0, 20);
      (t.Pc = 1),
        (t.x -= 150),
        Be.vc(Vr, (t) => {
          (t.x -= 150), (t.y = Ch.we[3] - 70), (t.Ir = 1);
        });
      let h = Be.Sc(Ch.we[1] - 260, Ch.we[2] + 40, ca);
      (h.Ir = -4),
        (h = Be.Sc(Ch.we[1] - 260, Ch.we[2] + 125, ca)),
        (h.Ir = -4),
        (h = Be.Sc(Ch.we[1] - 180, Ch.we[2], ca)),
        (h.Ir = 5),
        (h = Be.Sc(Ch.we[1] - 180, Ch.we[2] + 95, ca)),
        (h.Ir = 5),
        (h = Be.Sc(Ch.we[1] - 100, Ch.we[2] + 20, ca)),
        (h.Ir = -3),
        (h = Be.Sc(Ch.we[1] - 100, Ch.we[2] + 105, ca)),
        (h.Ir = -3);
    }
    if (this._n === 18) {
      (Ch.do = 220), na(this, 20, 2, 3, 50), na(this, 20, 2, -5, 20);
      let t = Pi(50, 0, 0, 15);
      (t.Pc = 1),
        (t.x -= 150),
        Be.vc(Vr, (t) => {
          (t.x -= 150), (t.y = Ch.we[3] - 70), (t.Ir = 1);
        });
      let h = Be.Sc(Ch.we[1] - 260, Ch.we[2] + 40, ca);
      (h.Ir = -3),
        (h = Be.Sc(Ch.we[1] - 260, Ch.we[2] + 105, ca)),
        (h.Ir = -3),
        (h = Be.Sc(Ch.we[1] - 260, Ch.we[2] + 170, ca)),
        (h.Ir = -3),
        (h = Be.Sc(Ch.we[1] - 180, Ch.we[2], ca)),
        (h.Ir = 4),
        (h = Be.Sc(Ch.we[1] - 180, Ch.we[2] + 90, ca)),
        (h.Ir = 4),
        (h = Be.Sc(Ch.we[1] - 100, Ch.we[2] + 40, ca)),
        (h.Ir = -3),
        (h = Be.Sc(Ch.we[1] - 100, Ch.we[2] + 105, ca)),
        (h.Ir = -3),
        (h = Be.Sc(Ch.we[1] - 100, Ch.we[2] + 170, ca)),
        (h.Ir = -3);
    }
    if (
      (this._n === 19 &&
        ((this.xf = 0),
        (this.Mf = 1),
        (this.Ce = 4),
        Be.vc(fr, (t) => {
          t.oo = 0;
        })),
      this._n === 20 &&
        (Be.vc(fr, (t) => {
          t.oo = 0;
        }),
        (Ch.we[0] = 270),
        (Ch.we[1] = 370),
        (Ch.we[2] = Ch.we[3] - 100),
        Be.vc(Vr, (t) => {
          (t.speed = 0),
            (t.x = Ch.we[0] + 42),
            (t.y = Ch.we[2] + 42),
            (t.Ic = 1),
            (t.wr = Ii);
        }),
        (this.ro = 0),
        (this.lf = 1)),
      this._n === 21)
    ) {
      Ch.do = 210;
      let t = 0;
      for (; 150 > t; ) {
        let h = dh._s(20, 30, 40, 60),
          i = 0,
          s = 0;
        this.Vn > 0 && (i = dh._s(-2, 0, 2)),
          h === 60 && ((i = 0), (s = 1)),
          h === 40 && (i = 0),
          this.Vn > 0 &&
            (h === 20 && (t += 7),
            h === 30 && (t += 9),
            h === 40 && (t += 16),
            h === 60 && (t += 22)),
          s === 1 && (i = -1),
          Fi(h, 8 + i, 32 + t, 0),
          s === 1 && (i = 1),
          Fi(h, -8 + i, 32 + t, 0),
          s === 1 && (i = -1),
          Fi(h + 24, 8 + i, 32 + t, 2),
          s === 1 && (i = 1),
          Fi(h + 24, -8 + i, 32 + t, 2),
          h === 20 && (t += 12),
          h === 30 && (t += 13),
          h === 40 && (t += 16),
          h === 60 && (t += 22);
      }
    }
    if (this._n === 22)
      for (
        Ch.do = 180,
          Ch.we[2] = Ch.we[3] - 160,
          Ch.we[0] = 240,
          Ch.we[1] = 400,
          Be.vc(Vr, (t) => {
            (t.speed = 0),
              (t.Ic = 1),
              (t.x = Ch.we[0] + 76),
              (t.y = Ch.we[2] + 76),
              (t.wr = Ii);
          }),
          this.Vn = 0;
        7 > this.Vn;
        this.Vn++
      ) {
        let t = Be.Sc(
          Ch.we[0] - 110,
          Ch.we[2] - 300 - this.Vn * (216 - this.Vn * 3),
          Qh
        );
        (t.wr = Nh),
          (t.Ir = 10),
          (t = Be.Sc(
            Ch.we[1] - 70,
            Ch.we[3] + 300 + this.Vn * (216 - this.Vn * 3),
            Qh
          )),
          (t.wr = Nh),
          (t.Ir = -10);
      }
    if (this._n === 23) {
      Ch.do = 210;
      let t = 0;
      for (; 150 > t; ) {
        let h = dh._s(20, 30, 40, 60),
          i = 0,
          s = 0;
        this.Vn > 0 && (i = dh._s(-2, 0, 2)),
          h === 60 && ((i = 0), (s = 1)),
          h === 40 && (i = 0),
          this.Vn > 0 &&
            (h === 20 && (t += 9),
            h === 30 && (t += 11),
            h === 40 && (t += 19),
            h === 60 && (t += 25)),
          s === 1 && (i = -1),
          Fi(h, 8 + i, 32 + t, 0),
          s === 1 && (i = 1),
          Fi(h, -8 + i, 32 + t, 0),
          s === 1 && (i = -1),
          Fi(h + 24, 8 + i, 32 + t, 2),
          s === 1 && (i = 1),
          Fi(h + 24, -8 + i, 32 + t, 2),
          h === 20 && (t += 15),
          h === 30 && (t += 17),
          h === 40 && (t += 19),
          h === 60 && (t += 25);
      }
    }
  }
  je() {
    this.Ie || (Lh.pe(Rt), Ch.ye--, (this.Ie = 1));
  }
  qc() {
    Be.vc(Vr, (t) => {
      (t.Bc = 0), (t.Ic = 2), (t.wr = Ri), (t.Sr = 0), (t.Ir = this.Nc);
    });
  }
  mo() {
    Be.vc(Vr, (t) => {
      (t.Bc = 0), (t.Ic = 11), (t.wr = yi), (t.Sr = this.Nc), (t.Ir = 0);
    });
  }
  vo() {
    Be.vc(Vr, (t) => {
      (t.Bc = 0), (t.Ic = 12), (t.wr = Ei), (t.Sr = 0), (t.Ir = -this.Nc);
    });
  }
  bo() {
    Be.vc(Vr, (t) => {
      (t.Bc = 0), (t.Ic = 13), (t.wr = ji), (t.Sr = -this.Nc), (t.Ir = 0);
    });
  }
  rt() {
    if (
      ((this.jf = 0),
      this.yf++,
      45 > Ch.uo || 5 > this.yf || ((this.jf = 1), (this.yf = 0)),
      60 > Ch.uo || 4 > this.yf || ((this.jf = 1), (this.yf = 0)),
      75 > Ch.uo || 3 > this.yf || ((this.jf = 1), (this.yf = 0)),
      4 > this.Ce ||
        Ch.ye > 10 ||
        2 > this.yf ||
        ((this.jf = 1), (this.yf = 0)),
      this.jf === 0 && (this.Ie = 0),
      (this.y = Ch.we[2] - 130),
      this.tf === 3 && (this.Yc++, (this.hf = Math.sin(this.Yc / 18) * 2)),
      this.tf === 2 && (this.Yc++, (this.hf = Math.sin(this.Yc / 15) * 4)),
      this.tf === 1 &&
        (this.Yc++,
        (this.hf = Math.sin(this.Yc / 3)),
        (this.if = Math.cos(this.Yc / 6))),
      this.tf === 0 && ((this.Yc = 0), (this.hf = 0), (this.if = 0)),
      this.rf === 0 &&
        (mh.Wa($s, 0, this.x, this.y + 90, 2, 2, 0, 16777215, 1),
        this.cf === 0 &&
          mh.Wa(
            _s,
            Ch.fn[20],
            this.x + this.if,
            this.y + 42 + this.hf / 1.5,
            2,
            2,
            0,
            16777215,
            1
          ),
        this.cf === 1 &&
          (11 > this.nf || (this.nf = 11),
          mh.Wa(
            Js,
            Math.floor(this.nf / 2),
            this.x,
            this.y + 42,
            2,
            2,
            0,
            16777215,
            1
          ),
          this.nf === 2 && (this.df = -4),
          this.nf === 4 && (this.df = -8),
          this.nf === 6 && (this.df = 10),
          this.nf === 8 && (this.df = 4),
          11 > this.nf ? (this.nf += this.mf) : (this.nf = 11)),
        this.cf === 2 &&
          (11 > this.nf || (this.nf = 11),
          mh.Wa(
            Ns,
            Math.floor(this.nf / 2),
            this.x,
            this.y + 42,
            2,
            2,
            0,
            16777215,
            1
          ),
          this.nf === 0 && (this.ff = 4),
          this.nf === 2 && (this.ff = 10),
          this.nf === 4 && (this.ff = 4),
          this.nf === 6 && (this.ff = -4),
          this.nf === 8 && (this.ff = 0),
          11 > this.nf ? (this.nf += this.mf) : (this.nf = 11)),
        this.cf === 3 &&
          (9 > this.nf || (this.nf = 9),
          mh.Wa(
            qs,
            Math.floor(this.nf / 2),
            this.x,
            this.y + 42,
            2,
            2,
            0,
            16777215,
            1
          ),
          this.nf === 0 && (this.ff = 0),
          this.nf === 2 && (this.ff = 0),
          this.nf === 4 && (this.ff = 6),
          this.nf === 6 && (this.ff = 10),
          9 > this.nf ? (this.nf += this.mf) : (this.nf = 9)),
        this.cf === 4 &&
          (10 > this.nf || (this.nf = 10),
          mh.Wa(
            Js,
            Math.floor(5 - this.nf / 2),
            this.x,
            this.y + 42,
            2,
            2,
            0,
            16777215,
            1
          ),
          10 > this.nf || (this.df = 0),
          this.nf === 8 && (this.df = -4),
          this.nf === 6 && (this.df = -8),
          this.nf === 4 && (this.df = 10),
          this.nf === 2 && (this.df = 4),
          10 > this.nf ? (this.nf += this.mf) : (this.nf = 10)),
        this.gf === 0 &&
          mh.Wa(
            Vs,
            Ch.Fn,
            this.x + this.if + this.df,
            this.y + this.hf + this.ff,
            2,
            2,
            0,
            16777215,
            1
          ),
        1 > this.Zn ||
          this.Zn > 3 ||
          mh.Wa(
            Us,
            this.Zn - 1,
            this.x + this.if + this.df,
            this.y + this.hf + this.ff,
            2,
            2,
            0,
            16777215,
            1
          ),
        this.gf === 1 &&
          (this.vf++,
          mh.Wa(
            Gs,
            Math.floor(this.vf / 2),
            this.x + this.if + this.df,
            this.y + this.hf + this.ff,
            2,
            2,
            0,
            16777215,
            1
          ))),
      this.rf === 1 &&
        (mh.Wa(
          Qs,
          0,
          this.x + this.sf,
          this.y + 100 + this.af,
          2,
          2,
          0,
          16777215,
          1
        ),
        mh.Wa(
          _s,
          Ch.fn[20],
          this.x + this.if,
          this.y + 62 + this.hf / 1.5,
          2,
          2,
          0,
          16777215,
          1
        ),
        mh.Wa(
          Vs,
          Ch.Fn,
          this.x + this.if,
          this.y + this.hf + 30,
          2,
          2,
          0,
          16777215,
          1
        )),
      this.zn === 1)
    )
      for (this.Vn = 0; 5 > this.Vn; this.Vn++)
        mh.la(
          Ch.we[0] + this.Vn,
          Ch.we[2] + this.Vn,
          Ch.we[1] + this.Vn,
          Ch.we[3] + this.Vn,
          16777215,
          1
        );
    if (
      (this.uf === 1 &&
        ((this.Nc = 25),
        (Ch.we[0] = 240),
        (Ch.we[1] = 400),
        (Ch.we[2] = Ch.we[3] - 160),
        (this.tf = 0),
        (this.gf = 1),
        (this.cf = 3),
        (this.nf = 0),
        (this.ff = 0),
        (this.df = 0),
        Be.vc(fr, (t) => {
          t.lo = 1;
        }),
        (this.uf = 2),
        (this.Fa[7] = 7)),
      this.uf === 3 && (this.qc(), (this.uf = 4), (this.Fa[7] = 14)),
      this.uf === 5)
    ) {
      (this.uf = 6),
        (this.Fa[7] = 10),
        (this.cf = 2),
        (this.nf = 0),
        (this.ff = 0),
        (this.df = 0),
        (this.gf = 0);
      const t = Be.Sc(0, 0, qh);
      for (
        t.dir = 0, t.height = 55, t.Pe = 6, t.Fe = 30, this.Vn = 0;
        20 > this.Vn;
        this.Vn++
      )
        (Fi(135 - Math.sin(this.Vn / 3) * 28, 12, 40 + this.Vn * 2, 2).Yc =
          this.Vn * 3),
          (Fi(90 - Math.sin(this.Vn / 3) * 28, 12, 40 + this.Vn * 2, 0).Yc =
            this.Vn * 3);
    }
    if (
      (this.uf === 7 && ((this.Nc = 15), (this.uf = 8), (this.Fa[7] = 10)),
      this.uf === 9 &&
        ((this.cf = 1),
        (this.nf = 0),
        (this.ff = 0),
        (this.df = 0),
        (this.uf = 9.1),
        (this.Fa[7] = 8),
        Be.vc(
          Vr,
          (t) => {
            (t.Ic = 1), (t.speed = 0), (t.wr = Ii);
          },
          1
        ),
        Lh.We(Lt)),
      this.uf === 10.1 &&
        (Be.vc(
          fr,
          (t) => {
            t.lo = 1;
          },
          1
        ),
        (this.uf = 10),
        (this.Fa[7] = 37)),
      this.uf === 11)
    ) {
      (this.cf = 0), (this.nf = 0), (this.ff = 0), (this.df = 0);
      let t = Be.Sc(0, 0, Nr);
      (t.hn = 90),
        (t.fc = Ch.we[0] - 50),
        (t.oc = Ch.we[2] + 20),
        (t.nr = 2),
        (t.dr = 2),
        (t = Be.Sc(640, 480, Nr)),
        (t.hn = -90),
        (t.fc = Ch.we[1] + 50),
        (t.oc = Ch.we[3] - 20),
        (t.nr = 2),
        (t.dr = 2),
        (t = Be.Sc(0, 0, Nr)),
        (t.hn = 0),
        (t.fc = Ch.we[0] + 20),
        (t.oc = Ch.we[2] - 60),
        (t.nr = 2),
        (t.dr = 2),
        (t = Be.Sc(640, 480, Nr)),
        (t.hn = 180),
        (t.fc = Ch.we[1] - 20),
        (t.oc = Ch.we[3] + 60),
        (t.nr = 2),
        (t.dr = 2),
        Be.vc(Nr, (t) => {
          (t.pause = 10), (t.sn = 8);
        }),
        (this.uf = 12),
        (this.Fa[7] = 25);
    }
    if (this.uf === 13) {
      (this.cf = 0), (this.nf = 0), (this.ff = 0), (this.df = 0);
      let t = Be.Sc(0, 0, Nr);
      (t.hn = 45),
        (t.fc = Ch.we[0] - 50),
        (t.oc = Ch.we[2] - 50),
        (t.nr = 2),
        (t.dr = 2),
        (t = Be.Sc(640, 0, Nr)),
        (t.hn = -45),
        (t.fc = Ch.we[1] + 50),
        (t.oc = Ch.we[2] - 50),
        (t.nr = 2),
        (t.dr = 2),
        (t = Be.Sc(0, 480, Nr)),
        (t.hn = 135),
        (t.fc = Ch.we[0] - 50),
        (t.oc = Ch.we[3] + 50),
        (t.nr = 2),
        (t.dr = 2),
        (t = Be.Sc(640, 480, Nr)),
        (t.hn = -135),
        (t.fc = Ch.we[1] + 50),
        (t.oc = Ch.we[3] + 50),
        (t.nr = 2),
        (t.dr = 2),
        Be.vc(Nr, (t) => {
          (t.pause = 10), (t.sn = 8);
        }),
        (this.uf = 14),
        (this.Fa[7] = 25);
    }
    if (this.uf === 15) {
      (this.cf = 0), (this.nf = 0), (this.ff = 0), (this.df = 0);
      let t = Be.Sc(0, 0, Nr);
      (t.hn = 90),
        (t.fc = Ch.we[0] - 50),
        (t.oc = Ch.we[2] + 20),
        (t.nr = 2),
        (t.dr = 2),
        (t = Be.Sc(640, 480, Nr)),
        (t.hn = -90),
        (t.fc = Ch.we[1] + 50),
        (t.oc = Ch.we[3] - 20),
        (t.nr = 2),
        (t.dr = 2),
        (t = Be.Sc(0, 0, Nr)),
        (t.hn = 0),
        (t.fc = Ch.we[0] + 20),
        (t.oc = Ch.we[2] - 60),
        (t.nr = 2),
        (t.dr = 2),
        (t = Be.Sc(640, 480, Nr)),
        (t.hn = 180),
        (t.fc = Ch.we[1] - 20),
        (t.oc = Ch.we[3] + 60),
        (t.nr = 2),
        (t.dr = 2),
        Be.vc(Nr, (t) => {
          (t.pause = 10), (t.sn = 8);
        }),
        (this.uf = 16),
        (this.Fa[7] = 20);
    }
    if (this.uf === 17) {
      let t = Be.Sc(0, 240, Nr);
      (t.hn = 90),
        (t.fc = Ch.we[0] - 100),
        (t.oc = Ch.we[2] + 80),
        (t.nr = 3),
        (t.dr = 3),
        (t.pause = 20),
        (t.sn = 15),
        (t = Be.Sc(640, 240, Nr)),
        (t.hn = -90),
        (t.fc = Ch.we[1] + 100),
        (t.oc = Ch.we[2] + 80),
        (t.nr = 3),
        (t.dr = 3),
        (t.pause = 20),
        (t.sn = 15),
        (this.uf = 18),
        (this.Fa[7] = 90);
    }
    if (this.uf === 19) {
      const t = m.h(X.M) ?? 0;
      m.i(X.M, t + 1),
        (Ch.Fn = 0),
        (Ch.fn[20] = 0),
        (Ch.En = 0),
        (Ch.Hn = 109),
        (Ch.Sn[0] = c("Ò=ÚmÂÂGqÝìÇñå¢:ýUÔ", "!ð \\lÜU]ú6Ó\váeFÓ")),
        (Ch.Sn[1] = c(
          "Âaù)ÙÏ4Ï6ÿB+µt,BþiuÔÎ¾¼úûG¾Ý¢3ÈËÚÆ¨P+0V@!|d[?KhLI6}(æÚÒ«[ÃàvR|qj½Ùý2&Xn",
          ga
        )),
        t === 1 &&
          ((Ch.Sn[0] = c(
            "E½Ïü µ@Éó«drÈ¾ö¸\rxhæ! 5äÇZnºåd±r84¯Î,Fä°¿ÛvÔ\fß1¤²çÎ¥M",
            ga
          )),
          (Ch.Sn[1] = c("k^lN Xuáq{¢-.¡_dúal§1u²TWRçÓDhNuØ¿2ÜR(D©uÖ'|é", ga))),
        2 > t || (Ch.Sn[0] = c("\b|Dwª\v=IKÎÅýÒ$Êt¦§P\\Ô=×ú", ga)),
        ha(this, Be.ke(fr).x + 120, this.y - 10),
        (this.uf = 20);
    }
    if (
      (this.uf !== 20 ||
        Be.Tc(Bs) ||
        ((Ch.Fn = 0),
        (Ch.fn[20] = 0),
        (this.tf = 1),
        Be.vc(
          Oh,
          (t) => {
            t.le = 0;
          },
          1
        ),
        (Ch.Sn[0] =
          Be.ke(fr).Xo === 0
            ? c(":×ÍÔn¡uclñaò¬N ¢Êx52Új6:q£[{¯IØ¡hÉj\b\0Õé\rø÷x:?>;ùé", ga)
            : c('L%Qy.üfm\\ÔÝ&ßD/ª´"ÞµfW0_hw£ØÉª³âÛíÑM[}¶(ß¡ü!2B<ñØIÜ', va)),
        (Ch.border = 0),
        (this.uf = 21),
        (this.Fa[7] = 5)),
      this.uf === 22 &&
        ((Ch.Xc = 0),
        Be.vc(
          fr,
          (t) => {
            t.Yo = 1;
          },
          1
        ),
        gh.ka(Ch.Ho),
        gh.Ia(0.45),
        (Ch.lc = 3),
        (Ch.uc = 0),
        (this.uf = -1)),
      this.Xf === 1)
    ) {
      if (this.Hf === 0) {
        for (
          Be.vc(Vr, (t) => {
            (t.x = Ch.we[0] + Math.floor(Ch.we[1] - Ch.we[0]) / 2),
              (t.y = Ch.we[2] + Math.floor(Ch.we[3] - Ch.we[2]) / 2),
              (t.speed = 0),
              (t.Ic = 1),
              (t.wr = Ii);
          }),
            this.Ef = dh._s(0, 1, 2, 3),
            this.Vn = 0;
          10 > this.Vn;
          this.Vn++
        )
          this.Af === this.Ef && (this.Ef = dh._s(0, 1, 2, 3));
        this.Ef === this.Af && (this.Ef++, this.Ef > 3 && (this.Ef = 0)),
          (this.Af = this.Ef),
          (this.Hf = 1),
          (this.mf = 1),
          this.Wf === 2 && (this.mf = 2),
          this.Ef === 0 &&
            ((this.cf = 3), (this.nf = 0), (this.ff = 0), (this.df = 0)),
          this.Ef === 1 &&
            ((this.cf = 1), (this.nf = 0), (this.ff = 0), (this.df = 0)),
          this.Ef === 2 &&
            ((this.cf = 2), (this.nf = 0), (this.ff = 0), (this.df = 0)),
          this.Ef === 3 &&
            ((this.cf = 4), (this.nf = 0), (this.ff = 0), (this.df = 0)),
          (this.Fa[8] = 8),
          this.Wf === 2 && (this.Fa[8] = 4);
      }
      if (
        (this.Hf === 2 &&
          ((this.Pf = 0),
          (this.Nc = 16),
          this.Ef === 0 && this.qc(),
          this.Ef === 1 && this.mo(),
          this.Ef === 2 && this.vo(),
          this.Ef === 3 && this.bo(),
          (this.Hf = 3)),
        this.Hf === 3 && (this.Pf++, Be.ke(Vr).speed < this.Nc && this.Pf >= 5))
      ) {
        this.Pf = 0;
        const t = Be.Sc(0, 0, qh);
        (t.Pe = 12),
          (t.height = 25),
          (t.Fe = 4),
          (t.dir = this.Ef),
          (this.Hf = 4),
          (this.Fa[8] = 18),
          this.Wf === 1 && (this.Fa[8] = 12),
          this.Wf === 1 && (t.Pe = 9),
          this.Wf === 1 && (t.Fe = -2),
          this.Wf === 2 && (this.Fa[8] = 7),
          this.Wf === 2 && (t.Fe = -7),
          this.Wf === 2 && (t.height = 40);
      }
      this.Hf === 5 &&
        (this.Wf === 2 && (this.mf = 2),
        (this.Ef = dh._s(0, 1, 2, 3)),
        (this.Hf = 1),
        this.Ef === 0 &&
          ((this.cf = 3), (this.nf = 0), (this.ff = 0), (this.df = 0)),
        this.Ef === 1 &&
          ((this.cf = 1), (this.nf = 0), (this.ff = 0), (this.df = 0)),
        this.Ef === 2 &&
          ((this.cf = 2), (this.nf = 0), (this.ff = 0), (this.df = 0)),
        this.Ef === 3 &&
          ((this.cf = 4), (this.nf = 0), (this.ff = 0), (this.df = 0)),
        (this.Hf = 1),
        this.pf++,
        (this.Fa[8] = 8),
        this.Wf === 2 && (this.Fa[8] = 7),
        this.pf > this.Of &&
          (Be.Tc(vi) || Be.Sc(0, 0, vi),
          (this.Hf = -1),
          (this.pf = 0),
          (this.Xf = 0),
          Be.vc(
            Vr,
            (t) => {
              (t.Ic = 1), (t.wr = Ci), (t.speed = 0);
            },
            1
          ),
          (this.cf = 0),
          (this.nf = 0),
          (this.ff = 0),
          (this.df = 0),
          (this.Fa[8] = -1),
          Be.vc(fr, (t) => {
            t.tn = 0;
          }),
          (Ch.lc = 3)));
    }
    if (
      (this.Ce === 4 &&
        (Be.vc(Vr, (t) => {
          (t.speed = 0), (t.Ic = 1), (t.wr = Ii);
        }),
        (Ch.we[0] = 240),
        (Ch.we[1] = 400),
        (Ch.we[2] = Ch.we[3] - 160),
        (this.Xf = 1),
        (this.Hf = 0),
        (this.pf = 0),
        (this.Wf = 2),
        (this.Pf = 0),
        (this.Ce = 5)),
      this.Ce === 5)
    ) {
      if (this.pf === 3 && this.Hf === 3 && this.Pf === 3) {
        let t = Be.Sc(Ch.we[0] - 110, Ch.we[2] - 300, Qh);
        (t.wr = Nh),
          (t.Ir = 11),
          (t = Be.Sc(Ch.we[1] - 70, Ch.we[3] + 300, Qh)),
          (t.wr = Nh),
          (t.Ir = -11),
          (t = Be.Sc(Ch.we[0] - 110, Ch.we[2] - 525, Qh)),
          (t.wr = Nh),
          (t.Ir = 11),
          (t = Be.Sc(Ch.we[1] - 70, Ch.we[3] + 525, Qh)),
          (t.wr = Nh),
          (t.Ir = -11),
          (t = Be.Sc(Ch.we[0] - 110, Ch.we[2] - 750, Qh)),
          (t.wr = Nh),
          (t.Ir = 11),
          (t = Be.Sc(Ch.we[1] - 70, Ch.we[3] + 750, Qh)),
          (t.wr = Nh),
          (t.Ir = -11);
      }
      this.pf !== 4 ||
        this.Hf !== 3 ||
        0 > this.Pf ||
        ((this.Hf = -1),
        (this.Xf = -1),
        Be.vc(Vr, (t) => {
          (t.speed = 0), (t.Ic = 1), (t.wr = Ii);
        }),
        (this.Ce = 6),
        (this.Fa[5] = 60));
    }
    if (
      (this.Ce === 7 &&
        ((this.Nc = 25),
        (this.mf = 2),
        (this.cf = 4),
        (this.nf = 0),
        (this.ff = 0),
        (this.df = 0),
        (this.Ce = 8),
        (this.Fa[5] = 6)),
      this.Ce === 9 && (this.bo(), (this.Ce = 10), (this.Fa[5] = 8)),
      this.Ce === 11 &&
        ((this.cf = 1),
        (this.nf = 0),
        (this.ff = 0),
        (this.df = 0),
        (this.Ce = 12),
        (this.Fa[5] = 6)),
      this.Ce === 13 &&
        ((this.Nc = 15), this.mo(), (this.Ce = 14), (this.Fa[5] = 10)),
      this.Ce === 14 &&
        (Be.vc(Vr, (t) => {
          t.Bc = 0;
        }),
        (Ch.we[1] += 15)),
      this.Ce === 15 && ((this.Ce = 16), (this.Fa[5] = 40)),
      this.Ce === 16 &&
        ((Ch.we[0] -= 30),
        (Ch.we[1] += 10),
        (this.ef = 1),
        (this.Ff = 0),
        Be.vc(Vr, (t) => {
          t.speed = 0;
        }),
        Be.ke(Vr).x > 40 &&
          Be.vc(Vr, (t) => {
            t.x -= 10;
          }),
        Ch.we[2]++,
        (Ch.we[3] -= 0.5)),
      this.Ce === 17)
    ) {
      for (this.Vn = 0; 45 > this.Vn; this.Vn++) {
        let t = Fi(70 - Math.sin(this.Vn / 2) * 25, -30, 10 + this.Vn * 2, 2);
        (t.Yc = this.Vn * 3),
          (t.x += 15),
          (t = Fi(30 - Math.sin(this.Vn / 2) * 25, -30, 10 + this.Vn * 2, 0)),
          (t.Yc = this.Vn * 3),
          (t.x += 15);
      }
      (this.Ce = 18), (this.Fa[5] = 100);
    }
    if (this.Ce === 19) {
      let t = Fi(50, -30, 10, 2);
      for (
        t.x += 15,
          t = Fi(50, -30, 10, 2),
          t.x += 30,
          t = Fi(50, -30, 10, 2),
          t.x += 45,
          t = Fi(50, -30, 21, 0),
          t.x += 15,
          t = Fi(50, -30, 21, 0),
          t.x += 30,
          t = Fi(50, -30, 21, 0),
          t.x += 45,
          t = Fi(50, -30, 31, 2),
          t.x += 15,
          t = Fi(50, -30, 31, 2),
          t.x += 30,
          t = Fi(50, -30, 31, 2),
          t.x += 45,
          t = Fi(50, -30, 41, 0),
          t.x += 15,
          t = Fi(50, -30, 41, 0),
          t.x += 30,
          t = Fi(50, -30, 41, 0),
          t.x += 45,
          t = Fi(50, -30, 50, 2),
          t.x += 15,
          t = Fi(50, -30, 50, 2),
          t.x += 30,
          t = Fi(50, -30, 50, 2),
          t.x += 45,
          t = Fi(50, -30, 59, 0),
          t.x += 15,
          t = Fi(50, -30, 59, 0),
          t.x += 30,
          t = Fi(50, -30, 59, 0),
          t.x += 45,
          t = Fi(50, -30, 67, 2),
          t.x += 15,
          t = Fi(50, -30, 67, 2),
          t.x += 30,
          t = Fi(50, -30, 67, 2),
          t.x += 45,
          t = Fi(50, -30, 78, 0),
          t.x += 15,
          t = Fi(50, -30, 78, 0),
          t.x += 30,
          t = Fi(50, -30, 78, 0),
          t.x += 45,
          t = Fi(50, -30, 87, 2),
          t.x += 15,
          t = Fi(50, -30, 87, 2),
          t.x += 30,
          t = Fi(50, -30, 87, 2),
          t.x += 45,
          this.Vn = 0;
        24 > this.Vn;
        this.Vn++
      )
        (t = Fi(90 - this.Vn, -30, 100 + this.Vn, 2)),
          (t.x += 15),
          (t = Fi(10 + this.Vn, -30, 100 + this.Vn, 0)),
          (t.x += 15);
      (this.Ce = 20), (this.Fa[5] = 134);
    }
    if (
      (this.Ce === 21 &&
        ((this.Ce = 23),
        (Ch.we[1] = 640),
        Be.vc(
          Vr,
          (t) => {
            t.Sr = 11;
          },
          1
        )),
      this.Ce === 23 &&
        (Ch.we[1] > 420 && (Ch.we[1] -= 18),
        Be.ke(Vr).Sr > 0 ||
          ((Ch.Fn = 0),
          (Ch.fn[20] = 0),
          (this.ef = 0),
          (this.Ce = 24),
          (this.Fa[5] = 5))),
      this.Ce === 25)
    ) {
      const t = Be.Sc(0, 0, qh);
      (t.Fe = 15),
        (t.Pe = 12),
        (t.height = 50),
        (t.dir = 1),
        (this.mf = 1),
        (this.cf = 4),
        (this.nf = 0),
        (this.ff = 0),
        (this.df = 0),
        (this.Ce = 26),
        (this.Fa[5] = 28);
    }
    if (
      (this.Ce === 27 &&
        (Be.vc(
          Vr,
          (t) => {
            t.speed = 0;
          },
          1
        ),
        (Be.Sc(0, 0, Di).level = 3),
        (this.Ce = 28)),
      this.ef === 1 &&
        ((this.cf = 0),
        (this.Ff += 0.05),
        (this.x -= Math.floor(30 + this.Ff)),
        -100 > this.x &&
          ((Ch.Fn = dh._s(0, 1, 3, 4, 5)),
          (Ch.fn[20] = dh._s(0, 0, 0, 1)),
          (this.x = 740))),
      this.Ce === 50 &&
        (Be.vc(
          Vr,
          (t) => {
            (t.speed = 0), (t.Ic = 1), (t.wr = Ii);
          },
          0
        ),
        (this.Df = 0),
        (this.Bf = 1),
        (this.Ce = 51),
        (this.Kf = 0),
        (this.Gf = 0),
        (this.Vf = [])),
      this.Ce === 51)
    ) {
      if (this.Kf === 1) {
        const t = dh.Ds(150, this.Df * 10),
          h = dh.Ks(150, this.Df * 10);
        (this.Vf[this.Gf] = Be.Sc(0, 0, Nr)),
          Be.Ye(this.Vf[this.Gf]) &&
            ((this.Vf[this.Gf].hn = this.Df * 10 - 90),
            (this.Vf[this.Gf].fc = t + Ch.we[0] + (Ch.we[1] - Ch.we[0]) / 2),
            (this.Vf[this.Gf].oc = h + Ch.we[2] + (Ch.we[3] - Ch.we[2]) / 2),
            (this.Vf[this.Gf].x = t * 3 + Ch.we[0] + (Ch.we[1] - Ch.we[0]) / 2),
            (this.Vf[this.Gf].y = h * 3 + Ch.we[2] + (Ch.we[3] - Ch.we[2]) / 2),
            (this.Vf[this.Gf].sn = 0),
            (this.Vf[this.Gf].pause = 15),
            (this.Vf[this.Gf].dr = 2)),
          (this.Df += this.Bf),
          1.7 > this.Bf && (this.Bf += 0.015),
          this.Gf++,
          (this.Kf = 0);
      } else this.Kf = 1;
      190 > this.Df ||
        (Be.vc(
          Vr,
          (t) => {
            t.Wo = 1;
          },
          1
        ),
        (this.Uf = -1),
        (this.tf = 0),
        (this.Nc = 30),
        (this.mf = 2),
        (this.qf = 0),
        (this.Nf = 0),
        (this.$f = 0),
        (this.Ce = 52),
        (this.Fa[5] = 30));
    }
    if (this.Ce === 53) {
      if (this.qf === 0) {
        for (this.Qf = dh._s(1, 2, 3, 4), this.Vn = 0; 8 > this.Vn; this.Vn++)
          this.Qf === this.Uf && (this.Qf = dh._s(1, 2, 3, 4));
        this.Nf === 0 && ((this.Qf = 1), (this.gf = 1)),
          this.Nf === 18 && (this.Qf = 2),
          (this.cf = this.Qf),
          (this.nf = 0),
          (this.ff = 0),
          (this.df = 0);
      }
      this.qf === 8 / this.mf &&
        (this.Nf === 18 && (this.$f = 21),
        this.Nf === 17 && (this.$f = 12),
        this.Qf === 1 && this.mo(),
        this.Qf === 3 && this.qc(),
        this.Qf === 2 && this.vo(),
        this.Qf === 4 && this.bo()),
        this.qf === this.$f * 2 + 8 / this.mf + 4 &&
          (this.Nf === 18 && (this.Nc = 2),
          this.Qf === 3
            ? (this.Qf = 2)
            : this.Qf === 1
            ? (this.Qf = 4)
            : this.Qf === 4
            ? (this.Qf = 1)
            : this.Qf === 2 && (this.Qf = 3),
          (this.Uf = this.Qf),
          this.Nf === 18 && ((this.Qf = 3), (this.Zn = 3), (Ch.Fn = 9)),
          (this.cf = this.Qf),
          (this.nf = 0),
          (this.ff = 0),
          (this.df = 0)),
        this.qf === this.$f * 2 + (8 / this.mf) * 2 + 4 &&
          (this.Qf === 1 && this.mo(),
          this.Qf === 3 && this.qc(),
          this.Qf === 2 && this.vo(),
          this.Qf === 4 && this.bo(),
          this.Nf === 18 && (this.$f = 21)),
        this.qf++,
        this.qf === this.$f * 4 + (8 / this.mf) * 2 + 7 &&
          ((this.qf = 0),
          this.Nf++,
          this.Nf === 11 && ((this.$f = 1), gh.Ia(0.4), (this.Nc = 20)),
          this.Nf === 12 && ((this.$f = 2), (this.Nc = 20)),
          this.Nf === 13 &&
            ((this.$f = 0),
            (this.mf = 1),
            (this.Nc = 16),
            (this.Zn = 1),
            (this.gf = 0),
            (Ch.Fn = 0)),
          this.Nf === 14 && ((this.$f = 2), gh.Ia(0.35), (this.Nc = 14)),
          this.Nf === 15 && ((this.$f = 4), gh.Ia(0.25), (this.Nc = 12)),
          this.Nf === 16 && ((this.$f = 6), gh.Ia(0.125), (this.Nc = 12)),
          this.Nf === 17 &&
            ((this.$f = 8),
            gh.Ia(0.075),
            (this.mf = 0.5),
            (this.Nc = 11),
            (this.Zn = 2),
            (Ch.Fn = 2)),
          this.Nf === 18 && ((this.$f = 15), gh.Ia(0.035), (this.Nc = 8)),
          this.Nf === 19 &&
            ((this.Ce = 60),
            gh.Ia(0),
            (this.cf = 0),
            (this.df = 0),
            (this.ff = 0),
            (this.tf = 2),
            (this.Mf = 0)));
    }
    if (
      (this.Ce === 60 && ((this.Ce = 61), (this.Fa[5] = 80)),
      this.Ce === 62 &&
        ((this.Sf = 9),
        Be.vc(
          Vr,
          (t) => {
            (t.Ic = 1), (t.speed = 0), (t.wr = Ci);
          },
          0
        ),
        (this.Zn = 3),
        (Ch.Fn = 9),
        (Ch.fn[20] = 0),
        (Ch.En = 0),
        (Ch.Hn = 109),
        (Ch.Sn[0] = c("ßß\f\f<t}Ý¤¾®Ûtoà³>üÒåVOù¥·[&", va)),
        (Ch.Sn[1] = c("É¿º^ Æ.ûÒÍ´±lJ\0ôÃì<×4¸Ü£×\tî«0ü", va)),
        (Ch.Sn[2] = c("îäxPd¬B÷F'wXG%ÇÑy@°à!@PUë¿úºT¤â2G³h<õf{ ÷Ð", va)),
        (Ch.Sn[3] = c("Û¡î`O<JÆZwyÞ¥}\v¬uÏ(\nOØk*\t", va)),
        (Ch.Sn[4] = c("OQc>®·6÷ýW#Ï1ùÊÍn\0[>¹ÌæD{M©RÑÃ>º", va)),
        ha(this, Be.ke(fr).x + 120, this.y - 10),
        (this.Ce = 63)),
      this.Ce !== 63 ||
        Be.Tc(Bs) ||
        ((Ch.fn[20] = 0), (this.Ce = 64), (this.Fa[5] = 300)),
      this.Ce === 65 &&
        ((Ch.En = 0),
        (Ch.Hn = 109),
        (Ch.Sn[0] = c("l ä\tGCm@¢sù=FÁß½/", ba)),
        (Ch.Sn[1] = c("^ØåÐæ0Û;' {º·yZ¦'¼\\K+DãFµÆc(îA", ba)),
        (Ch.Sn[2] = c("·ÃÔQ*kLÝòb9]rÊO<À6ÔS£.Ó;<þ²ÔìÖVl|", ba)),
        (Ch.Sn[3] = c(
          "û\v£\fªØ |·¶ohR:§´6úî>i½eØÕ¬m'ßYÉªj½{º\v\nÀî)bûGðEp©«\n",
          ba
        )),
        (Ch.Sn[4] = c("È¾7ÛÎ.½\rÁÅ`Ë\nÈüX\tEø\ráº¦´ÃUÛ¹~", ua)),
        (Ch.Sn[5] = c("ô=íó\v%&ñ8¨³cDÊ÷R¼L>µ|L}¯ÈÈîÒMRr¢ð", ua)),
        (Ch.Sn[6] = c("2ö¥= L£qI\rñûa\v1ß°¡LÅÄikñÑZ)Aÿ+*q", ua)),
        (Ch.Sn[7] = c('ÛÐÝ]ø\\q/qº\t"ÀÁØù¸ÝªíÆ¢:ÔÚ¼ëSÿ6ÙÍù¨¨Cë', ua)),
        (Ch.Sn[8] = c("cªxÚlx´îaÔÊ©¥~JéÚ<[Ã", ua)),
        (Ch.Sn[9] = c("w\rülèº%?0Bt*·wÚ6\v\fÔ[£ö¶I7/¨", ua)),
        (Ch.Sn[10] = c("æØö$¥n/j©~§V×\f8ÊÒÏBK@Ã(\bÇZßÜmÎÂqíK÷Ïå´æÀ¦", la)),
        (Ch.Sn[11] = c(
          "ÍuëÒ\r0§³IL¤¤Ã¢i+ð¸ º%ÍU3ÐôÁ+?kðÁBðî*Öûôºü¾[¯\0ù·ÓâÍ@qºñd8äg",
          la
        )),
        (Ch.Sn[12] = c(
          "u¡ijßói\0ÀÓgöªÌÁK2æªblý¬CtÁíØ /g3éÍg¤ÒÇ­Ç`öKÒïé\tîuU½ÚÓBÝR2¨1°ÁÊhÄF;g",
          la
        )),
        (Ch.Sn[13] = c("Jîã2cuçá\\Ê?(ºÕ±ãósÏ", la)),
        ha(this, Be.ke(fr).x + 120, this.y - 10),
        (this.Ce = 66)),
      this.Ce !== 66 ||
        Be.Tc(Bs) ||
        ((Ch.Fn = 0), (this.Ce = 67), (this.Fa[5] = 300)),
      this.Ce === 68 &&
        ((Ch.En = 0),
        (Ch.Hn = 109),
        (Ch.Sn[0] = c("/}.[|R7øe¯PªÄöÖ\\dÇòÍHå9=¢M½ø÷Â1¸^\vsb", Xa)),
        (Ch.Sn[1] = c(
          "q&çqÏ³ük_ðÔH^¹Ä^}Fó³ê£BÌJåà=¡H)ø]ó[±FÎÃVqy¨`¯­R?³f÷0",
          Xa
        )),
        (Ch.Sn[2] = c("\b±b£v^kw\"È*hoñEÌï=´NÇa.ûÂ$øp?÷½ãöY<¾'\fmRíáÈ", Xa)),
        ha(this, Be.ke(fr).x + 120, this.y - 10),
        (this.Ce = 69)),
      this.Ce !== 69 ||
        Be.Tc(Bs) ||
        ((Ch.Fn = 0), (this.Ce = 70), (this.Fa[5] = 300)),
      this.Ce === 71 &&
        ((Ch.En = 0),
        (Ch.Hn = 109),
        (Ch.Sn[0] = c("5~y¼²g_ïÇ2LÖÌ_^í\f&rrv¬î¡-", Xa)),
        (Ch.Sn[1] = c(
          "?2C(:Dìx/®Òf%\røk\\ò£\truXNÈ¢ûÕóBJ<à5öùªö÷µbÝ»QÑýµªçäM\b",
          Xa
        )),
        (Ch.Sn[2] = c(
          "óâÆýg~®è'G©?2}Ò%Ý}]6¥|rÕêVþÆzÈ8Å§ÝõqkßÊoáñ÷+!U¬MÐXÆëä¯}",
          Xa
        )),
        (Ch.Sn[3] = c(
          "¡ûzðc+|8\\°å>ñªµD\tokæ$1%Ú4vÏldãIñ¶C¥©\n!¬ÎóÊßU¡À«{±\vq6&",
          Ya
        )),
        (Ch.Sn[4] = c("7ë#Z)_gó§MyÁ9nîZ!B#8ðàúS°®ï^ªæ»\\R", Ya)),
        (Ch.Sn[5] = c(
          "ä¦¦·ìrÄé]¥ôI[ôÀìnãÃÖºç(Ê¢a[öx\0(#ß?8´eÿùÆ£²ôC9±½¬\n",
          Ya
        )),
        (Ch.Sn[6] = c('½3!= !6+èJvKLkõ÷b%ÈÔØ¹5"¶ÎòÊ@ÁO[º4("?-ääJ%y¼', Ya)),
        (Ch.Sn[7] = c('àÚ¦nágä@ç÷ÞøÁ_÷\nà¼%^S³\\7É0duorh²è2e£EÆXÆh¶"ú', Ya)),
        (Ch.Sn[8] = c(' ±Ù_òÑìÙ[rfÉ\v;¬®kX6°^8/ý>M/V"#©á¥ü', Ya)),
        (Ch.Sn[9] = c("PPÏ?nqë·5³[µØWRß$6\r}§TÈ>¬]m$F³", Ha)),
        ha(this, Be.ke(fr).x + 120, this.y - 10),
        (this.Ce = 72)),
      this.Ce !== 72 ||
        Be.Tc(Bs) ||
        ((Ch.Fn = 0), (this.Ce = 73), (this.Fa[5] = 300)),
      this.Ce === 74 &&
        ((Ch.En = 0),
        (Ch.Hn = 109),
        (Ch.Sn[0] = c("ÞÁ´å¼k\rìÚÌb¦È×êÜî¤\v¶ ¤÷UâÇÍ±CMâî»\fM×æ¨F\f÷½ü¾/", Ha)),
        (Ch.Sn[1] = c("»2®Çÿ-p*óØÝKÅ¹³ºÕ3Ö-ÀlLhW®½4%é²2û%ªÉOâpSåEÍý", Ha)),
        (Ch.Sn[2] = c("¸1ç¤§]ú²º\n'\tºÿÞx6]¥{ö.'¦0hª³ WáyêoúØFÑ¶åwÜæm", Ha)),
        (Ch.Sn[3] = c("%xs«½SÎ~'ªYØ1M¼*<þÌ¦L<é½à4´½]Cé~f>n+¼J\\ï}", Ha)),
        (Ch.Sn[4] = c("àóÆ·÷9~Q¬hî²äÝ×pV\0~Ä{úÈ<ÜE|i¡Q¿NkA¡þÔ²Ï", Wa)),
        (Ch.Sn[5] = c(
          'ìë$?1¹¸îWT÷\bõ¯V\vPO+¿ñLtãílÒ¶V«yö!ÐËIä\r"è¸µåb<\0û',
          Wa
        )),
        ha(this, Be.ke(fr).x + 120, this.y - 10),
        (this.Ce = 75)),
      this.Ce !== 75 || Be.Tc(Bs) || ((Ch.Fn = 0), (this.Ce = -1)),
      this.Ce === 999)
    ) {
      Be.vc(
        Vr,
        (t) => {
          (t.speed = 0), (t.Ic = 1);
        },
        0
      ),
        (this.Ce = 6);
      let t = Be.Sc(-40, Ch.we[2] - 120, Qh);
      (t.wr = Ks),
        (t.Sr = 7),
        (t = Be.Sc(720, Ch.we[3] - 80, Qh)),
        (t.wr = Ks),
        (t.Sr = -8),
        (t = Be.Sc(Ch.we[0] - 110, Ch.we[2] - 150, Qh)),
        (t.wr = Nh),
        (t.Ir = 6),
        (t = Be.Sc(Ch.we[1] - 70, Ch.we[3] + 150, Qh)),
        (t.wr = Nh),
        (t.Ir = -6),
        (this.Ce = 10);
    }
    if (
      (this.Mf === 1 && this.xf++, this.lf === 1 && (this.ro++, this.ro >= 15))
    ) {
      (Ch.fn[20] = 1), (Ch.Fn = 3), (this.lf = 2);
      const t = Be.Sc(0, 0, qh);
      (t.Fe = 300), (t.height = 100), (t.dir = 0), (t.Pe = 0);
    }
    if (
      (Ch.fo > 0 && this.wf === 0 && (this.wf = 1),
      this.wf === 1 &&
        ((this.io = Ch.fo),
        (this.Zf = 0),
        (this.ho = this.x),
        (this.Sr = -12),
        (this.wf = 2)),
      this.wf === 2 &&
        (this.ho - 60 > this.x &&
          20 > this.Zf &&
          (0 > this.Sr ? (this.Sr += 2) : (this.Sr = 0)),
        this.Zf++,
        20 + this.io > this.Zf ||
          (12 > this.Sr && (this.Sr += 2),
          this.ho - 13 > this.x ||
            ((this.Sr = 0), (this.x = this.ho), (this.wf = 0), (Ch.fo = -1)))),
      this.Cc === 1)
    ) {
      Lh.We(yt),
        (Ch.Fn = 0),
        (this.Tf = 0),
        (this.Zn = 0),
        (this.tf = 0),
        (this.Zf = 0),
        (this.ho = this.x);
      const t = Be.Sc(this.x, this.y - 30, Vi);
      (t.nr = 1.5),
        (t.dr = 1.5),
        (t.cr = 0.334),
        (this.Sr = -12),
        (this.Cc = 2);
    }
    if (
      (this.Cc === 2 &&
        this.ho - 60 > this.x &&
        50 > this.Zf &&
        (0 > this.Sr
          ? (this.Sr += 2)
          : ((this.Sr = 0),
            (this.Cc = 3),
            (Ch.En = 0),
            (Ch.Hn = 109),
            (Ch.Sn[0] = c(
              "z\0ñeÖ/ö CLª!EESË]ï1ð°ë\tr^*%r¬¬¯Þ¡T¶,Ø·Ëìe]¦å `ÀÊ9Y",
              Wa
            )),
            ha(this, this.x + 80, this.y - 10),
            (this.Fa[6] = 50))),
      this.Cc === 3 && ((Ch.Fn = 3), (Ch.fn[20] = 1), (this.zf = 0)),
      this.Cc === 4)
    ) {
      Be.vc(Bs, (t) => {
        Be.He(t);
      }),
        Be.vc(Mh, (t) => {
          Be.He(t);
        }),
        Lh.We(yt);
      const t = Be.Sc(this.x - 10, this.y - 30, Vi);
      (t.nr = 1.5),
        (t.dr = 1.5),
        (t.cr = 0.25),
        (this.Cc = 5),
        (this.Fa[6] = 50),
        (this._f = this.x),
        (Ch.Fn = 6);
    }
    this.Cc === 5 &&
      (4 > this.zf &&
        mh.Wa(
          Ds,
          Math.floor(this.zf),
          this.x,
          this.y - 50,
          2,
          2,
          0,
          16777215,
          1
        ),
      this.zf++),
      this.Cc === 6 &&
        (Be.vc(fr, (t) => {
          (t.x = t.po.x - 60), (Ch.nc = 9999999);
          const h = Be.Sc(t.x + t.za / 2 - 48, t.y - 50, Zh);
          (h.Ze = 9999999), (h.tc = 0);
        }),
        Lh.We(It),
        (this.rf = 1),
        (Ch.fn[20] = 3),
        (this.x = this._f + 32),
        (this.Cc = 7),
        (this.Fa[6] = 4)),
      this.Cc === 8 &&
        ((this.x = this._f - 28), (this.Cc = 9), (this.Fa[6] = 4)),
      this.Cc === 10 &&
        ((Ch.fn[20] = 3),
        (this.x = this._f + 24),
        (this.Cc = 11),
        (this.Fa[6] = 4)),
      this.Cc === 12 &&
        ((this.x = this._f - 20), (this.Cc = 13), (this.Fa[6] = 4)),
      this.Cc === 14 &&
        ((Ch.fn[20] = 3),
        (this.x = this._f + 16),
        (this.Cc = 15),
        (this.Fa[6] = 4)),
      this.Cc === 16 &&
        ((this.x = this._f - 12), (this.Cc = 17), (this.Fa[6] = 4)),
      this.Cc === 18 &&
        ((Ch.fn[20] = 3),
        (this.x = this._f + 8),
        (this.Cc = 19),
        (this.Fa[6] = 4)),
      this.Cc === 20 &&
        ((this.x = this._f - 4), (this.Cc = 21), (this.Fa[6] = 4)),
      this.Cc === 22 &&
        ((this.if = 0),
        (this.hf = 0),
        (this.df = 0),
        (this.ff = 0),
        (this.sf = 0),
        (this.af = 0),
        (this.x = this._f),
        (this.Cc = 23),
        (this.Fa[6] = 110)),
      this.Cc >= 8 &&
        22 > this.Cc &&
        ((this.tf = -1),
        (this.if = dh._s(0, -2, 2)),
        (this.hf = dh._s(0, -2, 2)),
        (this.sf = dh._s(0, -1, 1)),
        (this.af = dh._s(0, -1, 1))),
      this.Cc === 24 &&
        (Be.vc(Zh, (t) => {
          Be.He(t);
        }),
        (this.tf = 3),
        (this.rf = 1),
        (Ch.Fn = 4),
        (Ch.fn[20] = 4),
        (this.Cc = 25),
        (this.Fa[6] = 30)),
      this.Cc === 26 &&
        ((Ch.En = 0),
        (Ch.Hn = 107),
        (Ch.Sn[0] = c("&¢rV<«Ö}ó'ªéª°Ôq", Wa)),
        (Ch.Sn[1] = c("Bî·0l?L\rgv¿¡ìHL", pa)),
        (Ch.Sn[2] = c("*³Ìj/ïa/·©4Ñ", pa)),
        (Ch.Sn[3] = c("ïDû¿.Qµ¤zIÀ=Àü¿VÎÌ", pa)),
        (Ch.Sn[4] = c("iWËÕ æ²8(ö~çõª{%JOEqÑØ6Ýi¬r´hyòy¶", pa)),
        (Ch.Sn[5] = c("dËWÀÿq©8× .ø´Â0®", pa)),
        (Ch.Sn[6] = c("XyK¸cèò\f´¹à;;t²§i:íi\f", pa)),
        (Ch.Sn[7] = c("f¹bñJVbÅÝ² Ýîê\v²(Ë;n'úÂÈ¡Cl\tl¢2fe\nWËeÿ", Oa)),
        ha(this, this.x + 80, this.y - 10),
        (this.Cc = 27));
    const t = Be.ke(Bs);
    this.Cc === 27 &&
      t !== void 0 &&
      (t.xn === 0 && (Ch.Fn = 10),
      t.xn === 1 && (Ch.Fn = 7),
      t.xn === 2 && (Ch.Fn = 11),
      t.xn === 3 && (Ch.Fn = 7),
      t.xn === 4 && (Ch.Fn = 7),
      t.xn === 5 && (Ch.Fn = 11),
      t.xn === 6 && (Ch.Fn = 10),
      t.xn === 7 && (Ch.Fn = 10)),
      this.Cc !== 27 || Be.Tc(Bs) || ((this.Cc = 27.1), (this.Fa[6] = 60)),
      this.Cc === 28.1 &&
        ((this.tf = 0),
        (Ch.Fn = 10),
        (Ch.fn[20] = 5),
        (this.rf = 0),
        (this.Cc = 28),
        (this.Fa[6] = 80)),
      this.Cc === 29 &&
        ((Ch.En = 0),
        (Ch.Hn = 107),
        (Ch.Sn[0] = c("«vOQ;NÉ'Úç5&AY0\nD\r+{", Oa)),
        (Ch.Sn[1] = c('ÊøªThþrÖUÁäôò¦\rmÚÄS[Üy?³"±qùJbv\v', Oa)),
        ha(this, this.x + 80, this.y - 10),
        (this.Cc = 30));
    const h = Be.ke(Bs);
    if (
      (h !== void 0 &&
        this.Cc === 30 &&
        (h.xn === 0 && (Ch.Fn = 10),
        h.xn === 1 && ((Ch.Fn = 8), (Ch.fn[20] = 6))),
      this.Cc !== 30 ||
        Be.Tc(Bs) ||
        ((Ch.Fn = 10),
        (Ch.fn[20] = 5),
        (this.tf = 2),
        (this.Sr = -2),
        (this.so = 0),
        (this.Cc = 31)),
      this.Cc === 31 &&
        (this.so++,
        (this.ao = Math.sin(this.so / 10) * 1),
        (this.Sr = -1 - this.ao),
        -180 > this.x && (this.Cc = 32)),
      this.Cc === 32 &&
        ((Ch.En = 0),
        (Ch.Hn = 107),
        (Ch.Sn[0] = c('Òä5PÙ,°£²`Q\vN"Ï¶ïÃæ¬:¯ÖmFiY´Ã¼·{wâüL¬[v', Oa)),
        ha(this, 20, this.y - 10),
        (this.Cc = 33)),
      this.Cc !== 33 || Be.Tc(Bs) || ((this.Cc = 34), (this.Fa[6] = 60)),
      this.Cc === 35)
    ) {
      const t = m.h(X.k) ?? 0;
      m.i(X.k, t + 1),
        m.i(X.O, 0),
        m.i(X.p, 0),
        Lh.We(Qt),
        (this.Cc = 36),
        (this.Fa[6] = 140),
        99999 > Ch.Oo && (Ch.Oo = 99999),
        (() => {
          let t = Ch.Ao;
          10 > Ch.Oo || (Ch.Ao = 2),
            30 > Ch.Oo || (Ch.Ao = 3),
            70 > Ch.Oo || (Ch.Ao = 4),
            120 > Ch.Oo || (Ch.Ao = 5),
            200 > Ch.Oo || (Ch.Ao = 6),
            300 > Ch.Oo || (Ch.Ao = 7),
            500 > Ch.Oo || (Ch.Ao = 8),
            800 > Ch.Oo || (Ch.Ao = 9),
            1200 > Ch.Oo || (Ch.Ao = 10),
            1700 > Ch.Oo || (Ch.Ao = 11),
            2500 > Ch.Oo || (Ch.Ao = 12),
            3500 > Ch.Oo || (Ch.Ao = 13),
            5e3 > Ch.Oo || (Ch.Ao = 14),
            7e3 > Ch.Oo || (Ch.Ao = 15),
            1e4 > Ch.Oo || (Ch.Ao = 16),
            15e3 > Ch.Oo || (Ch.Ao = 17),
            25e3 > Ch.Oo || (Ch.Ao = 18),
            5e4 > Ch.Oo || (Ch.Ao = 19),
            99999 > Ch.Oo || ((Ch.Ao = 20), (Ch.Oo = 99999)),
            Ch.Ao !== t &&
              ((Ch._e = 16 + Ch.Ao * 4),
              (Ch.at = 8 + Ch.Ao * 2),
              (Ch.xo = 9 + Math.ceil(Ch.Ao / 4)),
              Ch.Ao === 20 && ((Ch._e = 99), (Ch.at = 99), (Ch.xo = 99)));
        })();
    }
    if (
      (this.Cc === 37 &&
        (Be.Sc(0, 0, Ui), (this.Cc = 38), gh.ka(void 0), (this.Fa[6] = 20)),
      this.Cc === 39 &&
        (Be.Sc(0, 0, bi),
        sn.Mo(c("æ×h^oGOý~ºøòÍáÍ¸HØ+Wäi6zãK-}", Oa), () => {
          sn.Mo(void 0), (sn.wo = new oa());
        })),
      this.Tf === 1 &&
        (this.Lf++,
        this.Lf === 10 && Be.Sc(this.x + 20, this.y - 10, Hi),
        this.Lf === 20 && Be.Sc(this.x + 20, this.y - 10, Hi),
        this.Lf === 30 && Be.Sc(this.x + 20, this.y - 10, Hi),
        this.Lf === 80 && (this.Lf = 0)),
      this.Sf === 9)
    ) {
      (this.Sf = 1),
        (this.zn = 0),
        Be.vc(
          Vr,
          (t) => {
            t.ko = 1;
          },
          1
        ),
        Be.vc(
          Oh,
          (t) => {
            (t.visible = 0), (t.Ea = 0);
          },
          1
        ),
        Be.Sc(Ch.we[0], Ch.we[2], ii),
        Be.vc(
          Oh,
          (t) => {
            t.le = 1;
          },
          1
        );
      const t = Be.ke(ci);
      Be.Sc(t.x, t.y, li),
        Be.vc(
          ci,
          (t) => {
            t.visible = 0;
          },
          1
        ),
        (Ch.we[0] = -10),
        (Ch.we[3] = 999),
        (Ch.Fn = 9),
        (this.Zn = 3),
        (this.tf = 3),
        Be.vc(Vr, (t) => {
          (t.ko = 1), (t.Ic = 1), (t.speed = 0);
        });
    }
    if (this.Sf === 1) {
      if (
        (this.Ce > 60 ? -10 > this.Cf && this.Cf++ : this.Cf++, 1200 > this.Cf)
      ) {
        const t = Be.ke(ii);
        Be.ke(Vr).x < t.x + 10 &&
          (Lh.We(Lt),
          Be.vc(
            Vr,
            (h) => {
              (h.x = t.x + 78), (h.y = t.y + 78);
            },
            0
          ),
          (this.Cf = -95),
          (this.gf = 1),
          (Ch.Fn = 0));
      }
      this.Cf === -92 && (this.gf = 0),
        this.Cf === 0 && (Ch.Fn = 9),
        this.Cf === 300 && ((Ch.Fn = 12), this.Zn > 0 && this.Zn--),
        this.Cf === 600 && ((Ch.Fn = 13), this.Zn > 0 && this.Zn--),
        this.Cf === 900 && ((Ch.Fn = 14), this.Zn > 0 && this.Zn--),
        this.Cf === 1200 && ((Ch.Fn = 4), (this.Tf = 1), (this.Sf = 2));
    }
    Ch.Re > 40 && (Ch.Re = 40),
      Ch.Re > Ch.ye && (Ch.Re = Ch.ye - 1),
      Ch.Re > 0 &&
        Ch.ye > 1 &&
        (this.If++,
        this.Rf === Ch.ye &&
          ((this.Jf = 0),
          45 > Ch.uo || (this.Jf = dh._s(0, 1)),
          60 > Ch.uo || (this.Jf = dh._s(0, 1, 1)),
          75 > Ch.uo || (this.Jf = 1),
          1 + this.Jf > this.If ||
            40 > Ch.Re ||
            ((this.If = 0), Ch.ye--, Ch.Re--),
          2 + this.Jf * 2 > this.If ||
            30 > Ch.Re ||
            ((this.If = 0), Ch.ye--, Ch.Re--),
          5 + this.Jf * 3 > this.If ||
            20 > Ch.Re ||
            ((this.If = 0), Ch.ye--, Ch.Re--),
          15 + this.Jf * 5 > this.If ||
            10 > Ch.Re ||
            ((this.If = 0), Ch.ye--, Ch.Re--),
          30 + this.Jf * 10 > this.If || ((this.If = 0), Ch.ye--, Ch.Re--),
          Ch.ye > 0 || (Ch.ye = 1)),
        (this.Rf = Ch.ye));
  }
}
const xa = { Xe: () => new Aa() },
  Ma = {
    Zs: [
      { aa: 0, ta: 642, ha: 599, ia: 114, sa: 200, ra: 0, ea: 0 },
      { aa: 0, ta: 749, ha: 801, ia: 114, sa: 200, ra: 0, ea: 0 },
    ],
    Vr: 114,
    Ur: 200,
    qr: 0,
    $r: 0,
    Nr: 113,
    Qr: 195,
    ii: 0,
    si: 0,
  };
class wa extends Wh {
  constructor(t) {
    super(t),
      (this.rn = 0),
      (this.an = 0),
      (this.nn = 0),
      (this.To = 0),
      (this.Lo = 0),
      (this.So = 0),
      (this.Rc = 0),
      (this.sc = 0),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 0);
  }
}
class ka extends Wh {
  constructor() {
    super(Ta),
      (this.wr = void 0),
      (this.visible = 0),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 0);
  }
}
const Ta = { Xe: () => new ka() },
  La = {
    Zs: [{ aa: 1, ta: 1016, ha: 0, ia: 2, sa: 2, ra: 0, ea: 0 }],
    Vr: 2,
    Ur: 2,
    qr: 0,
    $r: 0,
    Nr: 1,
    Qr: 1,
    ii: 0,
    si: 0,
  },
  Sa = {
    Zs: [{ aa: 0, ta: 642, ha: 801, ia: 105, sa: 108, ra: 0, ea: 0 }],
    Vr: 105,
    Ur: 108,
    qr: 6,
    $r: 0,
    Nr: 104,
    Qr: 107,
    ii: 0,
    si: 0,
  };
function Ca() {
  switch (Ch.border) {
    case 0:
      (Ch.we[0] = 32), (Ch.we[1] = 602), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 1:
      (Ch.we[0] = 217), (Ch.we[1] = 417), (Ch.we[2] = 180), (Ch.we[3] = 385);
      break;
    case 2:
      (Ch.we[0] = 217), (Ch.we[1] = 417), (Ch.we[2] = 125), (Ch.we[3] = 385);
      break;
    case 3:
      (Ch.we[0] = 237), (Ch.we[1] = 397), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 4:
      (Ch.we[0] = 267), (Ch.we[1] = 367), (Ch.we[2] = 295), (Ch.we[3] = 385);
      break;
    case 5:
      (Ch.we[0] = 192), (Ch.we[1] = 442), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 6:
      (Ch.we[0] = 227), (Ch.we[1] = 407), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 7:
      (Ch.we[0] = 227), (Ch.we[1] = 407), (Ch.we[2] = 200), (Ch.we[3] = 385);
      break;
    case 8:
      (Ch.we[0] = 202), (Ch.we[1] = 432), (Ch.we[2] = 290), (Ch.we[3] = 385);
      break;
    case 9:
      (Ch.we[0] = 132), (Ch.we[1] = 492), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 10:
      (Ch.we[0] = 147), (Ch.we[1] = 487), (Ch.we[2] = 200), (Ch.we[3] = 385);
      break;
    case 11:
      (Ch.we[0] = 32), (Ch.we[1] = 602), (Ch.we[2] = 330), (Ch.we[3] = 465);
      break;
    case 12:
      (Ch.we[0] = Be.ph.width / 2 - 40),
        (Ch.we[1] = Be.ph.width / 2 + 40),
        (Ch.we[2] = Be.ph.height / 2 - 40),
        (Ch.we[3] = Be.ph.height / 2 + 40);
      break;
    case 13:
      (Ch.we[0] = Be.ph.width / 2 - 40),
        (Ch.we[1] = Be.ph.width / 2 + 40),
        (Ch.we[2] = 250),
        (Ch.we[3] = 385);
      break;
    case 14:
      (Ch.we[0] = Be.ph.width / 2 - 35),
        (Ch.we[1] = Be.ph.width / 2 + 35),
        (Ch.we[2] = 300),
        (Ch.we[3] = 385);
      break;
    case 15:
      (Ch.we[0] = Be.ph.width / 2 - 50),
        (Ch.we[1] = Be.ph.width / 2 + 50),
        (Ch.we[2] = 250),
        (Ch.we[3] = 385);
      break;
    case 16:
      (Ch.we[0] = Be.ph.width / 2 - 50),
        (Ch.we[1] = Be.ph.height / 2 + 50),
        (Ch.we[2] = 50),
        (Ch.we[3] = 385);
      break;
    case 17:
      (Ch.we[0] = 162), (Ch.we[1] = 472), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 18:
      (Ch.we[0] = 162), (Ch.we[1] = 472), (Ch.we[2] = 220), (Ch.we[3] = 385);
      break;
    case 19:
      (Ch.we[0] = Be.ph.width / 2 - 100),
        (Ch.we[1] = Be.ph.width / 2 + 100),
        (Ch.we[2] = 185),
        (Ch.we[3] = 385);
      break;
    case 20:
      (Ch.we[0] = 257), (Ch.we[1] = 547), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 21:
    case 22:
      (Ch.we[0] = 197), (Ch.we[1] = 437), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 23:
      (Ch.we[0] = 197), (Ch.we[1] = 537), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 24:
      (Ch.we[0] = 235), (Ch.we[1] = 405), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 25:
      (Ch.we[0] = 235), (Ch.we[1] = 405), (Ch.we[2] = 160), (Ch.we[3] = 385);
      break;
    case 26:
      (Ch.we[0] = 295), (Ch.we[1] = 345), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 27:
      (Ch.we[0] = 270), (Ch.we[1] = 370), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 28:
      (Ch.we[0] = 235), (Ch.we[1] = 405), (Ch.we[2] = 35), (Ch.we[3] = 385);
      break;
    case 29:
      (Ch.we[0] = 207), (Ch.we[1] = 427), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 30:
      (Ch.we[0] = 207), (Ch.we[1] = 427), (Ch.we[2] = 200), (Ch.we[3] = 385);
      break;
    case 31:
      (Ch.we[0] = 32), (Ch.we[1] = 602), (Ch.we[2] = 100), (Ch.we[3] = 385);
      break;
    case 35:
      (Ch.we[0] = 132), (Ch.we[1] = 502), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 36:
      (Ch.we[0] = 240), (Ch.we[1] = 400), (Ch.we[2] = 225), (Ch.we[3] = 385);
      break;
    case 37:
      (Ch.we[3] = 385),
        (Ch.we[2] = Ch.we[3] - 200),
        (Ch.we[0] = 120),
        (Ch.we[1] = 520);
      break;
    case 38:
      (Ch.we[0] = 270), (Ch.we[1] = 370), (Ch.we[2] = 285), (Ch.we[3] = 385);
      break;
    case 39:
      (Ch.we[0] = 132),
        (Ch.we[1] = 502),
        (Ch.we[2] = 250),
        (Ch.we[3] = 385),
        (Ch.we[0] = Ch.we[0] - 20),
        (Ch.we[1] = Ch.we[1] + 40),
        (Ch.we[2] = Ch.we[2] - 20);
      break;
    case 50:
      (Ch.we[0] = 192), (Ch.we[1] = 512), (Ch.we[2] = 250), (Ch.we[3] = 385);
      break;
    case 51:
      (Ch.we[0] = 192), (Ch.we[1] = 512), (Ch.we[2] = 250);
      const t = Be.ke(Vr);
      270 > t.y && (Ch.we[2] = Math.floor((t.y - 20) / 5 + 0.5) * 5),
        (Ch.we[3] = 385);
      break;
    case 52:
      (Ch.we[0] = 250), (Ch.we[1] = 390), (Ch.we[2] = 250), (Ch.we[3] = 320);
  }
}
class Ia extends Wh {
  constructor() {
    super(Ra),
      (this.wr = Ah),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 10),
      (this.Is = 0);
  }
}
const Ra = { Xe: () => new Ia() },
  ja = c("{2½T¡Ök _\n`¿[{o", "*³y±¦<¸òªb>:\téKSvØNØNÈ");
class ya extends Fs {
  constructor() {
    super(Ea),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -500),
      (this.Is = 0);
  }
  he() {
    (this.ln = 0),
      (this.un = 0),
      (this.bn = 0),
      (this.gn = 0),
      (this.vn = 0),
      es(this),
      (this.xn = 0),
      (this.Mn = 1),
      (this.lineno = 0),
      (this.wn = 0),
      (this.Wn = this.gn),
      (this.pn = this.vn),
      (this.On = []);
    for (let t = 0; Ch.Sn[t] !== ja; t++) this.On[t] = Ch.Sn[t];
    (this.kn = this.On[0]), (this.Tn = 0), (this.Fa[0] = this.ln);
  }
}
const Ea = { parent: Bs, Xe: () => new ya() },
  Pa = 'æ->ea9aï2¿ñÏ1´½\'"­Õòåº§µk"Ó',
  Fa = "^sÖ¤#*ª´?i&!â-",
  Ba = "ðÄè¬Æ¡7`Ä1³ôú×üás;O\0g",
  Da = "ùÁ¯gkõÛ°°ú¾¥¿ÉJÿôÚ",
  Ka = "' ­ Mâ-pÝ|H¼ÜÅ¡Þ:RDçVìÌ`:¸ð5",
  Ga = "WRÂ,4ô\\eÇÔßH`âoÜ",
  Va = "«Fá²¼¨»û³¹ÆëhB®½",
  Ua = " Ò\féé´WªºÚünE¦",
  qa = "&Ã}\tÏ¹MJìHh¦OVlªb9_ÎëÐå®",
  Na = "À¯q\tÜ(Åè^½ÖT×r\\ðÌWö",
  $a = '±Ül"´FÆÂ²Ùö&±X+Ö¿ðÌú¤ð',
  Qa = "\fW:Ù·Ê)¦®^qääI\fÙ±I³*",
  Ja = "ë\0ì}þY¦h@Ôb\0à\ffûà5ÏÑÑ=",
  _a = "êô§ÛÐÌ¤ z·\tKAhú:",
  za = 'õuÁës·»RÎ3|,]¨qþ"ÝóøzEØ4g',
  Za = "¿?NJäcÒ¿3zfC ·úbqH¢I\0",
  tr = "ÅÔY¶áhå¨åÇO¡èÀVD±4s¾mö1×",
  hr = "$¼7\bCE9rZ\b/|8HbÆ?",
  ir = "`ý´|Ð±ñ¸m%Û5ªaN[ñá/©²»á/",
  sr = "\n0JÓä_(ÿ3lð¹ªÛÏcõí¬hÐj­t¡",
  ar = "¦ÕhIüçÿýËì´-Ä-P\n±)X0ý[#6z°G",
  rr = "ädxçK´Hv<úÑK¯x\\,",
  er = "*³y±¦<¸òªb>:\téKSvØNØNÈ";
class cr extends wa {
  constructor() {
    super(fr),
      (this.Co = xa),
      (this.po = void 0),
      (this.Io = oh.Lt.Vi),
      (this.Ro = oh.Lt.Ki),
      (this.jo = oh.Lt.Ui),
      (this.yo = oh.Lt.Ui),
      (this.Eo = 0),
      (this.Po = Pt),
      (this.Fo = 0),
      (this.tn = 0),
      (this.Bo = 0),
      (this.Do = 0),
      (this.Ko = 0),
      (this.Ee = 0),
      (this.Yo = 0),
      (this.lo = 0),
      (this.Go = 0),
      (this.Vo = 0),
      (this.Lc = 0),
      (this.Uo = 0),
      (this.oo = 0),
      (this.turn = 0),
      (this.qo = 0),
      (this.part = 0),
      (this.No = 0),
      (this.$o = 0),
      (this.Qo = 0),
      (this.Jo = 0),
      (this._o = 0),
      (this.Xo = 0),
      (this.zo = 0),
      (this.Zo = 0),
      (this.td = 0),
      (this.Ge = 0),
      (this.hf = 0),
      (this.wr = Ma),
      (this.visible = 0),
      (this.Ea = 0),
      (this.Mh = 10),
      (this.Is = 0),
      (this.Ba[3] = () => this.Mc()),
      (this.Ba[4] = () => this.wc()),
      (this.Ba[5] = () => this.kc()),
      (this.Ba[6] = () => this.eo()),
      (this.Ba[9] = () => this.hd());
  }
  he() {
    var t;
    gh.wa(Ch.Ho),
      201 > Ch.sd && (Ch.sd = 201),
      ((t = this).rn = 0),
      Ch.Cn[1] && ((t.rn = 2), (Ch.Cn[2] = 1)),
      Ch.Cn[0] && t.rn !== 2 && ((t.rn = 1), (Ch.Cn[1] = 1)),
      Ch.Cn[0] || ((t.rn = 0), (Ch.Cn[0] = 1)),
      Ch.Rn[t.rn] === 68 &&
        ((Ch.In[t.rn] = c("Ù>æy$J¡CÆDÕøÍq", "pöôeJQÅÇvnô")),
        (Ch.ec[t.rn] = 1),
        (Ch.cc[t.rn] = 1),
        (Ch.ad[t.rn] = 1),
        (Ch.cn[t.rn] = 1),
        (Ch.rd[t.rn] = 0),
        (Ch.ed[t.rn] = 0),
        (Ch.nd[t.rn] = 0),
        (Ch.fd[t.rn] = 0)),
      (this.cr = 0),
      (this.po = Be.Sc(this.x, this.y, this.Co)),
      (this.Fa[9] = 8),
      (this.Eo = 0),
      (this.Fo = 0),
      (this.To = -1),
      (this.tn = 0),
      (this.Bo = 0),
      (Ch.od = 0),
      (this.Lo = 0),
      (this.nn = -99999),
      (this.Do = 0),
      (this.Ko = 0),
      (this.Rc = 100),
      (this.sc = 120),
      (this.Ee = 1),
      (this.Fa[4] = 30),
      Be.vc(
        Oh,
        (t) => {
          t.visible = 0;
        },
        0
      ),
      (Ch.lc = 99),
      (Ch.uc = 99),
      (Ch.Fn = 4),
      (this.Yo = 0),
      Be.vc(
        Vr,
        (t) => {
          t.visible = 0;
        },
        0
      ),
      (this.lo = 0),
      (this.Go = 0),
      (this.Vo = 0),
      (this.Lc = 0),
      (this.Uo = 0),
      (this.oo = 0),
      (this.turn = 0),
      (this.qo = 0),
      (this.part = 0),
      (this.No = 0),
      this.No
        ? ((this.Ee = -1),
          (this.po.tf = 1),
          Be.vc(
            Oh,
            (t) => {
              t.visible = 1;
            },
            1
          ),
          (Ch.Sn[0] = c("\né-§')ª`VNn³nj¢ßI×¶ïîéÃ®P·:", Pa)),
          (Ch.lc = 3),
          (Ch.uc = 0),
          (Ch.Fn = 0),
          (this.Yo = 1),
          Be.vc(
            Vr,
            (t) => {
              t.visible = 1;
            },
            0
          ),
          (Ch.fn[271] = 1),
          gh.ka(Ch.Ho),
          gh.Ia(Th))
        : (gh.ka(c("âÜCÒTØkdÞmâèXý¤aôû**éKgó:]`", Pa)), gh.Ia(Th)),
      (this.$o = 0),
      (this.Qo = 0),
      (this.Jo = 0),
      (Ch.dd = 1),
      (this._o = m.h(X.T) ?? 0),
      (this.Xo = m.h(X.M) ?? 0),
      m.i(X.T, this._o + 1),
      (this.zo = 0);
  }
  ie() {
    this.nn > 10 && Ch.cc[this.rn] === Ch.ec[this.rn] && (Ch.ed[3] += 40),
      Be.He(this.po);
  }
  st() {
    if ((Ch.lc === 3 && (this.tn = 0), this.Fa[5] > 0))
      for (let t = 0; 3 > t; t++)
        if (Ch.Cn[t]) {
          const h = Ch.ac[t];
          h.Fa[5] > this.Fa[5] && (this.Fa[5] = h.Fa[5]);
        }
    if (
      (Ch.lc === 1 &&
        (this.Fo ||
          ((this.Fa[5] = 15), (this.Fa[6] = 1), (this.Fo = 1), (Ch.od = 0))),
      this.Fo &&
        Be.Tc(Bs) &&
        (Be.Tc(Bs) &&
          C.J.x &&
          (Be.vc(Bs, (t) => {
            t.Mn = t.kn.length;
          }),
          (C.N.x = 0),
          (C.J.x = 0),
          (C._.x = 0)),
        this.Fa[5] > 3 || (this.Fa[5] = 3)),
      Ch.Eo[this.rn] === 1 &&
        ((this.Zo = 8), (this.Fa[3] = Ch.fo), (Ch.Eo[this.rn] = 3)),
      Ch.Eo[this.rn] === 2 &&
        ((this.md.Fa[2] = 15),
        (Ch.Eo[this.rn] = 0),
        (this.po.pause = 0),
        (Ch.uc = 0),
        (Ch.lc = 1)),
      Ch.Eo[this.rn] === 5 &&
        ((Ch.nc = 0),
        Be.Sc(this.x + this.za / 2 - 48, this.y - 24, Zh),
        Be.vc(
          Zh,
          (t) => {
            t.Fa[2] = 30;
          },
          1
        ),
        (Ch.uc = 0),
        (Ch.lc = 1),
        (Ch.Eo[this.rn] = 0)),
      Ch.lc === 2 && this.Yo === 1)
    ) {
      if (this.tn === 0) {
        if (
          ((Ch.fn[271] = 1),
          5 > Ch.gd && (Ch.gd = 5),
          (Ch.do = 10),
          (this.oo = 1),
          this.Qo === 0)
        ) {
          if (13 > this.Lc) {
            Be.vc(
              Vr,
              (t) => {
                (t.Ic = 2), (t.wr = Ri);
              },
              0
            );
            let t = 0;
            switch (this.part) {
              case 0:
                t = 0;
                break;
              case 1:
                t = 3;
                break;
              case 2:
                t = 23;
                break;
              case 3:
                t = 6;
                break;
              case 4:
                t = 7;
                break;
              case 5:
                t = 8;
                break;
              case 6:
                t = 17;
                break;
              case 7:
                t = 15;
                break;
              case 8:
                t = 18;
                break;
              case 9:
                t = 1;
                break;
              case 10:
                t = 5;
                break;
              case 11:
                t = 21;
                break;
              case 12:
                t = 16;
                break;
              default:
                t = dh._s(1, 5, 21, 16);
            }
            Be.vc(
              xa,
              (h) => {
                (h._n = t), h.gc();
              },
              1
            ),
              Ch.border === 39 &&
                Be.vc(
                  Vr,
                  (t) => {
                    (t.y = Ch.we[3] - 70), (t.Ir = 2);
                  },
                  0
                );
          }
          if (this.Lc >= 14 && 23 > this.Lc && this.Jo === 1)
            switch (
              ((Ch.do = 20),
              (this.oo = 0),
              Be.vc(
                Vr,
                (t) => {
                  (t.Ic = 1), (t.wr = Ci);
                },
                0
              ),
              this.part)
            ) {
              case 0:
                Be.vc(
                  xa,
                  (t) => {
                    (t._n = 12), t.gc();
                  },
                  0
                ),
                  (this.oo = 1);
                break;
              case 1:
                (this.Qc = Be.Sc(0, 0, Di)),
                  (this.Qc.level = 1),
                  (this.Qc.Zc = 5);
                break;
              case 2:
                Be.vc(
                  xa,
                  (t) => {
                    (t.Xf = 1), (t.Wf = 0), (t.Hf = 0);
                  },
                  1
                );
                break;
              case 3:
                Be.vc(
                  xa,
                  (t) => {
                    (t.Xf = 1), (t.Wf = 1), (t.Hf = 0);
                  },
                  1
                );
                break;
              case 4:
                Be.vc(
                  xa,
                  (t) => {
                    (t._n = 13), t.gc();
                  },
                  1
                ),
                  (this.oo = 1);
                break;
              case 5:
                Be.vc(
                  xa,
                  (t) => {
                    (t._n = 22), t.gc();
                  },
                  1
                ),
                  (this.oo = 1);
                break;
              case 6:
                (this.Qc = Be.Sc(0, 0, Di)),
                  (this.Qc.Fa[0] = 4),
                  (this.Qc.level = 2),
                  (this.Qc.Zc = 6);
                break;
              case 7:
                Be.vc(
                  xa,
                  (t) => {
                    (t.Xf = 1), (t.Wf = 2), (t.Hf = 0);
                  },
                  1
                );
                break;
              default:
                switch (this.td) {
                  case 1:
                    Be.vc(
                      xa,
                      (t) => {
                        (t.Xf = 1), (t.Wf = 2), (t.Hf = 0);
                      },
                      1
                    );
                    break;
                  case 2:
                    (this.Qc = Be.Sc(0, 0, Di)),
                      (this.Qc.Fa[0] = 4),
                      (this.Qc.level = 2),
                      (this.Qc.Zc = 6);
                    break;
                  case 3:
                    Be.vc(
                      xa,
                      (t) => {
                        (t._n = 13), t.gc();
                      },
                      1
                    );
                }
            }
          this.Lc === 23 &&
            ((Ch.border = -1),
            Be.vc(
              xa,
              (t) => {
                t.Ce = 4;
              },
              1
            ),
            Be.vc(
              Oh,
              (t) => {
                t.le = 1;
              },
              1
            ),
            (this.oo = 0),
            Be.vc(
              Vr,
              (t) => {
                (t.x = Math.round((Ch.we[0] + Ch.we[1]) / 2)),
                  (t.y = Math.round((Ch.we[2] + Ch.we[3]) / 2) - 8);
              },
              0
            )),
            this.Lc === 14 &&
              this.Jo === 0 &&
              ((this.Jo = 1),
              (this.nn = -1e4),
              gh.ka(Ch.Ho),
              gh.Ia(0.45),
              (this.part = -1),
              (this.Qc = Be.Sc(0, 0, Di)),
              (this.Qc.level = 0),
              (this.Qc.Zc = 5),
              (this.oo = 0));
        } else
          (this.nn = -999999),
            (this.Ge = 0),
            Be.vc(
              Vr,
              (t) => {
                (t.x = Math.round((Ch.we[0] + Ch.we[1]) / 2) - 8),
                  (t.y = Math.round((Ch.we[2] + Ch.we[3]) / 2) - 8),
                  (t.wr = Ci),
                  (t.Ic = 1);
              },
              0
            ),
            Be.vc(
              xa,
              (t) => {
                (t._n = 20), t.gc();
              },
              1
            );
        this.qo++,
          this.part++,
          0 > this.zo ||
            (Ch.Sn[0] =
              4 > this.Lc
                ? c("HòH¹1Ð¹<æÅ@p(Ô`ïÍM¶q¹§òÎ@îúOb¼[", Pa)
                : c(
                    8 > this.Lc
                      ? "uoêØ×\b¸iñò|Ý×Hé¿(Þ¹k¿sáèð®¥u\bççX¾\fÓõ$AÂ6õBÆ\\Oç"
                      : 13 > this.Lc
                      ? "YVÃ*0I}ÆP¢¿Y[ÞEþxsXcÐ®4B#ª§¸c>£.t\\?»R\vqÚßw´"
                      : "\0uÏÿóÊK<ÏÕy8Îk{f/Sü$Pà÷(-y|âp¢øÇð%",
                    Fa
                  )),
          (Ch.Sn[0] =
            30 > Ch.Re
              ? 20 > Ch.Re
                ? 10 > Ch.Re
                  ? c('\0\0FX¸0¢Á¨æCAõøÍg"«×aÔ¬ý¦Ó½©À´NàÜÕS¸ªím´þî¡º#JO', Ba)
                  : c(".­oWî3ÄqÅùÎ©îµî9^=LÍû´ÅSèýAå;Â4ÆkªÓÅÂ|+ûT²×¦ÅÂùö", Fa)
                : c("!´8zñ <úÌÓó3TØæ¦§io¯2Yâ0SÆþöOé¨ÇèZáBuò¶j'V\bÂ", Fa)
              : c("/¶\b×[Á\tÝï­ôHöý¨¥V\røî#9ÃZþI#PMûGÃ§\v", Fa)),
          0 > this.zo ||
            (22 > this.Lc
              ? 21 > this.Lc
                ? 20 > this.Lc
                  ? 19 > this.Lc
                    ? this.Lc === 15 &&
                      (Ch.Sn[0] = c(
                        "Üèûû÷@Uÿs`ØòL:)a.¨0¸^Ü²=²äý¥Êlr\bäcd3Uñem#ù",
                        Ba
                      ))
                    : (Ch.Sn[0] = c(
                        "¹Ò&úÕ«Õ&ýôXbL[õP@RÕBHV%u\rÀ-Já¿A¥//64ûÂpÂÑõîþ­9Jj~W{ åÍ,",
                        Ba
                      ))
                  : (Ch.Sn[0] = c(
                      '«¬ÐÀOçJE\0_ªÄf"NsÕñd]cC1(v)ZI]\\\0Rª­YnDÀi¥3X',
                      Ba
                    ))
                : (Ch.Sn[0] = c("y~«þ.ñÕfCÓ(÷Âè«ÐkMòÃnGë#\v,¡^Ü.c=Ø >f¾", Ba))
              : (Ch.Sn[0] = c(
                  '\r0ð:Kg\f½Ëeàø¹"!ú·¿Ü-hâjq¿ªh­L²jMÜ9¨-NÉÛd°×{YrnXl·\rSÄ°æ¼',
                  Ba
                ))),
          (this.tn = 1);
      }
      this.nn === 999999 &&
        (Be.vc(Vr, (t) => {
          t.speed = 0;
        }),
        (Ch.Sn[0] = c("Ó\bN½Yß»3Y*!uå_+Ðþ\\Sô\fQÇØÖîÑ\b_Ã", Da)),
        (Ch.do = -1),
        (Ch.lc = 3)),
        (this.To = -1);
    }
    if (
      (Ch.uc === 2 &&
        this.To !== -1 &&
        Ch.od === 0 &&
        (this.To === 0 &&
          ((Ch.En = 0),
          this.Lc > 0
            ? ((Ch.Sn[0] = c(
                ">\vçz~ä0ª\b·ºTáõy²¢7O ¶8óúQ|P\fäÍ(7åg·öÝ´¶ævä Q{cúþúçbÀtngå¤qtçë8äN¸§STj\0º",
                Da
              )),
              (Ch.Sn[1] = c(
                "4ØÀ;&ãLñÈD±óÿ\\*ÈTE^KPF²|Qåº£ÃÅuq²5ÿñ£KVkÍGN/¶\\Ê¢cÉöB]",
                Da
              )))
            : (Ch.Sn[0] = c(
                "Å®76B¬Å_ks9\"¢_ÄñA6¾#ñÛú±>»ÀZÎ¹í¢¿<`6t¬ÝÆîASüËþè'uaìÏHTêUÇ¬ÙÒ*´GY",
                Da
              )),
          Be.vc(Bs, (t) => {
            t.wn = 3;
          }),
          (Be.Sc(Ch.we[0], Ch.we[2], Bs).wn = 0),
          (this.To = 9)),
        (Ch.od = 1)),
      Ch.uc === 4 && Ch.vd === 0 && (qi(this), 0 > this.an && (this.Qo = 1)),
      this.nn !== 222 || Be.Tc(Bs) || (qi(this), 0 > this.an && (this.Qo = 1)),
      this.Ee === 1 &&
        (this.No
          ? ((Ch.lc = 99),
            (Ch.uc = 99),
            gh.ka(Ch.Ho),
            gh.Ia(0.45),
            (Ch.gd = 5),
            Be.vc(
              Bs,
              (t) => {
                Be.He(t);
              },
              1
            ),
            (this.po.uf = 20))
          : (Be.vc(
              Bs,
              (t) => {
                Be.He(t);
              },
              1
            ),
            (Ch.lc = 99),
            (Ch.uc = 99),
            Be.vc(Vr, (t) => {
              t.visible = 0;
            }),
            (Ch.gd = 5))),
      this.Ee === 2 &&
        ((Ch.En = 0),
        (Ch.Hn = 107),
        (Ch.Sn[0] = c(' "º¢.=h:ùLWÃ`Wp<ýõ ùµý½ãG\r9Êÿ©«mÙæ', Da)),
        (Ch.Sn[1] = c("yÌ!r«ù¶Ì¾»?ui÷âp;o¡Èl­ô7éåëJ\n=?wÈ|ÌöÂ#æU2¸¨9&ý\n", Ka)),
        (Ch.Sn[2] = c("ùU'`Äà:x«Ââ÷Ûoùî<º,ØN9\0i¯æh!¾P¼O°J3ÝÃ(×ýkÕÚ\nXõ", Ka)),
        this.Xo === 1 &&
          ((Ch.Sn[0] = c('¥]®*ñÊEè±D>å3Ä3$z%"À54Í\t³ëi5~­¡4§fN', Ka)),
          (Ch.Sn[1] = c("_c#7Ñ6ÉëÇýíãª5sªgþ5áöY§pÒñ¥BÎÌ", Ka))),
        this.Xo === 2 && (Ch.Sn[0] = c("T>Kéª¾X7xãîMC<^dØ,ô\0M", Ga)),
        (this.Ee = 3),
        ha(this, this.x + 120, this.y)),
      this.Ee !== 3 ||
        Be.Tc(Bs) ||
        ((this.Ee = 5), (this.Fa[4] = 10), 1 > this.Xo || (this.Fa[4] = 2)),
      this.Ee === 6 &&
        (gh.ka(void 0),
        Lh.We(Et),
        (this.bd = ((t, h, i) => {
          const s = Be.Sc(-10, -10, Ta);
          return (s.visible = 1), (s.cr = 0), (s.wr = i), s;
        })(0, 0, La)),
        (this.bd.nr = 999),
        (this.bd.dr = 999),
        (this.bd.Mh = -9999),
        (Ch.Xc = 999),
        Be.vc(Oh, (t) => {
          t.le = 1;
        }),
        (Ch.border = -1),
        (Ch.we[0] = 240),
        (Ch.we[1] = 400),
        (Ch.we[2] = Ch.we[3] - 160),
        Be.vc(Vr, (t) => {
          (t.x = Ch.we[0] + 75), (t.y = Ch.we[2] + 75);
        }),
        (this.Ee = 7),
        (this.Fa[4] = 8),
        1 > this.Xo || (this.Fa[4] = 2)),
      this.Ee === 8 &&
        ((Ch.Fn = 5),
        (Ch.fn[271] = 1),
        Be.vc(Vr, (t) => {
          t.visible = 1;
        }),
        Be.He(this.bd),
        Lh.We(Et),
        (this.Yo = 0),
        (Ch.uc = -1),
        (Ch.lc = 2),
        (this.Ee = 9),
        Be.vc(Oh, (t) => {
          t.visible = 1;
        }),
        (this.Fa[4] = 20),
        1 > this.Xo || ((this.Ee = 11), (this.Fa[4] = -1))),
      this.Ee === 10 &&
        ((Ch.Hn = 108),
        (Ch.Sn[0] = c("vYå0ÇAk¥Z\n;'V]xäïpÜ-çÚÉúd´²Q93ú¶®%¬?4", Ga)),
        (this.Ee = 11),
        ha(this, this.x + 120, this.y - 30),
        (this.Kn.wr = Sa)),
      this.Ee !== 11 ||
        Be.Tc(Bs) ||
        (Be.vc(
          xa,
          (t) => {
            t.uf = 1;
          },
          1
        ),
        (this.Ee = 12)),
      this.lo && (G.At(this.yo, 0.4, 1.4), Lh.We(wt), (this.lo = 0)),
      this.Vo && (G.At(this.jo, 0.4, 1.2), (this.Vo = 0)),
      this.Go &&
        (G.At(this.Io, 0.4, 1.2), G.At(this.Ro, 0.3, 1.2), (this.Go = 0)),
      this.oo !== 1 ||
        Ch.do > 0 ||
        (this.Lc >= 15 && 23 > this.Lc && Be.Sc(0, 0, vi),
        (Ch.lc = 3),
        (Ch.Ic = 0),
        (this.oo = 0),
        Be.vc(
          qh,
          (t) => {
            Be.He(t);
          },
          1
        ),
        Be.vc(
          Si,
          (t) => {
            Be.He(t);
          },
          1
        ),
        Be.vc(
          Qh,
          (t) => {
            Be.He(t);
          },
          1
        ),
        Be.vc(
          xi,
          (t) => {
            Be.He(t);
          },
          1
        ),
        Be.vc(
          pi,
          (t) => {
            Be.He(t);
          },
          1
        ),
        Be.vc(
          Ti,
          (t) => {
            Be.He(t);
          },
          1
        ),
        Be.vc(
          Nr,
          (t) => {
            Be.He(t);
          },
          1
        ),
        Be.vc(
          ca,
          (t) => {
            Be.He(t);
          },
          1
        ),
        Be.vc(
          aa,
          (t) => {
            Be.He(t);
          },
          1
        ),
        Be.vc(
          Qr,
          (t) => {
            Be.He(t);
          },
          1
        )),
      this.$o === 1)
    ) {
      const t = Be.ke(Bs);
      t !== void 0 &&
        t.xn === 2 &&
        (gh.ka(c("Hù&¢©»(±+l:÷ÆsÁÂáÑ~½~ó$\b°", Ga)),
        gh.Ia(0.4),
        gh.Ra(0.9),
        (this.$o = 2));
    }
  }
  Mc() {
    if (
      (this.po.pause !== 1 &&
        ((this.md = Be.Sc(this.x + this.za / 2 - 48, this.y - 50, Zh)),
        (Ch.nc = 0),
        (this.md.Ze = 0),
        (this.po.pause = 1),
        this.Lc++,
        (this.Fa[8] = 11)),
      this.Do === 0 && (this.Do = this.x),
      (this.x = this.Do + this.Zo),
      (this.Zo = 0 > this.Zo ? -(this.Zo + 1) : -this.Zo),
      this.Zo === 0)
    )
      return (this.Do = 0), void (Ch.Eo[this.rn] = 2);
    this.Fa[3] = 2;
  }
  wc() {
    this.Ee++;
  }
  kc() {
    Be.He(this.ud),
      Be.He(this.Kn),
      (this.Fo = 0),
      (Ch.Fn = 0),
      (Ch.fn[20] = 0),
      (Ch.lc = 2);
  }
  eo() {
    if (
      ((this.zo = Math.round(dh.Ns(100))),
      (Ch.Sn[0] = c("#Ï1ÿÚ¡ïAÇ.&?¯", Ga)),
      (Ch.Sn[1] = c("aÎÊ9~!_\\{}fu_¶", Ga)),
      (this.hf = 0),
      this.Lc > this.Uo)
    ) {
      switch (this.Lc) {
        case 1:
          (Ch.Fn = 3),
            (Ch.fn[20] = 1),
            (Ch.Sn[0] = c(
              ":Vû£Áuøýt£À³ºª5hv¥Û¦4ü#öN'éÖëÉìØÛÂjsoãKÀ_þÑ¯MÃ¥èr«)÷fbnÅCæòåøº",
              Ga
            ));
          break;
        case 2:
          (Ch.Sn[0] = c(
            'áo±sgZ\v\\íQ\n1,ÑÏâ¢³X>âLAGZÃ$Pè»SA/ï\bbG\v÷<ç Ø8"èz"¡\nl6àÑlÄÇÞ0Ê @ö¦',
            Va
          )),
            (Ch.Sn[1] = c(
              "j'e,Mø¬\0Q7ÂeçËû![Ðò¿ZÝÐJ.Î³þmõ&Õºý.×öèë[ôíéµ Y¾§e«¯\b$ß2u",
              Va
            ));
          break;
        case 3:
          Ch.Sn[0] = c('ZÔm-ö\r2\bàä>W4åÙR¶Þ.O.±+"ÄÄ­]ØSI\v×ZÝM³:¶ë', Va);
          break;
        case 4:
          (Ch.Sn[0] = c("UäG\0Ù*Y@$ïÍNC;Âøµ43öã­¶ Y¥ÓòU", Va)),
            (Ch.Sn[1] = c("ü7ê$¶_íf®_L«(ÄY/ÍºÚ_ë«û¶ë/öÏ÷\f£ìFÖîð]°É«ÿÝ", Ua));
          break;
        case 5:
          Ch.Sn[0] = c("Ð¨T@ÅRÄ±s¾ ±Wc?R\0³+òÖ¤úW¦'»M«ß­ÇÄ¾'FvÞQ\\æÑú}ù#Å", Ua);
          break;
        case 6:
          (Ch.Sn[0] = c(
            "ßÿÉ¥D¯MóçbÐ\r\fJsàë\vÍsõ9äÝÚÚôªû*[Ë£oUMuTÿ ¸\vÂ¬¸dèÝIJë\\XÐ",
            Ua
          )),
            (Ch.Sn[1] = c("÷Õ#/Ù\t¤n7#´\\ÑÔ$/Ì,ûåàÅqeªøJú>Ý³éF÷\r2lØ", Ua));
          break;
        case 7:
          (Ch.fn[20] = 1),
            (Ch.Sn[0] = c(
              '*Im_l-tÊ\\­Y"ù³1ck3ôåäÑÊSx¤%¢ÅªÄfÁ=ë¡ØOÚ?8lPP5wøe0ª¬\b$ïýpÌ',
              Ua
            ));
          break;
        case 8:
          (Ch.fn[20] = 1),
            (Ch.Sn[0] = c(
              "ºû80>\fXbQIQ.2Ä@]svyü/\t0x\b7eqCÀS÷þ½)Ï²à~¾[ìÃ\\mÀgÇÚÁYs\0VRéÈ¼ íôûgJR°ã",
              qa
            ));
          break;
        case 9:
          (Ch.fn[20] = 1),
            (Ch.Sn[0] = c("ukfý$äùbá¯:17f FôâïV&,\tåC=w\0þqJÓí¦ía", qa)),
            (Ch.Sn[1] = c(
              "6(YÝò\bz×àVé¸cÃx«¸Ë+¥\\ô3ê^ ñØ[\v¬¡hnI^ìi}~2¡aàÛééGÇHs$Ô±©C¨kPé,t§üÈÒqéPA",
              qa
            ));
          break;
        case 10:
          (Ch.fn[20] = 1),
            (Ch.Sn[0] = c("«âµ¸\vÒ]_Ùþ\t¦ÃÜ:/²°0LP´Æ/", qa)),
            (Ch.Sn[1] = c(
              "p]$ª.Ö v¡á©ç\vû%¶ypgàI®DXSuZÑ2íÏÌ\"Ð|eýÜàZIaî'¬ðÂìëb¯ë",
              qa
            ));
          break;
        case 11:
          (Ch.fn[20] = 1),
            (Ch.Sn[0] = c(
              "y{W{5¡%¤ÀQ,î^+Éït=pË*BANÇcëòW)*éOÕ'Üÿ;J:§1Ä·n\"øÑä»¸7¦~å\bfSK³",
              qa
            )),
            (Ch.Sn[1] = c("çÏÎ§øÄÿC4ÃEØiýTHå¥{Þ\n\f«)±P®°[ú½E", Na));
          break;
        case 12:
          (Ch.fn[20] = 1),
            (Ch.Sn[0] = c(
              "\vKöo³¦84!9Ô}¸ÌÚdb{×÷Æd6ª2ß³a±8Wiºh×¹[U\\y0E\nß$ê^Ä3o",
              Na
            )),
            (Ch.Sn[1] = c(
              "´Üµ@*ï&ÛXp¦T\0[ù[Cì1¿!­ÌíãÕ·ðFÀÆdÕÓ.ÐËúV×ÝÞî£¹`E½é",
              Na
            ));
          break;
        case 13: {
          (Ch.fn[20] = 0),
            (this.po.Zn = 2),
            gh.Ca(),
            (this.$o = 1),
            Be.vc(
              Vr,
              (t) => {
                t.speed = 0;
              },
              0
            );
          const t = m.h(X.L) ?? 0,
            h = m.h(X.C) ?? 0;
          m.i(X.C, h + 1),
            (Ch.Sn[0] = c("$Ö«`#î]ÒÃOª[zQ¢ÖÚRG°Ïêq2$Õ6ÕÉütéP¼Ãs", Na)),
            (Ch.Sn[1] = c(
              "AAþ¿fëIuéîÑ.òÆ×\nw>Í«aS2Âwk\tWÉÊçúQ\t\t:5}¹§ý+)3åÜ{ ³¸´ë¤HU%É6",
              Na
            )),
            (Ch.Sn[2] = c("FÛÐYÆ¨÷YéÃú48", $a)),
            (Ch.Sn[3] = c("x-ÃMéÀhm¾ïoXV\f´BÍôOLàW", $a)),
            (Ch.Sn[4] = c(
              '·â6ºlrí?ö*4!"èèÑX¾Ô Ì²±dõ_#8m*Øß,Ç4§`_e&«^Ú±ð¬å',
              $a
            )),
            (Ch.Sn[5] = c(" Ðël²WPMaS@îÊ\bOB\n¼ÕÔÞyâb7pD¾>¶´\flDF;2ùÒ:", $a)),
            (Ch.Sn[6] = c(
              "4âD]Ð¯cç*(haK'ìÓgÞÙº\0X%8$[ÀjYÊ¼û¦´»,v¾@­`ctäòÁ\0¨ÊëmÖ<$Ù",
              Qa
            )),
            (Ch.Sn[7] = c(
              "ýé\r¨µ\0õpèùÕ´Gh[C¼U/²Àå^¾|\nBO8»5ê³k©Wó¹û$c\v|Î-äNe\0¤0Gc,â(©fL",
              Qa
            )),
            (Ch.Sn[8] = c(
              "hìÿEhXç_,c>[ÆBox½FS¹9d_{èþÒÙWC³=;-Ýu<*®´ÒIêCÖÏÍ¾©7|X=dè`Mô/|",
              Qa
            )),
            (Ch.Sn[9] = c("Ò¡¿@»LÆNkÚTJe­(«=2G²þ+·øÇ", Qa)),
            (Ch.Sn[10] = c("$ì;RòÉOÃíbõ{áNæ|Ê6=n½|¹¶..", Qa)),
            (Ch.Sn[11] = c("õ^ÑU:­Æ?ÝjD?ÝëV±ÜbTJ¨n\b\bÕßæw$qæ", Ja)),
            (Ch.Sn[12] = c(")¢bGÄäq[\n#ÎG©1Öpº}\\CMï]SûS^á'u5¡j", Ja)),
            (Ch.Sn[13] = c("mrQ6·ã5¤=äq]6ìõZí¹¬âEEë7dlD,2Kß´t/eÄôc¸>B", Ja)),
            (Ch.Sn[14] = c(
              "Ö¸h¶æq\0M\\w|\n'\"NÞ?ílõ²rë9c b~ÄÐ \b[wîÆ(C¼sî<ë_;Ó",
              Ja
            )),
            (Ch.Sn[15] = c(
              'ù«*"nU,¨Ra3Ì,aº¾9aò1Ç\v Ë»ÕÓÛÆ)¦2¼¹×\\5ÎÅ¤ÐuÍg!³',
              Ja
            )),
            t > 0 &&
              ((Ch.Sn[0] = c("Ô¹Q\0úXó5-A±ë(ß;{õ±.Eh»Æ|Ó`ÐÊ÷Ìbä¤ñè± ¥çaý", _a)),
              (Ch.Sn[1] = c(
                "Iv¨=\\AM·Ù7gsr¦´AyÜÎB2åµÆ3_?1Z@£ëÉõ|<´àþ¬[¡ÑwÞÑÄYËÜîÙq;Á;ö;ÐRÉ4,",
                _a
              )),
              (Ch.Sn[2] = c("ó÷¸n¨§@ODÓuBUÌÏ55ü", _a)),
              (Ch.Sn[3] = c("F£­9a½B³[bÀ5{úCï\vw? x\tl", _a)),
              (Ch.Sn[4] = c('¦ÒÙn®½W\nD"éFÈí¾*²¬jiS2Ø£õ', za)),
              (Ch.Sn[5] = c('"TÃm"nOM^iü¤H{Ë°à©ÈòÛ\'ÞÀpó2¢¶æ<vÇ', za)),
              (Ch.Sn[6] = c("r ²P}\0´Kq§çÔçÄ×Ú§ªv(åEé'·\\ÈH4@5¯", za))),
            (this.nn = 999999);
          break;
        }
        case 14: {
          const t = m.h(X.L) ?? 0,
            h = m.h(X.S) ?? 0;
          t > 0 && m.i(X.S, h + 1),
            this.$o === 2 && gh.ka(void 0),
            (Ch.fn[20] = 1),
            (Ch.Sn[0] = c("¥øËd!5ô¤áô0¹ò#@×Ý¨ÇSM`å¥i'.ÈËÊÖEÆZ¡|gda«", za)),
            (Ch.Sn[1] = c(
              "ÓºR/b»4,ÓY²ÌTóv/Ä'Xéü¦ïÕúÎ«1(áKÎÏï÷Y\\3ÇA®m»ó/DBÛs¶",
              za
            )),
            t > 0 &&
              h === 0 &&
              ((Ch.Sn[0] = c(
                "Ï|ò>6¾G*6ëû:vNï*kæ`Õ:)Mo8¢É\n~n`I\rw÷X Û³8µÃ°Îì",
                Za
              )),
              (Ch.Sn[1] = "\\E4heheheh.../"),
              (Ch.Sn[2] = "\\E5did i getcha?/"),
              (Ch.Sn[3] = c("x7Ç¬õ]GO9kdê£Üki.%îæ½e^{Gþ]d0 §µH¿$âo/@i~\t", Za)),
              (Ch.Sn[4] = c(
                "6«Ññuc<Å;8hú¼F}ý([¿%Z\0cq¨\\àgpÂ¶/K®ÇñH9¡ÄÀC5ßlÓWò>Ý]û\b:",
                Za
              )),
              (Ch.Sn[5] = "\\E4heh./"),
              (Ch.Sn[6] = c(
                "¹N&1éoÔô©n¸uYÔÅº \fYÅö³Màà1C¿fm½)nH\nÒKÂqë_UZ-æøÈ5÷",
                Za
              ))),
            (this.nn = 999999);
          break;
        }
        case 15:
          (Ch.Sn[0] = c(
            "t±g4§Iãx4H)1:\b¸¦tnDÙñ×¶KX')5Å~Eð{!j-Y¼\r¹#3*-ád%t-]:XóLøI_§K \n¶y u©ÈÅÄ;6fLCÁ·ÁäJr",
            Za
          )),
            (Ch.Sn[1] = c(
              'Ì¨idhr,Oç\rÕ\n½ù\0¿$Äöï¶¾@9û\bÖÄ"t} ´´PM£­2ßìKÓÝkÞiªð,R5\bhoX5AhH3jÓÆÆæë;',
              Za
            )),
            (Ch.Sn[2] = c(
              "ZqhñÀçDÃßÖönEPÑ¦<>¡iX¥³ÀOEBwfl-èã,ÚþTªü_·NjA\b²8å\b>òæaw«£2±éÝ",
              tr
            ));
          break;
        case 16:
          (Ch.Sn[0] = c(
            "*(7J\nÓý,§1¶\bÔ4þ`g²z;ÁuÕ¢a?(Ùt,Ç*ê:öÎ½ªÇLè¨\v\n'6Ì&ºgê­",
            tr
          )),
            (Ch.Sn[1] = c(
              "ëxøãh\rÞ&:tÃp`]^\fè:æó 'g@giäúæÄîj)Jµ@\vvÐ]UcXòP,úò}Ú8-V¼ç°PÉtãr{`",
              tr
            ));
          break;
        case 17:
          (Ch.Sn[0] = c("1µb@}Ã`sV_8ÝGí±If÷¾¯Ð¼Ê*Äç¾>\0\\%ÇYrr7ÐçHà\bÀÌ", tr)),
            (Ch.Sn[1] = c(
              "ôa#ù x2ñ]Ü2mB&UÌo¨{FpÙT2ú\nÔÑºÄÞJ³\fw/EXÍD¤Ûa!VÁ,%y*ÀzGx?ò0vm¯w",
              tr
            ));
          break;
        case 18:
          (Ch.Sn[0] = c(
            " I·º?LCo}.;\\dh°®9YÕÐBíb{:B!F6Ý\0oJ<.¬ùÒ+æ%YKyB|f-¤ht¾¯2\tCÇ¾É\\",
            hr
          )),
            (Ch.Sn[1] = c("¥R©ÍaVÞ0_ÖZ0Ùw(HÐhÚ'", hr)),
            (Ch.Sn[2] = c("öR»jrÛr+>R<Õ(w`E÷r", hr)),
            (Ch.Sn[3] = c("î*X+OR3EIr\0ÏrÃókª8¿í.RAÚõî%ñº!", hr)),
            (Ch.Sn[4] = c("mÀjÜñ-l¹ëö8¦\bÁ!Q?Ú¦[@À¸v", ir)),
            (Ch.Sn[5] = c(" %Pz}\tÏ¦uiÝ%8ÍÚøE¢¶/®èª<zS6Ø\tÁÆX®~£Cwê#ÿ<", ir));
          break;
        case 19:
          Ch.Sn[0] = c("w½AÞ¶¦I{áTÎhÂW·dh¯ `ýÛ¦qÊ§N£ÚæÝ34ÎØ£¼", ir);
          break;
        case 20:
          (this.po.Zn = 1),
            (Ch.Sn[0] = c("'?Gy\f9Ë¿Þ¥Ó8ï4êioÜëÊÕ/Õ;¤!ûÖq¨", ir)),
            (Ch.Sn[1] = c(
              "j3QÖ5ÍÔ[Ã3ÃyZß/#mW9Ëµû®4Àj®z1:`!ç´ñcÝjtl_v­{Jû9å¾4",
              ir
            ));
          break;
        case 21:
          (this.po.Zn = 1),
            (Ch.Sn[0] = c("Ïî|\t1w%C'w^3½¡xóm >,!?3;@<'¿ø2sR¦:ëu", ir)),
            (Ch.Sn[1] = c(
              "4IÊ¼EZ:¹ÔûtMLÀÉu£{ÍH$KÐM±aGE|»-F¬E(lhnåmZ,|zÁy>Cw5aÂïõë,8Ë{Ôg",
              sr
            ));
          break;
        case 22:
          (this.po.Zn = 2),
            (Ch.Sn[0] = c(
              "g\0Ëèòå¿>äÁþ}bü5^­ÀjaÐ*p\t¸;o+FüA3/@â¨lU=ÎpØ$ØLvEôÐÖºe",
              sr
            )),
            (Ch.Sn[1] = c(
              "¶GÝ;7öO3@»b0°EÏBÔNÉBÚ>?ÞQv;SÌÖBÖ_óúÚÚ£ª<ãKÌz-o®þG/lò=¦K¯q&¿0'\tïnHÊû?Ú´dÆn7»",
              sr
            )),
            (Ch.Sn[2] = c(
              "{ÍAßwd«Â_N¤ÀÇ|ÖÕ\f£¿ y_dF%tEÿ¬ÄnÑ\b>:ö~Bf¯&Ó¥|d\r2-ðc¹8Ïñ¬kä}vdpIã!òmìGå³ênQ",
              sr
            ));
          break;
        case 23:
          (this.po.Zn = 0),
            (Ch.Sn[0] = c("¢M1ÞÜMÛj!½w½q1Ûo\x005Áæ_ÑÍ¢%ñÃÔ}/×C(Ús G", sr)),
            (Ch.Sn[1] = c("J<<ÍX¥Qj¬;ä±wÚ.OÉ²ü4\nQ", ar)),
            (Ch.Sn[2] = c(
              "t¡¼ÿëd-lã ÛT¡AaÊ.XîwÛîâþ¼yXXúÚ¦³_c-\tç6Ø-3øñiÿÙÚ®-}h¶ªÐå²RvgFDÑW",
              ar
            ));
      }
      this.Uo = this.Lc;
    }
    if (this.Qo === 1) {
      (Ch.fn[272] = 1),
        gh.ka(void 0),
        (Ch.fn[20] = 0),
        (Ch.Fn = 4),
        (Ch.Sn[0] = c("ÖRv4(ÜOWuÈäü²@}s", ar)),
        (Ch.Sn[1] = c("V`Ú³V´$ÝéÜ@:á×UvTëc{j°\v", ar)),
        (Ch.Sn[2] = c("Ò`)ÜùÞZFN¬,[%ï@¥M", ar)),
        (Ch.Sn[3] = c("DÇ~ª­Ãä¥#»Ë\båg00ÂÃQÅnÂöó", rr)),
        (Ch.Sn[4] = c("~eé[ÀÝæ.Ý'Ìé)ÌEoÙ/V½<³j[0Mz¹êÛ9ÐÇ¥¿#", rr)),
        (Ch.Sn[5] = c("ZÃÉì8ªØXl±cÜå¥øöÖÃ:^Ô§që´tdé½Ù", rr)),
        (Ch.Sn[6] = c("3VW&«Ì'ô«eH/0½Gt,INÃùiH°\\2NÒØ«£\rÂ±ñ?þÎìø~·ßÒh9", rr)),
        (Ch.Sn[7] = c(
          "Hs)Uxòdò-­Ã,ÎOa!dß<ínt\rÖ¸LÀö'S½ªÏhwìxµ«¼#,ì*`½èÊ¢vRÙ,#â]û¥",
          er
        )),
        (Ch.Sn[8] = c(".)?Íß%¢£=q5VÂpò!É", er)),
        (Ch.Sn[9] = c("g½\tn-ÉÉø<0ßÙE±>àltoû'·h÷÷nÄ´^", er));
      const t = m.h(X.L) ?? 0;
      m.i(X.L, t + 1);
    }
    if (((Ch.Hn = 109), (Ch.border = 35), 13 > this.Lc)) {
      Ch.fn[271] = 1;
      let t = this.part;
      switch ((13 > this.part || (t = 10), t)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 7:
        case 9:
        case 10:
        case 11:
        case 12:
          Ch.border = 35;
          break;
        case 6:
        case 8:
          Ch.border = 39;
      }
      Be.vc(
        Vr,
        (t) => {
          (t.Ic = 2), (t.wr = Ri);
        },
        0
      );
    }
    if (this.Lc >= 14 && 23 > this.Lc && this.Jo === 1) {
      switch (
        (Be.vc(
          Vr,
          (t) => {
            (t.Ic = 1), (t.wr = Ci);
          },
          0
        ),
        (this.td = 0),
        this.part)
      ) {
        case 0:
        case 4:
          Ch.border = 37;
          break;
        case 1:
        case 6:
          Ch.border = 0;
          break;
        case 2:
        case 3:
        case 5:
        case 7:
          Ch.border = 36;
          break;
        default:
          this.td = dh._s(3, 1, 2);
      }
      this.td === 3 && (Ch.border = 37),
        (this.td !== 1 && this.td !== 2) || (Ch.border = 36);
    }
    this.Lc === 23 &&
      ((Ch.border = 36),
      Be.vc(
        Vr,
        (t) => {
          (t.Ic = 1), (t.wr = Ci);
        },
        0
      )),
      this.Qo === 1 &&
        ((Ch.border = 38),
        Ca(),
        Be.vc(
          Vr,
          (t) => {
            t.speed = 0;
          },
          0
        )),
      Be.vc(
        Vr,
        (t) => {
          (t.x = Math.round((Ch.we[0] + Ch.we[1]) / 2)),
            (t.y = Math.round((Ch.we[2] + Ch.we[3]) / 2) - 8);
        },
        0
      ),
      Be.ke(Vr).Ic === 2 &&
        Be.vc(Vr, (t) => {
          (t.y = Ch.we[3] - 15), (t.speed = 0), (t.Bc = 1);
        }),
      Ch.border === 39 &&
        Be.vc(Vr, (t) => {
          t.y = Ch.we[3] - 70;
        }),
      this.Qo === 1 &&
        Be.vc(Vr, (t) => {
          (t.x = Math.round((Ch.we[0] + Ch.we[1]) / 2) - 8),
            (t.y = Math.round((Ch.we[2] + Ch.we[3]) / 2) - 8),
            (t.wr = Ci),
            (t.Ic = 1);
        }),
      Be.vc(
        oi,
        (t) => {
          t.terminate = 1;
        },
        1
      ),
      Be.vc(
        mi,
        (t) => {
          t.terminate = 1;
        },
        1
      ),
      Be.vc(
        vi,
        (t) => {
          Be.He(t);
        },
        1
      ),
      (this.hf = 250 - Ch.we[2]),
      0 > this.hf && (this.hf = 0),
      (this.Kn = Be.Sc(this.x + 120, this.y - this.hf, Ra)),
      (this.ud = Be.Sc(this.Kn.x + 30, this.Kn.y + 10, Ea)),
      Ch.Sn[0] === c("Z~¼×u02Ê¾cØ;¥", er) && (Be.He(this.Kn), Be.He(this.ud));
  }
  hd() {}
}
const nr = { Xe: () => new wa(nr) },
  fr = { parent: nr, Xe: () => new cr() };
class or extends Fs {
  constructor() {
    super(dr);
  }
  he() {
    super.he(), delete this.Fa[0], (this.Mn = this.kn.length);
  }
  rt() {
    this.Pn(1);
  }
}
const dr = { parent: Bs, Xe: () => new or() },
  mr = { 1: c(";®å¸K?.yF>.çüºó", "Ë§3ªã´ï£Qàóq¿®ná") };
function gr() {
  for (let t = 0; 8 > t; t++) Ch.jn[t] = mr[Ch.item[t]];
}
class vr extends Wh {
  constructor() {
    super(br),
      (this.wr = Ki),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -2e3),
      (this.Is = 0);
  }
  he() {
    (this.cr = 0.5 - Ch.stretch / 4),
      (this.nr = Ch.stretch * 2 - 0.5),
      (this.dr = Ch.stretch * 2 - 0.5),
      (this.x -= (this.za / 2) * (this.nr - 1)),
      (this.y -= (this.Za / 2) * (this.dr - 1)),
      Lh.We(yt),
      this.cr === 0 && (this.cr = 0.1),
      (Ch.fo = (1 / this.cr) * this.er + 3);
  }
  _r() {
    Be.He(this);
  }
}
const br = { Xe: () => new vr() },
  ur = {
    Zs: [
      { aa: 1, ta: 1004, ha: 202, ia: 14, sa: 128, ra: 0, ea: 0 },
      { aa: 1, ta: 810, ha: 102, ia: 14, sa: 128, ra: 0, ea: 0 },
    ],
    Vr: 14,
    Ur: 128,
    qr: 0,
    $r: 0,
    Nr: 13,
    Qr: 127,
    ii: 0,
    si: 0,
  };
class lr extends Wh {
  constructor() {
    super(Xr),
      (this.ld = 0),
      (this.Rc = 0),
      (this.sc = 0),
      (this.wr = ur),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -2),
      (this.Is = 0);
  }
  he() {
    (this.cr = 0), (this.ld = 0);
    const t = Be.ke(Wr);
    this.x > t.x || (this.Sr = Ch.Xd + dh.Ns(Ch.Yd)),
      this.x > t.x + t.za && (this.Sr = -(Ch.Xd + dh.Ns(Ch.Yd))),
      Ch.Hd === 13 && (this.Sr *= 1.25);
  }
  ie() {
    Be.vc(Wr, (t) => {
      t.tt = 1;
    });
  }
  st() {
    const t = Be.ke(Wr);
    if (
      (this.Sr > 0
        ? this.x > t.x + t.za && (this.ld = 1)
        : 0 > this.Sr && t.x > this.x && (this.ld = 1),
      this.ld == 1)
    )
      return (Ch.nc = 0), (Ch.Eo[Ch.rc] = 5), void Be.He(this);
    const h = Ch.ac[Ch.rc];
    if (
      ((this.Rc = 100),
      (this.sc = 100),
      Be.Ye(h) && (h.So = this.ya),
      (this.Rc = h.Rc),
      (this.sc = h.sc),
      this.cr === 0 && C.J.z)
    ) {
      (this.Sr = 0),
        (Ch.nc = ((Ch.Wd = Ch.en + Ch.at), Ch.Wd - Ch.cn[Ch.rc] + dh.Ns(2)));
      let i = Math.abs(this.x + this.za / 2 - (t.x + t.za / 2));
      i === 0 && (i = 1),
        (Ch.stretch = (t.za - i) / t.za),
        (Ch.nc = Math.round(i > 12 ? Ch.nc * Ch.stretch * 2 : Ch.nc * 2.2)),
        Be.Sc(h.x + this.sc / 2 - 5, h.y - 5, br),
        (Ch.Eo[Ch.rc] = 1),
        (this.cr = 0.4);
    }
    Ch.uc !== 1 && Be.He(this);
  }
}
const Xr = { Xe: () => new lr() },
  Yr = {
    Zs: [{ aa: 1, ta: 0, ha: 242, ia: 562, sa: 128, ra: 0, ea: 0 }],
    Vr: 562,
    Ur: 128,
    qr: 8,
    $r: 7,
    Nr: 553,
    Qr: 121,
    ii: 0,
    si: 0,
  };
class Hr extends Wh {
  constructor() {
    super(Wr),
      (this.tt = 0),
      (this.wr = Yr),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 0),
      (this.Ba[0] = () => this.qe());
  }
  he() {
    this.Fa[0] = 6;
  }
  st() {
    this.tt === 1 && ((this.ir -= 0.08), (this.nr -= 0.06), (this.x += 15.8)),
      0.08 > this.nr && Be.He(this);
  }
  qe() {
    switch (Ch.Hd) {
      case 3:
        Be.Sc(this.x - 16, this.y, Xr);
        break;
      case 13:
      case 45:
      case 51:
      case 52: {
        const t = Math.round(dh.Ns(1));
        t === 0
          ? Be.Sc(this.x - 16, this.y, Xr)
          : t === 1 && Be.Sc(this.x + 570, this.y, Xr);
        break;
      }
    }
  }
}
const Wr = { Xe: () => new Hr() };
class pr extends Wh {
  constructor() {
    super(Or),
      (this.pd = 0),
      (this.wr = void 0),
      (this.visible = 0),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 0);
  }
  he() {
    (this.Fa[0] = 10), (this.pd = 0), Lh.We(Vt);
  }
  qe() {
    this.pd == 0 && Lh.We(Ft), Be.He(this);
  }
}
const Or = { Xe: () => new pr() },
  Ar = {
    Zs: [{ aa: 1, ta: 935, ha: 283, ia: 32, sa: 20, ra: 0, ea: 0 }],
    Vr: 32,
    Ur: 20,
    qr: 4,
    $r: 5,
    Nr: 26,
    Qr: 14,
    ii: 0,
    si: 0,
  };
class xr extends Wh {
  constructor() {
    super(Mr),
      (this.wr = Ar),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -198),
      (this.Is = 0);
  }
  st() {
    const t = Be.ke(Kr);
    t !== void 0 && (this.Mh = t.Mh);
  }
}
const Mr = { Xe: () => new xr() },
  wr = {
    Zs: [{ aa: 1, ta: 971, ha: 319, ia: 23, sa: 10, ra: 0, ea: 0 }],
    Vr: 23,
    Ur: 10,
    qr: 0,
    $r: 0,
    Nr: 22,
    Qr: 9,
    ii: 0,
    si: 0,
  },
  kr = "pöôeJQÅÇvnô",
  Tr = c("Ád ÉïÁ3óÒó9É", 'sfò\b;z­E&+¨gR"ÆòØkEÎ'),
  Lr = c("±nX3|7 ÕÿC«0 õ)", kr),
  Sr = c("òÏÏ\bË¹Ò\\·\x002Ð_¢ôIrgSÀ", kr);
function Cr() {
  Be.vc(Bs, (t) => {
    t.wn = 3;
  }),
    Be.vc(dr, (t) => {
      t.wn = 3;
    }),
    Ch.Xc === 3 && (Ch.En = 9),
    Ch.Xc === 3.5 && (Ch.En = 10),
    Be.Sc(Ch.we[0], Ch.we[2], dr);
}
function Ir() {
  (C.N.z = 0), (C.J.z = 0), (C._.z = 0);
}
function Rr() {
  (C.N.x = 0), (C.J.x = 0), (C._.x = 0);
}
function jr() {
  Be.vc(
    Bs,
    (t) => {
      t.wn = 3;
    },
    1
  );
}
function yr() {
  jr(),
    Be.vc(
      dr,
      (t) => {
        t.wn = 3;
      },
      1
    );
}
function Er() {
  Be.Sc(Ch.we[0], Ch.we[2], dr);
}
function Pr() {
  Be.Sc(Ch.we[0], Ch.we[2], Bs);
}
function Fr(t) {
  Be.vc(
    Vr,
    (h) => {
      h.x = t;
    },
    0
  );
}
function Br(t) {
  Be.vc(
    Vr,
    (h) => {
      h.y = t;
    },
    0
  );
}
class Dr extends Wh {
  constructor() {
    super(Kr),
      (this.Od = 0),
      (this.Ad = 0),
      (this.xd = 0),
      (this.Md = 0),
      (this.wd = 0),
      (this.active = 0),
      (this.kd = 0),
      (this.Td = 0),
      (this.Ld = 0),
      (this.Sd = 0),
      (this.Cd = 0),
      (this.Id = 0),
      (this.Rd = 0),
      (this.jd = 0),
      (this.yd = 0),
      (this.Ed = 0),
      (this.Xr.down = () => this.Pd()),
      (this.Xr.right = () => this.Fd()),
      (this.Xr.up = () => this.Bd()),
      (this.Xr.left = () => this.Dd()),
      (this.Ba[0] = () => this.qe()),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -450),
      (this.Is = 0);
  }
  he() {
    Ca(),
      Be.vc(
        uh,
        (t) => {
          Be.He(t);
        },
        1
      ),
      (Ch.Rn[0] = 68),
      (Ch.Rn[1] = 0),
      (Ch.Rn[2] = 0),
      (Ch.Ho = c(
        ":¡¿³rM·ß}\0îõ¥Ù¶Í¢ã:ÝVúòi&JâQW:ã",
        "ÃtOV{¾0U©ÚåéBÁâ@ª=ï=iÈUTð"
      )),
      (Ch.En = 0),
      (Ch.Kd = 0),
      (Ch.Gd = 0),
      (Ch.Vd = 0),
      (Ch.Sn[0] = ""),
      (Ch.ac[0] = Be.Sc(270, 110, fr)),
      (Ch.vd = -1),
      (Ch.Ud = 1),
      (Ch.qd = 0),
      (Ch.fn[271] = 0),
      (this.Od = 0),
      (Ch.Sn[4] = Ch.Sn[0]),
      Ch.Gd === 0 &&
        Ch.Vd === 0 &&
        ((Ch.uc = 0), (Ch.lc = 0), (Ch.Hn = 1), Be.Sc(Ch.we[0], Ch.we[2], Bs)),
      (Ch.turn = 0),
      (Ch.do = -1),
      (this.Ad = 0),
      (Ch.od = 0),
      (Ch.Nd = c("BA ZvO´_'ß){mZµk", '¼¹Ç-$áÄ\n¿@üÄp¶Ý"±ÍõÍ')),
      Ch.Ao > 20 && (Ch.Ao = 20),
      (Ch._e = 16 + Ch.Ao * 4),
      Ch.ye > Ch._e + 15 && (Ch.ye = Ch._e + 15),
      (Ch.at = 8 + Ch.Ao * 2),
      (Ch.xo = 9 + Math.ceil(Ch.Ao / 4)),
      Ch.Ao === 20 && ((Ch.at = 30), (Ch.xo = 30), (Ch._e = 99)),
      (this.xd = Ch.at),
      (this.Md = Ch.xo),
      (this.wd = Ch.gd),
      (this.active = 0),
      (this.Fa[0] = 3),
      (this.kd = 0),
      (this.Td = 1),
      (this.Ld = 1),
      (this.Sd = 0);
  }
  ae() {
    if (C.N.z && this.Ad) {
      const t = Be.ke(Bs);
      (t === void 0 || t.wn) && Be.$d(Ch.Qd);
    }
  }
  st() {
    if (
      (Ca(),
      (this.Cd = Ch.Xc),
      (Ch.uo = 30),
      Ch.Jd === 44 && (Ch.uo += 30),
      Ch.Jd === 64 && (Ch.uo += 15),
      Ch.Jd === 45 && (Ch.uo += 15),
      15 > Ch.uo && (Ch.uo = 15),
      (Ch.Jd !== 46 && Ch.Jd !== 64) ||
        (Ch.lc === 0 && Ch.uc === 0
          ? (Ch.turn + 1) % 2 != 0 ||
            this.kd ||
            ((this.kd = 1), Ch._e > Ch.ye && Ch.ye++, Lh.We(Ft))
          : (this.kd = 0)),
      Ch.lc === 0 && Ch.uc === 0)
    ) {
      if (((Ch.Hn = 1), this.active && !C.J.x && C.J.z)) {
        if (Ch.Xc === 0)
          return (
            (Ch.Fo = -1),
            (Ch.bc[2] = 0),
            (Ch.Xc = Ch.bc[0] + 1),
            (Ch.Xc !== 1 && Ch.Xc !== 2 && Ch.Xc !== 11) ||
              ((Ch.En = 3),
              Ch.Cn[Ch.bc[1]] == 0 && Ch.bc[1]++,
              Ch.Cn[Ch.bc[1]] == 0 && Ch.bc[1]++,
              Ch.Cn[0] || Ch.Cn[2] || (Ch.bc[1] = 1),
              Ch.bc[1] > 2 && (Ch.bc[1] = 0),
              Ch.Cn[0] || (Ch.bc[1] = 1),
              Ch.Cn[1] || (Ch.bc[1] = 2),
              Ch.Cn[2] || (Ch.bc[1] = 0)),
            Ch.Xc === 3 &&
              (Ch.item[0] !== 0
                ? ((Ch.bc[3] = 0), gr(), (Ch.En = 9))
                : (Ch.Xc = 0)),
            Ch.Xc === 4 && (Ch.En = 7),
            (Ch.Nd = Ch.Sn[0]),
            Lh.We(Dt),
            yr(),
            Er(),
            void Ir()
          );
        if (
          (Ch.Xc === 1 &&
            ((Ch.rc = Ch.bc[1]),
            yr(),
            (Ch.uc = 1),
            Fr(-200),
            Lh.We(Dt),
            Be.Sc(Ch.we[0] + 6, Ch.we[2] + 6, Wr),
            Ir()),
          Ch.Xc === 10)
        ) {
          Ch.Fo = Ch.bc[2];
          const t = Ch.ac[Ch.rc];
          (Ch._d = t),
            (t.To = Ch.Fo),
            yr(),
            Lh.We(Dt),
            (Ch.uc = 2),
            Fr(-200),
            Ir();
        }
        Ch.Xc === 2 &&
          ((Ch.rc = Ch.bc[1]),
          yr(),
          (Ch.Xc = 10),
          (Ch.En = 1e3 + Ch.Rn[Ch.rc]),
          Er()),
          (Ch.Xc !== 3 && Ch.Xc !== 3.5) ||
            C.N.left ||
            C.N.right ||
            (jr(),
            (this.Id = Ch.bc[3] + 8 * (Ch.Xc - 3)),
            (this.Rd = Ch.item[this.Id]),
            (t = this.Id),
            this.Rd === 1 &&
              ((Ch.Sn[0] = c(
                "HÌ|nø±ÈÒ²µ\"GþO{00^Ùâ-Æ&îßöÆ=/Øn'Q¬",
                "ÿ4E\0~»?>´F¥æ0ÒF5Ë\\LM"
              )),
              Be.Sc(0, 0, Or),
              (() => {
                const [t, h] = (() => {
                  let t, h;
                  if (Ch._e > Ch.ye) {
                    let i = Ch.ye + (10 + (Ch.Hd === 47 ? 4 : 0));
                    Ch._e > i ? (h = 0) : ((i = Ch._e), (h = 1)),
                      (t = i - Ch.ye),
                      (Ch.ye = i);
                  } else (t = 0), (h = 1);
                  return [t, h];
                })();
                (Ch.item[8] = t),
                  (Ch.fn[260] = 1),
                  h && (Ch.item[8] = 9999),
                  (Ch.En = 11),
                  (Ch.Bn = 0),
                  Ch.Ud === 0 ||
                    (Be.vc(Bs, (t) => {
                      t.wn = 3;
                    }),
                    (Ch.Hn = 1),
                    Be.Sc(Ch.we[0], Ch.we[2], Bs));
              })(),
              ((t) => {
                Ch.item[8] = 0;
                for (let h = t; 7 > h; h++) Ch.item[h] = Ch.item[h + 1];
                gr();
              })(t)),
            (Ch.Fo = 91),
            (Ch.uc = 4),
            Fr(-200),
            Lh.We(Dt)),
          Ch.Xc === 4 &&
            (jr(),
            (Ch.vd = Ch.bc[4]),
            Ch.vd === 1 && ((this.Od = 0), (Ch.Fo = 90)),
            this.Od === 0 && Lh.We(Dt),
            (Ch.uc = 4),
            Fr(-200),
            Ir());
      }
      this.active &&
        C.J.x &&
        (Ch.Xc !== 0 &&
          6 > Ch.Xc &&
          (yr(),
          (Ch.Xc = 0),
          (Ch.Hn = 1),
          (Ch.Sn[0] = Ch.Nd),
          (Ch.En = 0),
          Pr(),
          Rr()),
        Ch.Xc === 10 &&
          (yr(), (Ch.Xc = 2), (Ch.Hn = 1), (Ch.En = 3), Er(), Rr()),
        Ch.Xc === 11 &&
          (yr(), (Ch.Xc = 3), (Ch.Hn = 1), (Ch.En = 0), Er(), Rr())),
        (Ch.Xc !== 1 && Ch.Xc !== 2 && Ch.Xc !== 11) ||
          (Fr(Ch.we[0] + 32), Br(Ch.we[2] + 28 + Ch.bc[1] * 32)),
        Ch.Xc === 10 &&
          (Fr(Ch.bc[2] > 2 ? Ch.we[0] + 292 : Ch.we[0] + 32),
          Br(
            Ch.bc[2] > 2
              ? Ch.we[2] + 28 + 32 * (Ch.bc[2] - 3)
              : Ch.we[2] + 28 + Ch.bc[2] * 32
          )),
        (Ch.Xc !== 3 && Ch.Xc !== 3.5) ||
          (Br(Ch.bc[3] > 1 ? Ch.we[2] + 60 : Ch.we[2] + 28),
          Fr(
            Ch.bc[3] === 0 || Ch.bc[3] === 2 ? Ch.we[0] + 32 : Ch.we[0] + 280
          )),
        Ch.Xc === 4 && (Fr(Ch.we[0] + 32), Br(Ch.we[2] + 28 + Ch.bc[4] * 32));
    }
    var t;
    if (
      (this.active &&
        C.J.x &&
        Ch.lc === 0 &&
        Ch.fn[21] === 0 &&
        (Be.vc(
          Bs,
          (t) => {
            t.Mn = t.kn.length;
          },
          1
        ),
        Rr()),
      (Ch.uc !== 1 && Ch.uc !== 2 && Ch.lc !== 3) || Fr(-400),
      Ch.lc === 3 &&
        ((Ch.border = 0),
        Ca(),
        Be.ke(Fh).x === Ch.we[0] &&
          ((Ch.Hn = 1),
          (Ch.En = 0),
          Pr(),
          (Ch.Xc = 0),
          (Ch.uc = 0),
          (Ch.lc = 0),
          Ch.turn++,
          (Ch.vd = -1))),
      Ch.uc === 3)
    ) {
      const t = Be.ke(Bs);
      t !== void 0 &&
        t.wn > 0 &&
        (Fr(Ch.we[0] + 32 + Ch.bc[6] * 252), Br(Ch.we[2] + 92), C.J.z) &&
        ((Ch.od = 0),
        (Ch.Fo = 6 + Ch.bc[6]),
        (Ch.ac[Ch.rc].To = Ch.Fo),
        Fr(-200),
        jr(),
        (Ch.uc = 2));
    }
    Ch.uc === 4 &&
      (this.Od === 0 && Fr(-200),
      Be.Tc(Bs) || ((Ch.uc = 0), (Ch.lc = 1), Ir())),
      Ch.ye > 0 ||
        // sans death logic (for future ref) - Cuzsie
        (Lh.xe(),
        gh.ka(void 0),
        (it.nh = c("üÙØt*B¥E9ºwÖý¿BªZó*)rI¶½ÂI?@å7á#t(", "ÿ4E\0~»?>´F¥æ0ÒF5Ë\\LM"))
        ),
      Ch.Xc > this.Cd && !Lh.Oe(Dt) && Lh.We(Dt);
  }
  rt() {
    if ((Ch.do > 0 && ((this.Mh = -1e3), Ch.do--), this.Td)) {
      this.Mh = 5;
      const t = Be.ke(Eh);
      if (t !== void 0) {
        const h = Be.ke(Dh),
          i = Be.ke(jh);
        mh.la(t.x - 5, t.y - 5, h.x + 5, i.y + 5, 0, 1);
      }
    }
    this.Ld &&
      (() => {
        let t = "" + Ch.ye;
        10 > Ch.ye && (t = Tr + t),
          0 > Ch.ye && (t = Tr),
          Ch.fn[271] === 0
            ? (mh.la(275, 400, 275 + Ch._e * 1.2, 420, 16711680, 1),
              mh.la(275, 400, 275 + Ch.ye * 1.2, 420, 16776960, 1),
              mh.Aa(290 + Ch._e * 1.2, 400, t + Lr + "" + Ch._e, hs),
              mh.Aa(30, 400, Ch.zd + Sr + "" + Ch.Ao, hs))
            : (mh.la(255, 400, 255 + Ch._e * 1.2, 420, 12582912, 1),
              mh.la(255, 400, 255 + Ch.ye * 1.2, 420, 16776960, 1),
              Ch.Re > 40 && (Ch.Re = 40),
              Ch.Re > Ch.ye && (Ch.Re = Ch.ye - 1),
              mh.la(
                255 + Ch.ye * 1.2,
                400,
                255 + Ch.ye * 1.2 - Ch.Re * 1.2,
                420,
                16711935,
                1
              ),
              mh.Ha(wr, 0, 265 + Ch._e * 1.2, 405),
              mh.Aa(
                305 + Ch._e * 1.2,
                400,
                t + Lr + "" + Ch._e,
                hs,
                Ch.Re > 0 ? 16711935 : 16777215
              ),
              mh.Aa(30, 400, Ch.zd + Sr + "" + Ch.Ao, hs),
              Be.vc(
                Mr,
                (t) => {
                  Be.He(t);
                },
                1
              ),
              mh.Ha(Ar, 0, 220, 400));
      })();
  }
  ue() {
    (Ch.at = 8 + Ch.Ao * 2),
      (Ch.xo = 9 + Math.ceil(Ch.Ao / 4)),
      (Ch.gd = this.wd),
      (Ch.fn[78] = 0);
  }
  qe() {
    this.active = 1;
  }
  Pd() {
    Ch.lc === 0 &&
      ((Ch.Xc !== 1 && Ch.Xc !== 2 && Ch.Xc !== 11) ||
        (Ch.bc[1]++,
        Ch.bc[1] > 2 && (Ch.bc[1] = 0),
        Ch.Cn[0] || Ch.Cn[2] || (Ch.bc[1] = 1),
        Ch.bc[1] !== 0 || Ch.Cn[0] || (Ch.bc[1] = 1),
        Ch.bc[1] !== 1 || Ch.Cn[1] || (Ch.bc[1] = 2),
        Ch.bc[1] !== 2 || Ch.Cn[2] || (Ch.bc[1] = 0)),
      Ch.Xc === 10 &&
        ((this.jd = Ch.bc[2]),
        Ch.bc[2] !== 2 && Ch.bc[2] !== 5 ? Ch.bc[2]++ : (Ch.bc[2] -= 2),
        Ch.yn[Ch.bc[2]] === 0 && Ch.bc[2] > 2 && (Ch.bc[2] = 3),
        Ch.yn[Ch.bc[2]] !== 0 || Ch.bc[2] > 2 || (Ch.bc[2] = 0),
        Ch.yn[0] === 1 &&
          Ch.yn[1] === 0 &&
          Ch.yn[2] === 0 &&
          Ch.yn[3] === 0 &&
          Ch.yn[4] === 0 &&
          Ch.yn[5] === 0 &&
          (Ch.bc[2] = 0)),
      (Ch.Xc !== 3 && Ch.Xc !== 3.5) ||
        ((this.yd = 0),
        (this.Ed = Ch.bc[3]),
        Ch.Xc === 3.5 && (this.Ed += 4),
        (Ch.bc[3] !== 2 && Ch.bc[3] !== 3) || ((Ch.bc[3] -= 2), (this.yd = 1)),
        this.yd !== 0 ||
          (Ch.bc[3] !== 0 && Ch.bc[3] !== 1) ||
          ((Ch.bc[3] += 2),
          Ch.item[this.Ed + 2] === 0 && (Ch.bc[3] -= 2),
          (this.yd = 1))),
      Ch.Xc === 4 && (Ch.bc[4] = Ch.bc[4] === 0 && 1 > Ch.an ? 1 : 0));
  }
  Fd() {
    (this.Cd = Ch.bc[0]),
      Ch.lc === 0 &&
        (Ch.Xc === 0 &&
          (Ch.bc[0]++,
          Ch.bc[0] > 3 && (Ch.bc[0] = 0),
          Ch.an === 2 && Ch.bc[0] === 3 && (Ch.bc[0] = 0),
          Ch.an === 3 && (Ch.bc[0] = 1)),
        Ch.Xc === 10 &&
          (Ch.bc[2] > 2 ? (Ch.bc[2] -= 3) : (Ch.bc[2] += 3),
          Ch.yn[Ch.bc[2]] === 0 && Ch.bc[2]--,
          Ch.yn[0] === 1 &&
            Ch.yn[1] === 0 &&
            Ch.yn[2] === 0 &&
            Ch.yn[3] === 0 &&
            Ch.yn[4] === 0 &&
            Ch.yn[5] === 0 &&
            (Ch.bc[2] = 0)),
        Ch.Xc === 6 && (Ch.bc[6] === 0 ? Ch.bc[6]++ : Ch.bc[6]--),
        (this.yd = 0),
        Ch.uc !== 4 &&
          Ch.Xc === 3 &&
          ((this.Ed = Ch.Xc),
          Ch.bc[3] === 0 && (Ch.item[1] !== 0 && (Ch.bc[3] = 1), (this.yd = 1)),
          this.yd === 0 &&
            Ch.bc[3] === 1 &&
            (Ch.item[4] !== 0
              ? ((Ch.bc[3] = 0), (Ch.Xc = 3.5))
              : (Ch.bc[3] = 0),
            (this.yd = 1)),
          Ch.bc[3] === 2 && (Ch.item[3] !== 0 && (Ch.bc[3] = 3), (this.yd = 1)),
          this.yd === 0 &&
            Ch.bc[3] === 3 &&
            (Ch.item[6] !== 0
              ? ((Ch.bc[3] = 2), (Ch.Xc = 3.5))
              : (Ch.bc[3] = 2),
            (this.yd = 1)),
          Ch.Xc !== this.Ed && Cr()),
        this.yd === 0 &&
          Ch.uc !== 4 &&
          Ch.Xc === 3.5 &&
          ((this.Ed = Ch.Xc),
          Ch.bc[3] === 1 && ((Ch.bc[3] = 0), (Ch.Xc = 3), (this.yd = 1)),
          this.yd === 0 &&
            Ch.bc[3] === 0 &&
            (Ch.item[5] !== 0 ? (Ch.bc[3] = 1) : ((Ch.bc[3] = 0), (Ch.Xc = 3)),
            (this.yd = 1)),
          this.yd === 0 &&
            Ch.bc[3] === 3 &&
            ((Ch.bc[3] = 2), (Ch.Xc = 3), (this.yd = 1)),
          this.yd === 0 &&
            Ch.bc[3] === 2 &&
            (Ch.item[7] !== 0 ? (Ch.bc[3] = 3) : ((Ch.bc[3] = 2), (Ch.Xc = 3)),
            (this.yd = 1)),
          this.yd === 1 && Lh.We(Gt),
          Ch.Xc !== this.Ed && Cr())),
      Ch.bc[0] !== this.Cd && Lh.We(Gt);
  }
  Bd() {
    C.J.down ||
      Ch.lc !== 0 ||
      ((Ch.Xc !== 1 && Ch.Xc !== 2 && Ch.Xc !== 11) ||
        (Ch.bc[1]--,
        0 > Ch.bc[1] && (Ch.bc[1] = 2),
        Ch.Cn[0] || Ch.Cn[2] || (Ch.bc[1] = 1),
        Ch.bc[1] !== 2 || Ch.Cn[2] || (Ch.bc[1] = 1),
        Ch.bc[1] !== 1 || Ch.Cn[1] || (Ch.bc[1] = 0),
        Ch.bc[1] !== 0 || Ch.Cn[0] || (Ch.bc[1] = 2)),
      Ch.Xc === 10 &&
        (Ch.bc[2] !== 0 && Ch.bc[2] !== 3 ? Ch.bc[2]-- : (Ch.bc[2] += 2),
        Ch.yn[Ch.bc[2]] === 0 && Ch.bc[2]--,
        Ch.yn[Ch.bc[2]] === 0 && Ch.bc[2]--,
        Ch.yn[0] === 1 &&
          Ch.yn[1] === 0 &&
          Ch.yn[2] === 0 &&
          Ch.yn[3] === 0 &&
          Ch.yn[4] === 0 &&
          Ch.yn[5] === 0 &&
          (Ch.bc[2] = 0)),
      (Ch.Xc !== 3 && Ch.Xc !== 3.5) ||
        ((this.yd = 0),
        (this.Ed = Ch.bc[3]),
        Ch.Xc === 3.5 && (this.Ed += 4),
        (Ch.bc[3] !== 2 && Ch.bc[3] !== 3) || ((Ch.bc[3] -= 2), (this.yd = 1)),
        this.yd !== 0 ||
          (Ch.bc[3] !== 0 && Ch.bc[3] !== 1) ||
          ((Ch.bc[3] += 2),
          Ch.item[this.Ed + 2] === 0 && (Ch.bc[3] -= 2),
          (this.yd = 1))),
      Ch.Xc === 4 && (Ch.bc[4] = Ch.bc[4] === 0 && 1 > Ch.an ? 1 : 0));
  }
  Dd() {
    C.J.right ||
      ((this.Cd = Ch.bc[0]),
      Ch.lc === 0 &&
        (Ch.Xc === 0 &&
          (Ch.bc[0]--,
          0 > Ch.bc[0] && (Ch.bc[0] = 3),
          Ch.an === 2 && Ch.bc[0] === 3 && (Ch.bc[0] = 2),
          Ch.an === 3 && (Ch.bc[0] = 1)),
        Ch.uc !== 4 &&
          Ch.Xc === 3 &&
          ((this.Ed = Ch.Xc),
          (this.yd = 0),
          Ch.bc[3] === 1 && ((Ch.bc[3] = 0), (this.yd = 1)),
          this.yd === 0 &&
            Ch.bc[3] === 0 &&
            (Ch.item[5] !== 0 && ((Ch.bc[3] = 1), (Ch.Xc = 3.5)),
            Ch.item[5] === 0 &&
              Ch.item[4] !== 0 &&
              ((Ch.bc[3] = 0), (Ch.Xc = 3.5)),
            Ch.item[4] === 0 && (Ch.bc[3] = 1),
            Ch.item[1] === 0 && (Ch.bc[3] = 0)),
          Ch.bc[3] === 3 && ((Ch.bc[3] = 2), (this.yd = 1)),
          this.yd === 0 &&
            Ch.bc[3] === 3 &&
            (Ch.item[7] !== 0 && ((Ch.bc[3] = 3), (Ch.Xc = 3.5)),
            Ch.item[7] === 0 &&
              Ch.item[6] !== 0 &&
              ((Ch.bc[3] = 2), (Ch.Xc = 3.5)),
            Ch.item[6] === 0 && (Ch.bc[3] = 3),
            Ch.item[3] === 0 && (Ch.bc[3] = 2)),
          Ch.Xc !== this.Ed && Cr()),
        Ch.uc !== 4 &&
          Ch.Xc === 3.5 &&
          ((this.Ed = Ch.Xc),
          (this.yd = 0),
          Ch.bc[3] === 1 && ((Ch.bc[3] = 0), (this.yd = 1)),
          this.yd === 0 &&
            Ch.bc[3] === 0 &&
            ((this.yd = 1), (Ch.Xc = 3), (Ch.bc[3] = 1)),
          this.yd === 0 && Ch.bc[3] === 3 && ((Ch.bc[3] = 2), (this.yd = 1)),
          this.yd === 0 &&
            Ch.bc[3] === 2 &&
            ((this.yd = 1), (Ch.Xc = 3), (Ch.bc[3] = 3)),
          this.yd === 1 && Lh.We(Gt),
          Ch.Xc !== this.Ed && Cr()),
        Ch.Xc === 10 &&
          (Ch.bc[2] > 2 ? (Ch.bc[2] -= 3) : (Ch.bc[2] += 3),
          Ch.yn[Ch.bc[2]] === 0 && Ch.bc[2]--,
          Ch.yn[0] === 1 &&
            Ch.yn[1] === 0 &&
            Ch.yn[2] === 0 &&
            Ch.yn[3] === 0 &&
            Ch.yn[4] === 0 &&
            Ch.yn[5] === 0 &&
            (Ch.bc[2] = 0)),
        Ch.Xc === 6 && (Ch.bc[6] === 0 ? Ch.bc[6]++ : Ch.bc[6]--)),
      Ch.bc[0] !== this.Cd && Lh.We(Gt));
  }
}
const Kr = { Xe: () => new Dr() };
class Gr extends Wh {
  constructor() {
    super(Vr),
      (this.Ic = 0),
      (this.Bc = 0),
      (this.Zd = 0),
      (this.tm = 0),
      (this.hm = 0),
      (this.im = 0),
      (this.sm = 0),
      (this.ko = 0),
      (this.Wo = 0),
      (this.lr.down = () => this.am()),
      (this.lr.right = () => this.rm()),
      (this.lr.up = () => this.nm()),
      (this.lr.left = () => this.fm()),
      this.Hr.set(jh, (t) => this.om(t)),
      this.Hr.set(Dh, (t) => this.dm(t)),
      this.Hr.set(Eh, (t) => this.gm(t)),
      this.Hr.set(Fh, (t) => this.vm(t)),
      (this.wr = Ci),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 0);
  }
  he() {
    (Ch.gd = Ch.bm),
      (this.Ic = 0),
      (this.Bc = 0),
      (this.Zd = 0),
      (this.tm = 0),
      (this.hm = 0),
      (Ch.Xc = 0),
      (Ch.bc[0] = 0),
      (Ch.bc[1] = 0),
      (Ch.bc[2] = 0),
      (Ch.bc[3] = 0),
      (Ch.bc[4] = 0),
      (Ch.bc[5] = 0),
      (Ch.bc[6] = 0),
      (Ch.bc[7] = 0),
      (Ch.bc[8] = 0),
      (Ch.bc[9] = 0),
      (Ch.bc[10] = 0),
      (Ch.Eo[0] = 0),
      (Ch.Eo[1] = 0),
      (Ch.Eo[2] = 0),
      (Ch.Eo[3] = 0),
      (Ch.uc = 0),
      (Ch.lc = 0),
      (Ch.rd[3] = 0),
      (Ch.ed[3] = 0),
      (this.im = 0),
      (this.sm = 0),
      (this.ko = 0),
      (this.Wo = 0);
  }
  st() {
    const t = Be.ke(Kr),
      h = Be.ke(Fh),
      i = Be.ke(Eh),
      s = Be.ke(Dh),
      a = Be.ke(jh);
    Ch.lc !== 2 ? (this.Ic = 0) : this.Ic === 0 && (this.Ic = 1),
      Ch.um--,
      Ch.um > 0 || t.Od === 1
        ? (this.cr = 0.5)
        : ((this.Lr = 0), (this.cr = 0)),
      this.sm--,
      this.im === 1 &&
        Ch.lc === 2 &&
        (h.x + 8 > this.x && (this.x = h.x + 8),
        i.x + 8 > this.y && (this.y = i.x + 8),
        this.x > s.x - 8 && (this.x = s.x - 8),
        this.y > a.y - 8 && (this.y = a.y - 8)),
      this.Ic === 11 &&
        ((this.Ir = 0),
        C.N.up && (this.y -= Ch.gd),
        C.N.down && (this.y += Ch.gd),
        C.N.left &&
          this.Bc === 1 &&
          this.Sr === 0 &&
          ((this.Bc = 2), (this.Sr = -6))),
      this.Ic === 12 &&
        ((this.Sr = 0),
        C.N.left && (this.x -= Ch.gd),
        C.N.right && (this.x += Ch.gd),
        C.N.down &&
          this.Bc === 1 &&
          this.Ir === 0 &&
          ((this.Bc = 2), (this.Ir = 6))),
      this.Ic === 13 &&
        ((this.Ir = 0),
        C.N.up && (this.y -= Ch.gd),
        C.N.down && (this.y += Ch.gd),
        C.N.right &&
          this.Bc === 1 &&
          this.Sr === 0 &&
          ((this.Bc = 2), (this.Sr = 6))),
      this.Bc === 2 &&
        this.Ic === 2 &&
        (C.N.up || this.Ir > -1 || (this.Ir = -1),
        this.Ir > 0.5 && 8 > this.Ir && (this.Ir += 0.6),
        this.Ir > -1 && 0.5 >= this.Ir && (this.Ir += 0.2),
        this.Ir > -4 && -1 >= this.Ir && (this.Ir += 0.5),
        this.Ir > -4 || (this.Ir += 0.2)),
      this.Bc === 2 &&
        this.Ic === 11 &&
        (C.N.left || this.Sr > -1 || (this.Sr = -1),
        this.Sr > 0.5 && 8 > this.Sr && (this.Sr += 0.6),
        this.Sr > -1 && 0.5 >= this.Sr && (this.Sr += 0.2),
        this.Sr > -4 && -1 >= this.Sr && (this.Sr += 0.5),
        this.Sr > -4 || (this.Sr += 0.2)),
      this.Bc === 2 &&
        this.Ic === 12 &&
        (C.N.down || 1 > this.Ir || (this.Ir = 1),
        -0.5 > this.Ir && this.Ir > -8 && (this.Ir -= 0.6),
        1 > this.Ir && this.Ir >= -0.5 && (this.Ir -= 0.2),
        4 > this.Ir && this.Ir >= 1 && (this.Ir -= 0.5),
        4 > this.Ir || (this.Ir -= 0.2)),
      this.Bc === 2 &&
        this.Ic === 13 &&
        (C.N.right || 1 > this.Sr || (this.Sr = 1),
        -0.5 > this.Sr && this.Sr > -8 && (this.Sr -= 0.6),
        1 > this.Sr && this.Sr >= -0.5 && (this.Sr -= 0.2),
        4 > this.Sr && this.Sr >= 1 && (this.Sr -= 0.5),
        4 > this.Sr || (this.Sr -= 0.2)),
      this.ko === 0 &&
        Be.Tc(xa) &&
        Ch.lc === 2 &&
        (Ch.we[0] + 4 > this.x &&
          ((this.x = Ch.we[0] + 4),
          this.Se(),
          0 > this.Sr && (this.Sr = 0),
          this.Ic === 13 && (this.Bc = 1)),
        Ch.we[2] + 4 > this.y &&
          ((this.y = Ch.we[2] + 4),
          this.Se(),
          0 > this.Ir && (this.Ir = 0),
          this.Ic === 12 && (this.Bc = 1)),
        this.x > Ch.we[1] - 16 &&
          ((this.x = Ch.we[1] - 16),
          this.Se(),
          this.Sr > 0 && (this.Sr = 0),
          this.Ic === 11 && (this.Bc = 1)),
        this.y > Ch.we[3] - 16 &&
          ((this.y = Ch.we[3] - 16),
          this.Se(),
          this.Ir > 0 && (this.Ir = 0),
          this.Ic === 2 && (this.Bc = 1))),
      t !== void 0 &&
        t.Od === 1 &&
        -20 > this.x &&
        (Be.Tc(Ui) || Be.Sc(0, 0, Ui),
        -60 > this.x && (Ch.fn[15] === 0 && gh.ka(void 0), Be.$d(Ch.Qd)));
  }
  om(t) {
    this.ko ||
      ((this.y = t.y - this.Za),
      this.Ic === 2 && (this.Se(), (this.Bc = 1), (this.Ir = 0)),
      this.im === 1 && Be.ke(Kr).Od !== 1 && (this.y = t.y - 8));
  }
  dm(t) {
    this.ko ||
      (this.Ic === 11 &&
        ((this.x = Ch.we[1] - 16),
        this.Se(),
        this.Sr > 0 && (this.Sr = 0),
        (this.Bc = 1)),
      (this.x = t.x - this.za),
      this.im === 1 && Be.ke(Kr).Od !== 1 && (this.x = t.x - 8));
  }
  gm(t) {
    this.ko === 0 &&
      (this.Ic === 2 && 0 > this.Ir && (this.Ir = 0),
      this.Ic === 12 &&
        ((this.y = Ch.we[2] + 4),
        this.Se(),
        0 > this.Ir && (this.Ir = 0),
        (this.Bc = 1)),
      (this.y = t.y + t.Za),
      this.im === 1 && Be.ke(Kr).Od !== 1 && (this.y = t.y + t.Za + 8));
  }
  vm(t) {
    this.ko === 0 &&
      (this.Ic === 13 &&
        ((this.x = Ch.we[0] + 4),
        this.Se(),
        0 > this.Sr && (this.Sr = 0),
        (this.Bc = 1)),
      Be.ke(Kr).Od !== 1 &&
        (this.x = this.im === 1 ? t.x + t.za + 8 : t.x + t.za));
  }
  am() {
    this.Ic === 1 &&
      (this.im === 0 && ((this.y += Ch.gd), C.N.x && (this.y -= Ch.gd / 2)),
      this.im === 1 &&
        this.y > Ch.we[2] + 8 &&
        ((this.y -= Ch.gd), C.N.x && (this.y += Ch.gd / 2)));
  }
  rm() {
    (this.Ic !== 1 && this.Ic !== 2) ||
      (this.im === 0 && ((this.x += Ch.gd), C.N.x && (this.x -= Ch.gd / 2)),
      this.im === 1 &&
        this.x > Ch.we[0] + 8 &&
        ((this.x -= Ch.gd), C.N.x && (this.x += Ch.gd / 2)));
  }
  nm() {
    this.Ic === 1 &&
      (this.im === 0 && ((this.y -= Ch.gd), C.N.x && (this.y += Ch.gd / 2)),
      this.im === 1 &&
        Ch.we[3] - 8 > this.y &&
        ((this.y += Ch.gd), C.N.x && (this.y -= Ch.gd / 2))),
      this.Ic === 2 &&
        this.Bc === 1 &&
        this.Ir === 0 &&
        ((this.Bc = 2), (this.Ir = -6));
  }
  fm() {
    (this.Ic !== 1 && this.Ic !== 2) ||
      (this.im === 0 && ((this.x -= Ch.gd), C.N.x && (this.x += Ch.gd / 2)),
      this.im === 1 &&
        Ch.we[1] - 8 > this.x &&
        ((this.x += Ch.gd), C.N.x && (this.x += Ch.gd / 2)));
  }
  Se() {
    this.speed > 10 &&
      (this.Wo === 1 && Ch.ye > 1 && Ch.ye--,
      Lh.pe(Rt),
      Lh.pe(jt),
      (Be.Sc(0, 0, Si).Nc = Math.floor(this.speed / 3)));
  }
}
const Vr = { Xe: () => new Gr() },
  Ur = {
    Zs: [
      { aa: 1, ta: 838, ha: 204, ia: 43, sa: 57, ra: 0, ea: 0 },
      { aa: 1, ta: 883, ha: 204, ia: 43, sa: 57, ra: 0, ea: 0 },
      { aa: 1, ta: 946, ha: 224, ia: 43, sa: 57, ra: 0, ea: 0 },
      { aa: 1, ta: 754, ha: 214, ia: 43, sa: 57, ra: 0, ea: 0 },
      { aa: 1, ta: 827, ha: 263, ia: 43, sa: 57, ra: 0, ea: 0 },
      { aa: 1, ta: 872, ha: 263, ia: 43, sa: 57, ra: 0, ea: 0 },
    ],
    Vr: 43,
    Ur: 57,
    qr: 0,
    $r: 0,
    Nr: 42,
    Qr: 56,
    ii: 21,
    si: 28,
  };
class qr extends Gh {
  constructor() {
    super(Nr),
      (this.Ee = 0),
      (this.fc = 0),
      (this.oc = 0),
      (this.hn = 0),
      (this.No = 0),
      (this.pause = 0),
      (this.lm = 0),
      (this.Xm = 0),
      (this.Ym = 0),
      (this.tt = 0),
      (this.sn = 0),
      (this.Hm = 0),
      (this.Wm = 0),
      (this.wr = Ur),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -1),
      (this.Is = 0),
      (this.Ba[4] = () => this.wc()),
      this.Hr.delete(Vr);
  }
  he() {
    (this.Ee = 1),
      (this.fc = 200),
      (this.oc = 200),
      (this.hn = 90),
      (this.nr = 1),
      (this.dr = 1),
      (this.cr = 0),
      (this.No = 1),
      (this.pause = 8),
      (this.lm = 0),
      (this.Xm = 0),
      (this.Ym = 0),
      (this.tt = 1),
      (this.sn = 10),
      (this.Hm = 0),
      (this.Wm = 0),
      (this.Te = 10),
      Be.vc(fr, (t) => {
        t.Vo = 1;
      });
  }
  wc() {
    this.Ee++;
  }
  rt() {
    if (
      (this.te(),
      this.Ee === 1 &&
        this.No === 0 &&
        ((this.x += Math.floor((this.fc - this.x) / 3)),
        (this.y += Math.floor((this.oc - this.y) / 3)),
        this.fc > this.x && this.x++,
        this.oc > this.y && this.y++,
        this.x > this.fc && this.x--,
        this.y > this.oc && this.y--,
        3 > Math.abs(this.x - this.fc) && (this.x = this.fc),
        3 > Math.abs(this.y - this.oc) && (this.y = this.oc),
        0.1 > Math.abs(this.x - this.fc) &&
          0.1 > Math.abs(this.y - this.oc) &&
          ((this.Ee = 2), (this.Fa[4] = 2))),
      this.Ee === 1 &&
        this.No === 1 &&
        ((this.x += Math.floor((this.fc - this.x) / 3)),
        (this.y += Math.floor((this.oc - this.y) / 3)),
        this.fc > this.x && this.x++,
        this.oc > this.y && this.y++,
        this.x > this.fc && this.x--,
        this.y > this.oc && this.y--,
        3 > Math.abs(this.x - this.fc) && (this.x = this.fc),
        3 > Math.abs(this.y - this.oc) && (this.y = this.oc),
        (this.sr += Math.floor((this.hn - this.sr) / 3)),
        this.hn > this.sr && this.sr++,
        this.sr > this.hn && this.sr--,
        3 > Math.abs(this.sr - this.hn) && (this.sr = this.hn),
        0.1 > Math.abs(this.x - this.fc) &&
          0.1 > Math.abs(this.y - this.oc) &&
          0.01 > Math.abs(this.hn - this.sr) &&
          ((this.Ee = 4), (this.Fa[4] = this.pause))),
      this.Ee === 3 &&
        ((this.sr += Math.floor((this.hn - this.sr) / 3)),
        this.hn > this.sr && this.sr++,
        this.sr > this.hn && this.sr--,
        3 > Math.abs(this.sr - this.hn) && (this.sr = this.hn),
        0.01 > Math.abs(this.hn - this.sr) &&
          ((this.Ee = 4), (this.Fa[4] = this.pause))),
      this.Ee === 5 && ((this.Ee = 6), (this.Fa[4] = 4)),
      this.Ee === 6 && this.Lr++,
      this.Ee === 7)
    ) {
      this.Lr === 4 ? (this.Lr = 5) : this.Lr === 5 && (this.Lr = 4),
        (this.direction = this.hn + 90),
        this.Ym === 0 &&
          Be.vc(fr, (t) => {
            t.Go = 1;
          }),
        this.Ym !== 0 || 2 > this.nr || (Be.Sc(0, 0, Si).Nc = 5),
        this.Ym++,
        5 > this.Ym
          ? (this.speed++, (this.Xm += Math.floor((35 * this.nr) / 4)))
          : (this.speed += 4);
      let t = 1;
      this.Ym > 5 + this.sn &&
        ((this.Xm *= 0.8),
        (this.tt -= 0.1),
        (t = this.tt),
        this.Xm > 2 || Be.He(this));
      const h = Be.ph,
        i = h.width,
        s = h.height;
      -this.za > this.x && (this.speed = 0),
        this.x > i + this.za && (this.speed = 0),
        this.y > s + this.Za && (this.speed = 0),
        -this.Za > this.x && (this.speed = 0),
        this.Wm++;
      let a = (Math.sin(this.Wm / 1.5) * this.Xm) / 4,
        r = dh.Ds(70, this.sr - 90) * (this.nr / 2),
        e = dh.Ks(70, this.sr - 90) * (this.nr / 2),
        c = dh.Ns(2) - dh.Ns(2),
        n = dh.Ns(2) - dh.Ns(2),
        f = dh.Ds(1e3, this.sr - 90),
        o = dh.Ks(1e3, this.sr - 90);
      mh.Ya(
        this.x + r + c,
        this.y + e + n,
        this.x + f + c,
        this.y + o + n,
        this.Xm + a,
        16777215,
        t
      );
      let d = dh.Ds(50, this.sr - 90) * (this.nr / 2),
        m = dh.Ks(50, this.sr - 90) * (this.nr / 2),
        g = dh.Ds(60, this.sr - 90) * (this.nr / 2),
        v = dh.Ks(60, this.sr - 90) * (this.nr / 2);
      mh.Ya(
        this.x + r + c,
        this.y + e + n,
        this.x + d + c,
        this.y + m + n,
        this.Xm / 2 + a,
        16777215,
        t
      ),
        mh.Ya(
          this.x + r + c,
          this.y + e + n,
          this.x + g + c,
          this.y + v + n,
          this.Xm / 1.25 + a,
          16777215,
          t
        );
      let b = dh.Ds(1, this.sr),
        u = dh.Ks(1, this.sr);
      if (this.lm === 1 && this.tt >= 0.8) {
        for (let t = 0; 4 > t; t++)
          this.Dr(
            this.x + r - ((b * this.Xm) / 2) * (t / 4),
            this.y + e - ((u * this.Xm) / 2) * (t / 4),
            this.x + f - ((b * this.Xm) / 2) * (t / 4),
            this.y + o - ((u * this.Xm) / 2) * (t / 4),
            Vr
          ) && this.Se();
        for (let t = 0; 4 > t; t++)
          this.Dr(
            this.x + r + ((b * this.Xm) / 2) * (t / 4),
            this.y + e + ((u * this.Xm) / 2) * (t / 4),
            this.x + f + ((b * this.Xm) / 2) * (t / 4),
            this.y + o + ((u * this.Xm) / 2) * (t / 4),
            Vr
          ) && this.Se();
      }
      this.lm === 0 && (this.lm = 1);
    }
  }
}
const Nr = { parent: Uh, Xe: () => new qr() };
class $r extends Wh {
  constructor() {
    super(Qr),
      (this.g = 0),
      (this.pm = 0),
      (this.Om = 0),
      (this.type = 0),
      (this.Am = 0),
      (this.xm = 0),
      (this.Vn = 0),
      (this.wr = void 0),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 0),
      (this.Ba[0] = () => this.qe()),
      (this.Ba[1] = () => this.xc()),
      (this.Ba[2] = () => this.hc()),
      (this.Ba[3] = () => this.Mc());
  }
  he() {
    (this.Fa[0] = 1),
      (this.Fa[1] = 1),
      (this.Fa[2] = 1),
      (this.g = 4),
      (this.pm = 4),
      (this.Om = 4),
      (this.type = 3),
      (this.Am = 0),
      (this.xm = 0);
  }
  qe() {
    this.type === 0 && ((this.Fa[0] = 100), Pi(40, -2, 125, 60)),
      this.type === 1 && ((this.Fa[0] = 55), Pi(40, -4, 65, 60)),
      (this.type !== 2 && this.type !== 3) ||
        ((this.Fa[0] = 35),
        Pi(40, -4, 65, 25),
        (this.Fa[2] = -1),
        this.Am === 0 && ((this.Am = 1), (this.Fa[3] = 1)));
  }
  xc() {
    this.type === 0 && ((this.Fa[1] = 100), Pi(80, 2, 125, 60)),
      this.type === 1 && ((this.Fa[1] = 70), Pi(80, 4, 80, 80)),
      (this.type !== 2 && this.type !== 3) ||
        ((this.Fa[1] = 40), Pi(80, 4, 80, 25));
  }
  hc() {
    let t = 0;
    Be.ke(Vr).y < Ch.we[2] + 40 || (t = 1),
      Be.ke(Vr).y < Ch.we[2] + 80 || (t = 2);
    let h = 0;
    (this.Om = this.pm),
      (this.pm = this.g),
      (this.g = dh._s(0, 1, 2)),
      this.pm === this.g && this.Om === this.pm && (h = 1),
      this.g === 0 && t === 0 && (h = 1),
      this.g === 1 && t === 2 && (h = 1),
      h === 1 && (this.g = dh._s(0, 1, 2)),
      this.g === 0 && Fi(35, -4, 50, 0),
      this.g === 1 && Fi(90, -4, 50, 2),
      this.g === 2 && (na(this, 80, 4, 50, 1).dr = 0.8),
      this.type === 0 && (this.Fa[2] = 15),
      this.type === 1 && (this.Fa[2] = 15);
  }
  Mc() {
    let t = 0;
    Be.ke(Vr).y < Ch.we[2] + 40 || (t = 1),
      Be.ke(Vr).y < Ch.we[2] + 80 || (t = 2);
    let h = 0;
    if (
      ((this.Om = this.pm),
      (this.pm = this.g),
      (this.g = dh._s(0, 1, 2)),
      this.pm === this.g && this.Om === this.pm && (h = 1),
      this.g === 0 && t === 0 && (h = 1),
      this.g === 1 && t === 2 && (h = 1),
      h === 1 && (this.g = dh._s(0, 1, 2)),
      this.g === 0)
    ) {
      let t = Be.Sc(0, 0, Nr);
      this.xm === 0
        ? (t.fc = Ch.we[0] - 60)
        : ((t.fc = Ch.we[1] + 60), (t.x = 640)),
        (t.oc = Ch.we[3] - 20),
        (t.hn = this.xm === 0 ? 90 : -90);
    }
    if (this.g === 1) {
      let t = Be.Sc(0, 0, Nr);
      this.xm === 0
        ? (t.fc = Ch.we[0] - 60)
        : ((t.fc = Ch.we[1] + 60), (t.x = 640)),
        (t.oc = Ch.we[2] + 35),
        (t.hn = this.xm === 0 ? 90 : -90);
    }
    if (this.g === 2) {
      let t = Be.Sc(0, 0, Nr);
      this.xm === 0
        ? (t.fc = Ch.we[0] - 60)
        : ((t.fc = Ch.we[1] + 60), (t.x = 640)),
        (t.oc = Ch.we[2] + 75),
        (t.hn = this.xm === 0 ? 90 : -90);
    }
    Be.vc(Nr, (t) => {
      (t.pause = 17), (t.sn = 3), (t.dr = 2), this.type === 3 && (t.pause = 17);
    }),
      (this.xm = this.xm === 0 ? 1 : 0),
      (this.Fa[3] = 26),
      this.type === 3 && (this.Fa[3] = 21);
  }
}
const Qr = { Xe: () => new $r() };
class Jr extends Wh {
  constructor() {
    super(_r),
      (this.wr = La),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -1e3),
      (this.Is = 0);
  }
  he() {
    (this.nr = 640),
      (this.dr = 320),
      Be.vc(
        Vr,
        (t) => {
          t.Mh = -1001;
        },
        1
      );
  }
  st() {
    (this.ir -= 0.2),
      0.1 > this.ir &&
        (Be.vc(
          Vr,
          (t) => {
            t.Mh = 0;
          },
          1
        ),
        Be.He(this));
  }
}
const _r = { Xe: () => new Jr() };
class zr extends Wh {
  constructor() {
    super(Zr),
      (this.Mm = 0),
      (this.wm = 0),
      (this.wr = La),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -99999),
      (this.Is = 0);
  }
  he() {
    (this.nr = Be.ph.width * 3),
      (this.dr = Be.ph.height * 2),
      (this.ir = 1),
      (this.Mm = -0.08),
      (this.wm = 1),
      (this.x = -20),
      (this.y = -20);
  }
  st() {
    (this.ir += this.Mm), 0.02 > this.ir && Be.He(this);
  }
}
const Zr = { Xe: () => new zr() };
class te extends Wh {
  constructor() {
    super(he),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -198),
      (this.Is = 0);
  }
  rt() {
    mh.la(0, 0, 9999, 9999, 0, 1);
  }
}
const he = { Xe: () => new te() },
  ie = {
    Zs: [
      { aa: 1, ta: 642, ha: 190, ia: 110, sa: 42, ra: 0, ea: 0 },
      { aa: 1, ta: 642, ha: 232, ia: 110, sa: 42, ra: 0, ea: 0 },
    ],
    Vr: 110,
    Ur: 42,
    qr: 0,
    $r: 0,
    Nr: 109,
    Qr: 41,
    ii: 0,
    si: 0,
  };
class se extends ai {
  constructor() {
    super(ae),
      (this.wr = ie),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 2),
      (this.Is = 0);
  }
  st() {
    (this.Lr = 0),
      Ch.bc[0] === 1 &&
        (Ch.uc === 0 && Ch.lc === 0 && (this.Lr = 1),
        Ch.Xc === 0 &&
          Be.vc(Vr, (t) => {
            (t.x = this.x + 8), (t.y = this.y + 14);
          }));
  }
}
const ae = { parent: ei, Xe: () => new se() },
  re = {
    Zs: [
      { aa: 1, ta: 564, ha: 320, ia: 110, sa: 42, ra: 0, ea: 0 },
      { aa: 1, ta: 676, ha: 320, ia: 110, sa: 42, ra: 0, ea: 0 },
    ],
    Vr: 110,
    Ur: 42,
    qr: 0,
    $r: 0,
    Nr: 109,
    Qr: 41,
    ii: 0,
    si: 0,
  };
class ee extends ai {
  constructor() {
    super(ce),
      (this.wr = re),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 2),
      (this.Is = 0);
  }
  st() {
    (this.Lr = 0),
      Ch.bc[0] === 2 &&
        (Ch.uc === 0 && Ch.lc === 0 && (this.Lr = 1),
        Ch.Xc === 0 &&
          Be.vc(
            Vr,
            (t) => {
              (t.x = this.x + 8), (t.y = this.y + 14);
            },
            0
          ));
  }
}
const ce = { parent: ei, Xe: () => new ee() },
  ne = {
    Zs: [
      { aa: 1, ta: 642, ha: 102, ia: 110, sa: 42, ra: 0, ea: 0 },
      { aa: 1, ta: 642, ha: 146, ia: 110, sa: 42, ra: 0, ea: 0 },
    ],
    Vr: 110,
    Ur: 42,
    qr: 3,
    $r: 3,
    Nr: 106,
    Qr: 37,
    ii: 0,
    si: 0,
  };
class fe extends ai {
  constructor() {
    super(oe),
      (this.wr = ne),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 2),
      (this.Is = 0);
  }
  st() {
    (this.Lr = 0),
      Ch.bc[0] === 3 &&
        (Ch.uc === 0 && Ch.lc === 0 && (this.Lr = 1),
        Ch.Xc === 0 &&
          Be.vc(Vr, (t) => {
            (t.x = this.x + 8), (t.y = this.y + 14);
          }));
  }
}
const oe = { parent: ei, Xe: () => new fe() },
  de = {
    Ss: 640,
    Cs: 480,
    Rs: 0,
    js: 0,
    km: [
      { Tm: ci, Lm: 32, Sm: 432, Cm: 1, Im: 1, Rm: 0 },
      { Tm: ae, Lm: 185, Sm: 432, Cm: 1, Im: 1, Rm: 0 },
      { Tm: ce, Lm: 345, Sm: 432, Cm: 1, Im: 1, Rm: 0 },
      { Tm: oe, Lm: 500, Sm: 432, Cm: 1, Im: 1, Rm: 0 },
      { Tm: Vr, Lm: 362, Sm: 346, Cm: 1, Im: 1, Rm: 0 },
      { Tm: Mr, Lm: 240, Sm: 400, Cm: 1, Im: 1, Rm: 0 },
      { Tm: Kr, Lm: 556, Sm: 82, Cm: 1, Im: 1, Rm: 0 },
      { Tm: Eh, Lm: 32, Sm: 250, Cm: 1, Im: 1, Rm: 0 },
      { Tm: Fh, Lm: 32, Sm: 385, Cm: 1, Im: 1, Rm: 0 },
      { Tm: jh, Lm: 32, Sm: 385, Cm: 1, Im: 1, Rm: 0 },
      { Tm: Dh, Lm: 602, Sm: 385, Cm: 1, Im: 1, Rm: 0 },
      { Tm: _r, Lm: 0, Sm: 0, Cm: 1, Im: 1, Rm: 0 },
      { Tm: uh, Lm: 0, Sm: 0, Cm: 1, Im: 1, Rm: 0 },
    ],
    ys: [
      {
        visible: 1,
        Xs: 0,
        Ys: 0,
        Hs: 640,
        Ws: 480,
        ps: 0,
        Os: 0,
        As: 640,
        xs: 480,
      },
    ],
  },
  me = {
    Zs: [{ aa: 1, ta: 991, ha: 272, ia: 9, sa: 9, ra: 0, ea: 0 }],
    Vr: 9,
    Ur: 9,
    qr: 0,
    $r: 0,
    Nr: 8,
    Qr: 8,
    ii: 0,
    si: 0,
  };
class ge extends Wh {
  constructor() {
    super(ve),
      (this.jm = 0),
      (this.ym = 0),
      (this.mode = 0),
      (this.Em = 0),
      (this.Pm = 0),
      (this.Fm = 0),
      (this.wr = me),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -600),
      (this.Is = 0);
  }
  he() {
    const t = Be.ph.Es();
    (this.jm = t.Xs),
      (this.ym = t.Ys),
      (this.mode = 0),
      (this.Fa[0] = 1),
      (this.Em = this.jm + 20),
      (this.Pm = this.ym + 223),
      (this.Fm = this.Kr(this.Em, this.Pm) / 17),
      this.Gr(this.Em, this.Pm, this.Fm),
      Lh.We(Tt),
      Ch.fn[16] === 1 &&
        ((this.x = this.$a),
        (this.y = this.Qa),
        (this.Em = this.jm + 154),
        (this.Pm = this.ym + 156),
        (this.Fm = this.Kr(this.Em, this.Pm) / 8),
        this.Gr(this.Em, this.Pm, this.Fm),
        Lh.We(Tt));
  }
  st() {
    this.speed > Math.abs(this.x - this.Em) &&
      this.speed > Math.abs(this.y - this.Pm) &&
      ((this.x = this.Em), (this.y = this.Pm), (this.speed = 0));
  }
  ue() {
    Be.He(this);
  }
}
const ve = { Xe: () => new ge() };
class be extends Wh {
  constructor() {
    super(ue),
      (this.Bm = 0),
      (this.on = 0),
      (this.Dm = 0),
      (this.Km = -600),
      (this.Gm = 2),
      (this.Vm = 155),
      (this.Um = 115),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = -601),
      (this.Is = 0),
      (this.Ba[2] = () => this.hc()),
      (this.Ba[3] = () => this.Mc()),
      (this.Ba[4] = () => this.wc());
  }
  he() {
    (Ch.qm = 3),
      (this.Fa[2] = 30),
      (this.Fa[4] = 1),
      (Ch.fn[201] = Ch.Nm),
      (this.Bm = 0),
      (this.on = 0),
      (this.Dm = 0),
      (this.Km = -600),
      (this.Gm = 2),
      (this.$m = Be.Sc(0, 0, he)),
      De.Vm !== void 0 &&
        De.Um !== void 0 &&
        ((this.Vm = De.Vm - 5),
        (this.Um = De.Um - 5),
        (De.Vm = void 0),
        (De.Um = void 0));
  }
  rt() {
    this.Bm === 1 && mh.Ha(me, 0, this.Vm, this.Um);
  }
  hc() {
    this.Fa[3] = 2;
  }
  Mc() {
    (Ch.Qd = Be.ph.ks), (Be.ph.Is = 1), Be.Sc(0, 0, Zr), Be.$d(de);
  }
  wc() {
    this.on === 0 && this.Bm === 1 && ((this.Bm = 0), (this.on = 1), this.Dm++),
      this.on === 0 &&
        this.Bm === 0 &&
        (Lh.We(Et), (this.on = 1), (this.Bm = 1)),
      (this.on = 0),
      this.Dm > 2
        ? Ch.Qm === 200
          ? (Be.He(this.$m), Be.He(this))
          : (Be.Sc(this.Vm, this.Um, ve), (this.Bm = 0))
        : (this.Fa[4] = this.Gm);
  }
}
const ue = { Xe: () => new be() };
class le extends Wh {
  constructor() {
    super(Xe),
      (this.parent = 0),
      (this.wr = Sa),
      (this.visible = 1),
      (this.Ea = 0),
      (this.Mh = 10),
      (this.Is = 0);
  }
}
const Xe = { Xe: () => new le() },
  Ye = {},
  He = {},
  We = {},
  pe = {},
  Oe = {},
  Ae = {},
  xe = {},
  Me = {},
  we = {},
  ke = '¼¹Ç-$áÄ\n¿@üÄp¶Ý"±ÍõÍ',
  Te = {
    Ss: 640,
    Cs: 480,
    Rs: 0,
    js: 0,
    km: [{ Tm: ue, Lm: 0, Sm: 0, Cm: 1, Im: 1, Rm: 0 }],
    ys: [
      {
        visible: 1,
        Xs: 0,
        Ys: 0,
        Hs: 320,
        Ws: 240,
        ps: 0,
        Os: 0,
        As: 640,
        xs: 480,
      },
    ],
  };
class Le extends Wh {
  constructor() {
    super(Se),
      (this.time = 0),
      (this.up = 0),
      (this.down = 0),
      (this.left = 0),
      (this.right = 0),
      (this.wr = void 0),
      (this.visible = 0),
      (this.Ea = 0),
      (this.Mh = 0),
      (this.Is = 1);
  }
  he() {
    (this.time = 0),
      (this.up = 0),
      (this.down = 0),
      (this.left = 0),
      (this.right = 0);
  }
  ae() {
    (this.time += 1),
      (this.up = C.N.up),
      (this.down = C.N.down),
      (this.left = C.N.left),
      (this.right = C.N.right);
  }
  rt() {}
  ge() {
    (() => {
      (Ch.item = []),
        (Ch.Jm = []),
        (Ch._m = []),
        (Ch.zm = []),
        (Ch.bc = []),
        (Ch.Zm = []),
        (Ch.Sn = []),
        (Ch.fn = []),
        (Ch.we = []),
        (Ch.In = []),
        (Ch.cc = []),
        (Ch.ec = []),
        (Ch.cn = []),
        (Ch.rd = []),
        (Ch.ed = []),
        (Ch.nd = []),
        (Ch.fd = []),
        (Ch.Cn = []),
        (Ch.tg = []),
        (Ch.hg = []),
        (Ch.ig = []),
        (Ch.Eo = []),
        (Ch.phone = []),
        (Ch.sg = []),
        (Ch.ag = []),
        (Ch.jn = []),
        (Ch.Rn = []),
        (Ch.ad = []),
        (Ch.ac = []),
        (Ch.yn = []),
        (Ch.rg = []),
        dh.Us(),
        (Ch.debug = 0),
        (Ch.ye = 20),
        (Ch._e = 20),
        (Ch.eg = 20),
        (Ch.cg = 20),
        (Ch.at = 10),
        (Ch.xo = 10),
        (Ch.ng = 0),
        (Ch.gd = 4),
        (Ch.bm = 4),
        (Ch.fg = 5),
        (Ch.Df = 5),
        (Ch.Re = 0),
        (Ch.og = 0),
        (Ch.dg = 0),
        (Ch.Oo = 0),
        (Ch.Ao = 1),
        (Ch.mg = 0),
        (Ch.zd = c("õü]Säà<Ì{EÊ¤ÝeÌcË", ke));
      for (let t = 0; 8 > t; t++)
        (Ch.item[t] = 0),
          (Ch.Jm[t] = 1),
          (Ch._m[t] = 0),
          (Ch.gg = -1),
          (Ch.zm[t] = 0),
          (Ch.Xc = 0),
          (Ch.bc[t] = 0);
      for (let t = 0; 24 > t; t++) Ch.Zm[t] = 0;
      for (let t = 0; 99 > t; t++) Ch.Sn[t] = c("Ûa·êõfãAS½ÉÀ½ÃB", ke);
      Ch.mg = 0;
      for (let t = 0; 512 > t; t++) Ch.fn[t] = 0;
      (Ch.we[0] = 0),
        (Ch.we[1] = 0),
        (Ch.we[2] = 0),
        (Ch.we[3] = 0),
        (Ch.sd = 0);
      for (let t = 0; 3 > t; t++)
        (Ch.In[t] = c("·v\vÂÌ-É¸ÏÔLÀÛÏÕ©ÏÐ", ke)),
          (Ch.cc[t] = 50),
          (Ch.ec[t] = 50),
          (Ch.cn[t] = 0),
          (Ch.rd[t] = 0),
          (Ch.ed[t] = 0),
          (Ch.nd[t] = 0),
          (Ch.fd[t] = 0),
          (Ch.Cn[t] = 0),
          (Ch.tg[t] = 0),
          (Ch.hg[t] = 0),
          (Ch.ig[t] = 0),
          (Ch.Eo[t] = 0);
      (Ch.Qm = 3),
        (Ch.do = 0),
        (Ch.Fo = 0),
        (Ch.uo = 20),
        (Ch.um = 0),
        (Ch.vg = 0),
        (Ch.uc = 0),
        (Ch.lc = 0),
        (Ch.bg = 0),
        (Ch.ug = 14),
        (Ch.border = 0),
        (Ch.turn = 0),
        (Ch.Gd = 0),
        (Ch.Vd = 0),
        (Ch.rc = 0),
        (Ch.confirm = 120),
        (Ch.fo = 90),
        (Ch.lg = 1),
        (Ch.en = 0),
        (Ch.Wd = 0),
        (Ch.Xd = 11),
        (Ch.Yd = 2),
        (Ch.en = 0),
        (Ch.Nm = 0),
        (Ch.Xg = 0),
        (Ch.Yg = 0),
        (Ch.Hg = 0),
        (Ch.Wg = 0),
        (Ch.pg = 0),
        (Ch.Og = 0),
        (Ch.Ag = 0),
        (Ch.xg = 0),
        (Ch.qm = 0),
        (Ch.Mg = 0),
        (Ch.Ud = 0),
        (Ch.Bn = 0),
        (Ch.Fn = 0),
        (Ch.dd = 0),
        (Ch.an = 0);
      for (let t = 0; 9 > t; t++) Ch.item[t] = 0;
      (Ch.Hd = 3), (Ch.Jd = 4);
      for (let t = 0; 9 > t; t++) Ch.phone[t] = 0;
      (Ch.sg[0] = 1),
        (Ch.sg[1] = 1),
        (Ch.sg[2] = 0),
        (Ch.sg[3] = 0),
        (Ch.wg = -1),
        (Ch.kg = 0),
        (Ch.Tg = 0),
        (Ch.Lg = 0),
        (Ch.Sg = 0),
        (Ch.Cg = 0),
        (Ch.Ig = -1),
        (Ch.Rg = -1),
        (Ch.Ho = void 0),
        (Ch.Hn = 5),
        (Ch.En = 0),
        (Ch.jg = 0);
    })(),
      (this.time = 0),
      (this.cr = 0),
      (Ch.zd = c("ð5ý\n\n>±dÖ§Cõ\0w³w", '¼¹Ç-$áÄ\n¿@üÄp¶Ý"±ÍõÍ')),
      (Ch.Ao = 1),
      (Ch._e = 20),
      (Ch.cg = 20),
      (Ch.at = 46),
      (Ch.en = 99),
      (Ch.xo = 14),
      (Ch.ng = 99),
      (Ch.gd = 4),
      (Ch.Oo = 0),
      (Ch.ye = Ch._e),
      (Ch.dg = 5219),
      (Ch.Nm = 113),
      (Ch.item[0] = 1),
      (Ch.phone[0] = 206),
      (Ch.item[1] = 1),
      (Ch.item[2] = 1),
      (Ch.item[3] = 1),
      (Ch.item[4] = 1),
      (Ch.item[5] = 1),
      (Ch.item[6] = 1),
      (Ch.item[7] = 1),
      (Ch.Hd = 52),
      (Ch.Jd = 53),
      (Ch.an = 1),
      (Ch.Qd = Te),
      (Ch.fn[16] = 1),
      Be.$d(Ch.Qd);
  }
}
const Se = { Xe: () => new Le() },
  Ce = {
    [(Qr.id = 514)]: Qr,
    [(uh.id = 185)]: uh,
    [(Kr.id = 154)]: Kr,
    [(_r.id = 181)]: _r,
    [(ue.id = 142)]: ue,
    [(Xe.id = 186)]: Xe,
    [(Ra.id = 187)]: Ra,
    [(Mh.id = 188)]: Mh,
    [(ca.id = 503)]: ca,
    [(pi.id = 515)]: pi,
    [(qh.id = 502)]: qh,
    [(xi.id = 501)]: xi,
    [(Qh.id = 500)]: Qh,
    [(Oh.id = 757)]: Oh,
    [(ei.id = 755)]: ei,
    [(Ye.id = 783)]: Ye,
    [(He.id = 5e3)]: He,
    [(jh.id = 761)]: jh,
    [(Zh.id = 189)]: Zh,
    [(ii.id = 507)]: ii,
    [(Zr.id = 147)]: Zr,
    [(ci.id = 750)]: ci,
    [(Or.id = 91)]: Or,
    [(We.id = 153)]: We,
    [(pe.id = 180)]: pe,
    [(aa.id = 518)]: aa,
    [(Nr.id = 498)]: Nr,
    [(Vr.id = 743)]: Vr,
    [(Oe.id = 744)]: Oe,
    [(Ae.id = 746)]: Ae,
    [(Mr.id = 183)]: Mr,
    [(dr.id = 785)]: dr,
    [(ce.id = 752)]: ce,
    [(Fh.id = 758)]: Fh,
    [(oi.id = 505)]: oi,
    [(mi.id = 504)]: mi,
    [(vi.id = 510)]: vi,
    [(nr.id = 605)]: nr,
    [(xe.id = 1)]: xe,
    [(Ea.id = 784)]: Ea,
    [(Ta.id = 1363)]: Ta,
    [(bi.id = 148)]: bi,
    [(Dh.id = 760)]: Dh,
    [(li.id = 506)]: li,
    [(Ti.id = 499)]: Ti,
    [(Si.id = 512)]: Si,
    [(Hi.id = 508)]: Hi,
    [(fr.id = 519)]: fr,
    [(xa.id = 517)]: xa,
    [(Uh.id = 497)]: Uh,
    [(Di.id = 511)]: Di,
    [(Me.id = 138)]: Me,
    [(br.id = 733)]: br,
    [(oe.id = 754)]: oe,
    [(we.id = 1573)]: we,
    [(Vi.id = 509)]: Vi,
    [(ae.id = 751)]: ae,
    [(Wr.id = 738)]: Wr,
    [(Xr.id = 734)]: Xr,
    [(he.id = 146)]: he,
    [(Se.id = 1568)]: Se,
    [(ve.id = 141)]: ve,
    [(Eh.id = 759)]: Eh,
    [(Ui.id = 149)]: Ui,
    [(ia.id = 513)]: ia,
    [(Bs.id = 782)]: Bs,
  },
  Ie = {
    Ss: 640,
    Cs: 480,
    Rs: 0,
    js: 0,
    km: [
      { Tm: Me, Lm: 48, Sm: 0, Cm: 1, Im: 1, Rm: 0 },
      { Tm: Se, Lm: 0, Sm: 0, Cm: 1, Im: 1, Rm: 0 },
    ],
  },
  Re = {
    Ss: 320,
    Cs: 240,
    Rs: 0,
    js: 0,
    km: [{ Tm: He, Lm: 0, Sm: 0, Cm: 1, Im: 1, Rm: 0 }],
  },
  je = {
    Ss: 640,
    Cs: 480,
    Rs: 0,
    js: 0,
    km: [{ Tm: We, Lm: 192, Sm: 128, Cm: 1, Im: 1, Rm: 0 }],
  },
  ye = {
    Ss: 640,
    Cs: 480,
    Rs: 0,
    js: 12632256,
    km: [{ Tm: we, Lm: 0, Sm: 0, Cm: 1, Im: 1, Rm: 0 }],
  },
  Ee = {
    [(Ie.id = 0)]: Ie,
    [(Re.id = 1)]: Re,
    [(Te.id = 2)]: Te,
    [(de.id = 3)]: de,
    [(je.id = 4)]: je,
    [(ye.id = 5)]: ye,
  },
  Pe = "\fÛF4Ãª{lâïËpôOÜRuA\nJ#X",
  Fe = "$h(7WÞÏ4øI7trl^Oÿ»tÌT«c¯n";
var Be;
((t) => {
  var h = {},
    i = [],
    s = [];
  (t.yg = 0), (t.Mr = 0), (t.Eg = 0);
  var a = -1;
  function r(i) {
    a = -1;
    const s = Ee[i];
    if (s === void 0) return;
    let r = {};
    if (t.ph !== void 0)
      if (t.ph.Is) {
        h[t.ph.Ts] = t.ph;
        for (const h of Object.values(t.ph.Ms)) h.ue();
      } else
        for (const [h, a] of Object.entries(t.ph.Ms))
          a.ue(), a.Is ? ((r[h] = a), delete t.ph.Ms[h]) : (a.se(), (a.pr = 1));
    const e = h[i];
    if (e !== void 0) (t.ph = e), delete h[i];
    else {
      t.ph = new bh(s);
      const h = s.km;
      if (h !== void 0)
        for (const i of h) {
          const h = i.Tm,
            s = h.Xe;
          if (s === void 0) continue;
          const a = s(h),
            r = a.ya;
          (a.x = i.Lm),
            (a.y = i.Sm),
            (a.Ja = i.Lm),
            (a._a = i.Sm),
            (a.$a = i.Lm),
            (a.Qa = i.Sm),
            (t.ph.Ms[r] = a);
        }
    }
    for (const [h, a] of Object.entries(r)) a.pr || (t.ph.Ms[h] = a);
    for (const h of Object.values(t.ph.Ms))
      h.Wr && (h.he(), h.Jr(), (h.Wr = 0));
    for (const h of Object.values(t.ph.Ms)) h.be();
    g(1);
  }
  function e(t) {
    const h = t.id + 1;
    return Ee[h] !== void 0 ? h : -1;
  }
  function n(t) {
    const h = t.id - 1;
    return Ee[h] !== void 0 ? h : -1;
  }
  function f(h) {
    if (h !== void 0) return typeof h == "number" ? t.ph.Ms[h] : t.ph.Ms[h.ya];
  }
  function o(t, h) {
    const i = t.parent;
    return i === void 0 ? 0 : i === h ? 1 : o(i, h);
  }
  function d(h) {
    for (const i of Object.values(t.ph.Ms)) {
      if (i.ks === h) return i;
      if (o(Ce[i.Ts], h)) return i;
    }
  }
  function m(h) {
    const i = [];
    for (const s of Object.values(t.ph.Ms))
      (s.ks === h || o(Ce[s.Ts], h)) && i.push(s);
    return i;
  }
  function g(h) {
    (h || t.yg || t.Mr) &&
      ((i = Object.values(t.ph.Ms).sort((t, h) =>
        t.Pa === h.Pa ? t.ya - h.ya : h.Pa - t.Pa
      )),
      (t.Mr = 0)),
      (h || t.yg || t.Eg) &&
        ((s = Object.values(t.ph.Ms).sort((t, h) => t.Ts - h.Ts)), (t.Eg = 0)),
      (t.yg = 0);
  }
  function v() {
    switch ((g(), a)) {
      case -1:
        break;
      case -2:
      case -3:
        for (const h of Object.values(t.ph.Ms)) h.ve();
        return 1;
      default:
        return r(a), 1;
    }
    return 0;
  }
  function b() {
    for (const t of i) !t.pr && t.visible && (t.Br(), t.ce());
    for (const t of i) !t.pr && t.visible && (t.Br(), t.rt());
    for (const t of i) !t.pr && t.visible && (t.Br(), t.ne());
  }
  (t.Pg = () => {
    (C.q[c("ôló*ñ`ÿ´MW:", Pe)] = "z"),
      (C.q[c("¯EÞehLuBã&5%TÇKÑ", Pe)] = "x"),
      (C.q[c("àÑs£Ê¤#h±ß\rô¾%·", Pe)] = "c"),
      (C.q[c("çuëð\rnÃr³*ÝÛÞ©ÞÁ@", Fe)] = "z"),
      (C.q[c("ªß(éúé½5¯ðtñ?ò²\0Û±À@x", Fe)] = "x"),
      (C.q[c("yááéR=ùßgb1>Á¤Ø½.\t", Fe)] = "c"),
      (t.Fg = 0),
      (t.Bg = 0);
    for (const h in Ee) {
      const i = parseInt(h);
      i > t.Bg && (t.Bg = i);
    }
  }),
    (t.ht = () => {
      r(t.Fg);
      for (const h of Object.values(t.ph.Ms)) h.ge();
    }),
    (t.Dg = r),
    (t.Kg = (t) => t.name),
    (t.Gg = e),
    (t.Vg = n),
    (t.$d = (t) => {
      a = t.id;
    }),
    (t.Ug = () => {
      t.ph !== void 0 && (a = e(t.ph.ks));
    }),
    (t.qg = () => {
      t.ph !== void 0 && (a = n(t.ph.ks));
    }),
    (t.Ng = () => {
      a = t.ph.Ts;
    }),
    (t.$g = () => {
      a = -2;
    }),
    (t.ve = () => {
      a = -3;
    }),
    (t.Sc = (h, i, s) => {
      const a = s.Xe;
      if (a === void 0) return;
      const r = a(s),
        e = r.ya;
      return (
        (r.x = h),
        (r.y = i),
        (r.Ja = h),
        (r._a = i),
        (r.$a = h),
        (r.Qa = i),
        (t.ph.Ms[e] = r),
        r.Br(),
        r.he(),
        (r.Wr = 0),
        r.Jr(),
        (t.yg = 1),
        r
      );
    }),
    (t.He = (h, i) => {
      if (h === void 0) return;
      let s;
      if (typeof h == "number") {
        if (((s = t.ph.Ms[h]), s === void 0)) return;
      } else s = h;
      (s.pr = 1), s.ie(), s.se(), i && (delete t.ph.Ms[h], (t.yg = 1));
    }),
    (t.Qg = f),
    (t.Jg = o),
    (t.ke = d),
    (t._g = (h) => {
      let i = 0;
      for (const s of Object.values(t.ph.Ms))
        (s.ks === h || o(Ce[s.Ts], h)) && i++;
      return i;
    }),
    (t.Fr = m),
    (t.Tc = (t) => d(t) !== void 0),
    (t.Ye = (t) => f(t) !== void 0),
    (t.vc = (t, h) => {
      for (const i of m(t)) h(i);
    }),
    (t.zg = () => {
      const h = L.j;
      v();
      for (const t of s) t.pr || t.Jr();
      if (!v()) {
        for (const t of s) t.pr || t.ae();
        if (!v()) {
          for (const t of s) t.pr || (t.Br(), t.zr());
          if (!v()) {
            for (const t of s) t.pr || (t.Br(), t.Zr());
            if (!v()) {
              for (const t of s) t.pr || (t.Br(), t.st());
              if (!v()) {
                for (const t of s) t.pr || (t.jr(), t.Br());
                for (const t of s) t.yr();
                if (!v()) {
                  for (const t of s) t.pr || (t.Br(), t.re());
                  if (!v()) {
                    for (const t of s) !t.pr && t.visible && (t.Br(), t.ee());
                    if (!v()) {
                      if (
                        ((() => {
                          for (const [h, i] of Object.entries(t.ph.Ms))
                            i.pr && (delete t.ph.Ms[h], (t.yg = 1));
                        })(),
                        (mh.ba = 16777215),
                        (mh.ca = 1),
                        t.ph.backgroundColor !== void 0 &&
                          mh.Rect(0, 0, 640, 480, t.ph.backgroundColor, 1),
                        t.ph.views !== void 0)
                      )
                        for (const [i, s] of t.ph.views.entries())
                          s?.visible &&
                            (h.save(),
                            h.scale(640 / s.Hs, 480 / s.Ws),
                            h.translate(-s.Xs, -s.Ys),
                            (t.ph.ws = i),
                            b(),
                            h.restore());
                      else
                        h.save(),
                          h.scale(640 / t.ph.width, 480 / t.ph.height),
                          (t.ph.ws = 0),
                          b(),
                          h.restore();
                      t.ph.ws = 0;
                      for (const t of s) !t.pr && t.visible && (t.Br(), t.fe());
                      for (const t of s) !t.pr && t.visible && (t.Br(), t.oe());
                      for (const t of s) !t.pr && t.visible && (t.Br(), t.de());
                      for (const t of s) !t.pr && t.visible && (t.Br(), t.me());
                      v();
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
})(Be || (Be = {}));
class De extends at {
  constructor() {
    super(), (this.Zg = oh.ji());
  }
  ht() {
    Be.Pg(), Be.ht();
  }
  fh() {}
  st(t) {}
  oh(t) {
    L.D(), t.scale(0.5, 0.5), Be.zg();
  }
}
const Ke = "rÎ}sýÈK©I{D]¥Tâ°ú\v¨y\fFç¡",
  Ge = [
    c("\\¾Nlû¨?]^ôÎ%b¥â%lÜC{êY#>¸à2@ÜAÝ©g*â£y*>â?å¡·BÉCÅÈ[ö", Ke),
    c("ÐËÁ)Ë06·­ñº)ôÎ·]ç\nsý'åhÍ9N", Ke),
    c("ïã)¡½§|®£D×zTt \v4ÝÞ½Q©]À¸H¶\\", Ke),
    c("ÉÅá*É4/²¼¸Á]s µ3¼Íçñwê\b>ôAcéÄdÁ%X", Ke),
    c(
      "ÇxV©¹v\b¹Öë.\\U5ÜzWWOÓÂtÓe\r·¼%ý¿ÀðÃÝ&yF\tæéU´á3W\bjÚ )\rí´b",
      'æ->ea9aï2¿ñÏ1´½\'"­Õòåº§µk"Ó'
    ),
  ],
  Ve = "Óµ+ªkú±\0f8^Æ\n/ìÎ×(I;PßÑÉ=J£",
  Ue = "1T`TÊàÉòõ¨Aøµu¿øG·ßÁõ)!%íQ=",
  qe = "F!îNSÐH(ÏX·ÙIfªMÄMlffóåò3M",
  Ne = "Ë§3ªã´ï£Qàóq¿®ná",
  $e = {
    [c("á\\ÊdDÍñþãO«²£(M\r\\i", '¼¹Ç-$áÄ\n¿@üÄp¶Ý"±ÍõÍ')]() {
      it.nh =
        0.5 > Math.random()
          ? c("Ó«^èV:~þ×uEöm\b¶¢+ÌD¿¶|QEX/Uás\b-h", At)
          : c("3âñOÓJ\vÿÅw,È½-ÒmÒ.>3Ò^ÍV½ßBKY`öj", At);
    },
    [c('Lc¦cÑ¹7r4­zá"2Àp', Ue)](t) {
      ft.bi = st.bh(t, "audio");
    },
    [c("X8´OèÅb-nLÊ4dÙÒD$=", Ue)](t) {
      it.nh = st.bh(t, "url");
    },
    [c("5}°\n]{Ï'Ò¯x3ÈX!Í!Ó<", Ue)](t) {
      const h = st.bh(t, "varName"),
        i = st.bh(t, "varValue");
      h !== void 0 && m.i(h, i);
    },
    [c("tá÷Lô(Ö{Ó]Õ\r¹", Ue)]() {
      zc.Ah.tv || ((zc.Ah.tv = 1), (zc.Ah.hv = -6));
    },
    [c("tÚ\\öwk.I²QsøÞÕ\08û", Ue)](t) {
      zc.Ah.iv(st.bh(t, "xsp") ?? 0, st.bh(t, "delay") ?? 0);
    },
    [c("«h±[¶Ã¾-Óû°àù&Ö9f¢ÓÓT.", Ue)]() {},
    [c("SËfÐä¢©|Pn¤XS Íç9", qe)](t) {
      const h = zc.Ah,
        i = st.bh(t, "target"),
        s = zc.Zh[i];
      if (s.Vt && !s.sv) {
        const t = zc.av[c("?¢ë»Álì[±(b¶GÅ-Xäìa®E]", "8Áaø@;£ï÷J\\_!6Pé`fØ-Õ")],
          i = (t.x + 8) >> 4,
          a = (t.y + 8) >> 4;
        zc.Hi(i, a, 66, 0),
          zc.Hi(i + 1, a, 67, 0),
          s.rv(1.5),
          h.rv(1.85),
          (h.ev = 0);
      }
    },
    [c("n4;{·r¢øi³1åÓ!cG¾", qe)](t) {
      const h = zc.Ah,
        i = st.bh(t, "target"),
        s = zc.Zh[i],
        a = st.bh(t, "door");
      s.cv &&
        !s.sv &&
        zc.Zh[a].Li() &&
        ((zc.av[c("÷«W÷Vf7#®ÏPÈfoA}¤Ò´µ¯1O", Mt)].x -= 16),
        (s.cv = 0),
        s.rv(2.3),
        h.rv(1.7),
        (h.ev = 0));
    },
    [c("ÉøÚåT^ÀýÓl\0VÓåÚI", qe)](t) {
      if (st.bh(t, "alreadyHit")) return;
      st.uh(t, "alreadyHit", 1);
      let h = zc.Ah.nv++,
        i = 0;
      Ge.length - 1 > h || (i = 1), zc.Ah.fv(Ge[h], i);
    },
    [c("úÆC§òJ´pK¹à·ç|ã[yÜ", qe)]() {
      const t = zc.av[c("Ss#*Y#ôÔñ·kfûf3\0BCíæ-", Ve)],
        h = zc.av[c("Ç`ãã¤Qbüwgç§SÙÍÿ4¯Ölñr¥ûe", Ve)];
      zc.av[c('ö#©¸ Ðf-ÛC"UEyª®½', Ve)].Vt && ((t.Vh = h.id), (h.Vh = t.id));
    },
    [c(":ÚqïRùÃKäÖ½³qQúÓ1\\KÌH", Ne)](t) {
      const h = st.bh(t, "target");
      if (zc.Zh[h].sv) {
        if (st.bh(t, "abc") === 1) return;
        st.uh(t, "abc", 1),
          (zc.ov = c("¤H\bâ¨Ø(c§§uõ>Ï(#DË)", Mt)),
          (zc.av[c("öÇCnðpÚàØçfá2Åis`mA\b*!ÕIÓ-", Mt)].y += 16);
      }
    },
    [c("~|ñú\vH#u³äèqêÚÊó¼ìê", Ne)](t) {
      if (zc.Ah.Kt) return;
      const h = st.bh(t, "target"),
        i = zc.Zh[h],
        s = st.bh(t, "tvscreen"),
        a = zc.Zh[s];
      zc.Ah.dv(i.x + i.Ch / 2, i.y + i.Ih / 2, a.Lh, a.Sh, a.Ch, a.Ih);
    },
  };
class Qe extends mt {
  constructor(t, h, i, s, a, r) {
    super(t, h), (this.mv = a), (this.properties = r);
    const e = new gt(this);
    (e.width = i), (e.height = s), (this.Eh = e);
  }
  static Nh(t) {
    return new Qe(t.x, t.y, t.width, t.height, st.mh(t, "method"), [
      ...t.properties,
    ]);
  }
  Dh() {
    const t = $e[this.mv];
    t !== void 0 && t(this.properties);
  }
}
class Je extends mt {
  constructor(t, h, i) {
    super(t, h),
      (this.gv = 0),
      (this.vv = 0),
      (this.bv = 0),
      (this.uv = -1),
      i !== void 0 &&
        ((this.message = i.split("\n")),
        (this.bv = this.message.reduce((t, h) => t + h.length + 13, 0)));
    const s = new bt(this);
    (s.image = ht.images.It.ft()),
      (s.x = 0),
      (s.y = 96),
      (s.width = 24),
      (s.height = 48),
      (s.ii = 12),
      (s.si = 40),
      (this.Bh = s);
  }
  static Nh(t) {
    return new Je(t.x, t.y, st.mh(t, "message"));
  }
  Fh() {
    (this.x = this.Lh), (this.y = this.Sh), (this.gv = 0), (this.vv = 0);
  }
  st(t) {
    const h = zc.Ah,
      i = h.x - this.x,
      s = h.y - this.y,
      a = Math.sqrt(i * i + s * s);
    if (this.message === void 0) {
      if (90 > a) {
        const h = s / a,
          r = 300 * (1 - a / 90);
        (this.gv -= (i / a) * r * t), (this.vv -= h * r * t);
      }
      (this.x += this.gv * t), (this.y += this.vv * t);
    } else {
      if (
        (0 > this.uv ? 50 > a && (this.uv = 0) : (this.uv += t * 10), 30 > a)
      ) {
        const t = this.x + (i / a) * 30,
          r = this.y + (s / a) * 30;
        zc.hi(t, h.y) && (h.x = t), zc.hi(h.x, r) && (h.y = r);
      }
      this.bv > this.uv || ((this.message = void 0), (h.lv += 0.1));
    }
  }
  oh(t) {
    if (this.message !== void 0 && this.uv >= 0) {
      (t.fillStyle = "white"), (t.font = "6px monospace");
      let h = this.y - 30 - this.message.length * 8,
        i = Math.floor(this.uv);
      for (let s = 0; this.message.length > s; s++) {
        const a = this.message[s].substring(0, i);
        if (((i -= a.length + 13), t.fillText(a, this.x - 56, h), 0 >= i))
          break;
        h += 8;
      }
    }
    super.oh(t);
  }
}
class _e extends mt {
  constructor(t, h, i) {
    super(t, h), (this.name = i);
    const s = new bt(this);
    (s.image = ht.images.body.ft()),
      (s.x = 96),
      (s.y = 0),
      (s.width = 24),
      (s.height = 48),
      (s.ii = 17),
      (s.si = 13),
      (this.Bh = s);
    const a = new gt(this);
    (a.x = -6), (a.y = -4), (a.width = 12), (a.height = 4), (this.Eh = a);
  }
  static Nh(t) {
    return new _e(t.x + t.width / 2, t.y + t.height / 2, t.name);
  }
  Dh() {
    const t = zc.Ah;
    (t.Xv = 1),
      (t.lv += 0.15),
      (t.Yv = 1),
      (t.Hv = 1),
      (t.Wv = 1),
      (t.pv = 1),
      (this.Bh = void 0),
      this.Eh.yh(),
      (this.Eh = void 0);
  }
}
const ze = "f-<­Ê4ÔÈY¾;¥÷át'{¢P¼'ä",
  Ze = "ý±ó_!æþ¬v,êéX§gø{",
  tc = "®+W\f?ºiD\rÛkê]®½>ENè´°l&ß:",
  hc = "++jæ\0t!öaÁ­DWÕì",
  ic = "§=+Ê\fIwÝQ:dÌó",
  sc = ";ßùøSÓ²ØÎir.ÊãppðÐSYdûÖÖ*N",
  ac = "ì©þ9ÑÉ{0ÁÜ÷bÆ.",
  rc = "8ÇJ\x007Â$µéFþ_$",
  ec = "\bÛô®ÅÕy«{åoöà°×",
  cc = "ùJ¢¼Ä¥?Äxï9IÏìa+\0Îfå",
  nc = "½¿1Ç{cfô.o1lØ6ØûñOsÐã9",
  fc = 'xMüÝ"õKÚq%Ò¨Ôä¸õgp',
  oc = "O+~.gñ³ÕÈâ·Z)óû;9Údb",
  dc = "ØJ\n£ó¦aXJ Kp<h$éïZÞ\b¯-ÒÙÐ",
  mc = [
    {
      Ov: c(' yHdR¸{ÿ6£ipÕ!f&GñbO\r¿÷öªçÞ#&DÒÔºâ\v¯ßöy§ä|ÄÂÌl?m1C:n»c²""N', ze),
      Av: c("³_H°­Ü¥Ijûÿ&³At4#v&i", ze),
      negative: c("®Á³«SSH¡ðéTQökQ÷{i", Ze),
      messages: [
        c("5E»:+/P¯=vF=¹ñ$.ó¬CÏ&aqWèÞ*Z¦wÉ'\nQðÇëI\r9yêaCrÝ_ïìÛ·£hÄ°ýÙ", Ze),
        c('R¡B/Kd:,}\t±dþ%DêÚUÓJ6ZrK|µ´VÚ¶Ã®6UÝeÃîðöa±"Ù\n=Ñß¬¬sºÏÓ1¯P', Ze),
        c("lF7{Ó/aÛè®ögjÍ ü³¡\r /KG Ã®°3«é\vVXI\t$5ÉÞ¡«(ÝñÐ}ÌÃ®úæóB¡Ô", Ze),
        c("E~}+_`Ã¢)GR Öd%¶·gÎ%ïimoûJ¯SÞËÐr2×3Zd>ø<u¥ýï.{\vïîJ=Ã", Ze),
        c('N"cÜÆ-ÖÃ«5m[£O§ÚÑ^ÕkæÖ:ëúu,\b.ÄËæµ|íßd$\b+*¤Ù34*K-zLº@ElÝÊhJónÿ', Ze),
        c("fÍdæ\0NÚCûpþ*ðºª(·ÃÄõq<¾%âÊnñÿs¤5ÝîÀ:XK¨ýT}õ±QQ©=Úr", tc),
        c(
          "V°ár«èìNQã³ÒË¾Ö¼`¡%kM#À5c¯£p­ç[®I7#%bóóÛÈÍq¢B3²à{ÂGïEÔ\\v,.¹ÝðÊÆû¡ónu¹Ú",
          tc
        ),
        c(";EaL¥y¤¨`\b[SYæáÈ¸#éF!oHMø?UéR/°@âÑÙu/4&J@\0øâ?ÜËiø-¼»5¡wæÕ", tc),
        c(
          "w\nHöwpÃÈÑOÓÛR5VêYÊt¬Á-|ßý1D¥Ä­u°àXp- /_~²Ö\v7Þ(£-èz%C¤«ùH'ý:³Î`U*7",
          tc
        ),
      ],
    },
    {
      Ov: c('MFÉË9ZÕ÷¬3æPÝ*oj Ç\fÇ÷6ôZÃ\rKÃwn~ ÕQÈùÎëjÆÍn"l2ÉöHÏºLÛ/Év&', hc),
      Av: c("$p.ÅQ¬5zUÓaTáÄbUytL", hc),
      negative: c("3}ðÔüËù[6°*ÆyTÓåÝó", hc),
      messages: [
        c("GNßñË³ÞÓÌg.*(«ÖwÞ\v±\nÑÍiútqùJÃp$²ì~Õël9»Å}Û&¼ÙÁz¶âw1¸R`*ù", hc),
        c("ñ¨[,9þE­ædî®pHAð½¢æ£ÂíÁûlú«£Ç6¦Þ¼NÈ÷sN^»ð¥Å\f¢Ä\nÀ¥%_¿¸àÅÂ\f¯Ê", hc),
        c("h8<ZWÂq9HE±TîÐ5Ò£_:cñbÐ5´j*µbâ÷UÝôÌXT>¶ÉÊ#p¼ÞPýi?áç÷Ø¡¥Ä`F", ic),
        c("ºJ]]¢\tÍM*ÖÂ²Òýõ§p©ÙWChÍüüpV²ëT2Æ\tH\b´*OÒE0Võ1ÌY&Ðm%/Ö¾ãõÍ¸", ic),
        c('yÑá×Ð»opýü$;±Æ\0ÑÑ}&cÊ°9"@mýtõéÌ¸é÷ êL«BôR0¦½lyb¼§`âÁÌ´]ÜDCY6', ic),
        c("9HÈhÊH°6R­h\\l«cÃÔwtl¥]ü»'UêÎ¡ýP·tmUÍ@À£~y!¦`X°©¨ÌÂ_N{¯JÂV", ic),
        c("6üîpÑí«{\b9÷qCÊ£Î6cl9!:p9ñ¦°»úáþÀfì$ÏÜÂÆqo|§¯ðºwJ´øXSoÖiï5e", ic),
      ],
    },
    {
      Ov: c("çNN+#ÀPRµâë¾&þ!É×Öÿáa;JºÎ'B®½\0Ò(×\t.LRëÞØ»4¿·A/p\0bDåÊÚPàÌÞ", ic),
      Av: c("ËÙ#éyÃtJ$å)]+;ãã,", sc),
      negative: c('kO²",ÖZÎÑó&¥<iÛxv­Z)p', sc),
      messages: [
        c("ü=dBY½s°/û×®ïIÂî©ë¯­î¿áö8·ÝV{¿¦V5a4íZû2ç¶æB@ÃvMYnû£Íª±Sï", sc),
        c("\näh^µµô\rJ+ÉÃÌÍÇ®ÖÐKQzðaK\f¡2>Ãcì­®ø´mÄä;_HÇjçµva=Ìç6ýSm¶ußã", sc),
        c(
          "HpÈý-³ï)väõ#õ§HÊâÈø18¿È\fTï-]Kªªmùw¡õ(§ü'\nß§½ 5B º¨*úR¶U\\ó;I¬KåqZÞ'-ô",
          sc
        ),
        c("³,´{w÷{-e&½<¥ºLX¡1OCöî_²_Ð÷e7$©xcW¾9¹¦ðÀØ~û\v¥+»Æ^¬3þH¡æÜ", ac),
        c(
          "HçL»ìczû&]RÐÿ3Z~úªI\v?¿®Äâ®Øó?±©CÂ÷;®ª$µÆÍB°°KÔç«èýî,`îQÐ\\+ÔÑ[fÌÐÿnMãÐ ",
          ac
        ),
        c(
          "F¦ì2ÁWdYiÅLö¯\\Ê²Y\\ÃÒ´Q¿/ÀÅCqt{kc¬WW¿_ÞØ­2;¶2Kö\b)ø¿ÀÂ8\\¬¢ØÆ%ui",
          ac
        ),
        c(
          "¸(b>Ø¸\b=¯ÁÅt²PÃsÄëß´?\\}!² Ûnæx½]2rMûB\rÆ3H\\­ðÿ<÷*ä¾º£x£*+ù±ÞB<Æ",
          ac
        ),
      ],
    },
    {
      Ov: c(
        '7nvù\rÎka}1"ÐÏsîhv¯ð\tñ§LæÀ¢Ø1"gS\f$oNK·d¡iGOÁúãñÃiE\vÍRtéD]:g:',
        rc
      ),
      Av: c("áje¥¸}}!BÁý©0Ì°¶nmAëÀ", rc),
      negative: c("Õ?!ÞÎU­>¬øo´'û×Çf¨J©", rc),
      messages: [
        c('P¾zù°ÕªÐn¶ic)x.éµß±Sÿ5930é/aY¢¹éeÀæ`~\r=à.|ö^"îM4Dã¦p¢ÚP', rc),
        c(
          "t§\\í2eÏû?o¡¬'yìã%¦{íÀÁc¥=Y~Ê×Fvv³ìSÏs¯%4dªÆ#\nÀN½Íî­<#Å¥Ë¤3ÓÜùßÊ",
          ec
        ),
        c('Íº8[÷3Á¤¥ÅÜä~á,ýºµN*ª#\r°ª"lå§RývÈê%fMj/¬§UôëqéY^ÊøìªRKæê k7w+', ec),
        c("ýÎÖ´oìN­Ú«è¿¸\r2ß¼Ð+Í¥?©T§Ô­ÉDOd8¸Cm­NSÏGÂ â_^õ}ÐR©&£;h", ec),
        c("á¶r¸wH·)þ6T¯ mÞc¦t+øÈ}»ïKbpd£OF¾eúj«]+Æ'yKQuÅÌ4C©9Æa*~ô\\-ßíª1", ec),
        c("Ö3µox,¹â¹Öü5\\Ú6qµËáxkëK69~ð$tÆæEãSì]@ÏÂ¼0/*szöj);LÂÑµÁ,7xßòÕ+", ec),
        c('t`Àz>ºs"Ï@°~^¿f:ö<Ú³h½vú¶ed®Âu­[×«:-èÎÞÕûÞÁä§>æ\fÿd­|å \f8®ªÏö', ec),
      ],
    },
    {
      Ov: c(
        "GZÊOb¤Ó\\Ý*o÷æÉÏeöþ»\bZ»dÅ¦Añ[¡+3(Ih®íöV®ä!lê<îêßÒPyEC»ºÕçDDÝYë¹4>é",
        cc
      ),
      Av: c("þrvÊÌï36UA¯ê-¢~0Ït3\fxÞ", cc),
      negative: c("l\v®ñµë§%tÁ×´ìIª/·6[|\0¸ ­¦;þ0n", cc),
      messages: [
        c(
          "\0@ÅÎK:ï^pê´qäÃ¢kÙ3g7^(R2^½Æì¿¹îÎ4ÇØ¹æ;j­âââhSæËxÅ½²Ý¦Î\\|dºcf¸",
          cc
        ),
        c('y0Æ!TX3Öè~`{¦Ìb~­]4oè(3?ó-¶*\0´Qñ&d8´½ôÛæ¼"ÖU\v¡»À®Èíc`<', cc),
        c("Øx\vQT°jÊÎ3P)â#-H&7,dý=¿óÀTVàW±\f3[HlX$ü,\fDvíÇ1", nc),
        c(
          "·Ï0x\f§\\ÒÅÙºÏL\0GüÙº>?ú¶­\t!àèzè\fÉÜ>Æs\fNþý\0|ÁïEví÷ç6²*vï\rÉ¼<9ð6>#³0Pæ>èUõÍ",
          nc
        ),
        c("ÈåDL`«!^Ñ,-4°.b÷õF#1\r44OÑkU¨/&}ÏÔ$ÌX6ï©ÎÉªd«\t¦éSGxÞ\nlk'", nc),
        c(
          "´ÿmÎQØe0Ý>Ü6é#-à{JP'ºåúÜãÕ\0¨+¶ýiL8ÙÜ£ñÀ=@¢Ôñ\0îöUòp_\fpËÂ¯ñºÊúÂoß×ã´â.(kúR²Ó¾ËA­ã",
          nc
        ),
        c(
          "Öq{²¡WÐS3íu÷\fÙ'Ô±»ÅÂË³'ÆÇÌ<X½¡káæÂÁ9ðÙ­W$ùºº8Ü9[xYÜ[yªþZ-çgv>Ãý)Øpû¦XÛ\vAÊ",
          nc
        ),
      ],
    },
    {
      Ov: c(
        "¾\n;ip?sÖÙ!òùdK¡4\bûºBÊÊÜ·zÍM`ÅüÕÀB Xã\0§©ÌÓÊ¿Iî²Z6¯æ`èýqN`}9`¼VäÍA­à",
        fc
      ),
      Av: c("AZí¼è»¥Ó:çs\bR_\bæúr¡X.x(ü¿c¯Ð¶f\v", fc),
      negative: c("¸6@O1äÿtt?¸ôÀ ½>C´ëÅ", fc),
      messages: [
        c("ÃëòMû¼e/)úÕå?\vàñïCaNÃðÂM7pùGpqô0»Ú¡^\"+º[z'57¿«mÙ¨baÿ", fc),
        c("ê$§ã ß6ÍÂD3­u[Ôv¹¨QQ wéN9A7Éê½:\foÈ¥Ãºº&ð²+DïøÓ¯÷Û¶AGÐhØÊ8Ä|", fc),
        c(
          "!52nÅ:\fw\t÷ÛUgá¶¥b¹D[:ñ¸ó*!výáU¢ÊIã t¢ý/¯G÷ø)ÁÈ×)\fÞÐ¤£$àqÈQÉóN®\tã",
          oc
        ),
        c(
          "Â¯UOêeTpj²#qeÀyÀ½óa~úÎõ\\hgEuGà)â!»c$Ô\\íw tMß¯B­/xC@r}Nù&eóP$O:¡",
          oc
        ),
        c("<»ù¨çW=M¢Cxdûì0æÐßÍ:y Ë äà^¥DÃ¬Ð(¼h¶ì)¬ldà2¥ånN½Æ4Æíuþk", oc),
        c(
          "µ:ä\\âå}^+½¥\bPh8Ä&>ó\tq3ÿRRj$÷|æÐJÞyPerÏì¢Ó)÷å£2v\0øg*¸&gÐ?$fü|Àt",
          oc
        ),
        c(
          "yRü¡Æöì·]iÚ:ËË¹Ûy¦Ø_ÉO¡FÆ|DØ§_ª¿§\0ëy´¿D\vë¾dÙÝ0m¥v¸äÈY,]¦fzFóuÄm4>¯R­",
          oc
        ),
      ],
    },
  ];
class gc extends mt {
  constructor(t, h, i) {
    super(t, h),
      (this.xv = 0),
      (this.Mv = 0),
      (this.wv = -2),
      (this.kv = mc),
      (this.Tv = 0),
      (this.Lv = 0),
      (this.Sv = 0),
      (this.Cv = 0),
      (this.vv = 0),
      (this.Iv = ""),
      (this.Rv = i),
      (this.Ov = this.kv[this.Tv]),
      (this.Lv = 30);
    const s = new bt(this);
    (s.image = ht.images.hh.ft()),
      (s.x = 0),
      (s.y = 0),
      (s.width = 36),
      (s.height = 64),
      (s.ii = 18),
      (s.si = 32),
      (this.Bh = s);
  }
  static Nh(t) {
    return new gc(t.x + t.width / 2, t.y + t.height / 2, st.mh(t, "door"));
  }
  Ph() {
    const t = zc.Ah;
    if (((this.xv = t.Xv), this.xv)) {
      const h = zc.Zh[this.Rv],
        i = (h.x + 8) >> 4,
        s = (h.y + 8) >> 4,
        a = zc.jv.base;
      a.kh(i, s, 0), a.kh(i + 1, s, 0);
      const r = zc.yv;
      r.kh(i, s, 0),
        r.kh(i + 1, s, 0),
        (t.y -= 4),
        (zc.ph.Ev = c("}tÙOb+)È6\rPæ¸#òÍ", oc));
    }
  }
  st(t) {
    if (!this.xv) return;
    super.st(t);
    const h = zc.Ah,
      i = h.x - this.x;
    if (
      (this.Mv ||
        this.Pv !== void 0 ||
        (60 >= i && i >= -60) ||
        (0.9 > Math.random() &&
          (this.Iv.length > 0 && (this.Iv += "\n"),
          (this.Iv +=
            this.Ov.messages[
              Math.floor(Math.random() * this.Ov.messages.length)
            ])),
        (this.Pv = this.kv[++this.Tv]),
        this.Pv === void 0 && (this.Mv = 1),
        (this.Cv = i > 0 ? 1 : -1),
        (h.x = this.x)),
      this.Mv)
    )
      if ((this.Lv++, (this.wv += t), 9 > this.wv))
        7.5 > this.wv
          ? 7 > this.wv ||
            ((h.Fv = 1),
            m.i(X.X, 1),
            m.i(X.Y, this.Iv),
            ot.ci(
              () => {},
              () => {}
            ))
          : (this.Cv = 1);
      else {
        12.25 > this.wv
          ? 10 > this.wv || ((this.vv -= 100 * t), (this.Sh += this.vv * t))
          : (it.nh = "newspaper.html?him"); // ORIGINAL: c("¬þÆÞé÷ß\t¿)D[ªt{ÀQáU¢h\\óè¼<ÁÞ+", dc)
        const h = 1 - (S.G % 0.15) * 3;
        (this.Cv = h),
          (this.Sv = h),
          ht.Lt.Et.ft(),
          G.xt(ht.Lt.Et) || G.At(ht.Lt.Et);
      }
    else
      this.Pv !== void 0
        ? (this.Lv++,
          30 > this.Lv ||
            ((this.Lv = 30), (this.Ov = this.Pv), (this.Pv = void 0)))
        : this.Lv > 0 && this.Lv--;
    (this.Sv += 0.1 * (this.Cv - this.Sv)),
      (this.Bh.x = Math.floor(Math.abs(this.Sv) * 3 + 0.5) * 36),
      (this.Bh.y = 0 > this.Sv ? 64 : 0),
      (this.y = this.Sh + Math.sin(S.G * 0.3) * 5);
  }
  Bv(t, h, i, s) {
    const a = t.measureText(h);
    t.fillText(h, i - a.width / 2, s);
  }
  oh(t) {
    if (((t.fillStyle = "white"), (t.font = "8px Arial"), !this.xv)) return;
    super.oh(t),
      this.Mv &&
        this.Bv(
          t,
          c('"XÒ6" ýÍ¤\nQò[ÌÃjLÇPðÔ\0åøkò\b,Î_SsæÅ"öSÞÈ', dc).substring(
            0,
            Math.max(0, Math.floor(7 * (this.wv - 0.5)))
          ),
          this.x,
          this.y - 70
        );
    const h = Math.max(0, this.Lv);
    if (30 > h) {
      const i = 8 + h * 0.2;
      (t.fillStyle = `rgba(255, 255, 255, ${Math.max(1 - h / 30, 0)})`),
        (t.font = i + "px Arial"),
        this.Bv(t, this.Ov.Ov, this.x, this.y - 70),
        this.Bv(t, this.Ov.negative, this.x - 80, this.y + 80),
        this.Bv(t, this.Ov.Av, this.x + 80, this.y + 80);
    }
  }
}
class vc extends at {
  constructor(t, h) {
    super(), (this.frame = 0), (this.Dv = t), (this.Kv = h);
  }
  st(t) {
    (this.frame += t * 15),
      2.25 > this.frame ||
        (it.nh = c('¡PÁ¸\v?¬9t-S8"ÔtJß^AÚsó[', "Ë§3ªã´ï£Qàóq¿®ná"));
  }
  oh(t) {
    if (this.frame >= 2) return;
    L.D();
    const h = ht.images.Dt.ft();
    t.drawImage(
      h,
      Math.floor(this.frame) * 24,
      0,
      24,
      48,
      this.Dv - 12 + this.frame * 4,
      this.Kv - 40,
      24,
      48
    );
  }
}
const bc = "ØJ\n£ó¦aXJ Kp<h$éïZÞ\b¯-ÒÙÐ",
  uc = c("V@hk¨ª*-Ê3Ì]è2×ó", bc);
class lc extends mt {
  constructor(t, h, i) {
    super(t, h),
      (this.cv = 0),
      (this.Vt = 0),
      (this.sv = 0),
      (this.Gv = 1),
      (this.Vv = 1),
      (this.Uv = 0),
      (this.qv = 0),
      (this.Nv = 0),
      (this.$v = 0),
      (this.Qv = 0),
      (this.Jv = 0),
      (this._v = 0),
      (this.zv = i);
    const s = new gt(this);
    (s.x = -12), (s.y = -6), (s.width = 24), (s.height = 12);
    const a = new bt(this);
    (a.image = ht.images.Gt.ft()),
      (a.width = 48),
      (a.height = 96),
      (a.ii = 24),
      (a.si = 94),
      (a.ai = 0.5),
      (a.ri = 0.5),
      (this.Eh = s),
      (this.Bh = a);
  }
  static Nh(t) {
    const h = new lc(t.x, t.y, st.mh(t, "switch"));
    return t.name === uc && (h.cv = 1), h;
  }
  Zv() {
    this.Bh.image = this.Vt ? ht.images.Vt.ft() : ht.images.Gt.ft();
  }
  Ph() {
    (this.Vt = this.zv !== void 0 && !!zc.Ah.Si[this.zv]),
      zc.yv.kh(this.x >> 4, this.y >> 4, this.cv ? 1 : 0),
      this.Zv();
  }
  Fh() {
    (this.Vt || this.sv) && (this.cv = 1);
  }
  Dh() {
    if (!this.cv) {
      if (this.sv) return void (sn.wo = new vc(zc.Ah.x - ct.x, zc.Ah.y - ct.y));
      this.Vt ||
        (this.zv !== void 0 &&
          (G.At(ht.Lt.$t),
          (this.Gv = 3),
          (this.Vt = 1),
          this.Zv(),
          (zc.Ah.Si[this.zv] = 1)));
    }
  }
  tb(t) {
    (this.Uv -= t),
      this.Uv > 0 ||
        ((this.Vv = Math.random() * 1 + 0.5),
        (this.Uv = Math.random() * 0.5 + 1));
  }
  hb(t) {
    (this._v -= t),
      this._v > 0 || (this.ib(), this.sb(), this.ab(), this.rb(this.Qv * t)),
      (this.Vv = 1.5);
  }
  st(t) {
    if (this.cv) return;
    super.st(t),
      this.sv ? this.hb(t) : this.tb(t),
      (this.Gv += 0.03 * (this.Vv - this.Gv)),
      (this.qv = (this.qv + this.Gv * 10 * t) % 8);
    const h = Math.floor(this.qv),
      i = this.Bh;
    (i.x = (h % 3) * 48), (i.y = 96 * Math.floor(h / 3));
  }
  oh(t) {
    this.cv || super.oh(t);
  }
  eb() {
    this.cb.push([zc.Ah.x, zc.Ah.y]);
  }
  nb(t, h, i) {
    const s = this.fb;
    s.push([h, i, t[0] * h + t[1] * i, h * zc.Ah.x + i * zc.Ah.y]),
      4 > s.length || s.shift();
  }
  ob() {
    const t = this.x,
      h = this.y,
      i = zc.Ah.x - t,
      s = zc.Ah.y - h,
      a = Math.sqrt(i * i + s * s);
    if (16 > a) return 1;
    const r = i / a,
      e = s / a;
    for (let c = 16; a > c; c += 8) if (!zc.hi(t + r * c, h + e * c)) return 0;
    return 1;
  }
  ib() {
    if (((this.Jv *= 0.8), this.ob()))
      for (const t of this.fb) {
        const h = t[0] * zc.Ah.x + t[1] * zc.Ah.y,
          i = h - t[3];
        0 > i && ((this.Jv -= i), (t[3] = h));
      }
    else (this.Jv = 0), (this.fb = []);
    this.Jv > 6 && ((this.cb = this.cb.slice(this.cb.length - 1)), this.mb());
  }
  gb() {
    const t = this.cb,
      h = t.length - 1,
      i = zc.Ah.x - t[h][0],
      s = zc.Ah.y - t[h][1];
    return Math.sqrt(i * i + s * s) > 24;
  }
  sb() {
    this.gb() && this.eb();
  }
  ab() {
    const t = zc.Ah.x - this.x,
      h = zc.Ah.y - this.y;
    let i = 50,
      s = 0.1;
    Math.sqrt(t * t + h * h) > 64 && ((i = 250), (s = 0.025)),
      this.Jv > 5 && ((i = 250), (s = 0.12)),
      this.Qv > i && (s = 0.2),
      (this.Qv += (i - this.Qv) * s);
  }
  rb(t) {
    const h = this.cb;
    for (; t > 0; ) {
      const i = h[0][0],
        s = h[0][1],
        a = this.Nv,
        r = this.$v,
        e = a * t,
        c = r * t,
        n = (i - this.x) * a + (s - this.y) * r;
      if (n - (e * a + c * r) > 0) {
        (this.x += e), (this.y += c);
        break;
      }
      {
        if (((t -= -n), (this.x = i), (this.y = s), this.mb())) break;
        const e = h[h.length - 1];
        if (e !== void 0) {
          const t = h[h.length - 2];
          let i = a,
            s = r;
          if (t !== void 0) {
            (i = e[0] - t[0]), (s = e[1] - t[1]);
            const h = Math.sqrt(i * i + s * s);
            h > 0 && ((i /= h), (s /= h));
          }
          this.nb(e, i, s);
        }
      }
    }
  }
  mb() {
    const t = this.cb;
    let h = 0;
    for (;;) {
      const i = t[0][0] - this.x,
        s = t[0][1] - this.y,
        a = Math.sqrt(i * i + s * s);
      if (a > 1e-6) {
        (this.Nv = i / a), (this.$v = s / a);
        break;
      }
      if (h) return (this.Nv = 0), (this.$v = 0), 1;
      t.shift(), t.length === 0 && (this.eb(), (h = 1));
    }
    return 0;
  }
  rv(t) {
    this.sv ||
      (zc.yv.kh(this.x >> 4, this.y >> 4, 1),
      (this.sv = 1),
      (this._v = t),
      (this.cb = []),
      (this.fb = []),
      (this.Qv = 150),
      this.eb(),
      this.mb(),
      (ct.Yh = 9),
      (this.Bh.image = ht.images.Ut.ft()),
      (zc.ov = c("ÇG]tñ¹Gv<,!sG/", bc)),
      G.At(ht.Lt.Jt));
  }
}
const Xc = "ïI\\Ùï¸½ÆÆ~&k2",
  Yc = "o;ªfQSÈaýÁÊÎKÚ\r3PÙBUAP±6",
  Hc = "!ð \\lÜU]ú6Ó\váeFÓ",
  Wc = [
    { Sn: c("\"Z'ÈdY±-µ\\ñ)qÓ·eFûó¯Lá{ºÒ¦ÔW", Xc), length: 5 },
    { Sn: c(".¼[Gø[Âàµ¤,?îðØ»Öm¾ÀõP¤9õ¿÷)9ê", Xc), length: 5 },
    {
      Sn: c(
        "ÌÿA$^Lß)VkCº« ]\nuIÅ'R`Ðèn+jè*.eÛkK¦¨2µÀ_*,Sô¾Í\0D0³ óA*¨4}ç9ÆæòÉ\fÚÊÌÿÐÕL[?è¿ÁÈþ5}&²o/-ÀY",
        Xc
      ),
      length: 12,
    },
    {
      Sn: c(
        "+(më/7vÎ×ËêÃe¥\túíÅ°O~ì;bIaØiÍ/ÜøóQÂ+QV\roö¤)) C²Â¬ð]¯ñnE%7Nû!¤Å+\bíÈ§¯-º¹°ÅØ,\b\0tÇÑ¶+¯k\\n`÷",
        Xc
      ),
      length: 14,
    },
    { Sn: c("ÁpIé°Ý\f9`,ôkXMÈçß¦\0@Ðõ)=àPF", Yc), length: 6 },
    {
      Sn: c("ã8­¯e6ð÷DìÑUSÙ\v{Ò:rÂªK¸ºXOÉcü{½yHAhQ®ctiòä#ëòµ2ææÐ", Yc),
      length: 8,
    },
  ],
  pc = [
    {
      Sn: c(
        "÷¡Uú`bû@NÓÉØ´¨ev\tÍ't&\f§~¹¿8Ûú.ö1âúÛÍqQ,ÊR¤¬%FL\fnÛF?ã0ÔøsáacuuøòÏLû¿±»£ìÝö1ød¬Bñ*Ý|éúl?Ê",
        Yc
      ),
      length: 14,
    },
  ],
  Oc = [
    {
      Sn: c(
        "iuÊ0>«û^ÅJ²)hdª}Lk¯QèãÔy¦«úãew%\fÅ#ç2ªnK¶Wà¼xxpá¦×Ðj*¡Q$ræ1þzÑë÷æJ=HJëhT)!X8gV4­ºþp1ç<ó ¶N²oõð¼5¨¤\f",
        Yc
      ),
      length: 16,
    },
    { Sn: c("ëW>:øNeÆyi¥ðUìdìs65yçË\bV¦)#`'ÒbÕæâô½+ÿ", Yc), length: 9 },
    { Sn: c("èªÄëÈ«ÌìF¾1Äùák]vH%yCwô", Yc), length: 5 },
    { Sn: c("\vhÊiøãöÓÊ3Ô²ÕóWÝ¼±[®\n®HU)sÞ5ª²ü", Hc), length: 6 },
  ];
class Ac extends mt {
  constructor(t, h, i, s) {
    if (
      (super(t, h),
      (this.bb = 0),
      (this.ub = 0),
      (this.lb = 0),
      (this.Xb = []),
      (this.Yb = 0),
      (this.Hb = 0),
      (this.Wb = 0),
      (this.pb = 0),
      s)
    )
      this.Ct = new ut(this.x, this.y, 0.74);
    else {
      const t = new bt(this);
      (t.width = 24),
        (t.height = 48),
        (t.ii = 12),
        (t.si = 40),
        (t.image = ht.images.It.ft()),
        i ? ((t.x = 48), (t.y = 48)) : ((t.x = 0), (t.y = 0)),
        (this.Bh = t);
    }
    (this.Ob = s), (this.Ab = i);
  }
  Ph() {
    if (!this.bb)
      if (((this.bb = 1), (this.ub = -2), this.Ob))
        (this.lb = 4.5), (zc.Ah.xb = 1);
      else if (this.Ab) {
        zc.Ah.Mb = 1;
        const t = zc.av[c(" e¦)¾=/¯Ôâ1þÆí@õY)ÜeD\\äbá", Hc)],
          h = zc.av[c("ò¹eîêUØøÕ}¯vå½¥Øï#²8$(", Hc)];
        (t.Uh = 0.9), (t.qh = h.id);
        const i = zc.av[c('ÒÛAAK×W9ø}ÂÖ­;w#ó\r6ÁKWH\r¬"D', Hc)];
        (zc.av[c("®3è­LüTÏ-Á lÉÍÏ°²ÝÛ(@ï½â°!Ì¶", Hc)].x += 16),
          (i.y -= 16),
          (this.Xb = []),
          (this.lb = 0),
          Wc.forEach((t) => {
            this.Xb.push(t), (this.lb += t.length);
          }),
          (this.Yb = 4),
          (this.Hb = 7),
          zc.Ah.xb &&
            (this.Hb++,
            pc.forEach((t) => {
              this.Xb.push(t), (this.lb += t.length);
            })),
          Oc.forEach((t) => {
            this.Xb.push(t), (this.lb += t.length);
          });
      } else (this.lb = 38), (zc.Ah.xb = 1);
  }
  st(t) {
    if (this.lb > this.ub) {
      const h = 0 > this.ub;
      this.ub += t;
      const i = h && this.ub >= 0;
      (zc.Ah.tv = 1),
        this.Ob
          ? ((zc.Ah.hv = -1), i && G.At(ht.Lt._t))
          : this.Ab && this.ub >= 0
          ? ((this.pb += t),
            this.Xb[this.Wb].length > this.pb ||
              (this.Xb.length - 1 > this.Wb &&
                ((this.pb -= this.Xb[this.Wb].length), this.Wb++)),
            this.Yb > this.Wb
              ? (zc.Ah.hv = -2)
              : this.Wb >= this.Hb && this.pb > 3 && (zc.Ah.hv -= t * 2))
          : ((zc.Ah.hv = -1), i && G.At(ht.Lt.zt));
    } else zc.Ah.tv = 0;
    this.Ct && this.Ct.st(t);
  }
  oh(t) {
    this.Ct
      ? this.Ct.oh(t)
      : (this.Ab &&
          this.ub >= 0 &&
          ((t.font = "6px Arial"),
          (t.fillStyle = "white"),
          t.fillText(
            this.Xb[this.Wb].Sn.substring(0, Math.floor(this.pb * 15)),
            ct.x + 10,
            ct.y + 10
          )),
        super.oh(t));
  }
  static Nh(t) {
    return new Ac(t.x, t.y, t.name === "mother", t.name === "infarto");
  }
}
const xc = "ë?\\ý\bY=íÓá=g¾\fTQ",
  Mc = "ÆýÅVzÀ9XÃî·Å\fY4£Â,®vX1îÄ",
  wc = "0é«yåÚó\t¯rNS\v.£[Aüaò:pð£ßâ",
  kc = {
    [c("x¥a¥Ùí¶4ÃÔßØÂr", xc)]: vt.Nh,
    [c("è§(ME-O\neî\rXoKµ", xc)]: lt.Nh,
    [c("¤©<8'¼Ê7Õ@¨ÇÞÌ%G#¬ß", xc)]: Xt.Nh,
    [c("Ð)¥rn<¿nqÞwXE}¶z¥so", xc)]: ut.Nh,
    [c("rçvB·éA¢-OEªO0ÛÜ1QMò", xc)]: Yt.Nh,
    [c("¦¹¬ë±%°4T)Jÿ)@B»§ÏìIL`äV!­Õ", Mc)]: Ht.Nh,
    [c("/¸±EK\v§(T¶Ïw", Mc)]: pt.Nh,
    [c("àWÌ{ë¡QÒl\bÃ#´`©p»Ó¦", Mc)]: Ot.Nh,
    [c("æSK2'%`Í0àÝùVã\n5å", Mc)]: Qe.Nh,
    [c(" Íî°9Æ-ðÞ¼ÓJ'¼ñÎïè", wc)]: Je.Nh,
    [c(":ò;5ú\0ôæÕ.>¹÷ÂL|U'", wc)]: _e.Nh,
    [c(":à¦Vð³ûÐZ¿[´T\r]ÿl9u", wc)]: gc.Nh,
    [c("ïl÷À«ÍÝfÚL|\\\\Óî[X=ùÚ", wc)]: xt.Nh,
    [c("£5Î£Úõéã¬½bF°S", wc)]: lc.Nh,
    [c("û8ØüJ²õ¸â\voÆWIv0EµÕ", "rÎ}sýÈK©I{D]¥Tâ°ú\v¨y\fFç¡")]: Ac.Nh,
  };
class Tc {
  constructor(t) {
    (this.objects = []),
      (this.name = t.name),
      (this.id = t.id),
      (this.Mh = st.mh(t, "depth") ?? 0);
    for (const h of t.objects) {
      let t = h.type;
      switch (t) {
        case "":
          break;
        case "player":
          (zc.Ah.x = h.x), (zc.Ah.y = h.y);
          break;
        default:
          const i = kc[t];
          if (i !== null && i !== void 0) {
            const t = i(h);
            this.objects.push(t), (t.wb = this), zc.kb(t, h);
          }
      }
    }
  }
  st(t) {}
  oh(t) {
    for (const h of this.objects) h.enabled && h.oh(t);
  }
}
const Lc = {
    Mh: 20,
    Ah: void 0,
    st(t) {
      this.Ah.st(t);
    },
    oh(t) {
      this.Ah.oh(t);
    },
  },
  Sc = 80,
  Cc = 60,
  Ic = 320,
  Rc = [
    [21, 4, 2],
    [27, 6, 2],
    [36, 9, 3],
    [46, 15, 4],
    [61, 21, 6],
    [81, 29, 10],
    [115, 46, 20],
    [156, 66, 28],
    [198, 85, 40],
    [231, 98, 48],
    [250, 109, 53],
    [255, 110, 53],
    [255, 116, 36],
    [255, 116, 27],
    [246, 116, 0],
    [241, 117, 1],
    [238, 126, 1],
    [235, 141, 3],
    [234, 158, 4],
    [237, 179, 6],
    [240, 198, 9],
    [244, 216, 12],
    [248, 232, 20],
    [245, 243, 59],
    [236, 242, 116],
    [194, 217, 182],
    [92, 166, 243],
    [0, 149, 255],
    [152, 191, 253],
    [246, 248, 255],
  ];
class jc {
  constructor() {
    (this.Tb = 0),
      (this.Lb = 0),
      (this.Sb = 0),
      (this.Cb = 0),
      (this.Ib = document.createElement("canvas")),
      (this.Ib.width = Sc),
      (this.Ib.height = Cc),
      (this.Rb = this.Ib.getContext("2d", { alpha: 1 })),
      (this.framebuffer = this.Rb.createImageData(Sc, Cc)),
      (this.jb = this.Rb.createImageData(Sc, Cc));
  }
  st(t, h, i) {
    const s = i - h;
    let a = 0;
    this.Tb && (a = -(s - this.Lb)),
      (this.Lb = s),
      (this.Sb = h),
      (this.Cb = i),
      (this.Tb = 1);
    const r = this.framebuffer.data;
    for (let e = 0; Cc > e; e++) {
      for (let t = 0; s > t; t++) {
        const h = t * 4 + e * Ic,
          i = s - t;
        r[h + 0] = Math.max(r[h + 0] - 2, Math.floor(Math.random() * 5) + i);
      }
      if (0 > a)
        for (let t = 79; t >= s; t--) {
          let h = t + a;
          r[t * 4 + e * Ic + 0] =
            0 > h || h >= Sc ? 0 : r[(t + a) * 4 + e * Ic + 0];
        }
      else
        for (let t = s; Sc > t; t++) {
          let h = t + a;
          r[t * 4 + e * Ic + 0] =
            0 > h || h >= Sc ? 0 : r[(t + a) * 4 + e * Ic + 0];
        }
    }
    for (let e = 0; 1 > e; e++)
      for (let t = 78; t >= 0; t--)
        for (let h = 0; Cc > h; h++) {
          const i = Math.round(Math.random() * 3) & 3,
            s = r[t * 4 + h * Ic + 0];
          r[(t + 1) * 4 + Math.max(Math.min(h - i + 1, 59), 0) * Ic + 0] =
            s > 0 ? s - (i & 1) : 0;
        }
    for (let e = 0; Cc > e; e++)
      for (let t = s; Sc > t; t++) r[t * 4 + e * Ic + 0] -= 0.05 * (t - s);
  }
  oh(t) {
    const h = this.framebuffer.data,
      i = this.jb.data;
    for (let s = 0; i.length > s; s += 4) {
      const t = h[s + 0];
      if (t > 0) {
        const h = Rc[Math.min(t, Rc.length - 1)];
        (i[s] = h[0]), (i[s + 1] = h[1]), (i[s + 2] = h[2]), (i[s + 3] = 255);
      } else i[s + 3] = 0;
    }
    this.Rb.putImageData(this.jb, 0, 0),
      t.drawImage(this.Ib, 0, 0, Sc, Cc, 0, 0, 320, 240);
  }
}
const yc = 'zÏZ¸é"|ÅD+\r¤èí!ñC2âò',
  Ec = "ÚÇê­-ÖÀbcâ*ÈHÆ¾&ÝÅþ­·©ÎÆ^",
  Pc = "ìN«üëtK8QX8àÉöA",
  Fc = "níg5dÔ3ÑMIv",
  Bc = "×ÃÂû-^¾ºÀWÒ\r¹Á5¼.7",
  Dc = 208,
  Kc = [
    { Sn: c("V(Êc8$to\f9U(ß\t$\fÙÞ(:!î", yc) },
    { Sn: c("ÿ)<wÔ´-rp_»iâäx4QûÌP¯ÊãûAX8", yc) },
    { Sn: c("®é¤½SDYK(ÂÂa%Â²lúFºb2ÍOòÅr«\t¨ªÌ²H¡m]i[", yc) },
    { Sn: c("¦m\"àâ×ÊußâÞÔ\nEnkçÏM Kü5\t}â()ãxriè'ñ%I¤-[Ç,Ü", Ec) },
    { Sn: c(";Õ)¦ëºî\térvnäÙê½Ãwk}l:íÍÒµÙmg(e:p\nÅºÈûê»³hM¸TÄD}~lÉãã", Ec) },
    { Sn: c("FÖµLù´jT¿»·½ìä±¢àåðì6+¥ÌÖAuº}6\0ð", Ec) },
    { Sn: c("Ôæ2¥H¤};O\b$Áðx#Äå#Q«(:´`?ÐZè`", Ec) },
    { Sn: c('¹\\Éÿ?8 ¦.¯Ì"57tË²ÜÛ:°`6\0§', Pc), type: 3 },
    { Sn: c("½T÷.¦·ûIÕ\vàSÕòà¡4¡F¿«kkË9ô£ôÀSh\0%Ïü_R£ Q", Pc), type: 2 },
    { Sn: c("ËÊ?ýV¿¾Å¯áyO·øÊü9¨¼þ°¾zUIx", Pc), type: 3 },
    {
      Sn: c("o^c¹9ÜÈãÇò×5°1Qáóï¾²ÓÄwûÁã¹²C;È\r\nÝÑqº­KÌðnf\nJ-äeX%¬Û", Pc),
      type: 3,
    },
    { Sn: c("85\rktâµS`>Ñô!RÚN;çIj\vWRuÃní< ´Àð¥^Æ", Pc), type: 3 },
    { Sn: c('.ÐhD"gÒWkü{LqíOÈ«|', Pc), type: 3 },
    { Sn: c("ómã}ÔÏÝ,¡ð}Mïÿw\0\v»Ù´QÊ¬ýä¡ECÇ", Fc) },
    { Sn: c("(ßa1lÆ¨Ã¢W8ï;\n@", Fc), type: 3 },
    { Sn: c("¤cQò/´\r,>Ý\n¥¡ª>uL7@\bv", Fc), type: 3 },
    { Sn: c("¤Ü®%ÆÃHý¨eÕ¹Æ®qÁÀ¥ÁÈa¨", Fc), type: 3 },
    { Sn: c("äPç¹Þ²ð$^¡.í.ÈwòÐf", Fc), type: 3 },
    { Sn: c("¦#¡·¥wLÄûñ8î\tcT", Bc), type: 3 },
    { Sn: c("jètãÓ¤ÅÁxìhO-}=", Bc), type: 3 },
    { Sn: c("Ò0zCDñB»/úf\\ó¯5", Bc), type: 3 },
  ];
class Gc extends at {
  constructor(t = 0) {
    super(),
      (this.yb = 56),
      (this.Eb = 200),
      (this.Pb = 0),
      (this.Fb = 0),
      (this.Bb = 0),
      (this.Db = 0),
      (this.Kb = 1),
      (this.Gb = 0),
      (this.Vb = 0),
      (this.Ub = 0),
      (this.qb = 1),
      (this.Nb = 0),
      (this.$b = 400),
      (this.Qb = 0),
      (this.Jb = 0),
      (this._b = 0),
      (this.zb = 0),
      (this.Zb = []),
      (this.tu = []),
      (this.hu = 0),
      (this.iu = 0),
      (this.su = 0),
      (this.bf = t),
      (this.Zg = ht.sh(t)),
      t &&
        ((this.au = new jc()),
        this.Zb.push({ x: 0, width: 32 }),
        (this.hu = this.Zb[0].width * 128),
        (this.iu = Dc));
  }
  ht() {
    gh.ka(c("ç¿úÅ(>åº½e´;&/27`", Bc));
  }
  fh() {}
  ru() {
    if (this.bf) {
      for (let t = 0; this.Zb.length > t; ) {
        const h = this.Zb[t];
        if (h.x >= this.Gb - h.width * 128) break;
        this.Zb.splice(t, 1);
      }
      for (let t = 0; this.tu.length > t && this.Gb - 64 > this.tu[t].x; )
        this.tu.splice(t, 1);
      if (this.Gb + 320 > this.hu) {
        const t = 0.2 - this.su * 0.18;
        if (Math.random() < t) {
          const t = this.hu + 64,
            h = Math.random() > 0.5 ? 2 : 1;
          this.Zb.push({ x: t, width: h }),
            (this.hu = t + h * 128),
            (this.iu = Dc);
        } else {
          const t = 48 + this.su * 32,
            h = 64 + this.su * 64,
            i = this.iu - 48;
          let s = Math.max(64 + Math.random() * 128, i);
          const a = Math.max(s - this.iu, 0) * 0.7 * this.su;
          let r = this.hu + t + Math.random() * (h - t) + a;
          s -= this.su * Math.random() * 24;
          const e = this.su * (Math.random() * 25 - 20),
            c = this.su * Math.random() * 50;
          (s -= e),
            this.tu.push({ x: r, y: s, vv: e, Ga: c }),
            (this.hu = r + 64),
            (this.iu = s + c);
        }
      }
    }
  }
  eu() {
    if (!this.Nb) {
      if (1200 > this.Gb) return;
      (this.Nb = 1), (this.Jb = 2100), gh.ka(c("?«9 <~tà¥%ä=ä7", Bc));
    }
    if (
      ((this.$b += 0.03 * (120 + Math.cos(S.G * 0.3) * 30 - this.$b)),
      this.Gb >= this.Jb)
    )
      switch (
        (Kc.length - 1 > this.Qb && this.Qb++,
        (this.Jb += 900),
        Kc[this.Qb].type)
      ) {
        case 2:
          (this.Vb = 1), (this.Ub = this.Gb - 32);
          break;
        case 3:
          this.su += 0.1;
      }
  }
  cu(t) {
    const h = this.Kb;
    if (h)
      (this.Fb = 0),
        C.N.up &&
          ((this.Fb = -130 - Math.abs(this.Pb) * 0.15),
          this.nu !== void 0 && (this.Fb -= this.nu.vv * 0.1),
          G.At(ht.Lt.ih));
    else {
      let h;
      (h = 0 > this.Fb ? (C.N.up ? 0.6 : 1.4) : 1.8),
        (this.Fb += 500 * t * h),
        (this.Eb += this.Fb * t);
    }
    let i = h ? 0.19 : 0.1,
      s = Math.min(Math.abs(this.Pb) / 200, 1);
    ((C.N.left && this.Pb > 0) || (C.N.right && 0 > this.Pb)) && (s = 0);
    const a = 50 + s * 150;
    (i += 0.15 * s),
      C.N.left
        ? ((this.Pb += (-a - this.Pb) * i), h && (this.Db = 1))
        : C.N.right
        ? ((this.Pb += (a - this.Pb) * i), h && (this.Db = 0))
        : ((this.Pb *= h ? 0.86 : 0.97),
          5 > Math.abs(this.Pb) && (this.Pb = 0)),
      h
        ? 10 > Math.abs(this.Pb)
          ? (this.Bb = 0)
          : ((this.Bb += t * (5 + Math.abs(this.Pb) * 0.15)),
            1 > this.Bb && (this.Bb = 1),
            4 > this.Bb || (this.Bb = 1))
        : (this.Bb = 4),
      (this.yb += this.Pb * t),
      (this.Eb += this.Fb * t);
  }
  fu(t) {
    if (this.bf) {
      (this.Kb = 0), (this.nu = void 0);
      for (const i of this.tu) i.vv += i.Ga * t;
      const h = this.Fb;
      if (h >= 0) {
        const i = this.Eb - h * t * 2;
        for (const t of this.Zb) {
          const h = 200;
          this.yb > t.x - 6 &&
            t.x + t.width * 128 + 6 > this.yb &&
            this.Eb >= h &&
            Dc >= i &&
            ((this.Kb = 1), (this.Eb = h));
        }
        for (const h of this.tu) {
          const s = h.y - 8;
          this.yb > h.x - 6 &&
            h.x + 64 + 6 > this.yb &&
            this.Eb >= s &&
            h.y >= i &&
            ((this.Kb = 1), (this.nu = h), (this.Eb = s + h.vv * t));
        }
      }
      for (const i of this.tu) i.y += i.vv * t;
    } else (this.Kb = this.Eb >= 200), this.Kb && (this.Eb = 200);
    this.Kb && (this.Fb = 0);
  }
  ou(t) {
    const h = this.yb,
      i = this.Pb;
    if (i > 0) {
      const s = this.Gb + 320 / 3,
        a = s + 320 / 6;
      a + 16 > h
        ? a > h
          ? h > s && (this.Gb += (i * t) / 2)
          : (this.Gb += i * t)
        : (this.Gb += (i * t) / 2),
        (this.Gb = Math.floor(this.Gb) + (h - Math.floor(h)));
    }
    this.Gb + 8 > h && ((this.yb = this.Gb + 8), 0 > i && (this.Pb = 0));
  }
  du() {
    m.i(X.W, 1),
      gh.ka(void 0),
      L.B(),
      alert(
        c(
          "`_¡ \"o±.GÉ·D3Ú¸§ã8°Ä'øµ9ôô»ÎâR5©§µ¼ÌðH]Àdíõé|N \\;¿XÍ_ÙfV|ÒDj¾óÙ¥N?TSK\fÕÖ6S7\vð§\f¸xRS7LA\tzéY>¢à|§& L³Hñ¤*pÎ`Óçê]<H",
          "G¥á\b²6ï*\\\\ñµãÜ"
        )
      ),
      (it.nh = "index.html");
  }
  st(t) {
    if ((this.qb > 0 && this.cu(t), this.ou(t), this.ru(), this.fu(t), this.bf))
      if ((this.eu(), this.Vb)) {
        if (
          (this.Gb + 480 > this.Ub && (this.Ub += 185 * t),
          this.Gb + 60 > this.Ub && (this.Ub += 20 * t),
          this.au.st(t, Math.floor(this.Gb / 4), Math.floor(this.Ub / 4)),
          this.Ub > this.yb && (this.qb -= 1 / 30),
          -2 > this.qb)
        )
          return void this.du();
      } else this.qb += 0.002;
    this.Eb > 304
      ? this.du()
      : ((this.zb = -this.su),
        this.Eb > Dc && (this.zb = 3),
        (this._b += 0.15 * (this.zb - this._b)),
        -1 > this._b && (this._b = -1),
        this._b > 1 && (this._b = 1));
  }
  Bv(t, h, i, s) {
    const a = t.measureText(h);
    t.fillText(h, i - a.width / 2, s);
  }
  oh(t) {
    const h = ht.images.ah.ft();
    if (((t.imageSmoothingEnabled = 0), L.D(), this.bf)) {
      if (this.Nb) {
        const h = Math.floor(Math.abs(this._b) * 3 + 0.5) * 36,
          i = 0 > this._b ? 64 : 0;
        t.drawImage(
          ht.images.hh.ft(),
          h,
          i,
          36,
          64,
          124,
          Math.floor(this.$b) - 64,
          72,
          128
        ),
          (t.fillStyle = "white"),
          (t.font = "8px Arial"),
          this.Bv(t, Kc[this.Qb].Sn, 184, 32);
      }
      for (let h = 0; this.Zb.length > h; h++) {
        const i = this.Zb[h],
          s = Math.floor(i.x) - Math.floor(this.Gb);
        for (let h = 0; i.width > h; h++)
          t.drawImage(ht.images.rh.ft(), s + h * 128, Dc, 128, 32);
      }
      for (let h = 0; this.tu.length > h; h++) {
        const i = this.tu[h],
          s = Math.floor(i.x) - Math.floor(this.Gb),
          a = Math.floor(i.y);
        t.drawImage(ht.images.eh.ft(), s, a, 64, 16);
      }
    } else (t.fillStyle = "#222"), t.fillRect(0, Dc, 320, 32);
    t.drawImage(
      h,
      Math.floor(this.Bb) * 16,
      this.Db ? 16 : 0,
      16,
      16,
      Math.floor(this.yb) - 8 - Math.floor(this.Gb),
      Math.floor(this.Eb) - 7,
      16,
      16
    ),
      this.Vb && this.au.oh(t);
  }
}
class Vc extends at {
  constructor(t, h, i, s, a, r, e) {
    super(),
      (this.mu = null),
      (this.gu = []),
      (this.Bh = t),
      (this.vu = h),
      (this.bu = i),
      (this.uu = s),
      (this.lu = a),
      (this.Xu = r),
      (this.Yu = e);
    const c = 24;
    for (let n = 0; c > n; n++) {
      const t = c - n - 1,
        h = t + 1;
      this.gu.push({
        Hu: (t * 0.75) / c,
        Wu: 1 + (h * 1) / c,
        pu: (h * 0.2) / c,
        Ou: (h * 0.05) / c - 0.3,
      });
    }
  }
  ht() {
    (this.mu = sn.Au),
      (sn.Au = null),
      gh.ka(c("TÏéÔ}øóôh>ÎÒòwóêö¦«", 'æ->ea9aï2¿ñÏ1´½\'"­Õòåº§µk"Ó'), 0);
  }
  st(t) {
    if (gh.ja()) {
      for (const h of this.gu) (h.Hu += h.pu * t), (h.Wu += h.Ou * t);
      gh.Ma && (sn.wo = new Gc(1));
    }
  }
  xu(t, h, i) {
    if (0 > i) return;
    t.globalAlpha = Math.min(1, i);
    const s = this.mu;
    let a = 0,
      r = 0,
      e = s.width,
      c = s.height;
    const n = e / 320,
      f = this.uu * n,
      o = this.lu * n,
      d = this.Xu * n,
      m = this.Yu * n;
    1 > h
      ? ((a += (f - a) * h),
        (r += (o - r) * h),
        (e += (d - e) * h),
        (c += (m - c) * h))
      : ((a = f + (f + d / 2 - f) * (h = 1 - 1 / h)),
        (r = o + (o + m / 2 - o) * h),
        (e = d * (1 - h)),
        (c = m * (1 - h))),
      t.drawImage(s, a, r, e, c, 0, 0, 320, 240);
  }
  oh(t) {
    L.D();
    let h = -1e3;
    for (const r of this.gu) this.xu(t, r.Hu, r.Wu), (h = Math.max(h, r.Wu));
    t.globalAlpha = Math.min(Math.max(h + 0.5, 0), 1);
    const i = this.Bh,
      s = i.width,
      a = i.height;
    t.drawImage(
      i.image,
      i.x,
      i.y,
      s,
      a,
      Math.floor(this.vu) - i.ii * i.ai,
      Math.floor(this.bu) - i.si * i.ri,
      s * i.ai,
      a * i.ri
    ),
      (t.globalAlpha = 1);
  }
}
const Uc = [0, 1, 1, 1, 2, 2, 3],
  qc = [
    0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2,
    2, 2, 2, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7,
  ];
class Nc extends mt {
  constructor(t, h) {
    super(t, h),
      (this.Yv = 0),
      (this.Hv = 0),
      (this.Wv = 0),
      (this.pv = 0),
      (this.ev = 0),
      (this.Wi = 0),
      (this.Mu = F.et === 1),
      (this.qv = 0),
      (this.wu = 0),
      (this.ku = [ht.Lt.jt, ht.Lt.yt]),
      (this.Tu = F.et === 3 ? [ht.Lt.qt, ht.Lt.Nt] : []),
      (this.Lu = 0),
      (this.tv = 0),
      (this.hv = 0),
      (this.ih = 0),
      (this.Su = 0),
      (this.Cu = 0),
      (this.Iu = 0),
      (this.Xv = 0),
      (this.Fv = 0),
      (this.Ru = 0),
      (this.ju = 1),
      (this.lv = 0),
      (this.Mb = 0),
      (this.xb = 0),
      (this.Oh = 0),
      (this.yu = -1),
      (this.nv = 0),
      (this.Eu = -1),
      (this.Pu = 0),
      (this.Kt = 0),
      (this.Fu = 0),
      (this.Bu = 0),
      (this.Du = 0),
      (this.Ku = 0),
      (this.Gu = 0),
      (this.Vu = 0),
      (this.Uu = 0),
      (this.Si = {});
    const i = new bt(this);
    this.Bh = i;
  }
  iv(t, h) {
    this.ih || ((this.ih = 1), (this.Su = t), (this.Iu = -150), (this.Cu = -h));
  }
  rv(t = 0) {
    this._v = t;
  }
  qu() {
    (this._v = void 0), (this.Oh = 0), (this.yu = -1);
  }
  fv(t, h) {
    (this.Nu = t), (this.Eu = 0), (this.Pu = h);
  }
  dv(t, h, i, s, a, r) {
    (this.Kt = 1),
      (this.Fu = t),
      (this.Bu = h),
      (this.Du = -1),
      (this.Ku = i),
      (this.Gu = s),
      (this.Vu = a),
      (this.Uu = r);
  }
  $u() {
    this.qu();
  }
  st(t) {
    if (this.Kt) {
      if (((this.Du += t), this.Du >= 0)) {
        let h = qc[Math.min(Math.floor(this.Du * 12), qc.length - 1)];
        return (
          h !== this.qv &&
            ((this.qv = h),
            h === 4 && (this.Iu = 10),
            h === 5 && (this.Iu = 20),
            h === 6 && (this.Iu = 15),
            h === 7 && (this.Iu = -6)),
          (this.y += this.Iu * t),
          (this.Iu *= 0.77),
          void (
            5 > this.Du ||
            ((sn.Qu = 1),
            (sn.wo = new Vc(
              this.Bh,
              this.x - ct.x,
              this.y - ct.y,
              this.Ku - ct.x,
              this.Gu - ct.y,
              this.Vu,
              this.Uu
            )))
          )
        );
      }
      this.Iu = 0;
    }
    if (this.Fv)
      return (
        (this.Ru += t * 7 * this.ju),
        (this.ju *= 0.995),
        void (16 > this.Ru || (this.Ru -= 4))
      );
    if (this.ih) {
      this.Su > 0 ? (this.ev = 0) : 0 > this.Su && (this.ev = 1), (this.Wi = 0);
      const h = this.Cu;
      return (
        (this.Cu += t),
        void (0 > this.Cu
          ? this.Ju(t, 0)
          : (0 > h && G.At(ht.Lt.ih),
            (this.Iu += 700 * t),
            (this.x += this.Su * t),
            (this.y += this.Iu * t),
            (this.qv = 1),
            this.Iu > 300 &&
              ((this.Iu = 400),
              zc.hi(this.x, this.y - 12) &&
                (G.At(ht.Lt.jt), (this.ih = 0), (this.Cu = 0)))))
      );
    }
    if (this.tv || this.hv > 0) {
      this.yu = -1;
      const h = this.hv * 6;
      return (
        this.tv ? 7 > h && (this.hv += t) : (this.hv -= t),
        void (0 > h
          ? ((this.ev = 0), (this.Wi = 1), this.Ju(t, 0))
          : (this.qv = 4 + Uc[Math.min(Math.floor(h), 6)]))
      );
    }
    if (this.Nu !== void 0)
      return (
        (this.yu = -1),
        (this.Eu += t),
        this.Nu.length * 0.1 + 5 > this.Eu ||
          ((this.Nu = void 0),
          (this.Eu = -1),
          this.Pu &&
            (() => {
              m.i(X.O, 1);
              const t = new De();
              (De.Vm = (320 * (zc.Ah.x - ct.x)) / 320),
                (De.Um = (240 * (zc.Ah.y - ct.y)) / 240 - 12),
                (sn.wo = t),
                (sn.Qu = 1);
            })()),
        (this.Wi = 0),
        void this.Ju(t, 0)
      );
    this._u(t);
  }
  oh(t) {
    const h = this.Bh;
    if (this.Nu !== void 0) {
      (t.font = "8px Arial"), (t.fillStyle = "white");
      const h = this.Nu.substring(0, Math.floor(this.Eu * 10) - 15);
      t.fillText(h, this.x - 100, this.y - 35);
    }
    if (this.Kt && this.Du >= 0)
      (h.image = ht.images.Kt.ft()),
        (h.width = 24),
        (h.height = 48),
        (h.ii = 12),
        (h.si = 40),
        (h.x = this.qv * 24),
        (h.y = 0);
    else if (this.Fv) {
      const t = Math.floor(this.Ru);
      (h.image = ht.images.th.ft()),
        (h.width = 35),
        (h.height = 32),
        (h.ii = 17),
        (h.si = 32),
        (h.x = 35 * (t & 3)),
        (h.y = 32 * (t >> 2)),
        (this.Xv = 0);
    } else if (this.yu !== -1) {
      let t = Math.floor(this.qv) * 32,
        i = 0;
      switch (this.yu) {
        case 0:
          i = 48;
          break;
        case 1:
          i = 96;
          break;
        case 3:
          i = 144;
      }
      (h.image = ht.images.Bt.ft()),
        (h.x = t),
        (h.y = i),
        (h.width = 32),
        (h.height = 48),
        (h.ii = 16),
        (h.si = 40);
    } else {
      let t = Math.floor(this.qv) * 24,
        i = 0;
      this.ev && (i += 48),
        2 > this.qv && this.Wi && (t += 48),
        (h.image = ht.images.body.ft()),
        (h.x = t),
        (h.y = i),
        (h.width = 24),
        (h.height = 48),
        (h.ii = 12),
        (h.si = 40);
    }
    if ((super.oh(t), this.Xv)) {
      const i = this.qv === 1 ? 1 : 0;
      t.drawImage(
        h.image,
        this.Wi ? 120 : 96,
        this.ev ? 48 : 0,
        24,
        48,
        Math.floor(this.x) - 12 + (this.ev ? -i : i),
        Math.floor(this.y) - 40 + i,
        24,
        48
      );
    }
  }
  ti(t) {
    if (t.Jh !== void 0 && t._h !== void 0) {
      const h = t.Qh,
        i = t._h;
      switch (((this.x = t.Jh), (this.y = i), h)) {
        case 1:
          (this.Wi = 1), (this.pv = 1), (this.Yv = 1), (this.Hv = 1);
          break;
        case 3:
          (this.Wi = 0), (this.Wv = 1), (this.Yv = 1), (this.Hv = 1);
          break;
        case 0:
          (this.ev = 1), (this.Hv = 1), (this.Wv = 1), (this.pv = 1);
          break;
        case 2:
          (this.ev = 0), (this.Yv = 1), (this.Wv = 1), (this.pv = 1);
          break;
        default:
          (this.Yv = 1), (this.Hv = 1), (this.pv = 1), (this.Wv = 1);
      }
    } else
      (this.x = t.x),
        (this.y = t.y),
        (this.Yv = 1),
        (this.Hv = 1),
        (this.Wv = 1),
        (this.pv = 1);
  }
  Ju(t, h) {
    let i = 0,
      s = this.wu,
      a = s + t;
    if (
      (this.yu != -1
        ? (3 > s && a >= 3 && (i = 1),
          6 > s && a >= 6 && (i = 1),
          6 > a || (a %= 6))
        : h
        ? 2 > a || ((a %= 2), (i = 1))
        : (a = 0.9),
      i)
    ) {
      let t = zc.ph?.zu ? this.Tu : this.ku;
      (this.Lu = (this.Lu + 1) % t.length), G.At(t[this.Lu]);
    }
    (this.wu = a), (this.qv = Math.floor(this.wu));
  }
  _u(t) {
    let h,
      i,
      s = 0,
      a = 6,
      r = 4,
      e = 2;
    if (this.Mu) {
      (h = 25), (i = 2.5);
      const t = this.lv;
      (h *= 1 + t), (i *= 1 + t * 0.4);
    } else
      (h = 50),
        (i = 5),
        this.Oh && ((h = 120), (i = 11), (a = 8), (r = 6), (e = 5)),
        this.Kt && ((h = 12), (i = 3.5));
    const c = h * t;
    let n = zc.hi(this.x - a, this.y),
      f = zc.hi(this.x + a, this.y),
      o = zc.hi(this.x, this.y - r),
      d = zc.hi(this.x, this.y + e);
    this.ki !== void 0 && this.ki > this.x && ((this.x += 16), (ct.x += 16));
    let m,
      g,
      v = C.N.left,
      b = C.N.right,
      u = C.N.up,
      l = C.N.down,
      X = 0;
    if ((this.Kt && ((X = 1), (m = this.Fu), (g = this.Bu)), X)) {
      const t = this.x - m,
        h = this.y - g;
      (v = t > c),
        (b = -c > t),
        (u = h > c),
        (l = -c > h),
        v || b || (this.x = m),
        u || l || (this.y = g),
        v || b || u || l
          ? this.Kt && (this.Du = -1)
          : this.Kt && ((this.ev = 1), (this.Wi = 1));
    }
    let Y = this.Wv,
      H = this.pv,
      W = this.Yv,
      p = this.Hv;
    this._v !== void 0 &&
      ((this._v -= t),
      this._v > 0 || ((this._v = void 0), (this.Oh = 1)),
      (Y = 1),
      (H = 1),
      (W = 1),
      (p = 1));
    let O = -1;
    u &&
      !Y &&
      (o
        ? ((s = 1), (H = 1), (this.y -= h * t), (this.Wi = 1), (O = 1))
        : l && b && (W = 1)),
      l && !H && (d && ((s = 1), (this.y += h * t), (O = 3)), (this.Wi = 0)),
      v &&
        (W || (n && ((s = 1), (this.x -= h * t)), (this.ev = 1), (O = 0)),
        (p = 1)),
      b && !p && (f && ((s = 1), (this.x += h * t)), (this.ev = 0), (O = 2)),
      (!s && (v || b || u || l)) ||
        ((this.Yv = 0), (this.Hv = 0), (this.Wv = 0), (this.pv = 0)),
      (this.yu = s && this.Oh ? O : -1),
      this.Ju(t * i, s);
  }
}
const $c = 65536;
class Qc {
  constructor() {
    (this.cells = new Map()), (this.Zu = new Map());
  }
  it() {
    this.cells.clear(), this.Zu.clear();
  }
  tl(t, h, i, s, a) {
    const r = $c - (s - h);
    let e = h + i * $c;
    for (let c = i; a > c; c++) {
      for (let i = h; s > i; i++) {
        let h = this.cells.get(e);
        h === void 0
          ? ((h = new Set().add(t)), this.cells.set(e, h))
          : h.add(t),
          e++;
      }
      e += r;
    }
  }
  hl(t, h, i, s, a) {
    const r = $c - (s - h);
    let e = h + i * $c;
    for (let c = i; a > c; c++) {
      for (let i = h; s > i; i++) {
        const h = this.cells.get(e);
        h !== void 0 && (h.delete(t), h.size === 0 && this.cells.delete(e)),
          e++;
      }
      e += r;
    }
  }
  Set(t, h, i, s, a) {
    const r = h >> 7,
      e = i >> 7,
      c = 1 + (s >> 7),
      n = 1 + (a >> 7);
    let f = this.Zu.get(t);
    if (f === void 0)
      (f = { il: r, sl: e, al: c, rl: n }),
        this.Zu.set(t, f),
        this.tl(t, r, e, c, n);
    else {
      const h = f.il,
        i = f.sl,
        s = f.al,
        a = f.rl;
      if (h === r && i === e && s === c && a === n) return;
      let o = h,
        d = s;
      c > s
        ? (this.tl(t, s, e, c, n), (o = r))
        : s > c && this.hl(t, c, i, s, a),
        h > r
          ? (this.tl(t, r, e, h, n), (d = c))
          : r > h && this.hl(t, c, i, s, a),
        i > e ? this.tl(t, o, e, d, i) : e > i && this.hl(t, o, i, d, e),
        n > a ? this.tl(t, o, a, d, n) : a > n && this.hl(t, o, n, d, a),
        (f.il = r),
        (f.sl = e),
        (f.al = c),
        (f.rl = n);
    }
  }
  yh(t) {
    const h = this.Zu.get(t);
    h !== void 0 && (this.hl(t, h.il, h.sl, h.al, h.rl), this.Zu.delete(t));
  }
  el(t, h) {
    const i = this.cells.get((t >> 7) + (h >> 7) * $c);
    return i !== void 0 ? new Set(i) : new Set();
  }
  cl(t, h, i, s) {
    const a = t >> 7,
      r = h >> 7,
      e = 1 + (i >> 7),
      c = 1 + (s >> 7),
      n = new Set(),
      f = $c - (e - a);
    let o = a + r * $c;
    for (let d = r; c > d; d++) {
      for (let t = a; e > t; t++) {
        const t = this.cells.get(o);
        if (t !== void 0) for (const h of t) n.add(h);
        o++;
      }
      o += f;
    }
    return n;
  }
}
const Jc = "G¥á\b²6ï*\\\\ñµãÜ",
  _c = "?P;C^Ú\b&öd1ÙÅEàr×=ßWx";
var zc;
((t) => {
  function h() {
    (() => {
      for (const h of t.nl) h.jh();
      t.Gh.it(), t.fl.it(), t.nl.clear(), (t.Zh = {}), (t.av = {});
    })(),
      (t.ph = void 0),
      (t.ol = void 0),
      s.it(),
      (t.dl = []),
      (t.yv = void 0),
      (t.jv = {}),
      (t.ml = {}),
      (t.gl = []),
      (t.vl = []),
      (t.bl = [Lc]),
      t.Ah !== void 0 && (t.Ah.jh(), (t.Ah = void 0));
  }
  function i() {
    const h = t.Ah.x - 6,
      i = t.Ah.x + 6,
      s = t.Ah.y - 4,
      a = t.Ah.y + 2,
      r = t.Gh.cl(h, s, i, a);
    for (const t of r) {
      if (!t.enabled) continue;
      const r = t.Eh,
        e = t.x + r.x,
        c = t.y + r.y;
      e + r.width > h && i > e && a > c && c + r.height > s && t.Dh();
    }
  }
  (t.ul = h),
    (t.Pg = (i) => {
      if ((h(), typeof i != "object" || i == null)) return;
      (t.Ah = new Nc(32, 32)), (Lc.Ah = t.Ah);
      const s = i;
      for (const h of s.layers)
        switch (h.name) {
          case "rooms":
            f(h);
            break;
          case "walkable":
            t.yv = new dt(h);
            break;
          default:
            switch (h.type) {
              case "tilelayer":
                d(new dt(h));
                break;
              case "objectgroup":
                d(new Tc(h));
            }
        }
      for (const h of t.nl) h.Rh();
      o();
    }),
    (t.st = (h) => {
      if (ft.bi !== void 0)
        return (
          gh.ka(ft.bi, 0),
          void (gh.Ma && (it.nh = "index.html" + c('_@ê)ÈApÐ1ú?Û"', Jc)))
        );
      for (const i of t.bl) i.st(h);
      for (const i of t.ll) i.st(h);
      i(),
        o(),
        ct.st(h, t.Ah.x, t.Ah.y),
        gh.ka(t.ov !== void 0 ? t.ov : t.ph?.Ev);
    }),
    (t.oh = (h) => {
      h.translate(-Math.floor(ct.x), -Math.floor(ct.y)),
        h.translate(ct.Hh, ct.Wh);
      for (const i of t.bl) i.oh(h);
      h.resetTransform(), I.rt(h);
    }),
    (t.nl = new Set()),
    (t.Zh = {}),
    (t.av = {}),
    (t.ll = []),
    (t.Gh = new Qc()),
    (t.fl = new Qc()),
    (t.kb = (h, i) => {
      const s = i.x,
        a = i.y,
        r = i.width,
        e = i.height;
      t.nl.add(h),
        (h.Lh = s),
        (h.Sh = a),
        (h.Ch = r),
        (h.Ih = e),
        t.fl.Set(h, s, a, s, a);
      const c = i.id,
        n = i.name,
        f = i.type;
      c !== void 0 && ((i.id = c), (t.Zh[c] = h)),
        n !== void 0 && ((h.name = n), (t.av[n] = h)),
        f !== void 0 && (h.type = f);
    }),
    (t.Xl = (h) => {
      h.jh(),
        t.nl.delete(h),
        h.id !== void 0 && delete t.Zh[h.id],
        h.name !== void 0 && delete t.av[h.name];
    }),
    (t.Yl = i),
    (t.hi = (h, i) => t.yv.Th(h >> 4, i >> 4) > 0),
    (t.dl = []);
  let s = new Qc(),
    a = c("z4\b$·LDnÌË¾F²pô'&ð;ñ", Jc),
    r = c("dGÏbHù¢üÐ6j§sYyR§·ø&Øá", Jc),
    e = c(")£<yhðPHø5,ÆõÉ¯ò  *6*ð", Jc),
    n = c("B¤\tÁõ/ïZkã{½1%-òÈ©{Pà", Jc);
  function f(h) {
    for (const i of h.objects) {
      const h = {
        id: i.id,
        name: i.name,
        x: i.x,
        y: i.y,
        width: i.width,
        height: i.height,
        Ev: st.mh(i, "music"),
        zu: st.mh(i, "gross") ?? 0,
      };
      t.dl.push(h);
      const a = h.x,
        r = h.y;
      s.Set(h, a, r, a + h.width, r + h.height);
    }
  }
  function o() {
    const h = ((t, h) => {
      const i = s.el(t, h);
      for (const s of i)
        if (t >= s.x && s.x + s.width > t && h >= s.y && s.y + s.height > h)
          return s;
    })(t.Ah.x, t.Ah.y);
    h !== t.ph &&
      ((t.ph = h),
      (() => {
        t.ov !== void 0 && (gh.ka(void 0), (t.ov = void 0));
        for (const h of t.ll) (h.enabled = 0), h.Fh();
        if ((I.ht(), t.ph !== void 0)) {
          const h = t.fl.cl(
              t.ph.x,
              t.ph.y,
              t.ph.x + t.ph.width,
              t.ph.y + t.ph.height
            ),
            i = [];
          for (const s of h) {
            const h = s.Lh,
              a = s.Sh;
            h >= t.ph.x &&
              t.ph.x + t.ph.width > h &&
              a >= t.ph.y &&
              t.ph.y + t.ph.height > a &&
              i.push(s);
          }
          t.ll = i;
          for (const s of t.ll) (s.enabled = 1), s.Ph();
        } else t.ll = [];
        switch (t.ph?.name) {
          case a: {
            I.it();
            const h = t.av[c("ßà\bD+¡?\0Z´¬'¼ÀÝ\nRP¿", _c)];
            t.ph.Ev = h?.Oi ? c("/g`Ú.ë)ý}]Cn`gL2]M`\f", _c) : void 0;
            break;
          }
          case r:
            I.it(), (ct.Yh = 3.5);
            break;
          case e:
            if (!m.h(X.A)) {
              t.yv.kh(60, 55, 0);
              const h = t.jv[c("²HáÞUFçµºÛTÄÙ", _c)];
              h.kh(59, 53, 0), h.kh(60, 53, 0), h.kh(61, 53, 0);
            }
            break;
          case n:
            t.ol?.name === e && (G.At(ht.Lt.Qt), (ct.Yh = 2));
        }
        t.Ah.$u(), (t.ol = t.ph);
      })());
  }
  function d(h) {
    h.name !== void 0 && (t.jv[h.name] = h),
      h.id !== void 0 && (t.ml[h.id] = h),
      h instanceof dt ? t.gl.push(h) : h instanceof Tc && t.vl.push(h),
      t.bl.push(h),
      t.bl.sort((t, h) => t.Mh - h.Mh);
  }
  function g(h, i, s, a) {
    const r = t.jv.base,
      e = t.yv;
    for (let t = 0; a > t; t++)
      for (let a = 0; s > a; a++) r.kh(h + a, i + t, 0), e.kh(h + a, i + t, 0);
  }
  (t.Hl = f),
    (t.Wl = o),
    (t.jv = {}),
    (t.ml = {}),
    (t.gl = []),
    (t.vl = []),
    (t.bl = []),
    (t.Hi = (h, i, s, a) => {
      const r = t.jv.baseUpper;
      r.kh(h, i - 1, s), r.kh(h, i, s + 16), t.yv.kh(h, i, a);
    }),
    (t.pl = g),
    (t.Ol = (t) => {
      g(
        (t.x + 8) >> 4,
        (t.y + 8) >> 4,
        (t.width + 8) >> 4,
        (t.height + 8) >> 4
      );
    });
})(zc || (zc = {}));
class Zc extends at {
  constructor(t, h) {
    super(), (this.Al = rt(t)), (this.Zg = new V(h, this.Al));
  }
  xl(t, h) {
    this.Zg === void 0 &&
      this.Al === void 0 &&
      ((this.Al = rt(t)), (this.Zg = new V(h, this.Al)));
  }
  ht() {
    this.Al !== void 0 && (zc.Pg(this.Al.ft()), (this.Al = void 0));
  }
  fh() {
    zc.ul();
  }
  st(t) {
    zc.st(t);
  }
  oh(t) {
    L.D(), zc.oh(t);
  }
}
const tn = "@W¯ÒW°­\n\n:3$&pÂ",
  hn = "ÅQîN2zr^èÛN=ÓÖz";
var sn;
((t) => {
  (t.Qu = 0), (t.Au = null);
  let h = null;
  function i() {
    try {
      if (it.nh !== void 0)
        return (L.R.hidden = 1), void (document.location = it.nh);
      L.F();
      const s = L.j;
      if (h !== null) (h.width = L.R.width), (h.height = L.R.height);
      else {
        S.U();
        const h = S.V;
        h > 0 &&
          (C.Z(),
          ((h) => {
            I.st(h),
              t.wo !== void 0 &&
                (t.Ml !== void 0 && t.Ml.fh(),
                (t.Ml = t.wo),
                (t.wo = void 0),
                t.Ml.Zg === void 0 && t.Ml.ht());
            const i = t.Ml.Zg;
            if (i !== void 0)
              switch ((i instanceof V && i.st(), i.ct())) {
                case 1:
                  (t.Ml.Zg = void 0), t.Ml.ht();
                  break;
                case 2:
                  throw i.ot();
                case 0:
                  return;
              }
            t.Ml.st(h);
          })(h)),
          (L.K() || h > 0) &&
            ((h) => {
              const i = L.R;
              L.B(), (h.imageSmoothingEnabled = 0);
              const s = t.Ml.Zg;
              if (s !== void 0 && s.ct() === 0)
                return t.Qu && t.Au
                  ? void h.drawImage(
                      t.Au,
                      0,
                      0,
                      t.Au.width,
                      t.Au.height,
                      0,
                      0,
                      i.width,
                      i.height
                    )
                  : void 0;
              if ((t.Ml.oh(h), t.wo === void 0)) (t.Au = null), (t.Qu = 0);
              else if (t.Qu) {
                (t.Au = document.createElement("canvas")),
                  (t.Au.width = i.width),
                  (t.Au.height = i.height);
                const h = t.Au.getContext("2d");
                h?.drawImage(i, 0, 0);
              }
            })(s);
      }
      requestAnimationFrame(i);
    } catch (s) {
      T(s);
    }
  }
  (t.ht = () => {
    L.P(document.getElementById(c("nçõ¸¼qåB3Ü²+fÛL\f5Êi", tn))),
      G.bt(),
      C.P(),
      L.F(),
      L.B(),
      (L.R.hidden = 0),
      (() => {
        switch (F.et) {
          case 0:
            t.wo = new Zc(c("pÝn|2Nýèç\t6m­rØ¢", tn), ht.St());
            break;
          case 1:
            t.wo = new Zc(c("Y8E­ú2§ß\b¢ÈèEN¶­", hn), ht.Zt());
            break;
          case 3:
            t.wo = new Zc(c("býM¤d96±£õb ¦\n<s¥", hn), ht.Ft());
            break;
          case 2:
            t.wo = new Gc();
            break;
          case 4:
            t.wo = new De();
        }
      })(),
      requestAnimationFrame(i);
  }),
    (t.Mo = (t, i) => {
      gh.ka(void 0),
        h !== null && (h.pause(), h.remove(), (h = null)),
        t !== void 0
          ? ((h = document.createElement("video")),
            (h.id = "gameVideo"),
            (h.src = t),
            h.load(),
            (h.loop = 0),
            (h.width = L.R.width),
            (h.height = L.R.height),
            i !== void 0 && (h.onended = i),
            (h.oncontextmenu = (t) => {
              t.preventDefault();
            }),
            h.play(),
            (L.R.hidden = 1),
            document.body.appendChild(h))
          : (L.R.hidden = 0);
    });
})(sn || (sn = {}));
const an = "Ö¿\0ôsE78ÄäZÞù2ÕøØò!´¢{ú<¶\fK{Ê";
let rn = 0,
  en = 0;
(window[c("ùu*A\nÊºß\tU`Éß¤¯fñyÊëí", an)] = () => {
  rn = 1;
}),
  (window[c("¯ÖiµË¢ËYÇ óáÑgDªoX\t¸Ìþ~", an)] = () => {
    if (!rn) return;
    if (en) return;
    en = 1;
    const t = document.getElementById(c("KÂë&Ú4êv añþÛÇR;ªâoþ6ü|ë", an));
    t && (t.hidden = 1);
    try {
      sn.ht();
    } catch (h) {
      T(h);
    }
  });
const cn = "LbX\0&Ã6øü]\bëèzä;b";
window[c(':(7û¸¶6":Å¶s©UJ ¡Â ?XÆ', 'ñ«´Å¸"|\t¤»oô-ëûÂ.¯Y')] = () => {
  if (X.I()) return;
  if (ma()) return;
  const t = document.getElementById(c("¿ATb'\"\tÏíoÉt²Õèoâj", cn)),
    h = document.getElementById(c("xv'Ò)}éîúÔ´*n$|ìöyí<_45¤Ë½", cn)),
    i = document.getElementById(c("ì;,æ;¬Ñßª,7Ðín»]û¨B´:¬õ", cn)),
    s = !!m.h(X.l),
    a = !!m.h(X.X);
  !s || a
    ? (i.hidden = 0)
    : ((document.title = c("& Ëiêõ¼ÿ+Ëôö|8ù\b²£:çñ", cn)),
      (t.id = c("\bÛ$¡\n(\\þ\tÕmÃ\v½z", cn)),
      (h.hidden = 0),
      window[c("¨!µ(\t±r[¸ªêGû\n\fýºÁ¿", "Ö¿\0ôsE78ÄäZÞù2ÕøØò!´¢{ú<¶\fK{Ê")]());
};
const nn = '¡"Ý-NN"C3~Tèª¡§¯j',
  fn = "¤°ËaÅr3b¾Â÷ê=W§Èûü=åþb\tsæ";
window[c(' $¾´8=\t¥¥ëF¬ú2*"`&d+½<', nn)] = () => {
  const t = document.getElementById(c("\bíbX¯#Æ}lâ¯ú(ó¶xÝâD", nn)),
    h = document.getElementById(c("i!Ý¥\n ^_7úiÚyôrG MC2jýÙ*²®m", nn));
  m.h(X.H)
    ? (m.i(X.H, 0),
      (document.title = c(",¶ÆþqÜ!ÕN?ÇõÑvÖxÍÉzjG?¿Åä\b", fn)),
      (t.id = c("µÁºpn$W\nÉ~RHt\t×Ýñ»hH", fn)),
      (h.hidden = 0),
      window[c("[nùnKÁep°Ö«¨n4¡\0¿ß5{~", fn)]())
    : (document.location = c("ÎØupL`u§¸'q({Ät§-«X3é", nn));
};
const on = "pìÇ\vùÔ¹T´ÏóÛ³ÜgR²·fãY¡ÛVk2Õwc",
  dn = "¦{Þî(a;úp·KCûT»";
window[c('ÉÓjjàQ"5L}_Ë\\Ì!j0áX@ÉX¥üÇ[\v¢', on)] = () => {
  const t = document.getElementById(c("Æ»Õ¶¾ºuL»NàKÏ5", on)),
    h = document.getElementById(c("\vß\n&rèÙªVv¿Ç3pä³U<¸Ë½a$", on)),
    i = document.getElementById(c("dHå+ÍÏµR¥Dê¯6Ôs¹äÜ5", dn));
  m.h(X.O)
    ? ((document.title = c("WÀ1º«[\n>D½V ÝAð/Y", dn)),
      (t.id = c(";XsÏ¼³ÅãkõûÕ/©'ê#¾", dn)),
      (h.hidden = 0),
      window[c("«:í+q¼KÎ±KletÁÒ9e\r´", dn)]())
    : (m.i(X.p, 1), (i.hidden = 0));
};
const mn = "¤°ËaÅr3b¾Â÷ê=W§Èûü=åþb\tsæ",
  gn = "ÐÎ\\õ(½b)áOrÍ]9¿GÈÌl]";
window[c("z,F(Ðjv¡pS½è;TÈìV@2G3Û", mn)] = () => {
  if (X.I()) return;
  if (ma()) return;
  const t = document.getElementById(c("ÖOrf©¥+9ô\b»#»id®ÜC", mn)),
    h = document.getElementById(c("ðØÉâ(Eläå_%8yhNïß¢ÏçS|Ì¦ 7", gn));
  if (!m.h(X.o))
    return void (document.location = c("E´ÛÍ5¢ù¸OPökWµc@\b$m", gn));
  const i = !!m.h(X.l),
    s = !!m.h(X.X);
  i && !s
    ? (document.location = c(")ª¨þr°ªêRY¸lGte\fÿkn\nT\rf5l", gn))
    : ((document.title = c("`Äÿy°ãwY÷d=ý©Ë\b¨eý", gn)),
      (t.id = c("héKä&Tn1K`]9Úð+~C¾©Õ", gn)),
      (h.hidden = 0),
      window[c("\0-¢ç\v°tdÊ²ñwLË}ëE©]ËT", "£ûÂáðxjg©1£H¿¸9Ì!òËl<÷Wïþ¿")]());
};
const vn = "£ûÂáðxjg©1£H¿¸9Ì!òËl<÷Wïþ¿",
  bn = "â³¡´ÏÆd\bXãÓ¾kÝ",
  un = {
    "VÞ(dâÄå¦½àº¸Wo¾<Rá~Ìeív":
      c("=\nÉ\néµ¸L·4MÐuÒ.\vÅ\tÖÆ¹­;2¾áTv ·Î(ZWÙ¢q%", vn),
    "Z|ô¬T¨/`÷>MKËAÉ©|7[Mxw\vº":
      c("Ä£Ò'·ÎBÔ©t}D|!{5¤Uû?Ãûm^*fú..m[XÕÚ?«ö.q", vn),
    "HJ«/,Ð÷{<0ù!ºvÈÅ*Sá\0J\t'OÓ":
      c("N,øHT/°Oî·¼Tã\vë7®L|K%>q´/O\tö,ê¼·ùkÿÝ}^}.", "T%dõG)æ6¸Â(/~¦é²^âß"),
    "7 .LxOº¹H`Iü\\s¬àdOi'Ã~·": "assets/img/newspaperSOULJABOYITELLYA.png",
  };
window[c("ò½ê¡oøKÿªÂìz³\fFn¼yª¶p¶", bn)] = async () => {
  if (X.I()) return;
  const t = document.getElementById(c("JÏõ¸{6+8èÍ¨'%X\t×ùøU²", bn)),
    h = new URLSearchParams(window.location.search);
  for (const i of h.keys()) {
    const h = await e(i),
      s = un[h];
    if (s) return (t.src = s), void (t.hidden = 0);
  }
};
