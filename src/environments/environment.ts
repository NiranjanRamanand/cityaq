// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    openaqApiUrl: 'https://api.openaq.org/v1/',
    mapsApiUrl: 'https://maps.googleapis.com/maps/api/',
    staticMapsKey: 'AIzaSyBJ4wQTemqdOaXFsAmZotfakpevljfN2iY',
    randomizedMapsLongitude: true,
    githubLink: 'https://github.com/jackkoppa/cityaq'
};
