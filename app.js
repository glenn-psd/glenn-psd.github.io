(() => {
  const comingSoonLinks = document.querySelectorAll("[data-coming-soon]");

  comingSoonLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.alert("Coming soon.");
    });
  });

  const header = document.querySelector(".site-header");
  const trigger = document.querySelector(".language-link");
  const popup = document.querySelector("#language-popup");

  if (header && trigger && popup) {
    const positionPopup = () => {
      const headerRect = header.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();
      const x = triggerRect.left - headerRect.left + triggerRect.width / 2;
      const y = triggerRect.bottom - headerRect.top + 12;
      popup.style.setProperty("--language-popup-x", `${x}px`);
      popup.style.top = `${y}px`;
    };

    const openPopup = () => {
      positionPopup();
      popup.hidden = false;
      requestAnimationFrame(() => popup.classList.add("is-open"));
      trigger.setAttribute("aria-expanded", "true");
    };

    const closePopup = () => {
      popup.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      window.setTimeout(() => {
        if (!popup.classList.contains("is-open")) popup.hidden = true;
      }, 320);
    };

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      popup.classList.contains("is-open") ? closePopup() : openPopup();
    });

    document.addEventListener("click", (event) => {
      if (!popup.classList.contains("is-open")) return;
      if (popup.contains(event.target) || trigger.contains(event.target)) return;
      closePopup();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closePopup();
    });

    window.addEventListener("resize", () => {
      if (popup.classList.contains("is-open")) positionPopup();
    });

    window.addEventListener(
      "scroll",
      () => {
        if (popup.classList.contains("is-open")) positionPopup();
      },
      { passive: true },
    );
  }

  const revealSelector =
    "[data-scroll-reveal], .experience-list > .experience-row, .work-list > .work-card";
  const groupedRevealSelector =
    ":scope > [data-scroll-reveal], :scope > .experience-row, :scope > .work-card";
  const revealItems = document.querySelectorAll(revealSelector);
  const revealGroups = document.querySelectorAll(".experience-list, .work-list");

  if (revealItems.length) {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const syncRevealDelays = () => {
      revealGroups.forEach((group) => {
        group.querySelectorAll(groupedRevealSelector).forEach((item, index) => {
          item.style.setProperty("--reveal-delay", `${(index + 1) * 60}ms`);
        });
      });
    };

    syncRevealDelays();

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -14% 0px",
          threshold: 0.16,
        },
      );

      const observeRevealItems = () => {
        document.querySelectorAll(revealSelector).forEach((item) => {
          if (item.dataset.revealReady === "true") return;
          item.dataset.revealReady = "true";
          revealObserver.observe(item);
        });
      };

      observeRevealItems();

      if ("MutationObserver" in window) {
        const groupObserver = new MutationObserver(() => {
          syncRevealDelays();
          observeRevealItems();
        });

        revealGroups.forEach((group) => {
          groupObserver.observe(group, { childList: true });
        });
      }
    }
  }

  const emailLink = document.querySelector("[data-copy-email]");
  const toast = document.querySelector(".copy-toast");
  let toastTimer;

  if (!emailLink || !toast) return;

  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (error) {
        // Local file previews can reject Clipboard API writes.
      }
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  const showToast = () => {
    window.clearTimeout(toastTimer);
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add("is-visible"));
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
      window.setTimeout(() => {
        if (!toast.classList.contains("is-visible")) toast.hidden = true;
      }, 320);
    }, 2200);
  };

  emailLink.addEventListener("click", async (event) => {
    event.preventDefault();
    await copyText(emailLink.dataset.copyEmail);
    showToast();
  });
})();
