<script>
    import Icon from "svelte-icon/Icon.svelte";
    import arrow from "../images/arrow.svg?raw";
    
    $: setTheme = (theme, color) => { document.documentElement.className = theme; arrowColor = color };
    $: arrowColor = "#34432E";

    const themes = [{name: "green", color: "#34432E"},{name: "blue", color: "#282A3F"},{name: "dark", color: "#000"}]
    
</script>

    <div class="themes__box flex">

        {#each themes as {name, color}}
            <button on:click={setTheme(name, color)} title="Green mode" style="color: {color};">
                <div class="circle-color" style="background-color:{color};"/>
                {name}
            </button>
        {/each}

        <div class="arrow" on:click={displayMenu}><Icon data={arrow} size="70%" color="white" stroke="white" fill="{arrowColor}"/></div>
    </div>



<style lang="scss">
    .arrow{
        width: 1.5rem;
        position: absolute;
        top: 39%;
        right: 6.5rem;
        background-color: transparent;
        border: none;
    }
    .themes__box{
        flex-direction: column;
        align-items: baseline;
        position: fixed;
        padding: 1.5rem 1.1rem 1.5rem 2.7rem;
        right: 0;
        top: 41.5%;
        color: black;
        background-color: rgba(255, 255, 255, 0.842);
        border-radius: 70px 0 0 70px;

        button{
            display: flex;
            align-items: center;
            text-transform: capitalize;
            border: none;
            background: none;
        }
        .circle-color{
            display: inline-block;
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid rgb(83, 83, 83);
            border-radius: 50%;
            margin: .2rem;
        }
    }
</style>