<?phpinclude_once(dirname(__FILE__) . '/../../class/include.php');if (isset($_POST['create'])) {    $PRODUCT = new Product(NULL);    $VALID = new Validator();       $PRODUCT->name = $_POST['name'];    $PRODUCT->short_description = $_POST['short_description'];    $PRODUCT->description = $_POST['description'];    $PRODUCT->price = $_POST['price'];    $PRODUCT->discount = $_POST['discount'];    $PRODUCT->queue = 0;        $dir_dest = '../../upload/product-type/product/';    $dir_dest_thumb = '../../upload/product-type/product/thumb/';    $handle = new Upload($_FILES['image']);    $imgName = null;    $img = Helper::randamId();    if ($handle->uploaded) {                $handle->image_resize = true;        $handle->file_new_name_ext = 'jpg';        $handle->image_ratio_crop = 'C';        $handle->file_new_name_body = $img;        $handle->image_x = 458;        $handle->image_y = 606;                $handle->Process($dir_dest);        if ($handle->processed) {            $info = getimagesize($handle->file_dst_pathname);            $imgName = $handle->file_dst_name;        }        $handle->image_resize = true;        $handle->file_new_name_ext = 'jpg';        $handle->image_ratio_crop = 'C';        $handle->file_new_name_body = $img;        $handle->image_x = 370;        $handle->image_y = 270;        $handle->Process($dir_dest_thumb);        if ($handle->processed) {            $info = getimagesize($handle->file_dst_pathname);            $imgName = $handle->file_dst_name;        }    }    $PRODUCT->image_name = $imgName;    $VALID->check($PRODUCT, [        'name' => ['required' => TRUE],        'short_description' => ['required' => TRUE],        'description' => ['required' => TRUE],        'price' => ['required' => TRUE],        'discount' => ['required' => TRUE],        'image_name' => ['required' => TRUE]    ]);    if ($VALID->passed()) {        $PRODUCT->create();        if (!isset($_SESSION)) {            session_start();        }        $VALID->addError("Your data was saved successfully", 'success');        $_SESSION['ERRORS'] = $VALID->errors();        header('Location: ' . $_SERVER['HTTP_REFERER']);    } else {        if (!isset($_SESSION)) {            session_start();        }        $_SESSION['ERRORS'] = $VALID->errors();        header('Location: ' . $_SERVER['HTTP_REFERER']);    }}if (isset($_POST['update'])) {    $dir_dest = '../../upload/product-type/product/';    $dir_dest_thumb = '../../upload/product-type/product/thumb/';    $handle = new Upload($_FILES['image']);    $img = $_POST ["oldImageName"];    if ($handle->uploaded) {        $handle->image_resize = true;        $handle->file_new_name_body = TRUE;        $handle->file_overwrite = TRUE;        $handle->file_new_name_ext = FALSE;        $handle->image_ratio_crop = 'C';        $handle->file_new_name_body = $img;        $handle->image_x = 458;        $handle->image_y = 606;        $handle->Process($dir_dest);        if ($handle->processed) {            $info = getimagesize($handle->file_dst_pathname);            $img = $handle->file_dst_name;        }        $handle->image_resize = true;        $handle->file_new_name_body = TRUE;        $handle->file_overwrite = TRUE;        $handle->file_new_name_ext = FALSE;        $handle->image_ratio_crop = 'C';        $handle->file_new_name_body = $img;        $handle->image_x = 370;        $handle->image_y = 270;        $handle->Process($dir_dest_thumb);        if ($handle->processed) {            $info = getimagesize($handle->file_dst_pathname);            $img = $handle->file_dst_name;        }    }    $PRODUCT = new Product($_POST['id']);    $PRODUCT->image_name = $_POST['oldImageName'];    $PRODUCT->name = $_POST['name'];    $PRODUCT->short_description = $_POST['short_description'];    $PRODUCT->description = $_POST['description'];    $PRODUCT->price = $_POST['price'];    $PRODUCT->discount = $_POST['discount'];    $VALID = new Validator();    $VALID->check($PRODUCT, [        'name' => ['required' => TRUE],        'short_description' => ['required' => TRUE],        'description' => ['required' => TRUE],        'price' => ['required' => TRUE],        'image_name' => ['required' => TRUE]    ]);    if ($VALID->passed()) {        $PRODUCT->update();        if (!isset($_SESSION)) {            session_start();        }        $VALID->addError("Your changes saved successfully", 'success');        $_SESSION['ERRORS'] = $VALID->errors();        header('Location: ' . $_SERVER['HTTP_REFERER']);    } else {        if (!isset($_SESSION)) {            session_start();        }        $_SESSION['ERRORS'] = $VALID->errors();        header('Location: ' . $_SERVER['HTTP_REFERER']);    }}if (isset($_POST['save-data'])) {    foreach ($_POST['sort'] as $key => $img) {        $key = $key + 1;        $PRODUCT = Product::arrange($key, $img);        header('Location: ' . $_SERVER['HTTP_REFERER']);    }}