<template>
  <nav v-if="userLinks.length || repoLink" class="nav-links">
    <!-- user links -->
    <div v-for="item in userLinks" :key="item.link" class="nav-item">
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div>

    <!-- contact us -->
    <a
      v-if="contactUs"
      :href="contactUs.link"
      class="nav-item contact-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ contactUs.text }}
    </a>

    <!-- google translate -->
    <GoogleTranslate />

    <!-- dark / light mode -->
    <ThemeToggle />

    <!-- repo link as github icon -->
    <a
      v-if="repoLink"
      :href="repoLink"
      class="repo-icon-link"
      target="_blank"
      rel="noopener noreferrer"
      :title="repoLabel"
      :aria-label="repoLabel"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    </a>

    <div class="nav-item" v-if="$route.path.split('/')[1] !== ''">
      <select v-model="version" @change="changeVersion">
        <option value="master">Master</option>

        <option value="2.2">2.2</option>

        <option value="2.1">2.1</option>

        <option value="2.0">2.0</option>

        <option value="1.x">1.x</option>
      </select>
    </div>
  </nav>
</template>

<script>
import DropdownLink from "@theme/components/DropdownLink.vue";
import { resolveNavLinkItem } from "../util";
import NavLink from "@theme/components/NavLink.vue";
import GoogleTranslate from "@theme/components/GoogleTranslate.vue";
import ThemeToggle from "@theme/components/ThemeToggle.vue";

export default {
  name: "NavLinks",

  data() {
    return {
      version: "1.x",
    };
  },

  mounted() {
    this.currentVersion();
  },

  watch: {
    $route() {
      this.currentVersion();
    },
  },

  components: {
    NavLink,
    DropdownLink,
    GoogleTranslate,
    ThemeToggle,
  },

  computed: {
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },

    nav() {
      const { locales } = this.$site;
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path;
        const routes = this.$router.options.routes;
        const themeLocales = this.$site.themeConfig.locales || {};
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || "Languages",
          ariaLabel: this.$themeLocaleConfig.ariaLabel || "Select language",
          items: Object.keys(locales).map((path) => {
            const locale = locales[path];
            const text = (themeLocales[path] && themeLocales[path].label) || locale.lang;
            let link;
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink;
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path);
              // fallback to homepage
              if (!routes.some((route) => route.path === link)) {
                link = path;
              }
            }
            return { text, link };
          }),
        };
        return [...this.userNav, languageDropdown];
      }
      return this.userNav;
    },

    userLinks() {
      return (this.nav || []).map((link) => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem),
        });
      });
    },

    repoLink() {
      const { repo } = this.$site.themeConfig;
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
      }
      return null;
    },

    repoLabel() {
      if (!this.repoLink) return;
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel;
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0];
      const platforms = ["GitHub", "GitLab", "Bitbucket"];
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        if (new RegExp(platform, "i").test(repoHost)) {
          return platform;
        }
      }

      return "Source";
    },
    contactUs() {
      const { contactUs } = this.$site.themeConfig;

      return contactUs;
    },
  },

  methods: {
    changeVersion() {
      let currentPath = this.$route.path.split("/");

      currentPath[1] = this.version;

      this.$router.push(currentPath.join("/"));
    },

    currentVersion() {
      this.version = this.$route.path.split("/")[1] || "2.0";
    },
  },
};
</script>

<style lang="stylus">
.nav-links
  display inline-flex
  align-items center
  a
    line-height 1.4rem
    color inherit
    &:hover, &.router-link-active
      color $accentColor
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    &:first-child
      margin-left 0
  .contact-link
    text-decoration none
  .repo-icon-link
    margin-left 1.5rem
    display inline-flex
    align-items center
    height 2rem
    line-height 2rem
    color $textColor
    text-decoration none
    svg
      display block
      vertical-align middle
    &:hover
      color $accentColor

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-icon-link, .translate-widget
      margin-left 0

@media (min-width: $MQMobile)
  .nav-links a
    &:hover, &.router-link-active
      color $textColor
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
      border-bottom 2px solid lighten($accentColor, 8%)
</style>
