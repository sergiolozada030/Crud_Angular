export interface Heroe {
  id?: string;
  superHero: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  alt_img?: string;
}

export enum Publisher {
  DcComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}
