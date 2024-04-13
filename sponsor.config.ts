import {defineConfig, presets} from "sponsorkit";

export default defineConfig({
    formats: ['svg', 'json'],
    tiers: [
        {
            title: 'Past Sponsors',
            monthlyDollars: -1,
            preset: presets.xs,
        },
        {
            title: 'Backers',
            monthlyDollars: 3,
            preset: presets.base,
        },
        {
            title: 'Sponsors',
            monthlyDollars: 8,
            preset: presets.medium,
            // to insert custom elements after the tier block
            composeAfter: (composer, _tierSponsors, _config) => {
                composer.addSpan(10)
            },
        },
        {
            title: 'Silver Sponsors',
            monthlyDollars: 16,
            preset: presets.large,
        },
        {
            title: 'Gold Sponsors',
            monthlyDollars: 32,
            preset: presets.xl,
        },
    ]
})