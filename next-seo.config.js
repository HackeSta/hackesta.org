let config = {
    title:"Hackesta",
    description:"Hackesta - Providers of reliable and cost-efficient digital services. Based in Srinagar, Jammu & Kashmir, India. Regular contributors and supporters of Free & Open Source Community. Static Websites, based on pure HTML5 CSS3 JavaScript, WhatsApp Sticker Apps, Portfolio Websites, etc. Social Media Page Manager",
    url:"https://hackesta.org",
}
export default {
    title:config.title,
    description:config.description,
    canonical:config.url,
    openGraph: {
      url:  config.url,
      title: config.title,
      description: config.description,
      type: 'website',
      url: config.url,
      site_name: config.title,
      images: [
        {
          url: config.url+'/og.jpg',
          width: 1200,
          height: 630,
          alt: 'OG Image'
      },
      ]
    },
  };
