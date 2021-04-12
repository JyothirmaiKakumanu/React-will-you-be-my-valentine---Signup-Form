import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const defaultDetails = {
    name: "",
    email: "",
    gender: "Male",
    number: "",
    password: ""
  };

  const [details, setDetails] = useState(defaultDetails);

  const [errors, setErrors] = useState({
    inputName: false,
    inputEmail: false,
    inputGender: false,
    inputNumber: false,
    inputPass: false
  });
  var nameRegex = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
  var phoneRegex = /^[0-9\b]+$/;

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
    
    if (details.name === "" || !details.name.match(nameRegex)) {
      setErrors((preField) => {
        setCount(count + 1);
        return { ...preField, inputName: true };
      });
    } else {
      if (details.name.match(nameRegex)) {
        setErrors((preField) => {
          return { ...preField, inputName: false };
        });
      }
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
    if (details.number === "" || !details.number.match(phoneRegex)) {
      setErrors((preField) => {
        setCount(count + 1);
        return { ...preField, inputNumber: true };
      });
    } else {
      if(details.number.match(phoneRegex)){
      setErrors((preField) => {
        return { ...preField, inputNumber: false };
      });
    }
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
      // setDetails(defaultDetails);
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
        {console.log("submitform", submitForm,count)}
        {(submitForm && count === 0) ? (
          <>
          {/* {resetForm} */}
          <div className="success-message" >
            Hello {details.email.split("@")[0]}
          </div>
          </>
          
        ) : null}
        <label id="name">
          <b>Name:</b>
          <input
            data-testid="name"
            type="alphanumeric"
            className="formInputs"
            defaultValue=""
            onChange={onNameChange}
          // value={details.name}
          />
          {errors.inputName && details.name==="" ? <p>Name Error</p> : ""}
          {errors.inputName && !details.name.match(nameRegex)? <p>Name is not alphanumeric</p> : ""}
        </label>

        <br />
        <label id="email">
          <b>Email Address:</b>
          <input
            data-testid="email"
            type="email"
            className="formInputs"
            onChange={onEmailChange}
          />
          {errors.inputEmail && details.email==="" ? (
            <p>Email Error</p>
          ) : (
            ""
          )}
          {errors.inputEmail && !details.email.includes("@") ? (
            <p>Email must contain @</p>
          ) : (
            ""
          )}
        </label>

        <br />
        <label id="gender">
          <b>Gender:</b>
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
        {console.log("phone ", errors.inputNumber)}
        <label id="phone">
          <b>Phone Number:</b>
          <input
            data-testid="phoneNumber"
            type="number"
            className="formInputs"
            onChange={onPhoneNumberChange}
          />
          {errors.inputNumber && details.number==="" ? (
            <p>Phone Number Error</p>
          ) : (
            ""
          )}
          {errors.inputNumber && !details.number.match(phoneRegex)? (
            <p>Phone Number must contain only numbers</p>
          ) : (
            ""
          )}
        </label>

        <br />
        <label id="password">
          <b> Password:</b>
          <input
            data-testid="password"
            type="password"
            className="formInputs"
            onChange={onPasswordChange}
          />
          {errors.inputPass && details.password===""? (
            <p>Password Error</p>
          ) : (
            ""
          )}
          {errors.inputPass && details.password.length<6? (
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
