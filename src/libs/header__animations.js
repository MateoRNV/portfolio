import { sineOut } from 'svelte/easing';
import { quintOut } from 'svelte/easing';


const fadeScale = function(node,{delay = 1000, duration = 1000, baseScale = 1,translateX = 0, translateY = 0, easing = sineOut => sineOut}){
    const opacity = +getComputedStyle(node).opacity;
    const s = 1 //check if node is a number and has and initial scale
    const is = 1 - baseScale 

    console.log(delay, duration);
    return{
        delay,
        duration,
        css: (t, u) => {
            const easedT = easing(t);
            const easedU = easing(u);
            return `opacity: ${easedT * opacity}; transform: scale(${(easedT * is) + baseScale}) translate(${easedU*translateX}%,${easedU*translateY}% )`;
        }
    }
}

const fadeScaleInOut = function(node, {delay = 10000, duration= 10000, }){

    return{
        delay,
        duration,
        css: (t,u) => {
            const easedT = quintOut(t);
            const easedU = quintOut(u);
            return `opacity: ${easedU * 0.6}; transform: scale(${(easedT * -2)+3})`;
        }
    }
}

const test = function(node,{}){
    let duration = 3000;
    return{
        duration,
        css: (t,u) => {
            return `opacity: ${t};transform: scale(${(u * 1)+1})`;
        }
    }
};

export default { test, fadeScale, fadeScaleInOut};