class Task {
    constructor(title, person, date, collection) {
        this.title = title;
        this.person = person;
        this.date = date;
        this.completed = false;
        this.collection = collection;
        this.selected = false;
    }

    markComplete() {
        this.completed = true;
    }

    updateTask(title, person, date) {
        this.title = title;
        this.person = person;
        this.date = date;
    }

    removeTask() {
        let i = this.collection.indexOf(this);
        this.collection.splice(i, 1);
    }
    
}