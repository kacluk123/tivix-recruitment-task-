import { UIResponseSingleMinifig } from "../../services/minifigs"
import styled from 'styled-components'
import { MinifigCard } from "./minifig-card"

const MinifigsList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 420px));
  gap: 30px;
  width: 100%;
`

const MinifigsListItem = styled.li`
 
`

type MinifigPickerProps = {
  minifigs: UIResponseSingleMinifig[]
  handlePick: (minifigId: string) => void
  currentSelected: string | null
}

export const MinifigPicker = ({ minifigs, handlePick, currentSelected }: MinifigPickerProps) => {
  return (
    <MinifigsList>
      {minifigs.map(minifig => (
        <MinifigsListItem key={minifig.setNum}>
          <MinifigCard minifig={minifig} handlePick={handlePick} isSelected={currentSelected === minifig.setNum}/>
        </MinifigsListItem>
      ))}
    </MinifigsList>
  )
}