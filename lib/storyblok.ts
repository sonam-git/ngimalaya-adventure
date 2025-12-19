import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "us", // or "eu", "ap", "ca", "cn" depending on your region
  },
});

export { storyblokInit };
