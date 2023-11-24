// script.js

// Sample job data
let jobData = [
    { name: 'Frontend Developer', 
      field: 'Development',
      position: 'Senior Frontend Developer',
      role: 'Frontend',
      location: 'France Only',
    },
    { name: 'Frontend Developer', 
      field: 'Development',
      position: 'Junior Frontend Developer',
      role: 'Frontend',
      location: 'India Only',
    },
    { name: 'Backend Developer', 
      field: 'Development',
      position: 'Senior Backend Developer',
      role: 'Backend',
      location: 'UK Only',
    },
    { name: 'Backend Developer', 
      field: 'Development',
      position: 'Junior Backend Developer',
      role: 'Backend',
      location: 'USA Only',
    },
    { name: 'Backend Developer', 
      field: 'Data Science',
      position: 'Senior Backend Developer',
      role: 'Backend',
      location: 'Pakistan',
    }

  ];
  
  function displayJobs(jobs) 
  {
    const jobListContainer = document.getElementById('jobList');
    jobListContainer.innerHTML = '';
  
    jobs.forEach(job => {
      const jobDiv = document.createElement('div');
      jobDiv.classList.add('job');
      jobDiv.textContent = `${job.name} - ${job.field}- ${job.position}- ${job.role}- ${job.location}`;
      jobListContainer.appendChild(jobDiv);
    });
  }
  
  function searchJobs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredJobs = jobData.filter(job =>
      job.name.toLowerCase().includes(searchTerm) || job.field.toLowerCase().includes(searchTerm) || job.role.toLowerCase().includes(searchTerm)
    );
  
    displayJobs(filteredJobs);
  }
  
  function addNewJob() {
    const name = prompt('Enter job name:');
    const field = prompt('Enter job field:');
    const position = prompt('Enter job position:');
    const role = prompt('Enter job role:');
    const location = prompt('Enter job location:');
  
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

   function showAllJobs() 
   {
    displayJobs(jobData);
   }
  
  // Initial display of all jobs
  displayJobs(jobData);