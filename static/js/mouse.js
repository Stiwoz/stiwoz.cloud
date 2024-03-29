const trailer = document.getElementById('trailer');

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 1.6 : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 10,
    fill: 'forwards',
  });
};

const getTrailerClass = (type) => {
  switch (type) {
    case 'link':
      return 'fa-solid fa-arrow-up-right';
    case 'github':
      return 'fa-brands fa-github';
    case 'instagram':
      return 'fa-brands fa-instagram';
    case 'linkedin':
      return 'fa-brands fa-linkedin';
    default:
      return 'fa-solid';
  }
};

window.onmousemove = (e) => {
  const interactable = e.target.closest('.interactable'),
    interacting = interactable !== null;

  const icon = document.getElementById('trailer-icon');

  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : '';

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  } else {
    icon.className = '';
  }
};
