document.addEventListener("DOMContentLoaded", function () {
  let flag8 = 0;

  var replaceButton = document.getElementById("replaceButton");
  replaceButton.addEventListener("click", function (event) {
    event.preventDefault();
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs && tabs.length > 0) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript(
          {
            target: { tabId: activeTab.id },
            func: contentScriptFunction,
            args: [flag8],
          },
          (results) => {
            if (results && results.length > 0) {
              flag8 = results[0].result;
            }
          }
        );
      } else {
        console.error("No active tab found.");
      }
    });
  });
});

function contentScriptFunction(flag8) {
  var elements = document.getElementsByTagName("*");
  let searchPattern = /Alex/gi;

  if (flag8 % 2 !== 0) {
    // Replace 'Alex' with the image
    let alexImage = document.getElementById("alexImage");
    if (alexImage) {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.hasChildNodes()) {
          for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
            if (node.nodeType === Node.TEXT_NODE) {
              node.textContent = node.textContent.replace(searchPattern, "");
              element.appendChild(alexImage.cloneNode(true));
            }
          }
        }
      }
    } else {
      console.error("Alex image element not found.");
    }
  } else {
    // Replace the image with 'Alex'
    let alexImages = document.querySelectorAll("#alexImage");
    for (var i = 0; i < alexImages.length; i++) {
      var image = alexImages[i];
      image.parentNode.replaceChild(document.createTextNode("Alex"), image);
    }
  }

  // Return the toggled flag value.
  return 1 - flag8;
}
