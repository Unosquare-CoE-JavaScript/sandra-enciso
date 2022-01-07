namespace App {
  // Component Base Class
  export abstract class Component<
    T extends HTMLElement,
    U extends HTMLElement
  > {
    //This class manages the rendering of the components
    // This class would be used only as inherit class, so is abstract
    //Creating a generic Class, when an instance occurs and set the specific types
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(
      templateId: string,
      hostElementId: string,
      insertAtStart: boolean,
      newElementId?: string
    ) {
      this.templateElement = document.getElementById(
        templateId
      )! as HTMLTemplateElement;
      this.hostElement = document.getElementById(hostElementId)! as T;

      const importedNode = document.importNode(
        this.templateElement.content,
        true
      );
      this.element = importedNode.firstElementChild as U;
      if (newElementId) {
        this.element.id = newElementId;
      }

      this.attach(insertAtStart);
    }

    private attach(insertAtBeginning: boolean) {
      this.hostElement.insertAdjacentElement(
        insertAtBeginning ? "afterbegin" : "beforeend",
        this.element
      );
    }

    // Enforces any class inheriting from component to add these two methods and to have them available.
    abstract configure(): void;
    abstract renderContent(): void;
  }
}
