/* Since we linked jQuery before our code, we can use it to select HTML nodes */
/* Alternatively you could always use vanilla js */

const block = $('#block');
const myh1 = $("#myh1");
const circle = $("#circle");

/* Tweens are simple point to point animations and are the simples animations you can do using greensock */
/* The syntax is a bit peculiar, but once you learned it you can use it for other greensock function */

/* For this example we are going to use the minimalist plugin tweenlite, but it would also work with the heavier library tweenmax */

// First we call the TweenLite library, which we linked in the HTML using a script tag
// Then we have to define which kind of animation we want to do, in this case we are using 'to' 
// to takes animates an element properties from it's original values to new values
// .to is a method with multiple parameters :
// .to(elementWeWantToAnimate, durationOfAnimation, propertyValuesInAnObject)
// this piece of code will animate the block's width and height to 200px in 2 seconds
TweenLite.to(block, 2, {width:"200px", height:"200px"});

// There are other types of animations types.
// From animates from the given property values to the elements original propery values
// It is like a reversed .to
TweenLite.from(block, 2, {width:"300px", height:"300px"});

// Set is not an animtion, notice it doesn't have a duration parameter
// This just changes an element's original property values to new ones
TweenLite.set(block, {width:"200px", height:"200px"});

// FromTo is a mix of .from and .to
// Notice it requires 2 objects instead of 1
// The first object corresponds to .from, and the second corresponds to .to
TweenLite.fromTo(block, 2, {width:"200px", height:"200px"}, {width:"400px", height:"600px"});

// We can animate normal CSS properties or others provided in the CSS Plugin 
// for example autoAlpha which also sets visibility to invisible once opacity reaches 0

// We can also add delays to tweens, adding the delay property in the object
TweenLite.to(block, 2, {autoAlpha: 0, x: 200, y: 200, width:"200px", height:"200px", delay: 0});
TweenLite.from(myh1, 2, {autoAlpha: 0, delay: 2});
// Greensock also supports easing 
// Check out https://greensock.com/ease-visualizer for more information
TweenLite.to(circle, 2, {y: 150, x: 150, scale:2, ease:Power3.easeOut, delay: 4});



