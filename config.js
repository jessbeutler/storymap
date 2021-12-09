var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiamVzc2JldXRsZXIxNyIsImEiOiJjazJtYTZwNmswZWZzM2puNWk5bHNqdWY0In0.HxCujHRVdrhx98P_xNXVxQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    footer: 'openstreetmap.us',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
			image: 'https://github.com/jessbeutler/openimages/blob/main/images/OpenStreetMap.png?raw=true',
            location: {
                center: [-81.46713, 42.37985],
                zoom: 3.70,
                pitch: 45.00,
                bearing:40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slug-style-id2',
            alignment: 'left',
            hidden: false,
			image: 'https://github.com/jessbeutler/openimages/blob/main/images/OpenStreetMap2.png?raw=true',
            location: {
                center: [-130.76601, 25.73440],
                zoom: 1.43,
                pitch: 0.00,
                bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'new_yt',
            alignment: 'right',
            hidden: false,
			image: 'https://miro.medium.com/max/2000/1*5aBKFk83oexxfK9FVB8qYw.png',			
            location: {
                center: [-130.76601, 25.73440],
                zoom: 1.43,
                pitch: 0.00,
                bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'amazon_deliveries',
            alignment: 'left',
            hidden: false,
			image: 'https://pbs.twimg.com/media/E3iKf5CVEAAjxLq?format=jpg&name=large',
            location: {
                center: [-130.76601, 25.73440],
                zoom: 1.43,
                pitch: 0.00,
                bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'pokemongo',
            alignment: 'right',
            hidden: false,
			image: 'https://i.pcmag.com/imagery/reviews/04cTkxO6m05JpkKJL5oEozA-8.1569477805.fit_scale.size_760x427.jpg',
			location: {
                center: [-130.76601, 25.73440],
                zoom: 1.43,
                pitch: 0.00,
                bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },		
        {
            id: 'users',
            alignment: 'left',
            hidden: false,
			image: 'https://github.com/jessbeutler/openimages/blob/main/images/users.png?raw=true',
            location: {
                center: [-130.76601, 25.73440],
                zoom: 1.43,
                pitch: 0.00,
                bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'editingosm',
            alignment: 'right',
            hidden: false,
			image: 'https://toolbox.hotosm.org/images/digitization-and-editing/mappingIDeditor.gif',
            location: {
                center: [100.84582, 19.64664],
                zoom: 13.03,
                pitch: 51.50,
                bearing:-1.57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'msf',
            alignment: 'left',
            hidden: false,
            image: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/56476780_2633100773384991_3035742155361484800_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=vrets3_PJb0AX-jpBgL&_nc_ht=scontent-ort2-1.xx&oh=04fc5b1f1913208f871d9e8b57fbd875&oe=618C7859',
            location: {
                center: [35.77456, -19.71370],
                zoom: 8.08,
                pitch: 19.50,
                bearing: -134.95
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },		
        {
            id: 'mwanza',
            alignment: 'right',
            hidden: false,
            image: 'https://www.tz.undp.org/content/dam/tanzania/img/project-photoss/undp-tz-AccL-MbeyaAug2021.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
            location: {
                center: [32.92403, -2.51214],
                zoom: 12.75,
                pitch: 42.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'geoladies-ph',
            alignment: 'left',
            hidden: false,
            image: 'https://pbs.twimg.com/media/E8Pn4X-VUAAH8xc?format=jpg&name=large',
            location: {
                center: [116.18698, 11.19135],
                zoom: 4.98,
                pitch: 7.00,
                bearing: 13.75
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },								
        {
            id: 'opensidewalk',
            alignment: 'right',
            hidden: false,
            image: 'https://raw.githubusercontent.com/jessbeutler/openimages/main/images/sidewalkmapping2.gif',
            location: {
                center: [-82.97198, 39.94895],
                zoom: 12.76,
                pitch: 40.00,
                bearing: 20.77
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'bmore',
            alignment: 'left',
            hidden: false,
            image: 'https://github.com/jessbeutler/openimages/blob/main/images/maptimebmore.png?raw=true',
            location: {
                center: [-76.67066, 39.30657],
                zoom: 11.94,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'bmore2',
            alignment: 'left',
            hidden: false,
            image: 'https://www.openstreetmap.us/img/blog/2019-10-maptime-bmore-image3.png',
            location: {
                center: [-76.67066, 39.30657],
                zoom: 11.94,
                pitch: 56.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'bikenyc',
            alignment: 'right',
            hidden: false,
            image: 'https://pbs.twimg.com/media/EwX_JCNWEAosJJf?format=jpg&name=large',
            location: {
                center: [-73.92232, 40.64996],
                zoom: 11.64,
                pitch: 60.00,
                bearing: 56.03
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },		
        {
            id: 'splitoak',
            alignment: 'left',
            hidden: false,
            image: 'https://www.openstreetmap.us/img/blog/milkweed.jpg',
            location: {
                center: [-81.23760, 28.34758],
                zoom: 13.36,
                pitch: 57.00,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'spot-the-box',
            alignment: 'right',
            hidden: false,
            image: 'https://www.openstreetmap.us/img/blog/2020-08-stb1.png',
            location: {
                center: [-76.92257, 41.13133],
                zoom: 3.74,
                pitch: 1.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },		
        {
            id: 'lubbockcompact',
            alignment: 'left',
            hidden: false,
            image: 'https://raw.githubusercontent.com/jessbeutler/openimages/main/images/lubbock.PNG',
            location: {
                center: [-101.89970, 33.58179],
                zoom: 12.30,
                pitch: 41.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },		
        {
            id: 'resiliency-maps',
            alignment: 'right',
			hidden: false,
            image: 'https://i1.wp.com/resiliencymaps.org/wp-content/uploads/2019/12/sidebyside.jpg?resize=1024%2C484&ssl=1',
            location: {
                center: [-122.35502, 37.78284],
                zoom: 11.88,
                pitch: 41.00,
                bearing:-27.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'maptimemilehigh',
            alignment: 'left',
            hidden: false,
            image: 'https://secure.meetupstatic.com/photos/event/c/f/d/4/600_484373204.jpeg',
            location: {
                center: [-105.27773, 39.73948],
                zoom: 10.46,
                pitch: 60.00,
                bearing:-44.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },		
        {
            id: 'ghc-osd',
            alignment: 'right',
            hidden: false,
            image: 'https://pbs.twimg.com/media/FApUHWFXsAEiyBQ?format=jpg&name=large',
            location: {
                center: [-90.22106, 29.37657],
                zoom: 12.27,
                pitch: 60.00,
                bearing:22.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'community',
            alignment: 'center',
            hidden: false,
			image: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/71346927_10158136507734369_7874006124062572544_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=Af-GADR-6I0AX_Uu7gn&_nc_oc=AQkyU-cRzWzsijL3QF7FPVyyjsQkHLUiEf0UEgXOPcL_Q5rglxbuFKbehkIpBmB4TibQW2rycxwwkX8Qtq6NdCpx&_nc_ht=scontent-ort2-1.xx&oh=8b655d6e29c71c45864bfe6c7cd480b6&oe=618EC6A9',
            location: {
                center: [-130.76601, 25.73440],
                zoom: 1.43,
                pitch: 0.00,
                bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },		
        {
            id: 'osmus',
            alignment: 'right',
            hidden: false,
            image: 'https://github.com/jessbeutler/openimages/blob/main/images/osmus.PNG?raw=true',
            location: {
                center: [-76.92257, 41.13133],
                zoom: 3.74,
                pitch: 1.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'mappyhours',
            alignment: 'right',
            hidden: false,
            image: 'https://pbs.twimg.com/media/EwAToTtU8AEx-se?format=jpg&name=large',
            location: {
                center: [-76.92257, 41.13133],
                zoom: 3.74,
                pitch: 1.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },			
        {
            id: 'conferences',
            alignment: 'right',
            hidden: false,
            image: 'https://pbs.twimg.com/media/EgnPYH_XcAAuET5?format=jpg&name=large',
            location: {
                center: [-76.92257, 41.13133],
                zoom: 3.74,
                pitch: 1.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },			
        {
            id: 'trails',
            alignment: 'left',
			hidden: false,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Chesler_Park%2C_The_Needles%2C_Canyonlands_%2829561598692%29.jpg/640px-Chesler_Park%2C_The_Needles%2C_Canyonlands_%2829561598692%29.jpg',
            location: {
                center: [-110.06833, 38.10221],
                zoom: 11.02,
                pitch: 60.00,
                bearing:11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'teachosm',
            alignment: 'right',
            hidden: false,
            image: 'https://teachosm.org/assets/images/blog/capecod-casestudy-2.jpg',
            location: {
                center: [-70.06548, 41.60453],
                zoom: 9.79,
                pitch: 60.00,
                bearing: 10.53
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },	
        {
            id: 'mappingforimpact',
            alignment: 'left',
            hidden: false,
            image: 'https://pbs.twimg.com/media/E9giohHWYAMuaVz?format=jpg&name=large',
            location: {
                center: [-75.23154, 39.94484],
                zoom: 12.18,
                pitch: 60.00,
                bearing: -19.99
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },		
        {
            id: 'challenge',
            alignment: 'right',
            hidden: false,
            image: 'https://www.openstreetmap.us/img/blog/2019-12-geoweek2.jpeg',
            location: {
                center: [-78.63989, 35.77406],
                zoom: 17.11,
                pitch: 52.50,
                bearing: -19.85
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },			
        {
            id: 'state-of-the-mapus',
            alignment: 'right',
            hidden: false,
            image: 'https://github.com/jessbeutler/openimages/blob/main/images/stateofthemapus.png?raw=true',
            location: {
                center: [-110.94947, 32.23425],
                zoom: 17.70,
                pitch: 30.00,
                bearing: -17.91
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
