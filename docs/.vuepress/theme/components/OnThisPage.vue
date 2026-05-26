<template>
  <aside v-if="headers.length" class="on-this-page" aria-label="On this page">
    <p class="on-this-page__title">On this page</p>

    <ul class="on-this-page__list">
      <li
        v-for="h in headers"
        :key="h.slug"
        :class="['on-this-page__item', `on-this-page__item--h${h.level}`, { 'is-active': activeSlug === h.slug }]"
      >
        <a :href="`#${h.slug}`" @click="onClick(h.slug, $event)">{{ h.title }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'OnThisPage',

  data () {
    return {
      activeSlug: null,
    };
  },

  computed: {
    headers () {
      // VuePress populates $page.headers with H2 + H3 by default.
      // Filter to level <= 3 so deeper headings don't crowd the panel.
      const all = (this.$page && this.$page.headers) || [];
      return all.filter(h => h.level <= 3);
    },
  },

  mounted () {
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll);
  },

  watch: {
    '$route' () {
      this.activeSlug = null;
      this.$nextTick(this.onScroll);
    },
  },

  methods: {
    onScroll () {
      // The active heading is the last one above the 100px viewport mark.
      const offset = 100;
      let current = null;
      for (const h of this.headers) {
        const el = document.getElementById(h.slug);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = h.slug;
        } else {
          break;
        }
      }
      this.activeSlug = current || (this.headers[0] && this.headers[0].slug) || null;
    },

    onClick (slug, e) {
      // Native anchor scroll works fine — just update the active marker
      // immediately so the panel doesn't lag behind the scroll.
      this.activeSlug = slug;
    },
  },
};
</script>

<style lang="stylus">
@require '../../styles/palette'

$onThisPageWidth = 16rem

.on-this-page
  position fixed
  top ($topNavHeight + $navbarHeight + 1rem)
  right 1.5rem
  width $onThisPageWidth - 1rem
  max-height "calc(100vh - %s - %s - 2rem)" % ($topNavHeight $navbarHeight)
  overflow-y auto
  padding-left 1rem
  border-left 1px solid $borderColor
  font-size .85rem
  z-index 5

.on-this-page__title
  font-weight 600
  font-size .75rem
  text-transform uppercase
  letter-spacing .03em
  color #555
  margin 0 0 .6rem 0

.on-this-page__list
  list-style none
  padding 0
  margin 0
  line-height 1.4

.on-this-page__item
  margin 0
  padding 0
  a
    display block
    padding .25rem 0
    color #555
    font-weight 400
    text-decoration none
    border-left 2px solid transparent
    padding-left .75rem
    margin-left -.75rem
    transition color .12s ease, border-color .12s ease
    &:hover
      color $accentColor
      text-decoration none

.on-this-page__item--h3 a
  padding-left 1.75rem
  font-size .8rem
  color #777

.on-this-page__item.is-active a
  color $accentColor
  font-weight 500
  border-left-color $accentColor

// Stack into the content flow on narrower screens (default theme breakpoint).
@media (max-width: 1199px)
  .on-this-page
    display none
</style>
