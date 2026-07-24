module.exports = {
  platform: "github",
  globalExtends: [
    "config:best-practices",
    ":automergeAll",
    "replacements:all",
    "schedule:automergeDaily",
    "security:openssf-scorecard"
  ],
  platformCommit: "enabled",
  rebaseWhen: "conflicted",
  autodiscover: true,
  onboarding: false,
  requireConfig: "optional",
  labels: ["dependencies"],
  lockFileMaintenance: {
    enabled: true,
  },
  vulnerabilityAlerts: {
    enabled: true,
    labels: ["security"],
  },
};
