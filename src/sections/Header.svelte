<script>
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";

    //animations and words for the header
    import animations from "../libs/header__animations";
    import   words  from "../libs/header__words";

    //import icons
    import Icon from "svelte-icon/Icon.svelte";
    import iconsList from "../libs/icons__svg";

    const fadeScale = animations.fadeScale;

    let init = false;
    onMount(() => {
        init = true;
    });

                    
</script>

<header class="header flex">


    {#if init} 

        {#each iconsList as {svg, top, left, size}}
            <div class="svg" style="top:{top}; left:{left}"> <Icon class="icon" data={svg} size={size} /> </div>
        {/each}
    
        <!-- h1: transition:fadeScale={{delay: 5000, duration: 2500, baseScale: 1.2}} -->
        <!-- h2: transition:fadeScale={{delay: 4500, duration: 2000, baseScale: 1.1}} -->
        <!-- p:  transition:fadeScale={{delay, duration}}-->
        <h1  class="header__title">Web Developer</h1>
        <h2  class="header__name"><span>Ma</span>teo <span>Na</span>rvaez</h2>

        {#each words as { name, top, left, delay, duration }}
            <p  style="top: {top}; left: {left}">{@html name}</p>
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
        font-family: $varela;
        font-size: 60px;
        color: $title;
        margin-bottom: 2rem;
    }
    .header__name {
        margin-top: 0;
        font-family: $varela;
        font-size: 35px;
        font-weight: 500;
        color: $name;

        & > span {
            @extend .name--gradient;
        }
    }
</style>
