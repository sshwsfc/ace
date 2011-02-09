<?php
<<< HTML
<a href="link.asp">test</a>
HTML;

/********************************************
*                                           *
* Name    : File System Object              *
* Author  : Windy_sk                        *
* Time    : 2003-09-12                      *
* Email   : flyhorses@sina.com              *
* HomePage: None (Maybe Soon)               *
* Notice  : U Can Use & Modify it freely,   *
*           BUT PLEASE HOLD THIS ITEM.      *
*                                           *
********************************************/

class FileSystemObject {
 var $main_dir = "./";
 Var $dir_map = "";
 var $search = array();
 
 function FileSystemObject($main_dir = "./") {
  $this->main_dir = $main_dir;
  return;
 }
 
 "aaa${name}aaa";

 function Get_Attrib($file_att){
  if(strlen($file_att)!=3) return "Error";
  $att_list = array("---", "--x", "-w-", "-wx", "r--", "r-x", "rw-", "rwx");
  $the_attrib = "";
  for($i=0; $i<3; $i++) {
   $this_char=(int)substr($file_att,$i,1);
   if($this_char > 7 || $this_char < 0)  return "Error";
   $the_attrib .= $att_list[$this_char];
  }
  return $the_attrib;
 } 
 
 
 function Get_Size($file_size) {
  if($file_size < 1024){
   $file_size = (string)$file_size . " Bytes"; 
  }else if($file_size < (1024 * 1024)){ 
   $file_size = number_format((double)($file_size / 1024), 1) . " KB"; 
  }else if($fil_esize < (1024 * 1024 * 1024)){ 
   $file_size = number_format((double)($file_size / (1024 * 1024)), 1) . " MB"; 
  }else{ 
   $file_size = number_format((double)($file_size / (1024 * 1024 * 1024)), 1) . " GB"; 
  }
  return $file_size;
 }
 
 
 function Judge_Child($dir = "", $only_dir = true){
  if(empty($dir)) $dir = $this->main_dir;
  $mydir = @dir($dir);
  if(!$mydir) return false;
  while($file = $mydir->read()){
   if($file!="." && $file!=".."){
    if($only_dir) {
     if(is_dir($dir."/".$file)) return true;
    } else {
     return true;
    }
   }
  }
  $mydir->close();
  return false;
 }


 function MultiDel($dir){
  if(empty($dir)) return;
  if(is_dir($dir)){
   $mydir = opendir($dir);
   while($file = readdir($mydir)) {
    if($file!="." && $file!="..") {
     $the_name = $dir."/".$file;
     is_dir($the_name) ? $this->MultiDel($the_name) : unlink($the_name);
    }
   }
   closedir($mydir);
   rmdir($dir);
  }else{
   unlink($dir);
  }
  return;
 }
 
 
 function Make_Dir($dir) {
  if(is_dir($dir)) {
   print("Directory {$dir} already exist !");
  } else {
   @mkdir($dir,0777) or print("Operation Failed in Creating Directory {$dir} ,Please Check Your Power!");
  }
  return;
 }
 
 
 function Rename_File($file, $newname) {
  if(file_exists($file)) {
   if(file_exists($newname)) {
    print("File {$newname} already exist !");
   } else {
    @rename($file, $newname) or print("Operation Failed in Renaming {$file} ，Please Check Your Power!");
   }
  } else {
   print("Cannot Find File {$file} !");
  }
  return;
 }
 
 
 function Move_File($file, $dir) {
  if(is_dir($dir))
   $this->Rename_File($file, str_replace("//","/",$dir."/".basename($file)));
  else
   print("Cannot Find Directory {$dir} !");
  return;
 }
 
 
 function Get_File($file) {
  return is_file($file)?join("",file($file)):"";
 }
 
 
 function Write_File($file, $content) {
  if(file_exists($file)) $this->Set_Attrib($file, 0777);
  $fp=@fopen($file,"w");
  if($fp) {
   flock($fp,2);
   fputs($fp,$content);
   fclose($fp);
  } else {
   print("Cannot Create File {$file} !");
  }
  return;
 }
 
 
 function Set_Attrib($file, $attrib) {
  if(file_exists($file)) {
   @chmod($file, $attrib) or print("Operation Failed in Setting Attrib of {$file} , Please Check Your Power!");
  } else {
   print("Cannot Find File {$file} !");
  }
  return;
 }
 
 
 function Search_File($keyword, $inc_word, $deep, $dir) {
  $mydir = @dir($dir); 
  if(!$mydir) return false;
  while($file = $mydir->read()) { 
   $the_name = str_replace("//","/",$dir."/".$file);
   if(is_dir($the_name)) { 
    if($deep && $file!="." && $file!=".."){
     $this->Search_File($keyword, $inc_word, $deep, $the_name); 
    }
   } else {
    if(@strpos(basename($the_name), $keyword)!==false || empty($keyword)) {
     if(!empty($inc_word)) {
      if($this->Search_File_Content($the_name, $inc_word)) array_push($this->search, $the_name);
     } else {
      array_push($this->search, $the_name);
     }
    }
   }
  }
  $mydir->close();
  return;
 }
 
 
 function Search_File_Content($file, $inc_word) {
  return (strpos($this->Get_File($file), $inc_word) !== false);
 }


 function Search($keyword="", $inc_word="", $deep=false, $dir="") {
  if(empty($dir)) $dir = $this->main_dir;
  $this->search = array();
  $this->Search_File($keyword, $inc_word, $deep, $dir);
  return $this->search;
 }

 function Get_Tree($dir = "", $filetype = ""){
  if(empty($dir)) $dir = $this->main_dir;
  $mydir = @dir($dir); 
  if(!$mydir) return false;
  $file_list = array("dir" => array(), "file" => array(), "custom" => array());
  while($file = @$mydir->read()){
   if(!$file) continue;
   if($file!="."  && $file!=".."){
    $string = str_replace("//","/",$dir."/".$file);
    if(is_dir($string)){
     $file_list["dir"][] = $string;
    }else{
     $file_list["file"][] = $string;
     if(!empty($filetype)) {
      $ext = str_replace(".", "", strrchr($string ,"."));
      if(strpos($filetype, $ext)!==false)
       $file_list["custom"][] = $string;
     }
    }
   }
  }
  $mydir->close();
  sort($file_list["dir"]);
  sort($file_list["file"]);
  sort($file_list["custom"]);
  return $file_list;
 }
 
 
 function Make_DirMap($dir = "", $simple, $loop) {
  if(empty($dir)) $dir = $this->main_dir;
  if(!is_dir($dir)) return;
  $file_list = $this->Get_Tree($dir);
  for($i=0; $i<count($file_list["dir"]); $i++) {
   $the_name = $file_list["dir"][$i];
   $the_name = str_replace("&", "&amp;", $the_name);
   $this->dir_map .= "<Directory Name=\"".basename($the_name)."\"".($simple?"":" Attrib=\"".$this->Get_Attrib(substr(DecOct(fileperms($the_name)),-3))."\" Time=\"".date("m/d/y H:i:s", filemtime($the_name))."\"").">\n";
   if($loop) $this->Make_DirMap($the_name, $simple, $loop);
   $this->dir_map .= "</Directory>\n";
  }
  for($i=0; $i<count($file_list["file"]); $i++) {
   $the_name = $file_list["file"][$i];
   $the_name = str_replace("&", "&amp;", $the_name);
   $this->dir_map .= "<File Name=\"".basename($the_name)."\"".($simple?"":" Size=\"".$this->Get_Size(filesize($the_name))."\" Attrib=\"".$this->Get_Attrib(substr(DecOct(fileperms($the_name)),-3))."\" Time=\"".date("m/d/y H:i:s", filemtime($the_name))."\"")." />\n";
  }
  unset($file_list);
  return;
 }
 
 
 function Get_DirMap($declaration = false, $simple = false, $loop = true){
  $this->dir_map  = $declaration?"<?xml version=\"1.0\" encoding=\"gb2312\" standalone=\"yes\"?>\n":"";
  $this->dir_map .= "<DirectoryMap Root=\"{$this->main_dir}\" Data=\"".date("m/d/y H:i:s", time())."\">\n";
  $this->Make_DirMap($this->main_dir, $simple, $loop);
  $this->dir_map .= "</DirectoryMap>";
  return $this->dir_map;
 }
}
?>