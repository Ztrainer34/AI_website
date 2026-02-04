'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLightbulb, FaHandshake, FaUsers, FaAward, FaRocket, FaShieldAlt } from 'react-icons/fa';

export default function About() {
  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Nous restons à la pointe de la technologie IA, en explorant constamment de nouvelles possibilités et solutions.',
    },
    {
      icon: FaHandshake,
      title: 'Partenariat',
      description: 'Votre succès est notre succès. Nous travaillons comme une extension de votre équipe, pas seulement comme un prestataire.',
    },
    {
      icon: FaUsers,
      title: 'Client d\'abord',
      description: 'Chaque décision que nous prenons priorise la valeur et l\'expérience que nous offrons à nos clients.',
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tout ce que nous faisons, du développement au support et au-delà.',
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
              À propos de nous
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Transformer les entreprises grâce à des solutions IA intelligentes et l'automatisation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Notre mission
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Nous croyons que chaque entreprise, quelle que soit sa taille, devrait avoir accès à la technologie IA de pointe. Notre mission est de démocratiser l'IA et l'automatisation, les rendant accessibles et abordables.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Nous ne construisons pas simplement des logiciels ; nous construisons des solutions qui résolvent de vrais problèmes, éliminent les points de friction et stimulent une croissance significative pour nos clients.
              </p>
              <p className="text-lg text-gray-700">
                Grâce à l'innovation, l'expertise et un engagement profond envers la réussite de nos clients, nous aidons les entreprises à transformer leurs opérations et à rivaliser dans un monde de plus en plus numérique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="p-6 bg-white rounded-xl inline-block mb-4 shadow-lg">
                  <FaRocket size={64} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Notre vision
                </h3>
                <p className="text-gray-700">
                  Être le premier fournisseur de solutions IA accessibles et intelligentes qui permettent aux entreprises de réaliser leur plein potentiel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident tout ce que nous faisons
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
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
              Pourquoi nous faire confiance
            </h2>
            <p className="text-xl text-gray-600">
              Ce qui nous distingue des autres
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaAward size={40} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-700">
                Notre équipe apporte des années d'expérience en IA, apprentissage automatique et automatisation des affaires. Nous avons travaillé avec des entreprises de toutes tailles, des startups aux grandes entreprises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="p-4 bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt size={40} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Fiabilité</h3>
              <p className="text-gray-700">
                Nous construisons des solutions robustes et évolutives sur lesquelles vous pouvez compter. Nos systèmes sont conçus pour la fiabilité et soutenus par un support complet.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="p-4 bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaUsers size={40} className="text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Partenariat</h3>
              <p className="text-gray-700">
                Nous ne livrons pas simplement des projets et nous en allons. Nous sommes vos partenaires à long terme, investis dans votre succès et prêts à évoluer avec vos besoins.
              </p>
            </motion.div>
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
              Travaillons ensemble
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Prêt à transformer votre entreprise ? Contactez-nous et discutons de comment nous pouvons vous aider.
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

