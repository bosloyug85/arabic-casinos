import React from 'react'
// import '../../static/scss/components/_tips-for-beginners.scss'

const TipsForBeginners = ({ title, description, tips, cards }: any) => {
    return (
        <section className="tips-for-beginners">
            <div className="container">
                <div className="tips-for-beginners__wrapper">
                    <div className="tips-for-beginners__description">
                        <h2 className="h2">
                            <span>{title}</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis ultrices posuere felis, eu efficitur eros
                            dapibus a. Nunc rutrum fringilla metus, id aliquam
                            neque dignissim sit amet. Suspendisse tincidunt,
                            mauris in volutpat commodo, nulla tellus congue
                            tortor, vel tempus libero justo in justo. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Duis ultrices posuere felis, eu efficitur eros
                            dapibus a. Nunc rutrum fringilla metus, id aliquam
                            neque dignissim sit amet. Suspendisse tincidunt,
                            mauris in volutpat commodo, nulla tellus congue
                            tortor, vel tempus libero justo in justo.
                        </p>
                    </div>
                    <div className="tips-for-beginners__item u-d-flex u-align-center">
                        <div className="tips-for-beginners__item-content">
                            <h3 className="h3">
                                <span>Tip 1</span>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis ultrices posuere felis, eu
                                efficitur eros dapibus a. Nunc rutrum fringilla
                                metus, id aliquam neque dignissim sit amet.
                                Suspendisse tincidunt, mauris in volutpat
                                commodo, nulla tellus congue tortor, vel tempus
                                libero justo in justo. Etiam aliquet lobortis
                                orci vel dignissim.{' '}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis ultrices posuere felis, eu
                                efficitur eros dapibus a. Nunc rutrum fringilla
                                metus, id aliquam neque dignissim sit amet.
                                Suspendisse tincidunt, mauris in volutpat
                                commodo, nulla tellus congue tortor, vel tempus
                                libero justo in justo. Etiam aliquet lobortis
                                orci vel dignissim.{' '}
                            </p>
                        </div>
                    </div>
                    {cards ? (
                        <>
                            <h4 className="h4">
                                {' '}
                                Top 3 Game Type Games at “Provider” Casinos
                            </h4>
                            <div className="tips-for-beginners__cards u-d-flex">
                                {/* <?php
                    get_partial('components/card-criteria');
                    get_partial('components/card-criteria');
                    get_partial('components/card-criteria');
                    ?> */}
                            </div>
                        </>
                    ) : null}
                    <div className="tips-for-beginners__item u-d-flex u-align-center">
                        <div className="tips-for-beginners__item-content">
                            <h3 className="h3">
                                <span>Tip 2</span>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis ultrices posuere felis, eu
                                efficitur eros dapibus a. Nunc rutrum fringilla
                                metus, id aliquam neque dignissim sit amet.
                                Suspendisse tincidunt, mauris in volutpat
                                commodo, nulla tellus congue tortor, vel tempus
                                libero justo in justo. Etiam aliquet lobortis
                                orci vel dignissim.{' '}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis ultrices posuere felis, eu
                                efficitur eros dapibus a. Nunc rutrum fringilla
                                metus, id aliquam neque dignissim sit amet.
                                Suspendisse tincidunt, mauris in volutpat
                                commodo, nulla tellus congue tortor, vel tempus
                                libero justo in justo. Etiam aliquet lobortis
                                orci vel dignissim.{' '}
                            </p>
                        </div>
                    </div>

                    <div className="tips-for-beginners__item u-d-flex u-align-center">
                        <div className="tips-for-beginners__item-content">
                            <h3 className="h3">
                                <span>Tip 3</span>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis ultrices posuere felis, eu
                                efficitur eros dapibus a. Nunc rutrum fringilla
                                metus, id aliquam neque dignissim sit amet.
                                Suspendisse tincidunt, mauris in volutpat
                                commodo, nulla tellus congue tortor, vel tempus
                                libero justo in justo. Etiam aliquet lobortis
                                orci vel dignissim.{' '}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis ultrices posuere felis, eu
                                efficitur eros dapibus a. Nunc rutrum fringilla
                                metus, id aliquam neque dignissim sit amet.
                                Suspendisse tincidunt, mauris in volutpat
                                commodo, nulla tellus congue tortor, vel tempus
                                libero justo in justo. Etiam aliquet lobortis
                                orci vel dignissim.{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TipsForBeginners
