<template>
  <div class="theGamePage">
    <h1>
      Guess<br/>
      the rule!
    </h1>
    <p v-if="this.$route.params.id !== 'freestyle'">Theme : {{theme.title}}</p>
    <p v-else>Freestyle</p>
    <p>
      You are the chosen one!<br/>
      The rule you have to make your friends guess is :
    </p>
    <p v-if="this.$route.params.id !== 'freestyle'" class="c-rule">{{rule}}</p>
    <input v-else class="c-rule c-rule--input" type="text" value="Click & write the rule here"/>
    <p v-if="this.$route.params.id !== 'freestyle'" class="u-clickable u-colorHoverNutMeg" @click="popUpOpen()">
      Help! Give me a word!
    </p>
    <rules />
    <router-link class="c-back" to="/themes">
      Go back to themes
    </router-link>
    <div
      class="c-popUp flex-container align-middle align-center"
      ref="popup"
      @click="popUpClose()"
    >
      <div class="c-popUp__ctt c-popUp__ctt--help">
        <div class="c-popUp__ctt__close u-clickable">
          <div></div>
          <div></div>
        </div>
        
        <h2 v-if="!noMoreWords" class="u-noMargin">Fine! Here is a word to help you!</h2>
        <h2 class="u-noMargin u-textCentered" v-else>
          Sorry buddy!<br />
          I don't have any words for you...
        </h2>
        <p v-if="!noMoreWords" class="c-popUp__ctt__word">{{word}}</p>
      </div>
    </div>
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
      theme: '',
      rule: '',
      word: '',
      noMoreWords: false
    }
  },
  created () {
    if(this.$route.params.id !== 'freestyle') {
      this.theme = jsonData.rules.find(item => item.id === this.$route.params.id)
      this.rule = this.theme.rule
      this.word = this.theme.words[0]
      this.index = 0
    }
  },
  methods: {
    popUpOpen() {
      this.$refs.popup.classList.add('active');
    },
    popUpClose() {
      this.$refs.popup.classList.remove('active');

      if(this.index !== this.theme.words.length-1) {
        this.index = ++this.index
      } else {
        this.noMoreWords = true
      }

      this.word = this.theme.words[this.index]
    }
  }
}
</script>