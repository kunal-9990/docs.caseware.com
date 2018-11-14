@php
$exclusiveTo =  ucfirst(strtolower(str_replace("Product.","", $exclusiveTo)));
if($exclusiveTo == 'Wp'){
    $exclusiveTo = 'Working Papers';
}
@endphp

<div class="filtermsg col-sm-9">
    This content is exclusively related to {{$exclusiveTo}} and has been filtered out. Select the <span class="glyphicon glyphicon-filter"></span> icon in the top navigation to modify your filter settings.
</div>