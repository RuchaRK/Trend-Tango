import { formatRelative } from 'date-fns';

import { enUS } from 'date-fns/esm/locale';

const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'PP'
};

const locale = {
  ...enUS,
  formatRelative: (token) => formatRelativeLocale[token]
};

export const getRelativeFormattedDate = (date) => {
  return formatRelative(new Date(date), new Date(), {
    locale
  });
};
