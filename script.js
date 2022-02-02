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
    model.setAttribute("rotation", "270 90 270");
    model.setAttribute("animation-mixer", "");
    // model.setAttribute("scale", "1 1 1");
    // model.setAttribute("position", "0 -2 0");
    model.object3D.position.y = -3000;

    model.addEventListener("loaded", () => {
        window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });

    scene.appendChild(model);
}
