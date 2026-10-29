/**
 * సాంప్రదాయ తెలుగు నిశ్చితార్థ మహోత్సవ ఆహ్వాన పత్రిక - సమగ్ర సమాచార నిధి (Configuration)
 * Traditional Telugu Engagement Ceremony Invitation - Centralized Configuration
 * 
 * ఈ ఫైల్ ద్వారా వధూవరుల వివరాలు, తల్లిదండ్రుల పేర్లు, శుభ ముహూర్తం, వేదిక మరియు అన్ని తెలుగు వాక్యాలను సులభంగా మార్చుకోవచ్చు.
 * All couple details, parents' names, event timings, venue, and Telugu UI texts are managed centrally here.
 */

export const INVITATION_CONFIG = {
  // 1. వధూవరుల వివరాలు (Couple Details)
  bride: {
    fullName: "శ్రీజ",
    shortName: "శ్రీజ",
    role: "వధువు",
    relationLabel: "తల్లిదండ్రులు",
    parentHonorific: "సుపుత్రిక", // D/o (Daughter of)
    motherName: "శ్రీమతి మొగుళ్ళూరు హిమజ",
    fatherName: "శ్రీ మొగుళ్ళూరు ప్రసాద్",
    formattedParents: "శ్రీమతి మొగుళ్ళూరు హిమజ & శ్రీ మొగుళ్ళూరు ప్రసాద్",
    familyClan: "మొగుళ్ళూరు వారి కుటుంబం",
  },

  groom: {
    fullName: "శరణ్ కుమార్",
    shortName: "శరణ్ కుమార్",
    role: "వరుడు",
    relationLabel: "తల్లిదండ్రులు",
    parentHonorific: "సుపుత్రుడు", // S/o (Son of)
    motherName: "శ్రీమతి దోర్నాదుల శోభా రాణి",
    fatherName: "శ్రీ దోర్నాదుల మధుసూదన్ రావు",
    formattedParents: "శ్రీమతి దోర్నాదుల శోభా రాణి & శ్రీ దోర్నాదుల మధుసూదన్ రావు",
    familyClan: "దోర్నాదుల వారి కుటుంబం",
  },

  // 2. శుభకార్యం & ఆహ్వాన సందేశాలు (Event & Invitation Messages)
  event: {
    invocations: {
      ganesha: "|| శ్రీ గణేశాయ నమః ||",
      subheading: "శ్రీ గురుభ్యోనమః • శ్రీ లక్ష్మీ వేంకటేశ్వర ప్రసన్నః",
      om: "ॐ",
      subham: "|| శుభమస్తు - కళ్యాణమస్తు ||",
    },
    titlePrefix: "మొగుళ్ళూరు వారి",
    title: "నిశ్చితార్థ మహోత్సవం",
    fullTitle: "మొగుళ్ళూరు వారి నిశ్చితార్థ మహోత్సవం",
    badge: "శుభ నిశ్చితార్థ ఆహ్వాన పత్రిక",
    tagline: "రెండు హృదయాలు... ఒక్కటైన ప్రయాణం...",
    invitationNote:
      "పెద్దల ఆశీస్సులతో, మా కుటుంబాల ఆనంద సమక్షంలో జరుగనున్న మా నిశ్చితార్థ వేడుకకు విచ్చేసి మీ ఆశీస్సులు అందించవలసిందిగా సాదరంగా ఆహ్వానిస్తున్నాము.",
    welcomeNote:
      "మా జీవితంలోని ఈ మధురమైన నూతన అధ్యాయ ప్రారంభ వేళ మీ ఆత్మీయ సమక్షం, శుభాశీస్సులు మాకు ఎంతో ఆనందదాయకం.",
    closingMessage:
      "మీ రాకతో, మీ ఆశీస్సులతో మా జీవితంలో ఈ శుభ ఘడియ మరింత మధురంగా మారుతుంది.",
    closingBlessingRequest:
      "మా ఆనందాన్ని మీతో పంచుకుంటూ, మీ అమూల్యమైన ఆశీస్సులను కోరుకుంటున్నాము.",
    compliments: "ఇట్లు,\nవధూవరుల కుటుంబ సభ్యులు",
    complimentsShort: "ఇరు కుటుంబాల వారి ఆహ్వానం",
    presenceNote:
      "మీ రాకను, మీ ఆశీస్సులను సాదరంగా ఆహ్వానిస్తున్నాము.",
    thankYouNote:
      "మా శుభకార్యానికి విచ్చేసి ఆశీర్వదించగలరని ప్రార్థన.",
    benediction: "|| సర్వేజనాః సుఖినోభవంతు ||",
  },

  // 3. తేదీ, సమయం & శుభ ముహూర్తం (Date, Time & Auspicious Muhurtham)
  schedule: {
    dayOfWeek: "ఆదివారం",
    day: "1",
    month: "నవంబర్",
    year: "2026",
    dateFormatted: "1 నవంబర్ 2026, ఆదివారం",
    dateShort: "1 నవంబర్ 2026",
    muhurthamLabel: "శుభ ముహూర్తం",
    muhurthamTime: "ఉదయం 9.30 నుండి 11.30 వరకు",
    muhurthamFull: "శుభ ముహూర్తం: ఉదయం 11:03 గంటలకు",
    // ISO Date for Countdown Timer & Calendar Integration (IST is UTC+05:30)
    isoDate: "2026-10-29T11:03:00+05:30",
    googleCalStart: "20261029T053300Z", // 11:03 AM IST in UTC (05:33)
    googleCalEnd: "20261029T083300Z",   // 2:03 PM IST in UTC (08:33)
  },

  // 4. వేదిక మరియు చిరునామా (Venue & Location)
  venue: {
    name: "శ్రీ భార్గవి కళ్యాణ మండపం",
    street: "NH 16, మన్నార్పోలూరు క్రాస్ రోడ్",
    city: "సుల్లూర్పెటా",
    state: "ఆంధ్ర ప్రదేశ్",
    fullAddress: "శ్రీ భార్గవి కళ్యాణ మండపం NH 16, సుల్లూర్పెటా",
    googleMapsUrl: "https://share.google/tt46Ecb82dpheiMIm",
  },

  // 5. వెబ్‌సైట్ లేబుల్స్ & బటన్లు (Telugu UI, Navigation & Action Labels)
  ui: {
    // Navigation & Section Titles
    meetCoupleHeading: "వధూవరుల పరిచయం",
    muhurthamVenueHeading: "శుభ ముహూర్తం మరియు వేదిక",
    invitationMessageHeading: "శుభ సందేశం",
    couplePortraitHeading: "శుభ బంధం",
    footerHeading: "శుభమస్తు",

    // Details Table Labels
    ceremonyLabel: "శుభకార్యం",
    dateLabel: "తేదీ",
    timeLabel: "శుభ ముహూర్తం",
    venueLabel: "వేదిక",
    addressLabel: "చిరునామా",

    // Action Buttons
    openMapButton: "వేదిక మార్గం (గూగుల్ మ్యాప్స్)",
    addToCalendarButton: "క్యాలెండర్‌కు జోడించండి",

    // Envelope Overlay Texts
    envelopeTitle: "నిశ్చితార్థ ఆహ్వాన పత్రిక",
    envelopeInstruction: "✦ ఆహ్వాన పత్రికను తెరవడానికి ఇక్కడ తాకండి ✦",
    skipButton: "ఆహ్వాన పత్రికను వీక్షించండి ➔",

    // Music Player Labels
    musicAriaPlay: "సంగీతం ప్లే చేయండి",
    musicAriaPause: "సంగీతం నిలిపివేయండి",
    musicTitlePlaying: "మంగళ వాయిద్యం మోగుతోంది (నిలిపివేయడానికి తాకండి)",
    musicTitlePaused: "మంగళ వాయిద్యం ప్లే చేయడానికి తాకండి",

    // Countdown Timer Labels
    countdownHeading: "శుభ ముహూర్తానికి మిగిలిన సమయం",
    days: "రోజులు",
    hours: "గంటలు",
    minutes: "నిమిషాలు",
    seconds: "సెకన్లు",

    // Calendar Integration Content
    calendarTitle: "మొగుళ్ళూరు వారి నిశ్చితార్థ మహోత్సవం: శ్రీజ & శరణ్ కుమార్",
    calendarDescription: "శ్రీజ మరియు శరణ్ కుమార్ గార్ల నిశ్చితార్థ మహోత్సవ వేడుకకు సాదర ఆహ్వానం. శుభ ముహూర్తం: ఉదయం 11:03 గంటలకు. వేదిక: ఎన్వీఆర్ కన్వెన్షన్, సినిమా రోడ్, కాకినాడ.",
  },

  // 6. ఆడియో మంగళ వాయిద్యం (Audio Configuration)
  audio: {
    src: "/assets/song.mpeg",
    startTime: 28.4, // Start playing from 20 seconds onwards
    title: "మంగళ వాయిద్యం - సన్నాయి / నాదస్వరం",
  },

  // 7. అదనపు సమాచారం (Separate Event from Handwritten Notes - Section 7 of instructions)
  // గమనిక: ఇది నిశ్చితార్థానికి వేరుగా ఉన్న వేరొక శుభకార్యం సమాచారం. భవిష్యత్తులో అవసరమైతే ఉపయోగించడానికి ప్రత్యేకంగా భద్రపరచబడింది.
  additionalEventNotes: {
    eventTitle: "వివాహ మహోత్సవం / ప్రత్యేక వేడుక (ధృవీకరించవలసినది)",
    dateFormatted: "1 నవంబర్ 2026, ఆదివారం",
    timeRange: "ఉదయం 9:30 నుండి 11:30 వరకు",
    venueName: "శ్రీ భార్గవి కళ్యాణ మండపం",
    address: "ఎన్ హెచ్ 16, మన్నార్‌పురం రోడ్ ఎదురుగా, సూళ్లూరుపేట",
    status: "separate_saved_for_future_use",
    note: "ఈ వివరాలు చేతిరాత నోట్స్ నుండి ప్రత్యేకంగా భద్రపరచబడినవి. ప్రధాన ఆహ్వాన పత్రికలో కలపలేదు."
  }
};

export default INVITATION_CONFIG;
