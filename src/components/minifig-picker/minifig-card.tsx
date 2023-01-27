import { UIResponseSingleMinifig } from "../../services/minifigs"
import styled, { css } from 'styled-components'
import { Card, CardContent, Link } from "@mui/material"


const MinifigsImage = styled.img`
  width: 200px;
  height: 200px;
`

const MinifigCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
  text-align: center;
`

const MinifigNameContent = styled(CardContent)`
  flex-grow: 1;
`

const MinifigCardContainer = styled(Card)`
  height: 100%;
  cursor: pointer;
  border-radius: 50px;
  &.MuiPaper-root {
    ${((props: { $isSelected: boolean }) => props.$isSelected && css`
    box-shadow: 1px 0px 8px 10px var(--main-selection-color);
  `)}
  }
`

const MinifigName = styled.span`
  font-weight: 800;
`

const DetailsLink = styled(Link)`
  &.MuiTypography-root {
    color: rgba(221, 123, 44, 1);
    font-weight: 600;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`


type MinifigCardProps = {
  minifig: UIResponseSingleMinifig
  handlePick: (minifigId: string) => void
  isSelected: boolean;
}

export const MinifigCard = ({ minifig, handlePick, isSelected }: MinifigCardProps) => {
  const handleClick = () => {
    handlePick(minifig.setNum)
  }

  return (
    <MinifigCardContainer onClick={handleClick} $isSelected={isSelected}>
      <MinifigCardContent>
        <MinifigsImage src={minifig.setImgUrl} alt={minifig.name}/>
        <MinifigNameContent>
          <MinifigName>
            {minifig.name}
          </MinifigName>
        </MinifigNameContent>
        <DetailsLink href={minifig.setUrl} target="_blank">Show details</DetailsLink>
      </MinifigCardContent>
    </MinifigCardContainer>
  )
}