/* ==========================================================================
   Sparkle Auto — behaviour
   Motion budget: micro 120–250ms, component entrance 300–600ms.
   Reduced motion drops scroll-linked work entirely.
   ========================================================================== */
(function () {
  "use strict";

  var html = document.documentElement;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------------------------------------------------------------- language */
  var STORE_KEY = "sa-lang";
  var dict = window.SA_I18N || {};

  function readStored() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function writeStored(v) {
    try { localStorage.setItem(STORE_KEY, v); } catch (e) { /* private mode */ }
  }

  function applyLang(lang) {
    var table = dict[lang];
    if (!table) return;

    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    html.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = table[el.getAttribute("data-i18n")];
      if (typeof v === "string") el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = table[el.getAttribute("data-i18n-placeholder")];
      if (typeof v === "string") el.placeholder = v;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = table[el.getAttribute("data-i18n-aria")];
      if (typeof v === "string") el.setAttribute("aria-label", v);
    });

    // The toggle advertises the language you would switch *to*.
    var btn = document.getElementById("langBtn");
    if (btn) {
      var other = lang === "ar" ? "en" : "ar";
      btn.textContent = lang === "ar" ? "EN" : "ع";
      btn.lang = other;
      btn.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    }

    var burger = document.getElementById("burger");
    if (burger) burger.setAttribute("aria-label", table["a11y.menu"] || "Menu");

    var nav = document.getElementById("nav");
    if (nav) nav.setAttribute("aria-label", lang === "ar" ? "القائمة الرئيسية" : "Main navigation");

    document.title = lang === "ar"
      ? "Sparkle Auto — نظام تشغيل مغسلة العربيات"
      : "Sparkle Auto — operations software for car washes";

    writeStored(lang);
  }

  var initial = readStored();
  if (!initial) {
    initial = (navigator.language || "ar").toLowerCase().indexOf("ar") === 0 ? "ar" : "ar";
  }
  applyLang(initial);

  var langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      applyLang(html.getAttribute("data-lang") === "ar" ? "en" : "ar");
    });
  }

  /* ---------------------------------------------------------------- header */
  var header = document.getElementById("header");
  var burger = document.getElementById("burger");
  var drawer = document.getElementById("drawer");
  var scrim = document.getElementById("drawerScrim");

  if (header) {
    var onScrollHeader = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    addEventListener("scroll", onScrollHeader, { passive: true });
    onScrollHeader();
  }

  var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function setDrawer(open) {
    if (!drawer || !burger) return;
    burger.setAttribute("aria-expanded", String(open));

    if (open) {
      drawer.hidden = false;
      if (scrim) {
        scrim.hidden = false;
        requestAnimationFrame(function () { scrim.classList.add("is-open"); });
      }
      requestAnimationFrame(function () {
        drawer.classList.add("is-open");
        // Second frame: the panel is only focusable once `is-open` has actually
        // flipped its computed visibility.
        requestAnimationFrame(function () {
          var first = drawer.querySelector(FOCUSABLE);
          if (first) first.focus();
        });
      });
      document.body.style.overflow = "hidden";
    } else {
      drawer.classList.remove("is-open");
      if (scrim) scrim.classList.remove("is-open");
      document.body.style.overflow = "";
      setTimeout(function () {
        if (!drawer.classList.contains("is-open")) {
          drawer.hidden = true;
          if (scrim) scrim.hidden = true;
        }
      }, 200);
    }
  }

  // Keep Tab inside the open drawer: the page behind it is not reachable.
  if (drawer) {
    drawer.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var items = Array.prototype.slice.call(drawer.querySelectorAll(FOCUSABLE));
      if (!items.length) return;
      // The burger is the drawer's own close control, so it stays in the loop.
      items.unshift(burger);
      var first = items[0];
      var last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  if (burger) {
    burger.addEventListener("click", function () {
      setDrawer(burger.getAttribute("aria-expanded") !== "true");
    });
  }
  if (drawer) {
    drawer.addEventListener("click", function (e) {
      if (e.target.closest("a")) setDrawer(false);
    });
  }
  if (scrim) {
    scrim.addEventListener("click", function () {
      setDrawer(false);
      burger.focus();
    });
  }
  addEventListener("keydown", function (e) {
    if (e.key === "Escape" && burger && burger.getAttribute("aria-expanded") === "true") {
      setDrawer(false);
      burger.focus();
    }
  });
  addEventListener("resize", function () {
    if (innerWidth >= 1024 && burger && burger.getAttribute("aria-expanded") === "true") setDrawer(false);
  });

  /* ---------------------------------------------------------------- reveal */
  var revealables = document.querySelectorAll(".reveal");
  if (reduced.matches || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------------- accordion */
  document.querySelectorAll(".acc__q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".acc");
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      item.classList.toggle("is-open", !open);
    });
  });

  /* ---------------------------------------------------------------- nav state */
  var sections = Array.prototype.filter.call(
    document.querySelectorAll("main section[id]"),
    function (s) { return document.querySelector('.nav a[href="#' + s.id + '"]'); }
  );
  if (sections.length && "IntersectionObserver" in window) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = document.querySelector('.nav a[href="#' + entry.target.id + '"]');
        if (!link) return;
        if (entry.isIntersecting) {
          document.querySelectorAll(".nav a[aria-current]").forEach(function (a) {
            a.removeAttribute("aria-current");
          });
          link.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { navIo.observe(s); });
  }

  /* ---------------------------------------------------------------- form
     Validation and the full submit lifecycle are real. There is deliberately
     no fake success state: with no endpoint wired, the form says so instead
     of confirming a submission that never happened.
  ------------------------------------------------------------------------ */
  var form = document.getElementById("reviewForm");
  if (form) {
    var status = document.getElementById("formStatus");
    var submitBtn = document.getElementById("submitBtn");
    var ENDPOINT = null; // ← set to your real POST endpoint before publishing

    var t = function (key) {
      var lang = html.getAttribute("data-lang") || "ar";
      return (dict[lang] && dict[lang][key]) || key;
    };

    var rules = {
      "f-name":  function (v) { return v.trim().length >= 2; },
      "f-place": function (v) { return v.trim().length >= 2; },
      "f-phone": function (v) { return /^[+0-9\s()-]{8,20}$/.test(v.trim()); }
    };

    function validateField(input) {
      var rule = rules[input.id];
      if (!rule) return true;
      var ok = rule(input.value);
      var field = input.closest(".field");
      field.classList.toggle("is-invalid", !ok);
      input.setAttribute("aria-invalid", String(!ok));
      return ok;
    }

    Object.keys(rules).forEach(function (id) {
      var input = document.getElementById(id);
      if (!input) return;
      input.addEventListener("blur", function () { validateField(input); });
      input.addEventListener("input", function () {
        if (input.closest(".field").classList.contains("is-invalid")) validateField(input);
      });
    });

    function showStatus(state, message) {
      if (!status) return;
      status.dataset.state = state;
      status.textContent = message;
      status.classList.add("is-visible");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var firstBad = null;
      Object.keys(rules).forEach(function (id) {
        var input = document.getElementById(id);
        if (input && !validateField(input) && !firstBad) firstBad = input;
      });
      if (firstBad) {
        firstBad.focus();
        return;
      }

      if (!ENDPOINT) {
        // No receiver configured — say so rather than showing a false success.
        showStatus("info", t("form.notWired"));
        return;
      }

      submitBtn.classList.add("is-loading");
      submitBtn.disabled = true;
      showStatus("info", t("form.sending"));

      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      })
        .then(function (res) {
          if (!res.ok) throw new Error(res.status);
          form.reset();
          showStatus("info", t("form.ok"));
        })
        .catch(function () {
          showStatus("error", t("form.errSend"));
        })
        .finally(function () {
          submitBtn.classList.remove("is-loading");
          submitBtn.disabled = false;
        });
    });
  }

  /* ---------------------------------------------------------------- misc */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
