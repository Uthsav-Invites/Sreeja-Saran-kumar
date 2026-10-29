import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';
import {
  OmHeaderFlourish,
  LeafBranchFlourish,
  CalendarIconExact,
  ClockIconExact,
  GoldAuspiciousDivider,
} from './TraditionalMotifs';

const HeroSection = () => {
  const { bride, groom, event, schedule } = INVITATION_CONFIG;

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center p-2 sm:p-3 overflow-hidden bg-[#EFE6D5]">
      {/* Real Traditional Andhra Card Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-[500px] min-h-[calc(100dvh-16px)] sm:min-h-[calc(100dvh-24px)] mx-auto p-3.5 sm:p-5 rounded-sm shadow-[0_15px_45px_rgba(72,52,36,0.18)] border border-[#C5A15B] overflow-hidden flex flex-col justify-between items-center text-center"
        style={{
          background: 'radial-gradient(circle at 50% 32%, #FDF9F0 0%, #FAF3E6 55%, #F3E6CD 100%)',
        }}
      >
        {/* Outer Hairline Border (1px) */}
        <div className="absolute inset-1.5 sm:inset-2 border border-[#C5A15B]/70 pointer-events-none z-0"></div>

        {/* Inner Gold Border (2px) with Inward Notches */}
        <div className="absolute inset-2.5 sm:inset-3 border-[2px] border-[#C5A15B] pointer-events-none z-0">
          <div className="absolute -top-[4px] -left-[4px] w-3 h-3 border-t-[2px] border-l-[2px] border-[#A37B32]"></div>
          <div className="absolute -top-[4px] -right-[4px] w-3 h-3 border-t-[2px] border-r-[2px] border-[#A37B32]"></div>
          <div className="absolute -bottom-[4px] -left-[4px] w-3 h-3 border-b-[2px] border-l-[2px] border-[#A37B32]"></div>
          <div className="absolute -bottom-[4px] -right-[4px] w-3 h-3 border-b-[2px] border-r-[2px] border-[#A37B32]"></div>
        </div>

        {/* 1. Top Left Corner Floral Decoration */}
        <motion.div
          animate={{ rotate: [-2.5, 2.5, -2.5] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
          style={{ transformOrigin: '20% 15%' }}
          className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none z-10 -translate-x-1 -translate-y-1"
        >
          <img
            src="/assets/floral-corner-chains.png"
            alt=""
            className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(163,123,50,0.25)]"
          />
        </motion.div>
        <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none z-20 -translate-x-1 -translate-y-1">
          <img
            src="/assets/floral-corner-flowers.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* 2. Top Right Corner Floral Decoration (Mirrored) */}
        <motion.div
          animate={{ rotate: [2.5, -2.5, 2.5] }}
          transition={{ repeat: Infinity, duration: 4.6, ease: 'easeInOut' }}
          style={{ transformOrigin: '80% 15%' }}
          className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none z-10 translate-x-1 -translate-y-1"
        >
          <img
            src="/assets/floral-corner-chains.png"
            alt=""
            className="w-full h-full object-contain transform scale-x-[-1] drop-shadow-[0_2px_4px_rgba(163,123,50,0.25)]"
          />
        </motion.div>
        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none z-20 translate-x-1 -translate-y-1 transform scale-x-[-1]">
          <img
            src="/assets/floral-corner-flowers.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* 3. Bottom Left Corner Floral Decoration */}
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 4.4, ease: 'easeInOut' }}
          style={{ transformOrigin: '20% 85%' }}
          className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none z-10 -translate-x-1 translate-y-1"
        >
          <img
            src="/assets/floral-corner-chains.png"
            alt=""
            className="w-full h-full object-contain transform scale-y-[-1] drop-shadow-[0_2px_4px_rgba(163,123,50,0.25)]"
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none z-20 -translate-x-1 translate-y-1 transform scale-y-[-1]">
          <img
            src="/assets/floral-corner-flowers.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* 4. Bottom Right Corner Floral Decoration (Mirrored) */}
        <motion.div
          animate={{ rotate: [2, -2, 2] }}
          transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
          style={{ transformOrigin: '80% 85%' }}
          className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none z-10 translate-x-1 translate-y-1"
        >
          <img
            src="/assets/floral-corner-chains.png"
            alt=""
            className="w-full h-full object-contain transform scale-[-1] drop-shadow-[0_2px_4px_rgba(163,123,50,0.25)]"
          />
        </motion.div>
        <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none z-20 translate-x-1 translate-y-1 transform scale-[-1]">
          <img
            src="/assets/floral-corner-flowers.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main Traditional Card Content */}
        <div className="relative z-10 flex flex-col items-center justify-between w-full h-full py-2">

          {/* 1. Auspicious Om & Sri Ganeshaya Namaha Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="w-full mt-1 mb-1"
          >
            <OmHeaderFlourish />
          </motion.div>

          {/* 2. Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="font-subheading text-[13.5px] sm:text-[15px] text-[#820A24] font-semibold tracking-wide leading-normal my-1"
          >
            {event.tagline}
          </motion.p>

          {/* 3. Auspicious Telugu Invitation Message */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="my-1 px-4 max-w-[340px] sm:max-w-[380px]"
          >
            <p className="font-telugu text-[12.5px] sm:text-[13.5px] text-[#483424] font-medium leading-[1.6]">
              {event.invitationNote}
            </p>
          </motion.div>

          {/* 4. "నిశ్చితార్థ మహోత్సవం" Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="my-1.5 sm:my-2 flex flex-col items-center"
          >
            <span className="font-subheading text-[11px] sm:text-xs tracking-widest text-[#9E782F] font-bold uppercase mb-0.5">
              {event.badge}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-[42px] text-[#820A24] font-bold leading-tight drop-shadow-[0_1px_1px_rgba(130,10,36,0.15)]">
              {event.title}
            </h1>
            <GoldAuspiciousDivider className="mt-1" />
          </motion.div>

          {/* 5. Couple Names in Calligraphic Telugu with Interlocking Rings */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="my-1 sm:my-2 w-full flex flex-col items-center"
          >
            {/* Bride Name */}
            <div className="flex flex-col items-center">
              <span className="font-subheading text-[11px] sm:text-xs text-[#9E782F] font-semibold">
                {bride.role}
              </span>
              <h2 className="font-calligraphy font-bold text-4xl sm:text-5xl md:text-[54px] text-[#820A24] leading-tight drop-shadow-[0_2px_4px_rgba(130,10,36,0.15)]">
                {bride.fullName}
              </h2>
            </div>

            {/* Interlocking Rings with Divine Shimmer */}
            <motion.div
              animate={{
                scale: [1, 1.07, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="my-1 sm:my-1.5 flex items-center justify-center"
            >
              <img
                src="/assets/ring.png"
                alt="నిశ్చితార్థ ఉంగరాలు"
                className="w-10 sm:w-12 h-auto object-contain drop-shadow-[0_3px_8px_rgba(163,123,50,0.32)]"
              />
            </motion.div>

            {/* Groom Name */}
            <div className="flex flex-col items-center">
              <span className="font-subheading text-[11px] sm:text-xs text-[#9E782F] font-semibold">
                {groom.role}
              </span>
              <h2 className="font-calligraphy font-bold text-4xl sm:text-5xl md:text-[54px] text-[#820A24] leading-tight drop-shadow-[0_2px_4px_rgba(130,10,36,0.15)]">
                {groom.fullName}
              </h2>
            </div>
          </motion.div>

          {/* 6. Gracious Presence Welcome Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-telugu font-medium text-[12px] sm:text-[13px] text-[#483424] leading-snug max-w-[320px] sm:max-w-[360px] mx-auto my-1 px-2"
          >
            {event.welcomeNote}
          </motion.p>

          <GoldAuspiciousDivider className="my-1" />

          {/* 7. Schedule Highlight: Date & Muhurtham in Telugu */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="w-full max-w-[420px] flex items-center justify-center gap-3 sm:gap-6 my-1 px-3 py-1 bg-[#FAF3E6]/70 rounded border border-[#C5A15B]/30"
          >
            {/* Date Box */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center shrink-0">
                <CalendarIconExact className="w-6 sm:w-7 h-6 sm:h-7 text-[#9E782F]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-subheading font-bold text-[10.5px] sm:text-[11.5px] text-[#9E782F] leading-tight">
                  {schedule.dayOfWeek}
                </span>
                <span className="font-heading font-bold text-base sm:text-[19px] text-[#820A24] leading-tight drop-shadow-[0_1px_1px_rgba(130,10,36,0.12)]">
                  {schedule.dateShort}
                </span>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-[1.5px] h-9 sm:h-10 bg-gradient-to-b from-[#C5A15B]/20 via-[#C5A15B] to-[#C5A15B]/20 shrink-0"></div>

            {/* Muhurtham Box */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center shrink-0">
                <ClockIconExact className="w-6 sm:w-7 h-6 sm:h-7 text-[#9E782F]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-subheading font-bold text-[10.5px] sm:text-[11.5px] text-[#9E782F] leading-tight">
                  {schedule.muhurthamLabel}
                </span>
                <span className="font-heading font-bold text-base sm:text-[19px] text-[#820A24] leading-tight drop-shadow-[0_1px_1px_rgba(130,10,36,0.12)]">
                  {schedule.muhurthamTime}
                </span>
              </div>
            </div>
          </motion.div>

          <GoldAuspiciousDivider className="my-1" />

          {/* 8. Closing Invitation Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="my-1 flex items-center justify-center gap-2 text-[#7C5D2C]"
          >
            <LeafBranchFlourish className="w-5 sm:w-6 h-3" isLeft={true} />
            <span className="font-subheading font-bold text-[12px] sm:text-[13.5px] text-[#7C5D2C] leading-tight">
              {event.complimentsShort}
            </span>
            <LeafBranchFlourish className="w-5 sm:w-6 h-3" isLeft={false} />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
