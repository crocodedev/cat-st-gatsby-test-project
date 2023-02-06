import {
  FormWrapperInput,
  FormWrapperInputLabel,
  FormInputWrapper,
  FormWrapperClearButton,
} from './FormWrapperInputTextView'

const FormWrapperInputText = ({
  tag = 'input',
  variant,
  placeholder,
  showClearButton,
  value,
  clearForm,
  onChange,
}) => {
  return (
    <FormInputWrapper>
      <FormWrapperInput
        onChange={onChange}
        value={value}
        type="text"
        required
        autocomplete="off"
        autofocus
        as={tag}
        tag={tag}
        variant={variant}
      />
      <FormWrapperInputLabel>{placeholder}</FormWrapperInputLabel>
      {showClearButton ? (
        <FormWrapperClearButton tag={tag} onClick={clearForm}>
          change
        </FormWrapperClearButton>
      ) : (
        ''
      )}
    </FormInputWrapper>
  )
}

export default FormWrapperInputText
