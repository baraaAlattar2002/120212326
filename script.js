const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // تحميل الوضع من التخزين المحلي
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  });


  
  const toggleBtn = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  