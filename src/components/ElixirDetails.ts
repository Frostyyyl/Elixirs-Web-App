import { Elixir } from '../types/elixir';

export class ElixirDetails {
  private details: HTMLDivElement;

  public constructor() {
    this.details = document.createElement('div');
    this.details.id = 'details';
  }

  public getElement(): HTMLDivElement {
    return this.details;
  }

  public setDetails(elixir: Elixir): void {
    console.log('Details were set');
    this.details.innerHTML =
      /* html */
      `
      <h2 class="title">${elixir.name}</h2>
      <table>
        <tbody>
          <tr>
            <td class="table-feature">Effect:</td>
            <td>${elixir.effect ?? 'Unknown'}</td>
          </tr>

          <tr>
            <td class="table-feature">Side effects:</td>
            <td>${elixir.sideEffects ?? 'Unknown'}</td>
          </tr>

          <tr>
            <td class="table-feature">Characteristics:</td>
            <td>${elixir.characteristics ?? 'Unknown'}</td>
          </tr>

          <tr>
            <td class="table-feature">Preparation time:</td>
            <td>${elixir.time ?? 'Unknown'}</td>
          </tr>

          <tr>
            <td class="table-feature">Difficulty:</td>
            <td>${elixir.difficulty}</td>
          </tr>

          <tr>
            <td class="table-feature">Ingredients:</td>
            <td>${
              elixir.ingredients.length
                ? elixir.ingredients
                    .map((ingredient) => ingredient.name)
                    .join(', ')
                : 'Unknown'
            }</td>
          </tr>

          <tr>
            <td class="table-feature">Inventors:</td>
            <td>${
              elixir.inventors.length
                ? elixir.inventors
                    .map(
                      (inventor) => `${inventor.firstName} ${inventor.lastName}`
                    )
                    .join(', ')
                : 'Unknown'
            }</td>
          </tr>

          <tr>
            <td class="table-feature">Manufacturer:</td>
            <td>${elixir.manufacturer ?? 'Unknown'}</td>
          </tr>
        </tbody>
      </table>`;
  }
}
