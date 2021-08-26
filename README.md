# contenteditable-caret

Originally developed as a jquery plugin, ported to typescript.

[jQuery Caret](https://github.com/accursoft/caret) by Gideon Sireling (BSD-3-Clause)


## Install

```
yarn add @kobakazu0429/contenteditable-caret
```

## Usage

### HTML

```html
<div id="area" contentEditable="true"></div>
```

or

```html
<textarea id="area"></textarea>
```

### JS

```js
import caret from "@kobakazu0429/contenteditable-caret"

const el = document.getElementById("area");
caret(el).get();
```

## API

### caret

```js
caret(element)
```

return `get(), set()` methods

### get()

```js
caret(element).get()
```

return current caret postion as number

### set()

```js
caret(element).set(postion)
```

set caret postion by number
if you set `-1`, caret is moved to last
