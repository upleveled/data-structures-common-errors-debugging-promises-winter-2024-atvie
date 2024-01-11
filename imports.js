// Namespace import (uncommon, get all of the named imports)
import * as nums from './imports/a.js';
// Named import
import { num } from './imports/a.js';
// const { num } = require('./imports/a.js')
// Default import
import name from './imports/b/c.js';

console.log('import num', num);
console.log('import nums', nums);
console.log('import name', name.default);
