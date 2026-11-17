
const input = document.getElementById("block_id");
const colour = document.getElementById("colour_id");
const button = document.getElementById("change_button");
const reset = document.getElementById("Reset");

const items = document.querySelectorAll("#grid-item");


button.addEventListener("click", () => {

    const blockId = Number(input.value);
    const selectedColour = colour.value;

    if (input.value === "" || !Number.isInteger(blockId) || blockId < 1 || blockId > 9) {
        alert("Enter block ID between 1 and 9");
        return;
    }

    if (selectedColour.trim() === "") {
        alert("Please enter a color");
        return;
    }

  
    items.forEach((item) => {
        item.style.backgroundColor = "transparent";
    });


    const selectedItem = items[blockId - 1];


    selectedItem.style.backgroundColor = selectedColour;
});


reset.addEventListener("click", () => {

    items.forEach((item) => {
        item.style.backgroundColor = "transparent";
    });

    input.value = "";
    colour.value = "";
});
