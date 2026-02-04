'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { companyInfo } from '@/lib/data';
import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

export default function Contact() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: companyInfo.email,
      link: `mailto:${companyInfo.email}`,
    },
    {
      icon: FaPhone,
      label: 'Téléphone',
      value: companyInfo.phone,
      link: `tel:${companyInfo.phone}`,
    },
    {
      icon: FaClock,
      label: 'Horaires',
      value: 'Lundi - Vendredi : 9h00 - 18h00',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Une question ou prêt à commencer ? Nous serions ravis de vous entendre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible. Nous répondons généralement sous 24 heures.
              </p>
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Coordonnées
              </h2>
              <p className="text-gray-600 mb-8">
                Préférez nous contacter directement ? Utilisez les moyens de contact ci-dessous ou visitez-nous à notre bureau.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.label}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-700">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Consultation gratuite pour discuter de vos besoins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Solutions personnalisées adaptées à votre entreprise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Support et maintenance continus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Historique éprouvé de réussites</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Questions courantes sur nos services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'En combien de temps pouvez-vous mettre en œuvre une solution ?',
                answer: 'Le délai de mise en œuvre varie selon la complexité, mais la plupart des solutions sont opérationnelles en 1 à 4 semaines. Nous travaillons en étroite collaboration avec vous pour garantir un déploiement fluide et dans les délais.',
              },
              {
                question: 'Proposez-vous un support continu ?',
                answer: 'Oui ! Nous proposons des formules de support complètes pour garantir que vos solutions IA continuent de performer de manière optimale. Notre équipe est disponible pour la maintenance, les mises à jour et l\'optimisation.',
              },
              {
                question: 'Pouvez-vous intégrer avec nos systèmes existants ?',
                answer: 'Absolument. Nous sommes spécialisés dans l\'intégration de solutions IA avec les systèmes et outils métier existants. Notre équipe travaillera avec vous pour garantir une intégration transparente.',
              },
              {
                question: 'Avec quel type d\'entreprises travaillez-vous ?',
                answer: 'Nous travaillons avec des PME, des agences et des entreprises en croissance dans diverses industries. Nos solutions sont adaptées pour répondre aux besoins uniques de chaque client.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à commencer ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              N'attendez pas - discutons de comment nous pouvons transformer votre entreprise dès aujourd'hui
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

