import { useEffect } from "react";

/**
 * Marketo — "Why we exist" section
 * Stack: React + Tailwind CSS
 */
export default function MarketoWhyWeExist() {
  useEffect(() => {
    const id = "barlow-font";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;800;900&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <section
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
      className="w-full bg-white text-black px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 lg:grid-cols-[minmax(120px,22%)_1fr] lg:gap-0">
        {/* Label */}
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] lg:pt-3">
          Why we exist
        </p>

        {/* Content */}
        <div className="max-w-5xl">
          <h2 className="font-black uppercase leading-[0.95] tracking-[-0.01em] text-[clamp(1.9rem,5.2vw,4.1rem)]">
            The future of retail should not belong to a handful of identical
            storefronts.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 md:gap-10 lg:mt-16">
            <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
              Great commerce begins with people who care deeply about what they
              make, source, and sell. Yet independent vendors are often asked
              to choose between reach and control.
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
              We built Marketo to remove that compromise: a professional
              marketplace with global scale, transparent economics, and enough
              flexibility for every business to stay distinct.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}