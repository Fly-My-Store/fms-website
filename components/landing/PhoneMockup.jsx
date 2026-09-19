import Image from 'next/image';

const VERTICAL_TABS = [
  { key: 'all', label: 'All', icon: AllIcon, active: true },
  { key: 'wellness', label: 'Wellness', icon: PillIcon },
  { key: 'hungry', label: 'Hungry?', icon: CupcakeIcon },
  { key: 'grocery', label: 'Grocery', icon: AppleIcon },
];

const FEATURED = [
  { name: 'Wireless earbuds', price: '₹1,299', swatch: 'from-sky-100 to-blue-200', emoji: '🎧' },
  { name: '20W power bank', price: '₹899', swatch: 'from-orange-100 to-amber-200', emoji: '🔋' },
];

const STORES = [
  { name: 'City Mobile', meta: '4.6 · 25 mins', swatch: 'from-blue-500 to-sky-400' },
  { name: 'Fresh Mart', meta: '4.4 · 30 mins', swatch: 'from-emerald-500 to-teal-400' },
];

const BOTTOM_TABS = [
  { key: 'home', label: 'Home', icon: HomeIcon, active: true },
  { key: 'categories', label: 'Categories', icon: CategoriesIcon },
  { key: 'protect', label: 'Protect', icon: ShieldIcon },
  { key: 'orders', label: 'Orders', icon: OrdersIcon },
];

export default function PhoneMockup({ categories = [] }) {
  return (
    <div className="phone-mockup mx-auto w-full max-w-[300px]" aria-hidden>
      <div className="relative rounded-[2.2rem] border border-white/10 bg-zinc-900 p-[10px] shadow-2xl shadow-[#0070B8]/30">
        <div className="relative flex h-[540px] flex-col overflow-hidden rounded-[1.7rem] bg-[#FBFCFF]">
          <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-[18px] w-[78px] -translate-x-1/2 rounded-full bg-zinc-950" />

          <div className="shrink-0 bg-[#0070B8] pt-3 text-white">
            <div className="flex items-center justify-between px-5 pb-1 text-[10px] font-semibold">
              <span>9:41</span>
              <span className="flex items-center gap-1">
                <SignalIcon />
                <BatteryIcon />
              </span>
            </div>

            <div className="flex items-center justify-between px-4 pb-2 pt-1">
              <div className="min-w-0">
                <p className="flex items-center gap-0.5 text-[13px] font-bold leading-none">
                  Home
                  <ChevronIcon />
                </p>
                <p className="mt-1 truncate text-[11px] font-normal text-white/90">
                  Your neighbourhood
                </p>
              </div>
              <div className="flex h-8 items-center gap-2 rounded-full border border-white px-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <UserIcon />
                </span>
                <span className="flex w-3.5 flex-col gap-[3px]">
                  <span className="h-[2px] w-full rounded bg-white" />
                  <span className="h-[2px] w-2.5 self-end rounded bg-white" />
                  <span className="h-[2px] w-full rounded bg-white" />
                </span>
              </div>
            </div>

            <div className="px-4 pb-2">
              <div className="flex h-10 items-center gap-2 rounded-xl bg-[#FBFCFF] px-3">
                <SearchIcon />
                <span className="truncate text-[12px] text-[#626C7C]">
                  Search phone, kayak, soap…
                </span>
              </div>
            </div>

            <div className="relative grid grid-cols-4 px-1">
              {VERTICAL_TABS.map((tab) => {
                const Icon = tab.icon;
                return (
                  <div key={tab.key} className="flex flex-col items-center pb-1.5 pt-1">
                    <Icon active={tab.active} />
                    <span
                      className={
                        tab.active
                          ? 'mt-1 text-[9px] font-semibold text-white'
                          : 'mt-1 text-[9px] font-medium text-white/70'
                      }
                    >
                      {tab.label}
                    </span>
                  </div>
                );
              })}
              <span className="absolute bottom-0 left-0 grid w-full grid-cols-4">
                <span className="mx-auto h-1 w-10 rounded-t-sm bg-white" />
              </span>
            </div>
          </div>

          <div className="min-h-0 flex-1 space-y-2.5 overflow-hidden bg-white px-3 pt-2.5">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FFECD2] via-[#DCECF8] to-[#FBFCFF] px-3.5 py-2.5">
              <span className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#FF8C00]/20" />
              <span className="pointer-events-none absolute -bottom-3 -left-3 h-10 w-10 rounded-full bg-[#0070B8]/15" />
              <p className="text-[13px] font-extrabold leading-tight text-[#005CA8]">
                Shop local stores
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-[#626C7C]">
                Fresh groceries &amp; essentials nearby
              </p>
              <span className="mt-2 inline-flex rounded bg-[#D2E4F2] px-2.5 py-1 text-[10px] font-bold text-[#003878]">
                Shop now
              </span>
            </div>

            <SectionTitle title="Featured products" />
            <div className="flex gap-2.5">
              {FEATURED.map((product) => (
                <div
                  key={product.name}
                  className="w-[42%] overflow-hidden rounded-xl border border-[#CCD6E6] bg-white"
                >
                  <div
                    className={`flex h-14 items-center justify-center bg-gradient-to-br text-xl ${product.swatch}`}
                  >
                    {product.emoji}
                  </div>
                  <div className="p-1.5">
                    <p className="truncate text-[10px] font-medium text-[#616161]">{product.name}</p>
                    <p className="text-[11px] font-extrabold text-[#555555]">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {categories.length > 0 ? (
              <>
                <SectionTitle title="Shop by Category" action="View all" />
                <div className="grid grid-cols-4 gap-1">
                  {categories.slice(0, 4).map((cat) => (
                    <div key={cat.id || cat.slug} className="flex flex-col items-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F5F5]">
                        {cat.iconUrl ? (
                          <Image
                            src={cat.iconUrl}
                            alt=""
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                          />
                        ) : (
                          <span className="h-8 w-8 rounded-lg bg-slate-200" />
                        )}
                      </div>
                      <p className="mt-1 truncate text-center text-[9px] font-semibold leading-tight text-[#555555]">
                        {cat.name}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : null}

            <SectionTitle title="Local stores" action="See all stores" />
            <div className="grid grid-cols-2 gap-2">
              {STORES.map((store) => (
                <div key={store.name}>
                  <div
                    className={`h-12 overflow-hidden rounded-xl bg-gradient-to-br ${store.swatch}`}
                  />
                  <p className="mt-1 truncate text-[11px] font-bold text-[#555555]">{store.name}</p>
                  <p className="text-[10px] font-medium text-[#626C7C]">{store.meta}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 shrink-0 px-3 pb-1.5">
            <div className="flex items-center gap-2 rounded-2xl border border-white/40 bg-[#DCECF8]/95 px-2 py-1.5 shadow-lg shadow-[#0070B8]/20">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
                <TruckIcon />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-bold text-[#005CA8]">City Mobile</p>
                <p className="truncate text-[10px] font-medium text-[#005CA8]/70">Out for delivery</p>
              </div>
              <span className="flex shrink-0 items-center gap-0.5 rounded-full bg-[#0070B8] px-2.5 py-1.5 text-[11px] font-bold text-white">
                Track
                <TrackChevrons />
              </span>
            </div>
          </div>

          <div className="shrink-0 bg-[#DCECF8] pt-1">
            <div className="grid grid-cols-4 px-1">
              {BOTTOM_TABS.map((tab) => {
                const Icon = tab.icon;
                return (
                  <div key={tab.key} className="flex flex-col items-center gap-0.5 pb-1">
                    <span
                      className={
                        tab.active
                          ? 'flex h-7 w-12 items-center justify-center rounded-full bg-[#D2E4F2]'
                          : 'flex h-7 w-12 items-center justify-center'
                      }
                    >
                      <Icon active={tab.active} />
                    </span>
                    <span
                      className={
                        tab.active
                          ? 'text-[9px] font-semibold text-[#0070B8]'
                          : 'text-[9px] font-medium text-zinc-900'
                      }
                    >
                      {tab.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center pb-1.5 pt-0.5">
              <span className="h-1 w-24 rounded-full bg-zinc-900/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title, action }) {
  return (
    <div className="flex items-center gap-2">
      <p className="shrink-0 text-[12px] font-bold text-[#555555]">{title}</p>
      {action ? (
        <>
          <span className="h-px min-w-3 flex-1 border-b border-dashed border-[#F5F5F5]" />
          <span className="shrink-0 text-[10px] font-semibold text-[#0070B8]">{action}</span>
        </>
      ) : null}
    </div>
  );
}

function AllIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill={active ? '#fff' : 'rgba(255,255,255,0.7)'}>
      <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L7.8 14.39A2.77 2.77 0 0 1 5.4 15.38C3.53 15.38 2 13.87 2 12s1.53-3.38 3.4-3.38c.91 0 1.76.35 2.44 1.03l.65.65 1.41-1.41-.65-.65A5.385 5.385 0 0 0 5.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l7.03-6.24c.64-.64 1.49-.99 2.4-.99 1.87 0 3.4 1.51 3.4 3.38s-1.53 3.38-3.4 3.38c-.91 0-1.76-.35-2.44-1.03l-.65-.65-1.41 1.41.65.65c1.07 1.06 2.44 1.62 3.85 1.62 2.98 0 5.4-2.42 5.4-5.38s-2.42-5.38-5.4-5.38Z" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="rgba(255,255,255,0.7)">
      <path d="M4.22 11.29 11.29 4.22a5.54 5.54 0 0 1 7.84 7.84l-7.07 7.07a5.54 5.54 0 0 1-7.84-7.84m1.42 1.42c-1.05 1.04-1.05 2.75 0 3.79 1.03 1.05 2.75 1.05 3.79 0L16.5 9.43c1.04-1.04 1.04-2.76 0-3.79-1.04-1.05-2.75-1.05-3.79 0z" />
    </svg>
  );
}

function CupcakeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="rgba(255,255,255,0.7)">
      <path d="M12 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4.5 4c1.11 0 2 .89 2 2 0 .62-.3 1.17-.75 1.55 1.44.77 2.41 2.28 2.41 3.95 0 .17-.01.34-.03.5H3.87A6.2 6.2 0 0 1 3.84 13.5c0-1.67.97-3.18 2.41-3.95C5.8 9.17 5.5 8.62 5.5 8c0-1.11.89-2 2-2 .63 0 1.19.29 1.57.75C9.54 6.29 10.21 6 11 6c.79 0 1.46.29 1.93.75C13.31 6.29 13.87 6 14.5 6c.54 0 1.04.2 1.43.53.17-.33.35-.53.57-.53M8 12h8v3H8zM3 19h18v2H3z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="rgba(255,255,255,0.7)">
      <path d="M20 10c2 3-3 12-5 12-2 0-2-1-3-1s-2 1-4 1c-2 0-7-9-5-12 2-3 5-3 7-2V5C5.38 8.07 4.11 3.78 4.11 3.78S6.77.19 11 5V3h2v5c2-1 5-1 7 2Z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#0070B8">
      <path d="M9.5 3a6.5 6.5 0 0 1 5.2 10.4l4.4 4.5-1.4 1.4-4.5-4.4A6.5 6.5 0 1 1 9.5 3m0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#fff">
      <path d="M8.6 16.6 13.2 12 8.6 7.4 10 6l6 6-6 6z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#0070B8">
      <path d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 10c4.4 0 8 1.8 8 4v2H4v-2c0-2.2 3.6-4 8-4" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg viewBox="0 0 20 12" className="h-2.5 w-4" fill="#fff">
      <rect x="0" y="8" width="3" height="4" rx="0.5" />
      <rect x="5" y="5" width="3" height="7" rx="0.5" />
      <rect x="10" y="2" width="3" height="10" rx="0.5" />
      <rect x="15" y="0" width="3" height="12" rx="0.5" opacity="0.45" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg viewBox="0 0 22 12" className="h-2.5 w-5" fill="none">
      <rect x="0.5" y="1" width="18" height="10" rx="2" stroke="#fff" />
      <rect x="2" y="2.5" width="13" height="7" rx="1" fill="#fff" />
      <rect x="19.5" y="4" width="2" height="4" rx="0.6" fill="#fff" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#0070B8">
      <path d="M3 4h11v11H3zm12 3h3.5L21 10.5V15h-6zM6 18.5A1.5 1.5 0 1 0 6 21a1.5 1.5 0 0 0 0-2.5m10 0A1.5 1.5 0 1 0 16 21a1.5 1.5 0 0 0 0-2.5" />
    </svg>
  );
}

function TrackChevrons() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#fff">
      <path d="m8 6 6 6-6 6-1.4-1.4L11.2 12 6.6 7.4zm5 0 6 6-6 6-1.4-1.4L16.2 12 11.6 7.4z" />
    </svg>
  );
}

function HomeIcon({ active }) {
  return (
    <svg viewBox="0 -960 960 960" className="h-5 w-5" fill={active ? '#0070B8' : '#111'}>
      <path d="M160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H600q-17 0-28.5-11.5T560-160v-200q0-17-11.5-28.5T520-400h-80q-17 0-28.5 11.5T400-360v200q0 17-11.5 28.5T360-120H240q-33 0-56.5-23.5T160-200Z" />
    </svg>
  );
}

function CategoriesIcon() {
  return (
    <svg viewBox="0 -960 960 960" className="h-5 w-5" fill="#111">
      <path d="M340-540H200q-33 0-56.5-23.5T120-620v-140q0-33 23.5-56.5T200-840h140q33 0 56.5 23.5T420-760v140q0 33-23.5 56.5T340-540Zm-140-80h140v-140H200v140Zm140 500H200q-33 0-56.5-23.5T120-200v-140q0-33 23.5-56.5T200-420h140q33 0 56.5 23.5T420-340v140q0 33-23.5 56.5T340-120Zm-140-80h140v-140H200v140Zm560-340H620q-33 0-56.5-23.5T540-620v-140q0-33 23.5-56.5T620-840h140q33 0 56.5 23.5T840-760v140q0 33-23.5 56.5T760-540Zm-140-80h140v-140H620v140Zm140 500H620q-33 0-56.5-23.5T540-200v-140q0-33 23.5-56.5T620-420h140q33 0 56.5 23.5T840-340v140q0 33-23.5 56.5T760-120Zm-140-80h140v-140H620v140ZM340-620Zm0 280Zm280-280Zm0 280Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 -960 960 960" className="h-5 w-5" fill="#111">
      <path d="M467-85q-6-1-12-3-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1q-7 0-13-1Zm13-79q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" />
    </svg>
  );
}

function OrdersIcon() {
  return (
    <svg viewBox="0 -960 960 960" className="h-5 w-5" fill="#111">
      <path d="M160-240v-436L98-810q-7-15-1-30.5t21-22.5q15-7 30.5-1.5T171-844l77 166h464l77-166q7-15 22.5-21t30.5 2q15 7 21 22.5t-1 30.5l-62 134v436q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm240-200h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z" />
    </svg>
  );
}
