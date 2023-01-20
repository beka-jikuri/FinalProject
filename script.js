let BurgerMenuIcon = document.querySelector(".fa-bars") ;
let MobMenu = document.querySelector(".nav_ul") ;

BurgerMenuIcon.addEventListener("click" , function(){
    MobMenu.classList.toggle("lft")
}) ;