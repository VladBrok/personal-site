import InputContainer from "./InputContainer";

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="my-4 text-left text-lg md:w-96" onSubmit={handleSubmit}>
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
