import { getLocalConfig, setLocalConfig } from "~/newstore/localpersistence"

export default () => {
  //* ** Determine whether or not the PWA has been installed. ***//

  // Step 1: Check local storage
  let pwaInstalled = getLocalConfig("pwaInstalled") === "yes"

  // Step 2: Check if the display-mode is standalone. (Only permitted for PWAs.)
  if (
    !pwaInstalled &&
    window.matchMedia("(display-mode: standalone)").matches
  ) {
    setLocalConfig("pwaInstalled", "yes")
    pwaInstalled = true
  }

  // Step 3: Check if the navigator is in standalone mode. (Again, only permitted for PWAs.)
  if (!pwaInstalled && window.navigator.standalone === true) {
    setLocalConfig("pwaInstalled", "yes")
    pwaInstalled = true
  }

  //* ** If the PWA has not been installed, show the install PWA prompt.. ***//
  let deferredPrompt = null
  window.addEventListener("beforeinstallprompt", (event) => {
    deferredPrompt = event

    // Show the install button if the prompt appeared.
    if (!pwaInstalled) {
      document.querySelector("#installPWA").style.display = "inline-flex"
    }
  })

  // When the app is installed, remove install prompts.
  window.addEventListener("appinstalled", () => {
    setLocalConfig("pwaInstalled", "yes")
    pwaInstalled = true
    document.getElementById("installPWA").style.display = "none"
  })

  // When the app is uninstalled, add the prompts back
  return async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const outcome = await deferredPrompt.userChoice

      if (outcome === "accepted") {
        console.info("Hoppscotch was installed successfully.")
      } else {
        console.info(
          "Hoppscotch could not be installed. (Installation rejected by user.)"
        )
      }
      deferredPrompt = null
    }
  }
}
