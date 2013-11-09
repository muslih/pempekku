(function() {
  $(function() {
    var url;
    url = window.location.pathname;
    console.log(url);
    return $('nav a').each(function() {
      if ($(this).attr('href') === url) {
        return $(this).addClass('active');
      } else {
        return $('#nav li').first(function() {
          return a.addClass('active');
        });
      }
    });
  });

  $(function() {
    return $('.keranjang').hover(function() {
      return $('.belanja').slideToggle();
    });
  });

  $(function() {
    return $('.respset').css('display', 'block');
  });

  $(function() {
    var link;
    link = $('link');
    console.log(link);
    return $('.respset button').click(function() {
      var $this, stylesheet;
      $this = $(this);
      stylesheet = $this.data('file');
      link.attr('href', 'public/css/' + stylesheet + '.css');
      $this.css('display', 'none');
      $this.siblings('button').css('display', 'block');
      $this.siblings('button').removeAttr('disabled').end().attr('disabled', 'disabled');
      return $this;
    });
  });

}).call(this);
