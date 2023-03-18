    const FormRow = ({type, name, values, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type || "text"}
        name={name}
        className="form-input"
        value={values}
        onChange={handleChange}
      />
    </div>
  );
}
export default FormRow