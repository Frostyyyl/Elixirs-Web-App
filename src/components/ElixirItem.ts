import { Elixir } from '../types/elixir';

export class ElixirItem {
  public static create(elixir: Elixir): HTMLDivElement {
    const item = document.createElement('div');
    item.className = 'elixir-item';
    item.dataset.elixirId = elixir.id;
    item.textContent = elixir.name;

    item.addEventListener('click', () => {
      const event = new CustomEvent('elixirClick', {
        detail: elixir,
        bubbles: true,
      });

      item.dispatchEvent(event);
    });

    return item;
  }
}
