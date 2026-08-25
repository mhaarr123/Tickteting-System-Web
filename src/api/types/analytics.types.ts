export interface AnalyticsDateRange {
  startDate: string;
  endDate: string;
}

export interface ViolationTrendPoint {
  period: string;
  high: number;
  medium: number;
  low: number;
}

export interface PeakViolationCell {
  day: string;
  hour: string;
  density: number;
}

export interface ViolationTypeItem {
  name: string;
  count: number;
  percentage: number;
}

export interface TicketRatioResponse {
  warningPercentage: number;
  ticketPercentage: number;
  warningCount: number;
  ticketCount: number;
}

export interface ResolutionRateResponse {
  percentage: number;
  delta: number;
  resolvedCount: number;
  totalCount: number;
}

export interface MarketSectionAggregate {
  section: string;
  count: number;
}

export interface HotspotRank {
  rank: number;
  name: string;
  count: number;
  trend: 'up' | 'down' | 'flat';
}

export type RiskSeverity = 'High' | 'Medium' | 'Low';
export type RiskLevel = 'High Risk' | 'Medium Risk' | 'Low Risk';

export interface VendorRiskRank {
  rank: number;
  businessName: string;
  stallNo: string;
  offenseCount: number;
  highestSeverity: RiskSeverity;
  riskScore: number;
  riskLevel: RiskLevel;
}
