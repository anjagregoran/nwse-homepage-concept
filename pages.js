(function () {
  // header turns solid once the photo is scrolled past
  var h = document.querySelector('header'), hero = document.querySelector('.phero');
  function u() { h.classList.toggle('solid', window.scrollY > hero.offsetHeight - h.offsetHeight - 10); }
  window.addEventListener('scroll', u, { passive: true }); window.addEventListener('resize', u); u();

  // Register Online dropdown
  var reg = document.querySelector('.reg'), btn = reg.querySelector('.reg-btn');
  function set(o) { reg.classList.toggle('open', o); btn.setAttribute('aria-expanded', o ? 'true' : 'false'); }
  btn.addEventListener('click', function (e) { e.stopPropagation(); set(!reg.classList.contains('open')); });
  document.addEventListener('click', function (e) { if (!reg.contains(e.target)) set(false); });
  reg.querySelectorAll('.reg-menu a').forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });

  // language switch
  var l = document.querySelector('.lang');
  if (l) { var lb = l.querySelector('.lang-btn');
    var ls = function (o) { l.classList.toggle('open', o); lb.setAttribute('aria-expanded', o ? 'true' : 'false'); };
    lb.addEventListener('click', function (e) { e.stopPropagation(); ls(!l.classList.contains('open')); });
    document.addEventListener('click', function (e) { if (!l.contains(e.target)) ls(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') ls(false); });
    l.querySelector('a.cur').addEventListener('click', function (e) { e.preventDefault(); ls(false); }); }

  // preview only: the form just shows the thank-you note, nothing is sent anywhere
  document.querySelectorAll('form.mini').forEach(function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); f.classList.add('done'); });
  });
  // footer links are just for show
  document.querySelectorAll('footer .links a').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); }); });
  // links to homepage sections that are not built yet go nowhere
  document.querySelectorAll('a[href="index.html#more"], a[href="index.html#why"]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); }); });
})();
