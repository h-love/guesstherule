<template>
  <div class="theThemesPage">
    <h1>
      Guess<br/>
      the rule!
    </h1>
    <div class="flex-container align-middle flex-dir-column">
      <p class="u-noMarginTop">
        Themes :
      </p>
      <div
        v-for="(theme, index) in rulesData"
        :key="index"
      >
        <router-link :to="'/game/'+theme.id">
          {{theme.title}}
        </router-link>
      </div>
      <div class="c-separator"></div>
      <router-link to="/game/freestyle">
        Freestyle
      </router-link>
    </div>
    <router-link class="c-back" to="/">
      Go back to home
    </router-link>
  </div>
</template>
<script>
import jsonData from '@/assets/data/rules.json'
import Rules from '@/components/Rules'

export default {
  name: 'theGamePage',
  components: {Rules},
  data () {
    return {
      rulesData: jsonData.rules,
      rule: ''
    }
  },
}
</script>