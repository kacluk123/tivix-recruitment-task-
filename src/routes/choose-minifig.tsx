import { Button, Typography } from '@mui/material'
import { useLoaderData } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { MinifigPicker } from '../components/minifig-picker'
import { UIResponseMinifigs } from '../services/minifigs'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  gap: 80px;
  color: #FFFFFF;
`

export const ChooseMinifig = () => {
  const minifigs = useLoaderData() as UIResponseMinifigs
  const [params, setQueryParams] = useSearchParams()

  const handlePickMinifig = (minifigId: string) => {
    setQueryParams([['minifigId', minifigId]])
  }

  const minifigId = params.get('minifigId')

  return (
    <Container>
      <Typography variant="h4" fontWeight="800">
        CHOOSE YOUR MINIFIG
      </Typography>
      <MinifigPicker 
        minifigs={minifigs.results} 
        handlePick={handlePickMinifig} 
        currentSelected={minifigId}
      />
      <Button variant="contained" 
        size="large" 
        disabled={!minifigId} 
        href={`minifig-checkout/${minifigId}`}
      >
        PROCEED TO SHIPMENT
      </Button>
    </Container>
  )
}