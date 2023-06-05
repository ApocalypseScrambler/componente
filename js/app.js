import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import ComponenteTabla from '../components/componenteTabla.js'


createApp({
    components: {
        ComponenteTabla
    },
    data() {
        return {
            estilos: [ 'tabla-1', 'tabla-2', 'tabla-3' ],
            titulos: ['Titulo 1', 'Titulo 2', 'Titulo 3'],
            movies: [
                [
                    {
                        id: 1,
                        titulo: 'Guardians of the Galaxy Vol. 3',
                        imagen: 'https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
                        sinopsis: 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.',
                        estreno: '05/05/2023',
                        duracion: '150'
                    },
                    {
                        id: 2,
                        titulo: 'Fast X',
                        imagen: 'https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
                        sinopsis: 'Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.',
                        estreno: '19/05/2023',
                        duracion: '141'
                    },
                    {
                        id: 3,
                        titulo: 'Air',
                        imagen: 'https://m.media-amazon.com/images/M/MV5BYmNlOTNlYjUtM2U3Yy00M2ZjLTkxZDQtN2NiNGZiZDI0ZjE3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg',
                        sinopsis: 'Follows the history of shoe salesman Sonny Vaccaro, and how he led Nike in its pursuit of the greatest athlete in the history of basketball, Michael Jordan.',
                        estreno: '05/04/2023',
                        duracion: '111'
                    },
                ],
                [
                    {
                        id: 4,
                        titulo: 'Interstellar',
                        imagen: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                        sinopsis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival',
                        estreno: '07/11/2014',
                        duracion: '169'
                    },
                    {
                        id: 5,
                        titulo: 'John Wick: Chapter 4',
                        imagen: 'https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg',
                        sinopsis: 'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
                        estreno: '24/03/2023',
                        duracion: '169'
                    },
                    {
                        id: 6,
                        titulo: 'Dungeons & Dragons: Honor Among Thieves',
                        imagen: 'https://m.media-amazon.com/images/M/MV5BNmFkN2M2NzItOTY5YS00MmE2LTk3ZjctNTk2YzQ5ZmRiYzJjXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg',
                        sinopsis: 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.',
                        estreno: '31/03/2023',
                        duracion: '134'
                    }
                ],
                [
                    {
                        id: 7,
                        titulo: 'Inception',
                        imagen: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
                        sinopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
                        estreno: '16/07/2010',
                        duracion: '148'
                    },
                    {
                        id: 8,
                        titulo: 'Avengers: Endgame',
                        imagen: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
                        sinopsis: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
                        estreno: '26/04/2019',
                        duracion: '181'
                    },
                    {
                        id: 9,
                        titulo: 'Avengers: Infinity War',
                        imagen: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
                        sinopsis: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
                        estreno: '27/04/2018',
                        duracion: '149'
                    }
                ],
            ]
        }
    },

}).mount('#app')