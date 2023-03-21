import { refs } from '../global/refs';

const { mobileMenu, openMenuBtn } = refs;
export const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
};
