import { Info } from "./PaginationType";
import { Character } from "./CharacterType";

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    created: string;
    residents?: Character[]
}

export interface LocationsData {
    locations: {
        info: Info;
        results: Location[];
    };
}

export interface LocationsVars {
    page: number;
}

export interface LocationData {
    location: Location;
}

export interface LocationVars {
    id?: number;
}