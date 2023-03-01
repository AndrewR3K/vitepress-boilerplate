import { getSidebar } from "vitepress-plugin-auto-sidebar";

export default {
  base: "/vitepress-boilerplate/",
  title: "VitePress Boilerplate",
  description: "An awesome boilerplate for a simple vitepress site",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: "/logo.svg",
    editLink: {
      pattern: "https://github.com/AndrewR3K/vitepress-boilerplate/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    siteTitle: "Vitepress Boilerplate",
    outline: "deep",
    nav: [
      { text: "Get Started", link: "/getstarted" },
      { text: "About", link: "/about" },
      { text: "Docs", link: "/api" },
      { text: "Team", link: "/team" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/AndrewR3K/vitepress-boilerplate" },
      { icon: "discord", link: "..." },
    ],
    sidebar: {
      "/api/": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api"],
        collapsible: true,
        collapsed: false,
      }),
      "/api": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api"],
        collapsible: true,
        collapsed: false,
      }),
    },
    footer: {
      message: "Released under the GNU General Public License v2.0.",
      copyright: "Copyright © 2022-present Vitepress Boilerplate",
    },
  },
};
