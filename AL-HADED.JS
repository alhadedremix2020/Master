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
$(`<img style="width: 36px; height: 36px; margin-left: 1px; background-image: url(&quot;pic/1enjbsmtm10.jpeg.jpg&quot;);" class="fitimg fl u-pic ">
      <label class="fl muted fa" style="color:indianred;">&nbsp;</label>
      <img class="fr co" style="width:16px;border-radius:1px;" src="flag/jo.gif">
      <span class="fr uhash" style="color:grey;font-size:70%!important;margin-top: -3px;">#89</span>
      <div style="width:68%;" class="fl">
        <div style="width:100%;margin-top:-2px;display: flex;" class="fl">
          <img class="fl u-ico" style="object-fit: contain;min-height: 15px;" src="sico/z1c7lnepji10.gif">
          <div class="fl" style="width:82%;"><span style="margin-top: 1px; padding: 0px 8px; max-width: 100%; border-radius: 3px; color: rgb(62, 40, 53);" class="corner u-topic dots">.. جمّر ، ألليَاليّ .. البارِده ; إنتِ</span></div>
        </div>
        <div style="width:100%;color:#888;margin-top:-8px;" class="fl mini u-msg">ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ- ربمَا هذه آلنهايه .. ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ㅤㅤㅤ</div>
      </div>
    </div>
    </style>`).insertBefore(".lonline.light.break");
$(`<div class="hand nosel fl uzr borderg uid175e85715aax75b2d9b5-xawv0rk inroom" style="text-align:left;background-color:white;border-radius:0px!important;width:99%;margin:0px;padding:1px;" v="9000">
      <img class="fl ustat" style="width:3px;height:36px;margin-left: 1px;" src="imgs/s2.png?2">
      <img style="width: 36px; height: 36px; margin-left: 1px; background-image: url(&quot;pic/1enjbsmtm10.jpeg.jpg&quot;);" class="fitimg fl u-pic ">
      <label class="fl muted fa" style="color:indianred;">&nbsp;</label>
      <img class="fr co" style="width:16px;border-radius:1px;" src="flag/jo.gif">
      <span class="fr uhash" style="color:grey;font-size:70%!important;margin-top: -3px;">#33</span>
      <div style="width:68%;" class="fl">
        <div style="width:100%;margin-top:-2px;display: flex;" class="fl">
          <img class="fl u-ico" style="object-fit: contain;min-height: 15px;" src="sico/z1c7lnepji10.gif">
          <div class="fl" style="width:82%;"><span style="margin-top: 1px; padding: 0px 8px; max-width: 100%; border-radius: 3px; color: rgb(62, 40, 53);" class="corner u-topic dots">.. جمّر ، ألليَاليّ .. البارِده ; إنتِ</span></div>
        </div>
        <div style="width:100%;color:#888;margin-top:-8px;" class="fl mini u-msg">ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ- ربمَا هذه آلنهايه .. ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ㅤㅤㅤ</div>
      </div>
    </div>
    </style>`).insertBefore(".nosel.inr.fl.uzr.label.label-primary");
$("div#tlogins button.btn.btn-primary").click(function(){
var myVar = setInterval(function(){ var usmsgw = $(".pmsgc").length;if(usmsgw > 0){
   $(`
    <div class="uzr fl corner borderg mm" style="border-radius:5px;margin-bottom:-2px;width:99.5%;padding:0px; background-color:white;">
      <img style="width: 36px; height: 38px; margin-left: 1px; margin-top: 1px; background-image: url(https://chatnsh.com/pic/1enjbsmtm10.jpeg);" class="fl fitimg hand u-pic    ">
      <div class="uzr fl" style="padding:0px;width:80%">
        <div style="padding:0px;width:100%;" class="fl">
          <img class="fl u-ico" alt="" src="https://chatnsh.com/sico/z1c7lnepji10.gif>
          <span style="padding: 1px 8px; margin-top: 2px; display: block; max-width: 82%; border-radius: 3px; color: rgb(199, 103, 48);" class="corner nosel u-topic dots fl hand">‎.!  .. جمّر ، ألليَاليّ .. البارِده ; إنتِ  </span>
        </div>
        <br>
        <div style="padding: 0px; width: 100%; color: rgb(60, 0, 255);" class=" u-msg   break  fl">
        <div style="padding: 0px;width: 100%;color: rgb(60, 0, 255);text-align: left;display: block;margin-top: -17px;" class=" u-msg   break  fl"> مرحباً بك 👋 <h1 style="display: inline-block;color: red;">`+ getuser(myid).topic+ `</h1> نقدّر تواجدك معنا، ونتمنى لك يوماً سعيداً إن شاء الله </div>
      </div>
    </div></div>
`).appendTo('div#d2')
clearInterval(myVar);

}else{console.log(usmsgw)} }, 2000);
})


	$(`<style> .fitimg.fl.u-pic { box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgb(243, 238, 238, 0.767); border-radius: 50px; } </style>`).insertBefore('body');
	$(`<style>
	.fitimg.fl.u-pic {
	box-shadow: inset 0 30px 30px rgba(0,0,0,.075), 0 0 8px rgb(243, 238, 238, 0.767);
	border-radius","16px 16px 16px 0px;
	}
	</style>`).insertBefore('body')
	$(`<link rel="stylesheet" type="text/css" href="=-light,">
	<link rel="stylesheet" href="">
	<style>
	.border {box-#: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgb(80, 79, 81);border: 10px color: #507A9C ;}
	
	.lonline.light.break{background-image: url();background-size: inherit;border-top:5px groove #A9ADB8;padding-top:5px}
	.sultan111,div#d2{background-repeat: no-repeat;background-size: contain;background-image: url();background-color:#ffffff}a.label.label-primary.fl{height:35px;border-radius:19px 19px 0 0!important;padding:8px!important;border:2px solid #595B61}
	}
	.fitimg.fl.u-pic {box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgb(80, 79, 81);border-radius: 75px 0px 75px 75px;}
	.label-primary, .btn-primary {border-radius: 14px 14px 14px 14px;}
	
	label.label.tc.border.btn.fl {border-radius: 24px 0px 24px 0px;}
	.label.tc.border.btn.fl, .label.tc.border.btn.fl {border: 3px solid #4D0808;font-family: 'jazeera',FontAwesome;border-radius: 5px 5px 5px 0px;}
	label.fl.nosel.label.pnhead {font-family: '',;width: 80%;text-align: -webkit-center;background-color: #E8E8E8;color: #C0C4D1;border-radius: 24px 24px 24px 0px;};
	</style>`).insertBefore('body');
$('.room.borderg.hand.nosel.fl').css({'margin': '1px 0',borderRight: '1px solid #A6A6A6',borderLeft: '1px solid #A6A6A6',borderTop: '1px solid #A6A6A6',borderBottom: '1px solid #A6A6A6',paddingTop: '1px',borderRadius: '10px'});
	$('.uzr.fl.corner.borderg').css({'margin': '0px 0',borderRight: '3px solid #adadad',borderLeft: '3px solid #adadad',borderTop: '.40px solid #adadad',borderBottom: '.50px solid #adadad',paddingTop: '3px',borderRadius: '3px 3px 3px 3px'});
$('.fl.mini.u-msg').css('color','#3C342D')
$('.label.border.btn.label-danger.tc.fl').css('color','#3C342D')
$('.u-msg').css('color','#3C342D')
$('.u-msg.dots').removeClass('dots');
$(`<style font="http://fonts.googleapis.com/css?family=Amiri&subset=arabic,latin">
.rpwd {width: 60%!important;border-radius: 50px!important;border:2px solid;}
.uroomz.border {width: fit-content!important;border-radius: 50px!important;margin-top: -46px!important;margin-left: 200px!important;}
.roomz.selbox.form-control {width: 100%!important;border:2px solid;border-radius: 50px!important;}
.upower.border {width: fit-content!important;border-radius: 50px!important;margin-top: -47px!important;margin-left: 190px!important;}
.userpower.selbox.form-control {width: 100%!important;border:2px solid;border-radius: 50px!important;}
.userdays {width: 56%!important;border-radius: 50px!important;border:2px solid;}
.ulikec.border {width: fit-content!important;border-radius: 50px!important;border:2px solid;}
.u-msg {FONT-FACE:Amiri!important;}
.likec {width: 56%!important;border-radius: 50px!important;border:2px solid;}
.ae.fa.chats.label.fa-comment.label-primary {width:46px!important;border-radius: 0px 0px 0px 0px!important}
.ae.fa.label.label-primary.fa-user {width:46px!important;border-radius: 30px 0px 0px 30px!important;}
.ae.fa.label.label-primary.fa-users {width: 85px!important;border-radius: 0px 0px 0px 0px!important;margin-left: 0px!important;}
.ae.fa.label.label-primary.fa-commenting-o {width: 85px!important;border-radius: 0px 0px 0px 0px!important;margin-left: 0px!important;}
.ae.fa.label.fa-users.btnClAlGr {width:25px!important;border-radius: 0px 30px 30px 0px!important;margin-left: 0px!important;}
.ae.label.label-primary.fa.fa-gear {width: 30px!important;border-radius: 0px 0px 0px 0px!important;}
</style>`).insertBefore('body');
$('.uzr.fl.corner.borderg').css({'margin': '0px 0',borderRight: '0px solid #ffffff',borderLeft: '0px solid #ffffff',borderTop: '.0px solid #ffffff',borderBottom: '.0px solid #ffffff',paddingTop: '3px',borderRadius: '0px 0px 0px 0px'});
$('.nav-tabs').addClass('fl').css('width','100%');
$(`<style>
}
span.s1.fa.fa-user.label.badgex.label-as-badge.label-success
	{
	padding:0px 3px 2px;
	margin-right:5px
}

.fr.borderg,.fr.borderg a
	{
	border-radius:3px!important;
	margin-right:0px!important;
	border:black solid 0px;
	color:#ded3ca;
        
}
ul.nav.nav-tabs>li>a
	{
	color:#ffffff;
	border:none;
	text-align:center;
	border-radius:3px;
	display:initial;
	width:80%;
	float:left;
	padding:0!important;
        Background-color:#383029;
}
ul.nav.nav-tabs>li.active>a
	{
	border:none;
	border-radius:3px
}
ul.nav.nav-tabs>li
	{
	width:32%;
	margin:0 5px 0 0
}
ul.nav.nav-tabs>li>.fa-user-plus:before,ul.nav.nav-tabs>li>.fa-user:before,ul.nav.nav-tabs>li>.fa-user:before
	{
	float:right;
	margin-right:-26%;
	border:1px solid;
	padding:0 2px 1px;
	border-radius:3px;
	width:23px;
	text-align:center;
	color:#383029
}
ul.nav.nav-tabs
	{
	border-top:1px solid#383029;
	margin-top:1px;
	float:right;
	width:100%;
	padding:3px 1px
}
input#u1,input#u2,input#pass1,input#u3,input#pass2
	{
	width:50%;
	height:31px;
	margin-left:40.5px;
	margin-bottom:5.5px;
	border:1px solid#383029;
	border-radius:3px;
	text-align:center
}
div#asim13
	{
	width:49%;
	top:122px;
	position:absolute;
	left:3px
}
div#l1
	{
	padding:16.8px!important
}
div#d2bc {width:312px!important;}
div.dpnl.bg {width:312px!important;}
.fr.co {border-radius:50%!important; width:18px!important; border:1.4px outset}
</style>`).insertBefore("body");
$('.checkbox label').html(`<input id="stealth" type="checkbox" value="" maxlength="10"><i class="fa fa-eye-slash" aria-hidden="true">`)
$(`<font size="4" color="#ffffff"><marquee direction="right" width="100%" height="20" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="5" style="height: 20px; width: 100%;background-color:#383029;">جولات هذا الاسبوع : يوم الاثنين تعرف على اسم الاغنيه من الموسيقى . . يوم الأربعاء اجمل صوره من تصويرك الخاص . . يوم الجمعة أجمل تعليق على الصورة || جميع الجولات على بطائق امازون و ابل ستور او اشتراك نتفليكس  </marquee></font>`).insertBefore('.nav-tabs');
function pmsg(){var m=prompt('الرجاء الالتزام بقواعد الاعلانات الاعلانات فقط للمسابقات والادعية ليسة للمزح صاحب الشات عمر الحديد',"");if(m==''||m==null){return;}
m=m.split('\n').join('');if(m=="%0A"||m=="%0a"||m==''||m=='\n'){return;}
send("pmsg",{msg:m});}
$("div#tlogins input").attr("maxlength",10),$("textarea#tbox.fl.corner.tbox.filw").attr("maxlength",1000);
$(".fr.co").hide();
$(".fl.mini.u-co").hide();
$(`<center><div><div width="99.5%" id="" /font/div/div><center>`).insertBefore('#d2');
bct=100;msgt=100;$('.fr.borderg a').text(' عمر الحديد')
$( "a.label.label-primary.fl > img.fl" ).replaceWith('<img src="" class="fl" style="margin-right: 0px; width: 0px;">');
$('.checkbox label').html(`<input id="stealth" type="checkbox" value=""><img id="as13" src="https://www.sudfachat.com/sico/1580237645774.png" width="70%" style="">`)
$('div#l1 button.btn.btn-primary')['bind']('click', function () {
    alert('اهلا وسهلا بكم في شات عشقتك ❤️ سجل عضوية تحصل على 5000 لايك وزخرفة :: طريقة التسجيل اضغط على خيار (تسجيل) اكتب (اكتب اسمك المستعار + كلمة المرور ) وبعدها اضغط دخول')
});
