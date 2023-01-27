import { Typography, Button } from "@mui/material";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ErrorMesasge = styled.p`
  font-sie: 20px;
  color: white;
  font-weight: 600;
`

export const ErrorPage = () => {
  const error = useRouteError()
  return (
    <Container>
      <Typography variant="h3" color="white" fontWeight="800">
        Oops! something went wrong 
      </Typography>
      <ErrorMesasge>
        {isRouteErrorResponse(error) ? error.data : 'Please try again later'}
      </ErrorMesasge>
      <Link to='/' style={{ textDecoration: 'none'}}>
        <Button 
          variant="contained" 
          size="large" 
        >
          Back to main page
        </Button>
      </Link>
    </Container>
  )
}