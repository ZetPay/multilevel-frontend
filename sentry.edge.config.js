// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';
const SENTRY_DSN = process.env.SENTRY_DSN
Sentry.init({
    dsn: SENTRY_DSN,
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});