export interface Ingredient {
  id: string;
  name: string;
}

export interface Inventor {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Elixir {
  id: string;
  name: string;
  effect: string | null;
  sideEffects: string | null;
  characteristics: string | null;
  time: string | null;
  difficulty: string;
  ingredients: Ingredient[];
  inventors: Inventor[];
  manufacturer: string | null;
}
