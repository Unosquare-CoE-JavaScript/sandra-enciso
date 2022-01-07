namespace App {
  // Project Type
  export enum ProjectStatus {
    Active,
    Finished,
  }

  export class Project {
    // Build project objects
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus
    ) {}
  }
}
