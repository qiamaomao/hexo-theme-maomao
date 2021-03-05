'use strict';

function Swipermmm(args) {
  const src = args[0].trim();
  return `<div class="lazyload swiper-slide" style="background-image:url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==)"  data-src="${src}"></div>`;
}

function Swipermm(args, content) {
  return `<div class="swiper-container mm br-10 mb-20" style="width: 100%;height:${args.join(' ')};position: relative"><div class="swiper-wrapper br-10">${content}</div></div>`;

}

hexo.extend.tag.register('Swiper', Swipermmm);
hexo.extend.tag.register('Swipermm', Swipermm, {ends: true});