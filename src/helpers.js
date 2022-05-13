function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}
function remove(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

export { choice, remove };
