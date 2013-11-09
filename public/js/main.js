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
    return $('.respset').css('display', 'block');
  });

  $(function() {
    var link;
    link = $('link');
    return $('.respset button').click(function() {
      var $this, stylesheet;
      $this = $(this);
      stylesheet = $this.data('file');
      link.attr('href', 'public/css/' + stylesheet + '.css');
      if (stylesheet = 'nostyle') {
        $('.bungkus').css('width', '978px');
      } else {
        $('.bungkus').css('width', '100%');
        window.location.reload();
      }
      $this.siblings('button').removeAttr('disabled').end().attr('disabled', 'disabled');
      return $this;
    });
  });

}).call(this);
