import { SubmitHandler, useForm } from 'react-hook-form'
import { useLoaderData, useNavigate, useParams } from 'react-router'
import styled from 'styled-components'
import { MinifigShippingForm } from '../components/minifig-shipping-form'
import { MinifigSummary } from '../components/minifig-summary'
import { MinifigUIFormData } from '../services/checkout'
import { checkoutService } from '../services/checkout/checkout.impl'
import { UIResponseSingleMinifig, UIResponseMinifigParts } from '../services/minifigs'

const Container = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 30px;
  grid-column-gap: 60px;
  grid-row-gap: 30px;
  min-height: inherit;
  align-items: center;
  color: #FFFFFF;

  @media (min-width: 980px) {
    grid-template-columns: 60% 1fr;
  }
`

export const MinifigCheckout = () => {
  const { parts, minifig } = useLoaderData() as {
    parts: UIResponseMinifigParts,
    minifig: UIResponseSingleMinifig
  }
  const { minifigId } = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isValid, isSubmitted } } = 
    useForm<MinifigUIFormData>({ mode: 'onChange'});
  
  const onSubmit: SubmitHandler<MinifigUIFormData> = async data => {
    try {
      if (minifigId) {
        await checkoutService.sendShippingDetails(minifigId, data)
        navigate('/')
      } 
    } catch {
      //some notification to display error messages
    }
  }

  return (
    <Container>
      <MinifigShippingForm register={register} errors={errors} />
      <MinifigSummary 
        parts={parts} 
        minifig={minifig} 
        isFormValid={!isSubmitted || isValid} 
        onSubmit={handleSubmit(onSubmit)}
      />
    </Container>
  )
}