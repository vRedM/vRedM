game 'rdr3'
fx_version 'adamant'

rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

author 'dlaV'
description 'The vRedM Framework'
version '1.0.0'

client_scripts {
    'client/modules/player.js',
    'client/modules/test.lua'

}
server_scripts {
    'server/main.js'
} 

server_script '@oxmysql/lib/MySQL.lua'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/script.js'
}