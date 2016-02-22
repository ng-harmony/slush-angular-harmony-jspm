import { Service } from "ng-harmony/ng-harmony";

export class TodoStorageService extends Service {
    static get STORAGE_ID () {
        return "todos-angularjs";
    }
    constructor (...args) {
        super(...args);
        this.todos = [];
    }
}