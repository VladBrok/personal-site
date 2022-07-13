import { useState } from "react";
import { sendEmail } from "../lib/email";
import InputContainer from "./InputContainer";
import Notification from "./Notification";

export default function ContactForm() {
  const [showNotification, setShowNotification] = useState(false);
  const [isError, setIsError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const form = e.target;
      const formData = new FormData(form);
      const response = await sendEmail(formData);

      console.log(response);
      if (!response.ok) {
        throw new Error();
      }

      setIsError(false);
    } catch {
      setIsError(true);
    } finally {
      setShowNotification(true);
    }
  }

  function handleNotificationClose() {
    setShowNotification(false);
  }

  const notification = isError
    ? "Failed to send message. Please try again later"
    : "Message sent!";

  return (
    <form className="my-4 text-left md:w-96" onSubmit={handleSubmit}>
      <InputContainer
        id="name"
        label="Name:"
        required={true}
        errorMessage="Please enter your name"
        input={props => <input type="text" maxLength={25} {...props} />}
      />
      <InputContainer
        id="email"
        label="Email:"
        required={true}
        errorMessage="Please enter a valid email address"
        input={props => <input type="email" {...props} />}
      />
      <InputContainer
        id="msg"
        label="Message:"
        input={props => (
          <textarea cols="30" rows="6" maxLength={100} {...props}></textarea>
        )}
      />
      <div>
        <button className="button mt-8">Send Message</button>
        <Notification
          isActive={showNotification}
          isError={isError}
          onClose={handleNotificationClose}
        >
          {notification}
        </Notification>
      </div>
    </form>
  );
}
