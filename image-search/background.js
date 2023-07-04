chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "imageSearch") {
    // Handle the click event
    const imageUrl = info.srcUrl;
    const searchUrl = 'https://www.google.com/searchbyimage?image_url=' + encodeURIComponent(imageUrl);

    chrome.tabs.create({ url: searchUrl });
  }
});
  

chrome.contextMenus.create({
  id: "imageSearch",
  title: "Search Image",
  contexts: ["image"]
});
