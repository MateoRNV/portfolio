//White icons to bg
import reactWhite from "../images/react-white.svg?raw";
import figmaWhite from "../images/figma-white.svg?raw";
import laravelWhite from "../images/laravel-white.svg?raw";
import nodeWhite from "../images/node-white.svg?raw";
import svelteWhite from "../images/svelte-white.svg?raw";
import cssWhite from "../images/css-white.svg?raw";
import vueWhite from "../images/vue-white.svg?raw";

//Color icons to index
import vue from "../images/vue.svg?raw";
import svelte from "../images/svelte.svg?raw";
import react from "../images/react.svg?raw";
import node from "../images/node.svg?raw";
import laravel from "../images/laravel.svg?raw";
import sass from "../images/sass.svg?raw";
import html from "../images/html.svg?raw";
import css from "../images/css.svg?raw";
import javascript from "../images/javascript.svg?raw";

// Icons without raw
import vueSimple from "../images/vue.svg";
import svelteSimple from "../images/svelte.svg";
import reactSimple from "../images/react.svg";
import nodeSimple from "../images/node.svg";
import laravelSimple from "../images/laravel.svg"; 


const svgWhiteList=[ {svg: reactWhite, top: "-3%", left:"-3%", size: "80%", translateX:3, translateY:10, duration:2000, delay:1500},
    {svg: figmaWhite, top: "17%", left:"30%", size: "40%", translateX:3, translateY:10, duration:2000, delay:1500},
    {svg: laravelWhite, top: "16%", left:"59%", size: "75%", translateX:-4, translateY:4, duration:2000, delay:2500},
    {svg: nodeWhite, top: "-1%", left:"88%", size: "100%", translateX:-4, translateY:4, duration:2000, delay:2500},
    {svg: svelteWhite, top: "58%", left:"7%", size: "50%", translateX:4, translateY:-4, duration:2000, delay:3000},
    {svg: cssWhite, top: "70%", left:"42%", size: "53%", translateX:1, translateY:-4, duration:2000, delay:3000},
    {svg: vueWhite, top: "53%", left:"75%", size: "75%", translateX:-4, translateY:-4, duration:2000, delay:3000},
]

const svgWhiteListFirefox=[ {svg: reactWhite, top: "-3%", left:"-3%", size: "18%", translateX:3, translateY:10, duration:2000, delay:1500},
    {svg: figmaWhite, top: "17%", left:"30%", size: "12%", translateX:3, translateY:10, duration:2000, delay:1500},
    {svg: laravelWhite, top: "16%", left:"59%", size: "50%", translateX:-4, translateY:4, duration:2000, delay:2500},
    {svg: nodeWhite, top: "-1%", left:"88%", size: "100%", translateX:-4, translateY:4, duration:2000, delay:2500},
    {svg: svelteWhite, top: "58%", left:"7%", size: "13%", translateX:4, translateY:-4, duration:2000, delay:3000},
    {svg: cssWhite, top: "70%", left:"42%", size: "19%", translateX:1, translateY:-4, duration:2000, delay:3000},
    {svg: vueWhite, top: "53%", left:"75%", size: "72%", translateX:-4, translateY:-4, duration:2000, delay:3000},
]


//Color icons to index            
const svgColorList =[   {svg: vue, size: "12%"},
                        {svg: svelte, size: "12%"},
                        {svg: react, size: "12%",  opacity: 0.4},
                        {svg: node, size: "12%"},
                        {svg: laravel, size: "14%"},
                        {svg: sass,  size: "12%"},
                        {svg: html, size: "12%"},
                        {svg: css, size: "12%"},
                        {svg: javascript, size: "12%"},
            ]
            
const svgSkillsCard = [
    {name: "vue", svg: vueSimple, icon: vue, isActive: true, color: "rgba(0, 138, 120, 0.1)", experience: "2 years"},
    {name: "svelte", svg: svelteSimple, icon: svelte, isActive: true, color: "rgba(88, 57, 31, 0.35)", experience: "4 months"},
    {name: "react", svg: reactSimple, icon: react, isActive: true, color: "rgba(3, 33, 34, 0.35)", experience: "Learning"},
    {name: "node", svg: nodeSimple, icon: node, isActive: true, color: "rgba(2, 49, 16, 0.35)", experience: "1 year"},
    {name: "laravel", svg: laravelSimple, icon: laravel, isActive: true, color: "rgba(78, 23, 13, 0.35)", experience: "1 year"},
]


function iconsBackground(isFirefox) {
    if (isFirefox) {
        return svgWhiteListFirefox
    }else{
        return svgWhiteList
    }
}


export default {iconsBackground, svgColorList, svgSkillsCard};