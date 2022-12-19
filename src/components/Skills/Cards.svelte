<script>
  import { fade } from "svelte/transition";

  // Icons
  import Icon from "svelte-icon/Icon.svelte";
  import icons from "../../libs/icons__svg.js";

  // imports cards
  import VueCard from "../../components/Skills/Cards/VueCard.svelte";
  import SvelteCard from "../../components/Skills/Cards/SvelteCard.svelte";
  import ReactCard from "../../components/Skills/Cards/ReactCard.svelte";
  import NodeCard from "../../components/Skills/Cards/NodeCard.svelte";
  import LaravelCard from "../../components/Skills/Cards/LaravelCard.svelte";

  const skills = icons.svgSkillsCard;

  let currentCard = "vue";
</script>

<div in:fade={{ duration: 2000, delay: 1000 }} out:fade class="skills flex">
  {#each skills as { name, svg, icon, color, experience }}
    <div
      class="skill"
      class:active={currentCard === name}
      on:click={() => (currentCard = name)}
      style="background-color: {color}; background-image: url({svg});"
    >
      {#if currentCard == name}
        <div
          class="card__main"
          style="--scrollBarColor: {color}"
          in:fade={{ duration: 1000, delay: 500 }}
        >
          {#if currentCard == "vue"}
            <VueCard />
          {:else if currentCard == "svelte"}
            <SvelteCard />
          {:else if currentCard == "react"}
            <ReactCard />
          {:else if currentCard == "node"}
            <NodeCard />
          {:else if currentCard == "laravel"}
            <LaravelCard />
          {/if}
        </div>
      {/if}

      <!-- Card header -->
      <div class="card__icon"><Icon data={icon} /></div>
      <div class="card__info">
        <div class="card__info__title flex">
          <h3>{name}</h3>
          <span>{experience}</span>
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  // skills section
  .skills {
    gap: 1rem;
    justify-content: space-between;
    margin: 0 auto;
    width: 65%;
    height: 70vh;

    @media (max-width: 1025px) {
      width: 85%;
    }
  }
  .skill {
    display: flex;
    justify-content: center;
    position: relative;
    min-width: 3.5rem;
    height: 100%;
    border-radius: 40px;
    background-position: center;
    background-repeat: no-repeat;

    transition: flex-grow 0.7s ease-out;
  }
  .active {
    flex-grow: 1;
    justify-content: flex-start;
    padding: 0 1.5rem;
  }
  .card__info {
    display: none;

    transition: all 0.7s ease-out;

    h3 {
      display: inline-block;
      margin: 0;
    }
  }
  .active .card__info {
    width: 80%;
    display: flex;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    padding: 1rem 2rem;

    .card__info__title {
      margin-left: 1.5rem;
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 18px;
        text-transform: capitalize;
      }
      span {
        font-size: 14px;
      }
    }

    // border: 1px solid white;
  }
  //cards style and scrollbar
  .card__main {
    padding: 0rem 1rem;
    display: none;
    transition: all 0.7s ease-out;
    max-height: 19rem;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--scrollBarColor) transparent;
  }
  .card__main::-webkit-scrollbar {
    width: 0.5rem;
  }
  .card__main::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 100px;
  }
  .card__main::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: var(--scrollBarColor);
  }
  .active .card__main {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 7%;
  }
  .card__icon {
    position: absolute;
    bottom: 5%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #212123;
  }
  //card opacity on click
  .skill.active::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: 40px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  //mobile
  @media (max-width: 800px) {
    .skills {
      flex-direction: column !important;
      height: 90vh;
    }
    .card__main {
      max-height: 68%;
    }
    .skill {
      height: 9%;
    }
  }
</style>
