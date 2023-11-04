import { useEffect } from 'react'
import CalendarIcon from '../CalendarIcon'
import DepositIcon from '../DepositIcon'
import GlobeIcon from '../GlobeIcon'
import ImageComponent from '../Image'
import LanguagesIcon from '../LanguagesIcon'
import LicenceIcon from '../LicenceIcon'
import SupportIcon from '../SupportIcon'
import UpdatedIcon from '../UpdatedIcon'

const BigTable = ({ items }: any) => {
    useEffect(() => {
        let showMoreButton: any = document.querySelector('.js-show-more')
        let cardNumber: any = document.querySelector('.js-card-num')
        let images = document.querySelectorAll('.js-card-img')
        let initiallyVisible = 6
        var hiddenImagesCount = 0
        images.forEach((img: any, index) => {
            if (index >= initiallyVisible) {
                img.parentElement.style.display = 'none'
                hiddenImagesCount++
            }
        })
        cardNumber.textContent = hiddenImagesCount.toString()
        showMoreButton.addEventListener('click', function (event: any) {
            event.preventDefault()
            let hiddenImages = Array.from(images).filter(function (img) {
                return img.parentElement.style.display === 'none'
            })

            hiddenImages.slice(0, 10).forEach(function (img) {
                img.parentElement.style.display = 'block'
            })

            if (hiddenImages.length <= 10) {
                showMoreButton.style.display = 'none'
            }
        })
    }, [])

    return (
        <div className="big-table">
            {items &&
                items.map((item: any) => (
                    <div className="big-table__item u-d-flex">
                        <div className="u-d-flex big-table__item-left">
                            {item.left_icon === 'calendar' && <CalendarIcon />}
                            {item.left_icon === 'globe' && <GlobeIcon />}
                            {item.left_icon === 'licence' && <LicenceIcon />}
                            {item.left_icon === 'deposit' && <DepositIcon />}
                            {item.left_icon === 'languages' && (
                                <LanguagesIcon />
                            )}
                            {item.left_icon === 'support' && <SupportIcon />}
                            {item.left_icon === 'updated' && <UpdatedIcon />}
                            <p> {item.left_label}:</p>
                        </div>
                        <div
                            className={`u-d-flex big-table__item-right ${
                                item.field_type ? 'card' : ''
                            }`}
                        >
                            {!item.field_type ? (
                                <p> {item.right_text}</p>
                            ) : (
                                <>
                                    {item.images &&
                                        item.images.map((image: any) => (
                                            <ImageComponent
                                                lazy={true}
                                                className="js-card-img"
                                                img_url={image.image}
                                            />
                                        ))}
                                    <a href="#" className="js-show-more">
                                        Show{' '}
                                        <span className="js-card-num"></span>{' '}
                                        more
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                ))}

            {/* <div className="big-table__item u-d-flex">
                <div className="u-d-flex big-table__item-left">
                   
                    <p> Website:</p>
                </div>
                <div className="u-d-flex big-table__item-right">

                    <p> <a href="#">www.example.com</a></p>
                </div>
            </div>
             */}
        </div>
    )
}

export default BigTable
