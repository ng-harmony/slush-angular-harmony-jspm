import { Controller } from "ng-harmony/ng-harmony";
import * from "ng-harmony/ng-harmony-annotate";

@Component({
	module: <%= moduleName %>,
	selector: "todo-focus",
	restrict: "A",
	scope: {}
})
@Controller({
	module: <%= moduleName %>,
	name: "Focus",
	deps: ["$element", "$timeout"]
})
class FocusController {
	this.$scope.$watch(this.$attrs., function (newVal) {
		if (newVal) {
			this.$timeout(function () {
				this.$element[0].focus();
			}, 0, false);
		}
	});
}