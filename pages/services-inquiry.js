import React, { useState } from "react";
import { Umbrella, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

const ServicesInquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
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
          formType: "services",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          description: "",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Umbrella className="text-yellow-400" size={32} strokeWidth={2.5} />
              <span className="text-lg md:text-xl font-bold text-white">
                Yellow Umbrella
              </span>
            </div>
            <Link href="/">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200">
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Sparkles className="text-yellow-400" size={48} strokeWidth={2} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Let's Build Your Dream Project
            </h1>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          {/* Form */}
          <div className="bg-slate-800 border border-slate-700 p-8 md:p-12 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                >
                  <option value="">Select a project type</option>
                  <option value="mobile-game">Mobile Game</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="website">Website</option>
                  <option value="multiple">Multiple Projects</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Budget and Timeline Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Expected Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="6-plus-months">6+ Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project idea, goals, target audience, and any specific features you have in mind..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-500/10 border border-green-500 text-green-400 px-6 py-4 rounded-lg text-center">
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-500/10 border border-red-500 text-red-400 px-6 py-4 rounded-lg text-center">
                  Oops! Something went wrong. Please try again or email us directly at yoni7022@gmail.com
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Prefer to email us directly?{" "}
              <a
                href="mailto:yoni7022@gmail.com"
                className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
              >
                yoni7022@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesInquiry;
