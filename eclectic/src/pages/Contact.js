import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import contact from "../assets/contactIcon.png";
import emailIcon from "../assets/emailIcon.svg";
import phoneIcon from "../assets/phoneIcon.svg";
import locationIcon from "../assets/locationIcon.svg";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be numeric")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch(
        "https://backend-urbanbazaar.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      resetForm();
      setIsSubmitted(true);
      setNotification(
        "Your message has been submitted successfully. Our team will get back to you shortly!"
      );

      // Delay navigation to allow time for the notification to show
      setTimeout(() => {
        navigate("/");
      }, 3500);
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <div className="w-full max-w-screen-lg bg-contactBlue shadow-md rounded-md overflow-hidden mb-8">
        <div className="md:flex">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-8 bg-[#DAEFFA]">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
              Book a Consultation with The Eclectic Team!
            </h1>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              We can't wait to build something great together.
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Enter your name
                    </label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Enter your email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  {/* Phone Number Component */}
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Enter your phone number
                    </label>
                    <Field
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Your phone number"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Enter your message
                    </label>
                    <Field
                      id="message"
                      name="message"
                      as="textarea"
                      placeholder="Your message"
                      rows="4"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
            {/* Success message */}
            {isSubmitted && (
              <p className="text-green-600 mt-4">Submitted successfully ✅</p>
            )}
          </div>
          {/* Contact Information */}
          <div
            className="relative w-full md:w-1/2 p-8 rounded overflow-hidden"
            style={{ backgroundColor: "transparent" }}
          >
            {/* Blurred background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${contact})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.8, // Set opacity to reduce the background visibility
                zIndex: 1, // Ensure the background stays behind the content
              }}
            ></div>

            {/* Content with z-index of 10 */}
            <div
              className="relative flex flex-col gap-10"
              style={{ zIndex: 100 }}
            >
              <div>
                <h3 className="font-bold text-lg text-black">
                  Our Company Location
                </h3>

                <p className="flex items-center gap-2">
                  <img src={locationIcon} alt="Location Icon" />
                  LANGATA ROAD, BUILDING: MARULA KAREN
                </p>

                <p className="flex items-center gap-2">
                  <img src={locationIcon} alt="Location Icon" />
                  Postal Address P.O. Box 9401-20100, Karen Nairobi, Kenya
                </p>
              </div>

              <div className="relative top-10">
                <h3 className="font-bold text-lg text-gray-800 mt-10">
                  Phone Number
                </h3>
                <p className="text-black-500 underline underline-offset-2 flex flex-row gap-2">
                  <img src={phoneIcon} alt="Phone Icon" />
                  +254722 528 240
                </p>
              </div>

              <div className="relative top-10">
                <h3 className="font-bold text-lg text-gray-800">
                  Email Address
                </h3>
                <p className="text-black-500 underline underline-offset-2 flex items-center gap-2">
                  <img src={emailIcon} alt="Email Icon" />
                  info@eclectic-ds.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {notification && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-center bg-green-500 text-white p-4 rounded-lg shadow-lg">
          {notification}
        </div>
      )}
    </div>
  );
};

export default Contact;
