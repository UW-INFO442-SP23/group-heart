import React from 'react';
import { Navbar } from '../Common/Navbar';
import {FooterComponent} from '../Common/Footer'
import { Cards } from './Card';
// Homepage wireframe (feel free to change it just a wireframe)

// <Header>
// <Banner>
// <Card>
// <Footer>

export function HomePage(props) {
    
    return (
        <div>
            <Navbar />
            <main>
                <div className="descriptionContainer">
		            <div className="item">
                        <h1>Welcome to Rainbow!</h1>
                        <p>Colors are beautiful, but not everyone can see them</p>
                        <p>We aspire to help colorblind children learn colors through education</p>
                        </div>
                    <div className="item" id='item2'></div>
                </div>
                <Cards />
                <div role="document">

                    <div className="missionContainer">
                        

                        {/* <div class="counter">
                            <h1 className="missionInfoWhite">Real-time counter:</h1>
                            <iframe title="Tons of CO2 emitted into the atmosphere" src="https://www.theworldcounts.com/embed/challenges/23?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14" style={{border: 'none'}} height={100} width={300} />
                            <iframe title="Number of planet Earths we need" src="https://www.theworldcounts.com/embed/challenges/83?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14" style={{border: 'none'}} height={100} width={300} />
                        </div> */}
                        {/* <div>
                            <h1 className="missionInfo">Our Mission</h1>
                            <p className="info">We believe that everyone can participate in the action of being more environmental friendly just by changing a bit of their lifestyles!</p>
                            <p className="info">Come join us by inputting your data, testing your environmental knowledge with our trivia game, and receiving rewards from the store!</p>
                        </div> */}
                    </div>
                </div>
            </main>
            <FooterComponent></FooterComponent>
        </div>
    )
}



