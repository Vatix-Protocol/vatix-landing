import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { useRef } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // const futureRoles = [
  //   'Senior Soroban developer',
  //   'Full-stack engineer',
  //   'Security specialist',
  //   'Community manager'
  // ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Built by <span className="gradient-text">Experienced Developers</span>
        </motion.h2>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary-800/50 border border-primary-700 rounded-xl p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Avatar placeholder */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-cyan to-stellar-purple flex items-center justify-center text-4xl font-bold flex-shrink-0">
              H
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Habib</h3>
              <p className="text-accent-cyan font-semibold mb-4">
                Founder & Lead Developer
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Full-stack developer with expertise in blockchain, backend systems, and
                distributed architecture. Building Vatix full-time with plans to expand
                the team post-funding.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/manlikeHB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-900/50 rounded-lg hover:bg-primary-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/manlikehb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-900/50 rounded-lg hover:bg-primary-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/manlikeHB_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-900/50 rounded-lg hover:bg-primary-700 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Team */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-stellar-purple/10 to-accent-cyan/10 border border-stellar-purple/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Expanding Post-Funding</h3>
          <p className="text-gray-400 mb-6">We're planning to recruit:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {futureRoles.map((role, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-900/50 border border-primary-700 rounded-lg text-sm"
              >
                {role}
              </span>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Team;