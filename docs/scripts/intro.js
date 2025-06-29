(function () {
    const url = new URL(window.location.href);

    if (url.searchParams.has('NOINTRO')) {
        document.getElementById("intro").style.display = 'none';

        url.searchParams.delete('NOINTRO');
        window.history.replaceState({}, document.title, url.toString());
    } else {
        setTimeout(() => {
            document.getElementById("intro").style.display = 'none';
        }, 3000);
    }
})();