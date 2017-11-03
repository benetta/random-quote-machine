$(document).ready(function () {

	var quote = $(".quote-text").text();
	var tweetLink = "https://twitter.com/intent/tweet?text=" + quote;
	$("#tweet-container").attr("href", tweetLink);

	function getNewQuote() {
		$.ajax({
			url: "https://api.forismatic.com/api/1.0/",
			jsonp: "jsonp",
			dataType: "jsonp",
			data: {
				method: "getQuote",
				lang: "en",
				format: "jsonp"
			},
			success: function(data) {
				$(".quote-text").html(data.quoteText);
				$(".quote-author").html(data.quoteAuthor);
				quote = data.quoteText;
				tweet();
			}
		});
	};
	function tweet () {
		tweetLink = "https://twitter.com/intent/tweet?text=" + quote;
		$("#tweet-container").attr("href", tweetLink);
	}
	$("#new").click(function(event) {
		event.preventDefault();
		getNewQuote();
	});

});