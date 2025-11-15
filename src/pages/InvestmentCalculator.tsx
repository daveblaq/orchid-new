import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, CheckCircle, TrendingUp } from "lucide-react";

const THRESHOLD = 50000000;
const HIGH_RATE = 0.033;
const STANDARD_RATE = 0.05;

const formatRatePercent = (rate: number) => {
  const value = Number((rate * 100).toFixed(1));
  return `${value % 1 === 0 ? value.toFixed(0) : value}%`;
};

export default function InvestmentCalculator() {
  const [inputValue, setInputValue] = useState("");

  const parsedAmount = useMemo(() => {
    const numericValue = inputValue.replace(/,/g, "");
    const amount = parseFloat(numericValue);
    return !isNaN(amount) && amount > 0 ? amount : 0;
  }, [inputValue]);

  const { rateLabel, monthlyROI, totalROI, totalPayout } = useMemo(() => {
    const interestRate = parsedAmount >= THRESHOLD ? HIGH_RATE : STANDARD_RATE;
    const monthly = parsedAmount * interestRate;
    return {
      rateLabel:
        parsedAmount >= THRESHOLD
          ? formatRatePercent(HIGH_RATE)
          : formatRatePercent(STANDARD_RATE),
      monthlyROI: monthly,
      totalROI: monthly * 12,
      totalPayout: parsedAmount + monthly * 12,
    };
  }, [parsedAmount]);

  const formatCurrency = (value: number) =>
    `₦${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

  const formattedInput =
    inputValue === ""
      ? ""
      : parsedAmount.toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-50 via-white to-green-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary-200 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-green-200 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/80 border border-primary-100 px-4 py-2 text-sm font-semibold mb-6"
          >
            <Calculator className="w-4 h-4 text-primary-500" />
            Investment Calculator
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            Forecast Your{" "}
            <span className="bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
              Potential Returns
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl mx-auto"
          >
            Enter an investment amount to instantly see your projected monthly
            and annual ROI based on Orchiddigital’s investment plans.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 bg-white/90 border border-gray-200 p-6 sm:p-8 shadow-lg"
            >
              <h2 className="text-xl font-bold text-text-primary mb-6">
                Enter Investment Amount
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Amount (₦)
                  </label>
                  <input
                    value={formattedInput}
                    onChange={(e) =>
                      setInputValue(e.target.value.replace(/[^0-9,]/g, ""))
                    }
                    placeholder="e.g. 1,000,000"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors duration-300 text-sm sm:text-base"
                  />
                  <p className="text-xs text-text-secondary mt-2">
                    Minimum amount ₦100,000. Above ₦50M earns{" "}
                    {formatRatePercent(HIGH_RATE)} monthly ROI, otherwise{" "}
                    {formatRatePercent(STANDARD_RATE)}.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      label: `Monthly ROI (${rateLabel})`,
                      value: formatCurrency(monthlyROI),
                    },
                    {
                      label: "Total ROI (12 months)",
                      value: formatCurrency(totalROI),
                    },
                    {
                      label: "Capital Returned",
                      value: formatCurrency(parsedAmount),
                    },
                    {
                      label: "Total Payout",
                      value: formatCurrency(totalPayout),
                      highlight: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`border border-gray-200 p-4 ${
                        item.highlight ? "bg-primary-50" : "bg-white"
                      }`}
                    >
                      <p className="text-sm text-text-secondary mb-1">
                        {item.label}
                      </p>
                      <p className="text-lg font-bold text-primary-500">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-2 bg-gradient-to-br from-primary-500 to-green-500 text-white p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 right-6 w-16 h-16 border-2 border-white" />
                <div className="absolute bottom-6 left-6 w-10 h-10 border border-white" />
              </div>
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 text-sm font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  Investment Snapshot
                </div>
                <p className="text-sm text-white/90">
                  Calculations assume a fixed 12-month investment period with
                  monthly payouts. Returns are reinvested or disbursed monthly
                  based on your preference.
                </p>
                <ul className="space-y-3">
                  {[
                    "Fixed 365-day tenure with guaranteed capital return",
                    "Monthly ROI remitted directly to your preferred bank",
                    "Dedicated relationship manager for investments above ₦50M",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
