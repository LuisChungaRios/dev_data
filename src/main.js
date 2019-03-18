/* Manejo del DOM */

const yearSelector = document.getElementById("yearSelect");
let yearSelected = yearSelector.value;

yearSelector.addEventListener("click", () => {
    yearSelected = yearSelector.value;
    console.log(yearSelected)

    arrYears.indexOf(yearSelected);
    console.log()
}); 