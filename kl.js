 <script language='javascript'>
 //<![CDATA[
var key = window.location.href.split("go/")[1].replace("/","") 
var url={ 
'lkm1':'https://www.facebook.com/', 

'1':"https://www.facebook.com/",
 'blog':"https://www.blogger.com/" 
 }
 if(key){
 if(urls[key]){ 
window.location.href=urls[key]
 }else
{ document.write("'"+key+"' غير موجود!! :("); 
 }
 } 
//]]>
 </script> 
