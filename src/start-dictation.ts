import { open, showHUD, showToast, Toast } from "@raycast/api";

export default async function main() {
  try {
    await open("uttero://dictate");
    await showHUD("Dictation started");
  } catch {
    await showToast({ style: Toast.Style.Failure, title: "Uttero is not running", message: "Start Uttero first." });
  }
}
