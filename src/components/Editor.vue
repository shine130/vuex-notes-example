<template>
    <div class="ui form">
      <div class="field">
        <textarea @input="update(entity)" v-model="entity.body" rows="5" placeholder="写点东西...">
        </textarea>
      </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  props:['entity'],
  methods: {
    ...mapActions([
      'update'
    ])
  },
}
</script>

<style>

</style>
