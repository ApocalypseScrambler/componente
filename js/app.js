const { createApp } = Vue;

const Card = {
    props: {
        titulo: String,
        imagen: String,
        sinopsis: String,
        estreno: String,
        duracion: Number
    },
    template: `
    <div class="card">
        <img :src="imagen" class="card-img-top" :alt="titulo">    
        <div class="card-body">
            <h5 class="card-title">{{titulo}}</h5>
            <p class="card-text">{{sinopsis}}</p>
            <p class="card-text">Duración: {{duracion}} minutos</p>
            <h6 class="card-subtitle mb-2 text-body-secondary">Fecha de Estreno: {{estreno}}</h6>
        </div>
</div>
    `
}

createApp({
    components: {
        'card-component': Card,
      },
    data() {
        return {
            movies: [
                {
                    titulo: 'Guardians of the Galaxy Vol. 3',
                    imagen: 'https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
                    sinopsis: 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.',
                    estreno: '05/05/2023',
                    duracion: '150'
                },
                {
                    titulo: 'John Wick: Chapter 4',
                    imagen: 'https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg',
                    sinopsis: 'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
                    estreno: '24/03/2023',
                    duracion: '169'
                },
                {
                    titulo: 'Dungeons & Dragons: Honor Among Thieves',
                    imagen: 'https://m.media-amazon.com/images/M/MV5BNmFkN2M2NzItOTY5YS00MmE2LTk3ZjctNTk2YzQ5ZmRiYzJjXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg',
                    sinopsis: 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.',
                    estreno: '31/03/2023',
                    duracion: '134'
                },
                {
                    titulo: 'Dune',
                    imagen: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
                    sinopsis: 'A noble family becomes embroiled in a war for control over the galaxy most valuable asset while its heir becomes troubled by visions of a dark future.',
                    estreno: '22/10/2021'
                },
            ],
        }
    },

}).mount('#app')