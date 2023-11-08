
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>
	Simplex Infrastructures Ltd
</title><link href="css/customstyle.css" rel="stylesheet" type="text/css" /><link rel="stylesheet" type="text/css" href="css/MGWeb.css" /><link rel="stylesheet" type="text/css" href="lib/jquery.ad-gallery.css" /><link rel="icon" type="image/ico" href="images/simplex.jpg" />
<style type="text/css">
 .award-img{margin:0px 55px 0 0;padding:0px;top:455px;right:0px;float:right;display:block;position:absolute; z-index:1000}
</style>
<!--[if IE 8]>
<style type="text/css">
.award-img{margin:0px 55px 0 0;padding:0px;top:460px;right:0px;float:right;display:block;position:absolute; z-index:1000}
</style>
<![endif]-->
<script type="text/javascript" src="lib/jquery.min.js"></script>

<script type="text/javascript" src="lib/jquery.ad-gallery.js"></script>
<script type='text/javascript' src='js/camera.min.js'></script> 
<script type='text/javascript' src='js/jquery.easing.1.3.js'></script> 
<script type="text/javascript">
  $(function() {
    $('img.image1').data('ad-desc', 'Whoa! This description is set through elm.data("ad-desc") instead of using the longdesc attribute.<br>And it contains <strong>H</strong>ow <strong>T</strong>o <strong>M</strong>eet <strong>L</strong>adies... <em>What?</em> That aint what HTML stands for? Man...');
    $('img.image1').data('ad-title', 'Title through $.data');
    $('img.image4').data('ad-desc', 'This image is wider than the wrapper, so it has been scaled down');
    $('img.image5').data('ad-desc', 'This image is higher than the wrapper, so it has been scaled down');
    var galleries = $('.ad-gallery').adGallery();
     
    $('#switch-effect').change(
      function() {
        galleries[0].settings.effect = $(this).val();
        return false;
      }
    );
    $('#toggle-slideshow').click(
      function() {
        galleries[0].slideshow.toggle();
        return false;
      }
    );
    $('#toggle-description').click(
      function() {
        if(!galleries[0].settings.description_wrapper) {
          galleries[0].settings.description_wrapper = $('#descriptions');
        } else {
          galleries[0].settings.description_wrapper = false;
        }
        return false;
      }
    );
  });
</script>

<style type="text/css">
        h2
        {
            margin-top: 1.2em;
            margin-bottom: 0;
            padding: 0;
            border-bottom: 1px dotted #dedede;
        }
        h3
        {
            margin-top: 1.2em;
            margin-bottom: 0;
            padding: 0;
        }
        .example
        {
            border: 1px solid #CCC;
            background: #f2f2f2;
            padding: 10px;
        }
        ul
        {
            list-style-image: url(list-style.gif);
        }
        pre
        {
            font-family: "Lucida Console" , "Courier New" , Verdana;
            border: 1px solid #CCC;
            background: #f2f2f2;
            padding: 10px;
        }
        code
        {
            font-family: "Lucida Console" , "Courier New" , Verdana;
            margin: 0;
            padding: 0;
        }
        #gallery
        {
            /* padding: 30px;
    background: #e1eef5;*/
        }
        #descriptions
        {
            position: relative;
            height: 50px;
            background: #EEE;
            margin-top: 10px;
            width: 1250px;
            padding: 10px;
            overflow: hidden;
        }
        #descriptions .ad-image-description
        {
            position: absolute;
        }
        #descriptions .ad-image-description .ad-description-title
        {
            display: block;
        }
        h2 a
        {
            margin-top: 1.2em;
            margin-bottom: 0;
            padding: 0;
            color: White;
            text-decoration: none;
        }
</style>
    <!--<link rel="stylesheet" type="text/css" href="lib/mystyle.css" />-->
<style type="text/css">
	.Menu1_0 { background-color:white;visibility:hidden;display:none;position:absolute;left:0px;top:0px; }
	.Menu1_1 { color:White;font-family:Calibri,Arial;font-size:16px;text-decoration:none; }
	.Menu1_2 { color:White;font-family:Calibri,Arial;font-size:16px; }
	.Menu1_3 { border-style:none; }
	.Menu1_4 {  }
	.Menu1_5 {  }
	.Menu1_6 { border-style:none; }
	.Menu1_7 {  }
	.Menu1_8 { border-style:none; }
	.Menu1_9 {  }
	.Menu1_10 { border-style:none; }
	.Menu1_11 {  }

</style></head>
<body>
    <form name="form1" method="post" action="Default.aspx" id="form1">
<div>
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="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" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['form1'];
if (!theForm) {
    theForm = document.form1;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="/WebResource.axd?d=CzcIIexta95U6sLXVi6l1-w6VNmANDX8uWjuecI0K_zv_nWKs7EJPPZO-ZbLhkchD0v1APITiziuuvmb71pse2Kaehc1&amp;t=638237546920270964" type="text/javascript"></script>


<script src="/WebResource.axd?d=4p76cIZVTscMm0PLYBiyVHSSGnVxckLP5bpwmwvDYFZwZkSN9R9MlQFOOqosX8dJPrny8si4ql4CQ4DOtpkJCwqm32Q1&amp;t=638237546920270964" type="text/javascript"></script>
<div>

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="CA0B0334" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEWAwLqp//GAwKZ7YzdCgL5zb65CxZrF8Gbk/vGB0/3ALt2xF/nEZiy" />
</div>
    <div>
        <div class="wrapper">
            <div class="header-max">
                <div class="header-min">
                    <div class="logo">
                        <a href="Default.aspx">
                            <img src="images/simplex-logo.png" alt="Simplex Infrastructures ltd" border="0" /></a></div>
                    <!--logo ends-->
                    <div class="header-right-container">
                        <div class="top">
                            <div style="width: auto; height: auto; float: right">
                            <div class="search-box">
                                	<div id="google_translate_element"></div><script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'de,en,es,hi,ja,ru,zh-CN,zh-TW', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
</script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> 

                                </div>
                                <div class="quicknavigation">
                                    <ul>
                                        <li><a class="special" href="Page.aspx?mid=2051">Rental Services</a></li>
										<li><a href="Page.aspx?mid=41">Media</a></li>
                                        <li><a href="Page.aspx?mid=39">Careers</a></li>
                                    </ul>
                                </div>
                                <div class="search-box">
                                    <div style="float: left;">
                                        <input name="txtSearch" type="text" onchange="javascript:setTimeout('__doPostBack(\'txtSearch\',\'\')', 0)" onkeypress="if (WebForm_TextBoxKeyHandler(event) == false) return false;" id="txtSearch" class="search-bg" class="search-fild" /></div>
                                    <div style="float: left;">
                                        <input type="submit" name="btnFind" value="" id="btnFind" class="search-submitbtn" />
                                        
                                    </div>
                                    <!--quicknavigation ends-->
                                </div>
                                </div>
                            <!--top ends-->
                        </div>
                        <div class="bottom">
                            <div id="navigation">
                                
                                <a href="#Menu1_SkipLink"><img alt="Skip Navigation Links" src="/WebResource.axd?d=pQdCeAHL7NolxuRHzIBFJ3ZjawN6fW28QlZP6jMI9mfbbvWbIG-OrB6ZMu8DnF3_0aRDNsXhtZjhSjibI2cjj-b1Sbk1&amp;t=638237546920270964" width="0" height="0" style="border-width:0px;" /></a><table id="Menu1" class="menu Menu1_2" Font-Weight="bold" cellpadding="0" cellspacing="0" border="0">
	<tr>
		<td onmouseover="Menu_HoverStatic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n0"><table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr>
				<td style="white-space:nowrap;"><a class="Menu1_1" href="Default.aspx?1">Home</a></td>
			</tr>
		</table></td><td style="width:3px;"></td><td onmouseover="Menu_HoverStatic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n1"><table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr>
				<td style="white-space:nowrap;"><a class="Menu1_1" href="#" style="cursor:text;">About Us</a></td>
			</tr>
		</table></td><td style="width:3px;"></td><td onmouseover="Menu_HoverStatic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n2"><table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr>
				<td style="white-space:nowrap;"><a class="Menu1_1" href="#" style="cursor:text;">Business Segments</a></td>
			</tr>
		</table></td><td style="width:3px;"></td><td onmouseover="Menu_HoverStatic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n3"><table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr>
				<td style="white-space:nowrap;"><a class="Menu1_1" href="Page.aspx?mid=4">Projects</a></td>
			</tr>
		</table></td><td style="width:3px;"></td><td onmouseover="Menu_HoverStatic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n4"><table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr>
				<td style="white-space:nowrap;"><a class="Menu1_1" href="#" style="cursor:text;">Investor</a></td>
			</tr>
		</table></td><td style="width:3px;"></td><td onmouseover="Menu_HoverStatic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n5"><table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr>
				<td style="white-space:nowrap;"><a class="Menu1_1" href="Page.aspx?mid=2051">Rental Services</a></td>
			</tr>
		</table></td><td style="width:3px;"></td><td onmouseover="Menu_HoverStatic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n6"><table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr>
				<td style="white-space:nowrap;"><a class="Menu1_1" href="Page.aspx?mid=6">Contact Us</a></td>
			</tr>
		</table></td>
	</tr>
</table><div id="Menu1n1Items" class="Menu1_0 dynamicMenu Menu1_5">
	<table border="0" cellpadding="0" cellspacing="0">
		<tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n7">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=7" style="border-style:none;font-size:1em;">Profile</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n8">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=9" style="border-style:none;font-size:1em;">Board of Directors</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n9">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=49" style="border-style:none;font-size:1em;">Committee of the Board</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n10">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=2052" style="border-style:none;font-size:1em;">Certification</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n11">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=11" style="border-style:none;font-size:1em;">Corporate Policies</a></td>
				</tr>
			</table></td>
		</tr>
	</table><div class="dynamicMenuItem Menu1_4 Menu1_0" id="Menu1n1ItemsUp" onmouseover="PopOut_Up(this)" onmouseout="PopOut_Stop(this)" style="text-align:center;">
		<img src="/WebResource.axd?d=mpspBXh7UMTbs8BIUvFULurYKhFMEeNY-_0yLUyGd30yeJq0UxWOVVJNGcyqzjrNRjelrcy0NP606Cm6FqtHxVHRivo1&amp;t=638237546920270964" alt="Scroll up" />
	</div><div class="dynamicMenuItem Menu1_4 Menu1_0" id="Menu1n1ItemsDn" onmouseover="PopOut_Down(this)" onmouseout="PopOut_Stop(this)" style="text-align:center;">
		<img src="/WebResource.axd?d=YlYsaZ-4mn3X4709oABVa2D8yWaSwJO3cJ3xi282BpLOJGvl07WZZZkTSEjlXbGpUuIS2-kZWTB_hN6CTPkWJ5K6w1Q1&amp;t=638237546920270964" alt="Scroll down" />
	</div>
</div><div id="Menu1n2Items" class="Menu1_0 dynamicMenu Menu1_5">
	<table border="0" cellpadding="0" cellspacing="0">
		<tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n12">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=18" style="border-style:none;font-size:1em;">Roads, Railways & Bridges</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n13">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=20" style="border-style:none;font-size:1em;">Buildings</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n14">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=16" style="border-style:none;font-size:1em;">Industry</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n15">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=14" style="border-style:none;font-size:1em;">Power & Transmission</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n16">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=15" style="border-style:none;font-size:1em;">Marine</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n17">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=12" style="border-style:none;font-size:1em;">Ground Engineering</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n18">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=19" style="border-style:none;font-size:1em;">Urban Infra</a></td>
				</tr>
			</table></td>
		</tr>
	</table><div class="dynamicMenuItem Menu1_4 Menu1_0" id="Menu1n2ItemsUp" onmouseover="PopOut_Up(this)" onmouseout="PopOut_Stop(this)" style="text-align:center;">
		<img src="/WebResource.axd?d=mpspBXh7UMTbs8BIUvFULurYKhFMEeNY-_0yLUyGd30yeJq0UxWOVVJNGcyqzjrNRjelrcy0NP606Cm6FqtHxVHRivo1&amp;t=638237546920270964" alt="Scroll up" />
	</div><div class="dynamicMenuItem Menu1_4 Menu1_0" id="Menu1n2ItemsDn" onmouseover="PopOut_Down(this)" onmouseout="PopOut_Stop(this)" style="text-align:center;">
		<img src="/WebResource.axd?d=YlYsaZ-4mn3X4709oABVa2D8yWaSwJO3cJ3xi282BpLOJGvl07WZZZkTSEjlXbGpUuIS2-kZWTB_hN6CTPkWJ5K6w1Q1&amp;t=638237546920270964" alt="Scroll down" />
	</div>
</div><div id="Menu1n4Items" class="Menu1_0 dynamicMenu Menu1_5">
	<table border="0" cellpadding="0" cellspacing="0">
		<tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n19">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=13" style="border-style:none;font-size:1em;">Financials</a></td><td style="width:0;"><img src="images/right.gif" alt="Expand Financials" style="border-style:none;vertical-align:middle;" /></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n20">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=22" style="border-style:none;font-size:1em;">Corporate Governance</a></td><td style="width:0;"><img src="images/right.gif" alt="Expand Corporate Governance" style="border-style:none;vertical-align:middle;" /></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n21">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=21" style="border-style:none;font-size:1em;">Shareholding Patterns</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n22">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=43" style="border-style:none;font-size:1em;">Notices & Results</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n23">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=46" style="border-style:none;font-size:1em;">Policies</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n24">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=47" style="border-style:none;font-size:1em;">Unclaimed Dividend</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n25">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=48" style="border-style:none;font-size:1em;">Investor & Analyst</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n26">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=38" style="border-style:none;font-size:1em;">Grievance Redressal</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n27">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=51" style="border-style:none;font-size:1em;">Preliminary Placement Document</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n28">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=1051" style="border-style:none;font-size:1em;">Placement Document</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n29">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=2053" style="border-style:none;font-size:1em;">Private Placement 2022</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n30">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=2056" style="border-style:none;font-size:1em;">Disclosure under Regulation 46 and 62 of SEBI (LODR) Regulations</a></td>
				</tr>
			</table></td>
		</tr>
	</table><div class="dynamicMenuItem Menu1_4 Menu1_0" id="Menu1n4ItemsUp" onmouseover="PopOut_Up(this)" onmouseout="PopOut_Stop(this)" style="text-align:center;">
		<img src="/WebResource.axd?d=mpspBXh7UMTbs8BIUvFULurYKhFMEeNY-_0yLUyGd30yeJq0UxWOVVJNGcyqzjrNRjelrcy0NP606Cm6FqtHxVHRivo1&amp;t=638237546920270964" alt="Scroll up" />
	</div><div class="dynamicMenuItem Menu1_4 Menu1_0" id="Menu1n4ItemsDn" onmouseover="PopOut_Down(this)" onmouseout="PopOut_Stop(this)" style="text-align:center;">
		<img src="/WebResource.axd?d=YlYsaZ-4mn3X4709oABVa2D8yWaSwJO3cJ3xi282BpLOJGvl07WZZZkTSEjlXbGpUuIS2-kZWTB_hN6CTPkWJ5K6w1Q1&amp;t=638237546920270964" alt="Scroll down" />
	</div>
</div><div id="Menu1n19Items" class="Menu1_0 dynamicMenu Menu1_5">
	<table border="0" cellpadding="0" cellspacing="0">
		<tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n31">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=27" style="border-style:none;font-size:1em;">Annual Reports</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n32">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=37" style="border-style:none;font-size:1em;">Financial results</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n33">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=29" style="border-style:none;font-size:1em;">Corporate Presentation</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n34">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=31" style="border-style:none;font-size:1em;">Press Release</a></td>
				</tr>
			</table></td>
		</tr>
	</table><div class="dynamicMenuItem Menu1_4 Menu1_0" id="Menu1n19ItemsUp" onmouseover="PopOut_Up(this)" onmouseout="PopOut_Stop(this)" style="text-align:center;">
		<img src="/WebResource.axd?d=mpspBXh7UMTbs8BIUvFULurYKhFMEeNY-_0yLUyGd30yeJq0UxWOVVJNGcyqzjrNRjelrcy0NP606Cm6FqtHxVHRivo1&amp;t=638237546920270964" alt="Scroll up" />
	</div><div class="dynamicMenuItem Menu1_4 Menu1_0" id="Menu1n19ItemsDn" onmouseover="PopOut_Down(this)" onmouseout="PopOut_Stop(this)" style="text-align:center;">
		<img src="/WebResource.axd?d=YlYsaZ-4mn3X4709oABVa2D8yWaSwJO3cJ3xi282BpLOJGvl07WZZZkTSEjlXbGpUuIS2-kZWTB_hN6CTPkWJ5K6w1Q1&amp;t=638237546920270964" alt="Scroll down" />
	</div>
</div><div id="Menu1n20Items" class="Menu1_0 dynamicMenu Menu1_5">
	<table border="0" cellpadding="0" cellspacing="0">
		<tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n35">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=44" style="border-style:none;font-size:1em;">Compliance Report</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n36">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=50" style="border-style:none;font-size:1em;">Other Information</a></td>
				</tr>
			</table></td>
		</tr><tr onmouseover="Menu_HoverDynamic(this)" onmouseout="Menu_Unhover(this)" onkeyup="Menu_Key(event)" id="Menu1n37">
			<td><table class="dynamicMenuItem Menu1_4" cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td style="white-space:nowrap;width:100%;"><a class="Menu1_1 dynamicMenuItem Menu1_3" href="Page.aspx?mid=45" style="border-style:none;font-size:1em;">Directors</a></td>
				</tr>
			</table></td>
		</tr>
	</table><div class="dynamicMenuItem Menu1_4 Menu1_0" id="Menu1n20ItemsUp" onmouseover="PopOut_Up(this)" onmouseout="PopOut_Stop(this)" style="text-align:center;">
		<img src="/WebResource.axd?d=mpspBXh7UMTbs8BIUvFULurYKhFMEeNY-_0yLUyGd30yeJq0UxWOVVJNGcyqzjrNRjelrcy0NP606Cm6FqtHxVHRivo1&amp;t=638237546920270964" alt="Scroll up" />
	</div><div class="dynamicMenuItem Menu1_4 Menu1_0" id="Menu1n20ItemsDn" onmouseover="PopOut_Down(this)" onmouseout="PopOut_Stop(this)" style="text-align:center;">
		<img src="/WebResource.axd?d=YlYsaZ-4mn3X4709oABVa2D8yWaSwJO3cJ3xi282BpLOJGvl07WZZZkTSEjlXbGpUuIS2-kZWTB_hN6CTPkWJ5K6w1Q1&amp;t=638237546920270964" alt="Scroll down" />
	</div>
</div><a id="Menu1_SkipLink"></a>
                                
                                
                                
                            </div>
                        </div>
                        <!--bottom ends-->
                    </div>
                    <!--header-min ends-->
                </div>
                <!--header-max ends-->
            </div>
            <div class="banner-max">
                <div class="banner-min">
                    <div id="container">
                  
                        <div id="gallery" class="ad-gallery">
                            <div class="ad-image-wrapper">
                            </div>
                            <div class="ad-nav">
                                <div class="ad-thumb-bg">
                                </div>
                                <div class="ad-thumbs">
                                    <ul class="ad-thumb-list">
                                        
                                        <li><a href='HBanner/Roads, Railways & Bridges_Roads.jpg' style="text-decoration: none;">
                                            <img src='TitleImage/Roads, Railways & Bridges_Roads-b1.png' />
                                        </a></li>
                                        
                                        <li><a href='HBanner/Buildings_BLDGS.jpg' style="text-decoration: none;">
                                            <img src='TitleImage/Buildings_Buildings-b1.png' />
                                        </a></li>
                                        
                                        <li><a href='HBanner/Industrial_INDUSTRIAL.jpg' style="text-decoration: none;">
                                            <img src='TitleImage/Industry_Industrial-b1.png' />
                                        </a></li>
                                        
                                        <li><a href='HBanner/Power & Transmission_Power.jpg' style="text-decoration: none;">
                                            <img src='TitleImage/Power & Transmission_power-b1.png' />
                                        </a></li>
                                        
                                        <li><a href='HBanner/Marine_marine-new.jpg' style="text-decoration: none;">
                                            <img src='TitleImage/Marine_marine-b1.png' />
                                        </a></li>
                                        
                                        <li><a href='HBanner/Ground Engineering_Top-pic-Ground-eng.jpg' style="text-decoration: none;">
                                            <img src='TitleImage/Ground Engineering_ground-b1.png' />
                                        </a></li>
                                        
                                        <li><a href='HBanner/Urban Infra_Top-Urban.jpg' style="text-decoration: none;">
                                            <img src='TitleImage/Urban Infra_urban-b1.png' />
                                        </a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="middle-container">
                    <div class="middle-home-container">
                        <div class="about">
                            <h2>
                                <a href="page.aspx?mid=7">About Us</a></h2>
                            <div class="datacontainer">
                                <div style="width: 178px; height: auto; float: left">
                                    <div class="lefttext">
                                        <p>Simplex Infrastructures Ltd. is a diversified company established in 1924 and executing projects in several sectors like Transport, Energy &amp; Power, Mining, Buildings, Marine, Real Estate etc.</p>
                                        
                                    </div>
                                    <div class="readmore">
                                        <a href="page.aspx?mid=7">Read More</a></div>
                                </div>
                                <div class="home-image">
                                    <img src="images/about-simplex.jpg" width="145" height="121" alt="" /></div>
                            </div>
                        </div>
                        <!--about ends-->
                        <div class="segment">
                            <h2>
                                <a href="page.aspx?mid=18">Business Segments</a></h2>
                            <ul>
                                
                                <li>
                                    <a href="page.aspx?mid=18">Roads, Railways & Bridges</a></li>
                                
                                <li>
                                    <a href="page.aspx?mid=20">Buildings</a></li>
                                
                                <li>
                                    <a href="page.aspx?mid=16">Industry</a></li>
                                
                                <li>
                                    <a href="page.aspx?mid=14">Power & Transmission</a></li>
                                
                                <li>
                                    <a href="page.aspx?mid=15">Marine</a></li>
                                
                                <li>
                                    <a href="page.aspx?mid=12">Ground Engineering</a></li>
                                
                                <li>
                                    <a href="page.aspx?mid=19">Urban Infra</a></li>
                                
                            </ul>
                        </div>
                        <!--segment ends-->
                        <div class="ourprojects">
                            <h2>
                                <a href="page.aspx?mid=4">Projects</a></h2>
                            <div class="datacontainer">
                                
                                    <div class="home-image">
                                        <img src='TitleImage/Projects_Chennai Kathipara bridge Thumb.jpg' width="145" height="121"
                                            alt="" /></div>
                                    <div style="width: 178px; height: auto; float: left">
                                        <div class="lefttext">
                                            Simplex is privileged to have been associated with a number of prestigious projects in India & abroad.</div>
                                        
                                        <div class="readmore">
                                            <a href="page.aspx?mid=4">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="footer">
                                <div class="fmenu">
                                    <ul>
                                        
                                        <li><a href="Default.aspx">
                                            Home</a> </li>
                                        
                                        <li><a href="page.aspx?mid=7">
                                            About Us</a> </li>
                                        
                                        <li><a href="page.aspx?mid=18">
                                            Business Segments</a> </li>
                                        
                                        <li><a href='Page.aspx?mid=4'>
                                            Projects</a> </li>
                                        
                                        <li><a href="page.aspx?mid=27">
                                            Investor</a> </li>
                                        
                                        <li><a href='Page.aspx?mid=6'>
                                            Contact Us</a> </li>
                                        
                                        <li><a href='Page.aspx?mid=39'>
                                            Careers</a> </li>
                                        
                                        <li><a href='Page.aspx?mid=41'>
                                            Media</a> </li>
                                        
                                        <li><a href='Page.aspx?mid=2051'>
                                            Rental Services </a> </li>
                                        
                                        
                                    </ul>
                                </div>
                                <div class="copyrights">
                                    <div style="float: left">
                                        <p>© 2017, Simplex Infrastructures Ltd, All rights reserved</p>
                                    </div>
                                    <div style="float: right">
                                        <p>
                                            Powered By : <a href="http://www.dotsindia.com/" target="_blank">Dotsindia</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--middle-home-container ends-->
                    </div>
                    <!--middle-container ends-->
                </div>
                <!--wrapper ends-->
                <div class="award-img"><a href="http://www.simplexinfra.com/MediaLarge/Untitled.pdf" target="_blank" style="outline:0px;"><img src="images/Indias-gratest-brands-and-leaders.png" alt="" width="150" height="110" border="0" /></a></div>
            </div>
    

<script type="text/javascript">
//<![CDATA[
var Menu1_Data = new Object();
Menu1_Data.disappearAfter = 500;
Menu1_Data.horizontalOffset = 0;
Menu1_Data.verticalOffset = 0;
Menu1_Data.hoverClass = 'Menu1_11 dynamicMenuHover';
Menu1_Data.hoverHyperLinkClass = 'Menu1_10 dynamicMenuHover';
//]]>
</script>
</form>
</body>
</html>
