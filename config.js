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
            image: 'https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/56255631_2631860080175727_4390577923753508864_n.jpg?_nc_cat=110&ccb=1-6&_nc_sid=730e14&_nc_ohc=-cbFV8yYww4AX-nrj8m&_nc_ht=scontent-atl3-2.xx&oh=00_AT-TSzxb_78LhSE2-bKcIQWUZDXzqNptA2qVrlK40tK2iw&oe=62A8472D',
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
            image: 'https://www.openstreetmap.us/img/blog/2022-01-18-pic1.gif',
            location: {
                center: [-78.46488, 38.02678],
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
			image: 'https://2020.stateofthemap.org/img/sotm-2019-group.jpg',
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
            image: 'https://dim.mcusercontent.com/cs/162692bfdedb78ec46fd108a3/images/daac5725-8962-14a4-b151-e3343d61c50a.png?w=564&dpr=2',
            location: {
                center: [-110.94947, 32.23425],
                zoom: 17.70,
                pitch: 30.00,
                bearing: -17.91
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
            id: 'teachosm-wg',
            alignment: 'right',
            hidden: false,
            image: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F504001059%2F676x380.webp&w=1920&q=75',
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
            id: 'mappingforimpact2',
            alignment: 'right',
            hidden: false,
            image: 'https://files.globalgiving.org/pfil/53351/ph_53351_207271.jpg?m=1628860597000',
            location: {
                center: [-73.96253, 40.58795],
                zoom: 12.63,
                pitch: 52.50,
                bearing: 20.80
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
            id: 'publicdomainmap',
            alignment: 'right',
            hidden: false,
            image: 'https://github.com/publicdomainmap/public_files/blob/main/TM_instructions_images/TM_rrtunnel_instructions3-1.gif?raw=true',
            location: {
                center: [-104.64889, 39.678493],
                zoom: 8.09,
                pitch: 60.00,
                bearing: -32.00
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
            id: 'mappy-hour',
            alignment: 'right',
            hidden: false,
            image: 'https://www.openstreetmap.us/img/blog/2022-05-12-mh.png',
            location: {
                center: [-81.46713, 42.37985],
                zoom: 3.70,
                pitch: 45.00,
                bearing:40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
