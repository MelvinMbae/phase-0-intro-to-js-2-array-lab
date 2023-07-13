// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

//destructivelyAppendCat(Push Method)
function destructivelyAppendCat(name) {
    cats.push(name);
};

//destructivelyPrepend(Unshift Method)
function destructivelyPrependCat(name) {
    cats.unshift(name);
};

//Destructively remove last cat (Pop Method)
function destructivelyRemoveLastCat() {
    cats.pop();
};

//Destructively remove first cat (shift Method)
function destructivelyRemoveFirstCat() {
    cats.shift();
};

//AppendCat(Spread Method)
function appendCat(name) {
    let othercats = [...cats, name];
    return othercats
};

//PrependCat(Spread Method)
function prependCat(name) {
    let newcats = [name, ...cats]
    return newcats

};

//removelastcat(Spread Method)

function removeLastCat() {
    let catnames = cats.slice(0, -1)
    return catnames

};
function removeFirstCat() {
    let catnames_2 = cats.slice(1)
    return catnames_2

};
