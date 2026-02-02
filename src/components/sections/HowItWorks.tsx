import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { useRef } from 'react';
import { Wallet, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Wallet,
      title: 'Connect & Fund',
      description: 'Connect your Stellar wallet. Approve USDC spending once. Your funds stay in your wallet until trades execute.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Browse & Trade',
      description: 'Explore markets on elections, sports, economics. Place orders via our CLOB engine. Get instant execution with Stellar\'s sub-5-second finality.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CheckCircle,
      title: 'Resolve & Settle',
      description: 'Markets resolve via verified oracles or community voting. Winnings automatically distributed. All on-chain, all transparent.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Trade with <span className="gradient-text">Confidence</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="relative"
            >
              <div className="bg-primary-800/50 border border-primary-700 rounded-xl p-8 h-full hover:border-accent-cyan/50 transition-colors">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${step.color} mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow connector (hidden on mobile, last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-accent-cyan" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Documentation link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <a
            href="https://github.com/vatix-protocol/vatix-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-cyan/80 transition-colors font-semibold"
          >
            Read Technical Documentation
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;