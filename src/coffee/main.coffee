# $ ->
# 	$('#header nav').on 'click','a:not(.active)', (event) ->
# 		$('.active',event.delegateTarget).removeClass 'active'
# 		$(@).addClass 'active'

# // var url =window.location;
# // $("nav a").each(function() {
# //    if($(this).attr('href') == url){
# //       $(this).addClass('active');
# //    }
# // });

$ ->
	url = window.location.pathname
	console.log(url)
	$('nav a').each ->
		if $(@).attr('href') == url
			$(@).addClass('active')
		else
			$('#nav li').first ->
				a.addClass('active')


$ ->
	$('.respset').css('display','block')

$ ->
	link = $('link')
	$('.respset button').click ->
		

		$this = $(@)
		stylesheet = $this.data('file')
		# console.log(stylesheet)

		link.attr('href', 'public/css/' + stylesheet + '.css')

		if stylesheet = 'nostyle'
			$('.bungkus').css('width','978px')
		else
			$('.bungkus').css('width','100%')
			window.location.reload()

		$this
			.siblings('button')
			.removeAttr('disabled')
			.end()
			.attr('disabled', 'disabled');
		$this

	