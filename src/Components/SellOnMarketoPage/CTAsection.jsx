const IMG =
  "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80";

export default function CtaSection() {
  return (
    <section
      className="w-full border-t border-black bg-white px-6 py-16 text-black sm:px-7 lg:py-[70px]"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_273px] lg:gap-[60px]">
        {/* Left */}
        <div className="lg:pb-4">
          <p className="mb-5 text-3xl font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Your next chapter
          </p>
          <h2 className="text-[64px] font-extrabold uppercase leading-[0.92] tracking-tight sm:text-[88px]">
            Ready to be
            <br />
            discovered?
          </h2>
        </div>

        {/* Right */}
        <div>
          <img
            src={IMG}
            alt=""
            className="h-[180px] w-full border border-black object-cover grayscale contrast-125"
          />
          <p className="mt-6 text-2xl leading-relaxed text-neutral-500">
            Build your Marketo storefront and introduce your products to
            customers looking for something different.
          </p>
          <a
            href="#"
            className="mt-5 flex h-auto w-[180px] items-center justify-between bg-[#e3300f] px-4 py-2 text-[6px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-black"
          >
            Start your application <span className="text-[10px]">→</span>
          </a>
          <p className="mt-3 text-[6px] uppercase tracking-[0.15em] text-neutral-400">
            No monthly fee / Apply in about 15 minutes
          </p>
        </div>
      </div>
    </section>
  );
}