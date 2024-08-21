const dummyData = [
    {
        id: 1,
        college: {
            logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
            college_name: "Yaduvanshi College of Engineering and Technology - [YCET], Narnaul",
            location: "Narnaul, Haryana",
            approved_by: "AICTE Approved",
            cut_off: [{
                courses: "B.Tech Civil Engineering",
                years: [
                    { year: 2024, cuttoff: 180 },
                    { year: 2023, cuttoff: 200 }
                ]
            },
            {
                courses: "B.Tech Electrical Engineering",
                years: [
                    { year: 2024, cuttoff: 180 },
                    { year: 2023, cuttoff: 200 }
                ]
            },
            {
                courses: "B.Tech Mechanical Engineering",
                years: [
                    { year: 2024, cuttoff: 180 },
                    { year: 2023, cuttoff: 200 }
                ]
            }]
        },
        course_fees: {
            amount: "50000",
            course: "BE/Btech",
            year: "1st Year Fees"
        },
        placements: {
            average_package: "2,20,000",
            highest_package: "10000000"
        },
        user_reviews: {
            rate: 4.3,
            users: 10,
            ratings: {
                Academic: 4.8,
                Accommodation: 5,
                Faculty: 3,
                Infrastructure: 4.6,
                Placement: 4.5,
                Social_Life: 4
            }
        },
        ranks: {
            rank : 10,
            overall_rank: 200,
            ranks: [{
                current_rank: 10,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            },
            {
                current_rank: 10,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            },
            {
                current_rank: 10,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            }]
        }
    },
    {
        id: 2,
        college: {
            logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
            college_name: "Modern Institute of Technology & Research Centre, Alwar",
            location: "Alwar, Rajasthan",
            approved_by: "AICTE Approved",
            cut_off: [{
                courses: "B.Tech Computer Science Engineering",
                years: [
                    { year: 2024, cuttoff: 150 },
                    { year: 2023, cuttoff: 170 }
                ]
            },
            {
                courses: "B.Tech Electronics and Communication Engineering",
                years: [
                    { year: 2024, cuttoff: 160 },
                    { year: 2023, cuttoff: 180 }
                ]
            },
            {
                courses: "B.Tech Information Technology",
                years: [
                    { year: 2024, cuttoff: 140 },
                    { year: 2023, cuttoff: 160 }
                ]
            }]
        },
        course_fees: {
            amount: "45000",
            course: "BE/Btech",
            year: "1st Year Fees"
        },
        placements: {
            average_package: "3,00,000",
            highest_package: "8000000"
        },
        user_reviews: {
            rate: 4.1,
            users: 8,
            ratings: {
                Academic: 4.5,
                Accommodation: 4.8,
                Faculty: 3.5,
                Infrastructure: 4.3,
                Placement: 4.0,
                Social_Life: 4.2
            }
        },
        ranks: {
            rank : 10,
            overall_rank: 180,
            ranks: [{
                current_rank: 12,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            },
            {
                current_rank: 10,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            }
        ]
        }
    },
    {
        id: 3,
        college: {
            logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
            college_name: "Techno India University, Kolkata",
            location: "Kolkata, West Bengal",
            approved_by: "AICTE Approved",
            cut_off: [{
                courses: "B.Tech Computer Science Engineering",
                years: [
                    { year: 2024, cuttoff: 160 },
                    { year: 2023, cuttoff: 175 }
                ]
            },
            {
                courses: "B.Tech Civil Engineering",
                years: [
                    { year: 2024, cuttoff: 170 },
                    { year: 2023, cuttoff: 185 }
                ]
            },
            {
                courses: "B.Tech Mechanical Engineering",
                years: [
                    { year: 2024, cuttoff: 165 },
                    { year: 2023, cuttoff: 180 }
                ]
            }]
        },
        course_fees: {
            amount: "55000",
            course: "BE/Btech",
            year: "1st Year Fees"
        },
        placements: {
            average_package: "3,50,000",
            highest_package: "12000000"
        },
        user_reviews: {
            rate: 4.5,
            users: 12,
            ratings: {
                Academic: 4.7,
                Accommodation: 4.9,
                Faculty: 4.0,
                Infrastructure: 4.8,
                Placement: 4.6,
                Social_Life: 4.4
            }
        },
        ranks: {
            rank : 10,
            overall_rank: 160,
            ranks: [{
                current_rank: 15,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            }]
        }
    },
    {
        id: 4,
        college: {
            logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
            college_name: "National Institute of Technology - [NIT], Trichy",
            location: "Tiruchirappalli, Tamil Nadu",
            approved_by: "AICTE Approved",
            cut_off: [{
                courses: "B.Tech Chemical Engineering",
                years: [
                    { year: 2024, cuttoff: 110 },
                    { year: 2023, cuttoff: 130 }
                ]
            },
            {
                courses: "B.Tech Electrical Engineering",
                years: [
                    { year: 2024, cuttoff: 120 },
                    { year: 2023, cuttoff: 140 }
                ]
            },
            {
                courses: "B.Tech Mechanical Engineering",
                years: [
                    { year: 2024, cuttoff: 105 },
                    { year: 2023, cuttoff: 125 }
                ]
            }]
        },
        course_fees: {
            amount: "75000",
            course: "BE/Btech",
            year: "1st Year Fees"
        },
        placements: {
            average_package: "5,00,000",
            highest_package: "25000000"
        },
        user_reviews: {
            rate: 4.7,
            users: 18,
            ratings: {
                Academic: 4.9,
                Accommodation: 4.6,
                Faculty: 4.5,
                Infrastructure: 4.8,
                Placement: 4.7,
                Social_Life: 4.3
            }
        },
        ranks: {
            rank : 10,
            overall_rank: 50,
            ranks: [{
                current_rank: 5,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            }, {
                current_rank: 10,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            }]
        }
    },
    {
        id: 5,
        college: {
            logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
            college_name: "Vellore Institute of Technology - [VIT], Vellore",
            location: "Vellore, Tamil Nadu",
            approved_by: "AICTE Approved",
            cut_off: [{
                courses: "B.Tech Computer Science Engineering",
                years: [
                    { year: 2024, cuttoff: 90 },
                    { year: 2023, cuttoff: 110 }
                ]
            },
            {
                courses: "B.Tech Electronics and Communication Engineering",
                years: [
                    { year: 2024, cuttoff: 100 },
                    { year: 2023, cuttoff: 120 }
                ]
            },
            {
                courses: "B.Tech Mechanical Engineering",
                years: [
                    { year: 2024, cuttoff: 95 },
                    { year: 2023, cuttoff: 115 }
                ]
            }]
        },
        course_fees: {
            amount: "100000",
            course: "BE/Btech",
            year: "1st Year Fees"
        },
        placements: {
            average_package: "6,00,000",
            highest_package: "30000000"
        },
        user_reviews: {
            rate: 4.6,
            users: 22,
            ratings: {
                Academic: 4.8,
                Accommodation: 4.7,
                Faculty: 4.6,
                Infrastructure: 4.9,
                Placement: 4.8,
                Social_Life: 4.5
            }
        },
        ranks: {
            rank : 10,
            overall_rank: 70,
            ranks: [{
                current_rank: 8,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            }]
        }
    },
    {
        id: 6,
        college: {
            logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
            college_name: "Amity University, Noida",
            location: "Noida, Uttar Pradesh",
            approved_by: "AICTE Approved",
            cut_off: [{
                courses: "B.Tech Computer Science Engineering",
                years: [
                    { year: 2024, cuttoff: 140 },
                    { year: 2023, cuttoff: 160 }
                ]
            },
            {
                courses: "B.Tech Information Technology",
                years: [
                    { year: 2024, cuttoff: 130 },
                    { year: 2023, cuttoff: 150 }
                ]
            },
            {
                courses: "B.Tech Mechanical Engineering",
                years: [
                    { year: 2024, cuttoff: 120 },
                    { year: 2023, cuttoff: 140 }
                ]
            }]
        },
        course_fees: {
            amount: "70000",
            course: "BE/Btech",
            year: "1st Year Fees"
        },
        placements: {
            average_package: "4,00,000",
            highest_package: "20000000"
        },
        user_reviews: {
            rate: 4.4,
            users: 15,
            ratings: {
                Academic: 4.6,
                Accommodation: 4.5,
                Faculty: 4.2,
                Infrastructure: 4.7,
                Placement: 4.5,
                Social_Life: 4.3
            }
        },
        ranks: {
            rank : 10,
            overall_rank: 120,
            ranks: [{
                current_rank: 20,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            }]
        }
    },
    {
        id: 7,
        college: {
            logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
            college_name: "Manipal Institute of Technology - [MIT], Manipal",
            location: "Manipal, Karnataka",
            approved_by: "AICTE Approved",
            cut_off: [{
                courses: "B.Tech Computer Science Engineering",
                years: [
                    { year: 2024, cuttoff: 85 },
                    { year: 2023, cuttoff: 100 }
                ]
            },
            {
                courses: "B.Tech Electronics and Communication Engineering",
                years: [
                    { year: 2024, cuttoff: 90 },
                    { year: 2023, cuttoff: 105 }
                ]
            },
            {
                courses: "B.Tech Mechanical Engineering",
                years: [
                    { year: 2024, cuttoff: 80 },
                    { year: 2023, cuttoff: 95 }
                ]
            }]
        },
        course_fees: {
            amount: "85000",
            course: "BE/Btech",
            year: "1st Year Fees"
        },
        placements: {
            average_package: "4,50,000",
            highest_package: "18000000"
        },
        user_reviews: {
            rate: 4.5,
            users: 20,
            ratings: {
                Academic: 4.7,
                Accommodation: 4.6,
                Faculty: 4.3,
                Infrastructure: 4.8,
                Placement: 4.7,
                Social_Life: 4.4
            }
        },
        ranks: {
            rank : 10,
            overall_rank: 80,
            ranks: [{
                current_rank: 14,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            }]
        }
    },
    {
        id: 8,
        college: {
            logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
            college_name: "Birla Institute of Technology and Science - [BITS], Pilani",
            location: "Pilani, Rajasthan",
            approved_by: "AICTE Approved",
            cut_off: [{
                courses: "B.Tech Computer Science Engineering",
                years: [
                    { year: 2024, cuttoff: 70 },
                    { year: 2023, cuttoff: 85 }
                ]
            },
            {
                courses: "B.Tech Electronics and Communication Engineering",
                years: [
                    { year: 2024, cuttoff: 75 },
                    { year: 2023, cuttoff: 90 }
                ]
            },
            {
                courses: "B.Tech Mechanical Engineering",
                years: [
                    { year: 2024, cuttoff: 65 },
                    { year: 2023, cuttoff: 80 }
                ]
            }]
        },
        course_fees: {
            amount: "120000",
            course: "BE/Btech",
            year: "1st Year Fees"
        },
        placements: {
            average_package: "7,00,000",
            highest_package: "35000000"
        },
        user_reviews: {
            rate: 4.8,
            users: 30,
            ratings: {
                Academic: 4.9,
                Accommodation: 4.7,
                Faculty: 4.8,
                Infrastructure: 4.9,
                Placement: 4.8,
                Social_Life: 4.6
            }
        },
        ranks: {
            rank : 10,
            overall_rank: 40,
            ranks: [{
                current_rank: 7,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            }]
        }
    },
    {
        id: 9,
        college: {
            logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
            college_name: "Sri Ramachandra Institute of Higher Education and Research, Chennai",
            location: "Chennai, Tamil Nadu",
            approved_by: "AICTE Approved",
            cut_off: [{
                courses: "B.Tech Computer Science Engineering",
                years: [
                    { year: 2024, cuttoff: 100 },
                    { year: 2023, cuttoff: 120 }
                ]
            },
            {
                courses: "B.Tech Electronics and Communication Engineering",
                years: [
                    { year: 2024, cuttoff: 110 },
                    { year: 2023, cuttoff: 130 }
                ]
            },
            {
                courses: "B.Tech Mechanical Engineering",
                years: [
                    { year: 2024, cuttoff: 95 },
                    { year: 2023, cuttoff: 115 }
                ]
            }]
        },
        course_fees: {
            amount: "90000",
            course: "BE/Btech",
            year: "1st Year Fees"
        },
        placements: {
            average_package: "5,00,000",
            highest_package: "22000000"
        },
        user_reviews: {
            rate: 4.2,
            users: 14,
            ratings: {
                Academic: 4.5,
                Accommodation: 4.4,
                Faculty: 4.0,
                Infrastructure: 4.6,
                Placement: 4.2,
                Social_Life: 4.1
            }
        },
        ranks: {
            rank : 10,
            overall_rank: 110,
            ranks: [{
                current_rank: 18,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            }]
        }
    },
    {
        id: 10,
        college: {
            logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
            college_name: "VIT University, Vellore",
            location: "Vellore, Tamil Nadu",
            approved_by: "AICTE Approved",
            cut_off: [{
                courses: "B.Tech Computer Science Engineering",
                years: [
                    { year: 2024, cuttoff: 95 },
                    { year: 2023, cuttoff: 110 }
                ]
            },
            {
                courses: "B.Tech Electronics and Communication Engineering",
                years: [
                    { year: 2024, cuttoff: 105 },
                    { year: 2023, cuttoff: 120 }
                ]
            },
            {
                courses: "B.Tech Mechanical Engineering",
                years: [
                    { year: 2024, cuttoff: 90 },
                    { year: 2023, cuttoff: 105 }
                ]
            }]
        },
        course_fees: {
            amount: "95000",
            course: "BE/Btech",
            year: "1st Year Fees"
        },
        placements: {
            average_package: "5,50,000",
            highest_package: "25000000"
        },
        user_reviews: {
            rate: 4.4,
            users: 18,
            ratings: {
                Academic: 4.6,
                Accommodation: 4.5,
                Faculty: 4.3,
                Infrastructure: 4.6,
                Placement: 4.5,
                Social_Life: 4.4
            }
        },
        ranks: {
            rank : 10,
            overall_rank: 90,
            ranks: [{
                current_rank: 12,
                name: "NIRF",
                image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
            }]
        }
    },
        {
            id: 11,
            college: {
                logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
                college_name: "National Institute of Technology - [NIT], Tiruchirappalli",
                location: "Tiruchirappalli, Tamil Nadu",
                approved_by: "AICTE Approved",
                cut_off: [{
                    courses: "B.Tech Computer Science Engineering",
                    years: [
                        { year: 2024, cuttoff: 120 },
                        { year: 2023, cuttoff: 140 }
                    ]
                },
                {
                    courses: "B.Tech Electronics and Communication Engineering",
                    years: [
                        { year: 2024, cuttoff: 115 },
                        { year: 2023, cuttoff: 135 }
                    ]
                },
                {
                    courses: "B.Tech Mechanical Engineering",
                    years: [
                        { year: 2024, cuttoff: 110 },
                        { year: 2023, cuttoff: 130 }
                    ]
                }]
            },
            course_fees: {
                amount: "85000",
                course: "BE/Btech",
                year: "1st Year Fees"
            },
            placements: {
                average_package: "6,00,000",
                highest_package: "32000000"
            },
            user_reviews: {
                rate: 4.5,
                users: 25,
                ratings: {
                    Academic: 4.7,
                    Accommodation: 4.6,
                    Faculty: 4.4,
                    Infrastructure: 4.7,
                    Placement: 4.6,
                    Social_Life: 4.3
                }
            },
            ranks: {
            rank : 10,
                overall_rank: 55,
                ranks: [{
                    current_rank: 15,
                    name: "NIRF",
                    image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
                }]
            }
        },
        {
            id: 12,
            college: {
                logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
                college_name: "Indian Institute of Technology - [IIT], Bombay",
                location: "Mumbai, Maharashtra",
                approved_by: "AICTE Approved",
                cut_off: [{
                    courses: "B.Tech Computer Science Engineering",
                    years: [
                        { year: 2024, cuttoff: 75 },
                        { year: 2023, cuttoff: 85 }
                    ]
                },
                {
                    courses: "B.Tech Electrical Engineering",
                    years: [
                        { year: 2024, cuttoff: 80 },
                        { year: 2023, cuttoff: 90 }
                    ]
                },
                {
                    courses: "B.Tech Mechanical Engineering",
                    years: [
                        { year: 2024, cuttoff: 85 },
                        { year: 2023, cuttoff: 95 }
                    ]
                }]
            },
            course_fees: {
                amount: "120000",
                course: "BE/Btech",
                year: "1st Year Fees"
            },
            placements: {
                average_package: "10,00,000",
                highest_package: "50000000"
            },
            user_reviews: {
                rate: 4.9,
                users: 40,
                ratings: {
                    Academic: 5.0,
                    Accommodation: 4.9,
                    Faculty: 5.0,
                    Infrastructure: 4.9,
                    Placement: 4.9,
                    Social_Life: 4.8
                }
            },
            ranks: {
            rank : 10,
                overall_rank: 1000,
                ranks: [{
                    current_rank: 1,
                    name: "NIRF",
                    image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
                }]
            }
        },
        {
            id: 13,
            college: {
                logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
                college_name: "Delhi Technological University - [DTU], Delhi",
                location: "Delhi",
                approved_by: "AICTE Approved",
                cut_off: [{
                    courses: "B.Tech Computer Science Engineering",
                    years: [
                        { year: 2024, cuttoff: 110 },
                        { year: 2023, cuttoff: 125 }
                    ]
                },
                {
                    courses: "B.Tech Electronics and Communication Engineering",
                    years: [
                        { year: 2024, cuttoff: 105 },
                        { year: 2023, cuttoff: 120 }
                    ]
                },
                {
                    courses: "B.Tech Mechanical Engineering",
                    years: [
                        { year: 2024, cuttoff: 100 },
                        { year: 2023, cuttoff: 115 }
                    ]
                }]
            },
            course_fees: {
                amount: "95000",
                course: "BE/Btech",
                year: "1st Year Fees"
            },
            placements: {
                average_package: "7,00,000",
                highest_package: "28000000"
            },
            user_reviews: {
                rate: 4.7,
                users: 32,
                ratings: {
                    Academic: 4.8,
                    Accommodation: 4.7,
                    Faculty: 4.5,
                    Infrastructure: 4.8,
                    Placement: 4.7,
                    Social_Life: 4.6
                }
            },
            ranks: {
            rank : 10,
                overall_rank: 60,
                ranks: [{
                    current_rank: 12,
                    name: "NIRF",
                    image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
                }]
            }
        },
        {
            id: 14,
            college: {
                logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
                college_name: "Jawaharlal Nehru Technological University - [JNTU], Hyderabad",
                location: "Hyderabad, Telangana",
                approved_by: "AICTE Approved",
                cut_off: [{
                    courses: "B.Tech Computer Science Engineering",
                    years: [
                        { year: 2024, cuttoff: 120 },
                        { year: 2023, cuttoff: 140 }
                    ]
                },
                {
                    courses: "B.Tech Electronics and Communication Engineering",
                    years: [
                        { year: 2024, cuttoff: 115 },
                        { year: 2023, cuttoff: 135 }
                    ]
                },
                {
                    courses: "B.Tech Mechanical Engineering",
                    years: [
                        { year: 2024, cuttoff: 110 },
                        { year: 2023, cuttoff: 130 }
                    ]
                }]
            },
            course_fees: {
                amount: "80000",
                course: "BE/Btech",
                year: "1st Year Fees"
            },
            placements: {
                average_package: "5,50,000",
                highest_package: "25000000"
            },
            user_reviews: {
                rate: 4.3,
                users: 18,
                ratings: {
                    Academic: 4.5,
                    Accommodation: 4.3,
                    Faculty: 4.1,
                    Infrastructure: 4.5,
                    Placement: 4.4,
                    Social_Life: 4.2
                }
            },
            ranks: {
            rank : 10,
                overall_rank: 85,
                ranks: [{
                    current_rank: 22,
                    name: "NIRF",
                    image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
                }]
            }
        },
        {
            id: 15,
            college: {
                logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
                college_name: "Pune Institute of Computer Technology - [PICT], Pune",
                location: "Pune, Maharashtra",
                approved_by: "AICTE Approved",
                cut_off: [{
                    courses: "B.Tech Computer Science Engineering",
                    years: [
                        { year: 2024, cuttoff: 105 },
                        { year: 2023, cuttoff: 125 }
                    ]
                },
                {
                    courses: "B.Tech Electronics and Communication Engineering",
                    years: [
                        { year: 2024, cuttoff: 100 },
                        { year: 2023, cuttoff: 120 }
                    ]
                },
                {
                    courses: "B.Tech Mechanical Engineering",
                    years: [
                        { year: 2024, cuttoff: 95 },
                        { year: 2023, cuttoff: 115 }
                    ]
                }]
            },
            course_fees: {
                amount: "75000",
                course: "BE/Btech",
                year: "1st Year Fees"
            },
            placements: {
                average_package: "4,00,000",
                highest_package: "20000000"
            },
            user_reviews: {
                rate: 4.2,
                users: 15,
                ratings: {
                    Academic: 4.3,
                    Accommodation: 4.1,
                    Faculty: 4.0,
                    Infrastructure: 4.2,
                    Placement: 4.1,
                    Social_Life: 4.0
                }
            },
            ranks: {
            rank : 10,
                overall_rank: 95,
                ranks: [{
                    current_rank: 28,
                    name: "NIRF",
                    image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
                }]
            }
        },
        {
            id: 16,
            college: {
                logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
                college_name: "Institute of Chemical Technology - [ICT], Mumbai",
                location: "Mumbai, Maharashtra",
                approved_by: "AICTE Approved",
                cut_off: [{
                    courses: "B.Tech Chemical Engineering",
                    years: [
                        { year: 2024, cuttoff: 120 },
                        { year: 2023, cuttoff: 130 }
                    ]
                },
                {
                    courses: "B.Tech Polymer Engineering",
                    years: [
                        { year: 2024, cuttoff: 115 },
                        { year: 2023, cuttoff: 125 }
                    ]
                }]
            },
            course_fees: {
                amount: "85000",
                course: "BE/Btech",
                year: "1st Year Fees"
            },
            placements: {
                average_package: "5,00,000",
                highest_package: "23000000"
            },
            user_reviews: {
                rate: 4.6,
                users: 22,
                ratings: {
                    Academic: 4.7,
                    Accommodation: 4.6,
                    Faculty: 4.4,
                    Infrastructure: 4.7,
                    Placement: 4.6,
                    Social_Life: 4.5
                }
            },
            ranks: {
            rank : 10,
                overall_rank: 75,
                ranks: [{
                    current_rank: 18,
                    name: "NIRF",
                    image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
                }]
            }
        },
        {
            id: 17,
            college: {
                logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
                college_name: "Manipal Institute of Technology - [MIT], Manipal",
                location: "Manipal, Karnataka",
                approved_by: "AICTE Approved",
                cut_off: [{
                    courses: "B.Tech Computer Science Engineering",
                    years: [
                        { year: 2024, cuttoff: 110 },
                        { year: 2023, cuttoff: 125 }
                    ]
                },
                {
                    courses: "B.Tech Electronics and Communication Engineering",
                    years: [
                        { year: 2024, cuttoff: 105 },
                        { year: 2023, cuttoff: 120 }
                    ]
                },
                {
                    courses: "B.Tech Mechanical Engineering",
                    years: [
                        { year: 2024, cuttoff: 100 },
                        { year: 2023, cuttoff: 115 }
                    ]
                }]
            },
            course_fees: {
                amount: "90000",
                course: "BE/Btech",
                year: "1st Year Fees"
            },
            placements: {
                average_package: "6,00,000",
                highest_package: "25000000"
            },
            user_reviews: {
                rate: 4.4,
                users: 20,
                ratings: {
                    Academic: 4.5,
                    Accommodation: 4.3,
                    Faculty: 4.2,
                    Infrastructure: 4.5,
                    Placement: 4.4,
                    Social_Life: 4.3
                }
            },
            ranks: {
            rank : 10,
                overall_rank: 80,
                ranks: [{
                    current_rank: 20,
                    name: "NIRF",
                    image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
                }]
            }
        },
        {
            id: 18,
            college: {
                logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
                college_name: "Thapar Institute of Engineering and Technology - [TIET], Patiala",
                location: "Patiala, Punjab",
                approved_by: "AICTE Approved",
                cut_off: [{
                    courses: "B.Tech Computer Science Engineering",
                    years: [
                        { year: 2024, cuttoff: 115 },
                        { year: 2023, cuttoff: 130 }
                    ]
                },
                {
                    courses: "B.Tech Electronics and Communication Engineering",
                    years: [
                        { year: 2024, cuttoff: 110 },
                        { year: 2023, cuttoff: 125 }
                    ]
                },
                {
                    courses: "B.Tech Mechanical Engineering",
                    years: [
                        { year: 2024, cuttoff: 105 },
                        { year: 2023, cuttoff: 120 }
                    ]
                }]
            },
            course_fees: {
                amount: "85000",
                course: "BE/Btech",
                year: "1st Year Fees"
            },
            placements: {
                average_package: "5,50,000",
                highest_package: "26000000"
            },
            user_reviews: {
                rate: 4.3,
                users: 15,
                ratings: {
                    Academic: 4.5,
                    Accommodation: 4.2,
                    Faculty: 4.1,
                    Infrastructure: 4.4,
                    Placement: 4.3,
                    Social_Life: 4.1
                }
            },
            ranks: {
            rank : 10,
                overall_rank: 90,
                ranks: [{
                    current_rank: 25,
                    name: "NIRF",
                    image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
                }]
            }
        },
        {
            id: 19,
            college: {
                logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
                college_name: "SRM Institute of Science and Technology - [SRMIST], Chennai",
                location: "Chennai, Tamil Nadu",
                approved_by: "AICTE Approved",
                cut_off: [{
                    courses: "B.Tech Computer Science Engineering",
                    years: [
                        { year: 2024, cuttoff: 100 },
                        { year: 2023, cuttoff: 115 }
                    ]
                },
                {
                    courses: "B.Tech Electronics and Communication Engineering",
                    years: [
                        { year: 2024, cuttoff: 95 },
                        { year: 2023, cuttoff: 110 }
                    ]
                },
                {
                    courses: "B.Tech Mechanical Engineering",
                    years: [
                        { year: 2024, cuttoff: 90 },
                        { year: 2023, cuttoff: 105 }
                    ]
                }]
            },
            course_fees: {
                amount: "95000",
                course: "BE/Btech",
                year: "1st Year Fees"
            },
            placements: {
                average_package: "5,50,000",
                highest_package: "24000000"
            },
            user_reviews: {
                rate: 4.2,
                users: 20,
                ratings: {
                    Academic: 4.4,
                    Accommodation: 4.1,
                    Faculty: 4.0,
                    Infrastructure: 4.2,
                    Placement: 4.2,
                    Social_Life: 4.1
                }
            },
            ranks: {
            rank : 10,
                overall_rank: 70,
                ranks: [{
                    current_rank: 30,
                    name: "NIRF",
                    image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
                }]
            }
        },
        {
            id: 20,
            college: {
                logo: "https://images.collegedunia.com/public/college_data/images/logos/1429343846jp.jpg?h=43&w=43&mode=stretch",
                college_name: "LNM Institute of Information Technology - [LNMIIT], Jaipur",
                location: "Jaipur, Rajasthan",
                approved_by: "AICTE Approved",
                cut_off: [{
                    courses: "B.Tech Computer Science Engineering",
                    years: [
                        { year: 2024, cuttoff: 105 },
                        { year: 2023, cuttoff: 120 }
                    ]
                },
                {
                    courses: "B.Tech Electronics and Communication Engineering",
                    years: [
                        { year: 2024, cuttoff: 100 },
                        { year: 2023, cuttoff: 115 }
                    ]
                },
                {
                    courses: "B.Tech Mechanical Engineering",
                    years: [
                        { year: 2024, cuttoff: 95 },
                        { year: 2023, cuttoff: 110 }
                    ]
                }]
            },
            course_fees: {
                amount: "90000",
                course: "BE/Btech",
                year: "1st Year Fees"
            },
            placements: {
                average_package: "5,00,000",
                highest_package: "22000000"
            },
            user_reviews: {
                rate: 4.4,
                users: 18,
                ratings: {
                    Academic: 4.5,
                    Accommodation: 4.3,
                    Faculty: 4.2,
                    Infrastructure: 4.4,
                    Placement: 4.3,
                    Social_Life: 4.2
                }
            },
            ranks: {
            rank : 10,
                overall_rank: 85,
                ranks: [{
                    current_rank: 22,
                    name: "NIRF",
                    image: "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=40&mode=stretch"
                }]
            }
        }
    ]    
export default dummyData;