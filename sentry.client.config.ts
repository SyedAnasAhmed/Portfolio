// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

  Sentry.init({
    dsn: "https://a65f258d617836b45fc265609d40fcf7@o4507978937925632.ingest.us.sentry.io/4507978941923328",
    // Other options...
    integrations: [
      Sentry.feedbackIntegration({
        // Additional SDK configuration goes in here, for example:
        colorScheme: "dark",
      }),
      Sentry.replayIntegration({
        // Additional Replay configuration goes in here, for example:
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });

  // integrations: [
  //   Sentry.feedbackIntegration({
  //     // Additional SDK configuration goes in here, for example:
  //     colorScheme: "dark",
  //   }),
  //   Sentry.replayIntegration({
  //     // Additional Replay configuration goes in here, for example:
  //     maskAllText: true,
  //     blockAllMedia: true,
  //   }),
  // ],

  // // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  // tracesSampleRate: 1,

  // // Setting this option to true will print useful information to the console while you're setting up Sentry.
  // debug: false,
