export const TRUST_CONSTANTS = {
  totalReviews: '2.5k', // Google reviews count
  totalReviewsFormatted: '2.5k+',
  averageRating: 5.0,
  successRatePercent: 87,
  totalFamiliesTrained: '10,000+',
}

export function formatNumberWithCommas(value: number): string {
  return value.toLocaleString('en-IN')
}
