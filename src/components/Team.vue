<template>
  <div class="section team">
    <div class="container">
      <!-- grid -->
      <div class="row">
        <div class="col-md-6">
          <!-- heading -->
          <h5 class="subtitle">Team</h5>
          <h3 class="title">Want to part of the Team</h3>
          <div class="team-content">
            <p class="team-text">
              Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin
              literature from 45 BC,
            </p>
          </div>
          <form class="form-send">
            <div class="form-group mb-2">
              <label for="staticEmail2" class="sr-only">
                Email
              </label>
              <input type="text"
                     class="form-control"
                     id="staticEmail2"
                     placeholder="your email"
              >
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/team.svg" class="w-100" alt="Team img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Team"
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

  .form-send {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 50px;
  }

  .form-control {
    position: relative;
    height: 43px;
    width: 388px;
    top: 4px;
    border-color: #F5F5F5;
    border-radius: 10px;
    &::placeholder {
      color: #191919;
    }
  }

  .btn-primary {
    position: relative;
    right: 20px;
    padding: 12px 60px;
  }

  @media (max-width: 576px) {
    .form-send {
      display: block;
    }

    .btn-primary {
      right: 0;
      float: right;
      margin-top: 15px;
    }

    .form-control {
      width: 100%;
    }
  }
</style>