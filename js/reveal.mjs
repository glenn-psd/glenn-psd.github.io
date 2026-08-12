const revealItemSelector =
  '[data-scroll-reveal], .career-list > .career-entry, .work-list > .work-item';

const initStickyHeader = () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  let scheduled = false;
  const sync = () => {
    header.classList.toggle('is-stuck', window.scrollY > 0);
    scheduled = false;
  };
  const scheduleSync = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(sync);
  };
  sync();
  window.addEventListener('scroll', scheduleSync, { passive: true });
};

const initScrollReveal = () => {
  const items = document.querySelectorAll(revealItemSelector);
  if (!items.length) return;

  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  ) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -15% 0px', threshold: 0 },
  );
  items.forEach((item) => observer.observe(item));
};

export const initReveal = () => {
  initStickyHeader();
  initScrollReveal();
};
