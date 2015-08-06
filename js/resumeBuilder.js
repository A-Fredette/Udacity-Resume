var bio = {
	"name": "Andrew Fredette",
	"role": "Web Developer",
	"contacts": {
			"mobile": "971-217-0665",
			"email": "andrew.fredett@gmail.com", 
			"github": "https://github.com/A-Fredette",
			"twitter": "www.twitter.com/teleportmassiv",
			"location": "Portland, OR"
		},
	"welcomeMessage": "Creative technician currently working in healthcare Simulation.  Seeking to transition into a full-time Web Design role.  Currently working as a Junior Web Developer while completing Udalocation's Front End Web Developer Nanodegree.",
	"skills": [
		"HTML","CSS","Bootstrap","Javascript","jQuery","Git","GitHub","WordPress", "Adobe Suite"
		],
	"bioPic": "images/me.jpg",
	display: function() {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
		$("#topContacts").prepend(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
		$("#topContacts").prepend(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
		$("#topContacts").prepend(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
		$("#topContacts").prepend(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
		$("#topContacts").prepend(formattedLocation);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMessage);
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
}

var work = {
	"jobs": [
		{
			"employer": "InsiCreative",
			"title":"Junior Web Developer",
			"location": "Portland, OR // Remote",
			"dates": "May 2015 - Present",
			"description": "<li>Develop custom Wordpress-powered sites to client specifications.</li><li>Logo and Graphic Design.</li>"
		},
		{
			"employer": "45 Farms, LLC",
			"title":"Director of Business Development",
			"location": "Portland, OR",
			"dates": "April 2014 - Present",
			"description": "<li>Co-Founder of a Cannabis technology and medical growing startup.</li><li>Product, market and industry reaserch.</li><li>Manage all dispensary sales.</li>"
		},
	 	{	
			"employer": "Oregon Health and Science University",
			"title": "Simulation Technology Specialist",
			"location": "Portland, OR",
			"dates": "June 2011 - Present",
			"description": "<li>Manage 8,000 sq ft and 40+ clinical workstations.</li><li>Develop technical simulation solutions to fit clients' teaching requirements.</li><li>Train faculty, staff and students on simulation software.</li><li>Published abstract in Simulation and Healthcare June 2015.</li><li>Presented at ASPE 2015.</li>"
		}
	],
	display: function() {
		for (var each in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedJobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[each].employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[each].title);
			$(".work-entry:last").append(formattedJobEmployer + formattedJobTitle);
			var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[each].dates);
			$(".work-entry:last").append(formattedJobDates);
			var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[each].location);
			$(".work-entry:last").append(formattedJobLocation);
			var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[each].description);
			$(".work-entry:last").append(formattedJobDescription);
		}
	}
}

var education = {
	"schools": [ 
		{
			"name": "University of Portland",
			"location": "Portland, OR",
			"degree": "Bachelor of Arts",
			"majors": ["Pre Med", "Sociology"],
			"dates": "2010",
			"url": "www.up.edu"
		},
		{
			"name": "Portland State University",
			"location": "Portland, OR",
			"degree": "Post Baccalaureate",
			"majors": ["Computer Science"],
			"dates": "2013",
			"url": "www.psu.edu"
		}
	],
	"OnlineCourses": [
		{
			"title": "Front End Web Development Nanodegree",
			"school": "Udacity",
			"dates": "2015",
			"url": "www.udacity.com"
		},
		{
			"title": "Computer Language Training",
			"school": "CodeAcademy",
			"dates": "2015",
			"url": "www.CodeAcademy.com"
		}
	],
	display: function() {
		for (var each in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[each].name);
			$(".education-entry:last").append(formattedSchoolName);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[each].dates);
			$(".education-entry:last").append(formattedSchoolDates);
			for (var x = 0; x < education.schools[each].majors.length; x++) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[each].majors[x]);
				$(".education-entry:last").append(formattedSchoolMajor);
				}
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[each].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[each].degree);
			$(".education-entry:last").append(formattedSchoolDegree);
			//var formattedSchoolURL = HTMLprojectImage.replace("%data%", education.schools[each].name);
			//$(".project-entry:last").append(formattedProjectImage);
		}		
		$(".education-entry:last").append(HTMLonlineClasses);
		for (var z in education.OnlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[z].title);
			$(".education-entry:last").append(formattedOnlineTitle);
			var formattedOnlineName = HTMLonlineSchool.replace("%data%", education.OnlineCourses[z].school);
			$(".education-entry:last").append(formattedOnlineName);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[z].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.OnlineCourses[z].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}	
}	

var projects = {
	"projects": [
		{
			"title": "45 Farms",
			"dates": "Feb 15 - April -15",
			"description": "<li> Squarespace powered landing page for our Cannabis startup.</li>",
			"image": "images/45farms.jpg"
		},
	 	{
			"title": "Online Portfolio",
			"dates": "May - June 2015",
			"description": "<li>First project for Udacity as part of the Nanodegree requirements.</li>",
			"image": "images/port.jpg"
		},
		{
			"title": "OHSU Simulation",
			"dates": "April 2014 - Present",
			"description": "<li>Depertment website for OHSU Simulation.</li>",
			"image": "images/simulation.jpg"
		}
	],
	display: function() {
		for (var each in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[each].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[each].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[each].description);
			$(".project-entry:last").append(formattedProjectDescription);
			//var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[each].image);
			//$(".project-entry:last").append(formattedProjectImage);
		}
	}
}

//Tracking Click Locations
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

//Adds the map
$("#mapDiv").append(googleMap);


//Calling functions to display information from the 4 objects.
bio.display();
work.display();
projects.display();
education.display();


//International Name Formatting Button
//$("#main").append(internationalizeButton);

//var inName = function(name) {
	//name = name.split(" ");
	//name[1] = name[1].toUpperCase();
	//name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	//return name[0] + " " + name[1];
//}

