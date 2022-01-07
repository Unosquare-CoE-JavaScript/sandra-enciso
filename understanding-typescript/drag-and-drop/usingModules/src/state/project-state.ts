import { Project, ProjectStatus } from "../models/project.js";
// Project State Management
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = []; // An array of function references. The idea is that whenever something changes, like addProject, we call a listener function
  //Protected means that it still can't be accesed from outside the class but can be accessed from any class that inherits

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    // creates a singleton
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active // by default, every new Project is Active
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      //Only if change the status, update status, otherwise nothing changes
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      //loop through listeners
      listenerFn(this.projects.slice()); //gets a copy of the array
    }
  }
}

console.log("RUNNING..."); //this get printed once, even though we're importing project state several times.

export const projectState = ProjectState.getInstance();
//this constant, is imported from several files. The question is, does this code in this file, does this run once or twice, or how often does it run once per import statement
// or once for the entire app?
// The answer is that it runs once when the file is imported for the first time by any other file, if another file then imports that same file again, it does not run again.
