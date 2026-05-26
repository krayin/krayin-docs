<template>
  <button
    type="button"
    class="theme-toggle"
    :title="title"
    :aria-label="title"
    @click="toggle"
  >
    <!-- Sun: shown in dark mode (click to go light). -->
    <svg
      v-if="isDark"
      class="theme-toggle__icon"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
    </svg>

    <!-- Moon: shown in light mode (click to go dark). -->
    <svg
      v-else
      class="theme-toggle__icon"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
    </svg>
  </button>
</template>

<script>
const STORAGE_KEY = 'krayin-docs-theme';

export default {
  name: 'ThemeToggle',

  data () {
    return {
      isDark: false,
    };
  },

  computed: {
    title () {
      return this.isDark ? 'Switch to light mode' : 'Switch to dark mode';
    },
  },

  mounted () {
    const saved = this.readSaved();
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyTheme(saved !== null ? saved === 'dark' : prefersDark);

    // Track OS-level changes only if the user hasn't picked one explicitly.
    if (window.matchMedia) {
      this._mql = window.matchMedia('(prefers-color-scheme: dark)');
      this._mqlHandler = (e) => {
        if (this.readSaved() === null) this.applyTheme(e.matches);
      };
      // addEventListener is supported in modern browsers; fall back to addListener.
      if (this._mql.addEventListener) {
        this._mql.addEventListener('change', this._mqlHandler);
      } else if (this._mql.addListener) {
        this._mql.addListener(this._mqlHandler);
      }
    }
  },

  beforeDestroy () {
    if (this._mql && this._mqlHandler) {
      if (this._mql.removeEventListener) {
        this._mql.removeEventListener('change', this._mqlHandler);
      } else if (this._mql.removeListener) {
        this._mql.removeListener(this._mqlHandler);
      }
    }
  },

  methods: {
    readSaved () {
      try {
        return localStorage.getItem(STORAGE_KEY);
      } catch (e) {
        return null;
      }
    },

    applyTheme (dark) {
      this.isDark = dark;
      const root = document.documentElement;
      if (dark) root.classList.add('dark'); else root.classList.remove('dark');
    },

    toggle () {
      const next = !this.isDark;
      this.applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
      } catch (e) {
        /* ignore quota / disabled storage */
      }
    },
  },
};
</script>

<style lang="stylus">
.theme-toggle
  background transparent
  border 0
  padding 0
  margin-left 1.5rem
  cursor pointer
  color $textColor
  display inline-flex
  align-items center
  height 2rem
  line-height 2rem
  &:hover
    color $accentColor
  &:focus
    outline none
  &__icon
    display block
    vertical-align middle
</style>
