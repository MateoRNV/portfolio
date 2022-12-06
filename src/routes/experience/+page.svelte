<script>
  import { onMount } from "svelte";
  import Navbar from "../../components/Navbar.svelte";
  import animations from "../../libs/header__animations";
  import { fade } from "svelte/transition";

  const typewriter = animations.typewriter;

  let init = false;
  let current = "title";

  function changeCard(card) {
    card = card.toLowerCase();
    if (card === current) {
      current = "title";
    } else {
      current = card;
    }
  }

  onMount(() => {
    init = true;
  });
</script>

<Navbar experience={true} />

{#if init}
  <main>
    <section
      in:fade={{ duration: 2000, delay: 1500 }}
      out:fade
      class="flex buttons"
    >
      <button
        on:click={() => {
          changeCard("Freelance");
        }}>Freelance</button
      >
      <button
        on:click={() => {
          changeCard("Courses");
        }}>Courses</button
      >
      <button
        on:click={() => {
          changeCard("Internship");
        }}>Internship</button
      >
      <button
        on:click={() => {
          changeCard("University");
        }}>University</button
      >
    </section>

    <div class="cards flex">
      {#if current == "title"}
        <h1 in:typewriter={{ speed: 1 }} out:fade>Experience</h1>
      {:else if current != "title"}
        <div class="card__details" in:fade={{ duration: 1000 }}>
          {#if current == "freelance"}
            <p in:typewriter={{ speed: 1 }} out:fade>Jun 2021 | Current</p>
            <p in:fade={{ duration: 2000, delay: 1000 }} out:fade>
              I have been working as a freelancer in Upwork and Workana for the
              last year, where I participated in different projects in both
              frontend and backend
            </p>
            <p in:fade={{ duration: 2000, delay: 1000 }} out:fade>
              I mostly used React, Vue, Sass, pure Html/Css, Typescript and
              vanilla Js on the frontend and on the backend I have experience
              with node js (express) and PHP Laravel
            </p>
          {/if}
          {#if current == "courses"}
            <p in:typewriter={{ speed: 1 }} out:fade>Dez 2021 | Current</p>
            <p in:fade={{ duration: 2000, delay: 1000 }} out:fade>
              I started to study on my own the new technologies, frameworks,
              etc. Complementing my previous university knowledge.
            </p>
            <p in:fade={{ duration: 2000, delay: 1000 }} out:fade>
              I study at platzi.com (with certificates) and youtube but I also
              like to read the official documentation of the new things and
              practice/play with every thing I learn.
            </p>
            <p in:fade={{ duration: 2000, delay: 1000 }} out:fade>
              I like new technologies, so I will continue learning every day
            </p>
          {/if}
          {#if current == "internship"}
            <p in:typewriter={{ speed: 1 }} out:fade>Mar 2021 | Jun 2021</p>
            <p in:fade={{ duration: 2000, delay: 1000 }} out:fade>
              I completed it at webtales and I learned how is the work on a
              professional team and developing professional apps with differents
              code patterns.
            </p>
            <p in:fade={{ duration: 2000, delay: 1000 }} out:fade>
              I developed responsive pages and components from a design. I did
              it with Vuejs, BassCss and Amp(to mobile optimization).
            </p>
            <p in:fade={{ duration: 2000, delay: 1000 }} out:fade>
              On the backend I handled data in GraphQL, Algolia and improved
              some endpoints of the api
            </p>
          {/if}
          {#if current == "university"}
            <p in:typewriter={{ speed: 1 }} out:fade>
              2017 at Politecnico de Leiria
            </p>
            <p in:fade={{ duration: 2000, delay: 1000 }} out:fade>
              I started in 2017 and studied the basics of computing. There I
              learned various programming languages (java, c#, c, php,
              javascript, python) at a basic level.
            </p>
            <p in:fade={{ duration: 2000, delay: 1000 }} out:fade>
              I learned some programming patterns like MVC, ERC, layer pattern.
            </p>
            <p in:fade={{ duration: 2000, delay: 1000 }} out:fade>
              I also learned algorithms and data structures and other things
              like IOT, networks, modeling and animation (blender), Artificial
              intelligence, Cybersecurity, etc.
            </p>
            <p in:fade={{ duration: 2000, delay: 1000 }} out:fade>
              I discovered the basics of all of that and only then I chose the
              web path and improved my skills on that path because I like it
              very much.
            </p>
          {/if}
        </div>
      {/if}
    </div>
  </main>
{/if}

<style lang="scss">
  main {
    width: 80%;
    min-height: 100vh;
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
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 1) 48%,
        var(--bg-color) 50%
      );
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
  h1 {
    font-family: $josefin;
    font-size: 60px;
    font-weight: 500;
    color: white;
  }
  .cards {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 3rem auto;
    max-width: 45rem;
    height: 25rem;
    background-color: var(--bg-color);
    transition: background-color 2.5s ease;
  }
  .cards:before,
  .cards:after {
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
    // grey : #4e4e4e86
    background: linear-gradient(
      155deg,
      var(--bg-color) 40%,
      #ffffff 45%,
      #ffffff 55%,
      var(--bg-color) 40%
    );
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
  .card__details {
    width: 80%;
    text-align: center;
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
  @keyframes buttonAnimation {
    0% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
  @keyframes buttonAnimationReverse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
  @media (max-width: 1200px) {
    .buttons {
      gap: 1rem;
    }
  }
  @media (max-width: 670px) {
    .cards {
      margin: 1rem 0;
      height: 28rem;
    }
  }
  @media (max-width: 559px) {
    p {
      font-size: 14px;
    }
    .cards {
      height: 26rem;
    }
  }
  @media (max-width: 473px) {
    .cards {
      height: 35rem;
    }
  }
  @media (max-width: 410px) {
    .cards {
      height: 38rem;
    }
  }
</style>
