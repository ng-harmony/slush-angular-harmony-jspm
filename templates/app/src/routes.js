import tpl from "views/todomvc.html!";

var routes = [{
    controller: "TodoCtrl",
    template: "tpl",
    resolve: {
        TodoStorage: ($http, LocalStorage, RemoteStorage) => {
            return $http.get("/api")
                .then(() => {
                    return RemoteStorage;
                }, () => {
                    return LocalStorage;
                });
        }
    }
}];

export default routes;