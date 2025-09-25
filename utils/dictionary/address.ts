const ADDRESS = {
  city: 'респ. Крым, г. Ялта',
  street: 'ул. Сосновая, д. 23',
  full() {
    return `${this.city}, ${this.street}`;
  },
} as const;

const PHONE = {
  label: '+7 (978) 316-85-30',
  value: '+79783168530',
} as const;

const COMPANY = {
  name: 'ООО «СПКА»',
  inn: 'ИНН 9103105724',
  mail: 'mail@mail.ru',
} as const;

const TG_FEED_CHANNEL_LINK = 'https://t.me/tTurMir';

const SOCIALS = [
  { name: 'telegram', icon: 'tg-circled', link: 'https://t.me/MishelTur' },
  { name: 'vk', icon: 'vk-circled', link: 'https://vk.com/tturmir' },
  { name: 'whatsapp', icon: 'wa-circled', link: 'https://wa.me/79783168530' },
];

export { ADDRESS, PHONE, COMPANY, SOCIALS, TG_FEED_CHANNEL_LINK };
