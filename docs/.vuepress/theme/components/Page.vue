<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    
    <TopicNavigation 
      :topics="sidebarItems"
      :currentTopic="currentTopic" 
    />
    
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import TopicNavigation from '@theme/components/TopicNavigation.vue'

export default {
  components: { PageEdit, PageNav, TopicNavigation },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

.table-of-contents ul
    list-style-type none
    color #0041FF

.table-of-contents ul li:before
  content '\0023'
  position absolute
  margin-left -16px
</style>
