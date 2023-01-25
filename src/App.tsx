import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import { HomePage } from './routes/home-page';
import { ChooseMinifig } from './routes/choose-minifig';
import { minifigService } from "./services/minifigs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "choose-minifig",
    element: <ChooseMinifig />,
    loader: async () => {
      return minifigService.getMinifigs({
        page: '1',
        pageSize: '3',
        inThemeId: '246'
      })
    }
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
