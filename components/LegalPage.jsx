import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import LegalCrossLinks from '@/components/LegalCrossLinks';

export default function LegalPage({ title, description, currentPath, children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <header className="mb-8 border-b border-slate-200 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-3 text-base text-slate-600">{description}</p>
            ) : null}
          </header>
          <article className="legal-content space-y-6 text-slate-700">
            {children}
            {currentPath ? <LegalCrossLinks currentPath={currentPath} /> : null}
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
