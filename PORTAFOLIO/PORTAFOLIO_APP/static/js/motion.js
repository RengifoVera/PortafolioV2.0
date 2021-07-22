gsap.from("#entrada", {duration: 2, x: 300, opacity: 0, scale: 0.5});

let tween = gsap.from('.circle', {
            duration: .3,
            y: -200, //'random(-500,500)',
            scale: 0,
            stagger: 0.5,
            delay: 2.8 // it's better to use timeline
        });

