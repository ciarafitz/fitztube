// Utility 
// helpful date conversions
// Extraneous functions that can be used across your project
export default class Util {
    static addCommasToNumber(num) {
        if(num == undefined) {
            return
        }
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    static convertDate(date_string) {
        if(date_string == undefined) { 
            return
        }
        let temp = date_string.split('-')
        let year = temp[0]
        let month = temp[1]
        let day = temp[2].substr(0,2)
        return this.date_map[month] + "  " + day + ", " + year
    }

    static date_map = {
        "1": 'Jan',
        "2": 'Feb',
        "3": 'Mar',
        "4": 'Apr',
        "5": 'May',
        "6": 'Jun',
        "7": 'Jul',
        "8": 'Aug',
        "9": 'Sep',
        "10": 'Oct',
        "11": 'Nov',
        "12": 'Dec',
    }
}