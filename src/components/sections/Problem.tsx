import { motion } from "framer-motion";
import { useInView } from '../../hooks/useInView';
import { useRef } from "react";
import { X, Check } from "lucide-react";

const Problem = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    "Centralized control and opaque operations",
    "Users must trust platform with funds",
    "Black-box market resolution",
    "Closed-source smart contracts",
    "No community governance",
  ];

  const solutions = [
    "Fully open-source codebase",
    "Non-custodial (funds in your wallet)",
    "Transparent on-chain settlement",
    "Community-driven resolution",
    "Progressive decentralization roadmap",
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-primary-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Prediction Markets Need <span className="gradient-text">Transparency</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-900/50 border border-red-900/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-red-400">
              Current Platforms Have Issues:
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary-900/50 border border-accent-cyan/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent-cyan">
              Vatix Solves This:
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Supporting stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary-800/50 to-primary-700/50 border border-primary-600 rounded-xl p-8 text-center"
        >
          <p className="text-xl md:text-2xl text-gray-200 italic">
            "Polymarket reached $5.8B in trading volume in 2024, but operates as a black
            box.{" "}
            <span className="text-accent-cyan font-semibold">
              The market wants transparency.
            </span>
            "
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
