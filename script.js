let prev_clicked_id = "f1";
let prev_info_block_id = "f1_info";
function on_feature_click(id){
    let last_clicked_elem = document.getElementById(prev_clicked_id);
    let clicked = document.getElementById(id);

    last_clicked_elem.style.backgroundColor = "#99999b";
    clicked.style.backgroundColor = "#536585";

    let clicked_info_block_id;
    if(id === "f1") clicked_info_block_id = "f1_info";
    else if(id === "f2") clicked_info_block_id = "f2_info";
    else if(id === "f3") clicked_info_block_id = "f3_info";
    else if(id === "f4") clicked_info_block_id = "f4_info";

    let prev_info_block_elem = document.getElementById(prev_info_block_id);
    let clicked_info_block_elem = document.getElementById(clicked_info_block_id);

    prev_info_block_elem.style.visibility = "hidden";
    clicked_info_block_elem.style.visibility = "visible";



    prev_clicked_id = id;
    prev_info_block_id = clicked_info_block_id;

}
