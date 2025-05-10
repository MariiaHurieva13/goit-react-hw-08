import { useDispatch } from 'react-redux';
import css from './RegistrationForm.module.css'
import { Formik, Form, Field } from 'formik';
import { registerThunk } from '../../redux/auth/operation';


const RegistrationForm = () => {

  const dispatch = useDispatch()

const initialValues = {
  name: '',
  email: '',
  password: '',
}

const handleSabmit = (values, actions) => {
  console.log (values)
  dispatch(registerThunk(values))
  actions.resetForm();
}

  return (
  <Formik initialValues={initialValues} onSubmit={handleSabmit}> 
    <Form className={css.form} autoComplete="off">
      <label className={css.label}>
        Username
        <Field type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <Field type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <Field type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </Form>
  </Formik>
  );
}

export default RegistrationForm
