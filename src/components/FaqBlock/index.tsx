import React, { useEffect } from 'react'
import Accordion from '../Accordion'

// type HeroProps = {
//     children?: JSX.Element[]
//     title: string
//     content: string | JSX.Element
//     btnHref?: string
//     btnText?: string
//     bgImage?: string
// }

const FaqBlock = (props: any) => {
    const { title, faqs } = props

    useEffect(() => {
        const accs = document.getElementsByClassName(
            'js-accordion-trigger'
        ) as HTMLCollectionOf<HTMLElement>

        const closeAll = (tar: HTMLElement) => {
            Array.from(accs).forEach((item) => {
                if (item !== tar) {
                    item.classList.remove('active')
                    const panel = item.nextElementSibling as HTMLElement | null
                    if (panel) {
                        panel.style.maxHeight = ''
                        panel.style.opacity = '0'
                    }
                }
            })
        }

        for (let i = 0; i < accs.length; i++) {
            accs[i].addEventListener('click', function (ev) {
                const $this: any = ev.currentTarget as HTMLElement
                closeAll($this)
                $this.parentNode.classList.toggle('active')
                const panel = $this.nextElementSibling as HTMLElement | null
                if (panel) {
                    if (panel.style.maxHeight === '') {
                        panel.style.maxHeight = panel.scrollHeight + 'px'
                        panel.style.opacity = '1'
                    } else {
                        panel.style.maxHeight = ''
                        panel.style.opacity = '0'
                    }
                }
            })
        }
    }, [])

    return (
        <section className="faq-block">
            <div className="container">
                <div className="faq-block__wrapper u-d-flex u-justify-between">
                    <div className="left">
                        <h2 className="h2">{title}</h2>
                    </div>

                    <div className="right">
                        <Accordion items={faqs} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqBlock
