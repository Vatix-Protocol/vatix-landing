import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { useRef } from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const Progress = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    {
      name: 'Foundation',
      status: 'complete',
      icon: CheckCircle,
      items: [
        'CLOB matching engine',
        'Database architecture',
        'Smart contract framework',
        'CI/CD infrastructure'
      ]
    },
    {
      name: 'Core Development',
      status: 'current',
      icon: Clock,
      items: [
        'Trade execution contracts',
        'Settlement services',
        'Blockchain indexer',
        'Frontend application'
      ]
    },
    {
      name: 'Launch',
      status: 'upcoming',
      icon: Circle,
      items: [
        'Testnet deployment',
        'Security audits',
        'Community testing',
        'Mainnet launch'
      ]
    }
  ];

  const techStack = [
    'Soroban',
    'Rust',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Redis',
    'React'
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-primary-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Currently Building <span className="gradient-text">(40% Complete)</span>
          </h2>
          <div className="max-w-2xl mx-auto mt-6">
            <div className="h-3 bg-primary-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '40%' } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-accent-cyan to-stellar-purple"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {phases.map((phase, index) => {
            const StatusIcon = phase.icon;
            const getStatusColor = () => {
              switch (phase.status) {
                case 'complete':
                  return 'text-accent-green border-accent-green/30 bg-accent-green/5';
                case 'current':
                  return 'text-accent-cyan border-accent-cyan/30 bg-accent-cyan/5';
                default:
                  return 'text-gray-500 border-gray-700 bg-gray-900/20';
              }
            };

            const getStatusLabel = () => {
              switch (phase.status) {
                case 'complete':
                  return '✅';
                case 'current':
                  return '🚧';
                default:
                  return '📅';
              }
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`border rounded-xl p-6 ${getStatusColor()}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="text-2xl">{getStatusLabel()}</span>
                    Phase {index + 1}: {phase.name}
                  </h3>
                  <StatusIcon className="w-6 h-6" />
                </div>

                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => {
                    const isComplete = phase.status === 'complete';
                    const isCurrent = phase.status === 'current';
                    const itemComplete = isComplete || (isCurrent && itemIndex === 0);

                    return (
                      <li
                        key={itemIndex}
                        className={`flex items-start gap-2 ${
                          itemComplete ? 'text-gray-200' : 'text-gray-500'
                        }`}
                      >
                        <span className="mt-1">
                          {itemComplete ? '✓' : '○'}
                        </span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-center text-gray-400 font-semibold mb-4">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-900/50 border border-primary-700 rounded-lg text-sm font-mono text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/vatix-protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-cyan/80 transition-colors font-semibold"
          >
            View Live Repositories on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Progress;