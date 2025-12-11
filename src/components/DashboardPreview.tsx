import { Activity, Zap, TrendingUp, DollarSign, Heart, Bell } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DashboardPreview = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Zap,
      label: t.dashboard.currentPower,
      value: '4.2',
      unit: 'kW',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Activity,
      label: t.dashboard.todayEnergy,
      value: '28.5',
      unit: 'kWh',
      color: 'text-accent-foreground',
      bgColor: 'bg-accent/20',
    },
    {
      icon: TrendingUp,
      label: t.dashboard.aiForecast,
      value: '+12%',
      unit: '',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      note: t.dashboard.forecastNote,
    },
    {
      icon: DollarSign,
      label: t.dashboard.monthlySavings,
      value: '$127',
      unit: '',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Heart,
      label: t.dashboard.panelHealth,
      value: '98%',
      unit: '',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      note: t.dashboard.allPanelsOperational,
    },
    {
      icon: Bell,
      label: t.dashboard.alerts,
      value: '0',
      unit: '',
      color: 'text-muted-foreground',
      bgColor: 'bg-secondary',
      note: t.dashboard.noAlerts,
    },
  ];

  return (
    <div className="bg-card rounded-3xl border border-border shadow-medium p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-semibold text-foreground">Solar Dashboard</h3>
          <p className="text-sm text-muted-foreground">Real-time monitoring</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Live</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/20 transition-all duration-300 opacity-0 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              {stat.unit && <span className="text-sm text-muted-foreground">{stat.unit}</span>}
            </div>
            {stat.note && (
              <p className="text-xs text-muted-foreground mt-2">{stat.note}</p>
            )}
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="mt-8 p-6 rounded-2xl bg-secondary/30 border border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-foreground">7-Day Energy Production</h4>
          <span className="text-xs text-muted-foreground">kWh</span>
        </div>
        <div className="flex items-end justify-between h-32 gap-2">
          {[65, 78, 82, 70, 88, 92, 85].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-primary/20 rounded-t-lg relative overflow-hidden group"
              style={{ height: `${height}%` }}
            >
              <div 
                className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg transition-all duration-500"
                style={{ height: `${height}%`, animationDelay: `${i * 100}ms` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
