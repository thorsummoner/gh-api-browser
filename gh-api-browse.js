// gh-api-browse.js
//

window['gh-api-browse'] = {
	initialize: function () {
		$.ajax({
			url: 'http://api.github.com',
			dataType: 'jsonp',
			success: function(response){
				for (route in response.data) {
					var row = document.createElement('tr');

					var key = document.createElement('td'); row.appendChild(key);
					key.textContent = route;

					var value = document.createElement('td'); row.appendChild(value);
					var link = document.createElement('a'); value.appendChild(link);
					link.href = response.data[route];
					link.textContent = link.href;




					document.body.appendChild(row);
				}
			}
		});
	},
}
window.addEventListener('DOMContentLoaded', window['gh-api-browse'].initialize)
