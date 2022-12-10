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
      position: relative;
      padding: 0.7rem 1.5rem;
      font-family: $josefin;
      font-size: 20px;
      color: white;
      border: transparent;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 1) 48%,
        var(--bg-color) 50%
      );
      background-size: 300%;
      background-position: 100%;
      background-repeat: no-repeat;
      border-radius: 20px;
      animation: buttonAnimationReverse 1s;
      animation-fill-mode: forwards;
      transition: all 1s;
    }
    a:hover {
      transition: color 1s;
      animation: buttonAnimation 1s;
      animation-fill-mode: forwards;
      text-decoration: none;
      color: var(--bg-color);
      cursor: pointer;
    }
    .section__button {
      margin-top: 4rem;
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
      .section__button {
        float: none;
      }
    }
  }

  @keyframes buttonAnimation {
    0% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
  @keyframes buttonAnimationReverse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
</style>
