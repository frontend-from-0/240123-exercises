import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { BD_SEARCH_BASE_URL } from "./urls.js";
import { AppRouter } from "./AppRouter";
import { useRecipesDispatch } from "./Modules/recipes/RecipesProvider";
import { RecipeActionType } from "./Modules/recipes/models";
import { UserProvider } from "./Modules/user/UserProvider";

const App = () => {
	const dispatch = useRecipesDispatch();

	const [recipes, setRecipes] = useState([]);

	const [mode, setMode] = useState("light");

	const theme = createTheme({
		palette: {
			mode: mode,
			primary: {
				main: "#ff9800",
				light: "#ef6c00",
			},
			linkColor: {
				main: '#fff',
				darker: '#000'
			}
		},
	});

	useEffect(() => {
		const abortCont = new AbortController();

		const getURL = async () => {
			try {
				const res = await fetch(BD_SEARCH_BASE_URL, {
					signal: abortCont.signal,
				});
				const data = await res.json();
				if (data.meals) {
					setRecipes(data.meals);
					dispatch({ type: RecipeActionType.ADD_RECIPES, payload: data.meals })
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		getURL();

		return () => abortCont.abort();
	}, [dispatch]);

	console.log(recipes);
	return (
		<ThemeProvider theme={theme}>
			<UserProvider>
				<Box bgcolor={theme.palette.background.default} color={theme.palette.text.primary}>
					<Navbar mode={mode} setMode={setMode} />
					<AppRouter
						recipes={recipes}
						setRecipes={setRecipes}
					/>
				</Box>
			</UserProvider>
		</ThemeProvider>
	);
};

export default App;
