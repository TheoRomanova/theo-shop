import "./styles.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const LoginForm = ({ onSumbitLoginForm }: any) => {
  return (
    <div className="login-form">
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={onSumbitLoginForm}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field className="login-input" type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field className="login-input" type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
