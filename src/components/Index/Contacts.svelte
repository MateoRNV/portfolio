<script>
  import Icon from "svelte-icon/Icon.svelte";

  import githubIcon from "../../images/github.svg?raw";
  import gmail from "../../images/gmail.svg?raw";
  import linkedin from "../../images/linkedin.svg?raw";
</script>

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

<style lang="scss">
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
      p {
        font-size: 22px;
      }
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
  }
</style>
