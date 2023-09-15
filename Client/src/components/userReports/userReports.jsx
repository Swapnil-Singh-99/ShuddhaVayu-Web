import React from 'react';
import "./userReports.css"

function UserReports() {
    const dummyData = [
        {
            id: 1,
            dateTime: '2023-09-14 10:00 AM',
            name: 'Event 1',
            description: 'Description for Event 1',
            location: 'Location 1',
            attachment: 'https://shorturl.at/lmY08',
        },
        {
            id: 2,
            dateTime: '2023-09-15 02:00 PM',
            name: 'Event 2',
            description: 'Description for Event 2',
            location: 'Location 2',
            attachment: 'https://shorturl.at/lmY08',
        }
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date/Time</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Attachment</th>
                </tr>
            </thead>
            {/* <tr>
                <br />
                <hr />
                <br />
            </tr> */}
            <tbody>
                {dummyData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.dateTime}</td>
                        <td>{item.name}</td>
                        <td className='description'>{item.description}</td>
                        <td>{item.location}</td>
                        <td><img src={item.attachment} alt="" /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserReports;