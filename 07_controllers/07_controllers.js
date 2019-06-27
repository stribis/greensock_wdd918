

//console.log(navipoint);


const tl = new TimelineMax();

    tl
        .staggerFrom(".nitem", 2, {y:-300},0.2)
        .from("#logo", 1, {x:-2000})
        .from("#header p", 1, {x: 2000})
        .from("#footer, #banner, #main, #features", 1, {autoAlpha: 0});

// resume Animation
// this method will resume a paused timeline
$("#playAnimation").on("click", function(){
        tl.resume();
})
// Pause Animation
// this methid will pause the progress of a timeline
$("#pauseAnimation").on("click", function(){
        tl.pause();
})
//reverse Animation
// this method will reverse the playback direction of a timeline
$("#reverseAnimation").on("click", function(){
        tl.reverse();
})
//timescale +
// This method will make a timeline play faster ( more than one) or slower (less than one)
$("#timeplus").on("click", function(){
        tl.timeScale(2); // 2 meaning 2x as fast
})
//timescale -
$("#timeminus").on("click", function(){
        tl.timeScale(0.5); // 0.5 meaning half the speed
})
//seek
// this method will look for a specific time point in a timeline
$("#seek").on("click", function(){
        tl.seek(2); // we jump to 2 seconds progress
})
//progress
// this method works very similar to seek but works with percentage
// where 0 is 0% (start) and 1 is 100% (end)
$("#progress").on("click", function(){
        tl.progress(0.5); // go to 50% progress (the middle of the timeline)
})
//restart
// Restart playback of a timeline at 0s
$("#restart").on("click", function(){
        tl.restart();
})