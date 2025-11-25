"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Clock,
  Globe,
  CheckCircle2,
  Sparkles,
  User,
  FileText,
  Calendar,
  Briefcase,
} from "lucide-react";

// Types
interface ContactInfo {
  id: number;
  title: string;
  value: string;
  icon: React.ElementType;
  href: string;
  gradient: string;
}

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: React.ElementType;
  username: string;
  color: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface Availability {
  id: number;
  day: string;
  time: string;
  available: boolean;
}

// Static Contact Data
const CONTACT_INFO: ContactInfo[] = [
  {
    id: 1,
    title: "Email",
    value: "john.doe@example.com",
    icon: Mail,
    href: "mailto:john.doe@example.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Location",
    value: "San Francisco, CA",
    icon: MapPin,
    href: "#",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Phone",
    value: "+1 (555) 123-4567",
    icon: Phone,
    href: "tel:+15551234567",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Response Time",
    value: "Within 24 hours",
    icon: Clock,
    href: "#",
    gradient: "from-orange-500 to-red-500",
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/johndoe",
    icon: Github,
    username: "@johndoe",
    color: "hover:bg-gray-900 hover:text-white",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/johndoe",
    icon: Linkedin,
    username: "John Doe",
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com/johndoe",
    icon: Twitter,
    username: "@johndoe",
    color: "hover:bg-blue-400 hover:text-white",
  },
  {
    id: 4,
    name: "Website",
    url: "https://johndoe.dev",
    icon: Globe,
    username: "johndoe.dev",
    color: "hover:bg-primary hover:text-primary-foreground",
  },
];

const FAQS: FAQ[] = [
  {
    id: 1,
    question: "What is your typical response time?",
    answer:
      "I usually respond to all inquiries within 24 hours during business days. For urgent matters, please mention it in your message.",
  },
  {
    id: 2,
    question: "Do you work on freelance projects?",
    answer:
      "Yes! I'm open to freelance opportunities, especially for interesting projects involving full-stack development or DevOps.",
  },
  {
    id: 3,
    question: "What are your hourly rates?",
    answer:
      "My rates vary depending on the project scope and complexity. Let's discuss your requirements, and I'll provide a detailed quote.",
  },
  {
    id: 4,
    question: "Can you help with existing projects?",
    answer:
      "Absolutely! I can help with code reviews, bug fixes, performance optimization, or adding new features to existing projects.",
  },
];

const AVAILABILITY: Availability[] = [
  { id: 1, day: "Monday - Friday", time: "9:00 AM - 6:00 PM PST", available: true },
  { id: 2, day: "Saturday", time: "10:00 AM - 2:00 PM PST", available: true },
  { id: 3, day: "Sunday", time: "Closed", available: false },
];

// Contact Info Card Component
interface ContactInfoCardProps {
  info: ContactInfo;
  index: number;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ info, index }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = info.icon;

  return (
    <motion.a
      ref={ref}
      href={info.href}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-card border-border hover:border-primary/30 group block rounded-2xl border p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      <div
        className={`inline-flex bg-gradient-to-br p-3 ${info.gradient} mb-4 rounded-xl transition-transform group-hover:scale-110`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-muted-foreground mb-1 text-sm font-semibold">{info.title}</h3>
      <p className="text-foreground font-bold">{info.value}</p>
    </motion.a>
  );
};

// Social Link Card Component
interface SocialLinkCardProps {
  social: SocialLink;
  index: number;
}

const SocialLinkCard: React.FC<SocialLinkCardProps> = ({ social, index }) => {
  const Icon = social.icon;

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`bg-card border-border flex items-center gap-4 rounded-xl border p-4 transition-all ${social.color}`}
    >
      <Icon className="h-6 w-6" />
      <div className="flex-1">
        <div className="font-bold">{social.name}</div>
        <div className="text-muted-foreground text-sm">{social.username}</div>
      </div>
    </motion.a>
  );
};

// FAQ Item Component
interface FAQItemProps {
  faq: FAQ;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border-border overflow-hidden rounded-xl border"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:bg-muted/50 flex w-full items-center justify-between p-6 text-left transition-colors"
      >
        <span className="text-foreground pr-4 font-bold">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <MessageSquare className="text-primary h-5 w-5" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="text-muted-foreground px-6 pb-6 leading-relaxed">{faq.answer}</div>
      </motion.div>
    </motion.div>
  );
};

// Main Component
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="from-primary/5 to-chart-3/5 absolute inset-0 bg-gradient-to-br via-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="bg-primary/10 border-primary/20 text-primary mb-4 inline-block rounded-full border px-4 py-1.5 text-sm font-bold">
              💬 Get in Touch
            </span>
            <h1 className="text-foreground mb-4 text-4xl font-black md:text-6xl">
              Let's Work Together
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Have a project in mind or just want to chat? I'd love to hear from you. Drop me a
              message and I'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_INFO.map((info, index) => (
              <ContactInfoCard key={info.id} info={info} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card border-border rounded-3xl border p-8 shadow-2xl"
              >
                <div className="mb-8">
                  <h2 className="text-foreground mb-2 text-3xl font-black">Send a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll respond within 24 hours.
                  </p>
                </div>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="font-semibold text-green-500">
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {/* FIXED: changed div → form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="text-foreground mb-2 block font-semibold">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`bg-background text-foreground placeholder:text-muted-foreground w-full rounded-xl border py-3 pr-4 pl-12 transition-all focus:ring-2 focus:outline-none ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500/50"
                            : "border-border focus:ring-primary/50"
                        }`}
                        placeholder="Your name"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="text-foreground mb-2 block font-semibold">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`bg-background text-foreground placeholder:text-muted-foreground w-full rounded-xl border py-3 pr-4 pl-12 transition-all focus:ring-2 focus:outline-none ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500/50"
                            : "border-border focus:ring-primary/50"
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="text-foreground mb-2 block font-semibold">
                      Subject *
                    </label>
                    <div className="relative">
                      <FileText className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`bg-background text-foreground placeholder:text-muted-foreground w-full rounded-xl border py-3 pr-4 pl-12 transition-all focus:ring-2 focus:outline-none ${
                          errors.subject
                            ? "border-red-500 focus:ring-red-500/50"
                            : "border-border focus:ring-primary/50"
                        }`}
                        placeholder="What is this about?"
                      />
                    </div>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="text-foreground mb-2 block font-semibold">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`bg-background text-foreground placeholder:text-muted-foreground w-full resize-none rounded-xl border px-4 py-3 transition-all focus:ring-2 focus:outline-none ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500/50"
                          : "border-border focus:ring-primary/50"
                      }`}
                      placeholder="Tell me about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-primary-foreground flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="h-5 w-5" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card border-border rounded-2xl border p-6 shadow-lg"
              >
                <div className="mb-6 flex items-center gap-2">
                  <Calendar className="text-primary h-5 w-5" />
                  <h3 className="text-foreground text-xl font-bold">Availability</h3>
                </div>
                <div className="space-y-3">
                  {AVAILABILITY.map((slot) => (
                    <div key={slot.id} className="flex items-center justify-between">
                      <div>
                        <div className="text-foreground text-sm font-semibold">{slot.day}</div>
                        <div className="text-muted-foreground text-xs">{slot.time}</div>
                      </div>
                      <div
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          slot.available
                            ? "bg-green-500/10 text-green-500"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {slot.available ? "Available" : "Closed"}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card border-border rounded-2xl border p-6 shadow-lg"
              >
                <div className="mb-6 flex items-center gap-2">
                  <Briefcase className="text-primary h-5 w-5" />
                  <h3 className="text-foreground text-xl font-bold">Connect</h3>
                </div>
                <div className="space-y-3">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLinkCard key={social.id} social={social} index={index} />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="from-primary/10 via-chart-2/10 to-chart-3/10 border-primary/20 rounded-2xl border bg-gradient-to-br p-6"
              >
                <Sparkles className="text-primary mb-4 h-8 w-8" />
                <h3 className="text-foreground mb-2 text-lg font-bold">Quick Response</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I typically respond to all inquiries within 24 hours. For urgent matters, please
                  indicate it in your message subject.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-foreground mb-4 text-3xl font-black md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
