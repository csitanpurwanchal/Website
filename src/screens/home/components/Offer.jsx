import React from 'react';
import './Offer.css';

const Offer = () => {
    const events = [
        {
            title: "Empowering Events",
            description: "We organize events on the regular, with the goal of covering up holes in the CSIT curriculum and making students industry-ready upon graduation.",
            icon: "calendar-icon.png" // Ensure the path is correct
        },
        {
            title: "Empowering Events",
            description: "We organize events on the regular, with the goal of covering up holes in the CSIT curriculum and making students industry-ready upon graduation.",
            icon: "calendar-icon.png"
        },
        {
            title: "Empowering Events",
            description: "We organize events on the regular, with the goal of covering up holes in the CSIT curriculum and making students industry-ready upon graduation.",
            icon: "calendar-icon.png"
        },
        {
            title: "Empowering Events",
            description: "We organize events on the regular, with the goal of covering up holes in the CSIT curriculum and making students industry-ready upon graduation.",
            icon: "calendar-icon.png"
        },
        {
            title: "Empowering Events",
            description: "We organize events on the regular, with the goal of covering up holes in the CSIT curriculum and making students industry-ready upon graduation.",
            icon: "calendar-icon.png"
        },
        {
            title: "Empowering Events",
            description: "We organize events on the regular, with the goal of covering up holes in the CSIT curriculum and making students industry-ready upon graduation.",
            icon: "calendar-icon.png"
        }
    ];

    return (
        <div className="offer-container">
            <h1>WHAT DO WE OFFER?</h1>
            <div className="underline1"></div>  {/* Underline element */}
            <p className="intro-text">Empowering CSIT Growth, Tailored Solutions, Shaping Future Leaders.</p>
            <div className="events-grid">
                {events.map((event, index) => (
                    <div key={index} className="event-card">
                        <div className="event-icon">
                            <img src={event.icon} alt="Event Icon" />
                        </div>
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offer;
