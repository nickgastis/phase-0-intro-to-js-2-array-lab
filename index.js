// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

//const newCat = "Broom"

//const newCats = [cats, ...newCat]

function destructivelyAppendCat(name) {
    return (cats.push("Ralph"))
}

function destructivelyPrependCat(name) {
    return (cats.unshift("Bob"))
}

function destructivelyRemoveLastCat(name) {
    return (cats.pop())
}

function destructivelyRemoveFirstCat(name) {
return (cats.shift())
}

const addCat = [...cats, "Broom"]

function appendCat(name) {
    return (addCat)
}

const subCat = ["Arnold", ...cats]

function prependCat(name) {
    return (subCat)
}

function removeLastCat() {
    return (cats.slice(0, 2))
}

function removeFirstCat() {
    return (cats.slice(1))
}