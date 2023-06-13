import { createContext, useState } from "react";

export const themeContext = createContext({ themeValue:true });
export const ThemeContextProvider = ({ children, initial =true }) => {
	const [themeValue, setThemeValue] = useState(false);
	const toggle = () => {
		setThemeValue((prev) => !prev);
	};
	return (
		<themeContext.Provider value={{ themeValue , toggle }}>
			{children}
		</themeContext.Provider>
	);
};
