/**
 * Created by minhhung on 7/30/18.
 */


export const parseTime = (time_string) => {
    let date = new Date(time_string);
    return date.toLocaleDateString();
};