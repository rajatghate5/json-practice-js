var mainContainer = document.getElementById("myData");
//  Get Method ------------------------------------------
fetch("http://localhost:3001/post")
  .then((res) => res.json())
  .then((res) => {
    printData(res);
  });

// Post Method ------------------------------------------
fetch("http://localhost:3001/post", {
  method: "POST",
  body: JSON.stringify({
    id: 6,
    name: "xyz",
    age: 26,
  }),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    printData(data);
  })
  .catch((err) => console.log(err));


//  Put Method ------------------------------------------------------

// fetch("http://localhost:3001/post/6", {
//   method: "PUT",
//   body: JSON.stringify({
//     name: "rajat",
//     age: 26,
//   }),
//   headers: { "Content-type": "application/json; charset=UTF-8" },
// })
//   .then((res) => res.json())
//   .then((data) => printData(data))
//   .catch((err) => console.log(err));

// Patch Method -----------------------------------------------------------

// fetch("http://localhost:3001/post/6", {
//   method: "PATCH",
//   body: JSON.stringify({
//     age: 30,
//   }),
//   headers: { "Content-type": "application/json; charset=UTF-8" },
// })
//   .then((res) => res.json())
//   .then((data) => printData(data))
//   .catch((err) => console.log(err))

// Delete Method --------------------------------------------------
// fetch("http://localhost:3001/post/6", {
//   method: "DELETE",
// });

function printData(data) {
  //  Print Using For Loop
  // for (var i = 0; i < data.length; i++) {
  //   var div = document.createElement("p");
  //   div.innerHTML = "Name is " + data[i].name + " " + "age is " + data[i].age;
  //   mainContainer.appendChild(div);
  // }

  for(let i in data){
    var div = document.createElement("p");
    div.innerHTML = "Name is " + data[i].name + " " + "age is " + data[i].age;
    mainContainer.appendChild(div);
  }

  // Print Using Map method
  //   data.map((data) => {
  //     var div = document.createElement("p");
  //     div.innerHTML = "Name is " + data.name + " " + "age is " + data.age;
  //     mainContainer.appendChild(div);
  //   });

  // Print Using for-Each
  //   data.forEach((element) => {
  //     let p = document.createElement("p");
  //     p.innerHTML = `Name is ${element.name} and age is ${element.age}`;
  //     mainContainer.appendChild(p);
  //   });
}
