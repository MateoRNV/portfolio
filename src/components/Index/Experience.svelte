<section class="index__section">
  <h3>Experience</h3>
  <br />
  <p>
    More than a year of professional experience and several courses in new
    technologies
  </p>
  <ul>
    <li>Front-end Dev | Lexir Inc : Jan-22 | Dec - 22</li>
    <li>Freelance: Sep-21 | Jan - 22</li>
    <li>Courses and Certifications: Sep - 21 | Current</li>
    <li>Internship: Mar - 21 | Jun - 21</li>
    <li>University - Computer Science: 2021</li>
  </ul>
  <!-- <div class="section__button"><a href="/experience">More Info</a></div> -->
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
  }

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
