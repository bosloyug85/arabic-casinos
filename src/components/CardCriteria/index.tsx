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
                            desktop_img_url={item.image}
                            mobile_img_url={item.image}
                            img_url={item.image}
                        />
                    </div>
                </div>
                <div className="card-criteria__card-text">
                    <h4 className="h4">Rating Criteria</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis ultrices posuere felis, eu efficitur eros dapibus
                        a. Nunc rutrum fringilla metus, id aliquam neque
                        dignissim sit amet. Suspendisse tincidunt, mauris in
                        volutpat commodo, nulla tellus congue tortor, vel tempus
                        libero justo in justo.
                    </p>
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
