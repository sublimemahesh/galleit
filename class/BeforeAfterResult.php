<?php
/**
 * Description of BeforeAfterResult
 *
 * @author `W j K n``
 */
class BeforeAfterResult {

    public $id;
    public $caption;
    public $image_name;
    public $queue;

    public function __construct($id) {
        if ($id) {
            $query = "SELECT `id`,`caption`,`image_name`,`queue` FROM `before_after_result` WHERE `id`=" . $id;
            $db = new Database();
            $result = mysql_fetch_array($db->readQuery($query));

            $this->id = $result['id'];
            $this->caption = $result['caption'];
            $this->image_name = $result['image_name'];
            $this->queue = $result['queue'];
            return $this;
        }
    }
    public function create() {
        $query = "INSERT INTO `before_after_result` (`caption`,`image_name`,`queue`) VALUES  ('"
                . $this->caption . "','"
                . $this->image_name . "', '"
                . $this->queue . "')";
        $db = new Database();
        $result = $db->readQuery($query);
        if ($result) {
            $last_id = mysql_insert_id();
            return $this->__construct($last_id);
        } else {
            return FALSE;
        }
    }

    public function all() {
        $query = "SELECT * FROM `before_after_result` ORDER BY queue ASC";
        $db = new Database();
        $result = $db->readQuery($query);
        $array_res = array();
        while ($row = mysql_fetch_array($result)) {
            array_push($array_res, $row);
        }
        return $array_res;
    }

    public function update() {
        $query = "UPDATE  `before_after_result` SET "
                . "`caption` ='" . $this->caption . "', "
                . "`image_name` ='" . $this->image_name . "', "
                . "`queue` ='" . $this->queue . "' "
                . "WHERE `id` = '" . $this->id . "'";

        $db = new Database();
        $result = $db->readQuery($query);
        if ($result) {
            return $this->__construct($this->id);
        } else {
            return FALSE;
        }
    }

    public function delete() {
        $query = 'DELETE FROM `before_after_result` WHERE id="' . $this->id . '"';
        $db = new Database();
        return $db->readQuery($query);
    }

    public function arrange($key, $img) {
        $query = "UPDATE `before_after_result` SET `queue` = '" . $key . "'  WHERE id = '" . $img . "'";
        $db = new Database();
        $result = $db->readQuery($query);
        return $result;
    }

}