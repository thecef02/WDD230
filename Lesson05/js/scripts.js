const elemInput = document.querySelector("input");
const elemButton = document.querySelector("button");


elemButton.addEventListener('click', function() {
    if (elemInput.value !== ""){
        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement('button');
        const elemList = document.querySelector(".list");
        elemList.appendChild(listItem);
        listItem.appendChild(listText);
        listText.textContent = elemInput.value;
        listItem.appendChild(listBtn);
        listBtn.textContent = "❌";
        

        listBtn.addEventListener('click', () =>{
            elemList.removeChild(listItem)
        });

        elemInput.value = "";
        elemInput.focus();
    };

});
