'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

export default function Solutions() {
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
              Nos solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              Des services IA complets conçus pour éliminer les points de friction et stimuler la croissance
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Commencer
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, serviceIndex) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`mb-20 ${serviceIndex % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex lg:items-center lg:gap-12`}
              >
                <motion.div
                  initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-1/2 mb-8 lg:mb-0"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                      <Icon size={48} />
                    </div>
                    <h2 className="ml-4 text-4xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-700 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Caractéristiques clés</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Avantages</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheck className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-700 text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Commencer
                    <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-1/2"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="p-6 bg-white rounded-xl inline-block mb-4 shadow-lg">
                        <Icon size={64} className="text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Prêt à commencer ?
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Discutons de comment {service.title} peut transformer votre entreprise
                      </p>
                      <Link
                        href="/contact"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                      >
                        Planifier un appel
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Overview Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Toutes nos solutions
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez la solution qui correspond le mieux à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                showFullDetails={false}
              />
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
              Besoin d'une solution sur mesure ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Nous sommes spécialisés dans la création de solutions IA personnalisées pour des défis métier uniques
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Parlons de vos besoins
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

