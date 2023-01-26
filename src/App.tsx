import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { redirect } from "react-router-dom";

import { HomePage } from './routes/home-page';
import { ChooseMinifig } from './routes/choose-minifig';
import { minifigService } from "./services/minifigs";
import { MinifigCheckout } from "./routes/minifig-checkout";

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
  {
    path: "minifig-checkout/:minifigId",
    element: <MinifigCheckout />,
    loader: async ({ params: { minifigId }}) => {
      if (minifigId) {
        const parts = await minifigService.getMinifigParts(minifigId)
        if (parts.results.length > 0) {
          return minifigService.getMinifigParts(minifigId)
        }
        return redirect('/')
      }
    },
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
