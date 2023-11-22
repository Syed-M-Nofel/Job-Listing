// script.js

// Sample job data
let jobData = [
    { name: 'Frontend Developer', field: 'Development' },
    { name: 'Backend Developer', field: 'Development' },
    { name: 'Data Scientist', field: 'Data Science' },
    // Add more job data here...
  ];
  
  function displayJobs(jobs) {
    const jobListContainer = document.getElementById('jobList');
    jobListContainer.innerHTML = '';
  
    jobs.forEach(job => {
      const jobDiv = document.createElement('div');
      jobDiv.classList.add('job');
      jobDiv.textContent = `${job.name} - ${job.field}`;
      jobListContainer.appendChild(jobDiv);
    });
  }
  
  function searchJobs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredJobs = jobData.filter(job =>
      job.name.toLowerCase().includes(searchTerm) || job.field.toLowerCase().includes(searchTerm)
    );
  
    displayJobs(filteredJobs);
  }
  
  function addNewJob() {
    const name = prompt('Enter job name:');
    const field = prompt('Enter job field:');
  
    if (name && field) {
      const newJob = { name, field };
      jobData.push(newJob);
      displayJobs(jobData);
      // Update JSON (you might want to use server-side operations to update a real JSON file)
      console.log("Updated JSON:", JSON.stringify(jobData));
    } else {
      alert('Please enter valid job details.');
    }
  }


   // script.js
   // ... Previous JavaScript code ...
   function showAllJobs() 
   {
    displayJobs(jobData);
   }
  
  // ... Rest of the JavaScript code ...
  
  
  // Initial display of all jobs
  displayJobs(jobData);  