import React from "react";
import "./Form.css";

export default function Form() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "57b48b0c-0021-4e17-8916-d91c7c09b6a2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" name="name" required placeholder="Enter your name" />
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          required
          placeholder="Enter your phone number"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter you email"
        />
        <label>Please enter your message...</label>
        <textarea name="message" rows={6} required></textarea>

        <button type="submit" className="btn dark-btn">
          Submit Form
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
}
