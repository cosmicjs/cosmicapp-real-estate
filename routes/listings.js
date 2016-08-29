// listings.js
import Cosmic from 'cosmicjs'
module.exports = (app, config, partials) => {
  app.get('/listings', (req, res) => {
    Cosmic.getObjects({ bucket: { slug: config.COSMIC_BUCKET } }, (err, response) => {
      res.locals.cosmic = response
      const page = response.object.listings
      const listings = response.objects.type.listings
      res.locals.page = page
      res.locals.listings = listings
      return res.render('listings.html', {
        partials
      })
    })
  })
  app.get('/listings/:slug', (req, res) => {
    const slug = req.params.slug
    Cosmic.getObjects({ bucket: { slug: config.COSMIC_BUCKET } }, (err, response) => {
      res.locals.cosmic = response
      const listings = response.objects.type.listings
      listings.forEach(page => {
        if (page.slug === slug)
          res.locals.page = page
      })
      res.locals.page.timestamp = new Date(res.locals.page.created).getTime()
      if (!res.locals.page) {
        return res.status(404).render('404.html', {
          partials
        })  
      }
      return res.render('listings-single.html', {
        partials
      })
    })
  })
}
