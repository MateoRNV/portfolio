<script>
    import { onMount } from "svelte";

    // Icons
    import Icon from "svelte-icon/Icon.svelte";
    import icons from "../libs/icons__svg.js";

    // Animations
    import animations from "../libs/header__animations";
    import { fade } from "svelte/transition";

    // imports cards
    import VueCard from "../components/Cards/VueCard.svelte";
    import SvelteCard from "../components/Cards/SvelteCard.svelte";
    import ReactCard from "../components/Cards/ReactCard.svelte";
    import NodeCard from "../components/Cards/NodeCard.svelte";
    import LaravelCard from "../components/Cards/LaravelCard.svelte";

    const skills = icons.svgSkillsCard;

    let init = false
    let currentCard = "vue";
    let y;

    onMount(() => {
        init = true;
    })

</script>

<svelte:window bind:scrollY={y} />

{#if init}

    <h1 in:animations.typewriter={{speed:1}} out:fade>Skills</h1>
    <div class="back__buttom"><a in:fade={{duration:2000, delay:1000}} out:fade  href="/" class:disappear={y >= 50}> &#8592 Home</a></div>

    <div in:fade={{duration:2000, delay:1000}} out:fade class="skills flex">
        {#each skills as { name, svg, icon, color, experience }}
            <div
                class="skill"
                class:active={currentCard === name}
                on:click={() => (currentCard = name)}
                style="background-color: {color}; background-image: url({svg});"
            >
            {#if currentCard == name}
                <div class="card__main" style="--scrollBarColor: {color}" in:fade={{duration:1000, delay:500}}>
                    {#if currentCard == "vue"}
                        <VueCard />
                        {:else if currentCard == "svelte"}
                        <VueCard />
                    {:else if currentCard == "react"}
                        <ReactCard />
                    {:else if currentCard == "node"}
                        <NodeCard />
                    {:else if currentCard == "laravel"}
                        <LaravelCard />
                    {/if}
                </div>
            {/if}
    
                <!-- Card header -->
                <div class="card__icon"><Icon data={icon} /></div>
                <div class="card__info">
                    <div class="card__info__title flex">
                        <h3>{name}</h3>
                        <span>{experience}</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <div style="height: 100vh;" class="more flex" in:fade={{duration:2000, delay:1000}} out:fade>
        <h2>More Skills</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla expedita, corrupti quibusdam error ullam eos molestiae molestias et repudiandae suscipit culpa iusto sunt voluptates a voluptatem, aperiam quaerat hic inventore!</p>
        <ul>
            <li><span>Git:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis in excepturi nesciunt </li>
            <li><span>Scrum .-</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam possimus cumque delectus consectetur a velit tenetur?</li>
            <li><span>Bootstrap </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quidem. Doloribus error magnam porro laudantium est repudiandae libero ipsum omnis, vel velit animi autem alias exercitationem molestias rerum delectus ut.</li>
            <li><span>Figma: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora repellendus atque facere laboriosam numquam debitis expedita voluptatibus fugiat ut. Saepe veritatis blanditiis tempore non perferendis voluptate nostrum libero expedita.</li>
        </ul>
    </div>

{/if}

<style lang="scss">
    // title
    h1 {
        margin: 3rem 0 2rem 0;
        font-family: $aclonica;
        font-weight: lighter;
        font-size: 30px;
        text-align: center;
    }
    .back__buttom{
        margin: 0 auto 2rem auto;
        width: 80%;
        transition: top 1s ease-out;
    }
    .disappear{
        position: absolute;
        top: -5rem
    }
    // skills section
    .skills {
        gap: 1rem;
        justify-content: space-between;
        margin: 0 auto;
        width: 65%;
        height: 65vh;
    }
    .skill {
        display: flex;
        justify-content: center;
        position: relative;
        min-width: 3.5rem;
        height: 100%;
        border-radius: 40px;
        background-position: center;
        background-repeat: no-repeat;

        transition: flex-grow 0.7s ease-out;
    }
    .active {
        flex-grow: 1;
        justify-content: flex-start;
        padding: 0 1.5rem;
    }
    .card__info {
        display: none;

        transition: all 0.7s ease-out;

        h3 {
            display: inline-block;
            margin: 0;
        }
    }
    .active .card__info {
        width: 80%;
        display: flex;
        align-items: flex-end;
        position: absolute;
        bottom: 0;
        padding: 1rem 2rem;

        .card__info__title {
            margin-left: 1.5rem;
            display: flex;
            flex-direction: column;

            h3 {
                font-size: 18px;
                text-transform: capitalize;
            }
            span {
                font-size: 14px;
            }
        }

        // border: 1px solid white;
    }
    //cards style and scrollbar
    .card__main {
        display: none;
        transition: all 0.7s ease-out;
        max-height: 19rem;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--scrollBarColor) transparent;
        
    }
    .card__main::-webkit-scrollbar {
        width: 0.5rem;
    }
    .card__main::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 100px;
    }
    .card__main::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-color: var(--scrollBarColor);
    }
    .active .card__main {
        display: flex;
        flex-direction: column;
        position: absolute;
        padding: 0 1rem;
        top: 7%;
    }
    .card__icon {
        position: absolute;
        bottom: 5%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 40px;
        max-width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: #212123;
    }
    //card opacity on click
    .skill.active::before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        border-radius: 40px;
        background-color: rgba(0, 0, 0, 0.5);
    }

    // more skills section
    .more{
        flex-direction: column;
        margin: auto;
        width: 80%;
        font-weight: lighter;
        h2{
            margin: 2rem 0 1rem 0;
            font-family: $varela;
            font-size: 25px;
            text-align: start;
        }
        li{
            margin: 1rem 0;
            & > span{
                margin-right: 1rem;
                // text-decoration: underline;
                font-weight: 500;
            }
        }

    }
</style>
