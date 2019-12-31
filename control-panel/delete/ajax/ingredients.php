<?php

include_once(dirname(__FILE__) . '/../../../class/include.php');
include_once(dirname(__FILE__) . '/../../auth.php');

if ($_POST['option'] == 'delete') {

    $INGREDIENTS = new Ingredients($_POST['id']);

    unlink('../../../upload/product-type/product/ingredients/' . $INGREDIENTS->image_name);

    $result = $INGREDIENTS->delete();


    if ($result) {

        $data = array("status" => TRUE);
        header('Content-type: application/json');
        echo json_encode($data);
    }
}