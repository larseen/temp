function stringParse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, function() {
        return args[i++];
    });
}

var vioContentTags = {
	lead : {
		open: '<p>',
		close: '</p>'
	},
	title : {
		open: '<h1>',
		close: '</h1>'
	},
	author : {
		open: '<u>',
		close: '</u>'
	},
	paragraph : {
		open: '<p>',
		close: '</p>'
	},

	// REMOVE THIS?
	p : {
		open: '<p>',
		close: '</p>'
	},
	h1 : {
		open: '<h1>',
		close: '</h1>'
	},
	h2 : {
		open: '<h2>',
		close: '</h2>'
	},
	h3 : {
		open: '<h3>',
		close: '</h3>'
	},
	img : {
		open: '<img ',
		close: ' />'
	},

	image : {
		open: '<img ',
		close: ' />'
	}
}

angular

.module('vioFilters', [])

.filter('markup', function() {
	// INPUT IS A CONTENT ELEMENT
	return function(input, article) {
		// DO STUFF
		var content = input.content;

		if(input.type == 'img') {
			var index = input.content;
			content = stringParse("src ='%s'", article.source.images[index].medium);
		}

		var tags = vioContentTags[input.type];
		return tags.open + content + tags.close;

	};
})

.filter('preview', function() {
	// INPUT IS ENTIRE CONTENT
	return function(input) {

		var title = false;
		var lead = false;
		var i = 0;
		while(i < input.length && !(title && lead)) {
			var element = input[i];

			if(element.type == 'title') { title = element.content; }
			else if(element.type == 'lead') { lead = element.content; }
			
			i++;
		}

		if(!title) title = "No Title Found";
		if(!lead) lead = "No Lead Found";

		return stringParse("<h1 class='title'>%s</h1><p class='lead'>%s</p>", title, lead);
	}

});