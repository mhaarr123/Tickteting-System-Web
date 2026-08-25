import { useQuery } from '@tanstack/react-query';
import { getMarketSectionAggregation } from '@/api/endpoints/analytics.api';
import type { AnalyticsDateRange } from '@/api/types/analytics.types';
export default function useMarketSectionAggregation(range: AnalyticsDateRange) { return useQuery({ queryKey: ['analytics', 'sections', range], queryFn: () => getMarketSectionAggregation(range) }); }
