import React from "react";
import { Button } from "../../../atoms/Button/Button";
import "./styles.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const LoginForm = ({ onSumbitLoginForm, formName }: any) => {
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
        {() => (
          <Form>
            <div className="left-form">
              <p>{formName}</p>
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

            <Button
              disabled={formName === "Change Personal data"}
              palette={"pastelle_blue"}
              size={"big"}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
