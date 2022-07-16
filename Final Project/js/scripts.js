/*   place date on top right corner of the page */
const datefield = document.querySelector("aside");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;
let templeData = {}

/*  humburger menu  */
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


/* load the options for the destination select */
let destiantionSelect = document.querySelector('#destiantion');
const requestFile = 'data/data.json';
fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    templeData = jsonObject;
    templeData.forEach(addTemple)
  });

function addTemple(temple){
    const html = `<option value="${temple.name}">${temple.name}</option>\n`;
    destiantionSelect.innerHTML += html;
}

destiantionSelect.addEventListener("change",destiantionSelect_onChange);


function destiantionSelect_onChange (){

    console.log(destiantionSelect.value)

}










