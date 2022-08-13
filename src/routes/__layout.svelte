<script>
  import Header from "../sections/Header.svelte";
  import Navbar from "../components/Navbar.svelte";
  import ThemeMenu from "../components/ThemeMenu.svelte";
  import "../app.scss";
</script>

<Navbar />

<Header />
<ThemeMenu />

<!-- Main  -->
<hr />
<main class="main flex">
  <slot />
</main>

<style>
  .main {
    flex-direction: column;
  }
  hr{
    width: 100%;
  }
</style>
