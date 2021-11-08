/**
 * TODO: Create and configure your Express.js application in here.
 *       You must name the variable that contains your Express.js
 *       application "app" because that is what is exported at the
 *       bottom of the file.
 */

const express = require('express')
const { Entree, EntreeType } = require('./models')
const cookieParser = require('cookie-parser')
const csrf = require('csurf')
const csrfProtection = csrf( { cookie: true } )

const asyncHandler = handler => (req, res, next) => handler(req, res,next).catch(next)

const app = express()

app.set('view engine', 'pug')

app.use(express.urlencoded( { extended: false } ))
app.use(cookieParser())

app.get('/', asyncHandler(async(req, res) => {
  const entrees = await Entree.findAll({
    include: EntreeType
  })
  res.render('entree-list', { entrees })
}))

app.get('/entrees/new', csrfProtection, asyncHandler(async(req, res) => {
  const entreeTypes = await EntreeType.findAll()
  const entree = Entree.build()
  res.render('add-entree', { csrfToken: req.csrfToken(), entree, entreeTypes })
}))

app.post('/entrees', csrfProtection, asyncHandler(async(req, res) => {
  // console.log(req.body)
  const {
    name,
    description,
    price,
    entreeTypeId
  } = req.body

  const newEntree = await Entree.create({
    name,
    description,
    price,
    entreeTypeId
  })
  res.redirect('/')
}))

const port = 8081
app.listen(port, () => console.log(`Server is running on port ${port}...`))

/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
