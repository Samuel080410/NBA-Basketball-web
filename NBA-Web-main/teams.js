const teams = {
    bulls: {
        name: "Chicago Bulls",
        founded: "1966",
        arena: "United Center",
        city: "Chicago, IL",
        conference: "Eastern Conference",
        division: "Central Division",
        championships: 6,
        color: "#ce1141",
        logo: "images/teams/bulls/logo.png",
        historyImage: "images/teams/bulls/history/history.jpg",

        history: "The Chicago Bulls are a professional basketball team based in Chicago, Illinois, founded in 1966. The team rose to global prominence in the 1990s, largely due to the leadership of Michael Jordan. Under head coach Phil Jackson, the Bulls dominated the NBA, winning six championships from 1991 to 1998. Known for their distinctive red, black, and white identity, the Bulls became one of the most recognizable franchises in basketball history.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: ["1991", "1992", "1993", "1996", "1997", "1998"]
        },

        players: [
            {
                name: "Michael Jordan",
                number: "#23",
                position: "Guard",
                image: "images/teams/bulls/players/jordan.jpg"
            },
            {
                name: "Scottie Pippen",
                number: "#33",
                position: "Forward-Guard",
                image: "images/teams/bulls/players/pippen.jpg"
            },
            {
                name: "Dennis Rodman",
                number: "#91",
                position: "Forward",
                image: "images/teams/bulls/players/rodman.jpg"
            },
            {
                name: "Derrick Rose",
                number: "#1",
                position: "Point Guard",
                image: "images/teams/bulls/players/rose.jpg"
            }
        ],

        stats: [
            {
                name: "Michael Jordan",
                points: "29 277",
                assists: "5 012",
                rebounds: "5 836",
                steals: "2 306"
            },
            {
                name: "Scottie Pippen",
                points: "15 123",
                assists: "4 494",
                rebounds: "4 036",
                steals: "2 307"
            },
            {
                name: "Bob Love",
                points: "12 623",
                assists: "991",
                rebounds: "3 998",
                steals: "218"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "29 277",
                player: "Michael Jordan"
            },
            {
                name: "Rebounds",
                value: "5 836",
                player: "Michael Jordan"
            },
            {
                name: "Assists",
                value: "5 012",
                player: "Michael Jordan"
            },
            {
                name: "3Point Records",
                value: "1 130",
                player: "Zach LaVine"
            }
        ],

        gallery: [
            "images/teams/bulls/gallery/1993.jpg",
            "images/teams/bulls/gallery/2021.webp",
            "images/teams/bulls/gallery/2014.png",
            "images/teams/bulls/gallery/2025.jpg"
        ]
    },

    lakers: {
        name: "Los Angeles Lakers",
        founded: "1947",
        arena: "Crypto.com Arena",
        city: "Los Angeles, CA",
        conference: "Western Conference",
        division: "Pacific Division",
        championships: 17,
        color: "#552583",
        logo: "images/teams/lakers/logo.png",
        historyImage: "images/teams/lakers/history/history.jpg",

        history: "The Los Angeles Lakers are one of the most successful franchises in NBA history, known for legendary stars, championship dynasties, and a global fanbase. The team has featured many of basketball's most iconic players and has built its identity around star power, winning, and the purple-and-gold brand.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: [
                "1949", "1950", "1952", "1953", "1954", "1972",
                "1980", "1982", "1985", "1987", "1988", "2000",
                "2001", "2002", "2009", "2010", "2020"
            ]
        },

        players: [
            {
                name: "Magic Johnson",
                number: "#32",
                position: "Point Guard",
                image: "images/teams/lakers/players/magic.jpg"
            },
            {
                name: "Kobe Bryant",
                number: "#24",
                position: "Guard",
                image: "images/teams/lakers/players/kobe.jpg"
            },
            {
                name: "Kareem Abdul-Jabbar",
                number: "#33",
                position: "Center",
                image: "images/teams/lakers/players/kareem.jpg"
            },
            {
                name: "Shaquille O'Neal",
                number: "#34",
                position: "Center",
                image: "images/teams/lakers/players/shaq.jpg"
            }
        ],

        stats: [
            {
                name: "Kobe Bryant",
                points: "33 643",
                assists: "6 306",
                rebounds: "7 047",
                steals: "1 944"
            },
            {
                name: "Jerry West",
                points: "25 192",
                assists: "6 238",
                rebounds: "5 366",
                steals: "81"
            },
            {
                name: "Kareem Abdul-Jabbar",
                points: "24 176",
                assists: "3 652",
                rebounds: "10 279",
                steals: "983"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "33 643",
                player: "Kobe Bryant"
            },
            {
                name: "Rebounds",
                value: "10 279",
                player: "Kareem Abdul-Jabbar"
            },
            {
                name: "Assists",
                value: "10 141",
                player: "Magic Johnson"
            },
            {
                name: "3Point Records",
                value: "1 827",
                player: "Kobe Bryant"
            }
        ],

        gallery: [
            "images/teams/lakers/gallery/1987.jpg",
            "images/teams/lakers/gallery/2000.jpg",
            "images/teams/lakers/gallery/2020.jpg",
            "images/teams/lakers/gallery/2025.jpg"
        ]
    },

    celtics: {
        name: "Boston Celtics",
        founded: "1946",
        arena: "TD Garden",
        city: "Boston, MA",
        conference: "Eastern Conference",
        division: "Atlantic Division",
        championships: 18,
        color: "#008348",
        logo: "images/teams/celtics/logo.png",
        historyImage: "images/teams/celtics/history/history.jpg",

        history: "The Boston Celtics are one of the most successful franchises in NBA history, known for legendary stars, championship dynasties, and a global fanbase. The team has featured many of basketball's most iconic players and has built its identity around star power, winning, and the green-and-white brand.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: [
                "1957", "1959", "1960", "1961", "1962", "1963",
                "1964", "1965", "1966", "1968", "1969", "1974",
                "1976", "1981", "1984", "1986", "2008", "2024"
            ]
        },

        players: [
            {
                name: "Bill Russell",
                number: "#6",
                position: "Center",
                image: "images/teams/celtics/players/bill.jpg"
            },
            {
                name: "Larry Bird",
                number: "#33",
                position: "Forward",
                image: "images/teams/celtics/players/larry.jpg"
            },
            {
                name: "Paul Pierce",
                number: "#34",
                position: "Forward",
                image: "images/teams/celtics/players/paul.jpg"
            },
            {
                name: "John Havlicek",
                number: "#17",
                position: "Guard-Forward",
                image: "images/teams/celtics/players/john.jpg"
            }
        ],

        stats: [
            {
                name: "John Havlicek",
                points: "26 395",
                assists: "6 114",
                rebounds: "8 007",
                steals: "1 037"
            },
            {
                name: "Paul Pierce",
                points: "24 021",
                assists: "4 305",
                rebounds: "6 651",
                steals: "1 583"
            },
            {
                name: "Larry Bird",
                points: "21 791",
                assists: "5 695",
                rebounds: "8 974",
                steals: "1 556"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "26 395",
                player: "John Havlicek"
            },
            {
                name: "Rebounds",
                value: "21 620",
                player: "Bill Russell"
            },
            {
                name: "Assists",
                value: "6 945",
                player: "Bob Cousy"
            },
            {
                name: "3Point Records",
                value: "1 823",
                player: "Paul Pierce"
            }
        ],

        gallery: [
            "images/teams/celtics/gallery/1965.jpg",
            "images/teams/celtics/gallery/1986.jpg",
            "images/teams/celtics/gallery/2008.jpg",
            "images/teams/celtics/gallery/2024.jpg"
        ]
    },

    sixers: {
        name: "Philadelphia 76ers",
        founded: "1946",
        arena: "Wells Fargo Center",
        city: "Philadelphia, PA",
        conference: "Eastern Conference",
        division: "Atlantic Division",
        championships: 3,
        color: "#17408b",
        logo: "images/teams/sixers/logo.png",
        historyImage: "images/teams/sixers/history/history.jpg",

        history: "The Philadelphia 76ers are one of the most successful franchises in NBA history, known for legendary stars, championship dynasties, and a global fanbase. The team has featured many of basketball's most iconic players and has built its identity around star power, winning, and the green-and-white brand.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: [
                "1955", "1967", "1983"
                
                
            ]
        },

        players: [
            {
                name: "Wilt Chamberlain",
                number: "#13",
                position: "Center",
                image: "images/teams/sixers/players/wilt.jpg"
            },
            {
                name: "Julius Erving",
                number: "#6",
                position: "Forward",
                image: "images/teams/sixers/players/julius.jpg"
            },
            {
                name: "Allen Iverson",
                number: "#3",
                position: "Guard",
                image: "images/teams/sixers/players/allen.jpg"
            },
            {
                name: "Moses Malone",
                number: "#2",
                position: "Center",
                image: "images/teams/sixers/players/moses.jpg"
            }
        ],

        stats: [
            {
                name: "Hal Greer",
                points: "21 586",
                assists: "5 089",
                rebounds: "5089",
                steals: "Not officially recorded"
            },
            {
                name: "Allen Iverson",
                points: "19 931",
                assists: "4 885",
                rebounds: "3 394",
                steals: "1 751"
            },
            {
                name: "Wilt Chamberlain",
                points: "17 783",
                assists: "2 369",
                rebounds: "13 856",
                steals: "Not officially recorded"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "21 586",
                player: "Hal Greer"
            },
            {
                name: "Rebounds",
                value: "13 856",
                player: "Wilt Chamberlain"
            },
            {
                name: "Assists",
                value: "6 212",
                player: "Maurice Cheeks"
            },
            {
                name: "3Point Records",
                value: "885",
                player: "Allen Iverson"
            }
        ],

        gallery: [
            "images/teams/sixers/gallery/1967.jpg",
            "images/teams/sixers/gallery/1983.jpg",
            "images/teams/sixers/gallery/2000.jpg",
            "images/teams/sixers/gallery/2018.jpg"
        ]
    },

    raptors: {
        name: "Toronto Raptors",
        founded: "1995",
        arena: "Scotiabank Arena",
        city: "Toronto, ON",
        conference: "Eastern Conference",
        division: "Atlantic Division",
        championships: 1,
        color: "#be141b",
        logo: "images/teams/raptors/logo.png",
        historyImage: "images/teams/raptors/history/history.jpg",

        history: "The Toronto Raptors are a professional basketball team based in Toronto, Canada. The franchise joined the NBA in 1995 and slowly grew into one of the league's most popular teams. The Raptors won their first NBA championship in 2019, led by Kawhi Leonard, Kyle Lowry, Pascal Siakam, and a strong defensive team identity.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: ["2019"]
        },

        players: [
            {
                name: "Vince Carter",
                number: "#15",
                position: "Guard-Forward",
                image: "images/teams/raptors/players/vince.jpg"
            },
            {
                name: "Kyle Lowry",
                number: "#7",
                position: "Point Guard",
                image: "images/teams/raptors/players/kyle.jpg"
            },
            {
                name: "DeMar DeRozan",
                number: "#10",
                position: "Guard-Forward",
                image: "images/teams/raptors/players/demar.jpg"
            },
            {
                name: "Kawhi Leonard",
                number: "#2",
                position: "Forward",
                image: "images/teams/raptors/players/kawhi.jpg"
            }
        ],

        stats: [
            {
                name: "DeMar DeRozan",
                points: "13 296",
                assists: "2 078",
                rebounds: "2 739",
                steals: "664"
            },
            {
                name: "Kyle Lowry",
                points: "10 540",
                assists: "4 277",
                rebounds: "2 954",
                steals: "873"
            },
            {
                name: "Chris Bosh",
                points: "10 275",
                assists: "1 115",
                rebounds: "4 776",
                steals: "397"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "13 296",
                player: "DeMar DeRozan"
            },
            {
                name: "Rebounds",
                value: "4 776",
                player: "Chris Bosh"
            },
            {
                name: "Assists",
                value: "4 277",
                player: "Kyle Lowry"
            },
            {
                name: "3Point Records",
                value: "1 518",
                player: "Kyle Lowry"
            }
        ],

        gallery: [
            "images/teams/raptors/gallery/1995.jpg",
            "images/teams/raptors/gallery/2001.jpg",
            "images/teams/raptors/gallery/2019.jpg",
            "images/teams/raptors/gallery/2024.jpg"
        ]
    },

    knicks: {
        name: "New York Knicks",
        founded: "1946",
        arena: "Madison Square Garden",
        city: "New York, NY",
        conference: "Eastern Conference",
        division: "Atlantic Division",
        championships: 2,
        color: "#f5760e",
        logo: "images/teams/knicks/logo.png",
        historyImage: "images/teams/knicks/history/history.jpg",

        history: "The New York Knicks are one of the NBA's oldest and most famous franchises. Based in New York City, the team plays at Madison Square Garden and has a long history filled with passionate fans, memorable playoff battles, and legendary players. The Knicks won NBA championships in 1970 and 1973.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: ["1970", "1973"]
        },

        players: [
            {
                name: "Patrick Ewing",
                number: "#33",
                position: "Center",
                image: "images/teams/knicks/players/ewing.jpg"
            },
            {
                name: "Walt Frazier",
                number: "#10",
                position: "Guard",
                image: "images/teams/knicks/players/frazier.jpg"
            },
            {
                name: "Willis Reed",
                number: "#19",
                position: "Center-Forward",
                image: "images/teams/knicks/players/reed.jpg"
            },
            {
                name: "Carmelo Anthony",
                number: "#7",
                position: "Forward",
                image: "images/teams/knicks/players/carmelo.jpg"
            }
        ],

        stats: [
            {
                name: "Patrick Ewing",
                points: "23 665",
                assists: "2 215",
                rebounds: "10 759",
                steals: "1 061"
            },
            {
                name: "Walt Frazier",
                points: "14 617",
                assists: "4 791",
                rebounds: "4 791",
                steals: "1 085"
            },
            {
                name: "Willis Reed",
                points: "12 183",
                assists: "1 186",
                rebounds: "8 414",
                steals: "Not officially recorded"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "23 665",
                player: "Patrick Ewing"
            },
            {
                name: "Rebounds",
                value: "10 759",
                player: "Patrick Ewing"
            },
            {
                name: "Assists",
                value: "4 791",
                player: "Walt Frazier"
            },
            {
                name: "3Point Records",
                value: "982",
                player: "John Starks"
            }
        ],

        gallery: [
            "images/teams/knicks/gallery/1970.jpg",
            "images/teams/knicks/gallery/2000.jpg",
            "images/teams/knicks/gallery/1999.jpg",
            "images/teams/knicks/gallery/2024.jpg"
        ]
    },

    nets: {
        name: "Brooklyn Nets",
        founded: "1967",
        arena: "Barclays Center",
        city: "Brooklyn, NY",
        conference: "Eastern Conference",
        division: "Atlantic Division",
        championships: 0,
        color: "#000000",
        logo: "images/teams/nets/logo.png",
        historyImage: "images/teams/nets/history/history.jpg",

        history: "The Brooklyn Nets are a professional basketball team based in Brooklyn, New York. The franchise began in 1967 and later became known for its ABA success before joining the NBA. After moving to Brooklyn in 2012, the Nets built a modern identity around Barclays Center, black-and-white branding, and several star-led eras.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: []
        },

        players: [
            {
                name: "Jason Kidd",
                number: "#5",
                position: "Point Guard",
                image: "images/teams/nets/players/kidd.jpg"
            },
            {
                name: "Julius Erving",
                number: "#32",
                position: "Forward",
                image: "images/teams/nets/players/erving.jpg"
            },
            {
                name: "Vince Carter",
                number: "#15",
                position: "Guard-Forward",
                image: "images/teams/nets/players/carter.jpg"
            },
            {
                name: "Brook Lopez",
                number: "#11",
                position: "Center",
                image: "images/teams/nets/players/lopez.jpg"
            }
        ],

        stats: [
            {
                name: "Brook Lopez",
                points: "10 444",
                assists: "972",
                rebounds: "3 762",
                steals: "347"
            },
            {
                name: "Buck Williams",
                points: "10 440",
                assists: "1 549",
                rebounds: "7 576",
                steals: "811"
            },
            {
                name: "Vince Carter",
                points: "8 834",
                assists: "1 762",
                rebounds: "2 070",
                steals: "581"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "10 444",
                player: "Brook Lopez"
            },
            {
                name: "Rebounds",
                value: "7 576",
                player: "Buck Williams"
            },
            {
                name: "Assists",
                value: "4 620",
                player: "Jason Kidd"
            },
            {
                name: "3Point Records",
                value: "813",
                player: "Joe Harris"
            }
        ],

        gallery: [
            "images/teams/nets/gallery/1976.jpg",
            "images/teams/nets/gallery/2002.jpg",
            "images/teams/nets/gallery/2012.jpg",
            "images/teams/nets/gallery/2021.jpg"
        ]
    },

    heat: {
        name: "Miami Heat",
        founded: "1988",
        arena: "Kaseya Center",
        city: "Miami, FL",
        conference: "Eastern Conference",
        division: "Southeast Division",
        championships: 3,
        color: "#98002e",
        logo: "images/teams/heat/logo.png",
        historyImage: "images/teams/heat/history/history.jpg",

        history: "The Miami Heat are a professional basketball team based in Miami, Florida. Founded in 1988, the Heat became one of the NBA's most successful modern franchises. The team won championships in 2006, 2012, and 2013, and is known for its strong culture, star players, and intense playoff identity.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: ["2006", "2012", "2013"]
        },

        players: [
            {
                name: "Dwyane Wade",
                number: "#3",
                position: "Guard",
                image: "images/teams/heat/players/wade.jpg"
            },
            {
                name: "LeBron James",
                number: "#6",
                position: "Forward",
                image: "images/teams/heat/players/lebron.jpg"
            },
            {
                name: "Chris Bosh",
                number: "#1",
                position: "Forward-Center",
                image: "images/teams/heat/players/bosh.jpg"
            },
            {
                name: "Alonzo Mourning",
                number: "#33",
                position: "Center",
                image: "images/teams/heat/players/mourning.jpg"
            }
        ],

        stats: [
            {
                name: "Dwyane Wade",
                points: "21 556",
                assists: "5 310",
                rebounds: "4 220",
                steals: "1 492"
            },
            {
                name: "Alonzo Mourning",
                points: "9 459",
                assists: "856",
                rebounds: "4 807",
                steals: "428"
            },
            {
                name: "LeBron James",
                points: "7 919",
                assists: "1 980",
                rebounds: "2 225",
                steals: "489"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "21 556",
                player: "Dwyane Wade"
            },
            {
                name: "Rebounds",
                value: "4 807",
                player: "Alonzo Mourning"
            },
            {
                name: "Assists",
                value: "5 310",
                player: "Dwyane Wade"
            },
            {
                name: "3Point Records",
                value: "806",
                player: "Duncan Robinson"
            }
        ],

        gallery: [
            "images/teams/heat/gallery/2006.jpg",
            "images/teams/heat/gallery/2012.jpg",
            "images/teams/heat/gallery/2013.jpg",
            "images/teams/heat/gallery/2023.jpg"
        ]
    },

    warriors: {
        name: "Golden State Warriors",
        founded: "1946",
        arena: "Chase Center",
        city: "San Francisco, CA",
        conference: "Western Conference",
        division: "Pacific Division",
        championships: 7,
        color: "#1d428a",
        logo: "images/teams/warriors/logo.png",
        historyImage: "images/teams/warriors/history/history.jpg",

        history: "The Golden State Warriors are a professional basketball team based in San Francisco, California. Founded in 1946, the franchise has become one of the most successful teams in NBA history. The Warriors are especially known for their modern dynasty led by Stephen Curry, Klay Thompson, Draymond Green, and head coach Steve Kerr.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: ["1947", "1956", "1975", "2015", "2017", "2018", "2022"]
        },

        players: [
            {
                name: "Stephen Curry",
                number: "#30",
                position: "Guard",
                image: "images/teams/warriors/players/curry.jpg"
            },
            {
                name: "Klay Thompson",
                number: "#11",
                position: "Guard",
                image: "images/teams/warriors/players/klay.jpg"
            },
            {
                name: "Draymond Green",
                number: "#23",
                position: "Forward",
                image: "images/teams/warriors/players/green.jpg"
            },
            {
                name: "Wilt Chamberlain",
                number: "#13",
                position: "Center",
                image: "images/teams/warriors/players/wilt.jpg"
            }
        ],

        stats: [
            {
                name: "Stephen Curry",
                points: "23 668",
                assists: "6 119",
                rebounds: "4 509",
                steals: "1 473"
            },
            {
                name: "Wilt Chamberlain",
                points: "17 783",
                assists: "2 311",
                rebounds: "10 768",
                steals: "Not officially recorded"
            },
            {
                name: "Rick Barry",
                points: "16 447",
                assists: "4 017",
                rebounds: "4 655",
                steals: "929"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "23 668",
                player: "Stephen Curry"
            },
            {
                name: "Rebounds",
                value: "10 768",
                player: "Wilt Chamberlain"
            },
            {
                name: "Assists",
                value: "6 119",
                player: "Stephen Curry"
            },
            {
                name: "3Point Records",
                value: "3 747",
                player: "Stephen Curry"
            }
        ],

        gallery: [
            "images/teams/warriors/gallery/1975.jpg",
            "images/teams/warriors/gallery/2015.jpg",
            "images/teams/warriors/gallery/2018.jpg",
            "images/teams/warriors/gallery/2022.jpg"
        ]
    },

    mavericks: {
        name: "Dallas Mavericks",
        founded: "1980",
        arena: "American Airlines Center",
        city: "Dallas, TX",
        conference: "Western Conference",
        division: "Southwest Division",
        championships: 1,
        color: "#00538c",
        logo: "images/teams/mavs/logo.png",
        historyImage: "images/teams/mavs/history/history.jpg",

        history: "The Dallas Mavericks are a professional basketball team based in Dallas, Texas. Founded in 1980, the Mavericks have become a competitive franchise in the NBA. The team won its first NBA championship in 2011, led by Dirk Nowitzki, and has been known for its strong fanbase and exciting style of play.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: ["2011"]
        },

        players: [
            {
                name: "Dirk Nowitzki",
                number: "#41",
                position: "Forward",
                image: "images/teams/mavs/players/dirk.jpg"
            },
            {
                name: "Jason Kidd",
                number: "#2",
                position: "Point Guard",
                image: "images/teams/mavs/players/kidd.jpg"
            },
            {
                name: "Michael Finley",
                number: "#20",
                position: "Guard-Forward",
                image: "images/teams/mavs/players/finley.jpg"
            },
            {
                name: "Rolando Blackman",
                number: "#22",
                position: "Guard-Forward",
                image: "images/teams/mavs/players/blackman.jpg"
            }
        ],

        stats: [
            {
                name: "Dirk Nowitzki",
                points: "31 560",
                assists: "3 651",
                rebounds: "11 489",
                steals: "1 563"
            },
            {
                name: "Michael Finley",
                points: "9 611",
                assists: "1 942",
                rebounds: "3 048",
                steals: "583"
            },
            {
                name: "Rolando Blackman",
                points: "8 599",
                assists: "1 842",
                rebounds: "2 349",
                steals: "490"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "31 560",
                player: "Dirk Nowitzki"
            },
            {
                name: "Rebounds",
                value: "11 489",
                player: "Dirk Nowitzki"
            },
            {
                name: "Assists",
                value: "3 651",
                player: "Dirk Nowitzki"
            },
            {
                name: "3Point Records",
                value: "1 982",
                player: "Dirk Nowitzki"
            }
        ],

        gallery: [
            "images/teams/mavs/gallery/2006.jpg",
            "images/teams/mavs/gallery/2011.jpg",
            "images/teams/mavs/gallery/2014.jpg",
            "images/teams/mavs/gallery/2023.jpg"
        ]
    },

    spurs: {
        name: "San Antonio Spurs",
        founded: "1967",
        arena: "AT&T Center",
        city: "San Antonio, TX",
        conference: "Western Conference",
        division: "Southwest Division",
        championships: 5,
        color: "#929a9f",
        logo: "images/teams/spurs/logo.png",
        historyImage: "images/teams/spurs/history/history.jpg",

        history: "The San Antonio Spurs are a professional basketball team based in San Antonio, Texas. Founded in 1967, the Spurs have become one of the most successful franchises in NBA history. The team won five NBA championships under the leadership of head coach Gregg Popovich and star players like Tim Duncan, Tony Parker, and Manu Ginobili.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: ["1999", "2003", "2005", "2007", "2014"]
        },

        players: [
            {
                name: "Tim Duncan",
                number: "#21",
                position: "Forward-Center",
                image: "images/teams/spurs/players/duncan.jpg"
            },
            {
                name: "Tony Parker",
                number: "#9",
                position: "Point Guard",
                image: "images/teams/spurs/players/parker.jpg"
            },
            {
                name: "Manu Ginobili",
                number: "#20",
                position: "Guard-Forward",
                image: "images/teams/spurs/players/ginobili.jpg"
            },
            {
                name: "David Robinson",
                number: "#50",
                position: "Center",
                image: "images/teams/spurs/players/robinson.jpg"
            }
        ],

        stats: [
            {
                name: "Tim Duncan",
                points: "26 496",
                assists: "4 225",
                rebounds: "15 091",
                steals: "1 034"
            },
            {
                name: "David Robinson",
                points: "20 790",
                assists: "2 882",
                rebounds: "10 497",
                steals: "1 034"
            },
            {
                name: "Tony Parker",
                points: "19 473",
                assists: "6 829",
                rebounds: "3 701",
                steals: "1 079"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "26 496",
                player: "Tim Duncan"
            },
            {
                name: "Rebounds",
                value: "15 091",
                player: "Tim Duncan"
            },
            {
                name: "Assists",
                value: "6 829",
                player: "Tony Parker"
            },
            {
                name: "3Point Records",
                value: "1 234",
                player: "Manu Ginobili"
            }
        ],

        gallery: [
            "images/teams/spurs/gallery/1999.jpg",
            "images/teams/spurs/gallery/2026.jpeg",
            "images/teams/spurs/gallery/2007.jpg",
            "images/teams/spurs/gallery/2014.jpg"
        ]
        },

        thunder: {
        name: "Oklahoma City Thunder",
        founded: "1967",
        arena: "Paycom Center",
        city: "Oklahoma City, OK",
        conference: "Western Conference",
        division: "Northwest Division",
        championships: 1,
        color: "#007ac1",
        logo: "images/teams/thunder/logo.png",
        historyImage: "images/teams/thunder/history/history.jpg",

        history: "The Oklahoma City Thunder are a professional basketball team based in Oklahoma City, Oklahoma. The franchise began as the Seattle SuperSonics in 1967 before relocating to Oklahoma City in 2008. The Thunder have been known for their passionate fanbase and competitive teams, especially during the era of Kevin Durant, Russell Westbrook, and James Harden.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: ["2025"]
        },

        players: [
            {
                name: "Kevin Durant",
                number: "#35",
                position: "Forward",
                image: "images/teams/thunder/players/durant.jpg"
            },
            {
                name: "Russell Westbrook",
                number: "#0",
                position: "Guard",
                image: "images/teams/thunder/players/westbrook.jpg"
            },
            {
                name: "Shai Gilgeous-Alexander",
                number: "#2",
                position: "Guard",
                image: "images/teams/thunder/players/shai.jpg"
            },
            {
                name: "James Harden",
                number: "#13",
                position: "Guard-Forward",
                image: "images/teams/thunder/players/harden.jpg"
            }
        ],

        stats: [
            {
                name: "Kevin Durant",
                points: "19 035",
                assists: "2 937",
                rebounds: "5 002",
                steals: "1 042"
            },
            {
                name: "Russell Westbrook",
                points: "18 859",
                assists: "5 020",
                rebounds: "5 020",
                steals: "1 042"
            },
            {
                name: "James Harden",
                points: "12 959",
                assists: "2 937",
                rebounds: "3 002",
                steals: "1 042"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "19 035",
                player: "Kevin Durant"
            },
            {
                name: "Rebounds",
                value: "5 002",
                player: "Kevin Durant"
            },
            {
                name: "Assists",
                value: "5 020",
                player: "Russell Westbrook"
            },
            {
                name: "3Point Records",
                value: "1 234",
                player: "James Harden"
            }
        ],

        gallery: [
            "images/teams/thunder/gallery/2008.jpg",
            "images/teams/thunder/gallery/2010.jpg",
            "images/teams/thunder/gallery/2017.jpg",
            "images/teams/thunder/gallery/2025.jpg"
        ]
    },

    blazers: {
        name: "Portland Trail Blazers",
        founded: "1970",
        arena: "Moda Center",
        city: "Portland, OR",
        conference: "Western Conference",
        division: "Northwest Division",
        championships: 1,
        color: "#e03a3e",
        logo: "images/teams/blazers/logo.png",
        historyImage: "images/teams/blazers/history/history.jpg",

        history: "The Portland Trail Blazers are a professional basketball team based in Portland, Oregon. Founded in 1970, the Blazers have been a competitive franchise in the NBA. The team won its only NBA championship in 1977 and has been known for its passionate fanbase and memorable playoff runs.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: ["1977"]
        },

        players: [
            {
                name: "Clyde Drexler",
                number: "#22",
                position: "Guard-Forward",
                image: "images/teams/blazers/players/drexler.jpg"
            },
            {
                name: "Bill Walton",
                number: "#32",
                position: "Center",
                image: "images/teams/blazers/players/walton.jpg"
            },
            {
                name: "LaMarcus Aldridge",
                number: "#12",
                position: "Forward-Center",
                image: "images/teams/blazers/players/aldridge.jpg"
            },
            {
                name: "Damian Lillard",
                number: "#0",
                position: "Guard",
                image: "images/teams/blazers/players/lillard.jpg"
            }
        ],

        stats: [
            {
                name: "Clyde Drexler",
                points: "19 228",
                assists: "4 110",
                rebounds: "6 712",
                steals: "1 572"
            },
            {
                name: "Bill Walton",
                points: "10 624",
                assists: "2 110",
                rebounds: "6 712",
                steals: "1 572"
            },
            {
                name: "LaMarcus Aldridge",
                points: "19 228",
                assists: "4 110",
                rebounds: "6 712",
                steals: "1 572"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "19 228",
                player: "Clyde Drexler"
            },
            {
                name: "Rebounds",
                value: "6 712",
                player: "Clyde Drexler"
            },
            {
                name: "Assists",
                value: "4 110",
                player: "Clyde Drexler"
            },
            {
                name: "3Point Records",
                value: "1 234",
                player: "Damian Lillard"
            }
        ],

        gallery: [
            "images/teams/blazers/gallery/1977.jpg",
            "images/teams/blazers/gallery/1992.jpeg",
            "images/teams/blazers/gallery/2015.jpg",
            "images/teams/blazers/gallery/2019.jpg"
        ]
    },

    rockets: {
        name: "Huston Rockets",
        founded: "1967",
        arena: "Toyota Center",
        city: "Houston, TX",
        conference: "Western Conference",
        division: "Southwest Division",
        championships: 2,
        color: "#a71e40",
        logo: "images/teams/rockets/logo.png",
        historyImage: "images/teams/rockets/history/history.jpg",

        history: "The Houston Rockets are a professional basketball team based in Houston, Texas. Founded in 1967, the Rockets have been a competitive franchise in the NBA. The team won its only NBA championship in 1994 and 1995, led by Hakeem Olajuwon, and has been known for its strong fanbase and exciting style of play.",

        trophies: {
            title: "NBA CHAMPIONS",
            years: ["1994", "1995"]
        },

        players: [
            {
                name: "Hakeem Olajuwon",
                number: "#34",
                position: "Center",
                image: "images/teams/rockets/players/hakeem.jpg"
            },
            {
                name: "Yao Ming",
                number: "#11",
                position: "Center",
                image: "images/teams/rockets/players/ming.jpg"
            },
            {
                name: "Tracy McGrady",
                number: "#1",
                position: "Guard-Forward",
                image: "images/teams/rockets/players/tracy.jpg"
            },
            {
                name: "James Harden",
                number: "#13",
                position: "Guard-Forward",
                image: "images/teams/rockets/players/harden.jpg"
            }
        ],

        stats: [
            {
                name: "Hakeem Olajuwon",
                points: "26 511",
                assists: "3 058",
                rebounds: "13 382",
                steals: "2 162"
            },
            {
                name: "Yao Ming",
                points: "9 247",
                assists: "1 402",
                rebounds: "4 494",
                steals: "439"
            },
            {
                name: "Tracy McGrady",
                points: "7 829",
                assists: "1 402",
                rebounds: "4 494",
                steals: "439"
            }
        ],

        allTimeStats: [
            {
                name: "Scoring",
                value: "26 511",
                player: "Hakeem Olajuwon"
            },
            {
                name: "Rebounds",
                value: "13 382",
                player: "Hakeem Olajuwon"
            },
            {
                name: "Assists",
                value: "3 058",
                player: "Hakeem Olajuwon"
            },
            {
                name: "3Point Records",
                value: "1 234",
                player: "James Harden"
            }
        ],

        gallery: [
            "images/teams/rockets/gallery/1994.jpg",
            "images/teams/rockets/gallery/1995.jpg",
            "images/teams/rockets/gallery/2009.jpg",
            "images/teams/rockets/gallery/2018.jpg"
        ]
    }
};
