import {
  TitleWrapper,
  InputName,
  InputEmail,
  InputMessage,
  Button,
} from "./formStyles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFeedback } from "./formSlice";

export const Form = () => {
  const [formData, setFormData] = useState({ emailInputStyle: "" });
  const dispatch = useDispatch();

  const emailCheck = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$"
  );

  const handleInputNameChange = ({ target }) => {
    setFormData((prev) => {
      return { ...prev, name: target.value };
    });
  };

  const handleInputEmailChange = ({ target }) => {
    if (emailCheck.exec(target.value) || !target.value) {
      setFormData((prev) => {
        return {
          ...prev,
          email: target.value,
          emailInputStyle: "",
        };
      });
    } else {
      setFormData((prev) => {
        return {
          ...prev,
          email: target.value,
          emailInputStyle: "red",
        };
      });
    }
  };

  const handleInputMessageChange = ({ target }) => {
    setFormData((prev) => {
      return { ...prev, message: target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    dispatch(setFeedback(newFeedback));

    alert("Thanks for your feedback!");

    setFormData(() => {
      return { name: "", email: "", message: "" };
    });
  };

  return (
    <div>
      <TitleWrapper>Reach Out To Us!</TitleWrapper>
      <form onSubmit={handleSubmit}>
        <InputName
          placeholder="Your name*"
          type="text"
          value={formData.name}
          onChange={handleInputNameChange}
          required
        />
        {/* <span style={{ c }}>Use correct email, please</span> */}
        <InputEmail
          placeholder="Your e-mail*"
          type="text"
          value={formData.email}
          onChange={handleInputEmailChange}
          normal={formData.emailInputStyle}
          required
        />
        <InputMessage
          placeholder="Your message*"
          type="textarea"
          value={formData.message}
          onChange={handleInputMessageChange}
          required
        />
        <Button
          type="submit"
          disabled={
            formData.name && emailCheck.exec(formData.email) && formData.message
              ? false
              : true
          }
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};
