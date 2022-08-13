<script>
    let y;
</script>

<svelte:window bind:scrollY={y} />

<nav class="flex navBar" class:slideDown={y >= 50}>
    <h2>Mateo Narváez</h2>
    <ul class="flex nav__menu">
        <li><a href="/#/">Home</a></li>
        <li><a href="/#/about">About</a></li>
        <li><a href="/#/contact">Contact</a></li>
        <li />
    </ul>
</nav>

<style lang="scss">

    .navBar {
        top: -5rem;
        width: 100%;
        position: fixed;
        background-color: var(--navbar__background-color);
        border-bottom: 1px solid white;
        transition: top 1s;
        transition: background-color 3s;
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
        gap: 3rem;

        li {
            margin: auto;
        }

        a {
            font-family: $noto;
            color: white;
        }
    }
    .slideDown{
        top: 0;
    }
</style>
