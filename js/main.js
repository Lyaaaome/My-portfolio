const btnDarkMode = document.querySelector('.dark-mode-btn');

// 1. Dark mode check on system level
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add('dark-mode-btn-active');
    document.body.classList.add('dark');
}

//2. Dark Mode check in local Storage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn-active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn-active");
    document.body.classList.remove("dark");
}

// If system settings is changed - theme was chanched too
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
        btnDarkMode.classList.add('dark-mode-btn-active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    } else {
        btnDarkMode.classList.remove('dark-mode-btn-active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light')
    }
});

// toggle dark mode on button function
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
};
