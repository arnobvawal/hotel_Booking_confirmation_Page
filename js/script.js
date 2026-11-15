const printButton = document.getElementById("print-receipt");

printButton?.addEventListener("click", () => {
  window.print();
});

const copyButton = document.getElementById("copy-password");
const copyStatus = document.getElementById("copy-status");

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("soleil-2026");
    copyStatus.textContent = "Password copied";
  } catch {
    copyStatus.textContent = "Copy failed. Please select the password manually.";
  }
});
