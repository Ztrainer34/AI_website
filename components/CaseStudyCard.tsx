'use client';

import { motion } from 'framer-motion';
import { CaseStudy } from '@/lib/data';
import { FaCheckCircle } from 'react-icons/fa';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
    >
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
          {caseStudy.category}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{caseStudy.title}</h3>
      <p className="text-gray-600 mb-4">{caseStudy.description}</p>
      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-800 mb-2">Résultats :</h4>
        <ul className="space-y-2">
          {caseStudy.results.map((result, idx) => (
            <li key={idx} className="flex items-start text-gray-700">
              <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}


