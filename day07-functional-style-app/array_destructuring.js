let arr = [100, 200, 300];
// let  x = arr[0];
// let y = arr[1];

let [x, y, z] = arr; //array destructuring
console.log(x, y, z);

const [a, b] = getArr();

function getArr() {
    return [10, 20 ,30];
}
console.log(a, b)