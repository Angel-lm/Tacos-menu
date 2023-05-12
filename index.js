//Elementos

const logou = document.getElementById('logout');
const menunavimg = document.getElementById('navmenuimg');
const navmaster = document.getElementById('navmaster');
const navafter = document.getElementById('navafter');
const navghost = document.getElementById('navghost');
const heroo = document.getElementById('heroo');


let action = 0;

//Nav botones 

document.getElementById('beer').addEventListener('click',lanzarbeer);
document.getElementById('beverages').addEventListener('click',lanzarbeve);
document.getElementById('burrito').addEventListener('click',lanzarburrito);
document.getElementById('cocktail').addEventListener('click',lanzarcocktail);
document.getElementById('sides').addEventListener('click',lanzarsides);
document.getElementById('tacos').addEventListener('click',lanzartacos);
document.getElementById('topping').addEventListener('click',lanzartopping);
document.getElementById('wines').addEventListener('click',lanzarwines);

//menu secciones

const menumaster = document.getElementById('menumaster');
const beerbox = document.getElementById('beersbox');
const bevebox = document.getElementById('bevebox');
const burritobox = document.getElementById('burritobox');
const cockbox = document.getElementById('cockbox');
const sidesbox = document.getElementById('sidesbox');
const tacosbox = document.getElementById('tacosbox');
const toppingbox = document.getElementById('toppingsbox');
const spiritsbox = document.getElementById('spiritsbox');

const menuboxx = document.getElementById('menubox');


//intro
window.onload = function() {
    setTimeout(function(){
        logou.style.opacity = "0";
        setTimeout(function(){
            logou.style.display = "none";
            menunavimg.style.display = "flex";
            setTimeout(function(){
                menunavimg.style.opacity = "1";
                navmaster.style.background = "#dda245";
                setTimeout(function(){
                    navmaster.style.width = "100px";
                    navmaster.style.height = "100px";
                    navmaster.style.borderRadius = "50%";
                    navmaster.style.position = "fixed";
                    navmaster.style.right = "20px";
                    navmaster.style.bottom = "40px";
                    setTimeout(function(){
                        buttonstart();
                    },1000)
                },1500)
            },50)
        },1000)
    },100)
};


//botones

function buttonstart() {
    navmaster.addEventListener('click',function(){
    if(action == 0) {
            action = 1;
        navmaster.style.width = "50vw";
        navmaster.style.height = "100vh";
        navmaster.style.borderRadius = "0px";
        navmaster.style.position = "fixed";
        navmaster.style.right = "0px";
        navmaster.style.bottom = "0px";
        menunavimg.style.opacity = "0";
        setTimeout(function(){
            navafter.style.display = "flex";
            navghost.style.display = "flex";
            setTimeout(function(){
                navafter.style.opacity = "1";
                navghost.style.opacity = "1";
                action = 0;
                navghost.addEventListener('click', buttonend);
            },100);
        },500);
    }
    });

}


function buttonend(){
    if(action == 0){
        action = 1;
    navafter.style.opacity = "0";
    navghost.style.opacity = "0";
    setTimeout(function(){
        navafter.style.display = "none";
        navghost.style.display = "none";
        menunavimg.style.opacity = "1";
        action = 0;
    },500);
    navmaster.style.width = "100px";
    navmaster.style.height = "100px";
    navmaster.style.borderRadius = "50%";
    navmaster.style.position = "fixed";
    navmaster.style.right = "20px";
    navmaster.style.bottom = "40px";
    }
}



//lanzadores menu

function lanzarbeer(){
    reset();
    buttonend();
    beerbox.style.display = "flex";
}

function lanzarbeve(){
    reset();
    buttonend();
    bevebox.style.display = "flex";
}

function lanzarburrito(){
    reset();
    buttonend();
    burritobox.style.display = "flex";
}

function lanzarcocktail(){
    reset();
    buttonend();
    cockbox.style.display = "flex";
}

function lanzarsides(){
    reset();
    buttonend();
    sidesbox.style.display = "flex";
}

function lanzartacos(){
    reset();
    buttonend();
    tacosbox.style.display = "flex";
}

function lanzartopping(){
    reset();
    buttonend();
    toppingbox.style.display = "flex";
}

function lanzarwines(){
    reset();
    buttonend();
    spiritsbox.style.display = "flex";
}

//sublanzadores
function reset(){
    menuboxx.scroll(0,0);
    navafter.scroll(0,0);
    menumaster.style.display = "flex";
    heroo.style.display = "none";
    beerbox.style.display = "none";
    bevebox.style.display = "none";
    burritobox.style.display = "none";
    cockbox.style.display = "none";
    sidesbox.style.display = "none";
    tacosbox.style.display = "none";
    toppingbox.style.display = "none";
    spiritsbox.style.display = "none";
}