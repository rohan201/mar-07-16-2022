// const doSomething = (arg: any) => {
//     if(typeof(arg) === "function") {
//         arg();
//     } else {
//         console.log("Please pass a function as argument");
//     }
// }

// const doSomething = (arg: () => void) => {
//     arg();
// }

type ArgType = () => void;
const doSomething = (arg: ArgType) => arg();

const sleep = () => console.log("Sleeping");
const play = () => console.log("Playing");
function read() {
    console.log('Reading');
}

doSomething(sleep);
doSomething(play);
doSomething(read);
doSomething(() => console.log('WTH is going on'));
doSomething(function() { console.log('I am scratching my head now'); })
//doSomething(12); //Error