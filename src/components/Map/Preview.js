import React from 'react';


export function Preview(props) {

    // let urlLink = props.link;

    return (
        <div className="col-12 col-md-4 d-flex">
            <div className="card flex-grow-1">
                <div className="card-body">
                    <h2 className="card-title story-title">{props.name}</h2>
                    <ul>
                        <li className="detail-list">Group ID: {props.id}</li>
                        <li className="detail-list">Contact Person: {props.person}</li>
                        <li className="detail-list">Contact Phone: {props.phone}</li>
                        <li className="detail-list">Contact Email: {props.email}</li>
                        <li className="detail-list">Address: {props.address}</li>
                        {/* <a href={urlLink} className="btn btn-primary btn-sm story-button" role="button">view more</a> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
