import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { BD_SEARCH_BASE_URL } from "./urls.js";
import { AppRouter } from "./AppRouter";

const App = () => {
	const [recipes, setRecipes] = useState([]);

	const [mode, setMode] = useState("light");

	const theme = createTheme({
		palette: {
			mode: mode,
			primary: {
				main: "#ff9800",
				light: "#ef6c00",
			},
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
				if (data.meals) return setRecipes(data.meals);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		getURL();

		return () => abortCont.abort();
	}, []);

	console.log(recipes);
	return (
		<ThemeProvider theme={theme}>
			<Box bgcolor={"background.default"} color={"text.primary"}>
				<Navbar mode={mode} setMode={setMode} />
				<AppRouter theme={theme} recipes={recipes} setRecipes={setRecipes} />
			</Box>
		</ThemeProvider>
	);
};

export default App;
