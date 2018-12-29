<template>
  <div class="section about">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/img/woman-kid.svg" class="about-image" alt="">
        </div>
        <div class="col-md-6">
          <div class="about-content">
            <h5 class="subtitle">We’re Helping Hand</h5>
            <h3 class="title">On 80,000 Children</h3>
            <p class="about-text">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s,
            </p>
            <a href="#" class="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div class="row about-card-content">
        <div class="col-md-4 card-spacing">
          <div class="card">
            <img src="../assets/img/heart.svg" class="card-img" alt="">
            <div class="card-body">
              <h5 class="card-title">
                Send Donation
              </h5>
              <p class="card-text">
                See how you can make a difference in families’
                lives with just $6 a month.
              </p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 card-spacing">
          <div class="card">
            <img src="../assets/img/baby-boy.svg" class="card-img" alt="">
            <div class="card-body">
              <h5 class="card-title">
                Send Donation
              </h5>
              <p class="card-text">
                See how you can make a difference in families’
                lives with just $6 a month.
              </p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 card-spacing">
          <div class="card">
            <img src="../assets/img/group.svg" class="card-img" alt="">
            <div class="card-body">
              <h5 class="card-title">
                Send Donation
              </h5>
              <p class="card-text">
                See how you can make a difference in families’
                lives with just $6 a month.
              </p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped lang="scss">
  .about {
    display: block;
    position: relative;
    padding: 60px 0;

    &-image {
      display: block;
      width: 70%;
      margin: auto;
    }
  }

  .title {
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    color: #0F3553;
  }

  .subtitle {
    font-weight: 300;
    color: #707070;
  }

  .about-text {
    margin-top: 2rem;
    margin-bottom: 4rem;
    font-size: .9rem;
    color: #0F3553;
  }

  .about-card-content {
    padding: 60px 0;
  }

  .card {
    position: relative;
    text-align: center;
    border-radius: 0;
    background-color: #FDFAFD;
    cursor: pointer;
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;

    &-img {
      display: block;
      height: 60px;
      margin: 50px auto 0 auto;
    }

    &-body {
      padding-bottom: 0;
    }

    &-title {
      margin-top: 2rem;
      font-weight: 300;
    }

    &-text {
      font-size: .9rem;
      margin-bottom: 1rem;
    }

    &-footer {
      background: transparent;
      border-top: none;
      border-bottom: none;
    }

    &:hover {
      background-color: #fff;
    }
  }

  .btn-primary {
    top: 32px;
  }

  .card-spacing {
    padding-right: 0;
    padding-left: 0;
  }

  .about-card-content {
    margin: auto;
    max-width: 80%;

    .card-spacing:nth-child(2) .card {
      border-right: none;
      border-left: none;
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  @media (max-width: 576px) {
    .card {
      margin-bottom: 35px;
    }

    .about-content {
      margin-top: 35px;
      margin-bottom: 35px;
    }

    .about-text {
      margin-bottom: 1rem;
    }
  }
</style>