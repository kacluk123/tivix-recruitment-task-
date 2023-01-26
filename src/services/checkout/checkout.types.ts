export interface MinifigUIFormData {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  adress: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface MinifigServerFormData {
  name: string;
  surname: string;
  phone_number: string;
  email: string;
  date_of_birth: string;
  adress: string;
  city: string;
  state: string;
  zip_code: string;
}

export interface MinifigShippingServerPayload {
  minifig_id: string;
  form: MinifigServerFormData
}