# Marionette HTMLBars

This is an experiment to make Marionette work with HTMLBars. This repository is a work in progress. 

## Install
    npm install marionette-htmlbars

## Usage
```js
import { ItemView } from 'marionette-htmlbars'

let MyHTMLBarsView = ItemView.extend({
    // ...
});
```

Additionally, you can patch all Marionette's Views prototypes 
```js
require('marionette-htmlbars')();
```

## Features

- Lazy efficient rerendering 

```js
import { ItemView } from 'marionette-htmlbars';

let View = ItemView.extend({
    collectionEvents: {
        'sort': 'render'
    } 
});
```

![collectionReorder](https://raw.githubusercontent.com/jbsouvestre/marionette-htmlbars/master/demo/img/collection-demo.gif)

- Region autobinding *[Partially working]*

```html
<div {{region name="regionName"}}></div>
``` 
```js
import { LayoutView } from 'marionette-htmlbars';

let View = LayoutView.extend({
    onRender() {
        this.showChildView('regionName', new OtherView());
    }
});
```

- Actions autobinding 

```html
<button {{action "click" "remove"}}>Remove item</button>
``` 

```js
import { ItemView } from 'marionette-htmlbars';

let View = ItemView.extend({
    remove() {
        this.model.remove();
    } 
});
```


- UI Autobinding 

```html
<section {{ui "sectionElement"}}>My Element</section>
```
```js
import { ItemView } from 'marionette-htmlbars';

let View = ItemView.extend({
    onSomeTrigger() {
        this.ui.sectionElement.toggle();
    }
});
```

## Demo / Development
    npm install
    npm run build
    live-server

Navigate to the `/demo` folder

