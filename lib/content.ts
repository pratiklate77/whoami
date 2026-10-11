import "server-only";

import { readFileSync } from "node:fs";
import { join } from "node:path";

import type { Experience, Profile, Project } from "@/types";

/**
 * Absolute path to the Git-tracked `content/` directory at the project root.
 *
 * Because these JSON files live in the repository, they can be edited and
 * versioned like source code — no external database or CMS required. The
 * single-page portfolio is statically prerendered at build time, so these
 * synchronous reads happen once on the server and are served instantly.
 */
const CONTENT_DIR = join(process.cwd(), "content");

function readJson<T>(filename: string): T {
  const raw = readFileSync(join(CONTENT_DIR, filename), "utf-8");
  return JSON.parse(raw) as T;
}

/** Returns the parsed contents of `content/profile.json`. */
export function getProfile(): Profile {
  return readJson<Profile>("profile.json");
}

/** Returns the parsed contents of `content/projects.json`. */
export function getProjects(): Project[] {
  return readJson<Project[]>("projects.json");
}

/** Returns the parsed contents of `content/experience.json`. */
export function getExperience(): Experience {
  return readJson<Experience>("experience.json");
}
