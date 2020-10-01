/**
 * Toggle visibility on DOM element with display none
 * @param {HTMLDivElement} element - HTML element to toggle
 * @param {boolean} toggleOn - toggled true or false
 * @param {number} duration - animation duration
 */
const toggleVisibility = (
  element: HTMLDivElement,
  toggleOn: boolean,
  duration: number
) => {
  if (!toggleOn) {
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
    setTimeout(() => {
      element.style.display = 'none';
    }, duration);
  } else {
    element.classList.remove('fade-out');
    element.classList.add('fade-in');
    setTimeout(() => {
      element.style.display = 'block';
    }, duration);
  }
};

export default toggleVisibility;
