/**
 * Types for `content/experience.json` — work history & education timeline.
 */
export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  /** Human-readable dates, e.g. "October 2026". */
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  techStack: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  work: WorkExperience[];
  education: Education[];
}
