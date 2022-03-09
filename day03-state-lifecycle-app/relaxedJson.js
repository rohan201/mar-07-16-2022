let model = "BMW";
let year = 2021;

//OLD STYLE

// let car = {
//     model: model,
//     year: year
// };

let car = {
    model,
    year
};

let book = {
    title: "Hacks",
    price: 1010
};

//OLD STYLE
// let title = book.title;
// let price = book.price;

//Destructuring
let {title, price} = book;

let arr = [10, 20, 30];

//Array destructuring
//React Hooks
let [x, y] = arr;
