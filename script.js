var isthmus = document.querySelector("h5")

var btn = document.querySelector("#add")
var check = 0
btn.addEventListener("click",function(){
  if (check == 0) {
    isthmus.innerHTML = "friends"
  isthmus.style.color= "green"
  btn.innerHTML = "remove friend"
  check = 1
  }else{
    isthmus.innerHTML = "no friend"
  isthmus.style.color= "red"
   btn.innerHTML = "add friend"
  check = 0
  }

})



