(() => {
  const o = document.createElement("link").relList;
  if (!(o && o.supports && o.supports("modulepreload"))) {
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
      e(o);
    new MutationObserver((o) => {
      for (const n of o)
        if (n.type === "childList")
          for (const o of n.addedNodes)
            o.tagName === "LINK" && o.rel === "modulepreload" && e(o);
    }).observe(document, { childList: 1, subtree: 1 });
  }
  function e(o) {
    if (o.o) return;
    o.o = 1;
    const e = ((o) => {
      const e = {};
      return (
        o.integrity && (e.integrity = o.integrity),
        o.referrerPolicy && (e.referrerPolicy = o.referrerPolicy),
        (e.credentials =
          o.crossOrigin === "use-credentials"
            ? "include"
            : o.crossOrigin === "anonymous"
            ? "omit"
            : "same-origin"),
        e
      );
    })(o);
    fetch(o.href, e);
  }
})();
