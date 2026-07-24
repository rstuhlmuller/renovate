module.exports = {
  platform: "github",
  globalExtends: [
    "config:best-practices",
    ":automergeAll",
    "replacements:all",
    "schedule:automergeDaily",
    "security:openssf-scorecard"
  ],
  platformCommit: true,
  rebaseWhen: "conflicted",
  autodiscover: true,
  onboarding: false,
  requireConfig: "optional",
  labels: ["dependencies"],
  lockFileMaintenance: {
    enabled: true,
    schedule: ["before 4am"],
  },
  vulnerabilityAlerts: {
    enabled: true,
    labels: ["security"],
  },
};
