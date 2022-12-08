<script>
  export let myTime;
</script>

<section class="index__section section__mytime flex">
  <h3 class="section__time">UTC + 1</h3>
  <br />
  <span>{myTime}</span>
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
  }
  .section__time {
    text-align: center;
  }
  .section__mytime {
    flex-direction: column;
    align-items: center;
    font-size: 40px;
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
    }
    .section__mytime {
      margin-bottom: 7rem;
    }
  }
</style>
