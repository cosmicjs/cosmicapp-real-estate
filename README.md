#Real Estate Website Template
![Cosmic JS Real Estate Website](https://cosmicjs.imgix.net/b5947f60-6d53-11e6-b581-890a92317c6c-pool.jpg?w=500)

This real estate website template satisfies some common real estate website requirements including dynamic pages, listing management, blog articles, author management, SEO ability, contact form and website search.  Built using [Node.js](https://nodejs.org/en/) for the server, [Bootstrap](http://getbootstrap.com/) for the frontend framework and [Cosmic JS](https://cosmicjs.com/) for the CMS API.

##Pagespeed
[Yea, it's fast](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Freal-estate.cosmicapp.co%2F)

##Installation
Install and deploy this website faster than you can say SOLD! using [The Cosmic Stack](https://cosmicjs.com/blog/the-cosmic-stack).  

####Steps:
1. [Sign up for Cosmic JS](https://cosmicjs.com)
2. Create a bucket, then install the Real Estate app
3. Deploy to web!

##Demo
[Click here to view the demo website](http://real-estate.cosmicapp.co)

##Features
1. Fully responsive down to mobile w/ [Bootstrap](http://getbootstrap.com) frontend<br />
2. SEO ready<br />
3. A contact form that sends an email to your email(s) of choice and to [Cosmic JS](https://cosmicjs.com) for easy reference<br />
4. Full-site search functionality<br />
5. All content is easily managed in [Cosmic JS](https://cosmicjs.com) including pages, blog and contact info.

Sign up for [Cosmic JS](https://cosmicjs.com) to install the demo content and deploy this website.

##Spread the word
####Tell your realtor friends (everyone has at least one) to use this instead of other website templates because:
1. It's built on Node.js so everything loads SUPER FAST
2. It's SO easy to edit content using the [Cosmic JS CMS API](https://cosmicjs.com)
3. You're going to want to help them build on it because it's built on tech you love :)

##Get started
```
git clone https://github.com/cosmicjs/cosmicapp-real-estate
cd cosmicapp-real-estate
npm install
```
###Run in production
```
COSMIC_BUCKET=your-bucket-slug npm start
```
Go to [http://localhost:3000](http://localhost:3000).
###Run in development
Create a `config/development.js` file and match it to `config/production.js` with your values.
```
npm run development
```
Go to [http://localhost:5000](http://localhost:5000).
####Contact email
Because Node.js doesn't have a mail server, the contact form uses an SMTPS string to connect to your mail server of choice. To do this, add an `SMTPS_STRING` to your ENV vars in your Cosmic JS bucket.  This is located in Your Bucket > Settings > Deploy Website.  An example string looks like: `smtps://yourname%40gmail.com:yourpass@smtp.gmail.com`.
