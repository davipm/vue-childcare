<template>
  <div class="home">
    <!-- hero home -->
    <Hero />
    <!-- video section -->
    <Video />
    <!-- about section -->
    <About />
    <!-- campaign -->
    <Campaign />
    <!-- team -->
    <Team />
    <!-- people say -->
    <PeopleSay />
    <!-- blog -->
    <Blog />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Hero from "@/components/Hero";
  import Video from "@/components/Video";
  import About from "@/components/About";
  import Campaign from "@/components/Campaign";
  import Team from '@/components/Team.vue';
  import PeopleSay from '@/components/PeopleSay.vue'
  import Blog from '@/components/Blog.vue'

  export default {
    name: 'home',
    components: {
      Campaign,
      About,
      Video,
      Hero,
      Team,
      PeopleSay,
      Blog
    }
  }
</script>
