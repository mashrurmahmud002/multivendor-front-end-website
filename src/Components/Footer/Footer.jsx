import { useEffect } from "react";

const footerColumns = [
  {
    title: "Marketplace",
    links: ["Browse Products", "Top Vendors", "New Arrivals", "Flash Deals", "Gift Cards"],
  },
  {
    title: "Vendors",
    links: ["Start Selling", "Vendor Dashboard", "Pricing & Fees", "Success Stories", "Support"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Blog", "Sustainability"],
  },
  {
    title: "Legal",
    links: ["Terms of Use", "Privacy Policy", "Cookie Policy", "Buyer Protection"],
  },
];

const socials = ["X / Twitter", "Instagram", "LinkedIn"];

const linkClass =
  "text-gray-500 transition-colors hover:text-black focus:outline-none focus-visible:text-black focus-visible:underline underline-offset-4";

const Footer = () => {
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
    <footer
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
      className="w-full border-t border-black bg-white text-black"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:gap-x-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <a
              href="#"
              className="inline-block font-black uppercase leading-none tracking-[-0.02em] text-3xl focus:outline-none focus-visible:underline"
            >
              Marketo
            </a>
            <p className="mt-4 max-w-[16rem] text-xs leading-relaxed text-gray-500">
              The open marketplace for independent sellers worldwide.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
                {column.title}
              </h3>
              <ul className="space-y-2.5 text-[13px]">
                {column.links.map((l) => (
                  <li key={l}>
                    <a href="#" className={linkClass}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.14em] text-gray-500 sm:text-[11px]">
            © 2026 Marketo Inc. — All rights reserved
          </p>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {socials.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className={`${linkClass} text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px]`}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;