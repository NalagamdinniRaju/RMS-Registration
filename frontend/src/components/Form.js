// import React, { useState } from 'react';
// import axios from 'axios';
// import "../App.css"

// const Form = () => {
//     const [personalInfo, setPersonalInfo] = useState({
//         firstName: '',
//         middleName: '',
//         lastName: '',
//         email: '',
//         phoneNumberMobile: '',
//         phoneNumberHome: '',
//         homeAddress: '',
//         dateOfBirth: '',
//         gender: '',
//         nationality: '',
//         maritalStatus: '',
//         linkedInProfile: '',
//         personalWebsite: '',
//         emergencyContactName: '',
//         emergencyContactRelationship: '',
//         emergencyContactPhoneNumber: ''
//     })

//     const [jobPreferences, setJobPreferences] = useState({
//         positionAppliedFor: '',
//         desiredSalary: '',
//         preferredJobType: '',
//         preferredWorkLocation: '',
//         availabilityToStart: '',
//         willingnessToRelocate: false,
//         willingnessToTravel: false
//     });

//     const [education, setEducation] = useState({
//         highestDegreeObtained: '',
//         degreeType: '',
//         fieldOfStudy: '',
//         institutionName: '',
//         institutionLocation: '',
//         graduationDate: '',
//         percentageGrade: '',
//         tenthDetails: {
//             institutionName: '',
//             board: '',
//             yearOfPassing: '',
//             marksPercentage: ''
//         },
//         twelfthDetails: {
//             institutionName: '',
//             board: '',
//             yearOfPassing: '',
//             marksPercentage: ''
//         },
//         undergraduateDetails: {
//             institutionName: '',
//             yearOfPassing: '',
//             marksPercentage: ''
//         },
//         postgraduateDetails: {
//             institutionName: '',
//             yearOfPassing: '',
//             marksPercentage: ''
//         }
//     });

//     const [skillsAndCertifications, setSkillsAndCertifications] = useState([]);
//     const [trainingWorkshops, setTrainingWorkshops] = useState([]);
//     const [workExperience, setWorkExperience] = useState([]);
//     const [languagesKnown, setLanguagesKnown] = useState([]);
//     const [resumeCV, setResumeCV] = useState('');
//     const [workSamples, setWorkSamples] = useState([]);
//     const [professionalAffiliations, setProfessionalAffiliations] = useState([]);
//     const [awardsHonors, setAwardsHonors] = useState([]);
//     const [publications, setPublications] = useState([]);
//     const [volunteerExperience, setVolunteerExperience] = useState([]);
//     const [hobbiesInterests, setHobbiesInterests] = useState([]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const registrationData = {
//             personalInformation: personalInfo,
//             jobPreferences,
//             education,
//             skillsAndCertifications,
//             trainingWorkshops,
//             workExperience,
//             languagesKnown,
//             resumeCV,
//             workSamples,
//             professionalAffiliations,
//             awardsHonors,
//             publications,
//             volunteerExperience,
//             hobbiesInterests
//         };

//         try {
//             const response = await axios.post('/api/registrations', registrationData);
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleInputChange = (e, section, field) => {
//         const value = e.target.value;
//         if (section === 'personalInfo') {
//             setPersonalInfo({ ...personalInfo, [field]: value });
//         } else if (section === 'jobPreferences') {
//             setJobPreferences({ ...jobPreferences, [field]: value });
//         } else if (section === 'education') {
//             setEducation({ ...education, [field]: value });
//         } else if (section === 'education.tenthDetails') {
//             setEducation({ ...education, tenthDetails: { ...education.tenthDetails, [field]: value } });
//         } else if (section === 'education.twelfthDetails') {
//             setEducation({ ...education, twelfthDetails: { ...education.twelfthDetails, [field]: value } });
//         } else if (section === 'education.undergraduateDetails') {
//             setEducation({ ...education, undergraduateDetails: { ...education.undergraduateDetails, [field]: value } });
//         } else if (section === 'education.postgraduateDetails') {
//             setEducation({ ...education, postgraduateDetails: { ...education.postgraduateDetails, [field]: value } });
//         } else {
//             console.error('Unknown section');
//         }
//     };

//     return (
//         <div className="container">
//             <header>Application Form</header>
//             <form onSubmit={handleSubmit} className="form-container">
//                 <div className="form first">
//                     <h2>Personal Information</h2>
//                     <div className="fields">
//                         <div className="input-field">
//                             <label>First Name</label>
//                             <input type="text" placeholder="First Name" value={personalInfo.firstName} onChange={(e) => handleInputChange(e, 'personalInfo', 'firstName')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Middle Name</label>
//                             <input type="text" placeholder="Middle Name" value={personalInfo.middleName} onChange={(e) => handleInputChange(e, 'personalInfo', 'middleName')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Last Name</label>
//                             <input type="text" placeholder="Last Name" value={personalInfo.lastName} onChange={(e) => handleInputChange(e, 'personalInfo', 'lastName')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Email</label>
//                             <input type="email" placeholder="Email" value={personalInfo.email} onChange={(e) => handleInputChange(e, 'personalInfo', 'email')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Mobile Phone Number</label>
//                             <input type="text" placeholder="Mobile Phone Number" value={personalInfo.phoneNumberMobile} onChange={(e) => handleInputChange(e, 'personalInfo', 'phoneNumberMobile')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Home Phone Number</label>
//                             <input type="text" placeholder="Home Phone Number" value={personalInfo.phoneNumberHome} onChange={(e) => handleInputChange(e, 'personalInfo', 'phoneNumberHome')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Home Address</label>
//                             <input type="text" placeholder="Home Address" value={personalInfo.homeAddress} onChange={(e) => handleInputChange(e, 'personalInfo', 'homeAddress')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Date of Birth</label>
//                             <input type="date" placeholder="Date of Birth" value={personalInfo.dateOfBirth} onChange={(e) => handleInputChange(e, 'personalInfo', 'dateOfBirth')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Gender</label>
//                             <select value={personalInfo.gender} onChange={(e) => handleInputChange(e, 'personalInfo', 'gender')}>
//                                 <option value="">Select Gender</option>
//                                 <option value="Male">Male</option>
//                                 <option value="Female">Female</option>
//                                 <option value="Other">Other</option>
//                             </select>
//                         </div>
//                         <div className="input-field">
//                             <label>Nationality</label>
//                             <input type="text" placeholder="Nationality" value={personalInfo.nationality} onChange={(e) => handleInputChange(e, 'personalInfo', 'nationality')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Marital Status</label>
//                             <input type="text" placeholder="Marital Status" value={personalInfo.maritalStatus} onChange={(e) => handleInputChange(e, 'personalInfo', 'maritalStatus')} />
//                         </div>
//                         <div className="input-field">
//                             <label>LinkedIn Profile</label>
//                             <input type="text" placeholder="LinkedIn Profile" value={personalInfo.linkedInProfile} onChange={(e) => handleInputChange(e, 'personalInfo', 'linkedInProfile')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Personal Website</label>
//                             <input type="text" placeholder="Personal Website" value={personalInfo.personalWebsite} onChange={(e) => handleInputChange(e, 'personalInfo', 'personalWebsite')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Emergency Contact Name</label>
//                             <input type="text" placeholder="Emergency Contact Name" value={personalInfo.emergencyContactName} onChange={(e) => handleInputChange(e, 'personalInfo', 'emergencyContactName')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Emergency Contact Relationship</label>
//                             <input type="text" placeholder="Emergency Contact Relationship" value={personalInfo.emergencyContactRelationship} onChange={(e) => handleInputChange(e, 'personalInfo', 'emergencyContactRelationship')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Emergency Contact Phone Number</label>
//                             <input type="text" placeholder="Emergency Contact Phone Number" value={personalInfo.emergencyContactPhoneNumber} onChange={(e) => handleInputChange(e, 'personalInfo', 'emergencyContactPhoneNumber')} />
//                         </div>
//                     </div>
//                     <button type="button" onClick={() => document.querySelector('form').classList.add('secActive')}>Next</button>
//                 </div>

//                 <div className="form second">
//                     <h2>Job Preferences</h2>
//                     <div className="fields">
//                         <div className="input-field">
//                             <label>Position Applied For</label>
//                             <input type="text" placeholder="Position Applied For" value={jobPreferences.positionAppliedFor} onChange={(e) => handleInputChange(e, 'jobPreferences', 'positionAppliedFor')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Desired Salary</label>
//                             <input type="text" placeholder="Desired Salary" value={jobPreferences.desiredSalary} onChange={(e) => handleInputChange(e, 'jobPreferences', 'desiredSalary')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Preferred Job Type</label>
//                             <input type="text" placeholder="Preferred Job Type" value={jobPreferences.preferredJobType} onChange={(e) => handleInputChange(e, 'jobPreferences', 'preferredJobType')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Preferred Work Location</label>
//                             <input type="text" placeholder="Preferred Work Location" value={jobPreferences.preferredWorkLocation} onChange={(e) => handleInputChange(e, 'jobPreferences', 'preferredWorkLocation')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Availability to Start</label>
//                             <input type="text" placeholder="Availability to Start" value={jobPreferences.availabilityToStart} onChange={(e) => handleInputChange(e, 'jobPreferences', 'availabilityToStart')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Willingness to Relocate</label>
//                             <select value={jobPreferences.willingnessToRelocate} onChange={(e) => handleInputChange(e, 'jobPreferences', 'willingnessToRelocate')}>
//                                 <option value={false}>No</option>
//                                 <option value={true}>Yes</option>
//                             </select>
//                         </div>
//                         <div className="input-field">
//                             <label>Willingness to Travel</label>
//                             <select value={jobPreferences.willingnessToTravel} onChange={(e) => handleInputChange(e, 'jobPreferences', 'willingnessToTravel')}>
//                                 <option value={false}>No</option>
//                                 <option value={true}>Yes</option>
//                             </select>
//                         </div>
//                     </div>
//                     <button type="button" onClick={() => document.querySelector('form').classList.remove('secActive')}>Back</button>
//                     <button type="button" onClick={() => document.querySelector('form').classList.add('secActive')}>Next</button>
//                 </div>

//                 <div className="form third">
//                     <h2>Education</h2>
//                     <div className="fields">
//                         <div className="input-field">
//                             <label>Highest Degree Obtained</label>
//                             <input type="text" placeholder="Highest Degree Obtained" value={education.highestDegreeObtained} onChange={(e) => handleInputChange(e, 'education', 'highestDegreeObtained')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Degree Type</label>
//                             <input type="text" placeholder="Degree Type" value={education.degreeType} onChange={(e) => handleInputChange(e, 'education', 'degreeType')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Field of Study</label>
//                             <input type="text" placeholder="Field of Study" value={education.fieldOfStudy} onChange={(e) => handleInputChange(e, 'education', 'fieldOfStudy')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Institution Name</label>
//                             <input type="text" placeholder="Institution Name" value={education.institutionName} onChange={(e) => handleInputChange(e, 'education', 'institutionName')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Institution Location</label>
//                             <input type="text" placeholder="Institution Location" value={education.institutionLocation} onChange={(e) => handleInputChange(e, 'education', 'institutionLocation')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Graduation Date</label>
//                             <input type="date" placeholder="Graduation Date" value={education.graduationDate} onChange={(e) => handleInputChange(e, 'education', 'graduationDate')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Percentage Grade</label>
//                             <input type="text" placeholder="Percentage Grade" value={education.percentageGrade} onChange={(e) => handleInputChange(e, 'education', 'percentageGrade')} />
//                         </div>
//                         <div className="input-field">
//                             <label>10th Details</label>
//                             <input type="text" placeholder="Institution Name" value={education.tenthDetails.institutionName} onChange={(e) => handleInputChange(e, 'education.tenthDetails', 'institutionName')} />
//                             <input type="text" placeholder="Board" value={education.tenthDetails.board} onChange={(e) => handleInputChange(e, 'education.tenthDetails', 'board')} />
//                             <input type="text" placeholder="Year of Passing" value={education.tenthDetails.yearOfPassing} onChange={(e) => handleInputChange(e, 'education.tenthDetails', 'yearOfPassing')} />
//                             <input type="text" placeholder="Marks Percentage" value={education.tenthDetails.marksPercentage} onChange={(e) => handleInputChange(e, 'education.tenthDetails', 'marksPercentage')} />
//                         </div>
//                         <div className="input-field">
//                             <label>12th Details</label>
//                             <input type="text" placeholder="Institution Name" value={education.twelfthDetails.institutionName} onChange={(e) => handleInputChange(e, 'education.twelfthDetails', 'institutionName')} />
//                             <input type="text" placeholder="Board" value={education.twelfthDetails.board} onChange={(e) => handleInputChange(e, 'education.twelfthDetails', 'board')} />
//                             <input type="text" placeholder="Year of Passing" value={education.twelfthDetails.yearOfPassing} onChange={(e) => handleInputChange(e, 'education.twelfthDetails', 'yearOfPassing')} />
//                             <input type="text" placeholder="Marks Percentage" value={education.twelfthDetails.marksPercentage} onChange={(e) => handleInputChange(e, 'education.twelfthDetails', 'marksPercentage')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Undergraduate Details</label>
//                             <input type="text" placeholder="Institution Name" value={education.undergraduateDetails.institutionName} onChange={(e) => handleInputChange(e, 'education.undergraduateDetails', 'institutionName')} />
//                             <input type="text" placeholder="Year of Passing" value={education.undergraduateDetails.yearOfPassing} onChange={(e) => handleInputChange(e, 'education.undergraduateDetails', 'yearOfPassing')} />
//                             <input type="text" placeholder="Marks Percentage" value={education.undergraduateDetails.marksPercentage} onChange={(e) => handleInputChange(e, 'education.undergraduateDetails', 'marksPercentage')} />
//                         </div>
//                         <div className="input-field">
//                             <label>Postgraduate Details</label>
//                             <input type="text" placeholder="Institution Name" value={education.postgraduateDetails.institutionName} onChange={(e) => handleInputChange(e, 'education.postgraduateDetails', 'institutionName')} />
//                             <input type="text" placeholder="Year of Passing" value={education.postgraduateDetails.yearOfPassing} onChange={(e) => handleInputChange(e, 'education.postgraduateDetails', 'yearOfPassing')} />
//                             <input type="text" placeholder="Marks Percentage" value={education.postgraduateDetails.marksPercentage} onChange={(e) => handleInputChange(e, 'education.postgraduateDetails', 'marksPercentage')} />
//                         </div>
//                     </div>
//                     <button type="button" onClick={() => document.querySelector('form').classList.remove('secActive')}>Back</button>
//                     <button type="button" onClick={() => document.querySelector('form').classList.add('secActive')}>Next</button>
//                 </div>

//                 <div className="form fourth">
//                     <h2>Additional Details</h2>
//                     <div className="fields">
//                         <div className="input-field">
//                             <label>Skills and Certifications</label>
//                             <textarea placeholder="Skills and Certifications" value={skillsAndCertifications} onChange={(e) => setSkillsAndCertifications(e.target.value.split(','))} />
//                         </div>
//                         <div className="input-field">
//                             <label>Training and Workshops</label>
//                             <textarea placeholder="Training and Workshops" value={trainingWorkshops} onChange={(e) => setTrainingWorkshops(e.target.value.split(','))} />
//                         </div>
//                         <div className="input-field">
//                             <label>Work Experience</label>
//                             <textarea placeholder="Work Experience" value={workExperience} onChange={(e) => setWorkExperience(e.target.value.split(','))} />
//                         </div>
//                         <div className="input-field">
//                             <label>Languages Known</label>
//                             <textarea placeholder="Languages Known" value={languagesKnown} onChange={(e) => setLanguagesKnown(e.target.value.split(','))} />
//                         </div>
//                         <div className="input-field">
//                             <label>Resume/CV</label>
//                             <input type="file" onChange={(e) => setResumeCV(e.target.files[0])} />
//                         </div>
//                         <div className="input-field">
//                             <label>Work Samples</label>
//                             <input type="file" multiple onChange={(e) => setWorkSamples([...e.target.files])} />
//                         </div>
//                         <div className="input-field">
//                             <label>Professional Affiliations</label>
//                             <textarea placeholder="Professional Affiliations" value={professionalAffiliations} onChange={(e) => setProfessionalAffiliations(e.target.value.split(','))} />
//                         </div>
//                         <div className="input-field">
//                             <label>Awards and Honors</label>
//                             <textarea placeholder="Awards and Honors" value={awardsHonors} onChange={(e) => setAwardsHonors(e.target.value.split(','))} />
//                         </div>
//                         <div className="input-field">
//                             <label>Publications</label>
//                             <textarea placeholder="Publications" value={publications} onChange={(e) => setPublications(e.target.value.split(','))} />
//                         </div>
//                         <div className="input-field">
//                             <label>Volunteer Experience</label>
//                             <textarea placeholder="Volunteer Experience" value={volunteerExperience} onChange={(e) => setVolunteerExperience(e.target.value.split(','))} />
//                         </div>
//                         <div className="input-field">
//                             <label>Hobbies and Interests</label>
//                             <textarea placeholder="Hobbies and Interests" value={hobbiesInterests} onChange={(e) => setHobbiesInterests(e.target.value.split(','))} />
//                         </div>
//                     </div>
//                     <button type="button" onClick={() => document.querySelector('form').classList.remove('secActive')}>Back</button>
//                     <button type="submit">Submit</button>
//                 </div>
//                 </form>
//             </div>
//     )
// }

// export default Form;
import React, { useState } from 'react';
import axios from 'axios';
import "../App.css";

const Form = () => {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phoneNumberMobile: '',
        phoneNumberHome: '',
        homeAddress: '',
        dateOfBirth: '',
        gender: '',
        nationality: '',
        maritalStatus: '',
        linkedInProfile: '',
        personalWebsite: '',
        emergencyContactName: '',
        emergencyContactRelationship: '',
        emergencyContactPhoneNumber: ''
    });

    const [jobPreferences, setJobPreferences] = useState({
        positionAppliedFor: '',
        desiredSalary: '',
        preferredJobType: '',
        preferredWorkLocation: '',
        availabilityToStart: '',
        willingnessToRelocate: false,
        willingnessToTravel: false
    });

    const [education, setEducation] = useState({
        highestDegreeObtained: '',
        degreeType: '',
        fieldOfStudy: '',
        institutionName: '',
        institutionLocation: '',
        graduationDate: '',
        percentageGrade: '',
        tenthDetails: {
            institutionName: '',
            board: '',
            yearOfPassing: '',
            marksPercentage: ''
        },
        twelfthDetails: {
            institutionName: '',
            board: '',
            yearOfPassing: '',
            marksPercentage: ''
        },
        undergraduateDetails: {
            institutionName: '',
            yearOfPassing: '',
            marksPercentage: ''
        },
        postgraduateDetails: {
            institutionName: '',
            yearOfPassing: '',
            marksPercentage: ''
        }
    });

    const [skillsAndCertifications, setSkillsAndCertifications] = useState('');
    const [trainingWorkshops, setTrainingWorkshops] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [languagesKnown, setLanguagesKnown] = useState('');
    const [resumeCV, setResumeCV] = useState('');
    const [workSamples, setWorkSamples] = useState([]);
    const [professionalAffiliations, setProfessionalAffiliations] = useState('');
    const [awardsHonors, setAwardsHonors] = useState('');
    const [publications, setPublications] = useState('');
    const [volunteerExperience, setVolunteerExperience] = useState('');
    const [hobbiesInterests, setHobbiesInterests] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [showPreview, setShowPreview] = useState(false);

    const handleInputChange = (e, section, field) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        if (section === 'personalInfo') {
            setPersonalInfo({ ...personalInfo, [field]: value });
        } else if (section === 'jobPreferences') {
            setJobPreferences({ ...jobPreferences, [field]: value });
        } else if (section === 'education') {
            if (field.includes('.')) {
                const [subSection, subField] = field.split('.');
                setEducation({
                    ...education,
                    [subSection]: {
                        ...education[subSection],
                        [subField]: value
                    }
                });
            } else {
                setEducation({ ...education, [field]: value });
            }
        }
    };

    const handleNext = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, 4));
    };

    const handleBack = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPreview(true);
    };

    const handleConfirmSubmit = async () => {
        const registrationData = {
            personalInformation: personalInfo,
            jobPreferences,
            education,
            skillsAndCertifications,
            trainingWorkshops,
            workExperience,
            languagesKnown,
            resumeCV,
            workSamples,
            professionalAffiliations,
            awardsHonors,
            publications,
            volunteerExperience,
            hobbiesInterests
        };

        try {
            const response = await axios.post('/api/registrations', registrationData);
            console.log(response.data);
            alert('Your data has been stored successfully!');
            setShowPreview(false);
        } catch (error) {
            console.error(error);
            alert('An error occurred while submitting your data. Please try again.');
        }
    };

    const handleEdit = () => {
        setShowPreview(false);
    };

    const renderPersonalInfo = () => (
        <div className="form-page">
            <h2>Personal Information</h2>
            <div className="form-group">
                <label>First Name</label>
                <input
                    type="text"
                    required
                    value={personalInfo.firstName}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'firstName')}
                />
            </div>
            <div className="form-group">
                <label>Middle Name</label>
                <input
                    type="text"
                    value={personalInfo.middleName}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'middleName')}
                />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input
                    type="text"
                    required
                    value={personalInfo.lastName}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'lastName')}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    required
                    value={personalInfo.email}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'email')}
                />
            </div>
            <div className="form-group">
                <label>Mobile Phone Number</label>
                <input
                    type="tel"
                    required
                    value={personalInfo.phoneNumberMobile}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'phoneNumberMobile')}
                />
            </div>
            <div className="form-group">
                <label>Home Phone Number</label>
                <input
                    type="tel"
                    required
                    value={personalInfo.phoneNumberHome}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'phoneNumberHome')}
                />
            </div>
            <div className="form-group">
                <label>Home Address</label>
                <input
                    type="text"
                    required
                    value={personalInfo.homeAddress}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'homeAddress')}
                />
            </div>
            <div className="form-group">
                <label>Date of Birth</label>
                <input
                    type="date"
                    required
                    value={personalInfo.dateOfBirth}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'dateOfBirth')}
                />
            </div>
            <div className="form-group">
                <label>Gender</label>
                <select
                    value={personalInfo.gender}
                    required
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'gender')}
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label>Nationality</label>
                <input
                
                    type="text"
                    required
                    value={personalInfo.nationality}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'nationality')}
                />
            </div>
            <div className="form-group">
                <label>Marital Status</label>
                <select
                    value={personalInfo.maritalStatus}
                    required
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'maritalStatus')}
                >
                    <option value="">Select Marital Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                </select>
            </div>
            <div className="form-group">
                <label>LinkedIn Profile</label>
                <input
                    type="url"
                    value={personalInfo.linkedInProfile}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'linkedInProfile')}
                />
            </div>
            <div className="form-group">
                <label>Personal Website</label>
                <input
                    type="url"
                    value={personalInfo.personalWebsite}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'personalWebsite')}
                />
            </div>
            <div className="form-group">
                <label>Emergency Contact Name</label>
                <input
                    type="text"
                    value={personalInfo.emergencyContactName}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'emergencyContactName')}
                />
            </div>
            <div className="form-group">
                <label>Emergency Contact Relationship</label>
                <input
                    type="text"
                    value={personalInfo.emergencyContactRelationship}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'emergencyContactRelationship')}
                />
            </div>
            <div className="form-group">
                <label>Emergency Contact Phone Number</label>
                <input
                    type="tel"
                    value={personalInfo.emergencyContactPhoneNumber}
                    onChange={(e) => handleInputChange(e, 'personalInfo', 'emergencyContactPhoneNumber')}
                />
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
    );

    const renderJobPreferences = () => (
        <div className="form-page">
            <h2>Job Preferences</h2>
            <div className="form-group">
                <label>Position Applied For</label>
                <input
                    type="text"
                    value={jobPreferences.positionAppliedFor}
                    onChange={(e) => handleInputChange(e, 'jobPreferences', 'positionAppliedFor')}
                />
            </div>
            <div className="form-group">
                <label>Desired Salary</label>
                <input
                    type="text"
                    value={jobPreferences.desiredSalary}
                    onChange={(e) => handleInputChange(e, 'jobPreferences', 'desiredSalary')}
                />
            </div>
            <div className="form-group">
                <label>Preferred Job Type</label>
                <select
                    value={jobPreferences.preferredJobType}
                    onChange={(e) => handleInputChange(e, 'jobPreferences', 'preferredJobType')}
                >
                    <option value="">Select Job Type</option>
                    <option value="fullTime">Full Time</option>
                    <option value="partTime">Part Time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                </select>
            </div>
            <div className="form-group">
                <label>Preferred Work Location</label>
                <input
                    type="text"
                    value={jobPreferences.preferredWorkLocation}
                    onChange={(e) => handleInputChange(e, 'jobPreferences', 'preferredWorkLocation')}
                />
            </div>
            <div className="form-group">
                <label>Availability to Start</label>
                <input
                    type="date"
                    value={jobPreferences.availabilityToStart}
                    onChange={(e) => handleInputChange(e, 'jobPreferences', 'availabilityToStart')}
                />
            </div>
            <div className="form-group">
                <label>Willingness to Relocate</label>
                <input
                    type="checkbox"
                    checked={jobPreferences.willingnessToRelocate}
                    onChange={(e) => handleInputChange(e, 'jobPreferences', 'willingnessToRelocate')}
                />
            </div>
            <div className="form-group">
                <label>Willingness to Travel</label>
                <input
                    type="checkbox"
                    checked={jobPreferences.willingnessToTravel}
                    onChange={(e) => handleInputChange(e, 'jobPreferences', 'willingnessToTravel')}
                />
            </div>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );

    const renderEducation = () => (
        <div className="form-page">
            <h2>Education</h2>
            <div className="form-group">
                <label>Highest Degree Obtained</label>
                <input
                    type="text"
                    value={education.highestDegreeObtained}
                    onChange={(e) => handleInputChange(e, 'education', 'highestDegreeObtained')}
                />
            </div>
            <div className="form-group">
                <label>Degree Type</label>
                <input
                    type="text"
                    value={education.degreeType}
                    onChange={(e) => handleInputChange(e, 'education', 'degreeType')}
                />
            </div>
            <div className="form-group">
                <label>Field of Study</label>
                <input
                    type="text"
                    value={education.fieldOfStudy}
                    onChange={(e) => handleInputChange(e, 'education', 'fieldOfStudy')}
                />
            </div>
            <div className="form-group">
                <label>Institution Name</label>
                <input
                    type="text"
                    value={education.institutionName}
                    onChange={(e) => handleInputChange(e, 'education', 'institutionName')}
                />
            </div>
            <div className="form-group">
                <label>Institution Location</label>
                <input
                    type="text"
                    value={education.institutionLocation}
                    onChange={(e) => handleInputChange(e, 'education', 'institutionLocation')}
                />
            </div>
            <div className="form-group">
                <label>Graduation Date</label>
                <input
                    type="date"
                    value={education.graduationDate}
                    onChange={(e) => handleInputChange(e, 'education', 'graduationDate')}
                />
            </div>
            <div className="form-group">
                <label>Percentage Grade</label>
                <input
                    type="text"
                    value={education.percentageGrade}
                    onChange={(e) => handleInputChange(e, 'education', 'percentageGrade')}
                />
            </div>
            <h3>10th Details</h3>
            <div className="form-group">
                <label>Institution Name</label>
                <input
                    type="text"
                    value={education.tenthDetails.institutionName}
                    onChange={(e) => handleInputChange(e, 'education.tenthDetails', 'institutionName')}
                />
            </div>
            <div className="form-group">
                <label>Board</label>
                <input
                    type="text"
                    value={education.tenthDetails.board}
                    onChange={(e) => handleInputChange(e, 'education.tenthDetails', 'board')}
                />
            </div>
            <div className="form-group">
                <label>Year of Passing</label>
                <input
                    type="text"
                    value={education.tenthDetails.yearOfPassing}
                    onChange={(e) => handleInputChange(e, 'education.tenthDetails', 'yearOfPassing')}
                />
            </div>
            <div className="form-group">
                <label>Marks Percentage</label>
                <input
                    type="text"
                    value={education.tenthDetails.marksPercentage}
                    onChange={(e) => handleInputChange(e, 'education.tenthDetails', 'marksPercentage')}
                />
            </div>
            <h3>12th Details</h3>
            <div className="form-group">
                <label>Institution Name</label>
                <input
                    type="text"
                    value={education.twelfthDetails.institutionName}
                    onChange={(e) => handleInputChange(e, 'education.twelfthDetails', 'institutionName')}
                />
            </div>
            <div className="form-group">
                <label>Board</label>
                <input
                    type="text"
                    value={education.twelfthDetails.board}
                    onChange={(e) => handleInputChange(e, 'education.twelfthDetails', 'board')}
                />
            </div>
            <div className="form-group">
                <label>Year of Passing</label>
                <input
                    type="text"
                    value={education.twelfthDetails.yearOfPassing}
                    onChange={(e) => handleInputChange(e, 'education.twelfthDetails', 'yearOfPassing')}
                />
            </div>
            <div className="form-group">
                <label>Marks Percentage</label>
                <input
                    type="text"
                    value={education.twelfthDetails.marksPercentage}
                    onChange={(e) => handleInputChange(e, 'education.twelfthDetails', 'marksPercentage')}
                />
            </div>
            <h3>Undergraduate Details</h3>
            <div className="form-group">
                <label>Institution Name</label>
                <input
                    type="text"
                    value={education.undergraduateDetails.institutionName}
                    onChange={(e) => handleInputChange(e, 'education.undergraduateDetails', 'institutionName')}
                />
            </div>
            <div className="form-group">
                <label>Year of Passing</label>
                <input
                    type="text"
                    value={education.undergraduateDetails.yearOfPassing}
                    onChange={(e) => handleInputChange(e, 'education.undergraduateDetails', 'yearOfPassing')}
                />
            </div>
            <div className="form-group">
                <label>Marks Percentage</label>
                <input
                    type="text"
                    value={education.undergraduateDetails.marksPercentage}
                    onChange={(e) => handleInputChange(e, 'education.undergraduateDetails', 'marksPercentage')}
                />
            </div>
            <h3>Postgraduate Details</h3>
            <div className="form-group">
                <label>Institution Name</label>
                <input
                    type="text"
                    value={education.postgraduateDetails.institutionName}
                    onChange={(e) => handleInputChange(e, 'education.postgraduateDetails', 'institutionName')}
                />
            </div>
            <div className="form-group">
                <label>Year of Passing</label>
                <input
                    type="text"
                    value={education.postgraduateDetails.yearOfPassing}
                    onChange={(e) => handleInputChange(e, 'education.postgraduateDetails', 'yearOfPassing')}
                />
            </div>
            <div className="form-group">
                <label>Marks Percentage</label>
                <input
                    type="text"
                    value={education.postgraduateDetails.marksPercentage}
                    onChange={(e) => handleInputChange(e, 'education.postgraduateDetails', 'marksPercentage')}
                />
            </div>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );

    const renderAdditionalDetails = () => (
        <div className="form-page">
            <h2>Additional Details</h2>
            <div className="form-group">
                <label>Skills and Certifications</label>
                <textarea
                    value={skillsAndCertifications}
                    onChange={(e) => setSkillsAndCertifications(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Training and Workshops</label>
                <textarea
                    value={trainingWorkshops}
                    onChange={(e) => setTrainingWorkshops(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Work Experience</label>
                <textarea
                    value={workExperience}
                    onChange={(e) => setWorkExperience(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Languages Known</label>
                <textarea
                    value={languagesKnown}
                    onChange={(e) => setLanguagesKnown(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Resume/CV</label>
                <input
                    type="file"
                    onChange={(e) => setResumeCV(e.target.files[0])}
                />
            </div>
            <div className="form-group">
                <label>Work Samples</label>
                <input
                    type="file"
                    multiple
                    onChange={(e) => setWorkSamples(Array.from(e.target.files))}
                />
            </div>
            <div className="form-group">
                <label>Professional Affiliations</label>
                <textarea
                    value={professionalAffiliations}
                    onChange={(e) => setProfessionalAffiliations(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Awards and Honors</label>
                <textarea
                    value={awardsHonors}
                    onChange={(e) => setAwardsHonors(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Publications</label>
                <textarea
                    value={publications}
                    onChange={(e) => setPublications(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Volunteer Experience</label>
                <textarea
                    value={volunteerExperience}
                    onChange={(e) => setVolunteerExperience(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Hobbies and Interests</label>
                <textarea
                    value={hobbiesInterests}
                    onChange={(e) => setHobbiesInterests(e.target.value)}
                />
            </div>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );

    const renderPreview = () => (
        <div className="preview">
            <h2>Preview</h2>
            <h3>Personal Information</h3>
            <p>Name: {personalInfo.firstName} {personalInfo.middleName} {personalInfo.lastName}</p>
            <p>Email: {personalInfo.email}</p>
            <p>Mobile: {personalInfo.phoneNumberMobile}</p>
            <p>Home Phone: {personalInfo.phoneNumberHome}</p>
            <p>Address: {personalInfo.homeAddress}</p>
            <p>Date of Birth: {personalInfo.dateOfBirth}</p>
            <p>Gender: {personalInfo.gender}</p>
            <p>Nationality: {personalInfo.nationality}</p>
            <p>Marital Status: {personalInfo.maritalStatus}</p>
            <p>LinkedIn: {personalInfo.linkedInProfile}</p>
            <p>Personal Website: {personalInfo.personalWebsite}</p>
            <p>Emergency Contact: {personalInfo.emergencyContactName} ({personalInfo.emergencyContactRelationship}) - {personalInfo.emergencyContactPhoneNumber}</p>

            <h3>Job Preferences</h3>
            <p>Position Applied For: {jobPreferences.positionAppliedFor}</p>
            <p>Desired Salary: {jobPreferences.desiredSalary}</p>
            <p>Preferred Job Type: {jobPreferences.preferredJobType}</p>
            <p>Preferred Work Location: {jobPreferences.preferredWorkLocation}</p>
            <p>Availability to Start: {jobPreferences.availabilityToStart}</p>
            <p>Willing to Relocate: {jobPreferences.willingnessToRelocate ? 'Yes' : 'No'}</p>
            <p>Willing to Travel: {jobPreferences.willingnessToTravel ? 'Yes' : 'No'}</p>

            <h3>Education</h3>
            <p>Highest Degree: {education.highestDegreeObtained}</p>
            <p>Degree Type: {education.degreeType}</p>
            <p>Field of Study: {education.fieldOfStudy}</p>
            <p>Institution: {education.institutionName}</p>
            <p>Location: {education.institutionLocation}</p>
            <p>Graduation Date: {education.graduationDate}</p>
            <p>Grade: {education.percentageGrade}</p>

            <h4>10th Details</h4>
            <p>Institution: {education.tenthDetails.institutionName}</p>
            <p>Board: {education.tenthDetails.board}</p>
            <p>Year of Passing: {education.tenthDetails.yearOfPassing}</p>
            <p>Marks: {education.tenthDetails.marksPercentage}</p>

            <h4>12th Details</h4>
            <p>Institution: {education.twelfthDetails.institutionName}</p>
            <p>Board: {education.twelfthDetails.board}</p>
            <p>Year of Passing: {education.twelfthDetails.yearOfPassing}</p>
            <p>Marks: {education.twelfthDetails.marksPercentage}</p>

            <h4>Undergraduate Details</h4>
            <p>Institution: {education.undergraduateDetails.institutionName}</p>
            <p>Year of Passing: {education.undergraduateDetails.yearOfPassing}</p>
            <p>Marks: {education.undergraduateDetails.marksPercentage}</p>

            <h4>Postgraduate Details</h4>
            <p>Institution: {education.postgraduateDetails.institutionName}</p>
            <p>Year of Passing: {education.postgraduateDetails.yearOfPassing}</p>
            <p>Marks: {education.postgraduateDetails.marksPercentage}</p>

            <h3>Additional Details</h3>
            <p>Skills and Certifications: {skillsAndCertifications}</p>
            <p>Training and Workshops: {trainingWorkshops}</p>
            <p>Work Experience: {workExperience}</p>
            <p>Languages Known: {languagesKnown}</p>
            <p>Resume/CV: {resumeCV ? resumeCV.name : 'Not uploaded'}</p>
            <p>Work Samples: {workSamples.length > 0 ? workSamples.map(file => file.name).join(', ') : 'Not uploaded'}</p>
            <p>Professional Affiliations: {professionalAffiliations}</p>
            <p>Awards and Honors: {awardsHonors}</p>
            <p>Publications: {publications}</p>
            <p>Volunteer Experience: {volunteerExperience}</p>
            <p>Hobbies and Interests: {hobbiesInterests}</p>

            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleConfirmSubmit}>Confirm and Submit</button>
        </div>
    );

    return (
        <div className="form-container">
            {!showPreview ? (
                <form onSubmit={handleSubmit}>
                    {currentPage === 1 && renderPersonalInfo()}
                    {currentPage === 2 && renderJobPreferences()}
                    {currentPage === 3 && renderEducation()}
                    {currentPage === 4 && renderAdditionalDetails()}
                </form>
            ) : (
                renderPreview()
            )}
        </div>
    );
};

export default Form;