import moment from "moment-timezone";

export default class DateFormat {
  static getMonthDateOrdinal(strDate) {
    return DateFormat.stringDateToMomentTimezone(strDate).format("MMMM, Do");
  }

  static getDateDifference(strStartDate, strEndDate) {
    var start = DateFormat.stringDateToMomentTimezone(strStartDate);
    var end = DateFormat.stringDateToMomentTimezone(strEndDate);
    return Math.abs(start.diff(end, "days"));
  }

  static stringDateToMomentTimezone(strDate) {
    return moment(strDate, "YYYY-MM-DD HH:mm:ssZZ").tz(
      process.env.REACT_APP_TIMEZONE
    );
  }
}
