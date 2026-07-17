import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, User } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, Card3D, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";

const contacts = [
  { name: "Dileep Kumar", phones: ["9910138901", "7310662797"] },
  { name: "Jeevan Kisore", phones: ["9839626437"] },
];

const Contact = () => {
  return (
    <Layout>
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <motion.div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-accent/20" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} />
        <div className="container-main text-primary-foreground relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">Contact Us</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg opacity-90 max-w-xl">Get in touch with us for all your transport needs</motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contacts.map((c, i) => (
              <StaggerItem key={i}>
                <Card3D className="bg-card rounded-xl p-6 border shadow-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{c.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {c.phones.map((p, j) => (
                      <a key={j} href={`tel:${p}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4" /> {p}
                      </a>
                    ))}
                  </div>
                </Card3D>
              </StaggerItem>
            ))}
            <StaggerItem>
              <Card3D className="bg-card rounded-xl p-6 border shadow-sm h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Email</h3>
                </div>
                <a href="mailto:monuy7@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">monuy7@gmail.com</a>
              </Card3D>
            </StaggerItem>
          </StaggerContainer>

          <ScrollReveal>
            <div className="bg-section rounded-xl p-6 md:p-8 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                  <p className="text-muted-foreground">Front of TVS Showroom, Chaprolla, Gautam Buddh Nagar, Uttar Pradesh – 203207, India</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-xl overflow-hidden shadow-sm border">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14024.657042099855!2d77.50!3d28.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8a62b!2sChaprolla%2C%20Gautam%20Buddh%20Nagar!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
