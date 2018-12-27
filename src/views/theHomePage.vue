<template>
  <div class="theHomePage">
    <h1>
      Guess<br />
      the rule!
    </h1>
    <router-link
      class="flex-container align-center"
      to="/themes"
    >
      Let's play!
    </router-link>
    <rules />
    <a class="c-back" href="https://henri.love">
      Made with &#9829; by henri.love
    </a>
  </div>
</template>
<script>
import Rules from '@/components/Rules'

export default {
  name: 'theHomePage',
  components: {Rules}
}
</script>

