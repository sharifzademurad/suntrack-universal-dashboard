import { useLanguage } from '@/contexts/LanguageContext';
import DashboardPreview from '@/components/DashboardPreview';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-24 lg:pt-32 pb-20">
      {/* Header */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-up">
              {t.dashboard.title}
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-up stagger-1">
              {t.dashboard.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto opacity-0 animate-fade-up stagger-2">
            <DashboardPreview />
          </div>

          {/* CTA */}
          <div className="text-center mt-12 opacity-0 animate-fade-up stagger-3">
            <p className="text-muted-foreground mb-6">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button variant="hero">{t.nav.signUp}</Button>
              </Link>
              <a href="/#waitlist">
                <Button variant="heroOutline">{t.hero.joinWaitlist}</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
