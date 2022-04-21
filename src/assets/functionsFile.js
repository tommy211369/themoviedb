export const dateFormater = (date) => {
  let [yy, mm, dd] = date.split("-");
  return `${dd} / ${mm} / ${yy}`;
};

export const genreFinder = (array) => {
  let genresArray = [];

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case 28:
        genresArray.push("Action");
        break;
      case 12:
        genresArray.push("Aventure");
        break;
      case 16:
        genresArray.push("Animation");
        break;
      case 35:
        genresArray.push("Comédie");
        break;
      case 80:
        genresArray.push("Crime");
        break;
      case 99:
        genresArray.push("Documentaire");
        break;
      case 18:
        genresArray.push("Drame");
        break;
      case 10751:
        genresArray.push("Familial");
        break;
      case 14:
        genresArray.push("Fantastique");
        break;
      case 36:
        genresArray.push("Histoire");
        break;
      case 27:
        genresArray.push("Horreur");
        break;
      case 10402:
        genresArray.push("Musique");
        break;
      case 9648:
        genresArray.push("Mystère");
        break;
      case 10749:
        genresArray.push("Romance");
        break;
      case 878:
        genresArray.push("Science-Fiction");
        break;
      case 10770:
        genresArray.push("Téléfilm");
        break;
      case 53:
        genresArray.push("Thriller");
        break;
      case 10752:
        genresArray.push("Guerre");
        break;
      case 37:
        genresArray.push("Western");
        break;
      default:
        break;
    }
  }
  return genresArray.map((genre, index) => <li key={index}>{genre}</li>);
};

export const genresFormater = (array) => {
  let genres = "";

  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      genres += array[i].name;
    } else {
      genres += array[i].name + ", ";
    }
  }

  return genres;
};

export const directorFinder = (array) => {
  let director = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i].job === "Director") {
      director = array[i].name;
    }
  }
  return director;
};

export const producerFinder = (array) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].job === "Producer") {
      newArray.push(array[i].name);
    }
  }

  let tab = newArray.slice(0, 5);
  return tab.join(", ");
};

export const companiesFinder = (array) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].name);
  }

  let tab = newArray.slice(0, 3);
  if (newArray.length > 3) {
    return tab.join(", ") + ", ...";
  } else {
    return tab.join(", ");
  }
};

export const languagesFormater = (array) => {
  let languages = "";

  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      languages += array[i].english_name;
    } else {
      languages += array[i].english_name + ", ";
    }
  }

  return languages;
};

export const sumFormater = (num) => {
  let string = num.toString();
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (
      i === string.length - 3 ||
      i === string.length - 6 ||
      i === string.length - 9
    ) {
      newString += " " + string[i];
    } else if (i === string.length - 1) {
      newString += string[i] + " $";
    } else {
      newString += string[i];
    }
  }

  return newString;
};
