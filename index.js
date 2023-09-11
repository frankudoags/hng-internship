import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json());

/**
 * @description - This is the `/api` endpoint, it returns a JSON object
 * @param {string} slack_name - The slack name of the user
 * @param {string} track - The track the user is on
 * @returns {object} - A JSON object with the following properties
 * @property {string} slack_name - The slack name of the user
 * @property {string} current_day - The current day of the week
 * @property {string} utc_time - The current time in UTC format
 * @property {string} track - The track the user is on
 * @property {string} github_file_url - The URL to the file on GitHub
 * @property {string} github_repo_url - The URL to the GitHub repository
 * @property {number} status_code - The status code of the response
 */

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  if (!slack_name || !track) {
    res.send("Provide slack name and track.");
    return;
  }
  // get current date and time using Date object
  const current_date = new Date();
  const time = new Date().toISOString().slice(0, -5) + "Z";
  // get current day of the week, by using the current_date object
  // and the getDay() method, then use the returned value to index
  // the week_day array to get the current day in string format
  const week_day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day_of_the_week = week_day[current_date.getDay()];

  // const query = req.query;
  res.status(200).json({
    slack_name,
    current_day: day_of_the_week,
    utc_time: time,
    track,
    github_file_url:
      "https://github.com/husainridwan/hng-internship/blob/main/stage-one/index.js",
    github_repo_url: "https://github.com/husainridwan/hng-internship",
    status_code: 200,
  });
});
