var iframe = document.createElement('iframe');

iframe.src = 'https://supermario-game.com/pt#mc-container';
iframe.width = '800';
iframe.height = '600';
iframe.allowfullscreen = true;
iframe.setAttribute('fullscreen', '');

iframe.style.position = 'fixed';
iframe.style.top = '50%';
iframe.style.left = '50%';
iframe.style.transform = 'translate(-50%, -50%)';
iframe.style.zIndex = '999999';
iframe.style.border = '5px solid #ff0000';
iframe.style.borderRadius = '10px';
iframe.style.boxShadow = '0 0 30px rgba(0,0,0,0.8)';

document.body.appendChild(iframe);
