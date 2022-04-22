const thisYear = new Date();
let year = thisYear.getFullYear();
document.getElementById("year").textContent = year;

const lastModDate = new Date(document.lastModified);
let strLMD = 'Last updated: ' + lastModDate.getMonth() + "/" + lastModDate.getDate() + "/" 
           + lastModDate.getFullYear() + " " + lastModDate.getHours() + ":" 
           + lastModDate.getMinutes() + ":" + lastModDate.getSeconds();
document.getElementById("modified").textContent = strLMD;
