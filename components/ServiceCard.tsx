'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Service } from '@/lib/data';

interface ServiceCardProps {
  service: Service;
  index: number;
  showFullDetails?: boolean;
}

export default function ServiceCard({
  service,
  index,
  showFullDetails = false,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
          <Icon size={32} />
        </div>
        <h3 className="ml-4 text-2xl font-bold text-gray-800">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{service.description}</p>

      {showFullDetails ? (
        <>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Caractéristiques clés :</h4>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <span className="text-blue-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Avantages :</h4>
            <ul className="space-y-2">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <span className="text-purple-500 mr-2">★</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Link
          href="/solutions"
          className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
        >
          En savoir plus
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      )}
    </motion.div>
  );
}

