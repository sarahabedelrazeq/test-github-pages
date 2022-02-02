import {icons, types} from "../data/data.js";

icons.forEach(icon => {
    document.getElementById("icons_container").innerHTML +=
    `
    <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="p-2 h-100">
            <a class="h-100 d-flex flex-column" target="_blank" href="${icon.url}">
                <div class="w-100 h-100 text-center">
                    <img class="w-25" src="http://www.google.com/s2/favicons?domain=${icon.url}" alt="${icon.name}">
                </div>
                <span class="d-block w-100 p-2">${icon.name}</span>
            </a>
        </div>
    </div>
    `;
});

/**
 * <div class="col-lg-2 col-md-4 col-sm-6"></div>
 * ++++++++++++++++++++
 * {
    id: 19,
    typeId: 1,
    name: "",
    url: "",
},
 */
