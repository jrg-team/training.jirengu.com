<template>
  <header>
    <nav class="black-navigator pc">
      <div class="content" id="link-wrapper">
        <a :href="links[0].href" target="_blank">
          <i class="iconfont icon" id="black-navigator-icon" :class="icon"></i>
          <span class="active">{{ links[0].name }}</span>
        </a>
        <a href="https://xiedaimala.com" target="_blank">
          <span>学习平台</span>
        </a>
        <a href="https://blog.jirengu.com/?cat=11" target="_blank">
          <span>就业数据</span>
        </a>
        <a href="https://www.zhihu.com/question/41845934" target="_blank">
          <span>学员评价</span>
        </a>
        <a href="https://xiedaimala.com/bbs" target="_blank">
          <span>河码社区</span>
        </a>
      </div>
    </nav>
    <div v-if="pcWhiteNavbarFixed" style="height: 66px"></div>
    <nav class="white-navigator pc" :class="{fixed: pcWhiteNavbarFixed}">
      <div class="content">
        <a :href="link">
          <h5>{{ name }}</h5>
        </a>
        <div class="items">
          <template v-for="link in node[0].children">
            <v-popover class="wechat" v-if="/交流群/.test(link.title)" :key="link.title">
              <span class="title"
                >{{ link.title }}<i class="iconfont hcsp-hot"
              /></span>
              <template slot="popover">
                <div class="navigator-icon-popover">
                  <img :src="link.link" />
                  <p v-html="link.text"></p>
                </div>
              </template>
            </v-popover>
            <a
              :href="link.link"
              :key="link.title"
              :class="{ active: getItemStatus(link.link) }"
              v-else
              >{{ link.title }}</a
            >
          </template>
        </div>
      </div>
    </nav>
    <nav class="navigator mobile" @touchmove.prevent>
      <div class="icon-wrapper">
        <a :href="link">
          <i class="iconfont" :class="icon"></i>
        </a>
        <a
          v-for="link in node[0].children.slice(1, 4)"
          :href="link.link"
          :key="link.title"
          :class="{ active: getItemStatus(link.link) }"
          >{{ link.title }}</a
        >
        <i class="iconfont hcsp-zhankai" @click="toggleModalVisible"></i>
      </div>
      <transition name="menu">
        <section class="black-modal" v-show="modalVisible">
          <div class="items-wrapper">
            <ul>
              <li
                v-for="(item, index) in node"
                :key="index"
                :class="{ active: item.expanded }"
              >
                <a
                  :href="item.link || 'javascript:void(0);'"
                  @click="toggleSubmenu(index)"
                  >{{ item.title }}</a
                >
                <transition name="submenu">
                  <ul
                    v-if="
                      item.expanded && item.children && item.children.length > 0
                    "
                  >
                    <li v-for="child in item.children" :key="child.link">
                      <a
                        :href="child.link"
                        :class="{ active: getItemStatus(child.link) }"
                      >
                        {{ child.title }}
                        <i
                          class="iconfont hcsp-hot"
                          v-if="/交流群/.test(child.title)"
                      /></a>
                    </li>
                  </ul>
                </transition>
              </li>
            </ul>
          </div>
        </section>
      </transition>
    </nav>
    <div class="mobile" style="background: transparent; height: 5vh"></div>
  </header>
</template>
<script>
import { navigatorConfig as allConfig } from "../lib/config";
const navigatorConfig = allConfig[process.env.BUILD_FLAG];
export default {
  name: "MyNavigator",
  data() {
    return {
      modalVisible: false,
      buildType: process.env.BUILD_FLAG,
      isMobile: document.documentElement.clientWidth < 500,
      pcWhiteNavbarFixed: false,
      ...navigatorConfig,
    };
  },
  methods: {
    toggleModalVisible() {
      this.modalVisible = !this.modalVisible;
    },
    toggleSubmenu(index) {
      if (this.node[index].children && this.node[index].children.length > 0) {
        this.node[index].expanded = !this.node[index].expanded;
      }
    },
    getItemStatus(link) {
      if (link === "/") {
        return location.pathname === link;
      } else return location.pathname.includes(link);
    },
    scrollHandler() {
      if (this.isMobile) return;
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const newMode = scrollTop > 48 ? true : false;
      if (newMode === this.pcWhiteNavbarFixed) return;
      else
        requestAnimationFrame(() => {
          this.pcWhiteNavbarFixed = newMode;
        });
    },
  },
  mounted() {
    !this.isMobile && document?.addEventListener("scroll", this.scrollHandler);
  },
  beforeDestroy() {
    !this.isMobile && document?.removeEventListener("scroll", this.scrollHandler);
  },
  computed: {
    links() {
      const baseLinks = Object.entries(allConfig).map(([key, value]) => ({
        key: key,
        name: "主站",
        href: "https://training.jirengu.com",
      }));
      return baseLinks.sort((_, b) =>
        b.key === process.env.BUILD_FLAG ? 1 : -1
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "../css/navigator.scss";
</style>
