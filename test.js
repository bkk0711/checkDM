const whoiser = require('whoiser');

// const easyWhois = require('easy-whois')
// (async () => console.log({
//   'Domain name request': await easyWhois('google.com'),
//   'IP address request': await easyWhois('8.8.8.8')
// }))()


// ( async() => {

// 	let domaininfo = await whoiser('khoidz.com');

// 	// let domaininfo2 = await whoiser.domain('blog.google.com',{host: 'whois.nic.google',follow: 1});

// 	console.log(domaininfo);

// 	// console.log(domaininfo2);


// })();

// const whois = require("freewhois");


// ( async() => {
//     const data = await whois("https://www.google.com");
//     console.log(data); // returns as json
// })

const whois = require('whois-promise');
 
// raw output
(async () => {
  console.log(await whois.raw('khoidz.com'));
})();
 
// json object output
(async () => {
  console.log(await whois.json('mozilla.org'));
})();