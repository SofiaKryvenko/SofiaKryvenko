import React from "react";
import compose from "ramda/es/compose";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import { withFormik, Form,InjectedFormikProps } from "formik";
import * as Yup from "yup";

import FormField from "./FormikField";
import {registerFormLayout} from "./fields";

interface FormValues {
    email: string;
    password: string;
    name:string;
  }

interface FormProps {
    onSubmit:()=> void;
  }

const RegisterForm:React.SFC<InjectedFormikProps<FormProps,FormValues>> = props =>{
    const {
        setFieldTouched,
        setFieldValue,
        touched,
        errors,
        values,
        dirty,
        isValid
      } = props;

      return (<Form style={{ width: "100%" }}>

        {registerFormLayout.map((formItem,i)=>{
          const fieldName = formItem.name;

          return(<FormField 
              key={i}
              formControl={formItem}
              value={values[fieldName]}
              error={errors[fieldName]}
              touched={touched[fieldName]}
              setFieldTouched={setFieldTouched}
              setFieldValue={setFieldValue}
            />)
        })}
          
          <Grid
            container
            style={{ marginTop: 20 }}
            direction="row"
            justify="flex-end"
        >
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!(isValid && dirty)}
          disableRipple
        >
          CREATE
        </Button>
      </Grid>
      </Form>)
}


const withFormikBag = withFormik({
    mapPropsToValues: () => {
      const defaults = {
        email: "",
        password: "",
        name:""
      };
  
      return defaults;
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string().required("Password is required").min(6, 'Too Short!')
    }),

    handleSubmit: (values, { setSubmitting, props }) => {
      const { password, email } = values;
  
      const formValues = {
        email,
        password
      };
  
      return props
        .onSubmit(formValues)
        .then(() => {
          setSubmitting(false);
        })
        .catch(() => {
          setSubmitting(false);
        });
    }
  });
  
  export default compose(withFormikBag)(RegisterForm);