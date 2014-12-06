<?php

class NoobMobileException extends Exception{
      
    public function getErrorArray()
    {
        return array('ErrorMessage'=>utf8_encode($this->getMessage()),'Error code'=> $this->code);
    }
}

?>