import { createTheme, ThemeProvider } from "@mui/material"
import Dashboard from "./app/components/Dashboard"
import { AppContextProvider } from "./app/context"

const theme = createTheme({
    typography: {
        fontFamily: "Lato",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderColor: "transparent",
                    minWidth: "auto",
                    fontWeight: 700,
                },
                containedPrimary: {
                    backgroundColor: "#002F87",
                    color: "#FFF",
                    "&:hover, &:focus, &:active": {
                        backgroundColor: "#029AE0",
                        color: "#FFF",
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: "500 !important",
                },
            },
        },
    },
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppContextProvider>
                <Dashboard />
            </AppContextProvider>
        </ThemeProvider>
    )
}
export default App
