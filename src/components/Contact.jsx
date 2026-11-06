
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll contact you soon.",
      });

      form.current.reset();

    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message: "Failed to send message. Please try again!",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="Contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-[#B92B27]">Touch</span>
          </h1>

          <p className="mb-2">
            Have a Project in mind or want to discuss potential opportunities.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <input
                  type="text"
                  name="from_name"
                  className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
                  placeholder="Name"
                  required
                  maxLength={100}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="from_email"
                  className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
                  placeholder="Email"
                  required
                  maxLength={254}
                />
              </div>

            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                name="subject"
                className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
                placeholder="Subject"
                required
                maxLength={150}
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                className="px-4 py-3 w-full h-40 border border-zinc-500 rounded outline-none"
                placeholder="Message"
                required
                maxLength={5000}
              />
            </div>

            {/* Success / Error Message */}
            {status.message && (
              <div
                role="status"
                aria-live="polite"
                className={`text-center font-medium p-3 rounded ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex items-center justify-center">

              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-8 py-4 bg-zinc-800 text-white text-center cursor-pointer hover:bg-zinc-900 transition rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && <FaArrowRight />}
              </button>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
