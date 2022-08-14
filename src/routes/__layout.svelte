<script>
  import Navbar from "../components/Navbar.svelte";
  import ThemeMenu from "../components/ThemeMenu.svelte";
  import "../app.scss";
</script>

<Navbar />
<ThemeMenu />

<!-- Main  -->
<main class="main flex">
  <slot />
</main>

<style>
  .main {
    flex-direction: column;
  }
</style>
