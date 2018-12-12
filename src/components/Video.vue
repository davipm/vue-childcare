<template>
  <div class="section video">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="video-content">
            <h5 class="video-title">
              Together To
            </h5>
            <h5 class="video-title">
              Help The World Better!
            </h5>
            <p class="video-text">
              Please help us change lives around the world.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/btn.svg" class="video-player-btn" alt="Video Player">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Video"
  }
</script>

<style scoped lang="scss">
  .video {
    padding: 40px 0;
    background-image: linear-gradient(-90deg, #B539A8, #F4627C);
    &-title {
      margin-bottom: 0;
      font-size: 2rem;
      font-weight: bold;
      color: #ffffff;
    }

    &-text {
      margin-top: 1.5rem;
      color: #ffffff;
    }

    &-player-btn {
      display: block;
      width: 126px;
      margin-top: 25px;
      margin-left: auto;
      cursor: pointer;
    }
  }
</style>