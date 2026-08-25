import { useQuery } from '@tanstack/react-query';
import { getVendorRiskRanking } from '@/api/endpoints/analytics.api';
import type { AnalyticsDateRange } from '@/api/types/analytics.types';
export default function useVendorRiskRanking(range: AnalyticsDateRange) { return useQuery({ queryKey: ['analytics', 'vendor-risk', range], queryFn: () => getVendorRiskRanking(range) }); }
