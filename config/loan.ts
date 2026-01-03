export const LOAN_CONFIG = {
  minAmount: 5_000_000, // 5M Toman
  maxAmount: 100_000_000, // 100M Toman
  stepAmount: 1_000_000, // 1M Toman steps
  defaultDuration: 12,
  allowedDurations: [3, 6, 9, 12, 18, 24], // Months
  monthlyInterestRate: 0.025, // 2.5% Monthly
};

/**
 * Pure function to calculate monthly payment.
 * Returns a rounded integer (Toman).
 * Formula: (Principal * (1 + Rate * Months)) / Months
 */
export const calculateMonthlyPayment = (principal: number, months: number): number => {
  if (months === 0 || principal === 0) return 0;
  
  // Simple fintech flat rate calculation (common in non-banking installment sectors)
  const totalInterest = principal * LOAN_CONFIG.monthlyInterestRate * months;
  const totalPayback = principal + totalInterest;
  
  return Math.round(totalPayback / months);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fa-IR').format(amount);
};
