const convertQuery = async (page, limit) => {
    let offset
    if (!page && limit) {
        offset = 0
    }
    if (!limit && page) {
        offset = null
        limit = null
    }
    if (limit && page) {
        offset = (limit * page) - limit
    }


    return {
        offset: offset ? parseInt(offset) : null,
        limit: limit ? parseInt(limit) : null
    }
    
}

const convertQueryWithDefaults = (page, limit) => {

    let offset
    if (!page && limit) {
        offset = 0
    }
    if (!limit && page) {
        offset = null
        limit = null
    }
    if (limit && page) {
        offset = (limit * page) - limit
    }


    return {
        offset: offset ? parseInt(offset) : 0,
        limit: limit ? parseInt(limit) : 3
    }

}

const objectToQuery = (queryObj) => {
    const keys = Object.keys(queryObj)
    let urlQuery = `?`
    for (let i = 0; i < keys.length; i++) {
        urlQuery = `${urlQuery}${keys[i]}=${queryObj[keys[i]]}&`
    }
    return urlQuery
}

module.exports = { convertQuery, objectToQuery,convertQueryWithDefaults }