import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-black py-20 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
  Get In{" "}
  <span className="bg-gradient-to-r from-[#7379e5] to-[#212785] bg-clip-text text-transparent">
    Touch with us
  </span>
</h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help
            bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-black/95 p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl  text-white mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className="w-full rounded-md px-3 py-2 bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full rounded-md px-3 py-2 bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full rounded-md px-3 py-2 bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#7379e5] to-[#212785] hover:bg-blue-700 text-white font-medium py-3 flex items-center justify-center rounded-md"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8">
                We're here to help and answer any question you might have. We
                look forward to hearing from you.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-[#7379e5] to-[#212785] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-400">business@kolacommunications.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-[#7379e5] to-[#212785] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">+91-8108969630</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-[#7379e5] to-[#212785] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Office</h4>
                  <p className="text-gray-400">India</p>
                </div>
              </div>
            </div>

        
          </div>
        </div>
      </div>
    </section>
  );
}
