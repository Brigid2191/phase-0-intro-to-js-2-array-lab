// Initial cats array (reset before each test)
let cats = ["Milo", "Otis", "Garfield"];

// 1. Append a cat (destructive)
function destructivelyAppendCat(name) {
    cats.push(name);
}

// 2. Prepend a cat (destructive)
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// 3. Remove the last cat (destructive)
function destructivelyRemoveLastCat() {
    cats.pop();
}

// 4. Remove the first cat (destructive)
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// 5. Append a cat (non-destructive)
function appendCat(name) {
    return [...cats, name]; // Returns a new array, does not modify `cats`
}

// 6. Prepend a cat (non-destructive)
function prependCat(name) {
    return [name, ...cats]; // Returns a new array, does not modify `cats`
}

// 7. Remove the last cat (non-destructive)
function removeLastCat() {
    return cats.slice(0, -1); // Returns a new array without the last element
}

// 8. Remove the first cat (non-destructive)
function removeFirstCat() {
    return cats.slice(1); // Returns a new array without the first element
}


