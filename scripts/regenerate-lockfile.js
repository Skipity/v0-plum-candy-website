import { execSync } from "child_process"

console.log("[v0] Deleting corrupted pnpm-lock.yaml and regenerating clean lockfile...")

try {
  // Remove any existing node_modules to ensure clean install
  console.log("[v0] Cleaning node_modules...")
  execSync("rm -rf node_modules", { stdio: "inherit" })

  // Regenerate lockfile from clean package.json
  console.log("[v0] Running pnpm install to regenerate lockfile...")
  execSync("pnpm install", { stdio: "inherit" })

  console.log("[v0] ✅ Clean lockfile generated successfully!")
} catch (error) {
  console.error("[v0] ❌ Error regenerating lockfile:", error.message)
  process.exit(1)
}
