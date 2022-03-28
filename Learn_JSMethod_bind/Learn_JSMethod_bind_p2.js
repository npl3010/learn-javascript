const person = {
    fName: 'Uyen',
    lName: 'Do',
    getFullName() {
        console.log(`${this.fName} ${this.lName}`);
    }
}


// Add event handler:
const button1 = document.querySelector('#button-1');
const button2 = document.querySelector('#button-2');
const button3 = document.querySelector('#button-3');


// Case 1: từ khóa 'this' trong getFullName() chỉ tới person.
button1.onclick = function () {
    person.getFullName();
}

// Case 2: từ khóa 'this' trong getFullName() chỉ tới button2.
button2.onclick = person.getFullName;

// Case 3: từ khóa 'this' trong getFullName() chỉ tới person.
button3.onclick = person.getFullName.bind(person);