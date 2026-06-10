# JavaScript Array Methods Cheat Sheet

## Array Creation

``` js
Array()
Array.of(...items)
Array.from(iterable)
```

## Adding / Removing Elements

``` js
push(...items)
pop()

unshift(...items)
shift()

splice(start, deleteCount, ...items)
```

## Accessing Elements

``` js
at(index)
indexOf(element)
lastIndexOf(element)
includes(element)
find(callback)
findIndex(callback)
findLast(callback)
findLastIndex(callback)
```

## Iteration

``` js
forEach(callback)
map(callback)
filter(callback)
reduce(callback, initialValue)
reduceRight(callback, initialValue)
```

## Testing Elements

``` js
every(callback)
some(callback)
```

## Searching & Matching

``` js
find(callback)
findIndex(callback)
findLast(callback)
findLastIndex(callback)
includes(element)
```

## Transforming Arrays

``` js
map(callback)
flat(depth)
flatMap(callback)
```

## Sorting & Reversing

``` js
sort(compareFn)
reverse()

toSorted(compareFn)
toReversed()
```

## Extracting Parts

``` js
slice(start, end)
```

## Combining Arrays

``` js
concat(...arrays)
join(separator)
```

## Copying & Replacing (Immutable)

``` js
toSpliced(start, deleteCount, ...items)
with(index, value)
```

## Filling Arrays

``` js
fill(value, start, end)
copyWithin(target, start, end)
```

## Flattening Arrays

``` js
flat(depth)
flatMap(callback)
```

## Iterators

``` js
keys()
values()
entries()
```

## String Conversion

``` js
join(separator)
toString()
toLocaleString()
```

## Instance Checking

``` js
Array.isArray(value) // Static method
```

## Common Mutating Methods

``` js
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
fill()
copyWithin()
```

## Common Non-Mutating Methods

``` js
map()
filter()
reduce()
slice()
concat()
flat()
flatMap()
toSorted()
toReversed()
toSpliced()
with()
```

## See All Array Methods

``` js
console.log(Object.getOwnPropertyNames(Array.prototype));
```

## See All Static Array Methods

``` js
console.log(Object.getOwnPropertyNames(Array));
```
