import { slugify } from '../specialities';
import { KNEE } from './knee';
import { NEUROLOGICAL_GUIDES } from './neurological';
import { ORTHOPAEDIC_GUIDES } from './orthopaedic';
import { PULMONARY_GUIDES } from './pulmonary';
import type { ConditionGuide } from './types';

/** All condition guides. The order within each speciality follows services.json. */
export const GUIDES: ConditionGuide[] = [KNEE, ...ORTHOPAEDIC_GUIDES, ...NEUROLOGICAL_GUIDES, ...PULMONARY_GUIDES];

export const guidePath = (g: ConditionGuide) => `/rehabilitation/${g.spec}/${g.slug}`;
export const findGuide = (spec: string, slug: string) => GUIDES.find((g) => g.spec === spec && g.slug === slug);
export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);

/** Condition name slug → guide path, so menus, cards and footers link to guides automatically. */
export const GUIDE_LINKS: Record<string, string> = Object.fromEntries(GUIDES.map((g) => [slugify(g.condition), guidePath(g)]));
