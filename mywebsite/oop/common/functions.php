<?php

    class Functions {

        // orig: Khajur Cooking Oil
        // slug: Khajur-Cooking-Oil
        // final slug: khajur-cooking-oil
        function slug($txt){
            $slug = strtolower(str_replace(" ", "-", $txt));
            return $slug;
        }
    }

    $func = new Functions();

?>