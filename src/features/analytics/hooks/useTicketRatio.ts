import { useQuery } from '@tanstack/react-query';
import { getTicketRatio } from '@/api/endpoints/analytics.api';
import type { AnalyticsDateRange } from '@/api/types/analytics.types';
export default function useTicketRatio(range: AnalyticsDateRange) { return useQuery({ queryKey: ['analytics', 'ticket-ratio', range], queryFn: () => getTicketRatio(range) }); }
