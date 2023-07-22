document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
});

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const image2 = document.querySelector("img[src='imagen/imagen2.svg']");

  container.addEventListener("wheel", function (event) {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      // Desplazamiento hacia abajo, se mueve hacia la imagen2.svg
      const image2Top = image2.getBoundingClientRect().top + container.scrollTop;
      container.scrollTo({
        top: image2Top,
        behavior: "smooth"
      });
    }
  });
});
