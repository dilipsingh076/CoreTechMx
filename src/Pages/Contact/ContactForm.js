import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Toaster from "../../components/Toaster";
import Loader from "../../components/Loader";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });
  const [loading, setLoading] = useState(false);

  const [showToaster, setShowToaster] = useState(false);
  const [feedback, setFeedback] = useState("");
  const onSubmit = async (data) => {
    setLoading(true);
    setFeedback("");

    try {
      // Send the user's message
      const result = await emailjs.send(
        "service_x2cwwzk",
        "template_4gf555p",
        data,
        "N6_15w_1HI4wXfvXA"
      );
      console.log("Message sent:", result.text);

      // Prepare data for auto-reply
      const autoReplyData = {
        from_name: data.name,
        message: data.message,
        reply_to: data.email,
      };

      // Send the auto-reply
      const replyResult = await emailjs.send(
        "service_x2cwwzk",
        "template_0kck52g",
        autoReplyData,
        "N6_15w_1HI4wXfvXA"
      );
      console.log("Auto-reply sent:", replyResult.text);

      // Reset form fields after submission
      reset();
      setFeedback("Message sent successfully!");
      setShowToaster(true);
    } catch (error) {
      console.error("Error sending emails:", error);
      setFeedback("Something went wrong. Please try again.");
      setShowToaster(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showToaster && (
        <Toaster
          message={feedback}
          onClose={() => setShowToaster(false)}
          type={feedback.includes("successfully") ? "success" : "error"}
        />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl mx-auto p-8 bg-gray-800 text-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">CONTACT</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className={`w-full p-3 rounded bg-white text-gray-800 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:border-[#0094E8] focus:outline-none`}
            />
            {errors.name && (
              <span className="block text-left text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Phone"
              {...register("phone", { required: "Phone is required" })}
              className={`w-full p-3 rounded bg-white text-gray-800 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:border-[#0094E8] focus:outline-none`}
            />
            {errors.phone && (
              <span className="block text-left text-red-500 text-sm mt-1">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              {...register("email", { required: "Email is required" })}
              className={`w-full p-3 rounded bg-white text-gray-800 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:border-[#0094E8] focus:outline-none`}
            />
            {errors.email && (
              <span className="block text-left text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div className="relative mb-4">
          <textarea
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
            className={`w-full p-3 rounded bg-white text-gray-800 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:border-[#0094E8] focus:outline-none`}
          ></textarea>
          {errors.message && (
            <span className="block text-left text-red-500 text-sm mt-1">
              {errors.message.message}
            </span>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={`px-6 py-3 w-48 h-12 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed relative ${
              loading || !isValid
                ? "bg-gray-600 text-gray-200"
                : "bg-[#0094E8] text-white"
            }`}
            disabled={!isValid || loading}
          >
            {loading ? (
              <Loader size={48} color="#0094E8" />
            ) : (
              "CONTACT US"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;

{
  /* <div className="text-center">
                    <button
                        type="submit"
                        className={`px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed relative`}
                        disabled={!isValid || loading}
                    >
                        {loading ? (
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#0094E8" stroke-width="11" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
                        ) : (
                            'CONTACT US'
                        )}
                    </button>
                </div> */
}
