function init() { 

    console.log("loading");

    var menu = document.getElementById("header-nav-list"),
        header = document.getElementsByTagName("header")[0],
        menuButton = document.getElementById("burger-icon"),
        menulinks = document.getElementsByClassName('header-nav-link')

    if(!menuButton.addEventListener){
        menuButton.attachEvent("onclick", function(e){
            toggleMenu();    
            e.preventDefault();
        });
    } else {
        menuButton.addEventListener('click', function(e){
            toggleMenu();    
            e.preventDefault();
        });
    }

    for(var link = 0; link < menulinks.length; link++){
        (function(){
            menulinks[link].addEventListener('click', toggleMenu);
        })();
    }

    function toggleMenu(){
        if(window.innerWidth <= 800){
            menu.style.height = menu.style.height === '162px' ? '0px' : '162px';
            header.style.top = header.style.top === '162px' ? '0px' : '162px';
        }
    } 
};

window.addEventListener('load', init);