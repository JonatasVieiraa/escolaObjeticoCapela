document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('#tabs ul li a');
    const tabsContent = document.querySelectorAll('.tabs-content article');

    // Ativa primeira seção inicialmente
    tabsContent[0].classList.add('active');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active de todos os tabs e conteúdos
            tabs.forEach(t => t.classList.remove('active'));
            tabsContent.forEach(content => content.classList.remove('active'));

            // Adiciona active no tab e conteúdo clicado
            tab.classList.add('active');
            tabsContent[index].classList.add('active');
        });
    });
});