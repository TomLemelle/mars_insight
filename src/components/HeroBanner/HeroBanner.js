import React from 'react';

const HeroBanner = () => {
    return (
        <section className={"herobanner"}>
            <ul className={"herobanner-items"}>
                <li className={"herobanner-h1"}>
                    <h1>
                        Latest Weather <br />
                        at Elysium Planitia
                    </h1>
                </li>
                <li className={"herobanner-p"}>
                    <p>
                        InSight has temporarily suspended daily weather measurements. 
                        As more data becomes available, it will appear below. Meanwhile, 
                        get the latest Mars weather from the <a href="#">Curiosity Rover</a>.
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default HeroBanner;