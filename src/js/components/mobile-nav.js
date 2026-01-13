document.addEventListener('DOMContentLoaded', () => {
  console.log('mobile-nav loaded!');

  const modal = document.querySelector('.mobile-nav');
  const mobileNavOverlay = document.querySelector('.mobile-nav__overlay');
  const openMobileNav = document.querySelector('[data-mobile-nav="open"]');
  const closeMobileNav = document.querySelector('[data-mobile-nav="close"]');

  if (!modal || !openMobileNav) {
    console.warn('Элементы меню не найдены');
    return;
  }

  function openModal() {
    modal.classList.add('mobile-nav--open');
    document.body.classList.add('no-scroll');

    // focus on 1 element
    const firstFocusable = modal.querySelector('a, button');
    if (firstFocusable) firstFocusable.focus();
  }

  function closeModal() {
    modal.classList.remove('mobile-nav--open');
    document.body.classList.remove('no-scroll');

    // focus on btn open nav menu
    openMobileNav.focus();
  }

  //Listeners
  openMobileNav.addEventListener('click', openModal);
  mobileNavOverlay.addEventListener('click', closeModal);
  if (closeMobileNav) closeMobileNav.addEventListener('click', closeModal);


  // Close Modal on click links
  const internalLinks  = modal.querySelectorAll('a');

  internalLinks .forEach(link => {
    link.addEventListener('click', closeModal);
  });

  // Close Modal on click "Escape"
  const handleEscapeKey = (e) => {
    if (e.key === 'Escape' && modal.classList.contains('mobile-nav--open')) {
      closeModal(); 
    } 
  } 

  document.addEventListener('keydown', handleEscapeKey);
})