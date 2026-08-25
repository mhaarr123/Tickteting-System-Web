import { useQuery } from '@tanstack/react-query';
import { getResolutionRate } from '@/api/endpoints/analytics.api';
import type { AnalyticsDateRange } from '@/api/types/analytics.types';
export default function useResolutionRate(range: AnalyticsDateRange) { return useQuery({ queryKey: ['analytics', 'resolution', range], queryFn: () => getResolutionRate(range) }); }
