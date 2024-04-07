import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ListPodcast from "./pages/ListPodcast";
import Episode from "./pages/Episode";
import DetailPodcast from "./pages/DetailPodcast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { HeaderContextProvider } from "@capitole/components/Header/HeaderContext";
import { routes } from "./constants/routes";

const router = createBrowserRouter([
    {
        path: routes.listPodcast,
        element: <ListPodcast />,
    },
    {
        path: routes.detailPodcast,
        element: <DetailPodcast />,
    },
    {
        path: routes.episode,
        element: <Episode />,
    },
]);

const queryClient = new QueryClient()

const App = () => {
    return <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <HeaderContextProvider>
                    <RouterProvider router={router} />
            </HeaderContextProvider>
        </ThemeProvider>
    </QueryClientProvider>
}

export default App