exports.onClientEntry = () => {

    if(process.env.IN_SITE_MAINTENANCE === "true" && window.location.pathname !== '/maintenance'){
 
      window.location = '/maintenance';
 
    }
 
  }

  exports.onRouteUpdate = () => {

    if(process.env.IN_SITE_MAINTENANCE === "true" && window.location.pathname !== '/maintenance'){
 
      window.location = '/maintenance';
 
    }
 
  }