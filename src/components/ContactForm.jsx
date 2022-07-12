import InputContainer from "./InputContainer";

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className="my-4 text-left text-gray text-lg md:w-96"
      onSubmit={handleSubmit}
    >
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
        <button className="block w-full px-3 py-2 text-white bg-blue rounded-md text-center my-6 hover:[filter:brightness(110%)] md:my-10 md:py-3 md:px-4">
          Send Message
        </button>
      </div>
    </form>
  );
}
