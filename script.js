function openPage(url) {
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
        newWindow.focus();
    }
}

function openPageInSameTab(url) {
    const currentWindow = window.open(url, '_self');
    if (currentWindow) {
        currentWindow.focus();
    }
}