const btnGridview = document.getElementById('gridview');
const btnListview = document.getElementById('listview');
const display = document.querySelector("#mainDiv");

btnGridview.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});
btnListview.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("list");
	display.classList.remove("grid");
});
const requestFile = 'data/data.json';
const cards = document.querySelector('.cards');

fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businessList = jsonObject;
    businessList.forEach(displayBusiness);
  });

function displayBusiness(businessList) {
  
    // Create elements to add to the document
    let card = document.createElement('section');
    let div = document.createElement('div')
      let name = document.createElement('h3');
      let logo = document.createElement('img');
    let address = document.createElement('p'); //address
    let phone = document.createElement('p'); //phone
    let website = document.createElement('a'); // web site
    // Change the textContent property of the h2 element to contain the prophet's full name
    name.textContent = `${businessList.name}`;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', businessList.imageUrl);
    logo.setAttribute('alt', `Logo of ${businessList.name}`);
    logo.setAttribute('loading', 'lazy');
    address.textContent = `${businessList.address}`;
    phone.textContent = `${businessList.phone}`;
    if (businessList.website != null){
      website.textContent = `${businessList.name} website`;
      website.setAttribute('href',businessList.website);
    }else {
      website.textContent = `No website`;
    }
    // Add/append the section(card) with the h2 element
    card.appendChild(div);
      div.appendChild(logo);
      div.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.grid').appendChild(card);
}












