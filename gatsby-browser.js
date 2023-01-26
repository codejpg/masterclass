exports.onClientEntry = () => {

    if( window.location.pathname !== '/maintenance'){
 
      window.location = '/maintenance';
 
    }
 
  }

  exports.onRouteUpdate = () => {

    if( window.location.pathname !== '/maintenance'){
 
      window.location = '/maintenance';
 
    }
 
  }