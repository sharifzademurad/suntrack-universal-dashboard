import { Target, HelpCircle, Lightbulb, Users } from 'lucide-react';
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

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary/30">
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
