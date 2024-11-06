document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Exemplo de atualização da barra de progresso
    const progressBar = document.querySelector('.progress-fill');
    let progress = 60;

    function updateProgress(value) {
        progressBar.style.width = `${value}%`;
        document.querySelector('.progress p').textContent = `${value}% Completo`;
    }

    // Simulação de atualização de progresso
    setInterval(() => {
        progress = (progress + 1) % 101;
        updateProgress(progress);
    }, 1000);

    // Seleção de área de estudo
    const areaButtons = document.querySelectorAll('.select-area');
    areaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const area = this.parentElement.querySelector('h3').textContent;
            alert(`Você selecionou a área: ${area}`);
        });
    });

    // Função de metas e objetivos
    const goalInput = document.getElementById('goalInput');
    const addGoalButton = document.getElementById('addGoal');
    const goalList = document.getElementById('goalList');

    addGoalButton.addEventListener('click', () => {
        const goalText = goalInput.value.trim();
        if (goalText) {
            const listItem = document.createElement('li');
            listItem.textContent = goalText;
            goalList.appendChild(listItem);
            goalInput.value = ''; // Limpa o campo de input
        }
    });

    // Conquistas
    const achievements = document.querySelector('.achievements');

    function updateAchievements(progress) {
        if (progress >= 25 && !achievements.querySelector('.trophy')) {
            const trophy = document.createElement('i');
            trophy.classList.add('fas', 'fa-trophy', 'trophy');
            achievements.appendChild(trophy);
        }
        if (progress >= 50 && !achievements.querySelector('.medal')) {
            const medal = document.createElement('i');
            medal.classList.add('fas', 'fa-medal', 'medal');
            achievements.appendChild(medal);
        }
        if (progress >= 75 && !achievements.querySelector('.star')) {
            const star = document.createElement('i');
            star.classList.add('fas', 'fa-star', 'star');
            achievements.appendChild(star);
        }
    }

    setInterval(() => {
        updateAchievements(progress);
    }, 1000);
});
