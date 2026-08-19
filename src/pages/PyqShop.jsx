import React, { useState } from 'react';
import PyqCard from '../components/common/PyqCard';
import Dropdown from "../components/common/Dropdown";

export default function PyqShop() {
    const branches = [
        { value: 'computer-science', label: 'Computer Science' },
        { value: 'electrical', label: 'Electrical Engineering' },
        { value: 'mechanical', label: 'Mechanical Engineering' },
        { value: 'civil', label: 'Civil Engineering' }
    ];

    const semesters = [
        { value: '1st', label: '1st Semester' },
        { value: '2nd', label: '2nd Semester' },
        { value: '3rd', label: '3rd Semester' },
        { value: '4th', label: '4th Semester' },
        { value: '5th', label: '5th Semester' },
        { value: '6th', label: '6th Semester' }
    ];

    const years = [
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' },
        { value: '2021', label: '2021' },
        { value: '2020', label: '2020' }
    ];

    // State Variables
    const [selectedBranch, setSelectedBranch] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedSemester, setSelectedSemester] = useState("");

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12 lg:px-20">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mb-10">
                <Dropdown
                    id="branch"
                    label="Select Branch"
                    defaultOptionLabel="All Branches"
                    options={branches}
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                />
                <Dropdown
                    id="semester"
                    label="Select Semester"
                    defaultOptionLabel="All Semesters"
                    options={semesters}
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                />
                <Dropdown
                    id="year"
                    label="Select Year"
                    defaultOptionLabel="All Years"
                    options={years}
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                />
            </div>

            {/* Cards Section */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    
                    <PyqCard
                        branch="Electrical Engineering"
                        year="2022"
                        subject="Digital Electronics"
                        downloadLink="/path-to-your-pdf.pdf"
                    />
                    <PyqCard
                        branch="Electrical Engineering"
                        year="2022"
                        subject="Digital Electronics"
                        downloadLink="/path-to-your-pdf.pdf"
                    /><PyqCard
                        branch="Electrical Engineering"
                        year="2022"
                        subject="Digital Electronics"
                        downloadLink="/path-to-your-pdf.pdf"
                    /><PyqCard
                        branch="Electrical Engineering"
                        year="2022"
                        subject="Digital Electronics"
                        downloadLink="/path-to-your-pdf.pdf"
                    /><PyqCard
                        branch="Electrical Engineering"
                        year="2022"
                        subject="Digital Electronics"
                        downloadLink="/path-to-your-pdf.pdf"
                    /><PyqCard
                        branch="Electrical Engineering"
                        year="2022"
                        subject="Digital Electronics"
                        downloadLink="/path-to-your-pdf.pdf"
                    />

                </div>
            </div>
        </div>
    );
}