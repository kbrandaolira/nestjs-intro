"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Crypt {
    constructor() {
        this.bcrypt = require('bcrypt');
    }
    execute(text) {
        return this.bcrypt.hashSync(text, 10);
    }
    compare(text, hash) {
        return this.bcrypt.compareSync(text, hash);
    }
}
exports.Crypt = Crypt;
//# sourceMappingURL=cryptUtils.js.map