"use strict";
/**
 * Para criar um usuário, será necessário informar os seguintes parâmetros:
 * name, email, password
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, email = _a.email, password = _a.password, techs = _a.techs;
    var user = {
        name: name,
        email: email,
        password: password,
        techs: techs,
    };
    return user;
}
exports.default = createUser;
