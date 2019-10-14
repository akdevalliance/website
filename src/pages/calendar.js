import React from 'react'
import Layout from '../components/Layout'

const CalendarPage = () => (
    <Layout>
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 25,
        paddingBottom: 100,

    }}> 
        <h1 style={{marginBottom: 25,
                    fontSize: 24,
                    fontWeight: 'bold'
        }}>Alaska Developers Alliance Calendar of Events</h1>
        <div>
            <iframe title='calendar' src="https://calendar.google.com/calendar/b/5/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FAnchorage&src=YWtkZXZhbGxpYW5jZS5jb21fOTNxY3ZvMGM3ZTRucDVnOTltbzk0M2hlNm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457&color=%230B8043&showTitle=0" style={{ borderWidth:0 }} width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
    </div>

    </Layout>
  )


export default CalendarPage