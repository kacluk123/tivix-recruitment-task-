import {
  createBrowserRouter,
  json
} from "react-router-dom";

import { HomePage } from './home';
import { ChooseMinifig } from './choose-minifig';
import { MinifigCheckout } from "./minifig-checkout";
import { ErrorPage } from "./error";
import { minifigService } from "../services/minifigs";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "choose-minifig",
    element: <ChooseMinifig />,
    errorElement: <ErrorPage />,
    loader: async () => {
      return minifigService.getRandomMinifigs(3)
    }
  },
  {
    path: "minifig-checkout/:minifigId",
    element: <MinifigCheckout />,
    errorElement: <ErrorPage />,
    loader: async ({ params: { minifigId }}) => {
      if (minifigId) {
        const [ minifig, parts ] = await Promise.all([
          minifigService.getSingleMinifig(minifigId),
          minifigService.getMinifigParts(minifigId)
        ])

        if (parts.results.length > 0) {
          return {
            parts,
            minifig
          }
        }
        throw json(
          'Minifig not found!',
          {status: 404}
        );
      }
    },
  },
]);