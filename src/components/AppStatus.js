import {useEffect, useState} from "react";
import {getAppMetrics} from "../services/AppService";

const AppStatus = () => {
    const [appStatus, setAppStatus] = useState({});
    useEffect(() => {
        getAppMetrics()
            .then(res => {
                setAppStatus(res.data);
            })
            .catch(err => {
                setAppStatus({});
                console.log(err);
            });
    })
    return(
        <div>
            <button className={"btn btn-" + (appStatus.status === "UP" ? "success" : "danger")} type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            </button>
        </div>
    )
}
export default AppStatus;