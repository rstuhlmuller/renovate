module.exports = {
  platform: "github",
  globalExtends: [
    "config:best-practices",
    ":automergeAll",
    "schedule:automergeDaily",
    "security:openssf-scorecard"
  ],
  platformCommit: "enabled",
  autodiscover: true,
  onboarding: false,
  requireConfig: "optional",
  labels: ["dependencies"],
  vulnerabilityAlerts: {
    enabled: true,
    labels: ["security"],
  },
};
