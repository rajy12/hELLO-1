/* Loader */
$(window).on('load', function() {
  return $('#__loader').fadeOut(500);
});

/* Tistory Tooltip Layer */
$(document).ready(function() {
  var messages = {
    Request: H.skinOptions.messageRequest,
    Unheart: H.skinOptions.messageUnheart,
    Heart: H.skinOptions.messageHeart,
    Unsubscribe: H.skinOptions.messageUnsubscribe,
    Subscribe: H.skinOptions.messageSubscribe,
    Url: H.skinOptions.messageUrl
  };

  if (H.skinOptions.message) {
    h.tooltip(messages);
  }
});

/* TistoryToolbar */
$(document).ready(function() {
  // Subscription
  $('.menu_toolbar > div[class=btn_tool]').appendTo('#__nav .right'); // Tistory

  $('.menu_toolbar > #menubar_wrapper > .header_layer').appendTo('#__sidebar .tistory');
});

/* Category */
$(document).ready(function() {
  if (H.skinOptions.foldableCategory) {
    h.foldableCategory();
  }
});

/* Navigation */
$(document).ready(function() {
  var $heading = $('.permalink > header > .heading > *:not(.metainfo)');

  if ($heading.length) {
    $('#__nav > .center').empty().append($heading.clone());
  }
});

/* Permalink */
$(document).ready(function() {
  // Add 'a' tag into headings
  h.anchorHeadings('.permalink .contents_style', '> h2, > h3, > h4'); // Scrollspy

  h.scrollspy({
    context: '.permalink .contents_style',
    spy: '#__spy ul',
    headings: '> h2, > h3'
  }); // Media contents alignment

  h.alignImageCenter({
    imageSlideBlock: true,
    imageBlock: true,
    imageGridBlock: true
  }); // Highlight.js

  h.hljs(H.skinOptions.hljsLight, H.skinOptions.hljsDark); // Remove ',' text in Tags

  h.removeTextNode('.permalink .tags');
});

$(document).ready(function() {
  // Set styled heading
  h.styledHeading('.permalink', 'header > .img', H.skinOptions.articleMode, {
    controllable: true,
    modeHandsControlElement: '.permalink .contents_style > div.h[data-mode]'
  }); // Set sticky

  window.addEventListener('scroll', h.sticky('#__nav', '.permalink .contents_style', 'sticky'));
});

/* Notification */
$(document).ready(function() {
  setTimeout(function() {
    h.notification('#next', '.thumbnail', 'bottom-right', 15000);
    h.notification('#prev', '.thumbnail', 'bottom-left', 15000);
  }, 3000);
});

/* List */
$(document).ready(function() {
  var $title = $('.list > header .title');
  $title.text($title.text() === '전체 글' ? T.config.BLOG.title : $title.text());
  h.liststyle('.list', '> ul');
});

$(document).ready(function() {
  h.styledHeading('.list', 'header > .img', H.skinOptions.listImageMode, {
    attr: 'data-image-mode'
  });
});

/* Footer */
$(document).ready(function() {
  $('#__footer .theme-btn').click(function() {
    // Switch Theme 'Light' <-> Dark'
    h.switchTheme(); // Highlight.js

    h.hljs(H.skinOptions.hljsLight, H.skinOptions.hljsDark);
  });
});

/* Scoll Indicator */
$(document).ready(function() {
  $(window).on('scroll', function() {
    h.scrollIndicator('#scroll-indicator .progress-bar');
  });
});

