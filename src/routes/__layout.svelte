<script>
  import Navbar from "../components/Navbar.svelte";
  import ThemeMenu from "../components/ThemeMenu.svelte";
  import Footer from "../components/Footer.svelte";
  import "../app.scss";
</script>


<!-- Main  -->
<main class="main flex">
  <slot />
</main>

<Navbar />
<ThemeMenu />

<!-- <Footer /> -->
<style>
  .main {
    flex-direction: column;
  }
</style>
