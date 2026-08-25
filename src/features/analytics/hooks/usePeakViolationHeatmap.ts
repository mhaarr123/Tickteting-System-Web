import { useQuery } from '@tanstack/react-query';
import { getPeakViolationHeatmap } from '@/api/endpoints/analytics.api';
import type { AnalyticsDateRange } from '@/api/types/analytics.types';
export default function usePeakViolationHeatmap(range: AnalyticsDateRange) { return useQuery({ queryKey: ['analytics', 'heatmap', range], queryFn: () => getPeakViolationHeatmap(range) }); }
