import module from "./module";
import routes from "./routes";

import "./components/escape";
import "./components/focus";
import "./services/localstorage";
import "./services/remotestorage";
import "./controllers/todo";

module.routing(routes);
module.bootstrap();