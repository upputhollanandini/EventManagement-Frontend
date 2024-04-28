import React, { useState, useEffect } from 'react';
import moment from 'moment';
const EventItem = ({ event, onEventDelete, onToggleReminder, onEventEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(event.title);
    const [editedDate, setEditedDate] = useState(moment(event.date).format("YYYY-MM-DD"));
    const [editedTime, setEditedTime] = useState(moment(event.date).format("HH:mm:ss"));

    // eslint-disable-next-line no-unused-vars
const [rem, setRem] = useState("");


    useEffect(() => {
        if (event) {
            setRem(event.reminder ? "" : "Reminder On");

            const today = new Date();
            const eventDate = new Date(event.date);

            today.setHours(0, 0, 0, 0);
            eventDate.setHours(0, 0, 0, 0);

            if (today.getTime() === eventDate.getTime() && event.reminder) {
                alert(`Today is the day of the event: ${event.title}`);
            }
        } else {
            setRem("Reminder On");
        }
    }, [event, event.reminder]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        const formattedTime = moment(editedTime, 'HH:mm:ss').format('HH:mm:ss');
        onEventEdit(event._id, {
            title: editedTitle,
            date: `${editedDate} ${formattedTime}`
        });
        setIsEditing(false);
    };
    

    const handleCancelClick = () => {
        setEditedTitle(event.title);
        setEditedDate(moment(event.date).format("YYYY-MM-DD"));
        setEditedTime(moment(event.date).format("HH:mm:ss"));
        setIsEditing(false);
    };

    return (
        <div className="event-card">
            <p className='rem-para'>
                {event.reminder ? "Reminder On" : ""}
            </p>
            <div className="event-info">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                        />
                        <input
                            type="date"
                            value={editedDate}
                            onChange={(e) => setEditedDate(e.target.value)}
                        />
                        <input
                            type="time"
                            value={editedTime}
                            onChange={(e) => setEditedTime(e.target.value)}
                        />
                    </>
                ) : (
                    <>
                        <h3 className="event-title">{event.title}</h3>
                        <hr />
                        <span className="event-date">
                            <span style={{ "fontWeight": "700" }}>Event On: </span>
                            {moment(event.date).add(1, 'days').calendar()}
                        </span>
                    </>
                )}
            </div>
            <div className="event-actions">
                {isEditing ? (
                    <>
                        <button onClick={handleSaveClick}>Save</button>
                        <button onClick={handleCancelClick}>Cancel</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => onToggleReminder(event._id)}>
                            {event.reminder ? 'Disable Reminder' : 'Enable Reminder'}
                        </button>
                        <button className='delete-btn' onClick={() => onEventDelete(event._id)}>Delete</button>
                        <button onClick={handleEditClick}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default EventItem;
