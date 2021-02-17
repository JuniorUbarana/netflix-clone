const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = '298a4b03392987af46d1ac1c8f2f2864';

const basicFetch = async (endpoint) =>{
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList : async () => {
    return [
      {
        slug: 'originals',
        title: 'Séries',
        items: await basicFetch(`/discover/tv/?with_network=213&api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'actions',
        title: 'Ação',
        items: await basicFetch(`/discover/movie/?with_genres=28&api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'cartoon',
        title: 'Animação',
        items: await basicFetch(`/discover/movie/?with_genres=16&api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'adventure',
        title: 'Aventura',
        items: await basicFetch(`/discover/movie/?with_genres=12&api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie/?with_genres=35&api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie/?with_genres=27&api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie/?with_genres=10749&api_key=${API_KEY}&language=pt-BR`)
      },{
        slug: 'suspense',
        title: 'Suspense',
        items: await basicFetch(`/discover/movie/?with_genres=9648&api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'fiction',
        title: 'Ficção Científica',
        items: await basicFetch(`/discover/movie/?with_genres=878&api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'crime',
        title: 'Policial',
        items: await basicFetch(`/discover/movie/?with_genres=80&api_key=${API_KEY}&language=pt-BR`)
      }
    ]
  }
}