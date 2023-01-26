import { sleep } from "../../utils/sleep";
import { shippmentDetailsDto } from "./checkout.dto";
import { MinifigUIFormData } from "./checkout.types";

class CheckoutService {
  async sendShippingDetails(minifigId: string, form: MinifigUIFormData) {
    const data = shippmentDetailsDto(minifigId, form)
    await sleep(500)
    return {
      code: 200,
    }
  }
}

export const checkoutService = new CheckoutService()