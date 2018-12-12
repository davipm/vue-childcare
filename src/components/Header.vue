<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <router-link to="/" class="logo-btn-header">
            <img src="../assets/img/logo-header.png" class="w-100" alt="Logo Child Care">
          </router-link>
        </div>
        <div class="col-md-10">
          <div class="header-inline">
            <ul class="header-list">
              <li class="header-item">
                <span><img src="../assets/img/phone-call.svg" class="icon-header" alt=""></span>
                +880 1971 502654
              </li>
              <li class="header-item">
                <span><img src="../assets/img/mail.svg" class="icon-header" alt=""></span>
                davi.p.m94@gmail.com
              </li>
              <li class="header-item">
                <span><img src="../assets/img/shopping-cart.svg" class="icon-header" alt=""></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- menu -->
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                OUR CAUSES
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                SHOP
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                PORTFOLIO
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                BLOGS
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                PAGES
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                CONTACT
              </router-link>
            </li>
          </ul>
        </div>
        <div class="btn-subscribe">
          <a href="#" class="btn btn-primary">
            DONATE
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="scss">
  .header {
    display: block;
    position: relative;
    padding-top: 20px;
  }

  .navbar {
    padding-top: 30px;
  }

  .header-list {
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0;
    padding-top: 17px;
    padding-left: 0;
    list-style: none;
  }

  .header-item {
    margin-left: 30px;
    font-size: 12px;
  }

  .nav-link {
    margin-right: 10px;
    text-transform: uppercase;
    color: #4D4D4D;
  }

  .icon-header {
    position: relative;
    display: inline-block;
    bottom: 2px;
    width: 15px;
  }

  @media (max-width: 576px) {
    .header-list {
      display: block;
    }

    .header-item {
      margin-left: 0;
      margin-bottom: 10px;
      text-align: center;
    }
  }
</style>