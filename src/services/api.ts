import { Elixir } from '../types/elixir';

export async function getElixirs(): Promise<Elixir[]> {
  const url = 'https://wizard-world-api.herokuapp.com/Elixirs';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);

    alert('An error occured during fetching data, try again.');

    return [];
  }
}
