// Function Menu OnScroll
export function menu() {
    // Animation FadeIn and FadeOut - Menu Responsive
    const input = document.querySelector('input[type=checkbox]');
    const menu = document.querySelector('.responsive');

    input.onclick = function() {
        if(!menu.classList.contains('fade-in')) {
            menu.classList.remove('fade-out');
            menu.classList.add('fade-in');
        } else {
            menu.classList.remove('fade-in');
            menu.classList.add('fade-out');
        }
    }

    setInterval(function() {
        if(menu.classList.contains('fade-out')) {
            menu.classList.remove('fade-out');
        } 
    }, 1000);

    // OnScroll
    const header = document.querySelector('header');

    window.onscroll = function() {
        if(parseInt(window.scrollY) > 30) {
            Object.assign(header.style, {
                background: 'rgb(20, 24, 31)',
            });
        } else {
            Object.assign(header.style, {
                background: 'transparent',
            });
        }
    }
}
