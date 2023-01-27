export const emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
export const phoneNumberRegex = /^[\+]?\d{2,}?[(]?\d{2,}[)]?[-\s\.]?\d{2,}?[-\s\.]?\d{2,}[-\s\.]?\d{0,9}$/im
export const isDateValid = (value: string) => {
  return (new Date(value) < new Date() && new Date(value) > new Date(MIN_DATE))
}
export const MIN_DATE = "1930-01-01"