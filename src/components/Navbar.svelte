<script>
    export let experience = false;
    let y;
</script>

<svelte:window bind:scrollY={y} />

<nav class="flex navBar" class:slideDown={y >= 50 || experience == true}>
    <h2><a href="/">Mateo Narváez</a></h2>
    <ul class="flex nav__menu">
        <a href="/skills"><li>Skills</li></a>
        <a href="/projects"><li>Projects</li></a>
        <a href="/experience"><li>Experience</li></a>
    </ul>
</nav>

<style lang="scss">

    .navBar {
        max-width: 1440px;
        margin: auto;
        top: -5rem;
        left: auto;
        width: 100%;
        position: fixed;
        background-color: var(--navbar__background-color);
        border-bottom: 1px solid white;
        transition: top 1s, background-color 3s;
    }

    h2 {
        font-size: 24px;
        font-family: $cabin;
        font-weight: 500;
        letter-spacing: 2.5px;
        color: white;
    }
    nav {
        padding: 0 3rem 0 2rem;
        justify-content: space-between;
    }
    .nav__menu {
        margin:0 3rem;
        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 0rem;
            width: 7rem;
            height: 100%;
            background-color:  var(--navbar__background-color);
            transition: background-color 0.5s ease-out;
        }
        a {
            padding-top: 0.2rem;
            font-family: $noto;
            color: white;
            transition: color 1s;
        }
        a:hover{
            color: var(--navbar__background-color);
            transition: color 0.5s ease-out;
            li{
                background-color: rgba(255, 255, 255, 0.911);
                transition: background-color 0.5s ease-out;
            }
        }
        
    }
    .slideDown{
        top: 0;
    }
    @keyframes buttonAnimation{
        0%{
            background-position: 100%;
        }
        100%{
            background-position: 0%;
        }
    }
    @keyframes buttonAnimationReverse{
        0%{
            background-position: 0%;
        }
        100%{
            background-position: 100%;
        }
    }
</style>
