import { Card, CardContent, Typography, Button } from "@mui/material"
import styled from 'styled-components'
import { UIResponseMinifigParts, UIResponseSingleMinifig } from "../../services/minifigs"
import { MinifigPart } from "./minifig-part"

const SummaryCard = styled(Card)`
  height: 100%;
  display: flex;
  width: 100%;
`

const SummaryCardContent = styled(CardContent)`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const MinifigsImage = styled.img`
  width: 175px;
  height: 175px;
  align-self: center;
  margin-top: 50px;
`

const MinifigsPartsList = styled.ul`
  padding: 0;
  display: flex;
  padding: 0;
  flex-grow: 1;
  list-style-type: none;
  flex-direction: column;
  gap: 25px;
`

const MinifigName = styled.p`
  text-align: center;
  font-weight: 600;
`

const MinifigParts = styled.p`
  font-weight: 600;
  margin-top: 25px;
`

type MinifigSummaryProps = {
  minifig: UIResponseSingleMinifig,
  parts: UIResponseMinifigParts
  onSubmit: () => void;
  isFormValid: boolean;
}

export const MinifigSummary = ({ minifig, parts, isFormValid, onSubmit }: MinifigSummaryProps) => {
  return (
    <SummaryCard>
      <SummaryCardContent>
        <Typography variant="h4" component="h4" fontWeight="800">
          SUMMARY
        </Typography>
        <MinifigsImage src={minifig.setImgUrl} alt={minifig.name}/>
        <MinifigName>
          {minifig.name}
        </MinifigName>
        <MinifigParts>
          There are {parts.results.length} parts in this minifig:
        </MinifigParts>
        <MinifigsPartsList>
          {parts.results.map(part => (
            <li key={part.partNum}>
              <MinifigPart part={part} />
            </li>
          ))}
        </MinifigsPartsList>
        <Button 
          size='large' 
          variant='contained' 
          disabled={!isFormValid} 
          onClick={onSubmit}
        >
          Submit
        </Button>
      </SummaryCardContent>
    </SummaryCard>
  )
}