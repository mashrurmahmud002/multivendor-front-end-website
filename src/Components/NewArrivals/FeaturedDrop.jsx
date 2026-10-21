export default function FeaturedDrop() {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Copy */}
      <div className="flex w-full lg:w-[50%] flex-col justify-between gap-16 px-8 py-16 lg:px-[91px]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a89f8f]">
          Featured drop / 01
        </p>

        <div>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a89f8f]">
            Atelier Nord — Copenhagen
          </p>

          <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-tight">
            Utility,
            <br />
            reconsidered.
          </h1>

          <p className="mt-7 max-w-[420px] text-sm leading-[1.65] text-neutral-400">
            A focused capsule of everyday layers built from natural materials
            and designed for years of use.
          </p>

          <a
            href="#drop"
            className="mt-9 bg-black inline-flex text-white items-center gap-8 border border-white px-6 py-[17px] text-[11px] font-bold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            View the drop
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="w-[50%]">
        <img src="https://i.ibb.co.com/vxthdvh8/Gemini-Generated-Image-wr9s76wr9s76wr9s.jpg" alt="Featured drop" className="h-full w-full object-cover" />
      </div>

      {/* Edge strip */}
      <div className="hidden bg-black lg:block" />
    </section>
  );
}