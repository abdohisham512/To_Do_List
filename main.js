const form = document.querySelector(".form");
const container = document.querySelector(".container");
const button = document.querySelector(".button");
const task = document.querySelectorAll(".task");
const input = document.getElementById("input");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  container.innerHTML += `<div class="task">
            <span class="icon-star-full"></span>
            <p lang="ar" class="text">${input.value}</p>
            <div class="double">
                <span class="icon-bin2"></span>
                <span class="icon-angry2"></span>
            </div>
        </div>`;
        input.value=" ";
});

container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-bin2":
      eo.target.parentElement.parentElement.remove();
      break;

    case "icon-angry2":
      eo.target.style.display = "none";
      const heart = `<span class="icon-heart"> </span>`;

      eo.target.parentElement.parentElement
        .getElementsByClassName("text")[0]
        .classList.add("line_text");

      eo.target.parentElement.innerHTML += heart;
      break;

    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("text")[0]
        .classList.remove("line_text");
      eo.target.style.display = "none";
      eo.target.parentElement.innerHTML += `<span class="icon-angry2"></span>`;
      break;

    case "icon-star-full":
      eo.target.classList.add("icon-star-full2");
      container.prepend(eo.target.parentElement);
      break;

    case "icon-star-full icon-star-full2":
      eo.target.classList.remove("icon-star-full2");
      break;

    default:
      break;
  }
});
