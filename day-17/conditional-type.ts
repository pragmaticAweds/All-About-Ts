import fetch from "node-fetch";

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";

type FetchPokemonResult<T> = T extends undefined
  ? Promise<PokemonResults>
  : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
  url: string,
  cb?: T
): FetchPokemonResult<T> {
  if (cb) {
    fetch(url)
      .then((res) => res.json())
      .then(cb as () => void);
    return undefined as FetchPokemonResult<T>;
  } else {
    return fetch(url).then((res) => res.json()) as FetchPokemonResult<T>;
  }
}

// fetchPokemon(pokemonUrl, (data) => {
//   data.results.forEach((pok) => console.log(pok.name));
// });

(async function () {
  const data = <PokemonResults>await fetchPokemon(pokemonUrl);
  data.results.forEach((pok) => console.log(pok.name));
})();
