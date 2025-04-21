<template>
  <div class="theme-container" style="padding-right: 20px">
    <div class="theme-default-content">
      <img
        src="/logo.svg"
        alt="Krayin Documentation"
        class="logo"
        style="height: 86px; width: 200px"
      />

      <h1>Page not found.</h1>

      <div class="warning-container">
        <div><strong>! WARNING</strong> Page Not Found</div>

        <div>
          <blockquote style="color: black;">{{ getMsg() }}</blockquote>
        </div>
      </div>

      <div class="link">
        <div v-for="url in availableURLs" :key="url.version">
          <a @click="(e) => getCurrentUrl(e, url)">
            {{ url.version.replace(/\//g, "") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const msgs = [
  `This page does not exist for this version of Krayin but was found in other versions.`,
];

import configurations from "../../config";

export default {
  data() {
    return {
      currentURL: "",
      availableURLs: [],
      configurations,
    };
  },

  mounted() {
    if (typeof window !== "undefined") {
      this.currentURL = window.location.href;

      const urlParts = this.$route.path.split("/");
      const currentVersion = urlParts[1];
      const currentPath = urlParts
        .slice(2)
        .join("/")
        .replace(/\.html$/, "");

      this.findSimilarPaths(currentVersion, currentPath);
    }
  },

  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    },

    getCurrentUrl(e, url) {
      e.preventDefault();

      const targetPath = `/${url.version}/${url.path}`;

      this.$router.push(targetPath);
    },

    findSimilarPaths(targetVersion, targetPath) {
      const similarObjects = [];
      const sidebarConfig = this.configurations.themeConfig.sidebar;

      for (const version in sidebarConfig) {
        if (version.includes(targetVersion)) {
          continue;
        }

        try {
          const versionKey = version.replace(/\//g, "");
          let versionData = sidebarConfig[version];

          if (typeof versionData === "function") {
            versionData = versionData();
          }

          if (! Array.isArray(versionData)) {
            console.log("Version data is not an array for", version);
            continue;
          }

          let foundPath = null;

          for (const section of versionData) {
            if (section.path && section.path.includes(targetPath)) {
              foundPath = targetPath;
              break;
            }

            if (section.children) {
              if (Array.isArray(section.children)) {
                for (const child of section.children) {
                  if (
                    Array.isArray(child) 
                    && child[0] 
                    && child[0].includes(targetPath)
                  ) {
                    foundPath = targetPath;

                    break;
                  } else if (
                    typeof child === "string" 
                    && child.includes(targetPath)
                ) {
                    foundPath = targetPath;

                    break;
                  }
                }
              } else if (
                typeof section.children === "string" && section.children.includes(targetPath)
              ) {
                foundPath = targetPath;

                break;
              }
            }

            if (foundPath) {
              break;
            }
          }

          if (foundPath) {
            similarObjects.push({
              version: versionKey,
              path: foundPath,
            });
          }
        } catch (error) {
          console.error(`Error processing version ${version}:`, error);
        }
      }

      this.availableURLs = similarObjects;
    },
  },
};
</script>

<style scoped>
.warning-container {
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  padding: 20px 10px 10px 10px;
  margin: 10px 0px 20px 0px;
  background: rgb(242, 226, 196);
}

.link {
  display: grid;
  gap: 10px;
  cursor: pointer;
}
</style>
