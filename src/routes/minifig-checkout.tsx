import { Button, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLoaderData } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { MinifigPicker } from '../components/minifig-picker'
import { MinifigForm, MinifigShippingForm } from '../components/minifig-shipping-form'
import { UIResponseMinifigs } from '../services/minifigs'
import { UIResponseMinifigParts } from '../services/minifigs/minifigs.types'

const Container = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  justify-content: center;
  padding: 30px;
  align-items: center;
  grid-template-columns: 60% 1fr;
  color: #FFFFFF;
`

export const MinifigCheckout = () => {
  const minifigParts = useLoaderData() as UIResponseMinifigParts

  const { register, handleSubmit, formState: { errors } } = useForm<MinifigForm>();

  const onSubmit: SubmitHandler<MinifigForm> = data => console.log(data);

  return (
    <Container>
     
      <MinifigShippingForm register={register} errors={errors} />
      <div>
        summary
      </div>
    </Container>
  )
}