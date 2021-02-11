import { getMovies, getMovie, getSuggestions, getAtable } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
    atable_all: (_, { col }) => getAtable(col)
  }
};


export default resolvers;
