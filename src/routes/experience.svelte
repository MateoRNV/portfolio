<script>
    import { onMount } from "svelte";
    import Navbar from "../components/Navbar.svelte";
    import animations from "../libs/header__animations";
    import { fade } from "svelte/transition";

    const typewriter = animations.typewriter;

    let init = false;

    onMount(() => {
        init = true;
    });
</script>

<Navbar scroll={true} />

{#if init}

<main>
    <section in:fade={{ duration: 2000, delay: 1500 }} out:fade class="flex buttons">
        <button>Freelance</button><button>Internship</button><button
            >Courses</button
        ><button>University</button>
    </section>

    <div class="cards flex">
        <h1 in:typewriter={{ speed: 1 }} out:fade>Experience</h1>
    </div>
</main>

{/if}
<style lang="scss">
    main {
        width: 80%;
        margin: auto;
    }
    .buttons {
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 8rem;
        gap: 8rem;
        button {
            position: relative;
            padding: 0.7rem 2rem;
            font-family: $josefin;
            font-size: 20px;
            color: white;
            border: transparent;
            background: linear-gradient(135deg, rgba(255,255,255,1) 48%, var(--bg-color) 50%);
            background-size: 300%;
            background-position: 100%;
            background-repeat: no-repeat;
            border-radius: 20px;
            animation: buttonAnimationReverse 1s;
            animation-fill-mode: forwards;
            transition: color 1s;
        }
        button:hover {
            transition: color 1s;
            animation: buttonAnimation 1s;
            animation-fill-mode: forwards;
            color: var(--bg-color);
            cursor: pointer;
        }
    }
    h1{
        font-family: $josefin;
        font-size: 45px;
        font-weight: 500;
        color: white;
    }
    .cards{
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 3rem auto;
        width: 45rem;
        height: 20rem;
        background-color:  var(--bg-color);
        transition: background-color 2.5s ease;
    }
    .cards:before, .cards:after {
        content: '';
        position: absolute;
        left: -2px;
        top: -2px;
        // grey : #4e4e4e86
        background: linear-gradient(155deg, var(--bg-color) 40%, #ffffff 45%,#ffffff 55%, var(--bg-color) 40%);
        background-size: 500%;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        z-index: -1;
        animation: borderAnimation 4s linear infinite;
        // animation-direction: alternate;
    }
    .cards:after {
        filter: blur(10px);
    }

    @keyframes borderAnimation {
	0% {
		background-position: 83% 83%;
	}
	50% {
		background-position: 50% 50%;
	}
    100% {
        background-position: 10% 10%;
    }
    }
    @keyframes buttonAnimation{
        0%{
            background-position: 100% 100%;
        }   
        100%{
            background-position: 0% 0%;
        }
    }
    @keyframes buttonAnimationReverse{
        0%{
            background-position: 0% 0%;
        }   
        100%{
            background-position: 100% 100%;
        }
    }
</style>
