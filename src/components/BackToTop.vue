<template>
  <transition name="back-to-top-fade">
    <div class="btn-back-to-top" id="BackToTop"
         :style="`bottom:${this.bottom};right:${this.right};`"
         v-show="visible"
         @click="backToTop"
    >
      <slot>
        <div class="default">
          <span>
            <i class="fas fa-chevron-up"></i>
          </span>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "BackToTop",
    props: {
      visibleoffset: {
        type: [String, Number],
        default: 200
      },

      right: {
        type: String,
        default: '30px'
      },

      bottom: {
        type: String,
        default: '40px'
      }
    },

    data() {
      return {
        visible: false,
      }
    },

    mounted() {
      window.smoothscroll = () => {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(window.smoothscroll);
          window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
        }
      };
      window.addEventListener('scroll', this.catchScroll);
    },

    destroyed() {
      window.removeEventListener('scroll', this.catchScroll)
    },

    methods: {
      catchScroll() {
        this.visible = (window.pageYOffset > parseInt(this.visibleoffset))
      },

      backToTop() {
        window.smoothscroll();
        this.$emit('scrolled');
      }
    }
  }
</script>

<style scoped lang="scss">
  .back-to-top-fade-enter-active,
  .back-to-top-fade-leave-active {
    transition: opacity .7s;
  }

  .back-to-top-fade-enter,
  .back-to-top-fade-leave-to{
    opacity: 0;
  }

  .btn-back-to-top {
    position: fixed;
    z-index: 1000;
    cursor:pointer;

    .default {
      width: 40px;
      height: 40px;
      padding-top: 5px;
      color: #ffffff;
      text-align: center;
      line-height: 30px;
      background-color: #00734A;
      border-radius: 3px;
      opacity: .6;

      -webkit-transition: all .3s ease-in-out;
      -moz-transition: all .3s ease-in-out;
      -ms-transition: all .3s ease-in-out;
      -o-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;

      span {
        color: #fff;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
</style>
