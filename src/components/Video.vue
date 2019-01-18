<template>
  <div class="section video">
    <!-- the modal -->
    <transition name="modal-animation">
      <div class="modal-video" v-if="showModal">
        <div class="modal-container">

        </div>
      </div>
    </transition>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="video-content">
            <h5 class="video-title">
              {{ title1 }}
            </h5>
            <h5 class="video-title">
              {{ title2 }}
            </h5>
            <p class="video-text">
              {{ text }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/btn.svg" v-b-modal="'myModal'" class="video-player-btn" alt="Video Player">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Video",
    components: {

    },

    data() {
      return {
        title1: 'Together To',
        title2: 'Help The World Better!',
        text: 'Please help us change lives around the world.',
        showModal: false
      }
    },

    methods: {

    }
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
      margin-top: 10px;
      margin-left: auto;
      cursor: pointer;
    }
  }

  .modal-video {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
    z-index: 100;
  }

  .modal-container {
    position: relative;
    display: block;
    top: 10%;
    width: 80vw;
    height: 80vh;
    margin: 0 auto;
    vertical-align: middle;
    background-color: #FFF;
    border-radius: 6px;
    opacity: 1;
  }

  @media (max-width: 576px) {
    .video-player-btn {
      margin-right: auto;
    }
  }
</style>