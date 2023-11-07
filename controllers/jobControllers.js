const getJobs = (req, res) => {
  res.status(200).json("get all jobs");
};

const getJob = (req, res) => {
  res.send("get a specific job");
};

const createJob = (req, res) => {
  res.status(201).json("job posted");
};

const updateJob = (req, res) => {
  res.status(200).json("job updated");
};

const deleteJob = (req, res) => {
  res.status(200).json("job deleted");
};

module.exports = { getJobs, getJob, createJob, updateJob, deleteJob };
