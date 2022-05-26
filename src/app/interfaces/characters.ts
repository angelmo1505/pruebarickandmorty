export interface characters {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: origin;
  location: location;
  image: string;
  episode: [];
  url: string;
  created: string;
}

export interface origin {
  name: string
  url: string
}

export interface location {
  name: string
  url: string
}