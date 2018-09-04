'use strict';

function convert(input) {
    return parseFloat(input);
}

function add(a, b) {
    return convert(a) + convert(b);
}

function subtract(a, b) {
    return convert(a) - convert(b);
}

function mutiply(a, b) {
    return convert(a) * convert(b);
}

function divide(a, b) {
    return convert(a) / convert(b);
}

exports.add = add;
exports.subtract = subtract;
exports.mutiply = mutiply;
exports.divide = divide;