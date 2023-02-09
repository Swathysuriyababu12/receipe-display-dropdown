const select = document.querySelector("#recipe-select");

const details = document.querySelector("#recipe-details");
let recipeHTML = "YOUR RECEIPE WILL DISPLAY HERE";
const button = document.querySelector("#btn");
const div = document.createElement("div");

var data = new Data();
output = data.getData();

select.addEventListener("change", (event) => {
  const selectedRecipe = event.target.value;
  if (div) {
    div.remove();
  }
  console.log(selectedRecipe);
  btn.addEventListener("click", (e) => {
    switch (selectedRecipe) {
      case "chocolatecake":
        recipeHTML = `${output[selectedRecipe]}`;
        break;
      case "spaghetti":
        recipeHTML = `${output[selectedRecipe]}`;
        break;
      case "lasagna":
        recipeHTML = `${output[selectedRecipe]}`;
        break;
      case "chicken":
        recipeHTML = `${output[selectedRecipe]}`;
        break;
    }

    details.style.display = "block";
    div.innerHTML = recipeHTML;
    details.appendChild(div);
  });
});
