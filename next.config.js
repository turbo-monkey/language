/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ["es", "catchAll"],
        defaultLocale: "catchAll",
        localeDetection: true
    },
}

module.exports = nextConfig
