import React, { useState, useEffect } from "react";

function useForm(initialState) {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const resetForm = () => {
    setValues(initialState);
  };

  return { values, handleChange, resetForm };
}

function App() {
  // Initialize form state using the useForm hook
  const initialFormState = { firstName: "", lastName: "", email: "" };
  const { values, handleChange, resetForm } = useForm(initialFormState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", values);
  };

  return (
    <div className="App">
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
          </label>{" "}
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={resetForm}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
