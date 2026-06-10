# JavaScript Object Methods

## Object Creation

``` js
Object.create(proto)
Object.assign(target, ...sources)
Object.fromEntries(iterable)
```

## Property Inspection

``` js
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
Object.hasOwn(obj, prop)
Object.getOwnPropertyNames(obj)
Object.getOwnPropertySymbols(obj)
Object.getOwnPropertyDescriptors(obj)
Object.getOwnPropertyDescriptor(obj, prop)
```

## Property Definition

``` js
Object.defineProperty(obj, prop, descriptor)
Object.defineProperties(obj, descriptors)
```

## Prototype Methods

``` js
Object.getPrototypeOf(obj)
Object.setPrototypeOf(obj, prototype)
Object.isPrototypeOf(obj) // instance method
```

## Object State Control

``` js
Object.freeze(obj)
Object.seal(obj)
Object.preventExtensions(obj)

Object.isFrozen(obj)
Object.isSealed(obj)
Object.isExtensible(obj)
```

## Object Comparison

``` js
Object.is(value1, value2)
```

## Instance Methods (Object.prototype)

``` js
hasOwnProperty(prop)
isPrototypeOf(obj)
propertyIsEnumerable(prop)
toString()
toLocaleString()
valueOf()
```

## Legacy / Deprecated

``` js
__defineGetter__()
__defineSetter__()
__lookupGetter__()
__lookupSetter__()
__proto__
```

## See All Static Methods

``` js
console.log(Object.getOwnPropertyNames(Object));
```

## See All Instance Methods

``` js
console.log(Object.getOwnPropertyNames(Object.prototype));
```
