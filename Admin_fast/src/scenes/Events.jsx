import React from "react";
import "./Events.css";

const EventTables = () => {
  const upcomingEvents = [
    { date: "2025-02-15", event: "Tech Conference 2025", location: "San Francisco" },
    { date: "2025-03-10", event: "Product Launch", location: "New York" },
  ];

  const liveEvents = [
    { startTime: "12:00 PM", event: "Live Coding Session", status: "Ongoing" },
    { startTime: "3:00 PM", event: "Webinar on AI", status: "Ongoing" },
  ];

  const upcomingMatches = [
    { date: "2025-02-20", time:'15:35 PM ', match: "Team A vs Team B", createEvent: "Create" },
    { date: "2025-02-25", time:'25:35 AM ', match: "Team C vs Team D", createEvent: "Create" },
  ];

  return (
    <div className="grid gap-6 mt-12 grid-cols-12">
      {/* Upcoming Events Table */}
      <div className="card col-span-6">
        <div className="card-header upcoming text-white p-4">UPCOMING EVENT</div>
        <div className="card-body p-4">
          <table className="event-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => (
                  <tr key={index}>
                    <td>{event.date}</td>
                    <td>{event.event}</td>
                    <td>{event.location}</td>
                  </tr>
                ))
              ) : (
                <tr className="no-event">
                  <td colSpan="3">No Upcoming Event found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Live Events Table */}
      <div className="card col-span-6">
        <div className="card-header live text-white p-4">LIVE EVENT</div>
        <div className="card-body p-4">
          <table className="event-table">
            <thead>
              <tr>
                <th>Start Time</th>
                <th>Event</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {liveEvents.length > 0 ? (
                liveEvents.map((event, index) => (
                  <tr key={index}>
                    <td>{event.startTime}</td>
                    <td>{event.event}</td>
                    <td>{event.status}</td>
                  </tr>
                ))
              ) : (
                <tr className="no-event">
                  <td colSpan="3">No Live Event found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upcoming Cricket Matches Table */}
      <div className="card col-span-12">
        <div className="card-header upcoming text-white p-4">UPCOMING CRICKET MATCH</div>
        <div className="card-body match-box">
          <table className="event-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Match</th>
                <th>Create Event</th>
              </tr>
            </thead>
            <tbody>
              {upcomingMatches.length > 0 ? (
                upcomingMatches.map((match, index) => (
                  <tr key={index}>
                    <td>{match.date}</td>
                    <td>{match.time}</td>
                    <td>{match.match}</td>
                    <td>
                      <button className="create-event-btn">{match.createEvent}</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="no-event">
                  <td colSpan="4">No Upcoming Matches found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventTables;
