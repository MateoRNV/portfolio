<script>
  import Header from "../components/Header.svelte";
  import { onMount } from "svelte";

  import Icon from "svelte-icon/Icon.svelte";
  import iconsSvg from "../libs/icons__svg";

  import githubIcon from "../images/github.svg?raw";
  import gmail from "../images/gmail.svg?raw";
  import linkedin from "../images/linkedin.svg?raw";

  const icons = iconsSvg.svgColorList;

  const options = {
    timeZone: "Europe/Lisbon",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  let time = new Date();

  $: myTime = "";

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date();
      myTime = time.toLocaleString("en-US", options);
    }, 0.1);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<Header />

<hr class="header__hr" />

<section class="flex">
  <article class="index__section">
    <h3>ABOUT ME</h3>
    <br />
    <p>
      Hey, I am Mateo Narvaez. I am a full-stack developer based in Leiria,
      Portugal.
    </p>
    <p>
      I have worked with different types of front-end and back-end technologies
      participating on different kind of projects, developing from simple
      components to specific functions
    </p>
    <p>I love sports, food and travel.</p>
  </article>
  <hr class="mobile--only" />
  <article class="index__section">
    <h3>SKILLS</h3>
    <br />
    <div class="icons flex">
      {#each icons as { svg, size, opacity }}
        <Icon data={svg} {size} color="transparent" />
      {/each}
    </div>
    <div class="section__button"><a href="/skills">More details</a></div>
  </article>
</section>

<hr />

<section class="flex">
  <section class="index__section">
    <h3>Projects</h3>
    <br />
    <p>
      I participated on several projects, doing diferents taks in front-end and
      back-end:
    </p>
    <ul>
      <li>Simple components</li>
      <li>Landing Pages</li>
      <li>Api connections, creation of endpoints</li>
      <li>Complete projects with front-end and back-end</li>
    </ul>
    <div class="section__button button__alt">
      <a href="/projects">Demos - Projects</a>
    </div>
  </section>
  <hr class="mobile--only" />
  <section class="index__section">
    <h3>Experience</h3>
    <br />
    <p>
      More than a year of professional experience and several courses in new
      technologies
    </p>
    <ul>
      <li>Lexir Inc: Sep-22 | Current</li>
      <li>Freelance: Jun-21 | Aug-22</li>
      <li>Internship: Mar-21 | Jun-21</li>
      <li>University - Computer Science: 2017</li>
    </ul>
    <div class="section__button"><a href="/experience">More Info</a></div>
  </section>
</section>

<hr />

<section class="flex">
  <section class="index__section section__contact">
    <h3>Contacts</h3>
    <br />
    <p>
      Feel free to call, text or email. I speak English, Spanish and Portuguese
    </p>
    <p>I usually avaiable between 9h to 21h (UTC + 1)</p>
    <ul class="section__contact__list">
      <li><Icon data={gmail} /> <span> mnarvaez2299@gmail.com </span></li>
      <li>
        <Icon data={linkedin} /><a
          class="button--none--style"
          href="https://www.linkedin.com/in/mateo-narv%C3%A1ez/"
          >https://www.linkedin.com/in/mateo-narv%C3%A1ez/</a
        >
      </li>
      <li>
        <Icon data={githubIcon} /><a
          class="button--none--style"
          href="https://github.com/MateoRNV">https://github.com/MateoRNV</a
        >
      </li>
    </ul>
  </section>
  <hr class="mobile--only" />
  <section class="index__section section__mytime flex">
    <h3 class="section__time">UTC + 1</h3>
    <br />
    <span>{myTime}</span>
  </section>
</section>

<style lang="scss">
  .header__hr {
    width: 100%;
  }
  hr {
    width: 92%;
  }
  .mobile--only {
    display: none;
  }

  .index__section {
    margin: 2rem 2rem;
    width: 50%;
    padding: 0 5rem;

    @media screen and (max-width: 1018px) {
      padding: 0 2rem;
    }

    h3 {
      margin-bottom: 2rem;
      font-family: $aclonica;
      font-size: 30px;
      font-weight: lighter;
      color: white;
    }

    p {
      margin-bottom: 2.5rem;
      font-family: $mukta;
      font-size: 20px;
      font-weight: 300;
      line-height: 1.5;
      color: white;
    }
    li {
      font-family: $mukta;
      font-size: 18px;
      font-weight: 300;
      list-style: outside;
      line-height: 2rem;
    }

    a {
      padding: 0.5rem 1rem;
      color: var(--bg-color);
      background-color: white;
      border-radius: 30px;

      transition: all 0.5s ease-out;
    }
    a:hover {
      background-color: var(--bg-color);
      border: 1px solid white;
      color: white;
    }
    .section__button {
      margin-top: 3rem;
      float: right;
    }
    .button__alt {
      a {
        color: white;
        background-color: var(--bg-color);
        border: 1px solid white;
      }
      a:hover {
        background-color: white;
        border: none;
        color: var(--bg-color);
      }
    }
  }
  .section__contact {
    width: 70%;
    p {
      margin-bottom: 0;
    }
    li {
      list-style: none;
      margin: 1rem 0;
    }
    a {
      color: white;
      text-decoration: none;
    }
    .section__contact__list {
      margin-top: 2rem;
      li {
        gap: 1rem;
        display: flex;
        align-items: center;
      }
    }
    .button--none--style {
      background-color: transparent;
    }
    .button--none--style:hover {
      border: none;
    }
  }
  .section__time {
    text-align: center;
  }
  .icons {
    margin: 0.5rem 0;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 3rem 5.5rem;
  }
  .section__mytime {
    flex-direction: column;
    align-items: center;
    font-size: 40px;
  }

  //Mobile
  @media screen and (max-width: 900px) {
    section {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .index__section {
      width: 80%;
      h3 {
        margin-bottom: 1rem;
      }
      ul {
        text-align: left;
      }
      li {
        list-style: inside;
        font-size: 20px;
      }
      .icons {
        margin: auto;
        margin-top: 2rem;
      }
      p {
        font-size: 22px;
      }
    }
    .mobile--only {
      display: block;
    }
    .section__contact {
      ul {
        padding: 0;
      }
      li {
        text-align: center;
        text-decoration: underline;
        flex-direction: column;
      }
    }
    .section__mytime {
      margin-bottom: 7rem;
    }
  }
</style>
