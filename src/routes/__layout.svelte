<script>
  import Header from "../sections/Header.svelte";
  import "../app.scss";

  $: setTheme = theme => { document.documentElement.className = theme; console.log("theme", theme) };
  
</script>

<Header />

<button class="theme-btn light" on:click={setTheme('green')} title="Light mode">
  Green
</button>
<button class="theme-btn dark" on:click={setTheme('blue')} title="Dark mode">
  blue
</button>

<main>
  <slot />
</main>
