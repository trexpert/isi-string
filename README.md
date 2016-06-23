string helpers for node.js
==========================

Methods
-------
- [removeFromRight](#removeFromRight)
- [removeSpecialChars](#removeSpecialChars)
- [replaceUmlauts](#replaceUmlauts)
- [split](#split)
- [trim, trimChar](#trim)
 
### trim()
alias : trimChar
**trim(value, charToTrim)**

Removes a character or string from the left and right side of a string

```javascript
var isiString = require( 'isi-string' );

isiString.trim("__unformated string__", '_' );
// -> unformated string

isiString.trim(",unformated string,", ',' );
// -> unformated string
```

### split():
**split(value, charToSplit)**

Splits an array and removes empty entries

```javascript
var isiString = require( 'isi-string' );

isiString.split("Hello World", ' ' );
// -> ['Hello', 'World']

isiString.split("Hello,World,,,", ',' );
// -> ['Hello', 'World']
```

### removeFromRight():
**removeFromRight(value, amountToRemove)**

removes characters from the right

```javascript
var isiString = require( 'isi-string' );

isiString.removeFromRight("Hello World", 3 );
// -> Hello Wo
```

#### Version History:
**1.0.6**
- added function to remove chars from the right: removeFromRight 

**1.0.6**
- little docu improvement 

**1.0.5**
- trim all splitted values