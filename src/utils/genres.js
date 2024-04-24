export const genres = (type) => {
  let genre

  switch (type) {
    case 28:
      genre = "Ação"
      break;
    case 12:
      genre = "Aventura"
      break;
    case 16:
      genre = "Animação"
      break;
    case 35:
      genre = "Comédia"
      break;
    case 18:
      genre = "Drama"
      break;
    case 14:
      genre = "Fantasia"
      break;
    case 27:
      genre = "Horror"
      break;
    case 9648:
      genre = "Mistério"
      break;
    case 10749:
      genre = "Romance"
      break;
    default:
      genre = "Title"
  }

  return genre
}