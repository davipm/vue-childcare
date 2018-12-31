<template>
  <div class="section blog">
    <div class="container">
      <!-- heading -->
      <h5 class="subtitle">Blog</h5>
      <h3 class="title">Here is our latest news</h3>
      <!-- grid -->
      <div class="row blog-content">
        <div class="col-md-4">
          <div class="card shadow">
            <img src="../assets/img/blog1.png" class="card-img-top" alt="Blog Image">
            <div class="card-body">
              <h5 class="card-title">
                The best<br>
                apps to your next trip
              </h5>
              <div class="card-info">
                <time class="card-info-item">
                  Oct - 27
                </time>
                <span class="card-info-item">
                  Child
                </span>
                <a href="#" class="card-info-share">
                  <img src="../assets/img/share.svg" class="share-icon" alt="">
                </a>
              </div>
              <p class="card-text">
                Contrary to popular belief, Lorem Ipsum is not simply
              </p>
            </div>
            <div class="card-footer">
              <router-link to="/" class="btn btn-primary">
                Learn More
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow">
            <img src="../assets/img/blog2.png" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">
                Highlights But<br>
                I must explain to you
              </h5>
              <div class="card-info">
                <time class="card-info-item">
                  Oct - 27
                </time>
                <span class="card-info-item">
                  Child
                </span>
                <router-link to="/" class="card-info-share">
                  <img src="../assets/img/share.svg" class="share-icon" alt="">
                </router-link>
              </div>
              <p class="card-text">
                Contrary to popular belief, Lorem Ipsum is not simply
              </p>
            </div>
            <div class="card-footer">
              <router-link to="/" class="btn btn-primary">
                Learn More
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow">
            <img src="../assets/img/blog3.png" class="card-img-top" alt="Blog Image">
            <div class="card-body">
              <h5 class="card-title">
                On the<br>
                other hand
              </h5>
              <div class="card-info">
                <time class="card-info-item">
                  Oct - 27
                </time>
                <span class="card-info-item">
                  Child
                </span>
                <router-link to="/" class="card-info-share">
                  <img src="../assets/img/share.svg" class="share-icon" alt="Blog Image">
                </router-link>
              </div>
              <p class="card-text">
                Contrary to popular belief, Lorem Ipsum is not simply
              </p>
            </div>
            <div class="card-footer">
              <router-link to="/" class="btn btn-primary">
                Learn More
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- btn centered -->
      <div class="btn-center">
        <router-link to="/" class="btn btn-primary">
          View All
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Blog"
  }
</script>

<style scoped lang="scss">
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
    position: relative;
    border: none;

    &-title {
      font-size: 24px;
      font-weight: 300;
      color: #0F3553;
    }

    &-info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 2rem;

      &-item {
        position: relative;
        display: inline-block;
        width: 85px;
        margin-right: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: center;
        font-size: .8rem;
        color: #FFFFFF;
        border-radius: 18px;
        background-image: linear-gradient(-90deg, #B539A8, #F4627C);
        cursor: pointer;
      }

      &-share {
        display: inline-block;
        .share-icon {
          height: 25px;
        }
      }
    }

    &-footer {
      border: none;
      background-color: transparent;
    }
  }

  .btn-center {
    position: relative;
    display: block;
    padding-top: 50px;
    text-align: center;

    .btn-primary {
      display: inline-block;
      padding: 12px 35px;
    }
  }
</style>