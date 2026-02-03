const demoOwnerId = process.env.DEMO_OWNER_ID ?? "";

export function getDemoOwnerId() {
  return demoOwnerId;
}
