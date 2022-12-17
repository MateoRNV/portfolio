<script>
  import { onMount } from "svelte";

  // Animations
  import animations from "../../libs/header__animations";
  import { fade } from "svelte/transition";

  import Cards from "../../components/Skills/Cards.svelte";

  const typewriter = animations.typewriter;

  let init = false;
  let y;

  onMount(() => {
    init = true;
  });
</script>

<svelte:window bind:scrollY={y} />

{#if init}
  <h1 in:typewriter={{ speed: 1 }} out:fade>Skills</h1>
  <div class="back__buttom">
    <a
      in:fade={{ duration: 2000, delay: 1000 }}
      out:fade
      href="/"
      class:disappear={y >= 50}
    >
      &#8592 Home</a
    >
  </div>

  <Cards />

  <div class="more flex" in:fade={{ duration: 2000, delay: 1000 }} out:fade>
    <h2>More Skills</h2>
    <p>
      In addition, I also have more skills that I have more or less knowledge
      of, so I will make a short descriptive list of them.
    </p>
    <div class="mini-cards-container">
      <div class="mini-card">
        <h3>Frameworks / Lenguages</h3>
        <ul class="centered-list ">
          <li>NextJs</li>
          <li>NuxtJs</li>
          <li>Gin</li>
          <li>Typescript</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <div class="mini-card">
        <h3>Frontend</h3>
        <ul class="centered-list ">
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>Figma</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div class="mini-card">
        <h3>Databases</h3>
        <ul class="centered-list ">
          <li>MYSQL</li>
          <li>MongoDB</li>
          <li>No-relational DB's</li>
        </ul>
      </div>
      <div class="mini-card">
        <h3>Patterns</h3>
        <ul class="centered-list ">
          <li>BEM(CSS)</li>
          <li>OOP</li>
          <li>MVC</li>
          <li>Layers model</li>
          <li>Module</li>
        </ul>
      </div>
      <div class="mini-card">
        <h3>Others</h3>
        <ul class="centered-list ">
          <li>SCRUM</li>
          <li>KANBAN</li>
          <li>GIT</li>
          <li>REST</li>
          <li>Storybook</li>
        </ul>
      </div>
      <div class="mini-card">
        <h3>Other Lenguages</h3>
        <ul class="centered-list">
          <li>Java</li>
          <li>C#</li>
          <li>C and C++</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
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
  .back__buttom {
    margin: 0 auto 2rem auto;
    width: 80%;
    transition: top 1s ease-out;
  }
  .disappear {
    position: absolute;
    top: -5rem;
  }

  // more skills section
  .more {
    flex-direction: column;
    margin: auto;
    margin-bottom: 2rem;
    width: 80%;
    font-weight: lighter;
    h2 {
      margin: 2rem 0 1rem 0;
      font-family: $varela;
      font-size: 25px;
      text-align: start;
    }
    h3 {
      margin: 0;
      font-family: $mukta;
      font-size: 22px;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.459);
      border-radius: 0.5rem;
    }

    .mini-cards-container {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 3rem;
      margin: 2rem 0;
    }
    .mini-card {
      position: relative;
      width: 25rem;
      margin: 0 2rem;
      padding: 1rem 0;
      z-index: 0;
      border-radius: 2rem;
      background: var(--bg-color);
    }
    .centered-list {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      padding: 2rem 5rem;
      gap: 2.5rem 3rem;
      list-style: outside;
    }

    .mini-card:hover::after {
      box-shadow: 0px 0px 5px rgb(0, 0, 0);
      filter: blur(2px);
      content: "";
      position: absolute;
      z-index: -1;
      width: calc(100% + 5px);
      height: calc(100% + 5px);
      left: -2px;
      top: -2px;
      border-radius: 2rem;
    }
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
</style>
