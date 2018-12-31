<template>
  <div class="section people">
    <div class="container">
      <!-- heading -->
      <h2 class="title">What People Say ?</h2>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="carousel-caption">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. !</p>
              <div class="people-description">
                <img src="../assets/img/person1.png" class="people-img" alt="">
                <div class="people-content">
                  <h3 class="people-name">Olivar Oli</h3>
                  <h5 class="people-position">CEO</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-caption">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. !</p>
              <div class="people-description">
                <img src="../assets/img/person2.png" class="people-img" alt="">
                <div class="people-content">
                  <h3 class="people-name">Olivar Oli</h3>
                  <h5 class="people-position">CEO</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-caption">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. !Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
              <div class="people-description">
                <img src="../assets/img/person3.png" class="people-img" alt="">
                <div class="people-content">
                  <h3 class="people-name">Olivar Oli</h3>
                  <h5 class="people-position">CEO</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
            <img src="../assets/img/person1.png" class="people-img" alt="">
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">
            <img src="../assets/img/person2.png" class="people-img" alt="">
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2">
            <img src="../assets/img/person3.png" class="people-img" alt="">
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PeopleSay"
  }
</script>

<style scoped lang="scss">
  .people {
    padding-top: 200px;
    padding-bottom: 100px;
    background: #fff url("../assets/img/people-bg.svg") no-repeat center/cover;

    &-description {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 25px 0;
    }

    &-img {
      display: inline-block;
      width: 60px;
      height: 60px;
    }

    &-content {
      margin-left: 15px;
      text-align: left;
    }

    &-name {
      margin-bottom: 0;
      font-size: 1.2rem;
      font-weight: 300;
    }

    &-position {
      font-size: 0.8rem;
      font-weight: 300;
    }
  }

  .title {
    color: #ffffff;
    text-align: center;
  }

  .carousel-item {
    min-height: 300px;
  }

  .carousel-indicators {
    bottom: -30px;

    li {
      top: 40px;
      width: auto;
      height: auto;
      margin-right: 15px;
      text-indent: 0;
      background-color: transparent;
      -webkit-transition: all .15s ease-in-out;
      -moz-transition: all .15s ease-in-out;
      -ms-transition: all .15s ease-in-out;
      -o-transition: all .15s ease-in-out;
      transition: all .15s ease-in-out;

      &::before,
      &::after {
        display: none;
      }
    }

    .active {
      -webkit-transform: scale(1.3);
      -moz-transform: scale(1.3);
      -ms-transform: scale(1.3);
      -o-transform: scale(1.3);
      transform: scale(1.3);
    }

    &::before,
    &::after {
      content: "";
      position: relative;
      display: inline-block;
      width: 150px;
      height: 2px;
      background-color: #fff;
    }
    // line left
    &::before {
      top: 70px;
      right: 50px;
    }
    // line right
    &::after {
      top: 70px;
      left: 40px;
    }
  }

  @media (max-width: 768px) {
    .carousel-item {
      min-height: 388px;
    }
  }

  @media (max-width: 576px) {
    .carousel-item {
      min-height: 580px;
    }
  }
</style>