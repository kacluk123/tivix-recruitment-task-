import { UIResponseSingleMinifigPart } from "../../services/minifigs"
import styled from 'styled-components'

export type MinifigPartProps = {
  part: UIResponseSingleMinifigPart
}

const MinifigContainer = styled.div`
  display: grid;
  grid-template-areas:
    "image name name"
    "image code code";
  grid-template-columns: 75px 1fr;
  
  grid-column-gap: 10px;
`

const PartImage = styled.img`
  height: 75px;
  grid-area: image;
`

const PartName = styled.span`
  grid-area: name;
  font-weight: 600;
  align-self: flex-end;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const PartCode = styled.span`
  grid-area: code;
  color: var(--main-selection-color);
`

export const MinifigPart = ({ part }: MinifigPartProps) => {
  return (
    <MinifigContainer>
      <PartImage src={part.partImgUrl} alt={part.name} />
      <PartName>
        {part.name}
      </PartName>
      <PartCode>
        {part.partNum}
      </PartCode>
    </MinifigContainer>
  )
}