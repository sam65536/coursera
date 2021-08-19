module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.array = [];
}

// Методы коллекции
Collection.prototype.values = function () {
    return this.array;
};

Collection.prototype.count = function () {
    return this.array.length;
}

Collection.prototype.at = function (position) {
    if (position <= this.count() && position >= 1) {
        return this.array[position-1];
    }
    return null;
}

Collection.prototype.append = function (element) {
    if (element instanceof Collection) {
        this.array = this.array.concat(element.values());
    } else {
        this.array.push(element);
    }
}

Collection.prototype.removeAt = function (position) {
    if (this.at(position)) {
        this.array.splice(position - 1, 1);
        return true;
    }
    return false;
}

// другие методы

/**
 * Создание коллекции из массива значений
 */
Collection.from = function(array) {
    var collection = new Collection();
    collection.array = Array.from(array);
    return collection;
};