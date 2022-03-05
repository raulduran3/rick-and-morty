import { Info } from "./PaginationType"

export interface Character {
    name: string;
    id: number;
    image: string;
    species: string;
    type: string;
    status: string;
    gender: string;
    created?: string;
    origin: {
      name: string;
      id: number;
    };
    location: {
      name: string;
      id: number;
    };
    episode?: [
      {
        name: string;
        id: number;
      }
    ];
}

export interface CharactersData {
    characters: {
        info: Info;
        results: Character[];
    };
}

export interface CharacterData {
    character: Character;
}

export interface CharactersVars {
    page: number;
}

export interface CharacterVars {
    id?: number;
}