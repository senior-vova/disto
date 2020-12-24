$("[data-trigger]").on("click", function () {
    var trigger_id = $(this).attr("data-trigger");
    $(trigger_id).toggleClass("show");
    $("body").toggleClass("offcanvas-active");
    $(".collapse-navbar-background").toggleClass("show");
    $("html").css({
      overflow: "hidden",
      height: "100%",
    });
  });
  $(".collapse-navbar-background").on("click", function () {
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
    $(".collapse-navbar-background").removeClass("show");
    $("html").css({
      overflow: "auto",
      height: "auto",
    });
  });
  $("#btn-close").click(function (e) {
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
    $(".collapse-navbar-background").removeClass("show");
    $("html").css({
      overflow: "auto",
      height: "auto",
    });
  });

  $("#vertical-nav .dropdown .nav-link").on("click", function (e) {
    if (e.target.parentElement.children[1].classList[1] === "active") {
      e.target.parentElement.children[1].classList.remove("active");
    } else {
      e.target.parentElement.children[1].classList.add("active");
    }
  });