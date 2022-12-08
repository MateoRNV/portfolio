<script>
  import Icon from "svelte-icon/Icon.svelte";
  import iconsSvg from "../../libs/icons__svg";

  const icons = iconsSvg.svgIndexPageList;
</script>

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

<style lang="scss">
  .icons {
    margin: 0.5rem 0;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 3rem 5.5rem;
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
  }

  //Mobile
  @media screen and (max-width: 900px) {
    .index__section {
      width: 80%;
      h3 {
        margin-bottom: 1rem;
      }

      .icons {
        margin: auto;
        margin-top: 2rem;
      }
    }
  }
</style>
