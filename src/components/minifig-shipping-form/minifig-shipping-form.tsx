import { TextField, Typography } from '@mui/material'
import styled from 'styled-components'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { emailRegex, phoneNumberRegex } from '../../utils/validation-regex';
import { MinifigUIFormData } from '../../services/checkout';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
`

const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
` 

const Input = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }

  & .MuiInputBase-root {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }

  & .MuiFormLabel-root {
    color: var(--main-selection-color);
  }
  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid var(--main-selection-color-light);
  }
`
const labelProps = { shrink: true}

type MinifigShippingFormProps = {
  register: UseFormRegister<MinifigUIFormData>
  errors: Partial<FieldErrorsImpl<MinifigUIFormData>>
}

export const MinifigShippingForm = ({ register, errors }: MinifigShippingFormProps) => {
  console.log(errors)
  return (
    <Container>
      <Typography 
        variant="h4" 
        component="h4" 
        fontWeight="800" 
        alignSelf='flex-start'
      >
        SHIPPING DETAILS
      </Typography>
      <InputsContainer>
        <InputGroup>
          <Input 
            InputLabelProps={labelProps} 
            label='Name' 
            variant='outlined' 
            error={Boolean(errors?.name)}
            helperText={errors.name?.type}
            id="outlined-error-helper-text"
            {...register("name", { 
              minLength: 2,
              required: true,
            })} 
          />
          <Input 
            InputLabelProps={labelProps} 
            label='Surname' 
            variant='outlined' 
            error={Boolean(errors?.surname)}
            helperText={errors.surname?.type}
            id="outlined-error-helper-text"
            {...register("surname", { required: true })} 
          />
        </InputGroup>
        <Input 
          InputLabelProps={labelProps} 
          label='Phone Number' 
          variant='outlined'
          error={Boolean(errors?.phoneNumber)}
          helperText={errors.phoneNumber?.message || errors.phoneNumber?.type}
          id="outlined-error-helper-text"
          {...register("phoneNumber", { required: true, pattern: {
            value: phoneNumberRegex,
            message: 'Phone number not valid'
          } })} 
        />
        <Input 
          InputLabelProps={labelProps} 
          label='Email' 
          variant='outlined'
          error={Boolean(errors?.email)}
          helperText={errors.email?.message || errors.email?.type}
          id="outlined-error-helper-text"
          {...register("email", { required: true, pattern: {
            value: emailRegex,
            message: 'Email not valid'
          }})} 
        />
        <Input 
          InputLabelProps={labelProps} 
          label='Date of birth' 
          variant='outlined' 
          type='date' 
          error={Boolean(errors?.dateOfBirth)}
          helperText={errors.dateOfBirth?.type}
          id="outlined-error-helper-text"
          {...register("dateOfBirth", { required: true })} 
        />
        <Input 
          InputLabelProps={labelProps} 
          label='Adress' 
          variant='outlined'
          error={Boolean(errors?.adress)}
          helperText={errors.adress?.type}
          id="outlined-error-helper-text"
          {...register("adress", { required: true })} 
        />
        <Input 
          InputLabelProps={labelProps} 
          label='City' 
          variant='outlined'
          error={Boolean(errors?.city)}
          helperText={errors.city?.type}
          id="outlined-error-helper-text"
          {...register("city", { required: true })} 
        />
        <InputGroup>
          <Input 
            InputLabelProps={labelProps} 
            label='State' 
            variant='outlined' 
            error={Boolean(errors?.state)}
            helperText={errors.state?.type}
            id="outlined-error-helper-text"
            {...register("state", { required: true })} 
          />
          <Input 
            InputLabelProps={labelProps} 
            label='Zip Code' 
            variant='outlined' 
            error={Boolean(errors?.zipCode)}
            helperText={errors.zipCode?.type}
            id="outlined-error-helper-text"
            {...register("zipCode", { required: true })} 
          />
        </InputGroup>
      </InputsContainer>
    </Container>
  )
}

