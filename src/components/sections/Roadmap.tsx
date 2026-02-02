import { motion } from "framer-motion";
import { useInView } from '../../hooks/useInView';import { useRef } from "react";

const Roadmap = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const quarters = [
    {
      quarter: "Q1 2026",
      title: "MVP Development",
      items: [
        "Complete smart contracts",
        "Finish backend infrastructure",
        "Launch basic frontend",
        "Internal testing",
      ],
      status: "current",
    },
    {
      quarter: "Q2 2026",
      title: "Testnet & Community",
      items: [
        "Deploy to Stellar Testnet",
        "Public beta testing",
        "Security audits",
        "Community feedback integration",
      ],
      status: "upcoming",
    },
    {
      quarter: "Q3 2026",
      title: "Mainnet Launch",
      items: [
        "Production deployment",
        "First markets live",
        "Liquidity incentives",
        "Marketing campaign",
      ],
      status: "upcoming",
    },
    {
      quarter: "Q4 2026",
      title: "Scale & Decentralize",
      items: [
        "Advanced features",
        "Multi-outcome markets",
        "Token governance framework",
        "Community-driven expansion",
      ],
      status: "upcoming",
    },
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
          The Path <span className="gradient-text">Forward</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-cyan via-stellar-purple to-transparent"></div>

          <div className="space-y-12">
            {quarters.map((quarter, index) => {
              const isLeft = index % 2 === 0;
              const isCurrent = quarter.status === "current";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Content card */}
                  <div className="w-full md:w-5/12">
                    <div
                      className={`bg-primary-900/50 border ${
                        isCurrent
                          ? "border-accent-cyan glow-effect"
                          : "border-primary-700"
                      } rounded-xl p-6`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            isCurrent
                              ? "bg-accent-cyan/20 text-accent-cyan"
                              : "bg-gray-700 text-gray-300"
                          }`}
                        >
                          {quarter.quarter}
                        </span>
                        {isCurrent && (
                          <span className="text-xs px-2 py-1 bg-accent-green/20 text-accent-green rounded-full">
                            In Progress
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{quarter.title}</h3>
                      <ul className="space-y-2">
                        {quarter.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2 text-gray-400"
                          >
                            <span className="text-accent-cyan mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        isCurrent ? "bg-accent-cyan" : "bg-primary-600"
                      } border-4 border-primary-900`}
                    ></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-gray-500 text-sm mt-12 italic"
        >
          Timeline subject to SCF funding approval
        </motion.p>
      </div>
    </section>
  );
};

export default Roadmap;
