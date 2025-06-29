
    let delay = 3000;
    const url = new URL(window.location.href);
    if (url.searchParams.has('NOINTRO')) {
        delay = 0;
    }

setTimeout(() => {
    const elements = {
        title: document.querySelector('#title'),
        titleUnderline: document.querySelector('#title_underline'),
        description: document.querySelector('#description'),
        descriptionUnderline: document.querySelector('#description_underline'),
        console: document.querySelector('#console'),
        consoleHolder: document.querySelector('#console_holder')
    };

    if (!Object.values(elements).every(el => el)) return;

    const textAnimator = {
        renderText(element, text, underline) {
            let size = 0;
            const animate = () => {
                element.textContent = text.substring(0, size);
                if (size++ < text.length) {
                    setTimeout(animate, Math.random() * 50 + 50);
                } else {
                    underline.style.display = 'none';
                }
            };
            animate();
        },

        renderLines(element, texts, times) {
            let line = 0;
            const animate = () => {
                if (line >= texts.length) return;
                element.innerHTML = texts.slice(0, line + 1).join('<br>') +
                    '<span class="underline font16 no-margin">_</span>';

                elements.consoleHolder.scrollTo({
                    top: elements.consoleHolder.scrollHeight,
                    behavior: 'smooth'
                });

                setTimeout(animate, times[line] || 100);
                line++;
            };
            animate();
        }
    };

    // Inititalization
    elements.console.textContent = '';

    const consoleData = {
        lines: [
            "Balbes console line [Version 1.2.34]",
            "(C) 2025 ItzKITb inc. All right reserved",
            "Initializing \"Balbes OS\"...",
            "Balbes OS initialized!",
            "",
            "BOS> Welcome USER!",
            "",
            "root> ../OS/progs/siteunit.blbs -url itzkitb.lol/main -t 1000",
            "Dank site unit | v.1.9.84",
            "DSU> Connecting...",
            "DSU> Connection error!",
            "DSU> Error: This page not found!",
            "siteunit.blbs exited with code 404",
            "",
            "root/safe> "
        ],
        timings: [250, 10, 120, 20, 5, 5, 5, 25, 30, 1000, 230, 10, 10, 500]
    };

    textAnimator.renderLines(elements.console, consoleData.lines, consoleData.timings);

    setTimeout(() => {
        textAnimator.renderText(elements.title, "Страница не найдена", elements.titleUnderline);
        textAnimator.renderText(elements.description,
            "Вы достигли края интернета", elements.descriptionUnderline);
    }, 2500);
}, delay);