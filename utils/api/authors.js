import { BASE_URL } from './base.js'

const getAuthor = (authorKey) => {
    return fetch(`${BASE_URL}/authors/${authorKey}.json`)
        .then((response) => {
            return response.json()
        }).then((data) => {
            return data
        })
}

const getAuthorWorks = (authorKey) => {
    return fetch(`${BASE_URL}/authors/${authorKey}/works.json`)
        .then((response) => {
            return response.json()
        }).then((data) => {
            return data.entries
        })
}
const getBook = (bookId) => {
    return fetch(`${BASE_URL}/works/${bookId}.json`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      return data
    })
}
export { getAuthor, getAuthorWorks ,getBook}
