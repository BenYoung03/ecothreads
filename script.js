const items = document.querySelectorAll(".grid-item");
var confirmBtn = document.querySelector('.confirm-filter');

confirmBtn.addEventListener('click', function() {
    var selectedClothingType = document.getElementById('type').value;
    var selectedGender = document.getElementById('gender').value;
    var selectedSize = document.getElementById('size').value;
    console.log(selectedClothingType);
    console.log(selectedGender);
    console.log(selectedSize);
    items.forEach((div) => {
        if(div.className.includes(selectedClothingType) && div.className.includes(selectedGender) && div.className.includes(selectedSize)) {
            div.classList.remove('hide');
        } else {
            div.classList.add('hide');
        }
    })
});
