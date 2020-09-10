<template>
    <div class="ui container notes">
      <h4 class="ui horizontal divider header">
        <i class="paw icon"></i>
        Shine Notes App _Vue.js
      </h4>
      <a @click="create" class="ui right floated basic violet button" href="">添加笔记</a>
      <div class="ui divided items">
        <note v-for="entity in entities" :entity = "entity" :key="entity.$loki"></note>
        <span v-if="!entities.length" class="ui small disabled header">还没有笔记，请按下'添加笔记'按钮</span>
      </div>
    </div>
</template>
<script>
import Note from './Note'
import {mapGetters,mapActions} from 'vuex'

export default {
  data(){
    return {

    }
  },
  methods: {
    ...mapActions([
      'initial',
      'create'
    ])
  },
  computed: {
    ...mapGetters([
      'entities'
    ])
  },

  components:{Note},
  created() {
    this.initial()
  },
}
</script>

<style lang="css">

</style>

