<template>
  <div class="section campaign">
    <div class="container">
      <!-- heading -->
      <h5 class="subtitle">Campaign</h5>
      <h3 class="title">Here is our latest Campaign</h3>
      <!-- grid -->
      <div class="row">
        <div class="col-md-12 col-lg-6 pr-lg-0">
          <div class="card">
            <img src="../assets/img/soldier.png" class="card-img-top" alt="Soldier Image">
            <div class="card-body shadow-sm">
              <div class="row">
                <div class="col-md-4">
                  <p class="objective">Goal</p>
                  <p class="price">$20,000</p>
                </div>
                <div class="col-md-4">
                  <p class="objective">Raised</p>
                  <p class="price">$7000</p>
                </div>
                <div class="col-md-4">
                  <a href="#" class="btn btn-primary">Donate</a>
                </div>
              </div>
              <div class="number-items">
                <div class="number-items-content">
                  <h3 class="number-title">
                    Build school<br>
                    for poor children
                  </h3>
                  <h5 class="number-subtitle">
                    Contrary to popular belief, Lorem Ipsum is not<br> simply random text.
                  </h5>
                </div>
                <img src="../assets/img/number1.svg" class="number-img" alt="Number Img">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 pl-lg-0">
          <div class="number-items items-card">
            <img src="../assets/img/number1.svg" class="number-img" alt="Number Img">
            <div class="number-items-content">
              <h3 class="number-title">
                Build school<br>
                for poor children
              </h3>
              <h5 class="number-subtitle">
                Contrary to popular belief, Lorem Ipsum is not<br> simply random text.
              </h5>
            </div>
          </div>
          <div class="number-items items-card">
            <img src="../assets/img/number2.svg" class="number-img" alt="Number Img">
            <div class="number-items-content">
              <h3 class="number-title">
                Make The<br>
                World Green
              </h3>
              <h5 class="number-subtitle">
                Contrary to popular belief, Lorem Ipsum is not<br>
                simply random text.
              </h5>
            </div>
          </div>
          <div class="number-items items-card">
            <img src="../assets/img/number3.svg" class="number-img" alt="Number Img">
            <div class="number-items-content">
              <h3 class="number-title">
                Help Us Build<br>
                A New Church
              </h3>
              <h5 class="number-subtitle">
                Contrary to popular belief, Lorem Ipsum is not<br>
                simply random text.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <!-- btn centered -->
      <div class="btn-center">
        <router-link to="/" class="btn btn-primary">View All</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Campaign"
  }
</script>

<style scoped lang="scss">
  .campaign {
    position: relative;
    display: block;
    background-color: #FBFBFB;
  }

  .title {
    margin-bottom: 3rem;
    font-weight: 400;
    font-size: 36px;
    color: #0F3553;
  }

  .subtitle {
    font-weight: 300;
    font-size: 24px;
    color: #0F3553;

    &::after {
      position: relative;
      display: inline-block;
      left: 35px;
      bottom: 5px;
      content: '';
      width: 136px;
      height: 2px;
      background-color: #F05F7F;
    }
  }

  .card {
    border: none;
    border-radius: 0;
  }

  .objective {
    margin-bottom: 0;
  }

  .price {
    color: #EC5C81;
  }

  .btn-primary {
    display: block;
  }

  .number-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 576px) {
      padding-top: 15px;
    }
  }

  .number-img {
    display: block;
    position: relative;
    width: 127px;
  }

  .number-title {
    font-size: 24px;
    font-weight: 300;
    color: #0F3553;
  }

  .number-subtitle {
    font-size: 14px;
    font-weight: 300;
    color: #0F3553;
  }

  .items-card {
    justify-content: flex-start;
    margin: 10px 0;
    padding: 15px;
    background-color: #ffffff;
    cursor: pointer;
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;

    &:hover {
      background-color: #B539A8;
      color: #ffffff;
      .number-title,
      .number-subtitle {
        color: #ffffff;
      }
    }

    &:first-child {
      margin-top: 0;
    }

    .number-items-content {
      margin-left: 35px;
    }
  }

  .btn-center {
    position: relative;
    display: block;
    padding: 25px 0;
    text-align: center;

    .btn-primary {
      display: inline-block;
      padding: 12px 35px;
    }
  }
</style>