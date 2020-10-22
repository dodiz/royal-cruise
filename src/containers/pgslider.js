import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom"

import { Slider } from "../components"
import { Loading } from "../containers"
import { ROUTES } from "../constants"
import { PgContext } from "../context"
import { RightArrow } from "../svg"

export default function PgSliderContainer() {
    const history = useHistory()
    const { userPgs, currentPg, setCurrentPg } = useContext(PgContext)
    const getWidth = () => 90

    const slides = [
        'https://i.ibb.co/xfL6cWF/download.png',
        'https://i.ibb.co/DDnzwPr/morgan.png',
        'https://i.ibb.co/R27wLrT/jesse.png',
        'https://i.ibb.co/xG77jJq/royal.png'
    ]

    const [state, setState] = useState({
        translate: (currentPg > 1) ? (-getWidth() + getWidth() * 2) + (currentPg - 1) * getWidth() : (-getWidth() + currentPg * getWidth() * 2),
        transition: 0.45
    })
    useEffect(() => {
        currentPg === 0 &&
            setState(prev => ({ ...prev, translate: -getWidth() }))
    }, [currentPg])

    const switchSlide = left => {
        const one = !left ? 1 : -1
        setState(prev => {
            const firstScroll = currentPg === 0 ? prev.translate + one * getWidth() * 2 : prev.translate + one * getWidth()
            setCurrentPg(prev => prev += one)
            return ((!left && currentPg === userPgs.length - 1) || (left && currentPg === 0)) ?
                prev
                :
                {
                    ...prev,
                    translate: firstScroll,
                }
        })
    }


    return (
        <Slider>
            {!userPgs ?
                <Loading style={{ height: "50vh" }} />
                :
                userPgs.length && currentPg !== null ?
                    <>
                        <Slider.Title>I miei pg</Slider.Title>
                        <Slider.Main width={2 * getWidth() + 20}>
                            <Slider.Content
                                style={{ marginLeft: `${getWidth() / 2}px` }}
                                translate={state.translate}
                                transition={state.transition}
                                width={getWidth() * userPgs.length}
                            >
                                {userPgs.map((slide, i) => (
                                    <Slider.Slide
                                        key={i}
                                        style={{ cursor: "pointer" }}
                                        onClick={() => history.push(ROUTES.PGINFO)}
                                        active={i === currentPg} width={getWidth()}
                                        content={slides[i]}
                                    />
                                ))}
                            </Slider.Content>
                        </Slider.Main>
                        <Slider.Arrow direction="left" hide={currentPg === 0} onClick={() => switchSlide(true)}><RightArrow style={{ transform: "rotate(180deg)", }} /></Slider.Arrow>
                        <Slider.Arrow direction="right" hide={currentPg === userPgs.length - 1} onClick={() => switchSlide(false)}><RightArrow /></Slider.Arrow>
                        <Slider.Description>{userPgs[currentPg].personal.name}</Slider.Description>
                    </>
                    :
                    null
            }
        </Slider>

    )
}