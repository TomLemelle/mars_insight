import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const dataObject = await axios.get(process.env.REACT_APP_API_KEY_MARSINSIGHT);
            setData(dataObject.data);
        }
        fetchUsers();
    }, []);

    console.log(data);

    return (
        <div className={"data-list"}>
            test
        </div>
    );
};

export default UserList;