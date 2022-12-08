<script>
  import Header from "../components/Header.svelte";
  import { onMount } from "svelte";

  // Index Components
  import AboutMe from "../components/Index/AboutMe.svelte";
  import SkillsGrid from "../components/Index/SkillsGrid.svelte";
  import TimeClock from "../components/Index/TimeClock.svelte";
  import Contacts from "../components/Index/Contacts.svelte";
  import Projects from "../components/Index/Projects.svelte";
  import Experience from "../components/Index/Experience.svelte";

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
  <AboutMe />
  <hr class="mobile--only" />
  <SkillsGrid />
</section>

<hr />

<section class="flex">
  <Projects />
  <hr class="mobile--only" />
  <Experience />
</section>

<hr />

<section class="flex">
  <Contacts />
  <hr class="mobile--only" />
  <TimeClock {myTime} />
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

  //Mobile
  @media screen and (max-width: 900px) {
    section {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .mobile--only {
      display: block;
    }
  }
</style>
