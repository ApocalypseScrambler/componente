export default {
    
    props: {
        movies: Array,
        estilos: String,
        titulo: String
        },

        template: /*html*/` 
            <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Poster</th>
                    <th scope="col">Título</th>
                    <th scope="col">Sinopsis</th>
                    <th scope="col">Fecha Estreno</th>
                    <th scope="col">Duración</th>
                </tr>
            </thead>
                <tbody>            
                <tr v-for="(movie, i) in movies" :key="i">
                    <td scope="row"><img :src="movie.imagen" :alt="movie.titulo"></td>
                    <td>{{movie.titulo}}</td>
                    <td>{{movie.sinopsis}}</td>
                    <td>{{movie.estreno}}</td>
                    <td>{{movie.duracion}}</td>
                </tr>
                </tbody>
            </table>
        `
}
