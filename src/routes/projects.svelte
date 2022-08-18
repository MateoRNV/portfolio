<script>
    import { onMount } from "svelte";
    import animations from "../libs/header__animations";
    import { fade } from "svelte/transition";

    let y;
    let init = false;
    onMount(() => {
        init = true;
    });

    function goTo(url) {
        window.open(url);
    }
</script>

<!-- {#if init} -->
<h1 in:animations.typewriter={{ speed: 1 }} out:fade>Projects</h1>

<main in:fade={{ duration: 2000, delay: 1000 }} out:fade>
    <p class="intro">
        I have worked doing from simple components to a bit complex tasks. Some
        projects I cannot share the code. So here I put some simple demos of my
        projects and abilities
    </p>

    <hr />

    <section class="components">
        <div class="text--components">
            <h2>Simple components</h2>
            <p>
                I work with any library like tailwind bootstrap, vuetify, etc.
                And In most of the cases in order to do a custom design I do it
                in pure Html, Css and Js.
            </p>
            <p>
                I developed simple responsive components like logins, ratings,
                banners, headers and a bit more complex components like dynamic
                tables, components with animations and transitions, reactive
                data.
            </p>
        </div>
        <div class="img__container flex">
            <div class="image image--components">
                <img
                    on:click={() => {
                        goTo(
                            "https://www.mateonarvaez.tech/Demo-Pages/interactive-rating-component-main/src/index.html"
                        );
                    }}
                    src="src\images\demos\rating.PNG"
                    alt="rating"
                />
            </div>
            <div class="image image--components">
                <img
                    on:click={() => {
                        goTo(
                            "https://www.mateonarvaez.tech/Demo-Pages/nft-preview-card-component-main/src/index.html"
                        );
                    }}
                    class="eth"
                    src="src\images\demos\nft.PNG"
                    alt="eth"
                />
            </div>
            <div class="image image--components">
                <img
                    on:click={() => {
                        goTo(
                            "https://www.mateonarvaez.tech/Demo-Pages/stats-preview-card-component-main/src/index.html"
                        );
                    }}
                    class="banner"
                    src="src\images\demos\banner.PNG"
                    alt="banner"
                />
            </div>
        </div>
    </section>

    <hr />

    <section class="landingPages">
        <div class="img_container">
            <div class="image image--landing">
                <img
                    on:click={() => {
                        goTo(
                            "https://www.mateonarvaez.tech/Demo-Pages/sunnyside-agency-landing-page-main/src/html/index.html"
                        );
                    }}
                    class="sunnyside"
                    src="src\images\demos\sunnyside.PNG"
                    alt="sunnyside"
                />
            </div>
        </div>
        <div class="landing__text">
            <h2>Landing pages</h2>
            <p>As a freelancer I worked making some landing pages based on given designs.</p>
            <p>Usually I develop them in Sass, but depending on the complexity I can just do it in Html/Css or use some extra library or framework.</p>
        </div>
    </section>

    <hr />

    <section class="projects">
        <div>
            <h2>Complete projects</h2>
            <p>I have participated in projects managing both backend and frontend.</p>
            <p>In backend creating endpoints, handling data to store in a database, creating CRUDS, etc.</p>
            <p>In frontend receiving that data and showing it in a friendly way, making calls to the backend and making it reactive and responsive.</p>
        </div>
        <div class="img_container">
            <div class="image image--projects">
                <img
                    on:click={() => {
                        goTo(
                            "https://food-project.live/#/"
                        );
                    }}
                    class="foodProject"
                    src="src\images\demos\foodProject.PNG"
                    alt="food project"
                />
            </div>
    </section>
</main>

<!-- {/if} -->
<style lang="scss">
    h1 {
        margin-top: 3rem;
        text-align: center;
        font-family: $aclonica;
        font-size: 30px;
        font-weight: lighter;
    }
    .back__buttom {
        margin: 0 auto 2rem auto;
        width: 95%;
        transition: top 1s ease-out;
    }
    .disappear {
        position: absolute;
        top: -5rem;
    }
    main {
        margin: 0 auto;
        width: 90%;
        .intro {
            // margin: 0 10rem;
            margin: auto;
            text-align: center;
            width: 50%;
            margin-bottom: 2rem;
            font-size: 18px;
            font-family: $mukta;
            font-weight: lighter;
        }
    }

// Main and all sections
    section {
        display: flex;
        div {
            width: 50%;
        }
        h2 {
            margin-bottom: 3rem;
            font-size: 30px;
            font-family: $mukta;
            font-weight: bold;
        }
        p {
            margin: 1rem 0;
        }
        .img__container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 0;
        }
        .image {
            display: flex;
            width: 40%;
            padding: 1rem;
            img {
                filter: grayscale(100%);
                width: 15rem;
                transition: all 0.5s ease-out;
            }
            .eth {
                width: 12rem;
                border-radius: 20px;
            }
            .banner{
                width: 25rem;
            }
            .sunnyside {
                width: 25rem;
                border-radius: 20px;
            }
            .foodProject{
                margin-top: 3rem;
                margin-left: 5rem;
                width: 27rem;
                border-radius: 20px;
            }
            img:hover {
                filter: grayscale(0%);
                scale: 1.2;
                cursor: pointer;
            }
        }
        .image--components {
            justify-content: center;
        }
        .image--landing{
            margin-left: 2rem;
        }
        .image--projects {
            justify-content: center;
            margin: auto;
        }
        .text--components {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 1rem;
            margin-right: 4rem;
        }
    }
    .components{
        margin: 3rem 0;
    }
    .landingPages {
        margin: 7rem 0;
        .landing__text {
            width: 50%;
            text-align: center;
        }
    }
    .projects{
        margin: 5rem 3rem;
    }
</style>
