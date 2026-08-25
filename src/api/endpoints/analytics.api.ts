import apiClient from '../client';
import type {
  AnalyticsDateRange,
  ViolationTrendPoint,
  PeakViolationCell,
  ViolationTypeItem,
  TicketRatioResponse,
  ResolutionRateResponse,
  MarketSectionAggregate,
  HotspotRank,
  VendorRiskRank,
} from '../types/analytics.types';

const unwrap = <T>(response: { data: T | { data: T } }): T => {
  const payload = response.data;
  return (payload && typeof payload === 'object' && 'data' in payload ? payload.data : payload) as T;
};

export function getViolationTrend(range: AnalyticsDateRange): Promise<ViolationTrendPoint[]> {
  return apiClient.get('/analytics/violation-trend', { params: range }).then((response) => unwrap(response));
}
export function getPeakViolationHeatmap(range: AnalyticsDateRange): Promise<PeakViolationCell[]> {
  return apiClient.get('/analytics/peak-violation-heatmap', { params: range }).then((response) => unwrap(response));
}
export function getViolationTypeDistribution(range: AnalyticsDateRange): Promise<ViolationTypeItem[]> {
  return apiClient.get('/analytics/violation-type-distribution', { params: range }).then((response) => unwrap(response));
}
export function getTicketRatio(range: AnalyticsDateRange): Promise<TicketRatioResponse> {
  return apiClient.get('/analytics/ticket-ratio', { params: range }).then((response) => unwrap(response));
}
export function getResolutionRate(range: AnalyticsDateRange): Promise<ResolutionRateResponse> {
  return apiClient.get('/analytics/resolution-rate', { params: range }).then((response) => unwrap(response));
}
export function getMarketSectionAggregation(range: AnalyticsDateRange): Promise<MarketSectionAggregate[]> {
  return apiClient.get('/analytics/market-section-aggregation', { params: range }).then((response) => unwrap(response));
}
export function getHotspotRanking(range: AnalyticsDateRange): Promise<HotspotRank[]> {
  return apiClient.get('/analytics/hotspot-ranking', { params: range }).then((response) => unwrap(response));
}
export function getVendorRiskRanking(range: AnalyticsDateRange): Promise<VendorRiskRank[]> {
  return apiClient.get('/analytics/vendor-risk-ranking', { params: range }).then((response) => unwrap(response));
}
