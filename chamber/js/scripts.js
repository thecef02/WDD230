

/*  humburger menu  */
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


/*   place date on top right corner of the page */
const datefield = document.querySelector("aside");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;


/*  will show the banner on top if today is wednesday   */
const todayIs = now.getDay();
if (todayIs === 1 || todayIs === 2){
    const banner = document.querySelector("#join-us-banner")
    banner.style.display = "block"
}


/*   save in local storage the number of visits  */

// initialize display elements
const todayDisplay = document.querySelector(".last-days");
const visitsDisplay = document.querySelector(".visits");
const multiDays = document.querySelector(".multi-days");
// get the stored value in localStorage
let lastVisited = Number(window.localStorage.getItem("visits-ls"));

function getNumberOfDays(){
    let oneDay = (1000*60*60*24)
    difference_ms = now - lastVisited
    return Math.round(difference_ms/oneDay);
}
numVisits = getNumberOfDays()

if (numVisits > 1) {
    multiDays.textContent = "s"
}
// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
    todayDisplay.textContent = "This is your first visit!";
	visitsDisplay.textContent = "This is your first visit!";
}

// increment the number of visits.
//numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", Date.now());

// show todays date.
//todayDisplay.textContent = Date.now();



  




