chrome.action.onClicked.addListener((tab) => {
    if (tab.url) {
        const newUrl = "https://cooked.wiki/" + tab.url;
        chrome.tabs.update(tab.id, { url: newUrl });
    }
});
