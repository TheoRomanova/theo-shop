import { Button } from "../../atoms/Button/Button";
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
            <div className="left-form">
              <p>Personal data</p>
              <Field
                className="login-input"
                type="email"
                placeholder="Email"
                name="email"
              />
              <ErrorMessage name="email" component="div" />
              <Field
                className="login-input"
                type="password"
                placeholder="Password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
              <Field
                className="login-input"
                type="checkbox"
                placeholder="Password"
                name="rememberMe"
              />
              <span>remember you?</span>
              <ErrorMessage name="rememberMe" component="div" />
            </div>
            <div className="right-form">
              <p>Change personal data</p>
              <Field
                className="login-input"
                type="email"
                placeholder="New email"
                name="email"
              />
              <ErrorMessage name="email" component="div" />
              <Field
                className="login-input"
                type="password"
                placeholder="New Password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
            </div>

            {/* <Button
              palette={"pastelle_blue"}
              size={"big"}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
