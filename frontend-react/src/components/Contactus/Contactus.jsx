import {React, useState}  from "react";
import { useForm } from "react-hook-form";
import "./Contactus.css";

const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [formMessage, setFormMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/contact/contactsubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessageType("success");
        setFormMessage("✅ Submitted Successfully!");
        reset();
      } else {
        setMessageType("error");
        setFormMessage("❌ Failed to submit");
      }
    } catch (error) {
      setMessageType("error");
      setFormMessage("❌ Something went wrong!");
    }

    setTimeout(() => {
      setFormMessage("");
    }, 5000);
  };

  return (
    <div className="contact-start">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group2">
            <label>Name</label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "❌ Numbers are not allowed",
                },
              })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group2">
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "❌ Enter a valid email address",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group2">
            <label>Subject</label>
            <input
              type="text"
              {...register("subject", {
                required: "Subject is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "❌ Numbers or Special Characters are not allowed",
                },
              })}
            />
            {errors.subject && <p className="error">{errors.subject.message}</p>}
          </div>

          <div className="form-group2">
            <label>Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && <p className="error">{errors.message.message}</p>}
          </div>

          <button disabled = {isSubmitting} id="button" type="submit">Send</button>

          {formMessage && (
            <div className={`form-message ${messageType}`}>
              {formMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contactus;
