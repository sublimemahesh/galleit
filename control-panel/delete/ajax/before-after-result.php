<?php

include_once(dirname(__FILE__) . '/../../../class/include.php');
include_once(dirname(__FILE__) . '/../../auth.php');

if ($_POST['option'] == 'delete') {

    $RESULT = new BeforeAfterResult($_POST['id']);

    unlink('../../../upload/before-after-result/' . $RESULT->image_name);
    unlink('../../../upload/before-after-result/thumb/' . $RESULT->image_name);

    $result = $RESULT->delete();

    if ($result) {
        $data = array("status" => TRUE);
        header('Content-type: application/json');
        echo json_encode($data);
    }
}