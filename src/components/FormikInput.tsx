// src/components/FormikInput.tsx

import { ErrorMessage, Field } from "formik";

type Props = {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  htmlFor?: string;
  id?: string;
  as?: string;
  rows?: number;
  ariaLabel?: string;
  className?: string;
};

const FormikInput: React.FC<Props> = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.htmlFor} className="form-label">
        {props.label}
      </label>
      <Field
        id={props.id}
        name={props.name}
        type={props.type || "text"}
        className={props.className || "form-control"}
        placeholder={props.placeholder}
        as={props.as}
        rows={props.rows}
        aria-label={props.ariaLabel}
      />
      <ErrorMessage name={props.name}>
        {(message) => <p className="badge small bg-danger text-end">{message}</p>}
      </ErrorMessage>
    </div>
  );
};

export default FormikInput;
