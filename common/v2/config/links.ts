import { translateRaw } from 'v2/translations';
import {
  discordURL,
  ledgerReferralURL,
  trezorReferralURL,
  safeTReferralURL,
  ethercardReferralURL,
  keepkeyReferralURL,
  steelyReferralURL,
  CRYPTOSCAMDB
} from './data';
import { IRoutePath, IRoutePaths } from 'v2/types';

interface Link {
  link: string;
  text: string;
}

// As an intermediate step to creating a single place to reference URLS
// we create an overlap between the old Link and the new IRoutePath
type TmpLink = Partial<Link & IRoutePath>;

export const DOWNLOAD_MYCRYPTO_LINK = 'https://download.mycrypto.com';

export const socialMediaLinks: Link[] = [
  {
    link: 'https://twitter.com/mycrypto',
    text: 'twitter'
  },
  {
    link: 'https://www.facebook.com/mycryptoHQ/',
    text: 'facebook'
  },
  {
    link: 'https://medium.com/@mycrypto',
    text: 'medium'
  },
  {
    link: 'https://www.linkedin.com/company/mycrypto',
    text: 'linkedin'
  },
  {
    link: 'https://github.com/MyCryptoHQ',
    text: 'github'
  },
  {
    link: 'https://www.reddit.com/r/mycrypto/',
    text: 'reddit'
  },
  {
    link: discordURL,
    text: 'discord'
  }
];

export const productLinks: Link[] = [
  {
    link: 'https://legacy.mycrypto.com/',
    text: translateRaw('OLD_MYCRYPTO')
  },
  {
    link:
      'https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn',
    text: translateRaw('ETHER_ADDRESS_LOOKUP')
  },
  {
    link:
      'https://chrome.google.com/webstore/detail/ethersecuritylookup/bhhfhgpgmifehjdghlbbijjaimhmcgnf',
    text: translateRaw('ETHER_SECURITY_LOOKUP')
  },
  {
    link: CRYPTOSCAMDB,
    text: translateRaw('CRYPTOSCAMDB')
  },
  {
    link: 'https://legacy.mycrypto.com/helpers.html',
    text: translateRaw('FOOTER_HELP_AND_DEBUGGING')
  },
  {
    link: 'https://hackerone.com/mycrypto',
    text: translateRaw('FOOTER_HACKERONE')
  }
];

export const affiliateLinks: TmpLink[] = [
  {
    name: 'LEDGER_REFERRAL',
    path: ledgerReferralURL,
    link: ledgerReferralURL,
    text: translateRaw('LEDGER_REFERRAL_1')
  },
  {
    name: 'TREZOR_REFERRAL',
    path: trezorReferralURL,
    link: trezorReferralURL,
    text: translateRaw('TREZOR_REFERAL')
  },
  {
    link: safeTReferralURL,
    text: translateRaw('SAFE_T_REFERAL')
  },
  {
    link: keepkeyReferralURL,
    text: translateRaw('KEEPKEY_REFERRAL')
  },
  {
    link: steelyReferralURL,
    text: translateRaw('STEELY_REFERRAL')
  },
  {
    link: ethercardReferralURL,
    text: translateRaw('ETHERCARD_REFERAL')
  }
];

export const partnerLinks: Link[] = [
  {
    link: 'https://metamask.io/',
    text: 'MetaMask'
  },
  {
    link: 'https://infura.io/',
    text: 'Infura'
  },
  {
    link: 'https://etherscan.io/',
    text: 'Etherscan'
  },
  {
    link: 'https://etherchain.org/',
    text: 'Etherchain'
  }
];

export const EXT_URLS = createNavLinksFromExternalLinks(
  affiliateLinks.filter(l => l.name !== undefined) as IRoutePath[]
);

function createNavLinksFromExternalLinks(links: IRoutePath[]) {
  return links.reduce((navLinks, linkInfo) => {
    navLinks[linkInfo.name] = linkInfo;
    return navLinks;
  }, {} as IRoutePaths);
}
