import React, { useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import gsap, { Power3 } from 'gsap'
import PopButton from '../PopButton'
import { StyledBanner } from './components'

import anime from '../../assets/anime_me.jpg'


export default function Banner(){
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    end
                }
            }
        }
    `)
    let app = useRef(null)
    let images = useRef(null)
    let content = useRef(null)
    let tl = new gsap.timeline()
    
    useEffect(() => {
      // Images Vars
      const firstImage = images.firstElementChild // or children[0]
      const secondImage = images.lastElementChild
      
      //content vars
      const headlineFirst = content.children[0].children[0]
      const headlineSecond = headlineFirst.nextSibling
      const headlineThird = headlineSecond.nextSibling
      const contentP = content.children[1]
      const contentButton = content.children[2]
  
      //Remove initial flash
      gsap.to(app, 0, {css: {visibility: 'visible'}})
  
      //Images Animation
      tl.from(firstImage, 1.2, {y: 1280, ease: Power3.easeOut},'Start')
      .from(firstImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
      .from(secondImage, 1.4, {y: 1280, ease: Power3.easeOut}, .2)
      .from(secondImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
  
      //Content Animation
      tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
        y: 44,
        ease:Power3.easeOut,
        delay: .8
      }, .15, 'Start')
      .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
      .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
  
    }, [tl])
  
  
  
    return (
        <StyledBanner>
            <div className="hero" ref={el => app = el}>
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-content">
                            <div className="hero-content-inner" ref={el => content = el}>
                                <h1>
                                    <div className="hero-content-line">
                                        <div className="hero-content-line-inner">Hello, I'm Chantz</div>
                                    </div>
                                    <div className="hero-content-line">
                                        <div className="hero-content-line-inner">and I make things</div>  
                                    </div>
                                    <div className="hero-content-line">
                                        <div className="hero-content-line-inner">for the web.</div>
                                    </div>
                                </h1>
                                <p>
                                    {data.site.siteMetadata.end}
                                </p>
                                <div className="btn-row">
                                    <button className="explore-button">
                                        {/* <div className="arrow-icon"></div> */}
                                        <PopButton text={'Say Hello'} href={'mailto:johnson.chantz@gmail.com'}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="hero-images">
                            <div ref={el => images = el}  className="hero-images-inner">
                                <div className="hero-image girl">
                                    <StaticImage
                                        src='../../assets/anime_me.jpg'
                                        alt='Hero image'
                                        placeholder="blurred"
                                    />
                                </div>
                                <div className="hero-image boy">
                                    <StaticImage
                                        src='../../assets/me.jpg'
                                        alt='Hero image'
                                        placeholder="blurred"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </StyledBanner>
    )
  }