// source --> https://www.bicconstruction.com.au/wp-content/themes/BIC-Construction/js/projects-load-more.js?ver=8f39f7bef0ed4edde56b956fbcadb9c8
jQuery(function ($) {
  // use jQuery code inside this to avoid "$ is not defined" error
  $(".bic_load_more").click(function () {
    var button = $(this),
      data = {
        action: "loadmore",
        query: bic_load_more_params.posts, // that's how we get params from wp_localize_script() function
        page: bic_load_more_params.current_page,
      };

    $.ajax({
      // you can also use $.post here
      url: bic_load_more_params.ajaxurl, // AJAX handler
      data: data,
      type: "POST",
      beforeSend: function (xhr) {
        button.text("Loading..."); // change the button text, you can also add a preloader image
      },
      success: function (data) {
        if (data) {
          var post_count = jQuery(".projects-page-landing").data("post-count");

          button.text("Load More").parent().before(data); // insert new posts
          bic_load_more_params.current_page++;

          //if (bic_load_more_params.current_page == bic_load_more_params.max_page)
          if ($(".projects-border-box").length >= parseInt(post_count))
            button.remove(); // if last page, remove the button

          // you can also fire the "post-load" event here if you use a plugin that requires it
          // $( document.body ).trigger( 'post-load' );
        } else {
          button.remove(); // if no data, remove the button as well
        }
      },
    });
  });
});
