<template>
  <div class="home">
    <!-- hero home -->
    <Hero />
    <Video />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Hero from "@/components/Hero";
  import Video from "../components/Video";

  export default {
    name: 'home',
    components: {
      Video,
      Hero
    }
  }
</script>
