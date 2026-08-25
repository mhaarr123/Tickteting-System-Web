import { useState } from 'react';
import ViolationTrendChart from '../components/ViolationTrendChart';
import PeakViolationHeatmap from '../components/PeakViolationHeatmap';
import ViolationTypeDonut from '../components/ViolationTypeDonut';
import TicketRatioCard from '../components/TicketRatioCard';
import ResolutionRateCard from '../components/ResolutionRateCard';
import MarketSectionBarChart from '../components/MarketSectionBarChart';
import HotspotRankingTable from '../components/HotspotRankingTable';
import VendorRiskRankingTable from '../components/VendorRiskRankingTable';
import AnalyticsToolbar from '../components/AnalyticsToolbar';
import type { AnalyticsDateRange } from '@/api/types/analytics.types';
import styles from './ViolationAnalyticsPage.module.css';

const ViolationAnalyticsPage = () => {
  const [range, setRange] = useState<AnalyticsDateRange>({ startDate: '2026-01-01', endDate: '2026-07-31' });

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Violation Analytics</h1>
          <p>System-wide performance monitoring and enforcement data analysis</p>
        </div>
      </div>

      <AnalyticsToolbar
        dateRange={range}
        onDateRangeChange={setRange}
        onExport={() => console.log('Export analytics', range)}
      />

      <SectionLabel text="Time-Series Analysis" />
      <div className={styles.twoColumns}>
        <ViolationTrendChart range={range} />
        <PeakViolationHeatmap range={range} />
      </div>

      <SectionLabel text="Frequency Distribution" />
      <div className={styles.threeColumns}>
        <ViolationTypeDonut range={range} />
        <TicketRatioCard range={range} />
        <ResolutionRateCard range={range} />
      </div>

      <SectionLabel text="Aggregation And Ranking" />
      <div className={styles.twoColumns}>
        <MarketSectionBarChart range={range} />
        <HotspotRankingTable range={range} />
      </div>

      <SectionLabel text="Weighted Scoring" />
      <VendorRiskRankingTable range={range} />
    </div>
  );
};
const SectionLabel = ({ text }: { text: string }) => <div className={styles.sectionLabel}>{text}</div>;
export default ViolationAnalyticsPage;
