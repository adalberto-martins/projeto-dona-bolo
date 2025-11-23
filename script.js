// Scroll suave para seções
document.addEventListener("click", function (e) {
  const target = e.target.closest("[data-scroll]");
  if (!target) return;

  const selector = target.getAttribute("data-scroll");
  const section = document.querySelector(selector);
  if (!section) return;

  e.preventDefault();
  section.scrollIntoView({ behavior: "smooth" });
});
