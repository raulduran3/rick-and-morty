import { Info } from "./PaginationType"
import { Character } from "./CharacterType"

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters?: Character[]
    created?: string
}

export interface EpisodesData {
    episodes: {
        info: Info;
        results: Episode[];
    };
}

export interface EpisodeData {
    episode: Episode;
}

export interface EpisodesVars {
    page: number;
}

export interface EpisodeVars {
    id?: number;
}