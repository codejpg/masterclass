import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
//import {useState, useRef} from 'react';


import Container from './container'
//import Tags from './tags'
import * as styles from './artist-preview.module.css'


const handleHover = (i) =>{
  console.log("mouse over"+i);
}


const ArtistPreview = ({ posts }) => {
  const [isHovering, setIsHovering] = useState(false);
  const delay = 18;

  const dot = useRef(null);
  const dotOutline = useRef(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const handleMouseOver = e => {
    setIsHovering(true);
      cursorVisible.current = true;
  
      endX.current = e.pageX;
      endY.current = e.pageY;
  
      dot.current.style.top = endY.current + 'px';
      dot.current.style.left = endX.current + 'px';
  
  };
  
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  if (!posts) return null
  if (!Array.isArray(posts)) return null
 

  return (
    
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (

            <li key={post.slug}>
              <div className={styles.container}>
              <Link to={`/artists/${post.slug}`} className={styles.link}>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

        
              <GatsbyImage onMouseOver={handleHover(1)} className={styles.image} alt="" image={post.heroImage.gatsbyImage} />
              </div>
              {isHovering && <h1>hello world</h1>}
              {/*
              <div className={styles.content}>
              <h1 className={styles.title}>{post.title}</h1>
                {post.description?.raw && renderRichText(post.description)}
              </div>
          */}
              </Link>
              <div className={styles.meta}>
              </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArtistPreview
