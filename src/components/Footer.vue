<template>
  <footer class="footer">
    <div class="footer-donation">
      <div class="container">
        <!-- heading -->
        <h2 class="title">Make a Donation</h2>
        <!-- btn centered -->
        <div class="btn-center">
          <router-link to="/" class="btn btn-primary shadow">
            Donate now
          </router-link>
        </div>
      </div>
    </div>
    <div class="section footer-content">
      <div class="container">
        <h2 class="content-title">Childcare</h2>
        <address class="address">
          <p class="address-item">Paupina, Fortaleza/CE - Brazil</p>
          <p class="address-item">E: davi.p.m94@gmail.com</p>
          <p class="address-item">P: 55+(85)98880-7304</p>
        </address>
      </div>
      <div class="container-fluid footer-info">
        <div class="row">
          <div class="col-md-6">
            <small>
              Copyright © {{ getFullYear }} Developed by Davi Pereira.
              Design by Fulano
              All Rights Reserved
            </small>
          </div>
          <div class="col-md-6">
            <nav class="footer-nav">
              <ul class="footer-navbar">
                <li class="footer-nav-item">
                  <router-link to="/" class="footer-nav-link">
                    HOME
                  </router-link>
                </li>
                <li class="footer-nav-item">
                  <router-link to="/" class="footer-nav-link">
                    OUR CAUSES
                  </router-link>
                </li>
                <li class="footer-nav-item">
                  <router-link to="/" class="footer-nav-link">
                    SHOP
                  </router-link>
                </li>
                <li class="footer-nav-item">
                  <router-link to="/" class="footer-nav-link">
                    PORTFOLIO
                  </router-link>
                </li>
                <li class="footer-nav-item">
                  <router-link to="/" class="footer-nav-link">
                    BLOGS
                  </router-link>
                </li>
                <li class="footer-nav-item">
                  <router-link to="/" class="footer-nav-link">
                    PAGES
                  </router-link>
                </li>
                <li class="footer-nav-item">
                  <router-link to="/" class="footer-nav-link">
                    CONTACT
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    computed: {
      getFullYear() {
        return new Date().getFullYear();
      }
    }
  }
</script>

<style scoped lang="scss">
  .footer-donation {
    display: block;
    position: relative;
    padding: 50px 0;
    background-image: linear-gradient(-90deg, #B539A8, #F4627C);
  }

  .title {
    display: block;
    margin-bottom: 2rem;
    font-weight: 400;
    text-align: center;
    color: #FFFFFF;
  }

  .btn-center {
    position: relative;
    display: block;
    text-align: center;

    .btn-primary {
      display: inline-block;
      padding: 12px 35px;
    }
  }

  .footer-content {
    padding-bottom: 0;
    text-align: center;
  }

  .content-title {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    color: #E35787;
  }

  .address-item {
    margin-bottom: .2rem;
  }

  .footer-info {
    padding-top: 10px;
    border-top: 1px solid #EBEBEB;
  }

  .footer-navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;
    list-style: none;
  }

  .footer-nav-item {
    margin-right: 15px;
  }

  .footer-nav-link {
    display: inline-block;
    font-size: .8rem;
    color: #4D4D4D;
  }
</style>