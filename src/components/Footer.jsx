import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';
import { OmSymbol, LotusMotif, LeafBranchFlourish, GoldAuspiciousDivider, DiyaMotif } from './TraditionalMotifs';

const Footer = () => {
  const { bride, groom, event, ui } = INVITATION_CONFIG;

  return (
    <footer className="relative py-14 px-3 sm:px-6 flex flex-col items-center justify-center bg-[#FAF3E6] overflow-hidden border-t border-[#C5A15B]/50">

      {/* SECTION D: Main Elegant Closing Invitation Card (శుభ సందేశం) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full max-w-[500px] bg-[#FDF9F0] rounded-xl p-6 sm:p-8 border-[2px] border-[#C5A15B] shadow-[0_12px_35px_rgba(72,52,36,0.1)] text-center"
      >
        {/* Inner thin gold border */}
        <div className="absolute inset-2 sm:inset-3 border border-[#C5A15B]/50 rounded-lg pointer-events-none"></div>

        {/* Inward corner notches */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-[2px] border-l-[2px] border-[#A37B32] pointer-events-none"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t-[2px] border-r-[2px] border-[#A37B32] pointer-events-none"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-[2px] border-l-[2px] border-[#A37B32] pointer-events-none"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-[2px] border-r-[2px] border-[#A37B32] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center py-2">

          {/* Top Sacred Om & Lotus Emblem */}
          <div className="flex items-center justify-center gap-2 mb-3 text-[#9E782F]">
            <LotusMotif className="w-5 h-5 text-[#9E782F]" />
            <OmSymbol className="w-7 h-7 text-[#9E782F]" />
            <LotusMotif className="w-5 h-5 text-[#9E782F] transform scale-x-[-1]" />
          </div>

          {/* Section D Telugu Invitation Messages */}
          <p className="font-telugu font-semibold text-base sm:text-lg text-[#820A24] leading-relaxed max-w-sm mb-2.5 px-2">
            “{event.closingMessage}”
          </p>

          <p className="font-telugu text-sm sm:text-base text-[#483424] font-medium leading-relaxed max-w-sm mb-3 px-2">
            “{event.closingBlessingRequest}”
          </p>

          <GoldAuspiciousDivider className="my-2" />

          {/* Couple's Names in Calligraphy with Ring Motif */}
          <div className="my-2 flex flex-col items-center">
            <h3 className="font-calligraphy font-bold text-3xl sm:text-4xl text-[#820A24] leading-tight">
              {bride.fullName}
            </h3>

            {/* Interlocking Rings Image Motif */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                rotate: [0, 1.5, -1.5, 0],
              }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="my-1.5 flex items-center justify-center"
            >
              <img
                src="/assets/ring.png"
                alt="నిశ్చితార్థ ఉంగరాలు"
                className="w-9 sm:w-11 h-auto object-contain drop-shadow-[0_3px_8px_rgba(163,123,50,0.32)]"
              />
            </motion.div>

            <h3 className="font-calligraphy font-bold text-3xl sm:text-4xl text-[#820A24] leading-tight">
              {groom.fullName}
            </h3>
          </div>

          <GoldAuspiciousDivider className="my-2" />

          {/* Compliments Line (ఇట్లు, వధూవరుల కుటుంబ సభ్యులు) */}
          <div className="mt-3 flex items-center justify-center gap-2 text-[#7C5D2C]">
            <LeafBranchFlourish className="w-6 h-3" isLeft={true} />
            <div className="text-center font-subheading font-bold text-sm sm:text-base text-[#7C5D2C] leading-snug whitespace-pre-line">
              {event.compliments}
            </div>
            <LeafBranchFlourish className="w-6 h-3" isLeft={false} />
          </div>

        </div>
      </motion.div>

      {/* SECTION F: Traditional Telugu Footer with Blessing */}
      <div className="relative z-10 mt-8 text-center flex flex-col items-center gap-1.5">
        <div className="flex items-center gap-2 text-[#9E782F]">
          <span className="text-xs">✦</span>
          <span className="font-heading font-bold text-lg sm:text-xl text-[#820A24] tracking-wider">
            {ui.footerHeading}
          </span>
          <span className="text-xs">✦</span>
        </div>

        <p className="font-calligraphy font-bold text-xl sm:text-2xl text-[#820A24]">
          {bride.fullName} – {groom.fullName}
        </p>

        <p className="font-telugu font-medium text-xs sm:text-sm text-[#483424] max-w-xs">
          {event.presenceNote}
        </p>

        <span className="font-subheading text-xs text-[#9E782F] font-bold mt-2">
          {event.benediction}
        </span>
      </div>

    </footer>
  );
};

export default Footer;
