import TodoStorageService from "./todostorage";
import * from "ng-harmony/ng-harmony-annotate";

@Service({
    module: <=% moduleName %>,
    name: "RemoteStorage",
    deps: "$resource"
})

export default class RemoteStorageService extends TodoStorageService {
    clearCompleted () {
        var originalTodos = this.todos.slice(0);

        var incompleteTodos = this.todos.filter(function (todo) {
            return !todo.completed;
        });

        angular.copy(incompleteTodos, this.todos);

        returnthis.api.delete(function () {
            }, function error() {
                angular.copy(originalTodos, this.todos);
            });
    }
    delete (todo) {
        var originalTodos = this.todos.slice(0);

		store.todos.splice(this.todos.indexOf(todo), 1);
		returnthis.api.delete({ id: todo.id },
			function () {
			}, function error() {
				angular.copy(originalTodos, this.todos);
			});
    }
    fetch () {
		returnthis.api.query(function (resp) {
			angular.copy(resp, this.todos);
		});
    }
    insert (todo) {
        var originalTodos = this.todos.slice(0);

        returnthis.api.save(todo,
            function success(resp) {
                todo.id = resp.id;
               this.todos.push(todo);
            }, function error() {
                angular.copy(originalTodos, this.todos);
            })
            .$promise;
    }
    put (todo) {
        returnthis.api.update({ id: todo.id }, todo)
            .$promise;
    }
}
