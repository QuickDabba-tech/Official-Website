import { React, useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const [chefFormMessage, setChefFormMessage] = useState("");
  const [chefMessageType, setChefMessageType] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/chef/chefsubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setChefMessageType("success");
        setChefFormMessage("✅ Submitted Successfully!");
        reset();
      } else {
        setChefMessageType("error");
        setChefFormMessage("❌ Failed to submit");
      }
    } catch (error) {
      setChefMessageType("error");
      setChefFormMessage("❌ Something went wrong!");
    }

    setTimeout(() => {
      setChefFormMessage("");
    }, 5000);
  };

  return (
    <div className="form-start">
      <div className="form-container">
        <h2>Join With Us As A Home Chef</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div>
              <input
                type="text"
                placeholder="Name"
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

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
          </div>

          <div className="form-group">
            <div>
              <input
                type="text"
                placeholder="Address"
                {...register("address", {
                  required: "Address is required",
                  validate: (value) => {
                    const onlyNumbers = /^\d+$/;
                    const onlySpecialChars = /^[^a-zA-Z0-9]+$/;
                    if (onlyNumbers.test(value)) {
                      return "❌ Only numbers are not allowed";
                    }
                    if (onlySpecialChars.test(value)) {
                      return "❌ Only special characters are not allowed";
                    }
                    return true;
                  },
                })}
              />
              {errors.address && <p className="error">{errors.address.message}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Contact Number"
                {...register("contact", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit number",
                  },
                })}
              />
              {errors.contact && <p className="error">{errors.contact.message}</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="State">
              <select {...register("state", { required: "State is required" })}>
                <option value="">Select State</option>
                <option value="Delhi">Delhi</option>
              </select>
              {errors.state && <p className="error">{errors.state.message}</p>}
            </div>

            <div className="City">
              <select {...register("city", { required: "City is required" })}>
                <option value="">Select City</option>
                <option value="New Delhi">New Delhi</option>
              </select>
              {errors.city && <p className="error">{errors.city.message}</p>}
            </div>
          </div>


          <button disabled={isSubmitting} type="submit" className="submit-btn">Submit</button>

          {chefFormMessage && (
            <div className={`chefform-message ${chefMessageType}`}>
              {chefFormMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;