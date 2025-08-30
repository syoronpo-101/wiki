// 年の自動更新
document.getElementById('year').textContent = new Date().getFullYear();

// テーマ切替（ライト/ダーク）
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('light');

toggle?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// ナビ開閉（スマホ）
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
navToggle?.addEventListener('click', () => {
  const open = navList.classList.toggle('show');
  navToggle.setAttribute('aria-expanded', String(open));
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior:'smooth', block:'start' });
      navList?.classList.remove('show');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});
