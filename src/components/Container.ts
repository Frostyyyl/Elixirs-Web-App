export class Container {
  public static create(className: string): HTMLDivElement {
    const container = document.createElement('div');
    container.className = className;
    return container;
  }
}
