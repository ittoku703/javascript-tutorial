let myObj = {
  name: "shinzanmono",
  age: 25,
  FavoriteLanguages: [
    "Ruby",
    "JavaScript",
    "C"
  ]
}

// json -> string
let myString = JSON.stringify(myObj);
console.log(myString)

// string -> json
let myJson = JSON.parse(myString);
console.log(myJson);
