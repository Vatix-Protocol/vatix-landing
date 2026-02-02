import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { useRef, useState, useEffect } from 'react';
import { Github, Star, GitFork, GitCommit, AlertCircle } from 'lucide-react';

const OpenSource = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // State for GitHub stats (you'll replace with actual API calls)
  const [stats, setStats] = useState({
    stars: 0,
    forks: 0,
    contributors: 0,
    commits: 0
  });

  useEffect(() => {
    // TODO: Replace with actual GitHub API calls
    // Example: fetch('https://api.github.com/repos/vatix-protocol/vatix-backend')
    setStats({
      stars: 12,
      forks: 3,
      contributors: 2,
      commits: 150
    });
  }, []);

  const repositories = [
    {
      name: 'vatix-contracts',
      description: 'Soroban smart contracts (Rust)',
      url: 'https://github.com/vatix-protocol/vatix-contracts'
    },
    {
      name: 'vatix-backend',
      description: 'Order matching & settlement (Node.js)',
      url: 'https://github.com/vatix-protocol/vatix-backend'
    },
    {
      name: 'vatix-frontend',
      description: 'User interface (React) [Coming Soon]',
      url: 'https://github.com/vatix-protocol/vatix-frontend',
      comingSoon: true
    },
    {
      name: 'vatix-docs',
      description: 'Technical documentation',
      url: 'https://github.com/vatix-protocol/vatix-docs'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Built in <span className="gradient-text">Public</span>, Built for{' '}
          <span className="gradient-text">Community</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto"
        >
          Vatix is fully open-source under MIT license. Our modular architecture across four
          repositories enables developers worldwide to contribute.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Repositories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {repositories.map((repo, index) => (
              <a
                key={index}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary-800/50 border border-primary-700 rounded-xl p-6 hover:border-accent-cyan/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold font-mono flex items-center gap-2">
                    {repo.name}
                    {repo.comingSoon && (
                      <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </h3>
                  <Github className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-gray-400">{repo.description}</p>
              </a>
            ))}

            <div className="bg-stellar-purple/10 border border-stellar-purple/30 rounded-xl p-6 mt-8">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-stellar-purple flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 mb-2">
                    We're participating in <strong className="text-white">Stellar Wave 1</strong> to
                    incentivize early contributors and build a sustainable developer community.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-primary-800/50 border border-primary-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Github className="w-6 h-6" />
                GitHub Activity
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-900/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">Stars</span>
                  </div>
                  <p className="text-3xl font-bold text-accent-cyan">{stats.stars}</p>
                </div>

                <div className="bg-primary-900/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <GitFork className="w-4 h-4" />
                    <span className="text-sm">Forks</span>
                  </div>
                  <p className="text-3xl font-bold text-accent-cyan">{stats.forks}</p>
                </div>

                <div className="bg-primary-900/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">Contributors</span>
                  </div>
                  <p className="text-3xl font-bold text-accent-cyan">{stats.contributors}</p>
                </div>

                <div className="bg-primary-900/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <GitCommit className="w-4 h-4" />
                    <span className="text-sm">Commits</span>
                  </div>
                  <p className="text-3xl font-bold text-accent-cyan">{stats.commits}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://github.com/vatix-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-4 bg-gradient-to-r from-accent-cyan to-stellar-purple text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              Become a Contributor
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;