﻿function lists() {

	var username = "etmAYJB2BiImJl";
	var password = "LoUB35oYHeQ3";

	var channels = [
		{ ChannelName:"GLOBO CABUGI SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/872.m3u8" },
		{ ChannelName:"GLOBO NORDESTE HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/866.m3u8" },
		{ ChannelName:"GLOBO NORDESTE SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/868.m3u8" },
		{ ChannelName:"GLOBO RJ HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/859.m3u8" },
		{ ChannelName:"GLOBO RJ SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/861.m3u8" },
		{ ChannelName:"GLOBO SP HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/884.m3u8" },
		{ ChannelName:"GLOBO SP SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/885.m3u8" },
		{ ChannelName:"RECORD SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/92.m3u8" },
		{ ChannelName:"SBT HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/56.m3u8" },
		{ ChannelName:"SBT SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/114.m3u8" },
		{ ChannelName:"ANIMAL PLANET SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/945.m3u8" },
		{ ChannelName:"DISCOVERY CHANNEL HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/917.m3u8" },
		{ ChannelName:"DISCOVERY CHANNEL SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/916.m3u8" },
		{ ChannelName:"DISCOVERY CIVILIZATION SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/952.m3u8" },
		{ ChannelName:"DISCOVERY HOME & HEALTH SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/915.m3u8" },
		{ ChannelName:"DISCOVERY SCIENCE SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/951.m3u8" },
		{ ChannelName:"DISCOVERY THEATER SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/950.m3u8" },
		{ ChannelName:"DISCOVERY TURBO HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/913.m3u8" },
		{ ChannelName:"DISCOVERY TURBO SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/960.m3u8" },
		{ ChannelName:"DISCOVERY WORLD SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/949.m3u8" },
		{ ChannelName:"H2 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/840.m3u8" },
		{ ChannelName:"HISTORY SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/764.m3u8" },
		{ ChannelName:"ID SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/839.m3u8" },
		{ ChannelName:"NATGEO SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/824.m3u8" },
		{ ChannelName:"NATGEO WILD SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/825.m3u8" },
		{ ChannelName:"TLC SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/763.m3u8" },
		{ ChannelName:"BAND SPORTS SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/938.m3u8" },
		{ ChannelName:"COMBATE HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/921.m3u8" },
		{ ChannelName:"COMBATE SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/920.m3u8" },
		{ ChannelName:"ESPN HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/902.m3u8" },
		{ ChannelName:"ESPN SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/903.m3u8" },
		{ ChannelName:"ESPN 2 HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/900.m3u8" },
		{ ChannelName:"ESPN 2 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/901.m3u8" },
		{ ChannelName:"ESPN BRASIL HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/898.m3u8" },
		{ ChannelName:"ESPN BRASIL SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/899.m3u8" },
		{ ChannelName:"FOX SPORTS HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/887.m3u8" },
		{ ChannelName:"FOX SPORTS SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/888.m3u8" },
		{ ChannelName:"FOX SPORTS 2 HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/954.m3u8" },
		{ ChannelName:"FOX SPORTS 2 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/889.m3u8" },
		{ ChannelName:"PREMIERE CLUBE HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/805.m3u8" },
		{ ChannelName:"PREMIERE CLUBE SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/804.m3u8" },
		{ ChannelName:"PREMIERE 2 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/816.m3u8" },
		{ ChannelName:"PREMIERE 3 HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/814.m3u8" },
		{ ChannelName:"PREMIERE 3 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/815.m3u8" },
		{ ChannelName:"PREMIERE 4 HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/812.m3u8" },
		{ ChannelName:"PREMIERE 4 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/813.m3u8" },
		{ ChannelName:"PREMIERE 5 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/810.m3u8" },
		{ ChannelName:"PREMIERE 6 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/809.m3u8" },
		{ ChannelName:"PREMIERE 7 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/808.m3u8" },
		{ ChannelName:"PREMIERE 8 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/807.m3u8" },
		{ ChannelName:"SPORTV HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/778.m3u8" },
		{ ChannelName:"SPORTV SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/776.m3u8" },
		{ ChannelName:"SPORTV 2 HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/785.m3u8" },
		{ ChannelName:"SPORTV 2 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/784.m3u8" },
		{ ChannelName:"SPORTV 3 HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/782.m3u8" },
		{ ChannelName:"SPORTV 3 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/780.m3u8" },
		{ ChannelName:"A&E SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/947.m3u8" },
		{ ChannelName:"AMC SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/946.m3u8" },
		{ ChannelName:"AXN SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/943.m3u8" },
		{ ChannelName:"CINEMAX SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/924.m3u8" },
		{ ChannelName:"FOX HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/891.m3u8" },
		{ ChannelName:"FOX SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/892.m3u8" },
		{ ChannelName:"FOX LIFE SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/890.m3u8" },
		{ ChannelName:"FOX PREMIUM 1 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/956.m3u8" },
		{ ChannelName:"FOX PREMIUM 2 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/955.m3u8" },
		{ ChannelName:"FX SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/957.m3u8" },
		{ ChannelName:"HBO SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/842.m3u8" },
		{ ChannelName:"HBO 2 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/845.m3u8" },
		{ ChannelName:"HBO FAMILY SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/844.m3u8" },
		{ ChannelName:"HBO PLUS SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/843.m3u8" },
		{ ChannelName:"HBO SIGNATURE SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/841.m3u8" },
		{ ChannelName:"MAX SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/833.m3u8" },
		{ ChannelName:"MAX PRIME SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/834.m3u8" },
		{ ChannelName:"MAX UP SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/832.m3u8" },
		{ ChannelName:"MEGAPIX SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/831.m3u8" },
		{ ChannelName:"PARAMOUNT SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/958.m3u8" },
		{ ChannelName:"SONY SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/925.m3u8" },
		{ ChannelName:"SPACE SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/786.m3u8" },
		{ ChannelName:"STUDIO UNIVERSAL SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/775.m3u8" },
		{ ChannelName:"SYFY SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/959.m3u8" },
		{ ChannelName:"TCM HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/771.m3u8" },
		{ ChannelName:"TCM SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/771.m3u8" },
		{ ChannelName:"TELECINE ACTION SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/770.m3u8" },
		{ ChannelName:"TELECINE CULT SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/769.m3u8" },
		{ ChannelName:"TELECINE FUN SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/768.m3u8" },
		{ ChannelName:"TELECINE PIPOCA SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/767.m3u8" },
		{ ChannelName:"TELECINE PREMIUM SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/766.m3u8" },
		{ ChannelName:"TELECINE TOUCH SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/765.m3u8" },
		{ ChannelName:"TNT SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/762.m3u8" },
		{ ChannelName:"TNT SÉRIES HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/761.m3u8" },
		{ ChannelName:"TNT SÉRIES SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/760.m3u8" },
		{ ChannelName:"WARNER HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/750.m3u8" },
		{ ChannelName:"WARNER SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/749.m3u8" },
		{ ChannelName:"BABY TV SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/942.m3u8" },
		{ ChannelName:"BOOMERANG SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/932.m3u8" },
		{ ChannelName:"CARTOON NETWORK HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/931.m3u8" },
		{ ChannelName:"DISCOVERY KIDS SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/914.m3u8" },
		{ ChannelName:"DISNEY CHANNEL HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/912.m3u8" },
		{ ChannelName:"DISNEY CHANNEL SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/911.m3u8" },
		{ ChannelName:"DISNEY JUNIOR HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/910.m3u8" },
		{ ChannelName:"DISNEY JUNIOR SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/909.m3u8" },
		{ ChannelName:"DISNEY XD HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/908.m3u8" },
		{ ChannelName:"DISNEY XD SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/907.m3u8" },
		{ ChannelName:"GLOOB HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/850.m3u8" },
		{ ChannelName:"GLOOB SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/849.m3u8" },
		{ ChannelName:"GLOOBINHO HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/848.m3u8" },
		{ ChannelName:"NATGEO KIDS SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/826.m3u8" },
		{ ChannelName:"NICK JR SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/823.m3u8" },
		{ ChannelName:"NICKELODEON SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/822.m3u8" },
		{ ChannelName:"PLAYKIDS HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/817.m3u8" },
		{ ChannelName:"TOONCAST SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/759.m3u8" },
		{ ChannelName:"TV RA TIM BUM SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/757.m3u8" },
		{ ChannelName:"ARTE 1 SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/944.m3u8" },
		{ ChannelName:"BIS HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/934.m3u8" },
		{ ChannelName:"BIS SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/933.m3u8" },
		{ ChannelName:"CANAL OFF HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/820.m3u8" },
		{ ChannelName:"CANAL OFF SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/821.m3u8" },
		{ ChannelName:"COMEDY CENTRAL SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/919.m3u8" },
		{ ChannelName:"CURTA! SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/918.m3u8" },
		{ ChannelName:"FISH TV SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/894.m3u8" },
		{ ChannelName:"GNT HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/847.m3u8" },
		{ ChannelName:"GNT SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/846.m3u8" },
		{ ChannelName:"LIFETIME SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/837.m3u8" },
		{ ChannelName:"MAIS GLOBOSAT HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/836.m3u8" },
		{ ChannelName:"MAIS GLOBOSAT SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/835.m3u8" },
		{ ChannelName:"MTV SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/830.m3u8" },
		{ ChannelName:"MULTISHOW HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/829.m3u8" },
		{ ChannelName:"MULTISHOW SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/828.m3u8" },
		{ ChannelName:"VIVA HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/752.m3u8" },
		{ ChannelName:"VIVA SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/751.m3u8" },
		{ ChannelName:"BAND NEWS SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/941.m3u8" },
		{ ChannelName:"GLOBO NEWS HD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/869.m3u8" },
		{ ChannelName:"GLOBO NEWS SD", Url:"http://188.165.221.28:25461/live/" + username + "/" + password + "/870.m3u8" },
	];


	var ch = [];
	for(var i = 0; i < channels.length; i++){
		var var1 = '		<div class="channel" onclick="openChannel(this.querySelector(\'.play_channel img\').getAttribute(\'url\'))">\n';
		var1 += '			<div class="title_channel"><h3>'+channels[i].ChannelName+'</h3></div>\n';
		var1 += '			<div class="play_channel"><img src="./player.png" url="'+channels[i].Url+'" alt="click to play"/></div>\n';
		var1 += '		</div>\n';
		var1 += '	</div>\n';
		ch.push(var1);
	}

	document.querySelector('.channel_list').innerHTML = ch.join("\n");
}

function users() {
	var agent = "DemeterOnPlayer/1.0 (Linux;Android 9.0) DemeterOnPlayer/1.0.2";
	document.querySelector(".config").innerHTML = agent;
}

lists();
users();
