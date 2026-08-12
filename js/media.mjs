export const initMedia = () => {
  const videos = document.querySelectorAll('.page-project video');
  if (!videos.length) return;

  const userPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const syncPlayback = () => {
    videos.forEach((video) => {
      if (userPaused || document.hidden || video.dataset.inView !== 'true') {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.dataset.inView = String(entry.isIntersecting);
        });
        syncPlayback();
      },
      { rootMargin: '200px 0px', threshold: 0.01 },
    );
    videos.forEach((video) => observer.observe(video));
  } else {
    videos.forEach((video) => {
      video.controls = true;
    });
  }

  document.addEventListener('visibilitychange', syncPlayback);
  window.addEventListener('pagehide', () => videos.forEach((video) => video.pause()));
};
