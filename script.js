$(function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 110,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.7,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "top",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 4,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    var update;
    update = function() {
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {}
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
});

var x = 'b'

function display(str) {
    document.getElementById('bgdiv').style.display = 'flex';
    // document.getElementById('particles-js').height = '100%';
    document.body.style.overflowY = 'scroll';
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
    document.getElementById('name').style.transition = '1s';
    document.getElementById('name').style.opacity = '1';
    let lbar = document.getElementById('lbar');
    let div = document.getElementById('bgdiv');
    if (str == 'Pyro') {
        div.style.backgroundImage = 'linear-gradient(#3a0000, #5a0000, #700000, #5a0000, #3a0000)';
        lbar.style.backgroundColor = 'rgba(117, 38, 38, 0.5)'
    } else if (str == 'Hydro') {
        div.style.backgroundImage = 'linear-gradient(rgb(0,50,120), rgb(0,70,180), rgb(0,100,200), rgb(0,70,180), rgb(0,50,120))';
<<<<<<< Updated upstream
        lbar.style.backgroundColor = 'rgba(0, 30,100, 0.5)'
    } else if (str == 'Anemo') {
        div.style.backgroundImage = 'linear-gradient(rgb(0,160,160), rgb(40,190,190), rgb(60,220,220), rgb(40,190,190), rgb(0,160,160))';
        lbar.style.backgroundColor = 'rgba(0,80,80,0.5)'
    } else if (str == 'Electro') {
        div.style.backgroundImage = 'linear-gradient(rgb(50,20,120), rgb(80,40,150), rgb(120,80,190), rgb(80,40,140), rgb(50,20,120))';
        lbar.style.backgroundColor = 'rgba(70,50,130, 0.5)'
    } else if (str == 'Cryo') {
        div.style.backgroundImage = 'linear-gradient(#67aecb,#87ceeb,#97defb,#87ceeb,#87ceeb,#67aecb)';
        lbar.style.backgroundColor = 'rgba(103, 174, 203, 0.5)'
    } else if (str == 'Geo') {
        div.style.backgroundImage = 'linear-gradient(rgb(185,125,0), rgb(225,185,0), rgb(255,215,0), rgb(225,185,0), rgb(185,125,0))';
        lbar.style.backgroundColor = 'rgba(145,85,0, 0.5)'
=======
    }
    else if(str == 'Anemo')
    {
        div.style.backgroundImage = 'linear-gradient(rgb(0,160,160), rgb(40,190,190), rgb(60,220,220), rgb(40,190,190), rgb(0,160,160))';
    }
    else if(str == 'Electro')
    {
        div.style.backgroundImage = 'linear-gradient(rgb(0,160,160), rgb(40,190,190), rgb(60,220,220), rgb(40,190,190), rgb(0,160,160))';
    }
    else if(str == 'Cryo')
    {
        div.style.backgroundImage = 'linear-gradient(rgb(0,160,160), rgb(40,190,190), rgb(60,220,220), rgb(40,190,190), rgb(0,160,160))';
    }
    else if(str == 'Geo')
    {
        div.style.backgroundImage = 'linear-gradient(#dfc118, #e0c734, #ecd65a, #e0c734, #dfc118)';
>>>>>>> Stashed changes
    }

    createObj(str);

    //Randomcomment
}