import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTemplate from '../DataTemplate';

const UserList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const dataObject = await axios.get(process.env.REACT_APP_API_KEY_MARSINSIGHT);
            setData(dataObject.data);
        }
        fetchUsers();
    }, []);

    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => window.removeEventListener('resize', handleWindowSizeChange);
       
    }, []);

    let isMobile = (width <= 840);

    console.log(data);

    return (
        <section className={"data-list"}>
                <DataTemplate 
                    dateSol={"Sol 675"}
                    dateUTC={"Oct.19"}
                    high={"3.4"}
                    low={"-142.4"}
                />
                <DataTemplate 
                    dateSol={"Sol 675"}
                    dateUTC={"Oct.19"}
                    high={"3.4"}
                    low={"-142.4"}
                />
                <DataTemplate 
                    dateSol={"Sol 675"}
                    dateUTC={"Oct.19"}
                    high={"3.4"}
                    low={"-142.4"}
                />
                {isMobile ? null :
                    <>
                        <DataTemplate 
                            dateSol={"Sol 675"}
                            dateUTC={"Oct.19"}
                            high={"3.4"}
                            low={"-142.4"}
                        />

                        <DataTemplate 
                            dateSol={"Sol 675"}
                            dateUTC={"Oct.19"}
                            high={"3.4"}
                            low={"-142.4"}
                        />

                        <DataTemplate 
                            dateSol={"Sol 675"}
                            dateUTC={"Oct.19"}
                            high={"3.4"}
                            low={"-142.4"}
                        />

                        <DataTemplate 
                            dateSol={"Sol 675"}
                            dateUTC={"Oct.19"}
                            high={"3.4"}
                            low={"-142.4"}
                        />
                    </>
                }
        </section>
    );
};

export default UserList;