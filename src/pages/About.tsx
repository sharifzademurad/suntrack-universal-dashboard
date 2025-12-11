import { Target, HelpCircle, Lightbulb, Users, Home, Tv, Thermometer, Wind, WashingMachine, Droplets, Trash2, Flame, Monitor, BatteryCharging, Activity, Clock, TrendingUp, AlertTriangle, PieChart, FileText, Brain, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const sections = [
    {
      icon: Target,
      title: t.about.mission.title,
      description: t.about.mission.description,
    },
    {
      icon: HelpCircle,
      title: t.about.whyExists.title,
      description: t.about.whyExists.description,
    },
    {
      icon: Lightbulb,
      title: t.about.problem.title,
      description: t.about.problem.description,
    },
    {
      icon: Users,
      title: t.about.whoFor.title,
      description: t.about.whoFor.description,
    },
  ];

  const devices = [
    { key: 'tv', icon: Tv },
    { key: 'fridge', icon: Thermometer },
    { key: 'ac', icon: Wind },
    { key: 'washer', icon: WashingMachine },
    { key: 'dishwasher', icon: Droplets },
    { key: 'waterPump', icon: Droplets },
    { key: 'vacuum', icon: Trash2 },
    { key: 'boiler', icon: Flame },
    { key: 'oven', icon: Flame },
    { key: 'computer', icon: Monitor },
    { key: 'chargers', icon: BatteryCharging },
  ];

  return (
    <main className="min-h-screen pt-24 lg:pt-32">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-up">
              {t.about.title}
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-up stagger-1">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center opacity-0 animate-fade-up stagger-2">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <section.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {section.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Home Integration Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Smart Home Header */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {t.about.smartHome.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.about.smartHome.subtitle}
              </p>
            </div>

            {/* 1. Select Device */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">1</span>
                {t.about.smartHome.selectDevice}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {devices.map((device) => (
                  <div
                    key={device.key}
                    className="p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-medium transition-all duration-300 text-center cursor-pointer group"
                  >
                    <device.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary mx-auto mb-2 transition-colors" />
                    <span className="text-sm font-medium text-foreground">
                      {t.about.smartHome.devices[device.key as keyof typeof t.about.smartHome.devices]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Device Data Display */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">2</span>
                {t.about.smartHome.devices.tv} - Data Display
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Real-time Status */}
                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Activity className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-foreground">{t.about.smartHome.realTimeStatus.title}</h4>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      {t.about.smartHome.realTimeStatus.status}: <span className="text-green-500 font-medium">{t.about.smartHome.realTimeStatus.running}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      {t.about.smartHome.realTimeStatus.currentWatts}: <span className="font-medium text-foreground">120W</span>
                    </li>
                  </ul>
                </div>

                {/* Usage Statistics */}
                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-foreground">{t.about.smartHome.usageStats.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t.about.smartHome.usageStats.hoursToday}: <span className="font-medium text-foreground">4.5h</span></li>
                    <li>• {t.about.smartHome.usageStats.dailyEnergy}: <span className="font-medium text-foreground">0.54 kWh</span></li>
                    <li>• {t.about.smartHome.usageStats.weeklyEnergy}: <span className="font-medium text-foreground">3.8 kWh</span></li>
                    <li>• {t.about.smartHome.usageStats.monthlyEnergy}: <span className="font-medium text-foreground">16.2 kWh</span></li>
                    <li>• {t.about.smartHome.usageStats.monthlyShare}: <span className="font-medium text-foreground">8%</span></li>
                  </ul>
                </div>

                {/* Savings */}
                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-foreground">{t.about.smartHome.savings.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t.about.smartHome.savings.savedAmount}: <span className="font-medium text-green-500">₼12.50</span></li>
                    <li>• {t.about.smartHome.savings.peakHours}: <span className="font-medium text-foreground">18:00 - 21:00</span></li>
                  </ul>
                </div>
              </div>

              {/* Pie Chart Section */}
              <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <PieChart className="w-6 h-6 text-primary" />
                  <h4 className="font-bold text-foreground">{t.about.smartHome.savings.pieChartTitle}</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">35%</div>
                    <div className="text-sm text-muted-foreground">{t.about.smartHome.devices.ac}</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">28%</div>
                    <div className="text-sm text-muted-foreground">{t.about.smartHome.devices.fridge}</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">8%</div>
                    <div className="text-sm text-muted-foreground">{t.about.smartHome.devices.tv}</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-2xl font-bold text-muted-foreground">29%</div>
                    <div className="text-sm text-muted-foreground">Other</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. AI Recommendations */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">3</span>
                {t.about.smartHome.aiRecommendations.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* TV Recommendations */}
                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Tv className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-foreground">{t.about.smartHome.devices.tv}</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-muted-foreground">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 inline mr-2" />
                      {t.about.smartHome.aiRecommendations.examples.tv1}
                    </div>
                    <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg text-sm text-muted-foreground">
                      <AlertTriangle className="w-4 h-4 text-orange-500 inline mr-2" />
                      {t.about.smartHome.aiRecommendations.examples.tv2}
                    </div>
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-sm text-muted-foreground">
                      <TrendingUp className="w-4 h-4 text-green-500 inline mr-2" />
                      {t.about.smartHome.aiRecommendations.examples.tv3}
                    </div>
                  </div>
                </div>

                {/* Vacuum Recommendations */}
                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Trash2 className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-foreground">{t.about.smartHome.devices.vacuum}</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-muted-foreground">
                      <AlertTriangle className="w-4 h-4 text-red-500 inline mr-2" />
                      {t.about.smartHome.aiRecommendations.examples.vacuum1}
                    </div>
                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-blue-500 inline mr-2" />
                      {t.about.smartHome.aiRecommendations.examples.vacuum2}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Panel Features */}
              <div className="mt-6 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                  <h4 className="font-bold text-foreground">AI Panel</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    {t.about.smartHome.aiRecommendations.riskWarnings}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    {t.about.smartHome.aiRecommendations.savingsTips}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-blue-500" />
                    {t.about.smartHome.aiRecommendations.timingAdvice}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Zap className="w-4 h-4 text-accent" />
                    {t.about.smartHome.aiRecommendations.autoPlan}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Reports */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">4</span>
                {t.about.smartHome.reports.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-card rounded-xl border border-border flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{t.about.smartHome.reports.dailyUsage}</span>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border flex items-center gap-3">
                  <PieChart className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{t.about.smartHome.reports.weeklyChart}</span>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{t.about.smartHome.reports.monthlySavings}</span>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{t.about.smartHome.reports.topConsumers}</span>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{t.about.smartHome.reports.energyLoss}</span>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border flex items-center gap-3">
                  <Brain className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{t.about.smartHome.reports.healthReport}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Inverter Brands</p>
              </div>
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <div className="text-4xl font-bold text-primary mb-2">AI</div>
                <p className="text-muted-foreground">Powered Analytics</p>
              </div>
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
