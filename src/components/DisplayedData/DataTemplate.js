import React from 'react';

const DataTemplate = (props) => {
    return (
        <div className={"data-item"}>
            <span class="date-sol">{props.dateSol}</span>
            <span class="date-UTC">{props.dateUTC}</span>
            <div class="fade-whiteline"></div>
            <div class="celsius">
                <span class="high">High: <nobr>{props.high}°C</nobr><br /></span>
                <span class="low">Low: <nobr>{props.low}° C</nobr></span>
            </div>
        </div>
    );
};

export default DataTemplate;