import Link from 'next/link';
import { companyInfo, navigationLinks } from '@/lib/data';
import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {companyInfo.name}
            </h3>
            <p className="text-sm mb-4">
              Transformer les entreprises avec des solutions IA intelligentes et l'automatisation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Coordonnées</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-blue-400" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              {companyInfo.address && (
                <li className="flex items-start gap-2">
                  <span>{companyInfo.address}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              {companyInfo.socialLinks?.linkedin && (
                <a
                  href={companyInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              )}
              {companyInfo.socialLinks?.twitter && (
                <a
                  href={companyInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
              )}
              {companyInfo.socialLinks?.github && (
                <a
                  href={companyInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}


