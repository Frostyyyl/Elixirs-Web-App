import { Elixir } from '../types/elixir';
import { Container } from './Container';
import { ElixirsGrid } from './ElixirsGrid';

export class SearchBar {
  private difficulties = [
    'Unknown',
    'Advanced',
    'Moderate',
    'Beginner',
    'Ordinary Wizarding Level',
    'One Of A Kind',
  ];
  private selectedDifficulties: Set<string> = new Set();
  private elixirs: Elixir[];
  private searchBar: HTMLDivElement;
  private searchInput: HTMLInputElement;
  private listener: ElixirsGrid;

  public constructor(listener: ElixirsGrid) {
    this.elixirs = [];
    this.listener = listener;
    this.searchBar = Container.create('search-bar');

    // Create search input
    this.searchInput = document.createElement('input');
    this.searchInput.className = 'search';
    this.searchInput.placeholder = 'Search elixirs';
    this.searchInput.addEventListener('input', () => {
      this.applyFilters();
    });
    this.searchBar.appendChild(this.searchInput);

    // Create filter container
    const filterContInner = Container.create('cont-filter-inner');

    // Create checkboxes for each difficulty
    this.difficulties.forEach((diff) => {
      const label = document.createElement('label');
      label.textContent = diff;

      diff = diff.replace(/\s+/g, '');
      const checkbox = document.createElement('input');
      checkbox.className = 'filter';
      checkbox.type = 'checkbox';
      checkbox.value = diff;
      checkbox.id = `filter-${diff}`;
      label.htmlFor = `filter-${diff}`;

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          this.selectedDifficulties.add(diff);
        } else {
          this.selectedDifficulties.delete(diff);
        }
        this.applyFilters();
      });

      filterContInner.appendChild(checkbox);
      filterContInner.appendChild(label);
    });

    const filterCont = document.createElement('ul');
    filterCont.hidden = true;

    const dropdown = document.createElement('button');
    dropdown.className = 'dropdown';
    dropdown.textContent = 'Filter by difficulty';
    dropdown.addEventListener('click', () => {
      filterCont.hidden = !filterCont.hidden;
    });

    filterCont.appendChild(filterContInner);
    this.searchBar.appendChild(dropdown);
    this.searchBar.appendChild(filterCont);
  }

  private applyFilters(): void {
    let results = this.elixirs;

    const prompt = this.searchInput.value;
    if (prompt) {
      results = this.search(prompt);
    }

    if (this.selectedDifficulties.size > 0) {
      results = results.filter(
        (elixir) =>
          elixir.difficulty && this.selectedDifficulties.has(elixir.difficulty)
      );
    }

    this.listener.setElixirs(results);
  }

  private search(prompt: string): Elixir[] {
    const regex = new RegExp(`.*${prompt.toLowerCase()}.*`);
    const result = this.elixirs.filter((elixir) =>
      regex.test(elixir.name.toLowerCase())
    );

    return result;
  }

  public getElement(): HTMLDivElement {
    return this.searchBar;
  }

  public init(elixirs: Elixir[]): void {
    this.elixirs = elixirs;
  }
}
