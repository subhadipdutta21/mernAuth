import React from 'react';

const UserCard = ({ title, bio }) => {
    return (
        <div className="card" style={{ width: "18rem", margin: "auto" }}>
            <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                className="card-img-top"
                style={{ borderRadius: 100, height: 100, width: 100, alignSelf: "center" }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up .</p>
                <button onClick={() => console.log('clicked')} type="button" className="btn btn-primary">Visit</button>

            </div>
        </div>
    );
}

export default UserCard;