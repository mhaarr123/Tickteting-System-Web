import { Download, Calendar, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import type { AnalyticsDateRange } from '@/api/types/analytics.types';
import styles from './AnalyticsToolbar.module.css';

interface AnalyticsToolbarProps {
  dateRange: AnalyticsDateRange;
  onDateRangeChange: (range: AnalyticsDateRange) => void;
  onExport: () => void;
}

const formatDateRange = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const startMonth = start.toLocaleString('default', { month: 'short' });
  const endMonth = end.toLocaleString('default', { month: 'short' });
  const startDay = start.getDate();
  const endDay = end.getDate();
  const year = end.getFullYear();
  
  return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`;
};

const AnalyticsToolbar = ({ dateRange, onDateRangeChange, onExport }: AnalyticsToolbarProps) => {
  const handleDateChange = (type: 'startDate' | 'endDate') => (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateRangeChange({
      ...dateRange,
      [type]: e.target.value,
    });
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles.datePickerButton}>
        <Calendar size={16} className={styles.icon} />
        <span className={styles.dateText}>{formatDateRange(dateRange.startDate, dateRange.endDate)}</span>
        <ChevronDown size={16} className={styles.chevron} />
        <input
          type="date"
          value={dateRange.startDate}
          onChange={handleDateChange('startDate')}
          className={styles.hiddenStartInput}
          aria-label="Start date"
        />
        <input
          type="date"
          value={dateRange.endDate}
          onChange={handleDateChange('endDate')}
          className={styles.hiddenEndInput}
          aria-label="End date"
        />
      </div>

      <Button
        icon={<Download size={16} />}
        onClick={onExport}
        className={styles.exportButton}
      >
        Export
      </Button>
    </div>
  );
};

export default AnalyticsToolbar;
