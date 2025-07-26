import React from 'react'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'

function EventOverview() {

    const eventData = [
        {
            title: "Civic Sense",
            description: "Fostering civic responsibility through powerful stories and soldier-led insights that encourage active citizenship."
        },
        {
            title: "Women Empowerment",
            description: "Celebrating the strength and spirit of women through voices that uplift, inspire, and empower."
        },
        {
            title: "Mental Health",
            description: "Breaking the silence around mental well-being with courage, compassion, and real-life experiences."
        },
        {
            title: "Environment",
            description: "Championing a cleaner, greener India with initiatives led by those who’ve served the nation."
        },
        {
            title: "Support to Army Families",
            description: "Honoring the bravery of soldiers who fought valiantly for our country by extending meaningful support to their families."
        },
        {
            title: "Live Music Concert",
            description: "Experience the patriotic pulse through a high-energy live music concert that celebrates the spirit of India."
        },
        {
            title: "Featured Panel – Fauji Talks",
            description: "Hear from India’s bravest veterans, mentors, and heroes as they share untold stories, life lessons, and insights from their journey of service."
        }
    ];

    return (
        <>
            <div className='mt-5'>
                <div className="header-content text-center">
                    <h2
                        className="ftittle m-0 p-0 text-capitalize main-title sponser_underline"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        data-aos-once="true"
                    >
                        Event Overview
                    </h2>
                    <p className="pera pt-3">
                        "An inspiring evening that blends patriotism with purpose, as decorated Army veterans ignite meaningful conversations for a stronger, united India."</p>
                </div>
                {eventData.map((event, index) => (
                    <div key={index}>
                        <div
                            className="fw-bold pb-1 py-3"
                            style={{
                                color: "black",
                                borderBottom: "1px solid hsla(0, 41%, 12%, 0.829)",
                            }}
                            data-aos="fade-up"
                            data-aos-duration="1800"
                            data-aos-once="true"
                        >
                            {event.title}
                        </div>
                        <div className="pera pt-2">
                            <div
                                className="py-1 d-flex align-content-start align-items-start"
                                data-aos="fade-up"
                                data-aos-duration="1800"
                                data-aos-once="true"
                                data-aos-delay="400"
                            >
                                <div
                                    className="fs-5"
                                    style={{
                                        color: "var(--green--)",
                                    }}
                                >
                                    <IoCheckmarkDoneCircle />
                                </div>
                                <div className="ps-2 pt-1">
                                    {event.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default EventOverview