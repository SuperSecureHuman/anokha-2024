const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.glsl$/,
      use: "raw-loader",
    });

    return config;
  },

  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost",
        "test.payu.in",
        "testtxncdn.payubiz.in",
        "secure.payu.in",
        "txncdn.payu.in",
        "anokha.amrita.edu",
      ],
    },
  },

  images: {
    domains: [
      "anokha.amrita.edu",
      "i.imgur.com",
      "imgur.com",
      "gravatar.com",
      "wwd.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
    ],
  },
});
