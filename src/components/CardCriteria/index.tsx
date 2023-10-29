import ImageComponent from '../Image'
// import '../../static/scss/components/card-criteria'

const CardCriteria = ({ item }: any) => {
    return (
        <div className="card-criteria">
            <div className="card-criteria__card-content">
                <div className="card-criteria__image">
                    <div className="media-wrapper">
                        <ImageComponent
                            className=""
                            lazy={true}
                            desktop_img_url={item.image.url}
                            mobile_img_url={item.image.url}
                            img_url={item.image.url}
                        />
                    </div>
                </div>
                <div className="card-criteria__card-text">
                    <h4 className="h4">{item.title}</h4>
                    <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                </div>
                {/* <?php
        if (isset($btnCta)) {
            ?>
            <div className="card-criteria__cta">
                <?php
                get_partial('components/button', [
                    'class' => 'btn--solid btn--outline',
                    'href' => "#",
                    'buttonText' => 'Read Review'
                ]);
                ?>
            </div>
            <?php
        }
        ?> */}
            </div>
        </div>
    )
}

export default CardCriteria
