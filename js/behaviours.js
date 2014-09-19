/// <reference path="http://ajax.microsoft.com/ajax/jQuery/jquery-1.6.2-vsdoc.js" />

var scs = {
	init: function ()
	{
		//scs.setupBio();
		scs.showEmailThankYou();
		//scs.setupFormRequireds();
		//scs.setupEmailCheck();
		//scs.setupTestimonials();
	},
	
	setupTestimonials:function()
	{
		$('section.testimonials ul').carouFredSel({
			width: 961,
			height: 250,
			items: {
				minimum: 1,
				start: "random",
				width: 952,
				height: 248
			},
			auto: { 
				//play:false,
				pauseDuration:5500
			},
			scroll: {
				pauseOnHover: true,
				//easing: "easeOutQuad",
				duration: 500
			},
			prev: 'section.testimonials .prev',
			next: 'section.testimonials .next',
			pagination: {
				container: "section.testimonials .pagination",
				keys: true
			}
		});
	},

	setupBio: function ()
	{
		//	Isolate
		var bio = $('section.lori .more').hide();

		//	Add the button
		var cont = $('<div class="bio-btn-cont"></div>')
			.insertAfter(bio);
			
		var bioBtn = $('<a href="#more-bio"></a>')
			.html('Read <span class="more-word">More</span><span class="less-word">Less</span>')
			.addClass('bio-btn')
			.click(function ()
			{
				bio.slideToggle('fast');
				$('.more-word', this).toggle();
				$('.less-word', this).toggle();
				$(this).toggleClass('less');
				return false;
			})
			.appendTo(cont);
			
		$('.less-word', bioBtn).hide();
	},

	showEmailThankYou: function ()
	{
		if (parent.document.URL.indexOf('?emailsent') > 0)
		{
			$('#email-thank-you').fadeIn();
		}
	},

	setupFormRequireds: function ()
	{
		$('form').submit(function (evt)
		{
			var bad = [];
			$('*[required]', this).each(function ()
			{
				if ($.trim($(this).val()) == '')
				{
					bad.push(this);
					$(this).addClass('required-not-filled');
					evt.preventDefault();
					ret = false;
				}
				else
				{
					$(this).removeClass('required-not-filled');
				}
			});

			if (bad.length > 0)
			{
				$(bad[0]).focus();
				return false;
			}
			return true;
		});
	},

	setupEmailCheck: function ()
	{
		var emailPattern = /^[a-zA-Z0-9._\+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;

		$('form').submit(function (evt)
		{
			var bad = [];
			$('input[type="email"]', this).each(function ()
			{
				if (!emailPattern.test($.trim($(this).val())))
				{
					bad.push(this);
					$(this).addClass('required-not-filled');
					evt.preventDefault();
					ret = false;
				}
				else
				{
					$(this).removeClass('required-not-filled');
				}
			});

			if (bad.length > 0)
			{
				$(bad[0]).select();
				return false;
			}
			return true;
		});
	}
}

$(scs.init);