import {
  TitleWrapper,
  InputName,
  InputEmail,
  InputMessage,
  Button,
} from "./formStyles";
import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({ disabledButton: true });

  const handleInputNameChange = ({ target }) => {
    if (target.value !== "") {
      setFormData((prev) => {
        return { ...prev, name: target.value, disabledButton: false };
      });
    } else {
      setFormData((prev) => {
        return { ...prev, name: "", disabledButton: true };
      });
    }
  };

  const handleInputEmailChange = ({ target }) => {
    const emailCheck = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    const check = emailCheck.exec(target.value);
    if (emailCheck.exec(target.value)) {
      setFormData((prev) => {
        return { ...prev, email: target.value, inputEmailState: "" };
      });
    } else {
      setFormData((prev) => {
        return { ...prev, email: target.value, inputEmailState: "red" };
      });
    }
  };

  const handleInputMessageChange = ({ target }) => {
    setFormData((prev) => {
      return { ...prev, message: target.value };
    });
  };

  return (
    <div style={{ backgroundColor: "#56c79a" }}>
      <TitleWrapper>Reach Out To Us!</TitleWrapper>
      <InputName
        placeholder="Your name*"
        type="text"
        value={formData.name}
        onChange={handleInputNameChange}
        required
      />
      <InputEmail
        placeholder="Your e-mail*"
        type="text"
        value={formData.email}
        onChange={handleInputEmailChange}
        normal={formData.inputEmailState}
        required
      />
      <InputMessage
        placeholder="Your message*"
        type="textarea"
        value={formData.message}
        onChange={handleInputMessageChange}
        required
      />
      <Button disabled={formData.disabledButton}>Send Message</Button>
    </div>
  );
};
