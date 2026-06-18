import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface ProfilePhotoProps {
  size?: 'sm' | 'md' | 'lg';
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ size = 'lg' }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96',
  };

  const innerSizeClasses = {
    sm: 'w-28 h-28',
    md: 'w-44 h-44',
    lg: 'w-64 h-64 sm:w-72 sm:h-72 md:w-88 md:h-88',
  };

  const placeholderUrl = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400';

  return (
    <>
      <motion.div
        className="relative group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsLightboxOpen(true)}
      >
        {/* Animated Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className={`absolute ${sizeClasses[size]} rounded-full`}
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className={`absolute ${sizeClasses[size]} rounded-full`}
        >
          <div className="absolute inset-2 rounded-full border border-dashed border-accent-500/30" />
        </motion.div>

        {/* Glow Effect */}
        <div className={`absolute ${sizeClasses[size]} -inset-4 rounded-full bg-gradient-to-br from-primary-500/40 via-accent-500/30 to-primary-600/40 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

        {/* Main Photo Container */}
        <div className={`relative ${sizeClasses[size]} rounded-full p-1 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 shadow-2xl shadow-primary-500/30`}>
          {/* Inner Photo */}
          <div className={`${innerSizeClasses[size]} rounded-full overflow-hidden bg-white dark:bg-dark-800 relative`}>
            <img
              src={imageError ? placeholderUrl : 'public/assets/images/profile/profile.png'}
              alt="KONAN KOUAKOU Yves Yoxan"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="text-white"
              >
                <ZoomIn className="w-8 h-8" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating Status Indicator */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-white dark:border-dark-900 shadow-lg"
        />
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.3 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Container */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/20 border border-white/10">
                <img
                  src={imageError ? placeholderUrl : 'public/assets/images/profile/profile.png'}
                  alt="KONAN KOUAKOU Yves Yoxan"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white">KONAN KOUAKOU Yves Yoxan</h3>
                <p className="text-white/60">Génie Logiciel </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfilePhoto;
