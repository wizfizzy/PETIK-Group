import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import type { ProjectItem } from '../data/companyData';
import { filterProjectsBySector, findProjectById, PROJECT_SECTORS } from './projects';

const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: 'amarisa-court',
    name: 'Amarisa Court',
    location: 'Osogbo, Osun State',
    sector: 'Shortlet',
    enquiryService: 'Amarisa Court Shortlet Living',
    role: 'Developer & Facility Operator',
    scope: 'Serviced shortlet apartments with hybrid backup power.',
    yearAndStatus: '[PLACEHOLDER: Year] · Operational Shortlet',
    verifiedOutcome: '[PLACEHOLDER: Verified outcome]',
    clientName: 'Petik Limited (Own Portfolio)',
    image: 'amarisa.jpg',
    imageAlt: 'Furnished shortlet living area representing Amarisa Court',
    isIllustrative: true,
    caseStudy: {
      brief: 'Sample brief',
      challenge: 'Sample challenge',
      approach: 'Sample approach',
      outcome: 'Sample outcome',
      gallery: [
        {
          image: 'amarisa.jpg',
          alt: 'Living area layout',
          caption: 'Living area',
          isIllustrative: true,
        },
      ],
    },
  },
  {
    id: 'lekki-commercial',
    name: '[PLACEHOLDER: Lekki Project]',
    location: 'Lekki Phase 1, Lagos State',
    sector: 'Real Estate',
    enquiryService: 'Real Estate Development & Advisory',
    role: 'Development Advisor',
    scope: 'Title checks and feasibility review.',
    yearAndStatus: '[PLACEHOLDER: Year & Status]',
    verifiedOutcome: '[PLACEHOLDER: Verified outcome]',
    clientName: '[PLACEHOLDER: Client Name]',
    image: 'lekki.jpg',
    imageAlt: 'Commercial building facade representing Lagos real estate',
    isIllustrative: true,
    caseStudy: {
      brief: 'Sample brief',
      challenge: 'Sample challenge',
      approach: 'Sample approach',
      outcome: 'Sample outcome',
      gallery: [],
    },
  },
];

test('PROJECT_SECTORS includes All and expected sectors', () => {
  assert.deepEqual(PROJECT_SECTORS, [
    'All',
    'Real Estate',
    'Construction',
    'Energy',
    'Shortlet',
  ]);
});

test('filterProjectsBySector filters accurately and returns all for All', () => {
  assert.equal(filterProjectsBySector(SAMPLE_PROJECTS, 'All').length, 2);
  const shortlets = filterProjectsBySector(SAMPLE_PROJECTS, 'Shortlet');
  assert.equal(shortlets.length, 1);
  assert.equal(shortlets[0].id, 'amarisa-court');
});

test('findProjectById resolves known projects and returns null for unknown IDs', () => {
  const found = findProjectById('amarisa-court', SAMPLE_PROJECTS);
  assert.ok(found);
  assert.equal(found.name, 'Amarisa Court');
  assert.equal(findProjectById('non-existent', SAMPLE_PROJECTS), null);
  assert.equal(findProjectById(null, SAMPLE_PROJECTS), null);
});

test('companyData.ts contains no unverified 24/7 guarantees, percentage claims, or kWp output metrics', () => {
  const raw = fs.readFileSync(path.resolve('src/data/companyData.ts'), 'utf8');
  assert.doesNotMatch(raw, /24\/7|300kWp|45%|30%|Verified Division|Verified Office/i);
  assert.match(raw, /isIllustrative:\s*true/);
  assert.match(raw, /imageAlt:/);
});
