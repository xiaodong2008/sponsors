import {defineConfig, presets} from "sponsorkit";

export default defineConfig({
    outputDir: 'data',
    tiers: [
        {
            title: 'Past Sponsors',
            monthlyDollars: -1,
            preset: presets.xs,
        },
        {
            title: 'Backers',
            // to replace the entire tier rendering
            // compose: (composer, tierSponsors, config) => {
            //   composer.addRaw(
            //     '<-- custom svg -->',
            //   )
            // },
        },
        {
            title: 'Sponsors',
            monthlyDollars: 10,
            preset: presets.medium,
            // to insert custom elements after the tier block
            composeAfter: (composer, _tierSponsors, _config) => {
                composer.addSpan(10)
            },
        },
        {
            title: 'Silver Sponsors',
            monthlyDollars: 20,
            preset: presets.large,
        },
        {
            title: 'Gold Sponsors',
            monthlyDollars: 60,
            preset: presets.xl,
        },
    ]
})