/* Stagger with Cycle */

/* It works besicaly the same way as stagger but allows you to animate
every second element in the selection in a different way as the others */
/* Animations with timeline */

const tl = new TimelineLite();

tl

    .staggerFrom(".circle", 3, { cycle:{
        y: [-600, 600],  //odds will start at -600px y evens at 600px y
        x: [-600, 600],  //odds will start at -600px x evens at 600px x
        backgroundColor: ["red", "green"]  // odds will be start from red, even from green
    }}, 0.2);
