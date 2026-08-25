import { useQuery } from '@tanstack/react-query';
import { getViolationTypeDistribution } from '@/api/endpoints/analytics.api';
import type { AnalyticsDateRange } from '@/api/types/analytics.types';
export default function useViolationTypeDistribution(range: AnalyticsDateRange) { return useQuery({ queryKey: ['analytics', 'types', range], queryFn: () => getViolationTypeDistribution(range) }); }
