import { motion } from "framer-motion";
import { useInView } from '../../hooks/useInView';
import { useRef } from "react";
import { Zap, DollarSign, Building2, Wrench, Globe, Unlock } from "lucide-react";

const WhyStellar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: "Fast Finality",
      description: "Sub-5-second settlement. Perfect for betting UX.",
    },
    {
      icon: DollarSign,
      title: "Minimal Fees",
      description: "~$0.00001 per transaction. Enables microbetting.",
    },
    {
      icon: Building2,
      title: "Native USDC",
      description: "Largest stablecoin on Stellar. Seamless integration.",
    },
    {
      icon: Wrench,
      title: "Production-Ready",
      description: "Soroban smart contracts. Mature tooling & ecosystem.",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Efficient cross-border payments. Worldwide user base.",
    },
    {
      icon: Unlock,
      title: "Open Source",
      description: "Built transparently. Community auditable.",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-primary-900 via-primary-800/50 to-primary-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Built on <span className="gradient-text">Stellar</span> for a Reason
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto"
        >
          Stellar's blockchain provides the perfect foundation for high-frequency
          prediction markets
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-primary-800/30 border border-primary-700 rounded-xl p-6 hover:border-stellar-purple/50 transition-colors"
            >
              <div className="inline-flex p-3 rounded-lg bg-stellar-purple/20 mb-4">
                <benefit.icon className="w-6 h-6 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStellar;
