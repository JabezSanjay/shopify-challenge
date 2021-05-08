const Storage = (nominatedMovies) => {
  localStorage.setItem(
    "nomination",
    JSON.stringify(nominatedMovies.length > 0 ? nominatedMovies : [])
  );
};

export const createStorage = (nominatedMovies) => {
  Storage(nominatedMovies);
};

export const MovieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (
        !state.nominatedMovies.find(
          (item) => item.imdbID === action.payload.imdbID
        )
      ) {
        state.nominatedMovies.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        ...createStorage(state.nominatedMovies),
        nominatedMovies: [...state.nominatedMovies],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        ...createStorage(
          state.nominatedMovies.filter(
            (item) => item.imdbId !== action.payload.imdbID
          )
        ),
        nominatedMovies: [
          ...state.nominatedMovies.filter(
            (item) => item.imdbID !== action.payload.imdbID
          ),
        ],
      };

    case "CLEAR":
      return {
        nominatedMovies: [],
        ...createStorage([]),
      };

    case "IS_NOMINATED":
      if (
        state.nominatedMovies.find(
          (item) => item.imdbID === action.payload.imdbID
        )
      ) {
        return true;
      } else {
        return false;
      }

    default:
      return state;
  }
};
