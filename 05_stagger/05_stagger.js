/* callback */

/* Animations with timeline */

const tl = new TimelineMax();
// Stagger can animate multiple elements, in a staggered matter without you having to animate each individually
tl
    // Since stagger works for MULTIPLE ELEMENTS you want to make sure that
    // your selector selects MULTIPLE ELEMENTS and not only one

    // Stagger elements using .from tweens with staggerFrom()
    // .staggerFrom(".block", 3, {y:-1000},0.3);

    // Stagger elements using .to tweens with staggerTo
    // .staggerTo(".block", 3, {y:300},0.3);

    // We can also use fromTo
    .staggerFromTo(".block", 3, {y:300},{y:-300},0.3)
    // The syntax is fairly simple:
    //staggerFromTo.('elements', duration, properties[from], properties[to], stagger delay between elements)
