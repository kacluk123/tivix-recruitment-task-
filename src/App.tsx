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
      return minifigService.getRandomMinifigs()
    }
  },
  {
    path: "minifig-checkout/:minifigId",
    element: <MinifigCheckout />,
    loader: async ({ params: { minifigId }}) => {
      if (minifigId) {
        const [ minifig, parts ] = await Promise.all([
          await minifigService.getSingleMinifig(minifigId),
          await minifigService.getMinifigParts(minifigId)
        ])

        if (parts.results.length > 0) {
          return {
            parts,
            minifig
          }
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
