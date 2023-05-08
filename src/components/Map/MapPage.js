import React from 'react';
import { useParams } from 'react-router-dom';

import { Map, MapIntro } from './Map';
import { Preview } from './Preview';
import { Footer } from '../Common/Footer';
import { Navbar } from '../Common/Navbar';

export function MapPage(props) {
  const params = useParams();
  const currentLocationId = params.locationId;


  let locationData = props.locationData;

	let displayedGroup = locationData.filter((data) => {
	  return data.id === currentLocationId;
  })

	const displayedNames = displayedGroup[0].name;
	const displayedAddress = displayedGroup[0].address;
	const displayedId = displayedGroup[0].id;
	const displayedPerson = displayedGroup[0].contactPerson;
	const displayedPhone = displayedGroup[0].contactPhone;
	const displayedEmail = displayedGroup[0].contactEmail;

  return (
    <div>
      <Navbar />
      <main>
        <MapIntro />
        <section>
          <div className="container">
            <div className="row">
              <Map locationData={locationData}/>
              <Preview name={displayedNames} person={displayedPerson} id={displayedId} phone={displayedPhone} email={displayedEmail} address={displayedAddress}/>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
