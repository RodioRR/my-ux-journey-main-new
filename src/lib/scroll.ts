/**
 * Smoothly scroll to an element by ID or to the top of the page.
 * Aligns the section top with the bottom of the fixed nav bar (not under it).
 */
export function scrollToSection(href: string) {
  if (href === "#" || href === "") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", window.location.pathname);
    return;
  }

  const id = href.slice(1);
  const element = document.getElementById(id);
  if (!element) return;

  const nav = document.querySelector("nav");
  const navRow = nav?.firstElementChild;
  const navIsFixed =
    nav instanceof HTMLElement &&
    getComputedStyle(nav).position === "fixed";
  const offset =
    navIsFixed && navRow instanceof HTMLElement ? navRow.offsetHeight : 0;

  const top =
    element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  window.history.pushState(null, "", href);
}
