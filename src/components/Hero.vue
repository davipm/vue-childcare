<template>
  <section class="section hero">
    <div class="container">
      <div class="row">
        <div class="hero-content col-md-6">
          <h3 class="hero-title">
            A Child Is An
          </h3>
          <h3 class="hero-title">
            Uncut Diamond
          </h3>
          <p class="hero-text">
            Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
          </p>
          <a href="#" class="btn btn-primary">
            Learn More
          </a>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/person.svg" class="w-100" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Hero"
  }
</script>

<style scoped lang="scss">
  .hero {
    display: block;
    margin: 0;
    padding-top: 60px;
    padding-bottom: 60px;

    &-content {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    &-title {
      margin-bottom: 0;
      font-size: 2.5rem;
      font-weight: bold;
      color: #0F3553;

      &:last-of-type {
        margin-bottom: 1.5rem;
      }
    }

    &-text {
      margin-bottom: 2rem;
      font-size: 1.2rem;
      color: #0F3553;
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding-top: 10px;
      &-content {
        padding-top: 15px;
      }
    }
  }
</style>