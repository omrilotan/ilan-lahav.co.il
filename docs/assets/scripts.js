(function() {
	window._gaq = window._gaq || [];
	window._gaq.push(['_setAccount', 'UA-30435522-1']);
	window._gaq.push(['_trackPageview']);
})();

(function() {
	var form = document.forms[0];
	form.onsubmit = function(event) {
		event.preventDefault();

		try {
			var data = serialise(form);

			form.setAttribute('disabled', 'disabled');
			data.recipient = 'ilanlahav88@gmail.com';

			fetch('https://message.omrilotan.com', {
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
						authorization: 'F7298EBA-24B7-4231-BE79-82DF2CD41DCE'
					},
					method: 'POST',
					mode: 'cors',
					cache: 'no-cache',
					credentials: 'same-origin',
					redirect: 'follow',
					referrerPolicy: 'no-referrer',
					body: JSON.stringify(data)
			}).then(function (response) {
				if (response.ok) {
					var thankyou = document.getElementById('thankyou');
					if (!thankyou) {
						thankyou = new Image();
						thankyou.src = '/assets/thanks.gif';
					}
					form.parentNode.replaceChild(thankyou, form);
					thankyou.classList.remove('hidden');
				} else {
					throw new Error('Response not okay');
				}
			}).catch(function (error) {
				form.removeAttribute('disabled');
				alert('חלה בעיה בשליחת הטופס, אנא נסה שוב');
			});
		} catch (error) {
			alert(error.message);
		}
	}

	function serialise(form) {
		return [].reduce.call(
			form,
			function(accumulator, item) {
				if (item.hasAttribute('required') && !item.value) {
					throw new Error('נא למלא ' + item.name);
				}

				if (item.value) {
					accumulator[item.name] = item.value.trim();
				}
				return accumulator;
			},
			{}
		);
	}
})();

(function() {
	var nav = document.getElementsByTagName('nav')[0];

	[].forEach.call(nav.children, function (child) {
		if (child.href === document.location.href) {
			child.classList.add('current');
		}
	});
})();
