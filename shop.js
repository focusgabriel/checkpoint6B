document.addEventListener("DOMContentLoaded", function(){
    const heart = document.querySelectorAll("#heart");
    const total = document.querySelector("#sum");
    const body = document.querySelectorAll("#c-body");
    const quantities = document.querySelectorAll(".quantity");
    const price = document.querySelectorAll("#subtotal");
    
    body.forEach(function(plus){
        plus.addEventListener("click", ()=> {
            let parentDiv = plus.parentElement;
            let add = parentDiv.querySelector("#plus");
            let minus = parentDiv.querySelector("#minus");
            let subtotal = parentDiv.querySelector("#subtotal")
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

            // calculating the quantity and price tag
            let perPrice = parentDiv.querySelector("#price");
            
            let result = parseInt(quantity.innerHTML) * parseInt(perPrice.innerHTML);

            subtotal.innerHTML = result;
            
            // summing the prices
            let sum = 0;  
            quantities.forEach(num => {
            sum += parseInt(num.innerHTML);
           });

           let sum1 = 0;
           price.forEach(num1 => {
            sum1 += parseInt(num1.innerHTML);
            
           })

            // total prices
        
           total.innerHTML = sum1;
           
           console.log(sum1)
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
