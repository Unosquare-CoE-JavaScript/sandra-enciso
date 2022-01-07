// Drag & Drop Interfaces
// The idea is that we can add the Draggable interface class to any class that renders an element which can be draggable
namespace App {
  // Draggable and DragTarget are only available in DDInferfaces namespace
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    // using export, now are availables outside this file!
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }
}
