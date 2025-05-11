import css from './LoginForm.module.css'
import { useDispatch } from 'react-redux';
import { Form, Formik, Field } from 'formik'
import { logInThunk } from '../../redux/auth/operations';


const LoginForm = () => {

  const dispatch = useDispatch();

const initialValues = {
  email: '',
  password: '',
}

const handleSabmit = (values, actions) => {
  dispatch(logInThunk(values))
  console.log (values)
  actions.resetForm();
}

  return (
  <Formik initialValues={initialValues} onSubmit={handleSabmit}>
    <Form className={css.form}  autoComplete="off">
      <label className={css.label}>
        Email
        <Field type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <Field type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </Form>
  </Formik>
  );
}

export default LoginForm
