import { ErrorMessage, Field, useField } from 'formik';

type Option = {
  value: number;
  label: string;
};

type Props = {
  label: string;
  name: string;
  options: Option[];
  htmlFor?: string;
  id?: string;
};

const FormikSelect = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.htmlFor} className="form-label">
        {label}
      </label>
      <select
        className={`form-select mb-1 ${meta.touched && meta.error ? 'is-invalid' : ''}`}
        {...field}
        {...props}
      >
        <option value="" label="Select option" />
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage name={props.name}>
        {(message) => <p className="badge small bg-danger text-end">{message}</p>}
      </ErrorMessage>
    </div>
  );
};

export default FormikSelect;
