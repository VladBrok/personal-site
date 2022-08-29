import { useState, lazy, Suspense } from "react";
import { sendEmail } from "../lib/email";
import InputContainer from "./InputContainer";

const Notification = lazy(() => import("./Notification"));

export default function ContactForm() {
  const [showNotification, setShowNotification] = useState(false);
  const [isSendError, setIsSendError] = useState(false);
  const [isInputError, setIsInputError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      setIsInputError(true);
      form
        .querySelector(":invalid")
        .scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    try {
      const formData = new FormData(form);
      setIsLoading(true);
      const response = await sendEmail(formData);

      console.log(response);
      if (!response.ok) {
        throw new Error();
      }

      setIsSendError(false);
    } catch {
      setIsSendError(true);
    } finally {
      setShowNotification(true);
      setIsLoading(false);
    }
  }

  function handleNotificationClose() {
    setShowNotification(false);
  }

  const notification = isSendError
    ? "Failed to send message. Please try again later"
    : "Message sent!";

  return (
    <form className="my-4 text-left md:w-96" onSubmit={handleSubmit} noValidate>
      <InputContainer
        id="name"
        label="Name:"
        required={true}
        isInputError={isInputError}
        errorMessage="Please enter your name"
        input={props => <input type="text" maxLength={25} {...props} />}
      />
      <InputContainer
        id="email"
        label="Email:"
        required={true}
        isInputError={isInputError}
        errorMessage="Please enter a valid email address"
        input={props => <input type="email" maxLength={254} {...props} />}
      />
      <InputContainer
        id="msg"
        label="Message:"
        isInputError={isInputError}
        input={props => (
          <textarea cols="30" rows="5" maxLength={150} {...props}></textarea>
        )}
      />
      <div>
        <button className="button mt-8" disabled={isLoading}>
          Send Message
        </button>
        <Suspense fallback={null}>
          {showNotification && (
            <Notification
              isError={isSendError}
              onClose={handleNotificationClose}
            >
              {notification}
            </Notification>
          )}
        </Suspense>
      </div>
    </form>
  );
}
