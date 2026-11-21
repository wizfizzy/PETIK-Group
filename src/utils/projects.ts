import type { ProjectItem, ProjectSector } from '../data/companyData';

export const PROJECT_SECTORS: ('All' | ProjectSector)[] = [
  'All',
  'Real Estate',
  'Construction',
  'Energy',
  'Shortlet',
];

export function filterProjectsBySector(
  projects: ProjectItem[],
  sector: string = 'All'
): ProjectItem[] {
  if (!sector || sector === 'All') {
    return projects;
  }
  return projects.filter((project) => project.sector === sector);
}

export function findProjectById(
  projectId: string | null | undefined,
  projects: ProjectItem[]
): ProjectItem | null {
  if (!projectId) return null;
  return projects.find((project) => project.id === projectId) ?? null;
}
