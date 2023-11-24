const confirmBtn = document.querySelector('.confirm-filter');

confirmBtn.addEventListener('click', function() {
    const items = document.querySelectorAll(".grid-item");
    const selectedClothingType = document.getElementById('type').value;
    const selectedGender = document.getElementById('gender').value;
    const selectedSize = document.getElementById('size').value;
    items.forEach((div) => {
        if(div.className.includes(selectedClothingType) && div.className.includes(selectedGender) && div.className.includes(selectedSize)) {
            div.classList.remove('hide');
        } else {
            div.classList.add('hide');
        }
    })
});

const addItem = document.querySelector(".new-item");
const addItemContainer = document.querySelector(".new-item-container");
addItem.addEventListener('click', function() {
    addItem.disabled = true;
    const containerForm = document.createElement("div");
    addItemContainer.appendChild(containerForm);
    containerForm.className =  "form-container";

    const labelNumber = document.createElement("LABEL");
    labelNumber.textContent = "Student Number: ";
    containerForm.appendChild(labelNumber);
    const inputNumber = document.createElement("input");
    inputNumber.type = "text";
    containerForm.appendChild(inputNumber);

    const labelHeader = document.createElement("LABEL");
    labelHeader.textContent = "Item Name: ";
    containerForm.appendChild(labelHeader);
    const inputHeader = document.createElement("input");
    inputHeader.type = "text";
    containerForm.appendChild(inputHeader);

    const label1 = document.createElement("LABEL");
    label1.textContent = "Item Type: ";
    containerForm.appendChild(label1);
    const input1 = document.createElement("select");
    containerForm.appendChild(input1);
        input1.appendChild(new Option("Hoodie", "hoodie")); 
        input1.appendChild(new Option("T-Shirt", "tshirt"));
        input1.appendChild(new Option("Coat", "coat"));
        input1.appendChild(new Option("Sweatpants", "sweatpants"));
        input1.appendChild(new Option("Jeans", "jeans"));
        input1.appendChild(new Option("Shoes", "shoes"));

    const label2 = document.createElement("LABEL");
    label2.textContent = "Item Colour: ";
    containerForm.appendChild(label2);
    const input2 = document.createElement("input");
    input2.type = "text";
    containerForm.appendChild(input2);

    const label3 = document.createElement("LABEL");
    label3.textContent = "Item Size: ";
    containerForm.appendChild(label3);
    const input3 = document.createElement("select");
    containerForm.appendChild(input3);
        input3.appendChild(new Option("XXL", "xtraxtra")); 
        input3.appendChild(new Option("XL", "xtralrg"));
        input3.appendChild(new Option("L", "L"));
        input3.appendChild(new Option("M", "M"));
        input3.appendChild(new Option("S", "S"));
        input3.appendChild(new Option("XS", "xtras"));

    const label4 = document.createElement("LABEL");
    label4.textContent = "Gender: ";
    containerForm.appendChild(label4);
    const input4 = document.createElement("select");
        input4.appendChild(new Option("Male", "men")); 
        input4.appendChild(new Option("Female", "female")); 
    containerForm.appendChild(input4);

    const label5 = document.createElement("LABEL");
    label5.textContent = "Condition: ";
    containerForm.appendChild(label5);
    const input5 = document.createElement("input");
    input5.type = "text";
    containerForm.appendChild(input5);

    const label6 = document.createElement("LABEL");
    label6.textContent = "Image: ";
    containerForm.appendChild(label6);
    const input6 = document.createElement("input");
    input6.type = "file";
    containerForm.appendChild(input6);

    const confirmItemBtn = document.createElement("button");
    confirmItemBtn.textContent = "Confirm";
    containerForm.appendChild(confirmItemBtn);

    labelNumber.classList.add("item-add-label");
    labelHeader.classList.add("item-add-label");
    label1.classList.add("item-add-label");
    label2.classList.add("item-add-label");
    label3.classList.add("item-add-label");
    label4.classList.add("item-add-label");
    label5.classList.add("item-add-label");
    label6.classList.add("item-add-label");
    inputNumber.classList.add("item-add-text");
    inputHeader.classList.add("item-add-text");
    input1.classList.add("item-add-dropdown");
    input2.classList.add("item-add-text");
    input3.classList.add("item-add-dropdown");
    input4.classList.add("item-add-dropdown");
    input5.classList.add("item-add-text");
    confirmItemBtn.classList.add("add-item-button");

    confirmItemBtn.addEventListener('click', function() {
        const gridContainer = document.querySelector(".grid-container");
        const newItemContainer = document.createElement("div");
        newItemContainer.classList.add("grid-item");
        gridContainer.appendChild(newItemContainer);

        const imgAdd = document.createElement("img");
        imgAdd.src = URL.createObjectURL(input6.files[0]);
        newItemContainer.appendChild(imgAdd);

        const newItemText = document.createElement("div");
        newItemText.classList.add("grid-item-text");
        newItemContainer.appendChild(newItemText);

        const newItemHeader = document.createElement("h1");
        newItemHeader.textContent = inputHeader.value; 
        newItemText.appendChild(newItemHeader);

        const listStart = document.createElement("ul");
        newItemText.appendChild(listStart);

        const list1 = document.createElement("li");
        list1.textContent = 'Type: ' + input1.selectedOptions[0].textContent;
        newItemContainer.classList.add(input1.value);
        listStart.appendChild(list1);

        const list2 = document.createElement("li");
        list2.textContent = 'Colour: ' + input2.value;
        listStart.appendChild(list2);

        const list3 = document.createElement("li");
        list3.textContent = 'Size: ' + input3.selectedOptions[0].textContent;
        newItemContainer.classList.add(input3.value);
        listStart.appendChild(list3);

        const list4 = document.createElement("li");
        list4.textContent = 'Gender: ' + input4.selectedOptions[0].textContent;
        newItemContainer.classList.add(input4.value);
        listStart.appendChild(list4);

        const list5 = document.createElement("li");
        list5.textContent = 'Condition: ' + input5.value;
        listStart.appendChild(list5);

        const orderBtn = document.createElement("button");
        orderBtn.textContent = "Order";
        newItemText.appendChild(orderBtn);
        orderBtn.classList.add("order");

        newItemContainer.classList.add("all");

        console.log(newItemContainer.classList);
        addItem.disabled = false;
        containerForm.remove();
        labelHeader.remove();
        label1.remove();
        label2.remove();
        label3.remove();
        label4.remove();
        label5.remove();
        label6.remove();
        inputHeader.remove();
        input1.remove();
        input2.remove();
        input3.remove();
        input4.remove();
        input5.remove();
        input6.remove();
        confirmItemBtn.remove();
    });
});

const orderBtns = document.querySelectorAll(".order");
orderBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        btn.disabled = true;
        btn.textContent = "Ordered!";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
    });
});
