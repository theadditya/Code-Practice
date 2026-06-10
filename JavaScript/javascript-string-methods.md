# JavaScript String Methods

## Character Access

``` js
charAt(index)
at(index)
charCodeAt(index)
codePointAt(index)
```

## Searching

``` js
indexOf(searchValue)
lastIndexOf(searchValue)
includes(searchValue)
startsWith(searchValue)
endsWith(searchValue)
search(regexp)
```

## Extracting Parts

``` js
slice(start, end)
substring(start, end)
substr(start, length) // Deprecated
```

## Modifying / Creating New Strings

``` js
concat(...strings)
repeat(count)
padStart(targetLength, padString)
padEnd(targetLength, padString)
```

## Case Conversion

``` js
toUpperCase()
toLowerCase()
toLocaleUpperCase()
toLocaleLowerCase()
```

## Trimming Whitespace

``` js
trim()
trimStart()
trimEnd()
trimLeft()
trimRight()
```

## Replacing Content

``` js
replace(searchValue, replacement)
replaceAll(searchValue, replacement)
```

## Splitting

``` js
split(separator, limit)
```

## Pattern Matching

``` js
match(regexp)
matchAll(regexp)
```

## Comparison

``` js
localeCompare(compareString)
```

## Unicode Normalization

``` js
normalize(form)
```

## Conversion Methods

``` js
toString()
valueOf()
```

## Well-Formed Unicode

``` js
isWellFormed()
toWellFormed()
```

## Static String Methods

``` js
String.fromCharCode(...)
String.fromCodePoint(...)
String.raw(...)
```

## Property

``` js
length
```

## See All Methods

``` js
console.log(Object.getOwnPropertyNames(String.prototype));
```
