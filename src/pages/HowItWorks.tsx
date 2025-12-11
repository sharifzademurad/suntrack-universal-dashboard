import { Link } from 'react-router-dom';
import { Plug, Database, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      icon: Plug,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
    },
    {
      number: '02',
      icon: Database,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
    },
    {
      number: '03',
      icon: Brain,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
    },
  ];

  return (
    <main className="min-h-screen pt-24 lg:pt-32">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-up">
              {t.howItWorks.title}
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-up stagger-1">
              {t.howItWorks.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col lg:flex-row items-start gap-8 mb-16 lg:mb-24 last:mb-0 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-medium">
                      <step.icon className="w-10 h-10 text-accent" />
                    </div>
                    <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-soft">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-10 top-24 h-24 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 lg:mt-24 opacity-0 animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <Link to="/dashboard">
              <Button variant="hero" className="group">
                {t.nav.dashboard}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Infographic */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Step 1 */}
              <div className="flex-1 text-center p-6 opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <Plug className="w-12 h-12 text-primary" />
                </div>
                <p className="font-medium text-foreground">Connect</p>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-8 h-8 text-primary hidden lg:block" />

              {/* Step 2 */}
              <div className="flex-1 text-center p-6 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <Database className="w-12 h-12 text-primary" />
                </div>
                <p className="font-medium text-foreground">Collect</p>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-8 h-8 text-primary hidden lg:block" />

              {/* Step 3 */}
              <div className="flex-1 text-center p-6 opacity-0 animate-fade-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-accent border-2 border-accent flex items-center justify-center">
                  <Brain className="w-12 h-12 text-accent-foreground" />
                </div>
                <p className="font-medium text-foreground">Analyze</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
