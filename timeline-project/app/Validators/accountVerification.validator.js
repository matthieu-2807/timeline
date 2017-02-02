"use strict";
function emailverification(input) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
        return null;
    }
    return { emailverification: true };
}
exports.emailverification = emailverification;
function passwordverification(input) {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (input.value.match(decimal)) {
        return null;
    }
    return { passwordverification: true };
}
exports.passwordverification = passwordverification;
//# sourceMappingURL=accountVerification.validator.js.map