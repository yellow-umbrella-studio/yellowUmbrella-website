import React, { useState } from "react";
import { Mail } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "contact",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 scroll-fade-in">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 text-lg scroll-fade-in">
            We would love to hear from you!
          </p>
        </div>

        {/* Email Display */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200 mb-8 scroll-fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 text-xl">
            <Mail className="text-yellow-500" size={28} />
            <a
              href="mailto:yoni7022@gmail.com"
              className="font-semibold text-slate-900 hover:text-yellow-600 transition-colors duration-200"
            >
              yoni7022@gmail.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-slate-200 scroll-fade-in">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Send us a message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-300 text-green-700 px-6 py-4 rounded-lg text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-300 text-red-700 px-6 py-4 rounded-lg text-center">
                Oops! Something went wrong. Please try again or email us
                directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
