/* CEOキッズアカデミー 法人プログラム /houjin/ — motion.js（外部依存ゼロ・vanilla）
   安全規則（handoff §6 / brief §5-1、例外なし）:
   1) 既定＝表示済み。JSが動かない・止まった・タブが非表示・prefers-reduced-motion のとき何も隠れない。
   2) ファーストビューは即表示（画面内にある要素は仕込まない）。
   3) 仕込み（arm）は画面外の要素にだけ、画面に入る直前に行う。
   4) CSSの時間切れの保険（.rv-pre に 2.5秒後 forwards の animation）は houjin.css 側に実装済み。
   5) 二重に動かさない・inline style は使わない（CSSOMも不使用）。 */
(function () {
  'use strict';

  var motionOK = !!(window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches &&
    'IntersectionObserver' in window &&
    document.visibilityState === 'visible');
  if (motionOK) { document.documentElement.classList.add('motion-ok'); }

  /* ---------------------------------------------------- M1/M2/M8: reveal ---------------------------------------------------- */
  function initReveal() {
    var els = document.querySelectorAll('[data-rv]');
    if (!els.length) { return; }
    var armed = new WeakSet();

    var ioArm = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var el = entry.target;
        if (armed.has(el)) { return; }
        armed.add(el);
        ioArm.unobserve(el);
        // 画面外（まだ見えていない）のときだけ仕込む。ファーストビュー内は即表示のまま。
        if (entry.boundingClientRect.top > window.innerHeight) {
          el.classList.add('rv-pre');
        }
      });
    }, { rootMargin: '0px 0px 100% 0px', threshold: 0 });

    var ioShow = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        entry.target.classList.remove('rv-pre');
        entry.target.classList.add('rv-in');
        ioShow.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    Array.prototype.forEach.call(els, function (el) {
      ioArm.observe(el);
      ioShow.observe(el);
    });

    // 保険①: 位置復元（戻る・アンカー移動）で「今より上」の仕込み要素を即表示に戻す
    var rescue = function () {
      Array.prototype.forEach.call(document.querySelectorAll('.rv-pre'), function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) {
          el.classList.remove('rv-pre');
          el.classList.add('rv-in');
        }
      });
    };
    window.addEventListener('pageshow', rescue);
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') { rescue(); }
    });
  }

  if (motionOK) {
    initReveal();
  } else {
    // JS非対応環境向けの保険はCSS既定（表示済み）に委ねる。ここでは何もしない。
  }

  /* ---------------------------------------------------- M4: 写真マーキー（一時停止のみJS） ---------------------------------------------------- */
  (function initMarquee() {
    var tracks = document.querySelectorAll('.marquee');
    if (!tracks.length || !('IntersectionObserver' in window)) { return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle('is-paused', !entry.isIntersecting);
      });
    }, { threshold: 0 });
    Array.prototype.forEach.call(tracks, function (el) { io.observe(el); });
  })();

  /* ---------------------------------------------------- M6: ヘッダーの締まり ---------------------------------------------------- */
  (function initHeaderCondense() {
    var head = document.querySelector('.site-head');
    if (!head) { return; }
    var ticking = false;
    var update = function () {
      ticking = false;
      head.classList.toggle('is-condensed', window.scrollY > 24);
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  })();

  /* ---------------------------------------------------- モバイルナビ（全画面パネル） ---------------------------------------------------- */
  (function initNav() {
    var btn = document.querySelector('.nav-toggle');
    var panel = document.getElementById('gnav-panel');
    if (!btn || !panel) { return; }
    var close = function () {
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'メニュー';
      document.body.classList.remove('nav-open');
    };
    var open = function () {
      panel.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      btn.textContent = '閉じる';
      document.body.classList.add('nav-open');
    };
    btn.addEventListener('click', function () {
      if (panel.hidden) { open(); } else { close(); }
    });
    panel.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { close(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) { close(); btn.focus(); }
    });
  })();

  /* ---------------------------------------------------- 横スクロールする表のキーボード対応（WCAG 2.1.1） ---------------------------------------------------- */
  (function initTables() {
    var wraps = document.querySelectorAll('.tbl-wrap');
    if (!wraps.length) { return; }
    var sync = function () {
      Array.prototype.forEach.call(wraps, function (w) {
        var scrollable = w.scrollWidth > w.clientWidth + 1;
        if (scrollable && !w.hasAttribute('tabindex')) {
          var cap = w.querySelector('caption');
          w.setAttribute('tabindex', '0');
          w.setAttribute('role', 'region');
          w.setAttribute('aria-label', cap ? cap.textContent.trim().slice(0, 60) : 'データ表');
        } else if (!scrollable && w.hasAttribute('tabindex')) {
          w.removeAttribute('tabindex');
          w.removeAttribute('role');
          w.removeAttribute('aria-label');
        }
      });
    };
    sync();
    if (window.ResizeObserver) {
      new ResizeObserver(sync).observe(document.documentElement);
    } else {
      window.addEventListener('resize', sync, { passive: true });
    }
  })();
})();
