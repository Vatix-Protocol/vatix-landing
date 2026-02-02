import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stellar-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-primary-800/50 rounded-full border border-primary-700">
            🔒 Open Source (MIT License)
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary-800/50 rounded-full border border-primary-700">
            ⚡ Built on Stellar
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary-800/50 rounded-full border border-primary-700">
            🏗️ Currently in Development
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Bet on Reality.
          <br />
          <span className="gradient-text">Built on Transparency.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          The first fully open-source prediction market on Stellar blockchain.
          Trade on real-world events with complete transparency and community governance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#waitlist"
            className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-stellar-purple text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 glow-effect w-full sm:w-auto justify-center"
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <a
            href="https://github.com/vatix-protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary-800 border border-primary-700 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        </motion.div>

        {/* Visual element - Abstract visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Placeholder for visualization - can be replaced with actual chart/UI preview */}
            <div className="bg-gradient-to-br from-primary-800/50 to-primary-700/30 rounded-2xl border border-primary-600 p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="h-4 bg-accent-cyan/30 rounded w-3/4"></div>
                  <div className="h-4 bg-accent-cyan/20 rounded w-full"></div>
                  <div className="h-4 bg-accent-cyan/10 rounded w-2/3"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-stellar-purple/30 rounded w-2/3"></div>
                  <div className="h-4 bg-stellar-purple/20 rounded w-full"></div>
                  <div className="h-4 bg-stellar-purple/10 rounded w-3/4"></div>
                </div>
              </div>
              <div className="mt-6 text-center text-gray-400 text-sm">
                Transparent Order Book • Real-time Settlement • Community Governed
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;