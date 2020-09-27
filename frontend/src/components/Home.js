import React from 'react'
import '../css/Home.css'

import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />


                <div className="home__row">
                    <Product title='The lean startup'
                        id={242423524525}
                        price={19.99}
                        image="https://image.winudf.com/v2/image1/Y29tLmFuaW1lbGlzdHdhbGxwYXBlcnMucm9ja29ubWFuX3NjcmVlbl82XzE1NzU1NTAzOTNfMDE1/screen-6.jpg?fakeurl=1&type=.jpg"
                        rating={5}
                    />
                    <Product title='The lean startup'
                        id={242423524525}
                        price={19.99}
                        image="https://image.winudf.com/v2/image1/Y29tLmFuaW1lbGlzdHdhbGxwYXBlcnMucm9ja29ubWFuX3NjcmVlbl82XzE1NzU1NTAzOTNfMDE1/screen-6.jpg?fakeurl=1&type=.jpg"
                        rating={4}
                    />




                </div>
                <div className="home__row">
                    <Product title='The lean startup'
                        id={242423524525}
                        price={19.99}
                        image="https://image.winudf.com/v2/image1/Y29tLmFuaW1lbGlzdHdhbGxwYXBlcnMucm9ja29ubWFuX3NjcmVlbl82XzE1NzU1NTAzOTNfMDE1/screen-6.jpg?fakeurl=1&type=.jpg"
                        rating={2}
                    />
                    <Product title='The lean startup'
                        id={242423524525}
                        price={19.99}
                        image="https://image.winudf.com/v2/image1/Y29tLmFuaW1lbGlzdHdhbGxwYXBlcnMucm9ja29ubWFuX3NjcmVlbl82XzE1NzU1NTAzOTNfMDE1/screen-6.jpg?fakeurl=1&type=.jpg"
                        rating={4}
                    />
                    <Product title='The lean startup'
                        id={242423524525}
                        price={19.99}
                        image="https://image.winudf.com/v2/image1/Y29tLmFuaW1lbGlzdHdhbGxwYXBlcnMucm9ja29ubWFuX3NjcmVlbl82XzE1NzU1NTAzOTNfMDE1/screen-6.jpg?fakeurl=1&type=.jpg"
                        rating={3}
                    />



                </div>

                <div className="home__row">
                    <Product title='The lean startup'
                        id={242423524525}
                        price={19.99}
                        image="https://image.winudf.com/v2/image1/Y29tLmFuaW1lbGlzdHdhbGxwYXBlcnMucm9ja29ubWFuX3NjcmVlbl82XzE1NzU1NTAzOTNfMDE1/screen-6.jpg?fakeurl=1&type=.jpg"
                        rating={5}
                    />

                </div>
            </div>
        </div>
    )
}

export default Home
