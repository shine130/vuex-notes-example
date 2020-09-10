<template>
    <div class="item">
      <div class="meta">
       {{updated(entity)}}
      </div>
      <div class="content">
        <div class="header" @click="open = !open">
          {{header(entity) || '新建笔记'}}
        </div>
        <div class="extra">
          <editor v-if="open" :entity="entity"></editor>
          {{words(entity)}}字
          <i v-if="open" @click="destroy(entity)" class="right floated trash icon"></i>
        </div>
      </div>
    </div>
</template>
<script>

import Editor from './Editor'
import {mapGetters,mapActions} from 'vuex'

export default {
  data(){
    return {
      open:false
    }
  },
  props:['entity'],
  computed: {
    ...mapGetters([
      'updated',
      'words',
      'header'
    ])
  },
  methods: {
    ...mapActions([
      'destroy'
    ])
  },
  components:{Editor}
}
</script>
<style>

</style>
