import { UIResponseSingleMinifig } from "../../services/minifigs"

type MinifigPickerProps = {
  minifigs: UIResponseSingleMinifig[]
  handlePick: (minifigId: string) => void
}

export const MinifigPicker = ({ minifigs, handlePick }: MinifigPickerProps) => {
  
}