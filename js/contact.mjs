import { translate } from './i18n.mjs';

export const copyText = async (text) => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to the legacy copy path for non-secure local environments.
    }
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.top = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  } finally {
    textarea.remove();
  }
  return copied;
};

export const initContact = () => {
  const emailButton = document.querySelector('[data-copy-email]');
  const toast = document.querySelector('.copy-toast');
  const copyTooltip = document.querySelector('.copy-tooltip');
  if (!emailButton || !toast) return;
  let toastTimer;

  if (copyTooltip && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const updateTooltipPosition = ({ clientX, clientY }) => {
      copyTooltip.style.left = `${clientX + 10}px`;
      copyTooltip.style.top = `${clientY + 14}px`;
    };

    emailButton.addEventListener('pointerenter', (event) => {
      updateTooltipPosition(event);
      copyTooltip.classList.add('is-visible');
    });
    emailButton.addEventListener('pointermove', updateTooltipPosition);
    emailButton.addEventListener('pointerleave', () => copyTooltip.classList.remove('is-visible'));
  }

  const showToast = (translationKey) => {
    window.clearTimeout(toastTimer);
    toast.dataset.i18n = translationKey;
    toast.textContent = translate(translationKey);
    toast.hidden = false;
    toast.getBoundingClientRect();
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => {
      toast.classList.remove('is-visible');
      window.setTimeout(() => {
        if (!toast.classList.contains('is-visible')) toast.hidden = true;
      }, 320);
    }, 2200);
  };

  emailButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const copied = await copyText(emailButton.dataset.copyEmail);
    showToast(copied ? 'common.copied' : 'common.copyFailed');
  });
};
