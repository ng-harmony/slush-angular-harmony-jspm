import { Controller } from "ng-harmony/ng-harmony";
import * from "ng-harmony/ng-harmony-annotate";

@Component({
	module: <%= moduleName %>,
	selector: "todo-escape",
	restrict: "A",
	scope: {}
})
@Controller({
	module: <%= moduleName %>,
	name: "Escape",
	deps: ["$element", "$attrs"]
})
class EscapeController extends Controller
	constructor() {
		this.ESCAPE_KEY = 27;
		this.$element.bind('keydown', function (event) {
			if (event.keyCode === this.ESCAPE_KEY) {
				this.$scope.$apply(this.$attrs.todoEscape);
			}
		});
		this.$scope.$on('$destroy', function () {
			this.$element.unbind('keydown');
		});
	}
}