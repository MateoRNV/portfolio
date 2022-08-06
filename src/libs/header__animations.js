import { sineOut } from 'svelte/easing';


const fadeScale = function(node,{delay = 1000, duration = 1000, baseScale = 1, easing = sineOut => sineOut}){
    const opacity = +getComputedStyle(node).opacity;
    const s = 1
    const is = 1 - baseScale 

    console.log(delay, duration);
    return{
        delay,
        duration,
        css: t => {
            const eased = easing(t);
            return `opacity: ${eased * opacity}; transform: scale(${(eased * s * is) + baseScale})`;
        }
    }
}

const header = function headerAnimation(
    node, { delay = 0, duration = 2000, easing = x => x, baseScale = 0 }
) {
    const o = +getComputedStyle(node).opacity;
    const m = getComputedStyle(node).transform.match(/scale\(([0-9.]+)\)/);
    const s = m ? m[1] : 1;
    const is = 1 - baseScale;

    return {
        delay,
        duration,
        css: t => {
            const eased = easing(t);
            return `opacity: ${eased * o}; transform: scale(${(eased * s * is) + baseScale})`;
        }
    }
}
const test = "testV";
export default {header, test, fadeScale};