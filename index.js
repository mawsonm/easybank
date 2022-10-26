const arr = ["Home", "About", "Contact", "Blog", "Careers"];

const burger = document.getElementById("mobile-menu");
burger.addEventListener("click", openMobileMenu);

const close = document.getElementById("close");
close.addEventListener("click", closeMobileMenu);

function openMobileMenu() {
  const container = document.createElement("div");
  container.classList.add("menu-box");
  const ul = document.createElement("ul");
  arr.forEach((item) => {
    const link = document.createElement("a");
    link.innerText = item;
    ul.appendChild(link);
  });
  ul.classList.add("mobile-menu-ul");
  container.appendChild(ul);
  const body = document.querySelector(".hero");
  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  body.appendChild(backdrop);
  body.appendChild(container);

  burger.style = "display: none;";

  const close = document.getElementById("close");
  close.style = "display: block";
}

function closeMobileMenu() {
  const container = document.querySelector(".menu-box");
  container.remove();
  const backdrop = document.querySelector(".backdrop");
  backdrop.remove();
  burger.style = "display: block";
  close.style = "display: none";
}
