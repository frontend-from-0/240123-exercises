import { createContext, useContext, useReducer } from "react";

const FavoritesContext = createContext();
const FavoritesDispatchContext = createContext();

const initialItemsState = [];

export const FavoritesProvider = ({ children, initialState }) => {

    const [favorites, dispatch] = useReducer(favoritesReducer, initialState ?? initialItemsState);

    return (
        <FavoritesContext.Provider value={favorites}>
            <FavoritesDispatchContext.Provider value={dispatch}>
                {children}
            </FavoritesDispatchContext.Provider>
        </FavoritesContext.Provider>
    )
}

const favoritesReducer = (favorites, action) => {
    switch (action.type) {
        case 'add_favorite': {
            const newFavorite = action.payload.filter(
                (payloadItem) =>
                    favorites.every((fav) => fav.idMeal !== payloadItem.idMeal)
            );
            return [...favorites, ...newFavorite]
        }
        case 'remove_favorite': {
            const filteredFavorites = favorites.filter(fav => fav.idMeal !== action.payload.idMeal)
            return [...filteredFavorites]
        }
        case 'remove_all_favorites': {
            return []
        }
        default:
            throw Error(`Action type ${action.type} is not supported`);
    }
}

export const useFavorites = () => useContext(FavoritesContext);
export const useDispatchFavorites = () => useContext(FavoritesDispatchContext);

