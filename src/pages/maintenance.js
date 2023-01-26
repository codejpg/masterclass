import * as React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import get from 'lodash/get'




  class MaintenancePage extends React.Component {
    render() {
      const [maintenance]  = get(this, 'props.data.allContentfulMaintenance.nodes')
      return (

 

     <div className="maintenanceContainer">

     {maintenance.image.gatsbyImage && (
      <GatsbyImage className="maintenanceImg" image={maintenance.image.gatsbyImage} />
    )}
       


     </div>


 )
      }
    }


 export default MaintenancePage

 export const pageQuery = graphql`
 query MaintenanceQuery {
    allContentfulMaintenance {
      nodes {
        image {
          gatsbyImage(width: 2000)
        }
      }
    }
  }

`