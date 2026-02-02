import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { useRef, useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

const Waitlist = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // Get Mailchimp config from environment variables
  const MAILCHIMP_URL = `https://${import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX}.list-manage.com/subscribe/post`;
  const MAILCHIMP_U = import.meta.env.VITE_MAILCHIMP_U;
  const MAILCHIMP_ID = import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // Create a hidden iframe to submit the form
    const form = e.target as HTMLFormElement;
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'mailchimp-iframe';
    document.body.appendChild(iframe);

    // Submit form to iframe
    form.target = 'mailchimp-iframe';
    form.submit();

    // Show success message (Mailchimp will handle the actual subscription)
    setTimeout(() => {
      setStatus('success');
      setMessage('Thanks for joining! Please check your email to confirm.');
      setEmail('');
      
      // Clean up iframe
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    }, 1000);
  };

  return (
    <section id="waitlist" ref={ref} className="py-20 px-4 bg-gradient-to-b from-primary-900 via-primary-800/50 to-primary-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="gradient-text">Waitlist</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Be first to know when Vatix launches. Get exclusive early access and updates on
            development progress.
          </p>
        </motion.div>

        {/* Email Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <form 
            onSubmit={handleSubmit}
            action={MAILCHIMP_URL}
            method="post"
            className="max-w-xl mx-auto"
          >
            {/* Hidden Mailchimp fields */}
            <input type="hidden" name="u" value={MAILCHIMP_U} />
            <input type="hidden" name="id" value={MAILCHIMP_ID} />
            
            {/* Anti-bot field (must be left empty) */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name={`b_${MAILCHIMP_U}_${MAILCHIMP_ID}`} tabIndex={-1} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  name="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full pl-12 pr-4 py-4 bg-primary-900/50 border border-primary-700 rounded-lg focus:outline-none focus:border-accent-cyan transition-colors text-white placeholder-gray-500"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-stellar-purple text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  'Subscribing...'
                ) : status === 'success' ? (
                  <>
                    <Check className="w-5 h-5" />
                    Subscribed
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>

            {/* Status message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 flex items-center gap-2 justify-center ${
                  status === 'success' ? 'text-accent-green' : 'text-red-400'
                }`}
              >
                {status === 'success' ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span>{message}</span>
              </motion.div>
            )}

            <p className="text-gray-500 text-sm text-center mt-4">
              We'll never spam. Unsubscribe anytime.
            </p>
          </form>
        </motion.div>

        {/* Social Links */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">Or connect with us on:</p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://discord.gg/[YOUR_DISCORD]"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-800 border border-primary-700 rounded-lg hover:border-accent-cyan/50 transition-colors flex items-center gap-2"
            >
              <FaDiscord className="w-5 h-5" />
              <span>Discord</span>
            </a>
            <a
              href="https://twitter.com/[YOUR_TWITTER]"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-800 border border-primary-700 rounded-lg hover:border-accent-cyan/50 transition-colors flex items-center gap-2"
            >
              <FaTwitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
            <a
              href="https://github.com/vatix-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-800 border border-primary-700 rounded-lg hover:border-accent-cyan/50 transition-colors flex items-center gap-2"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Waitlist;