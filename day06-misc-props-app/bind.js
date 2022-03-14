
let person = {
    name: 'Sam',
    printInfo() {
        console.log(`Name: ${this.name}`);
    },
    printSomething: () => {
        console.log(`Arrow: name ${this.name}`);
    }
};

person.printInfo(); //printInfo gets executed inside the context of person object; so this.name refers to Sam
person.printSomething();


let printData = person.printInfo;
printData(); //printData gets executed inside a global  context; this.name doesn't mean anything; so you get undefined

let f = printData.bind(person); //please execute this printData method inside the context of person
f();//so this.name refers to Sam

