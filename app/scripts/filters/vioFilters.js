function stringParse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, function() {
        return args[i++];
    });
}

angular.module('vioFilters', []).filter('markup', function() {

	return function(input, article) {
		
		// DO STUFF
		if(input.type == 'img') {
			var index = input.content;
			var url = article.source.images[index].medium;
			return stringParse("<img src='%s' />", url);
		} else {
			var tag = input.type;
			return stringParse("<%s>%s</%s>", tag, input.content, tag);
		}
	};
});