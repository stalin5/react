import { useEffect, useState } from "react";
import Card from "../components/Card.jsx"; // Assume you use this later

function Placement() {
    const [department, setDepartment] = useState([{ name: "", faculty: [] }]);

    useEffect(() => {
        const depart = [
            {
                name: "CSE",
                faculty: [
                    { name: "siva", exp: 2, domain: "iot" },
                    { name: "siva", exp: 2, domain: "iot" },
                    { name: "siva", exp: 2, domain: "iot" },
                    { name: "siva", exp: 2, domain: "iot" }
                ]
            },
            {
                name: "EIE",
                faculty: [
                    { name: "siva", exp: 2, domain: "iot" },
                    { name: "siva", exp: 2, domain: "iot" },
                    { name: "siva", exp: 2, domain: "iot" },
                    { name: "siva", exp: 2, domain: "iot" }
                ]
            },
            {
                name: "EEE",
                faculty: [
                    { name: "siva", exp: 2, domain: "iot" },
                    { name: "siva", exp: 2, domain: "iot" },
                    { name: "siva", exp: 2, domain: "iot" },
                    { name: "siva", exp: 2, domain: "iot" }
                ]
            }
        ];
        setDepartment(depart);
    }, []);
    return (
        <div>
            {department.map((dept, index) => (
                <div key={index}>
                    <h2>{dept.name}</h2>
                    {
                        dept.faculty.map((faculty, index) => (
                            <div key={index}>
                                <Card item={faculty} />
                            </div>
                        ))
                    }
                </div>
            ))}
        </div>
    );
}

export default Placement;
