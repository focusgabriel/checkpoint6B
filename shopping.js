// document.addEventListener("DOMContentLoaded", function(){
//     let x = document.querySelector("#quantity1");
//     let add = document.querySelector("#plus1");
//     let minus = document.querySelector("#minus1");
//     let heart = document.querySelector("#heart");
//     let thrash = document.querySelector("#trash");
//     let socks_price = document.querySelector("#socks_price");
//     let total = document.querySelector("#sum");
//     // quantity.innerHTML+= 1;

//     let y = 1;
//     add.addEventListener("click", ()=>{
    
//     x.innerHTML = y;
    
//     ++y;
//     total.innerHTML = parseInt(socks_price.innerHTML) * parseInt(x.innerHTML) + " $" ;
//     });

//     minus.addEventListener("click", ()=>{
//     x.innerHTML = --y;
//     total.innerHTML = parseInt(socks_price.innerHTML) * parseInt(x.innerHTML) + " $" ;
//     if(y == 0){
//         x.innerHTML = 0;
//     }
//     });


//     heart.onclick = ()=> {
//         if(heart.style.color != "red"){
//             heart.style.color = "red";
//         }
//         else{
//             heart.style.color = "black";
//         }
//     }

    
//   });

// // document.querySelector("#button").onclick = ()=>{
// //     document.querySelector("body").style.backgroundColor = "red";
// // }