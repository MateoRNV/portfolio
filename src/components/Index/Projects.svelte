<section class="index__section">
  <h3>Projects</h3>
  <br />
  <p>
    I participated on several projects as a freelancer, doing diferents tasks in
    both front-end and back-end
  </p>
  <ul>
    <li>Simple components</li>
    <li>Landing Pages</li>
    <li>Api connections, creation of endpoints</li>
    <li>Complete projects with front-end and back-end</li>
  </ul>
  <div class="section__button button__alt">
    <a href="/projects">Projects</a>
  </div>
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
  }
</style>
