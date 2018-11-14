@php
$exclusiveTo =  ucfirst(strtolower(str_replace("Product.","", $exclusiveTo)));
if($exclusiveTo == 'Wp'){
    $exclusiveTo = 'Working Papers';
}
@endphp

<div class="filtermsg col-sm-9">
    This content is exclusively related to {{$exclusiveTo}} and has been filtered out. Select the Filter dropdown in the top navigation to modify your filter settings.
</div>