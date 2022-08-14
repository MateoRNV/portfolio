<script>
    import Icon from "svelte-icon/Icon.svelte";
    import arrow from "../images/arrow.svg?raw";

    const themes = [{name: "green", color: "#34432E"},
                    {name: "blue", color: "#282A3F"},
                    {name: "dark", color: "#000"}];
    
    $: setTheme = (theme, color) => { document.documentElement.className = theme; arrowColor = color };
    $: arrowColor = "#34432E";

    let isDisplayed;

    function displayMenu() {
        const theme = document.getElementsByClassName("themes__box")[0];
        const arrow = document.getElementsByClassName("arrow")[0];
        if(isDisplayed){
            theme.style.right = "-6rem";
            theme.style.padding = "0";
            arrow.style.transform = "rotate(0deg)";
            isDisplayed = false;
        }else{
            theme.style.right = "0";
            theme.style.padding = "1.5rem 1.1rem 1.5rem 2.7rem";
            arrow.style.transform = "rotate(180deg)";
            isDisplayed = true;
        }
    }
    
</script>

    <div class="themes__box flex">

        {#each themes as {name, color}}
            <button on:click={setTheme(name, color)} title="Green mode" style="color: {color};">
                <div class="circle-color" style="background-color:{color};"/>
                {name}
            </button>
        {/each}

        <div class="arrow" style="right: {isDisplayed == true ? '6.5rem' : '5.8rem'};" on:click={displayMenu}><Icon data={arrow} size="70%" color="white" stroke="white" fill="{isDisplayed == true ? arrowColor : '#fff'}"/></div>
    </div>

<style lang="scss">
    .arrow{
        width: 1.5rem;
        position: absolute;
        top: 37%;
        right: 5.8rem;
        background-color: transparent;
        border: none;
        transition: transform 0.5s ease-out;
    }
    .themes__box{
        flex-direction: column;
        align-items: baseline;
        position: fixed;
        right: -6rem;
        top: 39.5%;
        padding: 0;
        color: black;
        background-color: rgba(255, 255, 255, 0.842);
        border-radius: 70px 0 0 70px;
        transition: right 0.5s ease-out, padding 0.5s ease-out;

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