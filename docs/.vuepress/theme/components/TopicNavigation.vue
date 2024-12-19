<template>
    <div v-if="prev || next" class="topic-nav">
      <p class="inner">
        <!-- Previous Topic Link -->
        <span v-if="prev" class="prev">
          ←
          <RouterLink v-if="prev.type === 'internal'" :to="prev.path">
            {{ prev.title || prev.path }}
          </RouterLink>
          <a v-else :href="prev.path" target="_blank" rel="noopener noreferrer">
            {{ prev.title || prev.path }}
          </a>
        </span>
  
        <!-- Next Topic Link -->
        <span v-if="next" class="next">
          <RouterLink v-if="next.type === 'internal'" :to="next.path">
            {{ next.title || next.path }}
          </RouterLink>
          <a v-else :href="next.path" target="_blank" rel="noopener noreferrer">
            {{ next.title || next.path }}
          </a>
          →
        </span>
      </p>
    </div>
  </template>
  
  <script>
  import { resolvePageLink } from '../util'
  import isNil from 'lodash/isNil'
  
  export default {
    name: 'TopicNavigation',
  
    props: ['topics', 'currentTopic'],
  
    computed: {
      prev() {
        return this.resolveLink('prev');
      },
      next() {
        return this.resolveLink('next');
      }
    },
  
    methods: {
      resolveLink(type) {
        const currentIndex = this.topics.findIndex(topic => topic.id === this.currentTopic.id);
        if (currentIndex === -1) return null;
        const offset = type === 'prev' ? -1 : 1;
        const linkedTopic = this.topics[currentIndex + offset];
        if (linkedTopic) {
          return { 
            path: linkedTopic.path, 
            title: linkedTopic.title,
            type: 'internal'
          };
        }
        return null;
      }
    }
  }
  </script>
  
  <style scoped>
  .topic-nav {
    margin-top: 20px;
    padding: 10px 0;
  }
  
  .inner {
    display: flex;
    justify-content: space-between;
  }
  
  .prev, .next {
    font-weight: bold;
    cursor: pointer;
  }
  
  .prev {
    margin-right: auto;
  }
  
  .next {
    margin-left: auto;
  }
  
  a {
    color: #007bff;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  