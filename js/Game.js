const _0x4be6f4=_0x2fd7;function _0x2fd7(_0x5dfaee,_0x5bbfcc){const _0x2158ec=_0x2158();return _0x2fd7=function(_0x2fd791,_0xa3ec87){_0x2fd791=_0x2fd791-0xbb;let _0x4c3501=_0x2158ec[_0x2fd791];return _0x4c3501;},_0x2fd7(_0x5dfaee,_0x5bbfcc);}function _0x2158(){const _0x14fdad=['setupKeyboard','none','endGame','WIN','#help-overlay','2086812ozLjHk','showHint','game_matix','buffastate','.game-tile','ENT','showHelpOverlay','add','round','forEach','querySelector','33VKRNOc','\x20guesses.\x20How\x20is\x20your\x20Buffalo\x20Sports\x20knowledge?\x20Try\x20and\x20beat\x20me!\x20www.buffale.com','games_played','lcldb','#win-percentage','#guess-brkdwn-4','querySelectorAll','length','checkWord','ACTIVE','236744eFcwiJ','current_streak','#game-board','handleKeyPress','buffastatus','game_status','click','[data-letter=\x22','1500','currentGuess','allGuesses','1dpkcau','deleteChar','#games_played','updateStats','#messages','current_row','unwindActiveGame','from_cache_complete','letter-border','correct-letter','#guess-brkdwn-fail','statekey','#copy-content','key-default','Bills\x20in\x20the\x2080s','4156980mZxPQp','#game-keyboard','flashAlertNotice','remove','setupGameboard','223012cXxvcu','COMPLETE','nope-letter','wordOfDay','button','.word-row','populateStatsOverlay','block','guess_dist','addEventListener','152186zKaBOC','statskey','Buffale','buffastamp','display','1166925QLJMzW','#guess-brkdwn-3','innerHTML','push','style','game_hint','#stats-overlay','max_streak','contains-letter','init','#guess-brkdwn-1','current_col','#max_streak','statuskey','#alerts','nope-key-letter','data-letter','fail','setItem','I\x20got\x20today\x27s\x20Buffale\x20in\x20','18LdTuNY','alert_box','getItem','moore','classList','stampkey','10317439QXwXDn','letterAnimation','from_cache','LOST','1000','#current_streak','games_won','showStatsOverlay','133xhfLvx'];_0x2158=function(){return _0x14fdad;};return _0x2158();}(function(_0x376d7f,_0x407b52){const _0x2d0925=_0x2fd7,_0x58871d=_0x376d7f();while(!![]){try{const _0x4942af=-parseInt(_0x2d0925(0x100))/0x1*(parseInt(_0x2d0925(0x11e))/0x2)+-parseInt(_0x2d0925(0xeb))/0x3*(-parseInt(_0x2d0925(0x114))/0x4)+-parseInt(_0x2d0925(0x123))/0x5*(-parseInt(_0x2d0925(0xcc))/0x6)+-parseInt(_0x2d0925(0xda))/0x7*(parseInt(_0x2d0925(0xf5))/0x8)+parseInt(_0x2d0925(0xe0))/0x9+parseInt(_0x2d0925(0x10f))/0xa+-parseInt(_0x2d0925(0xd2))/0xb;if(_0x4942af===_0x407b52)break;else _0x58871d['push'](_0x58871d['shift']());}catch(_0x5a1189){_0x58871d['push'](_0x58871d['shift']());}}}(_0x2158,0x5deb7));export default class Game{constructor(){const _0x312a80=_0x2fd7,_0xea2472=document[_0x312a80(0xea)](_0x312a80(0x110));this[_0x312a80(0xdb)](_0xea2472),this[_0x312a80(0xe2)]=this[_0x312a80(0x113)](document['querySelector'](_0x312a80(0xf7))),this[_0x312a80(0x105)]=0x0,this['current_col']=0x0,this[_0x312a80(0xfe)]='',this[_0x312a80(0xfa)]='',this[_0x312a80(0xff)]=[],this[_0x312a80(0x117)]=_0x312a80(0xcf),this[_0x312a80(0xbd)]=_0x312a80(0x10e),this['alert_box']=document['querySelector'](_0x312a80(0xc6)),this[_0x312a80(0xee)]=localforage['createInstance']({'name':_0x312a80(0x120),'storeName':'stateandstats'});;this[_0x312a80(0x10b)]=_0x312a80(0xe3),this['statuskey']=_0x312a80(0xf9),this['statskey']='buffastats',this[_0x312a80(0xd1)]=_0x312a80(0x121),this['from_cache_complete']=![];let _0x5a2a94=0x78,_0x47b9e6=this;_0x47b9e6[_0x312a80(0xee)][_0x312a80(0xce)](_0x47b9e6[_0x312a80(0xd1)],function(_0x3f4873,_0x129d64){const _0x24e770=_0x312a80;_0x5a2a94==_0x129d64?_0x47b9e6[_0x24e770(0xee)][_0x24e770(0xce)](_0x47b9e6['statuskey'],function(_0x5cf38f,_0x462b77){const _0x6f59d6=_0x24e770;_0x47b9e6[_0x6f59d6(0xfa)]=_0x462b77,_0x47b9e6[_0x6f59d6(0xd4)]=!![],(_0x462b77=='ACTIVE'||_0x462b77==_0x6f59d6(0x115))&&(_0x462b77==_0x6f59d6(0x115)&&(_0x47b9e6['from_cache_complete']=!![]),_0x47b9e6[_0x6f59d6(0x106)]());}):(_0x47b9e6[_0x24e770(0xee)][_0x24e770(0xca)](_0x47b9e6[_0x24e770(0xd1)],_0x5a2a94),_0x47b9e6['lcldb'][_0x24e770(0xca)](_0x47b9e6['statekey'],[]),_0x47b9e6['game_status']=_0x24e770(0xf4),_0x47b9e6[_0x24e770(0xee)][_0x24e770(0xca)](_0x47b9e6['statuskey'],_0x24e770(0xf4)));}),this['init']();}[_0x4be6f4(0xc1)](){const _0x423a2e=_0x4be6f4,_0x22a12d=this;this[_0x423a2e(0xee)][_0x423a2e(0xce)](_0x22a12d['statskey'],function(_0x559c55,_0x21b2dd){const _0x2bafa6=_0x423a2e;!_0x21b2dd&&(_0x21b2dd={}),_0x22a12d[_0x2bafa6(0xed)]=_0x21b2dd[_0x2bafa6(0xed)]||0x0,_0x22a12d[_0x2bafa6(0xd8)]=_0x21b2dd[_0x2bafa6(0xd8)]||0x0,_0x22a12d['current_streak']=_0x21b2dd['current_streak']||0x0,_0x22a12d[_0x2bafa6(0xbf)]=_0x21b2dd[_0x2bafa6(0xbf)]||0x0,_0x22a12d[_0x2bafa6(0x11c)]=_0x21b2dd[_0x2bafa6(0x11c)]||[],_0x22a12d[_0x2bafa6(0x11a)](),_0x22a12d[_0x2bafa6(0xed)]==0x0&&_0x22a12d['showHelpOverlay']();});}['unwindActiveGame'](){const _0x16cd52=_0x4be6f4;self=this,this[_0x16cd52(0xee)][_0x16cd52(0xce)](this['statekey'],function(_0x17c778,_0x4c51b5){const _0x5800d4=_0x16cd52;if(_0x4c51b5[_0x5800d4(0xf2)]>0x0)for(var _0x4099b5=0x0;_0x4099b5<_0x4c51b5[_0x5800d4(0xf2)];_0x4099b5++){[..._0x4c51b5[_0x4099b5]][_0x5800d4(0xe9)](_0x4b050c=>self['handleKeyPress'](_0x4b050c)),self[_0x5800d4(0xf3)]();}});}[_0x4be6f4(0xf8)](_0x4fc0a2){const _0x1b8348=_0x4be6f4;if(_0x4fc0a2==_0x1b8348(0xe5)){this['checkWord']();return;}if(_0x4fc0a2=='DEL'){this[_0x1b8348(0x101)]();return;}this['game_matix'][this[_0x1b8348(0x105)]]['length']>=this[_0x1b8348(0xc3)]+0x1&&(this[_0x1b8348(0xe2)][this[_0x1b8348(0x105)]][this['current_col']][_0x1b8348(0x125)]=_0x4fc0a2,this['game_matix'][this['current_row']][this[_0x1b8348(0xc3)]][_0x1b8348(0xd0)]['add'](_0x1b8348(0x108)),this['current_col']++);}['deleteChar'](){const _0x342977=_0x4be6f4;this[_0x342977(0xc3)]>0x0&&(this['current_col']--,this[_0x342977(0xe2)][this[_0x342977(0x105)]][this[_0x342977(0xc3)]][_0x342977(0xd0)][_0x342977(0x112)]('letter-border'),this['game_matix'][this[_0x342977(0x105)]][this[_0x342977(0xc3)]][_0x342977(0x125)]='');}[_0x4be6f4(0x111)](_0x1f368f){const _0x22868b=_0x4be6f4;this[_0x22868b(0xcd)][_0x22868b(0x125)]=_0x1f368f,this[_0x22868b(0xcd)][_0x22868b(0xbc)][_0x22868b(0x122)]=_0x22868b(0x11b),setTimeout(()=>{const _0x54cce7=_0x22868b;this[_0x54cce7(0xcd)][_0x54cce7(0xbc)]['display']='none';},_0x22868b(0xfd));}['showHint'](){const _0x52d82e=_0x4be6f4,_0x48f076=document['querySelector']('#hint-btn');_0x48f076['style'][_0x52d82e(0x122)]=_0x52d82e(0x11b);let _0x53e74e=this;_0x48f076[_0x52d82e(0x11d)](_0x52d82e(0xfb),function(_0x106a64){const _0x2ecdff=_0x52d82e;_0x53e74e['flashAlertNotice'](_0x53e74e[_0x2ecdff(0xbd)]);});}[_0x4be6f4(0xf3)](){const _0x19c694=_0x4be6f4,_0xd42d8e=this[_0x19c694(0xe2)][this[_0x19c694(0x105)]];if(this['current_col']<0x5){this['flashAlertNotice']('Not\x20enough\x20letters');return;}let _0x219418=0x0;this[_0x19c694(0xfe)]='';for(var _0x35ce41=0x0;_0x35ce41<_0xd42d8e[_0x19c694(0xf2)];_0x35ce41++){const _0x387ee0=document['querySelector'](_0x19c694(0xfc)+_0xd42d8e[_0x35ce41]['innerHTML']+'\x22]');this[_0x19c694(0xfe)]+=_0xd42d8e[_0x35ce41][_0x19c694(0x125)],_0xd42d8e[_0x35ce41]['classList'][_0x19c694(0x112)]('letter-border');if(_0xd42d8e[_0x35ce41][_0x19c694(0x125)]==this[_0x19c694(0x117)][_0x35ce41])_0x387ee0['classList'][_0x19c694(0x112)]('key-default'),_0x387ee0[_0x19c694(0xd0)]['add']('correct-key-letter'),_0xd42d8e[_0x35ce41]['classList'][_0x19c694(0xe7)](_0x19c694(0x109)),_0xd42d8e[_0x35ce41]['classList'][_0x19c694(0xe7)](_0x19c694(0xd3)),_0x219418++;else this[_0x19c694(0x117)]['includes'](_0xd42d8e[_0x35ce41]['innerHTML'])?(_0x387ee0[_0x19c694(0xd0)][_0x19c694(0x112)](_0x19c694(0x10d)),_0x387ee0[_0x19c694(0xd0)][_0x19c694(0xe7)](_0x19c694(0xc0)),_0xd42d8e[_0x35ce41]['classList'][_0x19c694(0xe7)](_0x19c694(0xc0))):(_0x387ee0[_0x19c694(0xd0)]['remove'](_0x19c694(0x10d)),_0x387ee0['classList'][_0x19c694(0xe7)](_0x19c694(0xc7)),_0xd42d8e[_0x35ce41][_0x19c694(0xd0)][_0x19c694(0xe7)](_0x19c694(0x116)));}this[_0x19c694(0x105)]++,this['current_col']=0x0,this['allGuesses']['push'](this[_0x19c694(0xfe)]),this[_0x19c694(0xee)][_0x19c694(0xca)](this[_0x19c694(0x10b)],this[_0x19c694(0xff)]),_0x219418==0x5?(document[_0x19c694(0xea)]('#messages')[_0x19c694(0x125)]='',document[_0x19c694(0xea)](_0x19c694(0x110))[_0x19c694(0xbc)][_0x19c694(0x122)]=_0x19c694(0xdc),this[_0x19c694(0xfa)]!=_0x19c694(0x115)&&(this[_0x19c694(0xfa)]=_0x19c694(0xde)),this[_0x19c694(0xdd)]()):this['game_status']=_0x19c694(0xf4),this[_0x19c694(0x105)]>=0x3&&this[_0x19c694(0xe1)](),this[_0x19c694(0x105)]>=0x5&&_0x219418!=0x5&&(this[_0x19c694(0xfa)]!='COMPLETE'&&(this['game_status']=_0x19c694(0xd5)),this['lcldb']['setItem'](this[_0x19c694(0xc5)],this[_0x19c694(0xfa)]),this[_0x19c694(0xdd)](),document[_0x19c694(0xea)](_0x19c694(0x104))[_0x19c694(0x125)]=this[_0x19c694(0x117)]['toUpperCase'](),document[_0x19c694(0xea)](_0x19c694(0x110))[_0x19c694(0xbc)][_0x19c694(0x122)]=_0x19c694(0xdc)),this[_0x19c694(0xee)][_0x19c694(0xca)](this[_0x19c694(0xc5)],this[_0x19c694(0xfa)]);}['endGame'](){const _0x1aca52=_0x4be6f4;!this[_0x1aca52(0x107)]&&this[_0x1aca52(0x103)]();this[_0x1aca52(0x11a)](),this[_0x1aca52(0xee)][_0x1aca52(0xca)](this[_0x1aca52(0xc5)],_0x1aca52(0x115)),this['game_status']=_0x1aca52(0x115);let _0x232365=this;setTimeout(()=>{const _0x123d61=_0x1aca52;_0x232365[_0x123d61(0xd9)]();},_0x1aca52(0xd6));}[_0x4be6f4(0xe6)](){const _0x2be231=_0x4be6f4,_0x19a59b=document[_0x2be231(0xea)](_0x2be231(0xdf));_0x19a59b[_0x2be231(0xbc)][_0x2be231(0x122)]=_0x2be231(0x11b);}[_0x4be6f4(0xd9)](){const _0x22bd61=_0x4be6f4,_0x830ca2=document[_0x22bd61(0xea)](_0x22bd61(0xbe));_0x830ca2['style'][_0x22bd61(0x122)]=_0x22bd61(0x11b);}['populateStatsOverlay'](){const _0xd55118=_0x4be6f4,_0x5643f9=document[_0xd55118(0xea)](_0xd55118(0xbe));(this['game_status']==_0xd55118(0x115)||this['game_status']==_0xd55118(0xd5))&&(document[_0xd55118(0xea)]('#modal-messages')['innerHTML']=this[_0xd55118(0x117)]),this['games_played']>0x0&&(document[_0xd55118(0xea)](_0xd55118(0xef))[_0xd55118(0x125)]=Math[_0xd55118(0xe8)](this['games_won']/this['games_played']*0x64)+'%\x20Wins'),document[_0xd55118(0xea)](_0xd55118(0x102))[_0xd55118(0x125)]=this[_0xd55118(0xed)],document[_0xd55118(0xea)]('#games_won')['innerHTML']=this[_0xd55118(0xd8)],document['querySelector'](_0xd55118(0xd7))['innerHTML']=this[_0xd55118(0xf6)],document['querySelector'](_0xd55118(0xc4))[_0xd55118(0x125)]=this[_0xd55118(0xbf)],document[_0xd55118(0xea)](_0xd55118(0xc2))[_0xd55118(0x125)]=this[_0xd55118(0x11c)][0x1]||0x0,document[_0xd55118(0xea)]('#guess-brkdwn-2')['innerHTML']=this[_0xd55118(0x11c)][0x2]||0x0,document[_0xd55118(0xea)](_0xd55118(0x124))[_0xd55118(0x125)]=this[_0xd55118(0x11c)][0x3]||0x0,document[_0xd55118(0xea)](_0xd55118(0xf0))['innerHTML']=this['guess_dist'][0x4]||0x0,document[_0xd55118(0xea)]('#guess-brkdwn-5')['innerHTML']=this['guess_dist'][0x5]||0x0,document[_0xd55118(0xea)](_0xd55118(0x10a))[_0xd55118(0x125)]=this['guess_dist'][_0xd55118(0xc9)]||0x0,this[_0xd55118(0xfa)]==_0xd55118(0xde)&&(document['querySelector'](_0xd55118(0x10c))['innerHTML']=_0xd55118(0xcb)+this[_0xd55118(0xff)][_0xd55118(0xf2)]+_0xd55118(0xec));}['updateStats'](){const _0x39707b=_0x4be6f4;console['log'](this[_0x39707b(0xfa)]);if(this['game_status']==_0x39707b(0x115))return;console['log']('UPDATING\x20STATS');const _0x388a30={};this[_0x39707b(0xfa)]==_0x39707b(0xde)?(this[_0x39707b(0xd8)]+=0x1,this[_0x39707b(0xf6)]+=0x1,_0x388a30[_0x39707b(0xf6)]=this[_0x39707b(0xf6)],this[_0x39707b(0xf6)]>this[_0x39707b(0xbf)]&&(this[_0x39707b(0xbf)]=this[_0x39707b(0xf6)]),this[_0x39707b(0x11c)][this['current_row']]?this[_0x39707b(0x11c)][this['current_row']]+=0x1:this[_0x39707b(0x11c)][this[_0x39707b(0x105)]]=0x1):(this['guess_dist'][_0x39707b(0xc9)]?this[_0x39707b(0x11c)]['fail']+=0x1:this[_0x39707b(0x11c)][_0x39707b(0xc9)]=0x1,_0x388a30[_0x39707b(0xf6)]=0x0,this[_0x39707b(0xf6)]=0x0),_0x388a30[_0x39707b(0xd8)]=this[_0x39707b(0xd8)],_0x388a30[_0x39707b(0xbf)]=this[_0x39707b(0xbf)],_0x388a30['guess_dist']=this[_0x39707b(0x11c)],this['games_played']+=0x1,_0x388a30[_0x39707b(0xed)]=this[_0x39707b(0xed)],this['lcldb'][_0x39707b(0xca)](this[_0x39707b(0x11f)],_0x388a30);}[_0x4be6f4(0x113)](_0x4f2c61){const _0x5b108f=_0x4be6f4,_0x31ffa5=[],_0x4a0e3f=_0x4f2c61[_0x5b108f(0xf1)](_0x5b108f(0x119));return _0x4a0e3f[_0x5b108f(0xe9)](_0x32da9b=>{const _0x36677f=_0x5b108f;let _0x5068ed=[];_0x32da9b[_0x36677f(0xf1)](_0x36677f(0xe4))['forEach'](_0x59a598=>{_0x5068ed['push'](_0x59a598);}),_0x31ffa5[_0x36677f(0xbb)](_0x5068ed);}),_0x31ffa5;}[_0x4be6f4(0xdb)](_0x2d050f){const _0x818601=_0x4be6f4,_0x41e022=_0x2d050f[_0x818601(0xf1)](_0x818601(0x118)),_0x10f9e3=this;_0x41e022[_0x818601(0xe9)](function(_0x14b55e,_0x5d2af4){const _0x358660=_0x818601;_0x14b55e[_0x358660(0x11d)](_0x358660(0xfb),_0x5d734c=>{const _0x4c29a9=_0x358660;_0x10f9e3[_0x4c29a9(0xf8)](_0x5d734c['target']['getAttribute'](_0x4c29a9(0xc8)));});});}}