// source --> https://www.bicconstruction.com.au/wp-content/themes/BIC-Construction/js/custom-modal.js?ver=8f39f7bef0ed4edde56b956fbcadb9c8
var admin_url = bicAjax.ajaxurl;
var nonce = bicAjax.nonce;
jQuery(function ($) {
  var select = $("#category_parent");
  //var security = nonce;// checking nonce foro security
  jQuery(document).on("click", ".team-modal-active", function () {
    var id = jQuery(this).data("id");
    $.ajax({
      type: "POST",
      url: admin_url,
      data: { action: "bic_team_modal", id: id, security: nonce },
      success: function (response) {
        $("#team-data").html(response);
      },
    });
  });

  //next
  jQuery(document).on("click", ".next-arrow", function () {
    var newid = jQuery(this).parent().find(".check-id").data("nextid");
    $.ajax({
      type: "POST",
      url: admin_url,
      data: { action: "bic_team_modal", id: newid, security: nonce },
      success: function (response) {
        $("#team-data").html(response);
        //debugger;
        //check next button
        var check_nextid = jQuery(".check-id").data("nextid");
        if (check_nextid == "") {
          $(".next-arrow").hide();
        } else {
          $(".next-arrow").show();
        }

        //check prev button
        var check_previd = jQuery(".check-id").data("previd");
        if (check_previd == "") {
          $(".prev-arrow").hide();
        } else {
          $(".prev-arrow").show();
        }
      },
    });
  });

  //prev
  jQuery(document).on("click", ".prev-arrow", function () {
    var newid = jQuery(this).parent().find(".check-id").data("previd");
    $.ajax({
      type: "POST",
      url: admin_url,
      data: { action: "bic_team_modal", id: newid, security: nonce },
      success: function (response) {
        $("#team-data").html(response);
        //check next button
        var check_nextid = jQuery(".check-id").data("nextid");
        if (check_nextid == "") {
          $(".next-arrow").hide();
        } else {
          $(".next-arrow").show();
        }

        //check prev button
        var check_previd = jQuery(".check-id").data("previd");
        if (check_previd == "") {
          $(".prev-arrow").hide();
        } else {
          $(".prev-arrow").show();
        }
      },
    });
  });

  //project popup
  jQuery(document).on("click", ".project-modal-active", function () {
    var id = jQuery(this).data("id");
    var count_order = jQuery(this).data("order");
    var total = jQuery(this).data("total");
    if (count_order == 1) {
      $("#projectModal .prev-arrow").hide();
    } else {
      $("#projectModal .prev-arrow").show();
    }
    if (count_order >= total) {
      $("#projectModal .next-arrow").hide();
    } else {
      $("#projectModal .next-arrow").show();
    }

    $.ajax({
      type: "POST",
      url: admin_url,
      data: {
        action: "bic_project_modal",
        id: id,
        count_order: count_order,
        security: nonce,
      },
      success: function (response) {
        $("#project-data").html(response);
      },
    });
  });

  //project popup next
  jQuery(document).on("click", "#projectModal .next-arrow", function () {
    var id = jQuery(this).parent().find(".check-id").data("currentid");
    var count_order = jQuery(this).parent().find(".check-id").data("nextid");
    var total = jQuery(this).parent().find(".check-id").data("total");

    $.ajax({
      type: "POST",
      url: admin_url,
      data: {
        action: "bic_project_modal",
        id: id,
        count_order: count_order,
        security: nonce,
      },
      success: function (response) {
        $("#project-data").html(response);
      },
    });
    if (count_order == 1) {
      $("#projectModal .prev-arrow").hide();
    } else {
      $("#projectModal .prev-arrow").show();
    }
    if (count_order >= total) {
      $("#projectModal .next-arrow").hide();
    } else {
      $("#projectModal .next-arrow").show();
    }
  });

  //project popup previous
  jQuery(document).on("click", "#projectModal .prev-arrow", function () {
    var id = jQuery(this).parent().find(".check-id").data("currentid");
    var count_order = jQuery(this).parent().find(".check-id").data("previd");
    var total = jQuery(this).parent().find(".check-id").data("total");

    $.ajax({
      type: "POST",
      url: admin_url,
      data: {
        action: "bic_project_modal",
        id: id,
        count_order: count_order,
        security: nonce,
      },
      success: function (response) {
        $("#project-data").html(response);
      },
    });
    if (count_order == 1) {
      $("#projectModal .prev-arrow").hide();
    } else {
      $("#projectModal .prev-arrow").show();
    }
    if (count_order >= total) {
      $("#projectModal .next-arrow").hide();
    } else {
      $("#projectModal .next-arrow").show();
    }
  });

  //toggle description in about page
  $(".description-after-read-more").hide();
  $(".toggle-description").click(function () {
    //$('.description-after-read-more').slideToggle();
    var link = $(this);
    $(".description-after-read-more").slideToggle("slow", function () {
      if ($(this).is(":visible")) {
        link.text("Read less");
      } else {
        link.text("Read More");
      }
    });
  });

  jQuery(".team-modal-active").on("click", function (e) {
    e.preventDefault();
    jQuery("#teamModal .modal-body").css({ opacity: 0 });
    jQuery("#teamModal").modal({
      backdrop: "static",
      keyboard: false,
      show: true,
    });
    setTimeout(function () {
      jQuery("#teamModal .modal-body").css({ opacity: 1 });
    }, 1000);
  });

  function showMenu() {
    $(window).on("load resize", function () {
      $(".navbar .dropdown > a").click(function () {
        location.href = this.href;
      });

      if (this.matchMedia("(min-width: 1025px)").matches) {
        $(".navbar .dropdown").hover(
          function () {
            $(this)
              .find(".dropdown-menu")
              .first()
              .stop(true, true)
              .delay(250)
              .show();
          },
          function () {
            $(this)
              .find(".dropdown-menu")
              .first()
              .stop(true, true)
              .delay(100)
              .hide();
          }
        );

        $(".navbar .dropdown > a").click(function () {
          location.href = this.href;
        });
      }
    });
  }

  function mobileNavigationOverlay() {
    $(window).on("load", function () {
      if (this.matchMedia("(max-width: 1024px)").matches) {
        $("#navbarSupportedContent .navbar-nav > li > .dropdown-toggle")
          .parents(".menu-item")
          .append(
            '<span class="trigger-mobnav"><i class="fas fa-angle-down"></i></span>'
          );
      }
    });

    $(window).on("load resize", function () {
      if (this.matchMedia("(max-width: 1024px)").matches) {
        $(".trigger-mobnav").on("click", function () {
          $(this).siblings(".dropdown-menu").toggleClass("show");
          $(this).toggleClass("on");
        });

        $(document).on(
          "click",
          "#navbarSupportedContent .navbar-nav > li > a",
          function (e) {
            e.stopPropagation();
            $(this).siblings(".dropdown").removeClass("show");
            window.location = $(this).attr("href");
          }
        );
      }
    });
  }

  showMenu();
  mobileNavigationOverlay();
});

jQuery(document).ready(function ($) {
  var dateObj = new Date();
  var thisYear = dateObj.getUTCFullYear();
  $(".copyright__holder p.copyright-text span").text(thisYear);
});
