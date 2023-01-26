import { MinifigShippingServerPayload, MinifigUIFormData } from "./checkout.types";

export const shippmentDetailsDto = (minifigId: string, form: MinifigUIFormData): MinifigShippingServerPayload => ({
  minifig_id: minifigId,
  form: {
    name: form.name,
    surname: form.surname,
    phone_number: form.phoneNumber,
    email: form.email,
    date_of_birth: form.dateOfBirth,
    adress: form.adress,
    city: form.city,
    state: form.state,
    zip_code: form.zipCode
  }
})