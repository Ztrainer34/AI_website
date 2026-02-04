'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/data';
import { FaCheckCircle, FaRocket, FaShieldAlt, FaHeadset } from 'react-icons/fa';

export default function Home() {
  const trustFeatures = [
    {
      icon: FaShieldAlt,
      title: 'Sécurité de niveau entreprise',
      description: 'Vos données sont protégées par un chiffrement et des mesures de sécurité de niveau bancaire.',
    },
    {
      icon: FaRocket,
      title: 'Déploiement rapide',
      description: 'Opérationnel en jours, pas en mois. Mise en place rapide avec un minimum de perturbations.',
    },
    {
      icon: FaHeadset,
      title: 'Support 24h/24',
      description: 'Une équipe de support dédiée prête à vous aider à tout moment.',
    },
    {
      icon: FaCheckCircle,
      title: 'Résultats prouvés',
      description: 'Historique de mises en œuvre réussies et de clients satisfaits.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Transformez votre entreprise avec l'IA"
        subtitle="Des solutions IA intelligentes qui automatisent les opérations, améliorent l'expérience client et stimulent la croissance."
        ctaText="Commencer aujourd'hui"
        ctaLink="/contact"
        secondaryCtaText="Découvrir nos solutions"
        secondaryCtaLink="/solutions"
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des services IA complets conçus pour résoudre les vrais défis métier
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/solutions"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Découvrir toutes nos solutions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ils nous font confiance */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 items-center"
          >
            <div className="bg-white rounded-xl px-12 py-8 shadow-lg">
              <p className="text-2xl font-bold text-gray-800">Tornado Car Wash</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi nous choisir
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des entreprises nous font confiance pour des solutions IA exceptionnelles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white w-fit mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
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
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Discutons de la façon dont nos solutions IA peuvent vous aider à atteindre vos objectifs
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

