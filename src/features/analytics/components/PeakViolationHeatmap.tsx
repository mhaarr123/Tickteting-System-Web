import Card from '@/components/ui/Card';
import usePeakViolationHeatmap from '../hooks/usePeakViolationHeatmap';
import type { AnalyticsDateRange } from '@/api/types/analytics.types';
import styles from '../pages/ViolationAnalyticsPage.module.css';

const PeakViolationHeatmap = ({ range }: { range: AnalyticsDateRange }) => {
  const query = usePeakViolationHeatmap(range);
  const data = query.data ?? [];
  const max = Math.max(...data.map((cell) => cell.density), 1);
  const days = [...new Set(data.map((cell) => cell.day))];
  const hours = [...new Set(data.map((cell) => cell.hour))];
  return <Card className={styles.chartCard}><h3>Peak Violation Time Analysis</h3><p className={styles.cardSubtitle}>Violation density heatmap across days and time blocks</p>{query.isLoading ? <div className={styles.loading}>Loading analytics...</div> : query.isError ? <div className={styles.empty}>Unable to load analytics.</div> : !data.length ? <div className={styles.empty}>No data for this date range.</div> : <><div className={styles.heatmapGrid}><div /><div className={styles.heatLabels}>{hours.map((hour) => <span key={hour}>{hour}</span>)}</div>{days.map((day) => <><span className={styles.dayLabel} key={`${day}-label`}>{day}</span><div className={styles.heatmapRow} key={day}>{hours.map((hour) => { const cell = data.find((item) => item.day === day && item.hour === hour); return <div key={`${day}-${hour}`} title={`${day}, ${hour}: ${cell?.density ?? 0}`} style={{ opacity: .2 + (cell?.density ?? 0) / max * .8 }} className={styles.heatCell}>{cell?.density ?? 0}</div>; })}</div></>)}</div><div className={styles.legend}>Low Density <span /> <span /> <span /> High Density</div></>}</Card>;
};
export default PeakViolationHeatmap;
