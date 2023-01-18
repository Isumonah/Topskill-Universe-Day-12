let input = document.getElementById("input")
let submit = document.getElementById("submit")
let words = document.getElementById("words")
let unique = document.getElementById("unique")
let result = document.getElementById("result")

let myWord = '';




submit.addEventListener("click", function(){
  myWord += input.value;
  words.innerHTML += input.value
   input.value = "" ;
})

  unique.addEventListener("click", function(){
  let myResult = ""
  // let uniqueWord = myWord.toLowerCase()
  if(new Set(myWord).size === myWord.length){

    myResult = true
  }
    else{
    myResult = false
    }

    result.innerHTML += myResult
  })

