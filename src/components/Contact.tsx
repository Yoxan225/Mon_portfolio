import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Download, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo, cvDownloadCount } from '../data/portfolioData';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = `/assets/cv/${personalInfo.cvName}`;
    link.download = personalInfo.cvName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: personalInfo.location,
      href: '#',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yoxankonan',
      href: personalInfo.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yoxankonan',
      href: personalInfo.linkedin,
    },
  ];

  const subjectOptions = [
    'Opportunité professionnelle',
    'Demande de collaboration',
    'Question technique',
    'Demande de stage',
    'Autre',
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-medium mb-4"
          >
            <Mail className="w-4 h-4" />
            Contact
          </motion.span>
          <h2 className="section-title mb-4">
            Travaillons ensemble
          </h2>
          <p className="section-subtitle">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* CV Card */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/20">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 dark:text-white">Mon CV</h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400">Téléchargez mon CV complet</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadCV}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors shadow-lg shadow-primary-500/25"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </motion.button>
              <div className="mt-3 text-center text-xs text-dark-400 dark:text-dark-500">
                <span className="font-semibold">{cvDownloadCount}</span> téléchargements
              </div>
            </div>

            {/* Contact Links */}
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-dark-800 border border-dark-200/50 dark:border-dark-700/50 hover:border-primary-500/50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-dark-500 dark:text-dark-400">{info.label}</div>
                    <div className="font-medium text-dark-800 dark:text-dark-200 truncate">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-dark-200/50 dark:border-dark-700/50">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <p className="text-sm text-dark-500 dark:text-dark-400">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 sm:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input ${errors.name ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input ${errors.email ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Sujet
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`input ${errors.subject ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                  >
                    <option value="">Sélectionner un sujet</option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`textarea ${errors.message ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                    placeholder="Votre message..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'idle' && status !== 'sending' ? 1.02 : 1 }}
                  whileTap={{ scale: status !== 'sending' ? 0.98 : 1 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold shadow-lg shadow-primary-500/25 transition-all disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message envoyé !
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Erreur, réessayez
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
