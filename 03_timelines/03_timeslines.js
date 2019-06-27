/* Since we linked jQuery before our code, we can use it to select HTML nodes */
/* Alternatively you could always use vanilla js */
const block = $('#block');
const myh1 = $("#myh1");
const circle = $("#circle");
// For this example we will be using TimelineLite which is a minimalist timeline library
// You can also tweenMax if you desire, which contains the timelineMax library, but it is a bit heavier

// Our first step is to create a new instance of the Timeline library,
// notice that the T is capalized, this is a sign that this is not a normal variable
// In this case this is an example of a class, an we are creating a new instance of this class and saving
// it in the constant tl
const tl = new TimelineLite();
// Now we can access the instance of this timeline by simple calling tl
tl
    .to(block, 2, {autoAlpha: 0, x: 200, y: 200, width:"200px", height:"200px"})
    .from(myh1, 2, {autoAlpha: 0})
    .to(circle, 2, {y: 150, x: 150, scale:2, ease:Power3.easeOut})
// Notice that the syntax is very similar to the one used in tween, basically all we are doing is chaining tweens together
// all notice how the whole thing is one statement chained together by dots 
// in fact this whole timeline can be writen in one single statement