import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Network, ShieldCheck, Clock, MapPin, Phone, Star, ArrowRight, Package, Wheat, Factory } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-trucks.jpg";
import truckHeavy from "@/assets/truck-heavy.jpg";
import truckContainer from "@/assets/truck-container.jpg";
import truckGoods from "@/assets/truck-goods.jpg";
import Layout from "@/components/Layout";
import { ScrollReveal, Card3D, FloatingElement, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";
import { useRef } from "react";

const features = [
  { icon: Network, title: "Nationwide Transport Network", desc: "Connected across all major cities and towns in India" },
  { icon: Truck, title: "Professional Transport Contractors", desc: "Experienced team ensuring quality service every time" },
  { icon: ShieldCheck, title: "Fast and Secure Delivery", desc: "Your goods delivered safely and on time, guaranteed" },
];

const services = [
  { icon: Truck, title: "Truck Transportation", desc: "Full and partial load truck transport services across India" },
  { icon: Package, title: "Commission Agent Services", desc: "Connecting truck owners with businesses for efficient logistics" },
  { icon: Wheat, title: "Agricultural Goods Transport", desc: "Specialized transport for farm produce and agricultural equipment" },
  { icon: Factory, title: "Industrial Logistics", desc: "Heavy cargo and industrial freight transportation solutions" },
];

const whyUs = [
  "Experienced transport contractors",
  "Competitive pricing",
  "Strong transport network",
  "Reliable service",
  "Safe goods delivery",
];

const testimonials = [
  { name: "Rajesh Sharma", location: "Delhi", text: "Excellent service! They delivered my goods on time and at a very reasonable price. Highly recommended.", rating: 5 },
  { name: "Amit Gupta", location: "Lucknow", text: "M.S. Yadav Transport has been our trusted logistics partner for 3 years. Very professional and reliable.", rating: 5 },
  { name: "Suresh Patel", location: "Noida", text: "Great experience with their agricultural goods transport. The team handles cargo with utmost care.", rating: 5 },
];

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* Hero with Parallax */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={heroImage} alt="Transport trucks on Indian highway" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-foreground/60" />
        </motion.div>
        <motion.div className="relative container-main text-background" style={{ opacity: heroOpacity }}>
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Reliable Transport Solutions Across India
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl opacity-90 mb-8"
            >
              Fast, Safe and Trusted Goods Transportation Services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/book">
                <Button size="lg" className="text-base px-8">Book Transport</Button>
              </Link>
              <a href="tel:9910138901">
                <Button size="lg" variant="hero" className="text-base px-8">
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Floating 3D truck icon */}
          <FloatingElement className="absolute right-10 bottom-10 hidden lg:block" y={20}>
            <div className="w-20 h-20 rounded-2xl bg-background/10 backdrop-blur-md flex items-center justify-center border border-background/20">
              <Truck className="w-10 h-10 text-background" />
            </div>
          </FloatingElement>
        </motion.div>
      </section>

      {/* Features */}
      <section className="section-padding bg-section">
        <div className="container-main">
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <StaggerItem key={i}>
                <Card3D className="bg-card rounded-xl p-8 shadow-sm text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <f.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </Card3D>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive transportation and logistics solutions tailored to your needs</p>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <Card3D className="bg-card rounded-xl p-6 border hover:border-primary/30 transition-all group h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </Card3D>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal className="text-center mt-8" delay={0.3}>
            <Link to="/services">
              <Button variant="outline" className="gap-2">View All Services <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="section-padding bg-section">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Fleet</h2>
            <p className="text-muted-foreground">Modern and well-maintained vehicles for every transport need</p>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {[
              { img: truckHeavy, label: "Heavy Trucks" },
              { img: truckContainer, label: "Container Trucks" },
              { img: truckGoods, label: "Goods Carriers" },
            ].map((t, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="rounded-xl overflow-hidden shadow-sm group border"
                  whileHover={{ y: -8, rotateY: 3, boxShadow: "0 25px 50px -12px rgba(30, 99, 255, 0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={t.img} alt={t.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 bg-card">
                    <h3 className="font-semibold text-center">{t.label}</h3>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg"
                whileHover={{ rotateY: -5, rotateX: 3 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ transformStyle: "preserve-3d", perspective: 800 }}
              >
                <img src={truckContainer} alt="Container truck on highway" className="w-full h-full object-cover" />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-section">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Clients Say</h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <Card3D className="bg-card rounded-xl p-6 shadow-sm h-full">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {t.location}
                    </p>
                  </div>
                </Card3D>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-accent/10"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <div className="container-main text-center text-primary-foreground relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Transport Service Today?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Get in touch with us for reliable and affordable goods transportation services</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book">
                <Button size="lg" variant="hero" className="text-base px-8">Book Now</Button>
              </Link>
              <a href="tel:9910138901">
                <Button size="lg" variant="hero" className="text-base px-8">
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
