  document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
            }, { threshold: 0.1 });
            document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
        });

        function toggleTheme() {
            document.body.classList.toggle('light-theme');
            const icon = document.querySelector('.theme-toggle i');
            icon.classList.toggle('fa-sun');
            icon.classList.toggle('fa-moon');
        }

        function toggleShareMenu() { document.getElementById('shareMenu').classList.toggle('active'); }

        const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-next');
        const prevButton = document.querySelector('.carousel-prev');
        let currentSlideIndex = 0;

        const moveToSlide = (targetIndex) => {
            const width = slides[0].getBoundingClientRect().width + 30;
            track.style.transform = `translateX(-${width * targetIndex}px)`;
            slides.forEach((s, i) => s.classList.toggle('active', i === targetIndex));
            currentSlideIndex = targetIndex;
        }

        nextButton.addEventListener('click', () => moveToSlide((currentSlideIndex + 1) % slides.length));
        prevButton.addEventListener('click', () => moveToSlide((currentSlideIndex - 1 + slides.length) % slides.length));

        function enviarAnamnese(event) {
            event.preventDefault();
            const plano = document.getElementById('planSelect').value;
            const nome = document.getElementById('clientName').value;
            const idade = document.getElementById('clientAge').value;
            const sexo = document.getElementById('clientGender').value;
            const dias = document.getElementById('clientDays').value;
            const objetivo = document.getElementById('goalInput').value;
            const obs = document.getElementById('obsInput').value;
            
            let mensagem = `Fala Jefferson! Vi no site e quero aplicar:%0A%0A`;
            mensagem += `*Nome:* ${nome}%0A`;
            mensagem += `*Idade:* ${idade}%0A`;
            mensagem += `*Sexo:* ${sexo}%0A`;
            mensagem += `*Dias por semana:* ${dias}%0A`;
            mensagem += `*Objetivo:* ${objetivo}%0A`;
            mensagem += `*Observações:* ${obs ? obs : 'Nenhuma'}%0A`;
            mensagem += `*Plano Selecionado:* ${plano}`;

            window.open(`https://wa.me/5511969908406?text=${mensagem}`, '_blank');
        }

        function escolherPlano(p) {
            window.open(`https://wa.me/5511969908406?text=Quero saber mais sobre o plano ${p}`, '_blank');
        }