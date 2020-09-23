let like = document.querySelectorAll(".like-btn");
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    if (like[i].style.color == "grey") like[i].style.color = "red";
    else like[i].style.color = "grey";
  });
}

let btnPlus = document.querySelectorAll(".plus");
let itemPrice = document.querySelectorAll(".itemPrice");
let itemval = document.querySelectorAll(".itemval");
let btnMoins = document.querySelectorAll(".moins");



// events& actions
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function () {
    // alert("hello")
    //console.log(btnPlus[i].previousElementSibling)
    btnPlus[i].previousElementSibling.value++;
    itemval[i].innerHTML = parseInt(itemval[i].innerHTML) + parseInt(itemPrice[i].innerHTML);
    
      total()
  });
}

for (let i = 0; i < btnMoins.length; i++) {
  btnMoins[i].addEventListener("click", function () {
    if (btnMoins[i].nextElementSibling.value > 0) {
      btnMoins[i].nextElementSibling.value--;
      total()
    } else {
      alert("you cant decrement");
    }
  });
}

function total() {
  let priceProduct = Array.from(document.getElementsByClassName("itemval"));
  
  let sum=0
  for (let i = 0; i < priceProduct.length; i++) {
    sum=sum+Number(priceProduct[i].innerHTML)
  }
  document.querySelector(".total").innerHTML=sum
}


  let del = document.querySelectorAll(".delete-btn");
  
  for (let i = 0; i < del.length; i++) {
   del[i].addEventListener("click", function () {
     del[i].parentElement.parentElement.remove()
     total();
}
   )};    
  


  