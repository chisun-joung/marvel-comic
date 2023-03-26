import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import ComicDetail from "./routes/ComicDetail";
import Characters from "./routes/Characters";
import CharacterDetail from "./routes/CharacterDetail";
import ComicCharacters from "./routes/ComicCharacters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "comics/:comicId",
        element: <ComicDetail />
      },
      {
        path: "comics/:comicId/characters",
        element: <ComicCharacters />
      },
      {
        path: "characters",
        element: <Characters />
      },
      {
        path: "characters/:characterId",
        element: <CharacterDetail />
      }
    ]
  }
]);

export default router;
