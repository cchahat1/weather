import { BASE_URL } from "./api/base.js"

function getAuthor(author_key) {
  return fetch(` ${BASE_URL}/authors/${author_key}.json`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      return data
    })
}
function getBooks(author_key) {
  return fetch(` ${BASE_URL}/authors/${author_key}/works.json`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      return data.entries
    })

}

export { getAuthor, getBooks }