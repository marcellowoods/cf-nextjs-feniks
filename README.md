# pk-feniks.com

This is for cloudflare pages  
yarn build  
than just put the out folder in cf   
*run yarn build two times for sitemap to be updated  

## Redirects
changing the domain name  
Search the whole project for pk-feniks.com and apply changes  

## How to host nextjs on cf  
https://engineering.udacity.com/hosting-next-js-at-the-edge-with-cloudflare-pages-6411f38171c8  
in package.json  
scripts  
change the build key to  
"build": "next build && next export"  
now when you yarn build everything is exported to the out folder  
upload that to cf  




