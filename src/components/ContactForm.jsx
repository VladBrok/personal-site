import { sendEmail } from "../lib/email";
import InputContainer from "./InputContainer";

export default function ContactForm() {
  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    await sendEmail(formData);
    form.reset();
  }

  return (
    <form className="my-4 text-left md:w-96" onSubmit={handleSubmit}>
      <InputContainer
        id="name"
        label="Name:"
        input={props => <input type="text" {...props} />}
      />
      <InputContainer
        id="email"
        label="Email:"
        input={props => <input type="email" {...props} />}
      />
      <InputContainer
        id="msg"
        label="Message:"
        input={props => <textarea cols="30" rows="6" {...props}></textarea>}
      />
      <div>
        <button className="button">Send Message</button>
      </div>
    </form>
  );
}
