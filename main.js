// let btn = document.getElementById("btn");

// btn.addEventListener("click", function (event) {
//   event.preventDefault
//   let firstname = document.getElementById("name-inp").value;
//   let number = document.getElementById("num-inp").value;
//   console.log(firstname, number);
// });

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let firstname = document.getElementById("name-inp").value;
//   let number = document.getElementById("num-inp").value;
//   console.log(firstname, number);
// });

const cars = ["Saab", "Volvo", "BMW","John", "Doe", 46]; 

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// for (let name of cars){
//     console.log(i)
// }

// [volvo, undef]
// const car = cars.map((carName, index) => {
//   console.log(carName);
//   if(carName.length > 3){
//     return carName;
//   }
// })


//[vovlo,]
// const c1 = cars.filter((e,i,a) => {
//     if(e.length > 3){
//         return e;
//       }
// })

// Fliter

// const c1 = cars.filter(e => e.length > 3)

// console.log(car)
faldsfhsaldkd
// console.log(c1);

const data = async() => {
    const data = await fetch("http://localhost:4000/getTheData");
    console.log(data);
}

data()