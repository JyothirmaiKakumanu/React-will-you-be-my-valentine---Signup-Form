import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    gender: "Male",
    number: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    inputName: false,
    inputEmail: false,
    inputGender: false,
    inputNumber: false,
    inputPass: false
  });

  const [count, setCount] = useState(0);
  const [submitForm, setSubmitForm] = useState(false);

  const onNameChange = (event) => {
    setDetails({ ...details, name: event.target.value });
  };

  const onEmailChange = (event) => {
    setDetails({ ...details, email: event.target.value });
  };

  const onGenderChange = (event) => {
    setDetails({ ...details, gender: event.target.value });
  };

  const onPhoneNumberChange = (event) => {
    setDetails({ ...details, number: event.target.value });
  };

  const onPasswordChange = (event) => {
    setDetails({ ...details, password: event.target.value });
  };

  const handleFormValidation = (event) => {
    console.log(details);
    event.preventDefault();
    if (details.name === "") {
      setErrors((preField) => {
        setCount(count + 1);
        return { ...preField, inputName: true };
      });
    } else {
      setErrors((preField) => {
        return { ...preField, inputName: false };
      });
    }
    if (!details.email.includes("@") || details.email === "") {
      setErrors((preField) => {
        setCount(count + 1);
        return { ...preField, inputEmail: true };
      });
    } else {
      if (details.email.includes("@")) {
        setErrors((preField) => {
          return { ...preField, inputEmail: false };
        });
      }
    }
    if (details.gender === "") {
      setErrors((preField) => {
        setCount(count + 1);
        return { ...preField, inputGender: true };
      });
    } else {
      setErrors((preField) => {
        return { ...preField, inputGender: false };
      });
    }
    if (details.phoneNumber === "") {
      setErrors((preField) => {
        setCount(count + 1);
        return { ...preField, inputNumber: true };
      });
    } else {
      setErrors((preField) => {
        return { ...preField, inputNumber: false };
      });
    }
    if (details.password === "" || details.password.length < 6) {
      setErrors((preField) => {
        setCount(count + 1);
        return { ...preField, inputPass: true };
      });
    } else {
      setErrors((preField) => {
        return { ...preField, inputPass: false };
      });
    }

    if (count === 0) {
      setSubmitForm(true);
    }
  };

  const resetForm = () => {
    setDetails({
      name: "",
      email: "",
      gender: "Male",
      number: "",
      password: ""
    });
  };

  return (
    <div id="main">
      <h1 className="formTitle">Form Details</h1>

      <form>
        {submitForm ? (
          <div className="success-message">
            Hello {details.email.split("@")[0]}
          </div>
        ) : null}
        <label id="name">
          Name:
          <input
            data-testid="name"
            type="alphanumeric"
            className="formInputs"
            defaultValue=""
            onChange={onNameChange}
            // value={details.name}
          />
          {errors.inputName ? <p>Name is not alphanumeric</p> : ""}
        </label>

        <br />
        <label id="email">
          Email Address:
          <input
            data-testid="email"
            type="email"
            className="formInputs"
            onChange={onEmailChange}
          />
          {errors.inputEmail && !details.email.includes("@") ? (
            <p>Email must contain @</p>
          ) : (
            ""
          )}
        </label>

        <br />
        <label id="gender">
          Gender:
          <select
            data-testid="gender"
            className="formInputs"
            onChange={onGenderChange}
          >
            <option value="0">Male</option>
            <option value="1">Female</option>
            <option value="2">Other</option>
          </select>
          {errors.inputGender ? (
            <p>Please identify as male, female or others</p>
          ) : (
            ""
          )}
        </label>

        <br />
        <label id="phone">
          Phone Number:
          <input
            data-testid="phoneNumber"
            type="Number"
            className="formInputs"
            onChange={onPhoneNumberChange}
          />
          {errors.inputNumber ? (
            <p>Phone Number must contain only numbers</p>
          ) : (
            ""
          )}
        </label>

        <br />
        <label id="password">
          Password:
          <input
            data-testid="password"
            type="password"
            className="formInputs"
            onChange={onPasswordChange}
          />
          {errors.inputPass ? (
            <p>Password must contain atleast 6 characters</p>
          ) : (
            ""
          )}
        </label>

        <br />
        <button
          data-testid="submit"
          className="submitBtn"
          onClick={handleFormValidation}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
