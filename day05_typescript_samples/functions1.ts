/*
function eat(items: string) {
    console.log(`Eating ${items}`);
}*/

/*
let eat = function(items: string) {
    console.log(`Eating ${items}`);
}
*/
const eat = (items: string) => console.log(`Eating ${items}`);
eat('Rice');

const work = (hours: number) => {
    if(hours > 8) {
        console.log(`Slogging ${hours} hours`);
    } else {
        console.log(`Working ${hours} hours`);
    }
};
work(12);


// function doSomething() {}
// function doSomething() {}
// function doSomething() {}