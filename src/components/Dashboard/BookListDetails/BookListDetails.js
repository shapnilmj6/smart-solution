import React from 'react';

const BookListDetails = ({ booking }) => {
    return (
        <div className="d-flex col-sm-6 pt-5">
            <div className="text-center shadow w-100 p-2 rounded">
                <div className="d-flex">
                    <p className="text-light p-2 rounded-3" style={{ 'backgroundColor': booking.status === 'Done' ? 'green' : booking.status === 'pending' ? 'red' : 'yellow' }}>{booking.status}</p>
                </div>
                <h5 className="my-2 ">{booking.name}</h5>
                <h6 className="my-2">{booking.serviceName}</h6>

                <p className="text-secondary">{booking.description}</p>
            </div>
        </div>
    );
};

export default BookListDetails;