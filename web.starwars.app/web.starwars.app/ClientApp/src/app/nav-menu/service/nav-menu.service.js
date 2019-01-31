"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var NavMenuService = /** @class */ (function () {
    function NavMenuService(http) {
        this.http = http;
    }
    NavMenuService.prototype.getMenuItems = function () {
        return this.http.get('api/MenuItems/GetItems').pipe(operators_1.map(function (response) {
            var respon = response.json();
            return respon;
        }));
    };
    return NavMenuService;
}());
exports.NavMenuService = NavMenuService;
//# sourceMappingURL=nav-menu.service.js.map