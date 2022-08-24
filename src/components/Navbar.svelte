<script>
    

    export let experience = false;
    let open = false;
    let y;
</script>

<svelte:window bind:scrollY={y} />

<nav class="flex navBar" class:slideDown={y >= 50 || experience == true}>
    <h2 class="title"><a href="/">Mateo Narváez</a></h2>
    <h2 class="title--mobile"><a href="/">MN</a></h2>
    
    <div class="nav__mobile" class:open={open == true}>
        <div class="hamburguer" class:open={open == true} on:click="{() => {open == false ? open = true : open = false}}">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <ul class="nav__menu" class:open={open == true}>
            <a href="/skills" on:click="{() => {open = false}}"><li>Skills</li></a>
            <a href="/projects" on:click="{() => {open = false}}"><li>Projects</li></a>
            <a href="/experience" on:click="{() => {open = false}}"><li>Experience</li></a>
        </ul>
    </div>

    <ul class="flex nav__menu">
        <a href="/skills"><li>Skills</li></a>
        <a href="/projects"><li>Projects</li></a>
        <a href="/experience"><li>Experience</li></a>
    </ul>
</nav>

<style lang="scss">
    .nav__mobile{
        display: none;
    }
    .hamburguer {
        display: none;
    }
    .navBar {
        position: relative;
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
    .title--mobile{
        display: none;
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
    @media (max-width: 657px) {
        .title {
            display: none;
        }
        .title--mobile{
            display: inline-block;
        }.nav__menu{
            display: none;
        }
        .nav__mobile{
            display: flex;
            background-color: transparent;
        }
        .hamburguer{
            display: inline-block;
            width: 6rem;
            margin: auto 0;

            div{           
                margin: 0.4rem; 
                height: 3px;
                max-width: 1.8rem;
                background-color: white;
                display: block;
                border-radius: 5px;
                
                transition: all 0.5s ease-out;
                
            }

        }
        .nav__mobile.open{
            background-color: white;
        }
        .hamburguer.open{
            display: relative;
            z-index: 1;
            :nth-child(1) {
                background: var(--bg-color);
                transform: rotateZ(45deg) translateY(7px);
            }
            :nth-child(2) {
                display: none;
            }
            :nth-child(3) {
                background: var(--bg-color);
                transform: rotateZ(-45deg) translateY(-6px);
            }
        }
        .nav__menu.open{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            gap: 1rem;
            padding: 1rem 4rem 0 2rem;
            top: 0;
            right: 0;
            height: 30vh;
            width: 33vw;
            background-color: white;
            border-bottom-left-radius: 50px;

            li{
                background-color: transparent;
                color: var(--bg-color);
            }
        }
    }
</style>
