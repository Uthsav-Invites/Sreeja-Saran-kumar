import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';
import {
  RoyalLotusDivider,
  CalendarIconExact,
  ClockIconExact,
  LocationIconExact,
  DiyaMotif,
  KalashMotif,
} from './TraditionalMotifs';
import { FaCalendarPlus, FaDirections } from 'react-icons/fa';

const DetailsSection = () => {
  const { event, schedule, venue, ui } = INVITATION_CONFIG;

  const targetDate = new Date(schedule.isoDate).getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    ui.calendarTitle
  )}&dates=${schedule.googleCalStart}/${schedule.googleCalEnd}&details=${encodeURIComponent(
    ui.calendarDescription
  )}&location=${encodeURIComponent(venue.fullAddress)}`;

  return (
    <section className="py-14 px-3 sm:px-6 flex flex-col items-center relative overflow-hidden bg-[#FBF6EB]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-6"
      >
        <div className="flex items-center justify-center gap-2.5 mb-1.5">
          <DiyaMotif className="w-5 sm:w-6 h-5 sm:h-6 text-[#9E782F]" />
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#820A24] tracking-wide">
            {ui.muhurthamVenueHeading}
          </h2>
          <DiyaMotif className="w-5 sm:w-6 h-5 sm:h-6 text-[#9E782F]" />
        </div>

        {/* Traditional Gold Lotus Divider */}
        <RoyalLotusDivider className="my-2 max-w-[260px] mx-auto" />
      </motion.div>

      {/* Main Event Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="w-full max-w-[500px] bg-[#FDF9F0] rounded-xl p-5 sm:p-7 border-[2px] border-[#C5A15B] shadow-[0_12px_35px_rgba(72,52,36,0.12)] relative z-10"
      >
        {/* Inner thin border */}
        <div className="absolute inset-2 sm:inset-3 border border-[#C5A15B]/50 rounded-lg pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center">

          {/* Ceremony Heading */}
          <div className="flex flex-col items-center mb-4">
            <span className="font-subheading text-xs sm:text-sm text-[#9E782F] font-bold tracking-wider">
              {ui.ceremonyLabel}
            </span>
            <h3 className="font-heading text-center text-[#820A24] font-bold mt-0.5 flex flex-col items-center">
              {event.titlePrefix && (
                <span className="text-2xl sm:text-3xl md:text-[32px] leading-snug font-bold">
                  {event.titlePrefix}
                </span>
              )}
              <span className="text-lg sm:text-xl md:text-2xl leading-tight mt-0.5 font-bold">
                {event.title}
              </span>
            </h3>
            <p className="font-telugu text-xs sm:text-[13px] text-[#483424] font-medium mt-1 max-w-sm px-2">
              {event.invitationNote}
            </p>
          </div>

          {/* Traditional Details Panel */}
          <div className="w-full flex flex-col gap-3.5 my-2 text-left bg-[#FAF3E6] p-4 sm:p-5 rounded-lg border border-[#C5A15B]/40 shadow-xs">
            
            {/* 1. శుభకార్యం (Ceremony) */}
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <KalashMotif className="w-7 h-7 text-[#9E782F]" />
              </div>
              <div className="w-[1.5px] h-10 bg-gradient-to-b from-[#C5A15B]/30 via-[#C5A15B] to-[#C5A15B]/30 shrink-0"></div>
              <div className="flex flex-col">
                <span className="font-subheading font-bold text-[11px] sm:text-xs text-[#9E782F] leading-tight">
                  {ui.ceremonyLabel}
                </span>
                <span className="font-heading font-bold text-lg sm:text-xl text-[#820A24] leading-tight mt-0.5">
                  {event.fullTitle || (event.titlePrefix ? `${event.titlePrefix} ${event.title}` : event.title)}
                </span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#C5A15B]/20"></div>

            {/* 2. తేదీ (Date) */}
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <CalendarIconExact className="w-7 h-7 text-[#9E782F]" />
              </div>
              <div className="w-[1.5px] h-11 sm:h-12 bg-gradient-to-b from-[#C5A15B]/30 via-[#C5A15B] to-[#C5A15B]/30 shrink-0"></div>
              <div className="flex flex-col">
                <span className="font-subheading font-bold text-[11px] sm:text-xs text-[#9E782F] leading-tight">
                  {ui.dateLabel}
                </span>
                <span className="font-heading font-bold text-xl sm:text-2xl text-[#820A24] leading-tight drop-shadow-[0_1px_1px_rgba(130,10,36,0.12)] mt-0.5">
                  {schedule.dateFormatted}
                </span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#C5A15B]/20"></div>

            {/* 3. శుభ ముహూర్తం (Muhurtham Time) */}
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <ClockIconExact className="w-7 h-7 text-[#9E782F]" />
              </div>
              <div className="w-[1.5px] h-11 sm:h-12 bg-gradient-to-b from-[#C5A15B]/30 via-[#C5A15B] to-[#C5A15B]/30 shrink-0"></div>
              <div className="flex flex-col">
                <span className="font-subheading font-bold text-[11px] sm:text-xs text-[#9E782F] leading-tight">
                  {ui.timeLabel}
                </span>
                <span className="font-heading font-bold text-xl sm:text-2xl text-[#820A24] leading-tight drop-shadow-[0_1px_1px_rgba(130,10,36,0.12)] mt-0.5">
                  {schedule.muhurthamTime}
                </span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#C5A15B]/20"></div>

            {/* 4. వేదిక & చిరునామా (Venue & Address) */}
            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                <LocationIconExact className="w-7 h-7 text-[#9E782F]" />
              </div>
              <div className="w-[1.5px] h-14 sm:h-16 bg-gradient-to-b from-[#C5A15B]/30 via-[#C5A15B] to-[#C5A15B]/30 shrink-0"></div>
              <div className="flex flex-col">
                <span className="font-subheading font-bold text-[11px] sm:text-xs text-[#9E782F] leading-tight">
                  {ui.venueLabel} &amp; {ui.addressLabel}
                </span>
                <span className="font-heading font-bold text-lg sm:text-xl text-[#820A24] leading-snug mt-0.5">
                  {venue.name}
                </span>
                <span className="font-telugu font-semibold text-xs sm:text-[13px] text-[#483424] leading-relaxed mt-0.5">
                  {venue.street}, {venue.city}, {venue.state}
                </span>
              </div>
            </div>

          </div>

          {/* Telugu Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center my-4">
            {/* Google Maps Button */}
            <a
              href={venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#820A24] text-[#FAF3E6] rounded-full font-subheading text-xs sm:text-sm font-bold shadow-md hover:bg-[#630519] active:scale-95 transition-all duration-300"
            >
              <FaDirections size={14} />
              <span>{ui.openMapButton}</span>
            </a>

            {/* Add to Google Calendar Button */}
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FDF9F0] border border-[#C5A15B] text-[#820A24] rounded-full font-subheading text-xs sm:text-sm font-bold shadow-xs hover:bg-[#FAF3E6] active:scale-95 transition-all duration-300"
            >
              <FaCalendarPlus size={14} className="text-[#9E782F]" />
              <span>{ui.addToCalendarButton}</span>
            </a>
          </div>

          {/* Telugu Countdown Timer */}
          <div className="w-full pt-4 border-t border-[#C5A15B]/40">
            <span className="font-subheading text-xs sm:text-[13px] text-[#9E782F] font-bold block mb-2.5">
              {ui.countdownHeading}
            </span>

            <div className="grid grid-cols-4 gap-2 max-w-[320px] mx-auto">
              <div className="bg-[#FAF3E6] p-2 sm:p-2.5 rounded-md border border-[#C5A15B]/30 text-center shadow-xs">
                <span className="font-heading text-xl sm:text-2xl font-bold text-[#820A24] block leading-none">
                  {timeLeft.days}
                </span>
                <span className="font-subheading text-[10.5px] sm:text-xs font-bold text-[#483424] mt-1 block">
                  {ui.days}
                </span>
              </div>

              <div className="bg-[#FAF3E6] p-2 sm:p-2.5 rounded-md border border-[#C5A15B]/30 text-center shadow-xs">
                <span className="font-heading text-xl sm:text-2xl font-bold text-[#820A24] block leading-none">
                  {timeLeft.hours}
                </span>
                <span className="font-subheading text-[10.5px] sm:text-xs font-bold text-[#483424] mt-1 block">
                  {ui.hours}
                </span>
              </div>

              <div className="bg-[#FAF3E6] p-2 sm:p-2.5 rounded-md border border-[#C5A15B]/30 text-center shadow-xs">
                <span className="font-heading text-xl sm:text-2xl font-bold text-[#820A24] block leading-none">
                  {timeLeft.minutes}
                </span>
                <span className="font-subheading text-[10.5px] sm:text-xs font-bold text-[#483424] mt-1 block">
                  {ui.minutes}
                </span>
              </div>

              <div className="bg-[#FAF3E6] p-2 sm:p-2.5 rounded-md border border-[#C5A15B]/30 text-center shadow-xs">
                <span className="font-heading text-xl sm:text-2xl font-bold text-[#820A24] block leading-none">
                  {timeLeft.seconds}
                </span>
                <span className="font-subheading text-[10.5px] sm:text-xs font-bold text-[#483424] mt-1 block">
                  {ui.seconds}
                </span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default DetailsSection;
