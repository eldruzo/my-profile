export const AGENCY_NAME = "Eldruzo Studio";
export const SITE_URL = "https://eldruzo.github.io/my-profile/layanan";
export const WHATSAPP_NUMBER = "6282135412527";
export const WA_MESSAGE = encodeURIComponent(
  "Halo! Saya tertarik dengan layanan pembuatan website. Boleh tahu lebih lanjut?"
);
export const WA_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`;

export const TIERS = [
  { num: 1, setup: 500_000,   monthly: 75_000,  highlighted: false },
  { num: 2, setup: 2_000_000, monthly: 250_000, highlighted: true  },
  { num: 3, setup: 5_000_000, monthly: 700_000, highlighted: false },
];

export const CALCULATOR = {
  MARKETPLACE_FEE:   0.10,
  DIRECT_FEE:        0.007,
  DEFAULT_SHIFT_RATE: 0.30,
  DEFAULT_GMV:        10_000_000,
  MAX_GMV:           100_000_000,
};
