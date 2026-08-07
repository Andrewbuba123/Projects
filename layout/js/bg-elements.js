const elements = document.querySelectorAll(".set-bg");

for (const element of elements) {
  const src = element.dataset.setbg;
  
  element.style.backgroundImage = `url(${src})`;
}
