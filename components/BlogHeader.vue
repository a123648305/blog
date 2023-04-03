<template>
  <!-- header starts-->
  <div id="header-wrap">
    <div id="header" class="container_16">
      <h1 id="logo-text"><a href="index.html" title="">Keep It Simple</a></h1>
      <p id="intro">Put your favorite slogan here...</p>

      <!-- navigation -->
      <div id="nav">
        <ul>
          <li v-for="item in nvaPages" :key="item.label">
            <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div id="header-image"></div>

      <form id="quick-search" action="index.html" method="get">
        <p>
          <label for="qsearch">Search:</label>
          <input
            class="tbox"
            id="qsearch"
            type="text"
            name="qsearch"
            value="Search..."
            title="Start typing and hit ENTER"
          />
          <input
            class="btn"
            alt="Search"
            type="image"
            name="searchsubmit"
            title="Search"
            src="~assets/images/search.gif"
          />
        </p>
      </form>

      <!-- header ends here -->
    </div>
  </div>
</template>

<script setup>
const nvaPages = reactive([
  { label: 'Home', path: '/' },
  { label: 'Style Demo', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Services', path: '/' },
  { label: 'Support', path: '/' },
  { label: 'About', path: '/about' },
])


</script>