import { useQuery } from '@tanstack/react-query';
import { getHotspotRanking } from '@/api/endpoints/analytics.api';
import type { AnalyticsDateRange } from '@/api/types/analytics.types';
export default function useHotspotRanking(range: AnalyticsDateRange) { return useQuery({ queryKey: ['analytics', 'hotspots', range], queryFn: () => getHotspotRanking(range) }); }
