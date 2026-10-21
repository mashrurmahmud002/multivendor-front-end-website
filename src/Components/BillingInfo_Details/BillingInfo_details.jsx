
import { useForm } from "react-hook-form";

const BillingInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Billing Information:", data);
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Billing Information
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Enter your billing details below.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8"
        >
          {/* Personal Information */}
          <div>
            <h2 className="mb-5 text-lg font-semibold text-gray-800">
              Personal Details
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  First Name *
                </label>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  placeholder="John"
                  className={inputClass}
                />
                <p className="mt-1 text-sm text-red-500">
                  {errors.firstName?.message}
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Last Name *
                </label>
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  placeholder="Doe"
                  className={inputClass}
                />
                <p className="mt-1 text-sm text-red-500">
                  {errors.lastName?.message}
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  placeholder="john@example.com"
                  className={inputClass}
                />
                <p className="mt-1 text-sm text-red-500">
                  {errors.email?.message}
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  placeholder="+880 1XXXXXXXXX"
                  className={inputClass}
                />
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone?.message}
                </p>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Billing Address */}
          <div>
            <h2 className="mb-5 text-lg font-semibold text-gray-800">
              Billing Address
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Street Address *
                </label>
                <input
                  {...register("address", {
                    required: "Street address is required",
                  })}
                  placeholder="123 Main Street"
                  className={inputClass}
                />
                <p className="mt-1 text-sm text-red-500">
                  {errors.address?.message}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    City *
                  </label>
                  <input
                    {...register("city", {
                      required: "City is required",
                    })}
                    placeholder="Dhaka"
                    className={inputClass}
                  />
                  <p className="mt-1 text-sm text-red-500">
                    {errors.city?.message}
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Postal Code *
                  </label>
                  <input
                    {...register("postalCode", {
                      required: "Postal code is required",
                    })}
                    placeholder="1207"
                    className={inputClass}
                  />
                  <p className="mt-1 text-sm text-red-500">
                    {errors.postalCode?.message}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium">
                    Country *
                  </label>
                  <select
                    {...register("country", {
                      required: "Please select a country",
                    })}
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select your country
                    </option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                  <p className="mt-1 text-sm text-red-500">
                    {errors.country?.message}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Submit */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="reset"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Clear Form
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Save Billing Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingInfo;
