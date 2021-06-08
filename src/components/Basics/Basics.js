import React from 'react';

const Basics = () => {
    return (
        <section className={"basics"}>
            <ul className={"basics-items"}>
                <li className={"basics-sol"}>
                    <div className={"big-item"}>Sol 681</div>
                    <div className={"small-item"}>October 25, 2020</div>
                </li>

                <li className={"basics-temp"}>
                    <div className={"small-item normal-item-text"}>High: 24 F<span> / C</span></div>
                    <div className={"small-item normal-item-text"}>Low: -139.8 F <span> / C</span></div>
                </li>

            </ul>
        </section>
    );
};

export default Basics;