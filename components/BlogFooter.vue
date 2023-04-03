	<template>
  <div id="footer-wrapper" class="container_16">
    <div id="footer-content">
      <div class="grid_8">
        <h3>Resource Links</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
          libero. Suspendisse bibendum. Cras id urna. Morbi tincidunt, orci ac
          convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo
          tempus leo. Donec mattis, purus nec placerat bibendum, dui pede
          condimentum odio, ac blandit ante orci ut diam.
          <a href="index.html">Read more...</a>
        </p>

        <ul class="footer-list">
          <li v-for="(item, index) in footerList" :key="index">
            <a :href="item.href" :title="item.title"
              >{{ item.suffixText }}- <span>{{ item.context }}</span></a
            >
          </li>
        </ul>
      </div>

      <div class="grid_8">
        <h3>Image Gallery</h3>
        <p class="thumbs">
          <a href="index.html"
            ><img
              src="~assets/images/thumb.jpg"
              width="40"
              height="40"
              alt="thumbnail"
          /></a>
          <a href="index.html"
            ><img
              src="~assets/images/thumb.jpg"
              width="40"
              height="40"
              alt="thumbnail"
          /></a>
          <a href="index.html"
            ><img
              src="~assets/images/thumb.jpg"
              width="40"
              height="40"
              alt="thumbnail"
          /></a>
          <a href="index.html"
            ><img
              src="~assets/images/thumb.jpg"
              width="40"
              height="40"
              alt="thumbnail"
          /></a>
          <a href="index.html"
            ><img
              src="~assets/images/thumb.jpg"
              width="40"
              height="40"
              alt="thumbnail"
          /></a>
          <a href="index.html"
            ><img
              src="~assets/images/thumb.jpg"
              width="40"
              height="40"
              alt="thumbnail"
          /></a>
          <a href="index.html"
            ><img
              src="~assets/images/thumb.jpg"
              width="40"
              height="40"
              alt="thumbnail"
          /></a>
          <a href="index.html"
            ><img
              src="~assets/images/thumb.jpg"
              width="40"
              height="40"
              alt="thumbnail"
          /></a>
          <a href="index.html"
            ><img
              src="~assets/images/thumb.jpg"
              width="40"
              height="40"
              alt="thumbnail"
          /></a>
          <a href="index.html"
            ><img
              src="~assets/images/thumb.jpg"
              width="40"
              height="40"
              alt="thumbnail"
          /></a>
          <a href="index.html"
            ><img
              src="~assets/images/thumb.jpg"
              width="40"
              height="40"
              alt="thumbnail"
          /></a>
          <a href="index.html"
            ><img
              src="~assets/images/thumb.jpg"
              width="40"
              height="40"
              alt="thumbnail"
          /></a>
        </p>

        <h3>About</h3>
        <p>
          <a href="http://getfirefox.com/"
            ><img
              src="~assets/images/gravatar.jpg"
              width="40"
              height="40"
              alt="firefox"
              class="float-left"
          /></a>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
          libero. Suspendisse bibendum. Cras id urna. Morbi tincidunt, orci ac
          convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo
          tempus leo. Donec mattis, purus nec placerat bibendum, dui pede
          condimentum odio, ac blandit ante orci ut diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
          libero. Suspendisse bibendum. Cras id urna.
          <a href="index.html">Learn more...</a>
        </p>
      </div>
    </div>

    <div id="footer-bottom">
      <p class="bottom-left">
        &nbsp; &copy;2010 All your copyright info here &nbsp; &nbsp;
        <a href="http://www.cssmoban.com/" title="Website Templates"
          >website templates</a
        >
        from <a href="http://www.cssmoban.com/">网站模板</a>
      </p>

      <p class="bottom-right">
        <a href="index.html">Home</a> | <a href="index.html">Sitemap</a> |
        <a href="index.html">RSS Feed</a> |
        <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a> |
        <a href="http://validator.w3.org/check/referer">XHTML</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import '~/assets/styles/common.css'
const footerList = reactive([{
  title: 'Website Templates',
  href: '#',
  simpleText: 'DreamTemplate - ',
  context: "Over 6,000+ Premium Web Templates"
}, {
  title: 'Web Hosting',
  href: '#',
  simpleText: 'Web Hosting - ',
  context: "Top 10 Hosting Reviews"
}, {
  title: 'Website Templates',
  href: '#',
  simpleText: 'DreamTemplate - ',
  context: "Over 6,000+ Premium Web Templates"
}, {
  title: 'Website Templates',
  href: '#',
  simpleText: 'DreamTemplate - ',
  context: "Over 6,000+ Premium Web Templates"
}, {
  title: 'Website Templates',
  href: '#',
  simpleText: 'DreamTemplate - ',
  context: "Over 6,000+ Premium Web Templates"
}, {
  title: 'Website Templates',
  href: '#',
  simpleText: 'DreamTemplate - ',
  context: "Over 6,000+ Premium Web Templates"
}])

</script>