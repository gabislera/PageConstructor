export const hasDisableDisplay = ({ deviceView, display, displayMobile }) => {
  if (deviceView === "mobile") return displayMobile == "none";
  return display == "none";
};
export default function getClass({
  deviceView,
  pulse,
  delay,
  display,
  displayMobile,
}) {
  console.log("devicdeviceViewdeviceVieweView", deviceView);
  if (hasDisableDisplay(deviceView, display, displayMobile))
    return "oscillating";
  if (pulse && delay <= 0) return "pulse-button";
  if (delay > 0 && !pulse) return "oscillating";
  if (pulse && delay > 0) return "pulse-oscillating-button";
  return "";
}
