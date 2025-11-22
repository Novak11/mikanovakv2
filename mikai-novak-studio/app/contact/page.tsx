"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, ChevronRight, ChevronLeft } from "lucide-react";
import { Container } from "@/app/components/layout";
import { Button, Input, Textarea, Select } from "@/app/components/ui";
import { siteConfig } from "@/app/lib/constants";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "photography-wedding", label: "Wedding Photography" },
  { value: "photography-event", label: "Event Photography" },
  { value: "photography-portrait", label: "Portrait Photography" },
  { value: "photography-interior", label: "Interior Photography" },
  { value: "video-commercial", label: "Commercial Video" },
  { value: "video-music", label: "Music Video" },
  { value: "video-documentary", label: "Documentary" },
  { value: "video-corporate", label: "Corporate Video" },
  { value: "both", label: "Both Photo & Video" },
  { value: "other", label: "Other / Not Sure" },
];

const budgetOptions = [
  { value: "", label: "Select budget range" },
  { value: "under-500", label: "Under 500€" },
  { value: "500-1000", label: "500€ - 1,000€" },
  { value: "1000-2500", label: "1,000€ - 2,500€" },
  { value: "2500-5000", label: "2,500€ - 5,000€" },
  { value: "5000-plus", label: "5,000€+" },
  { value: "flexible", label: "Flexible / Not Sure" },
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    eventDate: "",
    eventLocation: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  if (isSuccess) {
    return (
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="font-heading text-3xl font-bold text-primary-900 mb-4">
              Message Sent!
            </h1>
            <p className="text-primary-600 mb-8">
              Thank you for reaching out. We'll get back to you within 24 hours
              to discuss your project.
            </p>
            <Button onClick={() => window.location.reload()}>
              Send Another Message
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mt-3 mb-6">
              Let's Work Together
            </h1>
            <p className="text-lg text-primary-600">
              Have a project in mind? Fill out the form below and we'll get back
              to you within 24 hours.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-bold text-primary-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">Phone</h3>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-primary-600 hover:text-accent-600 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-primary-600 hover:text-accent-600 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">Location</h3>
                    <p className="text-primary-600">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.postalCode}
                      <br />
                      {siteConfig.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                          step >= s
                            ? "bg-accent-500 text-white"
                            : "bg-primary-200 text-primary-500"
                        }`}
                      >
                        {step > s ? <Check className="w-5 h-5" /> : s}
                      </div>
                      {s < 3 && (
                        <div
                          className={`w-16 sm:w-24 h-1 mx-2 rounded transition-colors ${
                            step > s ? "bg-accent-500" : "bg-primary-200"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Contact Info */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary-900 mb-4">
                        Contact Information
                      </h3>
                      <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                      />
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+381 69 123 4567"
                      />
                    </div>
                  )}

                  {/* Step 2: Project Details */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary-900 mb-4">
                        Project Details
                      </h3>
                      <Select
                        label="Service Interest"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        options={serviceOptions}
                        required
                      />
                      <Input
                        label="Event Date (if applicable)"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                      />
                      <Input
                        label="Event Location"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        placeholder="Belgrade, Serbia"
                      />
                    </div>
                  )}

                  {/* Step 3: Message */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary-900 mb-4">
                        Your Message
                      </h3>
                      <Select
                        label="Budget Range"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        options={budgetOptions}
                      />
                      <Textarea
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, vision, and any specific requirements..."
                        rows={5}
                        required
                      />
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={prevStep}
                      disabled={step === 1}
                      leftIcon={<ChevronLeft className="w-5 h-5" />}
                    >
                      Back
                    </Button>
                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        rightIcon={<ChevronRight className="w-5 h-5" />}
                      >
                        Continue
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        isLoading={isSubmitting}
                        rightIcon={<Send className="w-5 h-5" />}
                      >
                        Send Message
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
