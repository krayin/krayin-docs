<template>
  <div class="translate-widget" :title="title">
    <span class="translate-icon" aria-hidden="true" @click="toggleDropdown">
      <!-- Google "translate" glyph (Material-style globe + characters) -->
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
      </svg>
    </span>

    <!-- Hidden Google Translate widget container; we trigger its select via JS. -->
    <div id="google_translate_element" class="gt-host"></div>

    <ul v-if="open" class="translate-dropdown" @click.stop>
      <li
        v-for="lang in languages"
        :key="lang.code"
        :class="{ 'is-active': activeLang === lang.code }"
        @click="selectLang(lang.code)"
      >
        {{ lang.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoogleTranslate',

  data () {
    return {
      title: 'Translate',
      open: false,
      activeLang: 'en',
      languages: [
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' },
        { code: 'fr', label: 'Français' },
        { code: 'de', label: 'Deutsch' },
        { code: 'pt', label: 'Português (Brasil)' },
        { code: 'it', label: 'Italiano' },
        { code: 'nl', label: 'Nederlands' },
        { code: 'ru', label: 'Русский' },
        { code: 'tr', label: 'Türkçe' },
        { code: 'vi', label: 'Tiếng Việt' },
        { code: 'ar', label: 'العربية' },
        { code: 'fa', label: 'فارسی' },
        { code: 'hi', label: 'हिन्दी' },
        { code: 'zh-CN', label: '简体中文' },
        { code: 'ja', label: '日本語' },
        { code: 'ko', label: '한국어' },
      ],
    };
  },

  mounted () {
    this.loadWidget();
    document.addEventListener('click', this.onDocClick);
  },

  beforeDestroy () {
    document.removeEventListener('click', this.onDocClick);
  },

  methods: {
    loadWidget () {
      if (typeof window === 'undefined') return;
      if (window.__krayinGtLoaded) return;
      window.__krayinGtLoaded = true;

      window.googleTranslateElementInit = () => {
        // eslint-disable-next-line no-new
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element',
        );
      };

      const s = document.createElement('script');
      s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      s.async = true;
      document.head.appendChild(s);
    },

    toggleDropdown (e) {
      e.stopPropagation();
      this.open = !this.open;
    },

    onDocClick () {
      this.open = false;
    },

    selectLang (code) {
      this.activeLang = code;
      this.open = false;

      // Drive the hidden Google Translate select element.
      const sel = document.querySelector('.goog-te-combo');
      if (sel) {
        sel.value = code;
        sel.dispatchEvent(new Event('change'));
      } else {
        // Widget hasn't loaded yet — retry shortly.
        setTimeout(() => this.selectLang(code), 300);
      }
    },
  },
};
</script>

<style lang="stylus">
// Match `.nav-item` line-height (2rem) so the icon sits on the same baseline
// as the text links. Without this, the SVG floats above text items because
// flex centring kicks in on the icon's own 20px height, not the navbar row.
.translate-widget
  position relative
  display inline-flex
  align-items center
  line-height 2rem
  margin-left 1.5rem

.translate-icon
  cursor pointer
  color $textColor
  display inline-flex
  align-items center
  height 100%
  svg
    display block
    vertical-align middle
  &:hover
    color $accentColor

// Hide the Google Translate banner that the script injects at the top of <body>.
body
  top 0 !important
.goog-te-banner-frame
  display none !important

// Hide the native Google Translate widget UI — we drive it with our custom dropdown.
.gt-host
  position absolute
  width 0
  height 0
  overflow hidden
  visibility hidden

.translate-dropdown
  position absolute
  top 100%
  right 0
  margin-top .5rem
  background #fff
  border 1px solid $borderColor
  border-radius 4px
  box-shadow 0 4px 12px rgba(0, 0, 0, .08)
  padding .25rem 0
  list-style none
  z-index 30
  min-width 11rem
  max-height 60vh
  overflow-y auto
  font-size .85rem
  li
    padding .35rem .9rem
    cursor pointer
    color $textColor
    line-height 1.4
    &:hover
      background #f6f8fa
      color $accentColor
    &.is-active
      color $accentColor
      font-weight 600
</style>
