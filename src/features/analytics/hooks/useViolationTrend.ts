import { useQuery } from '@tanstack/react-query';
import { getViolationTrend } from '@/api/endpoints/analytics.api';
import type { AnalyticsDateRange } from '@/api/types/analytics.types';
export default function useViolationTrend(range: AnalyticsDateRange) { return useQuery({ queryKey: ['analytics', 'trend', range], queryFn: () => getViolationTrend(range) }); }
