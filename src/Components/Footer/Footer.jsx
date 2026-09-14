import React from 'react';
const footerColumns = [
  {
    title: "Marketplace",
    links: [
      "Browse Products",
      "Top Vendors",
      "New Arrivals",
      "Flash Deals",
      "Gift Cards",
    ],
  },
  {
    title: "Vendors",
    links: [
      "Start Selling",
      "Vendor Dashboard",
      "Pricing & Fees",
      "Success Stories",
      "Support",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Careers",
      "Press",
      "Blog",
      "Sustainability",
    ],
  },
  {
    title: "Legal",
    links: [
      "Terms of Use",
      "Privacy Policy",
      "Cookie Policy",
      "Buyer Protection",
    ],
  },
];

const Footer = () => {
    return (
        <div>
            <div className="px-4 py-8 sm:px-6 lg:px-8 lg:py-9">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-[1.15fr_1fr_1fr_1fr_1fr]">

          {/* ================= BRAND ================= */}
          <div className="col-span-2 sm:col-span-1">
            <a
              href="#"
              className="
                text-[30px]
                font-black
                uppercase
                tracking-[-0.7px]
                text-black
              "
            >
              Marketo
            </a>

            <p
              className="
                mt-3
                text-[10px]
                max-w-[145px]
                text-[8px]
                leading-[1.6]
                text-gray-500
              "
            >
              The open marketplace for
              <br />
              independent sellers worldwide.
            </p>
          </div>

          {/* ================= FOOTER COLUMNS ================= */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3
                className="
                  mb-4
                  text-[16px]
                  font-semibold
                  uppercase
                  tracking-[1.2px]
                  text-black
                "
              >
                {column.title}
              </h3>

              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="
                        text-[13px]
                        text-gray-500
                        transition-colors
                        hover:text-black
                      "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p
            className="
              text-[16px]
              font-medium
              uppercase
              tracking-[1px]
              text-gray-500
            "
          >
            © 2026 Marketo Inc. — All Rights Reserved
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="
                text-[13px]
                font-medium
                uppercase
                tracking-[1px]
                text-gray-500
                transition
                hover:text-black
              "
            >
              X / Twitter
            </a>

            <a
              href="#"
              className="
                text-[16px]
                font-medium
                uppercase
                tracking-[1px]
                text-gray-500
                transition
                hover:text-black
              "
            >
              Instagram
            </a>

            <a
              href="#"
              className="
                text-[16px]
                font-medium
                uppercase
                tracking-[1px]
                text-gray-500
                transition
                hover:text-black
              "
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
        </div>
    );
};

export default Footer;