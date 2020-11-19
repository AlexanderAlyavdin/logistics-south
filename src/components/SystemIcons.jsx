import makeFAIcon from "utils/makeFAIcon";

import { faPhone, faEnvelope, faPlus, faBars, faTimes, faHandshake, faBriefcase, faWallet, faFileDownload, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";

export const PhoneIcon = makeFAIcon(faPhone);
export const EnvelopIcon = makeFAIcon(faEnvelope);
export const PlusIcon = makeFAIcon(faPlus);
export const BarsIcon = makeFAIcon(faBars);
export const GithubIcon = makeFAIcon(faGithubAlt);
export const MediumIcon = makeFAIcon(faMediumM);
export const CloseIcon = makeFAIcon(faTimes);
export const HandshakeIcon = makeFAIcon(faHandshake);
export const BriefcaseIcon = makeFAIcon(faBriefcase);
export const WalletIcon = makeFAIcon(faWallet);
export const FileDownloadIcon = makeFAIcon(faFileDownload);
export const MapMarkedAltIcon = makeFAIcon(faMapMarkedAlt);

export const TwitterIcon = makeFAIcon(faTwitter);
export const FacebookIcon = makeFAIcon(faFacebookF);
export const LinkedinIcon = makeFAIcon(faLinkedinIn);

export * from "config/CustomIcons";
