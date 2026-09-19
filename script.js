// Fitur Copy Profile Link
const shareBtn = document.getElementById('share-btn');

shareBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);

    const originalContent = shareBtn.innerHTML;

    shareBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    shareBtn.style.background = 'rgba(34, 197, 94, 0.3)';

    setTimeout(() => {
        shareBtn.innerHTML = originalContent;
        shareBtn.style.background = '';
    }, 2000);
});
