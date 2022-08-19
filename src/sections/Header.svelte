<script>
    import { onMount } from "svelte";
	import { fade } from 'svelte/transition';

    //animations and words for the header
    import animations from "../libs/header__animations";
    import   words  from "../libs/header__words";

    //import icons
    import Icon from "svelte-icon/Icon.svelte";
    import icons from "../libs/icons__svg";

    //animations funcitons
    const fadeScale = animations.fadeScale;
    const fadeScaleInOut = animations.fadeScaleInOut;

    let iconList = [];
    let init = false;

    onMount(() => {
        init = true;
        
        //firefox sizes
        let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        iconList = icons.iconsBackground(isFirefox)
    });
                    
</script>

<header class="header flex">
    {#if init} 

        {#each  iconList as {svg, top, left, size, delay, duration, translateX, translateY}}
            <div out:fade={{duration:1000, delay:0.1000}} in:fadeScale={{delay, duration, translateX, translateY}} class="svg" style="top:{top}; left:{left}"> <Icon data={svg} size={size} /> </div>
        {/each}
        
        <span out:fade={{duration:1, delay:0.1000}} in:fadeScaleInOut={{delay: 1000, duration: 2500}} class="header__title welcome">Welcome</span>
        <h1 out:fade={{duration:1000, delay:0.1000}} in:fadeScale={{delay: 4500, duration: 2000, baseScale: 0.8, translateX: -2, translateY: -3}}  class="header__title">Web Developer</h1>
        <h2 out:fade={{duration:1000, delay:0.1000}} in:fadeScale={{delay: 4500, duration: 2200, baseScale: 0.9}} class="header__name"><span>Ma</span>teo <span>Na</span>rvaez</h2>

        {#each words as { name, top, left, delay, duration }}
            <p  out:fade={{duration:1000, delay:0.1000}} in:fadeScale={{delay, duration}} style="top: {top}; left: {left}">{@html name}</p>
        {/each}

    {/if}
</header>

<style lang="scss">
    .svg{
        position: absolute;
        opacity: 0.1;
    }
    p {
        position: absolute;
        color: $bg-text-color;
    }
    .header {
        flex-direction: column;
        height: 100vh;
        width: 100%;
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .header__title {
        margin-bottom: 2rem;
        font-family: $varela;
        font-size: 60px;
    }
    .header__name {
        margin-top: 0;
        font-family: $varela;
        font-size: 35px;
        font-weight: 500;

        & > span {
            @include name--gradient;
        }
    }
    .welcome{
        position: absolute;
        opacity: 0;
    }
</style>
