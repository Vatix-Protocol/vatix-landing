// import { Github } from 'lucide-react';
// import { FaDiscord, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Documentation', url: 'https://github.com/vatix-protocol/vatix-docs' },
      { name: 'GitHub', url: 'https://github.com/vatix-protocol' },
      { name: 'Roadmap', url: '#roadmap' }
    ],
    community: [
      { name: 'Discord', url: 'https://discord.gg/[YOUR_DISCORD]' },
      { name: 'Twitter', url: 'https://twitter.com/[YOUR_TWITTER]' }
    ],
    resources: [
      { name: 'Stellar Network', url: 'https://stellar.org' },
      { name: 'Soroban Docs', url: 'https://soroban.stellar.org' },
      { name: 'About Prediction Markets', url: 'https://en.wikipedia.org/wiki/Prediction_market' }
    ],
    legal: [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' },
      { name: 'License (MIT)', url: 'https://github.com/vatix-protocol/vatix-contracts/blob/main/LICENSE' }
    ]
  };

  return (
    <footer className="bg-primary-900 border-t border-primary-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo_zoom.png"
                alt="Vatix Protocol"
                className="h-10"
                // style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-gray-400 text-sm max-w-xs mb-6">
              The first open-source prediction market on Stellar
            </p>

            {/*TODO: Social icons */}
            {/* <div className="flex gap-3">
              <a
                href="https://github.com/vatix-protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-800 rounded-lg hover:bg-primary-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://twitter.com/[YOUR_TWITTER]"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-800 rounded-lg hover:bg-primary-700 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>

              <a
                href="https://discord.gg/[YOUR_DISCORD]"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-800 rounded-lg hover:bg-primary-700 transition-colors"
                aria-label="Discord"
              >
                <FaDiscord className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-accent-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Vatix Protocol. Built on Stellar. Open Source (MIT).
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-gray-600 text-xs text-center mt-6 max-w-3xl mx-auto">
            Disclaimer: Vatix Protocol is in active development. Prediction markets may
            not be available in all jurisdictions. Please check local regulations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;