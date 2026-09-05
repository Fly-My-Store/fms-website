import ShareLanding from '@/components/ShareLanding';
import { site } from '@/lib/site';
import { fetchShareLink, normalizeShareLane } from '@/lib/shareLink';

export function sharePageMetadata(lane) {
  return async function generateMetadata({ params }) {
    const { code } = await params;
    const resolvedLane = normalizeShareLane(lane);
    const data = await fetchShareLink(code, { lane: resolvedLane });
    const preview = data?.preview || {};
    const title = preview.title ? `${preview.title} | ${site.name}` : site.name;
    const description = preview.subtitle || site.description;
    return {
      title,
      description,
      openGraph: {
        title: preview.title || site.name,
        description,
        url: `${site.domain}/${resolvedLane}/${code}`,
        images: preview.image_url ? [{ url: preview.image_url }] : [{ url: `${site.domain}/logo.png` }],
      },
      twitter: {
        card: 'summary_large_image',
        title: preview.title || site.name,
        description,
      },
    };
  };
}

export function ShareLinkPageForLane(lane) {
  return async function ShareLinkPage({ params }) {
    const { code } = await params;
    const resolvedLane = normalizeShareLane(lane);
    const data = await fetchShareLink(code, { lane: resolvedLane });
    if (!data) {
      return (
        <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-4 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Link not found</h1>
          <p className="mt-2 text-slate-600">This share link is inactive or does not exist.</p>
          {resolvedLane === 'xt' ? (
            <p className="mt-1 text-xs text-slate-400">Dev lane (/xt) → api-dev</p>
          ) : null}
          <a href="/" className="mt-6 text-sm font-semibold text-blue-600 underline">
            Go to Fly My Store
          </a>
        </main>
      );
    }
    return <ShareLanding code={code} data={data} lane={resolvedLane} />;
  };
}
