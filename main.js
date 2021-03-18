'mode strict'

const links = {
    "nome": "Rafaela Moraes",
    "img": "./imagens/paulina.jpg",
    "links": [
        {
            "titulo": "Instagram",
            "url": "https://www.instagram.com/_moraesz/"
        },
        {
            "titulo": "Youtube",
            "url": "https://www.youtube.com/"
        },
        {
            "titulo": "GitHub",
            "url": "https://github.com/moraeszz"
        },
        {
            "titulo": "Facebook",
            "url": "https://www.facebook.com/rafaela.andrademoraes"
        }
    ]
}

const titulo = document.getElementById('titulo');
titulo.textContent = links.nome;

const paulina = document.getElementById('paulina');
paulina.src = links.img;

const insta = document.getElementsByTagName('a')[0];
insta.textContent = links.links[0].titulo;
insta.href = links.links[0].url;

const youtube = document.getElementsByTagName('a')[1];
youtube.textContent = links.links[1].titulo;
youtube.href = links.links[1].url;

const gitHub = document.getElementsByTagName('a')[2];
gitHub.textContent = links.links[2].titulo;
gitHub.href = links.links[2].url;

const face = document.getElementsByTagName('a')[3];
face.textContent = links.links[3].titulo;
face.href = links.links[3].url;

