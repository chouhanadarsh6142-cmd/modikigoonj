const navItems = [
  ["Home", "index.html"], ["Modi", "modi.html"], ["Amit Shah", "shah.html"],
  ["Shivraj", "shivraj.html"], ["Yogi", "yogi.html"], ["Fadnavis", "devendra.html"],
  ["Insights", "insights.html"], ["Timeline", "timeline.html"]
];

function icon(name) {
  if (name === "menu") return '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  if (name === "sun") return '<svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
  return '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 19V5m0 0-6 6m6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function renderChrome() {
  const current = location.pathname.split("/").pop() || "index.html";
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");
  if (header) {
    header.innerHTML = `<a class="brand" href="index.html" aria-label="Modi Ji Team Ki Goonj home"><span class="brand-mark">G</span><span class="brand-text"><strong>Modi Ji Team Ki Goonj</strong><small>Leadership archive</small></span></a><nav class="site-nav" id="site-nav" aria-label="Primary navigation"><ul>${navItems.map(([label, href]) => `<li><a href="${href}" class="${current === href ? "active" : ""}">${label}</a></li>`).join("")}</ul></nav><div class="header-tools"><button class="icon-button" type="button" data-theme-toggle aria-label="Switch color theme" title="Switch color theme">${icon("sun")}</button><button class="menu-toggle" type="button" data-menu-toggle aria-controls="site-nav" aria-expanded="false" aria-label="Open navigation">${icon("menu")}</button></div>`;
  }
  if (footer) footer.innerHTML = `<p>© <span data-year></span> Modi Ji Team Ki Goonj · A visual leadership archive </p><p><a href="#main-content">Back to content</a></p>`;
  if (footer ) footer.innerHTML = `<p>© <span data-year></span> Adarsh Chouhan </p><p><a href="#main-content">Back to content</a></p>`;
  document.body.insertAdjacentHTML("afterbegin", '<a class="skip-link" href="#main-content">Skip to content</a><div class="reading-progress" aria-hidden="true"><span></span></div>');
  document.body.insertAdjacentHTML("beforeend", `<button class="back-to-top" type="button" aria-label="Back to top">${icon("up")}</button>`);
}

function wireInteractions() {
  const savedTheme = localStorage.getItem("goonj-theme");
  if (savedTheme === "dark") document.body.classList.add("theme-dark");
  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
    localStorage.setItem("goonj-theme", document.body.classList.contains("theme-dark") ? "dark" : "light");
  });
  const nav = document.querySelector(".site-nav");
  const menu = document.querySelector("[data-menu-toggle]");
  menu?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", open);
    menu.setAttribute("aria-expanded", String(open));
  });
  nav?.addEventListener("click", (event) => {
    if (event.target.matches("a")) { nav.classList.remove("open"); document.body.classList.remove("menu-open"); menu?.setAttribute("aria-expanded", "false"); }
  });
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
  const progress = document.querySelector(".reading-progress span");
  const topButton = document.querySelector(".back-to-top");
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
    topButton.classList.toggle("visible", scrollY > 500);
  };
  addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();
  topButton?.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".section, .content-card, .timeline-item, .leader-card, .profile-portrait").forEach((element) => {
    element.classList.add("reveal"); observer.observe(element);
  });
  document.querySelectorAll("img[data-fallback]").forEach((image) => image.addEventListener("error", () => {
    if (!image.dataset.errorHandled) { image.dataset.errorHandled = "true"; image.src = image.dataset.fallback; }
  }));
  document.querySelectorAll("[data-timeline-filter]").forEach((button) => button.addEventListener("click", () => {
    const filter = button.dataset.timelineFilter;
    document.querySelectorAll("[data-timeline-filter]").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelectorAll(".timeline-item").forEach((item) => item.classList.toggle("is-hidden", filter !== "all" && item.dataset.era !== filter));
  }));
}

document.addEventListener("DOMContentLoaded", () => { renderChrome(); wireInteractions(); });
