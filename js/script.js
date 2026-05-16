document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const fadeElements = document.querySelectorAll('.fade-up');
            fadeElements.forEach(el => observer.observe(el));
        });

        function toggleTheme() {
            const body = document.body;
            body.classList.toggle('light-theme');
            const icon = document.querySelector('.theme-toggle i');
            
            if(body.classList.contains('light-theme')){ 
                icon.classList.replace('fa-sun', 'fa-moon'); 
                localStorage.setItem('theme-jefferson', 'light'); 
            } else { 
                icon.classList.replace('fa-moon', 'fa-sun'); 
                localStorage.setItem('theme-jefferson', 'dark'); 
            }
        }
        
        if(localStorage.getItem('theme-jefferson') === 'light' || 
          (!localStorage.getItem('theme-jefferson') && window.matchMedia('(prefers-color-scheme: light)').matches)) { 
            document.body.classList.add('light-theme'); 
            document.querySelector('.theme-toggle i').classList.replace('fa-sun', 'fa-moon'); 
        }

        function toggleShareMenu() {
            const menu = document.getElementById('shareMenu');
            menu.classList.toggle('active');
        }

        document.addEventListener('click', function(event) {
            const shareContainer = document.querySelector('.share-container');
            const shareMenu = document.getElementById('shareMenu');
            if (!shareContainer.contains(event.target) && shareMenu.classList.contains('active')) {
                shareMenu.classList.remove('active');
            }
        });

        function shareLink(platform) {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent('Confira esta consultoria de alto nível: ');
            
            if (platform === 'whatsapp') { window.open(`https://api.whatsapp.com/send?text=${text}${url}`, '_blank'); }
            else if (platform === 'facebook') { window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank'); }
            else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert(`Link copiado com sucesso!`);
                    document.getElementById('shareMenu').classList.remove('active');
                });
            }
        }

        function enviarAnamnese(event) {
            event.preventDefault(); 
            const plano = document.getElementById('planSelect').value;
            const nome = document.getElementById('clientName').value;
            const idade = document.getElementById('clientAge').value;
            const sexo = document.getElementById('clientGender').value;
            const nivel = document.getElementById('levelSelect').value;
            const dias = document.getElementById('trainingDays').value;
            const objetivo = document.getElementById('goalInput').value;
            const dores = document.getElementById('painInput').value;
            
            const mensagem = `*APLICAÇÃO RECEBIDA - SITE*%0A%0A*Nome:* ${nome}%0A*Idade:* ${idade} anos%0A*Gênero:* ${sexo}%0A*Nível:* ${nivel}%0A*Rotina:* ${dias}%0A*Interesse:* ${plano}%0A%0A*OBJETIVO PRINCIPAL:*%0A${objetivo}%0A%0A*RESTRIÇÕES:*%0A${dores ? dores : 'Nenhuma relatada'}`;
            window.open(`https://wa.me/5511969908406?text=${mensagem}`, '_blank');
        }

        function escolherPlano(plano) {
            const mensagem = `Olá Jeff, tenho interesse no projeto *${plano}*. Podemos conversar sobre os detalhes?`;
            window.open(`https://wa.me/5511969908406?text=${mensagem}`, '_blank');
        }