<script>
  import { onMount } from "svelte";
  import animations from "../../libs/header__animations";
  import { fade } from "svelte/transition";

  const typewriter = animations.typewriter;

  let y;
  let init = false;
  onMount(() => {
    init = true;
  });

  function goTo(url) {
    window.open(url);
  }
</script>

{#if init}
  <h1 in:typewriter={{ speed: 1 }} out:fade>Projects</h1>

  <main in:fade={{ duration: 2000, delay: 1000 }} out:fade>
    <hr />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <section class="frontend__section">
      <div class="frontend__description">
        <h2>Frontend Practices</h2>
        <p>
          Beyond the work I developed some little components and pages in order
          to practice or test some specific pattern, skill, language or
          frameworks. (ex. BEM, Sass, Pug, Tailwind, etc)
        </p>
        <div class="frontend--imgDescription">
          <div class="image">
            <img
              on:click={() => {
                goTo(
                  "https://www.mateonarvaez.tech/Demo-Pages/interactive-rating-component-main/src/index.html"
                );
              }}
              src="images\demos\rating.PNG"
              alt="rating"
            />
          </div>
          <div class="image ">
            <img
              on:click={() => {
                goTo(
                  "https://www.mateonarvaez.tech/Demo-Pages/nft-preview-card-component-main/src/index.html"
                );
              }}
              class="eth"
              src="images\demos\nft.PNG"
              alt="eth"
            />
          </div>
        </div>
      </div>
      <div class="frontend--imgContainer">
        <div class="image ">
          <img
            on:click={() => {
              goTo(
                "https://www.mateonarvaez.tech/Demo-Pages/stats-preview-card-component-main/src/index.html"
              );
            }}
            class="banner"
            src="images\demos\banner.PNG"
            alt="banner"
          />
        </div>
        <div class="img_container--mobile">
          <div class="image">
            <img
              on:click={() => {
                goTo(
                  "https://www.mateonarvaez.tech/Demo-Pages/sunnyside-agency-landing-page-main/src/html/index.html"
                );
              }}
              class="sunnyside"
              src="images\demos\sunnyside.PNG"
              alt="sunnyside"
            />
          </div>
        </div>
      </div>
    </section>

    <hr />

    <section class="personalProjects">
      <div class="img_container--mobile">
        <div class="image image--projects">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <img
            on:click={() => {
              goTo("https://food-project.live/#/");
            }}
            class="foodProject"
            src="images\demos\foodProject.PNG"
            alt="food project"
          />
        </div>
      </div>
      <div class="personalProjects__description">
        <h2>Personal Projects</h2>
        <p>
          I have been developing personal projects in order to practice and
          improve my skills trying to approach every aspect of the development
          process.
        </p>
        <p class="more--soon">• More soon •</p>
      </div>
    </section>

    <hr />

    <section class="professionalProjects">
      <div class="professionalP__description">
        <h2>Professional Projects</h2>
        <p>
          I have worked with some development teams working on commercial
          products or services. I have been involved in the development of the
          frontend and backend of the projects.
        </p>
        <p>
          I like to have a good communication with the team and I can work with
          agile methodologies like SCRUM or KAMBAM. I have experience with tools
          like JIRA, TRELLO, GIT, Notion etc.
        </p>
        <div class="image lexir">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <img
            on:click={() => {
              goTo("https://www.lexir.com/");
            }}
            src="images\demos\lexir.PNG"
            alt="lexir landing page"
            class="federa"
          />
        </div>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="professional__imageContainer">
        <div class="image">
          <img
            on:click={() => {
              goTo("https://smartlistings.federa.com/v2/");
            }}
            src="images\demos\federa.PNG"
            alt="federa smart listings"
            class="federa"
          />
        </div>

        <div class="image">
          <img
            on:click={() => {
              goTo("https://aroundthetree.eu/pt/home/");
            }}
            src="images\demos\wearoundthetree.PNG"
            alt="lexir landing page"
            class="wearoundthetree"
          />
        </div>
      </div>
    </section>
  </main>
{/if}

<style lang="scss">
  main {
    margin: 0 auto;
    width: 90%;
  }
  section {
    display: flex;
  }
  h1 {
    margin-top: 3rem;
    text-align: center;
    font-family: $aclonica;
    font-size: 30px;
    font-weight: lighter;
  }
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
  // sections
  .frontend__section {
    margin: 3rem 0 4rem;
  }
  .frontend--imgDescription {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .frontend--imgContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem 2rem;
  }
  .frontend__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 3rem;
  }
  .image {
    display: flex;
    justify-content: center;

    img {
      filter: grayscale(100%);
      width: 15rem;
      transition: all 0.5s ease-out;
    }
    .eth {
      width: 10rem;
      border-radius: 20px;
    }
    .banner {
      width: 25rem;
    }
    .sunnyside {
      width: 18rem;
      border-radius: 20px;
    }
    .foodProject {
      width: 25rem;
      border-radius: 20px;
      margin: 4rem 0;
    }
    .federa {
      width: 20rem;
      border-radius: 20px;
      margin-left: 8rem;
    }
    .wearoundthetree {
      width: 20rem;
      height: 12rem;
      border-radius: 20px;
    }
    img:hover {
      filter: grayscale(0%);
      scale: 1.2;
      cursor: pointer;
    }
  }

  .image--projects {
    justify-content: center;
    margin: auto;
  }

  .personalProjects {
    margin: 6rem 0rem;
    padding-right: 0rem;

    h2 {
      margin-top: 0rem;
    }
  }
  .personalProjects__description {
    margin: 0rem 5rem;
  }
  .img_container--mobile {
    display: flex;
    justify-content: center;
  }

  .personalProjects {
    margin: 5rem 0;
    padding: 0;
  }
  .more--soon {
    margin: 8rem 0 0rem 0;
    font-size: 14px;
  }

  .professionalProjects {
    display: flex;
    margin: 3rem 3rem;
  }

  .professional__imageContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    justify-items: center;
  }

  .lexir {
    margin: 3.5rem 0;
    margin-left: 7rem;
    float: center;
  }
  @media (max-width: 1000px) {
    section {
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-size: 16px;
      font-weight: lighter;
      h2 {
        margin-bottom: 1rem;
      }
      div {
        width: 80%;
      }

      .image .federa {
        margin-left: 0;
      }
      .lexir {
        margin: 3rem auto 2rem;
      }
    }
    .frontend__section {
      margin: 0;
    }

    .frontend__description {
      padding: 0;
      margin: 0;
      width: 90%;
    }

    .frontend--imgDescription {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      margin: 1.5rem 0;
    }
    .img_container--mobile {
      order: 2;
      @media (max-width: 500px) {
        img {
          scale: 0.8;
        }
      }
      .foodProject {
        margin: 0;
        @media (max-width: 500px) {
          scale: 0.8;
        }
      }
    }
    .more--soon {
      margin: 2rem 0 1rem 0;
      font-size: 14px;
    }
    .personalProjects {
      margin: 1rem 0;
    }
    .professionalProjects {
      margin: 1rem 1rem;
    }
    .professional__imageContainer {
      gap: 2rem;
    }
  }
</style>
