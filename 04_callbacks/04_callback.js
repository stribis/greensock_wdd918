/* callback */

/* Animations with timeline */
// for this example we will be using TimelineMax, which we can access by simply importing tweenmax
const tl = new TimelineMax();

// In tweenMax we can simply write CSS selecors directy as strings instead of having to save them into variables

    // there are numerous callback functions in greensock
    // here are the most important

    tl  
    .from(".tl.one", 1, {x: -2000, onStart: myStartFunction}) //onStart is called when a tween starts
    .from(".tl.two", 1, {x: 2000, onUpdate: myUpdateFunction}) // onUpdate is called every frame a tween is being animated
    .from(".tl.three", 1, {y: -2000})
    .from(".tl.four", 1, {y: 2000, onComplete: myEndFunction})  //onComplete is called when a tween is finished
    // Notice how the callbacks are defined for a tween and not for the whole animation
    

    // Lets declare the functions that will be called by all callback function
    // nothing special here

    function myStartFunction(){
        console.log("Started");
    }

    function myEndFunction(){
        console.log("ended");
    }

    // This counters starts at 0 and every time the myUpdateFunction function is called, it will be increased by one
    var foo = 0; 
    function myUpdateFunction(){
        foo++;
        console.log("two has been updated " + foo + " times");

    }