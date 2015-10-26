import { Model, Collection } from 'backbone';

const FILTERS = {
    ALL: 'all',
    ACTIVE: 'active'
};

// Todo Model
// ----------
let Todo = Model.extend({
    defaults: {
        title: '',
        completed: false,
        created: 0
    },

    initialize() {
        if(this.isNew()){
            this.set('created', Date.now());
        }
    },

    toggle() {
        return this.set('completed', !this.isCompleted());
    },

    isCompleted() {
        return this.get('completed');
    },

    matchesFilter(filter) {
        if(filter === FILTERS.ALL){
            return true;
        }

        if(filter === FILTERS.ACTIVE){
            return !this.isCompleted();
        }

        return this.isCompleted();
    }
});

// TodoList Collection
// -------------------
let TodoList = Collection.extend({
    model: Todo,

    comparator: 'created',

    getCompleted() {
        return this.reject(this._isCompleted);
    },

    _isCompleted(todo) {
        return todo.isCompleted();
    }
});


let ListView = HTMLBarsCompositeView.extend({
    template: ListViewTemplate,
});
