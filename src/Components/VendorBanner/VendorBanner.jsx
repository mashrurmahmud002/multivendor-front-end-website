




  



const VendorBanner = () => {
  return (
    <section className="w-full bg-[#f4f4f4] px-4 py-8 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-center">

        {/* Left Side */}
        <div>
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500">
            Vendor Registration
          </p>

          <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-black sm:text-5xl md:text-6xl">
            Open Your
            <br />
            Store on Marketo
          </h1>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-3 gap-4 sm:gap-12 md:gap-16 lg:gap-20">

          {/* Commission */}
          <div>
            <h2 className="text-2xl font-black leading-none text-black sm:text-3xl">
              5–12%
            </h2>

            <p className="mt-2 text-[9px] sm:whitespace-nowrap font-medium uppercase tracking-[0.18em] text-gray-500">
              Commission Only
            </p>
          </div>

          {/* Monthly Fee */}
          <div>
            <h2 className="text-2xl font-black leading-none text-black sm:text-3xl">
              $0
            </h2>

            <p className="mt-2 text-[9px] sm:whitespace-nowrap font-medium uppercase tracking-[0.18em] text-gray-500">
              Monthly Fee
            </p>
          </div>

          {/* Payout */}
          <div>
            <h2 className="text-2xl font-black leading-none text-black sm:text-3xl">
              7 Days
            </h2>

            <p className="mt-2 text-[9px] sm:whitespace-nowrap font-medium uppercase tracking-[0.18em] text-gray-500">
              Payout Cycle
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VendorBanner;