/**
 * Smoothly scrolls to the element with the given id.
 * @param {string} id - The id of the target element.
 */
export function customScrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
