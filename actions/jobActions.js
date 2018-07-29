/**
 * Created by minhhung on 7/28/18.
 */
import axios from "axios";
import reverseGeoCode from "latlng-to-zip";
import qs from "qs";
import {FETCH_JOBS} from "./type";

const JOB_ROOT_URL = 'https://jobs.github.com/positions.json?';
const JOB_QUERY_PARAMS = {
    full_time: true,
    search: 'javascript' //hardcode job title here, should add text input to customize job search for
};

const buildJobsUrl = (zip) => {
    const query = qs.stringify({...JOB_QUERY_PARAMS, location: zip});
    return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, navigateToDeckScreen) => async dispatch => {
    try {
        let zip = await reverseGeoCode(region);
        const url = buildJobsUrl(zip);
        let {data} = await axios.get(url);
        dispatch({
            type: FETCH_JOBS,
            payload: data
        });
        navigateToDeckScreen();
    } catch (err) {
        console.log(err);
    }
};
