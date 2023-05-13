import { useFormikContext } from 'formik';

function SubmitButton() {
  const formikContext = useFormikContext();

  return (
    <button type="submit" disabled={formikContext.isSubmitting || !formikContext.dirty || !formikContext.isValid}>Save</button>
  )
}

export default SubmitButton;