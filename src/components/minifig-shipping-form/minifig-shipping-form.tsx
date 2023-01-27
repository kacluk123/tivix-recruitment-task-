import { TextField, Typography } from '@mui/material'
import styled from 'styled-components'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { emailRegex, MIN_DATE, phoneNumberRegex, isDateValid } from '../../utils/validation';
import { MinifigUIFormData } from '../../services/checkout';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  height: 100%;
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
  & .MuiInputBase-root.MuiOutlinedInput-root {
    color: white;
  }
  & .MuiInputBase-root.MuiOutlinedInput-root:not(.Mui-error):hover {
    fieldset {
      border-color: var(--main-selection-color);
    }
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

const validationCommonProps = {
  minLength: {
    value: 2,
    message: 'Too short'
  },
  required: {
    value: true,
    message: 'Field is required'
  }
}

export const MinifigShippingForm = ({ register, errors }: MinifigShippingFormProps) => {
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
            helperText={errors.name?.message}
            id="outlined-error-helper-text"
            {...register("name", { 
              ...validationCommonProps,
            })} 
          />
          <Input 
            InputLabelProps={labelProps} 
            label='Surname' 
            variant='outlined' 
            error={Boolean(errors?.surname)}
            helperText={errors.surname?.message}
            id="outlined-error-helper-text"
            {...register("surname", { 
              ...validationCommonProps,
            })} 
          />
        </InputGroup>
        <Input 
          InputLabelProps={labelProps} 
          label='Phone Number' 
          variant='outlined'
          error={Boolean(errors?.phoneNumber)}
          helperText={errors.phoneNumber?.message}
          id="outlined-error-helper-text"
          {...register("phoneNumber", { 
            ...validationCommonProps,
            pattern: {
              value: phoneNumberRegex,
              message: 'Phone number not valid'
            } 
          })} 
        />
        <Input 
          InputLabelProps={labelProps} 
          label='Email' 
          variant='outlined'
          error={Boolean(errors?.email)}
          helperText={errors.email?.message}
          id="outlined-error-helper-text"
          {...register("email", { 
            ...validationCommonProps,
            pattern: {
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
          helperText={errors.dateOfBirth?.message}
          id="outlined-error-helper-text"
          InputProps={{inputProps: { min: MIN_DATE, max: new Date().toISOString().substring(0,10)} }}
          {...register("dateOfBirth", { 
            ...validationCommonProps,
            validate: (value: string) => isDateValid(value) || 'Date not valid'
          })} 
        />
        <Input 
          InputLabelProps={labelProps} 
          label='Adress' 
          variant='outlined'
          error={Boolean(errors?.adress)}
          helperText={errors.adress?.message}
          id="outlined-error-helper-text"
          {...register("adress", { 
            ...validationCommonProps
          })} 
        />
        <Input 
          InputLabelProps={labelProps} 
          label='City' 
          variant='outlined'
          error={Boolean(errors?.city)}
          helperText={errors.city?.message}
          id="outlined-error-helper-text"
          {...register("city", { 
            ...validationCommonProps
          })} 
        />
        <InputGroup>
          <Input 
            InputLabelProps={labelProps} 
            label='State' 
            variant='outlined' 
            error={Boolean(errors?.state)}
            helperText={errors.state?.message}
            id="outlined-error-helper-text"
            {...register("state", { 
              ...validationCommonProps
            })} 
          />
          <Input 
            InputLabelProps={labelProps} 
            label='Zip Code' 
            variant='outlined' 
            error={Boolean(errors?.zipCode)}
            helperText={errors.zipCode?.message}
            id="outlined-error-helper-text"
            {...register("zipCode", { 
              ...validationCommonProps
            })} 
          />
        </InputGroup>
      </InputsContainer>
    </Container>
  )
}

