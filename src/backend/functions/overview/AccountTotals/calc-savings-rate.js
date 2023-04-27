// if the amount between the stored total and the current total 
// is different, calculate the rate change
import supabase from "../../../../../lib/supabase";

const rateChangeSavings = async (currentData) => {
    let rate = 0.0;

    // get total from supabase
    const { data, error } = await supabase
        .from('profile')
        .select('savings_total')

        let arrayData = data[0];
        // this holds the stored amount 
        let storedData = Object.values(arrayData)[0];


        if (storedData != currentData) {
            const difference = currentData - storedData;
            rate = (difference/storedData) * 100.0;
        }
        return rate;
}

export default rateChangeSavings;