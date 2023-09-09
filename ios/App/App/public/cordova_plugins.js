
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-youtube-video-player.YoutubeVideoPlayer",
          "file": "plugins/cordova-plugin-youtube-video-player/plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/www/YoutubeVideoPlayer.js",
          "pluginId": "cordova-plugin-youtube-video-player",
        "clobbers": [
          "YoutubeVideoPlayer"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-youtube-video-player": "2.4.0"
    };
    // BOTTOM OF METADATA
    });
    