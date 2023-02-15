export const BountyAccount = "ubiquity-bounties";
export const COLORS = {
  price: "008000",
};
export const DEFAULT_BOT_DELAY = 100; // 100ms

/**
 * ms('2 days')  // 172800000
 * ms('1d')      // 86400000
 * ms('10h')     // 36000000
 * ms('2.5 hrs') // 9000000
 * ms('2h')      // 7200000
 * ms('1m')      // 60000
 * ms('5s')      // 5000
 * ms('1y')      // 31557600000
 * ms('100')     // 100
 * ms('-3 days') // -259200000
 * ms('-1h')     // -3600000
 * ms('-200')    // -200
 */
export const DEFAULT_FOLLOWUP_TIME = "4 days"; // 4 days
export const DEFAULT_DISQUALIFY_TIME = "7 days"; // 7 days

// This could be removed from constants setup because we should be able to get them from probot context
// but keeping it for a while not to affect weekly setup
export const DEFAULT_ORG = "ubiquity";
export const DEFAULT_REPO = "bounty-bot";