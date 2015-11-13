const createElement = require(`./createElement`)
const HTMLTags = require(`./HTMLTags`)

const helpers = {}
const length = HTMLTags.length
let i = -1

while (++i < length) {
  const tagName = HTMLTags[i]
  helpers[tagName] = createElement.bind(null, tagName)
}

module.exports = helpers
