import React from 'react'

function Hyperlinks() {
    return (
        <section class="mx-auto Section-2">
        <div id="assetType">
            <div class="row d-flex">
                <div class="col-3 d-flex flex-column align-items-center"><a href="#" id="type">Apartments<span id="numberOfAssets">(1000)</span></a><a href="#" id="type">Twin houses<span id="numberOfAssets">(1000)</span></a></div>
                <div class="col-3 d-flex flex-column align-items-center"><a href="#" id="type">Villas<span id="numberOfAssets">(1000)</span></a><a href="#" id="type">Duplexes<span id="numberOfAssets">(1000)</span></a></div>
                <div class="col-3 d-flex flex-column align-items-center"><a href="#" id="type">Chalets<span id="numberOfAssets">(1000)</span></a><a href="#" id="type">Penthouses<span id="numberOfAssets">(1000)</span></a></div>
                <div class="col-3 d-flex flex-column align-items-center"><a href="#" id="type">Townhouses<span id="numberOfAssets">(1000)</span></a></div>
            </div>
        </div>
    </section>
    )
}

export default Hyperlinks
