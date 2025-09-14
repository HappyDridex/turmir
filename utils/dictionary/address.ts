const ADDRESS = {
  city: 'г. Москва',
  street: 'ул. Братиславская, д.18к1',
} as const;

const PHONE = {
  label: '+7 (978) 316-85-30',
  value: '+79783168530',
} as const;

const COMPANY = {
  name: 'ООО «Айти-Солюшнс»',
  inn: 'ИНН 7704480733',
} as const;

const SOCIALS = [
  { name: 'telegram', icon: 'tg-circled', link: 'https://t.me/TOURMIRYALTA' },
  { name: 'vk', icon: 'vk-circled', link: 'https://vk.com/club229708927' },
  { name: 'whatsapp', icon: 'wa-circled', link: 'https://t.me/TOURMIRYALTA' },
];

export { ADDRESS, PHONE, COMPANY, SOCIALS };
