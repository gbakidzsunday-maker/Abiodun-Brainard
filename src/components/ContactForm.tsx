import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, Phone, Send, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    eventDetails: "",
    topic: "Training Programs",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email structure.";
    }
    if (!formData.eventDetails.trim()) newErrors.eventDetails = "Please provide event details.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate an API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#F9FAFB] border-t border-zinc-200 relative px-6 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#B48C35]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-sans text-4xl md:text-5xl font-black text-zinc-900 tracking-tight uppercase leading-tight">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 to-[#B48C35]">
                the Future of Business
              </span>
            </h2>

            <p className="font-sans text-zinc-600 text-sm md:text-base font-normal leading-relaxed space-y-4">
              <span>
                Whether you're interested in corporate training, workshops, keynote sessions, business education, partnerships, or enterprise learning solutions, Brainleads Academy is ready to help.
              </span>
              <br /><br />
              <span>
                Complete the form below, and a member of our team will respond to your inquiry.
              </span>
            </p>

            {/* Quick contact list */}
            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-3 text-zinc-700">
                <Mail className="w-4.5 h-4.5 text-[#B48C35]" />
                <span className="font-mono text-xs md:text-sm font-semibold">press@brainleadsgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-700">
                <Phone className="w-4.5 h-4.5 text-[#B48C35]" />
                <span className="font-mono text-xs md:text-sm font-semibold">London Offices: +44 20 7946 0192</span>
              </div>
            </div>
          </div>

          {/* Right panel: Live form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-xl relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    id="contact-form-element"
                    key="booking-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="block font-sans text-2xs uppercase tracking-widest text-zinc-500 font-bold">
                          Full Name
                        </label>
                        <input
                          id="form-name-input"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full font-sans text-xs md:text-sm bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl outline-none text-zinc-900 focus:bg-white focus:border-[#B48C35] transition-colors"
                        />
                        {errors.name && (
                          <p id="error-name" className="text-red-500 text-2xs font-sans">{errors.name}</p>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="block font-sans text-2xs uppercase tracking-widest text-zinc-500 font-bold">
                          Email Address
                        </label>
                        <input
                          id="form-email-input"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full font-sans text-xs md:text-sm bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl outline-none text-zinc-900 focus:bg-white focus:border-[#B48C35] transition-colors"
                        />
                        {errors.email && (
                          <p id="error-email" className="text-red-500 text-2xs font-sans">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Company input */}
                      <div className="space-y-2">
                        <label className="block font-sans text-2xs uppercase tracking-widest text-zinc-500 font-bold">
                          Company / Organization
                        </label>
                        <input
                          id="form-company-input"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="E.g., Flight Story"
                          className="w-full font-sans text-xs md:text-sm bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl outline-none text-zinc-900 focus:bg-white focus:border-[#B48C35] transition-colors"
                        />
                      </div>

                      {/* Topic dropdown */}
                      <div className="space-y-2">
                        <label className="block font-sans text-2xs uppercase tracking-widest text-zinc-500 font-bold">
                          Inquiry Topic
                        </label>
                        <select
                          id="form-topic-select"
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full font-sans text-xs md:text-sm bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl outline-none text-zinc-900 focus:bg-white focus:border-[#B48C35] transition-colors cursor-pointer appearance-none"
                        >
                          <option value="Training Programs">Training Programs</option>
                          <option value="Keynote Speaking">Keynote Speaking</option>
                          <option value="Workshops & Seminars">Workshops & Seminars</option>
                          <option value="Business Consulting">Business Consulting</option>
                          <option value="Podcast & Media Inquiries">Podcast & Media Inquiries</option>
                          <option value="General Inquiries">General Inquiries</option>
                        </select>
                      </div>
                    </div>

                    {/* Details input */}
                    <div className="space-y-2">
                      <label className="block font-sans text-2xs uppercase tracking-widest text-zinc-500 font-bold">
                        More details
                      </label>
                      <textarea
                        id="form-details-input"
                        rows={4}
                        value={formData.eventDetails}
                        onChange={(e) => setFormData({ ...formData, eventDetails: e.target.value })}
                        placeholder="Tell us about your inquiry and any other relevant details"
                        className="w-full font-sans text-xs md:text-sm bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl outline-none text-zinc-900 focus:bg-white focus:border-[#B48C35] transition-colors resize-none"
                      />
                      {errors.eventDetails && (
                        <p id="error-details" className="text-red-500 text-2xs font-sans">{errors.eventDetails}</p>
                      )}
                    </div>

                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 bg-[#B48C35] hover:bg-[#B48C35]/90 text-white font-sans font-bold text-xs tracking-wider uppercase py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      {isSubmitting ? (
                        <span className="font-sans animate-pulse">Securing Booking Connection...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    id="contact-success-panel"
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#B48C35]/10 border border-[#B48C35]/25 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-[#B48C35]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans text-2xl font-extrabold text-zinc-900 uppercase tracking-tight">
                        Inquiry Received
                      </h3>
                      <p className="font-sans text-zinc-600 text-xs md:text-sm font-normal max-w-sm mx-auto leading-relaxed">
                        Thank you, <span className="text-zinc-900 font-bold">{formData.name}</span>. Your proposal regarding <span className="text-zinc-950 font-bold">{formData.topic}</span> has been dispatched securely to Abiodun's management team.
                      </p>
                    </div>

                    <button
                      id="success-back-btn"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", company: "", eventDetails: "", topic: "Speaking Event" });
                      }}
                      className="flex items-center space-x-1 text-xs text-[#B48C35] font-sans uppercase font-bold tracking-wider hover:text-zinc-950 transition-colors"
                    >
                      <span>Submit another proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
