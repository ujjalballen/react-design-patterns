import { useState } from "react";

const ControlledForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  console.log(form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", form);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-2xl p-2 my-3"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        className="border rounded-2xl p-2 my-3"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your message"
      />
      <button className="bg-purple-500 text-white p-1 rounded" type="submit">
        Send Feedback
      </button>
    </form>
  );
};

export default ControlledForm;
