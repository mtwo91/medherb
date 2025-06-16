/** Powered by turn.js */

function getAspectRatio() {
  return $(window).width() < 767 ? 210 / 337 : 420 / 297;
}

function getDisplayMode() {
  return $(window).width() < 767 ? 'single' : 'double';
}

function resizeWithAspectRatio() {
  const aspectRatio = getAspectRatio();
  const maxWidth = $(window).width();
  const maxHeight = $(window).height() * 0.95;

  let height = maxHeight;
  let width = height * aspectRatio;

  if (width > maxWidth) {
    width = maxWidth;
    height = width / aspectRatio;
  }

  $(".magazine").turn("size", width, height);
  $(".magazine").turn("display", getDisplayMode());
}

$(document).ready(function () {
  const aspectRatio = getAspectRatio();
  const maxWidth = $(window).width();
  const maxHeight = $(window).height() * 0.95;

  let height = maxHeight;
  let width = height * aspectRatio;

  if (width > maxWidth) {
    width = maxWidth;
    height = width / aspectRatio;
  }

  $(".magazine").turn({
    width: width,
    height: height,
    elevation: 50,
    cornerSize: 20,
    gradients: true,
    // autoCenter: true,
    display: getDisplayMode()
  });

  $(window).resize(function () {
    resizeWithAspectRatio();
  });

  $(".buttons-menu button").click(function () {
    var page = $(this).data("page");
    $(".magazine").turn("page", page);
  });
});

$(document).keydown(function (e) {
  switch (e.keyCode) {
    case 37:
      $(".magazine").turn("previous");
      e.preventDefault();
      break;
    case 39:
      $(".magazine").turn("next");
      e.preventDefault();
      break;
  }
});

$(".prev-btn").on("click", function () {
  $(".magazine").turn("previous");
});

$(".next-btn").on("click", function () {
  $(".magazine").turn("next");
});

if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
  $("aside p").css("font-weight", "normal");
}