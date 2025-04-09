export class Title {
  public static create(): HTMLDivElement {
    const title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = '<h1>Elixirs from the Wizard World</h1>';
    return title;
  }
}
