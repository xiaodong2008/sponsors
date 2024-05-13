import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  formats: ['svg', 'json', 'png'],
  afdian: {
    exechangeRate: 7.5,
    includePurchases: true,
    purchaseEffectivity: 30
  },
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: 'Backers',
      preset: tierPresets.base,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 8,
      preset: tierPresets.medium,
      composeAfter: (composer, _tierSponsors, _config) => {
        composer.addSpan(10)
      },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 16,
      preset: tierPresets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 32,
      preset: tierPresets.xl,
    },
  ],
  renders: [
    {
      name: 'sponsors',
      renderer: 'tiers',
    },
    {
      name: 'sponsors.wide',
      width: 1000,
    },
    {
      name: 'sponsors.circles',
      renderer: 'circles',
    },
  ],
})
