// Object containing all the api properties.
// it helps if we need to change the api methods and url in future.
export const moduleApi = {
    user: { method: "GET", url: "/users" },
    albums: { method: "GET", url: "/albums" },
    photos: { method: "GET", url: "/photos" },
};