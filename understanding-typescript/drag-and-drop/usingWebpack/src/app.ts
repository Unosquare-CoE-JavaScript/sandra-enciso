import { ProjectInput } from "./components/project-input"; //we must to remove the .js extension to ensure that webpack works correctly
import { ProjectList } from "./components/project-list";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
