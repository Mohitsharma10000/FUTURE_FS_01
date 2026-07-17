import Layout from "@/components/Layout";
import { Target, Shield, Network, Heart } from "lucide-react";
import { motion } from "framer-motion";
import aboutTeam from "@/assets/about-team.jpg";
import truckContainer from "@/assets/truck-container.jpg";
import { ScrollReveal, Card3D, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <motion.div
          className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-accent/20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container-main text-primary-foreground relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg opacity-90 max-w-xl"
          >
            Your trusted transport contractors & commission agents since years
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-main grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              M.S. Yadav Transport Service is a leading transport contractor and commission agent based in Chaprolla, Gautam Buddh Nagar, Uttar Pradesh. We specialize in connecting businesses with reliable transportation solutions across India.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded by Dileep Kumar and Jeevan Kisore, our company has built a reputation for providing fast, safe, and affordable goods transportation services. We serve a wide range of industries including agriculture, manufacturing, and retail.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              whileHover={{ rotateY: -5, rotateX: 3 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ transformStyle: "preserve-3d", perspective: 800 }}
            >
              <img src={aboutTeam} alt="Our professional team" className="w-full h-full object-cover" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section">
        <div className="container-main">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide reliable, affordable, and timely goods transportation services across India." },
              { icon: Network, title: "Our Network", desc: "A strong nationwide network of trusted drivers, truck owners, and logistics partners." },
              { icon: Shield, title: "Safety First", desc: "We prioritize the safety of your goods with careful handling and secure transport." },
              { icon: Heart, title: "Our Commitment", desc: "Dedicated to building long-term relationships through consistent quality and trust." },
            ].map((v, i) => (
              <StaggerItem key={i}>
                <Card3D className="bg-card rounded-xl p-6 shadow-sm text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </Card3D>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Transport Network */}
      <section className="section-padding">
        <div className="container-main grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" className="order-2 md:order-1">
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              whileHover={{ rotateY: 5, rotateX: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ transformStyle: "preserve-3d", perspective: 800 }}
            >
              <img src={truckContainer} alt="Transport network" className="w-full h-full object-cover" />
            </motion.div>
          </ScrollReveal>
          <ScrollReveal direction="right" className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">Our Transport Network</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With years of experience in the logistics industry, we have developed a vast network of transport routes covering all major cities and towns across Uttar Pradesh and India.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our fleet of well-maintained vehicles and experienced drivers ensures that your goods reach their destination safely and on time, every time.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
