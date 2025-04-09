import { Elixir } from '../types/elixir';
import { ElixirItem } from './ElixirItem';

export class ElixirsGrid {
  private grid: HTMLDivElement;

  public constructor() {
    this.grid = document.createElement('div');
    this.grid.id = 'elixirs-grid';

    const loadingMsg = document.createElement('p');
    loadingMsg.className = 'loading-msg';
    loadingMsg.textContent = 'Loading...';

    this.grid.appendChild(loadingMsg);
  }

  public getElement(): HTMLDivElement {
    return this.grid;
  }

  public setElixirs(elixirs: Elixir[]): void {
    this.grid.innerHTML = '';

    elixirs.forEach((elixir) => {
      this.grid.appendChild(ElixirItem.create(elixir));
    });
  }
}
