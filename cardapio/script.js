import cardapio from './dados.js'
/*
<h2>Cardapio do Dia</h2>
<h3>Segunda-feira</h3>
<section>
    <ul>
    <li>Arroz</li>
    <li>Feijão</li>
    <li>Salada</li>
    </ul>

    <figure>
        <img src="img/img_01.png" alt="feijoada">
    </figure>
</section>
*/

const main = document.querySelector('main'); //Selecionar a tag main
    main.innerHTML="<h2> Cardapio do dia </h2>";


const diaDaSemana = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sabado']

const hoje = new Date().getDay(); //Date: Informa a data e getDay(): Informa qual dos 7 (de 0 a 6)

const diaAtual = diaDaSemana[hoje]

const menuDoDia=cardapio.find (menu=>menu.dia ===diaAtual);
console.log(menuDoDia)
    if(menuDoDia){
        const h3=document.createElement('h3');
        h3.textContent=menuDoDia.dia;
        main.appendChild(h3);
        
        const section=document.createElement('section');
        const ul=document.createElement('ul');
        
        menuDoDia.cardapio.split(', ').forEach(item => {
            const li=document.createElement('li');
            li.textContent=item;
            ul.appendChild(li);    
        });
        section.appendChild(ul);
        const figure=document.createElement('figure');
        const img=document.createElement('img');
        img.src=menuDoDia.img;
        img.alt=menuDoDia.alt;

        figure.appendChild(img);
        section.appendChild(figure);
        main.appendChild(section);
    }else{
        main.innerHTML='<h2>Hoje não temos cardapio disponivel</h2>'
    }
