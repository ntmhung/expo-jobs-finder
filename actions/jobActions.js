/**
 * Created by minhhung on 7/28/18.
 */
import {Location} from "expo";
import axios from "axios";
import reverseGeoCode from "latlng-to-zip";
import qs from "qs";
import {map} from 'p-iteration';
import {FETCH_JOBS, LIKE_JOB} from "./type";

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
        data = await map(data, async (item) => {
            const result = await Location.geocodeAsync(item.location);
            item.latitude = result[0].latitude;
            item.longitude = result[0].longitude;
            return item;
        });
        dispatch({
            type: FETCH_JOBS,
            payload: data
        });
        navigateToDeckScreen();
    } catch (err) {
        console.log(err);
    }
};

export const likeJob = (job) => {
    return {
        type: LIKE_JOB,
        payload: job
    }
};