# Marionette HTMLBars

This is an experiment to make Marionette work with HTMLBars.

## Features

- Lazy efficient rerendering *[Working]*

```
let View = HTMLBarsView.extend({
    collectionEvents: {
        'sort': 'render'
    } 
});
```

- Region autobinding *[Partially working]*

```<div {{region name="regionName"}}></div>``` 
```
let View = HTMLBarsView.extend({
    onRender() {
        this.showChildView('regionName', new OtherView());
    }
});
```

- Actions autobinding *[In progress]*

```<button {{action "click" "remove"}}>Remove item</button>``` 

```
let View = HTMLBarsView.extend({
    remove() {
        this.model.remove();
    } 
});
```


- UI Autobinding *[In progress]*

```<section {{ui "sectionElement"}}>My Element</section>```
```
let View = HTMLBarsView.extend({
    onSomeTrigger() {
        this.ui.sectionElemnt.toggle();
    }
});
```

## Demo
    npm install
    npm run build
    live-server

Navigate to 127.0.0.1:8080 