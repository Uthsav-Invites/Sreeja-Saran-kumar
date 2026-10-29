import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';
import { RoyalLotusDivider, DiyaMotif, KalashMotif, CardRosetteDivider } from './TraditionalMotifs';

const CoupleSection = () => {
  const { bride, groom, ui } = INVITATION_CONFIG;

  return (
    <section className="py-12 sm:py-16 px-3 sm:px-6 flex flex-col items-center relative overflow-hidden bg-[#FAF3E6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 flex flex-col items-center w-full max-w-xl mx-auto"
      >
        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 text-[#9E782F]">
          <DiyaMotif className="w-5 sm:w-6 h-5 sm:h-6 text-[#9E782F]" />
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#820A24] tracking-wide text-center">
            {ui.meetCoupleHeading}
          </h2>
          <DiyaMotif className="w-5 sm:w-6 h-5 sm:h-6 text-[#9E782F]" />
        </div>

        <RoyalLotusDivider className="my-2 max-w-[260px] mx-auto" />

        {/* Unified Traditional Card with Bride and Groom Sections */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="w-full max-w-[500px] bg-gradient-to-b from-[#FDF9F0] via-[#FAF3E6] to-[#FDF9F0] rounded-xl p-5 sm:p-8 border-[2px] border-[#C5A15B] shadow-[0_15px_40px_rgba(72,52,36,0.12)] relative overflow-hidden mt-4"
        >
          {/* Inner hairline border */}
          <div className="absolute inset-2 sm:inset-2.5 border border-[#C5A15B]/50 rounded-lg pointer-events-none"></div>

          {/* Inward corner notches */}
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-[2px] border-l-[2px] border-[#A37B32] pointer-events-none"></div>
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-[2px] border-r-[2px] border-[#A37B32] pointer-events-none"></div>
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-[2px] border-l-[2px] border-[#A37B32] pointer-events-none"></div>
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-[2px] border-r-[2px] border-[#A37B32] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center">

            {/* 1. BRIDE CARD / SECTION (వధువు) */}
            <div className="w-full flex flex-col items-center bg-[#FAF3E6]/60 p-4 sm:p-5 rounded-lg border border-[#C5A15B]/30 shadow-xs">
              {/* Auspicious Kalash & Bride Role Badge */}
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="font-subheading text-xs sm:text-sm text-[#9E782F] font-bold px-3 py-0.5 rounded-full bg-[#FDF9F0] border border-[#C5A15B]/50 shadow-xs">
                  {bride.role}
                </span>
              </div>

              {/* Bride Name in Grand Calligraphic Telugu */}
              <h3 className="font-calligraphy font-bold text-4xl sm:text-5xl text-[#820A24] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(130,10,36,0.12)]">
                {bride.fullName}
              </h3>

              {/* Parents Section */}
              <div className="mt-2 flex flex-col items-center w-full">
                <span className="font-subheading text-xs sm:text-[13px] text-[#9E782F] font-bold tracking-wider">
                  {bride.relationLabel}
                </span>
                
                <div className="mt-1 flex flex-col items-center text-[#483424]">
                  <p className="font-telugu font-semibold text-base sm:text-lg leading-snug">
                    {bride.motherName}
                  </p>
                  <p className="font-telugu font-semibold text-base sm:text-lg leading-snug">
                    {bride.fatherName}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. THE SACRED CONNECTION (Interlocking Rings Medallion with Gold Filament Bridge) */}
            <div className="w-full my-4 sm:my-5 flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center gap-2 sm:gap-3">
                {/* Left connecting gold vine */}
                <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A15B] to-[#9E782F]"></div>

                {/* Central Interlocking Rings Medallion */}
                <motion.div
                  animate={{
                    scale: [1, 1.07, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#FFFDF9] to-[#FAF3E6] border-[1.5px] border-[#C5A15B] shadow-[0_4px_12px_rgba(163,123,50,0.25)] flex items-center justify-center p-2.5 shrink-0 z-10"
                >
                  <img
                    src="/assets/ring.png"
                    alt="నిశ్చితార్థ ఉంగరాలు"
                    className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(163,123,50,0.3)]"
                  />
                </motion.div>

                {/* Right connecting gold vine */}
                <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#C5A15B] to-[#9E782F]"></div>
              </div>

              {/* Auspicious Telugu Subtext */}
              <span className="font-subheading font-bold text-[#9E782F] text-xs sm:text-[13px] tracking-wide mt-2">
                రెండు మనసుల పవిత్ర కలయిక
              </span>
            </div>

            {/* 3. GROOM CARD / SECTION (వరుడు) */}
            <div className="w-full flex flex-col items-center bg-[#FAF3E6]/60 p-4 sm:p-5 rounded-lg border border-[#C5A15B]/30 shadow-xs">
              {/* Groom Role Badge */}
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="font-subheading text-xs sm:text-sm text-[#9E782F] font-bold px-3 py-0.5 rounded-full bg-[#FDF9F0] border border-[#C5A15B]/50 shadow-xs">
                  {groom.role}
                </span>
              </div>

              {/* Groom Name in Grand Calligraphic Telugu */}
              <h3 className="font-calligraphy font-bold text-4xl sm:text-5xl text-[#820A24] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(130,10,36,0.12)]">
                {groom.fullName}
              </h3>

              {/* Parents Section */}
              <div className="mt-2 flex flex-col items-center w-full">
                <span className="font-subheading text-xs sm:text-[13px] text-[#9E782F] font-bold tracking-wider">
                  {groom.relationLabel}
                </span>
                
                <div className="mt-1 flex flex-col items-center text-[#483424]">
                  <p className="font-telugu font-semibold text-base sm:text-lg leading-snug">
                    {groom.motherName}
                  </p>
                  <p className="font-telugu font-semibold text-base sm:text-lg leading-snug">
                    {groom.fatherName}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoupleSection;
