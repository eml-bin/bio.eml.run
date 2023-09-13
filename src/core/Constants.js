export const mexColors = [
    '1AF597', 'FFFFFF', 'ef0e02'
]

export const SEED = {
    PERSONAL_DATA: {
        BIO: [
            { key: 'nombre', value: 'Edu4rdo Muñ0z Lóp3z' },
            { key: 'nacimiento', value: '1994' },
            { key: 'nacionalidad', value: 'Mexicano' },
            { key: 'cédula', value: '10248412' },
            { key: 'rol', value: 'Fullstack Engineer' },
        ],
        LINKS: [
            { key: 'cv', type: '📄', value: 'https://s3.us-east-2.amazonaws.com/eml.run/EML-CV23.pdf', emoji: '📄' },
            { key: 'móvil', type: '📞', value: '+524612275316', emoji: '📞' },
            { key: 'email', type: '✉️', value: 'edu@eml.run', emoji: '📧' },
            { key: 'linkedin', type: '🌐', value: 'https://www.linkedin.com/in/eml9407/', emoji: '👷‍♂️' },
            { key: 'github', type: '🌐', value: 'https://github.com/eml-bin', emoji: '🧑‍💻' },
            { key: 'stackoverflow', type: '🌐', value: 'https://stackoverflow.com/users/4010240/eduardo-ml', emoji: '🗣️' }
        ]
    },
    TOOLS: [
        {
            field: 'Frontend',
            items: [
                'reactjs',
                'angular',
                'css',
                'html'
            ]
        },
        {
            field: 'Backend',
            items: [
                'python',
                'c#',
                'node.js',
                'java'
            ]
        },
        {
            field: 'Móvil',
            items: [
                'react-native',
                'react-360'
            ]
        },
        {
            field: 'Cloud',
            items: [
                'azure',
                'aws'
            ]
        },
        {
            field: 'SQL',
            items: [
                'sql server',
                'mysql',
                'postgresql',
                'sqlite'
            ]
        },
        {
            field: 'NoSQL',
            items: [
                'mongoDB'
            ]
        },
        {
            field: 'Infraestructura',
            items: [
                'docker',
                'firebase',
                'serverless',
                'databricks'
            ]
        },
        {
            field: 'DevOps',
            items: [
                'git',
                'bitbucket pipelines',
                'github actions',
                'azure devops'
            ]
        },
        {
            field: 'Librerías/Frameworks',
            items: [
                'graphql',
                'azure powerapps',
                'mapbox',
                'flask',
                'django',
                'material ui',
                'bootstrap',
                'redux',
                'jwt',
                'eslint',
                'lodash',
                'spring'
            ]
        },
        {
            field: 'Gestión de Proyectos',
            items: [
                'git',
                'jira',
                'trello'
            ]
        },
        {
            field: 'Colaboración',
            items: [
                'google Workspace',
                'slack',
                'discord',
                'teams'
            ]
        },
        {
            field: 'Protocolos',
            items: [
                'http',
                'mqtt',
                'websocket',
                'ftp',
                'ssh'
            ]
        },
        {
            field: 'Scripting',
            items: [
                'bash',
                'powershell'
            ]
        },
        {
            field: 'Diseño',
            items: [
                'diagramas de arquitectura',
                'diagramas de flujo',
                'diagramas entidad-relación',
                'diagramas de secuencia',
                'planificación de tareas'
            ]
        }
    ],
    TIMELINE: [
        {
            title: `IECA`,
            time: '2023',
            duration: { isActive: true },
            role: 'Instructor de Tecnología',
            activity: 'timelineActivities.ieca2023' 
        },
        {
            title: 'Exertus',
            time: '2022-2023',
            duration: { years: null, months: 6, isActive: false },
            role: 'Fullstack Developer',
            activity: 'timelineActivities.exertus20222023' 
        },
        {
            title: 'VR para Llevar',
            time: '2020',
            duration: { years: null, months: 2, isActive: false },
            role: 'Fullstack Developer',
            activity: 'timelineActivities.vrparallevar2020' 
        },
        {
            title: 'GestaLabs',
            time: '2019-2022',
            duration: { years: 3, months: 2, isActive: false },
            role: 'Fullstack Engineer',
            activity: 'timelineActivities.gestalabs20192022'
        },
        {
            title: 'Interserv',
            time: '2018-2019',
            duration: { years: 1, isActive: false },
            role: 'Ingeniero de Software',
            activity: 'timelineActivities.interserv20182019'
        },
        {
            title: 'Campus Party Hackathon',
            time: '2016',
            duration: null,
            role: 'Developer',
            activity: 'timelineActivities.campusparty2016'
        }
    ],
    QUESTIONARY: [
        { question: 'questionary.qa1.q', answer: 'questionary.qa1.a' },
        { question: 'questionary.qa2.q', answer: 'questionary.qa2.a' },
        { question: 'questionary.qa3.q', answer: 'questionary.qa3.a' },
        { question: 'questionary.qa4.q', answer: 'questionary.qa4.a' },
        { question: 'questionary.qa5.q', answer: 'questionary.qa5.a' },
        { question: 'questionary.qa6.q', answer: 'questionary.qa6.a' },
        { question: 'questionary.qa7.q', answer: 'questionary.qa7.a' },
        { question: 'questionary.qa8.q', answer: 'questionary.qa8.a' },
        { question: 'questionary.qa9.q', answer: 'questionary.qa9.a' },
        { question: 'questionary.qa10.q', answer: 'questionary.qa10.a' },
    ],
    NUMBERS: '00101100010110111010010010101111000101001011101',
    CODEX: `+'BCDEFGHIJKMNOPQRST`,
}

export const DICTIONARY = {
    DOCS: {
        PHONE: '📞',
        MAIL: '✉️',
        WEBSITE: '🌐',
        FILE: '📄'
    },
    SECTIONS: {
        TOOLS: 'tools',
        TIMELINE: 'timeline',
        QUESTIONARY: 'questionary'
    },
    LANGS: {
        SPANISH: 'es',
        ENGLISH: 'en'
    }
}