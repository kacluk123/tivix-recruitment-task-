import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import { useLoaderData } from 'react-router'
import { Link, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { MinifigPicker } from '../components/minifig-picker'
import { UIResponseMinifigs } from '../services/minifigs'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  min-height: inherit;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  gap: 80px;
  color: #FFFFFF;
`

export const ChooseMinifig = () => {
  const minifigs = useLoaderData() as UIResponseMinifigs
  const [ minifig, setMinifig ] = useState("")

  const handlePickMinifig = (minifigId: string) => {
    setMinifig(minifigId)
  }

  return (
    <Container>
      <Typography variant="h4" fontWeight="800">
        CHOOSE YOUR MINIFIG
      </Typography>
      <MinifigPicker 
        minifigs={minifigs.results} 
        handlePick={handlePickMinifig} 
        currentSelected={minifig}
      />
        <Link to={`/minifig-checkout/${minifig}`} 
          style={{ 
            textDecoration: 'none', 
            pointerEvents: !minifig ? 'none' : 'auto'
          }}
        >
          <Button 
            variant="contained" 
            size="large" 
            disabled={!minifig} 
          >
            PROCEED TO SHIPMENT
          </Button>
        </Link>
    </Container>
  )
}