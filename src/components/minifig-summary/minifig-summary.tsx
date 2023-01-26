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
  width: 250px;
  height: 250px;
  align-self: center;
  margin-top: 50px;
`

const MinifigsPartsList = styled.ul`
  listy-style: none;
  padding: 0;
  margin-top: 40px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 25px;
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
        <Typography variant="h6" component="h6" textAlign='center'>
          {minifig.name}
        </Typography>
        <Typography variant="h6">
          There are {parts.results.length} parts in this minifig:
        </Typography>
        <MinifigsPartsList>
          {parts.results.map(part => (
            <MinifigPart part={part} />
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