function openPage(url) {
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
        newWindow.focus();
    }
}