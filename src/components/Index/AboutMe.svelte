<article class="index__section">
  <h3>ABOUT ME</h3>
  <br />
  <p>
    Hey, I am Mateo Narvaez. I am a full-stack developer based in Leiria,
    Portugal.
  </p>
  <p>
    I have worked with different front-end and back-end technologies
    participating on different kind of projects, developing from simple
    components to specific functionalities
  </p>
  <p>I love sports, food and travel.</p>
</article>

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
  }

  //Mobile
  @media screen and (max-width: 900px) {
    .index__section {
      width: 80%;
      h3 {
        margin-bottom: 1rem;
      }

      p {
        font-size: 22px;
      }
    }
  }
</style>
