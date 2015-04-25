function init() {    
    var menu = document.getElementById("header-nav-list"),
        header = document.getElementsByTagName("header")[0],
        menuButton = document.getElementById("burger-icon"),
        menulinks = document.getElementsByClassName('header-nav-link'),
        backup = document.getElementById('backtotop');

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

    var scrolling = false;
    window.addEventListener('scroll', function(e){
        if(!scrolling){
            scrolling = true;
            if(window.scrollY < window.innerHeight){
                backup.style.opacity = '0';
                window.setTimeout(function(){
                    backup.style.visibility = 'hidden';
                    scrolling = false;
                }, 1000);
            } else { 
                backup.style.opacity = '1';
                backup.style.visibility = 'visible';
                scrolling = false;
            }
        }
    })

    backtotop.addEventListener('click', function(e){
        window.scrollTo(0,0);
    });

    function toggleMenu(){
        if(window.innerWidth <= 800){
            menu.style.height = menu.style.height === '162px' ? '0px' : '162px';
            header.style.top = header.style.top === '162px' ? '0px' : '162px';
        }
    } 
};

window.addEventListener('load', init);