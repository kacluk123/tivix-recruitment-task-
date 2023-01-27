import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: inherit;
  gap: 15px;
  color: #FFFFFF;
`

export const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h2" fontWeight="800">
        LEGO MINIFIGS MYSTERY BOX
      </Typography>
      <Link to='choose-minifig' 
        style={{ 
          textDecoration: 'none', 
        }}
      >
        <Button variant="contained" size="large">
          LET'S GO
        </Button>
      </Link>
    </Container>
  )
}