(function() {
	var form = document.forms[0];
	form.onsubmit = function(event) {
		event.preventDefault();

		var checked = 0;

		var fullName = document.getElementById('fullname').value;
		var phoneNumber = document.getElementById('phonenumber').value;

		var errors = [];

		if (fullName.length < 2) {
			errors.push("נא להזין שם מלא");
		}

		if (phoneNumber.length < 9) {
			errors.push("יש להזין טלפון חוקי");
		}

		if (errors.length) {
			alert("יש למלא את השדות כראוי:\n" + errors.join('.\n'));
			return;
		}

		gtag('event', 'conversion', {'send_to': 'AW-980379301/q5f4CP-W07UBEKXNvdMD'});

		try {
			var data = serialise(form);

			form.setAttribute('disabled', 'disabled');

			fetch('https://hooks.zapier.com/hooks/catch/616786/oh8pobp/silent/', {
				method: 'post',
				mode: 'cors',
				cache: 'no-cache',
				redirect: 'follow',
				referrerPolicy: 'no-referrer',
				body: JSON.stringify(data)
			}).then(function (response) {
				if (response.ok) {

					form.innerHTML = '<p>תודה, הפניה נשלחה בהצלחה</p><p>פנייתכם התקבלה ובקרוב ניצור איתכם קשר.</p>';
					gtag('event', 'conversion', {'send_to': 'AW-980379301/q5f4CP-W07UBEKXNvdMD'});
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
})();

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

(function() {
	var nav = document.getElementsByTagName('nav')[0];

	[].forEach.call(nav.children, function (child) {
		if (child.href === document.location.href) {
			child.classList.add('current');
		}
	});
})();
