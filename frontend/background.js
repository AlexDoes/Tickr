chrome.action.onClicked.addListener((tab) => {
  // Just toggle the div
  chrome.tabs.sendMessage(tab.id, { action: "toggleWebSocketDiv" }, (toggleResponse) => {
      if (toggleResponse && toggleResponse.divState === "displayed") {
          console.log("Div toggled to displayed.");
      } else if (toggleResponse && toggleResponse.divState === "hidden") {
          console.log("Div toggled to hidden.");
      } else {
          console.error("Error in toggling div.");
      }
  });
});
