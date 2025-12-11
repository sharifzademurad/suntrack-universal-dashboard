import { Link } from 'react-router-dom';
import { Activity, Brain, LineChart, DollarSign, Plug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import FeatureCard from '@/components/FeatureCard';
import WaitlistForm from '@/components/WaitlistForm';
import DashboardPreview from '@/components/DashboardPreview';

const Index = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Activity,
      title: t.features.realTimeMonitoring.title,
      description: t.features.realTimeMonitoring.description,
    },
    {
      icon: Brain,
      title: t.features.aiForecast.title,
      description: t.features.aiForecast.description,
    },
    {
      icon: LineChart,
      title: t.features.efficiency.title,
      description: t.features.efficiency.description,
    },
    {
      icon: DollarSign,
      title: t.features.costSavings.title,
      description: t.features.costSavings.description,
    },
    {
      icon: Plug,
      title: t.features.universalIntegration.title,
      description: t.features.universalIntegration.description,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-up">
              {t.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-primary font-medium mb-4 opacity-0 animate-fade-up stagger-1">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up stagger-2">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-3">
              <a href="#waitlist">
                <Button variant="hero">{t.hero.joinWaitlist}</Button>
              </a>
              <Link to="/how-it-works">
                <Button variant="heroOutline">{t.hero.learnMore}</Button>
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 lg:mt-24 max-w-5xl mx-auto opacity-0 animate-fade-up stagger-4">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t.features.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {t.waitlist.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.waitlist.subtitle}
              </p>
            </div>
            
            <div className="bg-card rounded-2xl border border-border shadow-soft p-6 lg:p-8">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
