<?php
namespace App\Classes;


class FileUpload
{
    public static function upload($file, $folder, $name){
        if ($file) {
            $original_filename = $file->getClientOriginalName();
            $original_filename_arr = explode('.', $original_filename);

            $file_ext = end($original_filename_arr);
            $destination_path = $_SERVER["DOCUMENT_ROOT"].'/Uploads/'.$folder;

            $fileName = $name . '.' . $file_ext;

            $send = $file->move($destination_path, $fileName);

            if ($send) {
                return Config::uploadHost().'/Uploads/'. $folder . '/' . $fileName;
            } else {
                return 'Error';
            }
        } else {
            return 'Error';
        }
    }
}