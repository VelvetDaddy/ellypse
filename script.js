particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#ffffff"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 1,
            "random": false
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        }
    },
    "retina_detect": true
});

window.onload = function() {
    // Other scripts

    // Welcome Message Animation
    var welcomeMessage = document.getElementById('welcomeMessage');
    setTimeout(function() {
        welcomeMessage.style.opacity = 1;
        welcomeMessage.style.color = '#FFD700'; // Transition to gold color
    }, 1000); // Adjust timing as needed
};
