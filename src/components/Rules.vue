<template>
  <div class="Rules">
    <p
      class="flex-container align-center u-clickable u-colorHoverNutMeg"
      @click="popUpOpen()"
    >
      See the rules
    </p>
    <div
      class="c-popUp flex-container align-middle align-center"
      ref="popup"
      @click="popUpClose()"
    >
      <div class="c-popUp__ctt">
        <div class="c-popUp__ctt__close u-clickable">
          <div></div>
          <div></div>
        </div>
        <h2 class="c-popUp__ctt__title u-noMargin u-textAlignCenter">The rules</h2>
        <p>
          Welcome! This is a speaking game.<br />
          Follow the steps below if you want to play! 
        </p>
        <div>
          <p>
            <b>Step 1</b><br />
            Pick up a rule. It must remains a secret, so do not read it to the rest of the class!
          </p>
          <p>
            <b>Step 2</b><br />
            Choose a word that is correct according to the rule.<br />
            Say it out loud so the whole class can hear it.
          </p>
          <p>
            <b>Step 3</b><br />
            Now your classmates are going to try guessing what the rule is.<br />
            Each one is going to say a word. If the word is right, you have to say "yes".
            If the word is wrong, you have to say "no"
          </p>
          <p>
            <b>End of game</b><br />
            The winner is the first player to figure out the rule. 
          </p>
        </div>
        <p class="c-popUp__ctt__luck">
          Good luck!
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Rules',
  methods: {
    popUpOpen() {
      this.$refs.popup.classList.add('active');
    },
    popUpClose() {
      this.$refs.popup.classList.remove('active');
    }
  }
}
</script>