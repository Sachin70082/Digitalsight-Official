
/**
 * Digitalsight Innovations - Central Configuration
 * Use this file to manage all keys, contact details, pricing, and business logic.
 */

export const APP_CONFIG = {
  // BRANDING
  COMPANY_NAME: 'Digitalsight Innovations',
  TAGLINE: 'THE STAGE IS YOURS NOW.',

  // CONTACT & SOCIAL
  SUPPORT_EMAIL: 'help@digitalsight.in',
  WHATSAPP_NUMBER: '918339951575', 
  WHATSAPP_MESSAGE: "Hi Digitalsight, I'm interested in professional distribution and audio services!",
  INSTAGRAM_URL: 'https://instagram.com/digitalsight',
  FACEBOOK_URL: 'https://facebook.com/digitalsight',
  YOUTUBE_URL: 'https://youtube.com/digitalsight',
  
  // LOCATION
  ADDRESS: 'Saheed Nagar, Bhubaneswar, Odisha, India',
  
  // REVENUE CALCULATOR LOGIC
  STREAM_REVENUE_PER_1K: 0.50, // USD $0.50 per 1000 streams
  CALC_MIN_STREAMS: 10000,
  CALC_MAX_STREAMS: 5000000,
  CALC_STEP: 10000,

  // PRICING: ARTIST PLAN
  ARTIST_PLAN_PRICE: '599',
  ARTIST_PLAN_ROYALTY: '70%',
  ARTIST_PLAN_PROFILES: '1',

  // PRICING: LABEL PLAN
  LABEL_PLAN_PRICE: '1199',
  LABEL_PLAN_ROYALTY: '70%',
  LABEL_PLAN_PROFILES: 'Unlimited',

  // SERVICE LIMITS
  SUPPORT_RESPONSE_TIME: '12 hours',
  QC_REJECTION_RATE: '0%',
};
