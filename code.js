let plusBtns=Array.from(document.querySelectorAll(".plusBtns"))
let btnsMoins=Array.from(document.querySelectorAll('.btnsMoins'))
let favs=Array.from(document.querySelectorAll('.favs'))
let deletebtns=Array.from(document.querySelectorAll('.deletebtns'))

let container=Array.from(document.querySelectorAll('.card'))
console.log(favs)



for(let fav of favs){
    fav.addEventListener("click",function(){
        if(fav.style.background == "white" ) {
            fav.style.background = "red"
        }
        else
        {
            fav.style.background="white"
        }
    })
}

for (let i in deletebtns) {
    deletebtns[i].addEventListener("click", function(){
        container[i].remove() ,
    total()
    })
    
}

for (let plusBtn of plusBtns ){
    plusBtn.addEventListener("click" , function(){
        plusBtn.previousElementSibling.innerHTML++ ,
       total() 
    })
    
}
 for (let btnMoins of btnsMoins ){
    btnMoins.addEventListener("click" , function(){
        btnMoins.nextElementSibling.innerHTML > 0 ?
        btnMoins.nextElementSibling.innerHTML -- :
        null ,
        total()
    })
 }
 function total() {
    let quantity = Array.from(document.querySelectorAll(".quantity"));
    let price = Array.from(document.querySelectorAll('.price'));
    let s = 0
    for (let i = 0 ; i< price.length ; i++ )
    {s=s+price[i].innerHTML * quantity[i].innerHTML;
}
document.getElementById('Total').innerHTML = s

}

