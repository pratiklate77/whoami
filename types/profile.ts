/**
 * Types for `content/profile.json` — personal identity & contact info.
 */
export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  twitter?: string;
  website?: string;
}

export interface Profile {
  name: string;
  /** Short headline, e.g. "Backend Developer at Magma Infotech". */
  title: string;
  /** Longer role descriptor shown in the hero / metadata. */
  role: string;
  location: string;
  email: string;
  bio: string;
  availableForWork: boolean;
  /** Path to the resume PDF inside `public/`, e.g. "/resume.pdf". */
  resume: string;
  social: SocialLinks;
}
