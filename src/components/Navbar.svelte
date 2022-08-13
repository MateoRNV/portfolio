

<nav class="flex navBar">
    <h2>Mateo Narváez</h2>
    <ul class="flex nav__menu">
        <li><a href="/#/">Home</a></li>
        <li><a href="/#/about">About</a></li>
        <li><a href="/#/contact">Contact</a></li>
        <li />
    </ul>
</nav>

<style lang="scss">
    // $text-color: #E7F6F2;
    $text-color: #e7f6f2;

    .navBar {
        top: 0;
        width: 100%;
        position: fixed;
        background-color: #0e140c;
        border-bottom: 1px solid white;
        transition: top 0.3s;
    }

    h2 {
        font-size: 24px;
        font-family: $cabin;
        font-weight: 500;
        letter-spacing: 2.5px;
    }
    nav {
        padding: 0 3rem 0 2rem;
        justify-content: space-between;
        color: $text-color;
    }
    .nav__menu {
        gap: 3rem;

        li {
            margin: auto;
        }

        a {
            font-family: $noto;
            color: $text-color;
        }
    }
</style>
