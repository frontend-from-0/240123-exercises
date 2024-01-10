import { useReducer, createContext, useContext } from 'react';
import type { ReactNode, Dispatch } from 'react';
import { RecipeActionType, type Recipe, type RecipeAction } from './models';

export const RecipesContext = createContext<Recipe[]>([]);
export const RecipesDispatchContext = createContext<Dispatch<RecipeAction> | null>(null);

interface RecipesProviderProps {
	children: ReactNode;
	initialState?: Recipe[];
}

export const RecipesProvider = ({
	children,
	initialState,
}: RecipesProviderProps) => {
	const [recipes, dispatch] = useReducer(
		recipesReducer,
		initialState ?? []
	);

	return (
    <RecipesContext.Provider value={recipes}>
			<RecipesDispatchContext.Provider value={dispatch}>
				{children}
			</RecipesDispatchContext.Provider>
		</RecipesContext.Provider>
	);
};

function recipesReducer(recipes: Recipe[], action: RecipeAction) {
	switch (action.type) {
		case RecipeActionType.ADD_RECIPES: {
			const newRecipes = action.payload.filter(
				(payloadItem) =>
					!recipes.some((recipe) => recipe.idMeal === payloadItem.idMeal)
			);
			console.log('Updating recipes', [...recipes, ...newRecipes]);
			return [...recipes, ...newRecipes];
		}
		case RecipeActionType.REMOVE_ALL: {
			return [];
		}
		default:
			throw Error(`Action type ${action.type} is not supported`);
	}
};

// Custom hooks for consuming created contexts
export const useRecipes = () => useContext(RecipesContext);
export const useRecipesDispatch = () => useContext(RecipesDispatchContext);
