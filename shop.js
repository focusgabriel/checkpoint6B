document.addEventListener("DOMContentLoaded", function(){
    const heart = document.querySelectorAll("#heart");
    const total = document.querySelector("#sum");
    const body = document.querySelectorAll("#c-body");
    // const quantities = document.querySelectorAll(".quantity");
    
    body.forEach(function(plus){
        plus.addEventListener("click", ()=> {
            let parentDiv = plus.parentElement;
            let add = parentDiv.querySelector("#plus");
            let minus = parentDiv.querySelector("#minus");
            let quantity = parentDiv.querySelector(".quantity");
            let y = parseInt(quantity.innerHTML);
            let x = parseInt(quantity.innerHTML);
            // console.log(plus);

            // decrementing using the - sign icon
            if(minus.addEventListener("click", ()=> {
                if(x == 0){
                    return 0;
                }
                quantity.innerHTML = x-1;
            }));

            //  incrementing using the + icon
            if(add.addEventListener("click", ()=> {
                quantity.innerHTML = y+1;
            }));
            
            // summing the prices
            let sum = 0;  
            body.forEach(num => {
            
            let perPrice = num.querySelector("#price");
            let quantity = num.querySelector(".quantity");
            
            sum += parseInt(perPrice.innerHTML) * parseInt(quantity.innerHTML);
           });
        
           total.innerHTML = sum;
           
           console.log(sum)
        });
    });

    // to change the heart colour

    heart.forEach((hrt) => {
        hrt.addEventListener("click", ()=> {
            if(hrt.style.color != "red"){
                hrt.style.color = "red";
            }
            else{
                hrt.style.color = "black";
            }
            
        })

    })
});
