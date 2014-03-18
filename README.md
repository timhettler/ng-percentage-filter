# Angular Percentage Filter

Converts a decimal to a percentage.

If the input is not a number an empty string is returned.

## Installation

```
bower install ng-percentage-filter
```

## Usage

Inject the `percentage` module into your app:

```js
angular.module('myApp', ['percentage']);
```

### In HTML Template Binding

#### With default settings

```html
<b>Final Grade:</b> {{0.8 | percentage}}%
```

This assuming a 0-1 scale and will output: **Final Grade:** 80%

**Note** that the percent sign isn't automatically appended to the number.

#### With custom comparator value

```html
<b>Total tests:</b> 145
<b>Passed:</b> {{120 | percentage:145}}%
```

Will output:

**Total tests:** 145

**Passed:** 82.75862068965517%

If a ridiculous amount of decimal places isn't your thing, you can use the built-in number filter:

{{120 | percentage:145 | number:1}}%

Will output: 82.8%

### In JavaScript

```js
$filter('percentage')(number, total)
```

### Arguments

**number** `number` - Number to convert.

**total** *(optional)* `number` - The total value that `number` will be compared against. The default value is 1.

### Returns

`number` - A number between 0 and 100.
