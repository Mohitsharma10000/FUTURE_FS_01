import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, MapPin, Send, Phone, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { EMAILJS_CONFIG, isEmailConfigured } from "@/config/emailConfig";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mohitsharma14651@gmail.com",
    href: "mailto:mohitsharma14651@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9958012531",
    href: "tel:+919958012531",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Mohitsharma10000",
    href: "https://github.com/Mohitsharma10000",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mohit-sharma-156073329",
    href: "https://www.linkedin.com/in/mohit-sharma-156073329",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ghaziabad, UP, India",
    href: "#",
  },
];

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email address").max(120),
  subject: z.string().trim().min(2, "Please add a subject").max(120),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    if (!isEmailConfigured()) {
      toast.error("Contact form isn't fully set up yet.", {
        description:
          "Please reach out directly via email or phone below — the site owner still needs to add EmailJS keys.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      );

      toast.success("Message sent!", {
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast.error("Something went wrong.", {
        description: "Please try again, or email me directly instead.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-secondary/20">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div ref={ref} className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-primary font-mono text-sm uppercase tracking-widest"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            >
              Let's <span className="text-gradient">Connect</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg"
            >
              Feel free to reach out if you'd like to discuss potential collaborations or just want to say hi!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact info cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="glass-card rounded-2xl p-8 md:p-10 h-full"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-8 text-center"
              >
                <a
                  href="mailto:mohitsharma14651@gmail.com"
                  className="inline-flex items-center gap-2 btn-glow px-8 py-4 rounded-xl font-semibold text-primary-foreground transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Me an Email
                </a>
              </motion.div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="glass-card rounded-2xl p-8 md:p-10"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="bg-secondary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            className="bg-secondary/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What's this about?" className="bg-secondary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me a bit about your project or opportunity..."
                            className="bg-secondary/50 min-h-[140px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-glow w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-primary-foreground transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </Form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
