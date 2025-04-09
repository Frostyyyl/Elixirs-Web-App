import { ElixirDetails } from './components/ElixirDetails';
import { ElixirsGrid } from './components/ElixirsGrid';
import * as Api from './services/api';
import { CloseButton } from './components/CloseButton';
import { Title } from './components/Title';
import { Container } from './components/Container';
import { SearchBar } from './components/SearchBar';

main();

async function main(): Promise<void> {
  // Create the container for the website components
  const mainCont = Container.create('cont-main');
  document.body.append(Title.create());

  // Create elixirs grid
  const grid = new ElixirsGrid();
  mainCont.appendChild(grid.getElement());

  // Create the search bar
  const searchBar = new SearchBar(grid);
  document.body.appendChild(searchBar.getElement());
  document.body.appendChild(mainCont);

  // Create details view
  const detailCont = Container.create('cont-details');
  detailCont.hidden = true;
  const closeBtn = CloseButton.create(() => {
    detailCont.hidden = true;
  });
  const detailsInnerCont = Container.create('cont-details-inner');
  const details = new ElixirDetails();
  detailsInnerCont.append(closeBtn, details.getElement());
  detailCont.appendChild(detailsInnerCont);
  mainCont.appendChild(detailCont);

  // Catch item being clicked event
  mainCont.addEventListener('elixirClick', ((event: CustomEvent) => {
    details.setDetails(event.detail);
    detailCont.hidden = false;
  }) as EventListener);

  // Fetch elixirs
  const elixirs = await Api.getElixirs();
  grid.setElixirs(elixirs);
  searchBar.init(elixirs);
}
