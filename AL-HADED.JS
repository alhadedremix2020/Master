Tsend_=Tsend;
reqlikes=10;
Tsend=function(){if(getuser(myid).rep<reqlikes){alert('لإ يمكنك الكتابة بالعام يتطلب منك الحصول على لايكات'+reqlikes+' '); return;}else{Tsend_();}}
sendpic_=sendpic;
reqlikes=10;
sendpic=function(){if(getuser(myid).rep<reqlikes){alert('لإ يمكنك تغير صورتك يتطلب منك الحصول على لايكات '+reqlikes+''); return;}else{sendpic_();}}
setprofile_=setprofile;
reqlikes=10;
setprofile=function(){if(getuser(myid).rep<reqlikes){alert('لا يمكنك حفظ الأعدادات يتطلب منك الحصول على لايكات '+reqlikes+''); return;}else{setprofile_();}}
$(".fa-gear").text("الاعدادات").css("width","");
$(".ubnr").remove();
$('#l1').append(`<label for="u1" style="float: left;width: 99%;text-align: center;margin: 3px 0 0;">اهلاً وسهلاً بك</label>`);
$('#l2').append(`<label for="u1" style="float: left;width: 99%;text-align: center;margin: 3px 0 0;">اهلاً وسهلاً بك فـي عائـلتك مجددا </label>`);
$('#l3').append(`<label for="u1" style="float: left;width: 99%;text-align: center;margin: 3px 0 0;">تسجيلك للعضوية يميزك بين الكل</label>`);
