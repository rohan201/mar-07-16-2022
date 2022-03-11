var doSomething = function (arg) {
    if (typeof (arg) === "function") {
        arg();
    }
    else {
        console.log("Please pass a function as argument");
    }
};
var sleep = function () { return console.log("Sleeping"); };
var play = function () { return console.log("Playing"); };
doSomething(sleep);
doSomething(play);
doSomething(12);
