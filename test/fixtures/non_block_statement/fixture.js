'use strict';

var assert = require('assert');

function add (a, b) {
    if (!isNaN(a)) assert(0 < a);
    if (typeof b === 'number') {
        assert(0 < b);
    }

    if (typeof a === 'number')
        assert(0 < a);
    else if (typeof b === 'number')
        assert(0 < b);
    else
        assert(false);

    return a + b;
}
