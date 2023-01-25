import { Button, Typography } from '@mui/material'
import { useLoaderData } from 'react-router'
import styled from 'styled-components'
import { UIResponseMinifigs } from '../services/minifigs'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: #FFFFFF;
`

export const ChooseMinifig = () => {
  const minifigs = useLoaderData() as UIResponseMinifigs

  console.log(minifigs)
  return (
    <Container>
      <Typography variant="h4" fontWeight="800">
        CHOOSE YOUR MINIFIG
      </Typography>
    </Container>
  )
}