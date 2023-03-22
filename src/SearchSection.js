import React from 'react'

function SearchSection() {
    return (
        <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <form id="searchForm">
                        <div class="form-row">
                            <div class="col-4" id="leftArea"><select class="form-control"><optgroup label="This is a group"><option value="12" selected="">This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                            <div
                                class="col"><select class="form-control"><optgroup label="This is a group"><option value="12" selected="">This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                </div>
                <div class="form-row" id="row-2">
                    <div class="col-4" id="leftArea"><select class="form-control"><optgroup label="This is a group"><option value="12" selected="">This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                    <div
                        class="col">
                        <div class="form-row">
                            <div class="col"><select class="form-control"><optgroup label="This is a group"><option value="12" selected="">This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                            <div
                                class="col d-flex">
                                <div class="form-row">
                                    <div class="col"><select class="form-control"><optgroup label="This is a group"><option value="12" selected="">This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                                    <div
                                        class="col"><select class="form-control"><optgroup label="This is a group"><option value="12" selected="">This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                        </div>
                </div>
                <div class="col">
                    <div class="form-row">
                        <div class="col"><select class="form-control"><optgroup label="This is a group"><option value="12" selected="">This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                        <div
                            class="col"><select class="form-control"><optgroup label="This is a group"><option value="12" selected="">This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="form-row" id="row-2">
        <div class="col-4" id="leftArea"><select class="form-control"><optgroup label="This is a group"><option value="12" selected="">This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
        <div class="col">
            <div class="form-row">
                <div class="col"><button class="btn btn-primary btn-block" type="button">Search</button></div>
                <div class="col-9"><button class="btn btn-link d-flex flex-row justify-content-end align-items-end align-content-end ml-auto" type="reset" id="resetBtn">Reset</button></div>
            </div>
        </div>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    )
}

export default SearchSection
