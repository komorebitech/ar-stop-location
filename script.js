window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    var latitude = 22.816;
    var longitude = 70.8385;
    if (params.has("lat")) {
        latitude = params.get("lat");
    }
    if (params.has("long")) {
        longitude = params.get("long");
    }
    renderPlaces(latitude, longitude);
};

function renderPlaces(latitude, longitude) {
    console.log(
        "🚀 ~ file: script.js ~ line 15 ~ renderPlaces ~ latitude",
        latitude,
        longitude
    );
    let scene = document.querySelector("a-scene");

    let model = document.createElement("a-entity");
    model.setAttribute(
        "gps-entity-place",
        `latitude: ${latitude}; longitude: ${longitude};`
    );
    model.setAttribute("gltf-model", "./assets/pole/pole_v2.gltf");
    model.setAttribute("rotation", "0 0 0");
    model.setAttribute("animation-mixer", "");
    model.setAttribute("scale", "10 10 10");
    model.setAttribute("position", "0 0 0");

    model.addEventListener("loaded", () => {
        window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });

    scene.appendChild(model);
}
