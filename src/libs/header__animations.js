import { sineOut } from 'svelte/easing';
import { quintOut } from 'svelte/easing';


const fadeScale = function(node,{delay = 1000, duration = 1000, baseScale = 1,translateX = 0, translateY = 0, easing = sineOut => sineOut}){
    const opacity = +getComputedStyle(node).opacity;
    const s = 1 //check if node is a number and has and initial scale
    const is = 1 - baseScale 
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

const fadeScaleInOut = function(node, {delay = 10000, duration= 10000, opacity= 0.6, baseScale = 3}){

    const is = 1 - baseScale

    return{
        delay,
        duration,
        css: (t,u) => {
            const easedT = quintOut(t);
            const easedU = quintOut(u);
            return `opacity: ${easedU * 0.6}; transform: scale(${(easedT * is)+baseScale})`;
        }
    }
}

const typewriter = function(node,{ speed = 2}){

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
        duration,
        tick: t => {
            const i = Math.trunc(text.length * t);
            node.textContent = text.slice(0, i);
        }
    };
};

export default { typewriter, fadeScale, fadeScaleInOut};