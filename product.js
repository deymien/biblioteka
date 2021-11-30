const form = document.querySelector("form");
const table = document.querySelector("table");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const array = [];
let rowIndex;

const createItem = () => {
    const name = document.querySelector("#name").value;
    const prize = document.querySelector("#prize").value;
    const species = document.querySelector("#species").value;
    const formData={
        name,
        prize,
        species,
    };
    array.push(formData);
    console.log(array)
    try{
        if(localStorage.getItem("bookList") === null){
            localStorage.setItem("bookList", JSON.stringify(array));
        } else {
            let storage = JSON.parse(localStorage.getItem("bookList"));
            storage.push(formData);
            localStorage.setItem("productList", JSON.stringify(storage));
            console.log(storage);
        }
    } catch (err) {
        console.error(err);
    }
}