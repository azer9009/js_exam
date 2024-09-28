console.log("Hello World!");

const numberVar = 20;

const booleanVar = true;

const stringVar = "String variable";

function checker(n) {
    if (n % 2 === 0) {
        console.log("This Number is Even");
        
    }
    if (n % 2 > 0) {
        console.log("This Number is Odd");
        
    }
    
}

checker(7)

let numbers = []
for (let i = 0; i <= 10; i++) {
     numbers.push(i);
     if (i % 2 > 0) {
        console.log(i);
        
     }
} 


function sumArguments(a,b) {
    return a + b
}
console.log(sumArguments(5,10));

const sumNumbers =  (a,b) => a + b;
    
console.log(sumNumbers(5,10));

const testNumbers = [5,8,8,7,2,1,5,8,9,20]

console.log(testNumbers);


const doubleNumbers = testNumbers.map((x) => x*2)

console.log(doubleNumbers);

const filteredNumbers = doubleNumbers.filter((x) => x > 10)

console.log(filteredNumbers);

const book_xxx = {
    Name: "The Nudge",
    Author1:"Richard H. Thaler",
    Author2: "Cass R. Sunstein",
    Pages: 312,
    Publication_date : "April 8, 2008",
    Publisher: "Yale University Press"	
}

console.log(book_xxx);


function objectToArray(book_xxx) {
    return Array.from(Object.entries(book_xxx));
  }

const bookDescription = objectToArray(book_xxx)

console.log(bookDescription);

const btnContainer = document.getElementById("buttonContainer")
const btnCreaterBtn = document.getElementById("buttonCreaterBtn")

btnCreaterBtn.addEventListener("click" , function (){
    const ParagraphBtn = document.createElement("button")
    ParagraphBtn.innerHTML = "Paragraph creater"
    
    const changeColor = document.createElement("button")
    changeColor.innerHTML = "Change Color"

   

    

    btnContainer.appendChild(changeColor)

    console.log("btnclicked");
    btnContainer.appendChild(ParagraphBtn)

    ParagraphBtn.addEventListener("click", function (){
         const Paragraph = document.createElement("p")
        Paragraph.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, reiciendis amet commodi necessitatibus totam voluptatibus ratione cum eum libero et, in soluta non nemo odit vitae, incidunt illo sed recusandae."
        btnContainer.appendChild(Paragraph)
        Paragraph.style.fontSize = "25px"
        changeColor.addEventListener("click", function (){
            Paragraph.style.backgroundColor = "red"
        })
        if (Paragraph.style.backgroundColor = "red") {
            Paragraph.style.backgroundColor = "green"
        }
    });
    
});

let list = document.getElementById("ulDOM");

fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => {
        json.forEach(item => {
            let listItem = document.createElement("li")
            listItem.innerHTML = item.title;
            list.appendChild(listItem)
        });
      })
    
const randomArr1 = ["Lightning Mcqueen","Optimus Prime", "Spider-Man","Batman"]
const randomArr2 = ["Asus","CopyBook","Speaker","Github"]

const newRandomArr = [...randomArr1, ...randomArr2]
console.log(newRandomArr);

const Man = {
    name:"Thomas",
    age: 16,
    animal: "cat"

}

const {name,age,animal} = Man

console.log(name);
console.log(age);
console.log(animal);


class Person {
    constructor(name,age) {
        this.name = name,
        this.age = age
    }

    personDetails(){
        console.log(`name: ${this.name}`);
        console.log(`age: ${this.age}`);
        
    }

}

const newPerson = new Person("Rafiq", 52)


class Student extends Person {
    constructor(name,age,course){
        super(name,age)
        this.course = course
    }
    
    studentDetails(){
        console.log(`name: ${this.name}`);
        console.log(`age: ${this.age}`);
        console.log(`course: ${this.course}`);
        
    }

}

const newStudent  = new Student("Abdullah",21,"Computer Science")

newStudent.studentDetails()

newPerson.personDetails()

const nameInput  = document.getElementById("nameInput")


function welcomeMessage() {
    const namedata = localStorage.getItem("userName")
    const welcome = document.getElementById("message")
    if (namedata) {
        welcome.style.display = "block"
        welcome.textContent = `Xos Gelmisiniz, ${namedata}!`
        nameInput.style.display = "block"
    }
}

document.getElementById('save-btn').addEventListener('click', function() {
    const nameInputData = nameInput.value;


    localStorage.setItem('userName', nameInputData);

    welcomeMessage();
});

function numberChechker(n) {
    if (typeof n !== 'number') {
        throw new Error("This is not a Number");
        
    }
    console.log("It is a Number");
    
}

try {
    numberChechker(52)
    numberChechker("Speaker")
} catch (error) {
    console.log("Xeta bas verdi" + error );
    
}

Promise.resolve().then(() => {
    console.log("Message-1");
    setTimeout(() => {
      console.log("Message-2");
    }, 2000);
  });


function counter() {
	let count = 2;
	return function () {
		count++;
		console.log(count);
	};
}

const nextCounter = counter();
nextCounter(); 
nextCounter(); 
nextCounter(); 