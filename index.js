var self = this;

exports.trimChar = function (val, character) {
	return val.replace( new RegExp( '^' + character + '+|' + character + '+$', 'g' ), '' );
};

exports.trim = function (val, character) {
	return self.trimChar( val, character );
};

exports.removeFromRight = exports.substringRight = function (value, charAmount) {
	if (charAmount >= value.length)
		return "";

	return value.substring( 0, value.length - charAmount );
};

exports.split = function (val, character, fallbackValue) {

	var array = val.split( character );

	for (var i = 0; i < array.length; i++) {
		if (array[i] == undefined || array[i].trim() == "") {
			array.splice( i, 1 );
			i--;
			continue;
		}

		array[i] = array[i].trim();
	}

	if (array.length == 0 && fallbackValue != undefined)
		array = [fallbackValue];

	return array;
};

exports.removeSpecialChars = function (val, replacement) {
	if (replacement == undefined)
		replacement = '_';

	val = self.replaceUmlauts( val );

	val = val.replace( /[^a-zA-Z0-9]/g, replacement );

	while (val.indexOf( replacement + replacement ) > 0) {
		val = val.replace( replacement + replacement, replacement );
	}

	return self.trimChar( val, replacement )
};

exports.replaceUmlauts = function (string) {
	var value = string.toLowerCase();
	value     = value.replace( /ä/g, 'ae' );
	value     = value.replace( /ö/g, 'oe' );
	value     = value.replace( /ü/g, 'ue' );
	return value;
};

expors.startsWith = function(string, needle){
    return(string.indexOf(needle) == 0);
};