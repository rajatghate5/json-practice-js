let mainContainer = document.getElementById("myData");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    printData(data);
    console.log(data);
  })
  .catch((err) => console.log(err));

// fetch("http://localhost:3001/post", {
//   method: "POST",
//   body: JSON.stringify({
//     id: 5,
//     name: "abc",
//     age: 35,
//   }),
//   headers: { "Content-type": "application/json; charset=UTF-8" },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     printData(data);
//     console.log(data);
//   });


let printData = (data) => {
  for (let i in data) {
    var div = document.createElement("p");
    div.innerHTML = "Name is " + data[i].body + " " + "age is " + data[i].title;
    mainContainer.appendChild(div);
  }
};

// fetch("http://localhost:3001/post", {
//   method: "POST",
//   body: JSON.stringify({
//     id: 5,
//     name: "abc",
//     age: 22
//   }),
//   headers: { "Content-type": "application/json; charset=UTF-8" },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     printData(data);
//   })
//   .catch((err) => console.log(err));

// fetch("http://localhost:3001/post/5", {
//   method: "PUT",
//   body: JSON.stringify({
//     name: "pqr",
//     age: 30
//   }),
//   headers: { "Content-type": "application/json; charset=UTF-8" },
// })
  
// fetch("http://localhost:3001/post/5", {
//   method: "PATCH",
//   body: JSON.stringify({
//     name: "rajat",
//   }),
//   headers: { "Content-type": "application/json; charset=UTF-8" },
// })


// fetch("http://localhost:3001/post/", {
//   method: "DELETE",
// })