import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { vendorLogin } from "../../../Api";
import Swal from "sweetalert2";

// Swap this for your own photo (grayscale is applied via CSS)
const HERO_IMG =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80";

const STATS = [
  { value: "24/7", label: "Dashboard access" },
  { value: "7 days", label: "Payout cycle" },
  { value: "190+", label: "Markets reached" },
];

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e3300f] focus-visible:ring-offset-2";

const inputBase =
  "h-11 w-full border border-black bg-white px-3 text-base text-black placeholder:text-neutral-400 sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e3300f]/50";

export default function VendorLogin() {
  
  const [show, setShow] = useState(false);
  const [keep, setKeep] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {register, handleSubmit, formState:{errors}} = useForm();

  const navigate = useNavigate();



  const onError = async (data) => {
    console.log(data);

    const finalData = {
        ...data,
        keep
    }
    try{
      const response = await vendorLogin(finalData);
      if(response){

        Swal.fire({
          position: "center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500
        });

        
         
      }  

    }catch(err){
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: err?.response?.data?.message,
          showConfirmButton: false,
          timer: 1500
        })
    }
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim() || !password) {
//       setError("Enter your business email and password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       // TODO: replace with your real vendor login request
//       console.log({ email, password, keep });
//     } catch {
//       setError("We couldn't sign you in. Check your details and try again.");
//     } finally {
//       setLoading(false);
//     }
//   };


const onsubmit = async (data) => {
  console.log(data);
};

  return (
    <div
      className="min-h-screen w-full bg-white text-black lg:grid lg:grid-cols-[1fr_minmax(440px,520px)] xl:grid-cols-[1fr_560px]"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap');
      .display{font-family:'Barlow',sans-serif;font-weight:800;letter-spacing:-0.02em}`}</style>

      {/* LEFT: hero */}
      <section className="flex flex-col bg-black text-white lg:min-h-screen">
        <div className="relative h-48 flex-none overflow-hidden border-b border-white/60 sm:h-64 lg:h-1/2">
          <img
            src={HERO_IMG}
            alt=""
            className="h-full w-full object-cover object-top grayscale contrast-110"
          />
          <div className="absolute left-0 top-0 border-b border-r border-white/60 bg-black px-4 py-2.5 text-[11px] font-semibold tracking-[0.12em] sm:py-3">
            MARKETO / VENDOR PORTAL
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center px-5 py-8 sm:px-10 sm:py-10 lg:px-12 xl:px-16">
          <p className="mb-3 text-xs text-neutral-400 sm:text-sm">
            Seller operations in one place
          </p>
          <h1 className="display text-[32px] uppercase leading-[1] sm:text-5xl xl:text-6xl">
            Your business.
            <br />
            Back in motion.
          </h1>

          <dl className="mt-8 grid max-w-[460px] grid-cols-3 border border-white/30">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`px-3 py-3 sm:px-4 sm:py-4 ${
                  i > 0 ? "border-l border-white/30" : ""
                }`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-base font-bold sm:text-lg">{s.value}</dd>
                <p className="mt-1 text-[11px] leading-tight text-neutral-400 sm:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* RIGHT: form */}
      <section className="flex flex-col justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-12">
        <div className="mx-auto w-full max-w-[440px]">
          <div className="flex items-start justify-between border-b border-black pb-5">
            <div>
              <p className="mb-1 text-xs text-neutral-500">Secure vendor access</p>
              <h2 className="display text-2xl uppercase leading-none sm:text-[28px]">
                Vendor login
              </h2>
            </div>
            <div
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center bg-black text-xs font-bold text-white"
            >
              V
            </div>
          </div>

          <form onSubmit={handleSubmit(onsubmit, onError)} noValidate className="mt-7">
            {error && (
              <div
                role="alert"
                className="mb-5 border border-[#e3300f] bg-[#e3300f]/5 px-3 py-2.5 text-sm text-[#b02407]"
              >
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                Business email
              </label>
              <input
                id="email"
                {...register("email", { required: "Email is required" })}
                type="email"
                autoComplete="username"
                inputMode="email"
                
                placeholder="owner@yourstore.com"
                className={inputBase}
              />
              {
                errors.email && (
                  <p className="mt-1 text-xs text-[#b02407]">
                    {errors.email.message}
                  </p>
                )
              }
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <label htmlFor="password" className="text-sm font-semibold">
                  Password
                </label>
                <Link
                  to="/auth/reset-password"
                  className={`text-sm text-neutral-600 underline-offset-4 hover:text-black hover:underline ${focusRing}`}
                >
                  Reset password
                </Link>
              </div>
              <div className="flex h-11 border border-black bg-white focus-within:ring-2 focus-within:ring-[#e3300f]/50">
                <input
                  id="password"
                  {
                    ...register("password", {
                      required: "Password is required",
                    })
                  }
                  type={show ? "text" : "password"}
                  autoComplete="current-password"
                  
                  placeholder="Enter your password"
                  className="min-w-0 flex-1 bg-transparent px-3 text-base placeholder:text-neutral-400 focus:outline-none sm:text-sm"
                />
                {
                  errors.password && (
                    <p className="mt-1 text-xs text-[#b02407]">
                      {errors.password.message}
                    </p>
                  )
                }
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  aria-pressed={show}
                  aria-label={show ? "Hide password" : "Show password"}
                  className="w-16 shrink-0 border-l border-black text-xs font-semibold hover:bg-black hover:text-white focus:outline-none focus-visible:bg-black focus-visible:text-white"
                >
                  {show ? "Hide" : "Show"}
                </button>
              </div>
              <p className="mt-2 text-xs text-neutral-500">
                Use the credentials linked to your approved vendor account.
              </p>
            </div>

            <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-neutral-700">
              <input
                type="checkbox"
                checked={keep}
                onChange={(e) => setKeep(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-black"
              />
              Keep me signed in for 30 days
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`mt-6 flex h-12 w-full items-center justify-center bg-[#e3300f] text-sm font-bold tracking-wide text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 ${focusRing}`}
            >
              {loading ? "Signing in…" : "Open vendor dashboard"}
            </button>
          </form>

          <div className="mt-8 space-y-3 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
            <p>
              Not a Marketo vendor yet?{" "}
              <Link
                to="/vendor/vendor-register"
                className={`font-bold text-black underline underline-offset-4 ${focusRing}`}
              >
                Apply to sell
              </Link>
            </p>
            <p>
              Shopping instead?{" "}
              <Link
                to="/auth/signin"
                className={`font-bold text-black underline underline-offset-4 ${focusRing}`}
              >
                Customer sign in
              </Link>
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 border-t border-black pt-4 text-xs text-neutral-500">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 bg-black" />
            Encrypted session · Seller support available
          </div>
        </div>
      </section>
    </div>
  );
}