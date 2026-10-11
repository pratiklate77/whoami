/**
 * Types for `content/projects.json` — featured portfolio projects.
 */
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  /** May be an empty string when there is no live deployment yet. */
  liveUrl: string;
}
